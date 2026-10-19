import assert from "node:assert/strict";
import test from "node:test";
import { runExtendedGameOperation } from "../src/utils/batch/extendedGameOperations.js";
import {
  extendedTaskCatalog,
  getExtendedTask,
} from "../src/utils/batch/extendedTaskCatalog.js";
import {
  buildGameSelection,
  gameNames,
  loadExtendedChoices,
  resolveGameSelections,
} from "../src/utils/gameSelections.js";

const now = Date.parse("2026-10-19T00:00:00Z");
const config = {
  PackConf: {
    20: { type: 1, diamondPackRewardWeight: [{ weight: 1 }] },
    21: { type: 1, diamondPackRewardWeight: [{ weight: 0 }] },
  },
  HolyBeastBaseConf: { 107: { id: 107 }, 101: { id: 101 } },
  NightMareStarConf: { 1: { bossId: 1, unlockStar: 0, challengeTime: 5 } },
  NightMareMonster: { 1: { maskName: "秦广王" } },
  SkinConf: { 10702: { skinName: "皮肤名称" } },
  CollectionSeriesConf: { 40001: { series: "西游系列" } },
  CarModified: {
    1: {
      researchID: 1,
      researchLv: 1,
      CarLegionTechName: "发动机",
      CarLegionTechCost: 20,
    },
  },
  ActFestivalConf: {
    2610011: {
      id: 2610011,
      name: "秋日活动",
      start: now / 1000 - 100,
      end: now / 1000 + 100,
    },
  },
  MissionConf: {
    9: {
      id: 9,
      actId: 2610011,
      missionType: 1,
      missionNum: 10,
      missionReward: [{ type: 3, itemId: 1001, value: 2 }],
    },
  },
  CumulativeChargeActConf: {
    261001101: {
      id: 261001101,
      actId: 2610011,
      chargeAmount: 600,
      chargeReward: [{ type: 3, itemId: 1001, value: 2 }],
    },
  },
  ConstantConf: {
    boxWeekRoundReward: [
      { type: 3, itemId: 1001, value: 150 },
      { type: 3, itemId: 1013, value: 1 },
    ],
  },
  DayBuyConf: {
    1: {
      id: 1,
      description: "累计达成{0}天",
      completeValue: 1,
      params: [{ type: 3, itemId: 1001, value: 3 }],
    },
  },
  GachaAccumRewardConf: {
    1: { id: 1, num: 10, reward: [{ type: 3, itemId: 1001, value: 5 }] },
  },
};
const language = {
  LanguageConf: {
    online: {
      item: { key: "item_name", chinese: "招募令" },
      skin: { key: "皮肤名称", chinese: "吕布·齐天大圣" },
    },
  },
  ItemConf: {
    1001: { name: "item_name" },
    1013: { name: "珍珠" },
    3007: { name: "红将碎片礼包", params: [1, 20] },
    3008: { name: "自选礼包", params: [1, 21] },
    11011: { name: "赤羽" },
  },
  HeroConf: { 107: { nickName: "吕布" }, 101: { nickName: "司马懿" } },
  ArtifactConf: { 11011: { id: 11011, fishStar: 1, starUpToItem: 11012 } },
};
const role = {
  id: 123,
  gold: 100000,
  diamond: 20,
  items: {
    3007: { quantity: 3 },
    3008: { quantity: 1 },
    11011: { quantity: 2 },
  },
  heroes: { 107: { hB: { active: true } }, 101: { hB: { active: false } } },
  addUpCharge: {},
  statistics: {},
  statisticsTime: {},
};
const snapshot = (value, extra = {}) => ({
  task: getExtendedTask(value),
  config,
  language,
  role: structuredClone(role),
  now,
  ...extra,
});
const build = (source, value, extra) =>
  buildGameSelection(source, snapshot(value, extra));

test("all extension identifiers are name selectors; quantity and duration fields remain numeric", () => {
  for (const task of extendedTaskCatalog) {
    for (const field of task.fields) {
      if (
        /Id$|^id$|Index$|formation|poolType|seriesId|presetTeamType/.test(
          field.key,
        )
      )
        assert.notEqual(field.type, "number", `${task.value}.${field.key}`);
      assert.doesNotMatch(field.label, /\bID\b|序号|卡池类型/);
    }
  }
  assert.deepEqual(
    getExtendedTask("batchCollectionActivate").fields.map((field) => field.key),
    ["target"],
  );
  assert.deepEqual(
    getExtendedTask("extendedActivityTask").fields.map((field) => field.key),
    ["target"],
  );
});

test("inventory choices use real owned packs and fish, reject self-select packs and respect hB.active", () => {
  const packs = build("packs", "extendedUseItem");
  assert.equal(packs.length, 2);
  assert.match(packs[0].label, /红将碎片礼包.*库存 3/);
  assert.equal(packs[1].disabled, true);
  assert.equal(build("artifacts", "batchFishUpgrade")[0].name, "赤羽");
  const heroes = build("holyBeasts", "extendedFourSaintOrder");
  assert.equal(heroes.find((hero) => hero.name === "吕布").disabled, false);
  assert.equal(heroes.find((hero) => hero.name === "司马懿").disabled, true);
});

