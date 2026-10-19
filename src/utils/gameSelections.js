import { getBattlePreset } from "./batch/extendedFeatureHelpers.js";
import { getExtendedTask } from "./batch/extendedTaskCatalog.js";
import { loadOfficialGameConfig } from "./gameActivityGoods.js";
import { gameNames } from "./gameDataNames.js";

const bodyOf = (response) => response?.body ?? response;
const rows = (value) =>
  Object.values(value ?? {}).filter((row) => row && typeof row === "object");
const entries = (value) => Object.entries(value ?? {});
const integer = (value) =>
  Number.isSafeInteger(Number(value)) && Number(value) >= 0;

export { gameNames } from "./gameDataNames.js";

function option(value, name, settings, reason = "", detail = "") {
  return {
    value,
    name,
    settings,
    disabled: !!reason,
    reason,
    label: `${name}${detail ? ` · ${detail}` : ""}${reason ? `（${reason}）` : ""}`,
  };
}

function activeCommon(config, activity, now) {
  const common = activity?.commonActivityInfo;
  if (!common || typeof common !== "object")
    throw new Error("未读取到当前角色活动数据");
  return entries(common).flatMap(([id, state]) => {
    const conf = config.ActFestivalConf?.[id];
    return conf &&
      state &&
      Number.isFinite(Number(conf.start)) &&
      Number.isFinite(Number(conf.end)) &&
      now / 1000 >= Number(conf.start) &&
      now / 1000 <= Number(conf.end)
      ? [{ id: Number(id), state, conf }]
      : [];
  });
}

