// Adapted from the supplied 2.57.2 game enhancement asset.
// Static strings decoded; obfuscator guards removed; frame access stays local.
!function () {
  "use strict";
  if (!window["__panelEnhancerInstalled"]) {
    window["__panelEnhancerInstalled"] = !0x0;
    var _0x294e8c = "__enhance_panel_pos__",
      _0x30cb17 = [{
        sel: "#starHelperPanel",
        clamp: !0x0
      }, {
        sel: "#starHelperToggleBtn"
      }, {
        sel: ".hu-root"
      }, {
        sel: ".hu-panel",
        drag: !0x1,
        clamp: !0x0
      }, {
        sel: "#opponent-wash-assistant",
        clamp: !0x0,
        skipClass: "opponent-wash-collapsed"
      }, {
        sel: "#bx-blackmarket-panel"
      }],
      _0x58204a = _0x52591f();
    try {
      new MutationObserver(_0x200bf5)["observe"](document["documentElement"], {
        childList: !0x0,
        subtree: !0x0
      });
    } catch (_0x4c2995) {}
    _0x200bf5();
    var _0x558bdf = setInterval(_0x200bf5, 0x7d0);
    setTimeout(function () {
      clearInterval(_0x558bdf);
    }, 0x1d4c0), window["addEventListener"]("resize", _0x12f9f7), window["addEventListener"]("orientationchange", function () {
      setTimeout(_0x12f9f7, 0x12c);
    }), console["log"]("[面板增强器] 已启用：拖动转移 + 宽高自适应 + 位置记忆");
  }
  function _0x52591f() {
    try {
      return JSON["parse"](localStorage["getItem"](_0x294e8c) || "{}");
    } catch (_0x17d791) {
      return {};
    }
  }
  function _0x4facce(_0x4f6e20, _0x43296c, _0x5e8c43) {
    _0x4f6e20["style"]["setProperty"](_0x43296c, _0x5e8c43, "important");
  }
  function _0x868c45(_0x4f488a, _0x5d2b5d, _0x1007c6) {
    _0x4facce(_0x4f488a, "left", Math["round"](_0x5d2b5d) + "px"), _0x4facce(_0x4f488a, "top", Math["round"](_0x1007c6) + "px"), _0x4facce(_0x4f488a, "right", "auto"), _0x4facce(_0x4f488a, "bottom", "auto"), _0x4facce(_0x4f488a, "transform", "none"), _0x4facce(_0x4f488a, "margin", "0");
  }
  function _0x4d8a6d(_0x580475, _0x12c48b, _0x373df6) {
    var _0x4aa733 = _0x580475["offsetWidth"] || 0x32;
    return {
      x: Math["min"](Math["max"](_0x12c48b, 0x18 - _0x4aa733), window["innerWidth"] - 0x18),
      y: Math["min"](Math["max"](_0x373df6, 0x0), window["innerHeight"] - 0x18)
    };
  }
  function _0x4c0af5(_0x4994ac) {
    _0x4facce(_0x4994ac, "max-width", "94vw"), _0x4facce(_0x4994ac, "max-height", "86vh"), _0x4facce(_0x4994ac, "box-sizing", "border-box"), _0x4facce(_0x4994ac, "overflow-y", "auto");
  }
  function _0x3658c0(_0x1bd66c, _0x506128) {
    var _0x1890ad = !0x1,
      _0x50ab18 = !0x1,
      _0x3d3b84 = 0x0,
      _0x3315f7 = 0x0,
      _0x287e92 = 0x0,
      _0x19d4e7 = 0x0,
      _0x4a917e = "";
    function _0x13fcee(_0x117282) {
      if (_0x1890ad) {
        _0x1890ad = !0x1;
        try {
          _0x1bd66c["releasePointerCapture"](_0x117282["pointerId"]);
        } catch (_0xeafa7d) {}
        if (_0x50ab18) {
          _0x50ab18 = !0x1, _0x4a917e ? _0x1bd66c["style"]["transition"] = _0x4a917e : _0x1bd66c["style"]["removeProperty"]("transition");
          var _0x2d8d76 = _0x1bd66c["getBoundingClientRect"]();
          !0x1 !== _0x506128["remember"] && function (_0x4845d2, _0x1d26b9, _0xb19288) {
            try {
              var _0x3249f2 = _0x52591f();
              _0x3249f2[_0x4845d2] = {
                x: Math["round"](_0x1d26b9),
                y: Math["round"](_0xb19288)
              }, localStorage["setItem"](_0x294e8c, JSON["stringify"](_0x3249f2));
            } catch (_0x5ca766) {}
          }(_0x506128["sel"], _0x2d8d76["left"], _0x2d8d76["top"]), _0x1bd66c["addEventListener"]("click", function (_0x55ad14) {
            _0x55ad14["stopPropagation"](), _0x55ad14["preventDefault"]();
          }, {
            capture: !0x0,
            once: !0x0
          });
        }
      }
    }
    _0x1bd66c["addEventListener"]("pointerdown", function (_0xbac704) {
      if (!(void 0x0 !== _0xbac704["button"] && 0x0 !== _0xbac704["button"] || _0x506128["skipClass"] && _0x1bd66c["classList"]["contains"](_0x506128["skipClass"]))) {
        var _0x407f83 = _0xbac704["target"];
        if (!_0x407f83["closest"] || !_0x407f83["closest"]('input,select,textarea,button,a,label,[contenteditable="true"]')) {
          if ("touch" === _0xbac704["pointerType"]) for (var _0x1317be = _0x407f83; _0x1317be && _0x1317be !== _0x1bd66c;) {
            if (_0x1317be["scrollHeight"] > _0x1317be["clientHeight"] + 0x4) return;
            _0x1317be = _0x1317be["parentElement"];
          }
          var _0x26a82a = _0x1bd66c["getBoundingClientRect"]();
          _0x1890ad = !0x0, _0x50ab18 = !0x1, _0x3d3b84 = _0xbac704["clientX"], _0x3315f7 = _0xbac704["clientY"], _0x287e92 = _0x26a82a["left"], _0x19d4e7 = _0x26a82a["top"];
          try {
            _0x1bd66c["setPointerCapture"](_0xbac704["pointerId"]);
          } catch (_0x5d6d61) {}
        }
      }
    }), _0x1bd66c["addEventListener"]("pointermove", function (_0x146ab1) {
      if (_0x1890ad) {
        var _0x2758ce = _0x146ab1["clientX"] - _0x3d3b84,
          _0x19b7f0 = _0x146ab1["clientY"] - _0x3315f7;
        if (!_0x50ab18) {
          if (Math["abs"](_0x2758ce) < 0x6 && Math["abs"](_0x19b7f0) < 0x6) return;
          _0x50ab18 = !0x0, _0x4a917e = _0x1bd66c["style"]["transition"], _0x4facce(_0x1bd66c, "transition", "none");
        }
        _0x146ab1["preventDefault"]();
        var _0x102a3f = _0x4d8a6d(_0x1bd66c, _0x287e92 + _0x2758ce, _0x19d4e7 + _0x19b7f0);
        _0x868c45(_0x1bd66c, _0x102a3f["x"], _0x102a3f["y"]);
      }
    }), _0x1bd66c["addEventListener"]("touchmove", function (_0x31d2e6) {
      _0x1890ad && _0x31d2e6["cancelable"] && _0x31d2e6["preventDefault"]();
    }, {
      passive: !0x1
    }), _0x1bd66c["addEventListener"]("pointerup", _0x13fcee), _0x1bd66c["addEventListener"]("pointercancel", _0x13fcee), _0x1bd66c["style"]["cursor"] || (_0x1bd66c["style"]["cursor"] = "move");
  }
  function _0xad5d4b(_0x2ecb97, _0x52c19c) {
    if (!_0x2ecb97["__peDone"] && (_0x2ecb97["__peDone"] = !0x0, _0x52c19c["clamp"] && _0x4c0af5(_0x2ecb97), !0x1 !== _0x52c19c["drag"])) {
      _0x3658c0(_0x2ecb97, _0x52c19c);
      var _0xa7af1c = !0x1 !== _0x52c19c["remember"] && _0x58204a[_0x52c19c["sel"]];
      if (_0xa7af1c) {
        var _0x451e6b = _0x4d8a6d(_0x2ecb97, _0xa7af1c["x"], _0xa7af1c["y"]);
        _0x868c45(_0x2ecb97, _0x451e6b["x"], _0x451e6b["y"]);
      }
    }
  }
  function _0x200bf5() {
    for (var _0x4bd7a4 = 0x0; _0x4bd7a4 < _0x30cb17["length"]; _0x4bd7a4++) for (var _0x33e0d6 = document["querySelectorAll"](_0x30cb17[_0x4bd7a4]["sel"]), _0x32cf23 = 0x0; _0x32cf23 < _0x33e0d6["length"]; _0x32cf23++) _0xad5d4b(_0x33e0d6[_0x32cf23], _0x30cb17[_0x4bd7a4]);
  }
  function _0x12f9f7() {
    for (var _0xdde7a2 = 0x0; _0xdde7a2 < _0x30cb17["length"]; _0xdde7a2++) for (var _0x5f110e = _0x30cb17[_0xdde7a2], _0x368f18 = document["querySelectorAll"](_0x5f110e["sel"]), _0x22d97b = 0x0; _0x22d97b < _0x368f18["length"]; _0x22d97b++) {
      var _0x59df50 = _0x368f18[_0x22d97b];
      if (_0x59df50["__peDone"] && (_0x5f110e["clamp"] && _0x4c0af5(_0x59df50), _0x59df50["style"]["left"] && _0x59df50["style"]["top"])) {
        var _0x152414 = _0x59df50["getBoundingClientRect"](),
          _0x166044 = _0x4d8a6d(_0x59df50, _0x152414["left"], _0x152414["top"]);
        _0x166044["x"] === _0x152414["left"] && _0x166044["y"] === _0x152414["top"] || _0x868c45(_0x59df50, _0x166044["x"], _0x166044["y"]);
      }
    }
  }
}();
