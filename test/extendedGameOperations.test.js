import assert from "node:assert/strict";
import test from "node:test";
import {
  findPetMergePair,
  runExtendedGameOperation,
} from "../src/utils/batch/extendedGameOperations.js";
import {
  extendedTaskCatalog,
  normalizeExtendedTaskSettings,
} from "../src/utils/batch/extendedTaskCatalog.js";
import { createTasksExtended } from "../src/utils/batch/tasksExtended.js";

const clone = (value) => structuredClone(value);

test("invalid extension parameters cannot dispatch any command", async () => {
  let calls = 0;
  for (const settings of [
    { count: -1 },
    { count: 1.1 },
    { count: Infinity },
    { count: 1000000 },
  ]) {
    await assert.rejects(
      runExtendedGameOperation("nightmare_draw_lottery", settings, {
        send() {
          calls++;
        },
      }),
    );
  }
  assert.equal(calls, 0);
  for (const task of extendedTaskCatalog)
    assert.ok(normalizeExtendedTaskSettings(task.value));
});

test("pet merge excludes equipped and locked pets and carries exact current UIDs", () => {
  const role = {
    petData: {
      pets: {
        [-1]: { petId: 101, uId: "equipped" },
        0: { petId: 101, uId: "locked", locked: true },
        1: { petId: 101, uId: "a" },
        2: { petId: 101, uId: "b" },
        3: { petId: 201, uId: "c" },
      },
    },
  };
  assert.deepEqual(findPetMergePair(role, 4), {
    fromSlotUId: { slot: 1, uId: "a" },
    toSlotUId: { slot: 2, uId: "b" },
    inheritSlot: 0,
  });
  assert.equal(
    findPetMergePair(
      {
        petData: {
          pets: { 1: { petId: 501, uId: "a" }, 2: { petId: 501, uId: "b" } },
        },
      },
      4,
    ),
    null,
  );
});

test("merge uses fresh server data each time and never reuses consumed slots", async () => {
  const pets = {
    1: { petId: 101, uId: "a" },
    2: { petId: 101, uId: "b" },
    3: { petId: 201, uId: "c" },
  };
  const merges = [];
  await runExtendedGameOperation(
    "batch_pet_merge",
    { count: 10, maxLevel: 4 },
    {
      async send(command, params) {
        if (command === "role_getroleinfo")
          return { role: { petData: { pets: clone(pets) } } };
        assert.equal(command, "pet_merge");
        merges.push(clone(params));
        delete pets[params.fromSlotUId.slot];
        pets[params.toSlotUId.slot] = { petId: 201, uId: "new" };
        if (merges.length === 2)
          pets[params.toSlotUId.slot] = { petId: 301, uId: "final" };
        return {};
      },
    },
  );
  assert.equal(merges.length, 2);
  assert.equal(merges[1].fromSlotUId.uId, "new");
  assert.equal(merges[1].toSlotUId.uId, "c");
});

test("unconfirmed merge and timed-out write stop without replay", async () => {
  const role = {
    petData: {
      pets: { 0: { petId: 101, uId: "a" }, 1: { petId: 101, uId: "b" } },
    },
  };
  for (const timeout of [false, true]) {
    let writes = 0;
    await assert.rejects(
      runExtendedGameOperation(
        "batch_pet_merge",
        { count: 10, maxLevel: 4 },
        {
          async send(command) {
            if (command === "role_getroleinfo") return { role: clone(role) };
            writes++;
            if (timeout) throw new Error("timeout");
            return {};
          },
        },
      ),
    );
    assert.equal(writes, 1);
  }
});

test("opening packs is capped to inventory and requires confirmed consumption", async () => {
  let quantity = 3;
  const writes = [];
  await runExtendedGameOperation(
    "batchOpenDiamondBox",
    { number: 100 },
    {
      async send(command, body) {
        if (command === "role_getroleinfo")
          return { role: { items: { 2005: { quantity } } } };
        writes.push(body);
        quantity -= body.number;
        return {};
      },
    },
  );
  assert.deepEqual(writes, [{ itemId: 2005, number: 3, index: 0 }]);
});

test("cars skip travelling vehicles and never pay for a second refresh", async () => {
  const writes = [];
  const cars = {
    a: { color: 1, sendAt: 0, refreshCount: 1 },
    b: { color: 6, sendAt: 0, refreshCount: 0 },
    c: { color: 6, sendAt: 9990, refreshCount: 0 },
  };
  await runExtendedGameOperation(
    "batchSmartSendCar",
    { minColor: 5, refreshLimit: 10 },
    {
      now: () => 10000000,
      async send(command, body) {
        if (command === "car_getrolecar")
          return { roleCar: { carDataMap: clone(cars) } };
        writes.push({ command, body });
        return {};
      },
    },
  );
  assert.deepEqual(writes, [
    {
      command: "car_send",
      body: { carId: "b", helperId: 0, text: "", isUpgrade: false },
    },
  ]);
});

test("guess reward claims include only explicit unclaimed winning entries", async () => {
  const calls = [];
  await runExtendedGameOperation(
    "batchApexGuessClaim",
    {},
    {
      async send(command, body) {
        if (command === "apex_getroleinfo")
          return {
            apexRoleInfo: {
              guessClaimMap: { 20: { a: false, b: true, _meta: false, c: 0 } },
            },
          };
        calls.push(body);
        return {};
      },
    },
  );
  assert.deepEqual(calls, [{ scheduleId: 20, teamId: "a" }]);
});

test("batch extensions preserve borrowed connections and report server errors", async () => {
  let closed = 0;
  let released = 0;
  const state = {
    selectedTokens: { value: ["a"] },
    tokens: { value: [{ id: "a", name: "fixture" }] },
    tokenStatus: { value: {} },
    isRunning: { value: false },
    shouldStop: { value: false },
    currentRunningTokenId: { value: null },
    batchSettings: { commandDelay: 1 },
    extendedSettings: { value: {} },
    ensureConnection: async (_id, _retry, owned) => owned(false),
    releaseConnectionSlot: () => released++,
    tokenStore: {
      getWebSocketStatus: () => "connected",
      closeWebSocketConnection: () => closed++,
      sendMessageWithPromise: async () => ({ error: "fixture rejected" }),
    },
    addLog() {},
    message: { info() {}, warning() {}, error() {} },
  };
  const tasks = createTasksExtended(state);
  const result = await tasks.nightmare_draw_lottery();
  assert.equal(result.failed, 1);
  assert.equal(closed, 0);
  assert.equal(released, 0);
  assert.equal(state.tokenStatus.value.a, "failed");
  assert.equal(state.isRunning.value, false);
});
