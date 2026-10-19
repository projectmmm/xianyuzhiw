import assert from "node:assert/strict";
import test from "node:test";
import {
  getSkinTowerLevel,
  isSkinTowerCleared,
  isSkinTowerCompleted,
  loadSkinTowerInfo,
  resolveSkinTowerActId,
} from "../src/utils/skinTower.js";
import { loadModule } from "./helpers/loadModule.js";

const config = {
  ActMultiTowerShowConf: {
    1: { actId: 2606261 },
    2: { actId: 2610163 },
  },
};

test("skin tower activity ID comes from configuration, including suffixes other than 1", () => {
  assert.equal(resolveSkinTowerActId(config, new Date(2026, 5, 30)), 2606261);
  assert.equal(resolveSkinTowerActId(config, new Date(2026, 9, 19)), 2610163);
  assert.equal(resolveSkinTowerActId(config, new Date(2026, 9, 23)), null);
});

test("skin tower progress uses pass and actTowerLv even when old rewards disagree", () => {
  const data = {
    towerData: {
      1: { pass: false, actTowerLv: 1 },
      2: { pass: false, actTowerLv: 8 },
      3: { pass: true, actTowerLv: 8 },
      4: { pass: false, actTowerLv: 5 },
    },
    levelRewardMap: { 1008: true, 2008: true, 4008: true },
  };
  assert.equal(getSkinTowerLevel(data, 1), 1);
  assert.equal(getSkinTowerLevel(data, 4), 5);
  assert.equal(isSkinTowerCleared(data, 1), false);
  assert.equal(isSkinTowerCleared(data, 2), false);
  assert.equal(isSkinTowerCleared(data, 3), true);
  assert.equal(isSkinTowerCompleted(data), false);
  assert.equal(
    isSkinTowerCompleted({
      towerData: Object.fromEntries(
        [1, 2, 3, 4, 5, 6].map((type) => [type, { pass: true }]),
      ),
    }),
    true,
  );
  assert.equal(getSkinTowerLevel(null, 1), 1);
  assert.equal(isSkinTowerCleared(null, 1), false);
});

test("skin tower info unwraps the server response and retains the returned activity ID", async () => {
  const store = {
    async sendMessageWithPromise(tokenId, cmd, body) {
      assert.equal(cmd, "towers_getinfo");
      assert.equal(body.actId, 2610163);
      return {
        towerData: {
          actId: 2610163,
          towerData: { 4: { pass: true, actTowerLv: 8 } },
        },
      };
    },
  };
  const data = await loadSkinTowerInfo(store, "test", 2610163);
  assert.equal(data.actId, 2610163);
  assert.equal(isSkinTowerCleared(data, 4), true);
  await assert.rejects(
    loadSkinTowerInfo(
      { sendMessageWithPromise: async () => ({}) },
      "test",
      2610163,
    ),
    /进度获取失败/,
  );
});

test("batch skin challenge uses the resolved ID and stops once pass is true", async () => {
  class Clock extends Date {
    constructor(...args) {
      super(...(args.length ? args : [new Date(2026, 9, 19).getTime()]));
    }
  }
  const calls = [];
  let infoCount = 0;
  const skin = await loadModule(
    new URL("../src/utils/skinTower.js", import.meta.url),
    {},
    {
      Date: Clock,
      AbortSignal,
      fetch: async () => ({ ok: true, json: async () => config }),
    },
  );
  const store = {
    async sendMessageWithPromise(tokenId, cmd, body) {
      calls.push({ cmd, body });
      if (cmd === "system_getdatabundlever")
        return { dataBundleVer: "test-version" };
      assert.equal(body.actId, 2610163);
      if (cmd === "towers_getinfo") {
        infoCount++;
        return {
          towerData: {
            actId: 2610163,
            towerData: { 4: { pass: infoCount > 1, actTowerLv: 8 } },
          },
        };
      }
      if (cmd === "towers_start") return {};
      if (cmd === "towers_fight")
        return { battleData: { result: { accept: { ext: { curHP: 0 } } } } };
      if (cmd === "activity_startactegame") throw new Error("没有奖励");
      assert.fail(`Unexpected command: ${cmd}`);
    },
    closeWebSocketConnection() {},
  };
  const { createTasksTower } = await loadModule(
    new URL("../src/utils/batch/tasksTower.js", import.meta.url),
    {
      "@/utils/gameValue.js": {},
      "../skinTower.js": skin,
      "../towerClimbLimit.js": {},
    },
    { Date: Clock, setTimeout: (callback) => callback() },
  );
  const status = { value: {} };
  const logs = [];
  await createTasksTower({
    selectedTokens: { value: ["test"] },
    tokens: { value: [{ id: "test", name: "Test" }] },
    tokenStatus: status,
    isRunning: { value: false },
    shouldStop: { value: false },
    currentRunningTokenId: { value: null },
    ensureConnection: async () => {},
    releaseConnectionSlot() {},
    tokenStore: store,
    addLog: (entry) => logs.push(entry),
  }).skinChallenge();
  assert.equal(status.value.test, "completed");
  assert.equal(calls.filter((call) => call.cmd === "towers_fight").length, 1);
  assert.equal(infoCount, 2);
  assert.ok(logs.some((entry) => entry.message.includes("第 8 层挑战成功")));
  assert.ok(logs.some((entry) => entry.message.includes("BOSS 4 全部通关")));
});
