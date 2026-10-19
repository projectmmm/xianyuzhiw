(function initializeGameEnhancements(win) {
  "use strict";
  if (win.__XYZW_ENHANCEMENTS_READY__) return;
  const scriptUrl = document.currentScript.src;
  const base = new URL(".", scriptUrl);
  win.__XYZW_ENHANCEMENT_ASSET_BASE__ = new URL("enhancements/", base).href;
  const readSettings = () => {
    try {
      return JSON.parse(
        localStorage.getItem("xyzw_game_enhancements_v1") || "{}",
      );
    } catch {
      return {};
    }
  };
  const load = (file) =>
    new Promise((resolve, reject) => {
      const script = document.createElement("script");
      script.src = new URL(`enhancements/${file}`, base).href;
      script.onload = resolve;
      script.onerror = () => reject(new Error("增强资源加载失败"));
      document.head.appendChild(script);
    });
  // A failed optional feature must never prevent the existing game from booting.
  win.__XYZW_ENHANCEMENTS_READY__ = (async () => {
    const settings = readSettings();
    const status = {};
    win.__XYZW_ENHANCEMENT_STATUS__ = status;
    if (!Object.values(settings).includes(true)) return status;
    try {
      const response = await fetch(new URL("enhancement-catalog.json", base));
      if (!response.ok) throw new Error("增强清单加载失败");
      const catalog = await response.json();
      const enabled = catalog.filter(({ key }) => settings[key] === true);
      if (!enabled.length) return status;
      win.__XYZW_ENHANCEMENT_FLAGS__ = Object.fromEntries(
        enabled.map(({ key }) => [key, true]),
      );
      if (settings.localResources === true) {
        try {
          const { readLocalResourcePack, createLocalResourceProvider } =
            await import(new URL("local-resource-pack.js", base).href);
          const pack = await readLocalResourcePack();
          if (pack) {
            win.__localResProvider = createLocalResourceProvider(pack);
            win.__localResConfig = {
              enabled: true,
              mode: "dds",
              file: pack.name,
              size: pack.size,
            };
          } else status.localResources = "missing-pack";
        } catch {
          status.localResources = "unavailable";
        }
      }
      const files = [
        ...new Set(["panel_enhancer.js", ...enabled.map(({ file }) => file)]),
      ];
      for (const file of files) {
        try {
          await load(file);
          for (const item of enabled.filter((item) => item.file === file))
            status[item.key] ??= "loaded";
        } catch {
          for (const item of enabled.filter((item) => item.file === file))
            status[item.key] = "failed";
          console.warn("[游戏增强] 资源未加载:", file);
        }
      }
    } catch {
      status.catalog = "failed";
      console.warn("[游戏增强] 增强清单不可用，继续加载游戏");
    }
    return status;
  })();
})(window);
