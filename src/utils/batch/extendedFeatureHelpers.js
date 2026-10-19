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

export function deriveFilmActivityIds(response) {
  const common =
    response?.activity?.commonActivityInfo ?? response?.commonActivityInfo;
  if (!common || typeof common !== "object") throw new Error("活动信息不完整");
  const keys = Object.keys(common)
    .filter((key) => /^\d{7,9}$/.test(key))
    .sort((a, b) => Number(a) - Number(b));
  const latest = keys.at(-1);
  const prefix = latest?.slice(0, 6);
  const slot = Number(latest?.slice(6));
  if (!latest || slot < 6) throw new Error("未识别到开放中的胶卷活动");
  return {
    shopId: Number(latest),
    taskActId: Number(`${prefix}${slot - 2}`),
    photoActId: Number(`${prefix}${slot - 3}`),
  };
}
