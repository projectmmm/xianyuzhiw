// Adapted from the supplied 2.57.2 game enhancement asset.
// Static strings decoded; obfuscator guards removed; frame access stays local.
!function () {
  "use strict";
  const _0x3e7327 = "3.0.0";
  if (window["__LP_SMART__"]) {
    if (window["__LP_SMART_VERSION__"] === _0x3e7327) return;
    try {
      window["__LP_SMART__"]["stopTimer"]();
    } catch (_0x3219ad) {}
  }
  window["__LP_SMART_VERSION__"] = _0x3e7327;
  const _0x5965af = "__peach_auto_run__",
    _0x54bcd0 = {
      tickMs: 0x320,
      enterCooldownMs: 0x2710,
      battleCooldownMs: 0x898,
      moveCooldownMs: 0xc80,
      pickCooldownMs: 0xa28,
      useItemCooldownMs: 0x1388,
      deployCooldownMs: 0x1388,
      deployEnterDelayMs: 0x4b0,
      reviveReadyGraceMs: 0x15f90,
      attackRange: 0x1,
      maxRetries: 0x3,
      debug: !0x0,
      verboseLog: !0x1,
      strategy: {
        autoEnter: "自动进场",
        autoGetOnCar: "自动上车",
        autoAttack: "自动攻击",
        autoPickItem: "自动拾取",
        autoUseCarItem: "使用车辆道具",
        protectCar: "\u62a4\u8f66",
        autoOpenDeploy: "自动布阵",
        useMainTeam: "使用主阵容",
        carDistance: "车辆距离",
        priorityTarget: "目标优先级"
      }
    },
    _0x20f792 = {
      running: !0x1,
      lastEnter: 0x0,
      lastBattle: 0x0,
      lastMove: 0x0,
      lastPick: 0x0,
      lastUseItem: 0x0,
      lastDeployOpen: 0x0,
      currentCar: null,
      battleCount: 0x0,
      moveCount: 0x0,
      pickCount: 0x0,
      useItemCount: 0x0,
      deployCount: 0x0,
      deployPending: !0x1,
      deployReady: !0x1,
      deployBattlefieldId: "",
      lastSeenBattlefieldId: "",
      lastDeploySignature: "",
      deathCount: 0x0,
      wasDead: !0x1,
      lastReviveSeconds: 0x0,
      lastDeathAt: 0x0,
      reviveDeadlineAt: 0x0,
      reviveReadyAt: 0x0,
      deployAfterRevivePending: !0x1,
      lastForcedDeployAt: 0x0,
      errorCount: 0x0,
      lastError: "",
      enterPending: !0x1,
      enterRetryCount: 0x0,
      lastSnapshot: null,
      taskLog: []
    },
    _0x29b909 = {
      root: null,
      status: null,
      log: null,
      minimized: !0x1,
      drag: null,
      moved: !0x1,
      suppressClick: !0x1
    },
    _0x42da26 = {
      ModuleManager: ["ModuleManager", "../modules/ModuleManager", "./ModuleManager"],
      Configs: ["Configs", "../../../launcher/config/Configs", "../../../../launcher/config/Configs"],
      Types: ["types-legion-payload", "./types-legion-payload", "../../modules/legionPayload/types-legion-payload"],
      LPSignal: ["LPSignal", "./LPSignal", "../../modules/legionPayload/LPSignal"],
      DateUtil: ["DateUtil", "../core/utils/DateUtil", "../../core/utils/DateUtil"],
      ServerData: ["ServerData", "../orange/data/ServerData", "../../orange/data/ServerData"]
    };
  function _0x36f652(_0x525ef9) {
    return function (_0x5adcb7) {
      if (!window["__require"]) return null;
      for (const _0x3e5a3a of _0x5adcb7) try {
        const _0x6bf448 = window["__require"](_0x3e5a3a);
        if (_0x6bf448) return _0x6bf448;
      } catch (_0xa104f8) {}
      return null;
    }(_0x42da26[_0x525ef9] || [_0x525ef9]);
  }
  function _0x31573b() {
    const _0x1827ee = _0x36f652("DateUtil"),
      _0x38f0a6 = _0x1827ee?.["default"]?.["serverTime"] ?? _0x1827ee?.["serverTime"];
    return "number" == typeof _0x38f0a6 ? _0x38f0a6 : Date["now"]();
  }
  function _0x3de2f6() {
    const _0xdf1555 = _0x36f652("ModuleManager"),
      _0x308194 = _0x36f652("Configs"),
      _0x517036 = _0x36f652("Types");
    return _0xdf1555 && _0x308194 ? {
      ModuleManager: _0xdf1555,
      Configs: _0x308194,
      Types: _0x517036 || {}
    } : null;
  }
  function _0x4e982b() {
    const _0x318cf8 = _0x3de2f6();
    if (!_0x318cf8?.["Configs"]?.["ModuleType"]) return null;
    try {
      return _0x318cf8["ModuleManager"]["GET_MODULE"](_0x318cf8["Configs"]["ModuleType"]["LEGION_PAYLOAD"]);
    } catch (_0x122fbe) {
      return null;
    }
  }
  function _0x2044d9(..._0x179d67) {
    _0x54bcd0["debug"] && console["log"]("[蟠桃园助手]", ..._0x179d67);
  }
  function _0x5213ab(..._0x12e7d8) {
    _0x20f792["errorCount"]++, _0x20f792["lastError"] = _0x12e7d8["map"](_0x32018a => String(_0x32018a?.["message"] || _0x32018a))["join"]("\x20"), console["error"]("[蟠桃园助手错误]", ..._0x12e7d8), _0x5a63f5("error", _0x20f792["lastError"]);
  }
  function _0x5a63f5(_0x47d892, _0x111dd7, _0x308713) {
    _0x20f792["taskLog"]["unshift"]({
      at: new Date()["toLocaleTimeString"](),
      type: _0x47d892,
      message: _0x111dd7,
      data: _0x308713
    }), _0x20f792["taskLog"]["length"] > 0x64 && (_0x20f792["taskLog"]["length"] = 0x64), _0x5a5acc();
  }
  function _0x15017d(_0x205f2e, _0x45741b, _0x164b7d) {
    return _0x164b7d - _0x205f2e >= _0x45741b;
  }
  function _0x28bcc0(_0x179208, _0x148e24) {
    _0x179208 && ("function" != typeof _0x179208["forEach"] ? Array["isArray"](_0x179208) ? _0x179208["forEach"]((_0x9fef1f, _0x152f98) => _0x148e24(_0x9fef1f, _0x152f98)) : "object" == typeof _0x179208 && Object["keys"](_0x179208)["forEach"](_0x1cce20 => _0x148e24(_0x179208[_0x1cce20], _0x1cce20)) : _0x179208["forEach"](_0x148e24));
  }
  function _0x5ad5ef(_0x3ae8ac) {
    const _0x5f21d8 = _0x3ae8ac?.["position"] ?? _0x3ae8ac?.["pos"] ?? _0x3ae8ac?.["serverData"]?.["position"] ?? _0x3ae8ac;
    if (!_0x5f21d8) return null;
    const _0x2b1c4d = Number(_0x5f21d8["x"]),
      _0x25f044 = Number(_0x5f21d8["y"]);
    return Number["isFinite"](_0x2b1c4d) && Number["isFinite"](_0x25f044) ? {
      x: _0x2b1c4d,
      y: _0x25f044
    } : null;
  }
  function _0x2efa82(_0x1c145c, ..._0x11bc84) {
    for (const _0x27dbb6 of _0x11bc84) {
      const _0x1a7758 = _0x1c145c?.[_0x27dbb6] ?? _0x1c145c?.["serverData"]?.[_0x27dbb6];
      if (null != _0x1a7758 && "" !== _0x1a7758) return _0x1a7758;
    }
    return null;
  }
  function _0x4701e7(_0xbba2f8, _0x377e0b) {
    const _0x179b1a = _0x5ad5ef(_0xbba2f8),
      _0xb05d89 = _0x5ad5ef(_0x377e0b);
    return _0x179b1a && _0xb05d89 ? Math["abs"](_0x179b1a["x"] - _0xb05d89["x"]) + Math["abs"](_0x179b1a["y"] - _0xb05d89["y"]) : 0x1 / 0x0;
  }
  function _0x514e64(_0x2d7235, _0x4b7b55 = _0x31573b()) {
    const _0x2334ee = Number(_0x2d7235?.["reviveTime"] ?? _0x2d7235?.["reviveSeconds"] ?? _0x2d7235?.["remainReviveTime"] ?? _0x2d7235?.["serverData"]?.["reviveTime"]);
    if (Number["isFinite"](_0x2334ee) && _0x2334ee > 0x0) return Math["ceil"](_0x2334ee);
    const _0x5874bf = Number(_0x2d7235?.["reviveAt"] ?? _0x2d7235?.["reviveTimeAt"] ?? _0x2d7235?.["serverData"]?.["reviveAt"]);
    if (!Number["isFinite"](_0x5874bf) || _0x5874bf <= 0x0) return 0x0;
    const _0x445e2c = _0x4b7b55 > 0xe8d4a51000 ? _0x4b7b55 / 0x3e8 : _0x4b7b55,
      _0x1afc04 = _0x5874bf > 0xe8d4a51000 ? _0x5874bf / 0x3e8 : _0x5874bf;
    return Math["max"](0x0, Math["ceil"](_0x1afc04 - _0x445e2c));
  }
  function _0x1fcc1d(_0x5d186e = _0x31573b()) {
    return _0x20f792["reviveDeadlineAt"] ? Math["max"](0x0, Math["ceil"]((_0x20f792["reviveDeadlineAt"] - _0x5d186e) / 0x3e8)) : _0x20f792["lastReviveSeconds"] || 0x0;
  }
  function _0x42b984(_0x17b767 = _0x31573b()) {
    _0x20f792["wasDead"] = !0x1, _0x20f792["lastReviveSeconds"] = 0x0, _0x20f792["reviveDeadlineAt"] = 0x0, _0x20f792["reviveReadyAt"] = _0x17b767;
  }
  function _0x4a963e(_0x15904f = _0x31573b()) {
    return !!_0x20f792["reviveReadyAt"] && _0x15904f - _0x20f792["reviveReadyAt"] <= _0x54bcd0["reviveReadyGraceMs"];
  }
  function _0x431d25() {
    _0x20f792["reviveReadyAt"] = 0x0;
  }
  function _0x3ac6d6(_0x590332 = _0x4e982b()) {
    return _0x590332?.["lPWarData"]?.["battlefield"] || null;
  }
  function _0x11e5e3(_0xb5fb07 = _0x3ac6d6()) {
    return _0xb5fb07?.["self"] || null;
  }
  function _0x240763(_0x31b735, _0x4276fa) {
    if (!_0x31b735 || !_0x4276fa) return !0x1;
    const _0x5b5076 = _0x2efa82(_0x31b735, "roleId", "id"),
      _0x62a9df = _0x2efa82(_0x4276fa, "roleId", "id");
    return (!_0x5b5076 || !_0x62a9df || _0x5b5076 !== _0x62a9df) && !_0x4276fa["isDead"] && !_0x4276fa["dead"] && (void 0x0 === _0x4276fa["legionId"] || void 0x0 === _0x31b735["legionId"] || _0x4276fa["legionId"] !== _0x31b735["legionId"]) && (void 0x0 === _0x4276fa["campId"] || void 0x0 === _0x31b735["campId"] || _0x4276fa["campId"] !== _0x31b735["campId"]) && !!_0x5ad5ef(_0x4276fa);
  }
  function _0x25ced1(_0x461f86, _0x2e0d90) {
    const _0x55b49f = _0x2efa82(_0x461f86, "roleId", "id");
    if (!_0x55b49f || !_0x2e0d90) return !0x1;
    if (_0x461f86["isOnCar"]) return !0x0;
    if (_0x2e0d90["memberMap"]?.["has"]?.(_0x55b49f)) return !0x0;
    return [_0x2e0d90["friendQueue"], _0x2e0d90["enemyQueue"], _0x2e0d90["battleQueue"], _0x2e0d90["members"], _0x2e0d90["memberList"]]["some"](_0x189223 => Array["isArray"](_0x189223) && _0x189223["some"](_0x20e668 => _0x2efa82(_0x20e668, "roleId", "id") === _0x55b49f));
  }
  function _0x49bfd4(_0x31a759) {
    const _0x4ee4ef = [];
    return _0x28bcc0(_0x31a759?.["carData"], _0x5691f1 => {
      _0x5691f1 && !_0x5691f1["isEndMarch"] && _0x4ee4ef["push"](_0x5691f1);
    }), _0x4ee4ef;
  }
  function _0x5a01f3(_0x3b22a1) {
    const _0x234db3 = [];
    return _0x28bcc0(_0x3b22a1?.["roles"] || _0x3b22a1?.["roleData"] || _0x3b22a1?.["playerData"], _0x317a1b => {
      _0x317a1b && _0x234db3["push"](_0x317a1b);
    }), _0x234db3;
  }
  function _0x4a7859(_0x3c2763) {
    const _0x19c895 = [];
    return _0x28bcc0(_0x3c2763?.["itemData"] || _0x3c2763?.["items"] || _0x3c2763?.["dropItemData"], _0xb1fc06 => {
      _0xb1fc06 && _0x5ad5ef(_0xb1fc06) && _0x19c895["push"](_0xb1fc06);
    }), _0x19c895;
  }
  function _0x42010f(_0x36c442, _0x837c66) {
    const _0x3a483a = _0x49bfd4(_0x36c442);
    if (!_0x3a483a["length"] || !_0x5ad5ef(_0x837c66)) return null;
    const _0x4f5ca3 = _0x3a483a["find"](_0x445b0d => _0x25ced1(_0x837c66, _0x445b0d));
    return _0x4f5ca3 || _0x3a483a["map"](_0x18c55e => ({
      car: _0x18c55e,
      dist: _0x4701e7(_0x837c66, _0x18c55e)
    }))["filter"](_0x167e60 => Number["isFinite"](_0x167e60["dist"]))["sort"]((_0x12d1bd, _0x54b348) => _0x12d1bd["dist"] - _0x54b348["dist"])[0x0]?.["car"] || null;
  }
  function _0x1d77fa(_0x1b5dbb, _0x2ad0d3, _0x3ea556) {
    const _0x380e52 = _0x5a01f3(_0x1b5dbb)["filter"](_0x221c46 => _0x240763(_0x2ad0d3, _0x221c46))["map"](_0x1c8505 => ({
      role: _0x1c8505,
      dist: _0x4701e7(_0x2ad0d3, _0x1c8505),
      carDist: _0x3ea556 ? _0x4701e7(_0x1c8505, _0x3ea556) : 0x1 / 0x0,
      onCar: _0x3ea556 ? _0x25ced1(_0x1c8505, _0x3ea556) : !!_0x1c8505["isOnCar"]
    }))["filter"](_0xcd11b3 => _0xcd11b3["dist"] <= _0x54bcd0["attackRange"]);
    if (!_0x380e52["length"]) return null;
    if ("onCar" === _0x54bcd0["strategy"]["priorityTarget"]) {
      const _0x20b3a9 = _0x380e52["find"](_0x58e886 => _0x58e886["onCar"]);
      if (_0x20b3a9) return _0x20b3a9["role"];
    }
    if ("nearCar" === _0x54bcd0["strategy"]["priorityTarget"] && _0x3ea556) {
      const _0x3a1df1 = _0x380e52["filter"](_0x13cf0b => _0x13cf0b["carDist"] <= _0x54bcd0["strategy"]["carDistance"])["sort"]((_0x1b7cbc, _0x122578) => _0x1b7cbc["carDist"] - _0x122578["carDist"] || _0x1b7cbc["dist"] - _0x122578["dist"])[0x0];
      if (_0x3a1df1) return _0x3a1df1["role"];
    }
    return _0x380e52["sort"]((_0x5d6da6, _0x24c707) => _0x5d6da6["dist"] - _0x24c707["dist"])[0x0]["role"];
  }
  function _0x3ad329(_0x4e7ecb, _0x117072) {
    return _0x4a7859(_0x4e7ecb)["map"](_0x1c3464 => ({
      item: _0x1c3464,
      dist: _0x4701e7(_0x117072, _0x1c3464)
    }))["filter"](_0x1a8f02 => Number["isFinite"](_0x1a8f02["dist"]))["sort"]((_0x4bf250, _0x4cdcee) => _0x4bf250["dist"] - _0x4cdcee["dist"])[0x0]?.["item"] || null;
  }
  function _0x18f1eb(_0xac71d7, _0x1466c2) {
    return {
      x: Number(_0xac71d7),
      y: Number(_0x1466c2)
    };
  }
  function _0x1c68a8(_0xc9bbd5, _0xaf89aa) {
    const _0x1d9436 = _0x3ac6d6(_0xc9bbd5),
      _0x5c5f8b = _0x5ad5ef(_0x11e5e3(_0x1d9436)),
      _0x313076 = _0x5ad5ef(_0xaf89aa);
    if (!_0x5c5f8b || !_0x313076) return null;
    if (function (_0x31afec, _0x15265d) {
      const _0x3f94b1 = _0x5ad5ef(_0x31afec),
        _0x579f3f = _0x5ad5ef(_0x15265d);
      return !!_0x3f94b1 && !!_0x579f3f && _0x3f94b1["x"] === _0x579f3f["x"] && _0x3f94b1["y"] === _0x579f3f["y"];
    }(_0x5c5f8b, _0x313076)) return [];
    const _0x9cd612 = _0xc9bbd5?.["lPWarData"]?.["sourceMap"] || _0xc9bbd5?.["sourceMap"] || _0x1d9436?.["sourceMap"];
    try {
      if (_0x9cd612?.["map"]?.["refreshMarchData"] && _0x9cd612["map"]["refreshMarchData"](_0x5c5f8b["x"], _0x5c5f8b["y"]), "function" == typeof _0x9cd612?.["marchArr"]) {
        const _0x3aefac = (_0x9cd612["marchArr"](_0x313076["x"], _0x313076["y"]) || [])["slice"]()["reverse"]()["map"](_0x5ad5ef)["filter"](Boolean);
        if (_0x3aefac["length"]) {
          const _0x43fa48 = _0x3aefac[_0x3aefac["length"] - 0x1];
          return _0x43fa48["x"] === _0x313076["x"] && _0x43fa48["y"] === _0x313076["y"] || _0x3aefac["push"](_0x313076), _0x3aefac["map"](_0x246467 => _0x18f1eb(_0x246467["x"], _0x246467["y"]));
        }
      }
    } catch (_0x129e89) {
      !function (..._0x32a382) {
        _0x54bcd0["debug"] && _0x54bcd0["verboseLog"] && console["log"]("[蟠桃园助手]", ..._0x32a382);
      }("寻路失败", _0x129e89);
    }
    return [_0x18f1eb(_0x313076["x"], _0x313076["y"])];
  }
  function _0x1c95b3(_0xce92d, _0x4a8eb0, _0x398ab8 = 0x0) {
    const _0x63030 = _0x1c68a8(_0xce92d, _0x4a8eb0);
    if (!_0x63030) return !0x1;
    if (!_0x63030["length"]) return !0x0;
    if (_0x398ab8 && "function" == typeof _0xce92d["sendGetCar"]) _0xce92d["sendGetCar"](_0x398ab8, _0x63030);else {
      if ("function" != typeof _0xce92d["sendMarch"]) return !0x1;
      _0xce92d["sendMarch"](_0x63030);
    }
    return _0x20f792["moveCount"]++, _0x5a63f5("ok", "移动到 " + _0x122b97(_0x4a8eb0) + "，路径 " + _0x63030["length"] + "\x20步"), !0x0;
  }
  function _0x39d454(_0x462037, _0x2a8d75) {
    try {
      const _0x2232e7 = _0x2a8d75();
      return _0x5a63f5("ok", _0x462037 + " 已发送"), _0x2232e7;
    } catch (_0xac65ce) {
      return _0x5213ab(_0x462037 + " 失败", _0xac65ce), null;
    }
  }
  function _0x3e3d72() {
    const _0x252f0f = function () {
        const _0x189740 = _0x36f652("ServerData");
        return _0x189740?.["ROLE"] || null;
      }(),
      _0x5669e7 = new Map();
    return _0x28bcc0(_0x252f0f?.["battleTeam"], (_0x2264e5, _0x213f11) => {
      const _0x3a6610 = function (_0x580bc8) {
          const _0x2754c6 = Number(_0x580bc8?.["heroId"] ?? _0x580bc8?.["id"] ?? _0x580bc8);
          return Number["isFinite"](_0x2754c6) && _0x2754c6 > 0x0 ? _0x2754c6 : 0x0;
        }(_0x2264e5),
        _0x2b13e1 = Number(_0x213f11);
      _0x3a6610 && Number["isFinite"](_0x2b13e1) && _0x5669e7["set"](_0x2b13e1, _0x3a6610);
    }), {
      battleTeam: _0x5669e7,
      lordWeaponId: Number(_0x252f0f?.["lordWeaponId"] ?? 0x0) || 0x0,
      petUId: _0x252f0f?.["petData"]?.["petUId"] || _0x252f0f?.["petUId"] || ""
    };
  }
  function _0x1d6059(_0x4400bd = _0x4e982b(), _0x355fea = !0x1) {
    if (!_0x4400bd) return _0x5a63f5("error", "未找到 LEGION_PAYLOAD 模块"), !0x1;
    if (!_0x4400bd?.["sendSetBattleTeam"] && !_0x4400bd?.["deployData"]?.["sendSetBattleTeam"]) return _0x5a63f5("error", "未找到蟠桃园保存布阵接口"), !0x1;
    const _0x32107a = _0x3e3d72();
    if (!_0x32107a["battleTeam"]["size"]) return _0x5a63f5("error", "main team is empty, cannot deploy"), !0x1;
    const _0x3694ab = _0x3ac6d6(_0x4400bd),
      _0x35502f = _0x3694ab?.["id"] || "",
      _0x54a876 = function (_0x87e46e) {
        if (!_0x87e46e?.["battleTeam"]?.["size"]) return "";
        const _0x508995 = [];
        return _0x87e46e["battleTeam"]["forEach"]((_0x3142d1, _0xaa7010) => _0x508995["push"](_0xaa7010 + ":" + _0x3142d1)), _0x508995["sort"](), _0x508995["join"]("|") + "|w:" + (_0x87e46e["lordWeaponId"] || 0x0) + "|p:" + (_0x87e46e["petUId"] || "");
      }(_0x32107a);
    if (!_0x355fea && _0x20f792["deployReady"] && _0x20f792["deployBattlefieldId"] === _0x35502f && _0x20f792["lastDeploySignature"] === _0x54a876) return !0x0;
    if (_0x20f792["deployPending"]) return !0x0;
    _0x20f792["deployPending"] = !0x0, _0x20f792["deployReady"] = !0x1, _0x20f792["deployBattlefieldId"] = _0x35502f, _0x20f792["lastDeploySignature"] = _0x54a876;
    try {
      const _0xfe4543 = _0x4400bd["deployData"]?.["dealDeploy"] ? Promise["resolve"](_0x4400bd["deployData"]["dealDeploy"](_0x32107a["battleTeam"], _0x32107a["lordWeaponId"], _0x32107a["petUId"]))["then"](() => _0x4400bd["sendSetBattleTeam"] ? _0x4400bd["sendSetBattleTeam"](_0x32107a["battleTeam"], _0x32107a["lordWeaponId"], _0x32107a["petUId"]) : _0x4400bd["deployData"]["sendSetBattleTeam"]()) : _0x4400bd["sendSetBattleTeam"](_0x32107a["battleTeam"], _0x32107a["lordWeaponId"], _0x32107a["petUId"]);
      return Promise["resolve"](_0xfe4543)["then"](() => {
        _0x20f792["deployCount"]++, _0x20f792["deployReady"] = !0x0, _0x20f792["deployBattlefieldId"] = _0x35502f, _0x5a63f5("ok", "布阵已提交：" + _0x32107a["battleTeam"]["size"] + " 个武将"), _0x90d588();
      })["catch"](_0x3460ff => {
        _0x20f792["deployReady"] = !0x1, _0x20f792["lastDeploySignature"] = "", _0x5213ab("布阵失败", _0x3460ff);
      })["finally"](() => {
        _0x20f792["deployPending"] = !0x1;
      }), !0x0;
    } catch (_0x5deff0) {
      return _0x20f792["deployPending"] = !0x1, _0x20f792["deployReady"] = !0x1, _0x20f792["lastDeploySignature"] = "", _0x5213ab("布阵失败", _0x5deff0), !0x1;
    }
  }
  function _0x231ea6() {
    _0x20f792["deployReady"] = !0x1, _0x20f792["deployBattlefieldId"] = "", _0x20f792["lastDeploySignature"] = "";
  }
  function _0x2ef4a1(_0x51bdab = _0x4e982b(), _0xa443bd = "自动布阵一次", _0x3304cd = _0x31573b(), _0x1cfa1a = !0x1, _0x11092b = !0x1) {
    if (!_0x54bcd0["strategy"]["autoOpenDeploy"]) return !0x1;
    if (_0x20f792["deployPending"]) return !0x0;
    if (!_0x11092b && !_0x15017d(_0x20f792["lastForcedDeployAt"], _0x54bcd0["deployCooldownMs"], _0x3304cd)) return !0x1;
    _0x231ea6(), _0x20f792["lastDeployOpen"] = _0x3304cd, _0x20f792["lastForcedDeployAt"] = _0x3304cd, _0x5a63f5("info", _0xa443bd);
    const _0x236fa5 = _0x1d6059(_0x51bdab, !0x0);
    return _0x236fa5 && _0x1cfa1a && setTimeout(() => {
      const _0x145704 = _0x4e982b();
      _0x20f792["running"] && _0x145704 && _0x18d9e2(_0x145704, !0x0);
    }, _0x54bcd0["deployEnterDelayMs"]), _0x236fa5;
  }
  function _0x18d9e2(_0x318144, _0x9a9f11 = !0x1) {
    const _0x53a114 = _0x31573b();
    return !(!_0x9a9f11 && !_0x54bcd0["strategy"]["autoEnter"]) && !(!_0x9a9f11 && !_0x15017d(_0x20f792["lastEnter"], _0x54bcd0["enterCooldownMs"], _0x53a114)) && !!_0x318144?.["startBattle"] && (_0x20f792["lastEnter"] = _0x53a114, _0x20f792["enterPending"] = !0x0, _0x20f792["enterRetryCount"]++, _0x20f792["enterRetryCount"] > _0x54bcd0["maxRetries"] ? (_0x20f792["enterPending"] = !0x1, _0x20f792["enterRetryCount"] = 0x0, _0x5a63f5("error", "进场重试次数过多，已停止自动进场"), !0x1) : (_0x39d454("进入战场", () => _0x318144["startBattle"](_0x9a9f11)), !0x0));
  }
  function _0x90d588() {
    _0x20f792["lastSnapshot"] = _0x589d9c(), _0x5a5acc();
  }
  function _0x122b97(_0x1190c7) {
    const _0xfe2c8d = _0x5ad5ef(_0x1190c7);
    return _0xfe2c8d ? _0xfe2c8d["x"] + "," + _0xfe2c8d["y"] : "-";
  }
  function _0x589d9c() {
    const _0x4c777f = _0x4e982b(),
      _0x3eb064 = _0x3ac6d6(_0x4c777f),
      _0x49efa7 = _0x3de2f6();
    if (!_0x4c777f) return {
      ready: !0x1,
      status: "未找到 LEGION_PAYLOAD 模块"
    };
    if (!_0x3eb064?.["self"]) return {
      ready: !0x0,
      status: "未进入战场",
      stage: _0x4c777f["lpMatchDay"]?.["stage"],
      isBattleDay: !!_0x4c777f["isBattleDay"],
      isSignUp: !!_0x4c777f["lpMatchDay"]?.["isSignUp"],
      hasRed: !!_0x4c777f["hasRed"]?.()
    };
    const _0x23af22 = _0x3eb064["self"],
      _0x11edac = _0x4a963e() ? 0x0 : _0x20f792["wasDead"] ? _0x1fcc1d() : _0x514e64(_0x23af22),
      _0x508765 = _0x20f792["currentCar"] || _0x42010f(_0x3eb064, _0x23af22),
      _0x1f60ce = _0x5a01f3(_0x3eb064)["filter"](_0x137d04 => _0x240763(_0x23af22, _0x137d04)),
      _0x41f792 = _0x1f60ce["filter"](_0x27a476 => _0x4701e7(_0x23af22, _0x27a476) <= _0x54bcd0["attackRange"]),
      _0x3a4e14 = _0x49bfd4(_0x3eb064),
      _0x4ccdce = _0x4a7859(_0x3eb064);
    return {
      ready: !0x0,
      status: "战场中",
      bfId: _0x3eb064["id"],
      selfId: _0x2efa82(_0x23af22, "roleId", "id"),
      selfState: _0x23af22["state"],
      selfPos: _0x5ad5ef(_0x23af22),
      isDead: !(!_0x23af22["isDead"] && !_0x23af22["dead"]),
      reviveSeconds: _0x11edac,
      isOnCar: !(!_0x508765 || !_0x25ced1(_0x23af22, _0x508765)),
      stage: _0x4c777f["lpMatchDay"]?.["stage"],
      stageName: _0x5efb98(_0x4c777f["lpMatchDay"]?.["stage"], _0x49efa7?.["Types"]),
      carCount: _0x3a4e14["length"],
      currentCarId: _0x2efa82(_0x508765, "carId", "id"),
      currentCarPos: _0x5ad5ef(_0x508765),
      enemyCount: _0x1f60ce["length"],
      nearbyEnemyCount: _0x41f792["length"],
      itemCount: _0x4ccdce["length"],
      nearestItemPos: _0x5ad5ef(_0x3ad329(_0x3eb064, _0x23af22))
    };
  }
  function _0x5efb98(_0x232810, _0x31ce7a) {
    const _0xb58c51 = _0x31ce7a?.["LPStage"];
    return _0xb58c51 && null != _0x232810 ? _0xb58c51[_0x232810] || String(_0x232810) : _0x232810 ?? "-";
  }
  const _0x8c793d = "lp-smart-panel-pos-v1";
  function _0x48e0b3(_0x214869, _0x423ab5, _0x2519fd) {
    return Math["max"](_0x423ab5, Math["min"](_0x2519fd, _0x214869));
  }
  function _0x664dc(_0x43c2aa) {
    try {
      localStorage["setItem"](_0x8c793d, JSON["stringify"](_0x43c2aa));
    } catch (_0x27e957) {}
  }
  function _0x2646cb(_0x3cfe17, _0x46fd04) {
    if (!_0x3cfe17 || !_0x46fd04) return;
    const _0x192d24 = _0x3cfe17["offsetWidth"] || 0x3a,
      _0x53ca06 = _0x3cfe17["offsetHeight"] || 0x3a,
      _0x3f33c0 = _0x48e0b3(Number(_0x46fd04["x"]) || 0x0, 0x0, Math["max"](0x0, window["innerWidth"] - _0x192d24)),
      _0x3b2879 = _0x48e0b3(Number(_0x46fd04["y"]) || 0x0, 0x0, Math["max"](0x0, window["innerHeight"] - _0x53ca06));
    _0x3cfe17["style"]["left"] = _0x3f33c0 + "px", _0x3cfe17["style"]["top"] = _0x3b2879 + "px", _0x3cfe17["style"]["right"] = "auto", _0x3cfe17["style"]["bottom"] = "auto";
  }
  function _0x29bcc3() {
    if (_0x29b909["root"] || !document["body"]) return;
    const _0x47df88 = document["createElement"]("style");
    _0x47df88["textContent"] = '\n      #lp-smart-panel {\n        position: fixed;\n        right: 16px;\n        bottom: 16px;\n        z-index: 2147483647;\n        width: min(390px, calc(100vw - 24px));\n        max-height: min(680px, calc(100vh - 24px));\n        color: #edf2f7;\n        background: rgba(18, 22, 28, 0.95);\n        border: 1px solid rgba(255, 255, 255, 0.14);\n        border-radius: 8px;\n        box-shadow: 0 16px 44px rgba(0, 0, 0, 0.36);\n        font: 12px/1.4 system-ui, -apple-system, Segoe UI, sans-serif;\n        overflow: hidden;\n        touch-action: none;\n      }\n      #lp-smart-panel.lp-min {\n        width: 58px;\n        height: 58px;\n        max-height: 58px;\n        border-radius: 50%;\n        background: rgba(28, 22, 30, 0.92);\n        border-color: rgba(255, 174, 201, 0.72);\n        box-shadow: 0 8px 24px rgba(0, 0, 0, 0.36);\n      }\n      #lp-smart-panel * { box-sizing: border-box; }\n      #lp-smart-panel .lp-head {\n        display: flex;\n        align-items: center;\n        justify-content: space-between;\n        gap: 8px;\n        padding: 10px 12px;\n        border-bottom: 1px solid rgba(255, 255, 255, 0.1);\n        background: rgba(255, 255, 255, 0.05);\n        cursor: pointer;\n        user-select: none;\n      }\n      #lp-smart-panel.lp-min .lp-head {\n        width: 58px;\n        height: 58px;\n        padding: 0;\n        border: 0;\n        background: transparent;\n        justify-content: center;\n      }\n      #lp-smart-panel.lp-min .lp-title,\n      #lp-smart-panel.lp-min [data-action="toggleRun"] { display: none; }\n      #lp-smart-panel.lp-min [data-action="min"] {\n        width: 48px;\n        height: 48px;\n        padding: 0;\n        border-radius: 50%;\n        border: 1px solid rgba(255, 255, 255, 0.34);\n        background:\n          radial-gradient(circle at 34% 28%, #fff7ed 0 12%, #fecaca 13% 25%, transparent 26%),\n          radial-gradient(circle at 58% 42%, #fb7185 0 34%, #e11d48 35% 62%, #831843 63%);\n        box-shadow: inset 0 0 0 2px rgba(255, 255, 255, 0.08);\n        font-size: 0;\n        position: relative;\n        cursor: move;\n      }\n      #lp-smart-panel.lp-min [data-action="min"]::before {\n        content: \'\';\n        position: absolute;\n        left: 23px;\n        top: 7px;\n        width: 17px;\n        height: 12px;\n        border-radius: 100% 0 100% 0;\n        background: linear-gradient(135deg, #86efac, #15803d);\n        transform: rotate(-18deg);\n      }\n      #lp-smart-panel.lp-min [data-action="min"]::after {\n        content: \'妗?;\n        position: absolute;\n        left: 14px;\n        bottom: 5px;\n        width: 20px;\n        height: 20px;\n        border-radius: 50%;\n        background: rgba(76, 5, 25, 0.72);\n        color: #fff;\n        font-size: 13px;\n        line-height: 20px;\n        text-align: center;\n        font-weight: 700;\n      }\n      #lp-smart-panel .lp-title { font-weight: 700; font-size: 13px; }\n      #lp-smart-panel .lp-body { display: grid; gap: 10px; padding: 10px; }\n      #lp-smart-panel.lp-min .lp-body { display: none; }\n      #lp-smart-panel .lp-row { display: flex; align-items: center; gap: 8px; flex-wrap: wrap; }\n      #lp-smart-panel button,\n      #lp-smart-panel select {\n        height: 28px;\n        border: 1px solid rgba(255, 255, 255, 0.16);\n        border-radius: 6px;\n        color: #eef3f8;\n        background: rgba(255, 255, 255, 0.08);\n        padding: 0 9px;\n        font: inherit;\n      }\n      #lp-smart-panel button:hover,\n      #lp-smart-panel select:hover { background: rgba(255, 255, 255, 0.14); }\n      #lp-smart-panel button[data-active="true"] {\n        color: #101418;\n        background: #7ed6a5;\n        border-color: #7ed6a5;\n      }\n      #lp-smart-panel .lp-card {\n        border: 1px solid rgba(255, 255, 255, 0.1);\n        border-radius: 6px;\n        padding: 8px;\n        background: rgba(255, 255, 255, 0.045);\n      }\n      #lp-smart-panel .lp-stats {\n        display: grid;\n        grid-template-columns: repeat(2, minmax(0, 1fr));\n        gap: 6px;\n      }\n      #lp-smart-panel .lp-stat { min-width: 0; color: #aeb8c5; }\n      #lp-smart-panel .lp-stat b {\n        display: block;\n        color: #ffffff;\n        overflow: hidden;\n        text-overflow: ellipsis;\n        white-space: nowrap;\n      }\n      #lp-smart-panel .lp-log {\n        max-height: 180px;\n        overflow: auto;\n        display: grid;\n        gap: 6px;\n      }\n      #lp-smart-panel .lp-log-item {\n        display: grid;\n        grid-template-columns: 64px 1fr;\n        gap: 6px;\n        color: #d7dee8;\n      }\n      #lp-smart-panel .lp-log-time { color: #7f8b99; }\n      #lp-smart-panel .lp-log-item[data-type="error"] { color: #ffaaa3; }\n      #lp-smart-panel .lp-log-item[data-type="ok"] { color: #9fe6ba; }\n      @media (max-width: 520px) {\n        #lp-smart-panel { left: 8px; right: 8px; bottom: 8px; width: auto; max-height: 58vh; }\n        #lp-smart-panel.lp-min { left: auto; right: 10px; bottom: 10px; width: 58px; height: 58px; max-height: 58px; }\n        #lp-smart-panel .lp-stats { grid-template-columns: repeat(3, minmax(0, 1fr)); }\n        #lp-smart-panel .lp-log { max-height: 120px; }\n      }\n    ', document["head"]["appendChild"](_0x47df88);
    const _0x21305e = document["createElement"]("div");
    _0x21305e["id"] = "lp-smart-panel", _0x21305e["innerHTML"] = '\n      <div class="lp-head">\n        <div class="lp-title">蟠桃园测试助手</div>\n        <div class="lp-row">\n          <button type="button" data-action="toggleRun"></button>\n          <button type="button" data-action="min" title="收起为圆形图标">-</button>\n        </div>\n      </div>\n      <div class="lp-body">\n        <div class="lp-card lp-stats" data-role="status"></div>\n        <div class="lp-card">\n          <div class="lp-row">\n            <button type="button" data-action="autoEnter">自动进场</button>\n            <button type="button" data-action="autoCar">自动上车</button>\n            <button type="button" data-action="autoAttack">自动攻击</button>\n            <button type="button" data-action="autoPick">自动拾取</button>\n            <button type="button" data-action="autoUse">使用车辆道具</button>\n            <button type="button" data-action="autoDeploy">自动布阵</button>\n          </div>\n          <div class="lp-row" style="margin-top:8px">\n            <select data-action="priority">\n              <option value="nearCar">优先护车</option>\n              <option value="onCar">优先车上敌人</option>\n              <option value="nearest">优先最近敌人</option>\n            </select>\n            <button type="button" data-action="enterNow">手动进场</button>\n            <button type="button" data-action="deployNow">布阵一次</button>\n            <button type="button" data-action="moveCar">去最近车</button>\n            <button type="button" data-action="attackNow">攻击一次</button>\n            <button type="button" data-action="pickNow">拾取一次</button>\n          </div>\n        </div>\n        <div class="lp-card">\n          <div class="lp-row" style="justify-content:space-between;margin-bottom:6px">\n            <b>日志</b>\n            <span class="lp-row">\n              <button type="button" data-action="diagnose">诊断</button>\n              <button type="button" data-action="reset">重置统计</button>\n              <button type="button" data-action="clearLog">清空</button>\n            </span>\n          </div>\n          <div class="lp-log" data-role="log"></div>\n        </div>\n      </div>\n    ', _0x21305e["addEventListener"]("click", _0x5b8ef6), _0x21305e["addEventListener"]("change", _0x40f1cb), document["body"]["appendChild"](_0x21305e), function (_0x10231a) {
      _0x10231a["addEventListener"]("pointerdown", _0x1ff66c => {
        if (!_0x1ff66c["target"]["closest"](".lp-head")) return;
        if (!_0x10231a["classList"]["contains"]("lp-min") && _0x1ff66c["target"]["closest"]("button,select")) return;
        const _0x527116 = _0x10231a["getBoundingClientRect"]();
        _0x29b909["drag"] = {
          pointerId: _0x1ff66c["pointerId"],
          startX: _0x1ff66c["clientX"],
          startY: _0x1ff66c["clientY"],
          offsetX: _0x1ff66c["clientX"] - _0x527116["left"],
          offsetY: _0x1ff66c["clientY"] - _0x527116["top"],
          startedMinimized: _0x10231a["classList"]["contains"]("lp-min")
        }, _0x29b909["moved"] = !0x1, _0x10231a["setPointerCapture"]?.(_0x1ff66c["pointerId"]), _0x1ff66c["preventDefault"]();
      }), _0x10231a["addEventListener"]("pointermove", _0x196c2 => {
        if (!_0x29b909["drag"] || _0x196c2["pointerId"] !== _0x29b909["drag"]["pointerId"]) return;
        if (Math["abs"](_0x196c2["clientX"] - _0x29b909["drag"]["startX"]) + Math["abs"](_0x196c2["clientY"] - _0x29b909["drag"]["startY"]) > 0x4 && (_0x29b909["moved"] = !0x0), !_0x29b909["moved"]) return;
        const _0x5379b2 = _0x10231a["offsetWidth"] || 0x3a,
          _0x50f75a = _0x10231a["offsetHeight"] || 0x3a,
          _0x1a8934 = _0x48e0b3(_0x196c2["clientX"] - _0x29b909["drag"]["offsetX"], 0x0, Math["max"](0x0, window["innerWidth"] - _0x5379b2)),
          _0x3e5d0f = _0x48e0b3(_0x196c2["clientY"] - _0x29b909["drag"]["offsetY"], 0x0, Math["max"](0x0, window["innerHeight"] - _0x50f75a));
        _0x10231a["style"]["left"] = _0x1a8934 + "px", _0x10231a["style"]["top"] = _0x3e5d0f + "px", _0x10231a["style"]["right"] = "auto", _0x10231a["style"]["bottom"] = "auto", _0x196c2["preventDefault"]();
      });
      const _0x6db3e6 = _0x205ceb => {
        if (_0x29b909["drag"] && _0x205ceb["pointerId"] === _0x29b909["drag"]["pointerId"]) {
          if (_0x10231a["releasePointerCapture"]?.(_0x205ceb["pointerId"]), _0x29b909["moved"]) {
            const _0x320981 = _0x10231a["getBoundingClientRect"]();
            _0x664dc({
              x: _0x320981["left"],
              y: _0x320981["top"]
            });
          } else _0x29b909["drag"]["startedMinimized"] && (_0x29b909["suppressClick"] = !0x0, _0x53eeb0(_0x10231a["querySelector"]('[data-action="min"]')));
          _0x29b909["drag"] = null, setTimeout(() => {
            _0x29b909["moved"] = !0x1, _0x29b909["suppressClick"] = !0x1;
          }, 0x0);
        }
      };
      _0x10231a["addEventListener"]("pointerup", _0x6db3e6), _0x10231a["addEventListener"]("pointercancel", _0x6db3e6);
    }(_0x21305e), _0x2646cb(_0x21305e, function () {
      try {
        const _0x4342a6 = localStorage["getItem"](_0x8c793d);
        if (!_0x4342a6) return null;
        const _0x122319 = JSON["parse"](_0x4342a6),
          _0x972331 = Number(_0x122319["x"]),
          _0x56813c = Number(_0x122319["y"]);
        return Number["isFinite"](_0x972331) && Number["isFinite"](_0x56813c) ? {
          x: _0x972331,
          y: _0x56813c
        } : null;
      } catch (_0xc33465) {
        return null;
      }
    }()), _0x29b909["root"] = _0x21305e, _0x29b909["status"] = _0x21305e["querySelector"]('[data-role="status"]'), _0x29b909["log"] = _0x21305e["querySelector"]('[data-role="log"]'), _0x5a5acc();
  }
  function _0x5b8ef6(_0x43e41) {
    if (_0x29b909["suppressClick"]) return _0x43e41["preventDefault"](), void _0x43e41["stopPropagation"]();
    if (_0x29b909["moved"]) return;
    const _0x1185c1 = _0x43e41["target"]["closest"]("button");
    if (!_0x1185c1) return;
    const _0x43e7c5 = _0x1185c1["dataset"]["action"],
      _0x22821c = window["__LP_SMART__"];
    "toggleRun" === _0x43e7c5 && (_0x20f792["running"] ? _0x22821c["stop"]() : _0x22821c["start"]()), "min" !== _0x43e7c5 ? ("autoEnter" === _0x43e7c5 && _0x22821c["setStrategy"]("autoEnter", !_0x54bcd0["strategy"]["autoEnter"]), "autoCar" === _0x43e7c5 && _0x22821c["setStrategy"]("autoGetOnCar", !_0x54bcd0["strategy"]["autoGetOnCar"]), "autoAttack" === _0x43e7c5 && _0x22821c["setStrategy"]("autoAttack", !_0x54bcd0["strategy"]["autoAttack"]), "autoPick" === _0x43e7c5 && _0x22821c["setStrategy"]("autoPickItem", !_0x54bcd0["strategy"]["autoPickItem"]), "autoUse" === _0x43e7c5 && _0x22821c["setStrategy"]("autoUseCarItem", !_0x54bcd0["strategy"]["autoUseCarItem"]), "autoDeploy" === _0x43e7c5 && _0x22821c["setStrategy"]("autoOpenDeploy", !_0x54bcd0["strategy"]["autoOpenDeploy"]), "enterNow" === _0x43e7c5 && _0x22821c["enterNow"](), "deployNow" === _0x43e7c5 && _0x22821c["deployNow"](), "moveCar" === _0x43e7c5 && _0x22821c["moveToCar"](), "attackNow" === _0x43e7c5 && _0x22821c["attackNearest"](), "pickNow" === _0x43e7c5 && _0x22821c["pickItem"](), "diagnose" === _0x43e7c5 && _0x22821c["diagnose"](), "reset" === _0x43e7c5 && _0x22821c["resetStats"](), "clearLog" === _0x43e7c5 && (_0x20f792["taskLog"]["length"] = 0x0, _0x5a5acc())) : _0x53eeb0(_0x1185c1);
  }
  function _0x53eeb0(_0x209538) {
    if (!_0x29b909["root"]) return;
    _0x29b909["minimized"] = !_0x29b909["minimized"], _0x29b909["root"]["classList"]["toggle"]("lp-min", _0x29b909["minimized"]);
    const _0x4b5b97 = _0x29b909["root"]["getBoundingClientRect"]();
    _0x2646cb(_0x29b909["root"], {
      x: _0x4b5b97["left"],
      y: _0x4b5b97["top"]
    });
    const _0x5396d6 = _0x29b909["root"]["getBoundingClientRect"]();
    _0x664dc({
      x: _0x5396d6["left"],
      y: _0x5396d6["top"]
    }), _0x209538["title"] = _0x29b909["minimized"] ? "展开助手" : "收起助手";
  }
  function _0x40f1cb(_0x3efa68) {
    const _0x422bd9 = _0x3efa68["target"]["closest"]('select[data-action="priority"]');
    _0x422bd9 && window["__LP_SMART__"]["setStrategy"]("priorityTarget", _0x422bd9["value"]);
  }
  function _0x5a5acc() {
    if (!_0x29b909["root"]) return;
    const _0x4a0ef3 = _0x20f792["lastSnapshot"] || _0x589d9c();
    _0xc0989e("toggleRun", _0x20f792["running"], _0x20f792["running"] ? "\u6682\u505c" : "\u542f\u52a8"), _0xc0989e("autoEnter", _0x54bcd0["strategy"]["autoEnter"]), _0xc0989e("autoCar", _0x54bcd0["strategy"]["autoGetOnCar"]), _0xc0989e("autoAttack", _0x54bcd0["strategy"]["autoAttack"]), _0xc0989e("autoPick", _0x54bcd0["strategy"]["autoPickItem"]), _0xc0989e("autoUse", _0x54bcd0["strategy"]["autoUseCarItem"]), _0xc0989e("autoDeploy", _0x54bcd0["strategy"]["autoOpenDeploy"]);
    const _0xafe273 = _0x29b909["root"]["querySelector"]('[data-action="priority"]');
    _0xafe273 && (_0xafe273["value"] = _0x54bcd0["strategy"]["priorityTarget"]);
    const _0x1ebecc = [["\u8fd0\u884c", _0x20f792["running"] ? "运行中" : "已暂停"], ["\u72b6\u6001", _0x4a0ef3["status"] || "-"], ["\u6218\u573a", _0x4a0ef3["bfId"] || "-"], ["\u9636\u6bb5", _0x4a0ef3["stageName"] || _0x4a0ef3["stage"] || "-"], ["\u81ea\u8eab", _0x4a0ef3["selfPos"] ? _0x122b97(_0x4a0ef3["selfPos"]) : "-"], ["\u590d\u6d3b", _0x4a0ef3["isDead"] ? (_0x4a0ef3["reviveSeconds"] || _0x20f792["lastReviveSeconds"] || "-") + "秒" : "-"], ["\u8f66\u8f86", _0x4a0ef3["currentCarId"] || "-"], ["\u654c\u4eba", _0x4a0ef3["nearbyEnemyCount"] ?? "-"], ["\u9053\u5177", _0x4a0ef3["itemCount"] ?? "-"], ["\u79fb\u52a8", _0x20f792["moveCount"]], ["\u653b\u51fb", _0x20f792["battleCount"]], ["\u62fe\u53d6", _0x20f792["pickCount"]], ["\u5e03\u9635", _0x20f792["deployPending"] ? "提交中" : _0x20f792["deployReady"] ? "已完成" : _0x20f792["deployCount"]], ["\u9519\u8bef", _0x20f792["errorCount"]]];
    _0x29b909["status"]["replaceChildren"](..._0x1ebecc["map"](([_0x480144, _0x2eab62]) => {
      const _0x37f763 = document["createElement"]("div");
      _0x37f763["className"] = "lp-stat";
      const _0x17b629 = document["createElement"]("b");
      return _0x17b629["textContent"] = String(_0x2eab62), _0x37f763["append"](_0x480144, _0x17b629), _0x37f763;
    })), _0x29b909["log"]["replaceChildren"](..._0x20f792["taskLog"]["slice"](0x0, 0x32)["map"](_0x2bdd37 => {
      const _0x578972 = document["createElement"]("div");
      _0x578972["className"] = "lp-log-item", _0x578972["dataset"]["type"] = _0x2bdd37["type"];
      const _0x367e80 = document["createElement"]("span");
      _0x367e80["className"] = "lp-log-time", _0x367e80["textContent"] = _0x2bdd37["at"];
      const _0x40e745 = document["createElement"]("span");
      return _0x40e745["textContent"] = _0x2bdd37["message"], _0x578972["append"](_0x367e80, _0x40e745), _0x578972;
    }));
  }
  function _0xc0989e(_0x4cded7, _0x283855, _0x1f29cd) {
    const _0x4a018a = _0x29b909["root"]?.["querySelector"]('[data-action="' + _0x4cded7 + "\x22]");
    _0x4a018a && (_0x4a018a["dataset"]["active"] = String(_0x283855), _0x1f29cd && (_0x4a018a["textContent"] = _0x1f29cd));
  }
  function _0x410a59(_0x4f5ffc) {
    return {
      autoEnter: "自动进场",
      autoGetOnCar: "自动上车",
      autoAttack: "自动攻击",
      autoPickItem: "自动拾取",
      autoUseCarItem: "使用车辆道具",
      protectCar: "\u62a4\u8f66",
      autoOpenDeploy: "自动布阵",
      useMainTeam: "使用主阵容",
      carDistance: "车辆距离",
      priorityTarget: "目标优先级"
    }[_0x4f5ffc] || _0x4f5ffc;
  }
  function _0x5cbd6a(_0x2be3f8) {
    return !0x0 === _0x2be3f8 ? "\u5f00\u542f" : !0x1 === _0x2be3f8 ? "\u5173\u95ed" : String(_0x2be3f8);
  }
  function _0x5d06fc() {
    try {
      _0x20f792["running"] ? localStorage["setItem"](_0x5965af, "1") : localStorage["removeItem"](_0x5965af);
    } catch (_0x3790fe) {}
  }
  const _0x20b877 = setInterval(function () {
      if (_0x20f792["running"]) try {
        const _0x488caf = _0x4e982b();
        if (!_0x488caf) return;
        const _0x378280 = _0x3ac6d6(_0x488caf),
          _0x5db734 = _0x31573b();
        if (!_0x378280?.["self"]) return (_0x20f792["deployAfterRevivePending"] || _0x20f792["wasDead"]) && _0x1fcc1d(_0x5db734) <= 0x0 && (_0x42b984(_0x5db734), _0x2ef4a1(_0x488caf, "复活倒计时结束，自动布阵并进场", _0x5db734, !0x0, !0x0) && (_0x20f792["deployAfterRevivePending"] = !0x1)), _0x18d9e2(_0x488caf, !0x1), void _0x90d588();
        _0x20f792["enterPending"] && (_0x20f792["enterPending"] = !0x1, _0x20f792["enterRetryCount"] = 0x0, _0x231ea6(), _0x5a63f5("ok", "已进入战场"));
        const _0x5a69a1 = _0x378280["self"],
          _0x1b6fa0 = _0x378280?.["id"] || "unknown";
        if (_0x20f792["lastSeenBattlefieldId"] !== _0x1b6fa0 && (_0x20f792["lastSeenBattlefieldId"] = _0x1b6fa0, _0x2ef4a1(_0x488caf, "进入战场，自动布阵一次", _0x5db734, !0x1, !0x0)), _0x20f792["deployBattlefieldId"] && _0x20f792["deployBattlefieldId"] !== _0x378280["id"] && _0x231ea6(), (_0x5a69a1["isDead"] || _0x5a69a1["dead"]) && _0x4a963e(_0x5db734)) return _0x20f792["lastReviveSeconds"] = 0x0, _0x20f792["reviveDeadlineAt"] = 0x0, _0x2ef4a1(_0x488caf, "复活已就绪，自动布阵并进场", _0x5db734, !0x0, !0x1) && (_0x20f792["deployAfterRevivePending"] = !0x1), void _0x90d588();
        if (_0x5a69a1["isDead"] || _0x5a69a1["dead"]) {
          const _0x4bc582 = _0x514e64(_0x5a69a1, _0x5db734);
          return _0x20f792["wasDead"] ? _0x20f792["lastReviveSeconds"] = _0x1fcc1d(_0x5db734) : (_0x20f792["deathCount"]++, _0x20f792["lastDeathAt"] = _0x5db734, _0x20f792["wasDead"] = !0x0, _0x20f792["lastReviveSeconds"] = _0x4bc582, _0x20f792["reviveDeadlineAt"] = _0x5db734 + 0x3e8 * Math["max"](0x1, _0x4bc582 || 0x0), _0x20f792["deployAfterRevivePending"] = !0x0, _0x5a63f5("info", "战斗失败，等待复活：" + (_0x20f792["lastReviveSeconds"] || "-") + "秒")), _0x20f792["deployAfterRevivePending"] && _0x1fcc1d(_0x5db734) <= 0x0 && (_0x42b984(_0x5db734), _0x2ef4a1(_0x488caf, "复活倒计时结束，自动布阵并进场", _0x5db734, !0x0, !0x0) && (_0x20f792["deployAfterRevivePending"] = !0x1)), void _0x90d588();
        }
        if (_0x431d25(), _0x20f792["wasDead"] && (_0x20f792["wasDead"] = !0x1, _0x20f792["lastReviveSeconds"] = 0x0, _0x20f792["reviveDeadlineAt"] = 0x0, _0x431d25(), _0x5a63f5("ok", "已复活，继续执行"), _0x20f792["deployAfterRevivePending"] ? (_0x20f792["deployAfterRevivePending"] = !0x1, _0x2ef4a1(_0x488caf, "复活完成，自动布阵并进场", _0x5db734, !0x0, !0x0)) : _0x20f792["deployAfterRevivePending"] = !0x1), function (_0x33b193, _0x27b8a7, _0x46c2e1) {
          if (!_0x27b8a7 || _0x27b8a7["isDead"]) return !0x1;
          if (!_0x54bcd0["strategy"]["autoOpenDeploy"]) return !0x0;
          const _0x316703 = _0x3ac6d6(_0x33b193),
            _0x176975 = _0x316703?.["id"] || "";
          !(!_0x20f792["deployReady"] || _0x20f792["deployBattlefieldId"] !== _0x176975) || !_0x20f792["deployPending"] && !!_0x15017d(_0x20f792["lastDeployOpen"], _0x54bcd0["deployCooldownMs"], _0x46c2e1) && (_0x20f792["lastDeployOpen"] = _0x46c2e1, _0x54bcd0["strategy"]["useMainTeam"] && _0x1d6059(_0x33b193, !0x1) || _0x33b193?.["sendStart"] && _0x39d454("open deploy", () => _0x33b193["sendStart"]()));
        }(_0x488caf, _0x5a69a1, _0x5db734), _0x20f792["currentCar"] = _0x42010f(_0x378280, _0x5a69a1), _0x54bcd0["strategy"]["autoPickItem"] && _0x15017d(_0x20f792["lastPick"], _0x54bcd0["pickCooldownMs"], _0x5db734)) {
          const _0x1a37f3 = _0x3ad329(_0x378280, _0x5a69a1);
          _0x1a37f3 && _0x4701e7(_0x5a69a1, _0x1a37f3) <= 0x1 && _0x488caf["sendPickItem"] && (_0x20f792["lastPick"] = _0x5db734, _0x20f792["pickCount"]++, _0x39d454("拾取道具", () => _0x488caf["sendPickItem"]()));
        }
        if (_0x54bcd0["strategy"]["autoUseCarItem"] && _0x20f792["currentCar"] && _0x15017d(_0x20f792["lastUseItem"], _0x54bcd0["useItemCooldownMs"], _0x5db734)) {
          const _0x2c53af = _0x2efa82(_0x20f792["currentCar"], "carId", "id");
          _0x2c53af && _0x488caf["sendUse"] && (_0x20f792["lastUseItem"] = _0x5db734, _0x20f792["useItemCount"]++, _0x39d454("使用车辆道具 " + _0x2c53af, () => _0x488caf["sendUse"](_0x2c53af)));
        }
        if (_0x54bcd0["strategy"]["autoGetOnCar"] && _0x20f792["currentCar"] && !_0x25ced1(_0x5a69a1, _0x20f792["currentCar"])) {
          const _0x35d4df = _0x2efa82(_0x20f792["currentCar"], "carId", "id");
          _0x35d4df && _0x15017d(_0x20f792["lastMove"], _0x54bcd0["moveCooldownMs"], _0x5db734) && (_0x20f792["lastMove"] = _0x5db734, _0x1c95b3(_0x488caf, _0x20f792["currentCar"], _0x35d4df));
        }
        if (_0x54bcd0["strategy"]["autoAttack"] && _0x15017d(_0x20f792["lastBattle"], _0x54bcd0["battleCooldownMs"], _0x5db734)) {
          const _0x136d12 = _0x2efa82(_0x1d77fa(_0x378280, _0x5a69a1, _0x20f792["currentCar"]), "roleId", "id");
          _0x136d12 && _0x488caf["sendBattle"] && (_0x20f792["lastBattle"] = _0x5db734, _0x20f792["battleCount"]++, _0x39d454("攻击 " + _0x136d12, () => _0x488caf["sendBattle"](_0x136d12)));
        }
        _0x90d588();
      } catch (_0x4c66a3) {
        _0x5213ab("主循环异常", _0x4c66a3), _0x20f792["errorCount"] > _0x54bcd0["maxRetries"] && (_0x20f792["running"] = !0x1, _0x5d06fc(), _0x5a63f5("error", "错误次数过多，已自动暂停"));
      }
    }, _0x54bcd0["tickMs"]),
    _0x59ef66 = setInterval(_0x90d588, 0x3e8);
  window["__LP_SMART__"] = {
    start() {
      _0x20f792["running"] = !0x0, _0x20f792["errorCount"] = 0x0, _0x5a63f5("info", "已启动"), _0x5d06fc(), _0x2044d9("已启动"), _0x5a5acc();
    },
    stop() {
      _0x20f792["running"] = !0x1, _0x5a63f5("info", "已暂停"), _0x5d06fc(), _0x2044d9("已停止"), _0x5a5acc();
    },
    stopTimer() {
      clearInterval(_0x20b877), clearInterval(_0x59ef66), _0x20f792["running"] = !0x1, _0x5d06fc(), _0x5a63f5("info", "定时器已停止"), _0x5a5acc();
    },
    setStrategy: function (_0x41b76b, _0x77d0b6) {
      return !!Object["prototype"]["hasOwnProperty"]["call"](_0x54bcd0["strategy"], _0x41b76b) && (_0x54bcd0["strategy"][_0x41b76b] = _0x77d0b6, _0x5a63f5("info", _0x410a59(_0x41b76b) + " = " + _0x5cbd6a(_0x77d0b6)), _0x5a5acc(), !0x0);
    },
    setConfig: (_0x57508d, _0x2eeeef) => !(!Object["prototype"]["hasOwnProperty"]["call"](_0x54bcd0, _0x57508d) || "strategy" === _0x57508d) && (_0x54bcd0[_0x57508d] = _0x2eeeef, _0x5a63f5("info", "配置 " + _0x410a59(_0x57508d) + " = " + _0x5cbd6a(_0x2eeeef)), _0x5a5acc(), !0x0),
    enterNow() {
      const _0x431fad = _0x4e982b();
      return _0x431fad ? _0x18d9e2(_0x431fad, !0x0) : _0x5a63f5("error", "未找到 LEGION_PAYLOAD 模块");
    },
    deployNow: () => _0x1d6059(_0x4e982b(), !0x0),
    moveToCar() {
      const _0x472a0e = _0x4e982b(),
        _0x27b94a = _0x3ac6d6(_0x472a0e),
        _0x3aff7a = _0x11e5e3(_0x27b94a),
        _0x35ace4 = _0x42010f(_0x27b94a, _0x3aff7a),
        _0x2132c8 = _0x2efa82(_0x35ace4, "carId", "id");
      return _0x472a0e && _0x27b94a && _0x3aff7a && _0x2132c8 ? (_0x20f792["currentCar"] = _0x35ace4, _0x1c95b3(_0x472a0e, _0x35ace4, _0x2132c8)) : _0x5a63f5("error", "没有可用车辆或未进入战场");
    },
    attackNearest() {
      const _0x514f92 = _0x4e982b(),
        _0x121ac6 = _0x3ac6d6(_0x514f92),
        _0x3e2c70 = _0x11e5e3(_0x121ac6),
        _0x51afe5 = _0x2efa82(_0x1d77fa(_0x121ac6, _0x3e2c70, _0x20f792["currentCar"] || _0x42010f(_0x121ac6, _0x3e2c70)), "roleId", "id");
      return _0x514f92?.["sendBattle"] && _0x51afe5 ? (_0x20f792["battleCount"]++, _0x39d454("攻击 " + _0x51afe5, () => _0x514f92["sendBattle"](_0x51afe5))) : _0x5a63f5("error", "no enemy in attack range");
    },
    pickItem() {
      const _0x1becfd = _0x4e982b();
      return _0x1becfd?.["sendPickItem"] ? (_0x20f792["pickCount"]++, _0x39d454("拾取道具", () => _0x1becfd["sendPickItem"]())) : _0x5a63f5("error", "未找到 sendPickItem");
    },
    useCarItem(_0x428c81) {
      const _0x7195dc = _0x4e982b(),
        _0x231ea9 = _0x3ac6d6(_0x7195dc),
        _0x4a8745 = _0x11e5e3(_0x231ea9),
        _0x5ecb7e = _0x428c81 ? _0x49bfd4(_0x231ea9)["find"](_0x50f598 => String(_0x2efa82(_0x50f598, "carId", "id")) === String(_0x428c81)) : _0x20f792["currentCar"] || _0x42010f(_0x231ea9, _0x4a8745),
        _0x581495 = _0x2efa82(_0x5ecb7e, "carId", "id");
      return _0x7195dc?.["sendUse"] && _0x581495 ? (_0x20f792["useItemCount"]++, _0x39d454("使用车辆道具 " + _0x581495, () => _0x7195dc["sendUse"](_0x581495))) : _0x5a63f5("error", "没有可用车辆道具目标");
    },
    diagnose() {
      const _0xa8e0eb = _0x4e982b(),
        _0x3ca277 = _0x589d9c();
      return console["table"](_0x3ca277), console["log"]("[蟠桃园助手] LP module:", _0xa8e0eb), _0x5a63f5("info", "diagnose done: " + (_0x3ca277["status"] || "-")), _0x3ca277;
    },
    getStats: () => ({
      running: _0x20f792["running"],
      battleCount: _0x20f792["battleCount"],
      moveCount: _0x20f792["moveCount"],
      pickCount: _0x20f792["pickCount"],
      useItemCount: _0x20f792["useItemCount"],
      deployCount: _0x20f792["deployCount"],
      deployPending: _0x20f792["deployPending"],
      deployReady: _0x20f792["deployReady"],
      deployBattlefieldId: _0x20f792["deployBattlefieldId"],
      lastSeenBattlefieldId: _0x20f792["lastSeenBattlefieldId"],
      deathCount: _0x20f792["deathCount"],
      wasDead: _0x20f792["wasDead"],
      lastReviveSeconds: _0x20f792["lastReviveSeconds"],
      lastDeathAt: _0x20f792["lastDeathAt"],
      deployAfterRevivePending: _0x20f792["deployAfterRevivePending"],
      lastForcedDeployAt: _0x20f792["lastForcedDeployAt"],
      errorCount: _0x20f792["errorCount"],
      lastError: _0x20f792["lastError"],
      enterRetryCount: _0x20f792["enterRetryCount"],
      enterPending: _0x20f792["enterPending"],
      currentCarId: _0x2efa82(_0x20f792["currentCar"], "carId", "id"),
      strategy: {
        ..._0x54bcd0["strategy"]
      }
    }),
    getDetailedStatus: _0x589d9c,
    getStatus: () => ({
      ..._0x20f792
    }),
    getConfig: () => ({
      ..._0x54bcd0,
      strategy: {
        ..._0x54bcd0["strategy"]
      }
    }),
    resetStats() {
      _0x20f792["battleCount"] = 0x0, _0x20f792["moveCount"] = 0x0, _0x20f792["pickCount"] = 0x0, _0x20f792["useItemCount"] = 0x0, _0x20f792["deathCount"] = 0x0, _0x20f792["wasDead"] = !0x1, _0x20f792["lastReviveSeconds"] = 0x0, _0x20f792["lastDeathAt"] = 0x0, _0x20f792["reviveDeadlineAt"] = 0x0, _0x20f792["reviveReadyAt"] = 0x0, _0x20f792["deployAfterRevivePending"] = !0x1, _0x20f792["lastSeenBattlefieldId"] = "", _0x20f792["lastForcedDeployAt"] = 0x0, _0x20f792["errorCount"] = 0x0, _0x20f792["lastError"] = "", _0x20f792["enterRetryCount"] = 0x0, _0x20f792["enterPending"] = !0x1, _0x5a63f5("info", "stats reset"), _0x5a5acc();
    }
  }, "loading" === document["readyState"] ? document["addEventListener"]("DOMContentLoaded", _0x29bcc3, {
    once: !0x0
  }) : _0x29bcc3(), _0x5a63f5("info", "助手已加载，接口：window.__LP_SMART__"), _0x2044d9("已加载，接口：window.__LP_SMART__"), setTimeout(function () {
    try {
      "1" === localStorage["getItem"](_0x5965af) && window["__LP_SMART__"] && window["__LP_SMART__"]["start"]();
    } catch (_0x162c96) {}
  }, 0x12c);
}();
