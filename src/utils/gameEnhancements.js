import catalog from "./gameEnhancementCatalog.json";

export const GAME_ENHANCEMENT_KEY = "xyzw_game_enhancements_v1";
export const gameEnhancementCatalog = catalog;

export function normalizeGameEnhancements(value) {
  const input = value && typeof value === "object" ? value : {};
  return Object.fromEntries(
    catalog.map(({ key }) => [key, input[key] === true]),
  );
}

export function readGameEnhancements(storage = localStorage) {
  try {
    return normalizeGameEnhancements(
      JSON.parse(storage.getItem(GAME_ENHANCEMENT_KEY) || "{}"),
    );
  } catch {
    return normalizeGameEnhancements({});
  }
}

export function saveGameEnhancements(value, storage = localStorage) {
  const settings = normalizeGameEnhancements(value);
  storage.setItem(GAME_ENHANCEMENT_KEY, JSON.stringify(settings));
  return settings;
}
