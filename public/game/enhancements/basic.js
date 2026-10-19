(function installBasicEnhancements(win) {
  "use strict";
  const flags = win.__XYZW_ENHANCEMENT_FLAGS__ || {};
  const pending = new Map();
  const waitFor = (key, apply) => pending.set(key, apply);
  const module = (name) => {
    try {
      return win.__require?.(name);
    } catch {
      return null;
    }
  };
  const patch = (target, method, wrap) => {
    if (typeof target?.[method] !== "function") return false;
    target[method] = wrap(target[method]);
    return true;
  };
  if (flags.skipPopup)
    waitFor("skipPopup", () => {
      const manager = module("FirstFaceToPlayerManager")
        ?.FirstFaceToPlayerManager?.instance;
      return patch(manager, "setActive", () => function () {});
    });
  if (flags.skipAd)
    waitFor("skipAd", () => {
      if (!win.wx) return false;
      win.wx.createRewardedVideoAd = () => {
        let onClose;
        return {
          load: () => Promise.resolve(),
          show: () =>
            new Promise((resolve) =>
              setTimeout(() => {
                onClose?.({ isEnded: true });
                resolve();
              }, 200),
            ),
          onClose: (callback) => {
            onClose = callback;
          },
          offClose: () => {
            onClose = null;
          },
          onError() {},
          offError() {},
          onLoad() {},
          offLoad() {},
          destroy() {
            onClose = null;
          },
        };
      };
      if (win.HSDK)
        win.HSDK.showRewardVideoAd = (options) =>
          setTimeout(() => options?.success?.({ isEnded: true }), 200);
      return true;
    });
  if (flags.skipChest)
    waitFor("skipChest", () =>
      patch(
        module("BoxPanel")?.BoxPanel?.prototype,
        "_onOpenBox",
        (original) =>
          function (...args) {
            const item = this.boxList?.[this._currentIndex];
            const configs = module("Configs");
            const box = module("ModuleManager")?.GET_MODULE?.(
              configs?.ModuleType?.BOX,
            );
            if (!item || !box?.sendOpenBox || !win.ROLE?.getItemQuantity)
              return original.apply(this, args);
            const quantity = win.ROLE.getItemQuantity(item.id);
            if (!quantity) return;
            this._removeCoinAnim?.();
            return box
              .sendOpenBox(item.id, box.getOpenBoxNum(item, quantity))
              .then(() => box.syncBoxPoint?.());
          },
      ),
    );
  if (flags.redRefineSkip)
    waitFor("redRefineSkip", () =>
      patch(
        module("QuenchStageUpDialog")?.QuenchStageUpDialog?.prototype,
        "_checkQuenchConfirm",
        (original) =>
          function (...args) {
            return this.isSkipRed ? false : original.apply(this, args);
          },
      ),
    );
  if (flags.arenaReport)
    waitFor("arenaReport", () =>
      patch(
        module("ArenaRecordDialog")?.ArenaRecordDialog?.prototype,
        "_refreshSingleListItem",
        (original) =>
          function (index, item) {
            const result = original.call(this, index, item);
            const record = this.recordList?.[index];
            if (
              record &&
              item?.m_headIcon &&
              module("RankModule")?.SHOW_ROLE_INFO
            ) {
              item.m_headIcon.clearClick();
              item.m_headIcon.onClick(() =>
                module("RankModule").SHOW_ROLE_INFO(record.oppositeId),
              );
            }
            return result;
          },
      ),
    );
  const applyEngine = () => {
    const cc = win.cc;
    if (!cc?.director || !cc.game) return false;
    if (flags.perfOpt) {
      cc.game.frameRate = 30;
      patch(
        cc.ParticleSystem?.prototype,
        "onLoad",
        (original) =>
          function (...args) {
            const result = original.apply(this, args);
            if (this.node) this.node.active = false;
            return result;
          },
      );
      if (win.wx?.vibrateShort) win.wx.vibrateShort = () => {};
    }
    if (flags.disableSound) {
      cc.audioEngine?.setMusicVolume?.(0);
      cc.audioEngine?.setEffectsVolume?.(0);
    }
    return true;
  };
  if (flags.perfOpt || flags.disableSound) waitFor("engine", applyEngine);
  if (flags.disablePowerSave)
    waitFor("disablePowerSave", () => {
      const cc = win.cc;
      const scene = cc?.director?.getScene?.();
      if (!scene || !cc.Toggle || !cc.Label) return false;
      const toggle = scene
        .getComponentsInChildren(cc.Toggle)
        .find((item) =>
          item.node
            .getComponentsInChildren(cc.Label)
            .some((label) => label.string?.trim() === "永不"),
        );
      if (!toggle) return false;
      toggle.isChecked = true;
      toggle._emitToggleEvents?.();
      return true;
    });
  const deadline = Date.now() + 120000;
  const timer = setInterval(() => {
    for (const [key, apply] of pending) {
      try {
        if (apply()) pending.delete(key);
      } catch {
        /* Retry when the game's modules are ready. */
      }
    }
    if (pending.size === 0 || Date.now() > deadline) clearInterval(timer);
  }, 500);
  win.addEventListener("pagehide", () => clearInterval(timer), { once: true });
})(window);
