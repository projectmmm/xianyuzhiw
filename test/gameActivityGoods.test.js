import assert from "node:assert/strict";
import test from "node:test";
import {
  buildActivityGoods,
  loadActivityGoods,
} from "../src/utils/gameActivityGoods.js";

const now = Date.parse("2026-01-02T00:00:00Z");
const config = {
  ActFestivalConf: {
    2601016: {
      id: 2601016,
      name: "ActFestivalConf_name_shop",
      start: now / 1000 - 100,
      end: now / 1000 + 100,
      itemId: 7,
    },
  },
  ActMerchandiseConf: {
    26010161: {
      id: 26010161,
      activityID: 2601016,
      rank: 1,
      merchandise: [{ type: 3, itemId: 8, value: 2 }],
      price: 0,
      paymentType: 0,
      limit: 1,
    },
    26010162: {
      id: 26010162,
      activityID: 2601016,
      rank: 2,
      merchandise: [{ type: 3, itemId: 8, value: 3 }],
      price: 600,
      paymentType: 1,
      limit: 1,
    },
  },
  ExchangeActConf: {
    260101601: {
      id: 260101601,
      actId: 2601016,
      rewardId: 8,
      rewardNum: 1,
      resourceType: 3,
      consumeNum: 4,
      limitNum: 3,
      unlockNeed: 0,
    },
  },
};
const language = {
  ItemConf: {
    7: { name: "ItemConf_name_coin" },
    8: { name: "ItemConf_name_reward" },
  },
  LanguageConf: {
    languageConfOnline: {
      a: { key: "ActFestivalConf_name_shop", chinese: "新年商店" },
      b: { key: "ItemConf_name_coin", chinese: "活动币" },
      c: { key: "ItemConf_name_reward", chinese: "招募令" },
    },
  },
};
const activity = {
  activity: { commonActivityInfo: { 2601016: { record: {} } } },
};
const role = { items: { 7: { quantity: 9 } } };

test("official activity merchandise displays translated item names, prices and per-role limits", () => {
  const list = buildActivityGoods(
    config,
    language,
    activity,
    role,
    "shop",
    now,
  );
  assert.equal(list.length, 2);
  assert.equal(list[0].name, "招募令 ×2");
  assert.equal(list[0].priceText, "免费");
  assert.match(list[0].label, /新年商店.*招募令.*剩余 1 次/);
  assert.doesNotMatch(list[0].label, /260101|ItemConf/);
  assert.equal(list[1].disabled, true);
  assert.match(list[1].reason, /游戏内充值/);
  const used = structuredClone(activity);
  used.activity.commonActivityInfo[2601016].record[26010161] = true;
  assert.equal(
    buildActivityGoods(config, language, used, role, "shop", now)[0].remaining,
    0,
  );
});

test("closed, expired and untranslated goods cannot become executable purchase options", () => {
  assert.deepEqual(
    buildActivityGoods(
      config,
      language,
      { commonActivityInfo: {} },
      role,
      "shop",
      now,
    ),
    [],
  );
  assert.deepEqual(
    buildActivityGoods(config, language, activity, role, "shop", now + 200000),
    [],
  );
  const unknown = buildActivityGoods(
    config,
    { ...language, ItemConf: {} },
    activity,
    role,
    "shop",
    now,
  );
  assert.ok(unknown.every((item) => item.disabled));
  const malformed = structuredClone(config);
  delete malformed.ActMerchandiseConf[26010161].limit;
  assert.equal(
    buildActivityGoods(malformed, language, activity, role, "shop", now)[0]
      .reason,
    "限购信息不完整",
  );
  const exchange = buildActivityGoods(
    config,
    language,
    activity,
    role,
    "exchange",
    now,
  )[0];
  assert.equal(exchange.name, "招募令 ×1");
  assert.equal(exchange.priceText, "活动币 ×4");
  assert.equal(exchange.balance, 9);
});