test("formation names contain roster; missing slots are omitted and star preset type follows the selected boss", () => {
  const presets = {
    presetTeamInfo: {
      useTeamId: 2,
      presetTeamInfo: {
        2: { name: "推图队", teamInfo: { 0: { heroId: 107 } } },
        3: { teamInfo: {} },
      },
    },
  };
  const formations = build("formations", "batchGenieChallenge", {
    extra: { presets },
  });
  assert.deepEqual(
    formations.map((item) => item.value),
    [0, 2],
  );
  assert.match(formations[1].label, /推图队.*吕布/);
  const boss = build("starBoss", "batch_star_challenge", {
    extra: {
      star: { roleNMExt: { starFightCntMap: {}, starBossCompleteMap: {} } },
    },
  })[0];
  assert.equal(boss.name, "秦广王");
  assert.deepEqual(boss.settings, { bossId: 1, presetTeamType: 101 });
});

test("collection and activity selections derive their full related parameters and reject expired activities", () => {
  const collection = build("collection", "batchCollectionActivate", {
    extra: {
      collection: {
        heroSeries: {
          40001: {
            collectMap: { 10702: { canActivateNum: 1, activateNum: 0 } },
          },
        },
      },
    },
  })[0];
  assert.match(collection.label, /吕布·齐天大圣.*西游系列/);
  assert.deepEqual(collection.settings, {
    poolType: 2,
    id: 10702,
    seriesId: 40001,
  });
  const activity = {
    commonActivityInfo: { 2610011: { record: {}, task: { 1: 10 } } },
  };
  const choice = build("activityTasks", "extendedActivityTask", {
    activity,
  })[0];
  assert.deepEqual(choice.settings, { activityId: 2610011, missionId: 9 });
  assert.doesNotMatch(choice.label, /2610011|item_name/);
  assert.deepEqual(
    build("activityTasks", "extendedActivityTask", {
      activity,
      now: now + 200000,
    }),
    [],
  );
  const total = build("totalRewards", "extendedCommonTotal", { activity })[0];
  assert.equal(total.disabled, true);
});

test("weekly shop preserves server indexes including zero and uses current stock and balance", () => {
  const activity = {
    activity: [
      {
        id: 9,
        endTime: now + 1000,
        data: {
          buyType: 3,
          itemId: 0,
          goodsList: [
            { title: "免费见面礼", rewardList: [], price: 0, limit: 1 },
            {
              title: "",
              rewardList: [{ type: 3, itemId: 1001, value: 10 }],
              price: 30,
              limit: 1,
            },
            { title: "补给包", price: 10, limit: 2 },
          ],
        },
      },
    ],
    myStoreInfo: { 9: { complete: { 0: 1, 2: 0 } } },
  };
  const goods = build("weeklyGoods", "weekly_market_buy", { activity });
  assert.deepEqual(
    goods.map((item) => item.value),
    [0, 1, 2],
  );
  assert.equal(goods[0].reason, "已售罄");
  assert.equal(goods[1].reason, "对应资源不足");
  assert.equal(goods[2].disabled, false);
  const resolved = resolveGameSelections(
    "weekly_market_buy",
    { goodsIndex: 2, buyNum: 100 },
    { fields: { goodsIndex: goods } },
  );
  assert.equal(resolved.buyNum, 2);
  assert.match(goods[1].label, /招募令/);
});

test("box weekly reward uses official array index rather than the item ID and stops at zero available rounds", () => {
  const activity = {
    activity: [
      {
        id: 4,
        type: 2,
        openTime: now - 10000,
        endTime: now + 10000,
        data: { rounds: 4, rewards: [{ num: 8000 }] },
      },
    ],
    myTotalInfo: { 4: { rounds: 2, num: 0 } },
  };
  const choices = build("weeklyRewards", "batchClaimBoxWeeklyRewards", {
    activity,
  });
  assert.deepEqual(
    choices.map((choice) => choice.settings),
    [{ itemId: 0 }, { itemId: 1 }],
  );
  assert.equal(choices[0].disabled, false);
  const usedRole = {
    ...role,
    statistics: { "week:act:cr:cnt:2": 1 },
    statisticsTime: { "week:act:cr:cnt:2": now / 1000 },
  };
  assert.ok(
    build("weeklyRewards", "batchClaimBoxWeeklyRewards", {
      activity,
      role: usedRole,
    }).every((entry) => entry.disabled),
  );
});

test("charge and gacha rewards read actual progress instead of guessed reward IDs", () => {
  const charge = build("reward", "charge_claimaddup_rewards", {
    activity: { totalChargeDay: 1 },
  })[0];
  assert.equal(charge.disabled, false);
  assert.match(charge.label, /累计达成1天.*招募令/);
  assert.throws(() => build("reward", "charge_claimaddup_rewards"), /领取进度/);
  const gacha = build("reward", "extendedGachaStage", {
    extra: {
      gacha: {
        roleGacha: { stageGachaCnt: 10, claimedStageIdMap: { 1: true } },
      },
    },
  })[0];
  assert.equal(gacha.reason, "已领取");
});

