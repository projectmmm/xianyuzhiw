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
import {
  createExtendedGoodsLoader,
  createTasksExtended,
} from "../src/utils/batch/tasksExtended.js";

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
  for (const task of extendedTaskCatalog) {
    if (task.fields.some((field) => field.type === "gameGoods"))
      assert.throws(
        () => normalizeExtendedTaskSettings(task.value),
        /按道具名称选择/,
      );
    else if (
      task.fields.some(
        (field) => field.type === "gameSelection" && field.default === null,
      )
    )
      assert.throws(
        () => normalizeExtendedTaskSettings(task.value),
        /按名称选择/,
      );
    else assert.ok(normalizeExtendedTaskSettings(task.value));
  }
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
      loadChoices: async () => ({
        fields: {
          helperId: [
            { value: 0, name: "不指定协助角色", settings: { helperId: 0 } },
          ],
        },
      }),
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
    currentProgress: { value: 0 },
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
  assert.equal(state.currentProgress.value, 100);
});

test("old placeholder goods cannot connect or send a purchase", async () => {
  for (const settings of [{}, { goodsId: 1 }, { goodsId: null }]) {
    let calls = 0;
    await assert.rejects(
      runExtendedGameOperation("extendedActivityGoods", settings, {
        send() {
          calls++;
        },
      }),
      /按道具名称选择/,
    );
    assert.equal(calls, 0);
  }
});

test("named activity goods revalidate each account, cap stock and never retry refused writes", async () => {
  const goods = {
    goodsId: 26010161,
    activityId: 2601016,
    name: "招募令 ×2",
    priceText: "免费",
    price: 0,
    remaining: 1,
    disabled: false,
  };
  const writes = [];
  await runExtendedGameOperation(
    "extendedActivityGoods",
    { goodsId: goods.goodsId, num: 10 },
    {
      loadActivityGoods: async () => [goods],
      send: async (command, body) => {
        writes.push({ command, body });
        return {};
      },
    },
  );
  assert.deepEqual(writes, [
    {
      command: "activity_commonbuygoods",
      body: { goodsId: goods.goodsId, num: 1 },
    },
  ]);
  for (const list of [
    [],
    [{ ...goods, disabled: true, reason: "需在游戏内充值" }],
  ]) {
    await assert.rejects(
      runExtendedGameOperation(
        "extendedActivityGoods",
        { goodsId: goods.goodsId },
        {
          loadActivityGoods: async () => list,
          send: async () => {
            throw new Error("must not buy");
          },
        },
      ),
      /已下架|游戏内充值/,
    );
  }
  let attempts = 0;
  await assert.rejects(
    runExtendedGameOperation(
      "extendedActivityGoods",
      { goodsId: goods.goodsId },
      {
        loadActivityGoods: async () => [goods],
        send: async () => {
          attempts++;
          throw new Error("服务器错误: -10006 - 未知错误");
        },
      },
    ),
    /招募令.*未重试/,
  );
  assert.equal(attempts, 1);
});

test("activity exchange takes its activity and affordable quantity from fresh game goods", async () => {
  const writes = [];
  await runExtendedGameOperation(
    "batchActivityExchange",
    { goodsId: 260101501, activityId: 1, quantity: 10 },
    {
      loadActivityGoods: async () => [
        {
          goodsId: 260101501,
          activityId: 2601015,
          name: "珍珠 ×1",
          price: 4,
          priceText: "活动币 ×4",
          balance: 9,
          remaining: 3,
        },
      ],
      send: async (command, body) => {
        writes.push({ command, body });
        return {};
      },
    },
  );
  assert.deepEqual(writes, [
    {
      command: "activity_exchange",
      body: { activityId: 2601015, goodsId: 260101501, quantity: 2 },
    },
  ]);
});

test("shop parameters fail once before connecting and read-only previews release only owned slots", async () => {
  let connects = 0;
  let closes = 0;
  let releases = 0;
  const state = {
    selectedTokens: { value: ["a"] },
    tokens: { value: [{ id: "a" }] },
    tokenStatus: { value: {} },
    isRunning: { value: false },
    shouldStop: { value: false },
    currentRunningTokenId: { value: null },
    batchSettings: {},
    extendedSettings: { value: {} },
    ensureConnection: async (_id, _retry, owned, options) => {
      connects++;
      assert.equal(options.initializeBattle, false);
      assert.equal(options.requireRoleInfo, true);
      owned(true);
    },
    releaseConnectionSlot: () => releases++,
    tokenStore: {
      getWebSocketStatus: () => "connected",
      closeWebSocketConnection: () => closes++,
      sendMessageWithPromise: async () => {
        throw new Error("fixture read failed");
      },
    },
    addLog() {},
    message: { info() {}, warning() {}, error() {} },
  };
  await assert.rejects(
    createTasksExtended(state).extendedActivityGoods(),
    /按道具名称选择/,
  );
  assert.equal(connects, 0);
  await assert.rejects(
    createExtendedGoodsLoader(state)("shop"),
    /fixture read failed/,
  );
  assert.equal(connects, 1);
  assert.equal(closes, 1);
  assert.equal(releases, 1);
  assert.equal(state.isRunning.value, false);
  state.ensureConnection = async (_id, _retry, owned) => owned(false);
  await assert.rejects(
    createExtendedGoodsLoader(state)("shop"),
    /fixture read failed/,
  );
  assert.equal(closes, 1);
  assert.equal(releases, 1);
});

