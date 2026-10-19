import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import { test } from "node:test";
import vm from "node:vm";
import ts from "typescript";

const component = await readFile(
  new URL("../src/views/BatchDailyTasks.vue", import.meta.url),
  "utf8",
);
const script = component.match(/<script setup[^>]*>([\s\S]*?)<\/script>/)?.[1];
assert.ok(script, "BatchDailyTasks must contain a setup script");
const source = ts.createSourceFile(
  "BatchDailyTasks.js",
  script,
  ts.ScriptTarget.Latest,
  true,
);
const names = new Set([
  "waitForConnectionSlot",
  "releaseConnectionSlot",
  "ensureConnection",
  "startBatch",
]);
const declarations = source.statements
  .filter(
    (statement) =>
      ts.isVariableStatement(statement) &&
      statement.declarationList.declarations.some((declaration) =>
        names.has(declaration.name.getText(source)),
      ),
  )
  .map((statement) => statement.getText(source))
  .join("\n");

/** Run the component's actual batch orchestration with isolated transports and refs. */
function fixture({
  connected = true,
  connectionSucceeds = true,
  runError = null,
  incomplete = 0,
} = {}) {
  const logs = [];
  const state = { runs: 0, closed: 0, connected };
  const context = {
    selectedTokens: { value: ["account-a"] },
    tokens: {
      value: [{ id: "account-a", name: "Test account", token: "fixture" }],
    },
    tokenStatus: { value: {} },
    isRunning: { value: false },
    shouldStop: { value: false },
    currentRunningTokenId: { value: null },
    connectionQueue: { active: 1 },
    batchSettings: {
      maxActive: 2,
      reconnectDelay: 0,
      commandDelay: 0,
      taskDelay: 0,
    },
    addLog: (log) => logs.push(log),
    message: { info() {}, warning() {}, success() {} },
    setTimeout: (callback) => {
      callback();
    },
    waitForConnection: async () => {
      state.connected = connectionSucceeds;
      return connectionSucceeds;
    },
    tokenStore: {
      getWebSocketStatus: () =>
        state.connected ? "connected" : "disconnected",
      createWebSocketConnection() {},
      closeWebSocketConnection() {
        state.closed++;
        state.connected = false;
      },
      sendMessageWithPromise: async () => ({}),
    },
    DailyTaskRunner: class {
      async run() {
        state.runs++;
        if (runError) throw runError;
        return { incomplete };
      }
    },
  };
  vm.createContext(context);
  vm.runInContext(
    `${declarations}\nglobalThis.api = { startBatch, waitForConnectionSlot };`,
    context,
  );
  return { context, state, logs, ...context.api };
}

test("batch rate-limit failure executes once and preserves another caller's connection and slot", async () => {
  const f = fixture({ runError: new Error("200400 操作太快") });
  await f.startBatch();
  assert.equal(f.state.runs, 1);
  assert.equal(f.state.closed, 0);
  assert.equal(f.context.connectionQueue.active, 1);
  assert.equal(f.context.tokenStatus.value["account-a"], "failed");
  assert.equal(f.context.isRunning.value, false);
});

test("failed connection releases its slot once without releasing another account's slot", async () => {
  const f = fixture({ connected: false, connectionSucceeds: false });
  await f.startBatch();
  assert.equal(f.state.runs, 0);
  assert.equal(f.context.connectionQueue.active, 1);
  assert.equal(f.context.tokenStatus.value["account-a"], "failed");
  assert.equal(f.context.isRunning.value, false);
});

test("batch releases the new connection it owns and respects the runner's pending result", async () => {
  const f = fixture({ connected: false, incomplete: 2 });
  await f.startBatch();
  assert.equal(f.state.runs, 1);
  assert.equal(f.state.closed, 1);
  assert.equal(f.context.connectionQueue.active, 1);
  assert.equal(f.context.tokenStatus.value["account-a"], "pending");
});

test("stop while waiting for a connection slot does not acquire a slot", async () => {
  const f = fixture();
  f.context.connectionQueue.active = 2;
  f.context.shouldStop.value = true;
  await assert.rejects(
    f.waitForConnectionSlot(),
    (error) => error.interrupted === true,
  );
  assert.equal(f.context.connectionQueue.active, 2);
});
