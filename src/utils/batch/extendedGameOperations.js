import { loadOfficialGameConfig } from "../gameActivityGoods.js";
import { gameNames } from "../gameDataNames.js";
import {
  loadExtendedChoices,
  resolveGameSelections,
} from "../gameSelections.js";
import {
  deriveFilmActivityIds,
  getBattlePreset,
  getFilmPiece,
} from "./extendedFeatureHelpers.js";
import {
  getExtendedTask,
  normalizeExtendedTaskSettings,
} from "./extendedTaskCatalog.js";

export const PET_IDS = Array.from({ length: 7 }, (_, index) =>
  [1, 2, 3, 4].map((type) => (index + 1) * 100 + type),
).flat();
const PET_ID_SET = new Set(PET_IDS);
const EGG_IDS = [37011, 37012, 37013];

export function normalizeCars(response) {
  const body = response?.body ?? response;
  const roleCar = body?.roleCar ?? body?.rolecar;
  const map = roleCar?.carDataMap ?? roleCar?.cardatamap;
  if (map && typeof map === "object")
    return Object.entries(map).map(([id, car]) => ({ ...car, id }));
  const cars = body?.cars ?? body?.list ?? body?.carList ?? body?.vehicles;
  if (Array.isArray(cars)) return cars;
  if (cars && typeof cars === "object") return Object.values(cars);
  throw new Error("车辆数据不完整，已停止操作");
}

export function findPetMergePair(role, maxLevel) {
  const pets = role?.petData?.pets;
  if (!pets || typeof pets !== "object") throw new Error("未获取到宠物数据");
  const candidates = Object.entries(pets)
    .map(([slot, pet]) => ({
      ...pet,
      slot: Number(slot),
      petId: Number(pet.petId ?? pet.petid),
      uId: pet.uId ?? pet.uid,
    }))
    .filter(
      (pet) =>
        Number.isInteger(pet.slot) &&
        pet.slot >= 0 &&
        pet.uId != null &&
        PET_ID_SET.has(pet.petId) &&
        !pet.isLocked &&
        !pet.locked,
    )
    .sort((a, b) => a.petId - b.petId || a.slot - b.slot);
  for (const from of candidates) {
    const level = Math.floor(from.petId / 100);
    if (level > maxLevel || level >= 7) continue;
    const matches = candidates.filter(
      (to) => to.slot !== from.slot && Math.floor(to.petId / 100) === level,
    );
    const to = matches.find((pet) => pet.petId === from.petId) ?? matches[0];
    if (to)
      return {
        fromSlotUId: { slot: from.slot, uId: from.uId },
        toSlotUId: { slot: to.slot, uId: to.uId },
        inheritSlot: level >= 4 ? from.slot : 0,
      };
  }
  return null;
}

function getRole(response) {
  const role = response?.role ?? response?.body?.role ?? response?.data?.role;
  if (!role || typeof role !== "object")
    throw new Error("角色数据不完整，已停止操作");
  return role;
}
function quantity(role, itemId) {
  if (!role.items || typeof role.items !== "object")
    throw new Error("背包数据不完整");
  const result = Number(role.items[itemId]?.quantity ?? 0);
  if (!Number.isSafeInteger(result) || result < 0)
    throw new Error("背包数量无效");
  return result;
}
const petSignature = (role) =>
  JSON.stringify(
    Object.entries(role.petData?.pets ?? {}).sort(([a], [b]) =>
      a.localeCompare(b),
    ),
  );

