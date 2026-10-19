// Adapted from the supplied 2.57.2 game enhancement asset.
// Static strings decoded; obfuscator guards removed; frame access stays local.
!function () {
  "use strict";
  const _0x23e616 = "[XingChi][四圣自动升级]",
    _0x5aee75 = -0xa,
    _0x5e622c = -0xc,
    _0x32f0c2 = {
      running: !0x1,
      loopTimer: null,
      scanTimer: null,
      targetBreakBtn: null,
      fguiAutoBtn: null,
      anchorBtn: null,
      lastQuench: null,
      lastOrder: null,
      wsHooked: !0x1,
      inflight: !0x1,
      lastInteractedHeroId: null,
      lastInteractedAt: 0x0,
      lastInteractedCmd: "",
      currentSendingCmd: ""
    };
  function _0x2fda50(..._0x4da0cc) {
    console["log"](_0x23e616, ..._0x4da0cc);
  }
  function _0x271134(_0xa82d91) {
    try {
      const _0x92edf9 = window["__require"] && window["__require"]("TipsManager");
      if (_0x92edf9 && _0x92edf9["SHOW_TIP"]) return void _0x92edf9["SHOW_TIP"](_0xa82d91);
    } catch (_0x46dc73) {}
    _0x2fda50(_0xa82d91);
  }
  function _0x4b6fa6(_0x19c54c) {
    if (!_0x19c54c) return "";
    const _0x586794 = [];
    try {
      "string" == typeof _0x19c54c["title"] && _0x19c54c["title"] && _0x586794["push"](_0x19c54c["title"]);
    } catch (_0x48bdb3) {}
    try {
      "string" == typeof _0x19c54c["text"] && _0x19c54c["text"] && _0x19c54c["text"] !== _0x19c54c["title"] && _0x586794["push"](_0x19c54c["text"]);
    } catch (_0x470705) {}
    try {
      if (_0x19c54c["numChildren"] && "function" == typeof _0x19c54c["getChildAt"] && _0x19c54c["numChildren"] <= 0x8) for (let _0x534ce4 = 0x0; _0x534ce4 < _0x19c54c["numChildren"]; _0x534ce4++) {
        const _0x4abfd7 = _0x19c54c["getChildAt"](_0x534ce4);
        if (_0x4abfd7 && !_0x4abfd7["numChildren"]) {
          try {
            "string" == typeof _0x4abfd7["title"] && _0x4abfd7["title"] && _0x586794["push"](_0x4abfd7["title"]);
          } catch (_0x59f493) {}
          try {
            "string" == typeof _0x4abfd7["text"] && _0x4abfd7["text"] && _0x586794["push"](_0x4abfd7["text"]);
          } catch (_0x476f9e) {}
        }
      }
    } catch (_0x1f5dae) {}
    return _0x586794["join"]("|");
  }
  function _0x3cdcbb(_0x49620c, _0x40f486, _0xc11f11 = 0x0, _0xac274a = !0x0) {
    if (!_0x49620c || _0xc11f11 > 0xc) return null;
    try {
      if (!0x1 === _0x49620c["visible"]) return null;
      if (function (_0xbd2ed8) {
        if (!_0xbd2ed8) return !0x1;
        try {
          if (_0xbd2ed8["asButton"] === _0xbd2ed8) return !0x0;
          if (_0xbd2ed8["constructor"] && /Button/i["test"](_0xbd2ed8["constructor"]["name"])) return !0x0;
        } catch (_0x4563f6) {}
        return !0x1;
      }(_0x49620c) && (!_0xac274a || function (_0x3838fb, _0x3a88c4 = 0x14, _0x463210 = 0x14, _0x17c7a3 = 0x190, _0x7ce828 = 0xc8) {
        try {
          const _0x399965 = _0x3838fb["width"] || 0x0,
            _0xce664d = _0x3838fb["height"] || 0x0;
          return _0x399965 >= _0x3a88c4 && _0x399965 <= _0x17c7a3 && _0xce664d >= _0x463210 && _0xce664d <= _0x7ce828;
        } catch (_0x1c1821) {
          return !0x1;
        }
      }(_0x49620c, 0xf, 0xf, 0x190, 0xc8)) && function (_0x332bbf, _0x5a76fe) {
        const _0x331e02 = _0x4b6fa6(_0x332bbf)["toLowerCase"]();
        return _0x5a76fe["some"](_0x743532 => _0x331e02["includes"](_0x743532["toLowerCase"]()));
      }(_0x49620c, _0x40f486)) return _0x49620c;
      if (_0x49620c["numChildren"] && "function" == typeof _0x49620c["getChildAt"]) for (let _0x556a00 = 0x0; _0x556a00 < _0x49620c["numChildren"]; _0x556a00++) {
        const _0x12c8d7 = _0x3cdcbb(_0x49620c["getChildAt"](_0x556a00), _0x40f486, _0xc11f11 + 0x1, _0xac274a);
        if (_0x12c8d7) return _0x12c8d7;
      }
    } catch (_0x29e5f9) {}
    return null;
  }
  const _0x179db8 = ["\u7a81\u7834", "\u5171\u9e23", "breakthrough"],
    _0x31218d = ["四圣转换", "saint"];
  function _0xce0939() {
    try {
      const _0x3b7f4c = window["fgui"];
      if (!_0x3b7f4c || !_0x3b7f4c["GRoot"]) return null;
      const _0x169fa2 = "function" == typeof _0x3b7f4c["GRoot"]["inst"] ? _0x3b7f4c["GRoot"]["inst"]() : _0x3b7f4c["GRoot"]["inst"];
      if (!_0x169fa2) return null;
      const _0x4799f3 = _0x3cdcbb(_0x169fa2, _0x179db8);
      if (!_0x4799f3) return null;
      let _0x1aaf64 = _0x4799f3;
      for (let _0x5b590a = 0x0; _0x5b590a < 0x10 && _0x1aaf64; _0x5b590a++) {
        if (!0x1 === _0x1aaf64["visible"]) return null;
        _0x1aaf64 = _0x1aaf64["parent"];
      }
      return _0x4799f3;
    } catch (_0x38d71b) {
      return null;
    }
  }
  function _0x368b21(_0x842063) {
    let _0x1cb970 = _0x842063;
    for (let _0x5269e7 = 0x0; _0x5269e7 < 0x10 && _0x1cb970; _0x5269e7++) {
      const _0x1b316 = _0x1cb970["constructor"] && _0x1cb970["constructor"]["name"] || "",
        _0x1ce0eb = _0x1cb970["name"] || "";
      if (/HolyBeast|FourSaint|SaintBeast/i["test"](_0x1ce0eb)) return !0x0;
      if (/HolyBeast|FourSaint|SaintBeast/i["test"](_0x1b316)) return !0x0;
      _0x1cb970 = _0x1cb970["parent"];
    }
    return !0x1;
  }
  function _0x26ac4a() {
    const _0x466596 = function () {
      try {
        const _0xd1878d = window["fgui"];
        if (!_0xd1878d || !_0xd1878d["GRoot"]) return null;
        const _0x19b7a6 = "function" == typeof _0xd1878d["GRoot"]["inst"] ? _0xd1878d["GRoot"]["inst"]() : _0xd1878d["GRoot"]["inst"];
        return _0x19b7a6 ? _0x3cdcbb(_0x19b7a6, _0x31218d) : null;
      } catch (_0x320610) {
        return null;
      }
    }();
    if (_0x466596 && _0x368b21(_0x466596)) return _0x466596;
    const _0x53bc68 = _0xce0939();
    return _0x53bc68 && _0x368b21(_0x53bc68) ? _0x53bc68 : null;
  }
  function _0x378f1c(_0x2efae3) {
    try {
      const _0x2ed4ea = window["ROLE"];
      if (!_0x2ed4ea || !_0x2ed4ea["heroes"]) return !0x1;
      let _0x525c8c = null;
      return _0x525c8c = "function" == typeof _0x2ed4ea["heroes"]["get"] ? _0x2ed4ea["heroes"]["get"](_0x2efae3) : "function" == typeof _0x2ed4ea["getHeroById"] ? _0x2ed4ea["getHeroById"](_0x2efae3) : _0x2ed4ea["heroes"][_0x2efae3], _0x525c8c && _0x525c8c["hB"];
    } catch (_0x51a2f2) {
      return !0x1;
    }
  }
  function _0x877943(_0x1a5e6e) {
    const _0x45b5e9 = _0x4b6fa6(_0x1a5e6e)["toLowerCase"]()["includes"]("\u7a81\u7834") ? "hb_upgradeorder" : "hb_quench",
      _0x1d8325 = "hb_upgradeorder" === _0x45b5e9 ? _0x32f0c2["lastOrder"] : _0x32f0c2["lastQuench"];
    if (_0x1d8325 && _0x1d8325["params"] && "number" == typeof _0x1d8325["params"]["heroId"] && Date["now"]() - _0x32f0c2["lastInteractedAt"] < 0x493e0 && _0x378f1c(_0x1d8325["params"]["heroId"])) return {
      cmd: _0x1d8325["cmd"],
      params: Object["assign"]({}, _0x1d8325["params"])
    };
    let _0x5c363d = null;
    if (_0x32f0c2["lastInteractedHeroId"] && Date["now"]() - _0x32f0c2["lastInteractedAt"] < 0x493e0 && _0x378f1c(_0x32f0c2["lastInteractedHeroId"]) && (_0x5c363d = _0x32f0c2["lastInteractedHeroId"]), !_0x5c363d) {
      const _0x1d0dda = function (_0x2f705e) {
        const _0x2d49aa = ["heroId", "_heroId", "hero_id", "heroID", "heroid", "curHeroId", "currentHeroId", "selectedHeroId", "saintId", "hbHeroId", "beastId", "guardianId", "fourSaintId"],
          _0x1891e4 = ["data", "_data", "hero", "_hero", "viewData", "model", "_model", "_view", "ctrl", "controller", "_ctrl", "config", "_config"];
        function _0x3f485d(_0x3b1fed, _0x452ace) {
          try {
            const _0x49c939 = _0x3b1fed[_0x452ace];
            if ("number" == typeof _0x49c939 && _0x49c939 >= 0x64 && _0x49c939 <= 0x270f) return _0x49c939;
          } catch (_0x46b12e) {}
          return null;
        }
        let _0x5634f4 = _0x2f705e && _0x2f705e["parent"];
        for (let _0x1ada4f = 0x0; _0x1ada4f < 0xc && _0x5634f4; _0x1ada4f++) {
          for (const _0x3192e0 of _0x2d49aa) {
            const _0xe27118 = _0x3f485d(_0x5634f4, _0x3192e0);
            if (_0xe27118 && /hero|saint|beast|hb/i["test"](_0x3192e0)) return _0xe27118;
          }
          for (const _0x42009b of _0x1891e4) try {
            const _0x3db21c = _0x5634f4[_0x42009b];
            if (_0x3db21c) for (const _0x33e345 of _0x2d49aa) {
              const _0x9727c8 = _0x3f485d(_0x3db21c, _0x33e345);
              if (_0x9727c8 && /hero|saint|beast|hb/i["test"](_0x33e345)) return _0x9727c8;
            }
          } catch (_0x578bbc) {}
          _0x5634f4 = _0x5634f4["parent"];
        }
        return null;
      }(_0x1a5e6e);
      _0x1d0dda && _0x378f1c(_0x1d0dda) && (_0x5c363d = _0x1d0dda);
    }
    return _0x5c363d ? {
      cmd: _0x45b5e9,
      params: {
        heroId: _0x5c363d
      }
    } : null;
  }
  function _0x4363ca() {
    const _0x5089f1 = _0x32f0c2["fguiAutoBtn"];
    if (_0x5089f1) try {
      const _0x4b6e43 = _0x32f0c2["running"] ? "停止升级" : "自动升级";
      _0x5089f1["title"] = _0x4b6e43, _0x5089f1["asButton"] && (_0x5089f1["asButton"]["title"] = _0x4b6e43);
    } catch (_0x5e058c) {}
  }
  function _0x4ebf1b(_0x225c08) {
    _0x32f0c2["running"] && (_0x32f0c2["running"] = !0x1, _0x32f0c2["loopTimer"] && (clearInterval(_0x32f0c2["loopTimer"]), _0x32f0c2["loopTimer"] = null), _0x32f0c2["inflight"] = !0x1, _0x4363ca(), _0x271134("已停止" + (_0x225c08 ? "\uff1a" + _0x225c08 : "")));
  }
  function _0x338558() {
    if (_0x32f0c2["running"]) return;
    const _0x5202da = _0xce0939();
    if (!_0x5202da) return void _0x271134("请先打开四圣界面");
    _0x32f0c2["targetBreakBtn"] = _0x5202da;
    const _0x2020f5 = _0x877943(_0x5202da);
    if (!_0x2020f5) return void _0x271134("无法识别当前英雄，请手动点击一次“共鸣”或“突破”");
    _0x2fda50("开始自动升级", _0x2020f5["cmd"], _0x2020f5["params"]["heroId"]), _0x32f0c2["running"] = !0x0, _0x32f0c2["inflight"] = !0x1, _0x4363ca(), _0x271134("开始自动升级");
    const _0x3bd69f = Date["now"]();
    _0x32f0c2["loopTimer"] = setInterval(() => {
      if (!_0x32f0c2["running"]) return;
      if (Date["now"]() - _0x3bd69f > 0x927c0) return void _0x4ebf1b("\u8d85\u65f6");
      if (_0x32f0c2["inflight"]) return;
      let _0x7e98e7 = _0x32f0c2["targetBreakBtn"];
      if (!_0x7e98e7 || void 0x0 !== _0x7e98e7["isDisposed"] && _0x7e98e7["isDisposed"]) {
        if (_0x7e98e7 = _0xce0939(), !_0x7e98e7) return void _0x4ebf1b("离开四圣界面");
        _0x32f0c2["targetBreakBtn"] = _0x7e98e7;
      }
      const _0x58c868 = _0x877943(_0x7e98e7);
      _0x58c868 ? (_0x32f0c2["inflight"] = !0x0, _0x32f0c2["currentSendingCmd"] = _0x58c868["cmd"], function (_0x55a822) {
        const _0x5f0bcf = window["ws"];
        return _0x5f0bcf && "function" == typeof _0x5f0bcf["sendAsync"] ? _0x5f0bcf["sendAsync"]({
          ack: 0x0,
          cmd: _0x55a822["cmd"],
          params: _0x55a822["params"],
          seq: Date["now"](),
          time: Date["now"]()
        }) : Promise["reject"](new Error("ws 不可用"));
      }(_0x58c868)["then"](_0x1e48ef => {
        _0x32f0c2["inflight"] = !0x1, _0x1e48ef && 0x0 !== _0x1e48ef["code"] && void 0x0 !== _0x1e48ef["code"] && null !== _0x1e48ef["code"] && _0x4ebf1b("服务端拒绝 code=" + _0x1e48ef["code"]);
      })["catch"](_0x7337e6 => {
        _0x32f0c2["inflight"] = !0x1, _0x4ebf1b("发送异常: " + (_0x7337e6 && _0x7337e6["message"] || _0x7337e6));
      })) : _0x4ebf1b("无法确定英雄");
    }, 0xc8);
  }
  function _0x5aad69(_0x43e920, _0x4743b4) {
    if (!_0x43e920 || !_0x43e920["parent"]) return {
      x: 0x0,
      y: 0x0
    };
    const _0x4ac0ce = _0x43e920["x"] || 0x0,
      _0x338366 = _0x43e920["y"] || 0x0,
      _0x5df14b = _0x43e920["width"] || 0x55,
      _0x11bc41 = _0x338366 - (_0x4743b4?.["height"] || 0x44) + _0x5e622c;
    return {
      x: _0x4ac0ce + _0x5df14b + _0x5aee75,
      y: Math["max"](_0x11bc41, 0x0)
    };
  }
  function _0x56550f() {
    const _0xcb968d = _0x26ac4a();
    if (!_0xcb968d || !_0xcb968d["parent"]) return void (_0x32f0c2["fguiAutoBtn"] && _0x3ad565());
    const _0x1611cf = _0xcb968d["parent"];
    if (_0x32f0c2["fguiAutoBtn"] && _0x32f0c2["anchorBtn"] === _0xcb968d && _0x32f0c2["fguiAutoBtn"]["parent"] === _0x1611cf) {
      _0x4363ca();
      const _0x551fad = _0x5aad69(_0xcb968d, _0x32f0c2["fguiAutoBtn"]);
      return void _0x9029f5(_0x32f0c2["fguiAutoBtn"], _0x551fad["x"], _0x551fad["y"]);
    }
    _0x3ad565();
    const _0x52e183 = window["fgui"];
    if (!_0x52e183) return;
    let _0x5d5fe3 = null;
    try {
      if (_0x52e183["UIPackage"] && "function" == typeof _0x52e183["UIPackage"]["createObject"]) {
        const _0x1b61f8 = _0x52e183["UIPackage"]["createObject"]("ui_common", "BtnInfo2");
        _0x1b61f8 && (_0x5d5fe3 = _0x1b61f8["asButton"] || _0x1b61f8);
      }
    } catch (_0xf68a4f) {}
    if (!_0x5d5fe3) try {
      _0x52e183["GButton"] && (_0x5d5fe3 = new _0x52e183["GButton"]());
    } catch (_0x51990e) {}
    if (_0x5d5fe3) {
      _0x5d5fe3["width"] || (_0x5d5fe3["width"] = 0x3e), _0x5d5fe3["height"] || (_0x5d5fe3["height"] = 0x44), _0x5d5fe3["title"] = _0x32f0c2["running"] ? "停止升级" : "自动升级", _0x5d5fe3["asButton"] && (_0x5d5fe3["asButton"]["title"] = _0x5d5fe3["title"]), _0x5d5fe3["onClick"](() => {
        _0x32f0c2["running"] ? _0x4ebf1b("手动停止") : _0x338558();
      });
      try {
        _0x1611cf["addChild"](_0x5d5fe3), _0x5d5fe3["relations"] && "function" == typeof _0x5d5fe3["relations"]["clear"] && _0x5d5fe3["relations"]["clear"]();
        const _0xd058ed = _0x5aad69(_0xcb968d, _0x5d5fe3);
        _0x9029f5(_0x5d5fe3, _0xd058ed["x"], _0xd058ed["y"]);
      } catch (_0x1a21ed) {
        return void function (..._0x2348b9) {
          console["warn"](_0x23e616, ..._0x2348b9);
        }("addChild 失败:", _0x1a21ed["message"]);
      }
      _0x32f0c2["fguiAutoBtn"] = _0x5d5fe3, _0x32f0c2["anchorBtn"] = _0xcb968d, _0x2fda50("按钮已注入, 坐标", _0x5d5fe3["x"], _0x5d5fe3["y"]);
    }
  }
  function _0x9029f5(_0x39ec3a, _0x4cb7d5, _0x20a71c) {
    try {
      _0x39ec3a["relations"] && "function" == typeof _0x39ec3a["relations"]["clear"] && _0x39ec3a["relations"]["clear"]();
    } catch (_0x18e6c7) {}
    try {
      _0x39ec3a["setXY"](_0x4cb7d5, _0x20a71c);
    } catch (_0x1fb7c0) {
      try {
        _0x39ec3a["x"] = _0x4cb7d5, _0x39ec3a["y"] = _0x20a71c;
      } catch (_0xa45acc) {}
    }
  }
  function _0x3ad565() {
    if (_0x32f0c2["fguiAutoBtn"]) {
      try {
        _0x32f0c2["fguiAutoBtn"]["dispose"]();
      } catch (_0x54259d) {}
      _0x32f0c2["fguiAutoBtn"] = null, _0x32f0c2["anchorBtn"] = null;
    }
  }
  function _0x4676d9() {
    try {
      _0x26ac4a() ? _0x56550f() : (_0x32f0c2["fguiAutoBtn"] && _0x3ad565(), _0x32f0c2["running"] && _0x4ebf1b("离开四圣界面"));
    } catch (_0x2ab934) {}
  }
  try {
    !function () {
      if (_0x32f0c2["scanTimer"]) return;
      _0x32f0c2["scanTimer"] = setInterval(_0x4676d9, 0x320), setTimeout(_0x4676d9, 0x12c);
      let _0x2347eb = 0x0;
      const _0x436563 = setInterval(() => {
        (function () {
          if (_0x32f0c2["wsHooked"]) return !0x0;
          try {
            const _0x3bb8fd = window["ws"];
            if (!_0x3bb8fd || "function" != typeof _0x3bb8fd["sendAsync"]) return !0x1;
            if (_0x3bb8fd["sendAsync"]["__xcGuardianHooked"]) return _0x32f0c2["wsHooked"] = !0x0, !0x0;
            const _0x10ada1 = _0x3bb8fd["sendAsync"]["bind"](_0x3bb8fd);
            return _0x3bb8fd["sendAsync"] = function (_0x534d37) {
              try {
                if (_0x534d37 && _0x534d37["params"] && "number" == typeof _0x534d37["params"]["heroId"] && _0x534d37["params"]["heroId"] >= 0x64 && _0x534d37["params"]["heroId"] <= 0x270f && (_0x32f0c2["running"] && _0x534d37["cmd"] === _0x32f0c2["currentSendingCmd"] || (_0x32f0c2["lastInteractedHeroId"] = _0x534d37["params"]["heroId"], _0x32f0c2["lastInteractedAt"] = Date["now"](), _0x32f0c2["lastInteractedCmd"] = _0x534d37["cmd"])), _0x534d37 && ("hb_quench" === _0x534d37["cmd"] || "hb_upgradeorder" === _0x534d37["cmd"]) && (!_0x32f0c2["running"] || _0x534d37["cmd"] !== _0x32f0c2["currentSendingCmd"])) {
                  const _0x228eb4 = {
                    cmd: _0x534d37["cmd"],
                    params: Object["assign"]({}, _0x534d37["params"] || {})
                  };
                  "hb_quench" === _0x534d37["cmd"] ? _0x32f0c2["lastQuench"] = _0x228eb4 : _0x32f0c2["lastOrder"] = _0x228eb4;
                }
              } catch (_0x30438a) {}
              return _0x10ada1(_0x534d37);
            }, _0x3bb8fd["sendAsync"]["__xcGuardianHooked"] = !0x0, _0x32f0c2["wsHooked"] = !0x0, _0x2fda50("ws hook 成功"), !0x0;
          } catch (_0x4d86c7) {
            return !0x1;
          }
        }() || ++_0x2347eb > 0x78) && clearInterval(_0x436563);
      }, 0x1f4);
      _0x2fda50("四圣自动升级脚本已启动");
    }();
  } catch (_0x505d3f) {
    console["error"](_0x23e616 + " 初始化失败:", _0x505d3f);
  }
}();
