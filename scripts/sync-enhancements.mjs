import { copyFile } from "node:fs/promises";
await copyFile(
  new URL("../src/utils/gameEnhancementCatalog.json", import.meta.url),
  new URL("../public/game/enhancement-catalog.json", import.meta.url),
);

await copyFile(
  new URL("../src/utils/localResourcePack.js", import.meta.url),
  new URL("../public/game/local-resource-pack.js", import.meta.url),
);
