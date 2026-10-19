import { gameNames } from "./gameDataNames.js";
export { makeTranslations } from "./gameDataNames.js";
const cachedConfigs = new Map();
const CDN = "https://xxz-xyzw-res.hortorgames.com";

const bodyOf = (response) => response?.body ?? response;
const activityOf = (response) => bodyOf(response)?.activity ?? bodyOf(response);
const countOf = (value) => (value === true ? 1 : Number(value ?? 0));

/** Join official merchandise, names and the selected role's current activity state. */
export function buildActivityGoods(
  config,
  language,
  activity,
  role,
  kind,
  now = Date.now(),
) {
  const common = activityOf(activity)?.commonActivityInfo;
  if (!["shop", "exchange"].includes(kind)) throw new Error("未知商品来源");
  if (!common || typeof common !== "object")
    throw new Error("未读取到当前角色的活动信息");
  const names = gameNames(config, language);
  const translate = names.text;
  const itemName = names.item;
  const rewardName = names.reward;
  const rows =
    kind === "exchange" ? config.ExchangeActConf : config.ActMerchandiseConf;
  if (!rows || typeof rows !== "object")
    throw new Error("官方商品配置不完整，请稍后重新读取");
  const results = [];
  for (const row of Object.values(rows)) {
    const activityId = Number(row.activityID ?? row.actId);
    const state = common[activityId];
    const schedule = config.ActFestivalConf?.[activityId];
    if (!state || typeof state !== "object" || !schedule) continue;
    if (
      !Number.isFinite(Number(schedule.start)) ||
      !Number.isFinite(Number(schedule.end))
    )
      continue;
    if (
      now / 1000 < Number(schedule.start) ||
      now / 1000 > Number(schedule.end)
    )
      continue;
    const goodsId = Number(row.id);
    if (!Number.isSafeInteger(goodsId) || goodsId <= 1) continue;
    const rewards =
      kind === "exchange"
        ? [
            {
              type: row.resourceType,
              itemId: row.rewardId,
              value: row.rewardNum,
            },
          ]
        : row.merchandise;
    if (!Array.isArray(rewards) || !rewards.length) continue;
    const named = rewards.map((reward) => ({
      name: rewardName(reward),
      quantity: Number(reward.value),
    }));
    const namedRewards = named.every(
      (reward) =>
        reward.name && Number.isFinite(reward.quantity) && reward.quantity > 0,
    );
    const name = namedRewards
      ? named.map((reward) => `${reward.name} ×${reward.quantity}`).join("、")
      : "商品名称暂不可用";
    const paid = kind !== "exchange" && Number(row.paymentType) === 1;
    const price = Number(kind === "exchange" ? row.consumeNum : row.price);
    const costItemId = Number(
      kind === "exchange" ? schedule.itemId : row.costItemID,
    );
    const currency = price === 0 ? "" : paid ? "元" : itemName(costItemId);
    const bought = countOf(state.record?.[goodsId]);
    const limit = Number(kind === "exchange" ? row.limitNum : row.limit);
    const remaining =
      limit > 0 && Number.isSafeInteger(bought) && bought >= 0
        ? Math.max(0, limit - bought)
        : null;
    const balance =
      price > 0 && !paid
        ? Number(role?.items?.[costItemId]?.quantity ?? 0)
        : null;
    let reason = "";
    if (!namedRewards) reason = "未能读取道具名称";
    else if (paid) reason = "需在游戏内充值";
    else if (
      !Number.isSafeInteger(price) ||
      price < 0 ||
      (price > 0 && !currency)
    )
      reason = "价格信息不完整";
    else if (kind !== "exchange" && Number(row.paymentType) !== 0)
      reason = "暂不支持此付款方式";
    else if (!Number.isSafeInteger(bought) || bought < 0)
      reason = "购买记录不完整";
    else if (!Number.isSafeInteger(limit) || limit < -1)
      reason = "限购信息不完整";
    else if (remaining === 0) reason = "已达限购";
    else if (Number(row.relation) > 0 && !state.record?.[row.relation])
      reason = "需先领取前置礼包";
    else if (Number(row.unlockNeed) > 0) reason = "需在游戏内核对解锁条件";
    else if (price > 0 && (!Number.isSafeInteger(balance) || balance < price))
      reason = "对应道具不足";
    const priceText = paid
      ? `¥${(price / 100).toFixed(2)}（游戏内充值）`
      : price === 0
        ? "免费"
        : `${currency} ×${price}`;
    const title =
      translate(schedule.name) || translate(schedule.bannerTitle) || "当前活动";
    const activityName =
      kind === "exchange" && itemName(costItemId)
        ? `${title} · ${itemName(costItemId)}兑换`
        : title;
    const limitText = remaining == null ? "不限购" : `剩余 ${remaining} 次`;
    results.push({
      goodsId,
      activityId,
      name,
      activityName,
      price,
      priceText,
      costItemId,
      balance,
      bought,
      remaining,
      rank: Number(row.rank) || 0,
      disabled: !!reason,
      reason,
      label: `${activityName} · ${name} · ${priceText} · ${limitText}${reason ? `（${reason}）` : ""}`,
    });
  }
  return results.sort(
    (a, b) =>
      a.activityId - b.activityId || a.rank - b.rank || a.goodsId - b.goodsId,
  );
}

/** Public official configuration only; account data is never cached here. */
export async function loadOfficialGameConfig(
  send,
  { fetchImpl = fetch, refresh = false } = {},
) {
  const versionResponse = bodyOf(await send("system_getdatabundlever", {}));
  const version = versionResponse?.dataBundleVer;
  if (typeof version !== "string" || !/^[\w-]{1,80}$/.test(version))
    throw new Error("未读取到官方商品配置版本");
  if (refresh || !cachedConfigs.has(version)) {
    const loading = (async () => {
      const [config, language, extra] = await Promise.all(
        ["config", "language", "config_ap"].map(async (file) => {
          const response = await fetchImpl(
            `${CDN}/data/${version}/${file}.json`,
            {
              cache: "no-store",
              credentials: "omit",
              redirect: "error",
              referrerPolicy: "no-referrer",
              signal: AbortSignal.timeout(30000),
            },
          );
          if (!response.ok) throw new Error("官方商品名称或配置读取失败");
          return response.json();
        }),
      );
      return { config: { ...extra, ...config }, language };
    })();
    cachedConfigs.set(version, loading);
    loading.catch(() => {
      if (cachedConfigs.get(version) === loading) cachedConfigs.delete(version);
    });
  }
  return cachedConfigs.get(version);
}

export async function loadActivityGoods(
  send,
  kind = "shop",
  { fetchImpl = fetch, now = Date.now, refresh = false } = {},
) {
  const { config, language } = await loadOfficialGameConfig(send, {
    fetchImpl,
    refresh,
  });
  // Never cache account-specific activity records, stock or balances.
  const activity = await send("activity_get", {});
  const response = bodyOf(await send("role_getroleinfo", {}));
  if (!response?.role) throw new Error("未读取到角色背包信息");
  return buildActivityGoods(
    config,
    language,
    activity,
    response.role,
    kind,
    now(),
  );
}