test("catalog reads only official public JSON and never caches per-account purchase records", async () => {
  const urls = [];
  let used = 0;
  const commands = [];
  const send = async (command) => {
    commands.push(command);
    if (command === "system_getdatabundlever")
      return { dataBundleVer: "unit-goods-config" };
    if (command === "role_getroleinfo") return { role };
    return {
      activity: {
        commonActivityInfo: { 2601016: { record: { 26010161: used } } },
      },
    };
  };
  const fetchImpl = async (url, options) => {
    urls.push(url);
    assert.equal(options.credentials, "omit");
    assert.equal(options.redirect, "error");
    return {
      ok: true,
      json: async () =>
        url.endsWith("/language.json")
          ? language
          : url.endsWith("/config.json")
            ? config
            : {},
    };
  };
  const first = await loadActivityGoods(send, "shop", {
    fetchImpl,
    now: () => now,
  });
  used = 1;
  const second = await loadActivityGoods(send, "shop", {
    fetchImpl,
    now: () => now,
  });
  assert.equal(first[0].remaining, 1);
  assert.equal(second[0].remaining, 0);
  assert.equal(urls.length, 3);
  assert.ok(
    urls.every((url) =>
      url.startsWith(
        "https://xxz-xyzw-res.hortorgames.com/data/unit-goods-config/",
      ),
    ),
  );
  assert.ok(
    commands.every((command) =>
      ["system_getdatabundlever", "role_getroleinfo", "activity_get"].includes(
        command,
      ),
    ),
  );
  await assert.rejects(
    loadActivityGoods(
      async () => ({ dataBundleVer: "https://other.invalid/" }),
      "shop",
      { fetchImpl },
    ),
    /官方商品配置版本/,
  );
});

test("photo exchanges use exact skin names and distinguish both flower currencies", () => {
  const conf = structuredClone(config);
  conf.SkinConf = {
    11103: { skinName: "霸王·孙策" },
    11203: { skinName: "药师·贾诩" },
  };
  conf.OtherItemConf = { 11: { resourceType: 11, name: "皮肤" } };
  conf.ActFestivalConf = {
    26101610: {
      id: 26101610,
      name: "咸来入镜",
      start: now / 1000 - 100,
      end: now / 1000 + 100,
      itemId: 5291,
    },
    26101611: {
      id: 26101611,
      name: "咸来入镜",
      start: now / 1000 - 100,
      end: now / 1000 + 100,
      itemId: 5293,
    },
  };
  conf.ExchangeActConf = {
    261016101: {
      id: 261016101,
      actId: 26101610,
      resourceType: 11,
      rewardId: 11103,
      rewardNum: 1,
      consumeNum: 7,
      limitNum: 1,
      unlockNeed: 0,
    },
    261016102: {
      id: 261016102,
      actId: 26101610,
      resourceType: 11,
      rewardId: 11203,
      rewardNum: 1,
      consumeNum: 7,
      limitNum: 1,
      unlockNeed: 0,
    },
    261016211: {
      id: 261016211,
      actId: 26101611,
      resourceType: 3,
      rewardId: 8,
      rewardNum: 1,
      consumeNum: 5,
      limitNum: 5,
      unlockNeed: 0,
    },
  };
  const lang = structuredClone(language);
  lang.ItemConf[5291] = { name: "勿忘我" };
  lang.ItemConf[5293] = { name: "满天星" };
  const state = {
    commonActivityInfo: {
      26101610: { record: {} },
      26101611: { record: { 261016211: 2 } },
    },
  };
  const list = buildActivityGoods(
    conf,
    lang,
    state,
    { items: { 5291: { quantity: 7 }, 5293: { quantity: 10 } } },
    "exchange",
    now,
  );
  assert.equal(list[0].name, "霸王·孙策 ×1");
  assert.equal(list[1].name, "药师·贾诩 ×1");
  assert.match(list[0].label, /咸来入镜.*勿忘我兑换.*勿忘我 ×7/);
  assert.match(list[2].label, /咸来入镜.*满天星兑换/);
  assert.equal(list[2].remaining, 3);
  assert.ok(list.every((entry) => !entry.label.includes("皮肤 ×")));
});

test("explicit refresh bypasses both process and HTTP caches for unchanged version IDs", async () => {
  let downloads = 0;
  const send = async (command) =>
    command === "system_getdatabundlever"
      ? { dataBundleVer: "refresh-same-version" }
      : command === "role_getroleinfo"
        ? { role }
        : activity;
  const fetchImpl = async (url, options) => {
    downloads++;
    assert.equal(options.cache, "no-store");
    return {
      ok: true,
      json: async () =>
        url.endsWith("language.json")
          ? language
          : url.endsWith("config.json")
            ? config
            : {},
    };
  };
  await loadActivityGoods(send, "shop", { fetchImpl, now: () => now });
  await loadActivityGoods(send, "shop", { fetchImpl, now: () => now });
  assert.equal(downloads, 3);
  await loadActivityGoods(send, "shop", {
    fetchImpl,
    now: () => now,
    refresh: true,
  });
  assert.equal(downloads, 6);
});
