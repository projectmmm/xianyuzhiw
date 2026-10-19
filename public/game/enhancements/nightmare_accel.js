// Adapted from the supplied 2.57.2 game enhancement asset.
// Static strings decoded; obfuscator guards removed; frame access stays local.
!function () {
  "use strict";
  if (!window["__ermaoTenPalaceAccelInstalled"]) {
    window["__ermaoTenPalaceAccelInstalled"] = !0x0;
    var _0x4ccc9c = "[十殿加速]",
      _0x2906d8 = "ten_palace_speed",
      _0x183543 = "ui_speed",
      _0x569d9b = "undefined" != typeof unsafeWindow ? unsafeWindow : window,
      _0x166a20 = {
        tenPalace: 0x64,
        uiSpeed: 0x0,
        panelHooked: !0x1,
        uiApplied: !0x1
      };
    _0x569d9b["__ermaoApplyTenPalaceSpeed"] = function (_0x16b0d4, _0x2526f3) {
      null != _0x16b0d4 && (_0x166a20["tenPalace"] = _0x365305(_0x16b0d4)), null != _0x2526f3 && (_0x166a20["uiSpeed"] = _0x1ef531(_0x2526f3)), _0x8ec33(), _0x2ff4ce(!0x0);
    }, _0x569d9b["__ermaoTenPalaceSpeedStatus"] = function () {
      return {
        tenPalace: _0x166a20["tenPalace"],
        uiSpeed: _0x166a20["uiSpeed"],
        panelHooked: _0x166a20["panelHooked"],
        uiApplied: _0x166a20["uiApplied"]
      };
    }, document["body"] ? _0x45f30a() : document["addEventListener"]("DOMContentLoaded", _0x45f30a);
  }
  function _0x1e3127() {
    try {
      var _0xd27a63 = [_0x4ccc9c]["concat"](Array["prototype"]["slice"]["call"](arguments));
      console["log"]["apply"](console, _0xd27a63);
    } catch (_0x2df68f) {}
  }
  function _0x4a1908(_0xc28239, _0x7553a3) {
    try {
      if ("function" == typeof GM_getValue) {
        var _0x2d2293 = GM_getValue(_0xc28239, null);
        if (null != _0x2d2293 && "" !== _0x2d2293) {
          var _0x47b2cd = Number(_0x2d2293);
          if (!isNaN(_0x47b2cd)) return _0x47b2cd;
        }
      }
    } catch (_0x35ac6b) {}
    try {
      var _0x5a9e54 = localStorage["getItem"]("ermao_" + _0xc28239);
      if (null !== _0x5a9e54 && "" !== _0x5a9e54) {
        var _0x331148 = Number(_0x5a9e54);
        if (!isNaN(_0x331148)) return _0x331148;
      }
    } catch (_0x3c9c0e) {}
    return _0x7553a3;
  }
  function _0x5a28bd(_0x273662, _0x3a1f4d) {
    try {
      "function" == typeof GM_setValue && GM_setValue(_0x273662, _0x3a1f4d);
    } catch (_0x5aef36) {}
    try {
      localStorage["setItem"]("ermao_" + _0x273662, String(_0x3a1f4d));
    } catch (_0x1188f4) {}
  }
  function _0x160d7e(_0x31fbbd) {
    return !_0x31fbbd || _0x31fbbd <= 0x0 ? "\u5173\u95ed" : _0x31fbbd + "x";
  }
  function _0x365305(_0x12bd78) {
    return (_0x12bd78 = Math["round"](Number(_0x12bd78) || 0x0)) < 0x0 && (_0x12bd78 = 0x0), _0x12bd78 > 0xc8 && (_0x12bd78 = 0xc8), _0x12bd78;
  }
  function _0x1ef531(_0x1531e9) {
    return (_0x1531e9 = Math["round"](Number(_0x1531e9) || 0x0)) < 0x0 && (_0x1531e9 = 0x0), _0x1531e9 > 0x64 && (_0x1531e9 = 0x64), _0x1531e9;
  }
  function _0x34e469() {
    _0x166a20["tenPalace"] = _0x365305(_0x4a1908(_0x2906d8, 0x64)), _0x166a20["uiSpeed"] = _0x1ef531(_0x4a1908(_0x183543, 0x0));
  }
  function _0x8ec33() {
    _0x5a28bd(_0x2906d8, _0x166a20["tenPalace"]), _0x5a28bd(_0x183543, _0x166a20["uiSpeed"]);
  }
  function _0xa483fb(_0x4f15d5) {
    if ("function" != typeof _0x569d9b["__require"]) return null;
    try {
      return _0x569d9b["__require"](_0x4f15d5);
    } catch (_0x484818) {
      return null;
    }
  }
  function _0x58b385(_0x44a1f9) {
    if (_0x44a1f9 && !(_0x166a20["tenPalace"] <= 0x0)) {
      try {
        _0x44a1f9["DEFAULT_TIMESCALE"] = _0x166a20["tenPalace"];
      } catch (_0x25a5d9) {}
      try {
        _0x44a1f9["prototype"] && (_0x44a1f9["prototype"]["DEFAULT_TIMESCALE"] = _0x166a20["tenPalace"]);
      } catch (_0x337498) {}
    }
  }
  function _0x5eef5c() {
    if (_0x166a20["tenPalace"] <= 0x0) return _0x166a20["panelHooked"] = !0x0, !0x0;
    var _0x1ce09c = function () {
      for (var _0x444fda = ["NightmareBattlePanel", "ui/nightmare/NightmareBattlePanel", "../ui/nightmare/NightmareBattlePanel"], _0x5961ae = 0x0; _0x5961ae < _0x444fda["length"]; _0x5961ae++) {
        var _0x3f1354 = _0xa483fb(_0x444fda[_0x5961ae]);
        if (_0x3f1354) {
          var _0x19607a = _0x3f1354["NightmareBattlePanel"] || _0x3f1354["default"] || _0x3f1354;
          if (_0x19607a && "function" == typeof _0x19607a && _0x19607a["prototype"]) return _0x19607a;
        }
      }
      return null;
    }();
    if (!_0x1ce09c || "function" != typeof _0x1ce09c["prototype"]["onShow"]) return !0x1;
    if (_0x1ce09c["prototype"]["onShow"]["__ermaoTenPatched"]) return _0x58b385(_0x1ce09c), _0x166a20["panelHooked"] = !0x0, !0x0;
    var _0x906bd9 = _0x1ce09c["prototype"]["onShow"];
    return _0x1ce09c["prototype"]["onShow"] = function () {
      var _0x57abc7 = _0x906bd9["apply"](this, arguments);
      return void 0x0 === this["_originalDefaultTimescale"] && (this["_originalDefaultTimescale"] = this["DEFAULT_TIMESCALE"]), function (_0xa33f8, _0x1903dc) {
        if (!_0xa33f8 || _0x1903dc <= 0x0) return !0x1;
        if (_0xa33f8["__ermaoTenTimescaleLocked"] === _0x1903dc) return !0x0;
        try {
          return Object["defineProperty"](_0xa33f8, "DEFAULT_TIMESCALE", {
            get: function () {
              return _0x1903dc;
            },
            set: function () {},
            configurable: !0x0
          }), _0xa33f8["__ermaoTenTimescaleLocked"] = _0x1903dc, !0x0;
        } catch (_0x1330e2) {
          try {
            return _0xa33f8["DEFAULT_TIMESCALE"] = _0x1903dc, !0x0;
          } catch (_0x52f544) {
            return !0x1;
          }
        }
      }(this, _0x166a20["tenPalace"]), _0x57abc7;
    }, _0x1ce09c["prototype"]["onShow"]["__ermaoTenPatched"] = !0x0, _0x58b385(_0x1ce09c), _0x166a20["panelHooked"] = !0x0, _0x1e3127("NightmareBattlePanel.onShow 已 Hook，倍率=" + _0x166a20["tenPalace"]), !0x0;
  }
  function _0x17bf04() {
    return !!(_0x569d9b["cc"] && _0x569d9b["cc"]["director"] && _0x569d9b["cc"]["director"]["getScheduler"]()) && (_0x166a20["uiSpeed"] <= 0x0 ? (_0x569d9b["cc"]["director"]["getScheduler"]()["setTimeScale"](0x1), _0x166a20["uiApplied"] = !0x1, !0x0) : (_0x569d9b["cc"]["director"]["getScheduler"]()["setTimeScale"](_0x166a20["uiSpeed"]), _0x166a20["uiApplied"] = !0x0, !0x0));
  }
  function _0x27476d() {
    !function () {
      if ("function" == typeof _0x569d9b["__require"] && !_0x569d9b["__require"]["__ermaoTenAccelHooked"]) {
        var _0x303e63 = _0x569d9b["__require"];
        _0x569d9b["__require"] = function (_0x498470) {
          var _0x500aa0 = _0x303e63["apply"](this, arguments);
          try {
            (String(_0x498470 || "")["indexOf"]("NightmareBattlePanel") >= 0x0 || _0x500aa0 && _0x500aa0["NightmareBattlePanel"]) && _0x5eef5c();
          } catch (_0x42ffed) {}
          return _0x500aa0;
        };
        try {
          Object["keys"](_0x303e63)["forEach"](function (_0x27785d) {
            _0x569d9b["__require"][_0x27785d] = _0x303e63[_0x27785d];
          });
        } catch (_0x221830) {}
        _0x569d9b["__require"]["__ermaoTenAccelHooked"] = !0x0;
      }
    }(), _0x166a20["tenPalace"] > 0x0 && _0x5eef5c(), _0x166a20["uiSpeed"] > 0x0 && _0x17bf04();
  }
  function _0x2ff4ce(_0x101255) {
    _0x34e469(), _0x166a20["panelHooked"] = !0x1, _0x27476d(), function (_0x516bad, _0x440934) {
      if (_0x516bad()) _0x440934 && _0x440934(!0x0);else var _0x196848 = 0x0,
        _0x15886b = setInterval(function () {
          _0x196848++, (_0x516bad() || _0x196848 > 0xc8) && (clearInterval(_0x15886b), _0x440934 && _0x440934(!!_0x516bad()));
        }, 0x12c);
    }(function () {
      _0x27476d();
      var _0x4d7ca2 = _0x166a20["tenPalace"] <= 0x0 || _0x166a20["panelHooked"],
        _0x5c3552 = _0x166a20["uiSpeed"] <= 0x0 || _0x166a20["uiApplied"] || _0x17bf04();
      return _0x4d7ca2 && _0x5c3552;
    }), _0x101255 && _0x1e3127("已应用 — 十殿=" + _0x160d7e(_0x166a20["tenPalace"]) + "，UI=" + _0x160d7e(_0x166a20["uiSpeed"]));
  }
  function _0x37ab42() {
    if (!document["getElementById"]("__ermao_ten_accel_icon")) {
      !function () {
        var _0x3ad794 = ["/* 小图标（收起态） */", "#__ermao_ten_accel_icon{", "  position:fixed;top:72px;right:12px;z-index:2147483647;", "  width:28px;height:28px;border-radius:50%;cursor:pointer;", "  background:rgba(18,18,24,.85);border:1px solid rgba(255,105,180,.4);", "  display:flex;align-items:center;justify-content:center;", "  font-size:14px;color:#ff8ec7;user-select:none;", "  box-shadow:0 2px 8px rgba(0,0,0,.4);transition:all .2s;", "}", "#__ermao_ten_accel_icon:hover{background:rgba(255,105,180,.2);border-color:#ff69b4;transform:scale(1.1);}", "#__ermao_ten_accel_icon.active{border-color:#ff69b4;box-shadow:0 0 8px rgba(255,105,180,.4);}", "/* 弹出面板（展开态） */", "#__ermao_ten_accel_popup{", "  position:fixed;z-index:2147483646;display:none;", "  width:150px;padding:6px 8px;", "  background:rgba(18,18,24,.92);border:1px solid rgba(255,105,180,.35);", "  border-radius:8px;color:#f5f5f5;font:10px/1.3 -apple-system,sans-serif;", "  box-shadow:0 4px 16px rgba(0,0,0,.5);user-select:none;", "}", "#__ermao_ten_accel_popup.show{display:block;}", "#__ermao_ten_accel_popup .__row{margin-top:5px;}", "#__ermao_ten_accel_popup .__label{display:flex;justify-content:space-between;margin-bottom:1px;color:#aaa;font-size:10px;}", "#__ermao_ten_accel_popup .__val{color:#ff8ec7;font-weight:600;}", "#__ermao_ten_accel_popup input[type=range]{width:100%;height:12px;margin:0;accent-color:#ff69b4;}", "#__ermao_ten_accel_popup .__hint{margin-top:4px;color:#555;font-size:8px;}"]["join"]("\x0a");
        try {
          if ("function" == typeof GM_addStyle) return void GM_addStyle(_0x3ad794);
        } catch (_0x4117ec) {}
        var _0x4a0cc5 = document["createElement"]("style");
        _0x4a0cc5["textContent"] = _0x3ad794, (document["head"] || document["documentElement"])["appendChild"](_0x4a0cc5);
      }(), _0x34e469();
      var _0x10f6ec = document["createElement"]("div");
      _0x10f6ec["id"] = "__ermao_ten_accel_icon", _0x10f6ec["textContent"] = "\u26a1", _0x10f6ec["title"] = "十殿加速";
      var _0xde3b18 = document["createElement"]("div");
      _0xde3b18["id"] = "__ermao_ten_accel_popup", _0xde3b18["appendChild"](_0x73d4c4("\u5341\u6bbf", "__ten", 0xc8, _0x166a20["tenPalace"], function (_0x522f07) {
        return _0x166a20["tenPalace"] = _0x365305(_0x522f07), _0x166a20["tenPalace"];
      })), _0xde3b18["appendChild"](_0x73d4c4("UI", "__ui", 0x64, _0x166a20["uiSpeed"], function (_0x4a5914) {
        return _0x166a20["uiSpeed"] = _0x1ef531(_0x4a5914), _0x166a20["uiSpeed"];
      }));
      var _0x5d6d57 = document["createElement"]("div");
      _0x5d6d57["className"] = "__hint", _0x5d6d57["textContent"] = "十殿=战斗 UI=全局 0=关", _0xde3b18["appendChild"](_0x5d6d57), document["documentElement"]["appendChild"](_0x10f6ec), document["documentElement"]["appendChild"](_0xde3b18);
      var _0x35654d = !0x1;
      _0x10f6ec["addEventListener"]("click", function (_0x27359b) {
        _0x27359b["stopPropagation"](), _0x35654d = !_0x35654d, _0xde3b18["classList"]["toggle"]("show", _0x35654d), _0x10f6ec["classList"]["toggle"]("active", _0x35654d), _0x35654d && _0xdf7997();
      }), document["addEventListener"]("click", function (_0x3afa2f) {
        _0x35654d && !_0xde3b18["contains"](_0x3afa2f["target"]) && _0x3afa2f["target"] !== _0x10f6ec && (_0x35654d = !0x1, _0xde3b18["classList"]["remove"]("show"), _0x10f6ec["classList"]["remove"]("active"));
      });
      var _0x4a64f8 = !0x1,
        _0xbc4db3 = !0x1,
        _0xa47f0f = 0x0,
        _0x13ce92 = 0x0;
      _0x10f6ec["addEventListener"]("mousedown", function (_0x24ccf0) {
        _0x4a64f8 = !0x0, _0xbc4db3 = !0x1, _0xa47f0f = _0x24ccf0["clientX"] - _0x10f6ec["getBoundingClientRect"]()["left"], _0x13ce92 = _0x24ccf0["clientY"] - _0x10f6ec["getBoundingClientRect"]()["top"], _0x24ccf0["preventDefault"]();
      }), document["addEventListener"]("mousemove", function (_0x120392) {
        _0x4a64f8 && (_0xbc4db3 = !0x0, _0x10f6ec["style"]["left"] = Math["max"](0x0, _0x120392["clientX"] - _0xa47f0f) + "px", _0x10f6ec["style"]["top"] = Math["max"](0x0, _0x120392["clientY"] - _0x13ce92) + "px", _0x10f6ec["style"]["right"] = "auto", _0x35654d && _0xdf7997());
      }), document["addEventListener"]("mouseup", function () {
        _0x4a64f8 = !0x1;
      }), _0x10f6ec["addEventListener"]("click", function (_0x534c50) {
        _0xbc4db3 && (_0x534c50["stopImmediatePropagation"](), _0xbc4db3 = !0x1);
      }, !0x0);
    }
    function _0x73d4c4(_0x5e7ddb, _0x55a7ac, _0x43928b, _0x431d36, _0x3bd473) {
      var _0x5d1387 = document["createElement"]("div");
      _0x5d1387["className"] = "__row";
      var _0x3df3ba = document["createElement"]("div");
      _0x3df3ba["className"] = "__label";
      var _0x194665 = document["createElement"]("span");
      _0x194665["textContent"] = _0x5e7ddb;
      var _0x5426bc = document["createElement"]("span");
      _0x5426bc["className"] = "__val", _0x5426bc["id"] = _0x55a7ac + "_val", _0x5426bc["textContent"] = _0x160d7e(_0x431d36), _0x3df3ba["appendChild"](_0x194665), _0x3df3ba["appendChild"](_0x5426bc);
      var _0x27b7bc = document["createElement"]("input");
      return _0x27b7bc["type"] = "range", _0x27b7bc["min"] = "0", _0x27b7bc["max"] = String(_0x43928b), _0x27b7bc["step"] = "1", _0x27b7bc["value"] = String(_0x431d36), _0x27b7bc["id"] = _0x55a7ac + "_slider", _0x27b7bc["addEventListener"]("input", function () {
        var _0xa51fc9 = _0x3bd473(Number(_0x27b7bc["value"]));
        _0x27b7bc["value"] = String(_0xa51fc9), _0x5426bc["textContent"] = _0x160d7e(_0xa51fc9), _0x8ec33(), _0x2ff4ce(!0x0);
      }), _0x5d1387["appendChild"](_0x3df3ba), _0x5d1387["appendChild"](_0x27b7bc), _0x5d1387;
    }
    function _0xdf7997() {
      var _0x4d7d59 = _0x10f6ec["getBoundingClientRect"]();
      _0xde3b18["style"]["top"] = _0x4d7d59["bottom"] + 0x4 + "px", _0xde3b18["style"]["right"] = window["innerWidth"] - _0x4d7d59["right"] + "px";
    }
  }
  function _0x45f30a() {
    _0x34e469(), _0x37ab42(), _0x2ff4ce(!0x1), setInterval(function () {
      (_0x166a20["tenPalace"] <= 0x0 || _0x166a20["panelHooked"]) && (_0x166a20["uiSpeed"] <= 0x0 || _0x166a20["uiApplied"]) || _0x27476d();
    }, 0x9c4), _0x1e3127("已加载 — 十殿=" + _0x160d7e(_0x166a20["tenPalace"]) + "，UI=" + _0x160d7e(_0x166a20["uiSpeed"]));
  }
}();
