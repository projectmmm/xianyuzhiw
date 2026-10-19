// Adapted from the supplied 2.57.2 game enhancement asset.
// Static strings decoded; obfuscator guards removed; frame access stays local.
!function () {
  "use strict";
  var _0x1b69d1 = "2026-06-12.unified-v48",
    _0xd329a9 = "saltFieldViewScaleComp",
    _0x219443 = "saltFieldViewScaleHost",
    _0x222d8f = "btnResetScale",
    _0x3e54a3 = 0x38,
    _0x590b94 = 0x38,
    _0x264404 = null;
  if (!window["__saltFieldView"] || window["__saltFieldView"]["version"] !== _0x1b69d1) {
    var _0x24f3f0 = 0.12,
      _0x527d0b = 2.5,
      _0x4a597d = 0.05,
      _0x15effa = 0.78,
      _0x1769ac = "salt_visual_zoom_scale_v16",
      _0x274086 = "salt_view_panel_minimized",
      _0x35d9b2 = !0x1,
      _0x5863dd = 0x0,
      _0x34755a = function () {
        try {
          return "1" === localStorage["getItem"](_0x274086);
        } catch (_0xa56f31) {}
        return !0x1;
      }(),
      _0x707f7d = null,
      _0xee47ec = !0x1,
      _0x1a6bae = null,
      _0x256909 = [],
      _0x46f413 = [],
      _0x54da1d = {},
      _0x10c35 = null,
      _0x1a9c3f = null,
      _0x4c7029 = null,
      _0x17672c = null,
      _0x5605c6 = !0x1,
      _0x115429 = !0x1,
      _0x4997b8 = 0x64,
      _0x950224 = 50.5,
      _0x107801 = null,
      _0x1e78b2 = 0x0,
      _0x3364d7 = null,
      _0x1ae908 = null,
      _0x8bb147 = 0x0,
      _0x2ebd7c = null,
      _0x135c0a = 0x0,
      _0x15bcde = null,
      _0x4e99fe = 0x0,
      _0x4790d5 = null,
      _0x56dfd6 = [],
      _0x1ec88e = !0x1,
      _0xa0b052 = null;
    setTimeout(function _0x21eadf() {
      var _0xc949f7, _0x2ff227, _0x2332a3, _0x207b92, _0x58bc77, _0x2a9fdc;
      _0x35d9b2 || ++_0x5863dd > 0x78 || (_0x40520c() ? (_0x2c4bdb(), _0xc949f7 = _0x3cbc8d("SourceMap"), _0x2ff227 = _0x3cbc8d("MapScene"), _0x2332a3 = !!(_0xc949f7 && _0xc949f7["SourceMap"] && _0xc949f7["SourceMap"]["prototype"]["__saltFieldViewPatched"]), _0x207b92 = !!(_0x2ff227 && _0x2ff227["MapScene"] && _0x2ff227["MapScene"]["prototype"]["__saltFieldViewPatched"]), _0x2332a3 && _0x207b92 ? (!function () {
        if (!_0xee47ec) {
          _0xee47ec = !0x0, _0x5daca1(window);
          var _0x37cc7e = _0x40520c();
          _0x37cc7e && _0x37cc7e !== window && _0x5daca1(_0x37cc7e);
        }
      }(), _0x58bc77 = _0x40520c() || window, _0x2a9fdc = {
        version: _0x1b69d1,
        setScale: _0x45fe09,
        getScale: function () {
          return _0x10265c;
        },
        getCache: function (_0x3081ef) {
          return _0x3dd15c(_0x3081ef);
        },
        refresh: _0x150adc,
        reset: _0x432ec6,
        fitFullMap: _0x113cac,
        togglePanel: _0x461b35,
        setPanelMinimized: _0x12369a,
        debug: function () {
          return _0x150adc(), _0x54da1d;
        }
      }, _0x58bc77["__saltFieldView"] = _0x2a9fdc, _0x58bc77["__infiniteVision"] = _0x2a9fdc, _0x58bc77["__saltVisualZoom"] = {
        version: _0x1b69d1,
        setScale: _0x45fe09,
        refresh: _0x150adc,
        debug: _0x2a9fdc["debug"]
      }, window["__saltFieldView"] = _0x2a9fdc, window["__infiniteVision"] = _0x2a9fdc, window["__saltVisualZoom"] = _0x58bc77["__saltVisualZoom"], _0x45186f(), console["log"]("[SaltFieldView] enabled", _0x1b69d1, "scale=", _0x10265c, "grootWait=", !_0x1ec88e), _0x35d9b2 = !0x0) : setTimeout(_0x21eadf, 0x1f4)) : setTimeout(_0x21eadf, 0x1f4));
    }, 0xbb8);
  }
  function _0xcf326e(_0x10b3da) {
    if (_0x10b3da) {
      if (_0x1ec88e || _0x24f7a8()) {
        _0x1ec88e = !0x0;
        try {
          _0x10b3da();
        } catch (_0x9678dc) {}
      } else _0x56dfd6["push"](_0x10b3da), function () {
        if (_0x4790d5) return;
        var _0x37f7e6 = 0x0;
        _0x4790d5 = setInterval(function () {
          if (_0x37f7e6++, _0x24f7a8()) {
            clearInterval(_0x4790d5), _0x4790d5 = null, _0x1ec88e = !0x0;
            var _0x29d8cc = _0x56dfd6["slice"]();
            _0x56dfd6 = [];
            for (var _0x432a55 = 0x0; _0x432a55 < _0x29d8cc["length"]; _0x432a55++) try {
              _0x29d8cc[_0x432a55]();
            } catch (_0x373211) {}
          } else _0x37f7e6 > 0x12c && (clearInterval(_0x4790d5), _0x4790d5 = null, _0x56dfd6 = []);
        }, 0xc8);
      }();
    }
  }
  function _0x45186f() {
    _0xcf326e(function () {
      _0x32a8c1(), _0x3547fe(), _0xa0b052 || function _0x15e20c() {
        var _0xa8e976 = _0x3a4e95(),
          _0x546434 = !(!_0x195066() && !_0x402255());
        _0xa8e976 && _0x218fcd(), _0x546434 && (_0x3547fe(), _0x1a047b()), _0xa0b052 = setTimeout(_0x15e20c, _0xa8e976 || _0x546434 ? 0x5dc : 0x1f40);
      }();
    });
  }
  function _0x3a4e95() {
    try {
      var _0x3f11ae = _0x2e2dd5("LEGION_WAR");
      if (_0x3f11ae && _0x3f11ae["_isInWar"] && _0x3f11ae["sourceMap"]) return !0x0;
      var _0x2f773a = _0x2e2dd5("LEGION_PAYLOAD");
      if (_0x2f773a && _0x2f773a["lPWarData"] && _0x2f773a["lPWarData"]["sourceMap"] && _0x2f773a["lPWarData"]["battlefield"]) return !0x0;
    } catch (_0x420436) {}
    return !0x1;
  }
  function _0x3f2039(_0x55d01d) {
    if (!_0x55d01d || "function" != typeof _0x55d01d["getModule"]) return !0x1;
    try {
      var _0x18cfe3 = _0x55d01d["getModule"]();
      if (!_0x18cfe3) return !0x1;
      var _0x150fc3 = _0x2e2dd5("LEGION_WAR");
      if (_0x18cfe3 === _0x150fc3) return _0x150fc3["sourceMap"] === _0x55d01d || _0x57e239(_0x150fc3["sourceMap"]) === _0x55d01d;
      var _0x52f60f = _0x2e2dd5("LEGION_PAYLOAD");
      if (_0x18cfe3 === _0x52f60f && _0x52f60f["lPWarData"] && _0x52f60f["lPWarData"]["sourceMap"] === _0x55d01d) return !0x0;
    } catch (_0x4728d4) {}
    return !0x1;
  }
  function _0x4257ad(_0x406f4d) {
    return !!_0x406f4d && (!!_0x406f4d["isShow"] || !(!_0x406f4d["ui"] || !_0x406f4d["ui"]["parent"]));
  }
  function _0x26dfdf() {
    var _0x45e3b7 = _0x40520c();
    return _0x45e3b7 && _0x45e3b7["fgui"] ? _0x45e3b7["fgui"] : null;
  }
  function _0x367f29(_0xd1b586) {
    if (!_0xd1b586 || !_0xd1b586["GRoot"]) return null;
    try {
      var _0x2076a5 = _0xd1b586["GRoot"]["inst"];
      return _0x2076a5 ? null == _0x2076a5["node"] ? null : _0x2076a5 : null;
    } catch (_0x3020ff) {
      return null;
    }
  }
  function _0x24f7a8(_0x4f26ef) {
    return !!_0x367f29(_0x4f26ef || _0x26dfdf());
  }
  function _0x2563f1() {
    return _0x367f29(_0x26dfdf());
  }
  function _0xd2a0fa(_0x1f6583, _0x5a6de1) {
    if (_0x1f6583) {
      var _0x48bd70 = _0x1f6583["__saltFieldViewScale"];
      if (_0x48bd70 > 0x0) return _0x48bd70;
      if (_0x1f6583["_mapScale"] > 0x0) return _0x1f6583["_mapScale"];
      try {
        var _0x198aa6 = Number(_0x1f6583["mapScale"]);
        if (_0x198aa6 > 0x0) return _0x198aa6;
      } catch (_0x47d985) {}
    }
    return _0x5a6de1 && _0x5a6de1["scaleX"] > 0x0 ? _0x5a6de1["scaleX"] : _0x10265c > 0x0 ? _0x10265c : _0x15effa;
  }
  function _0x3c2be2(_0x44bb06, _0x3d949e, _0x14b4a8, _0x431077, _0x29dcb9, _0x2c649a, _0x4a14dd, _0x24e565, _0x3e0c9e) {
    if (!_0x44bb06 || !_0x3d949e) return !0x1;
    if (_0x431077 > 0x0 || (_0x431077 = _0xd2a0fa(_0x14b4a8, _0x44bb06)), function (_0x28248e, _0x4d7887, _0x3be2fa) {
      if (_0x28248e) {
        _0x28248e["__saltFieldViewScale"] = _0x3be2fa;
        try {
          _0x28248e["_mapScale"] = _0x3be2fa;
        } catch (_0x377816) {}
        _0x28248e["mapContainer"] = _0x4d7887;
      }
    }(_0x14b4a8, _0x44bb06, _0x29dcb9 = (_0x3e0c9e = _0x3e0c9e || {})["skipRound"] ? _0x331902(_0x29dcb9, _0x24f3f0, _0x527d0b) : _0x331902(_0x5ed23a(_0x29dcb9), _0x24f3f0, _0x527d0b)), _0x44bb06["setScale"](_0x29dcb9, _0x29dcb9), _0x3e0c9e["skipRound"] && (_0x44bb06["scaleX"] = _0x29dcb9, _0x44bb06["scaleY"] = _0x29dcb9), !0x1 !== _0x4a14dd && Math["abs"](_0x431077 - _0x29dcb9) > 0.001) {
      var _0x178641 = _0x2563f1();
      if (_0x178641) {
        var _0x4b874c = _0x24e565 && isFinite(_0x24e565["x"]) ? _0x24e565["x"] : _0x178641["width"] / 0x2,
          _0x177813 = _0x24e565 && isFinite(_0x24e565["y"]) ? _0x24e565["y"] : _0x178641["height"] / 0x2,
          _0x4e0d13 = function (_0x1504d1) {
            if (!_0x1504d1) return {
              x: 0x0,
              y: 0x0
            };
            if ("function" == typeof _0x1504d1["getPosition"]) {
              var _0x62ce45 = _0x1504d1["getPosition"]();
              return {
                x: _0x62ce45["x"],
                y: _0x62ce45["y"]
              };
            }
            return {
              x: Number(_0x1504d1["x"] || 0x0),
              y: Number(_0x1504d1["y"] || 0x0)
            };
          }(_0x3d949e),
          _0x27adae = (_0x4b874c - _0x4e0d13["x"]) / _0x431077,
          _0x47e031 = (_0x177813 + _0x4e0d13["y"]) / _0x431077;
        _0x3d949e["setPosition"](_0x4b874c - _0x27adae * _0x29dcb9, -(_0x177813 - _0x47e031 * _0x29dcb9));
      }
    }
    return _0x2c649a && "function" == typeof _0x2c649a["_fixScope"] && _0x2c649a["_fixScope"](), !0x0;
  }
  function _0x8383a0(_0xe48470, _0x514a83, _0x338811) {
    var _0x59159f = _0x2563f1();
    if (!_0x59159f) return null;
    var _0x131ee1 = function (_0x1b445d) {
      var _0x1318d7 = Date["now"]();
      if (_0x15bcde && _0x15bcde["window"] === _0x1b445d && _0x1318d7 - _0x4e99fe < 0x320) return _0x15bcde["rect"];
      var _0x50ad88 = (_0x1b445d || window)["document"],
        _0x325a04 = null;
      try {
        _0x325a04 = _0x50ad88["querySelector"]("canvas");
      } catch (_0x2f2436) {}
      if (!_0x325a04) try {
        _0x325a04 = _0x50ad88["getElementById"]("GameCanvas");
      } catch (_0xd69ef7) {}
      var _0x4ba7d0 = _0x325a04 && _0x325a04["getBoundingClientRect"] ? _0x325a04["getBoundingClientRect"]() : null;
      return _0x15bcde = {
        window: _0x1b445d,
        rect: _0x4ba7d0
      }, _0x4e99fe = _0x1318d7, _0x4ba7d0;
    }(_0x338811 || window);
    return _0x131ee1 && _0x131ee1["width"] > 0x0 && _0x131ee1["height"] > 0x0 ? {
      x: (_0xe48470 - _0x131ee1["left"]) * (_0x59159f["width"] / _0x131ee1["width"]),
      y: (_0x514a83 - _0x131ee1["top"]) * (_0x59159f["height"] / _0x131ee1["height"])
    } : {
      x: _0x59159f["width"] / 0x2,
      y: _0x59159f["height"] / 0x2
    };
  }
  function _0x3dcea3(_0x4241f8, _0x317db1) {
    var _0x222679 = _0x4241f8["clientX"] - _0x317db1["clientX"],
      _0x553352 = _0x4241f8["clientY"] - _0x317db1["clientY"];
    return Math["sqrt"](_0x222679 * _0x222679 + _0x553352 * _0x553352);
  }
  function _0x195d68(_0x2560c2, _0x397468, _0x147af9) {
    return _0x8383a0((_0x2560c2["clientX"] + _0x397468["clientX"]) / 0x2, (_0x2560c2["clientY"] + _0x397468["clientY"]) / 0x2, _0x147af9);
  }
  function _0x4e04b5() {
    _0x2ebd7c = null, _0x135c0a = 0x0;
  }
  function _0x261f31() {
    if (_0x1e78b2 = 0x0, null != _0x3364d7) {
      var _0x24d35e = _0x3364d7,
        _0x3c3d1b = _0x1ae908;
      _0x3364d7 = null, _0x1ae908 = null;
      var _0xafb21 = _0x10265c;
      _0x10265c = _0x331902(_0x24d35e, _0x24f3f0, _0x527d0b), _0x50d422(_0xafb21, !0x0, _0x3c3d1b, {
        skipUpdateMap: !0x0,
        skipRound: !0x0
      }), function () {
        _0x5605c6 = !0x0;
        try {
          if (_0x4c7029) {
            var _0x347fff = _0x1f2768(_0x10265c);
            "INPUT" === _0x4c7029["tagName"] ? _0x4c7029["value"] = String(_0x347fff) : _0x4c7029["value"] = _0x347fff;
          }
          _0x707f7d;
        } catch (_0x32b10b) {}
        _0x5605c6 = !0x1;
      }();
    }
  }
  function _0x2a7354(_0x550ce7, _0x37cbaf) {
    if (_0x3364d7 = _0x550ce7, _0x1ae908 = _0x37cbaf || _0x1ae908, !_0x1e78b2) {
      var _0x448282 = (_0x40520c() || window)["requestAnimationFrame"] || window["requestAnimationFrame"];
      _0x1e78b2 = _0x448282["call"](_0x40520c() || window, _0x261f31);
    }
  }
  function _0x36fa44() {
    _0x1e78b2 && (((_0x40520c() || window)["cancelAnimationFrame"] || window["cancelAnimationFrame"])["call"](_0x40520c() || window, _0x1e78b2), _0x1e78b2 = 0x0);
  }
  function _0x4b84e7(_0x47ec32) {
    _0x8bb147 && (clearTimeout(_0x8bb147), _0x8bb147 = 0x0), null != _0x3364d7 ? _0x261f31() : _0x36fa44();
    var _0x59c3bc = _0x10265c;
    return _0x10265c = _0x5ed23a(_0x10265c), _0x516ad5(), _0x3e6160(), _0x50d422(_0x59c3bc, !0x0, _0x47ec32, {
      skipRound: !0x0
    }) || _0x1c2ba6(_0x10265c), _0x3a4e95() && _0x218fcd(), _0x54da1d["scale"] = _0x10265c, _0x10265c;
  }
  function _0x342acb(_0x297cfb) {
    if (_0x107801) {
      var _0x31b976 = _0x107801["focusPoint"];
      _0x107801 = null, _0x297cfb ? _0x4b84e7(_0x31b976) : _0x36fa44();
    }
  }
  function _0x1f2768(_0x1260aa) {
    if ((_0x1260aa = _0x331902(_0x1260aa, _0x24f3f0, _0x527d0b)) <= _0x15effa) {
      0x0;
      var _0x4392d1 = (_0x1260aa - _0x24f3f0) / 0.66;
      return _0x331902(Math["round"](0x1 + 49.5 * _0x4392d1), 0x1, _0x4997b8);
    }
    var _0x471a62 = (_0x1260aa - _0x15effa) / 1.72;
    return _0x331902(Math["round"](_0x950224 + 49.5 * _0x471a62), 0x1, _0x4997b8);
  }
  function _0x97d0ba(_0x45698d) {
    if (_0x45698d && "function" == typeof _0x45698d["getChild"]) {
      var _0x3e27ef = _0x45698d["getChild"]("title");
      _0x3e27ef && (_0x3e27ef["visible"] = !0x1, _0x3e27ef["touchable"] = !0x1, _0x3e27ef["alpha"] = 0x0);
    }
  }
  function _0x591822(_0x3519ad) {
    if (_0x264404 || !_0x3519ad) return _0x264404;
    try {
      var _0x41a7fa = _0x3519ad["m_btnAdd"],
        _0x56930f = _0x3519ad["m_btnSub"],
        _0xbee772 = _0x3519ad["m_slider"];
      _0x264404 = {
        btnW: _0x41a7fa ? Number(_0x41a7fa["width"] || 0x38) : 0x38,
        btnH: _0x41a7fa ? Number(_0x41a7fa["height"] || 0x38) : 0x38,
        slotH: _0xbee772 && _0x41a7fa && _0x56930f ? Math["max"](0x50, Number(_0x56930f["y"] || 0x0) - Number(_0x41a7fa["y"] || 0x0) - Number(_0x41a7fa["height"] || 0x38)) : 0x98,
        compW: Number(_0x3519ad["width"] || 0x38),
        compH: Number(_0x3519ad["height"] || 0x108)
      };
    } catch (_0x5cfd24) {}
    return _0x264404;
  }
  function _0xddaa6c(_0x35f720) {
    if (_0x35f720) {
      _0x97d0ba(_0x35f720);
      try {
        _0x35f720["changeOnClick"] = !0x0;
      } catch (_0x2a0ead) {}
      try {
        _0x35f720["canDrag"] = !0x0;
      } catch (_0x255a05) {}
      try {
        _0x35f720["wholeNumbers"] = !0x0;
      } catch (_0x23d7fb) {}
      !function (_0x16456a) {
        if (!_0x16456a || _0x16456a["__saltGripAlignWrapped"]) return;
        if (_0x16456a["__saltGripAlignWrapped"] = !0x0, "function" == typeof _0x16456a["update"]) {
          var _0x4526b6 = _0x16456a["update"]["bind"](_0x16456a);
          _0x16456a["update"] = function () {
            _0x4526b6(), _0x3cb589(_0x16456a);
          };
        }
        if ("function" == typeof _0x16456a["handleSizeChanged"]) {
          var _0x1e9c48 = _0x16456a["handleSizeChanged"]["bind"](_0x16456a);
          _0x16456a["handleSizeChanged"] = function () {
            _0x1e9c48(), _0x3cb589(_0x16456a);
          };
        }
      }(_0x35f720);
    }
  }
  function _0x3cb589(_0x1315d2) {
    if (_0x1315d2 && "function" == typeof _0x1315d2["getChild"]) {
      var _0x353b1c = _0x1315d2["getChild"]("grip");
      if (_0x353b1c) {
        if (function (_0x11399a) {
          var _0x54b889 = Math["abs"](Number(_0x11399a && _0x11399a["rotation"] || 0x0) % 0x168);
          return 0x5a === _0x54b889 || 0x10e === _0x54b889;
        }(_0x1315d2)) {
          var _0x364f60 = Number(_0x1315d2["height"] || 0x0),
            _0x555570 = Number(_0x353b1c["height"] || 0x0);
          _0x364f60 > 0x0 && (_0x353b1c["y"] = Math["round"]((_0x364f60 - _0x555570) / 0x2) + -0x5);
        } else {
          var _0x1955e1 = Number(_0x1315d2["width"] || 0x0),
            _0x55367c = Number(_0x353b1c["width"] || 0x0);
          _0x1955e1 > 0x0 && (_0x353b1c["x"] = Math["round"]((_0x1955e1 - _0x55367c) / 0x2) + -0x5);
        }
      }
    }
  }
  function _0x3e6160() {
    _0x5605c6 = !0x0;
    try {
      if (_0x4c7029) {
        var _0x1cb5f9 = _0x1f2768(_0x10265c);
        "INPUT" === _0x4c7029["tagName"] ? _0x4c7029["value"] = String(_0x1cb5f9) : _0x4c7029["value"] = _0x1cb5f9, _0x97d0ba(_0x4c7029), "function" == typeof _0x4c7029["update"] && _0x4c7029["update"](), _0x3cb589(_0x4c7029);
      }
      _0x707f7d;
    } catch (_0x1b8d10) {}
    _0x5605c6 = !0x1;
  }
  function _0x542316() {
    if (!_0x5605c6 && _0x4c7029) {
      var _0x468f04 = _0x10265c,
        _0x47a46a = function (_0x32aeca) {
          if ((_0x32aeca = _0x331902(Number(_0x32aeca), 0x1, _0x4997b8)) <= _0x950224) return _0x5ed23a(_0x24f3f0 + (_0x32aeca - 0x1) / 49.5 * 0.66);
          return _0x5ed23a(_0x15effa + (_0x32aeca - _0x950224) / 49.5 * 1.72);
        }(_0x4c7029["value"]);
      _0x10265c = _0x331902(_0x47a46a, _0x24f3f0, _0x527d0b), _0x516ad5(), _0x3cb589(_0x4c7029), _0x3e6160(), _0x50d422(_0x468f04, !0x0) || _0x1c2ba6(_0x10265c), _0x3a4e95() && _0x218fcd(), _0x54da1d["scale"] = _0x10265c;
    }
  }
  function _0x195066() {
    if (!_0x24f7a8()) return null;
    var _0x21bea9 = _0x3cbc8d("index-ui"),
      _0x5d2add = _0x3cbc8d("LegionWarPanel");
    if (!_0x21bea9 || "function" != typeof _0x21bea9["GET_PROXY"] || !_0x5d2add || !_0x5d2add["LegionWarPanel"]) return null;
    try {
      return _0x21bea9["GET_PROXY"](_0x5d2add["LegionWarPanel"]);
    } catch (_0x519455) {
      return null;
    }
  }
  function _0x5a83d2(_0x20fa01) {
    return _0x20fa01 && _0x20fa01["parent"] && _0x20fa01["parent"]["name"] === _0x219443 ? _0x20fa01["parent"] : _0x20fa01;
  }
  function _0x479a76(_0x303ef0) {
    var _0x19ed71 = _0x303ef0 && _0x303ef0["m_rightBtns"];
    if (!_0x19ed71) return null;
    var _0x1178da,
      _0x1904ce = null,
      _0x5917a7 = ["btnHelp", "btnRank", "btnReport", "btnDeploy"];
    for (_0x1178da = 0x0; _0x1178da < _0x5917a7["length"]; _0x1178da++) try {
      var _0x4a0446 = _0x19ed71["getChild"](_0x5917a7[_0x1178da]);
      if (_0x4a0446 && !0x1 !== _0x4a0446["visible"]) {
        _0x1904ce = _0x4a0446;
        break;
      }
    } catch (_0x4d59f7) {}
    if (!_0x1904ce) {
      for (_0x1178da = 0x0; _0x1178da < _0x19ed71["numChildren"]; _0x1178da++) try {
        var _0x1ffabc = _0x19ed71["getChildAt"](_0x1178da);
        if (_0x1ffabc && !0x1 !== _0x1ffabc["visible"]) {
          _0x1904ce = _0x1ffabc;
          break;
        }
      } catch (_0x4e6f1a) {}
    }
    if (!_0x1904ce) return null;
    try {
      var _0x5c9992 = _0x19ed71["parent"] || _0x303ef0,
        _0x2d3894 = _0x1904ce["localToGlobal"](0x0, 0x0),
        _0x4c6846 = _0x5c9992["globalToLocal"](_0x2d3894["x"], _0x2d3894["y"]);
      return {
        width: Number(_0x1904ce["width"] || _0x3e54a3),
        height: Number(_0x1904ce["height"] || _0x590b94),
        localX: Math["round"](_0x4c6846["x"]),
        localTopY: Math["round"](_0x4c6846["y"])
      };
    } catch (_0x150135) {}
    return null;
  }
  function _0x5130f6(_0x817dad) {
    return function (_0x2030a5) {
      var _0x20e6a9 = _0x2030a5 && _0x2030a5["m_btnShow"];
      if (!_0x20e6a9 || !0x1 === _0x20e6a9["visible"]) return null;
      try {
        var _0x3ce7a8 = _0x2030a5,
          _0x2ce884 = _0x20e6a9["localToGlobal"](0x0, 0x0),
          _0x5202ad = _0x3ce7a8["globalToLocal"](_0x2ce884["x"], _0x2ce884["y"]);
        return {
          width: Number(_0x20e6a9["width"] || _0x3e54a3),
          height: Number(_0x20e6a9["height"] || _0x590b94),
          localX: Math["round"](_0x5202ad["x"]),
          localTopY: Math["round"](_0x5202ad["y"])
        };
      } catch (_0x2851c8) {}
      return null;
    }(_0x817dad) || _0x479a76(_0x817dad) || {
      width: _0x3e54a3,
      height: _0x590b94,
      localX: 0x0,
      localTopY: 0x0
    };
  }
  function _0x52d7b2(_0x304119, _0x456105) {
    if (_0x304119 && _0x456105 && "function" == typeof _0x304119["getChildIndex"] && "function" == typeof _0x304119["setChildIndex"]) {
      var _0x42f983 = null;
      if (_0x304119["m_btnShow"] && !0x1 !== _0x304119["m_btnShow"]["visible"] ? _0x42f983 = _0x304119["m_btnShow"] : _0x304119["m_rightBtns"] && (_0x42f983 = _0x304119["m_rightBtns"]), _0x42f983) try {
        var _0xf6ec19 = _0x304119["getChildIndex"](_0x42f983);
        _0xf6ec19 >= 0x0 && _0x304119["setChildIndex"](_0x456105, _0xf6ec19);
      } catch (_0x2721df) {}
    }
  }
  function _0x500a88(_0x17c923, _0x1358f1, _0x15fce7) {
    if (_0x17c923 && _0x1358f1) {
      var _0x241271 = function (_0x57589a) {
          var _0x1afcca = _0x479a76(_0x57589a);
          return _0x1afcca || {
            width: _0x3e54a3,
            height: _0x590b94,
            localX: 0x0,
            localTopY: 0x0
          };
        }(_0x15fce7),
        _0x5e7e12 = _0x5130f6(_0x15fce7),
        _0x1fb0ae = _0x241271["width"],
        _0x53a63c = _0x5e7e12["width"],
        _0x458a03 = _0x5e7e12["height"],
        _0x2e0920 = _0x17672c;
      try {
        _0x2e0920 || (_0x2e0920 = _0x17c923["getChild"](_0x222d8f));
      } catch (_0x548d14) {}
      try {
        var _0x5ec02d = Number(_0x1358f1["width"] || _0x3e54a3),
          _0x2ef2ce = Number(_0x1358f1["height"] || 0x100),
          _0x5c6837 = Math["round"]((_0x1fb0ae - _0x5ec02d) / 0x2);
        _0x1358f1["setPosition"](_0x5c6837, 0xc), _0x2e0920 ? (_0x2e0920["setSize"](_0x53a63c, _0x458a03), _0x2e0920["setPosition"](Math["round"]((_0x1fb0ae - _0x53a63c) / 0x2), 0xc + _0x2ef2ce + 0xc), _0x17c923["setSize"](_0x1fb0ae, 0xc + _0x2ef2ce + 0xc + _0x458a03)) : _0x17c923["setSize"](_0x1fb0ae, 0xc + _0x2ef2ce);
      } catch (_0x8616db) {}
    }
  }
  function _0x51785a(_0x1cc5b7, _0x87c3a5) {
    var _0x11aa0a = _0x26dfdf();
    if (!(_0x1cc5b7 && _0x87c3a5 && _0x11aa0a && _0x24f7a8(_0x11aa0a))) return _0x87c3a5;
    var _0x218667 = null;
    try {
      _0x218667 = _0x1cc5b7["getChild"](_0x219443);
    } catch (_0x2e1007) {}
    if (_0x218667 || ((_0x218667 = new _0x11aa0a["GComponent"]())["name"] = _0x219443, _0x1cc5b7["addChild"](_0x218667)), _0x87c3a5["parent"] !== _0x218667) try {
      _0x87c3a5["removeFromParent"](), _0x218667["addChildAt"](_0x87c3a5, 0x0);
    } catch (_0x1b1128) {}
    return _0x87c3a5["name"] = _0xd329a9, function (_0x28385b, _0x1c3a0a) {
      if (!_0x1c3a0a) return null;
      var _0x35981d = null;
      try {
        _0x35981d = _0x1c3a0a["getChild"](_0x222d8f);
      } catch (_0x19c27a) {}
      if (!_0x35981d) {
        var _0x26618c = _0x28385b && _0x28385b["m_btnShow"] && !0x1 !== _0x28385b["m_btnShow"]["visible"] ? _0x28385b["m_btnShow"] : null;
        if (!_0x26618c && _0x28385b && _0x28385b["m_rightBtns"] && (_0x26618c = _0x28385b["m_rightBtns"]["getChild"]("btnHelp")), _0x26618c && "function" == typeof _0x26618c["clone"]) try {
          _0x35981d = _0x26618c["clone"]();
        } catch (_0x588581) {}
        if (!_0x35981d && _0x26618c && _0x26618c["resourceURL"]) try {
          _0x35981d = _0x26dfdf()["UIPackage"]["createObjectFromURL"](_0x26618c["resourceURL"]);
        } catch (_0x3b100b) {}
        _0x35981d && (_0x35981d["name"] = _0x222d8f, _0x1c3a0a["addChild"](_0x35981d));
      }
      if (_0x35981d) {
        var _0x1b2e11 = _0x5130f6(_0x28385b);
        try {
          _0x35981d["setSize"](_0x1b2e11["width"], _0x1b2e11["height"]);
        } catch (_0x238a1b) {}
        !function (_0x1bca53) {
          if (_0x1bca53) try {
            if (void 0x0 !== _0x1bca53["title"] && (_0x1bca53["title"] = "\u6062\u590d"), _0x1bca53["getChild"]) {
              var _0x477ca7 = _0x1bca53["getChild"]("title");
              _0x477ca7 && (_0x477ca7["text"] = "\u6062\u590d");
            }
            _0x1bca53["m_title"] && (_0x1bca53["m_title"]["text"] = "\u6062\u590d"), _0x1bca53["m_redPoint"] && (_0x1bca53["m_redPoint"]["visible"] = !0x1);
          } catch (_0x242858) {}
        }(_0x35981d), _0x35981d["visible"] = !0x0, _0x35981d["alpha"] = 0x1, _0x35981d["touchable"] = !0x0;
      }
      _0x17672c = _0x35981d;
    }(_0x1cc5b7, _0x218667), _0x500a88(_0x218667, _0x87c3a5, _0x1cc5b7), _0x218667;
  }
  function _0xfe71c7() {
    var _0x130150 = _0x17672c;
    if (_0x130150) try {
      "function" == typeof _0x130150["clearClick"] && _0x130150["clearClick"](), "function" == typeof _0x130150["onClick"] && _0x130150["onClick"](function () {
        _0x432ec6();
      });
    } catch (_0x40e592) {}
  }
  function _0x32a8c1() {
    if (_0x24f7a8()) {
      var _0x403828 = _0x195066(),
        _0x1236c0 = _0x403828 && _0x403828["ui"],
        _0xd7e7f2 = _0x26dfdf();
      if (_0x1236c0) try {
        var _0x8c271 = _0x1236c0["getChild"](_0x219443);
        _0x8c271 && !_0x8c271["getChild"](_0xd329a9) && ("function" == typeof _0x8c271["dispose"] ? _0x8c271["dispose"]() : "function" == typeof _0x8c271["removeFromParent"] && _0x8c271["removeFromParent"]());
      } catch (_0x711a7d) {}
      if (_0xd7e7f2) {
        var _0x524f0f = _0x367f29(_0xd7e7f2);
        if (_0x524f0f) try {
          var _0x3aa65d = _0x524f0f["getChild"](_0xd329a9);
          _0x3aa65d && (_0x1236c0 && _0x3aa65d["m_slider"] ? _0x396b6d(_0x1236c0, _0x3aa65d) : "function" == typeof _0x3aa65d["dispose"] ? _0x3aa65d["dispose"]() : "function" == typeof _0x3aa65d["removeFromParent"] && _0x3aa65d["removeFromParent"]());
        } catch (_0xb02e71) {}
      }
      try {
        var _0x5d5882 = document["getElementById"]("salt-field-view-scale");
        _0x5d5882 && _0x5d5882["parentNode"] && _0x5d5882["parentNode"]["removeChild"](_0x5d5882);
      } catch (_0x3327a9) {}
    }
  }
  function _0x396b6d(_0x41f713, _0x2a9965) {
    return _0x41f713 && _0x2a9965 ? (_0x591822(_0x2a9965), _0x39f722(_0x41f713, _0x2a9965)) : _0x2a9965;
  }
  function _0x39f722(_0x44a173, _0x2e8ce) {
    if (!_0x44a173 || !_0x2e8ce) return _0x2e8ce;
    try {
      var _0x467fe7 = _0x51785a(_0x44a173, _0x2e8ce);
      _0x467fe7["visible"] = !0x0, _0x467fe7["alpha"] = 0x1, _0x467fe7["touchable"] = !0x0, "function" == typeof _0x44a173["setChildIndex"] && _0x52d7b2(_0x44a173, _0x467fe7);
    } catch (_0x556381) {}
    return _0x3cc9bd(_0x2e8ce, !0x0), _0x500a88(_0x5a83d2(_0x2e8ce), _0x2e8ce, _0x44a173), _0x4dfdc5(_0x44a173, _0x5a83d2(_0x2e8ce)), _0xfe71c7(), _0x2e8ce;
  }
  function _0x2803b9(_0x3a0d3e) {
    if (_0x3a0d3e) try {
      _0x3a0d3e["relations"] && "function" == typeof _0x3a0d3e["relations"]["clearAll"] && _0x3a0d3e["relations"]["clearAll"]();
    } catch (_0x382cc6) {}
  }
  function _0x22e3fb(_0x1b793c, _0x9506aa, _0x438b26, _0x4209e1) {
    if (!_0x1b793c) return !0x1;
    try {
      var _0x403826 = _0x1b793c["getChild"] ? _0x1b793c["getChild"]("bar_v") : null,
        _0x340419 = _0x1b793c["getChild"] ? _0x1b793c["getChild"]("bar") : null,
        _0x554102 = _0x1b793c["getChild"] ? _0x1b793c["getChild"]("grip") : null,
        _0x473dae = Math["max"](0x50, _0x4209e1),
        _0x1e1e3d = Math["max"](0x24, _0x9506aa - 0x6),
        _0x57dcdc = Math["round"](_0x9506aa / 0x2) + 0x8,
        _0x156691 = _0x438b26;
      if (_0x340419 && (_0x340419["visible"] = !0x1, _0x340419["alpha"] = 0x0, _0x340419["touchable"] = !0x1), _0x403826 && (_0x403826["visible"] = !0x1, _0x403826["alpha"] = 0x0, _0x403826["touchable"] = !0x1), _0x403826) {
        try {
          _0x1b793c["kn"] = null, _0x1b793c["Gh"] = _0x403826;
        } catch (_0x25fbca) {}
        _0x1b793c["rotation"] = 0x0, _0x1b793c["setScale"](0x1, 0x1);
        try {
          _0x1b793c["setPivot"](0.5, 0x0, !0x0);
        } catch (_0x70d2ad) {
          try {
            _0x1b793c["pivotX"] = 0.5, _0x1b793c["pivotY"] = 0x0;
          } catch (_0x1dcb6a) {}
        }
        _0x1b793c["setSize"](_0x1e1e3d, _0x473dae), _0x1b793c["setPosition"](_0x57dcdc, _0x438b26);
        try {
          _0x1b793c["Th"] = !0x0;
        } catch (_0x299686) {}
      } else {
        try {
          _0x1b793c["kn"] = _0x340419 || null, _0x1b793c["Gh"] = null;
        } catch (_0x2368d2) {}
        _0x1b793c["setSize"](Math["max"](0x50, _0x473dae - 0x6), _0x1e1e3d);
        try {
          _0x1b793c["setPivot"](0.5, 0.5, !0x0);
        } catch (_0x40490b) {
          try {
            _0x1b793c["pivotX"] = 0.5, _0x1b793c["pivotY"] = 0.5;
          } catch (_0xba284) {}
        }
        _0x1b793c["rotation"] = -0x5a;
        try {
          _0x1b793c["Th"] = !0x1;
        } catch (_0x3de291) {}
        _0x1b793c["setScale"](0x1, 0x1), _0x156691 = Math["round"](_0x438b26 + _0x473dae / 0x2), _0x1b793c["setPosition"](_0x57dcdc, _0x156691);
      }
      return _0xddaa6c(_0x1b793c), _0x554102 && (_0x554102["rotation"] = 0x0, _0x554102["setScale"](0x1, 0x1), _0x554102["visible"] = !0x0, _0x554102["touchable"] = !0x0), "function" == typeof _0x1b793c["handleSizeChanged"] && _0x1b793c["handleSizeChanged"](), "function" == typeof _0x1b793c["update"] && _0x1b793c["update"](), _0x3cb589(_0x1b793c), !0x0;
    } catch (_0x19d84c) {}
    return !0x1;
  }
  function _0x16f6b9(_0x1b539b) {
    return !!_0x1b539b && function (_0x1f7192) {
      if (!_0x1f7192) return !0x1;
      var _0x3e5e52 = _0x1f7192["parent"],
        _0x5d5c5f = _0x3e5e52 ? Number(_0x3e5e52["width"] || 0x38) : 0x38,
        _0x2012fb = _0x3e5e52 && _0x3e5e52["m_btnAdd"] ? Number(_0x3e5e52["m_btnAdd"]["height"] || 0x38) : 0x38,
        _0x42e103 = _0x3e5e52 ? Math["max"](0x64, Number(_0x3e5e52["height"] || 0x0) - 0x2 * _0x2012fb) : 0x98;
      return _0x22e3fb(_0x1f7192, _0x5d5c5f, _0x2012fb, _0x42e103);
    }(_0x1b539b);
  }
  function _0x4dfdc5(_0xf763ea, _0x5b0b95) {
    if (_0xf763ea && _0x5b0b95) {
      var _0x4c8210 = _0x479a76(_0xf763ea);
      if (_0x4c8210) {
        var _0x40d494 = function (_0x15a6d1, _0x5daf1a) {
            var _0x640d41 = _0x15a6d1;
            try {
              if (_0x15a6d1["m_btnShow"] && !0x1 !== _0x15a6d1["m_btnShow"]["visible"]) {
                var _0x375191 = _0x15a6d1["m_btnShow"]["localToGlobal"](0x0, 0x0);
                return Math["round"](_0x640d41["globalToLocal"](_0x375191["x"], _0x375191["y"])["y"]);
              }
            } catch (_0x187340) {}
            try {
              if (_0x15a6d1["m_rightBtns"]) {
                var _0x3ae37e = _0x15a6d1["m_rightBtns"]["localToGlobal"](0x0, 0x0);
                return Math["round"](_0x640d41["globalToLocal"](_0x3ae37e["x"], _0x3ae37e["y"])["y"]);
              }
            } catch (_0xdca928) {}
            return _0x5daf1a ? _0x5daf1a["localTopY"] : 0x0;
          }(_0xf763ea, _0x4c8210),
          _0x3b2a88 = _0x4c8210["localX"],
          _0x375c11 = _0x40d494 - _0x5b0b95["height"] - 0x6 + 0x0;
        _0x375c11 < 0x48 && (_0x375c11 = 0x48), _0x5b0b95["setPosition"](Math["round"](_0x3b2a88), Math["round"](_0x375c11));
      } else {
        var _0xadfdf1 = function (_0x23ee2c) {
          if (!_0x23ee2c) return null;
          for (var _0x11ef68 = [_0x23ee2c["m_btnShow"], _0x23ee2c["m_rightBtns"]], _0x27f373 = 0x1 / 0x0, _0x229e6e = 0x0, _0x14e98e = !0x1, _0x1d5033 = 0x0; _0x1d5033 < _0x11ef68["length"]; _0x1d5033++) {
            var _0x2378af = _0x11ef68[_0x1d5033];
            if (_0x2378af && !0x1 !== _0x2378af["visible"]) try {
              var _0x2f2809 = _0x2378af["localToGlobal"](_0x2378af["width"] / 0x2, 0x0);
              _0x2f2809["y"] < _0x27f373 && (_0x27f373 = _0x2f2809["y"], _0x229e6e = _0x2f2809["x"], _0x14e98e = !0x0);
            } catch (_0x3ba1c7) {}
          }
          if (!_0x14e98e && _0x23ee2c["m_rightBtns"]) try {
            var _0x4587c9 = _0x23ee2c["m_rightBtns"]["localToGlobal"](_0x23ee2c["m_rightBtns"]["width"] / 0x2, 0x0);
            _0x27f373 = _0x4587c9["y"], _0x229e6e = _0x4587c9["x"], _0x14e98e = !0x0;
          } catch (_0x5392ef) {}
          return _0x14e98e ? {
            x: _0x229e6e,
            y: _0x27f373
          } : null;
        }(_0xf763ea);
        if (!_0xadfdf1) return;
        var _0x4f9986 = _0x26dfdf(),
          _0x11977b = _0x4f9986 && _0x367f29(_0x4f9986),
          _0x357646 = _0x5b0b95["parent"] || _0xf763ea,
          _0x1e5da3 = _0xadfdf1["x"] - _0x5b0b95["width"] / 0x2,
          _0x3a799c = _0xadfdf1["y"] - _0x5b0b95["height"] - 0x6 + 0x0;
        _0x11977b && (_0x3a799c = Math["max"](0x48, _0x3a799c));
        var _0x64f5e4 = _0x357646["globalToLocal"](_0x1e5da3, _0x3a799c);
        _0x5b0b95["setPosition"](Math["round"](_0x64f5e4["x"]), Math["round"](_0x64f5e4["y"]));
      }
    }
  }
  function _0x3cc9bd(_0x1e91e6, _0x14c00f) {
    if (_0x1e91e6 && _0x1e91e6["m_slider"] && (_0x14c00f || function (_0x1cd8c0) {
      return !!(_0x1cd8c0 && _0x1cd8c0["m_btnAdd"] && _0x1cd8c0["m_btnSub"] && _0x1cd8c0["m_slider"]) && (_0x1cd8c0["width"] > 1.15 * _0x1cd8c0["height"] || Math["abs"](_0x1cd8c0["m_btnAdd"]["y"] - _0x1cd8c0["m_btnSub"]["y"]) < 0x8);
    }(_0x1e91e6))) {
      var _0x4849d6 = function (_0x5ccdae) {
          return _0x591822(_0x5ccdae), {
            btnW: _0x3e54a3,
            btnH: _0x590b94,
            slotH: 0x90
          };
        }(_0x1e91e6),
        _0x4721e9 = _0x1e91e6["m_btnAdd"],
        _0x4675ba = _0x1e91e6["m_btnSub"],
        _0x14869d = _0x1e91e6["m_slider"],
        _0x3b40f9 = _0x4849d6["btnW"],
        _0x5eb3b7 = _0x4849d6["btnH"],
        _0x3dd3d3 = _0x4849d6["slotH"],
        _0x1f3402 = _0x5eb3b7 + _0x3dd3d3 + _0x5eb3b7;
      try {
        _0x2803b9(_0x1e91e6), _0x2803b9(_0x4721e9), _0x2803b9(_0x4675ba), _0x2803b9(_0x14869d), _0x1e91e6["setSize"](_0x3b40f9, _0x1f3402), _0x1e91e6["rotation"] = 0x0, _0x1e91e6["setScale"](0x1, 0x1), _0x4721e9 && (_0x4721e9["setSize"](_0x3b40f9, _0x5eb3b7), _0x4721e9["setPosition"](0x0, 0x0), _0x4721e9["rotation"] = 0x0, _0x4721e9["visible"] = !0x0), _0x4675ba && (_0x4675ba["setSize"](_0x3b40f9, _0x5eb3b7), _0x4675ba["setPosition"](0x0, _0x5eb3b7 + _0x3dd3d3), _0x4675ba["rotation"] = 0x0, _0x4675ba["visible"] = !0x0), _0x22e3fb(_0x14869d, _0x3b40f9, _0x5eb3b7, _0x3dd3d3);
      } catch (_0x16ea73) {}
    }
  }
  function _0x1a047b() {
    if (_0x24f7a8() && _0x1a9c3f) {
      var _0x2a366d = _0x195066();
      if (_0x2a366d && _0x2a366d["ui"] && _0x4257ad(_0x2a366d)) {
        var _0x5e9a3e = _0x2a366d["ui"];
        if (_0x5e9a3e["m_rightBtns"]) try {
          var _0x2f2398 = _0x51785a(_0x5e9a3e, _0x1a9c3f);
          _0x2f2398["parent"] !== _0x5e9a3e && _0x39f722(_0x5e9a3e, _0x1a9c3f), _0x3cc9bd(_0x1a9c3f, !0x0), _0x500a88(_0x2f2398, _0x1a9c3f, _0x5e9a3e), _0x4dfdc5(_0x5e9a3e, _0x2f2398), _0x1a9c3f["visible"] = !0x0, _0x1a9c3f["alpha"] = 0x1, _0x1a9c3f["touchable"] = !0x0, _0x2f2398["visible"] = !0x0, _0x2f2398["alpha"] = 0x1, _0x2f2398["touchable"] = !0x0, _0x1a9c3f["m_slider"] && _0x16f6b9(_0x1a9c3f["m_slider"]), _0xfe71c7(), _0x52d7b2(_0x5e9a3e, _0x2f2398);
        } catch (_0x74736) {}
      } else {
        try {
          _0x1a9c3f["visible"] = !0x1;
        } catch (_0xd802e9) {}
        try {
          var _0x5ac448 = _0x5a83d2(_0x1a9c3f);
          _0x5ac448 && _0x5ac448 !== _0x1a9c3f && (_0x5ac448["visible"] = !0x1);
        } catch (_0x279fcd) {}
      }
    }
  }
  function _0x3879bf() {
    var _0x44d94c = _0x195066();
    if (!_0x44d94c || !_0x44d94c["ui"] || !_0x4257ad(_0x44d94c)) return null;
    var _0x1a56a3 = _0x44d94c["ui"],
      _0x23817c = null;
    try {
      _0x23817c = _0x1a56a3["getChild"](_0xd329a9);
    } catch (_0x161fbf) {}
    return _0x23817c && _0x23817c["m_slider"] || _0x1a56a3["m_OBComp"] && _0x1a56a3["m_OBComp"]["m_scaleComp"] && _0x1a56a3["m_OBComp"]["m_scaleComp"]["m_slider"] && (_0x23817c = _0x1a56a3["m_OBComp"]["m_scaleComp"]), _0x23817c && _0x23817c["m_slider"] || (_0x23817c = function () {
      var _0x15b0ca = _0x26dfdf();
      if (!_0x15b0ca || !_0x24f7a8(_0x15b0ca)) return null;
      var _0x10f317 = null;
      try {
        var _0x3c522d = _0x3cbc8d("UI_LeagueWarScaleComp"),
          _0x46cb3f = _0x3c522d && (_0x3c522d["default"] || _0x3c522d);
        _0x46cb3f && "function" == typeof _0x46cb3f["createInstance"] && (_0x10f317 = _0x46cb3f["createInstance"]());
      } catch (_0xb51417) {}
      if (!_0x10f317) try {
        _0x10f317 = _0x15b0ca["UIPackage"]["createObject"]("ui_legionWar", "LeagueWarScaleComp");
      } catch (_0x234434) {}
      return _0x10f317 && _0x10f317["m_slider"] ? _0x10f317 : null;
    }()), _0x23817c ? _0x396b6d(_0x1a56a3, _0x23817c) : null;
  }
  function _0x1c2ba6(_0x259a8b) {
    if (!_0x24f7a8()) return !0x1;
    var _0x20def8 = _0x3cbc8d("index-ui"),
      _0x336664 = _0x3cbc8d("MapScene");
    if (!_0x20def8 || !_0x336664 || !_0x336664["MapScene"]) return !0x1;
    var _0x45047e = null;
    try {
      _0x45047e = _0x20def8["GET_PROXY"](_0x336664["MapScene"]);
    } catch (_0x321069) {
      return !0x1;
    }
    if (!_0x45047e || !_0x4257ad(_0x45047e)) return !0x1;
    var _0x339ec2 = _0x3cbc8d("LegionWarSignal"),
      _0x5a665a = _0x339ec2 && _0x339ec2["LegionWarSignal"] && _0x339ec2["LegionWarSignal"]["MapScaleUpdate"];
    if (!_0x5a665a) return !0x1;
    try {
      if ("function" == typeof _0x5a665a["emit"]) return _0x5a665a["emit"](_0x259a8b), !0x0;
      if ("function" == typeof _0x5a665a["dispatch"]) return _0x5a665a["dispatch"](_0x259a8b), !0x0;
    } catch (_0x54a407) {}
    return !0x1;
  }
  function _0x3547fe() {
    if (!_0x24f7a8()) return !0x1;
    if (_0x32a8c1(), !_0x402255() && !_0x195066()) return !0x1;
    var _0x47ef14 = _0x3879bf();
    return !!_0x47ef14 && (_0x1a9c3f === _0x47ef14 && _0x115429 ? (_0x1a047b(), _0x3e6160(), !0x0) : function (_0x2c61cc) {
      var _0x2ffc88 = _0x26dfdf();
      if (!_0x2c61cc || !_0x2ffc88 || !_0x2c61cc["m_slider"]) return !0x1;
      var _0x1bb840 = _0x2c61cc["m_slider"],
        _0xe6d200 = _0x2c61cc["m_btnAdd"],
        _0xebb1e6 = _0x2c61cc["m_btnSub"];
      _0x1a9c3f = _0x2c61cc, _0x4c7029 = _0x1bb840, _0x1bb840["min"] = 0x1, _0x1bb840["max"] = _0x4997b8, _0x1bb840["value"] = _0x1f2768(_0x10265c), _0x16f6b9(_0x1bb840), _0x1bb840["off"](_0x2ffc88["Event"]["STATUS_CHANGED"], _0x542316, null), _0x1bb840["on"](_0x2ffc88["Event"]["STATUS_CHANGED"], _0x542316, null), _0xe6d200 && "function" == typeof _0xe6d200["clearClick"] && _0xe6d200["clearClick"](), _0xebb1e6 && "function" == typeof _0xebb1e6["clearClick"] && _0xebb1e6["clearClick"](), _0xe6d200 && "function" == typeof _0xe6d200["onClick"] && _0xe6d200["onClick"](function () {
        _0x45fe09(_0x10265c + _0x4a597d);
      }), _0xebb1e6 && "function" == typeof _0xebb1e6["onClick"] && _0xebb1e6["onClick"](function () {
        _0x45fe09(_0x10265c - _0x4a597d);
      }), _0x115429 = !0x0;
      var _0x1f70b3 = _0x195066(),
        _0x2e1ee2 = _0x1f70b3 && _0x1f70b3["ui"];
      return _0x3cc9bd(_0x2c61cc, !(!_0x2e1ee2 || _0x5a83d2(_0x2c61cc)["parent"] !== _0x2e1ee2)), _0x500a88(_0x5a83d2(_0x2c61cc), _0x2c61cc, _0x2e1ee2), _0xfe71c7(), _0x1a047b(), _0x3e6160(), !0x0;
    }(_0x47ef14));
  }
  function _0x4c9d76() {
    var _0x57c5ce = _0x3547fe();
    return setTimeout(function () {
      _0x1a047b(), _0x3e6160();
    }, 0x78), setTimeout(_0x1a047b, 0x258), _0x57c5ce;
  }
  function _0x1a0507() {
    _0x10c35 || (_0x10c35 = setTimeout(function () {
      _0x10c35 = null, _0x218fcd();
    }, 0x12c));
  }
  function _0x402255() {
    if (!_0x24f7a8()) return !0x1;
    var _0x1ff2eb = _0x3cbc8d("index-ui");
    if (!_0x1ff2eb || "function" != typeof _0x1ff2eb["GET_PROXY"]) return !0x1;
    try {
      var _0x5e19ae = _0x3cbc8d("LPMapPanel");
      if (_0x5e19ae && _0x5e19ae["LPMapPanel"]) {
        var _0x179729 = _0x1ff2eb["GET_PROXY"](_0x5e19ae["LPMapPanel"]);
        if (_0x179729 && _0x179729["ui"] && _0x179729["ui"]["m_map"] && _0x4257ad(_0x179729)) return !0x0;
      }
    } catch (_0x3535eb) {}
    try {
      var _0x449c00 = _0x3cbc8d("MapScene");
      if (_0x449c00 && _0x449c00["MapScene"]) {
        var _0x35c37a = _0x1ff2eb["GET_PROXY"](_0x449c00["MapScene"]);
        if (_0x35c37a && _0x35c37a["ui"] && _0x35c37a["ui"]["m_map"] && _0x4257ad(_0x35c37a)) return !0x0;
      }
    } catch (_0x1f4965) {}
    return !0x1;
  }
  function _0x50d422(_0x55a4d4, _0x14c360, _0x57bd7e, _0x49d459) {
    if (!_0x24f7a8()) return !0x1;
    null != _0x55a4d4 && _0x55a4d4 > 0x0 || (_0x55a4d4 = _0x10265c), void 0x0 === _0x14c360 && (_0x14c360 = !0x0), _0x49d459 = _0x49d459 || {};
    var _0xa95ee5 = !0x1,
      _0x1ab2d5 = function () {
        var _0x31cef6 = {
          indexUi: null,
          lp: null,
          lpMap: null,
          ms: null,
          msMap: null,
          sm: null
        };
        if (!_0x24f7a8()) return _0x31cef6;
        var _0x5290f8 = Date["now"]();
        if (_0x2ebd7c && _0x5290f8 - _0x135c0a < 0xbb8) return _0x2ebd7c;
        var _0x500f78 = _0x31cef6,
          _0x36d092 = _0x3cbc8d("index-ui");
        if (!_0x36d092 || "function" != typeof _0x36d092["GET_PROXY"]) return _0x2ebd7c = _0x500f78, _0x135c0a = _0x5290f8, _0x500f78;
        _0x500f78["indexUi"] = _0x36d092;
        try {
          var _0x49faee = _0x3cbc8d("LPMapPanel");
          if (_0x49faee && _0x49faee["LPMapPanel"]) {
            var _0x508e83 = _0x36d092["GET_PROXY"](_0x49faee["LPMapPanel"]),
              _0x5ed01e = _0x508e83 && _0x508e83["ui"] && _0x508e83["ui"]["m_map"];
            _0x5ed01e && _0x5ed01e["node"] && _0x4257ad(_0x508e83) && (_0x500f78["lp"] = _0x508e83, _0x500f78["lpMap"] = _0x5ed01e);
          }
        } catch (_0x16ede3) {}
        try {
          var _0x330157 = _0x3cbc8d("MapScene");
          if (_0x330157 && _0x330157["MapScene"]) {
            var _0x49be56 = _0x36d092["GET_PROXY"](_0x330157["MapScene"]),
              _0xd4c2b4 = _0x49be56 && _0x49be56["ui"] && _0x49be56["ui"]["m_map"];
            if (_0xd4c2b4 && _0xd4c2b4["node"] && _0x4257ad(_0x49be56) && (_0x500f78["ms"] = _0x49be56, _0x500f78["msMap"] = _0xd4c2b4, _0x500f78["sm"] = _0x57e239(_0x49be56["sourceMap"]), !_0x500f78["sm"] && _0x49be56["getModule"])) try {
              _0x500f78["sm"] = _0x57e239(_0x49be56["getModule"]()["sourceMap"]);
            } catch (_0x62217d) {}
          }
        } catch (_0xce3f0e) {}
        return _0x2ebd7c = _0x500f78, _0x135c0a = _0x5290f8, _0x500f78;
      }();
    if (!_0x1ab2d5["indexUi"]) return !0x1;
    try {
      if (_0x1ab2d5["lp"] && _0x1ab2d5["lpMap"]) {
        var _0x89fe46 = _0xd2a0fa(_0x1ab2d5["lp"]["_sourceMap"], _0x1ab2d5["lpMap"]);
        _0x89fe46 > 0x0 || (_0x89fe46 = _0x55a4d4), _0x3c2be2(_0x1ab2d5["lpMap"], _0x1ab2d5["lpMap"]["node"], _0x1ab2d5["lp"]["_sourceMap"], _0x89fe46, _0x10265c, _0x1ab2d5["lp"], _0x14c360, _0x57bd7e, _0x49d459), _0x49d459["skipUpdateMap"] || "function" != typeof _0x1ab2d5["lp"]["_updateMap"] || _0x1ab2d5["lp"]["_updateMap"](), _0xa95ee5 = !0x0;
      }
    } catch (_0x5b40f7) {}
    try {
      if (_0x1ab2d5["ms"] && _0x1ab2d5["msMap"]) {
        var _0x316833 = _0xd2a0fa(_0x1ab2d5["sm"], _0x1ab2d5["msMap"]);
        _0x316833 > 0x0 || (_0x316833 = _0x55a4d4), _0x3c2be2(_0x1ab2d5["msMap"], _0x1ab2d5["msMap"]["node"], _0x1ab2d5["sm"], _0x316833, _0x10265c, _0x1ab2d5["ms"], _0x14c360, _0x57bd7e, _0x49d459), _0x49d459["skipUpdateMap"] || "function" != typeof _0x1ab2d5["ms"]["_updateMap"] || _0x1ab2d5["ms"]["_updateMap"](), _0xa95ee5 = !0x0;
      }
    } catch (_0x221abd) {}
    return _0xa95ee5;
  }
  function _0x218fcd() {
    if (_0x3a4e95()) {
      var _0x2b2586,
        _0x31cfb3 = _0x3c7270(),
        _0x2934c9 = _0x3753c7();
      for (_0x31cfb3 && (_0x1460be(_0x31cfb3), _0x315f5a(_0x31cfb3), _0xf7332d(_0x31cfb3)), _0x2934c9 && _0x2934c9["sourceMap"] && (_0x1460be(_0x2934c9["sourceMap"]), _0x315f5a(_0x2934c9["sourceMap"]), _0xf7332d(_0x2934c9["sourceMap"])), _0x2b2586 = 0x0; _0x2b2586 < _0x256909["length"]; _0x2b2586++) _0x315f5a(_0x256909[_0x2b2586]), _0xf7332d(_0x256909[_0x2b2586]);
      !function () {
        var _0x4fb636 = _0x3cbc8d("LPSignal"),
          _0x2b7e5a = _0x4fb636 && _0x4fb636["LPSignal"] && _0x4fb636["LPSignal"]["RefreshLight"];
        if (_0x2b7e5a && "function" == typeof _0x2b7e5a["dispatch"]) try {
          _0x2b7e5a["dispatch"]();
        } catch (_0x144225) {}
      }();
    }
  }
  function _0x331902(_0x567e9d, _0x5afe39, _0x381596) {
    return Math["max"](_0x5afe39, Math["min"](_0x381596, _0x567e9d));
  }
  function _0x5ed23a(_0x44b8ca) {
    return _0x331902(Math["round"](_0x44b8ca / _0x4a597d) * _0x4a597d, _0x24f3f0, _0x527d0b);
  }
  function _0x516ad5() {
    try {
      localStorage["setItem"](_0x1769ac, String(_0x10265c));
    } catch (_0x12e845) {}
  }
  function _0x3dd15c(_0x15a1b5) {
    var _0x3e4b6b = _0x15a1b5 ? function (_0x55ba95) {
      if (!_0x55ba95 || !_0x55ba95["mapContainer"]) return 0x0;
      try {
        var _0x1a9fe2 = (_0x40520c() || window)["fgui"] || window["fgui"];
        if (!_0x1a9fe2) return 0x0;
        var _0x5b575c = _0x367f29(_0x1a9fe2);
        if (!_0x5b575c) return 0x0;
        var _0x1c96f5 = _0x55ba95["mapContainer"],
          _0xf2ca5d = _0x55ba95["map"] || _0x55ba95,
          _0x2e16eb = _0x55ba95["pos2vec"];
        if ("function" != typeof _0x2e16eb && _0xf2ca5d && "function" == typeof _0xf2ca5d["pos2vec"] && (_0x2e16eb = _0xf2ca5d["pos2vec"]["bind"](_0xf2ca5d)), "function" != typeof _0x2e16eb) return 0x0;
        var _0x2255e7 = _0x1c96f5["globalToLocal"](0x0, 0x0),
          _0x1bcfb2 = _0x1c96f5["globalToLocal"](_0x5b575c["width"], _0x5b575c["height"]),
          _0x5a6b5e = _0x2e16eb(_0x2255e7["x"], _0x2255e7["y"]),
          _0x1840c6 = _0x2e16eb(_0x1bcfb2["x"], _0x1bcfb2["y"]);
        return Math["max"](Math["abs"](_0x1840c6["x"] - _0x5a6b5e["x"]) + 0x1, Math["abs"](_0x1840c6["y"] - _0x5a6b5e["y"]) + 0x1);
      } catch (_0x16a78c) {
        return 0x0;
      }
    }(_0x15a1b5) : 0x0;
    return _0x331902(_0x3e4b6b > 0x0 ? Math["round"](0.12 * _0x3e4b6b + 0x2) : Math["round"](0x6 / Math["max"](_0x10265c, _0x24f3f0)), 0x2, 0x32);
  }
  function _0x12369a(_0x15a53c) {
    _0x34755a = !!_0x15a53c, function () {
      try {
        localStorage["setItem"](_0x274086, _0x34755a ? "1" : "0");
      } catch (_0x28ca95) {}
    }(), _0x1a047b();
  }
  function _0x461b35() {
    _0x12369a(!_0x34755a);
  }
  function _0x40520c(_0x20cf17) {
    if (!_0x20cf17 && _0x1a6bae && "function" == typeof _0x1a6bae["__require"]) return _0x1a6bae;
    if ("function" == typeof window["__require"]) return _0x1a6bae = window;
    try {
      for (var _0x3cdcfd = document["querySelectorAll"]("iframe"), _0xc7960b = 0x0; _0xc7960b < _0x3cdcfd["length"]; _0xc7960b++) {
        var _0x4d6df8 = _0x3cdcfd[_0xc7960b]["contentWindow"];
        if (_0x4d6df8 && "function" == typeof _0x4d6df8["__require"]) return _0x1a6bae = _0x4d6df8;
      }
    } catch (_0x1b68ed) {}
    return _0x1a6bae = null, null;
  }
  function _0x57e239(_0x10e38e) {
    return _0x10e38e ? "function" == typeof _0x10e38e["updateMap"] && null != _0x10e38e["CACHE"] ? _0x10e38e : _0x10e38e["sourceMap"] || _0x10e38e["_sourceMap"] || null : null;
  }
  function _0x3cbc8d(_0xda8910) {
    var _0x32d3f0 = _0x40520c();
    if (!_0x32d3f0) return null;
    try {
      return _0x32d3f0["__require"](_0xda8910);
    } catch (_0x10774d) {
      return null;
    }
  }
  function _0x1460be(_0x4be92f) {
    _0x4be92f && (_0x256909["indexOf"](_0x4be92f) < 0x0 && _0x256909["push"](_0x4be92f), _0x4be92f["__saltFieldViewCache"] = _0x3dd15c(_0x4be92f), _0x4be92f["__saltFieldViewScale"] = _0x10265c);
  }
  function _0x5d3137(_0x3b74b4) {
    _0x3b74b4 && _0x46f413["indexOf"](_0x3b74b4) < 0x0 && _0x46f413["push"](_0x3b74b4);
  }
  function _0x315f5a(_0x209a4c) {
    if (_0x209a4c) {
      var _0x278300 = _0x3dd15c(_0x209a4c);
      _0x209a4c["CACHE"] = _0x278300, _0x209a4c["__saltFieldViewCache"] = _0x278300;
    }
  }
  function _0xf7332d(_0x2fc542) {
    try {
      if (!_0x2fc542) return;
      var _0x4e5676 = _0x2fc542["_layerMap"];
      if (!_0x4e5676 || "function" != typeof _0x4e5676["forEach"]) return;
      _0x4e5676["forEach"](function (_0x102f2a) {
        if (_0x102f2a) for (var _0x185483 = 0x0; _0x185483 < _0x102f2a["length"]; _0x185483++) {
          var _0x44e3e7 = _0x102f2a[_0x185483];
          if (_0x44e3e7) for (var _0x3c82e5 = 0x0; _0x3c82e5 < _0x44e3e7["length"]; _0x3c82e5++) {
            var _0x4bf1d5 = _0x44e3e7[_0x3c82e5],
              _0xb31d6a = _0x4bf1d5 && (_0x4bf1d5["inst"] && _0x4bf1d5["inst"]["ui"] || _0x4bf1d5["comp"]);
            _0xb31d6a && (_0xb31d6a["alpha"] = 0x1);
          }
        }
      });
    } catch (_0x4b80b6) {}
  }
  function _0x2e2dd5(_0x5b1c52) {
    var _0xf2898f = _0x3cbc8d("Configs"),
      _0x466bfe = _0x3cbc8d("ModuleManager"),
      _0x3364c4 = _0xf2898f && _0xf2898f["ModuleType"] && _0xf2898f["ModuleType"][_0x5b1c52],
      _0x559b3d = _0x466bfe && _0x466bfe["GET_MODULE"];
    return null != _0x3364c4 && "function" == typeof _0x559b3d ? _0x559b3d(_0x3364c4) : null;
  }
  function _0x3c7270() {
    var _0x30be3a = _0x2e2dd5("LEGION_PAYLOAD");
    return _0x30be3a && (_0x30be3a["sourceMap"] || _0x30be3a["lPWarData"] && _0x30be3a["lPWarData"]["sourceMap"]) || null;
  }
  function _0x3753c7() {
    if (!_0x24f7a8()) return null;
    var _0x247f4a = _0x2e2dd5("LEGION_WAR"),
      _0x1852a9 = _0x57e239(_0x247f4a && _0x247f4a["sourceMap"]);
    if (!_0x247f4a || !_0x1852a9) return _0x54da1d["legionWar"] = "no module/sourceMap", null;
    _0x1460be(_0x1852a9);
    var _0x18f801 = null,
      _0x1043e2 = _0x3cbc8d("index-ui"),
      _0x15b843 = _0x3cbc8d("MapScene");
    try {
      _0x1043e2 && "function" == typeof _0x1043e2["GET_PROXY"] && _0x15b843 && _0x15b843["MapScene"] && (_0x18f801 = _0x1043e2["GET_PROXY"](_0x15b843["MapScene"]));
    } catch (_0x68976b) {}
    return _0x18f801 && _0x5d3137(_0x18f801), _0x18f801 && _0x18f801["ui"] && _0x18f801["ui"]["m_map"] && (_0x1852a9["mapContainer"] = _0x18f801["ui"]["m_map"]), {
      module: _0x247f4a,
      sourceMap: _0x1852a9,
      mapScene: _0x18f801
    };
  }
  function _0x45fe09(_0x4a908f, _0x26deaf) {
    if ((_0x26deaf = _0x26deaf || {})["continuous"]) return _0x2a7354(_0x4a908f, _0x26deaf["focusPoint"]), _0x1ed983 = _0x26deaf["focusPoint"], _0x8bb147 && clearTimeout(_0x8bb147), _0x8bb147 = setTimeout(function () {
      _0x8bb147 = 0x0, _0x4b84e7(_0x1ed983);
    }, 0x78), _0x10265c;
    var _0x1ed983,
      _0x1373c2 = _0x10265c;
    _0x10265c = _0x331902(_0x5ed23a(_0x4a908f), _0x24f3f0, _0x527d0b), _0x516ad5(), _0x3e6160();
    var _0x28e8d3 = _0x50d422(_0x1373c2, !0x1 !== _0x26deaf["focusViewport"], _0x26deaf["focusPoint"]);
    return _0x28e8d3 || (_0x28e8d3 = _0x1c2ba6(_0x10265c)), _0x3a4e95() && _0x218fcd(), _0x58d09f(_0x28e8d3), _0x54da1d["scale"] = _0x10265c, _0x10265c;
  }
  function _0x432ec6() {
    _0x45fe09(_0x15effa);
  }
  function _0x150adc() {
    var _0x18c86e = _0x50d422();
    return _0x218fcd(), _0x54da1d["scale"] = _0x10265c, _0x58d09f(_0x18c86e), _0x18c86e;
  }
  function _0x113cac() {
    var _0x4d5fc8 = _0x3753c7(),
      _0x13cd2a = _0x3c7270(),
      _0x63a841 = _0x4d5fc8 && _0x4d5fc8["sourceMap"] || _0x13cd2a;
    if (!_0x63a841) return null;
    var _0x51b058 = function (_0xbd9085) {
      var _0x489387 = (_0x40520c() || window)["fgui"] || window["fgui"];
      if (!_0xbd9085 || !_0x489387) return _0x24f3f0;
      var _0x334f10 = _0x367f29(_0x489387);
      if (!_0x334f10) return _0x24f3f0;
      var _0x289cc3 = _0xbd9085["map"],
        _0x436c66 = _0x289cc3 && (_0x289cc3["width"] || _0xbd9085["width"]) || _0xbd9085["width"] || 0x0,
        _0x1ad52f = _0x289cc3 && (_0x289cc3["height"] || _0xbd9085["height"]) || _0xbd9085["height"] || 0x0;
      return _0x436c66 > 0x0 && _0x1ad52f > 0x0 ? _0x331902(_0x5ed23a(0.96 * Math["min"](_0x334f10["width"] / _0x436c66, _0x334f10["height"] / _0x1ad52f)), _0x24f3f0, _0x527d0b) : _0x24f3f0;
    }(_0x63a841);
    return _0x45fe09(_0x51b058, {
      focusViewport: !0x1
    }), _0x51b058;
  }
  function _0x4cb7bd(_0x5e1f6d) {
    if (_0x5e1f6d && !_0x5e1f6d["__saltFieldViewPatched"]) {
      try {
        Object["defineProperty"](_0x5e1f6d, "isView", {
          get: function () {
            return !0x0;
          },
          configurable: !0x0
        });
      } catch (_0x2c5677) {}
      if ("function" == typeof _0x5e1f6d["refreshLight"] && !_0x5e1f6d["__saltFieldViewRefreshWrapped"]) {
        var _0x49879b = _0x5e1f6d["refreshLight"];
        _0x5e1f6d["refreshLight"] = function () {
          return this["_isView"] = !0x0, _0x49879b["apply"](this, arguments);
        }, _0x5e1f6d["__saltFieldViewRefreshWrapped"] = !0x0;
      }
      _0x5e1f6d["__saltFieldViewPatched"] = !0x0;
    }
  }
  function _0xa35b5(_0x25f9e9) {
    if (_0x25f9e9 && !_0x25f9e9["__saltFieldViewPatched"]) {
      _0x25f9e9["getIsView"] = function () {
        return !0x0;
      };
      try {
        Object["defineProperty"](_0x25f9e9, "mapScale", {
          get: function () {
            return null != this["__saltFieldViewScale"] ? this["__saltFieldViewScale"] : _0x10265c;
          },
          set: function (_0x27c001) {
            var _0x4fa520 = Number(_0x27c001);
            (!isFinite(_0x4fa520) || _0x4fa520 <= 0x0) && (_0x4fa520 = _0x10265c), _0x4fa520 = _0x331902(_0x5ed23a(_0x4fa520), _0x24f3f0, _0x527d0b), _0x10265c = _0x4fa520, _0x516ad5(), this["__saltFieldViewScale"] = _0x4fa520, this["mapContainer"] && "function" == typeof this["mapContainer"]["setScale"] && this["mapContainer"]["setScale"](_0x4fa520, _0x4fa520);
          },
          configurable: !0x0
        });
      } catch (_0x192448) {}
      _0x314f79(_0x25f9e9, "initialize", function (_0x3997f3, _0xe3dae9, _0x5869dc) {
        if (!_0x3f2039(_0x5869dc)) return _0x3997f3["apply"](_0x5869dc, _0xe3dae9);
        _0x315f5a(_0x5869dc), _0x1460be(_0x5869dc);
        var _0x36386f = _0x3997f3["apply"](_0x5869dc, _0xe3dae9);
        return _0x315f5a(_0x5869dc), null != _0x5869dc["_mapScale"] && isFinite(_0x5869dc["_mapScale"]) && _0x5869dc["_mapScale"] > 0x0 && (_0x10265c = _0x331902(_0x5ed23a(_0x5869dc["_mapScale"]), _0x24f3f0, _0x527d0b), _0x516ad5()), _0x5869dc["__saltFieldViewScale"] = _0x10265c, _0x36386f;
      }, "__saltFieldViewInitWrapped"), _0x314f79(_0x25f9e9, "updateMap", function (_0x2af8b4, _0x1a6f73, _0x508bde) {
        return _0x3f2039(_0x508bde) ? (_0x315f5a(_0x508bde), _0x1460be(_0x508bde), _0x2af8b4["apply"](_0x508bde, _0x1a6f73)) : _0x2af8b4["apply"](_0x508bde, _0x1a6f73);
      }, "__saltFieldViewUpdateWrapped"), _0x25f9e9["__saltFieldViewPatched"] = !0x0;
    }
  }
  function _0x1b4ffe(_0x52272c) {
    if (_0x52272c && !_0x52272c["__saltFieldViewPatched"]) {
      var _0x10d8cd = _0x52272c["needShow"];
      _0x52272c["needShow"] = function () {
        return !!_0x3f2039(this) || "function" != typeof _0x10d8cd || _0x10d8cd["apply"](this, arguments);
      }, _0x314f79(_0x52272c, "initialize", function (_0x57e3c2, _0x8c29e2, _0x5ab8a2) {
        if (!_0x3f2039(_0x5ab8a2)) return _0x57e3c2["apply"](_0x5ab8a2, _0x8c29e2);
        _0x315f5a(_0x5ab8a2), _0x1460be(_0x5ab8a2);
        var _0x177a07 = _0x57e3c2["apply"](_0x5ab8a2, _0x8c29e2);
        return _0x315f5a(_0x5ab8a2), _0xf7332d(_0x5ab8a2), null != _0x5ab8a2["_mapScale"] && isFinite(_0x5ab8a2["_mapScale"]) && _0x5ab8a2["_mapScale"] > 0x0 && (_0x10265c = _0x331902(_0x5ed23a(_0x5ab8a2["_mapScale"]), _0x24f3f0, _0x527d0b), _0x516ad5()), _0x5ab8a2["__saltFieldViewScale"] = _0x10265c, _0x177a07;
      }, "__saltFieldViewTiledInitWrapped"), _0x314f79(_0x52272c, "updateMap", function (_0x75cd82, _0x151100, _0x59d717) {
        if (!_0x3f2039(_0x59d717)) return _0x75cd82["apply"](_0x59d717, _0x151100);
        _0x315f5a(_0x59d717), _0x1460be(_0x59d717);
        var _0x23eb50 = _0x75cd82["apply"](_0x59d717, _0x151100);
        return _0xf7332d(_0x59d717), _0x23eb50;
      }, "__saltFieldViewTiledUpdateWrapped"), _0x52272c["__saltFieldViewPatched"] = !0x0;
    }
  }
  function _0x403dd3(_0x1b58a6) {
    if (_0x1b58a6 && !_0x1b58a6["__saltFieldViewMapScalePatched"]) {
      var _0x345911 = null;
      try {
        _0x345911 = Object["getOwnPropertyDescriptor"](_0x1b58a6, "mapScale");
      } catch (_0x53aa58) {}
      try {
        Object["defineProperty"](_0x1b58a6, "mapScale", {
          get: function () {
            return this["__saltFieldViewScale"] && _0x3f2039(this) ? this["__saltFieldViewScale"] : _0x345911 && "function" == typeof _0x345911["get"] ? _0x345911["get"]["call"](this) : this["_mapScale"] || _0x15effa;
          },
          set: function (_0x465090) {
            if (_0x3f2039(this)) {
              var _0xf453c0 = Number(_0x465090);
              if ((!isFinite(_0xf453c0) || _0xf453c0 <= 0x0) && (_0xf453c0 = _0x10265c), _0xf453c0 = _0x331902(_0x5ed23a(_0xf453c0), _0x24f3f0, _0x527d0b), _0x10265c = _0xf453c0, _0x516ad5(), this["__saltFieldViewScale"] = _0xf453c0, _0x345911 && "function" == typeof _0x345911["set"]) try {
                _0x345911["set"]["call"](this, _0xf453c0);
              } catch (_0x49035e) {} else this["_mapScale"] = _0xf453c0;
              this["mapContainer"] && "function" == typeof this["mapContainer"]["setScale"] && this["mapContainer"]["setScale"](_0xf453c0, _0xf453c0);
            } else _0x345911 && "function" == typeof _0x345911["set"] ? _0x345911["set"]["call"](this, _0x465090) : this["_mapScale"] = _0x465090;
          },
          configurable: !0x0
        });
      } catch (_0x453599) {}
      _0x1b58a6["__saltFieldViewMapScalePatched"] = !0x0;
    }
  }
  function _0x108895(_0x5312a1) {
    if (_0x5312a1 && !_0x5312a1["__saltFieldViewOnShowWrapped"] && "function" == typeof _0x5312a1["onShow"]) {
      var _0x3d1223 = _0x5312a1["onShow"];
      _0x5312a1["onShow"] = function () {
        var _0x1eba15 = _0x3d1223["apply"](this, arguments);
        return _0xcf326e(function () {
          _0x4c9d76(), _0x50d422(), _0x1a0507();
        }), _0x1eba15;
      }, _0x5312a1["__saltFieldViewOnShowWrapped"] = !0x0;
    }
  }
  function _0x541a5f(_0x2d9220) {
    if (_0x2d9220 && !_0x2d9220["__saltFieldViewOnShowWrapped"] && "function" == typeof _0x2d9220["onShow"]) {
      var _0xce4f23 = _0x2d9220["onShow"];
      _0x2d9220["onShow"] = function () {
        var _0x1c6d48 = _0xce4f23["apply"](this, arguments);
        return _0xcf326e(function () {
          _0x4c9d76();
        }), _0x1c6d48;
      }, _0x2d9220["__saltFieldViewOnShowWrapped"] = !0x0;
    }
  }
  function _0x22d18c(_0x2aced3) {
    if (_0x2aced3 && !_0x2aced3["__saltFieldViewPatched"]) {
      if ("function" == typeof _0x2aced3["onShow"] && !_0x2aced3["__saltFieldViewOnShowWrapped"]) {
        var _0x55e139 = _0x2aced3["onShow"];
        _0x2aced3["onShow"] = function () {
          var _0x89729f = _0x55e139["apply"](this, arguments),
            _0x373cdb = this;
          return _0xcf326e(function () {
            _0x5d3137(_0x373cdb), _0x4e04b5(), _0x50d422(_0xd2a0fa(_0x373cdb["sourceMap"], _0x373cdb["ui"] && _0x373cdb["ui"]["m_map"]), !0x1), _0x4c9d76(), _0x1a0507();
          }), _0x89729f;
        }, _0x2aced3["__saltFieldViewOnShowWrapped"] = !0x0;
      }
      if ("function" == typeof _0x2aced3["_updateMap"] && !_0x2aced3["__saltFieldViewUpdateMapWrapped"]) {
        var _0x2866af = _0x2aced3["_updateMap"];
        _0x2aced3["_updateMap"] = function () {
          try {
            if (_0x3a4e95()) {
              var _0x445bc1 = this["sourceMap"] || this["getModule"] && this["getModule"]()["sourceMap"];
              _0x445bc1 && _0x315f5a(_0x445bc1);
            }
          } catch (_0x550424) {}
          return _0x2866af["apply"](this, arguments);
        }, _0x2aced3["__saltFieldViewUpdateMapWrapped"] = !0x0;
      }
      if ("function" == typeof _0x2aced3["_updateScale"] && !_0x2aced3["__saltFieldViewUpdateScaleWrapped"]) {
        var _0xcbbb21 = _0x2aced3["_updateScale"];
        _0x2aced3["_updateScale"] = function (_0xf88177) {
          var _0x2b7c85 = this["sourceMap"];
          if (!_0x2b7c85 && this["getModule"]) try {
            _0x2b7c85 = this["getModule"]()["sourceMap"];
          } catch (_0xaa7568) {}
          var _0xf8a24a = this["ui"] && this["ui"]["m_map"];
          if (!_0x2b7c85 || !_0xf8a24a || !_0xf8a24a["node"]) return _0xcbbb21["apply"](this, arguments);
          var _0xb485ad = _0xd2a0fa(_0x2b7c85, _0xf8a24a),
            _0xfcfa2c = _0xf88177 > 0x0 ? _0xf88177 : _0xb485ad;
          _0x3c2be2(_0xf8a24a, _0xf8a24a["node"], _0x2b7c85, _0xb485ad, _0xfcfa2c, this, !0x0), _0x10265c = _0x331902(_0x5ed23a(_0xfcfa2c), _0x24f3f0, _0x527d0b), _0x516ad5(), _0x3e6160();
        }, _0x2aced3["__saltFieldViewUpdateScaleWrapped"] = !0x0;
      }
      _0x2aced3["__saltFieldViewPatched"] = !0x0;
    }
  }
  function _0x62a561(_0x41aa02) {
    if (_0x41aa02 && !_0x41aa02["__saltFieldViewPatched"]) {
      if ("function" == typeof _0x41aa02["_updateMap"] && !_0x41aa02["__saltFieldViewUpdateMapWrapped"]) {
        var _0x4dc2ce = _0x41aa02["_updateMap"];
        _0x41aa02["_updateMap"] = function () {
          try {
            this["_sourceMap"] && (_0x1460be(this["_sourceMap"]), _0x315f5a(this["_sourceMap"]), this["_sourceMap"]["mapContainer"] = this["ui"] && this["ui"]["m_map"]);
          } catch (_0x2959b8) {}
          return _0x4dc2ce["apply"](this, arguments);
        }, _0x41aa02["__saltFieldViewUpdateMapWrapped"] = !0x0;
      }
      if ("function" == typeof _0x41aa02["onShow"] && !_0x41aa02["__saltFieldViewOnShowWrapped"]) {
        var _0x385d7d = _0x41aa02["onShow"];
        _0x41aa02["onShow"] = function () {
          var _0x55c4f6 = _0x385d7d["apply"](this, arguments);
          return _0xcf326e(function () {
            _0x4e04b5(), _0x50d422(_0x10265c, !0x1), _0x4c9d76(), _0x1a0507();
          }), _0x55c4f6;
        }, _0x41aa02["__saltFieldViewOnShowWrapped"] = !0x0;
      }
      if ("function" == typeof _0x41aa02["_updateScale"] && !_0x41aa02["__saltFieldViewUpdateScaleWrapped"]) {
        var _0x4d2c75 = _0x41aa02["_updateScale"];
        _0x41aa02["_updateScale"] = function (_0x442cf3) {
          var _0x13eb96 = this["_sourceMap"],
            _0x472e16 = this["ui"] && this["ui"]["m_map"];
          if (!_0x13eb96 || !_0x472e16 || !_0x472e16["node"]) return _0x4d2c75["apply"](this, arguments);
          var _0x71103b = _0xd2a0fa(_0x13eb96, _0x472e16),
            _0x4ad06c = _0x442cf3 > 0x0 ? _0x442cf3 : _0x71103b;
          _0x3c2be2(_0x472e16, _0x472e16["node"], _0x13eb96, _0x71103b, _0x4ad06c, this, !0x0), _0x10265c = _0x331902(_0x5ed23a(_0x4ad06c), _0x24f3f0, _0x527d0b), _0x516ad5(), _0x3e6160();
        }, _0x41aa02["__saltFieldViewUpdateScaleWrapped"] = !0x0;
      }
      _0x41aa02["__saltFieldViewPatched"] = !0x0;
    }
  }
  function _0x314f79(_0xa346b6, _0x384cca, _0x1e7b8d, _0x12a26f) {
    if ("function" == typeof _0xa346b6[_0x384cca] && !_0xa346b6[_0x12a26f]) {
      var _0x3793a9 = _0xa346b6[_0x384cca];
      _0xa346b6[_0x384cca] = function () {
        return _0x1e7b8d(_0x3793a9, arguments, this);
      }, _0xa346b6[_0x12a26f] = !0x0;
    }
  }
  function _0xd6cfba(_0x5dbc6e, _0x503290, _0x47f97d) {
    var _0x19ce79 = _0x3cbc8d(_0x5dbc6e),
      _0x3f16f4 = _0x19ce79 && _0x19ce79[_0x503290];
    return !(!_0x3f16f4 || !_0x3f16f4["prototype"]) && (_0x47f97d(_0x3f16f4["prototype"]), !0x0);
  }
  function _0x2c4bdb() {
    _0xd6cfba("LegionPayloadSourceMap", "LegionPayloadSourceMap", _0xa35b5);
    var _0x27f068,
      _0x10e69c = _0x3cbc8d("LegionPayloadSourceMap");
    _0x10e69c && _0x10e69c["LPViewData"] && (_0x27f068 = _0x10e69c["LPViewData"]["prototype"]) && !_0x27f068["__saltFieldViewPatched"] && (_0x27f068["isPositionVisible"] = function () {
      return !0x0;
    }, _0x27f068["__saltFieldViewPatched"] = !0x0), _0xd6cfba("LPTile", "LPTile", _0x4cb7bd), _0xd6cfba("SourceMap", "SourceMap", _0x1b4ffe), _0xd6cfba("SourceMap", "SourceMap", _0x403dd3), _0xd6cfba("LeagueSourceMap", "LeagueSourceMap", _0x1b4ffe), _0xd6cfba("LeagueSourceMap", "LeagueSourceMap", _0x403dd3), _0xd6cfba("ELeagueSourceMap", "ELeagueSourceMap", _0x1b4ffe), _0xd6cfba("ELeagueSourceMap", "ELeagueSourceMap", _0x403dd3), _0xd6cfba("MapScene", "MapScene", _0x22d18c), _0xd6cfba("LPMapPanel", "LPMapPanel", _0x62a561), _0xd6cfba("LegionWarPanel", "LegionWarPanel", _0x108895), _0xd6cfba("LeagueWarObComp", "LeagueWarObComp", _0x541a5f), function () {
      var _0xc16620 = _0x3cbc8d("LegionWarModule"),
        _0x2629c = _0xc16620 && _0xc16620["LegionWarModule"] && _0xc16620["LegionWarModule"]["prototype"];
      if (!_0x2629c || _0x2629c["__saltFieldViewCreateWrapped"] || "function" != typeof _0x2629c["createSourceMap"]) return !0x1;
      var _0x7e0529 = _0x2629c["createSourceMap"];
      _0x2629c["createSourceMap"] = function () {
        var _0x98ccf3 = _0x7e0529["apply"](this, arguments),
          _0x1df13a = this;
        return _0xcf326e(function () {
          var _0x1c9786 = _0x57e239(_0x98ccf3) || _0x57e239(_0x1df13a["sourceMap"]);
          _0x1c9786 && (_0x1460be(_0x1c9786), _0x315f5a(_0x1c9786), _0xf7332d(_0x1c9786)), _0x50d422(), _0x1a0507();
        }), _0x98ccf3;
      }, _0x2629c["__saltFieldViewCreateWrapped"] = !0x0;
    }();
  }
  function _0x58d09f(_0x21e555) {
    _0x24f7a8() && (_0x3e6160(), _0x3547fe(), _0x1a047b(), _0x1a9c3f && (_0x1a9c3f["alpha"] = _0x21e555 ? 0x1 : 0.78), _0x54da1d["nativeScale"] = !!_0x1a9c3f);
  }
  function _0x5daca1(_0x5dc1f8) {
    _0x5dc1f8 && !_0x5dc1f8["__saltFieldViewInputInstalled"] && (_0x5dc1f8["__saltFieldViewInputInstalled"] = !0x0, _0x5dc1f8["addEventListener"]("keydown", function (_0x37956e) {
      if (_0x37956e["altKey"] && ("v" === _0x37956e["key"] || "V" === _0x37956e["key"])) return _0x37956e["preventDefault"](), void _0x461b35();
      _0x402255() && ("=" === _0x37956e["key"] || "+" === _0x37956e["key"] ? (_0x37956e["preventDefault"](), _0x45fe09(_0x10265c + _0x4a597d)) : "-" === _0x37956e["key"] || "_" === _0x37956e["key"] ? (_0x37956e["preventDefault"](), _0x45fe09(_0x10265c - _0x4a597d)) : "0" === _0x37956e["key"] && (_0x37956e["preventDefault"](), _0x432ec6()));
    }, !0x0), _0x5dc1f8["addEventListener"]("wheel", function (_0x1eb8ed) {
      if (_0x402255()) {
        _0x1eb8ed["preventDefault"]();
        var _0x54921c = _0x8383a0(_0x1eb8ed["clientX"], _0x1eb8ed["clientY"], _0x5dc1f8),
          _0x193a2e = null != _0x3364d7 ? _0x3364d7 : _0x10265c;
        _0x45fe09(_0x1eb8ed["ctrlKey"] ? _0x193a2e * Math["exp"](0.01 * -_0x1eb8ed["deltaY"]) : _0x193a2e + (_0x1eb8ed["deltaY"] < 0x0 ? _0x4a597d : -0.05), {
          continuous: !0x0,
          focusPoint: _0x54921c
        });
      }
    }, {
      capture: !0x0,
      passive: !0x1
    }), function (_0x4dc9aa) {
      if (_0x4dc9aa && !_0x4dc9aa["__saltFieldViewPinchInstalled"]) {
        _0x4dc9aa["__saltFieldViewPinchInstalled"] = !0x0;
        var _0x246980 = {
            capture: !0x0,
            passive: !0x1
          },
          _0x2ab3f4 = _0x4dc9aa["document"] || _0x4dc9aa;
        _0x2ab3f4["addEventListener"]("touchstart", function (_0x3b523c) {
          if (_0x402255() && _0x3b523c["touches"] && 0x2 === _0x3b523c["touches"]["length"]) {
            var _0x516622 = _0x3b523c["touches"][0x0],
              _0x33d98c = _0x3b523c["touches"][0x1],
              _0x87b2b3 = _0x3dcea3(_0x516622, _0x33d98c);
            if (_0x87b2b3 >= 0x14) {
              var _0x10fbf4 = _0x195d68(_0x516622, _0x33d98c, _0x4dc9aa);
              _0x10fbf4 && (_0x107801 = {
                startDistance: _0x87b2b3,
                baseScale: _0x10265c,
                focusPoint: _0x10fbf4,
                window: _0x4dc9aa
              }, _0x3b523c["preventDefault"]());
            }
          }
        }, _0x246980), _0x2ab3f4["addEventListener"]("touchmove", function (_0x1a26e5) {
          if (_0x107801 && _0x107801["window"] === _0x4dc9aa) {
            if (_0x402255()) {
              if (_0x1a26e5["touches"] && 0x2 === _0x1a26e5["touches"]["length"]) {
                var _0x1fec7d = _0x1a26e5["touches"][0x0],
                  _0x4fdd3c = _0x1a26e5["touches"][0x1],
                  _0x3bdcff = _0x3dcea3(_0x1fec7d, _0x4fdd3c);
                if (_0x3bdcff >= 0x14 && _0x107801["startDistance"] > 0x0) {
                  var _0x37a3ca = _0x195d68(_0x1fec7d, _0x4fdd3c, _0x4dc9aa) || _0x107801["focusPoint"];
                  _0x2a7354(_0x107801["baseScale"] * (_0x3bdcff / _0x107801["startDistance"]), _0x37a3ca), _0x1a26e5["preventDefault"]();
                }
              }
            } else _0x342acb(!0x1);
          }
        }, _0x246980), _0x2ab3f4["addEventListener"]("touchend", _0x59734f, _0x246980), _0x2ab3f4["addEventListener"]("touchcancel", _0x59734f, _0x246980);
      }
      function _0x59734f(_0x20b575) {
        _0x107801 && _0x107801["window"] === _0x4dc9aa && (!_0x20b575["touches"] || _0x20b575["touches"]["length"] < 0x2) && _0x342acb(!0x0);
      }
    }(_0x5dc1f8));
  }
}();
