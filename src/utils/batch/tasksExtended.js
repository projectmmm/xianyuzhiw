import { runWithDailyTaskLock } from "../dailyTaskState.js";
import { runExtendedGameOperation } from "./extendedGameOperations.js";
import {
  extendedTaskCatalog,
  normalizeExtendedTaskSettings,
} from "./extendedTaskCatalog.js";
import { runNightmareGroupTask } from "./nightmareGroupTask.js";

export function createTasksExtended(deps) {
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
    extendedSettings,
  } = deps;
  const run = async (definition, override) => {
    if (isRunning.value) return;
    const ids = [...selectedTokens.value];
    if (!ids.length) {
      message.warning("请先选择角色");
      return;
    }
    let settings;
    try {
      settings = normalizeExtendedTaskSettings(
        definition.value,
        override ?? extendedSettings.value[definition.value],
      );
    } catch (error) {
      message.error(error.message);
      throw error;
    }
    if (definition.value === "batchNightmareChallengePresets")
      return runNightmareGroupTask(deps, settings);
    isRunning.value = true;
    shouldStop.value = false;
    let failed = 0;
    let completed = 0;
    ids.forEach((id) => {
      tokenStatus.value[id] = "waiting";
    });
    try {
      for (const tokenId of ids) {
        if (shouldStop.value) {
          tokenStatus.value[tokenId] = "stopped";
          continue;
        }
        const token = tokens.value.find((item) => item.id === tokenId);
        const log = (text, type = "info") =>
          addLog({
            time: new Date().toLocaleTimeString(),
            message: `${token?.name || "角色"} · ${definition.label}：${text}`,
            type,
          });
        if (!token) {
          tokenStatus.value[tokenId] = "failed";
          failed++;
          continue;
        }
        try {
          await runWithDailyTaskLock(tokenId, async () => {
            let ownsSlot = false;
            const check = () => {
              if (shouldStop.value)
                throw Object.assign(new Error("任务已停止"), {
                  interrupted: true,
                });
              if (tokenStore.getWebSocketStatus(tokenId) !== "connected")
                throw new Error("连接已断开，请重新读取游戏状态后再执行");
            };
            try {
              if (shouldStop.value)
                throw Object.assign(new Error("任务已停止"), {
                  interrupted: true,
                });
              tokenStatus.value[tokenId] = "running";
              currentRunningTokenId.value = tokenId;
              await ensureConnection(tokenId, 2, (owned) => {
                ownsSlot = owned;
              });
              check();
              const send = async (command, body) => {
                check();
                const response = await tokenStore.sendMessageWithPromise(
                  tokenId,
                  command,
                  body,
                  15000,
                );
                if (
                  response?.error ||
                  (response?.code != null && Number(response.code) !== 0)
                )
                  throw new Error(
                    String(response.error ?? `服务器错误 ${response.code}`),
                  );
                await new Promise((resolve) =>
                  setTimeout(
                    resolve,
                    Math.max(100, Number(batchSettings.commandDelay) || 500),
                  ),
                );
                check();
                return response;
              };
              log("开始执行");
              await runExtendedGameOperation(definition.value, settings, {
                send,
                check,
                log,
                runSaltField: async (value, options) => {
                  const { createSaltFieldTasks, inSaltFieldWindow } =
                    await import("../../vendor/tasksSaltField-CqLz-nQR.js");
                  if (!inSaltFieldWindow())
                    throw new Error("当前不在你项目设定的盐场开放时间");
                  const deadline = Date.now() + (options.minutes || 5) * 60000;
                  const stopped = {
                    get value() {
                      return shouldStop.value || Date.now() > deadline;
                    },
                  };
                  const store = new Proxy(tokenStore, {
                    get(target, property) {
                      if (property === "sendMessageWithPromise")
                        return (_id, command, body) => send(command, body);
                      return Reflect.get(target, property);
                    },
                  });
                  const salt = createSaltFieldTasks({
                    tokenStore: store,
                    addLog,
                    tokenStatus,
                    selectedTokens,
                    isRunning,
                    shouldStop: stopped,
                    batchSettings: {
                      ...batchSettings,
                      saltFieldMaxActions: options.maxActions || 1,
                      defaultRetryCount: 0,
                    },
                    safeDelay: async (milliseconds) => {
                      const until = Date.now() + milliseconds;
                      while (Date.now() < until) {
                        if (stopped.value)
                          throw new Error("盐场任务已停止或达到时间上限");
                        await new Promise((resolve) =>
                          setTimeout(
                            resolve,
                            Math.min(200, until - Date.now()),
                          ),
                        );
                      }
                    },
                  });
                  const result = await salt.saltFieldDigForToken(
                    tokenId,
                    token,
                    {
                      stopRef: stopped,
                      lineupOnly: value === "batchSaltFieldLineup",
                    },
                  );
                  check();
                  if (!result)
                    throw new Error("盐场操作未完成，请查看上方具体日志");
                },
              });
              check();
              tokenStatus.value[tokenId] = "completed";
              completed++;
              log("完成", "success");
            } finally {
              if (ownsSlot) {
                try {
                  tokenStore.closeWebSocketConnection(tokenId);
                } finally {
                  releaseConnectionSlot();
                }
              }
            }
          });
        } catch (error) {
          tokenStatus.value[tokenId] = error.interrupted ? "stopped" : "failed";
          if (!error.interrupted) failed++;
          log(
            error.message || "操作失败",
            error.interrupted ? "warning" : "error",
          );
        }
      }
    } finally {
      isRunning.value = false;
      currentRunningTokenId.value = null;
    }
    const text = `${definition.label}：完成 ${completed}，失败 ${failed}${shouldStop.value ? "，已停止" : ""}`;
    if (failed) message.warning(text);
    else message.info(text);
    return { completed, failed, stopped: shouldStop.value };
  };
  return Object.fromEntries(
    extendedTaskCatalog.map((definition) => [
      definition.value,
      (settings) => run(definition, settings),
    ]),
  );
}