/** Run a single account through the supplied, already-owned game connection. */
export async function runExtendedGameOperation(value, settings, context) {
  const definition = getExtendedTask(value);
  let options = normalizeExtendedTaskSettings(value, settings);
  const selectedSettings = { ...options };
  const { send, check = () => {}, log = () => {}, now = Date.now } = context;
  const roleInfo = async () => getRole(await send("role_getroleinfo", {}));
  const hasSelections = definition.fields.some(
    (field) => field.type === "gameSelection",
  );
  const revalidate = async () => {
    if (!hasSelections) return;
    const choices = await (context.loadChoices
      ? context.loadChoices(value)
      : loadExtendedChoices(send, value));
    check();
    options = resolveGameSelections(value, selectedSettings, choices, log);
  };
  await revalidate();
  if (
    [
      "batchGenieChallenge",
      "batchDeepSeaChallenge",
      "batch_star_challenge",
    ].includes(value)
  ) {
    for (let index = 0; index < (options.count || 1); index++) {
      const preset = getBattlePreset(
        await send("presetteam_getinfo", {}),
        options.formation,
      );
      const role = await roleInfo();
      const petUId =
        role.petData?.pets?.[-1]?.uId ?? role.petData?.pets?.[-1]?.uid ?? "";
      const command =
        value === "batch_star_challenge"
          ? "nmext_startboss"
          : "fight_startgenie";
      const body =
        value === "batch_star_challenge"
          ? {
              ...preset,
              bossId: options.bossId,
              presetTeamType: options.presetTeamType,
            }
          : {
              ...preset,
              genieId: value === "batchDeepSeaChallenge" ? 5 : options.genieId,
              petUId,
            };
      const battle = await send(command, body);
      const result = battle.result ?? battle.battleData?.result;
      const won = battle.win ?? result?.win ?? result?.isWin;
      log(
        won === true
          ? "战斗胜利"
          : won === false
            ? "战斗失败，停止继续挑战"
            : "挑战请求已响应，请查看游戏战斗结果",
      );
      if (won !== true) return;
    }
    return;
  }
  if (value === "claim_guess_coin") {
    const response = await send("warguess_getguessinfo", {});
    const list = response?.guessLegionList ?? response?.body?.guessLegionList;
    if (!Array.isArray(list)) throw new Error("助威信息不完整");
    for (const item of list)
      if (item.guessId != null && item.id != null)
        await send("warguess_guessclaim", {
          guessId: item.guessId,
          legionId: item.id,
        });
    return;
  }
  if (["extendedFilmTasks", "filmClaim", "extendedFilmPhoto"].includes(value)) {
    const { config, language } = await (context.loadConfig
      ? context.loadConfig()
      : loadOfficialGameConfig(send));
    const response = await send("activity_get", {});
    const activity =
      (response?.body ?? response)?.activity ?? response?.body ?? response;
    const ids = deriveFilmActivityIds(response, config, now());
    const names = gameNames(config, language);
    log(
      `已读取咸来入镜：${ids.missions.length} 项任务、${ids.pieces.length} 个拍摄阶段`,
    );
    if (value === "extendedFilmTasks") {
      if (!ids.taskActId || !ids.missions.length)
        throw new Error("未读取到咸来入镜任务配置，请刷新游戏数据");
      const taskState = activity?.warOrderActivityInfo?.[ids.taskActId];
      if (!taskState?.complete || !taskState?.taskClaimed)
        throw new Error("未读取到胶卷任务进度，请刷新游戏数据");
      for (const mission of ids.missions) {
        check();
        if (
          taskState.taskClaimed[mission.id] ||
          Number(taskState.complete[mission.id] ?? 0) <
            Number(mission.completeValue)
        )
          continue;
        const label = names
          .text(mission.description)
          .replace(/\{0\}/g, String(mission.completeValue));
        try {
          await send("activity_warordertaskclaim", {
            actId: ids.taskActId,
            missionId: Number(mission.id),
          });
        } catch (error) {
          check();
          if (!/\b(?:1100010|200020|400000)\b/.test(error.message)) throw error;
          log(`${label || "胶卷任务"}未达条件或已领取`);
        }
      }
      return;
    }
    let state = activity?.photoActivityInfo?.[ids.photoActId];
    let piece = getFilmPiece(state, ids.pieces);
    if (!piece) {
      log("咸来入镜已全部完成");
      return;
    }
    if (value === "filmClaim") {
      if (Number(state.num) < Number(piece.progressNeed)) {
        log("当前相片进度未满，暂无可领取奖励");
        return;
      }
      await send("activity_claimphotoreward", {
        activityId: ids.photoActId,
        pieceId: Number(piece.id),
      });
      return;
    }
    let remaining = options.number;
    while (remaining > 0) {
      const role = await roleInfo();
      piece = getFilmPiece(state, ids.pieces);
      if (!piece) return;
      const progressNeed = Number(piece.progressNeed);
      const num = Math.min(
        remaining,
        quantity(role, ids.itemId),
        progressNeed - Number(state.num || 0),
      );
      if (num <= 0) return;
      const oldPiece = Number(piece.id);
      await send("activity_photo", {
        activityId: ids.photoActId,
        num,
        pieceId: oldPiece,
      });
      const after = await send("activity_get", {});
      const next = ((after?.body ?? after)?.activity ?? after?.body ?? after)
        ?.photoActivityInfo?.[ids.photoActId];
      const nextPiece = getFilmPiece(next, ids.pieces);
      if (
        !nextPiece ||
        Number(nextPiece.id) !== oldPiece ||
        Number(next.num) < Number(state.num) + num
      )
        throw new Error("未确认胶卷放入进度，已停止");
      remaining -= num;
      state = next;
    }
    return;
  }
  if (["batchSaltFieldDig", "batchSaltFieldLineup"].includes(value))
    return context.runSaltField(value, options);
  if (["extendedActivityGoods", "batchActivityExchange"].includes(value)) {
    const kind = value === "batchActivityExchange" ? "exchange" : "shop";
    const goods = await context.loadActivityGoods(kind);
    check();
    const selected = goods.find((item) => item.goodsId === options.goodsId);
    if (!selected)
      throw new Error("所选商品已下架或当前角色尚未开放该活动，请重新读取商品");
    log(`商品：${selected.name}；单价：${selected.priceText}`);
    if (selected.remaining === 0) {
      log("该商品已达限购，跳过");
      return;
    }
    if (selected.disabled)
      throw new Error(selected.reason || "该商品当前不可购买");
    const requested = options.num ?? options.quantity;
    const affordable =
      selected.price > 0
        ? Math.floor(selected.balance / selected.price)
        : requested;
    const count = Math.min(
      requested,
      selected.remaining ?? requested,
      affordable,
    );
    if (!Number.isSafeInteger(count) || count <= 0)
      throw new Error("商品数量或可用余额无效");
    try {
      await send(
        definition.command,
        kind === "exchange"
          ? {
              activityId: selected.activityId,
              goodsId: selected.goodsId,
              quantity: count,
            }
          : { goodsId: selected.goodsId, num: count },
      );
    } catch (error) {
      if (/-10006\b/.test(error.message))
        throw new Error(
          `${selected.name}被服务器拒绝（-10006），请在游戏内确认商品及购买条件；本次未重试`,
        );
      throw error;
    }
    log(
      `${kind === "exchange" ? "兑换" : "购买"}${selected.name} ${count} 次，请求已成功响应`,
    );
    return;
  }
  if (
    [
      "batchOpenDiamondBox",
      "batchOpenFragmentPacks",
      "extendedUseItem",
      "batchUseActivityItem",
    ].includes(value)
  ) {
    const itemId = definition.body.itemId ?? options.itemId;
    const role = await roleInfo();
    const number = Math.min(options.number, quantity(role, itemId));
    if (!number) {
      log("该道具库存为 0，跳过");
      return;
    }
    await send(
      value === "batchOpenDiamondBox" ? "item_openbox" : "item_openpack",
      { itemId, number, index: 0 },
    );
    const after = await roleInfo();
    if (quantity(after, itemId) >= quantity(role, itemId))
      throw new Error("未确认库存减少，已停止，避免重复消耗");
    log(`已使用 ${quantity(role, itemId) - quantity(after, itemId)} 个道具`);
    return;
  }
  if (value === "use_spotted_egg") {
    for (let index = 0; index < options.count; index++) {
      const before = await roleInfo();
      if (!quantity(before, options.itemId)) return;
      await send("pet_openegg", { itemId: options.itemId });
      const after = await roleInfo();
      if (quantity(after, options.itemId) >= quantity(before, options.itemId))
        throw new Error("宠物蛋数量未减少，已停止");
    }
    return;
  }
  if (["batch_pet_merge", "egg_merge_cycle"].includes(value)) {
    for (let index = 0; index < options.count; index++) {
      const before = await roleInfo();
      const pair = findPetMergePair(before, options.maxLevel);
      if (pair) {
        await send("pet_merge", pair);
        if (petSignature(await roleInfo()) === petSignature(before))
          throw new Error("宠物合成未产生变化，已停止");
        log(`第 ${index + 1} 次宠物合成已确认`);
      } else if (value === "egg_merge_cycle") {
        const itemId = EGG_IDS.find((id) => quantity(before, id) > 0);
        if (!itemId) {
          log("没有可合成宠物和可用宠物蛋");
          return;
        }
        await send("pet_openegg", { itemId });
        const after = await roleInfo();
        if (quantity(after, itemId) >= quantity(before, itemId))
          throw new Error("宠物蛋数量未减少，已停止");
      } else {
        log("没有可合成的同星级宠物");
        return;
      }
    }
    return;
  }
  if (value === "batch_pet_upgrade") {
    for (let index = 0; index < options.count; index++) {
      const role = await roleInfo();
      const pet = role.petData?.pets?.[-1];
      const uId = pet?.uId ?? pet?.uid;
      if (uId == null) throw new Error("未找到上阵宠物");
      await send("pet_useexpitem", {
        slotUId: { slot: -1, uId },
        isOneClick: true,
      });
      const updated = (await roleInfo()).petData?.pets?.[-1];
      if (
        (updated?.uId ?? updated?.uid) !== uId ||
        !(Number(updated?.level) > Number(pet.level))
      )
        throw new Error("未确认宠物等级提升，已停止");
    }
    return;
  }
  if (value === "claim_pet_book") {
    for (const petId of PET_IDS) {
      for (const command of ["pet_activatebook", "pet_claimbookreward"]) {
        try {
          await send(command, { petId });
        } catch (error) {
          check();
          if (!/\b(?:1100010|12200050|200120|200140)\b/.test(error.message))
            throw error;
          log(`宠物 ${petId} 未达条件或已领取`);
        }
      }
    }
    return;
  }
  if (value === "batchApexGuessClaim") {
    const data = await send("apex_getroleinfo", {});
    const map = data?.apexRoleInfo?.guessClaimMap ?? data?.guessClaimMap;
    if (!map || typeof map !== "object")
      throw new Error("未获取到竞猜领奖状态");
    for (const [schedule, teams] of Object.entries(map)) {
      if (!teams || typeof teams !== "object") continue;
      for (const [teamId, claimed] of Object.entries(teams)) {
        if (!teamId.startsWith("_") && claimed === false)
          await send("apex_guessclaim", {
            scheduleId: Number(schedule),
            teamId,
          });
      }
    }
    return;
  }
  if (["batchClaimCars", "batchSmartSendCar"].includes(value)) {
    let cars = normalizeCars(await send("car_getrolecar", {}));
    const claimable = (car) => {
      const sendAt = Number(car.sendAt ?? car.sendat ?? 0);
      return (
        sendAt > 0 &&
        now() - (sendAt < 1e12 ? sendAt * 1000 : sendAt) >= 4 * 60 * 60 * 1000
      );
    };
    for (const car of cars)
      if (claimable(car)) await send("car_claim", { carId: String(car.id) });
    if (value === "batchClaimCars") return;
    cars = normalizeCars(await send("car_getrolecar", {}));
    const meetsConditions = (car) => {
      if (!(Number(car.color) >= options.minColor)) return false;
      const thresholds = [
        [options.goldThreshold, (reward) => Number(reward.type) === 2],
        [options.recruitThreshold, (reward) => Number(reward.itemId) === 1001],
        [options.jadeThreshold, (reward) => Number(reward.itemId) === 1022],
        [options.ticketThreshold, (reward) => Number(reward.itemId) === 35002],
      ].filter(([target]) => target > 0);
      return (
        !thresholds.length ||
        thresholds.some(
          ([target, matches]) =>
            (car.rewards || [])
              .filter(matches)
              .reduce(
                (total, reward) =>
                  total +
                  Number(
                    reward.value ??
                      reward.num ??
                      reward.quantity ??
                      reward.count ??
                      0,
                  ),
                0,
              ) >= target,
        )
      );
    };
    let refreshed = 0;
    for (let car of cars) {
      if (Number(car.sendAt ?? car.sendat ?? 0) !== 0) continue;
      if (value !== "batchSmartSendCar") continue;
      // Only a server-confirmed first refresh is free. Never fall back to gold.
      if (
        !meetsConditions(car) &&
        car.refreshCount === 0 &&
        refreshed < options.refreshLimit
      ) {
        await send("car_refresh", { carId: String(car.id) });
        refreshed++;
        car = normalizeCars(await send("car_getrolecar", {})).find(
          (item) => String(item.id) === String(car.id),
        );
        if (!car) throw new Error("刷新后的车辆状态缺失");
      }
      if (meetsConditions(car) && Number(car.sendAt ?? car.sendat ?? 0) === 0)
        await send("car_send", {
          carId: String(car.id),
          helperId: options.helperId ? String(options.helperId) : 0,
          text: "",
          isUpgrade: false,
        });
      else log(`车辆 ${car.id} 未达到指定品质，保留待处理`);
    }
    return;
  }
  if (value === "batch_mail_claim_and_cleanup") {
    await send("mail_claimallattachment", { category: 0 });
    if (!options.cleanup) return;
    let lastId = 0;
    const seen = new Set();
    for (let page = 0; page < 50; page++) {
      const response = await send("mail_getlist", {
        lastId,
        size: 60,
        category: [0, 4, 5],
      });
      const list = response?.list ?? response?.mailList ?? response?.data?.list;
      if (!Array.isArray(list)) throw new Error("邮件列表不完整，停止整理");
      for (const mail of list) {
        const mailId = mail.mailId ?? mail.id;
        if (mailId != null)
          await send("mail_changestate", { mailId, state: 2 });
      }
      const next =
        response.nextLastId ??
        response.data?.nextLastId ??
        response.nextPage ??
        0;
      if (!list.length || !next) return;
      if (seen.has(String(next))) throw new Error("邮件分页未推进，停止整理");
      seen.add(String(next));
      lastId = next;
    }
    throw new Error("邮件超过单次整理上限，请重新执行剩余部分");
  }
  if (!definition.command) throw new Error("扩展功能未注册");
  for (let index = 0; index < (options.count ?? 1); index++) {
    if (index > 0) await revalidate();
    const body = { ...definition.body, ...options };
    delete body.count;
    if (value === "batchBookBatchUpgrade") {
      body.isArtifact = options.bookType === "fish";
      body.isSkin = options.bookType === "skin";
      if (body.isArtifact || body.isSkin) body.club = 0;
      delete body.bookType;
    }
    if (
      ["extendedCelebratePersonal", "extendedCelebrateServer"].includes(value)
    ) {
      body.idList = [options.id];
      delete body.id;
    }
    if (value === "batchClaimBoxWeeklyRewards") {
      body.selectRewardsMap = { [String(options.itemId)]: 1 };
      delete body.itemId;
    }
    await send(definition.command, body);
  }
  if (value === "batchBookBatchUpgrade")
    await send("book_claimpointreward", {});
}
