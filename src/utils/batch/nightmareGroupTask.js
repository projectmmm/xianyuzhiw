import { runWithDailyTaskLock } from "../dailyTaskState.js";

export async function runNightmareGroupTask(deps, options) {
  const {
    selectedTokens,
    tokens,
    tokenStatus,
    isRunning,
    shouldStop,
    ensureConnection,
    releaseConnectionSlot,
    tokenStore,
    addLog,
    message,
    currentRunningTokenId,
    batchSettings,
  } = deps;
  if (isRunning.value) return;
  const ids = [...new Set(selectedTokens.value)];
  if (ids.length < 1 || ids.length > 5)
    throw new Error("十殿组队请选择 1～5 个角色，第一个角色担任队长");
  if (Number(batchSettings.maxActive) < ids.length)
    throw new Error("请先将最大连接数调整到不小于队伍人数");
  const captain = ids[0];
  const members = ids.slice(1);
  const owned = new Set();
  const roleIds = new Map();
  let engine;
  let stoppedByLimit = false;
  let failure;
  let createdTeamId;
  const deadline = Date.now() + options.minutes * 60000;
  const log = (text, type = "info") =>
    addLog({
      time: new Date().toLocaleTimeString(),
      message: `十殿组队：${text}`,
      type,
    });
  const check = () => {
    if (shouldStop.value)
      throw Object.assign(new Error("组队任务已停止"), { interrupted: true });
    if (Date.now() > deadline) throw new Error("达到本次挑战时间上限");
  };
  const send = async (tokenId, command, body = {}, timeout = 15000) => {
    check();
    if (tokenStore.getWebSocketStatus(tokenId) !== "connected")
      throw new Error("队伍连接已断开，请读取房间状态后再执行");
    if (
      (command === "nightmare_restore" && !options.autoRestore) ||
      (command === "nightmare_fullrage" && !options.autoRage)
    )
      throw new Error("本次未开启自动恢复或满怒");
    const response = await tokenStore.sendMessageWithPromise(
      tokenId,
      command,
      body,
      timeout,
    );
    if (
      response?.error ||
      (response?.code != null && Number(response.code) !== 0)
    )
      throw new Error(String(response.error ?? response.code));
    check();
    return response;
  };
  const lockMembers = (index, execute) =>
    index < ids.length
      ? runWithDailyTaskLock(ids[index], () => lockMembers(index + 1, execute))
      : execute();
  isRunning.value = true;
  shouldStop.value = false;
  ids.forEach((id) => {
    tokenStatus.value[id] = "waiting";
  });
  try {
    await lockMembers(0, async () => {
      for (const id of ids) {
        check();
        if (!tokens.value.some((token) => token.id === id))
          throw new Error("所选角色已不存在");
        await ensureConnection(id, 2, (owns) => {
          if (owns) owned.add(id);
          else owned.delete(id);
        });
        // Refuse to alter a team that this operation did not create.
        const existing = await send(id, "matchteam_getroleteaminfo", {});
        const teamId =
          existing.teamInfo?.teamId ?? existing.teamInfo?.id ?? existing.teamId;
        if (teamId != null && String(teamId) !== "0" && String(teamId) !== "")
          throw new Error("有角色已在其他队伍，请先处理原队伍后再开始");
        const roleResponse = await send(id, "role_getroleinfo", {});
        const roleId = roleResponse.role?.roleId ?? roleResponse.role?.id;
        if (roleId == null) throw new Error("未获取到队员角色 ID");
        if (
          [...roleIds.values()].some(
            (other) => String(other) === String(roleId),
          )
        )
          throw new Error("同一游戏角色不能重复加入队伍");
        roleIds.set(id, roleId);
        if (options.formation)
          await send(id, "presetteam_saveteam", { teamId: options.formation });
        tokenStatus.value[id] = "running";
      }
      currentRunningTokenId.value = captain;
      const captainRoleId = roleIds.get(captain);
      if (captainRoleId == null) throw new Error("未获取到队长角色 ID");
      const created = await send(captain, "matchteam_create", {
        teamCfgId: 1,
        setting: {
          name: "十殿先锋队",
          notice: "",
          secret: 1,
          apply: 0,
          applyList: [],
        },
        param: 0,
        custom: {},
        extParam: 0,
      });
      createdTeamId =
        created.teamInfo?.teamId ?? created.teamInfo?.id ?? created.teamId;
      if (createdTeamId == null) throw new Error("创建队伍响应缺少队伍 ID");
      for (const id of members) {
        await send(id, "matchteam_join", { teamId: Number(createdTeamId) });
        await send(id, "matchteam_memberprepare", {
          teamId: Number(createdTeamId),
        });
      }
      const opened = await send(captain, "matchteam_openteam", {
        teamId: Number(createdTeamId),
      });
      const roomId = opened.roomId ?? opened.roomid ?? opened.roomInfo?.roomId;
      if (roomId == null) throw new Error("开启房间响应缺少房间 ID");
      log(`已创建队伍 ${createdTeamId}，房间 ${roomId}`);
      const { NightmareBattleRunner } =
        await import("../../vendor/nightmareBattleRunner.js");
      const levelConfig = Object.fromEntries(
        Array.from({ length: 8 }, (_, index) => [
          index + 1,
          { priority: ids.map((id) => String(roleIds.get(id))) },
        ]),
      );
      const store = new Proxy(tokenStore, {
        get(target, property) {
          if (property === "gameTokens")
            return tokenStore.gameTokens.map((token) => ({
              ...token,
              roleId: roleIds.get(token.id) ?? token.roleId,
            }));
          if (property === "sendMessageWithPromise") return send;
          if (property === "createWebSocketConnection")
            return () => {
              throw new Error("连接已断开，本次停止自动重连");
            };
          return Reflect.get(target, property);
        },
      });
      engine = new NightmareBattleRunner({
        captainTokenId: captain,
        roomId,
        teamId: createdTeamId,
        captainRoleId,
        presetData: { name: "本地组队", memberTokenIds: members, levelConfig },
        tokenStore: store,
        onLog: log,
        onError: (error) => {
          failure = error;
        },
        onStatusChange: (state) => {
          if (state.currentLevel > options.maxLevel) {
            stoppedByLimit = true;
            engine.stop();
          }
          if (state.status === "failed")
            failure ||= new Error(state.reason || "十殿挑战未完成");
        },
      });
      engine._MAX_BATTLE_TIME = options.minutes * 60000;
      const timer = setInterval(() => {
        if (shouldStop.value || Date.now() > deadline) engine.stop();
      }, 250);
      try {
        await engine.start();
      } finally {
        clearInterval(timer);
      }
      check();
      if (failure) throw failure;
      if (!stoppedByLimit && !engine._isCompleted)
        throw new Error("十殿挑战未完成，可根据日志检查房间状态");
      ids.forEach((id) => {
        tokenStatus.value[id] = "completed";
      });
      log("组队挑战完成", "success");
    });
    return { completed: ids.length, failed: 0 };
  } catch (error) {
    ids.forEach((id) => {
      tokenStatus.value[id] = error.interrupted ? "stopped" : "failed";
    });
    log(
      `${error.message}${createdTeamId ? `；本次队伍 ID ${createdTeamId}` : ""}`,
      "warning",
    );
    message.warning(error.message);
    return {
      completed: 0,
      failed: error.interrupted ? 0 : ids.length,
      stopped: !!error.interrupted,
    };
  } finally {
    if (engine?.getStatus() === "running") engine.stop();
    for (const id of owned) {
      try {
        tokenStore.closeWebSocketConnection(id);
      } finally {
        releaseConnectionSlot();
      }
    }
    currentRunningTokenId.value = null;
    isRunning.value = false;
  }
}
