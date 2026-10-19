const rows = (value) =>
  Object.values(value ?? {}).filter((row) => row && typeof row === "object");

export function makeTranslations(language) {
  const result = new Map();
  for (const group of Object.values(language.LanguageConf ?? {})) {
    for (const row of Object.values(group ?? {})) {
      if (typeof row?.key === "string" && typeof row.chinese === "string")
        result.set(row.key, row.chinese);
    }
  }
  return result;
}

export function gameNames(config, language) {
  const translations = makeTranslations(language);
  const text = (key) => {
    if (typeof key !== "string") return "";
    const value = translations.get(key) ?? key;
    // Never expose localization keys, URLs or identifiers as readable names.
    if (
      /^\w+Conf_|^CarLegionTech(?:Name|Des)|^[a-z]+_\d+$|^https?:|^[\d\s_:-]+$/.test(
        value,
      )
    )
      return "";
    return value
      .replace(/<[^>]*>/g, "")
      .replace(/\s+/g, " ")
      .trim();
  };
  const item = (id) => text(language.ItemConf?.[id]?.name);
  const hero = (id) => text(language.HeroConf?.[id]?.nickName) || item(id);
  const skin = (id) => text(config.SkinConf?.[id]?.skinName);
  const resource = new Map(
    rows(config.OtherItemConf).map((row) => [
      Number(row.resourceType),
      text(row.name),
    ]),
  );
  const reward = (row) => {
    const type = Number(row?.type ?? row?.resourceType);
    const id = row?.itemId ?? row?.rewardId;
    if (type === 3 || type === 57) return item(id);
    if (type === 11) return skin(id);
    const table = {
      20: "PrivilegeConf",
      21: "CardDetailConf",
      22: "LordSkinConf",
      24: "ProfileCardConf",
      46: "AvatarFrameConf",
      47: "AirshipConf",
      48: "MultiKillConf",
      49: "CustomCardConf",
      50: "PVPMapConf",
    }[type];
    if (table) return text(config[table]?.[id]?.name);
    return resource.get(type) || "";
  };
  const rewards = (list) => {
    if (!Array.isArray(list) || !list.length) return "";
    const named = list.map((row) => {
      const name = reward(row);
      const quantity = Number(row.value ?? row.rewardNum ?? 1);
      return name && Number.isFinite(quantity) && quantity >= 0
        ? `${name}${quantity > 0 ? ` ×${quantity}` : ""}`
        : "";
    });
    return named.every(Boolean) ? named.join("、") : "";
  };
  return { text, item, hero, skin, reward, rewards };
}