/** Pure adapters: every wire identifier comes from this role's state or official configuration. */
export function buildGameSelection(
  source,
  { task, config, language, role, activity, extra = {}, now = Date.now() },
) {
  const names = gameNames(config, language);
  const inventory = role?.items ?? {};
  if (source === "formations") {
    const root = extra.presets?.presetTeamInfo;
    if (!root) throw new Error("游戏未返回预设阵容");
    const map = root.presetTeamInfo ?? root;
    const list = [];
    for (const [slot, team] of entries(map)) {
      if (!integer(slot) || Number(slot) <= 0 || !team?.teamInfo) continue;
      try {
        getBattlePreset(extra.presets, Number(slot));
      } catch {
        continue;
      }
      const roster = rows(team.teamInfo)
        .map((hero) => names.hero(hero.heroId))
        .filter(Boolean)
        .join("、");
      const name =
        names.text(team.name ?? team.teamName) || `预设阵容 ${Number(slot)}`;
      list.push(
        option(Number(slot), name, { formation: Number(slot) }, "", roster),
      );
    }
    if (list.some((entry) => entry.value === Number(root.useTeamId))) {
      list.unshift(
        option(
          0,
          "当前使用阵容",
          { formation: 0 },
          "",
          list.find((entry) => entry.value === Number(root.useTeamId)).label,
        ),
      );
    }
    return list;
  }
  if (source === "packs") {
    return entries(inventory).flatMap(([id, item]) => {
      const conf = language.ItemConf?.[id];
      const pack =
        Number(conf?.params?.[0]) === 1
          ? config.PackConf?.[conf.params[1]]
          : null;
      if (!pack || !integer(item?.quantity) || Number(item.quantity) <= 0)
        return [];
      const name = names.item(id);
      if (!name) return [];
      const reason =
        Number(pack.type) !== 1 ||
        !pack.diamondPackRewardWeight?.some(
          (reward) => Number(reward.weight) > 0,
        )
          ? "自选或特殊礼包请在游戏内打开"
          : "";
      return [
        option(
          Number(id),
          name,
          { itemId: Number(id) },
          reason,
          `库存 ${item.quantity}`,
        ),
      ];
    });
  }
  if (source === "artifacts") {
    return rows(language.ArtifactConf).flatMap((conf) => {
      const amount = Number(inventory[conf.id]?.quantity ?? 0);
      if (!Number.isSafeInteger(amount) || amount <= 0 || !names.item(conf.id))
        return [];
      return [
        option(
          Number(conf.id),
          names.item(conf.id),
          { itemId: Number(conf.id) },
          Number(conf.starUpToItem) > 0 ? "" : "已达最高星级",
          `库存 ${amount} · ${conf.fishStar} 星`,
        ),
      ];
    });
  }
  if (source === "holyBeasts") {
    if (!role?.heroes) throw new Error("未读取到武将数据");
    return rows(config.HolyBeastBaseConf).flatMap((conf) => {
      const hero = role.heroes[conf.id];
      if (!hero || !names.hero(conf.id)) return [];
      return [
        option(
          Number(conf.id),
          names.hero(conf.id),
          { heroId: Number(conf.id) },
          hero.hB?.active === true ? "" : "尚未激活四圣",
        ),
      ];
    });
  }
  if (source === "starBoss") {
    const state = extra.star?.roleNMExt;
    if (!state?.starFightCntMap || !state.starBossCompleteMap)
      throw new Error("未读取到十殿星级挑战状态");
    const stars = Object.values(state.starBossCompleteMap).reduce(
      (total, map) => total + Object.values(map ?? {}).filter(Boolean).length,
      0,
    );
    return rows(config.NightMareStarConf).flatMap((conf) => {
      const bossId = Number(conf.bossId);
      const name = names.text(config.NightMareMonster?.[bossId]?.maskName);
      if (!name) return [];
      const used = Number(state.starFightCntMap[bossId] ?? 0);
      const reason =
        stars < Number(conf.unlockStar)
          ? "星级不足，尚未解锁"
          : used >= Number(conf.challengeTime)
            ? "今日挑战次数已用完"
            : "";
      // The game uses a dedicated preset type for each star boss (100 + bossId).
      return [
        option(
          bossId,
          name,
          { bossId, presetTeamType: 100 + bossId },
          reason,
          `今日已挑战 ${used} 次`,
        ),
      ];
    });
  }
  if (source === "cheerLegions") {
    if (!Array.isArray(extra.opponents?.opponentList))
      throw new Error("游戏未返回当前助威对阵");
    return extra.opponents.opponentList
      .flatMap((pair) => [pair.leftLegion, pair.rightLegion])
      .flatMap((legion) => {
        const name = names.text(legion?.name);
        return name && integer(legion?.id) && Number(legion.id) > 0
          ? [option(legion.id, name, { legionId: legion.id })]
          : [];
      });
  }
  if (source === "carHelpers") {
    const list = [option(0, "不指定协助角色", { helperId: 0 })];
    const members =
      extra.legion?.info?.members ?? extra.legion?.legionData?.members;
    const counts = extra.help?.memberHelpingCntMap;
    if (!members || !counts) return list;
    for (const member of rows(members)) {
      const id = member.roleId;
      const name = names.text(member.name ?? member.nickname);
      if (!id || !name || String(id) === String(role.roleId ?? role.id))
        continue;
      list.push(
        option(
          String(id),
          name,
          { helperId: String(id) },
          "",
          `今日已协助 ${Number(counts[id] ?? 0)} 次`,
        ),
      );
    }
    return list;
  }
  if (source === "carResearch") {
    const state = extra.car?.roleCar?.research;
    if (!state) throw new Error("未读取到车队改装数据");
    return [
      ...new Set(
        rows(config.CarModified).map((conf) => Number(conf.researchID)),
      ),
    ].flatMap((id) => {
      const level = Number(state[id] ?? 0);
      const conf = rows(config.CarModified).find(
        (row) =>
          Number(row.researchID) === id && Number(row.researchLv) === level + 1,
      );
      const current =
        conf ??
        rows(config.CarModified).find((row) => Number(row.researchID) === id);
      const name = names.text(current?.CarLegionTechName);
      if (!name) return [];
      return [
        option(
          id,
          name,
          { researchId: id },
          !conf ? "已达最高等级" : "",
          `当前 ${level} 级${conf ? ` · 下级消耗 ${conf.CarLegionTechCost} 改装材料` : ""}`,
        ),
      ];
    });
  }
  if (source === "collection") {
    const collection = extra.collection?.collection ?? extra.collection;
    if (!collection?.heroSeries) throw new Error("游戏未返回橱窗藏品状态");
    return entries(collection.heroSeries).flatMap(([seriesId, series]) =>
      entries(series.collectMap).flatMap(([id, state]) => {
        const name = names.skin(id);
        if (!name) return [];
        const seriesName = names.text(
          config.CollectionSeriesConf?.[seriesId]?.series,
        );
        return [
          option(
            `${seriesId}:${id}`,
            name,
            { poolType: 2, id: Number(id), seriesId: Number(seriesId) },
            Number(state.activateNum) === 1
              ? "已激活"
              : Number(state.canActivateNum) !== 1
                ? "未满足激活条件"
                : "",
            seriesName,
          ),
        ];
      }),
    );
  }
  if (source === "legionGoods" || source === "collectionGoods") {
    const isCollection = source === "collectionGoods";
    if (!isCollection && !(extra.legion?.info ?? extra.legion?.legionData))
      throw new Error("未读取到俱乐部数据，请先加入俱乐部");
    if (isCollection && !extra.collection)
      throw new Error("未读取到珍宝阁数据");
    return rows(
      isCollection ? config.CollectionExchangeShopConf : config.LegionStoreConf,
    ).flatMap((conf) => {
      if (
        isCollection &&
        (Number(conf.canBeExchanged) !== 1 ||
          now / 1000 < Number(conf.start) ||
          now / 1000 > Number(conf.end))
      )
        return [];
      const name = names.rewards(isCollection ? conf.merchandise : [conf.good]);
      const currencyId = conf.costItemID ?? conf.itemID;
      const currency = names.item(currencyId);
      if (!name || !currency || !integer(conf.price)) return [];
      const balance = Number(inventory[currencyId]?.quantity ?? 0);
      const record = isCollection
        ? extra.collectionShop?.storeInfo?.exchangeStoreMap
        : extra.legionShop?.buyGoods;
      if (!record) throw new Error("未读取到当前角色商店购买记录");
      const bought = Number(
        isCollection ? (record[conf.id]?.buyNum ?? 0) : (record[conf.id] ?? 0),
      );
      const remaining =
        Number(conf.limit) > 0
          ? Math.max(0, Number(conf.limit) - bought)
          : null;
      return [
        option(
          Number(conf.id),
          name,
          isCollection ? { goodsId: Number(conf.id) } : { id: Number(conf.id) },
          remaining === 0
            ? "已达限购"
            : balance < Number(conf.price)
              ? "对应道具不足"
              : "",
          `${currency} ×${conf.price} · 余额 ${balance}${remaining == null ? "" : ` · 剩余 ${remaining} 次`}`,
        ),
      ];
    });
  }
  if (source === "weeklyGoods") {
    const descriptor = activity?.activity?.find(
      (entry) => Number(entry.id) === 9,
    );
    const state = activity?.myStoreInfo?.[9];
    if (!descriptor || !state || !Array.isArray(descriptor.data?.goodsList))
      throw new Error("游戏未返回黑市周商品明细，请确认活动已开放");
    if (!(Number(descriptor.endTime) > now)) return [];
    const payment = Number(descriptor.data.buyType);
    const currencyId = Number(descriptor.data.itemId);
    const currency =
      payment === 4 ? names.item(currencyId) : payment === 3 ? "金砖" : "";
    const balance =
      payment === 4
        ? Number(inventory[currencyId]?.quantity ?? 0)
        : Number(role.diamond);
    return descriptor.data.goodsList.flatMap((conf, goodsIndex) => {
      const name = names.text(conf.title) || names.rewards(conf.rewardList);
      if (!name) return [];
      const price = Number(conf.price);
      const limit = Number(conf.limit ?? 1);
      const bought = Number(state.complete?.[goodsIndex] ?? 0);
      const remaining = limit < 0 ? null : Math.max(0, limit - bought);
      const reason =
        payment === 1
          ? "需在游戏内充值"
          : !currency ||
              !integer(price) ||
              !integer(balance) ||
              !integer(bought) ||
              !Number.isSafeInteger(limit) ||
              limit < -1
            ? "付款信息不完整"
            : remaining === 0
              ? "已售罄"
              : balance < price
                ? "对应资源不足"
                : "";
      return [
        {
          ...option(
            goodsIndex,
            name,
            { goodsIndex },
            reason,
            `${price === 0 ? "免费" : `${currency || "游戏内付款"} ×${price}`} · ${remaining == null ? "不限购" : `剩余 ${remaining} 次`}`,
          ),
          quantityKey: "buyNum",
          maxCount: Math.min(
            remaining ?? 100,
            price > 0 ? Math.floor(balance / price) : 100,
          ),
        },
      ];
    });
  }
  if (source === "weeklyRewards") {
    const descriptor = activity?.activity?.find(
      (entry) => Number(entry.type) === 2 && Number(entry.endTime) > now,
    );
    if (!descriptor || !activity.myTotalInfo?.[descriptor.id]) return [];
    // Official ConstantConf.boxWeekRoundReward is an ordered array. Its index,
    // including zero, is the selectRewardsMap key; it is NOT an itemId.
    const state = activity.myTotalInfo[descriptor.id];
    const maxRound = Number(descriptor.data?.rounds);
    const maxNum = Number(descriptor.data?.rewards?.at(-1)?.num);
    if (
      !integer(state.rounds) ||
      !integer(state.num) ||
      !integer(maxRound) ||
      !integer(maxNum)
    )
      throw new Error("宝箱周轮次数据不完整");
    const completed = Math.max(
      Number(state.rounds) -
        (Number(state.rounds) >= maxRound &&
        Number(state.num) >= maxNum &&
        maxRound > 0
          ? 0
          : 1),
      0,
    );
    const statistic = "week:act:cr:cnt:2";
    const claimedAt = Number(role.statisticsTime?.[statistic]) * 1000;
    const claimed =
      claimedAt >= Number(descriptor.openTime) &&
      claimedAt <= Number(descriptor.endTime)
        ? Number(role.statistics?.[statistic] ?? 0)
        : 0;
    const remaining = Math.max(completed - claimed, 0);
    return (config.ConstantConf?.boxWeekRoundReward ?? []).flatMap(
      (reward, index) => {
        const name = names.rewards([reward]);
        return name
          ? [
              option(
                index,
                name,
                { itemId: index },
                remaining > 0 ? "" : "暂无未领取的完整轮次",
                `可领取 ${remaining} 轮`,
              ),
            ]
          : [];
      },
    );
  }
  if (["activityTasks", "milestones", "totalRewards"].includes(source)) {
    const active = activeCommon(config, activity, now);
    return active.flatMap(({ id, state, conf }) => {
      const title = names.text(conf.name) || names.text(conf.bannerTitle);
      if (!title) return [];
      if (source === "milestones") {
        const rewards = rows(config.MilestoneRewardConf).filter(
          (row) => Number(row.actId) === id,
        );
        if (!rewards.length) return [];
        return [
          option(
            id,
            title,
            { activityId: id },
            "",
            "领取当前阶段奖励，达成条件由游戏校验",
          ),
        ];
      }
      const table =
        source === "activityTasks"
          ? config.MissionConf
          : config.CumulativeChargeActConf;
      return rows(table)
        .filter((row) => Number(row.actId) === id)
        .flatMap((row) => {
          const reward = names.rewards(row.missionReward ?? row.chargeReward);
          if (!reward) return [];
          const record = state.record?.[row.id];
          const claimed = record === true || Number(record) > 0;
          const condition =
            source === "activityTasks"
              ? `${{ 1: "招募", 2: "宝箱积分", 3: "钓鱼", 4: "开罐", 5: "消耗金砖" }[row.missionType] || "任务"}达到 ${row.missionNum}`
              : `累计充值 ${Number(row.chargeAmount) / 100} 元`;
          return [
            option(
              `${id}:${row.id}`,
              `${title} · ${reward}`,
              source === "activityTasks"
                ? { activityId: id, missionId: Number(row.id) }
                : { activityId: id, configId: Number(row.id) },
              claimed
                ? "已领取"
                : source === "activityTasks" &&
                    Number(state.task?.[row.missionType] ?? 0) <
                      Number(row.missionNum)
                  ? "任务进度未达标"
                  : source === "totalRewards" &&
                      Number(
                        role.statistics?.[`common:total:charge:${id}`] ?? 0,
                      ) < Number(row.chargeAmount)
                    ? "累计充值未达标"
                    : "",
              condition,
            ),
          ];
        });
    });
  }
  if (source === "reward") {
    if (
      [
        "extendedCelebratePersonal",
        "extendedCelebrateServer",
        "extendedCelebrateShare",
      ].includes(task.value)
    ) {
      const state = extra.celebrate?.signCelebrate;
      if (!state?.personalClaimMap || !state.fullServerClaimMap)
        throw new Error("未读取到当前周年庆祝福数据");
      const full = task.value === "extendedCelebrateServer";
      return rows(full ? config.GlobalSignConf : config.SingleSignConf).flatMap(
        (row) => {
          const name = names.rewards(row.reward);
          if (!name) return [];
          let reason = "";
          if (full)
            reason =
              state.fullServerClaimMap[row.id] != null
                ? "已领取"
                : Number(extra.celebrate.fullServerSignCnt) <
                    Number(row.globalNum)
                  ? "全服签到未达标"
                  : "";
          else {
            const record = state.personalClaimMap[row.id];
            if (!record) return [];
            if (task.value === "extendedCelebratePersonal")
              reason = !(Number(record.canClaimCnt) > Number(record.claimCnt))
                ? "暂无可领取次数"
                : "";
            else if (Number(row.isShare) !== 1) return [];
          }
          return [
            option(
              Number(row.id),
              name,
              { id: Number(row.id) },
              reason,
              full
                ? `全服签到 ${row.globalNum} 人`
                : `签到第 ${row.singleNum} 天`,
            ),
          ];
        },
      );
    }
    const table = {
      batchLegacyClaimGiftTask: ["LegacyGiftTaskConf", "id", "taskDesc", ""],
      batchClaimApexRewards: [
        "ApexTaskConf",
        "confId",
        "description",
        "taskReward",
      ],
      extendedWeirdLegionTask: [
        "EvoTowerTaskConf",
        "taskId",
        "taskDesc",
        "taskReward",
      ],
      extendedGachaStage: ["GachaAccumRewardConf", "stageId", "", "reward"],
    }[task.value];
    if (table) {
      const [tableName, key, titleKey, rewardKey] = table;
      return rows(config[tableName]).flatMap((row) => {
        if (
          task.value === "extendedWeirdLegionTask" &&
          Number(row.evoTowerTaskTypeGroup) !== 1
        )
          return [];
        const title = titleKey
          ? names
              .text(row[titleKey])
              .replace(
                /\{0\}/g,
                String(row.completeValue ?? row.taskPara ?? ""),
              )
          : `累计扭蛋 ${row.num} 次`;
        const reward = rewardKey ? names.rewards(row[rewardKey]) : "";
        let reason = "";
        if (task.value === "extendedGachaStage") {
          const gacha = extra.gacha?.roleGacha;
          if (!gacha?.claimedStageIdMap || !integer(gacha.stageGachaCnt))
            throw new Error("未读取到扭蛋累计奖励进度");
          reason = gacha.claimedStageIdMap[row.id]
            ? "已领取"
            : Number(gacha.stageGachaCnt) < Number(row.num)
              ? "累计扭蛋次数不足"
              : "";
        }
        if (!title) return [];
        return [
          option(
            Number(row.id ?? row.Id),
            title,
            { [key]: Number(row.id ?? row.Id) },
            reason,
            reward || "达成条件由游戏校验",
          ),
        ];
      });
    }
    if (task.value === "charge_claimaddup_rewards") {
      if (!integer(activity?.totalChargeDay) || !role.addUpCharge)
        throw new Error("游戏未返回积分好礼领取进度");
      return rows(config.DayBuyConf).flatMap((row) => {
        const name = names.rewards(row.params);
        const title = names
          .text(row.description)
          .replace(/\{0\}/g, String(row.completeValue));
        if (!name || !title) return [];
        const reason = role.addUpCharge[row.id]
          ? "已领取"
          : Number(activity.totalChargeDay) < Number(row.id)
            ? "尚未达标"
            : "";
        return [
          option(
            Number(row.id),
            `${title} · ${name}`,
            { id: Number(row.id) },
            reason,
          ),
        ];
      });
    }
  }
  throw new Error("该功能的游戏数据来源尚不可用");
}

