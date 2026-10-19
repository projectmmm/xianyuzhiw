// Adapted from the supplied 2.57.2 game enhancement asset.
// Static strings decoded; obfuscator guards removed; frame access stays local.
!function () {
  "use strict";
  if (!0x1 !== window["__yunqi_quenchAllowed"]) {
    var _0x311edf = "[淬炼加速]",
      _0x42cfe2 = 2.34,
      _0x10a5e0 = 0x0,
      _0x2a8156 = setInterval(function () {
        if (_0x10a5e0++, _0x506647()) clearInterval(_0x2a8156);else {
          if (_0x10a5e0 > 0x3c) {
            clearInterval(_0x2a8156);
            var _0x461178 = setInterval(function () {
              _0x506647() && clearInterval(_0x461178);
            }, 0x1388);
          }
        }
      }, 0x1f4);
    console["log"](_0x311edf + " 已注入，等待游戏加载...");
  } else console["log"]("[淬炼加速] 当前卡密类型无洗炼加速权限，跳过");
  function _0x46bc4b(_0x2ab93a) {
    if (_0x2ab93a) try {
      _0x2ab93a["onLoadComplete"] && "function" == typeof _0x2ab93a["onLoadComplete"]["addOnce"] && _0x2ab93a["onLoadComplete"]["addOnce"](function () {
        _0x2ebd25(_0x2ab93a);
      }), _0x2ab93a["content"] && _0x2ebd25(_0x2ab93a);
    } catch (_0x1db638) {
      console["warn"](_0x311edf + " hookSpineTimeScale error:", _0x1db638["message"]);
    }
  }
  function _0x2ebd25(_0x194df0) {
    try {
      var _0x201d45 = _0x194df0["content"];
      if (!_0x201d45) return;
      if (_0x201d45["__quenchTimeScaleLocked"]) return;
      Object["defineProperty"](_0x201d45, "timeScale", {
        get: function () {
          return _0x42cfe2;
        },
        set: function (_0xb130da) {},
        configurable: !0x0
      }), _0x201d45["__quenchTimeScaleLocked"] = !0x0, console["log"](_0x311edf + " spine timeScale 已锁定为 " + _0x42cfe2 + "x");
    } catch (_0xa801cb) {
      console["warn"](_0x311edf + " applyTimeScale error:", _0xa801cb["message"]);
    }
  }
  function _0x506647() {
    if ("function" != typeof window["__require"]) return !0x1;
    try {
      var _0x43acd4 = window["__require"]("QuenchStageUpDialog");
      if (!_0x43acd4 || !_0x43acd4["QuenchStageUpDialog"]) return !0x1;
      var _0x337a1a = _0x43acd4["QuenchStageUpDialog"];
      if (_0x337a1a["prototype"]["__quenchAccelPatched"]) return !0x0;
      var _0x4d212f = _0x337a1a["prototype"]["onShow"];
      return _0x337a1a["prototype"]["onShow"] = function () {
        _0x4d212f && _0x4d212f["apply"](this, arguments);
        try {
          var _0x23d3cc = this["ui"];
          if (!_0x23d3cc) return;
          for (var _0x30bf47 = 0x0; _0x30bf47 < 0xa; _0x30bf47++) {
            var _0x5423a2 = _0x23d3cc["m_item" + _0x30bf47];
            _0x5423a2 && _0x5423a2["m_spineEffect"] && _0x46bc4b(_0x5423a2["m_spineEffect"]);
          }
        } catch (_0x2153f6) {
          console["warn"](_0x311edf + " onShow hook error:", _0x2153f6["message"]);
        }
      }, _0x337a1a["prototype"]["__quenchAccelPatched"] = !0x0, console["log"](_0x311edf + " ✅ QuenchStageUpDialog 已 Hook，动画速度 " + _0x42cfe2 + "x"), !0x0;
    } catch (_0x4eff53) {
      return !0x1;
    }
  }
}();