test("executions re-read each role and never send stale or disabled choices; derived settings cannot be overridden", async () => {
  const writes = [];
  const choice = {
    value: "40001:10702",
    name: "吕布·齐天大圣",
    settings: { poolType: 2, id: 10702, seriesId: 40001 },
  };
  await runExtendedGameOperation(
    "batchCollectionActivate",
    { target: choice.value, id: 999, poolType: 99 },
    {
      loadChoices: async () => ({ fields: { target: [choice] } }),
      send: async (command, body) => writes.push({ command, body }),
    },
  );
  assert.deepEqual(writes, [
    {
      command: "collection_activate",
      body: { isAll: false, poolType: 2, id: 10702, seriesId: 40001 },
    },
  ]);
  for (const candidates of [
    [],
    [{ ...choice, disabled: true, reason: "已激活" }],
  ]) {
    await assert.rejects(
      runExtendedGameOperation(
        "batchCollectionActivate",
        { target: choice.value },
        {
          loadChoices: async () => ({ fields: { target: candidates } }),
          send: async () => assert.fail("stale write"),
        },
      ),
      /已变化|已激活/,
    );
  }
  assert.throws(
    () =>
      resolveGameSelections(
        "batchCollectionActivate",
        { target: choice.value },
        { fields: { target: [] } },
      ),
    /重新读取/,
  );
});

test("repeat consumptions refresh availability before the next write and never replay failed writes", async () => {
  let reads = 0;
  let writes = 0;
  const entry = { value: 1, name: "发动机", settings: { researchId: 1 } };
  await assert.rejects(
    runExtendedGameOperation(
      "batchCarResearchUpgrade",
      { researchId: 1, count: 3 },
      {
        loadChoices: async () => ({
          fields: {
            researchId:
              ++reads === 1
                ? [entry]
                : [{ ...entry, disabled: true, reason: "已达最高等级" }],
          },
        }),
        send: async () => {
          writes++;
        },
      },
    ),
    /最高等级/,
  );
  assert.equal(reads, 2);
  assert.equal(writes, 1);
});

test("choice loader fetches official static names and fresh account state through read-only commands", async () => {
  const calls = [];
  const urls = [];
  let quantity = 3;
  const send = async (command) => {
    calls.push(command);
    if (command === "system_getdatabundlever")
      return { dataBundleVer: "selector-test-version" };
    if (command === "role_getroleinfo")
      return { role: { ...role, items: { 3007: { quantity } } } };
    assert.fail(`unexpected command ${command}`);
  };
  const fetchImpl = async (url, options) => {
    urls.push(url);
    assert.equal(options.credentials, "omit");
    assert.equal(options.redirect, "error");
    return {
      ok: true,
      json: async () =>
        url.endsWith("language.json")
          ? language
          : url.endsWith("config_ap.json")
            ? {}
            : config,
    };
  };
  assert.equal(
    (await loadExtendedChoices(send, "extendedUseItem", { fetchImpl })).fields
      .itemId.length,
    1,
  );
  quantity = 0;
  assert.equal(
    (await loadExtendedChoices(send, "extendedUseItem", { fetchImpl })).fields
      .itemId.length,
    0,
  );
  assert.equal(urls.length, 3);
  assert.ok(
    urls.every((url) =>
      url.startsWith("https://xxz-xyzw-res.hortorgames.com/"),
    ),
  );
  assert.deepEqual(calls, [
    "system_getdatabundlever",
    "role_getroleinfo",
    "system_getdatabundlever",
    "role_getroleinfo",
  ]);
});

test("special rewards show the exact official card and avatar-frame names", () => {
  const names = gameNames(
    {
      CardDetailConf: { 90111: { name: "周年纪念卡" } },
      AvatarFrameConf: { 111904: { name: "铁扇公主头像框" } },
    },
    {},
  );
  assert.equal(names.reward({ type: 21, itemId: 90111 }), "周年纪念卡");
  assert.equal(names.reward({ type: 46, itemId: 111904 }), "铁扇公主头像框");
  assert.equal(names.text("CarLegionTechName99"), "");
});

test("box reward index zero is emitted as the protocol selection key", async () => {
  const writes = [];
  await runExtendedGameOperation(
    "batchClaimBoxWeeklyRewards",
    { itemId: 0 },
    {
      loadChoices: async () => ({
        fields: {
          itemId: [{ value: 0, name: "招募令", settings: { itemId: 0 } }],
        },
      }),
      send: async (command, body) => writes.push({ command, body }),
    },
  );
  assert.deepEqual(writes, [
    {
      command: "activity_claimweekactreward",
      body: { typ: 2, selectRewardsMap: { 0: 1 } },
    },
  ]);
});
