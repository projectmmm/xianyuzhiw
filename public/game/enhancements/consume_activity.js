// Adapted from the supplied 2.57.2 game enhancement asset.
// Static strings decoded; obfuscator guards removed; frame access stays local.
!function () {
  "use strict";
  var _0xd709f0 = "undefined" != typeof unsafeWindow && unsafeWindow ? unsafeWindow : window;
  if (_0xd709f0["__consumeHelperLoaded"]) return void console["log"]("[消耗助手] 检测到已加载，跳过重复注入");
  _0xd709f0["__consumeHelperLoaded"] = !0x0;
  const _0x3a7594 = {
      zIndex: 0x7ffffffe,
      baseWidth: 0x12c,
      mobileMaxWidth: 0x60,
      designBase: 0x168,
      minScale: 0.55,
      maxScale: 1.6
    },
    _0xf32cfd = {
      toggleBtn: {
        top: 0x8c,
        right: 0xf
      },
      panel: {
        top: 0xbe,
        right: 0xf
      }
    },
    _0x29496f = {
      scale: "consumeHelper.uiScale",
      pos: "consumeHelper.togglePos",
      delay: "consumeHelper.delay"
    },
    _0xea72fc = [],
    _0x362bf2 = {
      0x1: "\u62db\u52df",
      0x2: "\u5b9d\u7bb1",
      0x3: "\u9c7c\u7aff",
      0x4: "\u76d0\u7f50",
      0x5: "\u91d1\u7816"
    },
    _0x3962ad = {
      0x1: [0x50, 0xa0, 0xf0, 0x140, 0x190, 0x230, 0x2d0, 0x370, 0x410, 0x4b0, 0x5a0, 0x690, 0x780, 0x870, 0x960, 0xaa0, 0xbe0, 0xd20, 0xe60, 0xfa0],
      0x2: [0x7d0, 0xfa0, 0x1770, 0x1f40, 0x2710, 0x36b0, 0x4650, 0x55f0, 0x6590, 0x7530, 0x8ca0, 0xa410, 0xbb80, 0xd2f0, 0xea60, 0x109a0, 0x128e0, 0x14820, 0x16760, 0x186a0],
      0x3: [0x19, 0x32, 0x4b, 0x7d, 0xaf, 0xe1, 0x12c, 0x177, 0x1c2, 0x20d, 0x271, 0x2d5, 0x339, 0x39d, 0x41a, 0x497, 0x514, 0x5aa, 0x640, 0x6d6],
      0x4: [0x3, 0x6, 0x9, 0xc, 0xf, 0x12, 0x15, 0x18, 0x1b, 0x1e, 0x21, 0x24, 0x27, 0x2a, 0x2d, 0x30, 0x33, 0x36, 0x39, 0x3c],
      0x5: [0x2710, 0x4e20, 0x7530, 0x9c40, 0xc350, 0x11170, 0x15f90, 0x1adb0, 0x1fbd0, 0x249f0, 0x2bf20, 0x33450, 0x3a980, 0x41eb0, 0x493e0, 0x53020, 0x5cc60, 0x668a0, 0x704e0, 0x7a120]
    },
    _0x3bcec5 = [{
      id: 0x7d4,
      points: 0x32,
      name: "铂金宝箱"
    }, {
      id: 0x7d3,
      points: 0x14,
      name: "黄金宝箱"
    }, {
      id: 0x7d2,
      points: 0xa,
      name: "青铜宝箱"
    }, {
      id: 0x7d1,
      points: 0x1,
      name: "木质宝箱"
    }],
    _0xe1daae = [{
      index: 0x1,
      name: "\u60ca\u96f7",
      maxCount: 0x1
    }, {
      index: 0x2,
      name: "\u6708\u534e",
      maxCount: 0x1
    }, {
      index: 0x3,
      name: "\u56de\u54cd",
      maxCount: 0x1
    }, {
      index: 0x4,
      name: "琴心公",
      maxCount: 0x1
    }, {
      index: 0x5,
      name: "琴心母",
      maxCount: 0x1
    }, {
      index: 0x6,
      name: "\u7487\u7391",
      maxCount: 0x1
    }, {
      index: 0x7,
      name: "剑胆公",
      maxCount: 0x1
    }, {
      index: 0x8,
      name: "剑胆母",
      maxCount: 0x1
    }, {
      index: 0x9,
      name: "阵容编组",
      maxCount: 0x1
    }, {
      index: 0xa,
      name: "\u73cd\u73e0",
      maxCount: 0x1e
    }, {
      index: 0xb,
      name: "万能红将碎片",
      maxCount: 0xc8
    }, {
      index: 0xc,
      name: "随机红将碎片",
      maxCount: 0xc8
    }, {
      index: 0xd,
      name: "\u767d\u7389",
      maxCount: 0x3e7
    }, {
      index: 0xe,
      name: "\u7cbe\u94c1",
      maxCount: 0x3e7
    }],
    _0xae5e6b = 0xf4240,
    _0x37c8fa = /(goods|shop|exchange|mall|store|commodity|product|item|list|reward|\u8d2d\u4e70|\u5151\u6362|\u5546\u54c1|\u5546\u5e97)/i,
    _0x2030e1 = /(milestone|milestoneReward|stageReward|progressReward|pointReward|scoreReward|\u91cc\u7a0b\u7891)/i,
    _0x78102c = _0x152f84 => {
      const _0xe7f576 = Number(_0x152f84);
      return Number["isFinite"](_0xe7f576) ? _0xe7f576 : null;
    },
    _0x30d109 = _0xcd9ed7 => !!_0xcd9ed7 && "object" == typeof _0xcd9ed7 && !Array["isArray"](_0xcd9ed7);
  let _0x1ad1f8 = null;
  function _0x564665(_0x43d510) {
    if (_0x1ad1f8 && !_0x43d510) return _0x1ad1f8;
    const _0x3396ae = function () {
      const _0x23e929 = [],
        _0x4e7623 = _0x29e9b5 => {
          _0x29e9b5 && -0x1 === _0x23e929["indexOf"](_0x29e9b5) && _0x23e929["push"](_0x29e9b5);
        };
      _0x4e7623(_0xd709f0);
      try {
        _0x4e7623(window);
      } catch (_0x3c3898) {}
      try {
        _0x4e7623(window);
      } catch (_0x38112c) {}
      try {
        _0x4e7623(window);
      } catch (_0x27fffd) {}
      try {
        const _0x2ddf47 = document["getElementsByTagName"]("iframe");
        for (let _0x299519 = 0x0; _0x299519 < _0x2ddf47["length"]; _0x299519++) try {
          _0x4e7623(_0x2ddf47[_0x299519]["contentWindow"]);
        } catch (_0x380f1d) {}
      } catch (_0xfa796) {}
      return _0x23e929;
    }();
    for (const _0x5c96a3 of _0x3396ae) try {
      if ("function" == typeof _0x5c96a3["__require"]) return _0x1ad1f8 = _0x5c96a3, _0x5c96a3;
    } catch (_0x465601) {}
    for (const _0x47bf26 of _0x3396ae) try {
      if (_0x47bf26["ws"] && ("function" == typeof _0x47bf26["ws"]["sendAsync"] || "function" == typeof _0x47bf26["ws"]["send"])) return _0x1ad1f8 = _0x47bf26, _0x47bf26;
    } catch (_0x1b37c2) {}
    return _0xd709f0;
  }
  let _0x18dc01 = null;
  function _0x56fd40(_0x3b0f25) {
    if (_0x18dc01 && !_0x3b0f25) return _0x18dc01;
    const _0x44e804 = _0x564665(!0x0),
      _0x46e9ed = [_0x44e804 && _0x44e804["ws"], _0x44e804 && _0x44e804["h5websocket"] && _0x44e804["h5websocket"]["ws"], _0x44e804 && _0x44e804["h5websocket"], _0x44e804 && _0x44e804["gameWs"], _0x44e804 && _0x44e804["WebSocketClient"], _0x44e804 && _0x44e804["_ws"], _0x44e804 && _0x44e804["gameSocket"], _0x44e804 && _0x44e804["wsClient"], _0x44e804 && _0x44e804["socket"], _0xd709f0 && _0xd709f0["ws"]];
    for (const _0x460f3b of _0x46e9ed) if (_0x460f3b && ("function" == typeof _0x460f3b["sendAsync"] || "function" == typeof _0x460f3b["send"])) return _0x18dc01 = _0x460f3b, _0x460f3b;
    for (const _0xb1b9e6 of [_0x44e804, _0xd709f0]) if (_0xb1b9e6) try {
      const _0x54eccf = Object["keys"](_0xb1b9e6);
      for (let _0x37f36f = 0x0; _0x37f36f < _0x54eccf["length"] && _0x37f36f < 0x190; _0x37f36f++) {
        let _0x30f89e = null;
        try {
          _0x30f89e = _0xb1b9e6[_0x54eccf[_0x37f36f]];
        } catch (_0x1eac6a) {
          continue;
        }
        if (_0x30f89e && "object" == typeof _0x30f89e && "function" == typeof _0x30f89e["sendAsync"]) return _0x18dc01 = _0x30f89e, _0x30f89e;
      }
    } catch (_0x5e4acc) {}
    return null;
  }
  function _0x1bb3fb(_0x42d56a, _0x391cfb) {
    if (_0x42d56a) {
      for (const _0x2311ba of _0x391cfb) if (void 0x0 !== _0x42d56a[_0x2311ba] && null !== _0x42d56a[_0x2311ba]) return _0x42d56a[_0x2311ba];
    }
  }
  function _0xc889bb(_0x208b85, _0x47a4d1) {
    const _0x4df6a3 = function (_0x2dd5bf) {
      if (!_0x2dd5bf || "object" != typeof _0x2dd5bf) return;
      if (void 0x0 !== _0x2dd5bf["_code"] && null !== _0x2dd5bf["_code"]) {
        const _0x36615a = Number(_0x2dd5bf["_code"]);
        return isNaN(_0x36615a) ? void 0x0 : _0x36615a;
      }
      const _0x4e9e31 = _0x1bb3fb(_0x2dd5bf, ["code", "errCode", "errorCode", "retCode"]);
      if (null != _0x4e9e31) {
        const _0x45fadd = Number(_0x4e9e31);
        return isNaN(_0x45fadd) ? void 0x0 : _0x45fadd;
      }
    }(_0x47a4d1);
    if (_0x208b85 && "object" == typeof _0x208b85 && void 0x0 !== _0x4df6a3) try {
      _0x208b85["_code"] = _0x4df6a3;
    } catch (_0x134056) {}
    return _0x208b85;
  }
  const _0x23c5d3 = _0x111df2 => new Promise(_0x524c67 => setTimeout(_0x524c67, Math["max"](0x0, Number(_0x111df2) || 0x0))),
    _0xa2c1dd = {
      msg: "",
      at: 0x0
    },
    _0x28a129 = async (_0x12ad3a, _0x251ed1 = {}) => {
      let _0x24d0b2 = _0x56fd40();
      if (_0x24d0b2 || (_0x24d0b2 = _0x56fd40(!0x0)), !_0x24d0b2) throw function (_0x325271, _0x5e64da = "error") {
        const _0x42def8 = Date["now"]();
        if (!(_0xa2c1dd["msg"] === _0x325271 && _0x42def8 - _0xa2c1dd["at"] < 0xbb8)) {
          _0xa2c1dd["msg"] = _0x325271, _0xa2c1dd["at"] = _0x42def8;
          try {
            _0x5d05f2(_0x325271, _0x5e64da);
          } catch (_0x31c22f) {}
        }
      }("未找到游戏连接，请确认脚本运行在游戏页面", "error"), new Error("游戏WebSocket未连接");
      const _0x1074e1 = {
        ack: 0x0,
        cmd: _0x12ad3a,
        params: _0x251ed1,
        seq: Date["now"](),
        time: Date["now"]()
      };
      try {
        if ("function" == typeof _0x24d0b2["sendAsync"]) {
          const _0xc03a7c = await _0x24d0b2["sendAsync"](_0x1074e1);
          return _0xc889bb(function (_0x21077f) {
            if (!_0x21077f || "object" != typeof _0x21077f) return _0x21077f;
            try {
              const _0x2f111c = _0x21077f["rawData"];
              if (null != _0x2f111c) return _0x2f111c;
            } catch (_0x31fdef) {}
            const _0x483fb2 = _0x1bb3fb(_0x21077f, ["_rawData"]);
            if (null != _0x483fb2) return _0x483fb2;
            try {
              if ("function" == typeof _0x21077f["getData"]) {
                const _0xb70c31 = _0x21077f["getData"]();
                if (null != _0xb70c31) return _0xb70c31;
              }
            } catch (_0x603ca8) {}
            const _0x313d51 = _0x1bb3fb(_0x21077f, ["body"]);
            return null != _0x313d51 ? _0x313d51 : _0x21077f;
          }(_0xc03a7c), _0xc03a7c);
        }
        if ("function" == typeof _0x24d0b2["send"]) throw new Error("连接不支持等待响应");
      } catch (_0x590481) {
        throw _0x590481;
      }
      throw new Error("WebSocket不支持发送消息");
    };
  function _0x2a35b2(_0xdb9a13, _0x18dafc = "info") {
    try {
      document["querySelectorAll"](".consume-tip")["forEach"](_0x52c47c => _0x52c47c["remove"]());
      const _0xca8014 = document["createElement"]("div");
      _0xca8014["className"] = "consume-tip", _0xca8014["textContent"] = _0xdb9a13;
      let _0x5042df = "#F0A020";
      "success" === _0x18dafc && (_0x5042df = "#10b981"), "error" === _0x18dafc && (_0x5042df = "#ef4444"), "warning" === _0x18dafc && (_0x5042df = "#f59e0b"), _0xca8014["style"]["cssText"] = "position: fixed; bottom: 30px; left: 50%; transform: translateX(-50%); background: " + _0x5042df + "; color: white; padding: 8px 16px; border-radius: 12px; font-size: 12px; z-index: 2147483647; box-shadow: 0 4px 12px rgba(0,0,0,0.15); max-width: 86vw; text-align: center; opacity: 0; transition: opacity 0.3s ease; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;", document["body"]["appendChild"](_0xca8014), requestAnimationFrame(() => {
        _0xca8014["style"]["opacity"] = "1";
      }), setTimeout(() => {
        _0xca8014["style"]["opacity"] = "0", setTimeout(() => _0xca8014["remove"](), 0x12c);
      }, 0x9c4);
    } catch (_0x4b4773) {}
    try {
      const _0x469478 = _0x564665();
      if (_0x469478 && "function" == typeof _0x469478["__require"]) {
        const _0x102bf0 = _0x469478["__require"]("TipsManager");
        _0x102bf0 && _0x102bf0["SHOW_TIP"] && _0x102bf0["SHOW_TIP"](_0xdb9a13);
      }
    } catch (_0x222d5d) {}
  }
  const _0x5d05f2 = (() => {
      let _0x4dbdba = null;
      return (_0x15cb17, _0x1e2da7 = "info", _0x43eb05 = 0x7d0) => {
        try {
          _0x4dbdba || (_0x4dbdba = document["createElement"]("div"), _0x4dbdba["style"]["cssText"] = "position: fixed; top: 50%; left: 50%; transform: translate(-50%, -50%) scale(0.9); padding: 10px 20px; border-radius: 12px; font-size: 13px; font-weight: 500; color: white; z-index: 2147483647; pointer-events: none; opacity: 0; transition: all 0.3s ease; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;", document["body"]["appendChild"](_0x4dbdba));
          const _0x18ea0c = {
            success: "#10B981",
            error: "#EF4444",
            warning: "#F59E0B",
            info: "#5b83b8"
          };
          _0x4dbdba["style"]["background"] = _0x18ea0c[_0x1e2da7] || _0x18ea0c["info"], _0x4dbdba["textContent"] = _0x15cb17, _0x4dbdba["style"]["opacity"] = "1", _0x4dbdba["style"]["transform"] = "translate(-50%, -50%) scale(1)", clearTimeout(_0x4dbdba["_timer"]), _0x4dbdba["_timer"] = setTimeout(() => {
            _0x4dbdba["style"]["opacity"] = "0", _0x4dbdba["style"]["transform"] = "translate(-50%, -50%) scale(0.9)";
          }, _0x43eb05);
        } catch (_0x18ba46) {}
      };
    })(),
    _0x185c79 = [];
  let _0x27b81d = null;
  function _0x3cc138(_0x25bed4, _0x1a7876 = "info") {
    const _0x1c5c53 = {
      time: new Date()["toLocaleTimeString"]("zh-CN", {
        hour12: !0x1
      }),
      message: _0x25bed4,
      type: _0x1a7876
    };
    if (!_0x27b81d) return _0x185c79["push"](_0x1c5c53), void (_0x185c79["length"] > 0xc8 && _0x185c79["shift"]());
    _0x190dd0(_0x1c5c53);
  }
  function _0x190dd0(_0x3941ea) {
    try {
      const _0x2a7ccd = document["createElement"]("div");
      _0x2a7ccd["style"]["cssText"] = "margin-bottom:2px;line-height:1.4;word-break:break-all;";
      const _0x331955 = {
          success: "#4ADE80",
          error: "#F87171",
          warning: "#FBBF24",
          info: "#A9B6D4"
        },
        _0x4e20d9 = document["createElement"]("span");
      _0x4e20d9["textContent"] = "[" + _0x3941ea["time"] + "]\x20", _0x4e20d9["style"]["color"] = "#6B7A9C";
      const _0x54e3c1 = document["createElement"]("span");
      for (_0x54e3c1["textContent"] = _0x3941ea["message"], _0x54e3c1["style"]["color"] = _0x331955[_0x3941ea["type"]] || _0x331955["info"], _0x2a7ccd["appendChild"](_0x4e20d9), _0x2a7ccd["appendChild"](_0x54e3c1), _0x27b81d["appendChild"](_0x2a7ccd); _0x27b81d["childNodes"]["length"] > 0xc8;) _0x27b81d["removeChild"](_0x27b81d["firstChild"]);
      _0x27b81d["scrollTop"] = _0x27b81d["scrollHeight"];
    } catch (_0x5023ed) {}
  }
  function _0x2a1c56(_0x374c51) {
    if (!_0x374c51 || "object" != typeof _0x374c51 || Array["isArray"](_0x374c51)) return null;
    const _0x175a1c = [_0x374c51["activity"] && _0x374c51["activity"]["commonActivityInfo"], _0x374c51["commonActivityInfo"], _0x374c51["body"] && _0x374c51["body"]["activity"] && _0x374c51["body"]["activity"]["commonActivityInfo"], _0x374c51["body"] && _0x374c51["body"]["commonActivityInfo"], _0x374c51["activity"], _0x374c51["body"] && _0x374c51["body"]["activity"], _0x374c51["body"], _0x374c51];
    for (const _0x144e0b of _0x175a1c) {
      if (!_0x144e0b || "object" != typeof _0x144e0b || Array["isArray"](_0x144e0b)) continue;
      if (Object["entries"](_0x144e0b)["some"](([_0x311fff, _0xaa2e6]) => /^\d+$/["test"](String(_0x311fff)) && _0xaa2e6 && "object" == typeof _0xaa2e6)) return _0x144e0b;
    }
    return null;
  }
  function _0xda1922(_0x5127a6) {
    if (!_0x5127a6 || "object" != typeof _0x5127a6) return null;
    const _0x25bcec = _0x5127a6["task"] ?? _0x5127a6["tasks"] ?? _0x5127a6["taskInfo"] ?? _0x5127a6["taskMap"] ?? _0x5127a6["missions"];
    return _0x25bcec && "object" == typeof _0x25bcec && !Array["isArray"](_0x25bcec) ? _0x25bcec : null;
  }
  function _0x435e15(_0x1e9366) {
    const _0x5319b5 = {
        consumeActivityId: null,
        freeActivityId: null,
        freeGoodsId: null,
        entryKeys: [],
        activityMap: null
      },
      _0xc82a38 = _0x2a1c56(_0x1e9366);
    if (!_0xc82a38) return _0x5319b5;
    const _0x5bc308 = Object["entries"](_0xc82a38)["filter"](([_0x2a4b44, _0x2fd39c]) => /^\d+$/["test"](String(_0x2a4b44)) && _0x30d109(_0x2fd39c));
    if (0x0 === _0x5bc308["length"]) return {
      ..._0x5319b5,
      activityMap: _0xc82a38
    };
    let _0x2467a9 = null;
    for (const [_0x183a46, _0x3c0431] of _0x5bc308) {
      const _0xad4554 = _0xda1922(_0x3c0431);
      if (_0xad4554 && "object" == typeof _0xad4554) {
        if (Object["keys"](_0xad4554)["some"](_0xaa12ff => {
          const _0x3ee23a = Number(_0xaa12ff);
          return Number["isFinite"](_0x3ee23a) && _0x3ee23a >= 0x1 && _0x3ee23a <= 0x5;
        })) {
          _0x2467a9 = Number(_0x183a46);
          break;
        }
      }
    }
    _0x2467a9 || (_0x2467a9 = Number(_0x5bc308[0x0][0x0]));
    let _0x4d6aba = null;
    const _0x4e040b = _0x5bc308["map"](([_0x3b4676]) => String(_0x3b4676)),
      _0x40b1c6 = /^(\d{6,7})\d$/["exec"](String(_0x2467a9 || "")),
      _0xad1986 = _0x40b1c6 ? _0x40b1c6[0x1] : null;
    if (_0xad1986 && _0x4e040b["includes"](_0xad1986 + "4")) _0x4d6aba = Number(_0xad1986 + "4");else {
      const _0x59f06d = _0x4e040b["filter"](_0x3f3825 => /^\d{6,7}4$/["test"](_0x3f3825))["sort"]((_0x4b5f7f, _0x55765a) => Number(_0x55765a) - Number(_0x4b5f7f));
      _0x59f06d["length"] > 0x0 ? _0x4d6aba = Number(_0x59f06d[0x0]) : _0x5bc308["length"] >= 0x4 && (_0x4d6aba = Number(_0x5bc308[0x3][0x0]));
    }
    return {
      consumeActivityId: _0x2467a9,
      freeActivityId: _0x4d6aba,
      freeGoodsId: _0x4d6aba ? Number(_0x4d6aba + "1") : null,
      entryKeys: _0x4e040b,
      activityMap: _0xc82a38
    };
  }
  function _0x221e5f(_0x38bc11, _0x1b0b12 = null) {
    const _0x1a97f6 = _0x2a1c56(_0x38bc11);
    if (!_0x1a97f6) return _0x1b0b12 ? _0x1b0b12 + 0x2 : null;
    const _0x78c519 = Object["entries"](_0x1a97f6)["filter"](([_0x49e0df, _0x5b48b4]) => /^\d+$/["test"](String(_0x49e0df)) && _0x30d109(_0x5b48b4));
    if (0x0 === _0x78c519["length"]) return _0x1b0b12 ? _0x1b0b12 + 0x2 : null;
    const _0x28c6da = _0x78c519["map"](([_0x3176be]) => String(_0x3176be)),
      _0x319fe7 = _0x1df18f => {
        const _0x10e1e0 = /^(\d{5,8})\d$/["exec"](String(_0x1df18f || ""));
        return _0x10e1e0 ? _0x10e1e0[0x1] : null;
      },
      _0x3115d6 = _0x319fe7(_0x1b0b12) || _0x319fe7(_0x78c519["find"](([_0x89a6c0, _0x1d8eb7]) => _0x30d109(_0x1d8eb7["task"]))?.[0x0]);
    if (_0x3115d6 && _0x28c6da["includes"](_0x3115d6 + "5")) return Number(_0x3115d6 + "5");
    if (_0x1b0b12) return Number(_0x1b0b12) + 0x2;
    for (const [_0x438748, _0x5cb15a] of _0x78c519) if (Object["keys"](_0x5cb15a)["some"](_0x4039e8 => _0x2030e1["test"](_0x4039e8))) return Number(_0x438748);
    return _0x78c519["length"] >= 0x5 ? Number(_0x78c519[0x4][0x0]) : null;
  }
  const _0x324cef = _0x118966 => {
      const _0x4cd01b = [],
        _0x515f90 = Array["isArray"](_0x118966) ? _0x118966["map"]((_0x5a4830, _0x27fcae) => [_0x27fcae + 0x1, _0x5a4830]) : Object["entries"](_0x118966 || {});
      for (const [_0xf0fb82, _0x20a9e2] of _0x515f90) if (_0x30d109(_0x20a9e2)) {
        const _0x2aa11a = _0x78102c(_0x20a9e2["goodsId"] ?? _0x20a9e2["goodId"] ?? _0x20a9e2["goodsid"]),
          _0x39c8b9 = _0x78102c(_0x20a9e2["id"] ?? _0x20a9e2["index"] ?? _0x20a9e2["no"] ?? _0x20a9e2["seq"]),
          _0x3f9c3d = _0x2aa11a && _0x2aa11a >= _0xae5e6b ? _0x2aa11a : _0x78102c(_0xf0fb82) >= _0xae5e6b ? _0x78102c(_0xf0fb82) : null,
          _0x1a3c50 = _0x2aa11a && _0x2aa11a >= _0xae5e6b && String(_0x2aa11a)["length"] >= 0x3 ? Number(String(_0x2aa11a)["slice"](-0x2)) : _0x39c8b9 && _0x39c8b9 < _0xae5e6b ? _0x39c8b9 : _0x78102c(_0xf0fb82);
        _0x4cd01b["push"]({
          goodsId: _0x3f9c3d,
          index: _0x1a3c50 && _0x1a3c50 < _0xae5e6b ? _0x1a3c50 : null,
          name: _0x20a9e2["name"] ?? _0x20a9e2["goodsName"] ?? _0x20a9e2["itemName"] ?? null,
          maxCount: _0x78102c(_0x20a9e2["maxCount"] ?? _0x20a9e2["limit"] ?? _0x20a9e2["buyLimit"] ?? _0x20a9e2["max"] ?? _0x20a9e2["times"]) || null
        });
      } else {
        const _0xfb1672 = _0x78102c(_0xf0fb82);
        _0xfb1672 && _0xfb1672 >= _0xae5e6b && _0x4cd01b["push"]({
          goodsId: _0xfb1672,
          index: Number(String(_0xfb1672)["slice"](-0x2)),
          name: null,
          maxCount: null
        });
      }
      return _0x4cd01b;
    },
    _0x22e951 = _0x8bd313 => _0xe1daae["map"](_0x324d20 => ({
      index: _0x324d20["index"],
      name: _0x324d20["name"],
      maxCount: _0x324d20["maxCount"],
      goodsId: _0x8bd313 ? Number(String(_0x8bd313) + String(_0x324d20["index"])["padStart"](0x2, "0")) : null
    }));
  function _0x54330f(_0x2df7de) {
    const _0x49e2e2 = {
        activityId: null,
        goods: [],
        source: "none",
        listKey: null,
        entryFields: []
      },
      _0x5727fc = _0x2a1c56(_0x2df7de);
    if (!_0x5727fc) return _0x49e2e2;
    const _0x375309 = Object["entries"](_0x5727fc)["filter"](([_0x2c5bcd, _0x48fc6c]) => /^\d+$/["test"](String(_0x2c5bcd)) && _0x30d109(_0x48fc6c));
    if (0x0 === _0x375309["length"]) return _0x49e2e2;
    const _0x4224d0 = _0x375309["map"](([_0x5656eb, _0x451f0e]) => _0x5656eb + ":" + Object["keys"](_0x451f0e)["join"]("/")),
      _0x3d8e4e = _0x375309["map"](([_0x5951aa]) => String(_0x5951aa)),
      _0x1927e5 = (() => {
        for (const [_0x34d095, _0x3bf33b] of _0x375309) {
          const _0x3e67fc = _0xda1922(_0x3bf33b);
          if (_0x3e67fc && Object["keys"](_0x3e67fc)["some"](_0x18f261 => {
            const _0x18fa86 = Number(_0x18f261);
            return Number["isFinite"](_0x18fa86) && _0x18fa86 >= 0x1 && _0x18fa86 <= 0x5;
          })) {
            const _0x111d35 = /^(\d{5,8})\d$/["exec"](String(_0x34d095));
            if (_0x111d35) return _0x111d35[0x1];
          }
        }
        const _0x106734 = /^(\d{5,8})\d$/["exec"](_0x3d8e4e[0x0] || "");
        return _0x106734 ? _0x106734[0x1] : null;
      })(),
      _0x4ad5bf = _0x1a9742 => !_0x1927e5 || (_0x4c35c3 => {
        const _0x4d1be3 = /^(\d{5,8})\d\d$/["exec"](String(_0x4c35c3 || ""));
        return _0x4d1be3 ? _0x4d1be3[0x1] : null;
      })(_0x1a9742) === _0x1927e5,
      _0x240cdc = (_0x13239f, _0xfd2d76, _0x19317d = null) => ({
        activityId: _0x13239f,
        goods: _0x22e951(_0x13239f),
        source: _0xfd2d76,
        listKey: _0x19317d,
        entryFields: _0x4224d0
      });
    for (const [_0x863012, _0x12f64d] of _0x375309) for (const [_0x3c188d, _0x5ddb6f] of Object["entries"](_0x12f64d)) {
      if (!_0x5ddb6f || "object" != typeof _0x5ddb6f) continue;
      if (!_0x37c8fa["test"](_0x3c188d)) continue;
      if (0x0 !== _0x324cef(_0x5ddb6f)["filter"](_0x153afb => _0x153afb["goodsId"])["length"] && _0x4ad5bf(Number(_0x863012))) return _0x240cdc(Number(_0x863012), "list", _0x3c188d);
    }
    for (const [_0xb85926, _0x42d495] of _0x375309) for (const [_0x302a05, _0x3dff2b] of Object["entries"](_0x42d495)) {
      if (!_0x30d109(_0x3dff2b)) continue;
      const _0x12574b = Object["keys"](_0x3dff2b)["map"](_0x1b14ec => _0x78102c(_0x1b14ec))["filter"](_0x565dac => _0x565dac && _0x565dac >= _0xae5e6b);
      if (0x0 === _0x12574b["length"]) continue;
      const _0x2ffa0a = Number(String(_0x12574b[0x0])["slice"](0x0, -0x2)) || Number(_0xb85926);
      if (_0x4ad5bf(_0x2ffa0a)) return _0x240cdc(_0x2ffa0a, "record", _0x302a05);
    }
    return _0x1927e5 && _0x3d8e4e["includes"](_0x1927e5 + "3") ? _0x240cdc(Number(_0x1927e5 + "3"), "slot") : _0x375309["length"] >= 0x3 ? _0x240cdc(Number(_0x375309[0x2][0x0]), "position") : {
      ..._0x49e2e2,
      entryFields: _0x4224d0
    };
  }
  function _0x435243(_0x3ca4e8, _0x5baabb) {
    const _0x2360e4 = _0x3ca4e8 && _0x3ca4e8["activityId"];
    if (!_0x2360e4) return null;
    let _0x266e85 = _0x78102c(_0x5baabb);
    return null === _0x266e85 && (_0x266e85 = _0xe1daae["find"](_0x323b91 => _0x323b91["name"] === String(_0x5baabb))?.["index"] ?? null), null === _0x266e85 && (_0x266e85 = _0x3ca4e8["goods"]["find"](_0x4cfe09 => _0x4cfe09["name"] && _0x4cfe09["name"] === String(_0x5baabb))?.["index"] ?? null), _0x266e85 ? Number(String(_0x2360e4) + String(_0x266e85)["padStart"](0x2, "0")) : null;
  }
  function _0xeeb183(_0x58a64b) {
    if (!_0x58a64b) return [];
    const _0x4dfff9 = function (_0x2cd77d) {
        if (!_0x2cd77d || "object" != typeof _0x2cd77d) return null;
        const _0x1d1bff = [];
        for (const [_0x1f7935, _0x39de3e] of Object["entries"](_0x2cd77d)) {
          if (!_0x39de3e || "object" != typeof _0x39de3e) continue;
          const _0x521af3 = _0xda1922(_0x39de3e);
          if (!_0x521af3) continue;
          const _0x4548c5 = Object["keys"](_0x521af3)["map"](_0x20636d => Number(_0x20636d))["filter"](_0x970362 => Number["isFinite"](_0x970362) && _0x970362 >= 0x1 && _0x970362 <= 0x5);
          _0x4548c5["length"] > 0x0 && _0x1d1bff["push"]({
            key: _0x1f7935,
            activity: _0x39de3e,
            taskKeys: _0x4548c5
          });
        }
        return 0x0 === _0x1d1bff["length"] ? null : (_0x1d1bff["sort"]((_0x2ffb85, _0x385141) => _0x385141["taskKeys"]["length"] - _0x2ffb85["taskKeys"]["length"] || Number(_0x2ffb85["key"]) - Number(_0x385141["key"])), _0x1d1bff[0x0]["activity"]);
      }(_0x58a64b) || _0x58a64b,
      _0x1d3da1 = _0xda1922(_0x4dfff9) || {};
    return Object["keys"](_0x362bf2)["map"](_0x5443f7 => {
      const _0xc3234c = Number(_0x5443f7),
        _0x1d8525 = Number(_0x1d3da1[_0xc3234c] || 0x0),
        _0x3d0b61 = _0x3962ad[_0xc3234c] || [];
      let _0xd00fee = 0x0,
        _0x5d765d = !0x1;
      const _0x3cfb3b = _0x3d0b61["find"](_0x2cc1cd => _0x2cc1cd > _0x1d8525);
      return _0x3cfb3b ? _0xd00fee = _0x3cfb3b : _0x3d0b61["length"] > 0x0 && (_0xd00fee = _0x3d0b61[_0x3d0b61["length"] - 0x1], _0x5d765d = !0x0), {
        id: _0xc3234c,
        name: _0x362bf2[_0xc3234c],
        current: _0x1d8525,
        nextTarget: _0xd00fee,
        isCompleted: _0x5d765d
      };
    });
  }
  function _0x515071(_0x59c352) {
    const _0x32e6f1 = _0x3962ad[_0x59c352];
    return _0x32e6f1 && _0x32e6f1["length"] ? _0x32e6f1[_0x32e6f1["length"] - 0x1] : 0x0;
  }
  const _0x5d8dc8 = _0xf6cf42 => null == _0xf6cf42 ? "0" : _0xf6cf42 >= 0x2710 ? (_0xf6cf42 / 0x2710)["toFixed"](0x1) + "\u4e07" : String(_0xf6cf42),
    _0x3c6613 = (_0x563b38 = "") => /700010|3200010|3200020|700011|-10006|\u65e0\u53ef\u9886\u53d6|\u672a\u8fbe\u6807|\u5df2\u9886\u53d6|\u6ca1\u6709\u53ef\u9886\u53d6|\u5df2\u8fbe\u6210|no reward|already/i["test"](String(_0x563b38 || "")),
    _0x13fd54 = (_0x244ae0 = "") => /200020/["test"](String(_0x244ae0 || ""));
  let _0x28ada1 = !0x1;
  const _0x2dcbe4 = {
    value: !0x1
  };
  function _0x3b527d() {
    return !_0x28ada1 || (_0x2a35b2("已有任务在执行，请先停止或等待完成", "warning"), !0x1);
  }
  let _0x1eb1f9 = !0x1,
    _0x1f8378 = !0x1,
    _0x2befbd = null,
    _0xfdee82 = null,
    _0x2d28b5 = !0x1,
    _0x4dac90 = null,
    _0x37ce52 = null,
    _0x5a02f8 = null;
  function _0x8ba1de(_0x481a44) {
    _0x28ada1 = _0x481a44;
    try {
      (_0x2befbd ? _0x2befbd["querySelectorAll"]("button") : [])["forEach"](_0x2e9821 => {
        _0x2e9821["classList"]["contains"]("bkh-stop") || (_0x2e9821["disabled"] = _0x481a44);
      });
    } catch (_0x35ec5f) {}
  }
  function _0x3ad6a6(_0x170496, _0x5a7c1c, _0x2d8d81) {
    _0x37ce52 && (_0x37ce52["style"]["width"] = Math["min"](0x64, Math["round"](_0x170496 / Math["max"](0x1, _0x5a7c1c) * 0x64)) + "%", _0x5a02f8 && (_0x5a02f8["textContent"] = _0x2d8d81 + ":\x20" + _0x170496 + "/" + _0x5a7c1c));
  }
  function _0x34c666() {
    _0x37ce52 && (_0x37ce52["style"]["width"] = "0%"), _0x5a02f8 && (_0x5a02f8["textContent"] = "");
  }
  let _0x59fe1e = null;
  function _0x1ad0d0() {
    const _0x3d5d40 = window["innerWidth"] || 0x168;
    return (window["innerWidth"] || 0x168) <= 0x300 ? Math["min"](_0x3d5d40 * (_0x3a7594["mobileMaxWidth"] / 0x64), _0x3d5d40 - 0x10) : _0x3a7594["baseWidth"];
  }
  let _0x5f0d94 = 0x1;
  function _0x47d1a5() {
    _0x5f0d94 = function () {
      if (null === _0x59fe1e) try {
        const _0x50628f = parseFloat(localStorage["getItem"](_0x29496f["scale"]));
        !isNaN(_0x50628f) && _0x50628f > 0x0 && (_0x59fe1e = _0x50628f);
      } catch (_0x46d26e) {}
      const _0x38aa99 = _0x59fe1e || 0x1,
        _0xe1a46c = Math["min"](window["innerWidth"] || 0x168, window["screen"] && window["screen"]["width"] ? window["screen"]["width"] : window["innerWidth"] || 0x168),
        _0x24e6bc = Math["min"](window["innerHeight"] || 0x280, window["screen"] && window["screen"]["height"] ? window["screen"]["height"] : window["innerHeight"] || 0x280);
      let _0x502cd2 = 0x1;
      _0xe1a46c < 0x300 && (_0x502cd2 = Math["min"](_0xe1a46c / _0x3a7594["designBase"], _0x24e6bc / 0x280));
      const _0x5da160 = Math["max"](_0x3a7594["minScale"], Math["min"](_0x3a7594["maxScale"], _0x502cd2 * _0x38aa99));
      return Math["round"](0x64 * _0x5da160) / 0x64;
    }();
    const _0x3e9a4a = window["innerWidth"] || 0x168,
      _0x5b5312 = window["innerHeight"] || 0x280,
      _0x132084 = _0x1ad0d0();
    _0x2befbd && (_0x2befbd["style"]["width"] = _0x132084 + "px", _0x2befbd["style"]["transform"] = "scale(" + _0x5f0d94 + ")", _0x2befbd["style"]["transformOrigin"] = "top right", _0x2befbd["style"]["maxHeight"] = Math["floor"](0.82 * _0x5b5312 / _0x5f0d94) + "px", _0x2befbd["style"]["top"] = Math["min"](_0xf32cfd["panel"]["top"], Math["max"](0x8, _0x5b5312 - 0x3c)) + "px", _0x2befbd["style"]["right"] = (_0x3e9a4a <= 0x1e0 ? 0x8 : _0xf32cfd["panel"]["right"]) + "px"), _0xfdee82 && (_0xfdee82["style"]["transform"] = "scale(" + _0x5f0d94 + ")", _0xfdee82["style"]["transformOrigin"] = _0x2d28b5 ? "top left" : "top right");
  }
  function _0x4b41d5(_0x563175) {
    const _0x3f26db = Math["max"](_0x3a7594["minScale"], Math["min"](_0x3a7594["maxScale"], Math["round"](0x64 * _0x563175) / 0x64));
    _0x59fe1e = _0x3f26db;
    try {
      localStorage["setItem"](_0x29496f["scale"], String(_0x3f26db));
    } catch (_0x34d8fb) {}
    _0x47d1a5(), _0x2a35b2("界面缩放: " + Math["round"](0x64 * _0x3f26db) + "%", "info");
  }
  function _0x99a504(_0x5d784e, _0x1eeae3) {
    const _0x4a963c = document["createElementNS"]("http://www.w3.org/2000/svg", _0x5d784e);
    return Object["keys"](_0x1eeae3 || {})["forEach"](_0x327d76 => _0x4a963c["setAttribute"](_0x327d76, String(_0x1eeae3[_0x327d76]))), _0x4a963c;
  }
  function _0x17e0c9(_0x492044) {
    const _0x113eac = _0x99a504("svg", {
      width: _0x492044,
      height: _0x492044,
      viewBox: "0 0 24 24",
      fill: "none"
    });
    _0x113eac["style"]["display"] = "block", _0x113eac["style"]["pointerEvents"] = "none";
    const _0x4bfda8 = _0x99a504("defs", {}),
      _0x4bb97a = _0x99a504("linearGradient", {
        id: "consumeStarGrad",
        x1: "5",
        y1: "3",
        x2: "19",
        y2: "21",
        gradientUnits: "userSpaceOnUse"
      });
    return [["0", "#BFF3E4"], ["0.45", "#35D0A6"], ["1", "#0E9F7B"]]["forEach"](_0x641462 => {
      _0x4bb97a["appendChild"](_0x99a504("stop", {
        offset: _0x641462[0x0],
        "stop-color": _0x641462[0x1]
      }));
    }), _0x4bfda8["appendChild"](_0x4bb97a), _0x113eac["appendChild"](_0x4bfda8), _0x113eac["appendChild"](_0x99a504("path", {
      d: "M12 2.9l2.82 5.96 6.48.71-4.8 4.4 1.3 6.37L12 17.14l-5.8 3.2 1.3-6.37-4.8-4.4 6.48-.71z",
      fill: "url(#consumeStarGrad)",
      stroke: "#ffffff",
      "stroke-width": "1.25",
      "stroke-linejoin": "round"
    })), _0x113eac;
  }
  const _0x50427b = new Map();
  function _0x1ec490(_0x411a7a) {
    if (_0x411a7a) {
      try {
        _0x411a7a["cancelable"] && _0x411a7a["preventDefault"]();
      } catch (_0xc92b3b) {}
      try {
        _0x411a7a["stopPropagation"] && _0x411a7a["stopPropagation"]();
      } catch (_0x5c7e79) {}
    }
  }
  function _0x4ddab0(_0x1b75df, _0x2d485d, _0x46cc75 = "btn") {
    const _0x465d24 = _0x46cc75 + "|" + (_0x1b75df && _0x1b75df["id"] ? _0x1b75df["id"] : Math["random"]()["toString"](0x24)["slice"](0x2)),
      _0x60aa0f = _0x1f516a => {
        const _0x505131 = Date["now"]();
        if (_0x505131 - (_0x50427b["get"](_0x465d24) || 0x0) < 0x1f4) _0x1ec490(_0x1f516a);else {
          _0x50427b["set"](_0x465d24, _0x505131), _0x1ec490(_0x1f516a);
          try {
            _0x2d485d();
          } catch (_0x7262d0) {
            console["warn"]("[消耗助手] " + _0x46cc75 + " 处理异常:", _0x7262d0);
          }
        }
      };
    _0x1b75df["addEventListener"]("click", _0x60aa0f), window["PointerEvent"] ? _0x1b75df["addEventListener"]("pointerup", _0x60aa0f) : (_0x1b75df["addEventListener"]("touchend", _0x60aa0f), _0x1b75df["addEventListener"]("mouseup", _0x60aa0f)), (window["PointerEvent"] ? ["pointerup"] : ["touchend", "mouseup", "click"])["forEach"](_0x198293 => {
      document["addEventListener"](_0x198293, _0x9503e3 => {
        var _0x4f16ec, _0x38df69;
        _0x4f16ec = _0x1b75df, _0x38df69 = _0x9503e3 && _0x9503e3["target"], _0x4f16ec && _0x38df69 && (_0x4f16ec === _0x38df69 || _0x4f16ec["contains"](_0x38df69)) && _0x60aa0f(_0x9503e3);
      }, !0x0);
    });
  }
  function _0x427bf7(_0x1cc1be, _0x5e3b31, _0x1ecf10 = !0x1, _0x2bc059 = "") {
    const _0x2d1b08 = document["createElement"]("button");
    _0x2d1b08["type"] = "button", _0x2d1b08["textContent"] = _0x1cc1be;
    const _0xfc530d = "danger" === _0x2bc059 ? "danger" : _0x1ecf10 ? "primary" : "ghost";
    return _0x2d1b08["className"] = "bkh-btn bkh-btn-" + _0xfc530d, _0x4ddab0(_0x2d1b08, () => _0x5e3b31(), _0x1cc1be), _0x2d1b08;
  }
  function _0x41907b(_0x54fb68, _0x51cf08, _0x2a769f = !0x1) {
    const _0x331b0f = document["createElement"]("div");
    _0x331b0f["className"] = "bkh-sec";
    const _0x28ebcc = document["createElement"]("div");
    _0x28ebcc["className"] = "bkh-sec-head";
    const _0x2f1933 = document["createElement"]("span");
    _0x2f1933["textContent"] = _0x54fb68, _0x2f1933["className"] = "bkh-sec-title", _0x28ebcc["appendChild"](_0x2f1933);
    const _0x3e9b3a = document["createElement"]("span");
    _0x3e9b3a["textContent"] = "\u25be", _0x3e9b3a["className"] = "bkh-arrow", _0x28ebcc["appendChild"](_0x3e9b3a);
    const _0x105d76 = document["createElement"]("div");
    _0x105d76["className"] = "bkh-sec-body", _0x105d76["style"]["display"] = _0x2a769f ? "block" : "none";
    try {
      _0x51cf08(_0x105d76);
    } catch (_0x373c4e) {
      console["error"]("[消耗助手] 分区「" + _0x54fb68 + "」构建失败:", _0x373c4e);
      const _0x2f0cdb = document["createElement"]("div");
      _0x2f0cdb["className"] = "bkh-desc", _0x2f0cdb["style"]["color"] = "#F87171", _0x2f0cdb["textContent"] = "该分区加载失败: " + (_0x373c4e && _0x373c4e["message"] ? _0x373c4e["message"] : _0x373c4e), _0x105d76["appendChild"](_0x2f0cdb);
    }
    let _0x44cc96 = !_0x2a769f;
    return _0x2a769f && (_0x3e9b3a["style"]["transform"] = "rotate(180deg)"), _0x4ddab0(_0x28ebcc, () => (_0x44cc96 = !_0x44cc96, _0x105d76["style"]["display"] = _0x44cc96 ? "none" : "block", _0x3e9b3a["style"]["transform"] = _0x44cc96 ? "rotate(0deg)" : "rotate(180deg)", void _0x47d1a5()), "section-" + _0x54fb68), _0x331b0f["appendChild"](_0x28ebcc), _0x331b0f["appendChild"](_0x105d76), _0x331b0f;
  }
  async function _0x484eec() {
    return await _0x28a129("activity_get", {});
  }
  async function _0x2d1c0c() {
    const _0x2bc0f9 = await _0x28a129("role_getroleinfo", {});
    return _0x1bb3fb(_0x2bc0f9, ["role", "roleInfo"]) || _0x2bc0f9;
  }
  function _0x1fa278(_0x564fc5, _0x11bca1) {
    if (!_0x564fc5) return 0x0;
    if (Array["isArray"](_0x564fc5)) {
      const _0x4374c2 = _0x564fc5["find"](_0x17da4a => Number(_0x17da4a["id"] ?? _0x17da4a["itemId"]) === _0x11bca1);
      return _0x4374c2 ? Number(_0x4374c2["num"] ?? _0x4374c2["count"] ?? _0x4374c2["quantity"] ?? 0x0) : 0x0;
    }
    const _0x6415f = function (_0x4c3f3d, _0x4c3845) {
      if (!_0x4c3f3d) return null;
      try {
        if ("function" == typeof _0x4c3f3d["get"] && !Array["isArray"](_0x4c3f3d)) {
          const _0x2950e8 = _0x4c3f3d["get"](_0x4c3845);
          if (null != _0x2950e8) return _0x2950e8;
        }
      } catch (_0x11bb57) {}
      try {
        return _0x4c3f3d[_0x4c3845];
      } catch (_0x24f230) {
        return null;
      }
    }(_0x564fc5, _0x11bca1);
    return null == _0x6415f ? 0x0 : "number" == typeof _0x6415f ? _0x6415f : "object" == typeof _0x6415f ? Number(_0x6415f["num"] ?? _0x6415f["count"] ?? _0x6415f["quantity"] ?? 0x0) : Number(_0x6415f) || 0x0;
  }
  const _0x4e55f4 = async (_0x4bf529, _0x2be216, _0x41d15a, _0x103c52, _0xb953d0, _0x260f12 = !0x1) => {
      const _0x48640f = Math["floor"](_0x41d15a / 0xa),
        _0xaf1ea8 = _0x41d15a % 0xa;
      let _0x1a1d46 = 0x0;
      const _0x16bb85 = async _0xdd89cc => {
        for (let _0x56357b = 0x0; _0x56357b <= 0x3; _0x56357b++) try {
          return void (await _0x28a129(_0x4bf529, _0x2be216(_0xdd89cc)));
        } catch (_0x3590fc) {
          if (/400340/["test"](String(_0x3590fc && _0x3590fc["message"] || "")) && _0x56357b < 0x3) {
            _0x3cc138("⚠️ " + _0x103c52 + "服务器限流(400340)，等待10秒后重试(" + (_0x56357b + 0x1) + "/3)...", "warning"), await _0x23c5d3(0x2710);
            continue;
          }
          throw _0x3590fc;
        }
      };
      for (let _0x483678 = 0x0; _0x483678 < _0x48640f; _0x483678++) {
        if (_0x2dcbe4["value"]) throw new Error("用户停止");
        await _0x16bb85(0xa), _0x1a1d46 += 0xa, _0x3cc138(_0x103c52 + "10个 (" + _0x1a1d46 + "/" + _0x41d15a + ")", "info"), _0xb953d0 > 0x0 && (await _0x23c5d3(_0xb953d0));
      }
      if (_0xaf1ea8 > 0x0) {
        if (_0x260f12) for (let _0x2e90f6 = 0x0; _0x2e90f6 < _0xaf1ea8; _0x2e90f6++) {
          if (_0x2dcbe4["value"]) throw new Error("用户停止");
          await _0x16bb85(0x1), _0x1a1d46 += 0x1, _0x3cc138(_0x103c52 + "1个 (" + _0x1a1d46 + "/" + _0x41d15a + ")", "info"), _0xb953d0 > 0x0 && (await _0x23c5d3(_0xb953d0));
        } else {
          if (_0x2dcbe4["value"]) throw new Error("用户停止");
          await _0x16bb85(_0xaf1ea8), _0x1a1d46 += _0xaf1ea8, _0x3cc138("" + _0x103c52 + _0xaf1ea8 + "个 (" + _0x1a1d46 + "/" + _0x41d15a + ")", "info");
        }
      }
    },
    _0x2bc6ad = async _0x2fcc9f => {
      _0x3cc138("[钻石宝箱] 开始开启钻石宝箱...", "info");
      const _0x1bcaf6 = await _0x2d1c0c();
      let _0xcd98d6 = _0x1fa278(_0x1bcaf6 && (_0x1bcaf6["items"] || _0x1bcaf6["itemList"]) || {}, 0x7d5);
      if (_0xcd98d6 <= 0x0) return _0x3cc138("[钻石宝箱] 没有钻石宝箱，跳过", "info"), 0x0;
      _0x3cc138("[钻石宝箱] 拥有 " + _0x5d8dc8(_0xcd98d6) + " 个，开始开启（10 个一批，个位数逐个开）", "info");
      let _0x13126e = 0x0;
      for (; _0xcd98d6 > 0x0 && !_0x2dcbe4["value"];) {
        const _0x230602 = _0xcd98d6 >= 0xa ? 0xa : 0x1;
        try {
          await _0x28a129("item_openbox", {
            itemId: 0x7d5,
            number: _0x230602,
            index: 0x0
          }), _0x13126e += _0x230602, _0xcd98d6 -= _0x230602, _0x3cc138("[钻石宝箱] 开启 x" + _0x230602 + " 成功（累计 " + _0x5d8dc8(_0x13126e) + "，剩余 " + _0x5d8dc8(_0xcd98d6) + "）", "success");
        } catch (_0x31bcc1) {
          if ("用户停止" === _0x31bcc1["message"]) throw _0x31bcc1;
          _0x3cc138("[钻石宝箱] 开启失败: " + _0x31bcc1["message"], "warning");
          break;
        }
        await _0x23c5d3(_0x2fcc9f);
      }
      return _0x3cc138("[钻石宝箱] 完成：共开启 " + _0x5d8dc8(_0x13126e) + "\x20个", "success"), _0x13126e;
    },
    _0x8e3677 = async (_0xd5f428, _0x280ecd, _0x313c33 = 0x0) => {
      _0x2dcbe4["value"] = !0x1, _0x8ba1de(!0x0);
      try {
        const _0x1e0eca = Number(_0x280ecd);
        if (!_0x1e0eca || isNaN(_0x1e0eca)) return void _0x2a35b2("请输入有效的道具ID", "error");
        _0x3cc138("[开道具] 查询道具 " + _0x1e0eca + " 数量...", "info");
        const _0x5c9f56 = await _0x2d1c0c(),
          _0x2b522f = _0x1fa278(_0x5c9f56 && (_0x5c9f56["items"] || _0x5c9f56["itemList"]) || {}, _0x1e0eca);
        if (_0x2b522f <= 0x0) return _0x3cc138("[开道具] 没有道具 " + _0x1e0eca + "，跳过", "warning"), void _0x2a35b2("没有该道具", "warning");
        const _0x80a58c = _0x313c33 > 0x0 ? Math["min"](_0x313c33, _0x2b522f) : _0x2b522f;
        let _0x5222b9 = 0x149e;
        try {
          const _0x141370 = Number(localStorage["getItem"]("consume_cheer_item_id"));
          _0x141370 > 0x0 && (_0x5222b9 = _0x141370);
        } catch (_0x377775) {}
        const _0x256603 = new Set([0x149e, _0x5222b9]),
          _0x2c35f8 = new Set([0x148d, 0x148e, 0x14a0]);
        let _0x5d6ac1, _0x1a923e, _0x121348;
        _0x256603["has"](_0x1e0eca) ? (_0x5d6ac1 = "autumn_useitem", _0x1a923e = _0x11a6ac => ({
          itemNum: _0x11a6ac
        }), _0x121348 = 0xbb8) : _0x2c35f8["has"](_0x1e0eca) ? (_0x5d6ac1 = "item_consume", _0x1a923e = _0x1b1d63 => ({
          itemId: _0x1e0eca,
          quantity: _0x1b1d63
        }), _0x121348 = 0xbb8) : (_0x5d6ac1 = "item_openpack", _0x1a923e = _0x3bf46b => ({
          itemId: _0x1e0eca,
          number: _0x3bf46b,
          index: 0x0
        }), _0x121348 = 0x3e7), _0x3cc138("[开道具] 拥有 " + _0x5d8dc8(_0x2b522f) + " 个，本次开 " + _0x5d8dc8(_0x80a58c) + " 个（指令 " + _0x5d6ac1 + "，单批≤" + _0x121348 + "）", "info");
        let _0x1f7f29 = _0x80a58c,
          _0x712d80 = 0x0;
        for (; _0x1f7f29 > 0x0 && !_0x2dcbe4["value"];) {
          const _0x1abd4f = Math["min"](_0x1f7f29, _0x121348);
          try {
            await _0x28a129(_0x5d6ac1, _0x1a923e(_0x1abd4f)), _0x712d80 += _0x1abd4f, _0x1f7f29 -= _0x1abd4f, _0x3cc138("[开道具] 开 x" + _0x1abd4f + " 成功（累计 " + _0x5d8dc8(_0x712d80) + "，剩余 " + _0x5d8dc8(_0x1f7f29) + "）", "success");
          } catch (_0x506b9e) {
            if ("用户停止" === _0x506b9e["message"]) throw _0x506b9e;
            const _0x104e30 = String(_0x506b9e && _0x506b9e["message"] || "");
            /3200020/["test"](_0x104e30) ? _0x3cc138("[开道具] 道具 " + _0x1e0eca + " 已领取过", "info") : /\u51b7\u5374|cool|wait|10\s*\u5206/i["test"](_0x104e30) ? _0x3cc138("[开道具] 助威冷却中，需等待约10分钟后再试（本次已消耗 " + _0x5d8dc8(_0x712d80) + "）", "warning") : _0x3cc138("[开道具] 失败: " + _0x104e30, "warning");
            break;
          }
          await _0x23c5d3(_0xd5f428);
        }
        _0x2dcbe4["value"] ? (_0x3cc138("[开道具] 已停止", "warning"), _0x2a35b2("已停止", "warning")) : (_0x3cc138("[开道具] 完成：共开 " + _0x5d8dc8(_0x712d80) + "\x20个", "success"), _0x2a35b2("开道具完成!", "success"));
      } catch (_0x26f721) {
        "用户停止" === _0x26f721["message"] ? (_0x3cc138("已停止", "warning"), _0x2a35b2("已停止", "warning")) : (_0x3cc138("[开道具] 异常: " + _0x26f721["message"], "error"), _0x2a35b2("开道具出错", "error"));
      } finally {
        _0x8ba1de(!0x1), _0x34c666();
      }
    };
  function _0x2a1509() {
    if (_0x1eb1f9) return;
    _0x1eb1f9 = !0x0, function () {
      if (document["getElementById"]("consumeHelperStyle")) return;
      const _0xd9df04 = document["createElement"]("style");
      _0xd9df04["id"] = "consumeHelperStyle", _0xd9df04["textContent"] = "\n#consumeHelperPanel {\n    padding: 10px !important; border-radius: 18px !important;\n    border: 1px solid rgba(53,208,166,0.30) !important;\n    background: linear-gradient(165deg, rgba(18,38,32,0.97), rgba(8,18,16,0.97)) !important;\n    box-shadow: 0 18px 46px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.07) !important;\n    color: #E7ECFA;\n    box-sizing: border-box !important;\n    max-width: calc(100vw - 16px) !important;\n}\n.bkh-head { display:flex; align-items:center; gap:6px; margin:-10px -10px 10px; padding:10px 10px 8px; position:sticky; top:-10px; z-index:6; background:linear-gradient(180deg, rgba(16,34,29,0.99), rgba(10,20,18,0.92)); border-bottom:1px solid rgba(255,255,255,0.08); border-radius:16px 16px 0 0; }\n.bkh-title { flex:1; min-width:0; margin:0; font-size:13px; font-weight:800; letter-spacing:.3px; white-space:nowrap; overflow:hidden; text-overflow:ellipsis; color:#3FE0B0; }\n.bkh-iconbtn { display:flex; align-items:center; justify-content:center; flex:0 0 auto; width:26px; height:26px; border-radius:8px; cursor:pointer; user-select:none; font-size:11px; font-weight:700; color:#6CE6C4; background: rgba(255,255,255,0.08); border:1px solid rgba(255,255,255,0.13); transition: background .15s ease, color .15s ease; }\n.bkh-iconbtn:hover { background: rgba(53,208,166,0.22); }\n.bkh-iconbtn-close { color:#FCA5A5; }\n.bkh-iconbtn-close:hover { background: rgba(239,68,68,0.22); }\n.bkh-setrow { display:flex; align-items:center; gap:6px; margin-bottom:8px; padding:6px 8px; border-radius:10px; background:rgba(255,255,255,0.05); border:1px solid rgba(255,255,255,0.08); }\n.bkh-label { font-size:11px; color:#9AA8C7; white-space:nowrap; }\n.bkh-input, .bkh-select { flex:1; min-width:0; padding:5px 7px; border-radius:8px; outline:none; border:1px solid rgba(255,255,255,0.14); background:rgba(6,10,22,0.65); color:#E9EEFC; font-size:11px; }\n.bkh-input:focus, .bkh-select:focus { border-color: rgba(53,208,166,0.55); }\n.bkh-val { font-size:10px; color:#3FE0B0; min-width:44px; text-align:right; }\n.bkh-progress { height:6px; border-radius:999px; background:rgba(255,255,255,0.10); overflow:hidden; margin-bottom:4px; }\n.bkh-progress > div { height:100%; width:0%; border-radius:999px; background:linear-gradient(90deg,#6CE6C4,#0E9F7B); transition:width .2s ease; }\n.bkh-progresstext { font-size:10px; color:#9AA8C7; min-height:13px; margin-bottom:8px; }\n.bkh-list { display:flex; flex-direction:column; gap:7px; }\n.bkh-sec { border-radius:12px; overflow:hidden; background:rgba(255,255,255,0.045); border:1px solid rgba(255,255,255,0.09); }\n.bkh-sec-head { display:flex; align-items:center; justify-content:space-between; gap:6px; padding:8px 10px; cursor:pointer; user-select:none; background:rgba(255,255,255,0.05); }\n.bkh-sec-title { font-size:12px; font-weight:700; color:#DCE4FA; letter-spacing:.3px; }\n.bkh-arrow { font-size:9px; color:#3FE0B0; transition:transform .15s ease; }\n.bkh-sec-body { padding:8px 10px 10px; }\n.bkh-desc { font-size:10px; line-height:1.5; color:#8E9CBC; margin:0 0 8px; }\n.bkh-sub { font-size:10px; color:#8E9CBC; margin:2px 0 5px; }\n.bkh-chips { display:flex; flex-wrap:wrap; gap:5px; margin-bottom:7px; }\n.bkh-chip { display:inline-flex; align-items:center; gap:4px; padding:4px 8px; border-radius:999px; font-size:10px; cursor:pointer; color:#C7D2EA; background:rgba(255,255,255,0.06); border:1px solid rgba(255,255,255,0.10); }\n.bkh-chip input { width:13px; height:13px; margin:0; accent-color:#3FE0B0; }\n.bkh-btns { display:grid; grid-template-columns:repeat(auto-fit,minmax(108px,1fr)); gap:6px; }\n.bkh-btn { min-height:32px; padding:7px 10px; border-radius:10px; font-size:12px; font-weight:600; cursor:pointer; font-family:inherit; pointer-events:auto; touch-action:manipulation; transition: transform .15s ease, filter .15s ease; }\n.bkh-btn-primary { border:none; color:#06231A; background:linear-gradient(135deg,#6CE6C4,#0E9F7B); box-shadow:0 6px 14px rgba(14,159,123,0.28); }\n.bkh-btn-ghost { background:rgba(255,255,255,0.07); border:1px solid rgba(255,255,255,0.16); color:#DCE4FA; }\n.bkh-btn-danger { border:none; color:#FFFFFF; background:linear-gradient(135deg,#F87171,#DC2626); box-shadow:0 6px 14px rgba(220,38,38,0.28); }\n.bkh-btn:hover { transform:translateY(-1px); filter:brightness(1.06); }\n.bkh-btn:active { transform:translateY(0); }\n.bkh-log { margin-top:8px; max-height:130px; overflow-y:auto; padding:6px 8px; border-radius:10px; background:rgba(4,8,18,0.62); border:1px solid rgba(255,255,255,0.09); font-family:'SF Mono',Consolas,monospace; line-height:1.5; -webkit-overflow-scrolling:touch; }\n.bkh-foot { margin-top:8px; padding-top:6px; border-top:1px solid rgba(255,255,255,0.08); text-align:center; font-size:9px; color:#6B7A9C; letter-spacing:.2px; user-select:none; }\n\n/* 移动端适配：更大点击区、更舒适的行高 */\n@media (max-width: 768px) {\n    #consumeHelperPanel { padding: 9px !important; border-radius: 16px !important; }\n    .bkh-btn { min-height: 40px; font-size: 13px; }\n    .bkh-sec-head { padding: 10px 10px; }\n    .bkh-sec-title { font-size: 13px; }\n    .bkh-chip { padding: 6px 10px; font-size: 11px; }\n    .bkh-label { font-size: 12px; }\n    .bkh-input, .bkh-select { font-size: 12px; padding: 6px 8px; }\n    .bkh-desc { font-size: 11px; }\n    .bkh-log { max-height: 140px; }\n}\n", document["head"]["appendChild"](_0xd9df04);
    }();
    let _0x127b8e = 0x12c;
    try {
      _0x127b8e = Math["max"](0x0, parseInt(localStorage["getItem"](_0x29496f["delay"]), 0xa) || 0x12c);
    } catch (_0x4ef8ec) {}
    const _0x23ec6c = document["createElement"]("div");
    _0x23ec6c["id"] = "consumeHelperPanel", _0x23ec6c["style"]["cssText"] = "\n            position: fixed; top: " + _0xf32cfd["panel"]["top"] + "px; right: " + _0xf32cfd["panel"]["right"] + "px;\n            width: " + _0x1ad0d0() + "px; max-width: calc(100vw - 16px); box-sizing: border-box;\n            overflow-y: auto; -webkit-overflow-scrolling: touch;\n            backdrop-filter: blur(16px) saturate(160%);\n            z-index: " + _0x3a7594["zIndex"] + " !important;\n            display: none; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;\n            pointer-events: auto !important;\n        ", _0x2befbd = _0x23ec6c;
    const _0x35c836 = document["createElement"]("div");
    _0x35c836["className"] = "bkh-head";
    const _0x5952af = _0x17e0c9(0x12);
    _0x5952af["style"]["flex"] = "0 0 auto", _0x35c836["appendChild"](_0x5952af);
    const _0x3a410d = document["createElement"]("h3");
    _0x3a410d["textContent"] = "肝王之王消耗活动助手", _0x3a410d["className"] = "bkh-title", _0x35c836["appendChild"](_0x3a410d);
    const _0x16bcb1 = document["createElement"]("div");
    _0x16bcb1["style"]["cssText"] = "display:flex;align-items:center;gap:4px;flex:0 0 auto;";
    const _0x1cdaac = document["createElement"]("span");
    _0x1cdaac["textContent"] = "A-", _0x1cdaac["className"] = "bkh-iconbtn";
    const _0x1d2557 = document["createElement"]("span");
    _0x1d2557["textContent"] = "A+", _0x1d2557["className"] = "bkh-iconbtn", [_0x1cdaac, _0x1d2557]["forEach"](_0x5d8d02 => _0x16bcb1["appendChild"](_0x5d8d02)), _0x4ddab0(_0x1cdaac, () => _0x4b41d5((_0x59fe1e || 0x1) - 0.1), "zoomOut"), _0x4ddab0(_0x1d2557, () => _0x4b41d5((_0x59fe1e || 0x1) + 0.1), "zoomIn"), _0x35c836["appendChild"](_0x16bcb1);
    const _0xbd50f0 = document["createElement"]("div");
    _0xbd50f0["title"] = "关闭面板（Esc 也可关闭）", _0xbd50f0["className"] = "bkh-iconbtn bkh-iconbtn-close", _0xbd50f0["appendChild"](function (_0x31762b) {
      const _0xfb80af = _0x99a504("svg", {
        width: _0x31762b,
        height: _0x31762b,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2.6",
        "stroke-linecap": "round"
      });
      return _0xfb80af["style"]["display"] = "block", _0xfb80af["style"]["pointerEvents"] = "none", _0xfb80af["appendChild"](_0x99a504("path", {
        d: "M6 6 L18 18"
      })), _0xfb80af["appendChild"](_0x99a504("path", {
        d: "M18 6 L6 18"
      })), _0xfb80af;
    }(0xd));
    const _0x592e91 = () => {
      _0x23ec6c["style"]["display"] = "none", _0x1f8378 = !0x1;
    };
    _0x4dac90 = _0x592e91, _0x4ddab0(_0xbd50f0, _0x592e91, "closeBtn"), _0x35c836["appendChild"](_0xbd50f0), _0x23ec6c["appendChild"](_0x35c836);
    const _0x3277d3 = document["createElement"]("div");
    _0x3277d3["className"] = "bkh-setrow";
    const _0x23bb92 = document["createElement"]("span");
    _0x23bb92["textContent"] = "请求延迟", _0x23bb92["className"] = "bkh-label";
    const _0x3a307c = document["createElement"]("input");
    _0x3a307c["type"] = "number", _0x3a307c["value"] = String(_0x127b8e), _0x3a307c["className"] = "bkh-input";
    const _0x1bdb46 = document["createElement"]("span");
    _0x1bdb46["className"] = "bkh-val", _0x1bdb46["textContent"] = _0x127b8e + "ms";
    const _0x725090 = () => {
      const _0x77ac0b = Math["max"](0x0, parseInt(_0x3a307c["value"], 0xa) || 0x12c);
      _0x1bdb46["textContent"] = _0x77ac0b + "ms";
      try {
        localStorage["setItem"](_0x29496f["delay"], String(_0x77ac0b));
      } catch (_0x171b31) {}
    };
    _0x3a307c["addEventListener"]("change", _0x725090), _0x3a307c["addEventListener"]("keyup", _0x725090), _0x3277d3["appendChild"](_0x23bb92), _0x3277d3["appendChild"](_0x3a307c), _0x3277d3["appendChild"](_0x1bdb46), _0x23ec6c["appendChild"](_0x3277d3);
    const _0x3b06af = () => Math["max"](0x0, parseInt(_0x3a307c["value"], 0xa) || 0x12c),
      _0x47348c = document["createElement"]("div");
    _0x47348c["className"] = "bkh-progress", _0x37ce52 = document["createElement"]("div"), _0x47348c["appendChild"](_0x37ce52), _0x23ec6c["appendChild"](_0x47348c), _0x5a02f8 = document["createElement"]("div"), _0x5a02f8["className"] = "bkh-progresstext", _0x23ec6c["appendChild"](_0x5a02f8);
    const _0x10bb12 = document["createElement"]("div");
    _0x10bb12["className"] = "bkh-list", _0x10bb12["appendChild"](_0x41907b("查看活动数据", _0x1dffa1 => {
      const _0x1901db = document["createElement"]("div");
      _0x1901db["className"] = "bkh-desc", _0x1901db["textContent"] = "读取当前消耗活动进度与库存（只读，不执行任何消耗）", _0x1dffa1["appendChild"](_0x1901db);
      const _0x53a243 = _0x427bf7("查看活动数据", async () => {
          _0x3b527d() && (await (async () => {
            _0x2dcbe4["value"] = !0x1, _0x8ba1de(!0x0);
            try {
              _0x3cc138("获取活动数据...", "info");
              const _0xa7b158 = await _0x484eec(),
                _0xd0a0e7 = await _0x2d1c0c(),
                _0x44c2c2 = _0x2a1c56(_0xa7b158);
              if (!_0x44c2c2) return _0x3cc138("未读到消耗活动数据（活动未开启或结构异常）", "warning"), void _0x2a35b2("未读到活动数据", "warning");
              const _0xd7525a = _0xeeb183(_0x44c2c2),
                _0x3d54d2 = _0x435e15(_0xa7b158),
                _0x1cb4fc = _0x54330f(_0xa7b158),
                _0x328245 = _0x221e5f(_0xa7b158, _0x1cb4fc["activityId"]);
              _0x3cc138("活动ID: 消耗=" + (_0x3d54d2["consumeActivityId"] || "?") + " 免费=" + (_0x3d54d2["freeActivityId"] || "?") + " 兑换商店=" + (_0x1cb4fc["activityId"] || "?") + " 里程碑=" + (_0x328245 || "?"), "info");
              const _0xfa9702 = _0xd0a0e7 && (_0xd0a0e7["items"] || _0xd0a0e7["itemList"]) || {},
                _0x4798c1 = Number(_0xd0a0e7 && _0xd0a0e7["diamond"] || 0x0);
              for (const _0x93175f of _0xd7525a) {
                const _0x3dd8da = _0x515071(_0x93175f["id"]),
                  _0xefcb17 = _0x93175f["isCompleted"] ? "\u5df2\u6ee1" : _0x5d8dc8(_0x93175f["current"]) + "/" + _0x5d8dc8(_0x3dd8da) + "（还差" + _0x5d8dc8(Math["max"](0x0, _0x3dd8da - _0x93175f["current"])) + "）";
                _0x3cc138("[" + _0x93175f["name"] + "]\x20" + _0xefcb17, _0x93175f["isCompleted"] ? "success" : "info");
              }
              _0x3cc138("宝箱: " + _0x3bcec5["map"](_0x8cb223 => "" + _0x8cb223["name"]["replace"]("\u5b9d\u7bb1", "") + _0x5d8dc8(_0x1fa278(_0xfa9702, _0x8cb223["id"])))["join"]("\x20") + " | 钻石宝箱 " + _0x5d8dc8(_0x1fa278(_0xfa9702, 0x7d5)), "info"), _0x3cc138("招募令 " + _0x5d8dc8(_0x1fa278(_0xfa9702, 0x3e9)) + " | 鱼竿 " + _0x5d8dc8(_0x1fa278(_0xfa9702, 0x3f3)) + " | 黄金鱼竿 " + _0x5d8dc8(_0x1fa278(_0xfa9702, 0x3f4)) + " | 金砖 " + _0x5d8dc8(_0x4798c1), "info"), _0x3cc138("消耗道具: 普通" + _0x5d8dc8(_0x1fa278(_0xfa9702, 0x148d)) + "\x20金" + _0x5d8dc8(_0x1fa278(_0xfa9702, 0x148e)) + " 可开" + _0x5d8dc8(_0x1fa278(_0xfa9702, 0x149f)) + " 活动金" + _0x5d8dc8(_0x1fa278(_0xfa9702, 0x14a0)), "info"), _0x2a35b2("活动数据已刷新", "success");
            } catch (_0x47d4e0) {
              _0x3cc138("查看活动数据异常: " + _0x47d4e0["message"], "error"), _0x2a35b2("查看活动数据出错", "error");
            } finally {
              _0x8ba1de(!0x1), _0x34c666();
            }
          })());
        }, !0x1),
        _0x3252f0 = document["createElement"]("div");
      _0x3252f0["className"] = "bkh-btns", _0x3252f0["appendChild"](_0x53a243), _0x1dffa1["appendChild"](_0x3252f0);
    }, !0x0)), _0x10bb12["appendChild"](_0x41907b("钻石宝箱 / 开道具", _0x2dc4b5 => {
      const _0x26c938 = document["createElement"]("div");
      _0x26c938["className"] = "bkh-desc", _0x26c938["textContent"] = "单独开钻石宝箱，或添加多个道具 ID 批量开启（每个可设数量，0=全部），支持存入脚本", _0x2dc4b5["appendChild"](_0x26c938);
      const _0x3fb144 = _0x427bf7("单独开钻石宝箱", async () => {
          _0x3b527d() && (await (async _0x120f08 => {
            _0x2dcbe4["value"] = !0x1, _0x8ba1de(!0x0);
            try {
              const _0x3e0f04 = await _0x2bc6ad(_0x120f08);
              _0x2dcbe4["value"] ? _0x2a35b2("已停止", "warning") : _0x3e0f04 > 0x0 ? _0x2a35b2("钻石宝箱开启完成!", "success") : _0x2a35b2("没有钻石宝箱", "info");
            } catch (_0x11a583) {
              "用户停止" === _0x11a583["message"] ? (_0x3cc138("已停止", "warning"), _0x2a35b2("已停止", "warning")) : (_0x3cc138("[钻石宝箱] 异常: " + _0x11a583["message"], "error"), _0x2a35b2("钻石宝箱开启出错", "error"));
            } finally {
              _0x8ba1de(!0x1), _0x34c666();
            }
          })(_0x3b06af()));
        }, !0x0),
        _0x1d2223 = document["createElement"]("div");
      _0x1d2223["className"] = "bkh-btns", _0x1d2223["appendChild"](_0x3fb144), _0x2dc4b5["appendChild"](_0x1d2223);
      const _0x4dd627 = new Set([0x148d, 0x148e, 0x149f, 0x14a0, 0x7d5]),
        _0x4026b3 = "bkh_openItemIds",
        _0x127232 = [];
      try {
        const _0x1bc9a2 = JSON["parse"](localStorage["getItem"](_0x4026b3) || "[]");
        if (Array["isArray"](_0x1bc9a2)) for (const _0x275596 of _0x1bc9a2) {
          const _0x315ee6 = Number("number" == typeof _0x275596 ? _0x275596 : _0x275596 && _0x275596["id"]),
            _0x4886ad = _0x275596 && _0x275596["name"] ? String(_0x275596["name"]) : "\u9053\u5177" + _0x315ee6,
            _0x41c023 = Number(_0x275596 && _0x275596["qty"] || 0x0);
          !_0x315ee6 || _0x4dd627["has"](_0x315ee6) || _0x127232["some"](_0x3a5865 => _0x3a5865["id"] === _0x315ee6) || _0x127232["push"]({
            id: _0x315ee6,
            name: _0x4886ad,
            qty: _0x41c023
          });
        }
      } catch (_0x5efc05) {}
      try {
        if (Array["isArray"](_0xea72fc)) for (const _0x480acd of _0xea72fc) {
          const _0x2ae843 = Number("number" == typeof _0x480acd ? _0x480acd : _0x480acd && _0x480acd["id"]),
            _0x2d907b = _0x480acd && _0x480acd["name"] ? String(_0x480acd["name"]) : "\u9053\u5177" + _0x2ae843,
            _0x27c1dc = Number(_0x480acd && _0x480acd["qty"] || 0x0);
          !_0x2ae843 || _0x4dd627["has"](_0x2ae843) || _0x127232["some"](_0x2b5ede => _0x2b5ede["id"] === _0x2ae843) || _0x127232["push"]({
            id: _0x2ae843,
            name: _0x2d907b,
            qty: _0x27c1dc
          });
        }
      } catch (_0x132c5a) {}
      const _0x19af2d = () => {
          try {
            localStorage["setItem"](_0x4026b3, JSON["stringify"](_0x127232));
          } catch (_0x4dee68) {}
        },
        _0x59c6cc = document["createElement"]("div");
      _0x59c6cc["className"] = "bkh-sub", _0x59c6cc["textContent"] = "开道具（可添加多个 ID，每个可设数量，0=全部；数量实时显示，可存入脚本）", _0x2dc4b5["appendChild"](_0x59c6cc);
      const _0x3a7642 = document["createElement"]("div");
      _0x3a7642["className"] = "bkh-setrow", _0x3a7642["style"]["flexWrap"] = "wrap";
      const _0x9768fb = {},
        _0x381493 = async () => {
          try {
            const _0x3ee46c = await _0x2d1c0c(),
              _0x5c2dc7 = _0x3ee46c && (_0x3ee46c["items"] || _0x3ee46c["itemList"]) || {};
            for (const _0x55a935 of _0x127232) {
              const _0x428603 = _0x1fa278(_0x5c2dc7, _0x55a935["id"]),
                _0x91ab9c = _0x9768fb[_0x55a935["id"]];
              _0x91ab9c && (_0x91ab9c["text"]["textContent"] = _0x55a935["name"] + ": 拥有 " + _0x5d8dc8(_0x428603), _0x91ab9c["wrap"]["style"]["color"] = "#67c23a");
            }
          } catch (_0x5b55dd) {}
        },
        _0x4bf746 = _0x41dcd2 => {
          const _0x175505 = document["createElement"]("span");
          _0x175505["className"] = "bkh-sub", _0x175505["style"]["margin"] = "0 8px 4px 0", _0x175505["style"]["color"] = "#9AA8C7", _0x175505["style"]["display"] = "inline-flex", _0x175505["style"]["alignItems"] = "center", _0x175505["style"]["gap"] = "2px";
          const _0x529300 = document["createElement"]("span");
          _0x529300["textContent"] = _0x41dcd2["name"] + ": -";
          const _0x1d21bf = _0x427bf7("\u5f00", async () => {
            _0x3b527d() && (await _0x8e3677(_0x3b06af(), _0x41dcd2["id"], _0x41dcd2["qty"] || 0x0), _0x2a35b2("已开 " + _0x41dcd2["name"], "success"));
          }, !0x1);
          _0x1d21bf["style"]["minHeight"] = "20px", _0x1d21bf["style"]["fontSize"] = "10px", _0x1d21bf["style"]["padding"] = "1px 6px", _0x1d21bf["style"]["marginLeft"] = "4px";
          const _0x31dd53 = document["createElement"]("span");
          return _0x31dd53["textContent"] = "\xd7", _0x31dd53["title"] = "\u5220\u9664", _0x31dd53["style"]["cursor"] = "pointer", _0x31dd53["style"]["color"] = "#FCA5A5", _0x31dd53["style"]["fontWeight"] = "700", _0x31dd53["style"]["marginLeft"] = "2px", _0x31dd53["addEventListener"]("click", () => ((_0x48123f, _0x34d984) => {
            const _0x25fb3e = _0x127232["indexOf"](_0x48123f);
            _0x25fb3e >= 0x0 && _0x127232["splice"](_0x25fb3e, 0x1), _0x34d984 && _0x34d984["parentNode"] && _0x34d984["parentNode"]["removeChild"](_0x34d984), delete _0x9768fb[_0x48123f["id"]], _0x19af2d();
          })(_0x41dcd2, _0x175505)), _0x175505["appendChild"](_0x529300), _0x175505["appendChild"](_0x1d21bf), _0x175505["appendChild"](_0x31dd53), _0x3a7642["appendChild"](_0x175505), _0x9768fb[_0x41dcd2["id"]] = {
            wrap: _0x175505,
            text: _0x529300
          }, _0x175505;
        };
      for (const _0x4c4136 of _0x127232) _0x4bf746(_0x4c4136);
      const _0x677a81 = _0x427bf7("\u5237\u65b0", () => {
        _0x381493();
      }, !0x1);
      _0x677a81["style"]["minHeight"] = "24px", _0x677a81["style"]["fontSize"] = "10px", _0x677a81["style"]["padding"] = "3px 8px", _0x3a7642["appendChild"](_0x677a81), _0x2dc4b5["appendChild"](_0x3a7642);
      const _0x51dc84 = document["createElement"]("div");
      _0x51dc84["className"] = "bkh-setrow", _0x51dc84["style"]["marginTop"] = "4px";
      const _0x24297e = document["createElement"]("input");
      _0x24297e["type"] = "number", _0x24297e["placeholder"] = "道具ID", _0x24297e["className"] = "bkh-input", _0x24297e["style"]["flex"] = "1";
      const _0x2c8825 = document["createElement"]("input");
      _0x2c8825["type"] = "text", _0x2c8825["placeholder"] = "\u540d\u79f0", _0x2c8825["className"] = "bkh-input", _0x2c8825["style"]["flex"] = "1";
      const _0x2ee4fb = document["createElement"]("input");
      _0x2ee4fb["type"] = "number", _0x2ee4fb["placeholder"] = "数量0=全部", _0x2ee4fb["value"] = "0", _0x2ee4fb["className"] = "bkh-input", _0x2ee4fb["style"]["flex"] = "0 0 70px";
      const _0x572c0b = _0x427bf7("\u6dfb\u52a0", () => {
        const _0x2b60bd = Number(_0x24297e["value"]);
        if (!_0x2b60bd || isNaN(_0x2b60bd)) return void _0x2a35b2("请输入有效道具ID", "error");
        if (_0x4dd627["has"](_0x2b60bd)) return void _0x2a35b2("该ID为内置项，无需添加", "warning");
        if (_0x127232["some"](_0x802938 => _0x802938["id"] === _0x2b60bd)) return void _0x2a35b2("该ID已存在", "warning");
        const _0x27283b = _0x2c8825["value"]["trim"]() || "\u9053\u5177" + _0x2b60bd,
          _0x2d9e31 = Math["max"](0x0, Number(_0x2ee4fb["value"]) || 0x0),
          _0x5bfcd1 = {
            id: _0x2b60bd,
            name: _0x27283b,
            qty: _0x2d9e31
          };
        _0x127232["push"](_0x5bfcd1), _0x4bf746(_0x5bfcd1), _0x24297e["value"] = "", _0x2c8825["value"] = "", _0x2ee4fb["value"] = "0", _0x19af2d(), _0x381493();
      }, !0x1);
      _0x572c0b["style"]["minHeight"] = "26px", _0x572c0b["style"]["fontSize"] = "10px", _0x572c0b["style"]["padding"] = "4px 8px";
      const _0x125532 = _0x427bf7("复制配置", () => {
        const _0x1def8f = "USER_OPEN_ITEMS = " + JSON["stringify"](_0x127232) + ";";
        try {
          navigator["clipboard"] && navigator["clipboard"]["writeText"] ? navigator["clipboard"]["writeText"](_0x1def8f)["then"](() => _0x2a35b2("配置已复制，粘贴到脚本 USER_OPEN_ITEMS 即可永久保存", "success"), () => {
            prompt("复制以下配置到脚本 USER_OPEN_ITEMS：", _0x1def8f);
          }) : prompt("复制以下配置到脚本 USER_OPEN_ITEMS：", _0x1def8f);
        } catch (_0x10c8ca) {
          prompt("复制以下配置到脚本 USER_OPEN_ITEMS：", _0x1def8f);
        }
      }, !0x1);
      _0x125532["style"]["minHeight"] = "26px", _0x125532["style"]["fontSize"] = "10px", _0x125532["style"]["padding"] = "4px 8px", _0x51dc84["appendChild"](_0x24297e), _0x51dc84["appendChild"](_0x2c8825), _0x51dc84["appendChild"](_0x2ee4fb), _0x51dc84["appendChild"](_0x572c0b), _0x51dc84["appendChild"](_0x125532), _0x2dc4b5["appendChild"](_0x51dc84);
      const _0x5e8a1e = _0x427bf7("批量开道具", async () => {
          if (_0x3b527d()) {
            if (0x0 !== _0x127232["length"]) {
              for (const _0x30d879 of _0x127232) {
                if (_0x2dcbe4["value"]) break;
                if (await _0x8e3677(_0x3b06af(), _0x30d879["id"], _0x30d879["qty"] || 0x0), _0x2dcbe4["value"]) break;
              }
              _0x2a35b2("批量开道具完成", "success");
            } else _0x2a35b2("请先添加要开的道具ID", "warning");
          }
        }, !0x0),
        _0x1daae3 = document["createElement"]("div");
      _0x1daae3["className"] = "bkh-btns", _0x1daae3["appendChild"](_0x5e8a1e), _0x2dc4b5["appendChild"](_0x1daae3), _0x381493();
    }, !0x1)), _0x10bb12["appendChild"](_0x41907b("一键消耗活动", _0x340269 => {
      const _0x475e4e = document["createElement"]("div");
      _0x475e4e["className"] = "bkh-desc", _0x475e4e["textContent"] = "自动完成招募、宝箱、钓鱼、金砖消耗任务，按已消耗进度补差额，避免用超", _0x340269["appendChild"](_0x475e4e);
      const _0x193555 = document["createElement"]("div");
      _0x193555["className"] = "bkh-chips";
      const _0x806203 = document["createElement"]("label");
      _0x806203["className"] = "bkh-chip";
      const _0x626e31 = document["createElement"]("input");
      _0x626e31["type"] = "checkbox", _0x806203["appendChild"](_0x626e31), _0x806203["appendChild"](document["createTextNode"]("宝箱只开铂金宝箱")), _0x193555["appendChild"](_0x806203);
      const _0x5014c8 = document["createElement"]("label");
      _0x5014c8["className"] = "bkh-chip";
      const _0x47a05c = document["createElement"]("input");
      _0x47a05c["type"] = "checkbox", _0x5014c8["appendChild"](_0x47a05c), _0x5014c8["appendChild"](document["createTextNode"]("开钻石宝箱")), _0x193555["appendChild"](_0x5014c8), _0x340269["appendChild"](_0x193555);
      const _0x22dab4 = document["createElement"]("div");
      _0x22dab4["className"] = "bkh-setrow";
      const _0x2a234a = document["createElement"]("span");
      _0x2a234a["textContent"] = "鱼竿档位", _0x2a234a["className"] = "bkh-label";
      const _0x1e3b98 = document["createElement"]("select");
      _0x1e3b98["className"] = "bkh-select";
      const _0x3215ae = document["createElement"]("option");
      _0x3215ae["value"] = "0", _0x3215ae["textContent"] = "默认 750", _0x1e3b98["appendChild"](_0x3215ae), (_0x3962ad[0x3] || [])["forEach"]((_0x21811c, _0x4b7f85) => {
        const _0x26f574 = document["createElement"]("option");
        _0x26f574["value"] = String(_0x21811c), _0x26f574["textContent"] = "档" + (_0x4b7f85 + 0x1) + "（" + _0x5d8dc8(_0x21811c) + "）", _0x1e3b98["appendChild"](_0x26f574);
      }), _0x22dab4["appendChild"](_0x2a234a), _0x22dab4["appendChild"](_0x1e3b98), _0x340269["appendChild"](_0x22dab4);
      const _0x33bfea = document["createElement"]("div");
      _0x33bfea["className"] = "bkh-setrow";
      const _0x58a21a = document["createElement"]("span");
      _0x58a21a["textContent"] = "金砖档位", _0x58a21a["className"] = "bkh-label";
      const _0x525dde = document["createElement"]("select");
      _0x525dde["className"] = "bkh-select";
      const _0x1e0bc6 = document["createElement"]("option");
      _0x1e0bc6["value"] = "0", _0x1e0bc6["textContent"] = "不消耗（跳过）", _0x525dde["appendChild"](_0x1e0bc6), (_0x3962ad[0x5] || [])["forEach"]((_0x2e06ea, _0xb11a08) => {
        const _0x32c60b = document["createElement"]("option");
        _0x32c60b["value"] = String(_0x2e06ea), _0x32c60b["textContent"] = "档" + (_0xb11a08 + 0x1) + "（" + _0x5d8dc8(_0x2e06ea) + "）", _0x525dde["appendChild"](_0x32c60b);
      }), _0x33bfea["appendChild"](_0x58a21a), _0x33bfea["appendChild"](_0x525dde), _0x340269["appendChild"](_0x33bfea);
      const _0x479b97 = _0x427bf7("一键消耗活动", async () => {
          _0x3b527d() && (await (async (_0xdab04e, _0x16b65d = !0x1, _0x34600f = 0x0, _0x5b115f = 0x0, _0x4de16c = !0x1) => {
            _0x2dcbe4["value"] = !0x1, _0x8ba1de(!0x0);
            try {
              _0x3cc138("获取活动数据...", "info");
              const _0x366ae3 = await _0x484eec(),
                _0x190fb1 = await _0x2d1c0c();
              await _0x23c5d3(_0xdab04e);
              const _0x59d129 = _0x2a1c56(_0x366ae3);
              if (!_0x59d129) return _0x3cc138("未读到消耗活动数据（活动未开启或结构异常）", "warning"), void _0x2a35b2("未读到活动数据", "warning");
              let _0xfe7572 = _0xeeb183(_0x59d129);
              _0x3cc138("当前进度: " + _0xfe7572["map"](_0x26bb24 => {
                const _0x55d951 = _0x515071(_0x26bb24["id"]);
                return _0x26bb24["name"] + "(" + (_0x26bb24["isCompleted"] ? "\u5df2\u6ee1" : _0x5d8dc8(_0x26bb24["current"]) + "/" + _0x5d8dc8(_0x55d951)) + ")";
              })["join"](" | "), "info");
              const _0x2770b5 = _0x190fb1 && (_0x190fb1["items"] || _0x190fb1["itemList"]) || {},
                _0x240bb9 = 0x3e8;
              let _0x3f15f7 = 0x0,
                _0x38dbbf = _0xfe7572["find"](_0x3f22a2 => 0x1 === _0x3f22a2["id"]),
                _0x596d66 = 0x0;
              for (; _0x38dbbf && !_0x38dbbf["isCompleted"] && !_0x2dcbe4["value"];) {
                const _0x363d04 = _0x515071(0x1),
                  _0x397478 = _0x363d04 - _0x38dbbf["current"];
                if (_0x397478 <= 0x0) break;
                let _0x166206 = 0x0;
                try {
                  const _0x52a8df = await _0x2d1c0c();
                  _0x166206 = _0x1fa278(_0x52a8df && (_0x52a8df["items"] || _0x52a8df["itemList"]), 0x3e9);
                } catch (_0x584b82) {
                  _0x166206 = _0x1fa278(_0x2770b5, 0x3e9);
                }
                const _0x13bb88 = Math["min"](_0x397478, _0x166206, _0x240bb9);
                if (_0x13bb88 <= 0x0) {
                  0x0 === _0x3f15f7 && _0x3cc138("[招募] 招募令不足（需" + _0x5d8dc8(_0x397478) + "，有" + _0x5d8dc8(_0x166206) + "），跳过", "warning");
                  break;
                }
                _0x3cc138("[招募] 当前" + _0x5d8dc8(_0x38dbbf["current"]) + "，目标" + _0x5d8dc8(_0x363d04) + "，差" + _0x5d8dc8(_0x397478) + "，可用" + _0x5d8dc8(_0x166206) + "，本轮" + _0x5d8dc8(_0x13bb88), "info");
                const _0x15d378 = _0x38dbbf["current"];
                try {
                  await _0x4e55f4("hero_recruit", _0x2bdff2 => ({
                    recruitType: 0x1,
                    recruitNumber: _0x2bdff2,
                    byClub: !0x1
                  }), _0x13bb88, "\u62db\u52df", _0xdab04e, !0x0), _0x3f15f7 += _0x13bb88;
                } catch (_0xa99f49) {
                  if ("用户停止" === _0xa99f49["message"]) throw _0xa99f49;
                  _0x3cc138("[招募] 失败: " + _0xa99f49["message"], "warning");
                  break;
                }
                await _0x23c5d3(0x1f4);
                try {
                  const _0x41a7f0 = _0xeeb183(_0x2a1c56(await _0x484eec()) || _0x59d129);
                  _0x41a7f0 && _0x41a7f0["length"] > 0x0 && (_0xfe7572 = _0x41a7f0);
                } catch (_0x36c353) {}
                if (_0x38dbbf = _0xfe7572["find"](_0x2d2b9e => 0x1 === _0x2d2b9e["id"]), _0x38dbbf && _0x38dbbf["current"] <= _0x15d378) {
                  if (_0x596d66++, _0x596d66 >= 0x3) {
                    _0x3cc138("[招募] 连续 " + _0x596d66 + " 次进度无变化，停止招募", "warning");
                    break;
                  }
                } else _0x596d66 = 0x0;
              }
              _0x3f15f7 > 0x0 && _0x3cc138("[招募] 共完成 x" + _0x3f15f7, "success");
              const _0xb24bcd = async () => {
                let _0x23390c = _0xfe7572["find"](_0x23445e => 0x2 === _0x23445e["id"]);
                if (_0x23390c && !_0x23390c["isCompleted"]) {
                  _0x3cc138("[宝箱] 开始循环开箱 (当前" + _0x5d8dc8(_0x23390c["current"]) + "分)" + (_0x16b65d ? "，仅开铂金宝箱" : ""), "info");
                  let _0x3cc619 = 0x0,
                    _0x4aed26 = 0x0,
                    _0x27af13 = 0x0;
                  const _0x5cbc24 = 0x32,
                    _0x17fbb3 = _0x16b65d ? _0x3bcec5["filter"](_0x502687 => 0x7d4 === _0x502687["id"]) : _0x3bcec5;
                  let _0x40f3e7 = 0x0,
                    _0x3c89ea = _0x2770b5;
                  for (; _0x3cc619 < _0x5cbc24 && !_0x2dcbe4["value"] && (_0x3cc619++, _0x23390c = _0xfe7572["find"](_0x144bae => 0x2 === _0x144bae["id"]), _0x23390c && !_0x23390c["isCompleted"]);) {
                    const _0x2a17fd = _0x515071(0x2) - _0x23390c["current"];
                    if (_0x2a17fd <= 0x0) break;
                    try {
                      const _0x483c84 = await _0x2d1c0c();
                      _0x483c84 && (_0x483c84["items"] || _0x483c84["itemList"]) && (_0x3c89ea = _0x483c84["items"] || _0x483c84["itemList"]);
                    } catch (_0x3aed19) {}
                    const _0x546e1f = [];
                    let _0x145f61 = _0x2a17fd;
                    for (const _0x4bcece of _0x17fbb3) {
                      if (_0x145f61 <= 0x0) break;
                      const _0x1af161 = _0x1fa278(_0x3c89ea, _0x4bcece["id"]);
                      if (_0x1af161 <= 0x0) continue;
                      const _0xeb0384 = 0xa * Math["floor"](_0x1af161 / 0xa);
                      if (_0xeb0384 <= 0x0) continue;
                      const _0x1f0d40 = Math["ceil"](_0x145f61 / _0x4bcece["points"]);
                      let _0x22c23f;
                      _0x22c23f = 0x7d1 === _0x4bcece["id"] ? Math["min"](0xa * Math["ceil"](_0x1f0d40 / 0xa), _0xeb0384) : Math["min"](0xa * Math["floor"](_0x1f0d40 / 0xa), _0xeb0384), _0x22c23f <= 0x0 || (_0x546e1f["push"]({
                        typeId: _0x4bcece["id"],
                        name: _0x4bcece["name"],
                        qty: _0x22c23f,
                        points: _0x4bcece["points"]
                      }), _0x145f61 -= _0x22c23f * _0x4bcece["points"]);
                    }
                    if (0x0 === _0x546e1f["length"]) {
                      _0x3cc138("[宝箱] " + (_0x16b65d ? "铂金宝箱" : "\u5b9d\u7bb1") + "不足（" + _0x17fbb3["map"](_0xce2931 => "" + _0xce2931["name"] + _0x5d8dc8(_0x1fa278(_0x3c89ea, _0xce2931["id"])))["join"]("/") + "），还剩" + _0x5d8dc8(_0x2a17fd) + "分", "warning");
                      break;
                    }
                    const _0xd89a82 = _0x546e1f["map"](_0x2012a5 => _0x2012a5["name"] + "x" + _0x2012a5["qty"])["join"](" + ");
                    _0x3cc138("[宝箱] 第" + _0x3cc619 + "轮: 差" + _0x5d8dc8(_0x2a17fd) + "分 → " + _0xd89a82, "info");
                    let _0x17cebb = 0x0;
                    for (const _0x3a5bc3 of _0x546e1f) {
                      if (_0x2dcbe4["value"]) break;
                      try {
                        await _0x4e55f4("item_openbox", _0x3b65eb => ({
                          itemId: _0x3a5bc3["typeId"],
                          number: _0x3b65eb
                        }), _0x3a5bc3["qty"], "开" + _0x3a5bc3["name"], _0xdab04e), _0x17cebb += _0x3a5bc3["qty"], _0x4aed26 += _0x3a5bc3["qty"], _0x27af13 += _0x3a5bc3["qty"] * _0x3a5bc3["points"];
                      } catch (_0x3548dc) {
                        if ("用户停止" === _0x3548dc["message"]) throw _0x3548dc;
                        _0x3cc138("开" + _0x3a5bc3["name"] + "失败: " + _0x3548dc["message"], "warning");
                      }
                    }
                    try {
                      await _0x28a129("item_batchclaimboxpointreward", {});
                    } catch (_0x347652) {}
                    await _0x23c5d3(0x1f4);
                    const _0x3eb117 = _0x23390c["current"];
                    try {
                      const _0x27b48b = _0xeeb183(_0x2a1c56(await _0x484eec()) || _0x59d129);
                      _0x27b48b && _0x27b48b["length"] > 0x0 && (_0xfe7572 = _0x27b48b);
                    } catch (_0x18dd32) {}
                    const _0x4cbfd8 = _0xfe7572["find"](_0x23f03e => 0x2 === _0x23f03e["id"]);
                    if (!_0x4cbfd8 || _0x4cbfd8["isCompleted"]) {
                      _0x3cc138("[宝箱] 已达满档", "success");
                      break;
                    }
                    const _0x2a4906 = _0x515071(0x2) - _0x4cbfd8["current"];
                    if (_0x3cc138("[宝箱] 进度 " + _0x5d8dc8(_0x4cbfd8["current"]) + "/" + _0x5d8dc8(_0x515071(0x2)) + "，还差" + _0x5d8dc8(_0x2a4906) + "分", "info"), _0x2a4906 <= 0x0) break;
                    if (0x0 === _0x17cebb) {
                      _0x3cc138("🛑 本轮开箱全部失败（限流/不足），停止开箱", "warning");
                      break;
                    }
                    if (_0x4cbfd8["current"] <= _0x3eb117) {
                      if (_0x40f3e7++, _0x40f3e7 >= 0x3) {
                        _0x3cc138("[宝箱] 连续 " + _0x40f3e7 + " 次进度无变化，停止开箱", "warning");
                        break;
                      }
                    } else _0x40f3e7 = 0x0;
                  }
                  try {
                    await _0x28a129("item_batchclaimboxpointreward", {});
                  } catch (_0x5c568c) {}
                  _0x3cc138("[宝箱] 完成：共" + _0x3cc619 + "轮，开" + _0x4aed26 + "个，累计" + _0x5d8dc8(_0x27af13) + "分", "success");
                } else _0x23390c && _0x23390c["isCompleted"] && _0x3cc138("[宝箱] 已达满档，跳过", "info");
              };
              await _0xb24bcd(), _0x4de16c && !_0x2dcbe4["value"] && (await _0x2bc6ad(_0xdab04e));
              const _0x4f6dc1 = 0x258;
              let _0x1c8b0f = _0xfe7572["find"](_0x2ad8e6 => 0x5 === _0x2ad8e6["id"]);
              if (_0x1c8b0f && !_0x1c8b0f["isCompleted"] && _0x5b115f > 0x0) {
                const _0x21ffc9 = _0x5b115f,
                  _0x484b07 = Math["max"](0x0, _0x21ffc9 - _0x1c8b0f["current"]);
                if (_0x484b07 > 0x0) {
                  let _0x4ac4f1 = Number(_0x190fb1 && _0x190fb1["diamond"] || 0x0);
                  try {
                    const _0x333a3f = await _0x2d1c0c();
                    _0x4ac4f1 = Number(_0x333a3f && _0x333a3f["diamond"] || _0x4ac4f1);
                  } catch (_0x184aee) {}
                  const _0x41a1ff = Math["ceil"](_0x484b07 / _0x4f6dc1),
                    _0x2faa22 = _0x41a1ff * _0x4f6dc1;
                  if (_0x3cc138("[金砖] 已消耗" + _0x5d8dc8(_0x1c8b0f["current"]) + "，目标" + _0x5d8dc8(_0x21ffc9) + "，还需" + _0x5d8dc8(_0x484b07) + "，需买" + _0x41a1ff + "根鱼竿（约" + _0x5d8dc8(_0x2faa22) + "💎，余额" + _0x5d8dc8(_0x4ac4f1) + "💎）", "info"), _0x4ac4f1 >= _0x2faa22) try {
                    await _0x28a129("system_buyitem", {
                      itemId: 0x3f4,
                      buyNum: _0x41a1ff
                    }), _0x3cc138("[金砖] 购买黄金鱼竿 x" + _0x41a1ff + " 成功（消耗约" + _0x5d8dc8(_0x2faa22) + "💎）", "success");
                  } catch (_0x2944d1) {
                    if ("用户停止" === _0x2944d1["message"]) throw _0x2944d1;
                    _0x3cc138("[金砖] 购买鱼竿失败: " + _0x2944d1["message"], "warning");
                  } else _0x3cc138("[金砖] 金砖不足（需" + _0x5d8dc8(_0x2faa22) + "💎，余额" + _0x5d8dc8(_0x4ac4f1) + "💎），跳过", "warning");
                } else _0x3cc138("[金砖] 已达成目标档位 " + _0x5d8dc8(_0x21ffc9) + "，跳过", "info");
              } else _0x1c8b0f && _0x1c8b0f["isCompleted"] ? _0x3cc138("[金砖] 已达满档，跳过", "info") : !_0x1c8b0f || _0x1c8b0f["isCompleted"] || _0x5b115f > 0x0 || _0x3cc138("[金砖] 当前" + _0x5d8dc8(_0x1c8b0f["current"]) + "/" + _0x5d8dc8(_0x515071(0x5)) + "（未选择档位，跳过）", "info");
              let _0x1d6fa7 = _0xfe7572["find"](_0x115444 => 0x3 === _0x115444["id"]);
              if (_0x1d6fa7 && !_0x1d6fa7["isCompleted"]) {
                const _0x1c658b = _0x34600f > 0x0 ? _0x34600f : 0x2ee,
                  _0x14d8fa = Math["max"](0x0, _0x1c658b - _0x1d6fa7["current"]);
                if (_0x14d8fa > 0x0) {
                  _0x3cc138("[钓鱼] 黄金鱼竿 已消耗" + _0x5d8dc8(_0x1d6fa7["current"]) + "，目标" + _0x5d8dc8(_0x1c658b) + "，还需" + _0x5d8dc8(_0x14d8fa), "info");
                  try {
                    await _0x28a129("artifact_exchange", {}), _0x3cc138("[钓鱼] 金鱼竿领取成功", "success");
                  } catch (_0x36a394) {
                    /400180/["test"](String(_0x36a394 && _0x36a394["message"] || "")) || _0x3cc138("[钓鱼] 金鱼竿领取失败: " + _0x36a394["message"] + "，继续钓鱼", "warning");
                  }
                  await _0x23c5d3(_0xdab04e);
                  const _0x39a3cd = await _0x2d1c0c(),
                    _0x220c26 = _0x1fa278(_0x39a3cd && (_0x39a3cd["items"] || _0x39a3cd["itemList"]) || {}, 0x3f4),
                    _0x10aba0 = Math["min"](_0x14d8fa, _0x220c26);
                  if (_0x10aba0 > 0x0) {
                    _0x3cc138("[钓鱼] 黄金鱼竿库存" + _0x5d8dc8(_0x220c26) + "，执行" + _0x5d8dc8(_0x10aba0) + "次（仅补差额，避免用超）", "info");
                    try {
                      await _0x4e55f4("artifact_lottery", _0x397cce => ({
                        type: 0x2,
                        lotteryNumber: _0x397cce,
                        newFree: !0x0
                      }), _0x10aba0, "\u9493\u9c7c", _0xdab04e), _0x3cc138("[钓鱼] 完成 x" + _0x10aba0, "success");
                    } catch (_0x4f200d) {
                      if ("用户停止" === _0x4f200d["message"]) throw _0x4f200d;
                      _0x3cc138("[钓鱼] 失败: " + _0x4f200d["message"], "warning");
                    }
                  } else _0x3cc138("[钓鱼] 黄金鱼竿不足（需" + _0x5d8dc8(_0x14d8fa) + "，有" + _0x5d8dc8(_0x220c26) + "），跳过", "warning");
                }
              } else _0x1d6fa7 && _0x1d6fa7["isCompleted"] && _0x3cc138("[钓鱼] 已达满档，跳过", "info");
              if (!_0x2dcbe4["value"]) {
                try {
                  const _0x407ba3 = _0xeeb183(_0x2a1c56(await _0x484eec()) || _0x59d129);
                  _0x407ba3 && _0x407ba3["length"] > 0x0 && (_0xfe7572 = _0x407ba3);
                } catch (_0x3f5779) {}
                const _0xa1a45f = _0xfe7572["find"](_0x46eb1e => 0x2 === _0x46eb1e["id"]);
                _0xa1a45f && !_0xa1a45f["isCompleted"] ? (_0x3cc138("[宝箱] 钓鱼后刷新条件，宝箱未满足，继续完成宝箱任务", "info"), await _0xb24bcd()) : _0x3cc138("[宝箱] 钓鱼后检查：宝箱已满足，无需补充", "info");
              }
              const _0x682e30 = _0xfe7572["find"](_0x2213aa => 0x4 === _0x2213aa["id"]);
              _0x3cc138("[盐罐] " + (_0x682e30?.["isCompleted"] ? "\u5df2\u6ee1" : _0x5d8dc8(_0x682e30?.["current"] || 0x0) + "/" + _0x5d8dc8(_0x515071(0x4))) + "（需手动完成）", "info"), _0x2dcbe4["value"] ? (_0x3cc138("消耗活动已停止", "warning"), _0x2a35b2("已停止", "warning")) : (_0x3cc138("消耗活动执行完成", "success"), _0x2a35b2("消耗活动完成!", "success"));
            } catch (_0x2a33cb) {
              "用户停止" === _0x2a33cb["message"] ? (_0x3cc138("已停止", "warning"), _0x2a35b2("已停止", "warning")) : (_0x3cc138("消耗活动异常: " + _0x2a33cb["message"], "error"), _0x2a35b2("消耗活动出错", "error"));
            } finally {
              _0x8ba1de(!0x1), _0x34c666();
            }
          })(_0x3b06af(), _0x626e31["checked"], Number(_0x1e3b98["value"]) || 0x0, Number(_0x525dde["value"]) || 0x0, _0x47a05c["checked"]));
        }, !0x0),
        _0x12850d = document["createElement"]("div");
      _0x12850d["className"] = "bkh-btns", _0x12850d["appendChild"](_0x479b97), _0x340269["appendChild"](_0x12850d);
    }, !0x0)), _0x10bb12["appendChild"](_0x41907b("一键领取奖励", _0x1c77c0 => {
      const _0x1bc027 = document["createElement"]("div");
      _0x1bc027["className"] = "bkh-desc", _0x1bc027["textContent"] = "领取免费道具 + 任务档位奖励(1~100档) + 里程碑进度奖励", _0x1c77c0["appendChild"](_0x1bc027);
      const _0x2ef52e = document["createElement"]("div");
      _0x2ef52e["className"] = "bkh-chips";
      const _0x21632b = document["createElement"]("label");
      _0x21632b["className"] = "bkh-chip";
      const _0x4e98f6 = document["createElement"]("input");
      _0x4e98f6["type"] = "checkbox", _0x4e98f6["checked"] = !0x1, _0x21632b["appendChild"](_0x4e98f6), _0x21632b["appendChild"](document["createTextNode"]("里程碑领取")), _0x2ef52e["appendChild"](_0x21632b), _0x1c77c0["appendChild"](_0x2ef52e);
      const _0x43acd1 = document["createElement"]("div");
      _0x43acd1["className"] = "bkh-btns";
      const _0x4101a2 = _0x427bf7("一键领取奖励", async () => {
        _0x3b527d() && (await (async (_0x343af8, _0x219e09 = !0x0) => {
          _0x2dcbe4["value"] = !0x1, _0x8ba1de(!0x0);
          const _0xaaba7 = Math["max"](0x64, Number(_0x343af8) || 0x96);
          try {
            _0x3cc138("获取活动数据...", "info");
            const _0x2151db = await _0x484eec(),
              _0x2100fa = _0x435e15(_0x2151db),
              _0x1dbbe8 = _0x221e5f(_0x2151db, null),
              _0x31ec63 = _0x2100fa["consumeActivityId"],
              _0x364b97 = _0x2100fa["freeActivityId"],
              _0x4144a3 = _0x2100fa["freeGoodsId"],
              _0x352e55 = _0x1dbbe8;
            if (!_0x31ec63 && !_0x364b97) return _0x3cc138("未解析到消耗活动数据（活动条目: " + (_0x2100fa["entryKeys"]["slice"](0x0, 0xa)["join"](",") || "\u65e0") + "）", "warning"), void _0x2a35b2("未找到活动数据", "warning");
            if (_0x3cc138("消耗活动ID: " + _0x31ec63 + "，免费道具ID: " + _0x364b97 + "，里程碑ID: " + _0x352e55, "info"), _0x364b97 && _0x4144a3) {
              _0x3cc138("领取免费道具 (goodsId: " + _0x4144a3 + ")...", "info");
              try {
                await _0x28a129("activity_commonbuygoods", {
                  goodsId: _0x4144a3,
                  num: 0x1
                }), _0x3cc138("免费道具领取成功", "success");
              } catch (_0x5e53d0) {
                const _0x38cf84 = String(_0x5e53d0 && _0x5e53d0["message"] || "");
                /700010|1100010|already/["test"](_0x38cf84) ? _0x3cc138("免费道具已领取过", "info") : _0x3cc138("免费道具领取失败: " + _0x38cf84, "warning");
              }
              await _0x23c5d3(_0xaaba7);
            } else _0x3cc138("无免费道具活动，跳过", "info");
            let _0x1d7a6b = 0x0,
              _0x2b335c = 0x0;
            const _0xbbc3a4 = [],
              _0x1d91fe = [];
            if (_0x31ec63) {
              for (let _0xe01471 = 0x1; _0xe01471 <= 0x64 && !_0x2dcbe4["value"]; _0xe01471++) {
                try {
                  await _0x28a129("activity_claimtaskreward", {
                    activityId: _0x31ec63,
                    missionId: _0xe01471
                  }), _0x1d7a6b++, _0xbbc3a4["push"](_0xe01471);
                } catch (_0x398840) {
                  const _0x279fac = String(_0x398840 && _0x398840["message"] || "");
                  _0x3c6613(_0x279fac) ? _0x2b335c++ : (_0x1d91fe["push"]({
                    missionId: _0xe01471,
                    msg: _0x279fac
                  }), _0x3cc138("第" + _0xe01471 + "档领取失败: " + _0x279fac, "warning"));
                }
                _0xe01471 % 0x14 == 0x0 && (_0x3ad6a6(_0xe01471, 0x64, "领取档位"), _0x3cc138("档位进度 " + _0xe01471 + "/100（成功" + _0x1d7a6b + "，跳过" + _0x2b335c + "，失败" + _0x1d91fe["length"] + "）", "info")), await _0x23c5d3(_0xaaba7);
              }
              _0x3cc138("档位领取完成: 成功" + _0x1d7a6b + "档，跳过" + _0x2b335c + "档，失败" + _0x1d91fe["length"] + "档", _0x1d91fe["length"] > 0x0 ? "warning" : "success");
            }
            let _0x8e2883 = 0x0;
            if (_0x352e55 && _0x219e09) {
              for (let _0x5014e1 = 0x0; _0x5014e1 < 0x64 && !_0x2dcbe4["value"]; _0x5014e1++) try {
                await _0x28a129("activity_claimmilestone", {
                  activityId: _0x352e55
                }), _0x8e2883++, await _0x23c5d3(_0xaaba7);
              } catch (_0x18de28) {
                const _0x57b4bc = String(_0x18de28 && _0x18de28["message"] || ""),
                  _0x1b5f02 = _0x13fd54(_0x57b4bc);
                if (_0x1b5f02 || _0x3c6613(_0x57b4bc)) {
                  0x0 === _0x8e2883 && _0x3cc138("里程碑奖励: " + (_0x1b5f02 ? "当前未达标" : "暂无可领取"), "info");
                  break;
                }
                _0x3cc138("里程碑奖励失败: " + _0x57b4bc, "warning");
                break;
              }
              _0x8e2883 > 0x0 && _0x3cc138("里程碑奖励领取成功 x" + _0x8e2883, "success");
            }
            _0x2dcbe4["value"] ? (_0x3cc138("领取已停止", "warning"), _0x2a35b2("已停止", "warning")) : (_0x3cc138("奖励领取完成", "success"), _0x2a35b2("领取完成!", "success"));
          } catch (_0x383d5b) {
            "用户停止" === _0x383d5b["message"] ? (_0x3cc138("已停止", "warning"), _0x2a35b2("已停止", "warning")) : (_0x3cc138("领取异常: " + _0x383d5b["message"], "error"), _0x2a35b2("领取出错", "error"));
          } finally {
            _0x8ba1de(!0x1), _0x34c666();
          }
        })(_0x3b06af(), _0x4e98f6["checked"]));
      }, !0x0);
      _0x43acd1["appendChild"](_0x4101a2);
      const _0x42d264 = _0x427bf7("领取里程碑", async () => {
        _0x3b527d() && (await (async _0x4c03ab => {
          _0x2dcbe4["value"] = !0x1, _0x8ba1de(!0x0);
          const _0x27e4ff = Math["max"](0x64, Number(_0x4c03ab) || 0x96);
          try {
            _0x3cc138("获取活动数据...", "info");
            const _0x14fcb5 = _0x221e5f(await _0x484eec(), null);
            if (!_0x14fcb5) return _0x3cc138("未识别到里程碑活动ID，跳过里程碑领取", "info"), void _0x2a35b2("未找到里程碑活动", "warning");
            _0x3cc138("里程碑活动ID: " + _0x14fcb5, "info");
            let _0x30dfd1 = 0x0;
            for (let _0x4a8d59 = 0x0; _0x4a8d59 < 0x64 && !_0x2dcbe4["value"]; _0x4a8d59++) try {
              await _0x28a129("activity_claimmilestone", {
                activityId: _0x14fcb5
              }), _0x30dfd1++, await _0x23c5d3(_0x27e4ff);
            } catch (_0x457dda) {
              const _0x37e8fc = String(_0x457dda && _0x457dda["message"] || ""),
                _0x13c8a9 = _0x13fd54(_0x37e8fc);
              if (_0x13c8a9 || _0x3c6613(_0x37e8fc)) {
                0x0 === _0x30dfd1 && _0x3cc138("里程碑奖励: " + (_0x13c8a9 ? "当前未达标" : "暂无可领取"), "info");
                break;
              }
              _0x3cc138("里程碑奖励失败: " + _0x37e8fc, "warning");
              break;
            }
            _0x30dfd1 > 0x0 && _0x3cc138("里程碑奖励领取成功 x" + _0x30dfd1, "success"), _0x2dcbe4["value"] ? (_0x3cc138("领取已停止", "warning"), _0x2a35b2("已停止", "warning")) : (_0x3cc138("里程碑领取完成", "success"), _0x2a35b2("里程碑领取完成!", "success"));
          } catch (_0x45dc8e) {
            "用户停止" === _0x45dc8e["message"] ? (_0x3cc138("已停止", "warning"), _0x2a35b2("已停止", "warning")) : (_0x3cc138("里程碑领取异常: " + _0x45dc8e["message"], "error"), _0x2a35b2("领取出错", "error"));
          } finally {
            _0x8ba1de(!0x1), _0x34c666();
          }
        })(_0x3b06af()));
      }, !0x1);
      _0x43acd1["appendChild"](_0x42d264), _0x1c77c0["appendChild"](_0x43acd1);
    }, !0x1)), _0x10bb12["appendChild"](_0x41907b("兑换商店", _0x15f4c8 => {
      const _0x31e66f = document["createElement"]("div");
      _0x31e66f["className"] = "bkh-desc", _0x31e66f["textContent"] = "勾选要兑换的商品（goodsId 动态解析，每个默认购买 1 次）", _0x15f4c8["appendChild"](_0x31e66f);
      const _0x37d5f2 = document["createElement"]("div");
      _0x37d5f2["className"] = "bkh-chips";
      const _0xc91fb2 = {};
      _0xe1daae["forEach"](_0x467009 => {
        const _0x2e1aac = document["createElement"]("label");
        _0x2e1aac["className"] = "bkh-chip";
        const _0x3fe09b = document["createElement"]("input");
        _0x3fe09b["type"] = "checkbox", _0xc91fb2[_0x467009["index"]] = _0x3fe09b, _0x2e1aac["appendChild"](_0x3fe09b), _0x2e1aac["appendChild"](document["createTextNode"](_0x467009["name"])), _0x37d5f2["appendChild"](_0x2e1aac);
      }), _0x15f4c8["appendChild"](_0x37d5f2);
      const _0x12a258 = _0x427bf7("兑换选中商品", async () => {
          if (!_0x3b527d()) return;
          const _0x31350d = _0xe1daae["filter"](_0x2f639d => _0xc91fb2[_0x2f639d["index"]]["checked"])["map"](_0x1e9214 => _0x1e9214["index"]);
          await (async (_0x3f21de, _0x1da084) => {
            _0x2dcbe4["value"] = !0x1, _0x8ba1de(!0x0);
            try {
              if (!_0x1da084 || 0x0 === _0x1da084["length"]) return void _0x2a35b2("请至少选择一个商品", "error");
              _0x3cc138("获取兑换商店数据...", "info");
              const _0x38c2b5 = _0x54330f(await _0x484eec()),
                _0x32c4d6 = _0x38c2b5["activityId"];
              if (!_0x32c4d6) return _0x3cc138("未解析到兑换商店（活动未开启或结构异常）", "warning"), void _0x2a35b2("未找到兑换商店", "warning");
              _0x3cc138("兑换商店ID: " + _0x32c4d6, "info");
              let _0x5d1b63 = 0x0,
                _0x4a944a = 0x0;
              for (const _0x3c543a of _0x1da084) {
                if (_0x2dcbe4["value"]) break;
                const _0x159387 = _0xe1daae["find"](_0xac014c => _0xac014c["index"] === _0x3c543a),
                  _0x2c0034 = _0x435243(_0x38c2b5, Number(_0x3c543a));
                if (!_0x2c0034) {
                  _0x3cc138("商品序号" + _0x3c543a + " 未能解析 goodsId，跳过", "warning"), _0x4a944a++;
                  continue;
                }
                const _0x9479e3 = _0x159387 ? _0x159387["name"] : "商品" + _0x3c543a,
                  _0x80b876 = _0x159387 ? _0x159387["maxCount"] : 0x1;
                try {
                  await _0x28a129("activity_exchange", {
                    activityId: _0x32c4d6,
                    goodsId: _0x2c0034,
                    quantity: Math["min"](0x1, _0x80b876)
                  }), _0x5d1b63++, _0x3cc138("兑换成功: " + _0x9479e3, "success");
                } catch (_0x24ef85) {
                  _0x4a944a++, _0x3cc138("兑换失败 " + _0x9479e3 + ":\x20" + _0x24ef85["message"], "warning");
                }
                await _0x23c5d3(Math["max"](0x64, Number(_0x3f21de) || 0x96));
              }
              _0x3cc138("兑换完成：成功" + _0x5d1b63 + "项，失败" + _0x4a944a + "项", "success"), _0x2a35b2("兑换完成!", "success");
            } catch (_0x15c9d3) {
              "用户停止" === _0x15c9d3["message"] ? (_0x3cc138("已停止", "warning"), _0x2a35b2("已停止", "warning")) : (_0x3cc138("兑换异常: " + _0x15c9d3["message"], "error"), _0x2a35b2("兑换出错", "error"));
            } finally {
              _0x8ba1de(!0x1), _0x34c666();
            }
          })(_0x3b06af(), _0x31350d);
        }, !0x0),
        _0x32c504 = document["createElement"]("div");
      _0x32c504["className"] = "bkh-btns", _0x32c504["appendChild"](_0x12a258), _0x15f4c8["appendChild"](_0x32c504);
    }, !0x1)), _0x23ec6c["appendChild"](_0x10bb12);
    const _0x422e56 = _0x427bf7("停止当前任务", () => {
      _0x2dcbe4["value"] = !0x0, _0x2a35b2("正在停止...", "warning");
    }, !0x1, "danger");
    _0x422e56["classList"]["add"]("bkh-stop"), _0x422e56["style"]["cssText"] = "width:100%;margin-top:8px;", _0x23ec6c["appendChild"](_0x422e56), _0x27b81d = document["createElement"]("div"), _0x27b81d["className"] = "bkh-log", _0x27b81d["style"]["fontSize"] = "10px", _0x23ec6c["appendChild"](_0x27b81d);
    const _0x326f3b = document["createElement"]("div");
    _0x326f3b["className"] = "bkh-foot", _0x326f3b["textContent"] = "© 肝王之王 · 版权为肝王之王所有。未尽允许不可盈利", _0x23ec6c["appendChild"](_0x326f3b), document["body"]["appendChild"](_0x23ec6c), _0x2befbd = _0x23ec6c, _0x47d1a5(), function () {
      if (_0x27b81d) {
        for (; _0x185c79["length"];) _0x190dd0(_0x185c79["shift"]());
      }
    }();
  }
  function _0x357201() {
    document["body"] ? (!function () {
      try {
        const _0x3a34a4 = "width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no, viewport-fit=cover";
        let _0x37700c = document["querySelector"]('meta[name="viewport"]');
        _0x37700c || (_0x37700c = document["createElement"]("meta"), _0x37700c["setAttribute"]("name", "viewport"), document["head"]["appendChild"](_0x37700c)), /width\s*=\s*device-width/["test"](_0x37700c["getAttribute"]("content") || "") || _0x37700c["setAttribute"]("content", _0x3a34a4);
      } catch (_0x490f0c) {}
    }(), function () {
      const _0x28e3a8 = document["createElement"]("div");
      _0x28e3a8["id"] = "consumeHelperToggleBtn", _0x28e3a8["style"]["cssText"] = "\n            position: fixed; top: " + _0xf32cfd["toggleBtn"]["top"] + "px; right: " + _0xf32cfd["toggleBtn"]["right"] + "px;\n            width: 36px; height: 36px; cursor: pointer; z-index: " + _0x3a7594["zIndex"] + " !important;\n            background: transparent; border: none; border-radius: 0;\n            display: flex; align-items: center; justify-content: center;\n            transition: transform 0.2s ease; touch-action: none; user-select: none;\n            filter: drop-shadow(0 2px 3px rgba(0,0,0,0.35));\n            pointer-events: auto !important;\n        ", _0x28e3a8["appendChild"](_0x17e0c9(0x1c)), _0x28e3a8["addEventListener"]("mouseover", () => {
        _0x28e3a8["style"]["filter"] = "drop-shadow(0 2px 3px rgba(0,0,0,0.35)) brightness(1.15)";
      }), _0x28e3a8["addEventListener"]("mouseout", () => {
        _0x28e3a8["style"]["filter"] = "drop-shadow(0 2px 3px rgba(0,0,0,0.35))";
      });
      try {
        const _0x33e170 = JSON["parse"](localStorage["getItem"](_0x29496f["pos"]) || "null");
        _0x33e170 && "number" == typeof _0x33e170["left"] && "number" == typeof _0x33e170["top"] && (_0x28e3a8["style"]["left"] = _0x33e170["left"] + "px", _0x28e3a8["style"]["top"] = _0x33e170["top"] + "px", _0x28e3a8["style"]["right"] = "auto", _0x2d28b5 = !0x0);
      } catch (_0x264d19) {}
      let _0x46d11f = !0x1,
        _0x87a262 = 0x0,
        _0x31955d = 0x0,
        _0x13d217 = 0x0,
        _0x268528 = 0x0,
        _0x5a6142 = !0x1;
      const _0x2e37d4 = _0x225ad1 => {
          const _0xeafd99 = _0x225ad1["touches"] ? _0x225ad1["touches"][0x0] : _0x225ad1;
          _0x87a262 = _0xeafd99["clientX"], _0x31955d = _0xeafd99["clientY"];
          const _0x1d4f2f = _0x28e3a8["getBoundingClientRect"]();
          _0x13d217 = _0x1d4f2f["left"], _0x268528 = _0x1d4f2f["top"], _0x46d11f = !0x1, _0x5a6142 = !0x0;
        },
        _0x4748eb = _0x4ffba4 => {
          if (!_0x5a6142) return;
          const _0x26aff7 = _0x4ffba4["touches"] ? _0x4ffba4["touches"][0x0] : _0x4ffba4,
            _0x54ef8c = _0x26aff7["clientX"] - _0x87a262,
            _0x206c80 = _0x26aff7["clientY"] - _0x31955d;
          (Math["abs"](_0x54ef8c) > 0x5 || Math["abs"](_0x206c80) > 0x5) && (_0x46d11f = !0x0, _0x4ffba4["cancelable"] && _0x4ffba4["preventDefault"](), _0x28e3a8["style"]["left"] = _0x13d217 + _0x54ef8c + "px", _0x28e3a8["style"]["top"] = _0x268528 + _0x206c80 + "px", _0x28e3a8["style"]["right"] = "auto", _0x2d28b5 = !0x0);
        },
        _0x37c958 = () => {
          if (_0x5a6142) {
            if (_0x5a6142 = !0x1, _0x46d11f) {
              try {
                const _0x284540 = _0x28e3a8["getBoundingClientRect"]();
                localStorage["setItem"](_0x29496f["pos"], JSON["stringify"]({
                  left: Math["round"](_0x284540["left"]),
                  top: Math["round"](_0x284540["top"])
                }));
              } catch (_0x3dca6d) {}
              _0x47d1a5();
            } else try {
              if (_0x1eb1f9 || _0x2a1509(), !_0x2befbd) return;
              if (_0x1f8378 = !_0x1f8378, _0x1f8378) {
                try {
                  _0x2befbd["parentNode"] !== document["body"] && document["body"]["appendChild"](_0x2befbd);
                } catch (_0x434163) {}
                _0x2befbd["style"]["display"] = "block";
                try {
                  _0x47d1a5();
                } catch (_0x4d06b8) {}
              } else _0x2befbd["style"]["display"] = "none";
            } catch (_0x1e9c6d) {
              console["error"]("[消耗助手] 切换面板异常:", _0x1e9c6d);
            }
          }
        };
      _0x28e3a8["addEventListener"]("mousedown", _0x2e37d4), window["addEventListener"]("mousemove", _0x4748eb), window["addEventListener"]("mouseup", _0x37c958), _0x28e3a8["addEventListener"]("touchstart", _0x2e37d4, {
        passive: !0x0
      }), window["addEventListener"]("touchmove", _0x4748eb, {
        passive: !0x1
      }), window["addEventListener"]("touchend", _0x37c958), document["body"]["appendChild"](_0x28e3a8), _0xfdee82 = _0x28e3a8;
    }(), _0x47d1a5(), window["addEventListener"]("resize", _0x47d1a5), window["addEventListener"]("orientationchange", () => setTimeout(_0x47d1a5, 0xfa)), document["addEventListener"]("keydown", _0x5b3353 => {
      ("Escape" === _0x5b3353["key"] || "Esc" === _0x5b3353["key"]) && _0x1f8378 && _0x4dac90 && _0x4dac90();
    }), setTimeout(() => {
      const _0x56bf1a = !!function (_0x134086) {
          const _0x1b4f1c = _0x564665();
          try {
            if (_0x1b4f1c && "function" == typeof _0x1b4f1c["__require"]) return _0x1b4f1c["__require"](_0x134086);
          } catch (_0x12b613) {}
          try {
            if ("function" == typeof window["__require"]) return window["__require"](_0x134086);
          } catch (_0x514627) {}
          return null;
        }("data-index"),
        _0x396ae0 = !!_0x56fd40(!0x0);
      _0x3cc138(_0x56bf1a || _0x396ae0 ? "游戏环境已就绪" : "未检测到游戏环境（请在游戏页面使用本脚本）", _0x56bf1a || _0x396ae0 ? "success" : "warning"), console["log"]("[消耗助手] 已加载，游戏环境:", _0x56bf1a || _0x396ae0);
    }, 0x1f4), console["log"]("[肝王之王消耗活动助手] 已加载 v1.0.0"), console["log"]("[消耗助手] 版权为肝王之王所有。未尽允许不可盈利")) : setTimeout(_0x357201, 0x12c);
  }
  "loading" === document["readyState"] ? document["addEventListener"]("DOMContentLoaded", _0x357201) : _0x357201();
}();