const photoNow = Date.parse("2026-10-19T00:00:00Z");
const photoConfig = {
  ActFestivalConf: {
    80: {
      id: 80,
      actType: 36,
      actGroup: 2,
      itemId: 5290,
      start: photoNow / 1000 - 10,
      end: photoNow / 1000 + 10,
    },
    90: {
      id: 90,
      actType: 37,
      actGroup: 2,
      itemId: 5290,
      start: photoNow / 1000 - 10,
      end: photoNow / 1000 + 10,
    },
  },
  PhotoConf: { 101: { id: 101, actId: 80, rank: 1 } },
  PhotoPieceConf: {
    11: { id: 11, actId: 80, PhotoId: 101, pieceIndex: 1, progressNeed: 10 },
  },
  BattlePassMissionConf: {
    901: {
      id: 901,
      actId: 90,
      rank: 1,
      completeValue: 1,
      description: "登录{0}次游戏",
    },
    902: {
      id: 902,
      actId: 90,
      rank: 2,
      completeValue: 5,
      description: "任务{0}",
    },
    903: {
      id: 903,
      actId: 90,
      rank: 3,
      completeValue: 1,
      description: "任务{0}",
    },
  },
};
function photoContext(state, writes, confirm = true) {
  return {
    now: () => photoNow,
    loadConfig: async () => ({ config: photoConfig, language: {} }),
    async send(command, body) {
      if (command === "activity_get")
        return {
          body: {
            activity: {
              photoActivityInfo: { 80: clone(state) },
              warOrderActivityInfo: {
                90: {
                  complete: { 901: 1, 902: 2, 903: 1 },
                  taskClaimed: { 903: true },
                },
              },
            },
          },
        };
      if (command === "role_getroleinfo")
        return { role: { items: { 5290: { quantity: 3 } } } };
      writes.push({ command, body });
      if (command === "activity_photo" && confirm) {
        state.pieceId = body.pieceId;
        state.num += body.num;
      }
      return {};
    },
  };
}

test("photo initial state resolves first configured piece and caps film to inventory and remaining progress", async () => {
  const writes = [];
  await runExtendedGameOperation(
    "extendedFilmPhoto",
    { number: 10 },
    photoContext({ pieceId: 0, num: 8 }, writes),
  );
  assert.deepEqual(writes, [
    {
      command: "activity_photo",
      body: { activityId: 80, num: 2, pieceId: 11 },
    },
  ]);
});

test("photo claims only completed stages and finished activities send no writes", async () => {
  for (const [state, expected] of [
    [{ pieceId: 0, num: 10 }, 1],
    [{ pieceId: 11, num: 9 }, 0],
    [{ pieceId: -1, num: 0 }, 0],
  ]) {
    const writes = [];
    await runExtendedGameOperation(
      "filmClaim",
      {},
      photoContext(state, writes),
    );
    assert.equal(writes.length, expected);
    if (expected)
      assert.deepEqual(writes[0], {
        command: "activity_claimphotoreward",
        body: { activityId: 80, pieceId: 11 },
      });
  }
});

test("film tasks claim only complete unclaimed missions from the official configuration", async () => {
  const writes = [];
  await runExtendedGameOperation(
    "extendedFilmTasks",
    {},
    photoContext({ pieceId: 0, num: 0 }, writes),
  );
  assert.deepEqual(writes, [
    {
      command: "activity_warordertaskclaim",
      body: { actId: 90, missionId: 901 },
    },
  ]);
});

test("photo writes stop on unconfirmed progress and never replay consumption", async () => {
  const writes = [];
  await assert.rejects(
    runExtendedGameOperation(
      "extendedFilmPhoto",
      { number: 10 },
      photoContext({ pieceId: 0, num: 0 }, writes, false),
    ),
    /未确认/,
  );
  assert.equal(writes.length, 1);
});
