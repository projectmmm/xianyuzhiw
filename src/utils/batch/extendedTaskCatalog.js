const number = (key, label, defaultValue = 1, max = 9999, min = 1) => ({
  key,
  label,
  type: "number",
  default: defaultValue,
  min,
  max,
});
const choice = (key, label, options, defaultValue = options[0].value) => ({
  key,
  label,
  type: "select",
  options,
  default: defaultValue,
});
const count = () => number("count", "最多执行次数", 1, 100);
const item = () => number("itemId", "道具 ID", 3007, 999999);
const activity = () => number("activityId", "活动 ID", 0, 999999999, 0);
const goods = () => number("goodsIndex", "商品序号", 0, 9999, 0);
const shop = (key = "id") => number(key, "商品 ID", 1, 999999);
const id = (key = "id", label = "奖励 ID") => number(key, label, 1, 999999999);
const task = (
  value,
  label,
  group,
  command,
  fields = [],
  body = {},
  extra = {},
) => ({ value, label, group, command, fields, body, ...extra });

// Only explicit, registered operations are exposed; never evaluate user-supplied code.
export const extendedTaskCatalog = [
  task("batchGenieChallenge", "灯神挑战", "道具与养成", null, [
    choice("genieId", "势力", [
      { label: "魏", value: 1 },
      { label: "蜀", value: 2 },
      { label: "吴", value: 3 },
      { label: "群", value: 4 },
    ]),
    number("formation", "阵容槽（0 当前）", 0, 6, 0),
    count(),
  ]),
  task("batchDeepSeaChallenge", "深海挑战", "道具与养成", null, [
    number("formation", "阵容槽（0 当前）", 0, 6, 0),
    count(),
  ]),
  task("batch_star_challenge", "十殿星级挑战", "十殿", null, [
    id("bossId", "首领 ID"),
    number("formation", "阵容槽（0 当前）", 0, 6, 0),
    number("presetTeamType", "预设类型", 4, 9),
  ]),
  task(
    "skinTreasure",
    "换皮寻宝（含新区）",
    "活动",
    "activity_maydaylottery",
    [count()],
    { times: 1 },
  ),
  task("claim_guess_coin", "领取助威币", "日常与奖励", null),
  task("batchSaltRoadCheer", "天宫助威", "俱乐部与商店", "saltroad_outcheer", [
    id("legionId", "助威俱乐部 ID"),
  ]),
  task("extendedFilmTasks", "胶卷任务奖励", "活动", null),
  task("filmClaim", "胶卷出片领奖", "活动", null),
  task("extendedFilmPhoto", "放入胶卷", "活动", null, [
    number("number", "最多放入胶卷", 10, 100),
  ]),
  task(
    "extendedCelebratePersonal",
    "周年庆个人奖励",
    "活动",
    "celebrate_claimpersonal",
    [id()],
  ),
  task(
    "extendedCelebrateServer",
    "周年庆全服奖励",
    "活动",
    "celebrate_claimfullserver",
    [id()],
  ),
  task(
    "extendedActivityGoods",
    "活动商店购买",
    "活动",
    "activity_commonbuygoods",
    [shop("goodsId"), number("num", "购买数量", 1, 100)],
  ),
  task("batchSaltFieldDig", "盐场自动刨地", "盐场", null, [
    number("maxActions", "最多刨地次数", 100, 2000),
    number("minutes", "最长运行分钟", 30, 90),
  ]),
  task("batchSaltFieldLineup", "盐场自动布阵", "盐场", null, []),
  task("batchNightmareChallengePresets", "十殿组队挑战", "十殿", null, [
    number("minutes", "最长运行分钟", 30, 120),
    number("maxLevel", "挑战至第几殿", 8, 8),
    number("formation", "阵容槽（0 使用当前）", 0, 6, 0),
    choice("autoRestore", "自动恢复", [
      { label: "关闭", value: false },
      { label: "开启", value: true },
    ]),
    choice("autoRage", "自动满怒", [
      { label: "关闭", value: false },
      { label: "开启", value: true },
    ]),
  ]),
  task("batchHangUpUpgrade", "挂机升级", "日常与奖励", "system_hangupupgrade", [
    number("upgradeNum", "升级次数", 1, 100),
  ]),
  task("batchLegacyHangup", "开启残卷挂机", "日常与奖励", "legacy_beginhangup"),
  task(
    "batchLegacyClaimGiftTask",
    "领取残卷赠送奖励",
    "日常与奖励",
    "legacy_claimgifttask",
    [id()],
  ),
  task(
    "batchClaimApexRewards",
    "领取竞技大厅道具",
    "日常与奖励",
    "apex_taskclaim",
    [id("confId")],
  ),
  task("batchApexGuessClaim", "逐鹿竞猜领奖", "日常与奖励", null),
  task(
    "charge_claimaddup_rewards",
    "领取积分好礼",
    "日常与奖励",
    "charge_claimaddup",
    [id()],
  ),
  task("pkroom_appoint", "预约直播", "日常与奖励", "pkroom_appoint"),
  task("batch_mail_claim_and_cleanup", "邮箱领取与整理", "日常与奖励", null, [
    choice("cleanup", "整理方式", [
      { label: "只领取附件", value: false },
      { label: "领取并标记已读", value: true },
    ]),
  ]),
  task(
    "batchOpenDiamondBox",
    "开钻石宝箱",
    "道具与养成",
    null,
    [number("number", "最多开启数量", 1, 1000)],
    { itemId: 2005 },
  ),
  task("batchOpenFragmentPacks", "开碎片与养成礼包", "道具与养成", null, [
    choice("itemId", "礼包", [
      { label: "随机红将碎片", value: 3007 },
      { label: "随机紫将碎片", value: 3005 },
      { label: "随机橙将碎片", value: 3006 },
      { label: "精铁福袋", value: 3008 },
      { label: "进阶石福袋", value: 3009 },
      { label: "白玉福袋", value: 3011 },
      { label: "扳手福袋", value: 3012 },
      { label: "赛车改装礼盒", value: 35011 },
      { label: "金币礼包", value: 3001 },
      { label: "金砖礼包", value: 3002 },
      { label: "晶石福袋", value: 3010 },
      { label: "怪异礼包", value: 37005 },
    ]),
    number("number", "最多开启数量", 1, 1000),
  ]),
  task("extendedUseItem", "使用指定道具", "道具与养成", null, [
    item(),
    number("number", "最多使用数量", 1, 1000),
  ]),
  task(
    "batchBookBatchUpgrade",
    "按阵营图鉴升星",
    "道具与养成",
    "book_batchupgrade",
    [
      choice("club", "阵营", [
        { label: "全部", value: 0 },
        { label: "魏", value: 1 },
        { label: "蜀", value: 2 },
        { label: "吴", value: 3 },
        { label: "群", value: 4 },
      ]),
      choice("bookType", "图鉴", [
        { label: "英雄", value: "hero" },
        { label: "鱼灵", value: "fish" },
        { label: "皮肤", value: "skin" },
      ]),
    ],
  ),
  task(
    "batchFishUpgrade",
    "鱼灵升星",
    "道具与养成",
    "artifact_upgradestar",
    [item(), count()],
    { heroId: -1 },
  ),
  task("extendedFourSaintOrder", "四圣升级", "道具与养成", "hb_upgradeorder", [
    number("heroId", "英雄 ID", 107, 9999),
    count(),
  ]),
  task("extendedFourSaintQuench", "四圣洗练", "道具与养成", "hb_quench", [
    number("heroId", "英雄 ID", 107, 9999),
    count(),
  ]),
  task(
    "batchCollectionActivate",
    "橱窗咸将激活",
    "道具与养成",
    "collection_activate",
    [
      number("poolType", "卡池类型", 1, 99),
      id("id", "咸将 ID"),
      number("seriesId", "系列 ID", 1, 999),
    ],
    { isAll: false },
  ),
  task(
    "extendedCollectionTotal",
    "领取橱窗总奖励",
    "道具与养成",
    "collection_claimtotal",
  ),
  task("use_spotted_egg", "使用宠物蛋", "宠物", null, [
    choice("itemId", "宠物蛋", [
      { label: "斑点蛋", value: 37011 },
      { label: "盐壳蛋", value: 37012 },
      { label: "亮纹蛋", value: 37013 },
    ]),
    count(),
  ]),
  task("batch_pet_merge", "宠物合成", "宠物", null, [
    number("maxLevel", "允许合成的最高星级", 4, 6),
    number("count", "最多合成次数", 30, 100),
  ]),
  task("egg_merge_cycle", "点蛋与合成循环", "宠物", null, [
    number("maxLevel", "允许合成的最高星级", 4, 6),
    number("count", "最多循环次数", 30, 100),
  ]),
  task("batch_pet_upgrade", "上阵宠物升级", "宠物", null, [count()]),
  task("claim_pet_book", "激活并领取宠物图鉴", "宠物", null),
  task("batchClaimCars", "收取已完成车辆", "车队", null),
  task("batchSmartSendCar", "按品质发车", "车队", null, [
    number("minColor", "最低品质（1～6）", 1, 6),
    number("refreshLimit", "最多免费刷新次数", 0, 50, 0),
    number("goldThreshold", "奖励金砖下限（0 不限）", 0, 999999, 0),
    number("recruitThreshold", "招募令下限（0 不限）", 0, 9999, 0),
    number("jadeThreshold", "白玉下限（0 不限）", 0, 999999, 0),
    number("ticketThreshold", "刷新券下限（0 不限）", 0, 9999, 0),
    number(
      "helperId",
      "协助角色 ID（0 不指定）",
      0,
      Number.MAX_SAFE_INTEGER,
      0,
    ),
  ]),
  task("batchCarResearchUpgrade", "车队升级改装", "车队", "car_research", [
    number("researchId", "改装项目", 1, 99),
    count(),
  ]),
  task(
    "extendedCarClaimParts",
    "领取改装消耗奖励",
    "车队",
    "car_claimpartconsumereward",
  ),
  task("batchAirdropClaim", "营地空投抽奖领奖", "俱乐部与商店", "club_draw", [
    count(),
  ]),
  task("extendedCampSignup", "营地报名", "俱乐部与商店", "club_signup"),
  task(
    "extendedCampClaimLevel",
    "营地等级奖励",
    "俱乐部与商店",
    "club_claimlevelreward",
  ),
  task(
    "legion_buy_red_jade",
    "购买四圣红玉",
    "俱乐部与商店",
    "legion_storebuygoods",
    [count()],
    { id: 202 },
  ),
  task(
    "legion_buy_spotted_egg",
    "购买斑点蛋",
    "俱乐部与商店",
    "legion_storebuygoods",
    [count()],
    { id: 205 },
  ),
  task(
    "salt_crystal_shop_buy",
    "盐晶商店购买",
    "俱乐部与商店",
    "legion_storebuygoods",
    [
      choice("id", "商品", [
        { label: "四圣蓝玉", value: 201 },
        { label: "四圣红玉", value: 202 },
        { label: "成长脆饼", value: 203 },
        { label: "幻彩灵果", value: 204 },
        { label: "斑点蛋", value: 205 },
      ]),
      count(),
    ],
    { num: 1 },
  ),
  task(
    "salt_ingot_shop_buy",
    "盐锭商店购买",
    "俱乐部与商店",
    "legion_storebuygoods",
    [
      choice("id", "商品", [
        { label: "皮肤币", value: 1 },
        { label: "军团币", value: 2 },
        { label: "进阶石", value: 3 },
        { label: "精铁", value: 4 },
        { label: "白玉", value: 5 },
        { label: "四圣宝珠碎片", value: 6 },
      ]),
      count(),
    ],
    { num: 0 },
  ),
  task("apex_buy", "逐鹿商店购买", "俱乐部与商店", "apex_buy", [
    choice("shopId", "商品", [
      { label: "饼干", value: 1 },
      { label: "幻彩灵果", value: 2 },
      { label: "四圣转换镜", value: 3 },
    ]),
    number("buyCnt", "购买数量", 1, 100),
  ]),
  task(
    "legion_buy_store_items",
    "助威商店购买",
    "俱乐部与商店",
    "legion_storebuygoods",
    [shop(), count()],
  ),
  task(
    "collection_exchange",
    "珍宝阁兑换",
    "俱乐部与商店",
    "collection_exchange",
    [shop("goodsId"), count()],
    { goodsNum: 1 },
  ),
  task(
    "weekly_market_buy",
    "黑市周购买",
    "俱乐部与商店",
    "activity_buystoregoods",
    [goods(), number("buyNum", "购买数量", 1, 100)],
    { activityId: 9 },
  ),
  task(
    "weekly_market_free_gift",
    "黑市周免费金砖",
    "俱乐部与商店",
    "activity_buystoregoods",
    [],
    { activityId: 9, goodsIndex: 0, buyNum: 1 },
  ),
  task(
    "nightmare_draw_lottery",
    "十殿抽奖",
    "十殿",
    "nightmare_clickturntable",
    [count()],
  ),
  task(
    "nightmare_claim_book_reward",
    "十殿抽奖达标奖励",
    "十殿",
    "nightmare_claimbook",
  ),
  task(
    "extendedNightmareWeekly",
    "十殿周奖励",
    "十殿",
    "nightmare_claimweekreward",
  ),
  task(
    "extendedStarReward",
    "领取十殿星级抽奖次数",
    "十殿",
    "nmext_claimstarreward",
  ),
  task("star_drawturntable", "十殿星级抽奖", "十殿", "nmext_drawturntable", [
    choice("itemId", "星级", [
      { label: "一星", value: 36997 },
      { label: "二星", value: 36998 },
      { label: "三星", value: 36999 },
    ]),
    count(),
  ]),
  task(
    "claim_weird_tower_pass",
    "怪异塔通行证领奖",
    "活动",
    "activity_battlepassrewardclaim",
    [],
    { battlePassId: 1003 },
  ),
  task(
    "extendedWeirdLegionTask",
    "怪异塔俱乐部任务领奖",
    "活动",
    "evotower_claimlegiontask",
    [id("taskId")],
  ),
  task(
    "extendedWeirdPrivilege",
    "怪异塔俱乐部特权领奖",
    "活动",
    "evotower_claimlegionprivilege",
  ),
  task(
    "batchClaimBoxWeeklyRewards",
    "宝箱周自选大奖",
    "活动",
    "activity_claimweekactreward",
    [item()],
    { typ: 2 },
  ),
  task(
    "extendedActivityTask",
    "领取活动任务",
    "活动",
    "activity_claimtaskreward",
    [activity(), id("missionId")],
  ),
  task(
    "extendedActivityMilestone",
    "领取活动阶段奖励",
    "活动",
    "activity_claimmilestone",
    [activity()],
  ),
  task("batchActivityExchange", "消耗活动兑换", "活动", "activity_exchange", [
    activity(),
    shop("goodsId"),
    number("quantity", "兑换数量", 1, 100),
  ]),
  task("batchAutumnUseItem", "消耗助威道具", "活动", "autumn_useitem", [
    number("itemNum", "消耗数量", 1, 1000),
  ]),
  task("batchUseActivityItem", "使用活动礼包道具", "活动", null, [
    item(),
    number("number", "最多使用数量", 1, 1000),
  ]),
  task(
    "extendedGachaStage",
    "领取扭蛋阶段奖励",
    "活动",
    "gacha_claimstagereward",
    [id("stageId")],
  ),
  task("extendedCelebrateSign", "周年庆签到", "活动", "celebrate_sign"),
  task("extendedCelebrateShare", "周年庆分享奖励", "活动", "celebrate_share", [
    id(),
  ]),
  task(
    "extendedCommonTotal",
    "活动累计奖励",
    "活动",
    "common_claimtotalreward",
    [activity(), id("configId")],
  ),
];

export function getExtendedTask(value) {
  return extendedTaskCatalog.find((task) => task.value === value);
}

export function normalizeExtendedTaskSettings(value, settings = {}) {
  const task = getExtendedTask(value);
  if (!task) throw new Error("未知扩展功能");
  const result = {};
  for (const field of task.fields) {
    if (settings?.[field.key] === null)
      throw new Error(`${field.label}不能为空`);
    const input = settings?.[field.key] ?? field.default;
    if (field.type === "number") {
      const number = Number(input);
      if (
        !Number.isSafeInteger(number) ||
        number < field.min ||
        number > field.max
      )
        throw new Error(`${field.label}应为 ${field.min}～${field.max} 的整数`);
      result[field.key] = number;
    } else if (field.type === "select") {
      if (!field.options.some((option) => option.value === input))
        throw new Error(`${field.label}无效`);
      result[field.key] = input;
    } else {
      result[field.key] = String(input).trim();
      if (!result[field.key] || result[field.key].length > 120)
        throw new Error(`${field.label}无效`);
    }
  }
  return result;
}