/** Read-only commands are deliberately enumerated; previews cannot execute a game operation. */
export const selectionReadCommands = [
  "presetteam_getinfo",
  "nmext_getinfo",
  "collection_getinfo",
  "celebrate_getcelebrateinfo",
  "car_getmemberhelpingcnt",
  "saltroad_getoutopponent",
  "legion_storegoodslist",
  "gacha_getinfo",
];

export async function loadExtendedChoices(send, taskValue, dependencies = {}) {
  const task = getExtendedTask(taskValue);
  if (!task) throw new Error("未知扩展功能");
  const fields = task.fields.filter((field) => field.type === "gameSelection");
  const sources = new Set(fields.map((field) => field.source));
  const { config, language } = await loadOfficialGameConfig(send, dependencies);
  const role = bodyOf(await send("role_getroleinfo", {}))?.role;
  if (!role) throw new Error("未读取到角色信息");
  const extra = {};
  let activity;
  if (
    taskValue === "charge_claimaddup_rewards" ||
    [
      "activityTasks",
      "milestones",
      "totalRewards",
      "weeklyGoods",
      "weeklyRewards",
    ].some((source) => sources.has(source))
  ) {
    const response = bodyOf(await send("activity_get", {}));
    activity = response?.activity ?? response;
  }
  const read = async (key, command, body = {}) => {
    extra[key] = bodyOf(await send(command, body));
  };
  if (sources.has("formations")) await read("presets", "presetteam_getinfo");
  if (sources.has("starBoss")) await read("star", "nmext_getinfo");
  if (sources.has("collection") || sources.has("collectionGoods"))
    await read("collection", "collection_getinfo");
  if (sources.has("carResearch")) await read("car", "car_getrolecar");
  let notice = "";
  if (sources.has("legionGoods")) {
    await read("legion", "legion_getinfo");
    await read("legionShop", "legion_storegoodslist");
  }
  if (sources.has("collectionGoods"))
    await read("collectionShop", "collection_goodslist");
  if (sources.has("carHelpers")) {
    try {
      await read("legion", "legion_getinfo");
      await read("help", "car_getmemberhelpingcnt");
    } catch {
      notice = "暂未读取到俱乐部协助名单，可选择不指定协助角色后发车";
    }
  }
  if (taskValue.startsWith("extendedCelebrate") && sources.has("reward"))
    await read("celebrate", "celebrate_getcelebrateinfo");
  if (taskValue === "batchLegacyClaimGiftTask")
    await read("legacy", "legacy_getinfo");
  if (taskValue === "batchClaimApexRewards")
    await read("apex", "apex_getroleinfo");
  if (taskValue === "extendedGachaStage") await read("gacha", "gacha_getinfo");
  if (taskValue === "extendedWeirdLegionTask")
    await read("evo", "evotower_getinfo");
  if (sources.has("cheerLegions")) {
    const day = new Date((dependencies.now ?? Date.now)() + 8 * 3600000)
      .toISOString()
      .slice(0, 10);
    const war = bodyOf(await send("saltroad_getwartype", { date: day }));
    const phase = war?.phase ?? war?.date ?? war?.currentPhase;
    if (phase == null || String(phase) === "")
      throw new Error("未读取到本期助威对阵");
    await read("opponents", "saltroad_getoutopponent", {
      phase: String(phase),
    });
  }
  const snapshot = {
    task,
    config,
    language,
    role,
    activity,
    extra,
    now: (dependencies.now ?? Date.now)(),
  };
  const result = {};
  for (const field of fields)
    result[field.key] = buildGameSelection(field.source, snapshot);
  if (sources.has("packs"))
    notice = "按背包库存列出礼包；自选或特殊礼包请在游戏内打开。";
  return { fields: result, notice };
}

export function resolveGameSelections(
  taskValue,
  settings,
  choices,
  log = () => {},
) {
  const task = getExtendedTask(taskValue);
  const result = { ...settings };
  for (const field of task.fields.filter(
    (field) => field.type === "gameSelection",
  )) {
    const selected = choices.fields?.[field.key]?.find(
      (entry) => entry.value === settings[field.key],
    );
    if (!selected)
      throw new Error(
        `所选${field.label}已变化或当前角色不可用，请重新读取游戏数据`,
      );
    if (selected.disabled)
      throw new Error(`${selected.name}：${selected.reason || "当前不可用"}`);
    delete result[field.key];
    Object.assign(result, selected.settings);
    if (selected.quantityKey && Number.isSafeInteger(selected.maxCount)) {
      result[selected.quantityKey] = Math.min(
        result[selected.quantityKey],
        selected.maxCount,
      );
      if (!(result[selected.quantityKey] > 0))
        throw new Error(`${selected.name}：当前可用数量为零`);
    }
    log(`已核验${field.label}：${selected.name}`);
  }
  return result;
}
