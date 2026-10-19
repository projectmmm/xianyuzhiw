export function getBattlePreset(response, selectedSlot = 0) {
  const root = response?.presetTeamInfo ?? response?.body?.presetTeamInfo;
  if (!root || typeof root !== "object") throw new Error("未获取到预设阵容");
  const map = root.presetTeamInfo ?? root;
  const slot = selectedSlot || root.useTeamId;
  const team = map[slot];
  if (!team?.teamInfo || typeof team.teamInfo !== "object")
    throw new Error("指定预设阵容为空");
  const battleTeam = Object.fromEntries(
    Object.entries(team.teamInfo)
      .filter(([, hero]) => hero?.heroId != null)
      .map(([position, hero]) => [position, hero.heroId]),
  );
  if (!Object.keys(battleTeam).length) throw new Error("阵容没有上阵武将");
  return { battleTeam, lordWeaponId: team.weapon?.weaponId ?? 0 };
}

/** Resolve photo activities from explicit official tables; unrelated larger IDs are ignored. */
export function deriveFilmActivityIds(response, config, now = Date.now()) {
  const body = response?.body ?? response;
  const activity = body?.activity ?? body;
  const photos = activity?.photoActivityInfo;
  if (!photos || typeof photos !== "object")
    throw new Error("未读取到当前角色的咸来入镜活动状态");
  const active = (row) =>
    row &&
    Number.isFinite(Number(row.start)) &&
    Number.isFinite(Number(row.end)) &&
    now / 1000 >= Number(row.start) &&
    now / 1000 < Number(row.end);
  const ids = [
    ...new Set(
      Object.values(config?.PhotoConf ?? {}).map((row) => Number(row.actId)),
    ),
  ].filter(
    (id) =>
      photos[id] &&
      active(config?.ActFestivalConf?.[id]) &&
      Number(config.ActFestivalConf[id].actType) === 36,
  );
  if (ids.length !== 1)
    throw new Error("无法唯一确认当前开放的咸来入镜活动，请刷新游戏数据");
  const photoActId = ids[0];
  const schedule = config.ActFestivalConf[photoActId];
  const tasks = Object.values(config.ActFestivalConf).filter(
    (row) =>
      Number(row.actType) === 37 &&
      row.actGroup === schedule.actGroup &&
      Number(row.itemId) === Number(schedule.itemId) &&
      Number(row.start) === Number(schedule.start) &&
      Number(row.end) === Number(schedule.end) &&
      active(row),
  );
  const taskActId = tasks.length === 1 ? Number(tasks[0].id) : null;
  const missions = Object.values(config.BattlePassMissionConf ?? {})
    .filter((row) => taskActId != null && Number(row.actId) === taskActId)
    .sort((a, b) => Number(a.rank) - Number(b.rank));
  const pieces = Object.values(config.PhotoPieceConf ?? {}).filter(
    (row) => Number(row.actId) === photoActId,
  );
  const photoRanks = new Map(
    Object.values(config.PhotoConf ?? {})
      .filter((row) => Number(row.actId) === photoActId)
      .map((row) => [Number(row.id), Number(row.rank)]),
  );
  pieces.sort(
    (a, b) =>
      photoRanks.get(Number(a.PhotoId)) - photoRanks.get(Number(b.PhotoId)) ||
      Number(a.pieceIndex) - Number(b.pieceIndex),
  );
  return {
    photoActId,
    taskActId,
    itemId: Number(schedule.itemId),
    missions,
    pieces,
  };
}

/** A zero server piece means the first configured piece; -1 means completed. */
export function getFilmPiece(state, pieces) {
  if (
    !state ||
    !Number.isSafeInteger(Number(state.pieceId)) ||
    !Number.isSafeInteger(Number(state.num)) ||
    Number(state.num) < 0
  )
    throw new Error("相片进度状态不完整，已停止操作");
  const id = Number(state.pieceId);
  if (id === -1) return null;
  const piece =
    id === 0 ? pieces[0] : pieces.find((row) => Number(row.id) === id);
  if (
    !piece ||
    !Number.isSafeInteger(Number(piece.progressNeed)) ||
    Number(piece.progressNeed) < 1
  )
    throw new Error("拍摄阶段配置不完整，已停止操作");
  return piece;
}
