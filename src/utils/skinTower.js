const configsByVersion = new Map();
const TOWER_TYPES = [1, 2, 3, 4, 5, 6];

export function resolveSkinTowerActId(config, date = new Date()) {
  const today = new Date(date);
  today.setHours(0, 0, 0, 0);
  return (
    Object.values(config?.ActMultiTowerShowConf ?? {})
      .map((entry) => Number(entry.actId))
      .find((id) => {
        const value = String(id);
        if (!/^\d{7}$/.test(value)) return false;
        const start = new Date(
          2000 + Number(value.slice(0, 2)),
          Number(value.slice(2, 4)) - 1,
          Number(value.slice(4, 6)),
        );
        const end = new Date(start);
        end.setDate(end.getDate() + 7);
        return today >= start && today < end;
      }) ?? null
  );
}

async function loadSkinTowerActId(tokenStore, tokenId) {
  const { dataBundleVer: version } = await tokenStore.sendMessageWithPromise(
    tokenId,
    "system_getdatabundlever",
    {},
    5000,
  );
  if (typeof version !== "string" || !/^[\w-]+$/.test(version)) {
    throw new Error("服务器未提供有效的活动配置版本");
  }
  if (!configsByVersion.has(version)) {
    const loading = (async () => {
      const response = await fetch(
        `https://xxz-xyzw-res.hortorgames.com/data/${version}/config.json`,
        { signal: AbortSignal.timeout(30000) },
      );
      if (!response.ok) throw new Error("换皮闯关活动配置读取失败");
      const config = await response.json();
      return { ActMultiTowerShowConf: config.ActMultiTowerShowConf };
    })();
    configsByVersion.set(version, loading);
    loading.catch(() => configsByVersion.delete(version));
  }
  return resolveSkinTowerActId(await configsByVersion.get(version));
}

export async function loadSkinTowerInfo(tokenStore, tokenId, actId = null) {
  const requestedActId =
    actId ?? (await loadSkinTowerActId(tokenStore, tokenId));
  if (!requestedActId) throw new Error("当前没有开放的换皮闯关活动");
  const response = await tokenStore.sendMessageWithPromise(
    tokenId,
    "towers_getinfo",
    { actId: requestedActId },
    5000,
  );
  const data = response?.actId ? response : response?.towerData;
  if (!data?.towerData) throw new Error("换皮闯关进度获取失败");
  return { ...data, actId: data.actId ?? requestedActId };
}

export function isSkinTowerCleared(data, type) {
  const pass = data?.towerData?.[type]?.pass;
  return pass === true || pass === 1;
}

export function getSkinTowerLevel(data, type) {
  const level = Number(data?.towerData?.[type]?.actTowerLv);
  return Number.isFinite(level) && level >= 1
    ? Math.min(Math.trunc(level), 8)
    : 1;
}

export function isSkinTowerCompleted(data) {
  return TOWER_TYPES.every((type) => isSkinTowerCleared(data, type));
}
