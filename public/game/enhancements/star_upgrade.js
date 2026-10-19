// Adapted from the supplied 2.57.2 game enhancement asset.
// Static strings decoded; obfuscator guards removed; frame access stays local.
!function () {
  "use strict";
  var _0x1b5fb = "undefined" != typeof unsafeWindow && unsafeWindow ? unsafeWindow : window;
  if (_0x1b5fb["__bookStarHelperLoaded"]) return void console["log"]("[图鉴助手] 检测到已加载，跳过重复注入");
  _0x1b5fb["__bookStarHelperLoaded"] = !0x0;
  const _0x5faf56 = {
      zIndex: 0x7ffffffe,
      baseWidth: 0x122,
      designBase: 0x168,
      minScale: 0.55,
      maxScale: 1.6
    },
    _0xb4c03 = {
      toggleBtn: {
        top: 0x64,
        right: 0xf
      },
      panel: {
        top: 0x96,
        right: 0xf
      }
    },
    _0x595893 = {
      scale: "bookHelper.uiScale",
      pos: "bookHelper.togglePos",
      delay: "bookHelper.delay"
    },
    _0x47698e = [0x8, 0x8, 0x8, 0x8, 0x8, 0x28, 0x28, 0x28, 0x28, 0x28, 0x50, 0x50, 0x50, 0x50, 0x50, 0xc8, 0xc8, 0xc8, 0xc8, 0xc8, 0x190, 0x190, 0x190, 0x190, 0x190, 0x190, 0x190, 0x190, 0x190, 0x190],
    _0x31747f = [{
      label: "\u9b4f\u56fd",
      value: 0x1
    }, {
      label: "\u8700\u56fd",
      value: 0x2
    }, {
      label: "\u5434\u56fd",
      value: 0x3
    }, {
      label: "\u7fa4\u96c4",
      value: 0x4
    }],
    _0x42cde5 = [{
      label: "英雄图鉴",
      value: "hero",
      isArtifact: !0x1,
      isSkin: !0x1,
      byClub: !0x0,
      color: "#4338ca"
    }, {
      label: "鱼灵图鉴",
      value: "fish",
      isArtifact: !0x0,
      isSkin: !0x1,
      byClub: !0x1,
      color: "#0e7490"
    }, {
      label: "皮肤图鉴",
      value: "skin",
      isArtifact: !0x1,
      isSkin: !0x0,
      byClub: !0x1,
      color: "#b45309"
    }],
    _0x3fabbd = [0x65, 0x67, 0x68, 0x69, 0x6a, 0x6b, 0x6d, 0x6f, 0x70, 0x71, 0x72, 0x74, 0x75, 0x76, 0x78, 0x79, 0x7a],
    _0x1a731e = [[0x65, "司马懿"], [0x66, "\u90ed\u5609"], [0x67, "\u5173\u7fbd"], [0x68, "诸葛亮"], [0x69, "\u5468\u745c"], [0x6a, "太史慈"], [0x6b, "\u5415\u5e03"], [0x6c, "\u534e\u4f57"], [0x6d, "\u7504\u59ec"], [0x6e, "黄月英"], [0x6f, "\u5b59\u7b56"], [0x70, "\u8d3e\u8be9"], [0x71, "\u66f9\u4ec1"], [0x72, "\u59dc\u7ef4"], [0x73, "\u5b59\u575a"], [0x74, "公孙瓒"], [0x75, "\u5178\u97e6"], [0x76, "\u8d75\u4e91"], [0x77, "\u5927\u4e54"], [0x78, "\u5f20\u89d2"], [0x79, "\u9c81\u8083"], [0x7a, "\u5f20\u8fbd"], [0xc9, "\u5f90\u6643"], [0xca, "\u8340\u5f67"], [0xcb, "\u5178\u97e6"], [0xcc, "\u5f20\u98de"], [0xcd, "\u8d75\u4e91"], [0xce, "\u5e9e\u7edf"], [0xcf, "\u9c81\u8083"], [0xd0, "\u9646\u900a"], [0xd1, "\u7518\u5b81"], [0xd2, "\u8c82\u8749"], [0xd3, "\u8463\u5353"], [0xd4, "\u5f20\u89d2"], [0xd5, "\u5f20\u8fbd"], [0xd6, "夏侯惇"], [0xd7, "\u8bb8\u891a"], [0xd8, "夏侯渊"], [0xd9, "\u9b4f\u5ef6"], [0xda, "\u9ec4\u5fe0"], [0xdb, "\u9a6c\u8d85"], [0xdc, "\u9a6c\u5cb1"], [0xdd, "\u5415\u8499"], [0xde, "\u9ec4\u76d6"], [0xdf, "蔡文姬"], [0xe0, "\u5c0f\u4e54"], [0xe1, "\u8881\u7ecd"], [0xe2, "\u534e\u96c4"], [0xe3, "\u989c\u826f"], [0xe4, "\u6587\u4e11"], [0x12d, "\u5468\u6cf0"], [0x12e, "\u8bb8\u6538"], [0x12f, "\u4e8e\u7981"], [0x130, "张星彩"], [0x131, "关银屏"], [0x132, "\u5173\u5e73"], [0x133, "\u7a0b\u666e"], [0x134, "\u5f20\u662d"], [0x135, "\u9646\u7ee9"], [0x136, "吕玲绮"], [0x137, "\u6f58\u51e4"], [0x138, "邢道荣"], [0x139, "祝融夫人"], [0x13a, "\u5b5f\u83b7"]],
    _0x129ca9 = {};
  _0x1a731e["forEach"](_0x886f8f => {
    _0x129ca9[_0x886f8f[0x0]] = _0x886f8f[0x1];
  });
  const _0x178cb2 = _0x1a731e["map"](_0x22e6f0 => _0x22e6f0[0x0]);
  [{
    id: "gold",
    name: "\u91d1\u9c7c",
    color: "#eab308",
    ids: [0x44d, 0x44e, 0x44f, 0x450, 0x451, 0x452, 0x453, 0x454, 0x455, 0x456, 0x457, 0x458, 0x459, 0x45a, 0x45b, 0x45c, 0x45d, 0x45e, 0x45f, 0x460, 0x461]
  }, {
    id: "dragon",
    name: "\u9f99\u9c7c",
    color: "#ec4899",
    ids: [0x4b1, 0x4b2, 0x4b3, 0x4b4, 0x4b5, 0x4b6, 0x4b7, 0x4b8, 0x4b9, 0x4ba, 0x4bb, 0x4bc, 0x4bd, 0x4be, 0x4bf, 0x4c0, 0x4c1, 0x4c2, 0x4c3, 0x4c4]
  }, {
    id: "red",
    name: "\u7ea2\u9c7c",
    color: "#ef4444",
    ids: [0x515, 0x516, 0x517, 0x518, 0x519]
  }, {
    id: "orange",
    name: "\u6a59\u9c7c",
    color: "#f97316",
    ids: [0x579, 0x57a, 0x57b, 0x57c, 0x57d, 0x57e, 0x57f, 0x580, 0x581, 0x582, 0x583, 0x584]
  }, {
    id: "purple",
    name: "\u7d2b\u9c7c",
    color: "#8b5cf6",
    ids: [0x5dd, 0x5de, 0x5df, 0x5e0, 0x5e1, 0x5e2]
  }, {
    id: "blue",
    name: "\u84dd\u9c7c",
    color: "#3b82f6",
    ids: [0x641, 0x642, 0x643, 0x644]
  }]["reduce"]((_0x5a976b, _0x79a7ab) => _0x5a976b["concat"](_0x79a7ab["ids"]), []);
  function _0x150e63(_0x1a614e) {
    const _0x3cc53e = Number(_0x1a614e);
    if (_0x129ca9[_0x3cc53e]) return _0x129ca9[_0x3cc53e];
    try {
      const _0x46f4e4 = _0x26a6ed("data-index"),
        _0x2ab524 = _0x46f4e4 && _0x46f4e4["Config_hero_hero"];
      if (_0x2ab524 && "function" == typeof _0x2ab524["get"]) {
        const _0x3d01af = _0x2ab524["get"](_0x3cc53e);
        if (_0x3d01af && _0x3d01af["name"]) return _0x3d01af["name"];
      }
    } catch (_0x21cefa) {}
    return "\u6b66\u5c06" + _0x3cc53e;
  }
  let _0x3a515a = null;
  function _0x3c70ba(_0x31a234) {
    if (_0x3a515a && !_0x31a234) return _0x3a515a;
    const _0x25a450 = function () {
      const _0x287578 = [],
        _0x7e3311 = _0x3431a3 => {
          _0x3431a3 && -0x1 === _0x287578["indexOf"](_0x3431a3) && _0x287578["push"](_0x3431a3);
        };
      _0x7e3311(_0x1b5fb);
      try {
        _0x7e3311(window);
      } catch (_0x4a53a9) {}
      try {
        _0x7e3311(window);
      } catch (_0x3b0398) {}
      try {
        _0x7e3311(window);
      } catch (_0x18767e) {}
      try {
        const _0x5adad6 = document["getElementsByTagName"]("iframe");
        for (let _0x3237e8 = 0x0; _0x3237e8 < _0x5adad6["length"]; _0x3237e8++) try {
          _0x7e3311(_0x5adad6[_0x3237e8]["contentWindow"]);
        } catch (_0x58a080) {}
      } catch (_0x1b87b1) {}
      return _0x287578;
    }();
    for (const _0x415b5e of _0x25a450) try {
      if ("function" == typeof _0x415b5e["__require"]) return _0x3a515a = _0x415b5e, _0x415b5e;
    } catch (_0x536a66) {}
    for (const _0xeaa96c of _0x25a450) try {
      if (_0xeaa96c["ws"] && ("function" == typeof _0xeaa96c["ws"]["sendAsync"] || "function" == typeof _0xeaa96c["ws"]["send"])) return _0x3a515a = _0xeaa96c, _0xeaa96c;
    } catch (_0x2fa000) {}
    return _0x1b5fb;
  }
  function _0x26a6ed(_0x988e06) {
    const _0x1bee5f = _0x3c70ba();
    try {
      if (_0x1bee5f && "function" == typeof _0x1bee5f["__require"]) return _0x1bee5f["__require"](_0x988e06);
    } catch (_0x1d0c17) {}
    try {
      if ("function" == typeof window["__require"]) return window["__require"](_0x988e06);
    } catch (_0x12d21b) {}
    return null;
  }
  let _0x518222 = null;
  function _0x143242(_0x333a1e) {
    if (_0x518222 && !_0x333a1e) return _0x518222;
    const _0x4a5660 = function () {
      const _0x577ce3 = _0x3c70ba(!0x0),
        _0x53d233 = [_0x577ce3 && _0x577ce3["ws"], _0x577ce3 && _0x577ce3["h5websocket"] && _0x577ce3["h5websocket"]["ws"], _0x577ce3 && _0x577ce3["h5websocket"], _0x577ce3 && _0x577ce3["gameWs"], _0x577ce3 && _0x577ce3["WebSocketClient"], _0x577ce3 && _0x577ce3["_ws"], _0x577ce3 && _0x577ce3["gameSocket"], _0x577ce3 && _0x577ce3["wsClient"], _0x577ce3 && _0x577ce3["socket"], _0x1b5fb && _0x1b5fb["ws"]];
      for (const _0x3459f8 of _0x53d233) if (_0x3459f8 && ("function" == typeof _0x3459f8["sendAsync"] || "function" == typeof _0x3459f8["send"])) return _0x3459f8;
      for (const _0x1cd788 of [_0x577ce3, _0x1b5fb]) if (_0x1cd788) try {
        const _0x21e331 = Object["keys"](_0x1cd788);
        for (let _0x2ae4ca = 0x0; _0x2ae4ca < _0x21e331["length"] && _0x2ae4ca < 0x190; _0x2ae4ca++) {
          let _0x2b603a = null;
          try {
            _0x2b603a = _0x1cd788[_0x21e331[_0x2ae4ca]];
          } catch (_0x5d61e3) {
            continue;
          }
          if (_0x2b603a && "object" == typeof _0x2b603a && "function" == typeof _0x2b603a["sendAsync"]) return _0x2b603a;
        }
      } catch (_0x2ee33a) {}
      return null;
    }();
    return _0x4a5660 && (_0x518222 = _0x4a5660), _0x4a5660;
  }
  const _0x4041c6 = {
    hero_heroupgradestar: [["HeroService", "heroUpgradeStar"], ["HeroService", "heroUpStar"], ["HeroService", "upgradeStar"]],
    book_upgrade: [["BookService", "bookUpgrade"], ["BookService", "upgrade"], ["BookService", "bookUpLevel"]],
    book_batchupgrade: [["BookService", "batchUpgrade"], ["BookService", "bookBatchUpgrade"], ["BookService", "batchUpgradeBook"]],
    book_claimpointreward: [["BookService", "claimPointReward"], ["BookService", "claimReward"]],
    artifact_upgradestar: [["ArtifactService", "upgradeStar"], ["ArtifactService", "artifactUpgradeStar"], ["ArtifactService", "upStar"]],
    book_upgradeartifact: [["BookService", "upgradeArtifact"], ["BookService", "bookUpgradeArtifact"], ["BookService", "upgradeartifact"]],
    collection_getinfo: [["CollectionService", "getInfo"], ["CollectionService", "getCollectionInfo"]],
    collection_activate: [["CollectionService", "activate"], ["CollectionService", "activateItem"]],
    collection_claimtotal: [["CollectionService", "claimTotal"], ["CollectionService", "claimTotalReward"]]
  };
  function _0x512372(_0x3e2988, _0x5657c9) {
    if (_0x3e2988) {
      for (const _0x36e407 of _0x5657c9) if (void 0x0 !== _0x3e2988[_0x36e407] && null !== _0x3e2988[_0x36e407]) return _0x3e2988[_0x36e407];
    }
  }
  function _0x57c88a(_0x73169a) {
    if (!_0x73169a || "object" != typeof _0x73169a) return _0x73169a;
    try {
      const _0x1fc011 = _0x73169a["rawData"];
      if (null != _0x1fc011) return _0x1fc011;
    } catch (_0x464781) {}
    const _0x1ff8eb = _0x512372(_0x73169a, ["_rawData"]);
    if (null != _0x1ff8eb) return _0x1ff8eb;
    try {
      if ("function" == typeof _0x73169a["getData"]) {
        const _0x4f0e10 = _0x73169a["getData"]();
        if (null != _0x4f0e10) return _0x4f0e10;
      }
    } catch (_0x55e955) {}
    const _0x2ef175 = _0x512372(_0x73169a, ["body"]);
    return null != _0x2ef175 ? _0x2ef175 : _0x73169a;
  }
  function _0x531e2e(_0x244894, _0x5b4a5e) {
    const _0x3d52d0 = _0x552da9(_0x5b4a5e);
    if (_0x244894 && "object" == typeof _0x244894 && void 0x0 !== _0x3d52d0) try {
      _0x244894["_code"] = _0x3d52d0;
    } catch (_0x12ec10) {}
    return _0x244894;
  }
  function _0x1bf342(_0x5b9a61, _0x3f6bcd) {
    if (!_0x5b9a61) return null;
    try {
      if ("function" == typeof _0x5b9a61["get"] && !Array["isArray"](_0x5b9a61)) {
        const _0x401a07 = _0x5b9a61["get"](_0x3f6bcd);
        if (null != _0x401a07) return _0x401a07;
      }
    } catch (_0x4c278e) {}
    try {
      return _0x5b9a61[_0x3f6bcd];
    } catch (_0x3db242) {
      return null;
    }
  }
  function _0x32625c(_0x16603b) {
    if (!_0x16603b) return [];
    try {
      return "function" != typeof _0x16603b["keys"] || Array["isArray"](_0x16603b) ? Object["keys"](_0x16603b) : Array["from"](_0x16603b["keys"]());
    } catch (_0x14e902) {
      try {
        return Object["keys"](_0x16603b || {});
      } catch (_0x3957fa) {
        return [];
      }
    }
  }
  function _0x4ecb28(_0x13f7fd) {
    const _0x330208 = new Set(),
      _0x1fa695 = (_0x1eacd6, _0x39b8e2) => {
        if (!_0x1eacd6 || "object" != typeof _0x1eacd6 || _0x39b8e2 > 0x6) return null;
        if (_0x330208["has"](_0x1eacd6)) return null;
        _0x330208["add"](_0x1eacd6);
        const _0x2d211d = _0x1bf342(_0x1eacd6, "heroSeries");
        if (_0x2d211d && _0x32625c(_0x2d211d)["length"] > 0x0) return _0x2d211d;
        const _0x2799fd = ["collection", "data", "collectionInfo", "info", "role", "result", "col"];
        for (const _0x5cc26c of _0x2799fd) {
          const _0x27a39b = _0x1bf342(_0x1eacd6, _0x5cc26c),
            _0x56d0f7 = _0x1fa695(_0x27a39b, _0x39b8e2 + 0x1);
          if (_0x56d0f7) return _0x56d0f7;
        }
        const _0x36bcdb = _0x32625c(_0x1eacd6);
        for (let _0x14cf80 = 0x0; _0x14cf80 < _0x36bcdb["length"] && _0x14cf80 < 0x14; _0x14cf80++) {
          const _0xa23e61 = _0x36bcdb[_0x14cf80];
          if (-0x1 !== _0x2799fd["indexOf"](_0xa23e61)) continue;
          let _0x113caa = null;
          try {
            _0x113caa = _0x1bf342(_0x1eacd6, _0xa23e61);
          } catch (_0x1143af) {
            continue;
          }
          if (!_0x113caa || "object" != typeof _0x113caa) continue;
          const _0x5eed4a = _0x1fa695(_0x113caa, _0x39b8e2 + 0x1);
          if (_0x5eed4a) return _0x5eed4a;
        }
        return null;
      };
    return _0x1fa695(_0x13f7fd, 0x0);
  }
  function _0x552da9(_0x11defa) {
    if (!_0x11defa || "object" != typeof _0x11defa) return;
    if (void 0x0 !== _0x11defa["_code"] && null !== _0x11defa["_code"]) {
      const _0x493fa0 = Number(_0x11defa["_code"]);
      return isNaN(_0x493fa0) ? void 0x0 : _0x493fa0;
    }
    const _0x4b981b = _0x512372(_0x11defa, ["code", "errCode", "errorCode", "retCode"]);
    if (null != _0x4b981b) {
      const _0x2869dd = Number(_0x4b981b);
      return isNaN(_0x2869dd) ? void 0x0 : _0x2869dd;
    }
  }
  const _0x34f9dc = {
    msg: "",
    at: 0x0
  };
  function _0x3961c4(_0x6fa87f, _0x46b1cd = "error") {
    const _0x27af78 = Date["now"]();
    if (!(_0x34f9dc["msg"] === _0x6fa87f && _0x27af78 - _0x34f9dc["at"] < 0xbb8)) {
      _0x34f9dc["msg"] = _0x6fa87f, _0x34f9dc["at"] = _0x27af78;
      try {
        _0x1d81e2(_0x6fa87f, _0x46b1cd);
      } catch (_0x348a0a) {}
    }
  }
  const _0x545313 = async (_0x2be63a, _0x321e70 = {}) => {
    const _0xae82d0 = function (_0xe6284f, _0x1bf0e2) {
      const _0x10c75b = _0x4041c6[_0xe6284f];
      if (!_0x10c75b) return null;
      let _0x2d984b = null;
      try {
        _0x2d984b = _0x26a6ed("data-index");
      } catch (_0x2bf7f1) {}
      if (!_0x2d984b) return null;
      for (const [_0x4efd8e, _0x19a9e5] of _0x10c75b) try {
        const _0x5e33b0 = _0x2d984b[_0x4efd8e];
        if (_0x5e33b0 && "function" == typeof _0x5e33b0[_0x19a9e5]) return Promise["resolve"](_0x5e33b0[_0x19a9e5](_0x1bf0e2 || {}));
      } catch (_0x2c4bb1) {}
      return null;
    }(_0x2be63a, _0x321e70);
    if (_0xae82d0) try {
      const _0x477ed8 = await _0xae82d0;
      return _0x531e2e(_0x57c88a(_0x477ed8), _0x477ed8);
    } catch (_0x22b048) {
      console["warn"]("[图鉴助手] service 命令失败，回退 ws:", _0x2be63a, _0x22b048);
    }
    let _0x1d2814 = _0x143242();
    if (_0x1d2814 || (_0x1d2814 = _0x143242(!0x0)), !_0x1d2814) throw _0x3961c4("未找到游戏连接，请确认脚本运行在游戏页面", "error"), new Error("游戏WebSocket未连接");
    const _0x467242 = {
      ack: 0x0,
      cmd: _0x2be63a,
      params: _0x321e70,
      seq: Date["now"](),
      time: Date["now"]()
    };
    try {
      if ("function" == typeof _0x1d2814["sendAsync"]) {
        const _0x587a3c = await _0x1d2814["sendAsync"](_0x467242);
        return _0x531e2e(_0x57c88a(_0x587a3c), _0x587a3c);
      }
      if ("function" == typeof _0x1d2814["send"]) throw console["warn"]("[图鉴助手] 当前连接无法读取响应，已中止命令:", _0x2be63a), _0x3961c4("当前连接不支持读取响应，无法执行操作", "error"), new Error("连接不支持等待响应");
    } catch (_0x2601a0) {
      throw console["error"]("[图鉴助手] 发送命令失败:", _0x2601a0), _0x2601a0;
    }
    throw new Error("WebSocket不支持发送消息");
  };
  function _0xc1049b(_0x3fa20f, _0xb4b62 = "info") {
    try {
      document["querySelectorAll"](".book-tip")["forEach"](_0x6b20ba => _0x6b20ba["remove"]());
      const _0x3d2477 = document["createElement"]("div");
      _0x3d2477["className"] = "book-tip", _0x3d2477["textContent"] = _0x3fa20f;
      let _0x37b219 = "#F0A020";
      "success" === _0xb4b62 && (_0x37b219 = "#10b981"), "error" === _0xb4b62 && (_0x37b219 = "#ef4444"), "warning" === _0xb4b62 && (_0x37b219 = "#f59e0b"), _0x3d2477["style"]["cssText"] = "\n                position: fixed; bottom: 30px; left: 50%; transform: translateX(-50%);\n                background: " + _0x37b219 + "; color: white; padding: 8px 16px; border-radius: 12px;\n                font-size: 12px; z-index: 2147483647; box-shadow: 0 4px 12px rgba(0,0,0,0.15);\n                max-width: 86vw; text-align: center; opacity: 0; transition: opacity 0.3s ease;\n                font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;\n            ", document["body"]["appendChild"](_0x3d2477), requestAnimationFrame(() => {
        _0x3d2477["style"]["opacity"] = "1";
      }), setTimeout(() => {
        _0x3d2477["style"]["opacity"] = "0", setTimeout(() => _0x3d2477["remove"](), 0x12c);
      }, 0x9c4);
    } catch (_0x4752e0) {}
    try {
      const _0x40ad53 = _0x3c70ba();
      if (_0x40ad53 && "function" == typeof _0x40ad53["__require"]) {
        const _0x248ad6 = _0x40ad53["__require"]("TipsManager");
        _0x248ad6 && _0x248ad6["SHOW_TIP"] && _0x248ad6["SHOW_TIP"](_0x3fa20f);
      }
    } catch (_0x59acdb) {}
  }
  const _0x1d81e2 = (() => {
      let _0x500af1 = null;
      return (_0x545967, _0x1af4a4 = "info", _0x28186d = 0x7d0) => {
        try {
          _0x500af1 || (_0x500af1 = document["createElement"]("div"), _0x500af1["style"]["cssText"] = "\n                        position: fixed; top: 50%; left: 50%; transform: translate(-50%, -50%) scale(0.9);\n                        padding: 10px 20px; border-radius: 12px; font-size: 13px; font-weight: 500;\n                        color: white; z-index: 2147483647; pointer-events: none; opacity: 0;\n                        transition: all 0.3s ease; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;\n                    ", document["body"]["appendChild"](_0x500af1));
          const _0x30dd55 = {
            success: "#10B981",
            error: "#EF4444",
            warning: "#F59E0B",
            info: "#5b83b8"
          };
          _0x500af1["style"]["background"] = _0x30dd55[_0x1af4a4] || _0x30dd55["info"], _0x500af1["textContent"] = _0x545967, _0x500af1["style"]["opacity"] = "1", _0x500af1["style"]["transform"] = "translate(-50%, -50%) scale(1)", clearTimeout(_0x500af1["_timer"]), _0x500af1["_timer"] = setTimeout(() => {
            _0x500af1["style"]["opacity"] = "0", _0x500af1["style"]["transform"] = "translate(-50%, -50%) scale(0.9)";
          }, _0x28186d);
        } catch (_0x23a04c) {}
      };
    })(),
    _0x5e7ef0 = [];
  let _0x19ce83 = null;
  function _0x58b2cf(_0x113c2b, _0x32a19a = "info") {
    const _0x2f7c2d = {
      time: new Date()["toLocaleTimeString"]("zh-CN", {
        hour12: !0x1
      }),
      message: _0x113c2b,
      type: _0x32a19a
    };
    if (!_0x19ce83) return _0x5e7ef0["push"](_0x2f7c2d), void (_0x5e7ef0["length"] > 0xc8 && _0x5e7ef0["shift"]());
    _0xcc3f04(_0x2f7c2d);
  }
  function _0xcc3f04(_0x49681f) {
    try {
      const _0x485c23 = document["createElement"]("div");
      _0x485c23["style"]["cssText"] = "margin-bottom:2px;line-height:1.4;word-break:break-all;";
      const _0x52a0b6 = {
          success: "#4ADE80",
          error: "#F87171",
          warning: "#FBBF24",
          info: "#A9B6D4"
        },
        _0x364c37 = document["createElement"]("span");
      _0x364c37["textContent"] = "[" + _0x49681f["time"] + "]\x20", _0x364c37["style"]["color"] = "#6B7A9C";
      const _0x1b9a49 = document["createElement"]("span");
      for (_0x1b9a49["textContent"] = _0x49681f["message"], _0x1b9a49["style"]["color"] = _0x52a0b6[_0x49681f["type"]] || _0x52a0b6["info"], _0x485c23["appendChild"](_0x364c37), _0x485c23["appendChild"](_0x1b9a49), _0x19ce83["appendChild"](_0x485c23); _0x19ce83["childNodes"]["length"] > 0xc8;) _0x19ce83["removeChild"](_0x19ce83["firstChild"]);
      _0x19ce83["scrollTop"] = _0x19ce83["scrollHeight"];
    } catch (_0x464bf2) {}
  }
  let _0x44edce = null,
    _0x2e5d69 = 0x1;
  function _0x57f493() {
    _0x2e5d69 = function () {
      if (null === _0x44edce) try {
        const _0x5da1a8 = parseFloat(localStorage["getItem"](_0x595893["scale"]));
        !isNaN(_0x5da1a8) && _0x5da1a8 > 0x0 && (_0x44edce = _0x5da1a8);
      } catch (_0x4af673) {}
      const _0x60be4a = _0x44edce || 0x1,
        _0xc11755 = Math["min"](window["innerWidth"] || 0x168, window["screen"] && window["screen"]["width"] ? window["screen"]["width"] : window["innerWidth"] || 0x168),
        _0x3e295c = Math["min"](window["innerHeight"] || 0x280, window["screen"] && window["screen"]["height"] ? window["screen"]["height"] : window["innerHeight"] || 0x280);
      let _0x97950e = 0x1;
      _0xc11755 < 0x300 && (_0x97950e = Math["min"](_0xc11755 / _0x5faf56["designBase"], _0x3e295c / 0x280));
      const _0x857e9 = Math["max"](_0x5faf56["minScale"], Math["min"](_0x5faf56["maxScale"], _0x97950e * _0x60be4a));
      return Math["round"](0x64 * _0x857e9) / 0x64;
    }();
    const _0x118052 = window["innerHeight"] || 0x280;
    if (_0x2be0a5) {
      _0x2be0a5["style"]["transform"] = "scale(" + _0x2e5d69 + ")", _0x2be0a5["style"]["transformOrigin"] = "top right", _0x2be0a5["style"]["maxHeight"] = Math["floor"](0.82 * _0x118052 / _0x2e5d69) + "px";
      const _0x1599d0 = Math["max"](0x8, _0x118052 - 0x3c);
      _0x2be0a5["style"]["top"] = Math["min"](_0xb4c03["panel"]["top"], _0x1599d0) + "px", _0x2be0a5["style"]["right"] = (window["innerWidth"] <= 0x1e0 ? 0x8 : _0xb4c03["panel"]["right"]) + "px";
    }
    _0x241a47 && (_0x241a47["style"]["transform"] = "scale(" + _0x2e5d69 + ")", _0x241a47["style"]["transformOrigin"] = _0x2b061f ? "top left" : "top right");
  }
  function _0xe95b7f(_0x361c74) {
    const _0x53caac = Math["max"](_0x5faf56["minScale"], Math["min"](_0x5faf56["maxScale"], Math["round"](0x64 * _0x361c74) / 0x64));
    _0x44edce = _0x53caac;
    try {
      localStorage["setItem"](_0x595893["scale"], String(_0x53caac));
    } catch (_0x4cc4cc) {}
    _0x57f493(), _0xc1049b("界面缩放: " + Math["round"](0x64 * _0x53caac) + "%", "info");
  }
  function _0x5756f5(_0x46b246, _0x4b9c45) {
    const _0x2ba2ef = document["createElementNS"]("http://www.w3.org/2000/svg", _0x46b246);
    return Object["keys"](_0x4b9c45 || {})["forEach"](_0x308f1f => _0x2ba2ef["setAttribute"](_0x308f1f, String(_0x4b9c45[_0x308f1f]))), _0x2ba2ef;
  }
  function _0xb9c682(_0x2c7313) {
    const _0x16ffd6 = _0x5756f5("svg", {
      width: _0x2c7313,
      height: _0x2c7313,
      viewBox: "0 0 24 24",
      fill: "none"
    });
    _0x16ffd6["style"]["display"] = "block", _0x16ffd6["style"]["pointerEvents"] = "none";
    const _0x3f1c93 = _0x5756f5("defs", {}),
      _0x5dc9d4 = _0x5756f5("linearGradient", {
        id: "bkStarGrad",
        x1: "5",
        y1: "3",
        x2: "19",
        y2: "21",
        gradientUnits: "userSpaceOnUse"
      });
    return [["0", "#FFF6D0"], ["0.45", "#FFC94D"], ["1", "#F08A16"]]["forEach"](_0x1c8653 => {
      _0x5dc9d4["appendChild"](_0x5756f5("stop", {
        offset: _0x1c8653[0x0],
        "stop-color": _0x1c8653[0x1]
      }));
    }), _0x3f1c93["appendChild"](_0x5dc9d4), _0x16ffd6["appendChild"](_0x3f1c93), _0x16ffd6["appendChild"](_0x5756f5("path", {
      d: "M12 2.9l2.82 5.96 6.48.71-4.8 4.4 1.3 6.37L12 17.14l-5.8 3.2 1.3-6.37-4.8-4.4 6.48-.71z",
      fill: "url(#bkStarGrad)",
      stroke: "#ffffff",
      "stroke-width": "1.25",
      "stroke-linejoin": "round"
    })), _0x16ffd6;
  }
  const _0x178663 = new Map();
  function _0x3bfa38(_0x8b8cf3) {
    if (_0x8b8cf3) {
      try {
        _0x8b8cf3["cancelable"] && _0x8b8cf3["preventDefault"]();
      } catch (_0x4f4835) {}
      try {
        _0x8b8cf3["stopPropagation"] && _0x8b8cf3["stopPropagation"]();
      } catch (_0x4b9a8a) {}
    }
  }
  function _0x321f15(_0x68b335, _0x3e7829, _0x511eab = "btn") {
    const _0x1ba1aa = _0x511eab + "|" + (_0x68b335 && _0x68b335["id"] ? _0x68b335["id"] : Math["random"]()["toString"](0x24)["slice"](0x2)),
      _0x5f2d77 = _0x45d998 => {
        const _0x423a28 = Date["now"]();
        if (_0x423a28 - (_0x178663["get"](_0x1ba1aa) || 0x0) < 0x1f4) _0x3bfa38(_0x45d998);else {
          _0x178663["set"](_0x1ba1aa, _0x423a28), _0x3bfa38(_0x45d998);
          try {
            _0x3e7829();
          } catch (_0x37f563) {
            console["warn"]("[图鉴助手] " + _0x511eab + " 处理异常:", _0x37f563);
          }
        }
      };
    _0x68b335["addEventListener"]("click", _0x5f2d77), window["PointerEvent"] ? _0x68b335["addEventListener"]("pointerup", _0x5f2d77) : (_0x68b335["addEventListener"]("touchend", _0x5f2d77), _0x68b335["addEventListener"]("mouseup", _0x5f2d77)), (window["PointerEvent"] ? ["pointerup"] : ["touchend", "mouseup", "click"])["forEach"](_0x10e7fc => {
      document["addEventListener"](_0x10e7fc, _0x429a18 => {
        var _0x4941ad, _0x31655f;
        _0x4941ad = _0x68b335, _0x31655f = _0x429a18 && _0x429a18["target"], _0x4941ad && _0x31655f && (_0x4941ad === _0x31655f || _0x4941ad["contains"](_0x31655f)) && _0x5f2d77(_0x429a18);
      }, !0x0);
    });
  }
  function _0x1e8993(_0x42471d, _0x4060d2, _0x4170bf = !0x1, _0x54a279 = "") {
    const _0x26af18 = document["createElement"]("button");
    _0x26af18["type"] = "button", _0x26af18["textContent"] = _0x42471d;
    const _0x57a0ef = "danger" === _0x54a279 ? "danger" : _0x4170bf ? "primary" : "ghost";
    return _0x26af18["className"] = "bkh-btn bkh-btn-" + _0x57a0ef, _0x321f15(_0x26af18, () => _0x4060d2(), _0x42471d), _0x26af18;
  }
  function _0x281266(_0x281980, _0x48230d, _0x3a653c = !0x1) {
    const _0x3f405a = document["createElement"]("div");
    _0x3f405a["className"] = "bkh-sec";
    const _0x2c8ae9 = document["createElement"]("div");
    _0x2c8ae9["className"] = "bkh-sec-head";
    const _0x279505 = document["createElement"]("span");
    _0x279505["textContent"] = _0x281980, _0x279505["className"] = "bkh-sec-title", _0x2c8ae9["appendChild"](_0x279505);
    const _0x1a2495 = document["createElement"]("span");
    _0x1a2495["textContent"] = "\u25be", _0x1a2495["className"] = "bkh-arrow", _0x2c8ae9["appendChild"](_0x1a2495);
    const _0x33b7e0 = document["createElement"]("div");
    _0x33b7e0["className"] = "bkh-sec-body", _0x33b7e0["style"]["display"] = _0x3a653c ? "block" : "none";
    try {
      _0x48230d(_0x33b7e0);
    } catch (_0x45e899) {
      console["error"]("[图鉴助手] 分区「" + _0x281980 + "」内容构建失败:", _0x45e899);
      const _0x42912b = document["createElement"]("div");
      _0x42912b["className"] = "bkh-desc", _0x42912b["style"]["color"] = "#F87171", _0x42912b["textContent"] = "该分区加载失败: " + (_0x45e899 && _0x45e899["message"] ? _0x45e899["message"] : _0x45e899), _0x33b7e0["appendChild"](_0x42912b);
    }
    let _0x4bf181 = !_0x3a653c;
    return _0x3a653c && (_0x1a2495["style"]["transform"] = "rotate(180deg)"), _0x321f15(_0x2c8ae9, () => (_0x4bf181 = !_0x4bf181, _0x33b7e0["style"]["display"] = _0x4bf181 ? "none" : "block", _0x1a2495["style"]["transform"] = _0x4bf181 ? "rotate(0deg)" : "rotate(180deg)", void _0x57f493()), "section-" + _0x281980), _0x3f405a["appendChild"](_0x2c8ae9), _0x3f405a["appendChild"](_0x33b7e0), _0x3f405a;
  }
  const _0x18740a = _0x4f1fa7 => new Promise(_0x5d214c => setTimeout(_0x5d214c, Math["max"](0x0, Number(_0x4f1fa7) || 0x0)));
  function _0xceff07(_0x455b57, _0xc7862c) {
    if (!_0x455b57) return -0x1;
    const _0x4087c4 = _0x1bf342(_0x455b57, _0xc7862c);
    if (null == _0x4087c4) return -0x1;
    if ("number" == typeof _0x4087c4) return _0x4087c4;
    const _0x42977e = _0x512372(_0x4087c4, ["num", "count", "quantity", "itemNum"]);
    return null == _0x42977e ? -0x1 : Number(_0x42977e) || 0x0;
  }
  let _0x12d176 = !0x1;
  const _0x405a23 = {
    value: !0x1
  };
  function _0x1c3b7d() {
    return !_0x12d176 || (_0xc1049b("已有任务在执行，请先停止或等待完成", "warning"), !0x1);
  }
  function _0x142031(_0xcb85f2) {
    const _0x30fdd4 = String(_0xcb85f2 && _0xcb85f2["message"] || "");
    return /WebSocket|\u672a\u8fde\u63a5|\u8fde\u63a5\u4e0d\u652f\u6301|timeout/i["test"](_0x30fdd4);
  }
  let _0x3c81e5 = !0x1,
    _0x19c0ec = !0x1,
    _0x2be0a5 = null,
    _0x241a47 = null,
    _0x2b061f = !0x1,
    _0x52c0d1 = null,
    _0xe01217 = null,
    _0x5816a4 = null;
  function _0x3e2f43(_0x1f45f4) {
    _0x12d176 = _0x1f45f4;
    try {
      (_0x2be0a5 ? _0x2be0a5["querySelectorAll"]("button") : [])["forEach"](_0x5303ea => {
        _0x5303ea["classList"]["contains"]("bkh-stop") || (_0x5303ea["disabled"] = _0x1f45f4);
      });
    } catch (_0x28cde4) {}
  }
  function _0x1758a0(_0x20bc55, _0x522828, _0x41e826) {
    _0xe01217 && (_0xe01217["style"]["width"] = Math["min"](0x64, Math["round"](_0x20bc55 / Math["max"](0x1, _0x522828) * 0x64)) + "%", _0x5816a4 && (_0x5816a4["textContent"] = _0x41e826 + ":\x20" + _0x20bc55 + "/" + _0x522828));
  }
  function _0x4b64a7() {
    _0xe01217 && (_0xe01217["style"]["width"] = "0%"), _0x5816a4 && (_0x5816a4["textContent"] = "");
  }
  function _0x24a574() {
    if (_0x3c81e5) return;
    _0x3c81e5 = !0x0, function () {
      if (document["getElementById"]("bkhStyleSheet")) return;
      const _0x1ba40f = document["createElement"]("style");
      _0x1ba40f["id"] = "bkhStyleSheet", _0x1ba40f["textContent"] = "\n#bookStarHelperPanel {\n    padding: 10px !important;\n    border-radius: 18px !important;\n    border: 1px solid rgba(255,209,102,0.30) !important;\n    background: linear-gradient(165deg, rgba(27,33,60,0.97), rgba(12,16,30,0.97)) !important;\n    box-shadow: 0 18px 46px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.07) !important;\n    color: #E7ECFA;\n}\n.bkh-head { display:flex; align-items:center; gap:6px; margin-bottom:10px; }\n.bkh-title {\n    flex:1; min-width:0; margin:0; font-size:13px; font-weight:800; letter-spacing:.3px;\n    white-space:nowrap; overflow:hidden; text-overflow:ellipsis; color:#FFC44D;\n}\n.bkh-iconbtn {\n    display:flex; align-items:center; justify-content:center; flex:0 0 auto;\n    width:26px; height:26px; border-radius:8px; cursor:pointer; user-select:none;\n    font-size:11px; font-weight:700; color:#FFD98A;\n    background: rgba(255,255,255,0.08); border:1px solid rgba(255,255,255,0.13);\n    transition: background .15s ease, color .15s ease;\n}\n.bkh-iconbtn:hover { background: rgba(255,196,77,0.22); }\n.bkh-iconbtn-close { color:#FCA5A5; }\n.bkh-iconbtn-close:hover { background: rgba(239,68,68,0.22); }\n.bkh-setrow {\n    display:flex; align-items:center; gap:6px; margin-bottom:8px; padding:6px 8px;\n    border-radius:10px; background:rgba(255,255,255,0.05); border:1px solid rgba(255,255,255,0.08);\n}\n.bkh-label { font-size:11px; color:#9AA8C7; white-space:nowrap; }\n.bkh-input, .bkh-select {\n    flex:1; min-width:0; padding:5px 7px; border-radius:8px; outline:none;\n    border:1px solid rgba(255,255,255,0.14); background:rgba(6,10,22,0.65); color:#E9EEFC; font-size:11px;\n}\n.bkh-input:focus, .bkh-select:focus { border-color: rgba(255,196,77,0.55); }\n.bkh-val { font-size:10px; color:#FFC44D; min-width:44px; text-align:right; }\n.bkh-progress { height:6px; border-radius:999px; background:rgba(255,255,255,0.10); overflow:hidden; margin-bottom:4px; }\n.bkh-progress > div { height:100%; width:0%; border-radius:999px; background:linear-gradient(90deg,#FFD98A,#F0A020); transition:width .2s ease; }\n.bkh-progresstext { font-size:10px; color:#9AA8C7; min-height:13px; margin-bottom:8px; }\n.bkh-list { display:flex; flex-direction:column; gap:7px; }\n.bkh-sec { border-radius:12px; overflow:hidden; background:rgba(255,255,255,0.045); border:1px solid rgba(255,255,255,0.09); }\n.bkh-sec-head {\n    display:flex; align-items:center; justify-content:space-between; gap:6px; padding:8px 10px;\n    cursor:pointer; user-select:none; background:rgba(255,255,255,0.05);\n}\n.bkh-sec-title { font-size:12px; font-weight:700; color:#DCE4FA; letter-spacing:.3px; }\n.bkh-arrow { font-size:9px; color:#FFC44D; transition:transform .15s ease; }\n.bkh-sec-body { padding:8px 10px 10px; }\n.bkh-desc { font-size:10px; line-height:1.5; color:#8E9CBC; margin:0 0 8px; }\n.bkh-sub { font-size:10px; color:#8E9CBC; margin:2px 0 5px; }\n.bkh-chips { display:flex; flex-wrap:wrap; gap:5px; margin-bottom:7px; }\n.bkh-chip {\n    display:inline-flex; align-items:center; gap:4px; padding:4px 8px; border-radius:999px;\n    font-size:10px; cursor:pointer; color:#C7D2EA;\n    background:rgba(255,255,255,0.06); border:1px solid rgba(255,255,255,0.10);\n}\n.bkh-chip input { width:13px; height:13px; margin:0; accent-color:#FFC44D; }\n.bkh-btns { display:grid; grid-template-columns:repeat(auto-fit,minmax(108px,1fr)); gap:6px; }\n.bkh-btn {\n    min-height:32px; padding:7px 10px; border-radius:10px; font-size:12px; font-weight:600;\n    cursor:pointer; font-family:inherit; pointer-events:auto; touch-action:manipulation;\n    transition: transform .15s ease, filter .15s ease;\n}\n.bkh-btn-primary { border:none; color:#241703; background:linear-gradient(135deg,#FFD98A,#F0A020); box-shadow:0 6px 14px rgba(240,160,32,0.28); }\n.bkh-btn-ghost { background:rgba(255,255,255,0.07); border:1px solid rgba(255,255,255,0.16); color:#DCE4FA; }\n.bkh-btn-danger { border:none; color:#FFFFFF; background:linear-gradient(135deg,#F87171,#DC2626); box-shadow:0 6px 14px rgba(220,38,38,0.28); }\n.bkh-btn:hover { transform:translateY(-1px); filter:brightness(1.06); }\n.bkh-btn:active { transform:translateY(0); }\n.bkh-log {\n    margin-top:8px; max-height:110px; overflow-y:auto; padding:6px 8px; border-radius:10px;\n    background:rgba(4,8,18,0.62); border:1px solid rgba(255,255,255,0.09);\n    font-family:'SF Mono',Consolas,monospace; line-height:1.5; -webkit-overflow-scrolling:touch;\n}\n.bkh-foot {\n    margin-top:8px; padding-top:6px; border-top:1px solid rgba(255,255,255,0.08);\n    text-align:center; font-size:9px; color:#6B7A9C; letter-spacing:.2px; user-select:none;\n}\n", document["head"]["appendChild"](_0x1ba40f);
    }();
    let _0x194287 = 0x12c;
    try {
      _0x194287 = Math["max"](0x0, parseInt(localStorage["getItem"](_0x595893["delay"]), 0xa) || 0x12c);
    } catch (_0x14f5c4) {}
    const _0x442b5d = document["createElement"]("div");
    _0x442b5d["id"] = "bookStarHelperPanel", _0x442b5d["style"]["cssText"] = "\n            position: fixed; top: " + _0xb4c03["panel"]["top"] + "px; right: " + _0xb4c03["panel"]["right"] + "px;\n            width: " + _0x5faf56["baseWidth"] + "px; overflow-y: auto; -webkit-overflow-scrolling: touch;\n            backdrop-filter: blur(16px) saturate(160%);\n            z-index: " + _0x5faf56["zIndex"] + " !important;\n            display: none; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;\n            pointer-events: auto !important;\n        ", _0x2be0a5 = _0x442b5d;
    const _0x29f844 = document["createElement"]("div");
    _0x29f844["className"] = "bkh-head";
    const _0x52c411 = _0xb9c682(0x12);
    _0x52c411["style"]["flex"] = "0 0 auto", _0x29f844["appendChild"](_0x52c411);
    const _0x1b1eb9 = document["createElement"]("h3");
    _0x1b1eb9["textContent"] = "肝王之王图鉴升星助手", _0x1b1eb9["className"] = "bkh-title", _0x29f844["appendChild"](_0x1b1eb9);
    const _0x4b5d33 = document["createElement"]("div");
    _0x4b5d33["style"]["cssText"] = "display:flex;align-items:center;gap:4px;flex:0 0 auto;";
    const _0x2c5d3d = document["createElement"]("span");
    _0x2c5d3d["textContent"] = "A-", _0x2c5d3d["className"] = "bkh-iconbtn", _0x2c5d3d["setAttribute"]("role", "button");
    const _0x566110 = document["createElement"]("span");
    _0x566110["textContent"] = "A+", _0x566110["className"] = "bkh-iconbtn", _0x566110["setAttribute"]("role", "button"), [_0x2c5d3d, _0x566110]["forEach"](_0x2e3710 => _0x4b5d33["appendChild"](_0x2e3710)), _0x321f15(_0x2c5d3d, () => _0xe95b7f((_0x44edce || 0x1) - 0.1), "zoomOut"), _0x321f15(_0x566110, () => _0xe95b7f((_0x44edce || 0x1) + 0.1), "zoomIn"), _0x29f844["appendChild"](_0x4b5d33);
    const _0x40909b = document["createElement"]("div");
    _0x40909b["title"] = "关闭面板（Esc 也可关闭）", _0x40909b["setAttribute"]("aria-label", "\u5173\u95ed"), _0x40909b["className"] = "bkh-iconbtn bkh-iconbtn-close", _0x40909b["appendChild"](function (_0x40cbba) {
      const _0x521b2d = _0x5756f5("svg", {
        width: _0x40cbba,
        height: _0x40cbba,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2.6",
        "stroke-linecap": "round"
      });
      return _0x521b2d["style"]["display"] = "block", _0x521b2d["style"]["pointerEvents"] = "none", _0x521b2d["appendChild"](_0x5756f5("path", {
        d: "M6 6 L18 18"
      })), _0x521b2d["appendChild"](_0x5756f5("path", {
        d: "M18 6 L6 18"
      })), _0x521b2d;
    }(0xd));
    const _0x326f65 = () => {
      _0x442b5d["style"]["display"] = "none", _0x19c0ec = !0x1;
      try {
        _0x1d81e2("已关闭面板，点击悬浮按钮可重新打开", "info");
      } catch (_0x554f09) {}
    };
    _0x52c0d1 = _0x326f65, _0x321f15(_0x40909b, _0x326f65, "closeBtn"), _0x29f844["appendChild"](_0x40909b), _0x442b5d["appendChild"](_0x29f844), _0x442b5d["style"]["pointerEvents"] = "auto";
    const _0x1fc431 = document["createElement"]("div");
    _0x1fc431["className"] = "bkh-setrow";
    const _0x4c49fe = document["createElement"]("span");
    _0x4c49fe["textContent"] = "请求延迟", _0x4c49fe["className"] = "bkh-label";
    const _0x21d2ed = document["createElement"]("input");
    _0x21d2ed["type"] = "number", _0x21d2ed["value"] = String(_0x194287), _0x21d2ed["className"] = "bkh-input";
    const _0x353e7a = document["createElement"]("span");
    _0x353e7a["className"] = "bkh-val", _0x353e7a["textContent"] = _0x194287 + "ms";
    const _0x5889ea = () => {
      const _0x2ed684 = Math["max"](0x0, parseInt(_0x21d2ed["value"], 0xa) || 0x12c);
      _0x353e7a["textContent"] = _0x2ed684 + "ms";
      try {
        localStorage["setItem"](_0x595893["delay"], String(_0x2ed684));
      } catch (_0x249b7f) {}
    };
    _0x21d2ed["addEventListener"]("change", _0x5889ea), _0x21d2ed["addEventListener"]("keyup", _0x5889ea), _0x1fc431["appendChild"](_0x4c49fe), _0x1fc431["appendChild"](_0x21d2ed), _0x1fc431["appendChild"](_0x353e7a), _0x442b5d["appendChild"](_0x1fc431);
    const _0x4380e3 = () => Math["max"](0x0, parseInt(_0x21d2ed["value"], 0xa) || 0x12c),
      _0x45e60d = document["createElement"]("div");
    _0x45e60d["className"] = "bkh-progress", _0xe01217 = document["createElement"]("div"), _0x45e60d["appendChild"](_0xe01217), _0x442b5d["appendChild"](_0x45e60d), _0x5816a4 = document["createElement"]("div"), _0x5816a4["className"] = "bkh-progresstext", _0x442b5d["appendChild"](_0x5816a4);
    const _0x1ae0fd = document["createElement"]("div");
    _0x1ae0fd["className"] = "bkh-list", _0x1ae0fd["appendChild"](_0x281266("英雄升星", _0x44eafb => {
      const _0x4645cd = document["createElement"]("div");
      _0x4645cd["className"] = "bkh-desc", _0x4645cd["textContent"] = "按角色数据筛选（未拥有 / 满30星 / 碎片不足自动跳过），逐个升到无法继续", _0x44eafb["appendChild"](_0x4645cd);
      const _0x7450c2 = _0x1e8993("一键英雄升星", async () => {
          _0x1c3b7d() && (await _0x403ecd(_0x4380e3()));
        }, !0x0),
        _0xd81c5f = document["createElement"]("div");
      _0xd81c5f["className"] = "bkh-btns", _0xd81c5f["appendChild"](_0x7450c2), _0x44eafb["appendChild"](_0xd81c5f);
    }, !0x0)), _0x1ae0fd["appendChild"](_0x281266("批量图鉴升星", _0x3a6ee3 => {
      const _0x55b7b2 = document["createElement"]("div");
      _0x55b7b2["className"] = "bkh-desc", _0x55b7b2["textContent"] = "book_batchupgrade 整批升星，每类最多 50 次，600012 = 无可升星", _0x3a6ee3["appendChild"](_0x55b7b2);
      const _0x17928e = document["createElement"]("div");
      _0x17928e["className"] = "bkh-sub", _0x17928e["textContent"] = "升星类型", _0x3a6ee3["appendChild"](_0x17928e);
      const _0x5cd167 = document["createElement"]("div");
      _0x5cd167["className"] = "bkh-chips";
      const _0x1e1328 = {};
      _0x42cde5["forEach"](_0x4ff027 => {
        const _0x2957f6 = document["createElement"]("label");
        _0x2957f6["className"] = "bkh-chip";
        const _0x757f07 = document["createElement"]("input");
        _0x757f07["type"] = "checkbox", _0x757f07["checked"] = !0x0, _0x1e1328[_0x4ff027["value"]] = _0x757f07, _0x2957f6["appendChild"](_0x757f07), _0x2957f6["appendChild"](document["createTextNode"](_0x4ff027["label"])), _0x5cd167["appendChild"](_0x2957f6);
      }), _0x3a6ee3["appendChild"](_0x5cd167);
      const _0x10c64d = document["createElement"]("div");
      _0x10c64d["className"] = "bkh-sub", _0x10c64d["textContent"] = "阵营（仅英雄图鉴，鱼灵 / 皮肤固定 club=0）", _0x3a6ee3["appendChild"](_0x10c64d);
      const _0x57f21e = document["createElement"]("div");
      _0x57f21e["className"] = "bkh-chips";
      const _0x3c6035 = {};
      _0x31747f["forEach"](_0x2e2c86 => {
        const _0x394c9a = document["createElement"]("label");
        _0x394c9a["className"] = "bkh-chip";
        const _0x3b2f26 = document["createElement"]("input");
        _0x3b2f26["type"] = "checkbox", _0x3b2f26["checked"] = !0x0, _0x3c6035[_0x2e2c86["value"]] = _0x3b2f26, _0x394c9a["appendChild"](_0x3b2f26), _0x394c9a["appendChild"](document["createTextNode"](_0x2e2c86["label"])), _0x57f21e["appendChild"](_0x394c9a);
      }), _0x3a6ee3["appendChild"](_0x57f21e);
      const _0x3384e6 = document["createElement"]("div");
      _0x3384e6["className"] = "bkh-chips";
      const _0x8f96d3 = document["createElement"]("label");
      _0x8f96d3["className"] = "bkh-chip";
      const _0x40ec39 = document["createElement"]("input");
      _0x40ec39["type"] = "checkbox", _0x40ec39["checked"] = !0x0, _0x8f96d3["appendChild"](_0x40ec39), _0x8f96d3["appendChild"](document["createTextNode"]("升星后领取图鉴奖励")), _0x3384e6["appendChild"](_0x8f96d3), _0x3a6ee3["appendChild"](_0x3384e6);
      const _0x37bf84 = _0x1e8993("批量图鉴升星", async () => {
          if (!_0x1c3b7d()) return;
          const _0x32d0b9 = _0x42cde5["filter"](_0x239e54 => _0x1e1328[_0x239e54["value"]]["checked"])["map"](_0x3b8d77 => _0x3b8d77["value"]);
          if (0x0 === _0x32d0b9["length"]) return void _0xc1049b("请至少选择一种升星类型", "error");
          const _0x183641 = _0x31747f["filter"](_0x25d11e => _0x3c6035[_0x25d11e["value"]]["checked"])["map"](_0x39614b => _0x39614b["value"]);
          _0x32d0b9["includes"]("hero") && 0x0 === _0x183641["length"] ? _0xc1049b("请至少选择一个阵营", "error") : await _0x3d6495(_0x4380e3(), _0x183641, _0x40ec39["checked"], _0x32d0b9);
        }, !0x0),
        _0x191c12 = document["createElement"]("div");
      _0x191c12["className"] = "bkh-btns", _0x191c12["appendChild"](_0x37bf84), _0x3a6ee3["appendChild"](_0x191c12);
    }, !0x1)), _0x1ae0fd["appendChild"](_0x281266("奖励 / 橱窗", _0x4e76e7 => {
      const _0x59345e = _0x1e8993("一键领取图鉴奖励", async () => {
          _0x1c3b7d() && (await _0x195f52(_0x4380e3()));
        }, !0x0),
        _0x2bf971 = _0x1e8993("橱窗咸将激活", async () => {
          _0x1c3b7d() && (await _0x533405(_0x4380e3()));
        }, !0x1),
        _0xe74931 = document["createElement"]("div");
      _0xe74931["className"] = "bkh-btns", _0xe74931["appendChild"](_0x59345e), _0xe74931["appendChild"](_0x2bf971), _0x4e76e7["appendChild"](_0xe74931);
    }, !0x1)), _0x1ae0fd["appendChild"](_0x281266("英雄四圣升级", _0x26418b => {
      const _0x10cd4b = document["createElement"]("div");
      _0x10cd4b["className"] = "bkh-desc", _0x10cd4b["textContent"] = "hb_upgradeorder（红玉升阶）+ hb_quench（蓝玉淬炼）", _0x26418b["appendChild"](_0x10cd4b);
      const _0x3be976 = document["createElement"]("div");
      _0x3be976["className"] = "bkh-setrow";
      const _0x206e71 = document["createElement"]("span");
      _0x206e71["textContent"] = "\u82f1\u96c4", _0x206e71["className"] = "bkh-label";
      const _0x25b6fc = document["createElement"]("select");
      _0x25b6fc["className"] = "bkh-select", _0x3fabbd["forEach"](_0x59079c => {
        const _0x186a3f = document["createElement"]("option");
        _0x186a3f["value"] = String(_0x59079c), _0x186a3f["textContent"] = _0x150e63(_0x59079c), _0x25b6fc["appendChild"](_0x186a3f);
      }), _0x3be976["appendChild"](_0x206e71), _0x3be976["appendChild"](_0x25b6fc), _0x26418b["appendChild"](_0x3be976);
      const _0x4b7032 = _0x1e8993("四圣升级", async () => {
          _0x1c3b7d() && (await _0x2fd1eb(_0x4380e3(), Number(_0x25b6fc["value"])));
        }, !0x0),
        _0x13a7c7 = document["createElement"]("div");
      _0x13a7c7["className"] = "bkh-btns", _0x13a7c7["appendChild"](_0x4b7032), _0x26418b["appendChild"](_0x13a7c7);
    }, !0x1)), _0x442b5d["appendChild"](_0x1ae0fd);
    const _0xd39c74 = _0x1e8993("停止当前任务", () => {
      _0x405a23["value"] = !0x0, _0xc1049b("正在停止...", "warning");
    }, !0x1, "danger");
    _0xd39c74["classList"]["add"]("bkh-stop"), _0xd39c74["style"]["cssText"] = "width:100%;margin-top:8px;", _0x442b5d["appendChild"](_0xd39c74), _0x19ce83 = document["createElement"]("div"), _0x19ce83["className"] = "bkh-log", _0x19ce83["style"]["fontSize"] = "10px", _0x442b5d["appendChild"](_0x19ce83);
    const _0x5527bb = document["createElement"]("div");
    _0x5527bb["className"] = "bkh-foot", _0x5527bb["textContent"] = "© 肝王之王 · 版权为肝王之王所有。未尽允许不可盈利", _0x442b5d["appendChild"](_0x5527bb), document["body"]["appendChild"](_0x442b5d), _0x2be0a5 = _0x442b5d, _0x57f493(), function () {
      if (_0x19ce83) {
        for (; _0x5e7ef0["length"];) _0xcc3f04(_0x5e7ef0["shift"]());
      }
    }();
  }
  const _0x403ecd = async _0x45c768 => {
      _0x405a23["value"] = !0x1, _0x3e2f43(!0x0);
      try {
        const _0x48a30c = await async function () {
            const _0x359309 = _0x26a6ed("ServerData"),
              _0x587a10 = _0x359309 && (_0x359309["ROLE"] || _0x359309["role"]);
            if (_0x587a10 && (_0x587a10["heroes"] || _0x587a10["items"] || _0x587a10["artifactBooks"])) return {
              role: _0x587a10,
              source: "游戏数据"
            };
            const _0x4eb79e = ["role_getroleinfo", "role_getinfo", "role_roleinfo"];
            for (const _0x37d6be of _0x4eb79e) try {
              const _0x327904 = await _0x545313(_0x37d6be, {}),
                _0x41b127 = _0x512372(_0x327904, ["role", "roleInfo"]) || (_0x327904 && _0x327904["heroes"] ? _0x327904 : null);
              if (_0x41b127) return {
                role: _0x41b127,
                source: _0x37d6be
              };
            } catch (_0x496ca2) {}
            return _0x587a10 ? {
              role: _0x587a10,
              source: "游戏数据"
            } : {
              role: null,
              source: ""
            };
          }(),
          _0x2b06a2 = _0x48a30c["role"],
          _0x24a4f1 = _0x2b06a2 && (_0x2b06a2["heroes"] || _0x2b06a2["heroList"]) || null,
          _0x5f53d6 = _0x2b06a2 && _0x2b06a2["items"] || null,
          _0x27ca42 = !!_0x24a4f1;
        let _0x55d39e = _0x178cb2["slice"]();
        if (_0x27ca42) {
          const _0x5b9d50 = [];
          let _0x2ea5ff = 0x0,
            _0x33e313 = 0x0,
            _0x459c39 = 0x0;
          for (const _0x538e89 of _0x178cb2) {
            const _0x17334a = _0x1bf342(_0x24a4f1, _0x538e89);
            if (!_0x17334a) {
              _0x2ea5ff++;
              continue;
            }
            const _0x74d858 = Number(_0x512372(_0x17334a, ["star", "starLevel", "heroStar", "starNum"]) || 0x0);
            if (_0x74d858 >= 0x1e) {
              _0x33e313++;
              continue;
            }
            const _0x1b4c07 = _0xceff07(_0x5f53d6, _0x538e89);
            _0x1b4c07 >= 0x0 && _0x1b4c07 < (_0x47698e[_0x74d858] || 0x190) ? _0x459c39++ : _0x5b9d50["push"]({
              heroId: _0x538e89,
              star: _0x74d858
            });
          }
          if (_0x58b2cf("筛选：可升 " + _0x5b9d50["length"] + "（未拥有 " + _0x2ea5ff + " / 满星 " + _0x33e313 + " / 碎片不足 " + _0x459c39 + "）", "info"), 0x0 === _0x5b9d50["length"]) return void _0xc1049b("无满足条件的武将可升星", "info");
          _0x55d39e = _0x5b9d50["map"](_0x5caa19 => _0x5caa19["heroId"]);
        } else _0x58b2cf("未读到角色数据，回退全量尝试（每个武将最多 30 次）", "warning");
        const _0x3f7e91 = [];
        let _0x54d5eb = 0x0,
          _0x1428fd = 0x0,
          _0x1d1aa9 = null,
          _0x61acbd = 0x0;
        const _0x31a130 = async _0x5821c3 => {
          let _0x1106fe = 0x0;
          for (let _0x5c6049 = 0x0; _0x5c6049 < 0x1e && !_0x405a23["value"]; _0x5c6049++) {
            try {
              const _0x5cd4bd = _0x552da9(await _0x545313("hero_heroupgradestar", {
                heroId: _0x5821c3
              }));
              if (void 0x0 !== _0x5cd4bd && 0x0 !== _0x5cd4bd) break;
            } catch (_0x44396e) {
              _0x142031(_0x44396e) && (_0x1d1aa9 = _0x44396e);
              break;
            }
            _0x1106fe++, _0x1428fd++, await _0x18740a(_0x45c768);
          }
          return _0x1106fe;
        };
        for (const _0x387181 of _0x55d39e) {
          if (_0x405a23["value"] || _0x1d1aa9) break;
          const _0x17344e = await _0x31a130(_0x387181);
          _0x61acbd++, _0x1758a0(_0x61acbd, _0x55d39e["length"], "英雄升星"), _0x17344e > 0x0 ? (_0x54d5eb++, _0x58b2cf(_0x150e63(_0x387181) + " 升星 ×" + _0x17344e, "success")) : _0x3f7e91["push"](_0x387181), await _0x18740a(_0x45c768);
        }
        if (_0x3f7e91["length"] > 0x0 && !_0x405a23["value"] && !_0x1d1aa9) {
          await _0x18740a(Math["max"](0x7d0, _0x45c768)), _0x58b2cf("第二轮重试 " + _0x3f7e91["length"] + " 个未成功武将", "info");
          for (const _0x23de5d of _0x3f7e91) {
            if (_0x405a23["value"] || _0x1d1aa9) break;
            const _0x3f94c7 = await _0x31a130(_0x23de5d);
            _0x3f94c7 > 0x0 && (_0x54d5eb++, _0x58b2cf(_0x150e63(_0x23de5d) + " 重试升星 ×" + _0x3f94c7, "success"));
          }
        }
        if (_0x1d1aa9) throw _0x1d1aa9;
        _0x405a23["value"] ? (_0x58b2cf("英雄升星已停止", "warning"), _0xc1049b("已停止", "warning")) : (_0x58b2cf("英雄升星完成：" + _0x54d5eb + " 个武将，共 " + _0x1428fd + "\x20星", "success"), _0xc1049b("英雄升星完成!", "success"));
      } catch (_0x38ef4d) {
        _0x58b2cf("英雄升星异常: " + _0x38ef4d["message"], "error"), _0xc1049b("英雄升星出错", "error");
      } finally {
        _0x3e2f43(!0x1), _0x4b64a7();
      }
    },
    _0x3d6495 = async (_0x46684a, _0x31eab9, _0x8aa441, _0x3db178) => {
      _0x405a23["value"] = !0x1, _0x3e2f43(!0x0);
      try {
        const _0x206ada = Array["isArray"](_0x3db178) && _0x3db178["length"] > 0x0 ? _0x3db178["map"](_0x245e5d => _0x42cde5["find"](_0x8f0b89 => _0x8f0b89["value"] === _0x245e5d))["filter"](Boolean) : [..._0x42cde5];
        if (0x0 === _0x206ada["length"]) return void _0xc1049b("请至少选择一种升星类型", "error");
        if (_0x206ada["find"](_0x142dfe => "hero" === _0x142dfe["value"]) && 0x0 === _0x31eab9["length"]) return void _0xc1049b("请至少选择一个阵营", "error");
        const _0x2a84d1 = [];
        _0x206ada["forEach"](_0x33d5e7 => {
          _0x33d5e7["byClub"] ? _0x31eab9["forEach"](_0x53ca05 => _0x2a84d1["push"]({
            type: _0x33d5e7,
            club: _0x53ca05
          })) : _0x2a84d1["push"]({
            type: _0x33d5e7,
            club: 0x0
          });
        }), _0x58b2cf("开始批量图鉴升星：" + _0x206ada["map"](_0x5ed400 => _0x5ed400["label"])["join"]("+"), "info");
        let _0x152a90 = 0x0,
          _0x7495d3 = null,
          _0x2e76a3 = 0x0;
        for (const _0x3d91f5 of _0x2a84d1) {
          if (_0x405a23["value"] || _0x7495d3) break;
          _0x2e76a3++, _0x1758a0(_0x2e76a3, _0x2a84d1["length"], "批量图鉴");
          const _0x68e9c6 = _0x3d91f5["type"],
            _0x5032a0 = _0x3d91f5["club"],
            _0x1aeebd = _0x68e9c6["byClub"] ? (_0x31747f["find"](_0x3c37b8 => _0x3c37b8["value"] === _0x5032a0) || {})["label"] || _0x5032a0 : "\u5168\u90e8",
            _0x1d2924 = "" + _0x68e9c6["label"] + (_0x68e9c6["byClub"] ? "·" + _0x1aeebd : "");
          let _0xfbf024 = 0x0;
          for (let _0x3b2afc = 0x1; _0x3b2afc <= 0x32 && !_0x405a23["value"] && !_0x7495d3; _0x3b2afc++) {
            try {
              const _0x36dfa3 = _0x552da9(await _0x545313("book_batchupgrade", {
                club: _0x5032a0,
                isArtifact: _0x68e9c6["isArtifact"],
                isSkin: _0x68e9c6["isSkin"]
              }));
              if (void 0x0 !== _0x36dfa3 && 0x0 !== _0x36dfa3) {
                0x927cc === _0x36dfa3 ? _0x58b2cf(_0x1d2924 + "当前无图鉴可升星", "info") : _0x58b2cf(_0x1d2924 + "返回错误码 " + _0x36dfa3 + "，结束", "warning");
                break;
              }
              _0xfbf024++, _0x152a90++;
            } catch (_0x15843e) {
              const _0x417a17 = String(_0x15843e && _0x15843e["message"] || "");
              /600012/["test"](_0x417a17) ? _0x58b2cf(_0x1d2924 + "当前无图鉴可升星", "info") : (_0x58b2cf(_0x1d2924 + "失败: " + _0x417a17, "warning"), _0x142031(_0x15843e) && (_0x7495d3 = _0x15843e));
              break;
            }
            await _0x18740a(_0x46684a);
          }
          _0xfbf024 > 0x0 && _0x58b2cf(_0x1d2924 + "批量升星成功 ×" + _0xfbf024, "success");
        }
        let _0x4f4545 = 0x0;
        if (_0x8aa441 && !_0x405a23["value"] && !_0x7495d3) {
          for (let _0x9ec256 = 0x1; _0x9ec256 <= 0xa && !_0x405a23["value"]; _0x9ec256++) {
            try {
              const _0x453622 = _0x552da9(await _0x545313("book_claimpointreward", {}));
              if (void 0x0 !== _0x453622 && 0x0 !== _0x453622) break;
              _0x4f4545++;
            } catch (_0x12bd4c) {
              _0x142031(_0x12bd4c) && (_0x7495d3 = _0x12bd4c);
              break;
            }
            await _0x18740a(_0x46684a);
          }
          _0x58b2cf("图鉴奖励领取 " + _0x4f4545 + "\x20次", _0x4f4545 > 0x0 ? "success" : "info");
        }
        if (_0x7495d3) throw _0x7495d3;
        _0x405a23["value"] ? (_0x58b2cf("批量图鉴已停止", "warning"), _0xc1049b("已停止", "warning")) : (_0x58b2cf("批量图鉴完成：" + _0x152a90 + "\x20批" + (_0x8aa441 ? "，领奖 " + _0x4f4545 + "\x20次" : ""), "success"), _0xc1049b("批量图鉴完成!", "success"));
      } catch (_0x548ebc) {
        _0x58b2cf("批量图鉴异常: " + _0x548ebc["message"], "error"), _0xc1049b("批量图鉴出错", "error");
      } finally {
        _0x3e2f43(!0x1), _0x4b64a7();
      }
    },
    _0x195f52 = async _0x45884d => {
      _0x405a23["value"] = !0x1, _0x3e2f43(!0x0);
      try {
        let _0x467453 = 0x0,
          _0x58b2bf = null;
        for (let _0x40240e = 0x1; _0x40240e <= 0xa && !_0x405a23["value"]; _0x40240e++) {
          _0x1758a0(_0x40240e, 0xa, "领取奖励");
          try {
            const _0x352768 = _0x552da9(await _0x545313("book_claimpointreward", {}));
            if (void 0x0 !== _0x352768 && 0x0 !== _0x352768) break;
            _0x467453++;
          } catch (_0x530d66) {
            _0x142031(_0x530d66) && (_0x58b2bf = _0x530d66);
            break;
          }
          await _0x18740a(_0x45884d);
        }
        if (_0x58b2bf) throw _0x58b2bf;
        _0x58b2cf("图鉴奖励领取 " + _0x467453 + "\x20次", _0x467453 > 0x0 ? "success" : "info"), _0xc1049b(_0x467453 > 0x0 ? "奖励已领取!" : "暂无可领取奖励", _0x467453 > 0x0 ? "success" : "info");
      } catch (_0x1c02a2) {
        _0x58b2cf("领取图鉴奖励失败: " + _0x1c02a2["message"], "error"), _0xc1049b("领取失败", "error");
      } finally {
        _0x3e2f43(!0x1), _0x4b64a7();
      }
    },
    _0x533405 = async _0x11c3d2 => {
      _0x405a23["value"] = !0x1, _0x3e2f43(!0x0);
      try {
        _0x58b2cf("查询橱窗数据...", "info");
        const _0x3a8a9c = await _0x545313("collection_getinfo", {}),
          _0x3e6897 = _0x512372(_0x3a8a9c, ["collection", "data"]) || _0x3a8a9c,
          _0x3be6c6 = _0x4ecb28(_0x3e6897) || _0x4ecb28(_0x3a8a9c);
        if (!_0x3be6c6) return _0x58b2cf("未读到 heroSeries（顶层字段: " + (_0x32625c(_0x3e6897)["slice"](0x0, 0xc)["join"](",") || "\u7a7a") + "）", "warning"), void _0xc1049b("未读到橱窗数据", "warning");
        const _0x17f26e = [];
        let _0x89286f = 0x0,
          _0x40d937 = 0x0,
          _0x40ccfe = "";
        for (const _0x57c36a of _0x32625c(_0x3be6c6)) {
          const _0x3cab8f = _0x1bf342(_0x3be6c6, _0x57c36a);
          if (!_0x3cab8f || "object" != typeof _0x3cab8f) continue;
          let _0x74e8d5 = _0x1bf342(_0x3cab8f, "collectMap");
          _0x74e8d5 && "object" == typeof _0x74e8d5 || (_0x74e8d5 = _0x3cab8f);
          for (const _0x2eb335 of _0x32625c(_0x74e8d5)) {
            const _0x28465b = _0x1bf342(_0x74e8d5, _0x2eb335);
            if (!_0x28465b || "object" != typeof _0x28465b) continue;
            _0x40d937++, _0x40ccfe || (_0x40ccfe = _0x32625c(_0x28465b)["slice"](0x0, 0x8)["join"](","));
            const _0x12d167 = Number(_0x512372(_0x28465b, ["activateNum"]) || 0x0),
              _0x145b9d = Number(_0x512372(_0x28465b, ["canActivateNum"]) || 0x0);
            0x1 !== _0x12d167 ? 0x1 === _0x145b9d && _0x17f26e["push"]({
              poolType: 0x2,
              id: Number(_0x2eb335),
              isAll: !0x1,
              seriesId: Number(_0x57c36a)
            }) : _0x89286f++;
          }
        }
        if (_0x58b2cf("橱窗统计：共 " + _0x40d937 + " 项，已激活 " + _0x89286f + " 项，可激活 " + _0x17f26e["length"] + "\x20项", "info"), 0x0 === _0x17f26e["length"]) return _0x58b2cf("暂无可激活的橱窗咸将" + (_0x40ccfe ? "（道具字段: " + _0x40ccfe + "）" : ""), "info"), void _0xc1049b("暂无可激活项", "info");
        let _0x5cc615 = 0x0,
          _0xe71917 = 0x0;
        for (const _0x2434e1 of _0x17f26e) {
          if (_0x405a23["value"]) break;
          _0xe71917++, _0x1758a0(_0xe71917, _0x17f26e["length"], "橱窗激活");
          try {
            const _0x32e943 = _0x552da9(await _0x545313("collection_activate", _0x2434e1));
            void 0x0 !== _0x32e943 && 0x0 !== _0x32e943 || (_0x5cc615++, _0x58b2cf("激活成功 " + _0x150e63(_0x2434e1["seriesId"]) + "（皮肤 " + _0x2434e1["id"] + "）", "success"));
          } catch (_0x803dac) {
            _0x58b2cf("激活失败 " + _0x150e63(_0x2434e1["seriesId"]) + "（皮肤 " + _0x2434e1["id"] + "）", "warning");
          }
          await _0x18740a(_0x11c3d2);
        }
        _0x58b2cf("橱窗激活完成：" + _0x5cc615 + "\x20项", "success");
        let _0x496081 = 0x0;
        for (let _0x5a74a6 = 0x0; _0x5a74a6 < 0x14 && !_0x405a23["value"]; _0x5a74a6++) {
          try {
            const _0x17f4cb = _0x552da9(await _0x545313("collection_claimtotal", {}));
            if (void 0x0 !== _0x17f4cb && 0x0 !== _0x17f4cb) break;
            _0x496081++;
          } catch (_0x1c75ea) {
            break;
          }
          await _0x18740a(_0x11c3d2);
        }
        _0x496081 > 0x0 && _0x58b2cf("橱窗积分领取 " + _0x496081 + "\x20次", "success"), _0xc1049b("橱窗激活完成!", "success");
      } catch (_0x4364b2) {
        _0x58b2cf("橱窗激活异常: " + _0x4364b2["message"], "error"), _0xc1049b("橱窗激活出错", "error");
      } finally {
        _0x3e2f43(!0x1), _0x4b64a7();
      }
    },
    _0x2fd1eb = async (_0x558cd2, _0x29da5d) => {
      _0x405a23["value"] = !0x1, _0x3e2f43(!0x0);
      try {
        _0x58b2cf("开始四圣升级：" + _0x150e63(_0x29da5d), "info");
        let _0x1c75b1 = 0x0,
          _0x25792f = 0x0,
          _0x418dc7 = null;
        const _0x323e19 = async _0x48033d => {
            let _0x471888 = 0x0;
            for (let _0x3036ad = 0x0; _0x3036ad < _0x48033d && !_0x405a23["value"]; _0x3036ad++) {
              try {
                const _0x5acb63 = _0x552da9(await _0x545313("hb_quench", {
                  heroId: _0x29da5d
                }));
                if (void 0x0 !== _0x5acb63 && 0x0 !== _0x5acb63) break;
                _0x471888++;
              } catch (_0x58b3de) {
                const _0x41d9a8 = String(_0x58b3de && _0x58b3de["message"] || "");
                if (/200020|400000/["test"](_0x41d9a8)) break;
                _0x142031(_0x58b3de) && (_0x418dc7 = _0x58b3de);
                break;
              }
              _0x25792f++, _0x25792f % 0xa == 0x0 && _0x1758a0(_0x25792f, 0x190, "蓝玉淬炼"), await _0x18740a(_0x558cd2);
            }
            return _0x471888;
          },
          _0x529b7e = async () => {
            try {
              const _0x1645d9 = _0x552da9(await _0x545313("hb_upgradeorder", {
                heroId: _0x29da5d
              }));
              return void 0x0 === _0x1645d9 || 0x0 === _0x1645d9 || 0x30d54 === _0x1645d9;
            } catch (_0x44d8a1) {
              const _0x2f98d7 = String(_0x44d8a1 && _0x44d8a1["message"] || "");
              return !!/200020/["test"](_0x2f98d7) || (/400000|400010/["test"](_0x2f98d7) || _0x142031(_0x44d8a1) && (_0x418dc7 = _0x44d8a1), !0x1);
            }
          },
          _0x106271 = await _0x529b7e();
        if (_0x106271 && _0x1c75b1++, await _0x323e19(0xc8), _0x106271) for (let _0x2880ba = 0x1; _0x2880ba <= 0x32 && !_0x405a23["value"] && !_0x418dc7; _0x2880ba++) {
          _0x1758a0(_0x2880ba, 0x32, "红玉升阶");
          if (!(await _0x529b7e())) break;
          _0x1c75b1++, await _0x323e19(0xc8), await _0x18740a(_0x558cd2);
        }
        if (_0x418dc7) throw _0x418dc7;
        _0x405a23["value"] ? (_0x58b2cf("四圣升级已停止", "warning"), _0xc1049b("已停止", "warning")) : (_0x58b2cf("四圣升级完成：红玉 " + _0x1c75b1 + " 次，蓝玉淬炼 " + _0x25792f + "\x20次", "success"), _0xc1049b("四圣升级完成!", "success"));
      } catch (_0x5745c8) {
        _0x58b2cf("四圣升级异常: " + _0x5745c8["message"], "error"), _0xc1049b("四圣升级出错", "error");
      } finally {
        _0x3e2f43(!0x1), _0x4b64a7();
      }
    };
  function _0x3d72f1() {
    document["body"] ? (!function () {
      try {
        const _0x1d4a9c = "width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no, viewport-fit=cover";
        let _0x336d04 = document["querySelector"]('meta[name="viewport"]');
        _0x336d04 || (_0x336d04 = document["createElement"]("meta"), _0x336d04["setAttribute"]("name", "viewport"), document["head"]["appendChild"](_0x336d04)), /width\s*=\s*device-width/["test"](_0x336d04["getAttribute"]("content") || "") || _0x336d04["setAttribute"]("content", _0x1d4a9c);
      } catch (_0xde4b3d) {}
    }(), function () {
      const _0x2d3299 = document["createElement"]("div");
      _0x2d3299["id"] = "bookStarHelperToggleBtn", _0x2d3299["style"]["cssText"] = "\n            position: fixed; top: " + _0xb4c03["toggleBtn"]["top"] + "px; right: " + _0xb4c03["toggleBtn"]["right"] + "px;\n            width: 36px; height: 36px; cursor: pointer; z-index: " + _0x5faf56["zIndex"] + " !important;\n            background: transparent; border: none; border-radius: 0;\n            display: flex; align-items: center; justify-content: center;\n            transition: transform 0.2s ease; touch-action: none; user-select: none;\n            filter: drop-shadow(0 2px 3px rgba(0,0,0,0.35));\n            pointer-events: auto !important;\n        ", _0x2d3299["appendChild"](_0xb9c682(0x1c)), _0x2d3299["addEventListener"]("mouseover", () => {
        _0x2d3299["style"]["filter"] = "drop-shadow(0 2px 3px rgba(0,0,0,0.35)) brightness(1.15)";
      }), _0x2d3299["addEventListener"]("mouseout", () => {
        _0x2d3299["style"]["filter"] = "drop-shadow(0 2px 3px rgba(0,0,0,0.35))";
      });
      try {
        const _0x49daa0 = JSON["parse"](localStorage["getItem"](_0x595893["pos"]) || "null");
        _0x49daa0 && "number" == typeof _0x49daa0["left"] && "number" == typeof _0x49daa0["top"] && (_0x2d3299["style"]["left"] = _0x49daa0["left"] + "px", _0x2d3299["style"]["top"] = _0x49daa0["top"] + "px", _0x2d3299["style"]["right"] = "auto", _0x2b061f = !0x0);
      } catch (_0x10ef20) {}
      let _0x2fa43c = !0x1,
        _0x58cdc0 = 0x0,
        _0xcaf098 = 0x0,
        _0x51ed24 = 0x0,
        _0x153619 = 0x0,
        _0x4c5861 = !0x1;
      const _0x4af6f2 = _0x4279c7 => {
          const _0x37c72c = _0x4279c7["touches"] ? _0x4279c7["touches"][0x0] : _0x4279c7;
          _0x58cdc0 = _0x37c72c["clientX"], _0xcaf098 = _0x37c72c["clientY"];
          const _0x447e4b = _0x2d3299["getBoundingClientRect"]();
          _0x51ed24 = _0x447e4b["left"], _0x153619 = _0x447e4b["top"], _0x2fa43c = !0x1, _0x4c5861 = !0x0;
        },
        _0x505a2f = _0x22d7a => {
          if (!_0x4c5861) return;
          const _0x57b7e3 = _0x22d7a["touches"] ? _0x22d7a["touches"][0x0] : _0x22d7a,
            _0x49a810 = _0x57b7e3["clientX"] - _0x58cdc0,
            _0x3f9f0f = _0x57b7e3["clientY"] - _0xcaf098;
          (Math["abs"](_0x49a810) > 0x5 || Math["abs"](_0x3f9f0f) > 0x5) && (_0x2fa43c = !0x0, _0x22d7a["cancelable"] && _0x22d7a["preventDefault"](), _0x2d3299["style"]["left"] = _0x51ed24 + _0x49a810 + "px", _0x2d3299["style"]["top"] = _0x153619 + _0x3f9f0f + "px", _0x2d3299["style"]["right"] = "auto", _0x2b061f = !0x0);
        },
        _0x502dca = () => {
          if (_0x4c5861) {
            if (_0x4c5861 = !0x1, _0x2fa43c) {
              try {
                const _0x47e5f1 = _0x2d3299["getBoundingClientRect"]();
                localStorage["setItem"](_0x595893["pos"], JSON["stringify"]({
                  left: Math["round"](_0x47e5f1["left"]),
                  top: Math["round"](_0x47e5f1["top"])
                }));
              } catch (_0x5d815d) {}
              _0x57f493();
            } else try {
              if (!_0x3c81e5) try {
                _0x24a574();
              } catch (_0x50bdf9) {
                console["error"]("[图鉴助手] 面板构建异常:", _0x50bdf9);
                try {
                  _0x1d81e2("面板构建异常: " + (_0x50bdf9 && _0x50bdf9["message"] ? _0x50bdf9["message"] : _0x50bdf9), "error");
                } catch (_0x1776c6) {}
                if (_0x2be0a5 && !_0x2be0a5["isConnected"]) try {
                  document["body"]["appendChild"](_0x2be0a5);
                } catch (_0x8ed086) {}
              }
              if (!_0x2be0a5) {
                console["error"]("[图鉴助手] 面板未创建，无法打开");
                try {
                  _0x1d81e2("面板创建失败，请刷新页面重试", "error");
                } catch (_0x2820ca) {}
                return;
              }
              if (_0x19c0ec = !_0x19c0ec, _0x19c0ec) {
                try {
                  _0x2be0a5["parentNode"] !== document["body"] && document["body"]["appendChild"](_0x2be0a5);
                } catch (_0x365f86) {}
                _0x2be0a5["style"]["display"] = "block";
                try {
                  _0x57f493();
                } catch (_0x1f30dc) {
                  console["error"]("[图鉴助手] 打开面板后刷新异常:", _0x1f30dc);
                }
              } else _0x2be0a5["style"]["display"] = "none";
            } catch (_0x4e6929) {
              console["error"]("[图鉴助手] 切换面板异常:", _0x4e6929);
            }
          }
        };
      _0x2d3299["addEventListener"]("mousedown", _0x4af6f2), window["addEventListener"]("mousemove", _0x505a2f), window["addEventListener"]("mouseup", _0x502dca), _0x2d3299["addEventListener"]("touchstart", _0x4af6f2, {
        passive: !0x0
      }), window["addEventListener"]("touchmove", _0x505a2f, {
        passive: !0x1
      }), window["addEventListener"]("touchend", _0x502dca), document["body"]["appendChild"](_0x2d3299), _0x241a47 = _0x2d3299;
    }(), _0x57f493(), window["addEventListener"]("resize", _0x57f493), window["addEventListener"]("orientationchange", () => setTimeout(_0x57f493, 0xfa)), document["addEventListener"]("keydown", _0x3597d6 => {
      ("Escape" === _0x3597d6["key"] || "Esc" === _0x3597d6["key"]) && _0x19c0ec && _0x52c0d1 && _0x52c0d1();
    }), setTimeout(() => {
      const _0x45e97d = !!_0x26a6ed("data-index"),
        _0x337294 = !!_0x143242(!0x0);
      _0x58b2cf(_0x45e97d || _0x337294 ? "游戏环境已就绪" : "未检测到游戏环境（请在游戏页面使用本脚本）", _0x45e97d || _0x337294 ? "success" : "warning"), console["log"]("[图鉴助手] 已加载，游戏环境:", _0x45e97d || _0x337294);
    }, 0x1f4), console["log"]("[肝王之王图鉴升星助手] 已加载 v1.3.0"), console["log"]("[图鉴助手] 版权为肝王之王所有。未尽允许不可盈利")) : setTimeout(_0x3d72f1, 0x12c);
  }
  "loading" === document["readyState"] ? document["addEventListener"]("DOMContentLoaded", _0x3d72f1) : _0x3d72f1();
}();
