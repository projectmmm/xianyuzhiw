// Adapted from the supplied 2.57.2 game enhancement asset.
// Static strings decoded; obfuscator guards removed; frame access stays local.
!function () {
  "use strict";
  const _0x284c7f = "undefined" != typeof unsafeWindow ? unsafeWindow : window;
  console["log"]("[咸鱼之王监控] 脚本开始执行");
  class _0x10793b {
    constructor(_0x5411f5) {
      this["data"] = _0x5411f5, this["position"] = 0x0, this["dataView"] = new DataView(_0x5411f5["buffer"], _0x5411f5["byteOffset"], _0x5411f5["byteLength"]);
    }
    ["validate"](_0xf03b5) {
      return this["position"] + _0xf03b5 <= this["data"]["length"];
    }
    ["readUint8"]() {
      if (!this["validate"](0x1)) throw new Error("read eof");
      return this["data"][this["position"]++];
    }
    ["readInt16"]() {
      if (!this["validate"](0x2)) throw new Error("read eof");
      const _0x33c7d2 = this["data"][this["position"]] | this["data"][this["position"] + 0x1] << 0x8;
      return this["position"] += 0x2, _0x33c7d2 << 0x10 >> 0x10;
    }
    ["readInt32"]() {
      if (!this["validate"](0x4)) throw new Error("read eof");
      const _0x2d4edf = this["data"][this["position"]] | this["data"][this["position"] + 0x1] << 0x8 | this["data"][this["position"] + 0x2] << 0x10 | this["data"][this["position"] + 0x3] << 0x18;
      return this["position"] += 0x4, _0x2d4edf;
    }
    ["readInt64"]() {
      const _0x377292 = this["readInt32"]();
      return (_0x377292 < 0x0 ? _0x377292 + 0x100000000 : _0x377292) + 0x100000000 * this["readInt32"]();
    }
    ["readFloat32"]() {
      if (!this["validate"](0x4)) throw new Error("read eof");
      const _0x2a387b = this["dataView"]["getFloat32"](this["position"], !0x0);
      return this["position"] += 0x4, _0x2a387b;
    }
    ["readFloat64"]() {
      if (!this["validate"](0x8)) throw new Error("read eof");
      const _0x4d9651 = this["dataView"]["getFloat64"](this["position"], !0x0);
      return this["position"] += 0x8, _0x4d9651;
    }
    ["read7BitInt"]() {
      let _0x2e6c9f = 0x0,
        _0xa72da5 = 0x0;
      for (;;) {
        if (_0xa72da5 >= 0x23) throw new Error("Format_Bad7BitInt32");
        const _0xcbaab = this["readUint8"]();
        if (_0x2e6c9f |= (0x7f & _0xcbaab) << _0xa72da5, _0xa72da5 += 0x7, !(0x80 & _0xcbaab)) break;
      }
      return _0x2e6c9f;
    }
    ["readUTF"]() {
      const _0x6d9dd9 = this["read7BitInt"]();
      return this["readUTFBytes"](_0x6d9dd9);
    }
    ["readUTFBytes"](_0x20d009) {
      if (0x0 === _0x20d009) return "";
      if (!this["validate"](_0x20d009)) throw new Error("read eof");
      const _0x6d7c80 = this["data"]["subarray"](this["position"], this["position"] + _0x20d009);
      return this["position"] += _0x20d009, new TextDecoder()["decode"](_0x6d7c80);
    }
    ["readBytes"](_0x1de1dc) {
      if (!this["validate"](_0x1de1dc)) throw new Error("read eof");
      const _0x2b5a3e = this["data"]["slice"](this["position"], this["position"] + _0x1de1dc);
      return this["position"] += _0x1de1dc, _0x2b5a3e;
    }
  }
  class _0x36a7ab {
    constructor() {
      this["data"] = new Uint8Array(0x80000), this["position"] = 0x0, this["dataView"] = new DataView(this["data"]["buffer"]);
    }
    ["ensureBuffer"](_0x55eeb7) {
      if (this["position"] + _0x55eeb7 > this["data"]["length"]) {
        let _0x2825db = Math["floor"](1.2 * this["data"]["length"]);
        _0x2825db < this["position"] + _0x55eeb7 && (_0x2825db = this["position"] + _0x55eeb7);
        const _0x4e1935 = new Uint8Array(_0x2825db);
        _0x4e1935["set"](this["data"]), this["data"] = _0x4e1935, this["dataView"] = new DataView(this["data"]["buffer"]);
      }
    }
    ["writeUint8"](_0xa194f8) {
      this["ensureBuffer"](0x1), this["data"][this["position"]] = 0xff & _0xa194f8, this["position"]++;
    }
    ["writeInt16"](_0x38ba3e) {
      this["ensureBuffer"](0x2), this["data"][this["position"]] = 0xff & _0x38ba3e, this["data"][this["position"] + 0x1] = _0x38ba3e >> 0x8 & 0xff, this["position"] += 0x2;
    }
    ["writeInt32"](_0x29d01e) {
      this["ensureBuffer"](0x4), this["data"][this["position"]] = 0xff & _0x29d01e, this["data"][this["position"] + 0x1] = _0x29d01e >> 0x8 & 0xff, this["data"][this["position"] + 0x2] = _0x29d01e >> 0x10 & 0xff, this["data"][this["position"] + 0x3] = _0x29d01e >> 0x18 & 0xff, this["position"] += 0x4;
    }
    ["writeInt64"](_0x5a7dbe) {
      this["writeInt32"](0x0 | _0x5a7dbe), _0x5a7dbe < 0x0 ? this["writeInt32"](~Math["floor"](_0x5a7dbe / 0x100000000)) : this["writeInt32"](Math["floor"](_0x5a7dbe / 0x100000000));
    }
    ["writeFloat32"](_0x13c3b2) {
      this["ensureBuffer"](0x4), this["dataView"]["setFloat32"](this["position"], _0x13c3b2, !0x0), this["position"] += 0x4;
    }
    ["writeFloat64"](_0x44df34) {
      this["ensureBuffer"](0x8), this["dataView"]["setFloat64"](this["position"], _0x44df34, !0x0), this["position"] += 0x8;
    }
    ["write7BitInt"](_0x28d858) {
      for (this["ensureBuffer"](0x5); _0x28d858 >= 0x80;) this["data"][this["position"]] = 0xff & _0x28d858 | 0x80, this["position"]++, _0x28d858 >>>= 0x7;
      this["data"][this["position"]] = 0xff & _0x28d858, this["position"]++;
    }
    ["writeUTF"](_0x571c2a) {
      if (!_0x571c2a || 0x0 === _0x571c2a["length"]) return void this["write7BitInt"](0x0);
      const _0x3e3834 = new TextEncoder()["encode"](_0x571c2a);
      this["write7BitInt"](_0x3e3834["length"]), this["ensureBuffer"](_0x3e3834["length"]), this["data"]["set"](_0x3e3834, this["position"]), this["position"] += _0x3e3834["length"];
    }
    ["writeBytes"](_0x225bd3, _0x14ddc1 = 0x0, _0x2bbf3f) {
      _0x14ddc1 < 0x0 && (_0x14ddc1 = 0x0), void 0x0 === _0x2bbf3f && (_0x2bbf3f = _0x225bd3["length"] - _0x14ddc1), _0x2bbf3f <= 0x0 || _0x14ddc1 >= _0x225bd3["length"] || (_0x14ddc1 + _0x2bbf3f > _0x225bd3["length"] && (_0x2bbf3f = _0x225bd3["length"] - _0x14ddc1), this["ensureBuffer"](_0x2bbf3f), this["data"]["set"](_0x225bd3["subarray"](_0x14ddc1, _0x14ddc1 + _0x2bbf3f), this["position"]), this["position"] += _0x2bbf3f);
    }
    ["getBytes"](_0x3512d6 = !0x0) {
      return _0x3512d6 ? this["data"]["slice"](0x0, this["position"]) : this["data"]["subarray"](0x0, this["position"]);
    }
  }
  class _0x5a32ea {
    constructor() {
      this["reader"] = null, this["strArr"] = [];
    }
    ["decode"](_0x2f1c35) {
      return this["reader"] = new _0x10793b(_0x2f1c35), this["strArr"] = [], this["_decode"]();
    }
    ["_decode"]() {
      switch (this["reader"]["readUint8"]()) {
        case 0x0:
        default:
          return null;
        case 0x1:
          return this["reader"]["readInt32"]();
        case 0x2:
          return this["reader"]["readInt64"]();
        case 0x3:
          return this["reader"]["readFloat32"]();
        case 0x4:
          return this["reader"]["readFloat64"]();
        case 0x5:
          {
            const _0x2f1853 = this["reader"]["readUTF"]();
            return this["strArr"]["push"](_0x2f1853), _0x2f1853;
          }
        case 0x6:
          return 0x1 === this["reader"]["readUint8"]();
        case 0x7:
          {
            const _0x3638cf = this["reader"]["read7BitInt"]();
            return this["reader"]["readBytes"](_0x3638cf);
          }
        case 0x8:
          {
            const _0x500890 = this["reader"]["read7BitInt"](),
              _0x241fc6 = {};
            for (let _0x1eef07 = 0x0; _0x1eef07 < _0x500890; _0x1eef07++) {
              let _0x4efafb = this["_decode"]();
              const _0x1411a0 = this["_decode"]();
              "string" != typeof _0x4efafb && (_0x4efafb = String(_0x4efafb)), _0x241fc6[_0x4efafb] = _0x1411a0;
            }
            return _0x241fc6;
          }
        case 0x9:
          {
            const _0x5e7568 = this["reader"]["read7BitInt"](),
              _0x1f31e8 = new Array(_0x5e7568);
            for (let _0x30b6ee = 0x0; _0x30b6ee < _0x5e7568; _0x30b6ee++) _0x1f31e8[_0x30b6ee] = this["_decode"]();
            return _0x1f31e8;
          }
        case 0xa:
          {
            const _0xeeb1f3 = this["reader"]["readInt64"]();
            return new Date(_0xeeb1f3);
          }
        case 0x63:
          {
            const _0x5170e7 = this["reader"]["read7BitInt"]();
            return _0x5170e7 < 0x0 || _0x5170e7 >= this["strArr"]["length"] ? "" : this["strArr"][_0x5170e7];
          }
      }
    }
  }
  class _0x327eea {
    constructor() {
      this["writer"] = null, this["strMap"] = new Map();
    }
    ["encode"](_0x36b15a) {
      return this["writer"] = new _0x36a7ab(), this["strMap"] = new Map(), this["_encode"](_0x36b15a), this["writer"]["getBytes"]();
    }
    ["_encode"](_0x3fd767) {
      if (null != _0x3fd767) {
        if ("boolean" == typeof _0x3fd767) return this["writer"]["writeUint8"](0x6), void this["writer"]["writeUint8"](_0x3fd767 ? 0x1 : 0x0);
        if ("number" != typeof _0x3fd767) {
          if ("string" != typeof _0x3fd767) {
            if (_0x3fd767 instanceof Date) return this["writer"]["writeUint8"](0xa), void this["writer"]["writeInt64"](_0x3fd767["getTime"]());
            if (_0x3fd767 instanceof Uint8Array) return this["writer"]["writeUint8"](0x7), this["writer"]["write7BitInt"](_0x3fd767["length"]), void this["writer"]["writeBytes"](_0x3fd767);
            if (Array["isArray"](_0x3fd767)) {
              this["writer"]["writeUint8"](0x9), this["writer"]["write7BitInt"](_0x3fd767["length"]);
              for (let _0x581fab = 0x0; _0x581fab < _0x3fd767["length"]; _0x581fab++) this["_encode"](_0x3fd767[_0x581fab]);
            } else {
              if ("object" == typeof _0x3fd767) {
                const _0x2e308b = Object["keys"](_0x3fd767);
                this["writer"]["writeUint8"](0x8), this["writer"]["write7BitInt"](_0x2e308b["length"]);
                for (const _0x4573e2 of _0x2e308b) this["_encode"](_0x4573e2), this["_encode"](_0x3fd767[_0x4573e2]);
                return;
              }
              this["writer"]["writeUint8"](0x0);
            }
          } else this["strMap"]["has"](_0x3fd767) ? (this["writer"]["writeUint8"](0x63), this["writer"]["write7BitInt"](this["strMap"]["get"](_0x3fd767))) : (this["writer"]["writeUint8"](0x5), this["writer"]["writeUTF"](_0x3fd767), this["strMap"]["set"](_0x3fd767, this["strMap"]["size"]));
        } else Number["isInteger"](_0x3fd767) && _0x3fd767 >= -0x80000000 && _0x3fd767 <= 0x7fffffff ? (this["writer"]["writeUint8"](0x1), this["writer"]["writeInt32"](_0x3fd767)) : (this["writer"]["writeUint8"](0x4), this["writer"]["writeFloat64"](_0x3fd767));
      } else this["writer"]["writeUint8"](0x0);
    }
  }
  const _0xe0d465 = {
      detectType: _0x4f719b => !_0x4f719b || _0x4f719b["length"] < 0x2 ? "NONE" : 0x70 === _0x4f719b[0x0] && 0x78 === _0x4f719b[0x1] ? "X" : 0x70 === _0x4f719b[0x0] && 0x6c === _0x4f719b[0x1] ? "LX" : "NONE",
      _extractKey: _0x49b2f5 => (_0x49b2f5[0x2] >> 0x6 & 0x1) << 0x7 | (_0x49b2f5[0x2] >> 0x4 & 0x1) << 0x6 | (_0x49b2f5[0x2] >> 0x2 & 0x1) << 0x5 | (0x1 & _0x49b2f5[0x2]) << 0x4 | (_0x49b2f5[0x3] >> 0x6 & 0x1) << 0x3 | (_0x49b2f5[0x3] >> 0x4 & 0x1) << 0x2 | (_0x49b2f5[0x3] >> 0x2 & 0x1) << 0x1 | 0x1 & _0x49b2f5[0x3],
      decryptX(_0x436034) {
        if (!_0x436034 || _0x436034["length"] < 0x4) return _0x436034 ? new Uint8Array(_0x436034) : new Uint8Array(0x0);
        const _0x33c52e = new Uint8Array(_0x436034),
          _0x322e16 = this["_extractKey"](_0x33c52e);
        for (let _0xee25c3 = _0x33c52e["length"] - 0x1; _0xee25c3 >= 0x4; _0xee25c3--) _0x33c52e[_0xee25c3] ^= _0x322e16;
        return _0x33c52e["slice"](0x4);
      },
      encryptX(_0xcd743b) {
        const _0x19b065 = Math["floor"](0xffffffff * Math["random"]()),
          _0x1f2801 = new Uint8Array(_0xcd743b["length"] + 0x4);
        _0x1f2801[0x0] = 0xff & _0x19b065, _0x1f2801[0x1] = _0x19b065 >> 0x8 & 0xff, _0x1f2801[0x2] = _0x19b065 >> 0x10 & 0xff, _0x1f2801[0x3] = _0x19b065 >> 0x18 & 0xff, _0x1f2801["set"](_0xcd743b, 0x4);
        const _0x3acf9f = 0x2 + Math["floor"](0xf8 * Math["random"]());
        for (let _0x3e5795 = _0x1f2801["length"] - 0x1; _0x3e5795 >= 0x0; _0x3e5795--) _0x1f2801[_0x3e5795] ^= _0x3acf9f;
        return _0x1f2801[0x0] = 0x70, _0x1f2801[0x1] = 0x78, _0x1f2801[0x2] = 0xaa & _0x1f2801[0x2] | (_0x3acf9f >> 0x7 & 0x1) << 0x6 | (_0x3acf9f >> 0x6 & 0x1) << 0x4 | (_0x3acf9f >> 0x5 & 0x1) << 0x2 | _0x3acf9f >> 0x4 & 0x1, _0x1f2801[0x3] = 0xaa & _0x1f2801[0x3] | (_0x3acf9f >> 0x3 & 0x1) << 0x6 | (_0x3acf9f >> 0x2 & 0x1) << 0x4 | (_0x3acf9f >> 0x1 & 0x1) << 0x2 | 0x1 & _0x3acf9f, _0x1f2801;
      },
      decryptLX(_0x2cb77a) {
        if (!_0x2cb77a || _0x2cb77a["length"] < 0x4) return _0x2cb77a ? new Uint8Array(_0x2cb77a) : new Uint8Array(0x0);
        const _0x542ce8 = new Uint8Array(_0x2cb77a),
          _0x342f1d = this["_extractKey"](_0x542ce8),
          _0x470ac9 = Math["min"](_0x542ce8["length"], 0x64);
        for (let _0x5ec04c = 0x2; _0x5ec04c < _0x470ac9; _0x5ec04c++) _0x542ce8[_0x5ec04c] ^= _0x342f1d;
        return _0x542ce8[0x0] = 0x4, _0x542ce8[0x1] = 0x22, _0x542ce8[0x2] = 0x4d, _0x542ce8[0x3] = 0x18, "undefined" != typeof lz4 && lz4["decompress"] ? lz4["decompress"](_0x542ce8) : (console["warn"]("[Crypto] lz4 库不可用，无法解压 LX 数据"), _0x542ce8);
      },
      decrypt(_0x4a0b60) {
        try {
          switch (this["detectType"](_0x4a0b60)) {
            case "X":
              return this["decryptX"](_0x4a0b60);
            case "LX":
              return this["decryptLX"](_0x4a0b60);
            case "NONE":
              return _0x4a0b60 ? new Uint8Array(_0x4a0b60) : null;
            default:
              return null;
          }
        } catch (_0x28afeb) {
          return console["error"]("[Crypto] 解密失败:", _0x28afeb), null;
        }
      }
    },
    _0xd0d183 = {
      _seqTimestamps: new Map(),
      parse(_0x2bd591, _0xaa97ba) {
        try {
          const _0x2993d0 = Date["now"](),
            _0x31b79e = _0x2bd591 ? _0x2bd591["byteLength"] : 0x0,
            _0x2da2ba = _0xe0d465["decrypt"](_0x2bd591);
          if (!_0x2da2ba) return null;
          const _0x22e8ed = new _0x5a32ea()["decode"](_0x2da2ba);
          if (!_0x22e8ed || "object" != typeof _0x22e8ed) return null;
          const _0x5341f5 = _0x22e8ed["cmd"] || "",
            _0x9f7027 = _0x22e8ed["seq"] || 0x0,
            _0x15822a = _0x22e8ed["ack"] || 0x0,
            _0x408a00 = _0x22e8ed["time"] || 0x0;
          let _0x2b3cc1 = _0x22e8ed["body"];
          if (_0x2b3cc1 instanceof Uint8Array) try {
            _0x2b3cc1 = new _0x5a32ea()["decode"](_0x2b3cc1);
          } catch (_0x3f1173) {
            console["warn"]("[MessageParser] body 二次 BON 解码失败:", _0x3f1173);
          }
          let _0x23a05f = 0x0;
          if ("send" === _0xaa97ba && _0x9f7027 > 0x0) this["_seqTimestamps"]["set"](_0x9f7027, _0x2993d0);else {
            if ("receive" === _0xaa97ba && _0x15822a > 0x0) {
              const _0x412957 = this["_seqTimestamps"]["get"](_0x15822a);
              void 0x0 !== _0x412957 && (_0x23a05f = _0x2993d0 - _0x412957, this["_seqTimestamps"]["delete"](_0x15822a));
            }
          }
          return {
            direction: _0xaa97ba,
            cmd: _0x5341f5,
            seq: _0x9f7027,
            ack: _0x15822a,
            time: _0x408a00,
            body: _0x2b3cc1,
            rawSize: _0x31b79e,
            timestamp: _0x2993d0,
            duration: _0x23a05f
          };
        } catch (_0x28e102) {
          return console["error"]("[MessageParser] 解析失败:", _0x28e102), null;
        }
      }
    },
    _0x4cbbe4 = {
      _cmdStats: {},
      _unrecognized: {},
      _pendingRequests: {},
      _pairHistory: [],
      _maxPairHistory: 0x64,
      _bodySnapshots: {},
      _fingerprints: [{
        fields: ["heroId", "star", "lv"],
        hint: "英雄详情/升级"
      }, {
        fields: ["heroId", "exp"],
        hint: "英雄经验变化"
      }, {
        fields: ["heroList", "formation"],
        hint: "阵容配置"
      }, {
        fields: ["equipId", "heroId"],
        hint: "装备穿戴/卸下"
      }, {
        fields: ["stageId", "star", "reward"],
        hint: "关卡结算"
      }, {
        fields: ["stageId", "damage", "hp"],
        hint: "战斗结果"
      }, {
        fields: ["gold", "diamond"],
        hint: "货币变化"
      }, {
        fields: ["items", "reward"],
        hint: "奖励领取"
      }, {
        fields: ["mailId", "title", "content"],
        hint: "邮件详情"
      }, {
        fields: ["mailId", "reward"],
        hint: "邮件领取附件"
      }, {
        fields: ["guildId", "members"],
        hint: "公会成员信息"
      }, {
        fields: ["rank", "score", "power"],
        hint: "排行榜数据"
      }, {
        fields: ["skinId", "heroId"],
        hint: "皮肤装配"
      }, {
        fields: ["shopId", "price", "itemId"],
        hint: "商店购买"
      }, {
        fields: ["energy", "stamina"],
        hint: "体力/耐力状态"
      }, {
        fields: ["chatMsg", "channel", "sender"],
        hint: "聊天消息"
      }, {
        fields: ["token", "expire"],
        hint: "令牌/会话信息"
      }, {
        fields: ["config", "version"],
        hint: "配置同步"
      }, {
        fields: ["error", "code", "msg"],
        hint: "错误响应"
      }, {
        fields: ["progress", "total", "current"],
        hint: "进度信息"
      }],
      _modules: {
        mail: "\u90ae\u4ef6",
        friend: "\u597d\u53cb",
        club: "\u516c\u4f1a",
        arena: "竞技场",
        discount: "折扣/活动",
        role: "\u89d2\u8272",
        item: "\u7269\u54c1",
        shop: "\u5546\u5e97",
        task: "\u4efb\u52a1",
        chat: "\u804a\u5929",
        battle: "\u6218\u6597",
        hero: "\u82f1\u96c4",
        equip: "\u88c5\u5907",
        skill: "\u6280\u80fd",
        sign: "\u7b7e\u5230",
        rank: "\u6392\u884c",
        guild: "\u516c\u4f1a",
        pay: "\u652f\u4ed8",
        vip: "VIP",
        activity: "\u6d3b\u52a8",
        system: "\u7cfb\u7edf",
        login: "\u767b\u5f55",
        user: "\u7528\u6237",
        player: "\u73a9\u5bb6",
        bag: "\u80cc\u5305",
        market: "\u5e02\u573a",
        auction: "\u62cd\u5356",
        trade: "\u4ea4\u6613",
        dungeon: "\u526f\u672c",
        boss: "Boss",
        pet: "\u5ba0\u7269",
        mount: "\u5750\u9a91",
        title: "\u79f0\u53f7",
        achieve: "\u6210\u5c31",
        welfare: "\u798f\u5229",
        redpacket: "\u7ea2\u5305",
        racing: "\u7ade\u901f",
        nightmare: "\u5669\u68a6",
        salt: "\u76d0",
        push: "\u63a8\u9001",
        config: "\u914d\u7f6e",
        notice: "\u516c\u544a",
        announce: "\u516c\u544a",
        reward: "\u5956\u52b1",
        daily: "\u6bcf\u65e5",
        weekly: "\u6bcf\u5468",
        monthly: "\u6708\u5ea6",
        season: "\u8d5b\u5b63",
        fish: "\u54b8\u9c7c",
        card: "\u5361\u724c",
        gacha: "\u62bd\u5361",
        draw: "\u62bd\u5956",
        expedition: "\u8fdc\u5f81",
        tower: "\u722c\u5854",
        mine: "\u77ff\u573a",
        farm: "\u519c\u573a",
        blackmarket: "\u9ed1\u5e02",
        exchange: "\u5151\u6362",
        compose: "\u5408\u6210",
        offline: "\u79bb\u7ebf",
        online: "\u5728\u7ebf",
        sync: "\u540c\u6b65",
        heartbeat: "\u5fc3\u8df3",
        legacy: "传奇/挂机",
        hero: "\u54b8\u5c06",
        general: "\u54b8\u5c06",
        xianjiang: "\u54b8\u5c06",
        zhugong: "\u4e3b\u516c",
        yuling: "\u9c7c\u7075",
        toy: "\u73a9\u5177",
        prop: "\u9053\u5177",
        nightmare: "梦魇水晶",
        atlas: "\u56fe\u9274",
        collection: "图鉴积分",
        tower: "咸将塔",
        dream: "咸王梦境",
        lamp: "灯神挑战",
        genie: "灯神挑战",
        godarena: "咸神竞技场",
        dailytest: "每日咸王考验",
        exam: "咸王考验",
        club: "俱乐部",
        recruit: "\u62db\u52df",
        chest: "\u5b9d\u7bb1",
        box: "\u5b9d\u7bb1",
        blackmarket: "\u9ed1\u5e02",
        saltjar: "\u76d0\u7f50",
        saltpot: "\u76d0\u7f50",
        master: "\u54b8\u4e3b",
        pvp: "对战房间",
        room: "对战房间",
        cardgame: "咸鱼卡牌",
        tentrial: "十殿试炼",
        tianguan: "天官赐福",
        godring: "咸神擂台",
        rush: "咸鱼大冲关",
        weeklyrecruit: "招募达标",
        weeklychest: "宝箱达标",
        weeklymarket: "江湖黑市",
        godfight: "咸神争霸",
        monthcatch: "捕获达标",
        monthshell: "灵贝达标",
        saltwar: "\u76d0\u6218",
        saltfield: "\u76d0\u573a",
        saltmine: "\u76d0\u77ff",
        saltbattle: "盐场争霸",
        saltancestor: "\u76d0\u7956",
        pushmap: "\u63a8\u56fe",
        stage: "\u5173\u5361",
        chapter: "\u7ae0\u8282",
        monthlyactivity: "月度活动",
        dailytask: "每日任务",
        offlinetask: "离线任务",
        scriptdecrypt: "脚本解密",
        hotupdate: "热更新",
        secondarypassword: "二级密码",
        adminproxy: "管理代理",
        userproxy: "用户代理",
        xyzwweb: "咸鱼Web",
        feedback: "\u53cd\u9988",
        settings: "\u8bbe\u7f6e",
        account: "\u8d26\u53f7",
        business: "\u5546\u4e1a",
        utils: "\u5de5\u5177",
        skin: "\u76ae\u80a4",
        avatar: "\u5934\u50cf",
        treasure: "\u5b9d\u85cf",
        world: "\u4e16\u754c",
        map: "\u5730\u56fe",
        forge: "锻造/淬炼",
        quench: "\u6dec\u70bc",
        temper: "\u6dec\u70bc",
        fishing: "\u9493\u9c7c",
        fish: "\u54b8\u9c7c",
        goldfish: "\u91d1\u9c7c",
        speed: "\u901f\u5ea6",
        formation: "\u9635\u5bb9",
        lineup: "\u7ad9\u4f4d",
        alliance: "\u8054\u76df",
        territory: "\u9886\u5730",
        cross: "\u8de8\u670d",
        server: "服务器",
        checkin: "\u7b7e\u5230",
        lottery: "\u62bd\u5956",
        wheel: "\u8f6c\u76d8",
        recharge: "\u5145\u503c",
        order: "\u8ba2\u5355",
        gift: "\u793c\u5305",
        event: "\u6d3b\u52a8",
        festival: "\u8282\u65e5",
        limit: "\u9650\u65f6",
        pass: "通行证",
        privilege: "\u7279\u6743",
        subscription: "\u8ba2\u9605",
        answer: "\u7b54\u9898",
        quiz: "\u7b54\u9898",
        question: "\u7b54\u9898",
        shell: "\u7075\u8d1d",
        pearl: "\u7075\u73e0",
        bead: "\u73e0\u5b50",
        star: "\u661f\u7ea7",
        fragment: "\u788e\u7247",
        shard: "\u788e\u7247",
        hangup: "\u6302\u673a",
        idle: "\u6302\u673a",
        afk: "\u6302\u673a",
        backhill: "\u540e\u5c71",
        forbidden: "\u7981\u5730",
        moonpalace: "广寒宫",
        secret: "\u79d8\u5883"
      },
      _actions: {
        get: "\u83b7\u53d6",
        set: "\u8bbe\u7f6e",
        list: "\u5217\u8868",
        info: "\u4fe1\u606f",
        update: "\u66f4\u65b0",
        delete: "\u5220\u9664",
        add: "\u6dfb\u52a0",
        remove: "\u79fb\u9664",
        buy: "\u8d2d\u4e70",
        sell: "\u51fa\u552e",
        use: "\u4f7f\u7528",
        open: "\u6253\u5f00",
        close: "\u5173\u95ed",
        start: "\u5f00\u59cb",
        end: "\u7ed3\u675f",
        finish: "\u5b8c\u6210",
        apply: "\u7533\u8bf7",
        accept: "\u63a5\u53d7",
        reject: "\u62d2\u7edd",
        cancel: "\u53d6\u6d88",
        send: "\u53d1\u9001",
        receive: "\u63a5\u6536",
        read: "\u5df2\u8bfb",
        claim: "\u9886\u53d6",
        enter: "\u8fdb\u5165",
        leave: "\u79bb\u5f00",
        join: "\u52a0\u5165",
        quit: "\u9000\u51fa",
        upgrade: "\u5347\u7ea7",
        levelup: "\u5347\u7ea7",
        unlock: "\u89e3\u9501",
        refresh: "\u5237\u65b0",
        reset: "\u91cd\u7f6e",
        query: "\u67e5\u8be2",
        search: "\u641c\u7d22",
        notify: "\u901a\u77e5",
        push: "\u63a8\u9001",
        new: "\u65b0\u5efa",
        create: "\u521b\u5efa",
        challenge: "\u6311\u6218",
        fight: "\u6218\u6597",
        attack: "\u653b\u51fb",
        sweep: "\u626b\u8361",
        skip: "\u8df3\u8fc7",
        auto: "\u81ea\u52a8",
        hangup: "挂机收益",
        hang: "\u6302\u673a",
        idle: "\u6302\u673a",
        check: "\u68c0\u67e5",
        init: "初始化",
        load: "\u52a0\u8f7d",
        save: "\u4fdd\u5b58",
        login: "\u767b\u5f55",
        logout: "\u767b\u51fa",
        register: "\u6ce8\u518c",
        invite: "\u9080\u8bf7",
        kick: "\u8e22\u51fa",
        dismiss: "\u89e3\u6563",
        donate: "\u6350\u732e",
        contribute: "\u8d21\u732e",
        worship: "\u819c\u62dc",
        explore: "\u63a2\u7d22",
        adventure: "\u5192\u9669",
        patrol: "\u5de1\u903b",
        collect: "\u6536\u96c6",
        gather: "\u91c7\u96c6",
        harvest: "\u6536\u83b7",
        summon: "\u53ec\u5524",
        recruit: "\u62db\u52df",
        dismiss: "\u9063\u6563",
        enhance: "\u5f3a\u5316",
        evolve: "\u8fdb\u5316",
        awaken: "\u89c9\u9192",
        decompose: "\u5206\u89e3",
        recycle: "\u56de\u6536",
        dismantle: "\u62c6\u89e3",
        equip: "\u7a7f\u6234",
        unequip: "\u5378\u4e0b",
        wear: "\u7a7f\u6234",
        forge: "\u953b\u9020",
        craft: "\u5236\u4f5c",
        make: "\u5236\u4f5c",
        enchant: "\u9644\u9b54",
        refine: "\u7cbe\u70bc",
        polish: "\u6253\u78e8",
        batch: "\u6279\u91cf",
        all: "\u5168\u90e8",
        one: "\u5355\u6b21",
        share: "\u5206\u4eab",
        like: "\u70b9\u8d5e",
        follow: "\u5173\u6ce8",
        bind: "\u7ed1\u5b9a",
        unbind: "\u89e3\u7ed1",
        verify: "\u9a8c\u8bc1",
        redeem: "\u5151\u6362",
        activate: "\u6fc0\u6d3b",
        deactivate: "\u505c\u7528",
        pick: "\u9009\u62e9",
        choose: "\u9009\u62e9",
        select: "\u9009\u62e9",
        confirm: "\u786e\u8ba4",
        submit: "\u63d0\u4ea4",
        complete: "\u5b8c\u6210",
        reward: "\u5956\u52b1",
        bonus: "\u5956\u91d1",
        prize: "\u5956\u54c1",
        rank: "\u6392\u540d",
        score: "\u79ef\u5206",
        settle: "\u7ed3\u7b97",
        match: "\u5339\u914d",
        ready: "\u51c6\u5907",
        begin: "\u5f00\u59cb",
        move: "\u79fb\u52a8",
        pass: "\u901a\u8fc7",
        clear: "\u901a\u5173",
        revive: "\u590d\u6d3b",
        heal: "\u6cbb\u7597",
        buff: "\u589e\u76ca",
        chat: "\u804a\u5929",
        msg: "\u6d88\u606f",
        message: "\u6d88\u606f",
        pay: "\u652f\u4ed8",
        purchase: "\u8d2d\u4e70",
        consume: "\u6d88\u8017",
        change: "\u66f4\u6362",
        switch: "\u5207\u6362",
        toggle: "\u5207\u6362",
        rename: "\u6539\u540d",
        modify: "\u4fee\u6539",
        edit: "\u7f16\u8f91"
      },
      _fieldHints: {
        roleId: "角色ID",
        roleName: "角色名",
        level: "\u7b49\u7ea7",
        exp: "\u7ecf\u9a8c",
        gold: "\u91d1\u5e01",
        diamond: "\u94bb\u77f3",
        coin: "\u8d27\u5e01",
        list: "列表数据",
        count: "\u6570\u91cf",
        total: "\u603b\u6570",
        mailId: "邮件ID",
        title: "\u6807\u9898",
        content: "\u5185\u5bb9",
        reward: "\u5956\u52b1",
        items: "物品列表",
        itemId: "物品ID",
        price: "\u4ef7\u683c",
        cost: "\u6d88\u8017",
        num: "\u6570\u91cf",
        hp: "生命值",
        atk: "攻击力",
        def: "防御力",
        score: "\u5206\u6570",
        rank: "\u6392\u540d",
        power: "\u6218\u529b",
        time: "\u65f6\u95f4",
        expire: "过期时间",
        cd: "冷却时间",
        status: "\u72b6\u6001",
        state: "\u72b6\u6001",
        type: "\u7c7b\u578b",
        name: "\u540d\u79f0",
        desc: "\u63cf\u8ff0",
        icon: "\u56fe\u6807",
        role: "角色数据",
        quantity: "\u6570\u91cf",
        quality: "\u54c1\u8d28",
        star: "\u661f\u7ea7",
        stars: "\u661f\u7ea7",
        lv: "\u7b49\u7ea7",
        id: "ID",
        heroId: "英雄ID",
        heroList: "英雄列表",
        heroes: "英雄列表",
        equipId: "装备ID",
        equipList: "装备列表",
        skillId: "技能ID",
        skillList: "技能列表",
        stageId: "关卡ID",
        chapterId: "章节ID",
        mapId: "地图ID",
        damage: "\u4f24\u5bb3",
        heal: "治疗量",
        shield: "\u62a4\u76fe",
        win: "\u80dc\u5229",
        lose: "\u5931\u8d25",
        draw: "\u5e73\u5c40",
        result: "\u7ed3\u679c",
        energy: "\u4f53\u529b",
        stamina: "\u8010\u529b",
        ap: "行动力",
        token: "\u4ee4\u724c",
        ticket: "\u95e8\u7968",
        key: "\u94a5\u5319",
        skinId: "皮肤ID",
        avatarId: "头像ID",
        frameId: "边框ID",
        guildId: "公会ID",
        clubId: "俱乐部ID",
        teamId: "队伍ID",
        chatMsg: "聊天消息",
        channel: "\u9891\u9053",
        sender: "发送者",
        config: "配置数据",
        version: "\u7248\u672c",
        timestamp: "时间戳",
        error: "\u9519\u8bef",
        code: "状态码",
        msg: "\u6d88\u606f",
        data: "\u6570\u636e",
        info: "\u4fe1\u606f",
        detail: "\u8be6\u60c5",
        progress: "\u8fdb\u5ea6",
        percent: "百分比",
        ratio: "\u6bd4\u7387",
        max: "最大值",
        min: "最小值",
        cur: "当前值",
        current: "当前值",
        buff: "增益效果",
        debuff: "减益效果",
        effect: "\u6548\u679c",
        duration: "持续时间",
        cooldown: "冷却时间",
        interval: "\u95f4\u9694",
        target: "\u76ee\u6807",
        source: "\u6765\u6e90",
        from: "\u6765\u81ea",
        to: "\u53d1\u5f80"
      },
      analyze(_0x451793, _0x1cfc05, _0x37f073, _0x3cd735, _0x130b5e) {
        const _0x2e758c = [];
        _0x3cd735 && _0x2e758c["push"](_0x3cd735), _0x130b5e && _0x130b5e !== _0x3cd735 && _0x2e758c["push"](_0x130b5e);
        const _0xdd9f1a = this["_inferFromCmd"](_0x451793, _0x37f073);
        _0xdd9f1a && _0x2e758c["push"](_0xdd9f1a);
        const _0x33669c = this["_matchFingerprint"](_0x1cfc05);
        _0x33669c && _0x2e758c["push"]("匹配: " + _0x33669c);
        const _0x5a01da = this["_inferFromBody"](_0x1cfc05);
        return _0x5a01da && _0x2e758c["push"](_0x5a01da), _0x2e758c["join"]("\x0a") || "暂无分析";
      },
      _inferFromCmd(_0x278822, _0x43797b) {
        if (!_0x278822) return "";
        const _0x428f1d = /resp$/i["test"](_0x278822) || /response$/i["test"](_0x278822),
          _0x3a8c8a = /req$/i["test"](_0x278822) || /request$/i["test"](_0x278822),
          _0x42e161 = /notify$/i["test"](_0x278822) || /push$/i["test"](_0x278822),
          _0x4b256a = _0x428f1d ? "\u54cd\u5e94" : _0x3a8c8a ? "\u8bf7\u6c42" : _0x42e161 ? "\u63a8\u9001" : "send" === _0x43797b ? "\u8bf7\u6c42" : "\u54cd\u5e94",
          _0x4b27a6 = _0x278822["replace"](/(Resp|Response|Req|Request|Notify)$/i, "")["split"]("_")["filter"](Boolean);
        let _0x2f8330 = "",
          _0x2a057f = "";
        if (_0x4b27a6["length"] >= 0x2) {
          const _0x265d5e = _0x4b27a6[0x0]["toLowerCase"]();
          _0x2f8330 = this["_modules"][_0x265d5e] || _0x4b27a6[0x0];
          const _0x37d143 = _0x4b27a6["slice"](0x1)["join"]("");
          _0x2a057f = this["_matchAction"](_0x37d143);
        } else {
          if (0x1 === _0x4b27a6["length"]) {
            const _0x53e353 = _0x4b27a6[0x0]["replace"](/([a-z])([A-Z])/g, "$1_$2")["split"]("_");
            if (_0x53e353["length"] >= 0x2) {
              const _0x1d4dac = _0x53e353[0x0]["toLowerCase"]();
              _0x2f8330 = this["_modules"][_0x1d4dac] || _0x53e353[0x0], _0x2a057f = this["_matchAction"](_0x53e353["slice"](0x1)["join"](""));
            } else _0x2f8330 = _0x4b27a6[0x0];
          }
        }
        return _0x2f8330 ? _0x2f8330 + (_0x2a057f ? " - " + _0x2a057f : "") + "\uff08" + _0x4b256a + "\uff09" : _0x4b256a;
      },
      _matchAction(_0x27dcd7) {
        if (!_0x27dcd7) return "";
        const _0x472d99 = _0x27dcd7["toLowerCase"]();
        if (this["_actions"][_0x472d99]) return this["_actions"][_0x472d99];
        const _0xb03a22 = _0x27dcd7["replace"](/([a-z])([A-Z])/g, "$1_$2")["split"]("_")["filter"](Boolean);
        if (_0xb03a22["length"] >= 0x2) {
          const _0x3570d4 = [];
          let _0x196300 = 0x0;
          for (; _0x196300 < _0xb03a22["length"];) {
            let _0x40a002 = !0x1;
            if (_0x196300 + 0x1 < _0xb03a22["length"]) {
              const _0xe1b1b2 = (_0xb03a22[_0x196300] + _0xb03a22[_0x196300 + 0x1])["toLowerCase"]();
              this["_actions"][_0xe1b1b2] && (_0x3570d4["push"](this["_actions"][_0xe1b1b2]), _0x196300 += 0x2, _0x40a002 = !0x0);
            }
            if (!_0x40a002) {
              const _0x1010fd = _0xb03a22[_0x196300]["toLowerCase"]();
              _0x3570d4["push"](this["_actions"][_0x1010fd] || _0xb03a22[_0x196300]), _0x196300++;
            }
          }
          return _0x3570d4["join"]("");
        }
        for (const [_0x512061, _0x570450] of Object["entries"](this["_actions"])) if (_0x472d99["startsWith"](_0x512061)) {
          const _0x2aa349 = _0x27dcd7["slice"](_0x512061["length"]);
          if (_0x2aa349) return _0x570450 + this["_matchAction"](_0x2aa349);
          return _0x570450;
        }
        return _0x27dcd7;
      },
      _inferFromBody(_0x5ea860) {
        if (!_0x5ea860 || "object" != typeof _0x5ea860) return "";
        const _0x213f27 = [];
        if (this["_collectFieldHints"](_0x5ea860, _0x213f27, 0x0, 0x2), _0x213f27["length"] > 0x0) return "包含: " + _0x213f27["slice"](0x0, 0xa)["join"](",\x20") + (_0x213f27["length"] > 0xa ? "..." : "");
        const _0x5957ae = Object["keys"](_0x5ea860);
        return "字段: " + _0x5957ae["slice"](0x0, 0x6)["join"](",\x20") + (_0x5957ae["length"] > 0x6 ? "..." : "");
      },
      _collectFieldHints(_0x4557d5, _0xd75a93, _0x90c81, _0x197c93) {
        if (!_0x4557d5 || "object" != typeof _0x4557d5 || _0x90c81 > _0x197c93) return;
        const _0x2ead54 = Array["isArray"](_0x4557d5) ? [] : Object["keys"](_0x4557d5);
        if (Array["isArray"](_0x4557d5) && _0x4557d5["length"] > 0x0 && "object" == typeof _0x4557d5[0x0]) this["_collectFieldHints"](_0x4557d5[0x0], _0xd75a93, _0x90c81 + 0x1, _0x197c93);else for (const _0x9bb295 of _0x2ead54["slice"](0x0, 0xa)) {
          const _0x4305dc = _0x9bb295["toLowerCase"](),
            _0x3c972d = _0x4557d5[_0x9bb295];
          let _0xd9015 = !0x1;
          for (const [_0x4f038a, _0x16ce4e] of Object["entries"](this["_fieldHints"])) if (_0x4305dc === _0x4f038a["toLowerCase"]()) {
            let _0x40c66d = "";
            Array["isArray"](_0x3c972d) ? _0x40c66d = "(" + _0x3c972d["length"] + "\u6761)" : "number" == typeof _0x3c972d ? _0x40c66d = "=" + _0x3c972d : "string" == typeof _0x3c972d && _0x3c972d["length"] < 0x14 && (_0x40c66d = "=\x22" + _0x3c972d + "\x22"), _0xd75a93["push"](_0x16ce4e + _0x40c66d), _0xd9015 = !0x0;
            break;
          }
          !_0xd9015 && _0x3c972d && "object" == typeof _0x3c972d && _0x90c81 < _0x197c93 && this["_collectFieldHints"](_0x3c972d, _0xd75a93, _0x90c81 + 0x1, _0x197c93);
        }
      },
      _matchFingerprint(_0x1132b1) {
        if (!_0x1132b1 || "object" != typeof _0x1132b1) return null;
        const _0x556e56 = new Set(),
          _0x311074 = (_0x3c1caa, _0x39fdc3) => {
            !_0x3c1caa || "object" != typeof _0x3c1caa || _0x39fdc3 > 0x1 || (Array["isArray"](_0x3c1caa) ? _0x3c1caa["length"] > 0x0 && "object" == typeof _0x3c1caa[0x0] && _0x311074(_0x3c1caa[0x0], _0x39fdc3 + 0x1) : Object["keys"](_0x3c1caa)["forEach"](_0x5ace20 => {
              _0x556e56["add"](_0x5ace20["toLowerCase"]()), _0x3c1caa[_0x5ace20] && "object" == typeof _0x3c1caa[_0x5ace20] && !Array["isArray"](_0x3c1caa[_0x5ace20]) && _0x311074(_0x3c1caa[_0x5ace20], _0x39fdc3 + 0x1);
            }));
          };
        _0x311074(_0x1132b1, 0x0);
        let _0xf3381f = null,
          _0x92b073 = 0x0;
        for (const _0x3dcca2 of this["_fingerprints"]) {
          _0x3dcca2["fields"]["every"](_0x563ebf => _0x556e56["has"](_0x563ebf["toLowerCase"]())) && _0x3dcca2["fields"]["length"] > _0x92b073 && (_0xf3381f = _0x3dcca2["hint"], _0x92b073 = _0x3dcca2["fields"]["length"]);
        }
        return _0xf3381f;
      },
      _trackValueChanges(_0x334c87, _0x41c07d) {
        if (!_0x334c87 || !_0x41c07d || "object" != typeof _0x41c07d) return null;
        const _0x57f41a = this["_bodySnapshots"][_0x334c87];
        try {
          this["_bodySnapshots"][_0x334c87] = {
            body: JSON["parse"](JSON["stringify"](_0x41c07d)),
            timestamp: Date["now"]()
          };
        } catch (_0x3c91d8) {
          return null;
        }
        if (!_0x57f41a || !_0x57f41a["body"]) return null;
        const _0x20e30e = [];
        return this["_compareValues"](_0x57f41a["body"], _0x41c07d, "", _0x20e30e, 0x0), 0x0 === _0x20e30e["length"] ? null : "数值变化: " + _0x20e30e["slice"](0x0, 0x8)["join"](",\x20") + (_0x20e30e["length"] > 0x8 ? "..." : "");
      },
      _compareValues(_0x20149a, _0xf4f0, _0x452a23, _0x11cfab, _0x1e5a36) {
        if (_0x1e5a36 > 0x2 || !_0x20149a || !_0xf4f0) return;
        if ("object" != typeof _0x20149a || "object" != typeof _0xf4f0) return;
        const _0x5bc57d = new Set([...Object["keys"](_0x20149a), ...Object["keys"](_0xf4f0)]);
        for (const _0x1f690f of _0x5bc57d) {
          const _0x155547 = _0x20149a[_0x1f690f],
            _0x32a250 = _0xf4f0[_0x1f690f],
            _0x39028e = this["_fieldHints"][_0x1f690f] || _0x1f690f;
          if ("number" == typeof _0x155547 && "number" == typeof _0x32a250 && _0x155547 !== _0x32a250) {
            const _0x5479c0 = _0x32a250 - _0x155547,
              _0xaaf1da = _0x5479c0 > 0x0 ? "+" : "";
            _0x11cfab["push"](_0x39028e + "\x20" + _0x155547 + "\u2192" + _0x32a250 + "(" + _0xaaf1da + _0x5479c0 + ")");
          } else "object" != typeof _0x155547 || "object" != typeof _0x32a250 || Array["isArray"](_0x155547) || Array["isArray"](_0x32a250) || this["_compareValues"](_0x155547, _0x32a250, _0x452a23 ? _0x452a23 + "." + _0x1f690f : _0x1f690f, _0x11cfab, _0x1e5a36 + 0x1);
        }
      },
      _recordCmdStats(_0x1785fe, _0x5a5f4d) {
        if (!_0x1785fe) return;
        const _0x4bcf21 = Date["now"]();
        this["_cmdStats"][_0x1785fe] || (this["_cmdStats"][_0x1785fe] = {
          count: 0x0,
          firstSeen: _0x4bcf21,
          lastSeen: _0x4bcf21
        }), this["_cmdStats"][_0x1785fe]["count"]++, this["_cmdStats"][_0x1785fe]["lastSeen"] = _0x4bcf21, _0x5a5f4d && "\u8bf7\u6c42" !== _0x5a5f4d && "\u54cd\u5e94" !== _0x5a5f4d || (this["_unrecognized"][_0x1785fe] = (this["_unrecognized"][_0x1785fe] || 0x0) + 0x1);
      },
      getCmdsByModule() {
        const _0x4f308d = {};
        for (const [_0x2dcdc1, _0x341889] of Object["entries"](this["_cmdStats"])) {
          const _0x421ef4 = this["_getModuleName"](_0x2dcdc1);
          _0x4f308d[_0x421ef4] || (_0x4f308d[_0x421ef4] = []), _0x4f308d[_0x421ef4]["push"]({
            cmd: _0x2dcdc1,
            count: _0x341889["count"],
            lastSeen: _0x341889["lastSeen"]
          });
        }
        for (const _0x1f66dd of Object["keys"](_0x4f308d)) _0x4f308d[_0x1f66dd]["sort"]((_0x3bcc54, _0x5345a0) => _0x5345a0["count"] - _0x3bcc54["count"]);
        return _0x4f308d;
      },
      _getModuleName(_0x2ae895) {
        if (!_0x2ae895) return "\u672a\u77e5";
        const _0x5814e1 = _0x2ae895["replace"](/(Resp|Response|Req|Request|Notify)$/i, ""),
          _0x5e453f = _0x5814e1["split"]("_")["filter"](Boolean);
        if (_0x5e453f["length"] >= 0x2) {
          const _0x3c5010 = _0x5e453f[0x0]["toLowerCase"]();
          return this["_modules"][_0x3c5010] || _0x5e453f[0x0];
        }
        const _0x501912 = _0x5814e1["replace"](/([a-z])([A-Z])/g, "$1_$2")["split"]("_");
        if (_0x501912["length"] >= 0x2) {
          const _0x519aea = _0x501912[0x0]["toLowerCase"]();
          return this["_modules"][_0x519aea] || _0x501912[0x0];
        }
        return _0x5814e1;
      },
      recordEntry(_0x499986) {
        if (_0x499986 && _0x499986["cmd"]) {
          if ("send" === _0x499986["direction"] && _0x499986["seq"] > 0x0) this["_pendingRequests"][_0x499986["seq"]] = {
            cmd: _0x499986["cmd"],
            body: _0x499986["body"],
            timestamp: _0x499986["timestamp"] || Date["now"]()
          };else {
            if ("receive" === _0x499986["direction"] && _0x499986["ack"] > 0x0) {
              const _0x4b285e = this["_pendingRequests"][_0x499986["ack"]];
              if (_0x4b285e) {
                const _0x1f470a = {
                  reqCmd: _0x4b285e["cmd"],
                  reqBody: _0x4b285e["body"],
                  respCmd: _0x499986["cmd"],
                  respBody: _0x499986["body"],
                  duration: (_0x499986["timestamp"] || Date["now"]()) - _0x4b285e["timestamp"]
                };
                this["_pairHistory"]["push"](_0x1f470a), this["_pairHistory"]["length"] > this["_maxPairHistory"] && this["_pairHistory"]["shift"](), delete this["_pendingRequests"][_0x499986["ack"]];
              }
            }
          }
        }
      },
      getUnrecognizedCmds() {
        return Object["entries"](this["_unrecognized"])["map"](([_0x3010ee, _0x5b716e]) => ({
          cmd: _0x3010ee,
          count: _0x5b716e
        }))["sort"]((_0x529ce6, _0x96c230) => _0x96c230["count"] - _0x529ce6["count"]);
      },
      getCmdStats() {
        return {
          ...this["_cmdStats"]
        };
      },
      getPairHistory() {
        return this["_pairHistory"]["slice"]();
      },
      getCorrelation(_0x3fc566) {
        const _0x1a7f3c = this["_pairHistory"]["filter"](_0x115faa => _0x115faa["reqCmd"] === _0x3fc566 || _0x115faa["respCmd"] === _0x3fc566);
        if (0x0 === _0x1a7f3c["length"]) return {
          avgDuration: 0x0,
          count: 0x0,
          pairs: []
        };
        const _0x1c4e51 = _0x1a7f3c["reduce"]((_0x17b672, _0x444d2d) => _0x17b672 + (_0x444d2d["duration"] || 0x0), 0x0);
        return {
          avgDuration: Math["round"](_0x1c4e51 / _0x1a7f3c["length"]),
          count: _0x1a7f3c["length"],
          pairs: _0x1a7f3c
        };
      },
      exportDictionary() {
        const _0x2612a0 = {};
        for (const [_0x12b0a7, _0x17ae4c] of Object["entries"](this["_cmdStats"])) {
          const _0x3f0018 = this["analyze"](_0x12b0a7, null, "send", null, null);
          _0x3f0018 && "\u8bf7\u6c42" !== _0x3f0018 && "\u54cd\u5e94" !== _0x3f0018 && (_0x2612a0[_0x12b0a7] = _0x3f0018);
        }
        return _0x2612a0;
      }
    },
    _0x24efb1 = {
      parse(_0x1a8cdd, _0x2e20e8) {
        if (!_0x2e20e8 || !_0x2e20e8["trim"]()) return {
          entries: {},
          error: "文件内容为空"
        };
        const _0x5679fb = (_0x1a8cdd || "")["split"](".")["pop"]()["toLowerCase"]();
        try {
          return "json" === _0x5679fb ? this["_parseJson"](_0x2e20e8) : "txt" === _0x5679fb ? this["_parseTxt"](_0x2e20e8) : "js" === _0x5679fb ? this["_parseJs"](_0x2e20e8) : this["_autoDetect"](_0x2e20e8);
        } catch (_0xa5d745) {
          return {
            entries: {},
            error: "解析失败: " + _0xa5d745["message"]
          };
        }
      },
      _parseJson(_0x5e7bd4) {
        const _0x49e2be = JSON["parse"](_0x5e7bd4);
        if (_0x49e2be && "object" == typeof _0x49e2be && !Array["isArray"](_0x49e2be)) {
          const _0xc2c412 = {};
          for (const [_0x4320d9, _0x261a54] of Object["entries"](_0x49e2be)) "string" == typeof _0x261a54 && _0x261a54["trim"]() && (_0xc2c412[_0x4320d9] = _0x261a54["trim"]());
          return {
            entries: _0xc2c412,
            error: null
          };
        }
        if (Array["isArray"](_0x49e2be)) {
          const _0x336636 = {};
          for (const _0x15a6fb of _0x49e2be) {
            if (!_0x15a6fb || "object" != typeof _0x15a6fb) continue;
            const _0x3c0fc6 = _0x15a6fb["cmd"] || _0x15a6fb["command"] || _0x15a6fb["key"] || _0x15a6fb["name"],
              _0x63e8b1 = _0x15a6fb["note"] || _0x15a6fb["desc"] || _0x15a6fb["description"] || _0x15a6fb["value"] || _0x15a6fb["label"];
            _0x3c0fc6 && _0x63e8b1 && "string" == typeof _0x3c0fc6 && "string" == typeof _0x63e8b1 && (_0x336636[_0x3c0fc6] = _0x63e8b1["trim"]());
          }
          return {
            entries: _0x336636,
            error: null
          };
        }
        return {
          entries: {},
          error: "JSON 格式不支持，需要对象或数组"
        };
      },
      _parseTxt(_0x420bc3) {
        const _0x933ce2 = {},
          _0x31ab57 = _0x420bc3["split"](/\r?\n/);
        for (const _0x1294bd of _0x31ab57) {
          const _0x1865ea = _0x1294bd["trim"]();
          if (!_0x1865ea || _0x1865ea["startsWith"]("#") || _0x1865ea["startsWith"]("//")) continue;
          let _0x5c71ef = "",
            _0x4c423c = "";
          const _0x3ace48 = ["=", ":", "\x09"];
          let _0x5e20c8 = !0x1;
          for (const _0x5eb689 of _0x3ace48) {
            const _0x588f90 = _0x1865ea["indexOf"](_0x5eb689);
            if (_0x588f90 > 0x0 && (_0x5c71ef = _0x1865ea["substring"](0x0, _0x588f90)["trim"](), _0x4c423c = _0x1865ea["substring"](_0x588f90 + 0x1)["trim"](), _0x5c71ef && _0x4c423c)) {
              _0x5e20c8 = !0x0;
              break;
            }
          }
          if (!_0x5e20c8) {
            const _0x494a22 = _0x1865ea["match"](/^(\S+)\s{2,}(.+)$/);
            _0x494a22 && (_0x5c71ef = _0x494a22[0x1]["trim"](), _0x4c423c = _0x494a22[0x2]["trim"](), _0x5e20c8 = !0x0);
          }
          _0x5e20c8 && _0x5c71ef && _0x4c423c && (_0x933ce2[_0x5c71ef] = _0x4c423c);
        }
        return {
          entries: _0x933ce2,
          error: null
        };
      },
      _parseJs(_0x1c4e0f) {
        let _0x4fe409 = _0x1c4e0f["trim"]();
        _0x4fe409 = _0x4fe409["replace"](/^(?:module\.exports\s*=|export\s+default|(?:const|let|var)\s+\w+\s*=)\s*/i, ""), _0x4fe409 = _0x4fe409["replace"](/;\s*$/, "");
        try {
          const _0x642023 = JSON["parse"](_0x4fe409);
          if (_0x642023 && "object" == typeof _0x642023 && !Array["isArray"](_0x642023)) {
            const _0x3c52bd = {};
            for (const [_0x564904, _0x188e48] of Object["entries"](_0x642023)) "string" == typeof _0x188e48 && _0x188e48["trim"]() && (_0x3c52bd[_0x564904] = _0x188e48["trim"]());
            return {
              entries: _0x3c52bd,
              error: null
            };
          }
        } catch (_0x57d799) {}
        const _0x345e34 = {},
          _0x65a1c8 = /['"]([^'"]+)['"]\s*:\s*['"]([^'"]+)['"]/g;
        let _0x32d449;
        for (; null !== (_0x32d449 = _0x65a1c8["exec"](_0x1c4e0f));) _0x345e34[_0x32d449[0x1]] = _0x32d449[0x2];
        return Object["keys"](_0x345e34)["length"] > 0x0 ? {
          entries: _0x345e34,
          error: null
        } : {
          entries: {},
          error: "JS 文件中未找到有效的字典数据"
        };
      },
      _autoDetect(_0x3b123f) {
        const _0x5f329c = _0x3b123f["trim"]();
        return _0x5f329c["startsWith"]("{") || _0x5f329c["startsWith"]("[") ? this["_parseJson"](_0x5f329c) : _0x5f329c["includes"]("module.exports") || _0x5f329c["includes"]("export ") ? this["_parseJs"](_0x5f329c) : this["_parseTxt"](_0x5f329c);
      }
    };
  class _0x1586e1 {
    constructor(_0x4ce927 = 0x1f4) {
      this["_logs"] = [], this["_maxSize"] = _0x4ce927, this["_nextId"] = 0x1;
    }
    ["add"](_0x337f16) {
      const _0x3792c3 = {
        id: this["_nextId"]++,
        ..._0x337f16
      };
      for (this["_logs"]["push"](_0x3792c3); this["_logs"]["length"] > this["_maxSize"];) this["_logs"]["shift"]();
    }
    ["getFiltered"](_0x453eb6) {
      if (!_0x453eb6 || 0x0 === _0x453eb6["length"]) return this["_logs"]["slice"]();
      const _0x1b07c6 = new Set(_0x453eb6);
      return this["_logs"]["filter"](_0x4279b1 => !_0x1b07c6["has"](_0x4279b1["cmd"]));
    }
    ["clear"]() {
      this["_logs"] = [];
    }
    ["getCount"]() {
      return this["_nextId"] - 0x1;
    }
  }
  class _0x370db5 {
    constructor(_0x1a1e3e = "xyzw_monitor_config") {
      this["_storageKey"] = _0x1a1e3e, this["_blacklist"] = [], this["_notes"] = {}, this["_dictionary"] = {}, this["load"]();
    }
    ["getBlacklist"]() {
      return this["_blacklist"]["slice"]();
    }
    ["addToBlacklist"](_0x36d808) {
      _0x36d808 && !this["_blacklist"]["includes"](_0x36d808) && (this["_blacklist"]["push"](_0x36d808), this["save"]());
    }
    ["removeFromBlacklist"](_0x23076b) {
      const _0x18a603 = this["_blacklist"]["indexOf"](_0x23076b);
      -0x1 !== _0x18a603 && (this["_blacklist"]["splice"](_0x18a603, 0x1), this["save"]());
    }
    ["setNote"](_0x4c0b05, _0x60a9ac) {
      _0x4c0b05 && (_0x60a9ac && "" !== _0x60a9ac["trim"]() ? (this["_notes"][_0x4c0b05] = _0x60a9ac["trim"](), this["save"]()) : this["removeNote"](_0x4c0b05));
    }
    ["getNote"](_0x3e60a7) {
      return this["_notes"][_0x3e60a7] || null;
    }
    ["removeNote"](_0xd478fd) {
      _0xd478fd && _0xd478fd in this["_notes"] && (delete this["_notes"][_0xd478fd], this["save"]());
    }
    ["getAllNotes"]() {
      return Object["assign"]({}, this["_notes"]);
    }
    ["getNotedCmds"]() {
      return Object["keys"](this["_notes"]);
    }
    ["getDictEntry"](_0x249a9c) {
      return this["_dictionary"][_0x249a9c] || null;
    }
    ["getDictionary"]() {
      return Object["assign"]({}, this["_dictionary"]);
    }
    ["getDictSize"]() {
      return Object["keys"](this["_dictionary"])["length"];
    }
    ["importDictionary"](_0x2a3b70, _0x233cda = !0x1) {
      let _0x16594a = 0x0,
        _0x9a9271 = 0x0,
        _0x9a1a7d = 0x0;
      for (const [_0x34dbdc, _0x2faa90] of Object["entries"](_0x2a3b70)) _0x34dbdc && "string" == typeof _0x2faa90 && _0x2faa90["trim"]() && (this["_dictionary"][_0x34dbdc] ? _0x233cda ? (this["_dictionary"][_0x34dbdc] = _0x2faa90["trim"](), _0x9a9271++) : _0x9a1a7d++ : (this["_dictionary"][_0x34dbdc] = _0x2faa90["trim"](), _0x16594a++));
      return this["save"](), {
        added: _0x16594a,
        updated: _0x9a9271,
        skipped: _0x9a1a7d
      };
    }
    ["syncNotesToDictionary"](_0x52ba0a = !0x1) {
      let _0x5620eb = 0x0,
        _0x3adfca = 0x0;
      for (const [_0x4dca70, _0x138c8c] of Object["entries"](this["_notes"])) _0x138c8c && (this["_dictionary"][_0x4dca70] ? _0x52ba0a && (this["_dictionary"][_0x4dca70] = _0x138c8c, _0x3adfca++) : (this["_dictionary"][_0x4dca70] = _0x138c8c, _0x5620eb++));
      return this["save"](), {
        added: _0x5620eb,
        updated: _0x3adfca
      };
    }
    ["removeDictEntry"](_0x9162b3) {
      _0x9162b3 && _0x9162b3 in this["_dictionary"] && (delete this["_dictionary"][_0x9162b3], this["save"]());
    }
    ["clearDictionary"]() {
      this["_dictionary"] = {}, this["save"]();
    }
    ["exportDictionaryJson"]() {
      return JSON["stringify"](this["_dictionary"], null, 0x2);
    }
    ["exportConfigJson"]() {
      const _0x405446 = {
        version: "1.0",
        exportTime: new Date()["toISOString"](),
        blacklist: this["_blacklist"],
        notes: this["_notes"],
        dictionary: this["_dictionary"]
      };
      return JSON["stringify"](_0x405446, null, 0x2);
    }
    ["importConfig"](_0x20b91f, _0x1b540a = !0x1) {
      try {
        const _0x3d9c07 = JSON["parse"](_0x20b91f);
        let _0x38ade6 = 0x0,
          _0x3027da = 0x0,
          _0x775d7 = 0x0,
          _0x27c751 = 0x0,
          _0xeae29b = 0x0;
        if (Array["isArray"](_0x3d9c07["blacklist"])) {
          for (const _0x29593d of _0x3d9c07["blacklist"]) "string" == typeof _0x29593d && _0x29593d["trim"]() && !this["_blacklist"]["includes"](_0x29593d) && (this["_blacklist"]["push"](_0x29593d), _0x38ade6++);
        }
        if (_0x3d9c07["notes"] && "object" == typeof _0x3d9c07["notes"] && !Array["isArray"](_0x3d9c07["notes"])) {
          for (const [_0x221f09, _0x2e4c3c] of Object["entries"](_0x3d9c07["notes"])) _0x221f09 && "string" == typeof _0x2e4c3c && _0x2e4c3c["trim"]() && (this["_notes"][_0x221f09] ? _0x1b540a && (this["_notes"][_0x221f09] = _0x2e4c3c["trim"](), _0x775d7++) : (this["_notes"][_0x221f09] = _0x2e4c3c["trim"](), _0x3027da++));
        }
        if (_0x3d9c07["dictionary"] && "object" == typeof _0x3d9c07["dictionary"] && !Array["isArray"](_0x3d9c07["dictionary"])) {
          for (const [_0x560e3f, _0x42691b] of Object["entries"](_0x3d9c07["dictionary"])) _0x560e3f && "string" == typeof _0x42691b && _0x42691b["trim"]() && (this["_dictionary"][_0x560e3f] ? _0x1b540a && (this["_dictionary"][_0x560e3f] = _0x42691b["trim"](), _0xeae29b++) : (this["_dictionary"][_0x560e3f] = _0x42691b["trim"](), _0x27c751++));
        }
        return this["save"](), {
          blacklistAdded: _0x38ade6,
          notesAdded: _0x3027da,
          notesUpdated: _0x775d7,
          dictAdded: _0x27c751,
          dictUpdated: _0xeae29b,
          error: null
        };
      } catch (_0x36cdfe) {
        return {
          blacklistAdded: 0x0,
          notesAdded: 0x0,
          notesUpdated: 0x0,
          dictAdded: 0x0,
          dictUpdated: 0x0,
          error: "配置解析失败: " + _0x36cdfe["message"]
        };
      }
    }
    ["save"]() {
      try {
        const _0x3b9c43 = {
          blacklist: this["_blacklist"],
          notes: this["_notes"],
          dictionary: this["_dictionary"]
        };
        localStorage["setItem"](this["_storageKey"], JSON["stringify"](_0x3b9c43));
      } catch (_0x2d6e02) {
        console["error"]("[ConfigManager] 保存配置失败:", _0x2d6e02);
      }
    }
    ["load"]() {
      try {
        const _0x471224 = localStorage["getItem"](this["_storageKey"]);
        if (_0x471224) {
          const _0x4839ad = JSON["parse"](_0x471224);
          Array["isArray"](_0x4839ad["blacklist"]) && (this["_blacklist"] = _0x4839ad["blacklist"]), _0x4839ad["notes"] && "object" == typeof _0x4839ad["notes"] && !Array["isArray"](_0x4839ad["notes"]) && (this["_notes"] = _0x4839ad["notes"]), _0x4839ad["dictionary"] && "object" == typeof _0x4839ad["dictionary"] && !Array["isArray"](_0x4839ad["dictionary"]) && (this["_dictionary"] = _0x4839ad["dictionary"]);
        }
      } catch (_0xb299e8) {
        console["error"]("[ConfigManager] 加载配置失败:", _0xb299e8), this["_blacklist"] = [], this["_notes"] = {}, this["_dictionary"] = {};
      }
    }
  }
  class _0x477669 {
    constructor(_0x4a46d9) {
      this["_getWebSocket"] = _0x4a46d9, this["_seq"] = 0x0;
    }
    ["send"](_0x4d98f1, _0x49d752) {
      try {
        const _0x264517 = this["_getWebSocket"]();
        if (!_0x264517 || _0x264517["readyState"] !== WebSocket["OPEN"]) return console["warn"]("[MessageSender] WebSocket 连接不可用"), !0x1;
        const _0x22689e = new _0x327eea()["encode"](_0x49d752);
        this["_seq"]++;
        const _0x2b8311 = {
            cmd: _0x4d98f1,
            seq: this["_seq"],
            ack: 0x0,
            time: Date["now"](),
            body: _0x22689e
          },
          _0x31889a = new _0x327eea()["encode"](_0x2b8311),
          _0x30afdf = _0xe0d465["encryptX"](_0x31889a);
        return _0x264517["send"](_0x30afdf), console["log"]("[MessageSender] 发送成功:", _0x4d98f1, "seq:", this["_seq"]), !0x0;
      } catch (_0x333413) {
        return console["error"]("[MessageSender] 发送失败:", _0x333413), !0x1;
      }
    }
  }
  class _0x1d369a {
    constructor(_0x1d7914) {
      this["_onCapture"] = _0x1d7914, this["_capturing"] = !0x0, this["_OriginalWebSocket"] = null, this["_activeWebSocket"] = null;
    }
    ["install"]() {
      this["_OriginalWebSocket"] = _0x284c7f["WebSocket"];
      const _0x24843b = this,
        _0x40de84 = new Proxy(this["_OriginalWebSocket"], {
          construct(_0x147bc6, _0xe97888) {
            let _0x38d91f;
            try {
              _0x38d91f = new _0x147bc6(..._0xe97888);
            } catch (_0x1700f9) {
              throw console["error"]("[WebSocketHook] 创建 WebSocket 实例失败:", _0x1700f9), _0x1700f9;
            }
            return _0x24843b["_activeWebSocket"] = _0x38d91f, _0x24843b["_hookSend"](_0x38d91f), _0x24843b["_addReceiveMonitor"](_0x38d91f), _0x38d91f;
          },
          get: (_0x257628, _0x5a3b13, _0x4a45af) => Reflect["get"](_0x257628, _0x5a3b13, _0x4a45af)
        });
      _0x284c7f["WebSocket"] = _0x40de84, _0x284c7f !== window && (window["WebSocket"] = _0x40de84);
      try {
        Object["defineProperty"](_0x40de84, "prototype", {
          value: this["_OriginalWebSocket"]["prototype"],
          writable: !0x1,
          configurable: !0x1
        });
      } catch (_0x17e98a) {
        console["warn"]("[WebSocketHook] 无法设置 prototype（环境限制），instanceof 检查可能不准确");
      }
    }
    ["_hookSend"](_0x18d528) {
      const _0xab73a7 = this,
        _0x3bd0fd = _0x18d528["send"]["bind"](_0x18d528);
      _0x18d528["send"] = function (_0x33d8df) {
        try {
          _0x3bd0fd(_0x33d8df);
        } catch (_0x34d691) {
          throw console["error"]("[WebSocketHook] 原始 send 调用失败:", _0x34d691), _0x34d691;
        }
        try {
          if (_0xab73a7["_capturing"] && _0xab73a7["_onCapture"]) {
            const _0x3b5b3f = _0xab73a7["_toUint8Array"](_0x33d8df);
            _0x3b5b3f && Promise["resolve"]()["then"](() => {
              try {
                _0xab73a7["_onCapture"]("send", _0x3b5b3f);
              } catch (_0x35332f) {
                console["error"]("[WebSocketHook] send 捕获回调执行失败:", _0x35332f);
              }
            });
          }
        } catch (_0x402003) {
          console["error"]("[WebSocketHook] send 数据副本处理失败:", _0x402003);
        }
      };
    }
    ["_addReceiveMonitor"](_0x4371d2) {
      const _0x4314ac = this;
      _0x4371d2["addEventListener"]("message", function (_0x2b1b1f) {
        try {
          if (_0x4314ac["_capturing"] && _0x4314ac["_onCapture"]) {
            const _0x241621 = _0x4314ac["_toUint8Array"](_0x2b1b1f["data"]);
            _0x241621 && Promise["resolve"]()["then"](() => {
              try {
                _0x4314ac["_onCapture"]("receive", _0x241621);
              } catch (_0x4e905f) {
                console["error"]("[WebSocketHook] receive 捕获回调执行失败:", _0x4e905f);
              }
            });
          }
        } catch (_0x5288d8) {
          console["error"]("[WebSocketHook] 接收监控处理失败:", _0x5288d8);
        }
      });
    }
    ["_toUint8Array"](_0x2c74e3) {
      try {
        if (_0x2c74e3 instanceof ArrayBuffer) return new Uint8Array(_0x2c74e3["slice"](0x0));
        if (_0x2c74e3 instanceof Uint8Array) return new Uint8Array(_0x2c74e3);
        if (ArrayBuffer["isView"](_0x2c74e3)) return new Uint8Array(_0x2c74e3["buffer"]["slice"](_0x2c74e3["byteOffset"], _0x2c74e3["byteOffset"] + _0x2c74e3["byteLength"]));
        if ("string" == typeof _0x2c74e3) return new TextEncoder()["encode"](_0x2c74e3);
        return null;
      } catch (_0x1ca733) {
        return console["error"]("[WebSocketHook] 数据转换为 Uint8Array 失败:", _0x1ca733), null;
      }
    }
    ["setCapturing"](_0x2e535d) {
      this["_capturing"] = !!_0x2e535d;
    }
    ["isCapturing"]() {
      return this["_capturing"];
    }
    ["getActiveWebSocket"]() {
      return this["_activeWebSocket"];
    }
  }
  class _0x181892 {
    constructor(_0x3255e4) {
      this["_logManager"] = _0x3255e4["logManager"], this["_configManager"] = _0x3255e4["configManager"], this["_messageSender"] = _0x3255e4["messageSender"], this["_wsHook"] = _0x3255e4["wsHook"], this["_panelVisible"] = !0x1, this["_activeTab"] = "monitor", this["_expandedLogId"] = null, this["_filterMode"] = "all", this["_selectedLogIds"] = new Set(), this["_downloadDirHandle"] = null, this["_floatBtn"] = null, this["_panel"] = null, this["_tabContents"] = {}, this["_logListEl"] = null, this["_refreshTimer"] = null;
    }
    ["create"]() {
      this["_injectStyles"](), this["_createFloatButton"](), this["_createPanel"](), this["_startAutoRefresh"](), console["log"]("[咸鱼之王监控] UI create() 完成, floatBtn:", !!this["_floatBtn"], "inDOM:", document["contains"](this["_floatBtn"]));
    }
    ["updateLogList"]() {
      if (!this["_logListEl"]) return;
      const _0x255873 = this["_configManager"]["getBlacklist"]();
      let _0x326b77 = this["_logManager"]["getFiltered"](_0x255873);
      if ("send" === this["_filterMode"]) _0x326b77 = _0x326b77["filter"](_0x38c4b4 => "send" === _0x38c4b4["direction"]);else {
        if ("receive" === this["_filterMode"]) _0x326b77 = _0x326b77["filter"](_0x4efa54 => "receive" === _0x4efa54["direction"]);else {
          if ("noted" === this["_filterMode"]) {
            const _0x4384da = new Set(this["_configManager"]["getNotedCmds"]());
            _0x326b77 = _0x326b77["filter"](_0x669334 => _0x4384da["has"](_0x669334["cmd"]));
          }
        }
      }
      if (this["_logListEl"]["textContent"] = "", 0x0 === _0x326b77["length"]) {
        const _0x5e52ad = document["createElement"]("div");
        _0x5e52ad["className"] = "xyzw-log-empty";
        const _0xca79da = {
          all: "暂无日志记录",
          send: "暂无请求日志",
          receive: "暂无响应日志",
          noted: "暂无备注协议的日志"
        };
        return _0x5e52ad["textContent"] = _0xca79da[this["_filterMode"]] || "暂无日志记录", void this["_logListEl"]["appendChild"](_0x5e52ad);
      }
      for (let _0x3bcfd9 = _0x326b77["length"] - 0x1; _0x3bcfd9 >= 0x0; _0x3bcfd9--) this["_logListEl"]["appendChild"](this["_createLogEntry"](_0x326b77[_0x3bcfd9]));
    }
    ["updateCount"](_0x498704) {}
    ["_injectStyles"]() {
      const _0x2e88fb = document["createElement"]("style");
      _0x2e88fb["textContent"] = "\n/* ===== 悬浮按钮 ===== */\n/* 全局隐藏滚动条（保留滚动功能） */\n.xyzw-panel *::-webkit-scrollbar {\n  width: 0;\n  height: 0;\n  display: none;\n}\n.xyzw-panel * {\n  scrollbar-width: none;\n  -ms-overflow-style: none;\n}\n.xyzw-float-btn {\n  position: fixed;\n  font-size: 24px;\n  cursor: pointer;\n  z-index: 10001;\n  transition: all 0.15s ease;\n  user-select: none;\n  touch-action: none;\n  -webkit-touch-callout: none;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  will-change: transform;\n  pointer-events: auto;\n  background: transparent;\n  border: none;\n  padding: 0;\n  border-radius: 50%;\n  box-shadow: none;\n  width: 36px;\n  height: 36px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  /* 默认位置放左上角，避免超出游戏 WebView 视口 */\n  top: 5px;\n  left: 5px;\n}\n.xyzw-float-btn:hover {\n  transform: scale(1.2);\n  filter: drop-shadow(0 2px 4px rgba(49, 130, 206, 0.4));\n}\n/* 拖拽中状态 */\n.xyzw-dragging {\n  cursor: grabbing !important;\n  transform: scale(1.25) !important;\n  z-index: 10002 !important;\n  transition: transform 0.1s ease !important;\n  filter: drop-shadow(0 3px 6px rgba(49, 130, 206, 0.6));\n}\n/* ===== 监控面板 ===== */\n.xyzw-panel {\n  position: fixed !important;\n  top: 50% !important;\n  left: 50% !important;\n  transform: translate(-50%, -50%);\n  width: 90vw;\n  max-width: 420px;\n  height: 75vh;\n  background: #ffffff !important;\n  border-radius: 12px;\n  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.15);\n  z-index: 10000 !important;\n  display: none;\n  flex-direction: column;\n  overflow: hidden;\n  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;\n  font-size: 14px;\n  color: #333;\n  pointer-events: auto !important;\n  visibility: visible !important;\n  border: 1px solid #e8e8e8;\n  transition: all 0.2s ease;\n}\n.xyzw-panel.xyzw-visible {\n  display: flex;\n}\n\n/* ===== 标题栏 ===== */\n.xyzw-header {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 10px 14px;\n  background: #fafafa;\n  border-bottom: 1px solid #e8e8e8;\n  flex-shrink: 0;\n}\n.xyzw-header-title {\n  font-size: 15px;\n  font-weight: 600;\n  color: #1890ff;\n}\n.xyzw-header-close {\n  width: 32px;\n  height: 32px;\n  border: none;\n  background: transparent;\n  color: #999;\n  font-size: 20px;\n  cursor: pointer;\n  border-radius: 6px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  touch-action: manipulation;\n}\n.xyzw-header-close:active {\n  background: rgba(0,0,0,0.05);\n}\n\n/* ===== Tab 栏 ===== */\n.xyzw-tabs {\n  display: flex;\n  background: #fafafa;\n  border-bottom: 1px solid #e8e8e8;\n  flex-shrink: 0;\n}\n.xyzw-tab-btn {\n  flex: 1;\n  padding: 8px 0;\n  border: none;\n  background: transparent;\n  color: #999;\n  font-size: 14px;\n  line-height: 1;\n  letter-spacing: 0.5px;\n  cursor: pointer;\n  border-bottom: 2px solid transparent;\n  touch-action: manipulation;\n  min-height: 40px;\n  text-align: center;\n}\n.xyzw-tab-btn.xyzw-active {\n  color: #1890ff;\n  border-bottom-color: #1890ff;\n}\n\n/* ===== Tab 内容区 ===== */\n.xyzw-tab-content {\n  flex: 1;\n  overflow-y: auto;\n  display: none;\n  flex-direction: column;\n}\n.xyzw-tab-content.xyzw-visible {\n  display: flex;\n}\n\n/* ===== 监控 Tab - 工具栏 ===== */\n.xyzw-toolbar {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 6px;\n  padding: 8px 12px;\n  background: #ffffff;\n  border-bottom: 1px solid #e8e8e8;\n  flex-shrink: 0;\n  align-items: center;\n}\n.xyzw-btn {\n  min-height: 32px;\n  padding: 4px 10px;\n  border: none;\n  border-radius: 6px;\n  font-size: 12px;\n  line-height: 1;\n  cursor: pointer;\n  touch-action: manipulation;\n  -webkit-tap-highlight-color: transparent;\n  transition: opacity 0.15s;\n  white-space: nowrap;\n  text-align: center;\n}\n.xyzw-btn:active {\n  opacity: 0.7;\n}\n.xyzw-btn-primary {\n  background: #1890ff;\n  color: #fff;\n  font-weight: 600;\n}\n.xyzw-btn-danger {\n  background: #ff4d4f;\n  color: #fff;\n}\n.xyzw-btn-secondary {\n  background: #f0f0f0;\n  color: #666;\n}\n.xyzw-btn-success {\n  background: #52c41a;\n  color: #fff;\n  font-weight: 600;\n}\n\n/* ===== 日志列表 ===== */\n.xyzw-log-list {\n  flex: 1;\n  overflow-y: auto;\n  padding: 4px 0;\n}\n.xyzw-log-empty {\n  text-align: center;\n  color: #bbb;\n  padding: 40px 0;\n  font-size: 13px;\n}\n.xyzw-log-entry {\n  padding: 8px 12px;\n  border-bottom: 1px solid #f0f0f0;\n}\n.xyzw-log-summary {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 13px;\n}\n/* 方向标签：请求/响应 */\n.xyzw-log-dir {\n  font-size: 11px;\n  flex-shrink: 0;\n  padding: 2px 6px;\n  border-radius: 4px;\n  font-weight: 600;\n}\n.xyzw-log-dir-send {\n  color: #fa8c16;\n  background: #fff7e6;\n  border: 1px solid #ffd591;\n}\n.xyzw-log-dir-receive {\n  color: #52c41a;\n  background: #f6ffed;\n  border: 1px solid #b7eb8f;\n}\n.xyzw-log-cmd {\n  flex: 1;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  color: #333;\n  font-weight: 500;\n}\n.xyzw-log-time {\n  color: #999;\n  font-size: 12px;\n  flex-shrink: 0;\n}\n.xyzw-log-duration {\n  color: #1890ff;\n  font-size: 12px;\n  flex-shrink: 0;\n  min-width: 40px;\n  text-align: right;\n}\n.xyzw-log-actions {\n  display: flex;\n  gap: 6px;\n  margin-top: 6px;\n  flex-wrap: wrap;\n}\n.xyzw-log-action-btn {\n  padding: 4px 10px;\n  border: 1px solid #d9d9d9;\n  border-radius: 6px;\n  background: #fff;\n  color: #666;\n  font-size: 12px;\n  cursor: pointer;\n  touch-action: manipulation;\n  min-height: 28px;\n}\n.xyzw-log-action-btn:active {\n  background: #f5f5f5;\n}\n/* 屏蔽按钮特殊样式 */\n.xyzw-log-action-btn-block {\n  color: #ff4d4f;\n  border-color: #ffccc7;\n}\n.xyzw-log-action-btn-block:active {\n  background: #fff1f0;\n}\n/* 下载按钮特殊样式 */\n.xyzw-log-action-btn-download {\n  color: #1890ff;\n  border-color: #91d5ff;\n}\n.xyzw-log-action-btn-download:active {\n  background: #e6f7ff;\n}\n.xyzw-log-detail {\n  margin-top: 8px;\n  padding: 10px;\n  background: #f9f9f9;\n  border-radius: 8px;\n  border: 1px solid #e8e8e8;\n  font-size: 12px;\n  color: #555;\n  overflow-y: auto;\n  max-height: 240px;\n}\n\n/* ===== 详情覆盖层（与面板同尺寸） ===== */\n.xyzw-detail-overlay {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background: #ffffff;\n  z-index: 10;\n  display: flex;\n  flex-direction: column;\n  overflow: hidden;\n}\n.xyzw-detail-overlay-header {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 10px 14px;\n  background: #fafafa;\n  border-bottom: 1px solid #e8e8e8;\n  flex-shrink: 0;\n}\n.xyzw-detail-overlay-title {\n  font-size: 15px;\n  font-weight: 600;\n  color: #1890ff;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.xyzw-detail-overlay-close {\n  width: 32px;\n  height: 32px;\n  border: none;\n  background: transparent;\n  color: #999;\n  font-size: 20px;\n  cursor: pointer;\n  border-radius: 6px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  touch-action: manipulation;\n  flex-shrink: 0;\n}\n.xyzw-detail-overlay-close:active {\n  background: rgba(0,0,0,0.05);\n}\n.xyzw-detail-overlay-body {\n  flex: 1;\n  overflow-y: auto;\n  padding: 12px;\n}\n/* 覆盖层内详情和JSON不限高度 */\n.xyzw-detail-overlay .xyzw-log-detail {\n  max-height: none;\n  margin-top: 0;\n}\n.xyzw-detail-overlay .xyzw-detail-body-json {\n  max-height: none;\n}\n/* 协议分析结果样式 */\n.xyzw-detail-analysis {\n  padding: 10px;\n  margin-bottom: 8px;\n  background: #f0f9ff;\n  border: 1px solid #bae7ff;\n  border-radius: 8px;\n  font-size: 13px;\n  color: #333;\n  line-height: 1.8;\n  white-space: pre-wrap;\n  word-break: break-all;\n}\n/* 详情 - 元信息标签行 */\n.xyzw-detail-meta {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 6px;\n  margin-bottom: 8px;\n}\n.xyzw-detail-meta-tag {\n  display: inline-block;\n  padding: 2px 8px;\n  background: #e6f7ff;\n  border: 1px solid #91d5ff;\n  border-radius: 4px;\n  font-size: 11px;\n  color: #1890ff;\n  white-space: nowrap;\n}\n/* 详情 - Body 标题 */\n.xyzw-detail-body-title {\n  font-size: 12px;\n  color: #999;\n  margin-bottom: 4px;\n  text-align: left;\n}\n/* 详情 - Body JSON 内容 */\n.xyzw-detail-body-json {\n  margin: 0;\n  padding: 8px 10px;\n  background: #fff;\n  border: 1px solid #e8e8e8;\n  border-radius: 6px;\n  font-family: 'Courier New', Consolas, monospace;\n  font-size: 12px;\n  line-height: 1.5;\n  color: #333;\n  white-space: pre-wrap;\n  word-break: break-all;\n  text-align: left;\n  max-height: 200px;\n  overflow-y: auto;\n}\n\n/* ===== 发送 Tab ===== */\n.xyzw-send-form {\n  padding: 12px;\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n  flex: 1;\n}\n.xyzw-input-label {\n  font-size: 13px;\n  color: #999;\n  margin-bottom: 2px;\n}\n.xyzw-input {\n  width: 100%;\n  padding: 8px 12px;\n  border: 1px solid #d9d9d9;\n  border-radius: 8px;\n  background: #fff;\n  color: #333;\n  font-size: 14px;\n  outline: none;\n  box-sizing: border-box;\n  min-height: 40px;\n}\n.xyzw-input:focus {\n  border-color: #1890ff;\n  box-shadow: 0 0 0 2px rgba(24,144,255,0.1);\n}\n.xyzw-textarea {\n  resize: vertical;\n  min-height: 100px;\n  font-family: 'Courier New', Consolas, monospace;\n  font-size: 13px;\n  line-height: 1.5;\n}\n.xyzw-send-msg {\n  font-size: 13px;\n  padding: 6px 0;\n  min-height: 20px;\n}\n.xyzw-send-msg-error { color: #ff4d4f; }\n.xyzw-send-msg-success { color: #52c41a; }\n\n/* ===== 设置 Tab ===== */\n.xyzw-settings {\n  padding: 12px;\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n  flex: 1;\n  overflow-y: auto;\n}\n.xyzw-settings-section {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n}\n.xyzw-settings-title {\n  font-size: 14px;\n  font-weight: 600;\n  color: #1890ff;\n}\n.xyzw-blacklist-input-row {\n  display: flex;\n  gap: 8px;\n}\n.xyzw-blacklist-input-row .xyzw-input {\n  flex: 1;\n}\n.xyzw-blacklist-list {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n}\n.xyzw-blacklist-item {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 6px 10px;\n  background: #f9f9f9;\n  border: 1px solid #e8e8e8;\n  border-radius: 6px;\n  font-size: 13px;\n}\n.xyzw-blacklist-item-name {\n  flex: 1;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  color: #333;\n}\n.xyzw-blacklist-del-btn {\n  padding: 2px 8px;\n  border: none;\n  border-radius: 4px;\n  background: #ff4d4f;\n  color: #fff;\n  font-size: 12px;\n  cursor: pointer;\n  touch-action: manipulation;\n  min-height: 26px;\n  flex-shrink: 0;\n}\n.xyzw-help-section {\n  padding: 10px;\n  background: #f9f9f9;\n  border: 1px solid #e8e8e8;\n  border-radius: 8px;\n  font-size: 13px;\n  color: #666;\n  line-height: 1.8;\n}\n.xyzw-help-section p {\n  margin: 0 0 4px 0;\n}\n\n/* ===== 备注相关样式 ===== */\n.xyzw-log-entry-noted {\n  background: #fffbe6;\n  border-left: 3px solid #faad14;\n}\n.xyzw-log-note-text {\n  font-size: 12px;\n  color: #d48806;\n  margin-top: 4px;\n  padding: 3px 8px;\n  background: #fff7e6;\n  border-radius: 4px;\n  border: 1px solid #ffe58f;\n  word-break: break-all;\n}\n.xyzw-log-action-btn-note {\n  color: #faad14;\n  border-color: #ffe58f;\n}\n.xyzw-log-action-btn-note:active {\n  background: #fffbe6;\n}\n.xyzw-btn-noted-active {\n  background: #faad14;\n  color: #fff;\n  font-weight: 600;\n}\n/* 勾选框样式 */\n.xyzw-log-checkbox {\n  width: 16px;\n  height: 16px;\n  flex-shrink: 0;\n  cursor: pointer;\n  accent-color: #1890ff;\n  margin: 0;\n}\n/* 筛选下拉样式 */\n.xyzw-filter-select {\n  min-height: 36px;\n  padding: 6px 10px;\n  border: 1px solid #d9d9d9;\n  border-radius: 8px;\n  background: #fff;\n  color: #333;\n  font-size: 13px;\n  cursor: pointer;\n  outline: none;\n}\n.xyzw-filter-select:focus {\n  border-color: #1890ff;\n}\n/* 备注编辑面板样式 */\n.xyzw-note-overlay {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background: rgba(0,0,0,0.3);\n  z-index: 10003;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  pointer-events: auto;\n}\n.xyzw-note-dialog {\n  background: #fff;\n  border-radius: 12px;\n  padding: 16px;\n  width: 85vw;\n  max-width: 340px;\n  box-shadow: 0 8px 32px rgba(0,0,0,0.2);\n  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;\n}\n.xyzw-note-dialog-title {\n  font-size: 14px;\n  font-weight: 600;\n  color: #333;\n  margin-bottom: 10px;\n  word-break: break-all;\n}\n.xyzw-note-dialog-input {\n  width: 100%;\n  padding: 8px 12px;\n  border: 1px solid #d9d9d9;\n  border-radius: 8px;\n  font-size: 14px;\n  color: #333;\n  background: #fff;\n  outline: none;\n  box-sizing: border-box;\n  min-height: 40px;\n}\n.xyzw-note-dialog-input:focus {\n  border-color: #1890ff;\n  box-shadow: 0 0 0 2px rgba(24,144,255,0.1);\n}\n.xyzw-note-dialog-actions {\n  display: flex;\n  gap: 8px;\n  margin-top: 12px;\n  justify-content: flex-end;\n}\n\n/* ===== 字典管理 ===== */\n.xyzw-dict-info {\n  font-size: 13px;\n  color: #1890ff;\n  font-weight: 500;\n  padding: 10px 12px;\n  background: #e6f7ff;\n  border: 1px solid #91d5ff;\n  border-radius: 8px;\n  text-align: center;\n  margin-bottom: 10px;\n}\n.xyzw-dict-btn-row {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 8px;\n  margin-bottom: 8px;\n}\n.xyzw-dict-btn-row .xyzw-btn {\n  width: 100%;\n  min-height: 36px;\n  font-size: 13px;\n  border-radius: 8px;\n}\n.xyzw-dict-msg {\n  font-size: 12px;\n  padding: 6px 10px;\n  min-height: 18px;\n  border-radius: 6px;\n  text-align: center;\n}\n.xyzw-dict-msg-success { color: #52c41a; background: #f6ffed; }\n.xyzw-dict-msg-error { color: #ff4d4f; background: #fff2f0; }\n.xyzw-dict-list-header {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin: 10px 0 6px;\n  padding: 6px 10px;\n  cursor: pointer;\n  color: #8c8c8c;\n  font-size: 12px;\n  background: #fafafa;\n  border-radius: 6px;\n  border: 1px solid #f0f0f0;\n  transition: background 0.15s;\n}\n.xyzw-dict-list-header:active {\n  background: #f0f0f0;\n}\n.xyzw-dict-list {\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n  margin-top: 6px;\n  max-height: 280px;\n  overflow-y: auto;\n  padding-right: 2px;\n}\n.xyzw-dict-empty {\n  text-align: center;\n  color: #bbb;\n  padding: 24px 0;\n  font-size: 13px;\n}\n.xyzw-dict-item {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 8px 10px;\n  background: #fafafa;\n  border: 1px solid #f0f0f0;\n  border-radius: 8px;\n  font-size: 12px;\n  transition: background 0.15s;\n}\n.xyzw-dict-item:active {\n  background: #f0f0f0;\n}\n.xyzw-dict-item-cmd {\n  flex-shrink: 0;\n  max-width: 40%;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  color: #1890ff;\n  font-weight: 600;\n  font-size: 12px;\n  font-family: 'Courier New', Consolas, monospace;\n}\n.xyzw-dict-item-note {\n  flex: 1;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  color: #595959;\n}\n      ", (document["head"] || document["documentElement"])["appendChild"](_0x2e88fb);
    }
    ["_createFloatButton"]() {
      document["getElementById"]("xyzwFloatBtn")?.["remove"](), this["_floatBtn"] = document["createElement"]("div"), this["_floatBtn"]["id"] = "xyzwFloatBtn", this["_floatBtn"]["className"] = "xyzw-float-btn", this["_floatBtn"]["textContent"] = "🌨️", this["_floatBtn"]["title"] = "打开/关闭协议监控面板", this["_floatBtn"]["style"]["cssText"] = ["position:fixed", "top:5px", "left:5px", "width:36px", "height:36px", "font-size:24px", "cursor:pointer", "z-index:10001", "user-select:none", "touch-action:none", "-webkit-user-select:none", "will-change:transform", "pointer-events:auto", "display:flex", "align-items:center", "justify-content:center", "background:transparent", "border:none", "padding:0", "border-radius:50%", "box-shadow:none", "transition:all 0.15s ease"]["join"](";"), this["_setupFloatBtnDrag"](), document["body"]["appendChild"](this["_floatBtn"]);
    }
    ["_setupFloatBtnDrag"]() {
      const _0x3a8712 = this["_floatBtn"];
      let _0x363ed0 = !0x1,
        _0x17fdd0 = 0x0,
        _0x22849a = 0x0,
        _0x36d45d = 0x0,
        _0x44edbc = 0x0,
        _0x5c5034 = null,
        _0x5f0bf5 = null,
        _0x35c9a6 = null;
      const _0x4fac78 = this,
        _0x1cf0da = localStorage["getItem"]("xyzw_float_btn_pos");
      if (_0x1cf0da) try {
        const {
          left: _0x3cf9f0,
          top: _0x20b236
        } = JSON["parse"](_0x1cf0da);
        _0x3a8712["style"]["left"] = _0x3cf9f0 + "px", _0x3a8712["style"]["top"] = _0x20b236 + "px", _0x3a8712["style"]["right"] = "auto", _0x3a8712["style"]["bottom"] = "auto";
      } catch (_0x2c5f9a) {}
      const _0x103f24 = () => {
          null !== _0x5f0bf5 && null !== _0x35c9a6 && (_0x3a8712["style"]["left"] = _0x5f0bf5 + "px", _0x3a8712["style"]["top"] = _0x35c9a6 + "px", _0x5f0bf5 = null, _0x35c9a6 = null), _0x5c5034 = null;
        },
        _0x20bce = () => {
          document["removeEventListener"]("mousemove", _0x51e8b2), document["removeEventListener"]("mouseup", _0x3c4a80), document["removeEventListener"]("mouseleave", _0x3c4a80), document["removeEventListener"]("touchmove", _0x3ab437), document["removeEventListener"]("touchend", _0x7d656a);
          try {
            window && window !== window && (window["document"]["removeEventListener"]("mouseup", _0x3c4a80), window["document"]["removeEventListener"]("mousemove", _0x51e8b2));
          } catch (_0x5d0668) {}
          if (window["removeEventListener"]("blur", _0x20bce), _0x363ed0) {
            _0x3a8712["classList"]["remove"]("xyzw-dragging"), _0x5c5034 && (cancelAnimationFrame(_0x5c5034), _0x5c5034 = null, null !== _0x5f0bf5 && null !== _0x35c9a6 && (_0x3a8712["style"]["left"] = _0x5f0bf5 + "px", _0x3a8712["style"]["top"] = _0x35c9a6 + "px"));
            const _0x12a600 = {
              left: parseInt(_0x3a8712["style"]["left"]) || 0x0,
              top: parseInt(_0x3a8712["style"]["top"]) || 0x0
            };
            localStorage["setItem"]("xyzw_float_btn_pos", JSON["stringify"](_0x12a600));
          }
          _0x363ed0 = !0x1;
        },
        _0x59f4f2 = (_0x55c766, _0x57998c, _0x5c5a8b) => {
          if (!_0x363ed0) {
            if (!(Math["abs"](_0x55c766 - _0x17fdd0) > 0x3 || Math["abs"](_0x57998c - _0x22849a) > 0x3)) return;
            _0x363ed0 = !0x0, _0x3a8712["classList"]["add"]("xyzw-dragging"), _0x3a8712["style"]["right"] = "auto", _0x3a8712["style"]["bottom"] = "auto";
          }
          _0x5c5a8b && _0x5c5a8b();
          let _0x458c13 = _0x55c766 - _0x36d45d,
            _0x51001d = _0x57998c - _0x44edbc;
          const _0x49e961 = window["innerWidth"] - _0x3a8712["offsetWidth"] - 0x5,
            _0x6817e6 = window["innerHeight"] - _0x3a8712["offsetHeight"] - 0x5;
          _0x458c13 = Math["max"](0x5, Math["min"](_0x458c13, _0x49e961)), _0x51001d = Math["max"](0x5, Math["min"](_0x51001d, _0x6817e6)), _0x5f0bf5 = _0x458c13, _0x35c9a6 = _0x51001d, _0x5c5034 || (_0x5c5034 = requestAnimationFrame(_0x103f24));
        },
        _0x51e8b2 = _0x132fc2 => _0x59f4f2(_0x132fc2["clientX"], _0x132fc2["clientY"], null),
        _0x3c4a80 = () => {
          const _0x30568a = _0x363ed0;
          _0x20bce(), _0x30568a || _0x4fac78["_togglePanel"]();
        },
        _0x3ab437 = _0x90a1b => {
          0x1 === _0x90a1b["touches"]["length"] && _0x59f4f2(_0x90a1b["touches"][0x0]["clientX"], _0x90a1b["touches"][0x0]["clientY"], () => _0x90a1b["preventDefault"]());
        },
        _0x7d656a = () => {
          const _0x3391e4 = _0x363ed0;
          _0x20bce(), _0x3391e4 || _0x4fac78["_togglePanel"]();
        };
      _0x3a8712["addEventListener"]("mousedown", _0x170db7 => {
        if (0x0 === _0x170db7["button"]) {
          _0x17fdd0 = _0x170db7["clientX"], _0x22849a = _0x170db7["clientY"], _0x36d45d = _0x170db7["clientX"] - _0x3a8712["offsetLeft"], _0x44edbc = _0x170db7["clientY"] - _0x3a8712["offsetTop"], _0x363ed0 = !0x1, document["addEventListener"]("mousemove", _0x51e8b2), document["addEventListener"]("mouseup", _0x3c4a80), document["addEventListener"]("mouseleave", _0x3c4a80);
          try {
            window && window !== window && (window["document"]["addEventListener"]("mouseup", _0x3c4a80), window["document"]["addEventListener"]("mousemove", _0x51e8b2));
          } catch (_0x408b80) {}
          window["addEventListener"]("blur", _0x20bce);
        }
      }), _0x3a8712["addEventListener"]("touchstart", _0x135ff2 => {
        _0x135ff2["touches"]["length"] > 0x1 || (_0x135ff2["preventDefault"](), _0x17fdd0 = _0x135ff2["touches"][0x0]["clientX"], _0x22849a = _0x135ff2["touches"][0x0]["clientY"], _0x36d45d = _0x135ff2["touches"][0x0]["clientX"] - _0x3a8712["offsetLeft"], _0x44edbc = _0x135ff2["touches"][0x0]["clientY"] - _0x3a8712["offsetTop"], _0x363ed0 = !0x1, document["addEventListener"]("touchmove", _0x3ab437, {
          passive: !0x1
        }), document["addEventListener"]("touchend", _0x7d656a), window["addEventListener"]("blur", _0x20bce));
      }, {
        passive: !0x1
      }), _0x3a8712["addEventListener"]("touchcancel", _0x20bce);
    }
    ["_createPanel"]() {
      document["getElementById"]("xyzwPanel")?.["remove"](), this["_panel"] = document["createElement"]("div"), this["_panel"]["id"] = "xyzwPanel", this["_panel"]["className"] = "xyzw-panel", this["_panel"]["appendChild"](this["_createHeader"]()), this["_panel"]["appendChild"](this["_createTabBar"]()), this["_tabContents"]["monitor"] = this["_createMonitorTab"](), this["_tabContents"]["send"] = this["_createSendTab"](), this["_tabContents"]["dict"] = this["_createDictTab"](), this["_tabContents"]["settings"] = this["_createSettingsTab"](), this["_panel"]["appendChild"](this["_tabContents"]["monitor"]), this["_panel"]["appendChild"](this["_tabContents"]["send"]), this["_panel"]["appendChild"](this["_tabContents"]["dict"]), this["_panel"]["appendChild"](this["_tabContents"]["settings"]), this["_switchTab"]("monitor"), (document["body"] || document["documentElement"])["appendChild"](this["_panel"]);
    }
    ["_createHeader"]() {
      const _0x336a7a = document["createElement"]("div");
      _0x336a7a["className"] = "xyzw-header";
      const _0x2ec0d6 = document["createElement"]("span");
      _0x2ec0d6["className"] = "xyzw-header-title", _0x2ec0d6["textContent"] = "🐟 咸鱼监控", _0x2ec0d6["style"]["cursor"] = "pointer", _0x2ec0d6["addEventListener"]("click", () => {
        this["_showHelpOverlay"]();
      }), _0x336a7a["appendChild"](_0x2ec0d6);
      const _0x30f80e = document["createElement"]("button");
      return _0x30f80e["className"] = "xyzw-header-close", _0x30f80e["textContent"] = "\u2715", _0x30f80e["addEventListener"]("click", () => {
        this["_togglePanel"]();
      }), _0x336a7a["appendChild"](_0x30f80e), _0x336a7a;
    }
    ["_createTabBar"]() {
      const _0x1dd960 = document["createElement"]("div");
      return _0x1dd960["className"] = "xyzw-tabs", this["_tabBtns"] = {}, [{
        key: "monitor",
        label: "\u76d1\u63a7"
      }, {
        key: "send",
        label: "\u53d1\u9001"
      }, {
        key: "dict",
        label: "\u5b57\u5178"
      }, {
        key: "settings",
        label: "\u8bbe\u7f6e"
      }]["forEach"](_0x4fe23 => {
        const _0x878159 = document["createElement"]("button");
        _0x878159["className"] = "xyzw-tab-btn", _0x878159["textContent"] = _0x4fe23["label"], _0x878159["addEventListener"]("click", () => {
          this["_switchTab"](_0x4fe23["key"]);
        }), this["_tabBtns"][_0x4fe23["key"]] = _0x878159, _0x1dd960["appendChild"](_0x878159);
      }), _0x1dd960;
    }
    ["_createMonitorTab"]() {
      const _0x9ed51e = document["createElement"]("div");
      _0x9ed51e["className"] = "xyzw-tab-content";
      const _0x1644d0 = document["createElement"]("div");
      _0x1644d0["className"] = "xyzw-toolbar", this["_captureBtn"] = document["createElement"]("button"), this["_captureBtn"]["className"] = "xyzw-btn xyzw-btn-secondary", this["_updateCaptureBtn"](), this["_captureBtn"]["addEventListener"]("click", () => {
        const _0x333309 = this["_wsHook"]["isCapturing"]();
        this["_wsHook"]["setCapturing"](!_0x333309), this["_updateCaptureBtn"]();
      }), _0x1644d0["appendChild"](this["_captureBtn"]);
      const _0xd26227 = document["createElement"]("button");
      _0xd26227["className"] = "xyzw-btn xyzw-btn-secondary", _0xd26227["style"]["color"] = "#fa8c16", _0xd26227["style"]["fontWeight"] = "600", _0xd26227["textContent"] = "\u6e05\u7a7a", _0xd26227["addEventListener"]("click", () => {
        this["_logManager"]["clear"](), this["_expandedLogId"] = null, this["updateLogList"](), this["updateCount"](0x0);
      }), _0x1644d0["appendChild"](_0xd26227), this["_selectAllBtn"] = document["createElement"]("button"), this["_selectAllBtn"]["className"] = "xyzw-btn xyzw-btn-secondary", this["_selectAllBtn"]["textContent"] = "\u5168\u9009", this["_selectAllBtn"]["addEventListener"]("click", () => {
        this["_toggleSelectAll"]();
      }), _0x1644d0["appendChild"](this["_selectAllBtn"]);
      const _0x1477c7 = document["createElement"]("button");
      return _0x1477c7["className"] = "xyzw-btn xyzw-btn-secondary", _0x1477c7["textContent"] = "批量下载", _0x1477c7["addEventListener"]("click", () => {
        this["_downloadSelectedLogs"]();
      }), _0x1644d0["appendChild"](_0x1477c7), this["_filterSelect"] = document["createElement"]("select"), this["_filterSelect"]["className"] = "xyzw-filter-select", [{
        value: "all",
        label: "\u5168\u90e8"
      }, {
        value: "send",
        label: "\u8bf7\u6c42"
      }, {
        value: "receive",
        label: "\u54cd\u5e94"
      }, {
        value: "noted",
        label: "\u5907\u6ce8"
      }]["forEach"](_0x2d0e0f => {
        const _0x408bbe = document["createElement"]("option");
        _0x408bbe["value"] = _0x2d0e0f["value"], _0x408bbe["textContent"] = _0x2d0e0f["label"], this["_filterSelect"]["appendChild"](_0x408bbe);
      }), this["_filterSelect"]["addEventListener"]("change", () => {
        this["_filterMode"] = this["_filterSelect"]["value"], this["_selectedLogIds"]["clear"](), this["updateLogList"]();
      }), _0x1644d0["appendChild"](this["_filterSelect"]), _0x9ed51e["appendChild"](_0x1644d0), this["_logListEl"] = document["createElement"]("div"), this["_logListEl"]["className"] = "xyzw-log-list", _0x9ed51e["appendChild"](this["_logListEl"]), _0x9ed51e;
    }
    ["_updateCaptureBtn"]() {
      if (!this["_captureBtn"]) return;
      const _0x55d865 = this["_wsHook"]["isCapturing"]();
      this["_captureBtn"]["textContent"] = _0x55d865 ? "\u505c\u6b62" : "\u5f00\u59cb", this["_captureBtn"]["className"] = "xyzw-btn xyzw-btn-secondary", this["_captureBtn"]["style"]["color"] = _0x55d865 ? "#ff4d4f" : "#52c41a", this["_captureBtn"]["style"]["fontWeight"] = "600";
    }
    ["_createLogEntry"](_0x21ac14) {
      const _0x568fb7 = document["createElement"]("div");
      _0x568fb7["className"] = "xyzw-log-entry", _0x568fb7["dataset"]["logId"] = _0x21ac14["id"];
      const _0x499adf = _0x21ac14["cmd"] ? this["_configManager"]["getNote"](_0x21ac14["cmd"]) : null;
      _0x499adf && _0x568fb7["classList"]["add"]("xyzw-log-entry-noted");
      const _0x15d873 = document["createElement"]("div");
      _0x15d873["className"] = "xyzw-log-summary";
      const _0x3a66c1 = document["createElement"]("input");
      _0x3a66c1["type"] = "checkbox", _0x3a66c1["className"] = "xyzw-log-checkbox", _0x3a66c1["checked"] = this["_selectedLogIds"]["has"](_0x21ac14["id"]), _0x3a66c1["addEventListener"]("change", () => {
        _0x3a66c1["checked"] ? this["_selectedLogIds"]["add"](_0x21ac14["id"]) : this["_selectedLogIds"]["delete"](_0x21ac14["id"]);
      }), _0x15d873["appendChild"](_0x3a66c1);
      const _0x2d4257 = document["createElement"]("span");
      _0x2d4257["className"] = "xyzw-log-dir " + ("send" === _0x21ac14["direction"] ? "xyzw-log-dir-send" : "xyzw-log-dir-receive"), _0x2d4257["textContent"] = "send" === _0x21ac14["direction"] ? "\u8bf7\u6c42" : "\u54cd\u5e94", _0x15d873["appendChild"](_0x2d4257);
      const _0x3c9b89 = document["createElement"]("span");
      _0x3c9b89["className"] = "xyzw-log-cmd", _0x3c9b89["textContent"] = _0x21ac14["cmd"] || "(unknown)", _0x15d873["appendChild"](_0x3c9b89);
      const _0x4ea247 = document["createElement"]("span");
      if (_0x4ea247["className"] = "xyzw-log-time", _0x4ea247["textContent"] = this["_formatTime"](_0x21ac14["timestamp"]), _0x15d873["appendChild"](_0x4ea247), null != _0x21ac14["duration"] && _0x21ac14["duration"] > 0x0) {
        const _0x32e9a6 = document["createElement"]("span");
        _0x32e9a6["className"] = "xyzw-log-duration", _0x32e9a6["textContent"] = _0x21ac14["duration"] + "ms", _0x15d873["appendChild"](_0x32e9a6);
      }
      if (_0x568fb7["appendChild"](_0x15d873), _0x499adf) {
        const _0x2bca83 = document["createElement"]("div");
        _0x2bca83["className"] = "xyzw-log-note-text", _0x2bca83["textContent"] = _0x499adf, _0x568fb7["appendChild"](_0x2bca83);
      }
      const _0x3a7ffe = document["createElement"]("div");
      _0x3a7ffe["className"] = "xyzw-log-actions";
      const _0x2e692c = document["createElement"]("button");
      _0x2e692c["className"] = "xyzw-log-action-btn", _0x2e692c["textContent"] = "\u5c55\u5f00", _0x2e692c["addEventListener"]("click", () => {
        this["_showDetailOverlay"](_0x21ac14);
      }), _0x3a7ffe["appendChild"](_0x2e692c);
      const _0x34b58b = document["createElement"]("button");
      _0x34b58b["className"] = "xyzw-log-action-btn", _0x34b58b["textContent"] = "\u590d\u5236", _0x34b58b["addEventListener"]("click", () => {
        this["_copyLogToClipboard"](_0x21ac14, _0x34b58b);
      }), _0x3a7ffe["appendChild"](_0x34b58b);
      const _0x120c77 = document["createElement"]("button");
      if (_0x120c77["className"] = "xyzw-log-action-btn xyzw-log-action-btn-download", _0x120c77["textContent"] = "\u4e0b\u8f7d", _0x120c77["addEventListener"]("click", () => {
        this["_downloadLogAsJson"](_0x21ac14);
      }), _0x3a7ffe["appendChild"](_0x120c77), _0x21ac14["cmd"]) {
        const _0x275eb0 = document["createElement"]("button");
        _0x275eb0["className"] = "xyzw-log-action-btn xyzw-log-action-btn-note", _0x275eb0["textContent"] = _0x499adf ? "改备注" : "\u5907\u6ce8", _0x275eb0["addEventListener"]("click", () => {
          this["_handleEditNote"](_0x21ac14["cmd"]);
        }), _0x3a7ffe["appendChild"](_0x275eb0);
      }
      if (_0x21ac14["cmd"]) {
        const _0x198071 = document["createElement"]("button");
        _0x198071["className"] = "xyzw-log-action-btn xyzw-log-action-btn-block", _0x198071["textContent"] = "\u5c4f\u853d", _0x198071["addEventListener"]("click", () => {
          this["_configManager"]["addToBlacklist"](_0x21ac14["cmd"]), this["updateLogList"](), this["_refreshBlacklistUI"]();
        }), _0x3a7ffe["appendChild"](_0x198071);
      }
      return _0x568fb7["appendChild"](_0x3a7ffe), _0x568fb7;
    }
    ["_createLogDetail"](_0x1d70ab) {
      const _0x37e36d = document["createElement"]("div");
      _0x37e36d["className"] = "xyzw-log-detail";
      try {
        const _0x47a49a = document["createElement"]("div");
        _0x47a49a["className"] = "xyzw-detail-meta", [{
          label: "cmd",
          value: _0x1d70ab["cmd"]
        }, {
          label: "\u65b9\u5411",
          value: "send" === _0x1d70ab["direction"] ? "\u8bf7\u6c42" : "\u54cd\u5e94"
        }, {
          label: "seq",
          value: _0x1d70ab["seq"]
        }, {
          label: "ack",
          value: _0x1d70ab["ack"]
        }, {
          label: "\u5927\u5c0f",
          value: (_0x1d70ab["rawSize"] || 0x0) + "\x20B"
        }, {
          label: "\u8017\u65f6",
          value: (_0x1d70ab["duration"] || 0x0) + " ms"
        }]["forEach"](_0x13d9f1 => {
          const _0x3f701d = document["createElement"]("span");
          _0x3f701d["className"] = "xyzw-detail-meta-tag", _0x3f701d["textContent"] = _0x13d9f1["label"] + ":\x20" + _0x13d9f1["value"], _0x47a49a["appendChild"](_0x3f701d);
        }), _0x37e36d["appendChild"](_0x47a49a);
        const _0x40f047 = document["createElement"]("div");
        _0x40f047["className"] = "xyzw-detail-body-title", _0x40f047["textContent"] = "Body:", _0x37e36d["appendChild"](_0x40f047);
        const _0x1b87f1 = document["createElement"]("pre");
        _0x1b87f1["className"] = "xyzw-detail-body-json";
        const _0xb97cea = null !== _0x1d70ab["body"] && void 0x0 !== _0x1d70ab["body"] ? _0x1d70ab["body"] : {};
        _0x1b87f1["textContent"] = JSON["stringify"](_0xb97cea, null, 0x2), _0x37e36d["appendChild"](_0x1b87f1);
      } catch (_0x1d7a3c) {
        _0x37e36d["textContent"] = "(无法序列化)";
      }
      return _0x37e36d;
    }
    ["_showHelpOverlay"]() {
      this["_panel"]["querySelector"](".xyzw-detail-overlay")?.["remove"]();
      const _0x233347 = document["createElement"]("div");
      _0x233347["className"] = "xyzw-detail-overlay";
      const _0x3f1fc6 = document["createElement"]("div");
      _0x3f1fc6["className"] = "xyzw-detail-overlay-header";
      const _0xa1350d = document["createElement"]("span");
      _0xa1350d["className"] = "xyzw-detail-overlay-title", _0xa1350d["textContent"] = "📖 使用说明", _0x3f1fc6["appendChild"](_0xa1350d);
      const _0xa370e5 = document["createElement"]("button");
      _0xa370e5["className"] = "xyzw-detail-overlay-close", _0xa370e5["textContent"] = "\u2715", _0xa370e5["addEventListener"]("click", () => {
        _0x233347["remove"]();
      }), _0x3f1fc6["appendChild"](_0xa370e5), _0x233347["appendChild"](_0x3f1fc6);
      const _0x120753 = document["createElement"]("div");
      _0x120753["className"] = "xyzw-detail-overlay-body", _0x120753["style"]["cssText"] = "padding:16px;line-height:1.8;font-size:13px;color:#d9d9d9;";
      const _0x52c152 = [{
        title: "🔍 监控功能",
        items: ["自动捕获 WebSocket 协议消息，支持加密解密和 BON 解码", "点击日志条目可展开查看详情，点击「展开」查看完整协议分析", "支持按方向（请求/响应）和备注筛选日志", "支持勾选多条日志批量下载为 JSON 文件"]
      }, {
        title: "📤 发送功能",
        items: ["输入 cmd 和 JSON body 可向服务器发送自定义协议消息", "发送的消息会自动加密编码，与游戏原生协议格式一致"]
      }, {
        title: "📚 字典功能",
        items: ["支持导入 JSON / TXT / JS 格式的协议字典文件", "支持将手动备注同步到字典库", "字典中的协议说明会自动显示在日志分析中", "导出字典可备份或分享给其他用户"]
      }, {
        title: "⚙️ 设置功能",
        items: ["黑名单管理：屏蔽不关心的协议命令，减少日志干扰", "被屏蔽的命令不会出现在监控日志中"]
      }, {
        title: "💡 小技巧",
        items: ["右键日志条目可快速添加备注或加入黑名单", "协议分析器会自动识别模块、动作和 body 字段含义", "字典优先级：用户备注 > 字典库 > 自动推断"]
      }];
      for (const _0x59efa6 of _0x52c152) {
        const _0xe2d725 = document["createElement"]("div");
        _0xe2d725["style"]["cssText"] = "font-size:14px;font-weight:600;color:#e6e6e6;margin:12px 0 6px;", _0xe2d725["textContent"] = _0x59efa6["title"], _0x120753["appendChild"](_0xe2d725);
        for (const _0x3128f1 of _0x59efa6["items"]) {
          const _0x50c2eb = document["createElement"]("div");
          _0x50c2eb["style"]["cssText"] = "padding-left:8px;margin:3px 0;", _0x50c2eb["textContent"] = "\u2022\x20" + _0x3128f1, _0x120753["appendChild"](_0x50c2eb);
        }
      }
      _0x233347["appendChild"](_0x120753), this["_panel"]["appendChild"](_0x233347);
    }
    ["_showDetailOverlay"](_0x28c27f) {
      this["_panel"]["querySelector"](".xyzw-detail-overlay")?.["remove"](), this["_lastViewedLogId"] = _0x28c27f["id"];
      const _0x3a2709 = document["createElement"]("div");
      _0x3a2709["className"] = "xyzw-detail-overlay";
      const _0xca305d = document["createElement"]("div");
      _0xca305d["className"] = "xyzw-detail-overlay-header";
      const _0x4c6cb1 = document["createElement"]("span");
      _0x4c6cb1["className"] = "xyzw-detail-overlay-title", _0x4c6cb1["textContent"] = "📋 " + (_0x28c27f["cmd"] || "(unknown)"), _0xca305d["appendChild"](_0x4c6cb1);
      const _0x30c7e2 = document["createElement"]("button");
      _0x30c7e2["className"] = "xyzw-detail-overlay-close", _0x30c7e2["textContent"] = "\u2715", _0x30c7e2["addEventListener"]("click", () => {
        _0x3a2709["remove"](), this["_scrollToLogEntry"](this["_lastViewedLogId"]);
      }), _0xca305d["appendChild"](_0x30c7e2), _0x3a2709["appendChild"](_0xca305d);
      const _0x53ff02 = document["createElement"]("div");
      _0x53ff02["className"] = "xyzw-detail-overlay-body";
      const _0x4de167 = _0x28c27f["cmd"] ? this["_configManager"]["getNote"](_0x28c27f["cmd"]) : null,
        _0xdbb403 = _0x28c27f["cmd"] ? this["_configManager"]["getDictEntry"](_0x28c27f["cmd"]) : null,
        _0x122577 = _0x4cbbe4["analyze"](_0x28c27f["cmd"], _0x28c27f["body"], _0x28c27f["direction"], _0x4de167, _0xdbb403),
        _0x599f72 = document["createElement"]("div");
      _0x599f72["className"] = "xyzw-detail-analysis", _0x599f72["textContent"] = _0x122577, _0x53ff02["appendChild"](_0x599f72), _0x53ff02["appendChild"](this["_createLogDetail"](_0x28c27f)), _0x3a2709["appendChild"](_0x53ff02), this["_panel"]["appendChild"](_0x3a2709);
    }
    ["_scrollToLogEntry"](_0x10f66a) {
      if (!_0x10f66a) return;
      const _0x3e0751 = this["_panel"]["querySelector"]('[data-log-id="' + _0x10f66a + "\x22]");
      _0x3e0751 && (_0x3e0751["scrollIntoView"]({
        behavior: "smooth",
        block: "center"
      }), _0x3e0751["style"]["background"] = "#e6f7ff", setTimeout(() => {
        _0x3e0751["style"]["background"] = "";
      }, 0x5dc));
    }
    ["_copyLogToClipboard"](_0x4e8485, _0x56d2b1) {
      let _0x522853;
      try {
        if (this["_expandedLogId"] === _0x4e8485["id"]) {
          const _0x1503cb = {
            cmd: _0x4e8485["cmd"],
            direction: "send" === _0x4e8485["direction"] ? "\u8bf7\u6c42" : "\u54cd\u5e94",
            seq: _0x4e8485["seq"],
            ack: _0x4e8485["ack"],
            time: _0x4e8485["time"],
            rawSize: _0x4e8485["rawSize"],
            duration: _0x4e8485["duration"] || 0x0,
            body: null !== _0x4e8485["body"] && void 0x0 !== _0x4e8485["body"] ? _0x4e8485["body"] : {}
          };
          _0x522853 = JSON["stringify"](_0x1503cb, null, 0x2);
        } else {
          const _0x36618c = null !== _0x4e8485["body"] && void 0x0 !== _0x4e8485["body"] ? _0x4e8485["body"] : {};
          _0x522853 = JSON["stringify"](_0x36618c, null, 0x2);
        }
      } catch (_0x2f3066) {
        _0x522853 = "(无法序列化)";
      }
      navigator["clipboard"]["writeText"](_0x522853)["then"](() => {
        const _0x5c017f = _0x56d2b1["textContent"];
        _0x56d2b1["textContent"] = "已复制 ✓", setTimeout(() => {
          _0x56d2b1["textContent"] = _0x5c017f;
        }, 0x5dc);
      })["catch"](_0x13dd56 => {
        console["error"]("[MonitorUI] 复制到剪贴板失败:", _0x13dd56), _0x56d2b1["textContent"] = "复制失败", setTimeout(() => {
          _0x56d2b1["textContent"] = "\u590d\u5236";
        }, 0x5dc);
      });
    }
    ["_downloadLogAsJson"](_0x4b64ba) {
      const _0x124cd6 = this["_buildExportEntry"](_0x4b64ba),
        _0xe10f18 = JSON["stringify"](_0x124cd6, null, 0x2),
        _0x2c3aa1 = new Blob([_0xe10f18], {
          type: "application/json;charset=utf-8"
        }),
        _0xf8d49f = this["_buildLogFileName"](_0x4b64ba);
      this["_saveFile"](_0x2c3aa1, _0xf8d49f)["catch"](_0x4285e9 => {
        console["error"]("[MonitorUI] 下载日志失败:", _0x4285e9);
      });
    }
    ["_refreshBlacklistUI"]() {
      this["_renderBlacklist"]();
    }
    ["_handleEditNote"](_0x2e6b1a) {
      const _0x4cc293 = this["_configManager"]["getNote"](_0x2e6b1a) || "",
        _0x495dfa = document["createElement"]("div");
      _0x495dfa["className"] = "xyzw-note-overlay";
      const _0xf2efcf = document["createElement"]("div");
      _0xf2efcf["className"] = "xyzw-note-dialog";
      const _0x3b7618 = document["createElement"]("div");
      _0x3b7618["className"] = "xyzw-note-dialog-title", _0x3b7618["textContent"] = "\u4e3a\x20" + _0x2e6b1a + " 添加备注", _0xf2efcf["appendChild"](_0x3b7618);
      const _0x5ddd31 = document["createElement"]("input");
      _0x5ddd31["className"] = "xyzw-note-dialog-input", _0x5ddd31["type"] = "text", _0x5ddd31["value"] = _0x4cc293, _0x5ddd31["placeholder"] = "输入备注（留空删除）", _0xf2efcf["appendChild"](_0x5ddd31);
      const _0x1b137b = document["createElement"]("div");
      _0x1b137b["className"] = "xyzw-note-dialog-actions";
      const _0x17e8b9 = document["createElement"]("button");
      _0x17e8b9["className"] = "xyzw-btn xyzw-btn-secondary", _0x17e8b9["textContent"] = "\u53d6\u6d88", _0x17e8b9["addEventListener"]("click", () => {
        _0x495dfa["remove"]();
      }), _0x1b137b["appendChild"](_0x17e8b9);
      const _0x32ccc8 = document["createElement"]("button");
      _0x32ccc8["className"] = "xyzw-btn xyzw-btn-primary", _0x32ccc8["textContent"] = "\u786e\u8ba4", _0x32ccc8["addEventListener"]("click", () => {
        const _0x1cea41 = _0x5ddd31["value"];
        "" === _0x1cea41["trim"]() ? this["_configManager"]["removeNote"](_0x2e6b1a) : this["_configManager"]["setNote"](_0x2e6b1a, _0x1cea41), _0x495dfa["remove"](), this["updateLogList"]();
      }), _0x1b137b["appendChild"](_0x32ccc8), _0xf2efcf["appendChild"](_0x1b137b), _0x495dfa["appendChild"](_0xf2efcf), _0x495dfa["addEventListener"]("click", _0x350917 => {
        _0x350917["target"] === _0x495dfa && _0x495dfa["remove"]();
      }), _0x5ddd31["addEventListener"]("keydown", _0x5d3738 => {
        "Enter" === _0x5d3738["key"] && _0x32ccc8["click"]();
      }), (document["body"] || document["documentElement"])["appendChild"](_0x495dfa), setTimeout(() => _0x5ddd31["focus"](), 0x32);
    }
    ["_toggleSelectAll"]() {
      const _0x335245 = this["_configManager"]["getBlacklist"]();
      let _0x3dace8 = this["_logManager"]["getFiltered"](_0x335245);
      if ("send" === this["_filterMode"]) _0x3dace8 = _0x3dace8["filter"](_0x12af34 => "send" === _0x12af34["direction"]);else {
        if ("receive" === this["_filterMode"]) _0x3dace8 = _0x3dace8["filter"](_0x5e6314 => "receive" === _0x5e6314["direction"]);else {
          if ("noted" === this["_filterMode"]) {
            const _0xb50f26 = new Set(this["_configManager"]["getNotedCmds"]());
            _0x3dace8 = _0x3dace8["filter"](_0x30b88d => _0xb50f26["has"](_0x30b88d["cmd"]));
          }
        }
      }
      _0x3dace8["length"] > 0x0 && _0x3dace8["every"](_0x3a3a22 => this["_selectedLogIds"]["has"](_0x3a3a22["id"])) ? _0x3dace8["forEach"](_0x119770 => this["_selectedLogIds"]["delete"](_0x119770["id"])) : _0x3dace8["forEach"](_0x1caed3 => this["_selectedLogIds"]["add"](_0x1caed3["id"])), this["updateLogList"]();
    }
    ["_downloadSelectedLogs"]() {
      if (0x0 === this["_selectedLogIds"]["size"]) return void alert("请先勾选要下载的日志条目");
      const _0xf27e1d = this["_configManager"]["getBlacklist"](),
        _0x3ade64 = this["_logManager"]["getFiltered"](_0xf27e1d)["filter"](_0x265623 => this["_selectedLogIds"]["has"](_0x265623["id"]));
      0x0 !== _0x3ade64["length"] ? this["_showBatchDownloadDialog"](_0x3ade64) : alert("选中的日志已被清空或过滤");
    }
    ["_showBatchDownloadDialog"](_0x4fbe40) {
      const _0x1df8ea = document["createElement"]("div");
      _0x1df8ea["className"] = "xyzw-note-overlay";
      const _0x126bb6 = document["createElement"]("div");
      _0x126bb6["className"] = "xyzw-note-dialog";
      const _0x2a3b1b = document["createElement"]("div");
      _0x2a3b1b["className"] = "xyzw-note-dialog-title", _0x2a3b1b["textContent"] = "批量下载 (" + _0x4fbe40["length"] + " 条协议)", _0x126bb6["appendChild"](_0x2a3b1b);
      const _0x200c2f = document["createElement"]("div");
      _0x200c2f["style"]["cssText"] = "font-size:12px;color:#999;margin-bottom:4px;", _0x200c2f["textContent"] = "压缩包名称（选择压缩包下载时使用）", _0x126bb6["appendChild"](_0x200c2f);
      const _0x592b87 = "咸鱼监控_批量导出_" + this["_buildBeijingTimeTag"](),
        _0x4b26c8 = document["createElement"]("input");
      _0x4b26c8["className"] = "xyzw-note-dialog-input", _0x4b26c8["type"] = "text", _0x4b26c8["value"] = _0x592b87, _0x4b26c8["placeholder"] = "输入压缩包名称", _0x126bb6["appendChild"](_0x4b26c8);
      const _0x3be828 = document["createElement"]("div");
      _0x3be828["className"] = "xyzw-note-dialog-actions", _0x3be828["style"]["flexWrap"] = "wrap";
      const _0x5e0490 = document["createElement"]("button");
      _0x5e0490["className"] = "xyzw-btn xyzw-btn-secondary", _0x5e0490["textContent"] = "\u53d6\u6d88", _0x5e0490["addEventListener"]("click", () => _0x1df8ea["remove"]()), _0x3be828["appendChild"](_0x5e0490);
      const _0x297136 = document["createElement"]("button");
      _0x297136["className"] = "xyzw-btn xyzw-btn-primary", _0x297136["textContent"] = "逐个下载", _0x297136["addEventListener"]("click", () => {
        _0x1df8ea["remove"](), this["_batchDownloadSingle"](_0x4fbe40);
      }), _0x3be828["appendChild"](_0x297136);
      const _0x35c9a5 = document["createElement"]("button");
      _0x35c9a5["className"] = "xyzw-btn xyzw-btn-success", _0x35c9a5["textContent"] = "压缩包下载", _0x35c9a5["addEventListener"]("click", () => {
        const _0x1e9a78 = _0x4b26c8["value"]["trim"]() || _0x592b87;
        _0x1df8ea["remove"](), this["_batchDownloadZip"](_0x4fbe40, _0x1e9a78);
      }), _0x3be828["appendChild"](_0x35c9a5), _0x126bb6["appendChild"](_0x3be828), _0x1df8ea["appendChild"](_0x126bb6), _0x1df8ea["addEventListener"]("click", _0x10dea8 => {
        _0x10dea8["target"] === _0x1df8ea && _0x1df8ea["remove"]();
      }), (document["body"] || document["documentElement"])["appendChild"](_0x1df8ea), setTimeout(() => {
        _0x4b26c8["focus"](), _0x4b26c8["select"]();
      }, 0x32);
    }
    async ["_batchDownloadSingle"](_0x23cace) {
      for (let _0x2c89b8 = 0x0; _0x2c89b8 < _0x23cace["length"]; _0x2c89b8++) {
        const _0x49a747 = _0x23cace[_0x2c89b8],
          _0x364eec = this["_buildExportEntry"](_0x49a747),
          _0x1c4f8d = JSON["stringify"](_0x364eec, null, 0x2),
          _0x32a40a = new Blob([_0x1c4f8d], {
            type: "application/json;charset=utf-8"
          }),
          _0x6b14f0 = this["_buildLogFileName"](_0x49a747);
        await this["_saveFile"](_0x32a40a, _0x6b14f0), _0x2c89b8 < _0x23cace["length"] - 0x1 && (await new Promise(_0x4be970 => setTimeout(_0x4be970, 0xc8)));
      }
      this["_selectedLogIds"]["clear"](), this["updateLogList"]();
    }
    async ["_batchDownloadZip"](_0x4c58af, _0x3a6492) {
      const _0x3d17b4 = await this["_loadJSZip"]();
      if (!_0x3d17b4) return void alert("JSZip 库加载失败，无法创建压缩包。请检查网络后重试。");
      const _0xb8645e = new _0x3d17b4();
      for (const _0x30d58c of _0x4c58af) {
        const _0x77b99f = this["_buildExportEntry"](_0x30d58c),
          _0x288406 = JSON["stringify"](_0x77b99f, null, 0x2),
          _0x5a408d = this["_buildLogFileName"](_0x30d58c);
        _0xb8645e["file"](_0x5a408d, _0x288406);
      }
      const _0x2339db = await _0xb8645e["generateAsync"]({
          type: "blob"
        }),
        _0x3ef138 = _0x3a6492["endsWith"](".zip") ? _0x3a6492 : _0x3a6492 + ".zip";
      await this["_saveFile"](_0x2339db, _0x3ef138), this["_selectedLogIds"]["clear"](), this["updateLogList"]();
    }
    ["_createSendTab"]() {
      const _0x54a878 = document["createElement"]("div");
      _0x54a878["className"] = "xyzw-tab-content";
      const _0x4ca177 = document["createElement"]("div");
      _0x4ca177["className"] = "xyzw-send-form";
      const _0x4bf1b5 = document["createElement"]("div");
      _0x4bf1b5["className"] = "xyzw-input-label", _0x4bf1b5["textContent"] = "命令名称 (cmd)", _0x4ca177["appendChild"](_0x4bf1b5), this["_sendCmdInput"] = document["createElement"]("input"), this["_sendCmdInput"]["className"] = "xyzw-input", this["_sendCmdInput"]["type"] = "text", this["_sendCmdInput"]["placeholder"] = "例如: ItemService.openBox", _0x4ca177["appendChild"](this["_sendCmdInput"]);
      const _0x4d9906 = document["createElement"]("div");
      _0x4d9906["className"] = "xyzw-input-label", _0x4d9906["textContent"] = "消息体 (JSON)", _0x4ca177["appendChild"](_0x4d9906), this["_sendBodyInput"] = document["createElement"]("textarea"), this["_sendBodyInput"]["className"] = "xyzw-input xyzw-textarea", this["_sendBodyInput"]["placeholder"] = '{"key": "value"}', _0x4ca177["appendChild"](this["_sendBodyInput"]);
      const _0x3691d6 = document["createElement"]("button");
      return _0x3691d6["className"] = "xyzw-btn xyzw-btn-primary", _0x3691d6["textContent"] = "\u53d1\u9001", _0x3691d6["style"]["alignSelf"] = "flex-start", _0x3691d6["addEventListener"]("click", () => {
        this["_handleSend"]();
      }), _0x4ca177["appendChild"](_0x3691d6), this["_sendMsgEl"] = document["createElement"]("div"), this["_sendMsgEl"]["className"] = "xyzw-send-msg", _0x4ca177["appendChild"](this["_sendMsgEl"]), _0x54a878["appendChild"](_0x4ca177), _0x54a878;
    }
    ["_handleSend"]() {
      this["_showSendMsg"]("", "");
      const _0xe2ed88 = this["_sendCmdInput"]["value"]["trim"](),
        _0x3c0b1d = this["_sendBodyInput"]["value"]["trim"]();
      if (!_0xe2ed88) return void this["_showSendMsg"]("请输入命令名称", "error");
      let _0x2d2775;
      try {
        _0x2d2775 = JSON["parse"](_0x3c0b1d || "{}");
      } catch (_0x2e9b2f) {
        return void this["_showSendMsg"]("JSON 格式不合法: " + _0x2e9b2f["message"], "error");
      }
      this["_messageSender"]["send"](_0xe2ed88, _0x2d2775) ? this["_showSendMsg"]("发送成功 ✓", "success") : this["_showSendMsg"]("发送失败，WebSocket 连接不可用", "error");
    }
    ["_showSendMsg"](_0x4065df, _0x5706ad) {
      this["_sendMsgEl"] && (this["_sendMsgEl"]["textContent"] = _0x4065df, this["_sendMsgEl"]["className"] = "xyzw-send-msg", "error" === _0x5706ad ? this["_sendMsgEl"]["classList"]["add"]("xyzw-send-msg-error") : "success" === _0x5706ad && this["_sendMsgEl"]["classList"]["add"]("xyzw-send-msg-success"));
    }
    ["_createDictTab"]() {
      const _0x303427 = document["createElement"]("div");
      _0x303427["className"] = "xyzw-tab-content";
      const _0x235ad4 = document["createElement"]("div");
      _0x235ad4["className"] = "xyzw-settings", this["_dictInfoEl"] = document["createElement"]("div"), this["_dictInfoEl"]["className"] = "xyzw-dict-info", this["_dictInfoEl"]["textContent"] = "当前字典: 0 条协议记录", _0x235ad4["appendChild"](this["_dictInfoEl"]);
      const _0x5c74f5 = document["createElement"]("div");
      _0x5c74f5["className"] = "xyzw-dict-btn-row", this["_dictFileInput"] = document["createElement"]("input"), this["_dictFileInput"]["type"] = "file", this["_dictFileInput"]["style"]["display"] = "none", this["_dictFileInput"]["addEventListener"]("change", _0x41d59d => {
        this["_handleDictImport"](_0x41d59d);
      }), _0x5c74f5["appendChild"](this["_dictFileInput"]);
      const _0x3d3bf6 = document["createElement"]("button");
      _0x3d3bf6["className"] = "xyzw-btn xyzw-btn-primary", _0x3d3bf6["textContent"] = "导入字典", _0x3d3bf6["addEventListener"]("click", () => {
        this["_dictFileInput"]["click"]();
      }), _0x5c74f5["appendChild"](_0x3d3bf6);
      const _0x5c4ca5 = document["createElement"]("button");
      _0x5c4ca5["className"] = "xyzw-btn xyzw-btn-secondary", _0x5c4ca5["textContent"] = "导出字典", _0x5c4ca5["addEventListener"]("click", () => {
        this["_handleDictExport"]();
      }), _0x5c74f5["appendChild"](_0x5c4ca5);
      const _0x575645 = document["createElement"]("button");
      _0x575645["className"] = "xyzw-btn xyzw-btn-secondary", _0x575645["textContent"] = "同步备注", _0x575645["addEventListener"]("click", () => {
        this["_handleSyncNotesToDict"]();
      }), _0x5c74f5["appendChild"](_0x575645);
      const _0x35cd52 = document["createElement"]("button");
      _0x35cd52["className"] = "xyzw-btn xyzw-btn-secondary", _0x35cd52["style"]["color"] = "#fa8c16", _0x35cd52["textContent"] = "清空字典", _0x35cd52["addEventListener"]("click", () => {
        const _0x554cbb = this["_configManager"]["getDictSize"]();
        0x0 !== _0x554cbb ? confirm("确定清空全部 " + _0x554cbb + " 条字典数据？") && (this["_configManager"]["clearDictionary"](), this["_updateDictUI"](), this["_renderDictList"](), this["_showDictMsg"]("字典已清空", "success")) : this["_showDictMsg"]("字典已为空", "error");
      }), _0x5c74f5["appendChild"](_0x35cd52), _0x235ad4["appendChild"](_0x5c74f5), this["_dictMsgEl"] = document["createElement"]("div"), this["_dictMsgEl"]["className"] = "xyzw-dict-msg", _0x235ad4["appendChild"](this["_dictMsgEl"]);
      const _0x4e843a = document["createElement"]("div");
      _0x4e843a["className"] = "xyzw-dict-list-header", _0x4e843a["textContent"] = "▶ 字典列表";
      let _0x44242d = !0x1;
      return this["_dictListEl"] = document["createElement"]("div"), this["_dictListEl"]["className"] = "xyzw-dict-list", this["_dictListEl"]["style"]["display"] = "none", _0x4e843a["addEventListener"]("click", () => {
        _0x44242d = !_0x44242d, this["_dictListEl"]["style"]["display"] = _0x44242d ? "block" : "none", _0x4e843a["textContent"] = (_0x44242d ? "\u25bc" : "\u25b6") + " 字典列表", _0x44242d && this["_renderDictList"]();
      }), _0x235ad4["appendChild"](_0x4e843a), _0x235ad4["appendChild"](this["_dictListEl"]), _0x303427["appendChild"](_0x235ad4), this["_updateDictUI"](), _0x303427;
    }
    ["_createSettingsTab"]() {
      const _0x116269 = document["createElement"]("div");
      _0x116269["className"] = "xyzw-tab-content";
      const _0x39f729 = document["createElement"]("div");
      _0x39f729["className"] = "xyzw-settings";
      const _0x3cae88 = document["createElement"]("div");
      _0x3cae88["className"] = "xyzw-settings-section";
      const _0xca1164 = document["createElement"]("div");
      _0xca1164["className"] = "xyzw-settings-title", _0xca1164["textContent"] = "📂 下载路径", _0x3cae88["appendChild"](_0xca1164), this["_dlPathDisplayEl"] = document["createElement"]("div"), this["_dlPathDisplayEl"]["style"]["cssText"] = "font-size:12px;color:#999;margin-bottom:8px;", this["_updateDlPathDisplay"](), _0x3cae88["appendChild"](this["_dlPathDisplayEl"]);
      const _0x12373b = document["createElement"]("div");
      _0x12373b["className"] = "xyzw-dict-btn-row";
      const _0x5c6485 = document["createElement"]("button");
      _0x5c6485["className"] = "xyzw-btn xyzw-btn-primary", _0x5c6485["textContent"] = "选择目录", _0x5c6485["addEventListener"]("click", async () => {
        try {
          const _0x18359c = ["showDirectoryPicker: " + typeof window["showDirectoryPicker"], "showSaveFilePicker: " + typeof window["showSaveFilePicker"], "showOpenFilePicker: " + typeof window["showOpenFilePicker"], "FileSystemHandle: " + typeof window["FileSystemHandle"], "userAgent: " + navigator["userAgent"]];
          if ("function" != typeof window["showDirectoryPicker"]) return void alert("环境检测结果:\n\n" + _0x18359c["join"]("\x0a") + "\n\n该环境不支持 showDirectoryPicker");
          const _0x4e4aa3 = await window["showDirectoryPicker"]();
          this["_downloadDirHandle"] = _0x4e4aa3, this["_updateDlPathDisplay"](), this["_showDlPathMsg"]("目录已选择", "success");
        } catch (_0x21372f) {
          alert("选择目录出错:\n\n类型: " + _0x21372f["name"] + "\n信息: " + _0x21372f["message"] + "\x0a\x0a" + _0x21372f["stack"]), "AbortError" !== _0x21372f["name"] && this["_showDlPathMsg"]("选择目录失败: " + _0x21372f["message"], "error");
        }
      }), _0x12373b["appendChild"](_0x5c6485);
      const _0x407aad = document["createElement"]("button");
      _0x407aad["className"] = "xyzw-btn xyzw-btn-secondary", _0x407aad["textContent"] = "使用默认", _0x407aad["addEventListener"]("click", () => {
        this["_downloadDirHandle"] = null, this["_updateDlPathDisplay"](), this["_showDlPathMsg"]("已恢复默认下载路径", "success");
      }), _0x12373b["appendChild"](_0x407aad), _0x3cae88["appendChild"](_0x12373b), this["_dlPathMsgEl"] = document["createElement"]("div"), this["_dlPathMsgEl"]["className"] = "xyzw-dict-msg", _0x3cae88["appendChild"](this["_dlPathMsgEl"]), _0x39f729["appendChild"](_0x3cae88);
      const _0x5992ae = document["createElement"]("div");
      _0x5992ae["className"] = "xyzw-settings-section";
      const _0x5007e8 = document["createElement"]("div");
      _0x5007e8["className"] = "xyzw-settings-title", _0x5007e8["textContent"] = "📦 配置导出/导入", _0x5992ae["appendChild"](_0x5007e8);
      const _0x111e1e = document["createElement"]("div");
      _0x111e1e["style"]["cssText"] = "font-size:12px;color:#999;margin-bottom:8px;", _0x111e1e["textContent"] = "导出/导入完整配置（包含黑名单、备注、字典）", _0x5992ae["appendChild"](_0x111e1e);
      const _0x3e31bf = document["createElement"]("div");
      _0x3e31bf["className"] = "xyzw-dict-btn-row";
      const _0x96d9bd = document["createElement"]("button");
      _0x96d9bd["className"] = "xyzw-btn xyzw-btn-primary", _0x96d9bd["textContent"] = "导出配置", _0x96d9bd["addEventListener"]("click", () => {
        this["_handleExportConfig"]();
      }), _0x3e31bf["appendChild"](_0x96d9bd), this["_cfgFileInput"] = document["createElement"]("input"), this["_cfgFileInput"]["type"] = "file", this["_cfgFileInput"]["style"]["display"] = "none", this["_cfgFileInput"]["addEventListener"]("change", _0x2c9929 => {
        this["_handleImportConfig"](_0x2c9929);
      }), _0x3e31bf["appendChild"](this["_cfgFileInput"]);
      const _0x190db0 = document["createElement"]("button");
      _0x190db0["className"] = "xyzw-btn xyzw-btn-secondary", _0x190db0["textContent"] = "导入配置", _0x190db0["addEventListener"]("click", () => {
        this["_cfgFileInput"]["click"]();
      }), _0x3e31bf["appendChild"](_0x190db0), _0x5992ae["appendChild"](_0x3e31bf), this["_cfgMsgEl"] = document["createElement"]("div"), this["_cfgMsgEl"]["className"] = "xyzw-dict-msg", _0x5992ae["appendChild"](this["_cfgMsgEl"]), _0x39f729["appendChild"](_0x5992ae);
      const _0x4b7e1b = document["createElement"]("div");
      _0x4b7e1b["className"] = "xyzw-settings-section";
      const _0x4d1c32 = document["createElement"]("div");
      _0x4d1c32["className"] = "xyzw-settings-title", _0x4d1c32["textContent"] = "🚫 黑名单管理", _0x4b7e1b["appendChild"](_0x4d1c32);
      const _0x2e7663 = document["createElement"]("div");
      _0x2e7663["className"] = "xyzw-blacklist-input-row", this["_blacklistInput"] = document["createElement"]("input"), this["_blacklistInput"]["className"] = "xyzw-input", this["_blacklistInput"]["type"] = "text", this["_blacklistInput"]["placeholder"] = "输入要屏蔽的命令名称", _0x2e7663["appendChild"](this["_blacklistInput"]);
      const _0x128075 = document["createElement"]("button");
      return _0x128075["className"] = "xyzw-btn xyzw-btn-primary", _0x128075["textContent"] = "\u6dfb\u52a0", _0x128075["addEventListener"]("click", () => {
        this["_handleAddBlacklist"]();
      }), _0x2e7663["appendChild"](_0x128075), _0x4b7e1b["appendChild"](_0x2e7663), this["_blacklistListEl"] = document["createElement"]("div"), this["_blacklistListEl"]["className"] = "xyzw-blacklist-list", _0x4b7e1b["appendChild"](this["_blacklistListEl"]), _0x39f729["appendChild"](_0x4b7e1b), _0x116269["appendChild"](_0x39f729), this["_renderBlacklist"](), _0x116269;
    }
    ["_handleAddBlacklist"]() {
      const _0x485203 = this["_blacklistInput"]["value"]["trim"]();
      _0x485203 && (this["_configManager"]["addToBlacklist"](_0x485203), this["_blacklistInput"]["value"] = "", this["_renderBlacklist"](), this["updateLogList"]());
    }
    ["_handleRemoveBlacklist"](_0x461085) {
      this["_configManager"]["removeFromBlacklist"](_0x461085), this["_renderBlacklist"](), this["updateLogList"]();
    }
    ["_renderBlacklist"]() {
      if (!this["_blacklistListEl"]) return;
      this["_blacklistListEl"]["textContent"] = "", this["_configManager"]["getBlacklist"]()["forEach"](_0x39e10a => {
        const _0x139c67 = document["createElement"]("div");
        _0x139c67["className"] = "xyzw-blacklist-item";
        const _0xb09267 = document["createElement"]("span");
        _0xb09267["className"] = "xyzw-blacklist-item-name", _0xb09267["textContent"] = _0x39e10a, _0x139c67["appendChild"](_0xb09267);
        const _0x55ada0 = document["createElement"]("button");
        _0x55ada0["className"] = "xyzw-blacklist-del-btn", _0x55ada0["textContent"] = "\u5220\u9664", _0x55ada0["addEventListener"]("click", () => {
          this["_handleRemoveBlacklist"](_0x39e10a);
        }), _0x139c67["appendChild"](_0x55ada0), this["_blacklistListEl"]["appendChild"](_0x139c67);
      });
    }
    ["_handleExportConfig"]() {
      const _0x15de87 = this["_configManager"]["exportConfigJson"](),
        _0x195230 = new Blob([_0x15de87], {
          type: "application/json;charset=utf-8"
        }),
        _0x2c1bc9 = "咸鱼监控_配置_" + this["_buildBeijingTimeTag"]() + ".json";
      this["_saveFile"](_0x195230, _0x2c1bc9)["then"](_0x30dea0 => {
        _0x30dea0 && this["_showCfgMsg"]("配置已导出", "success");
      })["catch"](_0x5fe1fe => {
        console["error"]("[MonitorUI] 导出配置失败:", _0x5fe1fe), this["_showCfgMsg"]("导出失败", "error");
      });
    }
    ["_handleImportConfig"](_0x460dd8) {
      const _0x56f52c = _0x460dd8["target"]["files"] && _0x460dd8["target"]["files"][0x0];
      if (!_0x56f52c) return;
      this["_cfgFileInput"]["value"] = "";
      const _0x16e4f9 = new FileReader();
      _0x16e4f9["onload"] = () => {
        const _0x2c02d5 = this["_configManager"]["importConfig"](_0x16e4f9["result"], !0x1);
        if (_0x2c02d5["error"]) return void this["_showCfgMsg"]("导入失败: " + _0x2c02d5["error"], "error");
        const _0x5cdd07 = [];
        _0x2c02d5["blacklistAdded"] > 0x0 && _0x5cdd07["push"]("黑名单+" + _0x2c02d5["blacklistAdded"]), _0x2c02d5["notesAdded"] > 0x0 && _0x5cdd07["push"]("备注+" + _0x2c02d5["notesAdded"]), _0x2c02d5["notesUpdated"] > 0x0 && _0x5cdd07["push"]("备注更新" + _0x2c02d5["notesUpdated"]), _0x2c02d5["dictAdded"] > 0x0 && _0x5cdd07["push"]("字典+" + _0x2c02d5["dictAdded"]), _0x2c02d5["dictUpdated"] > 0x0 && _0x5cdd07["push"]("字典更新" + _0x2c02d5["dictUpdated"]), 0x0 === _0x5cdd07["length"] ? this["_showCfgMsg"]("导入完成，无新增数据（已存在）", "success") : this["_showCfgMsg"]("导入完成: " + _0x5cdd07["join"](",\x20"), "success"), this["_renderBlacklist"](), this["updateLogList"]();
      }, _0x16e4f9["onerror"] = () => {
        this["_showCfgMsg"]("读取文件失败", "error");
      }, _0x16e4f9["readAsText"](_0x56f52c, "UTF-8");
    }
    ["_showCfgMsg"](_0xf06917, _0x197d89) {
      this["_cfgMsgEl"] && (this["_cfgMsgEl"]["textContent"] = _0xf06917, this["_cfgMsgEl"]["className"] = "xyzw-dict-msg", "error" === _0x197d89 ? this["_cfgMsgEl"]["classList"]["add"]("xyzw-dict-msg-error") : "success" === _0x197d89 && this["_cfgMsgEl"]["classList"]["add"]("xyzw-dict-msg-success"), clearTimeout(this["_cfgMsgTimer"]), this["_cfgMsgTimer"] = setTimeout(() => {
        this["_cfgMsgEl"] && (this["_cfgMsgEl"]["textContent"] = "");
      }, 0xbb8));
    }
    ["_showDlPathMsg"](_0x1ff20e, _0x2c2a35) {
      this["_dlPathMsgEl"] && (this["_dlPathMsgEl"]["textContent"] = _0x1ff20e, this["_dlPathMsgEl"]["className"] = "xyzw-dict-msg", "error" === _0x2c2a35 ? this["_dlPathMsgEl"]["classList"]["add"]("xyzw-dict-msg-error") : "success" === _0x2c2a35 && this["_dlPathMsgEl"]["classList"]["add"]("xyzw-dict-msg-success"), clearTimeout(this["_dlPathMsgTimer"]), this["_dlPathMsgTimer"] = setTimeout(() => {
        this["_dlPathMsgEl"] && (this["_dlPathMsgEl"]["textContent"] = "");
      }, 0xbb8));
    }
    ["_updateDlPathDisplay"]() {
      this["_dlPathDisplayEl"] && (this["_downloadDirHandle"] ? this["_dlPathDisplayEl"]["textContent"] = "当前目录: " + this["_downloadDirHandle"]["name"] : this["_dlPathDisplayEl"]["textContent"] = "当前: 系统默认下载路径");
    }
    ["_handleDictImport"](_0x380cd7) {
      const _0x208531 = _0x380cd7["target"]["files"] && _0x380cd7["target"]["files"][0x0];
      if (!_0x208531) return;
      this["_dictFileInput"]["value"] = "";
      const _0x3a5acf = new FileReader();
      _0x3a5acf["onload"] = () => {
        const _0x4aeaed = _0x24efb1["parse"](_0x208531["name"], _0x3a5acf["result"]);
        if (_0x4aeaed["error"]) return void this["_showDictMsg"]("导入失败: " + _0x4aeaed["error"], "error");
        if (0x0 === Object["keys"](_0x4aeaed["entries"])["length"]) return void this["_showDictMsg"]("文件中未找到有效的字典条目", "error");
        const _0x47676a = this["_configManager"]["importDictionary"](_0x4aeaed["entries"], !0x1);
        this["_showDictMsg"]("导入完成: 新增 " + _0x47676a["added"] + "\x20\u6761" + (_0x47676a["updated"] > 0x0 ? ", 更新 " + _0x47676a["updated"] + "\x20\u6761" : "") + (_0x47676a["skipped"] > 0x0 ? ", 跳过 " + _0x47676a["skipped"] + " 条(已存在)" : ""), "success"), this["_updateDictUI"]();
      }, _0x3a5acf["onerror"] = () => {
        this["_showDictMsg"]("读取文件失败", "error");
      }, _0x3a5acf["readAsText"](_0x208531, "UTF-8");
    }
    ["_handleDictExport"]() {
      const _0x5e4df5 = this["_configManager"]["getDictionary"](),
        _0x4c7eb6 = Object["keys"](_0x5e4df5)["length"];
      if (0x0 === _0x4c7eb6) return void this["_showDictMsg"]("字典为空，无内容可导出", "error");
      const _0x4e2d6f = this["_configManager"]["exportDictionaryJson"](),
        _0x3aaa45 = new Blob([_0x4e2d6f], {
          type: "application/json;charset=utf-8"
        }),
        _0x52e13f = "咸鱼监控_字典_" + this["_buildBeijingTimeTag"]() + ".json";
      this["_saveFile"](_0x3aaa45, _0x52e13f)["then"](_0x404227 => {
        _0x404227 && this["_showDictMsg"]("已导出 " + _0x4c7eb6 + " 条字典数据", "success");
      })["catch"](_0x55e7ed => {
        console["error"]("[MonitorUI] 导出字典失败:", _0x55e7ed), this["_showDictMsg"]("导出失败", "error");
      });
    }
    ["_handleSyncNotesToDict"]() {
      if (0x0 === this["_configManager"]["getNotedCmds"]()["length"]) return void this["_showDictMsg"]("暂无备注可同步", "error");
      const _0x44dc23 = this["_configManager"]["syncNotesToDictionary"](!0x1);
      this["_showDictMsg"]("同步完成: 新增 " + _0x44dc23["added"] + "\x20\u6761" + (_0x44dc23["updated"] > 0x0 ? ", 更新 " + _0x44dc23["updated"] + "\x20\u6761" : "") + (0x0 === _0x44dc23["added"] && 0x0 === _0x44dc23["updated"] ? " (所有备注已在字典中)" : ""), "success"), this["_updateDictUI"]();
    }
    ["_showDictMsg"](_0xef55b, _0x23d2e6) {
      this["_dictMsgEl"] && (this["_dictMsgEl"]["textContent"] = _0xef55b, this["_dictMsgEl"]["className"] = "xyzw-dict-msg", "error" === _0x23d2e6 ? this["_dictMsgEl"]["classList"]["add"]("xyzw-dict-msg-error") : "success" === _0x23d2e6 && this["_dictMsgEl"]["classList"]["add"]("xyzw-dict-msg-success"), clearTimeout(this["_dictMsgTimer"]), this["_dictMsgTimer"] = setTimeout(() => {
        this["_dictMsgEl"] && (this["_dictMsgEl"]["textContent"] = "");
      }, 0xbb8));
    }
    ["_updateDictUI"]() {
      if (this["_dictInfoEl"]) {
        const _0x5d2752 = this["_configManager"]["getDictSize"]();
        this["_dictInfoEl"]["textContent"] = "当前字典: " + _0x5d2752 + " 条协议记录";
      }
    }
    ["_renderDictList"]() {
      if (!this["_dictListEl"]) return;
      this["_dictListEl"]["textContent"] = "";
      const _0x31696d = this["_configManager"]["getDictionary"](),
        _0x51e8de = Object["entries"](_0x31696d);
      if (0x0 === _0x51e8de["length"]) {
        const _0x1b7e6a = document["createElement"]("div");
        return _0x1b7e6a["className"] = "xyzw-dict-empty", _0x1b7e6a["textContent"] = "字典为空，请导入字典文件或同步备注", void this["_dictListEl"]["appendChild"](_0x1b7e6a);
      }
      _0x51e8de["sort"]((_0x4ab086, _0x27f6fc) => _0x4ab086[0x0]["localeCompare"](_0x27f6fc[0x0]));
      for (const [_0x187027, _0x3fc9c1] of _0x51e8de) {
        const _0x2fe8a0 = document["createElement"]("div");
        _0x2fe8a0["className"] = "xyzw-dict-item";
        const _0x3aa2aa = document["createElement"]("span");
        _0x3aa2aa["className"] = "xyzw-dict-item-cmd", _0x3aa2aa["textContent"] = _0x187027, _0x2fe8a0["appendChild"](_0x3aa2aa);
        const _0x1882d0 = document["createElement"]("span");
        _0x1882d0["className"] = "xyzw-dict-item-note", _0x1882d0["textContent"] = _0x3fc9c1, _0x2fe8a0["appendChild"](_0x1882d0);
        const _0x4ab0ee = document["createElement"]("button");
        _0x4ab0ee["className"] = "xyzw-blacklist-del-btn", _0x4ab0ee["textContent"] = "\u5220\u9664", _0x4ab0ee["addEventListener"]("click", () => {
          this["_configManager"]["removeDictEntry"](_0x187027), this["_renderDictList"](), this["_updateDictUI"]();
        }), _0x2fe8a0["appendChild"](_0x4ab0ee), this["_dictListEl"]["appendChild"](_0x2fe8a0);
      }
    }
    async ["_saveFile"](_0x37b8c3, _0x1c4e81) {
      const _0x578cfa = URL["createObjectURL"](_0x37b8c3);
      try {
        const _0x10766c = document["body"] || document["documentElement"],
          _0x3189a9 = document["createElement"]("a");
        return _0x3189a9["href"] = _0x578cfa, _0x3189a9["download"] = _0x1c4e81, _0x3189a9["style"]["display"] = "none", _0x10766c["appendChild"](_0x3189a9), _0x3189a9["click"](), setTimeout(() => {
          URL["revokeObjectURL"](_0x578cfa), _0x3189a9["remove"]();
        }, 0xc8), !0x0;
      } catch (_0x2f54ee) {
        return window["open"](_0x578cfa, "_blank"), setTimeout(() => URL["revokeObjectURL"](_0x578cfa), 0x1388), !0x0;
      }
    }
    async ["_loadJSZip"]() {
      return _0x284c7f["_JSZip"] ? _0x284c7f["_JSZip"] : "undefined" != typeof JSZip ? (_0x284c7f["_JSZip"] = JSZip, JSZip) : new Promise(_0x1f7ac6 => {
        const _0x453841 = document["createElement"]("script");
        _0x453841["src"] = new URL("vendor/jszip.min.js", window.__XYZW_ENHANCEMENT_ASSET_BASE__).href, _0x453841["onload"] = () => {
          "undefined" != typeof JSZip ? (_0x284c7f["_JSZip"] = JSZip, _0x1f7ac6(JSZip)) : (console["error"]("[MonitorUI] JSZip 加载后未找到全局变量"), _0x1f7ac6(null));
        }, _0x453841["onerror"] = () => {
          console["error"]("[MonitorUI] JSZip CDN 加载失败"), _0x1f7ac6(null);
        }, (document["head"] || document["documentElement"])["appendChild"](_0x453841);
      });
    }
    ["_buildExportEntry"](_0x319018) {
      const _0x1806ce = _0x319018["cmd"] ? this["_configManager"]["getNote"](_0x319018["cmd"]) : null,
        _0x2aa271 = _0x319018["cmd"] ? this["_configManager"]["getDictEntry"](_0x319018["cmd"]) : null,
        _0x404e1e = _0x4cbbe4["analyze"](_0x319018["cmd"], _0x319018["body"], _0x319018["direction"], _0x1806ce, _0x2aa271);
      return {
        direction: "send" === _0x319018["direction"] ? "\u8bf7\u6c42" : "\u54cd\u5e94",
        cmd: _0x319018["cmd"],
        note: _0x1806ce || null,
        dictNote: _0x2aa271 || null,
        analysis: _0x404e1e || null,
        timestamp: _0x319018["timestamp"],
        time: this["_formatTime"](_0x319018["timestamp"]),
        duration: _0x319018["duration"] || 0x0,
        rawSize: _0x319018["rawSize"] || 0x0,
        seq: _0x319018["seq"],
        ack: _0x319018["ack"],
        body: _0x319018["body"]
      };
    }
    ["_buildLogFileName"](_0x5abf89) {
      const _0x5e707e = "send" === _0x5abf89["direction"] ? "\u8bf7\u6c42" : "\u54cd\u5e94",
        _0x603e28 = this["_buildBeijingTimeTag"]();
      return "咸鱼监控_" + (_0x5abf89["cmd"] || "unknown") + "_" + _0x5e707e + "_" + _0x603e28 + ".json";
    }
    ["_buildBeijingTimeTag"]() {
      const _0x4e3813 = new Date(),
        _0x302678 = _0x4e3813["getTime"]() + 0xea60 * _0x4e3813["getTimezoneOffset"](),
        _0x462ac4 = new Date(_0x302678 + 0x1b77400);
      return _0x462ac4["getFullYear"]() + "-" + String(_0x462ac4["getMonth"]() + 0x1)["padStart"](0x2, "0") + "-" + String(_0x462ac4["getDate"]())["padStart"](0x2, "0") + "_" + String(_0x462ac4["getHours"]())["padStart"](0x2, "0") + "-" + String(_0x462ac4["getMinutes"]())["padStart"](0x2, "0") + "-" + String(_0x462ac4["getSeconds"]())["padStart"](0x2, "0");
    }
    ["_togglePanel"]() {
      this["_panelVisible"] = !this["_panelVisible"], this["_panelVisible"] ? (this["_panel"]["classList"]["add"]("xyzw-visible"), this["_floatBtn"] && (this["_floatBtn"]["style"]["display"] = "none"), this["updateLogList"]()) : (this["_panel"]["classList"]["remove"]("xyzw-visible"), this["_expandedLogId"] = null, this["_floatBtn"] && (this["_floatBtn"]["style"]["display"] = "flex"));
    }
    ["_switchTab"](_0x4e91db) {
      this["_activeTab"] = _0x4e91db, Object["keys"](this["_tabBtns"])["forEach"](_0x3d347a => {
        _0x3d347a === _0x4e91db ? this["_tabBtns"][_0x3d347a]["classList"]["add"]("xyzw-active") : this["_tabBtns"][_0x3d347a]["classList"]["remove"]("xyzw-active");
      }), Object["keys"](this["_tabContents"])["forEach"](_0x684254 => {
        _0x684254 === _0x4e91db ? this["_tabContents"][_0x684254]["classList"]["add"]("xyzw-visible") : this["_tabContents"][_0x684254]["classList"]["remove"]("xyzw-visible");
      }), "monitor" === _0x4e91db && this["updateLogList"](), "settings" === _0x4e91db && this["_renderBlacklist"](), "dict" === _0x4e91db && this["_updateDictUI"]();
    }
    ["_formatTime"](_0x5458fc) {
      if (!_0x5458fc) return "--:--:--";
      const _0x386a17 = new Date(_0x5458fc);
      return String(_0x386a17["getHours"]())["padStart"](0x2, "0") + ":" + String(_0x386a17["getMinutes"]())["padStart"](0x2, "0") + ":" + String(_0x386a17["getSeconds"]())["padStart"](0x2, "0");
    }
    ["_startAutoRefresh"]() {
      this["_refreshTimer"] = setInterval(() => {
        this["updateCount"](this["_logManager"]["getCount"]()), this["_panelVisible"] && "monitor" === this["_activeTab"] && this["updateLogList"]();
      }, 0x3e8);
    }
  }
  let _0x407b79, _0x1306a7, _0x1380e2;
  try {
    _0x407b79 = new _0x370db5(), _0x1306a7 = new _0x1586e1(), _0x1380e2 = new _0x1d369a((_0x524137, _0x5e8043) => {
      try {
        const _0x1dd8d7 = _0xd0d183["parse"](_0x5e8043, _0x524137);
        _0x1dd8d7 && (_0x1306a7["add"](_0x1dd8d7), _0x4cbbe4["recordEntry"](_0x1dd8d7));
      } catch (_0x230fdf) {
        console["error"]("[咸鱼之王监控] 消息解析异常:", _0x230fdf);
      }
    }), _0x1380e2["install"](), console["log"]("[咸鱼之王监控] WebSocket Hook 已安装");
  } catch (_0x4daca6) {
    console["error"]("[咸鱼之王监控] Hook 安装失败:", _0x4daca6);
  }
  let _0x25482b = !0x1;
  function _0x5cdeb9() {
    if (!_0x25482b && document["body"]) {
      _0x25482b = !0x0;
      try {
        const _0x2b4c43 = new _0x477669(() => _0x1380e2 ? _0x1380e2["getActiveWebSocket"]() : null);
        new _0x181892({
          logManager: _0x1306a7,
          configManager: _0x407b79,
          messageSender: _0x2b4c43,
          wsHook: _0x1380e2
        })["create"](), console["log"]("[咸鱼之王监控] UI 初始化完成");
      } catch (_0x59d6e7) {
        console["error"]("[咸鱼之王监控] UI 初始化失败:", _0x59d6e7);
      }
    }
  }
  "loading" === document["readyState"] ? document["addEventListener"]("DOMContentLoaded", _0x5cdeb9, {
    once: !0x0
  }) : _0x5cdeb9();
}();
