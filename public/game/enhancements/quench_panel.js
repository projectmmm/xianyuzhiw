// Adapted from the supplied 2.57.2 game enhancement asset.
// Static strings decoded; obfuscator guards removed; frame access stays local.
!function () {
  "use strict";
  const _0x26362c = window,
    _0x40fee9 = "__quenchSkipRedOnlyPatched__",
    _0x346828 = "__skipRedOnlyToggle",
    _0xabda8b = "__skipRedOnlyEnabled",
    _0x54316a = "__skipRedOnlyClickBound",
    _0x5b319d = "__skipRedOnlyAutoConfirming",
    _0x15099c = "__skipRedOnlyOriginTogglePositions",
    _0x518a8d = "__quenchEnchantClone",
    _0x36d226 = "__quenchEnchantCloneClickBound",
    _0x4f4293 = "EquipEnchantDialog",
    _0x3962c3 = "__quenchBlankSettingsPatched",
    _0x38daf2 = "__quenchBlankSettingsRequest",
    _0xd1c9e5 = "__quenchBlankSettingsMode",
    _0x4bc936 = "__quenchBlankSettingsOrigTitle",
    _0x5b0f1d = ["container", "tab", "resources"],
    _0x16a697 = ["equipCnt", "equipSlot", "btnConfirm", "btnCancelBless", "btnQuench"],
    _0x20d634 = "__quenchBlankSettingsStore",
    _0x2f1732 = "__quenchBlankTitleNode",
    _0x35aca3 = "__quenchCustomCfgV1",
    _0x273f8b = "__quenchCustomRun",
    _0x234520 = "__quenchCustomTakeoverGuard",
    _0x2a2c15 = "__customQuenchSettingsOverlay",
    _0x4534bc = 0x1869f,
    _0x17f9c4 = {
      enabled: !0x1,
      timesOn: !0x1,
      times: 0x3e8,
      targetOn: !0x1,
      targetPct: 0x64,
      pctOn: !0x1,
      targetCnt: 0x1,
      targetAttrs: []
    };
  function _0x1b92b3(_0x10969e) {
    return _0x326f28(_0x10969e && _0x10969e["targetAttrs"])["filter"](function (_0xc37988) {
      return _0xc37988["a"] > 0x0;
    });
  }
  function _0x403f03(_0x136347) {
    const _0x45ca18 = _0x1b92b3(_0x136347);
    return !(!_0x136347 || !(_0x136347["timesOn"] || _0x136347["targetOn"] && _0x45ca18["length"] > 0x0));
  }
  const _0x1e1172 = {
    0x0: "任意颜色",
    0x1: "\u767d\u8272",
    0x2: "\u7eff\u8272",
    0x3: "\u84dd\u8272",
    0x4: "\u7d2b\u8272",
    0x5: "\u6a59\u8272",
    0x6: "\u7ea2\u8272"
  };
  function _0x326f28(_0x232fad) {
    const _0x4262dd = [];
    for (let _0xfa6d8c = 0x0; _0xfa6d8c < (_0x232fad || [])["length"]; _0xfa6d8c += 0x1) {
      const _0x205c8e = _0x232fad[_0xfa6d8c];
      "number" == typeof _0x205c8e ? _0x205c8e > 0x0 ? _0x4262dd["push"]({
        a: _0x205c8e,
        c: 0x0
      }) : _0x4262dd["push"]({
        a: 0x0,
        c: 0x0
      }) : _0x205c8e && void 0x0 !== _0x205c8e["a"] && _0x4262dd["push"]({
        a: Number(_0x205c8e["a"]) || 0x0,
        c: Number(_0x205c8e["c"]) || 0x0
      });
    }
    return _0x4262dd;
  }
  const _0x15082c = {
      0x1: "\u653b\u51fb",
      0x2: "\u8840\u91cf",
      0x3: "\u9632\u5fa1",
      0x4: "\u901f\u5ea6",
      0x5: "\u7834\u7532",
      0x6: "破甲抵抗",
      0x7: "\u7cbe\u51c6",
      0x8: "\u683c\u6321",
      0x9: "\u51cf\u4f24",
      0xa: "\u66b4\u51fb",
      0xb: "暴击抵抗",
      0xc: "\u7206\u4f24",
      0xd: "爆伤抵抗",
      0xe: "技能伤害",
      0xf: "\u514d\u63a7",
      0x10: "眩晕免疫",
      0x11: "冰冻免疫",
      0x12: "沉默免疫",
      0x13: "流血免疫",
      0x14: "中毒免疫",
      0x15: "灼烧免疫"
    },
    _0x2c36bb = ["m_btnLock", "m_btnSetting", "m_btnSet", "m_btnMenu", "m_btnHelp", "m_btnRule", "m_btnTips"],
    _0x7b1bcb = ["m_btnLock", "m_btnSetting", "m_btnMenu", "m_btnHelp", "m_btnSet", "m_btnRule", "m_btnTips"],
    _0xe1231e = -0xd,
    _0x4c4f69 = "[跳过红色-加速]",
    _0x47a5eb = "__quenchTimeScaleLocked";
  function _0x3157ed(_0x83bc31) {
    try {
      return "function" == typeof _0x26362c["__require"] ? _0x26362c["__require"](_0x83bc31) : null;
    } catch (_0x312bc5) {
      return null;
    }
  }
  function _0x2377a1() {
    const _0x4fbfc9 = _0x3157ed("UI_SkipOrangeToggle");
    return _0x4fbfc9 && _0x4fbfc9["default"] ? _0x4fbfc9["default"] : null;
  }
  function _0x5e5347(_0x4f623f) {
    if (!_0x4f623f) return;
    _0x4f623f[_0xabda8b] = !0x1, _0x4f623f[_0x5b319d] = !0x1;
    const _0x1a1f9b = _0x4f623f[_0x346828];
    _0x1a1f9b && _0x1a1f9b["m_checkBox"] && (_0x1a1f9b["m_checkBox"]["selected"] = !0x1);
  }
  function _0x5e3745(_0x368b76) {
    try {
      if ("string" == typeof _0x368b76["text"] && _0x368b76["text"]) return _0x368b76["text"];
    } catch (_0x598e19) {}
    const _0x468d5c = ["m_title", "m_desc", "m_name", "m_content", "m_label"];
    for (let _0x4b945d = 0x0; _0x4b945d < _0x468d5c["length"]; _0x4b945d += 0x1) try {
      const _0x37d536 = _0x368b76[_0x468d5c[_0x4b945d]];
      if (_0x37d536 && "string" == typeof _0x37d536["text"] && _0x37d536["text"]) return _0x37d536["text"];
    } catch (_0x1c8d84) {}
    return "";
  }
  function _0x5a3dac(_0x396d79, _0x30870b) {
    let _0x58a46a = 0x0,
      _0x37bfe3 = 0x0,
      _0x11ef8c = _0x396d79;
    for (; _0x11ef8c && _0x11ef8c !== _0x30870b;) _0x58a46a += _0x11ef8c["x"] || 0x0, _0x37bfe3 += _0x11ef8c["y"] || 0x0, _0x11ef8c = _0x11ef8c["parent"];
    return _0x11ef8c === _0x30870b ? {
      x: _0x58a46a,
      y: _0x37bfe3
    } : null;
  }
  function _0x408714(_0x33acb8) {
    if (!_0x33acb8) return null;
    for (let _0x57154d = 0x0; _0x57154d < _0x2c36bb["length"]; _0x57154d += 0x1) {
      const _0x19f6b0 = _0x33acb8[_0x2c36bb[_0x57154d]];
      if (_0x19f6b0 && "number" == typeof _0x19f6b0["x"] && "number" == typeof _0x19f6b0["y"]) return _0x19f6b0;
    }
    const _0x59d567 = [];
    return function _0x3a81ff(_0x351ffe, _0x45adbf) {
      if (_0x351ffe && !(_0x45adbf > 0x8)) {
        try {
          _0x351ffe["width"] > 0x0 && _0x351ffe["height"] > 0x0 && _0x351ffe["width"] <= 0x50 && _0x351ffe["height"] <= 0x50 && _0x351ffe["y"] <= 0.18 * _0x33acb8["height"] && _0x351ffe["x"] >= 0.55 * _0x33acb8["width"] && _0x59d567["push"](_0x351ffe);
        } catch (_0x1e2010) {}
        if ("number" == typeof _0x351ffe["numChildren"]) {
          for (let _0x1cc7cc = 0x0; _0x1cc7cc < _0x351ffe["numChildren"]; _0x1cc7cc += 0x1) _0x3a81ff(_0x351ffe["getChildAt"](_0x1cc7cc), _0x45adbf + 0x1);
        }
      }
    }(_0x33acb8, 0x0), _0x59d567["length"] ? (_0x59d567["sort"](function (_0xc0fdd4, _0x10305f) {
      return _0xc0fdd4["x"] - _0x10305f["x"];
    }), _0x59d567[0x0]) : null;
  }
  function _0x2df6e3(_0x434405) {
    if (_0x434405) {
      if (_0x434405["__isClubSetUpBtn__"]) try {
        _0x434405["relations"]?.["clearAll"]?.(), _0x434405["touchable"] = !0x0, _0x434405["opaque"] = !0x0, _0x434405["__enchantClickTarget__"] = _0x434405;
      } catch (_0x726b52) {} else {
        try {
          _0x434405["relations"]?.["clearAll"]?.(), _0x434405["m_redPoint"] && (_0x434405["m_redPoint"]["visible"] = !0x1), _0x434405["m_showResIcon"] && (_0x434405["m_showResIcon"]["selectedPage"] = "false");
          const _0x1d7f6b = _0x434405["getChild"]?.("title") || _0x434405["m_title"] || null;
          _0x1d7f6b && (_0x1d7f6b["visible"] = !0x1);
        } catch (_0x41d263) {}
        try {
          _0x434405["touchable"] = !0x0, _0x434405["opaque"] = !0x0, _0x434405["__enchantClickTarget__"] = _0x434405;
        } catch (_0x5481ea) {}
      }
    }
  }
  function _0x2d7823(_0x2da305) {
    return _0x2da305 ? (_0x2df6e3(_0x2da305), _0x2da305) : null;
  }
  function _0xa9898c(_0x4aa62f) {
    const _0x1863da = _0x4aa62f && _0x4aa62f["ui"],
      _0x1dee92 = _0x4aa62f && _0x4aa62f[_0x518a8d];
    if (!_0x1863da || !_0x1dee92) return;
    _0x1dee92["visible"] = !0x0, _0x2df6e3(_0x1dee92);
    const _0x7bb5e0 = function (_0x2b9bb9) {
        return {
          w: _0x2b9bb9 && _0x2b9bb9["width"] > 0x0 ? _0x2b9bb9["width"] : 0x30,
          h: _0x2b9bb9 && _0x2b9bb9["height"] > 0x0 ? _0x2b9bb9["height"] : 0x30
        };
      }(_0x1dee92),
      _0x3fc61d = function (_0x27bd0d) {
        if (!_0x27bd0d) return [];
        const _0x270784 = new Set(),
          _0x1c1c06 = [];
        function _0x5dda43(_0x16b79e) {
          _0x16b79e && !_0x270784["has"](_0x16b79e) && "number" == typeof _0x16b79e["x"] && "number" == typeof _0x16b79e["y"] && (_0x270784["add"](_0x16b79e), _0x1c1c06["push"](_0x16b79e));
        }
        for (let _0xab6d3e = 0x0; _0xab6d3e < _0x7b1bcb["length"]; _0xab6d3e += 0x1) _0x5dda43(_0x27bd0d[_0x7b1bcb[_0xab6d3e]]);
        if (!_0x1c1c06["length"]) {
          const _0x8f0388 = [];
          function _0x1c37ad(_0x35fbdc, _0x312f5d) {
            if (_0x35fbdc && !(_0x312f5d > 0x8)) {
              try {
                _0x35fbdc["width"] > 0x18 && _0x35fbdc["width"] <= 0x50 && _0x35fbdc["height"] > 0x18 && _0x35fbdc["height"] <= 0x50 && _0x35fbdc["y"] <= 0.11 * _0x27bd0d["height"] && _0x35fbdc["x"] >= 0.68 * _0x27bd0d["width"] && !_0x270784["has"](_0x35fbdc) && _0x8f0388["push"](_0x35fbdc);
              } catch (_0x59d154) {}
              if ("number" == typeof _0x35fbdc["numChildren"]) {
                for (let _0x5aa761 = 0x0; _0x5aa761 < _0x35fbdc["numChildren"]; _0x5aa761 += 0x1) _0x1c37ad(_0x35fbdc["getChildAt"](_0x5aa761), _0x312f5d + 0x1);
              }
            }
          }
          _0x1c37ad(_0x27bd0d, 0x0), _0x8f0388["sort"](function (_0xd56f98, _0x7c6259) {
            return _0xd56f98["x"] - _0x7c6259["x"];
          });
          for (let _0x117496 = 0x0; _0x117496 < _0x8f0388["length"]; _0x117496 += 0x1) _0x5dda43(_0x8f0388[_0x117496]);
        }
        return _0x1c1c06["sort"](function (_0x4fa84c, _0x57591f) {
          return _0x4fa84c["x"] - _0x57591f["x"];
        }), _0x1c1c06;
      }(_0x1863da);
    let _0x19f4c3 = !0x1;
    if (_0x3fc61d["length"]) {
      const _0x2796ce = _0x1863da["m_btnLock"] || _0x3fc61d[0x0],
        _0x58b732 = _0x5a3dac(_0x2796ce, _0x1863da),
        _0x5a84ee = Math["max"](0x4, function (_0x25fb6a, _0x1d1cab) {
          if (!_0x1d1cab || _0x1d1cab["length"] < 0x2) return 0x4;
          const _0x2fe837 = [];
          for (let _0x140490 = 0x1; _0x140490 < _0x1d1cab["length"]; _0x140490 += 0x1) {
            const _0x2ea9ec = _0x1d1cab[_0x140490 - 0x1],
              _0x1db4fe = _0x1d1cab[_0x140490],
              _0x111da8 = _0x5a3dac(_0x2ea9ec, _0x25fb6a),
              _0x213bb8 = _0x5a3dac(_0x1db4fe, _0x25fb6a);
            if (!_0x111da8 || !_0x213bb8) continue;
            const _0x39ee31 = _0x213bb8["x"] - (_0x111da8["x"] + _0x2ea9ec["width"]);
            _0x39ee31 >= 0x0 && _0x39ee31 < 0x50 && _0x2fe837["push"](_0x39ee31);
          }
          return _0x2fe837["length"] ? _0x2fe837["reduce"](function (_0x498054, _0x184c94) {
            return _0x498054 + _0x184c94;
          }, 0x0) / _0x2fe837["length"] : 0x4;
        }(_0x1863da, _0x3fc61d)),
        _0x503d09 = _0x7bb5e0["w"],
        _0x39f3eb = _0x7bb5e0["h"];
      _0x58b732 && (_0x1dee92["x"] = Math["max"](0x0, _0x58b732["x"] - _0x503d09 - _0x5a84ee + _0xe1231e), _0x1dee92["y"] = _0x58b732["y"] + Math["max"](0x0, (_0x2796ce["height"] - _0x39f3eb) / 0x2) + 0x0, _0x19f4c3 = !0x0);
    }
    if (!_0x19f4c3) {
      const _0x104acb = function (_0xd02987) {
        if (!_0xd02987) return null;
        for (let _0x3ec926 = 0x0; _0x3ec926 < _0x7b1bcb["length"]; _0x3ec926 += 0x1) {
          const _0x603062 = _0xd02987[_0x7b1bcb[_0x3ec926]];
          if (_0x603062 && "number" == typeof _0x603062["x"] && "number" == typeof _0x603062["y"]) return _0x603062;
        }
        return _0x408714(_0xd02987);
      }(_0x1863da);
      if (_0x104acb) {
        const _0xd1126 = _0x5a3dac(_0x104acb, _0x1863da);
        _0xd1126 && (_0x1dee92["x"] = Math["max"](0x0, _0xd1126["x"] - _0x7bb5e0["w"] - 0x4 + _0xe1231e), _0x1dee92["y"] = _0xd1126["y"] + Math["max"](0x0, (_0x104acb["height"] - _0x7bb5e0["h"]) / 0x2) + 0x0, _0x19f4c3 = !0x0);
      }
    }
    _0x19f4c3 || (_0x1dee92["x"] = Math["max"](0x0, _0x1863da["width"] - _0x7bb5e0["w"] - 0x58 + _0xe1231e), _0x1dee92["y"] = 0xa);
    try {
      _0x1dee92["relations"]?.["clearAll"]?.(), _0x1863da["setChildIndex"](_0x1dee92, _0x1863da["numChildren"] - 0x1);
    } catch (_0x4c7551) {}
    _0x2d7823(_0x1dee92), console["log"]("[淬炼增强] 设置按钮位置", _0x1dee92["x"], _0x1dee92["y"], "offset", _0xe1231e, 0x0);
  }
  function _0x48e362(_0x3198f2) {
    const _0x1ccc1a = _0x3198f2 && _0x3198f2["ui"];
    if (_0x1ccc1a) {
      if (!_0x3198f2[_0x518a8d]) {
        const _0x57b5af = _0x4d3c78("ui_common", "btnClubSetUp");
        if (!_0x57b5af) return void console["warn"]("[淬炼增强] ui_common/btnClubSetUp 创建失败");
        _0x57b5af["__isClubSetUpBtn__"] = !0x0, _0x57b5af["name"] = "quenchSettingsBtn", _0x57b5af["visible"] = !0x0, _0x2df6e3(_0x57b5af), _0x1ccc1a["addChild"](_0x57b5af), _0x3198f2[_0x518a8d] = _0x57b5af, console["log"]("[淬炼增强] 已创建 ui_common/btnClubSetUp 设置入口");
      }
      _0x2df6e3(_0x3198f2[_0x518a8d]), function (_0x4f7053) {
        const _0x208afe = _0x4f7053 && _0x4f7053[_0x518a8d];
        if (!_0x208afe || _0x208afe[_0x36d226]) return;
        const _0x5dc5f4 = _0x2d7823(_0x208afe) || _0x208afe;
        try {
          _0x5dc5f4["clearClick"]?.();
        } catch (_0x1b9ec3) {}
        try {
          _0x208afe["clearClick"]?.();
        } catch (_0x4b3516) {}
        try {
          _0x5dc5f4["onClick"](function () {
            _0x28af0d(_0x4f7053);
          }, _0x4f7053), _0x208afe[_0x36d226] = !0x0;
        } catch (_0x574db9) {
          console["error"]("[淬炼增强] 绑定设置按钮点击失败:", _0x574db9);
        }
      }(_0x3198f2), _0xa9898c(_0x3198f2);
    }
  }
  function _0x403085(_0x325583) {
    _0x48e362(_0x325583), _0xa9898c(_0x325583);
  }
  function _0x2b6b0d(_0x34b8d0) {
    _0x403085(_0x34b8d0), setTimeout(function () {
      _0x403085(_0x34b8d0);
    }, 0x0), setTimeout(function () {
      _0x403085(_0x34b8d0);
    }, 0x78), setTimeout(function () {
      _0x403085(_0x34b8d0);
    }, 0x190);
  }
  function _0x547dae(_0x235aac) {
    !function (_0x39f104) {
      const _0x38d845 = _0x39f104 && _0x39f104["ui"],
        _0x2e9484 = _0x39f104 && _0x39f104[_0x346828];
      if (!_0x38d845 || !_0x2e9484) return;
      const _0x2f8f83 = !!_0x39f104["_isOpenAuto"];
      _0x2e9484["visible"] = _0x2f8f83, _0x2f8f83 || _0x5e5347(_0x39f104);
    }(_0x235aac), function (_0xa1f6fe) {
      const _0x5bbc1e = _0xa1f6fe && _0xa1f6fe["ui"],
        _0x1d1048 = _0xa1f6fe && _0xa1f6fe[_0x346828];
      if (!(_0x5bbc1e && _0x5bbc1e["m_autoQuenchToggle"] && _0x5bbc1e["m_skipOrangeToggle"] && _0x1d1048)) return;
      const _0x4506ea = _0x5bbc1e["m_autoQuenchToggle"],
        _0x4e4051 = _0x5bbc1e["m_skipOrangeToggle"],
        _0x214c3c = _0xa1f6fe[_0x15099c];
      if (!_0xa1f6fe["_isOpenAuto"]) return _0x214c3c && (_0x4506ea["x"] = _0x214c3c["auto"]["x"], _0x4506ea["y"] = _0x214c3c["auto"]["y"], _0x4e4051["x"] = _0x214c3c["orange"]["x"], _0x4e4051["y"] = _0x214c3c["orange"]["y"]), _0x1d1048["x"] = _0x4e4051["x"] + _0x4e4051["width"], void (_0x1d1048["y"] = _0x4e4051["y"]);
      const _0x3a1137 = _0x4506ea["width"] + _0x4e4051["width"] + _0x1d1048["width"],
        _0x3e9362 = Math["max"](0x0, (_0x5bbc1e["width"] - _0x3a1137) / 0x4),
        _0x5613f8 = _0x4506ea["y"];
      _0x4506ea["x"] = _0x3e9362, _0x4e4051["x"] = _0x4506ea["x"] + _0x4506ea["width"] + _0x3e9362, _0x1d1048["x"] = _0x4e4051["x"] + _0x4e4051["width"] + _0x3e9362, _0x4506ea["y"] = _0x5613f8, _0x4e4051["y"] = _0x5613f8, _0x1d1048["y"] = _0x5613f8;
    }(_0x235aac);
  }
  function _0xec01d3(_0x397f07) {
    const _0x2a248a = _0x397f07 && _0x397f07["ui"];
    if (_0x2a248a && _0x2a248a["m_skipOrangeToggle"]) {
      if (function (_0x2247f3) {
        const _0x59d3d2 = _0x2247f3 && _0x2247f3["ui"];
        _0x59d3d2 && _0x59d3d2["m_autoQuenchToggle"] && _0x59d3d2["m_skipOrangeToggle"] && !_0x2247f3[_0x15099c] && (_0x2247f3[_0x15099c] = {
          auto: {
            x: _0x59d3d2["m_autoQuenchToggle"]["x"],
            y: _0x59d3d2["m_autoQuenchToggle"]["y"]
          },
          orange: {
            x: _0x59d3d2["m_skipOrangeToggle"]["x"],
            y: _0x59d3d2["m_skipOrangeToggle"]["y"]
          }
        });
      }(_0x397f07), !_0x397f07[_0x346828]) {
        const _0x5d88bd = function () {
          const _0x3fa525 = _0x2377a1();
          if (!_0x3fa525 || "function" != typeof _0x3fa525["createInstance"]) return null;
          try {
            const _0x50e53b = _0x3fa525["createInstance"]();
            return _0x50e53b["name"] = "skipRedToggle", _0x50e53b["m_title"] && (_0x50e53b["m_title"]["text"] = "跳过红色"), _0x50e53b["m_checkBox"] && (_0x50e53b["m_checkBox"]["selected"] = !0x1), _0x50e53b["visible"] = !0x1, _0x50e53b;
          } catch (_0x12442c) {
            return console["error"]("[跳过红色] 创建跳过红色复选框失败:", _0x12442c), null;
          }
        }();
        if (!_0x5d88bd) return;
        _0x2a248a["addChild"](_0x5d88bd), _0x397f07[_0x346828] = _0x5d88bd, _0x397f07[_0xabda8b] = !0x1, _0x397f07[_0x5b319d] = !0x1;
      }
      !function (_0x392fe9) {
        const _0x33f6ca = _0x392fe9 && _0x392fe9[_0x346828];
        if (_0x33f6ca && !_0x33f6ca[_0x54316a]) {
          try {
            _0x33f6ca["clearClick"]();
          } catch (_0x1208a5) {}
          try {
            _0x33f6ca["onClick"](function () {
              _0x392fe9["_isOpenAuto"] ? (_0x392fe9[_0xabda8b] = !_0x392fe9[_0xabda8b], _0x33f6ca["m_checkBox"] && (_0x33f6ca["m_checkBox"]["selected"] = _0x392fe9[_0xabda8b]), _0x392fe9[_0xabda8b] && (_0x392fe9["_isSkipOrange"] = !0x0, _0x392fe9["ui"] && _0x392fe9["ui"]["m_skipOrangeToggle"] && _0x392fe9["ui"]["m_skipOrangeToggle"]["m_checkBox"] && (_0x392fe9["ui"]["m_skipOrangeToggle"]["m_checkBox"]["selected"] = !0x0))) : _0x5e5347(_0x392fe9);
            }, _0x392fe9), _0x33f6ca[_0x54316a] = !0x0;
          } catch (_0x297a3b) {
            console["error"]("[跳过红色] 绑定跳过红色点击失败:", _0x297a3b);
          }
        }
      }(_0x397f07), _0x547dae(_0x397f07);
    }
  }
  function _0x27b97b(_0x641ae) {
    try {
      const _0x25dbe7 = _0x641ae && _0x641ae["content"];
      if (!_0x25dbe7 || _0x25dbe7[_0x47a5eb]) return;
      Object["defineProperty"](_0x25dbe7, "timeScale", {
        get: function () {
          return 2.34;
        },
        set: function (_0x1bc3b8) {
          return _0x1bc3b8;
        },
        configurable: !0x0
      }), _0x25dbe7[_0x47a5eb] = !0x0, console["log"](_0x4c4f69 + " spine timeScale 已锁定为 2.34x");
    } catch (_0x1b2647) {
      console["warn"](_0x4c4f69 + " applySpineTimeScale error:", _0x1b2647);
    }
  }
  function _0x35c18e(_0x330387) {
    if (_0x330387) try {
      _0x330387["onLoadComplete"] && "function" == typeof _0x330387["onLoadComplete"]["addOnce"] && _0x330387["onLoadComplete"]["addOnce"](function () {
        _0x27b97b(_0x330387);
      }), _0x330387["content"] && _0x27b97b(_0x330387);
    } catch (_0xb806b6) {
      console["warn"](_0x4c4f69 + " hookSpineTimeScale error:", _0xb806b6);
    }
  }
  function _0x256f73() {
    try {
      const _0x1e3309 = _0x26362c["localStorage"]["getItem"](_0x35aca3);
      if (_0x1e3309) {
        const _0x40fd26 = Object["assign"]({}, _0x17f9c4, JSON["parse"](_0x1e3309));
        return !0x1 !== _0x40fd26["pctOn"] && (_0x40fd26["pctOn"] = !0x1), _0x40fd26;
      }
    } catch (_0x4874ca) {}
    return Object["assign"]({}, _0x17f9c4);
  }
  function _0x2b7572(_0x4b865e) {
    const _0x4dcf86 = _0x4b865e && _0x4b865e["ui"] && _0x4b865e["ui"]["m_btnQuench"];
    if (!_0x4dcf86) return null;
    if (_0x4dcf86["m_title"] && "string" == typeof _0x4dcf86["m_title"]["text"]) return _0x4dcf86["m_title"];
    try {
      const _0x2e0d1f = "function" == typeof _0x4dcf86["getChild"] ? _0x4dcf86["getChild"]("title") : null;
      if (_0x2e0d1f && "string" == typeof _0x2e0d1f["text"]) return _0x2e0d1f;
    } catch (_0x118b25) {}
    return null;
  }
  function _0x462a97(_0x66059a) {
    const _0x493b2c = _0x66059a && _0x66059a[_0x273f8b],
      _0x4eef77 = _0x2b7572(_0x66059a);
    if (_0x493b2c && _0x4eef77) {
      null == _0x493b2c["origTitle"] && (_0x493b2c["origTitle"] = _0x4eef77["text"]);
      try {
        _0x4eef77["text"] = "淬炼(" + (_0x493b2c["total"] - _0x493b2c["left"]) + "/" + _0x493b2c["total"] + ")";
      } catch (_0x525d6e) {}
    }
  }
  function _0x34080c(_0x2da8a7) {
    if (!_0x2da8a7 || !_0x2da8a7["isShow"] || !_0x2da8a7["ui"]) return console["warn"]("[指定洗炼] 淬炼面板未打开，无法启动"), !0x1;
    const _0x55137f = _0x256f73(),
      _0x3816ec = !0x1 === _0x55137f["timesOn"] ? 0x1869f : _0x55137f["times"],
      _0x4c7b7f = _0x1b92b3(_0x55137f),
      _0x10f841 = !(!_0x55137f["targetOn"] || !_0x4c7b7f["length"]),
      _0x2009ff = function (_0x1fbb64) {
        return _0x1fbb64 && !0x0 === _0x1fbb64["pctOn"] ? Math["max"](0x1, Number(_0x1fbb64["targetPct"]) || _0x564337) : 0x0;
      }(_0x55137f);
    if (!0x1 === _0x55137f["timesOn"] && !_0x10f841) return console["warn"]("[指定洗炼] 次数控制和词条目标均未开启，无法自动停止，已拒绝启动"), !0x1;
    if (_0x2da8a7[_0x273f8b] = {
      left: _0x3816ec,
      total: _0x3816ec,
      targetOn: _0x10f841,
      targetPct: _0x2009ff,
      targetCnt: _0x55137f["targetCnt"],
      targetAttrs: _0x4c7b7f,
      origTitle: null
    }, !_0x2da8a7["_isOpenAuto"] && "function" == typeof _0x2da8a7["_changeAutoState"]) try {
      _0x2da8a7["_changeAutoState"]();
    } catch (_0x381c5c) {}
    return _0x2da8a7["_quenchTimes"] = Math["min"](_0x3816ec, _0x2da8a7["AUTO_QUENCH_TIMES"] || _0x3816ec), _0x462a97(_0x2da8a7), console["log"]("[指定洗炼] 启动：次数=" + _0x3816ec + (_0x10f841 ? " 词条目标=[" + _0x4c7b7f["map"](function (_0x392d24) {
      return (_0x15082c[_0x392d24["a"]] || _0x392d24["a"]) + (_0x392d24["c"] ? "\xb7" + (_0x1e1172[_0x392d24["c"]] || _0x392d24["c"]) : "");
    })["join"](",") + "]\u2265" + _0x2009ff + "%" : " 无词条目标")), !0x0;
  }
  function _0x48f632(_0x516bfb, _0x4662e8) {
    const _0x2ea07a = _0x516bfb && _0x516bfb[_0x273f8b];
    if (_0x2ea07a) {
      _0x516bfb[_0x273f8b] = null;
      try {
        _0x516bfb["_clearQuenchAnims"]();
      } catch (_0x5dc1dd) {}
      if (_0x516bfb["_isOpenAuto"] && "function" == typeof _0x516bfb["_changeAutoState"]) try {
        _0x516bfb["_changeAutoState"]();
      } catch (_0x4e28d6) {}
      !function (_0x2b4f02, _0x84c500) {
        if (!_0x84c500 || null == _0x84c500["origTitle"]) return;
        const _0x384a7c = _0x2b7572(_0x2b4f02);
        if (_0x384a7c) try {
          _0x384a7c["text"] = _0x84c500["origTitle"];
        } catch (_0x41c930) {}
      }(_0x516bfb, _0x2ea07a), console["log"]("[指定洗炼] 停止（" + (_0x4662e8 || "\u624b\u52a8") + "）：已洗 " + (_0x2ea07a["total"] - _0x2ea07a["left"]) + "/" + _0x2ea07a["total"]);
    }
  }
  function _0x2848bf(_0x28c012) {
    const _0xfef489 = _0x28c012 && _0x28c012[_0x273f8b];
    _0xfef489 && (_0xfef489["targetOn"] && function (_0x17ec16, _0x277bcd) {
      const _0x410b57 = _0x17ec16 && _0x17ec16["_equipInfo"];
      if (!_0x410b57 || !_0x410b57["quenches"] || "function" != typeof _0x410b57["quenches"]["forEach"]) return !0x1;
      const _0x3afe7e = _0x277bcd["targetAttrs"] && _0x277bcd["targetAttrs"]["length"] ? _0x277bcd["targetAttrs"] : null;
      if (_0x3afe7e) {
        const _0x3515d0 = {};
        _0x410b57["quenches"]["forEach"](function (_0x364704, _0x1e0c54) {
          if (_0x17ec16["_locks"] && _0x17ec16["_locks"]["has"](_0x1e0c54)) return;
          const _0x4824fc = Number(_0x364704["attrId"] || 0x0) || 0x0,
            _0xb2f26e = Number(_0x364704["colorId"]) || 0x0,
            _0x4c583e = Number(_0x364704["attrNum"]) || 0x0;
          for (let _0x1ea04c = 0x0; _0x1ea04c < _0x3afe7e["length"]; _0x1ea04c += 0x1) {
            const _0x1509de = _0x3afe7e[_0x1ea04c];
            Number(_0x1509de["a"]) === _0x4824fc && _0x4c583e >= _0x277bcd["targetPct"] && (!_0x1509de["c"] || _0xb2f26e === _0x1509de["c"]) && (_0x3515d0[_0x1ea04c] = !0x0);
          }
        });
        for (let _0x43be44 = 0x0; _0x43be44 < _0x3afe7e["length"]; _0x43be44 += 0x1) if (!_0x3515d0[_0x43be44]) return !0x1;
        return !0x0;
      }
      let _0x1d1be4 = 0x0;
      return _0x410b57["quenches"]["forEach"](function (_0x2c746a, _0x2c2da3) {
        (!_0x17ec16["_locks"] || !_0x17ec16["_locks"]["has"](_0x2c2da3)) && Number(_0x2c746a["attrNum"]) >= _0x277bcd["targetPct"] && (_0x1d1be4 += 0x1);
      }), _0x1d1be4 >= (_0x277bcd["targetCnt"] || 0x1);
    }(_0x28c012, _0xfef489) ? _0x48f632(_0x28c012, "词条达标") : _0xfef489["left"] <= 0x0 ? _0x48f632(_0x28c012, "次数完成") : (_0x28c012["_quenchTimes"] > _0xfef489["left"] && (_0x28c012["_quenchTimes"] = _0xfef489["left"]), _0x462a97(_0x28c012)));
  }
  const _0x133f9a = 0xe1,
    _0x33e9ad = {
      tipWidth: 0x294,
      tipHeight: 0x1f4,
      tipY: 0x0,
      formX: 0x0,
      formY: 0x14,
      formWidth: 0x212,
      startY: 0x4,
      rowHeight: 0x2c,
      rowGap: 0xf,
      entryToCountControlGap: 0x19,
      entryRowGap: 0x19,
      toggleRowGap: 0xf,
      countInputTitleGap: 0x14,
      lastDropdownExtraHeight: 0x0,
      labelWidth: 0x68,
      selectorWidth: 0xbe,
      attrSelectorWidth: 0xe1,
      colorSelectorWidth: 0xe1,
      selectorGap: 0x18,
      inputWidth: 0x6e,
      inputHeight: 0x2a,
      unitWidth: 0x1c,
      relationLabelWidth: 0x1c,
      entryToggleRowHeight: 0x2a,
      entryConditionRowHeight: 0x2a,
      entryActionGap: 0x16,
      entryActionAfterLabelGap: 0xc,
      entryActionRightPadding: 0x6,
      entryConditionGap: 0x12,
      entryIndentX: 0x0,
      buttonHeight: 0x2a,
      entryActionBtnWidth: 0x3a,
      entryActionBtnHeight: 0x2c,
      buttonGap: 0xa,
      startButtonTopGap: 0x30,
      saveButtonExtraYOffset: 0xc,
      bottomPadding: 0x22,
      bottomWoodSafePadding: 0x2c,
      tipBgOverscanX: 0x8
    },
    _0x318c5b = {
      minRows: 0x1,
      maxRows: 0x5
    },
    _0x564337 = 0x64;
  let _0x59964b = null,
    _0x3961ef = !0x1;
  function _0x56e389(_0x4d9a63) {
    const _0x100e12 = _0x26362c["fgui"];
    if (!_0x100e12?.["UIPackage"]) return null;
    let _0x30a4e9 = null;
    try {
      _0x30a4e9 = _0x100e12["UIPackage"]["getByName"] ? _0x100e12["UIPackage"]["getByName"](_0x4d9a63) : null;
    } catch (_0x98b98e) {}
    if (_0x30a4e9) return _0x30a4e9;
    const _0x4ffa07 = function () {
      const _0x436f09 = _0x3157ed("FguiExt") || _0x3157ed("extension/FguiExt"),
        _0x52fce6 = _0x3157ed("index-ui"),
        _0x1621e4 = _0x3157ed("ResourceManager"),
        _0x3f5235 = [];
      return _0x436f09 && "function" == typeof _0x436f09["TRY_LOAD_UI"] && _0x3f5235["push"]({
        fn: _0x436f09["TRY_LOAD_UI"],
        owner: _0x436f09
      }), _0x436f09 && "function" == typeof _0x436f09["LOAD_UI"] && _0x3f5235["push"]({
        fn: _0x436f09["LOAD_UI"],
        owner: _0x436f09
      }), _0x52fce6 && "function" == typeof _0x52fce6["TRY_LOAD_UI"] && _0x3f5235["push"]({
        fn: _0x52fce6["TRY_LOAD_UI"],
        owner: _0x52fce6
      }), _0x52fce6 && "function" == typeof _0x52fce6["LOAD_UI"] && _0x3f5235["push"]({
        fn: _0x52fce6["LOAD_UI"],
        owner: _0x52fce6
      }), _0x1621e4?.["ResourceManager"]?.["instance"] && "function" == typeof _0x1621e4["ResourceManager"]["instance"]["loadFGUI"] && _0x3f5235["push"]({
        fn: _0x1621e4["ResourceManager"]["instance"]["loadFGUI"],
        owner: _0x1621e4["ResourceManager"]["instance"]
      }), "function" == typeof _0x26362c["TRY_LOAD_UI"] && _0x3f5235["push"]({
        fn: _0x26362c["TRY_LOAD_UI"],
        owner: _0x26362c
      }), "function" == typeof _0x26362c["LOAD_UI"] && _0x3f5235["push"]({
        fn: _0x26362c["LOAD_UI"],
        owner: _0x26362c
      }), _0x3f5235;
    }();
    for (let _0x4ef9a9 = 0x0; _0x4ef9a9 < _0x4ffa07["length"] && !_0x30a4e9; _0x4ef9a9 += 0x1) {
      const _0x3351bb = _0x4ffa07[_0x4ef9a9];
      try {
        const _0x68e2c7 = _0x3351bb["fn"]["call"](_0x3351bb["owner"], _0x4d9a63);
        _0x68e2c7 && "function" == typeof _0x68e2c7["then"] && _0x68e2c7["catch"](function () {});
      } catch (_0x23129b) {}
      try {
        _0x30a4e9 = _0x100e12["UIPackage"]["getByName"] ? _0x100e12["UIPackage"]["getByName"](_0x4d9a63) : null;
      } catch (_0x29e65a) {}
    }
    try {
      const _0x36511b = _0x3157ed(_0x4d9a63 + "Binder"),
        _0x8d8fb3 = _0x36511b && (_0x36511b["default"] || _0x36511b);
      _0x8d8fb3 && "function" == typeof _0x8d8fb3["bindAll"] && _0x8d8fb3["bindAll"]();
    } catch (_0x598d3c) {}
    try {
      return _0x100e12["UIPackage"]["getByName"] ? _0x100e12["UIPackage"]["getByName"](_0x4d9a63) : null;
    } catch (_0x4fd6a2) {
      return null;
    }
  }
  function _0x18711c() {
    _0x3961ef || (_0x3961ef = !0x0, ["ui_common", "ui_teamUp", "ui_equipQuench"]["forEach"](function (_0x214233) {
      try {
        _0x56e389(_0x214233);
      } catch (_0x70926e) {}
    }));
  }
  function _0x4d3c78(_0x157eb9, _0x5c794b, _0x4b1f08) {
    _0x56e389(_0x157eb9);
    const _0x51565c = _0x26362c["fgui"];
    if (!_0x51565c) return null;
    let _0x37911d = null;
    try {
      _0x37911d = _0x51565c["UIPackage"]?.["createObject"]?.(_0x157eb9, _0x5c794b) || null;
    } catch (_0x11517d) {}
    if (!_0x37911d && _0x4b1f08) try {
      const _0x257d66 = _0x3157ed(_0x4b1f08),
        _0x49edea = _0x257d66 && (_0x257d66["default"] || _0x257d66);
      _0x49edea && "function" == typeof _0x49edea["createInstance"] && (_0x37911d = _0x49edea["createInstance"]());
    } catch (_0x4fde19) {}
    return _0x37911d && (_0x37911d["asButton"] || _0x37911d["asCom"] || _0x37911d) || null;
  }
  function _0x253e3a(_0x118267) {
    try {
      _0x118267?.["removeFromParent"]?.();
    } catch (_0xd0136c) {}
  }
  function _0x63a003(_0x199fe5, _0x4a865b, _0x2a4e3b) {
    if (!_0x199fe5 || "function" != typeof _0x4a865b) return !0x1;
    try {
      _0x199fe5["clearClick"]?.();
    } catch (_0x235b28) {}
    try {
      if ("function" == typeof _0x199fe5["onClick"]) return _0x199fe5["onClick"](_0x4a865b, _0x2a4e3b || null), !0x0;
    } catch (_0x49c7e1) {}
    try {
      if (_0x199fe5["displayObject"] && "function" == typeof _0x199fe5["displayObject"]["on"]) return _0x199fe5["displayObject"]["on"]("click", _0x4a865b, _0x2a4e3b || null), !0x0;
    } catch (_0x3c556a) {}
    return !0x1;
  }
  function _0x26f9b3(_0x3ef4cb, _0x31dea7) {
    if (!_0x3ef4cb) return;
    const _0x520181 = [_0x3ef4cb],
      _0x39b099 = new Set();
    for (; _0x520181["length"];) {
      const _0x3365d5 = _0x520181["shift"]();
      if (_0x3365d5 && !_0x39b099["has"](_0x3365d5)) {
        _0x39b099["add"](_0x3365d5);
        try {
          void 0x0 !== _0x3365d5["title"] && (_0x3365d5["title"] = _0x31dea7);
        } catch (_0x4dcf21) {}
        try {
          void 0x0 !== _0x3365d5["text"] && (_0x3365d5["text"] = _0x31dea7);
        } catch (_0x16fa24) {}
        for (let _0x135d86 = 0x0; _0x135d86 < Number(_0x3365d5["numChildren"] || 0x0); _0x135d86 += 0x1) try {
          _0x520181["push"](_0x3365d5["getChildAt"](_0x135d86));
        } catch (_0x2a2482) {}
      }
    }
  }
  function _0x140cc2(_0x24ae2b, _0x3cf75b) {
    if (!_0x24ae2b) return;
    const _0x3414a0 = !!_0x3cf75b;
    try {
      _0x24ae2b["grayed"] = !_0x3414a0;
    } catch (_0x3a8cbc) {}
    try {
      _0x24ae2b["touchable"] = _0x3414a0;
    } catch (_0x50a4b6) {}
    try {
      _0x24ae2b["mouseEnabled"] = _0x3414a0;
    } catch (_0x2acdd6) {}
  }
  function _0x3c43ba(_0xf8aab4, _0xd04bf2, _0x1bdc82, _0x558cfc, _0x58d7a0) {
    const _0x954882 = _0x26362c["fgui"];
    if (!_0x954882 || "function" != typeof _0x954882["GTextField"]) return null;
    const _0xa9b025 = new _0x954882["GTextField"]();
    return _0xa9b025["text"] = _0xf8aab4 || "", _0xa9b025["fontSize"] = _0x558cfc || 0x18, _0xa9b025["color"] = _0x58d7a0 || function () {
      if (_0x59964b) return _0x59964b;
      const _0x53f419 = _0x4d3c78("ui_common", "BtnFilter", "UI_BtnFilter"),
        _0x59babf = _0x53f419?.["m_title"] || _0x53f419?.["getChild"]?.("title") || null,
        _0x378926 = _0x59babf && void 0x0 !== _0x59babf["color"] && null !== _0x59babf["color"] ? _0x59babf["color"] : "";
      return _0x59964b = _0x378926 || "#6b3f24", _0x253e3a(_0x53f419), _0x59964b;
    }(), _0xa9b025["align"] = _0x954882["AlignType"]?.["Center"] ?? 0x1, _0xa9b025["verticalAlign"] = _0x954882["VertAlignType"]?.["Middle"] ?? 0x1, _0xa9b025["singleLine"] = !0x1, _0xa9b025["wordWrap"] = !0x1, _0xa9b025["setSize"]?.(_0xd04bf2 || 0xa0, _0x1bdc82 || 0x24), _0xa9b025;
  }
  function _0x3939cf(_0x2e7f6b, _0x33758a) {
    if (!_0x2e7f6b) return;
    const _0xf770f = Number(_0x2e7f6b["height"] || 0x0) * Number(_0x2e7f6b["scaleY"] || 0x1);
    try {
      _0x2e7f6b["y"] = Math["round"](Number(_0x33758a || 0x0) - _0xf770f / 0x2);
    } catch (_0x5479dd) {}
  }
  function _0x5895d6(_0x213d76) {
    if (!_0x213d76) return 0x0;
    const _0x149119 = Number(_0x213d76["x"] || 0x0);
    let _0x27cd2d = _0x149119;
    const _0x2ac5d7 = _0x213d76["m_checkBox"] || _0x213d76["getChild"]?.("checkBox") || _0x213d76["getChild"]?.("n2");
    _0x2ac5d7 && (_0x27cd2d = Math["max"](_0x27cd2d, _0x149119 + Number(_0x2ac5d7["x"] || 0x0) + _0x3a8bcb(_0x2ac5d7)));
    const _0x5e34e0 = _0x213d76["m_title"] || _0x213d76["getChild"]?.("title") || null;
    return _0x5e34e0 && (_0x27cd2d = Math["max"](_0x27cd2d, _0x149119 + Number(_0x5e34e0["x"] || 0x0) + _0x3a8bcb(_0x5e34e0))), Math["round"](_0x27cd2d);
  }
  function _0x3890ad(_0x54e3cf) {
    return Number(_0x54e3cf || _0x33e9ad["rowHeight"]) / 0x2;
  }
  function _0x3a8bcb(_0x2d4fc5) {
    return _0x2d4fc5 ? Math["max"](0x0, Number(_0x2d4fc5["width"] || 0x0) * Number(_0x2d4fc5["scaleX"] || 0x1)) : 0x0;
  }
  function _0x2a91f5(_0xbae999, _0x3e4df9, _0x4ca257, _0x319846, _0x1117f7) {
    const _0x39614a = _0x33e9ad["entryActionGap"],
      _0x3f9be2 = _0x3a8bcb(_0x3e4df9) || _0x33e9ad["entryActionBtnWidth"],
      _0x2ef23f = _0x3a8bcb(_0xbae999) || _0x33e9ad["entryActionBtnWidth"],
      _0x487b26 = _0x3890ad(_0x319846);
    let _0x218f7c, _0x7a2252;
    if (_0x1117f7) {
      const _0x29e4ae = _0x5895d6(_0x1117f7) + _0x33e9ad["entryActionAfterLabelGap"];
      _0x218f7c = _0x29e4ae, _0x7a2252 = _0x29e4ae + _0x2ef23f + _0x39614a, _0x3939cf(_0x1117f7, _0x487b26);
    } else {
      const _0x4200f9 = _0x33e9ad["entryActionRightPadding"];
      _0x7a2252 = Math["max"](0x0, Number(_0x4ca257 || 0x0) - _0x4200f9 - _0x3f9be2), _0x218f7c = Math["max"](0x0, _0x7a2252 - _0x39614a - _0x2ef23f);
    }
    _0xbae999 && (_0xbae999["x"] = Math["round"](_0x218f7c), _0x3939cf(_0xbae999, _0x487b26)), _0x3e4df9 && (_0x3e4df9["x"] = Math["round"](_0x7a2252), _0x3939cf(_0x3e4df9, _0x487b26));
  }
  function _0x4df67a(_0x565284) {
    _0x565284 && [0x0, 0x78, 0x190]["forEach"](function (_0x4bba5b) {
      setTimeout(function () {
        if (_0x565284?.["contentHost"]?.["parent"]) try {
          _0x18711c(), _0x393348(_0x565284);
        } catch (_0x53c0c6) {}
      }, _0x4bba5b);
    });
  }
  function _0x42e8b9(_0x25da72, _0x394638) {
    if (_0x25da72 && _0x394638) try {
      _0x25da72["setChildIndex"]?.(_0x394638, Number(_0x25da72["numChildren"] || 0x1) - 0x1);
    } catch (_0x29af39) {}
  }
  function _0x5413ac(_0x10ed1c) {
    if (!_0x10ed1c) return;
    let _0x33d5d2 = null;
    try {
      _0x33d5d2 = _0x10ed1c["getChildAt"]?.(0x0) || null;
    } catch (_0x361ed2) {}
    if (!_0x33d5d2) return;
    const _0x22f369 = Math["max"](0x0, Number(_0x33e9ad["tipBgOverscanX"] || 0x0) || 0x0),
      _0x398fc7 = Math["max"](0x0, Number(_0x10ed1c["width"] || 0x0) + 0x2 * _0x22f369);
    try {
      _0x33d5d2["x"] = -_0x22f369;
    } catch (_0x4d84fa) {}
    try {
      _0x33d5d2["y"] = 0x0;
    } catch (_0x13b4ce) {}
    try {
      _0x33d5d2["setSize"]?.(_0x398fc7, Number(_0x10ed1c["height"] || 0x0));
    } catch (_0x5ed34a) {}
    try {
      _0x33d5d2["width"] = Number(_0x398fc7 || _0x33d5d2["width"] || 0x0);
    } catch (_0x51777f) {}
    try {
      _0x33d5d2["height"] = Number(_0x10ed1c["height"] || _0x33d5d2["height"] || 0x0);
    } catch (_0x54a0e2) {}
  }
  function _0xa1d22f(_0x4f1b98) {
    if (_0x4f1b98) try {
      const _0x5aca85 = _0x3157ed("TipsManager"),
        _0xd235ae = _0x5aca85 && (_0x5aca85["instance"] || _0x5aca85["TipsManager"]?.["instance"]),
        _0x5aeb11 = _0x3157ed("index-ui"),
        _0x34e0a1 = _0x5aeb11?.["UILayer"] && (_0x5aeb11["UILayer"]["Console"] || _0x5aeb11["UILayer"]["Tip"]);
      if (_0xd235ae && "function" == typeof _0xd235ae["showTip"]) return void _0xd235ae["showTip"](_0x4f1b98, null, 0x0, _0x34e0a1);
      "function" == typeof _0x5aca85?.["SHOW_TIP"] && _0x5aca85["SHOW_TIP"](_0x4f1b98);
    } catch (_0x1d12e2) {}
  }
  function _0x1742ef(_0x3d19e9) {
    if (!_0x3d19e9) return;
    const _0xa0ebce = [_0x3d19e9],
      _0x3431ea = new Set();
    for (; _0xa0ebce["length"];) {
      const _0x1a43a4 = _0xa0ebce["shift"]();
      if (_0x1a43a4 && !_0x3431ea["has"](_0x1a43a4)) {
        _0x3431ea["add"](_0x1a43a4);
        try {
          void 0x0 !== _0x1a43a4["font"] && (_0x1a43a4["font"] = "");
        } catch (_0x11d4cb) {}
        try {
          void 0x0 !== _0x1a43a4["fontName"] && (_0x1a43a4["fontName"] = "");
        } catch (_0x859f6f) {}
        try {
          _0x1a43a4["displayObject"] && void 0x0 !== _0x1a43a4["displayObject"]["font"] && (_0x1a43a4["displayObject"]["font"] = "");
        } catch (_0x8810ef) {}
        try {
          const _0x3149b3 = _0x1a43a4["getTextField"]?.();
          _0x3149b3 && _0x3149b3 !== _0x1a43a4 && _0xa0ebce["push"](_0x3149b3);
        } catch (_0xb416a1) {}
        for (let _0x579701 = 0x0; _0x579701 < Number(_0x1a43a4["numChildren"] || 0x0); _0x579701 += 0x1) try {
          _0xa0ebce["push"](_0x1a43a4["getChildAt"](_0x579701));
        } catch (_0x170ebb) {}
      }
    }
  }
  function _0x212534(_0x35cad8, _0x17f67e) {
    const _0x25c960 = _0x35cad8?.["m_input"] || _0x35cad8?.["getChild"]?.("input") || _0x35cad8?.["getChild"]?.("lockPassword") || _0x35cad8,
      _0xf75cea = String(_0x25c960?.["text"] || "")["trim"]();
    if (!_0xf75cea) return null;
    const _0x16cf4e = Math["max"](Number(_0x17f67e || 0x1), Number(_0xf75cea) || 0x0);
    return Number["isFinite"](_0x16cf4e) && _0x16cf4e > 0x0 ? _0x16cf4e : null;
  }
  function _0x26c3a2(_0x29e278, _0x56a937, _0x164897) {
    const _0x57853a = _0x4d3c78("ui_equipQuench", "QuenchPasswordDialog", "UI_QuenchPasswordDialog"),
      _0x497cac = _0x57853a?.["m_lockPassword"] || _0x57853a?.["getChild"]?.("lockPassword") || null;
    if (!_0x57853a || !_0x497cac) return null;
    const _0x12b84f = function (_0x3d5055, _0x4d45fa) {
        if (!_0x3d5055 || !_0x4d45fa || "function" != typeof _0x3d5055["getChildAt"] || "function" != typeof _0x3d5055["getChildIndex"]) return null;
        const _0x53c5c2 = Number(_0x3d5055["getChildIndex"](_0x4d45fa));
        if (_0x53c5c2 < 0x0) return null;
        const _0x14c2e2 = {
          lockPassword: "n3",
          unlockPassword: "n28",
          forceUnlockPassword: "n55"
        }[String(_0x4d45fa["name"] || "")] || "";
        if (_0x14c2e2) for (let _0x388eaf = _0x53c5c2 - 0x1; _0x388eaf >= 0x0; _0x388eaf -= 0x1) {
          const _0x1c37c2 = _0x3d5055["getChildAt"](_0x388eaf);
          if (String(_0x1c37c2?.["name"] || "") === _0x14c2e2) return _0x1c37c2;
        }
        return _0x53c5c2 > 0x0 ? _0x3d5055["getChildAt"](_0x53c5c2 - 0x1) : null;
      }(_0x57853a, _0x497cac),
      _0x4e60d8 = function (_0x148e9c, _0x2768a7) {
        const _0xc53879 = _0x26362c["fgui"];
        if (!_0x148e9c || !_0xc53879 || "function" != typeof _0xc53879["GComponent"] || "function" != typeof _0xc53879["GGraph"]) return _0x148e9c;
        const _0x2779f7 = new _0xc53879["GComponent"]();
        _0x2779f7["name"] = "customQuenchInput", _0x2779f7["setSize"](_0x33e9ad["inputWidth"], _0x33e9ad["inputHeight"]);
        const _0x22ae14 = _0x2768a7 || new _0xc53879["GGraph"]();
        _0x22ae14["name"] = "bg", _0x2768a7 || _0x22ae14["drawRect"](0x1, "#9C8578", "#C8AB9A");
        try {
          _0x22ae14["removeFromParent"]?.();
        } catch (_0x5af161) {}
        _0x22ae14["x"] = 0x0, _0x22ae14["y"] = 0x0;
        try {
          _0x22ae14["setSize"]?.(_0x33e9ad["inputWidth"], _0x33e9ad["inputHeight"]);
        } catch (_0x32148f) {}
        try {
          _0x22ae14["width"] = _0x33e9ad["inputWidth"], _0x22ae14["height"] = _0x33e9ad["inputHeight"];
        } catch (_0x32b6ae) {}
        _0x2779f7["addChild"](_0x22ae14);
        try {
          _0x148e9c["removeFromParent"]?.();
        } catch (_0x3eedbc) {}
        _0x148e9c["name"] = "input", _0x148e9c["x"] = 0x8, _0x148e9c["y"] = Math["max"](0x0, Math["round"]((_0x33e9ad["inputHeight"] - Number(_0x148e9c["height"] || _0x33e9ad["inputHeight"])) / 0x2));
        try {
          _0x148e9c["setSize"]?.(_0x33e9ad["inputWidth"] - 0x10, Math["max"](0x0, Number(_0x148e9c["height"] || _0x33e9ad["inputHeight"])));
        } catch (_0x96f15d) {}
        try {
          _0x148e9c["width"] = _0x33e9ad["inputWidth"] - 0x10;
        } catch (_0x1a9dac) {}
        return _0x2779f7["addChild"](_0x148e9c), _0x2779f7;
      }(_0x497cac, _0x12b84f);
    return _0x4e60d8["name"] = "customQuenchInput", _0x4e60d8["setSize"]?.(_0x33e9ad["inputWidth"], _0x33e9ad["inputHeight"]), function (_0x3d0f90, _0x4822d0, _0x5f4ad6, _0x1e3212) {
      if (!_0x3d0f90) return;
      const _0x285aa5 = _0x3d0f90["m_input"] || _0x3d0f90["getChild"]?.("input") || _0x3d0f90["getChild"]?.("lockPassword") || _0x3d0f90,
        _0x3428ae = _0x3d0f90["m_num"] || _0x3d0f90["getChild"]?.("num") || null,
        _0x7b39da = _0x3d0f90["getChildAt"]?.(0x0) || _0x3d0f90["getChild"]?.("n15") || null,
        _0x331792 = Math["max"](0x0, Number(_0x3d0f90["width"] || 0x0) - 0xa);
      if (_0x7b39da) {
        try {
          _0x7b39da["width"] = Number(_0x3d0f90["width"] || _0x7b39da["width"] || 0x0);
        } catch (_0xe2972d) {}
        try {
          _0x7b39da["setSize"]?.(Number(_0x3d0f90["width"] || _0x7b39da["width"] || 0x0), Number(_0x3d0f90["height"] || _0x7b39da["height"] || 0x0));
        } catch (_0x408702) {}
      }
      if (_0x285aa5) {
        try {
          _0x285aa5["x"] = 0x5;
        } catch (_0x13e96e) {}
        try {
          _0x285aa5["width"] = _0x331792;
        } catch (_0x3537ea) {}
        try {
          _0x285aa5["setSize"]?.(_0x331792, Number(_0x285aa5["height"] || 0x0));
        } catch (_0x51a7ca) {}
        try {
          _0x285aa5["text"] = String(_0x5f4ad6 || "");
        } catch (_0x5bf83f) {}
        try {
          _0x285aa5["promptText"] = _0x4822d0 || "";
        } catch (_0x4a834b) {}
        try {
          _0x285aa5["maxLength"] = Number(_0x1e3212 || 0x4);
        } catch (_0x55cf60) {}
        try {
          _0x285aa5["restrict"] = "0-9";
        } catch (_0x480f89) {}
        try {
          _0x285aa5["password"] = !0x1;
        } catch (_0x402fd2) {}
        try {
          _0x285aa5["singleLine"] = !0x0;
        } catch (_0x461110) {}
        try {
          _0x285aa5["verticalAlign"] = _0x26362c["fgui"]?.["VertAlignType"]?.["Middle"] ?? 0x1;
        } catch (_0x4e2027) {}
        try {
          _0x285aa5["background"] = !0x1;
        } catch (_0x5ad7ed) {}
        try {
          _0x285aa5["opaque"] = !0x1;
        } catch (_0x40c5de) {}
      }
      if (_0x3428ae) try {
        _0x3428ae["visible"] = !0x1;
      } catch (_0x18ed43) {}
      const _0x2701ae = _0x285aa5?.["_editBox"] || null,
        _0x4490ba = _0x26362c["cc"];
      if (_0x2701ae && _0x4490ba?.["EditBox"]) {
        try {
          _0x2701ae["enabled"] = !0x0;
        } catch (_0x19966e) {}
        try {
          _0x2701ae["inputMode"] = _0x4490ba["EditBox"]["InputMode"]["SINGLE_LINE"];
        } catch (_0x56e007) {}
        try {
          _0x2701ae["returnType"] = _0x4490ba["EditBox"]["KeyboardReturnType"]["DONE"];
        } catch (_0x1267a4) {}
        try {
          _0x2701ae["inputFlag"] = _0x4490ba["EditBox"]["InputFlag"]["DEFAULT"];
        } catch (_0x199fd2) {}
        try {
          _0x2701ae["placeholder"] = _0x4822d0 || "";
        } catch (_0x514b97) {}
      }
    }(_0x4e60d8, _0x56a937, _0x29e278, _0x164897), _0x4e60d8;
  }
  function _0x2ded38(_0x9f331a, _0x542a55, _0x16eeaa, _0x595015) {
    let _0x4ae608 = null;
    try {
      _0x4ae608 = _0x26c3a2(_0x9f331a, _0x542a55, _0x16eeaa);
    } catch (_0x223a7c) {}
    return _0x4ae608 || (_0x4ae608 = function (_0x2d9989, _0x9eb316, _0x1f94bc) {
      const _0x478d6d = _0x26362c["fgui"];
      if (!_0x478d6d || "function" != typeof _0x478d6d["GComponent"] || "function" != typeof _0x478d6d["GGraph"]) return null;
      const _0x49b78f = new _0x478d6d["GComponent"]();
      _0x49b78f["name"] = "customQuenchInput", _0x49b78f["setSize"](_0x33e9ad["inputWidth"], _0x33e9ad["inputHeight"]);
      const _0x41ae30 = new _0x478d6d["GGraph"]();
      _0x41ae30["drawRect"](0x1, "#9C8578", "#C8AB9A"), _0x41ae30["setSize"](_0x33e9ad["inputWidth"], _0x33e9ad["inputHeight"]), _0x49b78f["addChild"](_0x41ae30);
      let _0x34efe3 = null;
      if ("function" == typeof _0x478d6d["GTextInput"] ? _0x34efe3 = new _0x478d6d["GTextInput"]() : "function" == typeof _0x478d6d["GTextField"] && (_0x34efe3 = new _0x478d6d["GTextField"]()), !_0x34efe3) return _0x49b78f;
      _0x34efe3["name"] = "input", _0x34efe3["setSize"](_0x33e9ad["inputWidth"] - 0x10, _0x33e9ad["inputHeight"]), _0x34efe3["x"] = 0x8, _0x34efe3["y"] = 0x0, _0x34efe3["fontSize"] = 0x16, _0x34efe3["text"] = String(_0x2d9989 || ""), _0x34efe3["promptText"] = _0x9eb316 || "", _0x34efe3["color"] = "#333333";
      try {
        _0x34efe3["maxLength"] = Number(_0x1f94bc || 0x4);
      } catch (_0x52da4b) {}
      try {
        _0x34efe3["restrict"] = "0-9";
      } catch (_0x12e6c7) {}
      try {
        _0x34efe3["singleLine"] = !0x0;
      } catch (_0x261549) {}
      try {
        _0x34efe3["verticalAlign"] = _0x478d6d["VertAlignType"]?.["Middle"] ?? 0x1;
      } catch (_0x403679) {}
      try {
        _0x34efe3["background"] = !0x1;
      } catch (_0xeb0fa8) {}
      return _0x49b78f["addChild"](_0x34efe3), _0x49b78f;
    }(_0x9f331a, _0x542a55, _0x16eeaa)), _0x4ae608 && (_0x4ae608["name"] = _0x595015 || "customQuenchInput"), _0x4ae608;
  }
  function _0x1e6ac3(_0x3a0ca0) {
    return _0x3a0ca0?.["m_list"] || _0x3a0ca0?.["getChild"]?.("list") || null;
  }
  function _0xff560d(_0x4b4f30, _0x3f0ee4) {
    try {
      if (_0x4b4f30?.["m_title"]) return _0x4b4f30["m_title"]["text"] = _0x3f0ee4, void _0x1742ef(_0x4b4f30["m_title"]);
      const _0x591cdc = _0x4b4f30?.["getChild"]?.("title");
      _0x591cdc && (_0x591cdc["text"] = _0x3f0ee4, _0x1742ef(_0x591cdc));
    } catch (_0x398e78) {}
  }
  function _0x5be6ec(_0x41776a, _0x3e697b) {
    const _0x2019b7 = _0x1e6ac3(_0x41776a);
    try {
      _0x2019b7 && (_0x2019b7["visible"] = !!_0x3e697b);
    } catch (_0x2e18c9) {}
    const _0x33a753 = _0x41776a?.["getChild"]?.("n1");
    try {
      _0x33a753 && (_0x33a753["visible"] = !!_0x3e697b);
    } catch (_0xf6d919) {}
  }
  function _0x374134(_0x3fea40, _0x419d38) {
    try {
      const _0x56b2f8 = _0x3fea40?.["m_isExpand"] || _0x3fea40?.["getController"]?.("isExpand");
      _0x56b2f8 && (_0x56b2f8["selectedPage"] = String(!!_0x419d38));
    } catch (_0x384603) {}
  }
  function _0x1a2c25(_0x5f4502, _0x321b8b) {
    const _0x41469b = _0x1e6ac3(_0x5f4502);
    if (!_0x5f4502 || !_0x41469b) return;
    const _0x5c753a = 0xc8,
      _0x14143d = Math["max"](0x1, Number(_0x321b8b || 0x5)),
      _0x401c97 = Math["max"](0x1, Number(_0x41469b["numChildren"] || _0x41469b["numItems"] || _0x14143d)),
      _0x72d25e = 0x33 * Math["min"](_0x14143d, _0x401c97),
      _0x267d03 = _0x5f4502["getChild"]?.("n1");
    if (_0x267d03) {
      try {
        _0x267d03["x"] = 0x5, _0x267d03["y"] = 0x2f;
      } catch (_0x2d7bff) {}
      try {
        _0x267d03["setSize"]?.(0xe1, _0x72d25e + 0x14);
      } catch (_0x1e3563) {}
      try {
        _0x267d03["width"] = 0xe1, _0x267d03["height"] = _0x72d25e + 0x14;
      } catch (_0x4cb82d) {}
    }
    try {
      _0x41469b["x"] = 0x11, _0x41469b["y"] = 0x39;
    } catch (_0x308a06) {}
    try {
      _0x41469b["setSize"]?.(_0x5c753a, _0x72d25e);
    } catch (_0x1fbc10) {}
    try {
      _0x41469b["width"] = _0x5c753a, _0x41469b["height"] = _0x72d25e;
    } catch (_0x2d29b4) {}
    for (let _0x114fec = 0x0; _0x114fec < Number(_0x41469b["numChildren"] || 0x0); _0x114fec += 0x1) {
      const _0x3eb23a = _0x41469b["getChildAt"]?.(_0x114fec);
      if (!_0x3eb23a) continue;
      try {
        _0x3eb23a["x"] = 0x0, _0x3eb23a["y"] = 0x33 * _0x114fec;
      } catch (_0x123a01) {}
      try {
        _0x3eb23a["setSize"]?.(_0x5c753a, 0x33);
      } catch (_0x19f6ee) {}
      try {
        _0x3eb23a["width"] = _0x5c753a, _0x3eb23a["height"] = 0x33;
      } catch (_0x185eb4) {}
      const _0x582dbf = _0x3eb23a["m_title"] || _0x3eb23a["getChild"]?.("title");
      if (_0x582dbf) {
        try {
          _0x582dbf["y"] = 0xa, _0x582dbf["height"] = 0x22, _0x582dbf["verticalAlign"] = _0x26362c["fgui"]?.["VertAlignType"]?.["Middle"] ?? 0x1;
        } catch (_0x474baa) {}
        _0x1742ef(_0x582dbf);
      }
    }
  }
  function _0x9da5cb(_0x2671bf, _0x2308a8, _0x53c92d, _0x246f33, _0x4cd1f5, _0x19540d, _0x20ed87) {
    const _0x1c6288 = _0x4d3c78("ui_teamUp", "NightmareChallengeList", "UI_NightmareChallengeList");
    if (!_0x1c6288) return null;
    const _0x31193a = _0x1c6288["asCom"] || _0x1c6288;
    _0x31193a["name"] = _0x2671bf || "customQuenchSelector", _0x31193a["touchable"] = !0x0, _0x31193a["__multiQuenchExpanded"] = !0x1, _0x31193a["__multiQuenchSuppressToggleOnce"] = !0x1;
    const _0xfa6905 = _0x33e9ad["entryConditionRowHeight"];
    if (_0x20ed87) !function (_0x6defdb, _0x213565, _0x3fdbda) {
      if (!_0x6defdb) return;
      const _0x3dab6c = _0x3fdbda || _0x33e9ad["entryConditionRowHeight"];
      try {
        _0x6defdb["setSize"]?.(_0x213565, _0x3dab6c);
      } catch (_0x3c4bcb) {}
      try {
        _0x6defdb["width"] = _0x213565;
      } catch (_0x1bc282) {}
      try {
        _0x6defdb["height"] = _0x3dab6c;
      } catch (_0x35b3e9) {}
    }(_0x31193a, _0x20ed87, _0xfa6905);else try {
      _0x31193a["height"] = _0xfa6905;
    } catch (_0x5328ee) {}
    _0x374134(_0x31193a, !0x1), _0x5be6ec(_0x31193a, !0x1);
    const _0x4da5b0 = _0x1e6ac3(_0x31193a),
      _0x4f799c = Array["isArray"](_0x53c92d) && _0x53c92d["length"] ? _0x53c92d : [{
        value: 0x0,
        label: _0x2308a8 || "词条选择"
      }];
    if (_0x4da5b0) try {
      _0x4da5b0["removeChildren"]?.(0x0, -0x1, !0x0);
    } catch (_0x2c53a1) {}
    const _0x3594b7 = _0x4f799c["find"](function (_0x3d52c8) {
      return Number(_0x3d52c8["value"] || 0x0) === Number(_0x246f33 || 0x0);
    }) || null;
    return _0xff560d(_0x31193a, _0x3594b7?.["label"] || _0x2308a8 || _0x4f799c[0x0]?.["label"] || "词条选择"), _0x4f799c["forEach"](function (_0x2a18aa) {
      const _0x4597d9 = _0x4d3c78("ui_teamUp", "NightmareChallengeListitem", "UI_NightmareChallengeListitem"),
        _0xc730cb = _0x4597d9 && (_0x4597d9["asCom"] || _0x4597d9);
      if (_0xc730cb) {
        _0xc730cb["touchable"] = !0x0;
        try {
          const _0x2c1fc3 = _0xc730cb["m_title"] || _0xc730cb["getChild"]?.("title");
          _0x2c1fc3 && (_0x2c1fc3["text"] = _0x2a18aa["label"], _0x1742ef(_0x2c1fc3), function (_0x516e92, _0x48c638) {
            if (_0x516e92 && _0x48c638 && _0x48c638["color"]) try {
              const _0x50e49a = _0x26362c["cc"];
              _0x50e49a && _0x50e49a["Color"] && (_0x516e92["color"] = new _0x50e49a["Color"](_0x48c638["color"][0x0], _0x48c638["color"][0x1], _0x48c638["color"][0x2], _0x48c638["color"][0x3]));
            } catch (_0x206b03) {}
          }(_0x2c1fc3, _0x2a18aa));
        } catch (_0x4f5931) {}
        _0x63a003(_0xc730cb, function () {
          _0x31193a["__multiQuenchExpanded"] = !0x1, _0x31193a["__multiQuenchSuppressToggleOnce"] = !0x0, _0xff560d(_0x31193a, _0x2a18aa["label"]), _0x374134(_0x31193a, !0x1), _0x5be6ec(_0x31193a, !0x1), "function" == typeof _0x19540d && _0x19540d(_0x2a18aa["value"], _0x2a18aa, _0x31193a), "function" == typeof _0x4cd1f5 && _0x4cd1f5(!0x1, _0x31193a);
        }, _0x31193a), _0x4da5b0?.["addChild"]?.(_0xc730cb);
      }
    }), _0x1a2c25(_0x31193a, 0x5), _0x63a003(_0x31193a, function () {
      if (_0x31193a["__multiQuenchSuppressToggleOnce"]) return void (_0x31193a["__multiQuenchSuppressToggleOnce"] = !0x1);
      const _0x2ee893 = !_0x31193a["__multiQuenchExpanded"];
      _0x31193a["__multiQuenchExpanded"] = _0x2ee893, _0x374134(_0x31193a, _0x2ee893), _0x5be6ec(_0x31193a, _0x2ee893), _0x1a2c25(_0x31193a, 0x5), "function" == typeof _0x4cd1f5 && _0x4cd1f5(_0x2ee893, _0x31193a);
    }, _0x31193a), _0x31193a;
  }
  function _0x3a5958(_0x23ecb0, _0x4b8e65) {
    const _0x9eea42 = _0x33e9ad["entryActionBtnWidth"],
      _0x1b996f = _0x33e9ad["entryActionBtnHeight"],
      _0x2219d2 = _0x4d3c78("ui_common", _0x23ecb0, "");
    if (_0x2219d2) {
      const _0x1db649 = _0x2219d2["asButton"] || _0x2219d2["asCom"] || _0x2219d2,
        _0x4f42b2 = _0x9eea42 / Math["max"](0x1, Number(_0x1db649["width"] || _0x9eea42)),
        _0x1d19c1 = _0x1b996f / Math["max"](0x1, Number(_0x1db649["height"] || _0x1b996f));
      try {
        _0x1db649["setScale"]?.(_0x4f42b2, _0x1d19c1);
      } catch (_0x545db2) {}
      try {
        _0x1db649["scaleX"] = _0x4f42b2, _0x1db649["scaleY"] = _0x1d19c1;
      } catch (_0x2541f2) {}
      return _0x1db649;
    }
    const _0x35a356 = _0x26362c["fgui"];
    if (!_0x35a356 || "function" != typeof _0x35a356["GButton"]) return null;
    const _0x35f80b = new _0x35a356["GButton"]();
    return _0x35f80b["title"] = _0x4b8e65 || "", _0x35f80b["setSize"](_0x9eea42, _0x1b996f), _0x35f80b;
  }
  function _0x20b78e(_0x3696db, _0x2640b6) {
    const _0x5adeb9 = _0x4d3c78("ui_common", "BtnFilter", "UI_BtnFilter");
    if (_0x5adeb9) {
      _0x5adeb9["touchable"] = !0x0, _0x5adeb9["visible"] = !0x0, _0x26f9b3(_0x5adeb9, _0x3696db || "");
      try {
        _0x5adeb9["selected"] = !!_0x2640b6;
      } catch (_0x3b41d0) {}
      _0x5adeb9["m_checkBox"] && (_0x5adeb9["m_checkBox"]["selected"] = !!_0x2640b6);
      try {
        _0x5adeb9["m_redPoint"] && (_0x5adeb9["m_redPoint"]["visible"] = !0x1);
      } catch (_0x37e6b1) {}
      return _0x1742ef(_0x5adeb9["m_title"] || _0x5adeb9["getChild"]?.("title") || null), _0x5adeb9["asButton"] || _0x5adeb9["asCom"] || _0x5adeb9;
    }
    const _0x5907de = _0x26362c["fgui"];
    if (!_0x5907de || "function" != typeof _0x5907de["GButton"]) return null;
    const _0x364e55 = new _0x5907de["GButton"]();
    return _0x364e55["title"] = _0x3696db || "", _0x364e55["__selected"] = !!_0x2640b6, _0x364e55["setSize"](0xbe, _0x33e9ad["rowHeight"]), _0x364e55;
  }
  function _0xdb623(_0x4c95ee) {
    return !!_0x4c95ee && (_0x4c95ee["m_checkBox"] && void 0x0 !== _0x4c95ee["m_checkBox"]["selected"] ? !!_0x4c95ee["m_checkBox"]["selected"] : void 0x0 !== _0x4c95ee["selected"] ? !!_0x4c95ee["selected"] : !!_0x4c95ee["__selected"]);
  }
  function _0x1c22e8(_0x2d0946, _0x130b1a, _0xa8fa71) {
    if (_0x2d0946) {
      _0x2d0946["m_checkBox"] && (_0x2d0946["m_checkBox"]["selected"] = !!_0x130b1a);
      try {
        _0x2d0946["selected"] = !!_0x130b1a;
      } catch (_0x4eb3c8) {}
      _0x2d0946["__selected"] = !!_0x130b1a, _0xa8fa71 && _0x26f9b3(_0x2d0946, _0xa8fa71);
    }
  }
  const _0x384fb2 = {
    0x1: [0xff, 0xff, 0xff, 0xff],
    0x2: [0x78, 0xdc, 0x60, 0xff],
    0x3: [0x60, 0xba, 0xff, 0xff],
    0x4: [0xcd, 0x8c, 0xff, 0xff],
    0x5: [0xff, 0xaa, 0x40, 0xff],
    0x6: [0xff, 0x60, 0x60, 0xff]
  };
  function _0x30aba6(_0x50e15f) {
    if (!_0x50e15f) return "";
    try {
      const _0x97c265 = _0x3157ed("LanguageExt");
      if ("function" == typeof _0x97c265?.["GET_CONTENT"]) return _0x97c265["GET_CONTENT"](_0x50e15f) || _0x50e15f;
    } catch (_0x2b6a27) {}
    return String(_0x50e15f);
  }
  function _0x444a2d() {
    try {
      const _0x13ec65 = _0x3157ed("Configs"),
        _0x4195a2 = _0x13ec65?.["QuenchAttrConf"]?.["list"];
      if (Array["isArray"](_0x4195a2) && _0x4195a2["length"]) return _0x4195a2["map"](function (_0x415b14) {
        return {
          value: Number(_0x415b14?.["id"] || 0x0) || 0x0,
          label: _0x30aba6(_0x415b14?.["attrName"] || "") || "词条" + (_0x415b14?.["id"] || "")
        };
      })["filter"](function (_0x470bf7) {
        return _0x470bf7["value"] > 0x0 && !!_0x470bf7["label"];
      });
    } catch (_0x4c349e) {}
    return function () {
      const _0x49f3a9 = [];
      for (const _0x523523 in _0x15082c) _0x49f3a9["push"]({
        value: Number(_0x523523),
        label: _0x15082c[_0x523523]
      });
      return _0x49f3a9;
    }();
  }
  function _0x1db70f(_0x478778) {
    const _0x14de93 = _0x478778 && "object" == typeof _0x478778 ? _0x478778 : {},
      _0x413cf9 = Array["isArray"](_0x14de93["entries"]) ? _0x14de93["entries"] : [],
      _0x8c045b = Math["min"](_0x318c5b["maxRows"], Math["max"](_0x318c5b["minRows"], Number(_0x14de93["entryRows"] || _0x413cf9["length"] || _0x318c5b["minRows"]) || _0x318c5b["minRows"])),
      _0x36f590 = [];
    for (let _0x4ceb2d = 0x0; _0x4ceb2d < _0x8c045b; _0x4ceb2d += 0x1) {
      const _0x3afbd3 = _0x413cf9[_0x4ceb2d] || {};
      _0x36f590["push"]({
        attrId: Number(_0x3afbd3["attrId"] || 0x0) || 0x0,
        colorId: Number(_0x3afbd3["colorId"] || 0x0) || 0x0
      });
    }
    const _0x457a25 = !0x1 !== _0x14de93["entryControl"];
    let _0x5f23e8 = !0x1 !== _0x14de93["countControl"];
    return _0x457a25 && _0x5f23e8 && (_0x5f23e8 = !0x1), {
      entryRows: _0x8c045b,
      entries: _0x36f590,
      entryControl: _0x457a25,
      ratio: Math["max"](0x1, Number(_0x14de93["ratio"] || _0x564337) || _0x564337),
      countControl: _0x5f23e8,
      countLimit: Math["max"](0x1, Number(_0x14de93["countLimit"] || 0x3e8) || 0x3e8),
      pctOn: !0x0 === _0x14de93["pctOn"]
    };
  }
  function _0x9fa09c(_0x486f77) {
    const _0x2e82bf = _0x326f28(_0x486f77["targetAttrs"]);
    return _0x1db70f({
      entryControl: !0x1 !== _0x486f77["targetOn"],
      entryRows: Math["max"](_0x318c5b["minRows"], _0x2e82bf["length"] || _0x318c5b["minRows"]),
      entries: _0x2e82bf["map"](function (_0x1438e1) {
        return {
          attrId: Number(_0x1438e1["a"]) || 0x0,
          colorId: Number(_0x1438e1["c"]) || 0x0
        };
      }),
      ratio: _0x486f77["targetPct"] || _0x564337,
      countControl: !0x1 !== _0x486f77["timesOn"],
      countLimit: _0x486f77["times"] || 0x3e8,
      pctOn: !0x0 === _0x486f77["pctOn"]
    });
  }
  function _0x5ad106(_0x4f618c) {
    const _0x3d64d7 = _0x1db70f(_0x4f618c),
      _0x5a929e = _0x256f73();
    return _0x5a929e["targetOn"] = !0x1 !== _0x3d64d7["entryControl"], _0x5a929e["targetAttrs"] = _0x3d64d7["entries"]["map"](function (_0x599f15) {
      return {
        a: Number(_0x599f15["attrId"]) || 0x0,
        c: Number(_0x599f15["colorId"]) || 0x0
      };
    }), _0x5a929e["targetPct"] = _0x3d64d7["ratio"], _0x5a929e["pctOn"] = !0x1, _0x5a929e["timesOn"] = !0x1 !== _0x3d64d7["countControl"], _0x5a929e["times"] = _0x3d64d7["countLimit"], _0x5a929e["enabled"] = _0x403f03(_0x5a929e), function (_0x36b56a) {
      try {
        _0x26362c["localStorage"]["setItem"](_0x35aca3, JSON["stringify"](_0x36b56a));
      } catch (_0x5d9fa8) {}
    }(_0x5a929e), _0x5a929e;
  }
  function _0x4235d5(_0x1327fc) {
    if (!_0x1327fc) return null;
    const _0x35181a = _0x1db70f(_0x1327fc["settings"]),
      _0x279aba = _0x212534(_0x1327fc["ratioInput"], 0x1);
    null !== _0x279aba && (_0x35181a["ratio"] = _0x279aba);
    const _0x8b9228 = _0x212534(_0x1327fc["countInput"], 0x1);
    return null !== _0x8b9228 && (_0x35181a["countLimit"] = _0x8b9228), _0x1327fc["settings"] = _0x35181a, _0x5ad106(_0x35181a), _0x35181a;
  }
  function _0x14bc3d(_0x3098df) {
    if (!_0x3098df || !0x1 === _0x3098df["visible"]) return 0x0;
    const _0x38206f = Number(_0x3098df["y"] || 0x0) || 0x0,
      _0x25031c = Number(_0x3098df["height"] || 0x0) * Number(_0x3098df["scaleY"] || 0x1);
    return _0x38206f + Math["max"](0x0, _0x25031c);
  }
  function _0x48ac43(_0x1275ac) {
    if (!_0x1275ac || "function" != typeof _0x1275ac["getChildAt"]) return 0x0;
    let _0x326139 = null,
      _0x46c400 = null;
    for (let _0x5caf62 = 0x0; _0x5caf62 < Number(_0x1275ac["numChildren"] || 0x0); _0x5caf62 += 0x1) {
      const _0xb6eca = _0x1275ac["getChildAt"]?.(_0x5caf62);
      if (_0xb6eca && !0x1 !== _0xb6eca["visible"] && "function" == typeof _0xb6eca["getChildAt"]) for (let _0x895cf8 = 0x0; _0x895cf8 < Number(_0xb6eca["numChildren"] || 0x0); _0x895cf8 += 0x1) {
        const _0x30a624 = _0xb6eca["getChildAt"]?.(_0x895cf8),
          _0x94cd9c = String(_0x30a624?.["name"] || "");
        (_0x94cd9c["indexOf"]("QuenchAttrSelector") >= 0x0 || _0x94cd9c["indexOf"]("QuenchColorSelector") >= 0x0) && (!_0x326139 || Number(_0xb6eca["y"] || 0x0) >= Number(_0x326139["y"] || 0x0)) && (_0x326139 = _0xb6eca, _0x46c400 = _0x30a624);
      }
    }
    const _0x2017af = function (_0x29848d) {
      if (!_0x29848d || !0x0 !== _0x29848d["__multiQuenchExpanded"]) return 0x0;
      const _0x23ed7f = _0x1e6ac3(_0x29848d);
      return _0x23ed7f && !0x1 !== _0x23ed7f["visible"] ? Number(_0x29848d["y"] || 0x0) + Number(_0x23ed7f["y"] || 0x0) + Number(_0x23ed7f["height"] || 0x0) * Number(_0x23ed7f["scaleY"] || 0x1) : 0x0;
    }(_0x46c400);
    return !_0x326139 || _0x2017af <= 0x0 ? 0x0 : Number(_0x326139["y"] || 0x0) + _0x2017af + _0x33e9ad["lastDropdownExtraHeight"];
  }
  function _0x2f211e(_0x231acb) {
    const _0x514013 = Math["max"](function (_0xa548b) {
      if (!_0xa548b || "function" != typeof _0xa548b["getChildAt"]) return 0x0;
      let _0x37a235 = 0x0;
      for (let _0x5c5716 = 0x0; _0x5c5716 < Number(_0xa548b["numChildren"] || 0x0); _0x5c5716 += 0x1) try {
        _0x37a235 = Math["max"](_0x37a235, _0x14bc3d(_0xa548b["getChildAt"](_0x5c5716)));
      } catch (_0x30bfef) {}
      return Math["ceil"](_0x37a235);
    }(_0x231acb?.["contentHost"]), _0x48ac43(_0x231acb?.["contentHost"]));
    return _0x514013 > 0x0 ? _0x33e9ad["formY"] + _0x514013 + _0x33e9ad["bottomPadding"] + _0x33e9ad["bottomWoodSafePadding"] : _0x33e9ad["tipHeight"];
  }
  function _0x4beb2c(_0x276fa0) {
    if (!_0x276fa0?.["tipBg"]) return;
    const _0x1c6e7b = _0x276fa0["container"] || _0x276fa0["layer"],
      _0x3acf31 = Number(_0x1c6e7b?.["width"] || _0x33e9ad["tipWidth"]),
      _0x308968 = function (_0x4a8ea8) {
        const _0x4e9361 = Math["max"](0x0, Number(_0x4a8ea8 || 0x0) || _0x33e9ad["tipWidth"]),
          _0x40e31f = _0x33e9ad["formWidth"] + 0x2 * _0x33e9ad["formX"];
        return Math["min"](_0x33e9ad["tipWidth"], Math["max"](_0x40e31f, _0x4e9361 - 0x1c));
      }(_0x3acf31),
      _0x4ab2f9 = _0x2f211e(_0x276fa0),
      _0x5a4009 = Math["max"](_0x33e9ad["tipHeight"], _0x4ab2f9);
    _0x276fa0["tipBg"]["setSize"]?.(_0x308968, _0x5a4009), _0x276fa0["tipBg"]["x"] = Math["round"]((_0x3acf31 - _0x308968) / 0x2), _0x276fa0["tipBg"]["y"] = _0x33e9ad["tipY"], _0x5413ac(_0x276fa0["tipBg"]), _0x276fa0["tipContent"] && _0x276fa0["tipContent"]["setSize"]?.(_0x33e9ad["formWidth"], Math["max"](_0x4ab2f9, _0x5a4009 - _0x33e9ad["formY"])), _0x276fa0["contentHost"] && (_0x276fa0["contentHost"]["setSize"]?.(_0x33e9ad["formWidth"], Math["max"](_0x4ab2f9, Number(_0x276fa0["tipContent"]?.["height"] || 0x0))), _0x276fa0["contentHost"]["x"] = _0x33e9ad["formX"], _0x276fa0["contentHost"]["y"] = _0x33e9ad["formY"]), _0x276fa0["skin"] && function (_0x1a08a8, _0x39ffd1, _0x54b736) {
      if (!_0x1a08a8 || !_0x39ffd1 || !_0x1a08a8["m_container"]) return;
      const _0x151310 = Number(_0x39ffd1["y"] || 0x0) + Number(_0x39ffd1["height"] || 0x0);
      try {
        _0x1a08a8["m_container"]["height"] = _0x151310;
      } catch (_0x5cef24) {}
      try {
        _0x1a08a8["m_container"]["setSize"]?.(Number(_0x1a08a8["m_container"]["width"] || _0x39ffd1["width"] || 0x0), _0x151310);
      } catch (_0x45f8bf) {}
      try {
        _0x1a08a8["m_btnClose"] && (_0x1a08a8["m_btnClose"]["y"] = Number(_0x1a08a8["m_container"]["y"] || 0x0) + _0x151310 + Number(_0x54b736 || 0x9));
      } catch (_0x1a3960) {}
      try {
        if (_0x1a08a8["m_btnBG"]) {
          const _0x4959dc = Number(_0x1a08a8["m_btnBG"]["height"] || 0x0);
          _0x1a08a8["m_btnBG"]["y"] = Number(_0x1a08a8["m_container"]["y"] || 0x0) + _0x151310 - Math["max"](0x0, _0x4959dc - 0x20);
        }
      } catch (_0x13b50b) {}
    }(_0x276fa0["skin"], _0x276fa0["tipBg"], 0x9);
  }
  function _0x373203(_0x1be426, _0x397df3, _0x2c2cbe, _0x4890e1, _0x71568d) {
    const _0x166984 = _0x26362c["fgui"];
    if (!_0x166984 || "function" != typeof _0x166984["GComponent"]) return null;
    const _0x2485fd = new _0x166984["GComponent"]();
    _0x2485fd["setSize"](_0x33e9ad["formWidth"], _0x33e9ad["entryConditionRowHeight"]);
    const _0x3b0c08 = function (_0x125e9d, _0x57c0dc, _0x1e3199) {
        const _0x1a7d82 = new Set();
        return (Array["isArray"](_0x57c0dc) ? _0x57c0dc : [])["forEach"](function (_0x52fcec, _0x390bef) {
          if (_0x390bef === _0x1e3199) return;
          const _0x3232b4 = Number(_0x52fcec?.["attrId"] || 0x0) || 0x0;
          _0x3232b4 > 0x0 && _0x1a7d82["add"](_0x3232b4);
        }), (Array["isArray"](_0x125e9d) ? _0x125e9d : [])["filter"](function (_0x501620) {
          const _0x1cbf78 = Number(_0x501620?.["value"] || 0x0) || 0x0;
          return _0x1cbf78 <= 0x0 || !_0x1a7d82["has"](_0x1cbf78);
        });
      }(_0x2c2cbe, _0x397df3["entries"], _0x71568d),
      _0x1eacc1 = function () {
        const _0x2c6b32 = [];
        for (const _0x4c9eec in _0x1e1172) _0x2c6b32["push"]({
          value: Number(_0x4c9eec),
          label: _0x1e1172[_0x4c9eec],
          color: _0x384fb2[Number(_0x4c9eec)] || null
        });
        return _0x2c6b32;
      }(),
      _0x4f7ecf = _0x9da5cb("customQuenchAttrSelector" + _0x71568d, "词条" + (_0x71568d + 0x1), _0x3b0c08, _0x4890e1["attrId"], function (_0x1f7070) {
        _0x1f7070 && _0x42e8b9(_0x1be426["contentHost"], _0x2485fd), _0x71568d === Number(_0x1be426["settings"]?.["entryRows"] || 0x0) - 0x1 && _0x4beb2c(_0x1be426);
      }, function (_0x316c06) {
        const _0x1ba01f = _0x4235d5(_0x1be426) || _0x397df3;
        _0x1ba01f["entries"][_0x71568d]["attrId"] = Number(_0x316c06 || 0x0) || 0x0, _0x1be426["settings"] = _0x1db70f(_0x1ba01f), _0x5ad106(_0x1be426["settings"]), _0x393348(_0x1be426);
      }, _0x33e9ad["attrSelectorWidth"]);
    _0x4f7ecf && (_0x4f7ecf["x"] = _0x33e9ad["entryIndentX"], _0x3939cf(_0x4f7ecf, _0x3890ad(_0x33e9ad["entryConditionRowHeight"])), _0x2485fd["addChild"](_0x4f7ecf));
    const _0x4866e5 = _0x133f9a,
      _0x568a33 = _0x9da5cb("customQuenchColorSelector" + _0x71568d, _0x1e1172[_0x4890e1["colorId"]] || "任意颜色", _0x1eacc1, _0x4890e1["colorId"] || 0x0, function (_0x51dc6c) {
        _0x51dc6c && _0x42e8b9(_0x1be426["contentHost"], _0x2485fd), _0x71568d === Number(_0x1be426["settings"]?.["entryRows"] || 0x0) - 0x1 && _0x4beb2c(_0x1be426);
      }, function (_0x15d16f) {
        const _0x2b3f71 = _0x4235d5(_0x1be426) || _0x397df3;
        _0x2b3f71["entries"][_0x71568d]["colorId"] = Number(_0x15d16f || 0x0) || 0x0, _0x1be426["settings"] = _0x1db70f(_0x2b3f71), _0x5ad106(_0x1be426["settings"]), _0x393348(_0x1be426);
      }, _0x33e9ad["colorSelectorWidth"]);
    return _0x568a33 && (_0x568a33["x"] = _0x33e9ad["entryIndentX"] + _0x4866e5 + _0x33e9ad["selectorGap"], _0x3939cf(_0x568a33, _0x3890ad(_0x33e9ad["entryConditionRowHeight"])), _0x2485fd["addChild"](_0x568a33)), _0x2485fd;
  }
  function _0x393348(_0x35cbfd) {
    if (!_0x35cbfd?.["contentHost"]) return;
    _0x18711c();
    const _0x53ef34 = _0x1db70f(_0x35cbfd["settings"]);
    _0x35cbfd["settings"] = _0x53ef34, _0x35cbfd["ratioInput"] = null, _0x35cbfd["countInput"] = null, function (_0x4218eb) {
      if (!_0x4218eb) return;
      const _0x5d881d = [];
      for (let _0x24bca2 = 0x0; _0x24bca2 < Number(_0x4218eb["numChildren"] || 0x0); _0x24bca2 += 0x1) try {
        _0x5d881d["push"](_0x4218eb["getChildAt"](_0x24bca2));
      } catch (_0x4547a4) {}
      _0x5d881d["forEach"](_0x253e3a);
    }(_0x35cbfd["contentHost"]);
    const _0x465206 = _0x444a2d();
    let _0x31dca3 = _0x33e9ad["startY"];
    const _0x20d1f8 = function (_0x45b5a3, _0x12e27e) {
      const _0x4e8a0f = _0x26362c["fgui"];
      if (!_0x4e8a0f || "function" != typeof _0x4e8a0f["GComponent"]) return null;
      const _0x22a34f = new _0x4e8a0f["GComponent"]();
      _0x22a34f["setSize"](_0x33e9ad["formWidth"], _0x33e9ad["entryToggleRowHeight"]);
      const _0x5accfb = _0x20b78e("词条设置", !0x1 !== _0x12e27e["entryControl"]);
      if (_0x5accfb && (_0x5accfb["x"] = 0x0, _0x3939cf(_0x5accfb, _0x3890ad(_0x33e9ad["entryToggleRowHeight"])), _0x22a34f["addChild"](_0x5accfb), _0x63a003(_0x5accfb, function () {
        const _0xd24481 = _0x4235d5(_0x45b5a3) || _0x12e27e;
        if (_0xd24481["entryControl"] = !_0xdb623(_0x5accfb), !0x1 !== _0xd24481["entryControl"] && (_0xd24481["countControl"] = !0x1), !0x1 !== _0xd24481["entryControl"] && _0xd24481["entryRows"] < _0x318c5b["minRows"]) {
          for (_0xd24481["entryRows"] = _0x318c5b["minRows"]; (_0xd24481["entries"] || [])["length"] < _0x318c5b["minRows"];) _0xd24481["entries"]["push"]({
            attrId: 0x0,
            colorId: 0x0
          });
        }
        _0x1c22e8(_0x5accfb, _0xd24481["entryControl"], "词条设置"), _0x45b5a3["settings"] = _0x1db70f(_0xd24481), _0x5ad106(_0x45b5a3["settings"]), _0x393348(_0x45b5a3);
      }, _0x22a34f)), !0x1 !== _0x12e27e["entryControl"]) {
        const _0x14d6b2 = _0x3a5958("SubtractOneBtn", "-"),
          _0x321e1a = _0x3a5958("PlusOneBtn", "+");
        _0x2a91f5(_0x14d6b2, _0x321e1a, _0x33e9ad["formWidth"], _0x33e9ad["entryToggleRowHeight"], _0x5accfb), _0x14d6b2 && (_0x140cc2(_0x14d6b2, _0x12e27e["entryRows"] > _0x318c5b["minRows"]), _0x22a34f["addChild"](_0x14d6b2), _0x12e27e["entryRows"] > _0x318c5b["minRows"] && _0x63a003(_0x14d6b2, function () {
          const _0x4d7f38 = _0x4235d5(_0x45b5a3) || _0x12e27e;
          _0x4d7f38["entryRows"] = Math["max"](_0x318c5b["minRows"], _0x4d7f38["entryRows"] - 0x1), _0x4d7f38["entries"] = _0x4d7f38["entries"]["slice"](0x0, _0x4d7f38["entryRows"]), _0x45b5a3["settings"] = _0x1db70f(_0x4d7f38), _0x5ad106(_0x45b5a3["settings"]), _0x393348(_0x45b5a3);
        }, _0x22a34f)), _0x321e1a && (_0x140cc2(_0x321e1a, _0x12e27e["entryRows"] < _0x318c5b["maxRows"]), _0x22a34f["addChild"](_0x321e1a), _0x12e27e["entryRows"] < _0x318c5b["maxRows"] && _0x63a003(_0x321e1a, function () {
          const _0x8adc2c = _0x4235d5(_0x45b5a3) || _0x12e27e;
          _0x8adc2c["entryRows"] = Math["min"](_0x318c5b["maxRows"], _0x8adc2c["entryRows"] + 0x1), _0x8adc2c["entries"]["push"]({
            attrId: 0x0,
            colorId: 0x0
          }), _0x45b5a3["settings"] = _0x1db70f(_0x8adc2c), _0x5ad106(_0x45b5a3["settings"]), _0x393348(_0x45b5a3);
        }, _0x22a34f));
      }
      return _0x22a34f;
    }(_0x35cbfd, _0x53ef34);
    if (_0x20d1f8 && (_0x20d1f8["x"] = 0x0, _0x20d1f8["y"] = _0x31dca3, _0x35cbfd["contentHost"]["addChild"](_0x20d1f8)), _0x31dca3 += _0x33e9ad["entryToggleRowHeight"], !0x1 !== _0x53ef34["entryControl"]) {
      _0x31dca3 += _0x33e9ad["entryConditionGap"];
      for (let _0x271932 = 0x0; _0x271932 < _0x53ef34["entryRows"]; _0x271932 += 0x1) {
        const _0x151e27 = _0x53ef34["entries"][_0x271932] || {
            attrId: 0x0,
            colorId: 0x0
          },
          _0x1726a1 = _0x373203(_0x35cbfd, _0x53ef34, _0x465206, _0x151e27, _0x271932);
        _0x1726a1 && (_0x1726a1["x"] = 0x0, _0x1726a1["y"] = _0x31dca3, _0x35cbfd["contentHost"]["addChild"](_0x1726a1), _0x31dca3 += _0x33e9ad["entryConditionRowHeight"] + _0x33e9ad["entryRowGap"]);
      }
      _0x31dca3 -= _0x33e9ad["entryRowGap"];
    }
    _0x31dca3 += _0x33e9ad["entryToCountControlGap"];
    const _0x9c4b44 = _0x20b78e("次数设置", !0x1 !== _0x53ef34["countControl"]);
    if (_0x9c4b44 && (_0x9c4b44["x"] = 0x0, _0x3939cf(_0x9c4b44, _0x31dca3 + _0x3890ad(_0x33e9ad["rowHeight"])), _0x35cbfd["contentHost"]["addChild"](_0x9c4b44), _0x63a003(_0x9c4b44, function () {
      const _0x1ae7bf = _0x4235d5(_0x35cbfd) || _0x53ef34;
      _0x1ae7bf["countControl"] = !_0xdb623(_0x9c4b44), !0x1 !== _0x1ae7bf["countControl"] && (_0x1ae7bf["entryControl"] = !0x1), _0x1c22e8(_0x9c4b44, _0x1ae7bf["countControl"], "次数设置"), _0x35cbfd["settings"] = _0x1db70f(_0x1ae7bf), _0x5ad106(_0x35cbfd["settings"]), _0x393348(_0x35cbfd);
    }, _0x35cbfd["contentHost"])), !0x1 !== _0x53ef34["countControl"] && _0x9c4b44) {
      const _0x3a2995 = _0x2ded38(_0x53ef34["countLimit"], "\u6b21\u6570", 0x5, "customQuenchTimesInput");
      _0x3a2995 && (_0x3a2995["x"] = _0x5895d6(_0x9c4b44) + _0x33e9ad["countInputTitleGap"], _0x3939cf(_0x3a2995, _0x31dca3 + _0x33e9ad["rowHeight"] / 0x2), _0x35cbfd["contentHost"]["addChild"](_0x3a2995), _0x35cbfd["countInput"] = _0x3a2995);
      const _0x30943d = _0x3c43ba("\u6b21", _0x33e9ad["unitWidth"], _0x33e9ad["inputHeight"], 0x18);
      _0x30943d && _0x35cbfd["countInput"] && (_0x30943d["x"] = _0x35cbfd["countInput"]["x"] + _0x33e9ad["inputWidth"] + 0x8, _0x3939cf(_0x30943d, _0x31dca3 + _0x33e9ad["rowHeight"] / 0x2), _0x35cbfd["contentHost"]["addChild"](_0x30943d));
    }
    _0x31dca3 += _0x33e9ad["rowHeight"] + _0x33e9ad["startButtonTopGap"];
    const _0x4d8e27 = function (_0x56f12f) {
      const _0x5d78b9 = _0x4d3c78("ui_common", "BtnNormal", "UI_BtnNormal") || _0x4d3c78("ui_common", "btnNormal", "UI_BtnNormal");
      if (_0x5d78b9) {
        _0x26f9b3(_0x5d78b9, _0x56f12f || "\u786e\u5b9a");
        try {
          _0x5d78b9["m_redPoint"] && (_0x5d78b9["m_redPoint"]["visible"] = !0x1);
        } catch (_0x25f1dc) {}
        try {
          _0x5d78b9["m_showResIcon"] && (_0x5d78b9["m_showResIcon"]["selectedPage"] = "false");
        } catch (_0x261e3d) {}
        return _0x5d78b9["asButton"] || _0x5d78b9["asCom"] || _0x5d78b9;
      }
      const _0x55b293 = _0x26362c["fgui"];
      if (!_0x55b293 || "function" != typeof _0x55b293["GButton"]) return null;
      const _0x5537ee = new _0x55b293["GButton"]();
      return _0x5537ee["title"] = _0x56f12f || "\u786e\u5b9a", _0x5537ee["setSize"](0xaa, _0x33e9ad["buttonHeight"]), _0x5537ee;
    }("保存设置");
    if (_0x4d8e27) {
      const _0x5140d3 = Number(_0x35cbfd["contentHost"]?.["width"] || _0x33e9ad["formWidth"]),
        _0x3f6898 = Number(_0x4d8e27["width"] || 0xaa) * Number(_0x4d8e27["scaleX"] || 0x1);
      _0x4d8e27["x"] = Math["round"](_0x5140d3 / 0x2 - _0x3f6898 / 0x2), _0x4d8e27["y"] = _0x31dca3 + _0x33e9ad["saveButtonExtraYOffset"], _0x35cbfd["saveButtonY"] = _0x4d8e27["y"], _0x35cbfd["contentHost"]["addChild"](_0x4d8e27), _0x63a003(_0x4d8e27, function () {
        _0x4235d5(_0x35cbfd), function (_0xb27c13, _0x11a8d6) {
          if (!_0x11a8d6) return;
          let _0x43ae90 = null,
            _0xeb525f = null;
          try {
            const _0xb950ea = _0x3157ed("index-ui");
            _0x43ae90 = _0xb950ea?.["UILayer"]?.["Tip"] || _0xb950ea?.["UILayer"]?.["Console"] || null, _0x43ae90 && void 0x0 !== _0x43ae90["sortingOrder"] && null !== _0x43ae90["sortingOrder"] && (_0xeb525f = _0x43ae90["sortingOrder"], _0x43ae90["sortingOrder"] = 0x18703);
            const _0x459ba0 = _0x3157ed("TipsManager");
            if ("function" == typeof _0x459ba0?.["SHOW_TIP"]) return void _0x459ba0["SHOW_TIP"](_0x11a8d6);
            const _0x114224 = _0x459ba0 && (_0x459ba0["instance"] || _0x459ba0["TipsManager"]?.["instance"]);
            if (_0x114224 && "function" == typeof _0x114224["showTip"]) return void _0x114224["showTip"](_0x11a8d6, null, 0x0, _0x43ae90);
            _0xa1d22f(_0x11a8d6);
          } catch (_0x16f094) {
            _0xa1d22f(_0x11a8d6);
          } finally {
            _0x43ae90 && null !== _0xeb525f && setTimeout(function () {
              try {
                _0x43ae90["sortingOrder"] = _0xeb525f;
              } catch (_0x20b8c5) {}
            }, 0x898);
          }
        }(0x0, "设置已保存");
      }, _0x35cbfd["contentHost"]);
    }
    _0x4beb2c(_0x35cbfd), _0x10e14b(_0x35cbfd), function (_0x6dce4f) {
      if (!_0x6dce4f?.["contentHost"] || "function" != typeof _0x6dce4f["contentHost"]["getChildAt"]) return !0x1;
      const _0x326717 = _0x1db70f(_0x6dce4f["settings"]);
      if (!0x1 === _0x326717["entryControl"] || _0x326717["entryRows"] < 0x1) return !0x1;
      let _0x631a77 = 0x0,
        _0x15127a = 0x0;
      for (let _0x330e21 = 0x0; _0x330e21 < Number(_0x6dce4f["contentHost"]["numChildren"] || 0x0); _0x330e21 += 0x1) {
        const _0x4feb03 = _0x6dce4f["contentHost"]["getChildAt"]?.(_0x330e21);
        if (_0x4feb03 && "function" == typeof _0x4feb03["getChildAt"]) for (let _0x2d724a = 0x0; _0x2d724a < Number(_0x4feb03["numChildren"] || 0x0); _0x2d724a += 0x1) {
          const _0xd05929 = _0x4feb03["getChildAt"]?.(_0x2d724a);
          String(_0xd05929?.["name"] || "")["indexOf"]("customQuenchAttrSelector") >= 0x0 && (_0x631a77 += 0x1, _0x15127a += 0x1);
        }
      }
      return _0x631a77 < _0x326717["entryRows"] || _0x15127a < _0x326717["entryRows"];
    }(_0x35cbfd) && !_0x35cbfd["__settingsUiRetried"] && (_0x35cbfd["__settingsUiRetried"] = !0x0, setTimeout(function () {
      if (_0x35cbfd?.["contentHost"]?.["parent"]) try {
        _0x18711c(), _0x393348(_0x35cbfd);
      } catch (_0x3b5b48) {}
    }, 0x96));
  }
  function _0x1acb85(_0x5b6236) {
    let _0x59eb89 = _0x5b6236;
    for (; _0x59eb89;) {
      if ("customQuenchPanel" === _0x59eb89["name"]) return !0x0;
      _0x59eb89 = _0x59eb89["parent"];
    }
    return !0x1;
  }
  function _0x5090b2(_0x1d7ec2, _0x486493) {
    const _0x1bebf7 = function (_0xf6f1b9) {
      if (!_0xf6f1b9) return [];
      const _0x1d19d5 = [],
        _0x21f3c8 = new Set(),
        _0x579240 = ["n10", "n9"];
      for (let _0x38cdb0 = 0x0; _0x38cdb0 < _0x579240["length"]; _0x38cdb0 += 0x1) {
        const _0x553d4c = _0x66c549(_0xf6f1b9, _0x579240[_0x38cdb0], 0x0);
        !_0x553d4c || _0x21f3c8["has"](_0x553d4c) || _0x1acb85(_0x553d4c) || (_0x1d19d5["push"](_0x553d4c), _0x21f3c8["add"](_0x553d4c));
      }
      if ("number" == typeof _0xf6f1b9["numChildren"]) for (let _0x2dcfb3 = 0x0; _0x2dcfb3 < _0xf6f1b9["numChildren"]; _0x2dcfb3 += 0x1) {
        const _0x319761 = _0xf6f1b9["getChildAt"](_0x2dcfb3);
        if (!_0x319761 || _0x21f3c8["has"](_0x319761) || _0x5e3745(_0x319761) || _0x1acb85(_0x319761)) continue;
        const _0x5a21df = Number(_0x319761["width"] || 0x0),
          _0x315f30 = Number(_0x319761["height"] || 0x0),
          _0x4687dd = Number(_0x319761["y"] || 0x0);
        _0x5a21df >= 0x244 && _0x5a21df <= 0x2ee && _0x315f30 >= 0x17c && _0x315f30 <= 0x1f4 && _0x4687dd >= 0x8c && _0x4687dd <= 0x118 && (_0x1d19d5["push"](_0x319761), _0x21f3c8["add"](_0x319761));
      }
      return _0x1d19d5;
    }(_0x486493);
    for (let _0x164c61 = 0x0; _0x164c61 < _0x1bebf7["length"]; _0x164c61 += 0x1) {
      const _0xf786a7 = _0x1bebf7[_0x164c61];
      _0x1f49d7(_0x1d7ec2, _0xf786a7, !0x1), _0x26b572(_0x1d7ec2, _0xf786a7, 0x0), console["log"]("[指定洗炼] 已隐藏原设置背景板:", _0xf786a7["name"] || "(unnamed)", _0xf786a7["width"], _0xf786a7["height"]);
    }
    return _0x1bebf7["length"];
  }
  function _0x218759(_0x48bc5d) {
    const _0x2529a9 = _0x48bc5d && _0x48bc5d["layer"];
    if (_0x2529a9 && _0x2529a9["parent"]) {
      try {
        _0x2529a9["sortingOrder"] = _0x4534bc;
      } catch (_0xbb75e2) {}
      try {
        const _0x2eb8bd = _0x2529a9["parent"];
        "function" == typeof _0x2eb8bd["setChildIndex"] && _0x2eb8bd["setChildIndex"](_0x2529a9, Math["max"](0x0, Number(_0x2eb8bd["numChildren"] || 0x1) - 0x1));
      } catch (_0xe9b755) {}
    }
  }
  function _0x2499b5(_0x44d1e9) {
    if (_0x44d1e9) {
      try {
        _0x44d1e9["touchable"] = !0x0;
      } catch (_0xd6c923) {}
      if ("number" == typeof _0x44d1e9["numChildren"]) {
        for (let _0x43beaa = 0x0; _0x43beaa < _0x44d1e9["numChildren"]; _0x43beaa += 0x1) _0x2499b5(_0x44d1e9["getChildAt"](_0x43beaa));
      }
    }
  }
  function _0x10e14b(_0x49aad5) {
    if (!_0x49aad5) return;
    const _0x580fa8 = _0x49aad5["skin"],
      _0x25768c = _0x49aad5["tipBg"],
      _0x313aa3 = _0x49aad5["contentHost"],
      _0x1226c3 = _0x49aad5["container"];
    try {
      _0x580fa8?.["m_btnBG"] && (_0x580fa8["m_btnBG"]["touchable"] = !0x1, _0x580fa8["m_btnBG"]["opaque"] = !0x1);
    } catch (_0x379601) {}
    try {
      _0x25768c && (_0x25768c["touchable"] = !0x0);
    } catch (_0x5dafd7) {}
    try {
      _0x313aa3 && (_0x313aa3["touchable"] = !0x0, _0x2499b5(_0x313aa3));
    } catch (_0x23938a) {}
    try {
      _0x580fa8?.["m_btnClose"] && (_0x580fa8["m_btnClose"]["touchable"] = !0x0, _0x42e8b9(_0x580fa8, _0x580fa8["m_btnClose"]));
    } catch (_0x231587) {}
    try {
      _0x580fa8?.["m_container"] && _0x42e8b9(_0x580fa8, _0x580fa8["m_container"]);
    } catch (_0x2b3aa5) {}
    try {
      _0x25768c && _0x1226c3 && _0x42e8b9(_0x1226c3, _0x25768c);
    } catch (_0x4e230f) {}
  }
  function _0x142d0b(_0x58d7e7) {
    const _0x1642ab = _0x58d7e7 && _0x58d7e7[_0x2a2c15];
    if (_0x1642ab) {
      try {
        _0x4235d5(_0x1642ab);
      } catch (_0x2573e2) {}
      try {
        _0x253e3a(_0x1642ab["layer"]);
      } catch (_0x3b9cb8) {}
      _0x58d7e7[_0x2a2c15] = null;
    }
  }
  function _0x28af0d(_0x45b8b7) {
    if (!_0x45b8b7) return;
    const _0x269ee6 = _0x45b8b7[_0x2a2c15];
    if (_0x269ee6?.["layer"]?.["parent"]) return _0x269ee6["__settingsUiRetried"] = !0x1, _0x4beb2c(_0x269ee6), _0x218759(_0x269ee6), _0x10e14b(_0x269ee6), void _0x4df67a(_0x269ee6);
    _0x142d0b(_0x45b8b7), _0x18711c();
    const _0x826f66 = _0x26362c["fgui"],
      _0x599b35 = function () {
        try {
          return _0x26362c["fgui"]?.["GRoot"]?.["inst"] || null;
        } catch (_0x37f913) {
          return null;
        }
      }();
    if (!_0x826f66 || !_0x599b35) return;
    const _0x646aea = new _0x826f66["GComponent"]();
    _0x646aea["name"] = "customQuenchSettingsLayer", _0x646aea["setSize"](Number(_0x599b35["width"] || _0x33e9ad["tipWidth"]), Number(_0x599b35["height"] || _0x33e9ad["tipHeight"])), _0x646aea["touchable"] = !0x0, _0x646aea["sortingOrder"] = _0x4534bc;
    const _0x5dd012 = _0x4d3c78("ui_common", "CommonDialogSkin", "UI_CommonDialogSkin");
    if (_0x5dd012) {
      _0x5dd012["setSize"]?.(_0x646aea["width"], _0x646aea["height"]), _0x5dd012["touchable"] = !0x0, _0x646aea["addChild"](_0x5dd012);
      try {
        _0x5dd012["m_btnBG"] && (_0x5dd012["m_btnBG"]["touchable"] = !0x1, _0x5dd012["m_btnBG"]["opaque"] = !0x1);
      } catch (_0x42d041) {}
      _0x26f9b3(_0x5dd012["getChild"]?.("title") || _0x5dd012["m_title"] || _0x5dd012, "装备洗练设置"), _0x63a003(_0x5dd012["m_btnClose"] || _0x5dd012["getChild"]?.("btnClose"), function () {
        _0x142d0b(_0x45b8b7);
      }), _0x63a003(_0x5dd012["m_btnBG"] || _0x5dd012["getChild"]?.("btnBG"), function () {
        _0x142d0b(_0x45b8b7);
      });
    } else {
      const _0x2c8e27 = new _0x826f66["GGraph"]();
      _0x2c8e27["drawRect"](0x0, "#000000", "#000000"), _0x2c8e27["alpha"] = 0.55, _0x2c8e27["setSize"](_0x646aea["width"], _0x646aea["height"]), _0x646aea["addChild"](_0x2c8e27);
    }
    const _0x3cc373 = function (_0x3afd53, _0x2ef840) {
        if (_0x3afd53?.["m_container"] && "function" == typeof _0x3afd53["m_container"]["addChild"]) return _0x3afd53["m_container"];
        const _0x3ba859 = [_0x3afd53?.["getChild"]?.("container"), _0x3afd53?.["getChild"]?.("view"), _0x3afd53?.["getChild"]?.("panel")]["filter"](Boolean);
        for (const _0x3bb6e7 of _0x3ba859) if ("function" == typeof _0x3bb6e7["addChild"]) return _0x3bb6e7;
        return _0x2ef840 || null;
      }(_0x5dd012, _0x646aea),
      _0x514560 = _0x4d3c78("ui_common", "CommonComplexTip", "UI_CommonComplexTip");
    if (!_0x514560 || !_0x3cc373) return _0x253e3a(_0x646aea), void console["warn"]("[指定洗炼] 无法创建 CommonComplexTip/CommonDialogSkin");
    _0x514560["setSize"]?.(_0x33e9ad["tipWidth"], _0x33e9ad["tipHeight"]), _0x514560["x"] = Math["round"]((Number(_0x3cc373["width"] || _0x646aea["width"]) - _0x33e9ad["tipWidth"]) / 0x2), _0x514560["y"] = _0x33e9ad["tipY"], _0x3cc373["addChild"](_0x514560), function (_0x5b0c0e) {
      try {
        _0x5b0c0e["m_hasImage"] && (_0x5b0c0e["m_hasImage"]["selectedPage"] = "false");
      } catch (_0x2093c8) {}
      try {
        _0x5b0c0e["m_displayType"] && (_0x5b0c0e["m_displayType"]["selectedPage"] = "0");
      } catch (_0x2b9918) {}
      ["m_content", "m_image", "m_subContent", "m_btnPrevious", "m_btnNext", "m_btnDetail", "m_btnDetail2", "m_page", "m_subTitle"]["forEach"](function (_0x2241d3) {
        try {
          "m_content" !== _0x2241d3 && _0x5b0c0e[_0x2241d3] && (_0x5b0c0e[_0x2241d3]["visible"] = !0x1, _0x5b0c0e[_0x2241d3]["touchable"] = !0x1, _0x5b0c0e[_0x2241d3]["alpha"] = 0x0);
        } catch (_0x13fb37) {}
      }), _0x5413ac(_0x5b0c0e);
    }(_0x514560);
    const _0x2ab944 = function (_0xe3ae52) {
      return _0xe3ae52?.["m_content"] || _0xe3ae52?.["getChild"]?.("content") || null;
    }(_0x514560);
    !function (_0x1c54f6) {
      if (_0x1c54f6) {
        _0x1c54f6["touchable"] = !0x0;
        for (let _0x504c02 = 0x0; _0x504c02 < Number(_0x1c54f6["numChildren"] || 0x0); _0x504c02 += 0x1) {
          const _0x31606b = _0x1c54f6["getChildAt"]?.(_0x504c02);
          _0x31606b && (_0x31606b["visible"] = !0x1, _0x31606b["touchable"] = !0x1, _0x31606b["alpha"] = 0x0);
        }
      }
    }(_0x2ab944);
    const _0x1275dc = new _0x826f66["GComponent"]();
    _0x1275dc["name"] = "customQuenchContentHost", _0x1275dc["setSize"](_0x33e9ad["formWidth"], _0x33e9ad["tipHeight"]), _0x1275dc["x"] = _0x33e9ad["formX"], _0x1275dc["y"] = _0x33e9ad["formY"], _0x1275dc["touchable"] = !0x0, (_0x2ab944 || _0x514560)["addChild"](_0x1275dc);
    const _0x36d623 = {
      dialog: _0x45b8b7,
      layer: _0x646aea,
      skin: _0x5dd012,
      container: _0x3cc373,
      tipBg: _0x514560,
      tipContent: _0x2ab944,
      contentHost: _0x1275dc,
      settings: _0x9fa09c(_0x256f73()),
      ratioInput: null,
      countInput: null
    };
    _0x646aea["__customQuenchPopup"] = _0x36d623, _0x36d623["__settingsUiRetried"] = !0x1, _0x393348(_0x36d623), _0x4df67a(_0x36d623), _0x10e14b(_0x36d623);
    try {
      _0x599b35["addChild"](_0x646aea), _0x1ee96f(_0x45b8b7, _0x646aea, "remove", null), _0x45b8b7[_0x2a2c15] = _0x36d623, _0x218759(_0x36d623), console["log"]("[指定洗炼] 设置 UI 已挂载 GRoot（physics openSettingsDialog 同款）");
    } catch (_0x5dff8f) {
      console["warn"]("[指定洗炼] 构建设置 UI 失败:", _0x5dff8f);
    }
  }
  function _0x179b91(_0x918f5b) {
    if (!_0x918f5b || _0x918f5b["prototype"][_0x40fee9]) return !!_0x918f5b;
    const _0x29317c = _0x918f5b["prototype"]["onShow"],
      _0x17c02d = _0x918f5b["prototype"]["onHide"],
      _0x3a357a = _0x918f5b["prototype"]["_onClickAutoQuench"],
      _0xb3f88d = _0x918f5b["prototype"]["_onClickSkipOrange"],
      _0x5a142f = _0x918f5b["prototype"]["_changeAutoState"],
      _0x28cc94 = _0x918f5b["prototype"]["_resetTogToDefault"],
      _0x38184a = _0x918f5b["prototype"]["_updateQuench"],
      _0x12272a = _0x918f5b["prototype"]["_changeOrangeConfrimState"],
      _0x34dada = _0x918f5b["prototype"]["_checkQuenchConfirm"],
      _0x4bb70b = _0x918f5b["prototype"]["_doEquipQuench"],
      _0x3655d1 = _0x918f5b["prototype"]["_refreshItems"];
    _0x918f5b["prototype"]["onShow"] = function () {
      const _0x1d0409 = _0x29317c["apply"](this, arguments);
      try {
        this[_0x5b319d] = !0x1, _0x26362c["__lastQuenchDialog"] = this, _0xec01d3(this), _0x2b6b0d(this), function (_0x460a92) {
          const _0x38ce35 = _0x460a92 && _0x460a92["ui"];
          if (_0x38ce35) for (let _0x5b37d6 = 0x0; _0x5b37d6 < 0xa; _0x5b37d6 += 0x1) {
            const _0x23db42 = _0x38ce35["m_item" + _0x5b37d6];
            _0x23db42 && _0x23db42["m_spineEffect"] && _0x35c18e(_0x23db42["m_spineEffect"]);
          }
        }(this);
      } catch (_0x141266) {
        console["error"]("[跳过红色] onShow 注入失败:", _0x141266);
      }
      return _0x1d0409;
    }, _0x918f5b["prototype"]["onHide"] = function () {
      try {
        _0x48f632(this, "面板关闭"), _0x142d0b(this), _0x26362c["__lastQuenchDialog"] === this && (_0x26362c["__lastQuenchDialog"] = null);
        const _0x16e1e2 = this[_0x346828];
        if (_0x16e1e2) {
          try {
            _0x16e1e2["dispose"]();
          } catch (_0x57ac17) {}
          this[_0x346828] = null;
        }
        const _0x145511 = this[_0x518a8d];
        if (_0x145511) {
          try {
            _0x145511["dispose"]();
          } catch (_0x53b9a6) {}
          this[_0x518a8d] = null;
        }
        this["__quenchSettingsBtnTemplate"] = null, this[_0xabda8b] = !0x1, this[_0x5b319d] = !0x1, this[_0x15099c] = null;
      } catch (_0x1d4349) {}
      return _0x17c02d["apply"](this, arguments);
    }, _0x918f5b["prototype"]["_onClickAutoQuench"] = function () {
      if ("function" == typeof _0x5a142f) {
        const _0x2e26c9 = _0x5a142f["apply"](this, arguments);
        if (!this["_isOpenAuto"] && this[_0x273f8b]) try {
          _0x48f632(this, "取消自动淬炼");
        } catch (_0x123dd9) {}
        return _0x547dae(this), _0x2e26c9;
      }
      return _0x3a357a ? _0x3a357a["apply"](this, arguments) : void 0x0;
    }, _0x918f5b["prototype"]["_onClickSkipOrange"] = function () {
      if ("function" == typeof _0x12272a) {
        const _0x54038d = _0x12272a["apply"](this, arguments);
        return this["_isSkipOrange"] || _0x5e5347(this), _0x547dae(this), _0x54038d;
      }
      return _0xb3f88d ? _0xb3f88d["apply"](this, arguments) : void 0x0;
    }, _0x918f5b["prototype"]["_changeAutoState"] = function () {
      const _0x2364dd = _0x5a142f["apply"](this, arguments);
      if (!this["_isOpenAuto"] && this[_0x273f8b]) try {
        _0x48f632(this, "取消自动淬炼");
      } catch (_0xb62b52) {}
      return _0x547dae(this), _0x2364dd;
    }, _0x918f5b["prototype"]["_changeOrangeConfrimState"] = function () {
      const _0x427a75 = _0x12272a["apply"](this, arguments);
      return this["_isSkipOrange"] || _0x5e5347(this), _0x547dae(this), _0x427a75;
    }, _0x918f5b["prototype"]["_resetTogToDefault"] = function () {
      const _0x478eab = _0x28cc94["apply"](this, arguments);
      return _0x5e5347(this), _0x547dae(this), _0x478eab;
    }, _0x918f5b["prototype"]["_updateQuench"] = async function () {
      if (this["_isInQuenchAnim"] || this["_isInQuench"] || this["_quenchTimes"] <= 0x0 || this[_0x5b319d]) return;
      const _0x265d08 = this["_checkQuenchConfirm"]();
      if (!(!!this[_0xabda8b] && _0x265d08 && this["_needConfrimQuenches"]["length"] > 0x0)) return _0x38184a["apply"](this, arguments);
      const _0x4fa312 = _0x3157ed("ModuleManager"),
        _0x3edb58 = _0x3157ed("Configs");
      if (!_0x4fa312 || !_0x3edb58 || !this["_equipInfo"]) return;
      const _0x5ea299 = this["_showVersion"],
        _0x234563 = this["_equipInfo"],
        _0x79c582 = _0x234563["heroId"],
        _0x422319 = _0x234563["part"],
        _0x198af5 = _0x234563["curQuenchId"],
        _0x2667f1 = _0x4fa312["GET_MODULE"](_0x3edb58["ModuleType"]["EQUIP"]);
      if (_0x2667f1 && "function" == typeof _0x2667f1["sendConfirm"]) {
        this[_0x5b319d] = !0x0;
        try {
          if (!(await _0x2667f1["sendConfirm"](_0x79c582, _0x422319, this["_equipInfo"]["quenches"] || new Map(), _0x198af5))) return;
          if (!this["isShow"] || this["_showVersion"] !== _0x5ea299) return;
          const _0x535005 = this["_equipInfo"];
          if (!_0x535005 || _0x535005["heroId"] !== _0x79c582 || _0x535005["part"] !== _0x422319 || _0x535005["curQuenchId"] !== _0x198af5) return;
          this["_clearQuenchAnims"](), this["_isOpenAuto"] && (this["_quenchTimes"] = this["AUTO_QUENCH_TIMES"]), this["_refreshItems"](), this["_seed"] = this["_equipInfo"] && this["_equipInfo"]["seed"] || 0x0, this["_doEquipQuench"]();
        } finally {
          this[_0x5b319d] = !0x1;
        }
      }
    }, _0x918f5b["prototype"]["_refreshItems"] = function () {
      const _0x4c9f2e = _0x3655d1["apply"](this, arguments);
      try {
        _0x2b6b0d(this);
      } catch (_0x1227eb) {}
      try {
        _0x2848bf(this);
      } catch (_0x51466c) {}
      return _0x4c9f2e;
    };
    const _0x3e7d78 = _0x918f5b["prototype"]["_onQuenchEffectComplete"];
    return "function" == typeof _0x3e7d78 && (_0x918f5b["prototype"]["_onQuenchEffectComplete"] = function () {
      const _0x1dc0d9 = _0x3e7d78["apply"](this, arguments);
      try {
        _0x2848bf(this);
      } catch (_0x5a644b) {}
      return _0x1dc0d9;
    }), _0x918f5b["prototype"]["_doEquipQuench"] = function () {
      try {
        let _0x18be1c = this[_0x273f8b];
        if (!_0x18be1c && !this[_0x234520]) {
          if (_0x403f03(_0x256f73())) {
            this[_0x234520] = !0x0;
            try {
              _0x34080c(this);
            } finally {
              this[_0x234520] = !0x1;
            }
            _0x18be1c = this[_0x273f8b];
          }
        }
        if (_0x18be1c) {
          if (_0x18be1c["left"] <= 0x0) return void _0x48f632(this, "次数完成");
          _0x18be1c["left"] -= 0x1, _0x462a97(this);
        }
      } catch (_0xa40cf1) {}
      const _0x359a19 = _0x4bb70b["apply"](this, arguments);
      try {
        const _0x41904f = this;
        _0x359a19 && "function" == typeof _0x359a19["then"] && _0x359a19["then"](function () {
          try {
            _0x2848bf(_0x41904f);
          } catch (_0x4188e8) {}
        });
      } catch (_0x55425) {}
      return _0x359a19;
    }, _0x918f5b["prototype"]["_checkQuenchConfirm"] = function () {
      if (!this["_equipInfo"] || !this["_equipInfo"]["quenches"]) return _0x34dada["apply"](this, arguments);
      let _0x56b23f = !0x1;
      this["_needConfrimQuenches"]["length"] = 0x0;
      const _0x238d14 = this["_isSkipOrange"] || this[_0xabda8b] ? 0x6 : 0x5;
      return this["_equipInfo"]["quenches"]["forEach"]((_0x4421ee, _0x2e5975) => {
        _0x4421ee["colorId"] >= _0x238d14 && !this["_locks"]["has"](_0x2e5975) && (_0x56b23f = !0x0, this["_needConfrimQuenches"]["push"](_0x4421ee));
      }), _0x56b23f;
    }, _0x918f5b["prototype"][_0x40fee9] = !0x0, console["log"]("[跳过红色] 已补丁 QuenchStageUpDialog.prototype"), !0x0;
  }
  function _0x1e0218(_0x18d0ee, _0x5a5155) {
    if (!_0x18d0ee) return null;
    try {
      if (_0x18d0ee["m_" + _0x5a5155]) return _0x18d0ee["m_" + _0x5a5155];
    } catch (_0x31af36) {}
    try {
      if ("function" == typeof _0x18d0ee["getChild"]) {
        const _0x471789 = _0x18d0ee["getChild"](_0x5a5155);
        if (_0x471789) return _0x471789;
      }
    } catch (_0x2b07fd) {}
    if ("number" == typeof _0x18d0ee["numChildren"]) for (let _0x2fbd6a = 0x0; _0x2fbd6a < _0x18d0ee["numChildren"]; _0x2fbd6a += 0x1) {
      const _0x296145 = _0x18d0ee["getChildAt"](_0x2fbd6a);
      if (_0x296145 && _0x296145["name"] === _0x5a5155) return _0x296145;
    }
    return null;
  }
  function _0x66c549(_0x3ed346, _0x560fa1, _0x31e616) {
    if (!_0x3ed346 || _0x31e616 > 0x16) return null;
    if (_0x3ed346["name"] === _0x560fa1) return _0x3ed346;
    if ("number" == typeof _0x3ed346["numChildren"]) for (let _0x1e86cb = 0x0; _0x1e86cb < _0x3ed346["numChildren"]; _0x1e86cb += 0x1) {
      const _0x378fbf = _0x66c549(_0x3ed346["getChildAt"](_0x1e86cb), _0x560fa1, _0x31e616 + 0x1);
      if (_0x378fbf) return _0x378fbf;
    }
    return null;
  }
  function _0x1ee96f(_0x115b3c, _0x5dece9, _0x2dad4c, _0x4df581) {
    _0x115b3c[_0x20d634] || (_0x115b3c[_0x20d634] = []), _0x115b3c[_0x20d634]["push"]({
      node: _0x5dece9,
      kind: _0x2dad4c,
      old: _0x4df581
    });
  }
  function _0x1f49d7(_0x3f0ff5, _0x10bd20, _0x311487) {
    if (_0x10bd20 && _0x10bd20["visible"] !== _0x311487) {
      _0x1ee96f(_0x3f0ff5, _0x10bd20, "visible", _0x10bd20["visible"]);
      try {
        _0x10bd20["visible"] = _0x311487;
      } catch (_0x5dd8f3) {}
    }
  }
  function _0x101e95(_0x1013fc, _0x588ba9, _0x265487) {
    if (_0x588ba9 && "string" == typeof _0x588ba9["text"] && _0x588ba9["text"] !== _0x265487) {
      _0x1ee96f(_0x1013fc, _0x588ba9, "text", _0x588ba9["text"]);
      try {
        _0x588ba9["text"] = _0x265487;
      } catch (_0x211802) {}
    }
  }
  function _0x26b572(_0x578c66, _0x50edff, _0x10c95b) {
    if (_0x50edff && "number" == typeof _0x50edff["alpha"] && _0x50edff["alpha"] !== _0x10c95b) {
      _0x1ee96f(_0x578c66, _0x50edff, "alpha", _0x50edff["alpha"]);
      try {
        _0x50edff["alpha"] = _0x10c95b;
      } catch (_0x42f9d6) {}
    }
  }
  function _0x424a63(_0x3f43) {
    const _0x9e6f79 = _0x26362c["fgui"],
      _0x4e867f = _0x9e6f79 && _0x9e6f79["GRoot"] && _0x9e6f79["GRoot"]["inst"] ? _0x9e6f79["GRoot"]["inst"] : null;
    let _0x27f13c = _0x3f43,
      _0x109e01 = 0x0;
    for (; _0x27f13c && _0x27f13c["parent"] && _0x27f13c["parent"] !== _0x4e867f && _0x109e01 < 0x4;) _0x27f13c = _0x27f13c["parent"], _0x109e01 += 0x1;
    return _0x27f13c || _0x3f43;
  }
  function _0xa3799e(_0x438f27, _0x5f4595) {
    const _0x5ccf7a = [];
    return function _0x5ca788(_0x24058c, _0x1a691a) {
      if (_0x24058c && !(_0x1a691a > 0x16)) {
        try {
          "string" == typeof _0x24058c["text"] && _0x24058c["text"] === _0x5f4595 && _0x24058c["width"] >= 0x96 && !function (_0x50f953, _0x1f7192) {
            let _0x114675 = _0x50f953 && _0x50f953["parent"];
            for (; _0x114675;) {
              const _0x2a9095 = (_0x114675["name"] || "")["toLowerCase"]();
              for (let _0x7121b7 = 0x0; _0x7121b7 < _0x1f7192["length"]; _0x7121b7 += 0x1) if (0x0 === _0x2a9095["indexOf"](_0x1f7192[_0x7121b7])) return !0x0;
              _0x114675 = _0x114675["parent"];
            }
            return !0x1;
          }(_0x24058c, ["btn", "equip"]) && _0x5ccf7a["push"](_0x24058c);
        } catch (_0x54d0b4) {}
        if ("number" == typeof _0x24058c["numChildren"]) {
          for (let _0x2c460a = 0x0; _0x2c460a < _0x24058c["numChildren"]; _0x2c460a += 0x1) _0x5ca788(_0x24058c["getChildAt"](_0x2c460a), _0x1a691a + 0x1);
        }
      }
    }(_0x438f27, 0x0), _0x5ccf7a["sort"](function (_0x18ce64, _0x2c40ae) {
      return (0x0 | _0x18ce64["y"]) - (0x0 | _0x2c40ae["y"]);
    }), _0x5ccf7a;
  }
  function _0x37fa89(_0x36f306) {
    _0x142d0b(_0x36f306);
    const _0x519285 = _0x36f306 && _0x36f306[_0x20d634];
    if (_0x519285 && _0x519285["length"]) {
      for (let _0x473c2d = _0x519285["length"] - 0x1; _0x473c2d >= 0x0; _0x473c2d -= 0x1) {
        const _0x38799b = _0x519285[_0x473c2d];
        try {
          "visible" === _0x38799b["kind"] ? _0x38799b["node"]["visible"] = _0x38799b["old"] : "text" === _0x38799b["kind"] ? _0x38799b["node"]["text"] = _0x38799b["old"] : "alpha" === _0x38799b["kind"] ? _0x38799b["node"]["alpha"] = _0x38799b["old"] : "remove" === _0x38799b["kind"] ? _0x38799b["node"]["parent"] && _0x38799b["node"]["parent"]["removeChild"](_0x38799b["node"], !0x0) : "rect" === _0x38799b["kind"] && (_0x38799b["node"]["setPosition"](_0x38799b["old"]["x"], _0x38799b["old"]["y"]), _0x38799b["node"]["setSize"](_0x38799b["old"]["w"], _0x38799b["old"]["h"]), _0x38799b["node"]["__quenchBlankBgStretched"] = !0x1);
        } catch (_0x195c40) {}
      }
      _0x36f306[_0x20d634] = null, _0x36f306[_0x2f1732] = null;
    }
  }
  function _0x582d25(_0x171061, _0x4a52c2) {
    if (_0x4a52c2) {
      _0x5090b2(_0x171061, _0x4a52c2);
      for (let _0x2711da = 0x0; _0x2711da < _0x16a697["length"]; _0x2711da += 0x1) _0x1f49d7(_0x171061, _0x66c549(_0x4a52c2, _0x16a697[_0x2711da], 0x0), !0x1);
      try {
        !function (_0x3919d5) {
          _0x28af0d(_0x3919d5);
        }(_0x171061);
      } catch (_0x1f730a) {
        console["warn"]("[指定洗炼] 设置 UI 构建异常:", _0x1f730a);
      }
    }
  }
  function _0x555a36(_0x3d698f) {
    if (!_0x3d698f || !_0x3d698f["prototype"] || _0x3d698f["prototype"][_0x3962c3]) return !!_0x3d698f;
    const _0x40e094 = _0x3d698f["prototype"]["onShow"],
      _0xe50f7a = _0x3d698f["prototype"]["onHide"];
    return "function" == typeof _0x40e094 && (_0x3d698f["prototype"]["onShow"] = function () {
      _0x26362c[_0x38daf2] && (this[_0xd1c9e5] = !0x0, _0x26362c[_0x38daf2] = !0x1);
      const _0x3a39af = _0x40e094["apply"](this, arguments),
        _0x1364e2 = this,
        _0x2f445d = !!this[_0xd1c9e5];
      function _0x1e8983() {
        try {
          !0x1 !== _0x1364e2["isShow"] && function (_0x442d21, _0x125fa5) {
            const _0x4e6aa2 = _0x442d21 && _0x442d21["ui"];
            if (!_0x4e6aa2) return;
            const _0x441345 = _0x1e0218(_0x4e6aa2, "title");
            if (_0x441345 && "string" == typeof _0x441345["text"] && null == _0x442d21[_0x4bc936] && (_0x442d21[_0x4bc936] = _0x441345["text"]), _0x125fa5) {
              let _0xf89666 = _0x442d21[_0x2f1732];
              if (!_0xf89666 || !_0xf89666["length"] || !_0xf89666[0x0]["parent"]) {
                const _0x31385f = _0x424a63(_0x4e6aa2);
                _0xf89666 = _0xa3799e(_0x31385f, _0x442d21[_0x4bc936] || "\u8d50\u798f"), _0xf89666["length"] || (_0xf89666 = _0xa3799e(_0x31385f, "\u8d50\u798f")), !_0xf89666["length"] && _0x441345 && "string" == typeof _0x441345["text"] && (_0xf89666 = [_0x441345]), _0x442d21[_0x2f1732] = _0xf89666;
              }
              for (let _0x62edc3 = 0x0; _0x62edc3 < _0xf89666["length"]; _0x62edc3 += 0x1) _0x101e95(_0x442d21, _0xf89666[_0x62edc3], "\u8bbe\u7f6e");
              let _0x49636c = _0x66c549(_0x424a63(_0x4e6aa2), "btnClose", 0x0) || _0x66c549(_0x4e6aa2, "btnClose", 0x0);
              if (!_0x49636c) {
                const _0x1d617f = _0x26362c["fgui"];
                _0x1d617f && _0x1d617f["GRoot"] && _0x1d617f["GRoot"]["inst"] && (_0x49636c = _0x66c549(_0x1d617f["GRoot"]["inst"], "btnClose", 0x0));
              }
              if (_0x49636c && (_0x442d21["__cfCloseBtn"] = _0x49636c, _0x26b572(_0x442d21, _0x49636c, 0x0), "number" == typeof _0x49636c["numChildren"])) {
                for (let _0x52cebd = 0x0; _0x52cebd < _0x49636c["numChildren"]; _0x52cebd += 0x1) _0x1f49d7(_0x442d21, _0x49636c["getChildAt"](_0x52cebd), !0x1);
              }
              for (let _0x176165 = 0x0; _0x176165 < _0x5b0f1d["length"]; _0x176165 += 0x1) {
                const _0x5bc2a3 = _0x1e0218(_0x4e6aa2, _0x5b0f1d[_0x176165]);
                if (_0x5bc2a3) try {
                  _0x5bc2a3["visible"] = !0x1;
                } catch (_0x1a7c99) {}
              }
              _0x582d25(_0x442d21, _0x66c549(_0x4e6aa2, _0x4f4293, 0x0) || _0x4e6aa2);
            } else {
              if (_0x441345 && null != _0x442d21[_0x4bc936]) try {
                _0x441345["text"] = _0x442d21[_0x4bc936];
              } catch (_0x32c142) {}
              for (let _0x50f070 = 0x0; _0x50f070 < _0x5b0f1d["length"]; _0x50f070 += 0x1) {
                const _0x13d0a0 = _0x1e0218(_0x4e6aa2, _0x5b0f1d[_0x50f070]);
                if (_0x13d0a0) try {
                  _0x13d0a0["visible"] = !0x0;
                } catch (_0x444b04) {}
              }
              _0x37fa89(_0x442d21);
            }
          }(_0x1364e2, _0x2f445d && !!_0x1364e2[_0xd1c9e5]);
        } catch (_0x19b46c) {
          console["error"]("[设置面板] onShow 注入失败:", _0x19b46c);
        }
      }
      return _0x1e8983(), _0x2f445d && (setTimeout(_0x1e8983, 0x0), setTimeout(_0x1e8983, 0x78), setTimeout(_0x1e8983, 0x190), setTimeout(_0x1e8983, 0x320)), _0x3a39af;
    }, _0x3d698f["prototype"]["onHide"] = function () {
      try {
        _0x37fa89(this), this[_0xd1c9e5] = !0x1;
      } catch (_0x5cb8d5) {}
      return _0xe50f7a ? _0xe50f7a["apply"](this, arguments) : void 0x0;
    }, _0x3d698f["prototype"][_0x3962c3] = !0x0, console["log"]("[设置面板] 已补丁 EquipEnchantDialog.prototype（克隆按钮 → 空白设置面板）"), !0x0);
  }
  !function () {
    let _0x47d90a = 0x0;
    const _0x551732 = setInterval(() => {
      if (_0x47d90a += 0x1, _0x47d90a >= 0x78) return clearInterval(_0x551732), void console["warn"]("[跳过红色] 注入超时，未找到目标模块");
      if ("function" != typeof _0x26362c["__require"] || "object" != typeof _0x26362c["fgui"]) return;
      const _0x51908c = function () {
        const _0x272009 = _0x3157ed(_0x4f4293);
        return _0x272009 && (_0x272009["EquipEnchantDialog"] || _0x272009["default"]) || null;
      }();
      _0x51908c && _0x555a36(_0x51908c);
      const _0x28acfa = function () {
          const _0x2a93fd = _0x3157ed("QuenchStageUpDialog");
          return _0x2a93fd && _0x2a93fd["QuenchStageUpDialog"] ? _0x2a93fd["QuenchStageUpDialog"] : null;
        }(),
        _0x9fef2c = _0x2377a1();
      _0x28acfa && _0x9fef2c && _0x179b91(_0x28acfa) && (clearInterval(_0x551732), console["log"]("[跳过红色] 注入完成"));
    }, 0x1f4);
  }();
}();
