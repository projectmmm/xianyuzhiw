// Adapted from the supplied 2.57.2 game enhancement asset.
// Static strings decoded; obfuscator guards removed; frame access stays local.
!function () {
  "use strict";
  function _0x34e89f(_0x306d52, _0x2624c6 = "info") {
    const _0x46a80a = "[战斗飘字亿化助手]";
    try {
      const _0xe44625 = {
        info: "color:#60a5fa;",
        success: "color:#4ade80;",
        error: "color:#f87171;",
        warning: "color:#fbbf24;"
      };
      console["log"]("%c" + _0x46a80a + "\x20" + _0x306d52, _0xe44625[_0x2624c6] || "color:#aaa;");
    } catch {
      console["log"](_0x46a80a, _0x306d52);
    }
  }
  const _0x375602 = ["", "+", "\u66b4\u51fb", "\u683c\u6321", "\u6d41\u8840", "\u6bd2", "\u707c\u70e7", "\u6050", "\u540c\u5fc3", "\u534f\u529b", "\u94c1\u8840", "\u9752\u56ca", "\u4ec1\u5fb7", "\u7384\u673a", "\u5251\u80c6", "\u95e8\u4f24", "\u95e8\u4f24"];
  let _0x7d6361 = null;
  function _0x3113c6() {
    _0x7d6361 || (_0x7d6361 = [cc["color"](0xfe, 0xf5, 0xaf, 0xff), cc["color"](0x0, 0xff, 0x0, 0xff), cc["color"](0xff, 0x0, 0x0, 0xff), cc["color"](0xff, 0xc8, 0x0, 0xff), cc["color"](0x8b, 0x0, 0x0, 0xff), cc["color"](0x80, 0x0, 0x80, 0xff), cc["color"](0xff, 0x8c, 0x0, 0xff), cc["color"](0x4b, 0x0, 0x82, 0xff), cc["color"](0xff, 0xa5, 0x0, 0xff), cc["color"](0xff, 0xc8, 0x0, 0xff), cc["color"](0xb2, 0x22, 0x22, 0xff), cc["color"](0x0, 0xce, 0xd1, 0xff), cc["color"](0xff, 0xc0, 0xcb, 0xff), cc["color"](0x8a, 0x2b, 0xe2, 0xff), cc["color"](0xff, 0x45, 0x0, 0xff), cc["color"](0x0, 0xbf, 0xff, 0xff), cc["color"](0xff, 0x14, 0x93, 0xff)]);
  }
  let _0x58bd22 = null,
    _0x7edf39 = null;
  function _0x24e594() {
    _0x58bd22 || (_0x58bd22 = {
      width: 0x3,
      color: cc["color"](0x0, 0x0, 0x0, 0xff)
    }, _0x7edf39 = {
      offset: cc["v2"](0x4, -0x4),
      color: cc["color"](0x65, 0x43, 0x21, 0xb4),
      blur: 0x4
    });
  }
  const _0x4f2a49 = "HYDianHeiW";
  function _0x307f02(_0x1e9a4f, _0x2f0975) {
    if (null == _0x1e9a4f) return "0";
    const _0x245975 = String(_0x1e9a4f)["trim"]();
    if (_0x245975["endsWith"]("\u4ebf") || _0x245975["endsWith"]("\u4e07")) return _0x245975;
    let _0x2bc764 = "",
      _0x39135b = _0x245975;
    if ("i" === _0x245975) return "number" != typeof _0x2f0975 || 0xf === _0x2f0975 || 0x10 === _0x2f0975 ? "\u6d41\u79bb" : _0x245975;
    _0x245975["startsWith"]("s") && (_0x2bc764 = "s", _0x39135b = _0x245975["substring"](0x1));
    const _0x3c3811 = _0x39135b["match"](/^([^\d\-\.]*)([\+\-]?)([\d\.]+)$/);
    if (!_0x3c3811) return _0x245975;
    let _0x50199f = (_0x3c3811[0x1] || "") + (_0x3c3811[0x2] || "");
    const _0x2ab8d8 = _0x3c3811[0x3],
      _0x260af1 = Number(_0x2ab8d8);
    if (!isFinite(_0x260af1)) return _0x50199f + _0x2ab8d8;
    if (0x0 === _0x260af1) return _0x50199f + "0";
    const _0x459a75 = Math["abs"](_0x260af1);
    let _0x1eccd9 = "";
    if (_0x459a75 < 0x2710) _0x1eccd9 = String(Math["floor"](_0x459a75));else {
      if (_0x459a75 < 0x5f5e100) {
        const _0x326bc2 = Math["floor"](_0x459a75 / 0x2710);
        _0x1eccd9 = String(_0x326bc2) + "\u4e07";
      } else {
        const _0x2bba91 = _0x459a75 / 0x5f5e100;
        _0x1eccd9 = _0x2bba91 < 0xa ? _0x2bba91["toFixed"](0x2) + "\u4ebf" : _0x2bba91 < 0x64 ? _0x2bba91["toFixed"](0x1) + "\u4ebf" : Math["floor"](_0x2bba91) + "\u4ebf";
      }
    }
    if ("number" == typeof _0x2f0975 && _0x2f0975 >= 0x0 && _0x2f0975 < _0x375602["length"]) {
      const _0x4703e4 = _0x375602[_0x2f0975];
      if (void 0x0 !== _0x4703e4 && "" !== _0x4703e4) return _0x4703e4 + _0x1eccd9;
    }
    return _0x50199f + _0x1eccd9;
  }
  function _0x2049dd(_0x338e5e, _0x498575) {
    if (_0x338e5e) try {
      _0x3113c6(), _0x24e594(), void 0x0 !== _0x338e5e["font"] && (_0x338e5e["font"] = _0x4f2a49), _0x338e5e["color"] && "function" == typeof _0x338e5e["color"]["set"] && (_0x338e5e["color"] = function (_0x5ad3a0) {
        return _0x3113c6(), "number" == typeof _0x5ad3a0 && _0x5ad3a0 >= 0x0 && _0x5ad3a0 < _0x7d6361["length"] ? _0x7d6361[_0x5ad3a0] : cc["color"](0xff, 0xff, 0xff, 0xff);
      }(_0x498575)), void 0x0 !== _0x338e5e["stroke"] && (_0x338e5e["stroke"] = _0x58bd22["width"], _0x338e5e["strokeColor"] && "function" == typeof _0x338e5e["strokeColor"]["set"] && (_0x338e5e["strokeColor"] = _0x58bd22["color"])), void 0x0 !== _0x338e5e["shadowOffset"] && (_0x338e5e["shadowOffset"] = _0x7edf39["offset"], _0x338e5e["shadowColor"] && "function" == typeof _0x338e5e["shadowColor"]["set"] && (_0x338e5e["shadowColor"] = _0x7edf39["color"]));
    } catch (_0x4cdff3) {}
  }
  function _0xb3eb22(_0x7e1fc4) {
    if (null == _0x7e1fc4) return _0x7e1fc4;
    const _0x2e6fc1 = String(_0x7e1fc4),
      _0x2f29fd = _0x2e6fc1["trim"]();
    if (!/HP$/i["test"](_0x2f29fd)) return _0x2e6fc1;
    return _0x307f02(_0x2f29fd["replace"](/\s*HP$/i, ""));
  }
  const _0x421b03 = ["UI_FlyDamage", "UI_FlyDamageSkew", "UI_FlyCrit", "UI_FlyCritSkew", "UI_FlyBlock", "UI_FlyTreatment", "UI_FlyBleed", "UI_FlyPoison", "UI_FlyBurn", "UI_FlyTerrifying", "UI_FlyTongxin", "UI_FlyHelp", "UI_FlyTieXue", "UI_FlyQingNang", "UI_FlyRende", "UI_FlyXuanJi", "UI_FlyJianDan"];
  function _0x1cb1f2(_0x4534e4, _0x34d7e3) {
    let _0x3ee1bd;
    try {
      _0x3ee1bd = _0x4534e4(_0x34d7e3);
    } catch {
      return !0x1;
    }
    if (!_0x3ee1bd) return !0x1;
    const _0x3a74d3 = _0x3ee1bd["default"] || _0x3ee1bd[Object["keys"](_0x3ee1bd)[0x0]];
    if (!_0x3a74d3 || !_0x3a74d3["prototype"]) return !0x1;
    if (_0x3a74d3["prototype"]["__yiPatched"]) return !0x1;
    const _0x5485e6 = function (_0x4ba013) {
        const _0x36e91d = {
          UI_FlyDamage: 0x0,
          UI_FlyDamageSkew: 0xf,
          UI_FlyTreatment: 0x1,
          UI_FlyCrit: 0x2,
          UI_FlyCritSkew: 0x10,
          UI_FlyBlock: 0x3,
          UI_FlyBleed: 0x4,
          UI_FlyPoison: 0x5,
          UI_FlyBurn: 0x6,
          UI_FlyTerrifying: 0x7,
          UI_FlyTongxin: 0x8,
          UI_FlyHelp: 0x9,
          UI_FlyTieXue: 0xa,
          UI_FlyQingNang: 0xb,
          UI_FlyRende: 0xc,
          UI_FlyXuanJi: 0xd,
          UI_FlyJianDan: 0xe
        };
        return void 0x0 !== _0x36e91d[_0x4ba013] ? _0x36e91d[_0x4ba013] : 0x0;
      }(_0x34d7e3),
      _0x9ef0ed = _0x3a74d3["prototype"]["onConstruct"];
    return _0x3a74d3["prototype"]["onConstruct"] = function () {
      "function" == typeof _0x9ef0ed && _0x9ef0ed["call"](this);
      try {
        const _0x45ee33 = this["m_number"] || this["m_num"] || this["m_value"];
        if (_0x45ee33) {
          try {
            void 0x0 !== _0x45ee33["font"] && (_0x45ee33["font"] = _0x4f2a49), void 0x0 !== _0x45ee33["asTextField"] && _0x45ee33["asTextField"] && (_0x45ee33["asTextField"]["font"] = _0x4f2a49);
          } catch (_0x222c9f) {}
          !function (_0x3149b8, _0x40ce56) {
            if (_0x3149b8 && !_0x3149b8["__yiHooked"]) try {
              let _0x1fa950 = _0x3149b8,
                _0x2c9c1d = null;
              for (; _0x1fa950 && !_0x2c9c1d && (_0x1fa950 = Object["getPrototypeOf"](_0x1fa950), _0x1fa950);) _0x2c9c1d = Object["getOwnPropertyDescriptor"](_0x1fa950, "text");
              if (_0x2c9c1d && "function" == typeof _0x2c9c1d["set"]) {
                const _0x48c7a9 = _0x2c9c1d["get"],
                  _0xba210d = _0x2c9c1d["set"];
                return Object["defineProperty"](_0x3149b8, "text", {
                  configurable: !0x0,
                  enumerable: !0x0,
                  get: function () {
                    return _0x48c7a9 ? _0x48c7a9["call"](this) : this["_text"];
                  },
                  set: function (_0x52afea) {
                    const _0x346461 = _0x307f02(_0x52afea, _0x40ce56);
                    _0xba210d["call"](this, _0x346461), _0x2049dd(this, _0x40ce56);
                  }
                }), void (_0x3149b8["__yiHooked"] = !0x0);
              }
              if ("function" == typeof _0x3149b8["setText"]) {
                const _0x5049be = _0x3149b8["setText"];
                return _0x3149b8["setText"] = function (_0x34a402) {
                  const _0x20bfb2 = _0x307f02(_0x34a402, _0x40ce56);
                  _0x5049be["call"](this, _0x20bfb2), _0x2049dd(this, _0x40ce56);
                }, void (_0x3149b8["__yiHooked"] = !0x0);
              }
            } catch (_0x4dcd27) {
              _0x34e89f("hookTextFieldToYi 出错: " + _0x4dcd27, "error");
            }
          }(_0x45ee33, _0x5485e6), _0x2049dd(_0x45ee33, _0x5485e6);
        }
      } catch (_0x286509) {
        _0x34e89f("[" + _0x34d7e3 + "] onConstruct hook 出错: " + _0x286509, "error");
      }
    }, _0x3a74d3["prototype"]["__yiPatched"] = !0x0, !0x0;
  }
  const _0x2521d6 = Date["now"]();
  window["battleFlyYiTimer"] = setInterval(() => {
    if (Date["now"]() - _0x2521d6 > 0x1d4c0) return clearInterval(window["battleFlyYiTimer"]), window["battleFlyYiTimer"] = null, void _0x34e89f("轮询超时停止（已patch " + (window["__battleYiState"] ? window["__battleYiState"]["patchedModules"]["size"] : 0x0) + " 个模块）", "warning");
    try {
      const _0x5e5c10 = window["__require"] && "function" == typeof window["__require"] && window["__require"] || window["require"] && "function" == typeof window["require"] && window["require"] || null;
      if (!_0x5e5c10) return;
      try {
        _0x3113c6(), _0x24e594();
      } catch (_0xcceaaa) {}
      window["__battleYiState"] = window["__battleYiState"] || {
        compPatched: !0x1,
        hpPatched: !0x1,
        patchedModules: new Set(),
        loggedSummary: !0x1
      };
      let _0x59a42f = 0x0;
      for (const _0x420dea of _0x421b03) try {
        window["__battleYiState"]["patchedModules"]["has"](_0x420dea) || _0x1cb1f2(_0x5e5c10, _0x420dea) && (window["__battleYiState"]["patchedModules"]["add"](_0x420dea), _0x59a42f++);
      } catch (_0x14b90e) {}
      try {
        const _0x26279c = _0x5e5c10("comp-fly-effect"),
          _0x45ed40 = _0x26279c && (_0x26279c["CompFlyEffect"] || _0x26279c["default"]);
        if (_0x45ed40 && !_0x45ed40["__yiPatched"]) {
          const _0x28d017 = "__yi_rawFloatString",
            _0x44ca78 = "__yi_showFloatString";
          Object["defineProperty"](_0x45ed40["prototype"], "floatString", {
            configurable: !0x0,
            enumerable: !0x0,
            get() {
              return this && this[_0x44ca78] || this && this[_0x28d017] || "";
            },
            set(_0x4d74f4) {
              if (!this) return;
              this[_0x28d017] = _0x4d74f4;
              const _0x3f6513 = "number" == typeof this["type"] ? this["type"] : 0x0;
              this[_0x44ca78] = _0x307f02(String(_0x4d74f4), _0x3f6513);
            }
          }), _0x45ed40["__yiPatched"] = !0x0, window["__battleYiState"]["compPatched"] = !0x0, _0x59a42f++;
        } else _0x45ed40 && _0x45ed40["__yiPatched"] && (window["__battleYiState"]["compPatched"] = !0x0);
      } catch (_0x5f09df) {}
      try {
        if (!window["__systemEffectPatched"]) {
          const _0x171179 = _0x5e5c10("system-effect"),
            _0x477584 = _0x171179 && (_0x171179["SystemEffect"] || _0x171179["default"]);
          if (_0x477584 && _0x477584["prototype"] && _0x477584["prototype"]["onEntityAdded"]) {
            const _0x28fd6a = _0x477584["prototype"]["onEntityAdded"];
            _0x477584["prototype"]["onEntityAdded"] = function (_0x541077, _0x2468f8) {
              _0x28fd6a["call"](this, _0x541077, _0x2468f8);
              const _0x3b4c67 = this["getMatchers"] ? this["getMatchers"]() : [];
              if (_0x3b4c67["length"] > 0x0 && _0x2468f8 === _0x3b4c67[0x0]) try {
                const _0x387e12 = _0x541077["getComponent"](_0x5e5c10("comp-fly-effect")["CompFlyEffect"]);
                if (_0x387e12 && _0x387e12["display"] && _0x387e12["display"]["ui"]) {
                  const _0x3fcc40 = _0x387e12["display"]["ui"];
                  _0x3fcc40["m_number"] && _0x2049dd(_0x3fcc40["m_number"], _0x387e12["type"]);
                }
              } catch (_0x2a9758) {}
            }, window["__systemEffectPatched"] = !0x0, _0x59a42f++;
          }
        }
      } catch (_0x26a76b) {}
      try {
        !window["__battleYiState"]["hpPatched"] && function () {
          const _0x130dc7 = window["fgui"] || window["fairygui"],
            _0x5df766 = _0x130dc7 && _0x130dc7["GTextField"];
          if (!_0x5df766 || !_0x5df766["prototype"]) return !0x1;
          if (_0x5df766["prototype"]["__hpFmtPatched"]) return !0x1;
          let _0x167dc3 = _0x5df766["prototype"],
            _0x2b99b5 = null;
          for (; _0x167dc3 && !_0x2b99b5;) _0x2b99b5 = Object["getOwnPropertyDescriptor"](_0x167dc3, "text"), _0x167dc3 = Object["getPrototypeOf"](_0x167dc3);
          if (_0x2b99b5 && "function" == typeof _0x2b99b5["set"]) {
            const _0x2aa0cc = _0x2b99b5["get"],
              _0x5a2048 = _0x2b99b5["set"];
            return Object["defineProperty"](_0x5df766["prototype"], "text", {
              configurable: !0x0,
              enumerable: !0x0,
              get: function () {
                return _0x2aa0cc ? _0x2aa0cc["call"](this) : this["_text"];
              },
              set: function (_0x53ecf1) {
                let _0xee73d = _0x53ecf1;
                try {
                  "string" == typeof _0x53ecf1 && /HP$/i["test"](_0x53ecf1["trim"]()) && (_0xee73d = _0xb3eb22(_0x53ecf1));
                } catch (_0x489482) {}
                _0x5a2048["call"](this, _0xee73d);
              }
            }), _0x5df766["prototype"]["__hpFmtPatched"] = !0x0, !0x0;
          }
          if ("function" == typeof _0x5df766["prototype"]["setText"]) {
            const _0x3c8ec5 = _0x5df766["prototype"]["setText"];
            return _0x5df766["prototype"]["setText"] = function (_0xc25d21) {
              let _0x182aeb = _0xc25d21;
              try {
                "string" == typeof _0xc25d21 && /HP$/i["test"](_0xc25d21["trim"]()) && (_0x182aeb = _0xb3eb22(_0xc25d21));
              } catch (_0x274f24) {}
              return _0x3c8ec5["call"](this, _0x182aeb);
            }, _0x5df766["prototype"]["__hpFmtPatched"] = !0x0, !0x0;
          }
          return !0x1;
        }() && _0x59a42f++, (window["fgui"] || window["fairygui"]) && (window["fgui"] || window["fairygui"])["GTextField"] && (window["fgui"] || window["fairygui"])["GTextField"]["prototype"]["__hpFmtPatched"] && (window["__battleYiState"]["hpPatched"] = !0x0);
      } catch (_0x479568) {}
      window["__battleYiState"]["compPatched"] && window["__battleYiState"]["hpPatched"] && (clearInterval(window["battleFlyYiTimer"]), window["battleFlyYiTimer"] = null, !window["__battleYiState"]["loggedSummary"]) && (_0x34e89f("战斗飘字亿化助手已启用（已patch " + window["__battleYiState"]["patchedModules"]["size"] + " 个飘字模块）", "success"), window["__battleYiState"]["loggedSummary"] = !0x0);
    } catch (_0xa807f5) {
      _0x34e89f("轮询注入出错: " + _0xa807f5, "error");
    }
  }, 0x1f4), _0x34e89f("战斗飘字亿化助手已注入，等待游戏加载...", "info");
}();
