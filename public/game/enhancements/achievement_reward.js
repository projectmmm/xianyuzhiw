// Restored from the supplied enhancement VM AST; no interpreter or dynamic eval.
(function () {
  var KEY = "AchievementClaimHook";
  var VER = "v4-loop-until-empty";
  var TRY_INTERVAL_MS = 500;
  var MAX_TRY_MS = 120000;
  var CLAIM_REFRESH_DELAY_MS = 150;
  var MAX_AUTO_CLAIM_COUNT = 200;
  if (window[KEY] && window[KEY].version === VER) return undefined;
  var runtime = (window[KEY] = {
    version: VER,
    patched: false,
    startedAt: Date.now(),
    lastError: "",
  });
  function log(msg) {
    try {
      console.log("[AchievementClaimHook] " + msg);
    } catch (e) {}
  }
  function warn(msg, err) {
    runtime.lastError = msg + (err ? ": " + (err.message || err) : "");
    try {
      console.warn("[AchievementClaimHook] " + msg, err || "");
    } catch (e) {}
  }
  function req(name) {
    try {
      if (typeof window.__require === "function") return window.__require(name);
    } catch (e) {}
    try {
      if (typeof window.require === "function") return window.require(name);
    } catch (e2) {}
    return null;
  }
  function reqAny(names) {
    for (var i = 0; i < names.length; i++) {
      var mod = req(names[i]);
      if (mod) return mod;
    }
    return null;
  }
  function getModuleManager() {
    return reqAny([
      "ModuleManager",
      "./ModuleManager",
      "../modules/ModuleManager",
      "../../modules/ModuleManager",
    ]);
  }
  function getConfigs() {
    return reqAny([
      "Configs",
      "launcher/config/Configs",
      "../../../../launcher/config/Configs",
    ]);
  }
  function getDataIndex() {
    return reqAny([
      "data-index",
      "generated/data-index",
      "extras/orange/generated/data-index",
      "../../../extras/orange/generated/data-index",
      "../../../../extras/orange/generated/data-index",
    ]);
  }
  function getIndexUi() {
    return reqAny(["index-ui", "../ui/index-ui", "../../ui/index-ui"]);
  }
  function getAchievementModule() {
    var cfg = getConfigs();
    var mm = getModuleManager();
    var type = cfg && cfg.ModuleType && cfg.ModuleType.ACHIEVEMENT;
    if (mm && type != null) {
      try {
        if (typeof mm.GET_MODULE === "function") return mm.GET_MODULE(type);
      } catch (e) {}
      try {
        if (
          mm.ModuleManager &&
          mm.ModuleManager.instance &&
          typeof mm.ModuleManager.instance.getModule === "function"
        ) {
          return mm.ModuleManager.instance.getModule(type);
        }
      } catch (e2) {}
    }
    return null;
  }
  function getAchievementDialogClass() {
    var mod = reqAny([
      "AchievementDialog",
      "./AchievementDialog",
      "../ui/task/AchievementDialog",
    ]);
    return mod && (mod.AchievementDialog || mod.default || mod);
  }
  function showNativeNotice(text) {
    var ui = getIndexUi();
    var normal = reqAny([
      "NormalDialog",
      "../ui/common/NormalDialog",
      "ui/common/NormalDialog",
    ]);
    var Dialog = normal && (normal.NormalDialog || normal.default || normal);
    if (ui && Dialog && typeof ui.SHOW_SIMPLE_DIALOG === "function") {
      var values = { content: text };
      try {
        if (
          normal.NormalDialog &&
          normal.NormalDialog.OP_BUTTON_MODE &&
          normal.NormalButtonMode
        ) {
          values[normal.NormalDialog.OP_BUTTON_MODE] =
            normal.NormalButtonMode.OneButton;
        }
      } catch (e) {}
      ui.SHOW_SIMPLE_DIALOG(Dialog, values);
      return undefined;
    }
    warn(text);
  }
  function showRewardDialog(rewards) {
    var ui = getIndexUi();
    var rewardsMod = reqAny([
      "ItemRewardsDialog",
      "../ui/common/ItemRewardsDialog",
      "ui/common/ItemRewardsDialog",
    ]);
    var Dialog =
      rewardsMod &&
      (rewardsMod.ItemRewardsDialog || rewardsMod.default || rewardsMod);
    if (ui && Dialog && typeof ui.SHOW_PROXY === "function") {
      ui.SHOW_PROXY(Dialog, { rewards: rewards });
      return true;
    }
    return false;
  }
  function claimOneAchievement(item) {
    var dataIndex = getDataIndex();
    var service = dataIndex && dataIndex.TaskService;
    if (!service || typeof service.claimAchievement !== "function") {
      return Promise.reject(
        new Error("TaskService.claimAchievement not found"),
      );
    }
    return service
      .claimAchievement({ achievementId: item.gotoConfig.id })
      .then(function (resp) {
        if (resp && resp.code) return { ok: false, rewards: [] };
        var data =
          resp && typeof resp.getData === "function" ? resp.getData() : null;
        return { ok: true, rewards: data && data.reward ? data.reward : [] };
      });
  }
  function wait(ms) {
    return new Promise(function (resolve) {
      setTimeout(resolve, ms);
    });
  }
  function refreshAchievementModule(module) {
    try {
      if (module && typeof module._refreshAchieve === "function")
        module._refreshAchieve(false);
    } catch (e) {}
    try {
      if (module && typeof module.resortAchieve === "function")
        module.resortAchieve();
    } catch (e2) {}
  }
  function getClaimableAchievements(module) {
    var list = (module && module.achievementList) || [];
    var result = [];
    var i;
    for (i = 0; i < list.length; i++) {
      if (list[i] && list[i].state === 0) result.push(list[i]);
    }
    return result;
  }
  function getAchievementClaimKey(item) {
    if (!item) return "";
    var groupId = item.gotoConfig && item.gotoConfig.id;
    var stepId = item.curid != null ? item.curid : item.id;
    var stepIndex = item.curIndex != null ? item.curIndex : "";
    return [groupId, stepId, stepIndex].join(":");
  }
  function claimAllUnlockedUntilEmpty() {
    var rewards = [];
    var claimedCount = 0;
    function finish() {
      if (rewards.length) {
        if (!showRewardDialog(rewards)) showNativeNotice("领取成功");
        return true;
      }
      showNativeNotice("暂无可领取成就");
      return false;
    }
    function step() {
      var module = getAchievementModule();
      var claimable;
      var item;
      var keyBefore;
      refreshAchievementModule(module);
      claimable = getClaimableAchievements(module);
      if (!claimable.length) return Promise.resolve(finish());
      if (claimedCount >= MAX_AUTO_CLAIM_COUNT) {
        warn("auto claim reached max count " + MAX_AUTO_CLAIM_COUNT);
        return Promise.resolve(finish());
      }
      item = claimable[0];
      keyBefore = getAchievementClaimKey(item);
      claimedCount++;
      return claimOneAchievement(item).then(function (result) {
        var oneRewards = (result && result.rewards) || [];
        if (oneRewards.length) Array.prototype.push.apply(rewards, oneRewards);
        return wait(CLAIM_REFRESH_DELAY_MS).then(function () {
          var nextModule = getAchievementModule();
          var nextClaimable;
          var keyAfter;
          refreshAchievementModule(nextModule);
          nextClaimable = getClaimableAchievements(nextModule);
          keyAfter = getAchievementClaimKey(nextClaimable[0]);
          if (result && result.ok === false) {
            warn("claim returned error for " + keyBefore);
            return finish();
          }
          if (keyAfter === keyBefore) {
            warn("claim made no progress for " + keyBefore);
            return finish();
          }
          return step();
        });
      });
    }
    return step().catch(function (err) {
      warn("claim failed", err);
      if (rewards.length) {
        if (!showRewardDialog(rewards)) showNativeNotice("领取成功");
      } else {
        showNativeNotice("领取失败");
      }
      return false;
    });
  }
  function setRedPoint(button, enabled) {
    var red = null;
    var ctrl = null;
    try {
      red =
        button.m_redPoint || (button.getChild && button.getChild("redPoint"));
    } catch (e) {}
    try {
      ctrl =
        red &&
        (red.m_isRed || (red.getController && red.getController("isRed")));
    } catch (e2) {}
    try {
      if (ctrl) ctrl.selectedPage = "" + !!enabled;
      else if (red) red.visible = !!enabled;
    } catch (e3) {}
  }
  function createAchievementClaimButton(proxy) {
    var tab;
    if (!window.fgui || !fgui.UIPackage) return null;
    try {
      tab = fgui.UIPackage.createObject("ui_common", "BtnTab3");
      if (!tab) return null;
      proxy._achClaimHookButton = tab;
      tab.name = "AchievementClaimAllTab";
      tab.title = "领取";
      tab.visible = true;
      tab.touchable = true;
      tab.selected = false;
      if (tab.clearClick) tab.clearClick();
      tab.onClick(proxy._achClaimHookOnClick, proxy);
      setRedPoint(tab, false);
      return tab;
    } catch (e) {
      warn("create tab button failed", e);
      try {
        if (tab && tab.dispose) tab.dispose();
      } catch (e2) {}
      return null;
    }
  }
  function patchAchievementDialog(DialogClass) {
    var proto = DialogClass && DialogClass.prototype;
    if (!proto || proto.__achievementClaimHookPatchedVersion === VER)
      return !!proto;
    proto.__achievementClaimHookPatched = true;
    proto.__achievementClaimHookPatchedVersion = VER;
    var oldRefresh = proto.refresh;
    var oldOnShow = proto.onShow;
    var oldOnFixShow = proto.onFixShow;
    var oldOnHide = proto.onHide;
    var oldActive = proto.onSubPageActive;
    var oldInactive = proto.onSubPageInActive;
    proto._achClaimHookEnsureButton = function () {
      var parent =
        this.parentProxy && this.parentProxy.ui ? this.parentProxy.ui : this.ui;
      var btn = this._achClaimHookButton || createAchievementClaimButton(this);
      if (!btn || !parent) return undefined;
      if (btn.parent !== parent) parent.addChild(btn);
      btn.visible = true;
      this._achClaimHookLayoutButton();
      this._achClaimHookRefreshButton();
    };
    proto._achClaimHookLayoutButton = function () {
      var btn = this._achClaimHookButton;
      if (!btn) return undefined;
      var parent =
        this.parentProxy && this.parentProxy.ui ? this.parentProxy.ui : this.ui;
      var tab =
        parent && parent.m_tab && parent.m_tab.getChildAt
          ? parent.m_tab.getChildAt(1)
          : null;
      try {
        if (parent && tab && tab.localToGlobal && parent.globalToLocal) {
          var gp = tab.localToGlobal(tab.width, tab.height / 2);
          var lp = parent.globalToLocal(gp.x, gp.y);
          btn.setPosition(lp.x + 12, lp.y - btn.height / 2);
        } else if (this.ui) {
          btn.setPosition(this.ui.width - btn.width - 30, 20);
        }
        if (parent && parent.width)
          btn.x = Math.max(20, Math.min(btn.x, parent.width - btn.width - 20));
        if (parent && parent.height)
          btn.y = Math.max(
            10,
            Math.min(btn.y, parent.height - btn.height - 10),
          );
      } catch (e) {
        warn("layout button failed", e);
      }
    };
    proto._achClaimHookRefreshButton = function () {
      var btn = this._achClaimHookButton;
      if (!btn) return undefined;
      var module = getAchievementModule();
      var list = (module && module.achievementList) || [];
      var canClaim = false;
      for (var i = 0; i < list.length; i++) {
        if (list[i] && list[i].state === 0) {
          canClaim = true;
          break;
        }
      }
      btn.visible = true;
      btn.touchable = true;
      btn.grayed = !canClaim;
      btn.title = "领取";
      setRedPoint(btn, canClaim);
    };
    proto._achClaimHookRemoveButton = function () {
      var btn = this._achClaimHookButton;
      if (btn) {
        try {
          btn.offClick && btn.offClick(this._achClaimHookOnClick, this);
        } catch (e) {}
        try {
          btn.removeFromParent && btn.removeFromParent();
        } catch (e2) {}
        try {
          btn.dispose && btn.dispose();
        } catch (e3) {}
        this._achClaimHookButton = null;
      }
      this._achClaimHookLocked = false;
    };
    proto._achClaimHookOnClick = function () {
      var self = this;
      if (this._achClaimHookLocked) return undefined;
      this._achClaimHookLocked = true;
      claimAllUnlockedUntilEmpty()
        .then(function () {
          self._achClaimHookLocked = false;
          try {
            if (typeof oldRefresh === "function") oldRefresh.call(self);
          } catch (e) {}
          self._achClaimHookRefreshButton();
        })
        .catch(function (err) {
          self._achClaimHookLocked = false;
          warn("click claim failed", err);
          self._achClaimHookRefreshButton();
        });
    };
    proto.refresh = function () {
      var ret = oldRefresh && oldRefresh.apply(this, arguments);
      this._achClaimHookRefreshButton();
      return ret;
    };
    proto.onShow = function () {
      var ret = oldOnShow && oldOnShow.apply(this, arguments);
      this._achClaimHookLocked = false;
      this._achClaimHookEnsureButton();
      return ret;
    };
    proto.onFixShow = function () {
      var ret = oldOnFixShow && oldOnFixShow.apply(this, arguments);
      this._achClaimHookEnsureButton();
      this._achClaimHookRefreshButton();
      return ret;
    };
    proto.onHide = function () {
      var ret = oldOnHide && oldOnHide.apply(this, arguments);
      this._achClaimHookRemoveButton();
      return ret;
    };
    proto.onSubPageActive = function () {
      var ret = oldActive && oldActive.apply(this, arguments);
      this._achClaimHookEnsureButton();
      if (this._achClaimHookButton) this._achClaimHookButton.visible = true;
      return ret;
    };
    proto.onSubPageInActive = function () {
      var ret = oldInactive && oldInactive.apply(this, arguments);
      if (this._achClaimHookButton) this._achClaimHookButton.visible = false;
      return ret;
    };
    return true;
  }
  function tryInstall() {
    var DialogClass;
    try {
      DialogClass = getAchievementDialogClass();
      if (!DialogClass) return false;
      if (
        !getConfigs() ||
        !getModuleManager() ||
        !getDataIndex() ||
        !getIndexUi()
      )
        return false;
      runtime.patched = patchAchievementDialog(DialogClass);
      if (runtime.patched) log("patched");
      return runtime.patched;
    } catch (e) {
      warn("install failed", e);
      return false;
    }
  }
  if (!tryInstall()) {
    var timer = setInterval(function () {
      if (tryInstall() || Date.now() - runtime.startedAt > MAX_TRY_MS) {
        clearInterval(timer);
        if (!runtime.patched) warn("install timeout");
      }
    }, TRY_INTERVAL_MS);
  }
})();
