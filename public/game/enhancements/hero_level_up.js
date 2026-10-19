// Adapted from the supplied 2.57.2 game enhancement asset.
// Static strings decoded; obfuscator guards removed; frame access stays local.
!function () {
  "use strict";
  var _0x583713 = void 0x0 !== _0x583713 ? _0x583713 : window;
  new class {
    constructor() {
      this["version"] = "1.0.0", this["panel"] = null, this["heroUpgradeSelectedId"] = null, this["heroUpgradeShouldStop"] = !0x1, this["heroUpgradeMode"] = "level", this["LEVEL_ORDER_MAP"] = [{
        level: 0x64,
        order: 0x1
      }, {
        level: 0xc8,
        order: 0x2
      }, {
        level: 0x12c,
        order: 0x3
      }, {
        level: 0x1f4,
        order: 0x4
      }, {
        level: 0x2bc,
        order: 0x5
      }, {
        level: 0x384,
        order: 0x6
      }, {
        level: 0x44c,
        order: 0x7
      }, {
        level: 0x514,
        order: 0x8
      }, {
        level: 0x5dc,
        order: 0x9
      }, {
        level: 0x708,
        order: 0xa
      }, {
        level: 0x834,
        order: 0xb
      }, {
        level: 0x960,
        order: 0xc
      }, {
        level: 0xaf0,
        order: 0xd
      }, {
        level: 0xc80,
        order: 0xe
      }, {
        level: 0xe10,
        order: 0xf
      }, {
        level: 0xfa0,
        order: 0x10
      }, {
        level: 0x1194,
        order: 0x11
      }, {
        level: 0x1388,
        order: 0x12
      }, {
        level: 0x157c,
        order: 0x13
      }], this["heroOptionsList"] = [], this["init"]();
    }
    ["init"]() {
      "loading" === document["readyState"] ? document["addEventListener"]("DOMContentLoaded", () => this["injectUI"]()) : this["injectUI"](), this["startInjection"]();
    }
    get ["HERO_DICT"]() {
      return {
        0x65: {
          name: "司马懿",
          type: "\u9b4f\u56fd"
        },
        0x66: {
          name: "\u90ed\u5609",
          type: "\u9b4f\u56fd"
        },
        0x67: {
          name: "\u5173\u7fbd",
          type: "\u8700\u56fd"
        },
        0x68: {
          name: "诸葛亮",
          type: "\u8700\u56fd"
        },
        0x69: {
          name: "\u5468\u745c",
          type: "\u5434\u56fd"
        },
        0x6a: {
          name: "太史慈",
          type: "\u5434\u56fd"
        },
        0x6b: {
          name: "\u5415\u5e03",
          type: "\u7fa4\u96c4"
        },
        0x6c: {
          name: "\u534e\u4f57",
          type: "\u7fa4\u96c4"
        },
        0x6d: {
          name: "\u7504\u59ec",
          type: "\u9b4f\u56fd"
        },
        0x6e: {
          name: "黄月英",
          type: "\u8700\u56fd"
        },
        0x6f: {
          name: "\u5b59\u7b56",
          type: "\u5434\u56fd"
        },
        0x70: {
          name: "\u8d3e\u8be9",
          type: "\u7fa4\u96c4"
        },
        0x71: {
          name: "\u66f9\u4ec1",
          type: "\u9b4f\u56fd"
        },
        0x72: {
          name: "\u59dc\u7ef4",
          type: "\u8700\u56fd"
        },
        0x73: {
          name: "\u5b59\u575a",
          type: "\u5434\u56fd"
        },
        0x74: {
          name: "公孙瓒",
          type: "\u7fa4\u96c4"
        },
        0x75: {
          name: "\u5178\u97e6",
          type: "\u9b4f\u56fd"
        },
        0x76: {
          name: "\u8d75\u4e91",
          type: "\u8700\u56fd"
        },
        0x77: {
          name: "\u5927\u4e54",
          type: "\u5434\u56fd"
        },
        0x78: {
          name: "\u5f20\u89d2",
          type: "\u7fa4\u96c4"
        },
        0x79: {
          name: "红鲁肃",
          type: "\u5434\u56fd"
        },
        0xc9: {
          name: "\u5f90\u6643",
          type: "\u9b4f\u56fd"
        },
        0xca: {
          name: "\u8340\u5f67",
          type: "\u9b4f\u56fd"
        },
        0xcb: {
          name: "小典韦",
          type: "\u9b4f\u56fd"
        },
        0xcc: {
          name: "\u5f20\u98de",
          type: "\u8700\u56fd"
        },
        0xcd: {
          name: "小赵云",
          type: "\u8700\u56fd"
        },
        0xce: {
          name: "\u5e9e\u7edf",
          type: "\u8700\u56fd"
        },
        0xcf: {
          name: "\u9c81\u8083",
          type: "\u5434\u56fd"
        },
        0xd0: {
          name: "\u9646\u900a",
          type: "\u5434\u56fd"
        },
        0xd1: {
          name: "\u7518\u5b81",
          type: "\u5434\u56fd"
        },
        0xd2: {
          name: "\u8c82\u8749",
          type: "\u7fa4\u96c4"
        },
        0xd3: {
          name: "\u8463\u5353",
          type: "\u7fa4\u96c4"
        },
        0xd4: {
          name: "小张角",
          type: "\u7fa4\u96c4"
        },
        0xd5: {
          name: "\u5f20\u8fbd",
          type: "\u9b4f\u56fd"
        },
        0xd6: {
          name: "夏侯惇",
          type: "\u9b4f\u56fd"
        },
        0xd7: {
          name: "\u8bb8\u891a",
          type: "\u9b4f\u56fd"
        },
        0xd8: {
          name: "夏侯渊",
          type: "\u9b4f\u56fd"
        },
        0xd9: {
          name: "\u9b4f\u5ef6",
          type: "\u8700\u56fd"
        },
        0xda: {
          name: "\u9ec4\u5fe0",
          type: "\u8700\u56fd"
        },
        0xdb: {
          name: "\u9a6c\u8d85",
          type: "\u8700\u56fd"
        },
        0xdc: {
          name: "\u9a6c\u5cb1",
          type: "\u8700\u56fd"
        },
        0xdd: {
          name: "\u5415\u8499",
          type: "\u5434\u56fd"
        },
        0xde: {
          name: "\u9ec4\u76d6",
          type: "\u5434\u56fd"
        },
        0xdf: {
          name: "蔡文姬",
          type: "\u9b4f\u56fd"
        },
        0xe0: {
          name: "\u5c0f\u4e54",
          type: "\u5434\u56fd"
        },
        0xe1: {
          name: "\u8881\u7ecd",
          type: "\u7fa4\u96c4"
        },
        0xe2: {
          name: "\u534e\u96c4",
          type: "\u7fa4\u96c4"
        },
        0xe3: {
          name: "\u989c\u826f",
          type: "\u7fa4\u96c4"
        },
        0xe4: {
          name: "\u6587\u4e11",
          type: "\u7fa4\u96c4"
        },
        0x12d: {
          name: "\u5468\u6cf0",
          type: "\u5434\u56fd"
        },
        0x12e: {
          name: "\u8bb8\u6538",
          type: "\u9b4f\u56fd"
        },
        0x12f: {
          name: "\u4e8e\u7981",
          type: "\u9b4f\u56fd"
        },
        0x130: {
          name: "张星彩",
          type: "\u8700\u56fd"
        },
        0x131: {
          name: "关银屏",
          type: "\u8700\u56fd"
        },
        0x132: {
          name: "\u5173\u5e73",
          type: "\u8700\u56fd"
        },
        0x133: {
          name: "\u7a0b\u666e",
          type: "\u5434\u56fd"
        },
        0x134: {
          name: "\u5f20\u662d",
          type: "\u5434\u56fd"
        },
        0x135: {
          name: "\u9646\u7ee9",
          type: "\u5434\u56fd"
        },
        0x136: {
          name: "吕玲绮",
          type: "\u7fa4\u96c4"
        },
        0x137: {
          name: "\u6f58\u51e4",
          type: "\u7fa4\u96c4"
        },
        0x138: {
          name: "邢道荣",
          type: "\u7fa4\u96c4"
        },
        0x139: {
          name: "祝融夫人",
          type: "\u7fa4\u96c4"
        },
        0x13a: {
          name: "\u5b5f\u83b7",
          type: "\u7fa4\u96c4"
        }
      };
    }
    ["getHeroName"](_0x1e4859) {
      if (this["HERO_DICT"][_0x1e4859] && this["HERO_DICT"][_0x1e4859]["name"]) return this["HERO_DICT"][_0x1e4859]["name"];
      try {
        const _0x4619a0 = _0x583713["__require"]("data-index");
        if (_0x4619a0 && _0x4619a0["Config_hero_hero"] && _0x4619a0["Config_hero_hero"]["get"](_0x1e4859)) return _0x4619a0["Config_hero_hero"]["get"](_0x1e4859)["name"] || "武将" + _0x1e4859;
      } catch (_0x19bafb) {}
      return "武将" + _0x1e4859;
    }
    ["showTip"](_0x5729ae, _0x4ad976 = "info") {
      try {
        if ("function" == typeof _0x583713["__require"]) {
          const _0x5edccf = _0x583713["__require"]("TipsManager");
          if (_0x5edccf && "function" == typeof _0x5edccf["SHOW_TIP"]) return void _0x5edccf["SHOW_TIP"](_0x5729ae);
        }
        console["log"]("[武将升级助手] " + _0x5729ae);
      } catch (_0x2a4be3) {
        console["log"]("[武将升级助手] " + _0x5729ae);
      }
    }
    ["judgeLevelUpgrade"](_0x55e437, _0x95e4b2, _0x40274e) {
      for (const _0xf8ad4e of this["LEVEL_ORDER_MAP"]) if (_0x40274e !== _0xf8ad4e["order"] && _0x55e437 <= _0xf8ad4e["level"] && _0xf8ad4e["level"] < _0x55e437 + _0x95e4b2) return _0xf8ad4e["level"];
      return !0x1;
    }
    ["canOrderUpgrade"](_0x500074, _0x488f0c) {
      for (const _0x4a54ce of this["LEVEL_ORDER_MAP"]) if (_0x4a54ce["order"] === _0x488f0c + 0x1) return _0x500074 >= _0x4a54ce["level"];
      return !0x1;
    }
    ["getFromMap"](_0x5cb4cf, _0x1a1d5e) {
      return "function" == typeof _0x5cb4cf["get"] ? _0x5cb4cf["get"](_0x1a1d5e) : void 0x0 !== _0x5cb4cf[_0x1a1d5e] ? _0x5cb4cf[_0x1a1d5e] : _0x5cb4cf[String(_0x1a1d5e)] || null;
    }
    ["getMapKeys"](_0x52127e) {
      if ("function" == typeof _0x52127e["keys"]) {
        const _0x21e104 = [];
        for (const _0x102c50 of _0x52127e["keys"]()) _0x21e104["push"](_0x102c50);
        return _0x21e104;
      }
      return Object["keys"](_0x52127e);
    }
    ["refreshHeroUpgradeData"]() {
      const _0x2216aa = document["getElementById"]("hero-up-select");
      if (_0x2216aa) try {
        const _0x25dca7 = _0x583713["__require"]("ServerData");
        if (!_0x25dca7 || !_0x25dca7["ROLE"] || !_0x25dca7["ROLE"]["heroes"]) return void this["showTip"]("游戏数据未就绪", "warning");
        const _0xe97dfd = _0x25dca7["ROLE"]["heroes"],
          _0x516e33 = this["getMapKeys"](_0xe97dfd);
        this["heroOptionsList"] = _0x516e33["map"](_0x56056e => this["getFromMap"](_0xe97dfd, _0x56056e))["filter"](_0x27ec60 => _0x27ec60 && _0x27ec60["level"] <= 0x1770)["map"](_0x366c98 => {
          const _0x1b89db = void 0x0 !== _0x366c98["battleTeamSlot"] ? _0x366c98["battleTeamSlot"] : _0x366c98["slot"],
            _0x2b54bd = null != _0x1b89db && -0x1 !== _0x1b89db;
          return {
            originObj: _0x366c98,
            heroId: _0x366c98["heroId"],
            level: _0x366c98["level"] || 0x0,
            isOnBattle: _0x2b54bd
          };
        })["sort"]((_0x1622cc, _0xb503c5) => _0x1622cc["isOnBattle"] && !_0xb503c5["isOnBattle"] ? -0x1 : !_0x1622cc["isOnBattle"] && _0xb503c5["isOnBattle"] ? 0x1 : _0xb503c5["level"] - _0x1622cc["level"])["map"](_0x4fd148 => {
          const _0x23c6f1 = this["getHeroName"](_0x4fd148["heroId"]),
            _0x71087f = _0x4fd148["isOnBattle"] ? "【上阵】" : "";
          return {
            heroId: _0x4fd148["heroId"],
            name: _0x71087f + _0x23c6f1,
            level: _0x4fd148["level"]
          };
        }), _0x2216aa["innerHTML"] = '<option value="">请选择要升级的武将...</option>', this["heroOptionsList"]["forEach"](_0x4e7310 => {
          const _0x3febda = document["createElement"]("option");
          _0x3febda["value"] = _0x4e7310["heroId"], _0x3febda["textContent"] = _0x4e7310["name"] + " (当前: " + _0x4e7310["level"] + "级)", _0x2216aa["appendChild"](_0x3febda);
        }), document["getElementById"]("hero-up-info")["style"]["display"] = "none", this["heroUpgradeSelectedId"] = null;
      } catch (_0x21e0a6) {
        console["error"](_0x21e0a6);
      }
    }
    ["selectHeroForUpgrade"](_0x4e329d) {
      const _0x50e499 = document["getElementById"]("hero-up-info");
      if (!_0x4e329d) return _0x50e499["style"]["display"] = "none", void (this["heroUpgradeSelectedId"] = null);
      this["heroUpgradeSelectedId"] = parseInt(_0x4e329d);
      const _0x29068d = _0x583713["__require"]("ServerData"),
        _0xd5bff2 = this["getFromMap"](_0x29068d["ROLE"]["heroes"], this["heroUpgradeSelectedId"]);
      _0xd5bff2 ? (_0x50e499["style"]["display"] = "block", this["updateDisplay"](_0xd5bff2)) : _0x50e499["style"]["display"] = "none";
    }
    ["updateDisplay"](_0x5b80a9) {
      document["getElementById"]("hero-up-level")["textContent"] = (_0x5b80a9["level"] || 0x0) + "/6000", document["getElementById"]("hero-up-attack")["textContent"] = _0x5b80a9["attack"] || 0x0, document["getElementById"]("hero-up-speed")["textContent"] = _0x5b80a9["speed"] || 0x0, this["updateOrderButtonState"](_0x5b80a9);
    }
    ["updateOrderButtonState"](_0x1186fa) {
      const _0x147235 = document["getElementById"]("hero-up-order-btn"),
        _0x579020 = document["getElementById"]("hero-up-tip");
      if (!_0x147235 || !_0x579020 || !_0x1186fa) return;
      const _0x5e610f = _0x1186fa["level"] || 0x0,
        _0x47a08a = _0x1186fa["order"] || 0x0,
        _0x5010df = this["canOrderUpgrade"](_0x5e610f, _0x47a08a);
      if (_0x147235["disabled"] = !_0x5010df, _0x5e610f >= 0x1770) _0x579020["textContent"] = "武将已满级", _0x579020["style"]["color"] = "#34c759";else {
        if (_0x5010df) _0x579020["textContent"] = "当前" + _0x5e610f + "级已可进阶", _0x579020["style"]["color"] = "#ff9500";else {
          const _0x470f44 = this["LEVEL_ORDER_MAP"]["find"](_0x3e63a3 => _0x3e63a3["order"] > _0x47a08a);
          _0x579020["textContent"] = _0x470f44 ? "下一进阶等级: " + _0x470f44["level"] + "级" : "已达最高阶", _0x579020["style"]["color"] = "#6b7280";
        }
      }
    }
    ["switchUpgradeMode"](_0x2448d7) {
      this["heroUpgradeMode"] = _0x2448d7;
      const _0x5798a1 = "level" === _0x2448d7;
      document["getElementById"]("hero-up-level-row")["style"]["display"] = _0x5798a1 ? "block" : "none", document["getElementById"]("hero-up-speed-row")["style"]["display"] = _0x5798a1 ? "none" : "block", document["getElementById"]("hero-up-mode-level")["classList"]["toggle"]("active", _0x5798a1), document["getElementById"]("hero-up-mode-speed")["classList"]["toggle"]("active", !_0x5798a1);
    }
    ["updateUpgradeButtons"](_0x4662ac) {
      document["getElementById"]("hero-up-auto-btn")["disabled"] = _0x4662ac, document["getElementById"]("hero-up-stop-btn")["style"]["display"] = _0x4662ac ? "flex" : "none";
    }
    ["stopHeroUpgrade"]() {
      this["heroUpgradeShouldStop"] = !0x0, this["showTip"]("正在停止升级...", "info");
    }
    async ["doHeroUpgradeOrder"]() {
      if (!this["heroUpgradeSelectedId"]) return;
      const _0x46e3fa = _0x583713["__require"]("ServerData"),
        _0x62b70e = _0x583713["__require"]("data-index")["HeroService"],
        _0x1864f5 = this["getFromMap"](_0x46e3fa["ROLE"]["heroes"], this["heroUpgradeSelectedId"]);
      if (_0x1864f5 && this["canOrderUpgrade"](_0x1864f5["level"] || 0x0, _0x1864f5["order"] || 0x0)) try {
        document["getElementById"]("hero-up-order-btn")["disabled"] = !0x0;
        const _0x1ba1c7 = await _0x62b70e["heroUpgradeOrder"]({
          heroId: this["heroUpgradeSelectedId"]
        });
        if (_0x1ba1c7 && 0x0 === _0x1ba1c7["code"]) {
          this["showTip"]("进阶成功", "success"), await new Promise(_0x760e58 => setTimeout(_0x760e58, 0x1f4));
          const _0x6c01fc = this["getFromMap"](_0x583713["__require"]("ServerData")["ROLE"]["heroes"], this["heroUpgradeSelectedId"]);
          _0x6c01fc && this["updateDisplay"](_0x6c01fc);
        } else this["showTip"]("进阶失败: " + (_0x1ba1c7?.["error"] || _0x1ba1c7?.["msg"] || "未知错误"), "error");
      } catch (_0x12aa0a) {
        this["showTip"]("进阶异常: " + _0x12aa0a["message"], "error");
      } finally {
        const _0x3c4283 = this["getFromMap"](_0x583713["__require"]("ServerData")["ROLE"]["heroes"], this["heroUpgradeSelectedId"]);
        _0x3c4283 && this["updateOrderButtonState"](_0x3c4283);
      }
    }
    async ["doHeroAutoUpgradeByMode"]() {
      "speed" === this["heroUpgradeMode"] ? await this["doHeroUpgradeToSpeed"]() : await this["doHeroAutoUpgradeToLevel"]();
    }
    async ["doHeroAutoUpgradeToLevel"]() {
      const _0x5d2a66 = this["heroUpgradeSelectedId"],
        _0x296ce3 = parseInt(document["getElementById"]("hero-up-target-level")["value"], 0xa);
      if (!_0x5d2a66) return void this["showTip"]("请先选择武将", "warning");
      const _0x2a73f4 = _0x583713["__require"]("ServerData"),
        _0x463f41 = _0x583713["__require"]("data-index"),
        _0x5ba422 = _0x463f41["HeroService"];
      let _0xc92a2f = this["getFromMap"](_0x2a73f4["ROLE"]["heroes"], _0x5d2a66);
      if (!_0xc92a2f) return;
      let _0x19fb63 = _0xc92a2f["level"] || 0x0;
      if (_0x296ce3) {
        this["heroUpgradeShouldStop"] = !0x1, this["updateUpgradeButtons"](!0x0);
        try {
          if (_0x19fb63 > _0x296ce3) {
            this["showTip"]("等级已超标，正在执行重生流程...", "info");
            const _0x61138 = void 0x0 !== _0xc92a2f["battleTeamSlot"] ? _0xc92a2f["battleTeamSlot"] : _0xc92a2f["slot"],
              _0x5a1d4b = null != _0x61138 && -0x1 !== _0x61138,
              _0x3d1a50 = _0xc92a2f["artifactId"] || 0x0,
              _0x1f35fa = _0xc92a2f["pearlId"] || 0x0;
            if (_0x5a1d4b && (this["showTip"]("下阵武将...", "info"), "function" == typeof _0x5ba422["sendGoBackBattle"] ? await _0x5ba422["sendGoBackBattle"](_0x61138) : "function" == typeof _0x5ba422["goBackBattle"] && (await _0x5ba422["goBackBattle"]({
              slot: _0x61138
            })), await new Promise(_0x4bae28 => setTimeout(_0x4bae28, 0x258))), this["showTip"]("重生武将...", "info"), await _0x5ba422["rebirth"]({
              heroId: _0x5d2a66
            }), await new Promise(_0x58ff24 => setTimeout(_0x58ff24, 0x258)), _0x5a1d4b && (this["showTip"]("重新上阵...", "info"), "function" == typeof _0x5ba422["goIntoBattle"] && (await _0x5ba422["goIntoBattle"]({
              slot: _0x61138,
              heroId: _0x5d2a66
            })), await new Promise(_0x4a00f9 => setTimeout(_0x4a00f9, 0x258))), _0x3d1a50 > 0x0 && _0x1f35fa > 0x0) {
              this["showTip"]("恢复鱼灵装备...", "info");
              try {
                const _0x7d89c1 = _0x463f41["ArtifactService"];
                await _0x7d89c1["load"]({
                  heroId: _0x5d2a66,
                  itemId: _0x3d1a50,
                  targetHeroId: -0x1,
                  pearlId: _0x1f35fa
                }), await new Promise(_0x23d2f0 => setTimeout(_0x23d2f0, 0x190));
              } catch (_0x1164cf) {
                console["warn"]("[武将升级助手] 恢复鱼灵失败:", _0x1164cf), this["showTip"]("鱼灵恢复失败，请手动装备", "warning");
              }
            }
            _0xc92a2f = this["getFromMap"](_0x583713["__require"]("ServerData")["ROLE"]["heroes"], _0x5d2a66), _0x19fb63 = _0xc92a2f["level"] || 0x0, this["updateDisplay"](_0xc92a2f), this["showTip"]("重生完毕，开始自动升级...", "info");
          } else {
            if (_0x19fb63 === _0x296ce3) return void this["showTip"]("已达到目标等级", "success");
          }
          let _0x3b3051 = _0xc92a2f["order"] || 0x0;
          const _0x4fb2ba = [0x32, 0xa, 0x5, 0x1];
          let _0x41213e = 0x0;
          for (; _0x19fb63 < _0x296ce3 && !this["heroUpgradeShouldStop"];) {
            let _0x3e95e9 = !0x1;
            if (this["canOrderUpgrade"](_0x19fb63, _0x3b3051)) {
              const _0x234c98 = await _0x5ba422["heroUpgradeOrder"]({
                heroId: _0x5d2a66
              });
              if (!_0x234c98 || 0x0 !== _0x234c98["code"] && _0x234c98["error"]) throw new Error(_0x234c98?.["error"] || "进阶失败");
              {
                await new Promise(_0x4139d5 => setTimeout(_0x4139d5, 0x190));
                const _0xccef67 = _0x19fb63,
                  _0x2279d4 = _0x3b3051;
                _0xc92a2f = this["getFromMap"](_0x583713["__require"]("ServerData")["ROLE"]["heroes"], _0x5d2a66), _0x19fb63 = _0xc92a2f["level"] || 0x0, _0x3b3051 = _0xc92a2f["order"] || 0x0, this["updateDisplay"](_0xc92a2f), _0x3e95e9 = _0x19fb63 !== _0xccef67 || _0x3b3051 !== _0x2279d4;
              }
            } else {
              const _0x37a327 = _0x296ce3 - _0x19fb63;
              let _0x5191be = 0x1;
              for (const _0x48da9b of _0x4fb2ba) if (_0x48da9b <= _0x37a327) {
                if (!0x1 === this["judgeLevelUpgrade"](_0x19fb63, _0x48da9b, _0x3b3051)) {
                  _0x5191be = _0x48da9b;
                  break;
                }
              }
              const _0x4bef79 = await _0x5ba422["heroUpgradeLevel"]({
                heroId: _0x5d2a66,
                upgradeNum: _0x5191be
              });
              if (!_0x4bef79 || 0x0 !== _0x4bef79["code"] && _0x4bef79["error"]) throw new Error(_0x4bef79?.["error"] || "升级失败，可能金币不足");
              {
                await new Promise(_0x27ae80 => setTimeout(_0x27ae80, 0x190));
                const _0x467082 = _0x19fb63;
                _0xc92a2f = this["getFromMap"](_0x583713["__require"]("ServerData")["ROLE"]["heroes"], _0x5d2a66), _0x19fb63 = _0xc92a2f["level"] || 0x0, _0x3b3051 = _0xc92a2f["order"] || 0x0, this["updateDisplay"](_0xc92a2f), _0x3e95e9 = _0x19fb63 !== _0x467082, _0x19fb63 % 0x32 != 0x0 && _0x19fb63 !== _0x296ce3 || this["showTip"]("升级进度: " + _0x19fb63 + "/" + _0x296ce3, "info");
              }
            }
            if (_0x3e95e9) _0x41213e = 0x0;else {
              if (_0x41213e++, _0x41213e >= 0x3) throw new Error("连续多次无进展，可能资源不足，已停止");
            }
          }
          this["showTip"](this["heroUpgradeShouldStop"] ? "升级已停止" : "自动升级完成", "success");
        } catch (_0x169dbc) {
          this["showTip"]("升级中断: " + _0x169dbc["message"], "error");
        } finally {
          this["heroUpgradeShouldStop"] = !0x1, this["updateUpgradeButtons"](!0x1);
        }
      } else this["showTip"]("请输入目标等级", "warning");
    }
    async ["doHeroUpgradeToSpeed"]() {
      const _0xb45cd0 = this["heroUpgradeSelectedId"],
        _0x348e24 = parseInt(document["getElementById"]("hero-up-target-speed")["value"], 0xa);
      if (!_0xb45cd0) return void this["showTip"]("请先选择武将", "warning");
      const _0x4a3198 = _0x583713["__require"]("ServerData"),
        _0x481939 = _0x583713["__require"]("data-index"),
        _0x40fa7d = _0x481939["HeroService"];
      let _0x161397 = this["getFromMap"](_0x4a3198["ROLE"]["heroes"], _0xb45cd0);
      if (!_0x161397) return;
      let _0x5b156d = _0x161397["speed"] || 0x0;
      if (_0x348e24) {
        this["heroUpgradeShouldStop"] = !0x1, this["updateUpgradeButtons"](!0x0);
        try {
          let _0x489b67 = _0x161397["level"] || 0x0;
          if (_0x5b156d > _0x348e24) {
            this["showTip"]("当前速度已超标，正在执行重生流程...", "info");
            const _0x40109b = void 0x0 !== _0x161397["battleTeamSlot"] ? _0x161397["battleTeamSlot"] : _0x161397["slot"],
              _0x3ebe6d = null != _0x40109b && -0x1 !== _0x40109b,
              _0xc8ca42 = _0x161397["artifactId"] || 0x0,
              _0x1be85a = _0x161397["pearlId"] || 0x0;
            if (_0x3ebe6d && (this["showTip"]("下阵武将...", "info"), "function" == typeof _0x40fa7d["sendGoBackBattle"] ? await _0x40fa7d["sendGoBackBattle"](_0x40109b) : "function" == typeof _0x40fa7d["goBackBattle"] && (await _0x40fa7d["goBackBattle"]({
              slot: _0x40109b
            })), await new Promise(_0x5d4d99 => setTimeout(_0x5d4d99, 0x258))), this["showTip"]("重生武将...", "info"), await _0x40fa7d["rebirth"]({
              heroId: _0xb45cd0
            }), await new Promise(_0x269e82 => setTimeout(_0x269e82, 0x258)), _0x3ebe6d && (this["showTip"]("重新上阵...", "info"), "function" == typeof _0x40fa7d["goIntoBattle"] && (await _0x40fa7d["goIntoBattle"]({
              slot: _0x40109b,
              heroId: _0xb45cd0
            })), await new Promise(_0x23938b => setTimeout(_0x23938b, 0x258))), _0xc8ca42 > 0x0 && _0x1be85a > 0x0) {
              this["showTip"]("恢复鱼灵装备...", "info");
              try {
                const _0x5726b5 = _0x481939["ArtifactService"];
                await _0x5726b5["load"]({
                  heroId: _0xb45cd0,
                  itemId: _0xc8ca42,
                  targetHeroId: -0x1,
                  pearlId: _0x1be85a
                }), await new Promise(_0x177c69 => setTimeout(_0x177c69, 0x190));
              } catch (_0x4e38e5) {
                console["warn"]("[武将升级助手] 恢复鱼灵失败:", _0x4e38e5), this["showTip"]("鱼灵恢复失败，请手动装备", "warning");
              }
            }
            _0x161397 = this["getFromMap"](_0x583713["__require"]("ServerData")["ROLE"]["heroes"], _0xb45cd0), _0x489b67 = _0x161397["level"] || 0x0, _0x5b156d = _0x161397["speed"] || 0x0, this["updateDisplay"](_0x161397), this["showTip"]("重生完毕，开始自动调节速度...", "info");
          } else {
            if (_0x5b156d === _0x348e24) return void this["showTip"]("已达到目标速度", "success");
            if (_0x489b67 >= 0x1770) return void this["showTip"]("武将已满级", "warning");
          }
          const _0x5f1742 = 1.3,
            _0x7e4e9a = [0x32, 0xa, 0x5, 0x1],
            _0x1203fd = 0x14;
          let _0x4b42ec = [],
            _0x5bb77f = 0x0,
            _0x5de1a4 = !0x0,
            _0x1a0abe = _0x161397["order"] || 0x0;
          for (; _0x5b156d < _0x348e24 && _0x489b67 < 0x1770 && !this["heroUpgradeShouldStop"];) {
            if (this["canOrderUpgrade"](_0x489b67, _0x1a0abe)) {
              const _0xecb3a4 = await _0x40fa7d["heroUpgradeOrder"]({
                heroId: _0xb45cd0
              });
              if (!_0xecb3a4 || 0x0 !== _0xecb3a4["code"] && _0xecb3a4["error"]) throw new Error(_0xecb3a4?.["error"] || "进阶失败");
              await new Promise(_0x5f2a34 => setTimeout(_0x5f2a34, 0x190)), _0x161397 = this["getFromMap"](_0x583713["__require"]("ServerData")["ROLE"]["heroes"], _0xb45cd0), _0x489b67 = _0x161397["level"] || 0x0, _0x1a0abe = _0x161397["order"] || 0x0, _0x5b156d = _0x161397["speed"] || 0x0, this["updateDisplay"](_0x161397);
              continue;
            }
            const _0xe4cc7d = _0x348e24 - _0x5b156d;
            let _0x2841bd = 0x1;
            if (_0x5de1a4) _0x2841bd = 0x1;else {
              if (_0x5bb77f > 0x0) for (const _0x1ebc78 of _0x7e4e9a) {
                const _0x500d0b = _0x1ebc78 * _0x5bb77f * _0x5f1742,
                  _0x5af04b = !0x1 !== this["judgeLevelUpgrade"](_0x489b67, _0x1ebc78, _0x1a0abe);
                if (_0x500d0b <= _0xe4cc7d && !_0x5af04b) {
                  _0x2841bd = _0x1ebc78;
                  break;
                }
              } else for (const _0x5da0b6 of [0xa, 0x5, 0x1]) {
                if (!(!0x1 !== this["judgeLevelUpgrade"](_0x489b67, _0x5da0b6, _0x1a0abe))) {
                  if (0xa === _0x5da0b6 && _0xe4cc7d > 0x1f4) {
                    _0x2841bd = 0xa;
                    break;
                  }
                  if (0x5 === _0x5da0b6 && _0xe4cc7d > 0x64) {
                    _0x2841bd = 0x5;
                    break;
                  }
                  if (0x1 === _0x5da0b6) {
                    _0x2841bd = 0x1;
                    break;
                  }
                }
              }
            }
            const _0x3b4a88 = _0x5b156d,
              _0x487977 = await _0x40fa7d["heroUpgradeLevel"]({
                heroId: _0xb45cd0,
                upgradeNum: _0x2841bd
              });
            if (!_0x487977 || 0x0 !== _0x487977["code"] && _0x487977["error"]) throw new Error(_0x487977?.["error"] || "升级失败");
            {
              await new Promise(_0x1fac5b => setTimeout(_0x1fac5b, 0x190)), _0x161397 = this["getFromMap"](_0x583713["__require"]("ServerData")["ROLE"]["heroes"], _0xb45cd0), _0x489b67 = _0x161397["level"] || 0x0, _0x1a0abe = _0x161397["order"] || 0x0;
              const _0xfffd30 = _0x161397["speed"] || 0x0;
              if (_0x5de1a4 = !0x1, _0xfffd30 > _0x3b4a88) {
                const _0x53c4ee = _0xfffd30 - _0x3b4a88;
                if (_0x5b156d = _0xfffd30, _0x2841bd > 0x0) {
                  _0x4b42ec["push"]({
                    levels: _0x2841bd,
                    gain: _0x53c4ee
                  }), _0x4b42ec["length"] > _0x1203fd && (_0x4b42ec = _0x4b42ec["slice"](-_0x1203fd));
                  const _0xa08e5e = _0x4b42ec["filter"](_0x5b5d8b => _0x5b5d8b["levels"] > 0x0);
                  _0xa08e5e["length"] > 0x0 && (_0x5bb77f = _0xa08e5e["reduce"]((_0x27ed64, _0x560d51) => _0x27ed64 + _0x560d51["gain"] / _0x560d51["levels"], 0x0) / _0xa08e5e["length"]);
                }
              }
              this["updateDisplay"](_0x161397), this["showTip"]("调速进度: 速度 " + _0x5b156d + "/" + _0x348e24, "info");
            }
          }
          const _0x4bb9d9 = _0x5b156d >= _0x348e24 ? "达到/超出目标速度 " + _0x5b156d + " (等级" + _0x489b67 + ")" : "已满级";
          this["showTip"](this["heroUpgradeShouldStop"] ? "升级已停止" : _0x4bb9d9, "success");
        } catch (_0x4ff496) {
          this["showTip"]("按速升级中断: " + _0x4ff496["message"], "error");
        } finally {
          this["heroUpgradeShouldStop"] = !0x1, this["updateUpgradeButtons"](!0x1);
        }
      } else this["showTip"]("请输入目标速度", "warning");
    }
    ["injectUI"]() {
      const _0x2226c3 = document["createElement"]("style");
      _0x2226c3["textContent"] = "\n                .hu-root {\n                    position: fixed;\n                    right: 20px;\n                    bottom: 20px;\n                    z-index: 99999;\n                    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;\n                }\n                .hu-toggle {\n                    width: 50px;\n                    height: 50px;\n                    border-radius: 25px;\n                    background: #ff9500;\n                    color: white;\n                    display: none;\n                    align-items: center;\n                    justify-content: center;\n                    box-shadow: 0 4px 12px rgba(0,0,0,0.3);\n                    cursor: pointer;\n                    user-select: none;\n                }\n                .hu-panel {\n                    display: none;\n                    position: absolute;\n                    bottom: 60px;\n                    right: 0;\n                    width: 300px;\n                    background: rgba(255, 255, 255, 0.95);\n                    backdrop-filter: blur(20px);\n                    -webkit-backdrop-filter: blur(20px);\n                    border-radius: 20px;\n                    box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);\n                    padding: 20px;\n                    color: #000;\n                    border: 1px solid rgba(0,0,0,0.05);\n                }\n                .hu-panel.open {\n                    display: block;\n                }\n                .hu-header {\n                    font-size: 15px;\n                    font-weight: 600;\n                    margin-bottom: 16px;\n                    display: flex;\n                    justify-content: space-between;\n                    align-items: center;\n                    letter-spacing: -0.5px;\n                }\n                .hu-header-actions {\n                    display: flex;\n                    gap: 8px;\n                }\n                .hu-icon-btn {\n                    background: rgba(120, 120, 128, 0.16);\n                    border: none;\n                    width: 28px;\n                    height: 28px;\n                    border-radius: 50%;\n                    cursor: pointer;\n                    display: flex;\n                    align-items: center;\n                    justify-content: center;\n                    color: #000;\n                    transition: all 0.2s;\n                }\n                .hu-icon-btn:hover { background: rgba(120, 120, 128, 0.24); }\n                .hu-icon-btn:active { transform: scale(0.95); }\n                .hu-icon-btn svg { width: 14px; height: 14px; fill: currentColor; }\n                \n                .hu-select {\n                    width: 100%;\n                    padding: 10px 14px;\n                    border-radius: 12px;\n                    border: none;\n                    background: rgba(120, 120, 128, 0.12);\n                    font-size: 13px;\n                    color: #000;\n                    margin-bottom: 16px;\n                    outline: none;\n                    appearance: none;\n                    -webkit-appearance: none;\n                    cursor: pointer;\n                }\n                .hu-info {\n                    background: rgba(0, 122, 255, 0.08);\n                    color: #007AFF;\n                    padding: 12px 16px;\n                    border-radius: 12px;\n                    margin-bottom: 16px;\n                    font-size: 13px;\n                    line-height: 1.6;\n                }\n                .hu-info p { margin: 6px 0; display:flex; justify-content:space-between; align-items: center;}\n                .hu-tabs {\n                    display: flex;\n                    margin-bottom: 16px;\n                    background: rgba(120, 120, 128, 0.12);\n                    border-radius: 10px;\n                    padding: 2px;\n                }\n                .hu-tab {\n                    flex: 1;\n                    text-align: center;\n                    padding: 8px 0;\n                    font-size: 13px;\n                    font-weight: 500;\n                    cursor: pointer;\n                    border-radius: 8px;\n                    color: rgba(60, 60, 67, 0.6);\n                    transition: all 0.2s;\n                }\n                .hu-tab.active {\n                    background: white;\n                    color: #000;\n                    box-shadow: 0 3px 8px rgba(0,0,0,0.12), 0 3px 1px rgba(0,0,0,0.04);\n                }\n                .hu-row { margin-bottom: 16px; }\n                .hu-input {\n                    width: 100%;\n                    padding: 12px 14px;\n                    border: none;\n                    background: rgba(120, 120, 128, 0.12);\n                    border-radius: 12px;\n                    font-size: 13px;\n                    color: #000;\n                    box-sizing: border-box;\n                    outline: none;\n                    transition: background 0.2s;\n                }\n                .hu-input:focus { background: rgba(120, 120, 128, 0.16); }\n                .hu-btn {\n                    width: 100%;\n                    padding: 12px;\n                    border: none;\n                    border-radius: 12px;\n                    background: #007aff;\n                    color: white;\n                    font-weight: 600;\n                    font-size: 14px;\n                    cursor: pointer;\n                    transition: all 0.2s;\n                    display: flex;\n                    align-items: center;\n                    justify-content: center;\n                    gap: 6px;\n                }\n                .hu-btn:hover { opacity: 0.9; }\n                .hu-btn:active { transform: scale(0.97); }\n                .hu-btn:disabled { background: #d1d1d6; color: #fff; cursor: not-allowed; opacity: 1; transform: none; }\n                .hu-btn-order { background: rgba(52, 199, 89, 1); width: auto; padding: 6px 12px; border-radius: 8px; font-size: 12px; }\n                .hu-btn-auto { background: rgba(52, 199, 89, 1); margin-top: 8px; }\n                .hu-btn-stop { background: #ff3b30; display: none; margin-top: 8px; }\n                .hu-tip { font-size: 11px; text-align: right; opacity: 0.8;}\n            ", document["head"]["appendChild"](_0x2226c3);
      const _0x511e2f = document["createElement"]("div");
      _0x511e2f["className"] = "hu-root", _0x511e2f["innerHTML"] = '\n                <div class="hu-toggle" id="hu-toggle">武将<br>升级</div>\n                <div class="hu-panel" id="hu-panel">\n                    <div class="hu-header">\n                        <span>武将升级助手</span>\n                        <div class="hu-header-actions">\n                            <button class="hu-icon-btn" id="hu-refresh" title="刷新数据">\n                                <svg viewBox="0 0 1024 1024"><path d="M582.4 864H170.666667c-6.4 0-10.666667-4.266667-10.666667-10.666667V170.666667c0-6.4 4.266667-10.666667 10.666667-10.666667h309.333333V320c0 40.533333 34.133333 74.666667 74.666667 74.666667h160v38.4c0 17.066667 14.933333 32 32 32s32-14.933333 32-32V298.666667c0-8.533333-4.266667-17.066667-8.533334-23.466667l-170.666666-170.666667c-6.4-6.4-14.933333-8.533333-23.466667-8.533333H170.666667C130.133333 96 96 130.133333 96 170.666667v682.666666c0 40.533333 34.133333 74.666667 74.666667 74.666667h411.733333c17.066667 0 32-14.933333 32-32s-14.933333-32-32-32z m132.266667-550.4v17.066667H554.666667c-6.4 0-10.666667-4.266667-10.666667-10.666667V160h19.2l151.466667 153.6z"></path><path d="M866.133333 669.866667l-106.666666-106.666667c-12.8-12.8-32-12.8-44.8 0s-12.8 32 0 44.8l51.2 51.2H512c-17.066667 0-32 14.933333-32 32S494.933333 725.333333 512 725.333333h253.866667l-51.2 51.2c-12.8 12.8-12.8 32 0 44.8 6.4 6.4 14.933333 8.533333 23.466666 8.533334s17.066667-2.133333 23.466667-8.533334l106.666667-106.666666c8.533333-10.666667 8.533333-32-2.133334-44.8z"></path></svg>\n                            </button>\n                            <button class="hu-icon-btn" id="hu-close" title="关闭">\n                                <svg viewBox="0 0 1024 1024"><path d="M556.8 512L832 236.8c12.8-12.8 12.8-32 0-44.8-12.8-12.8-32-12.8-44.8 0L512 467.2l-275.2-277.333333c-12.8-12.8-32-12.8-44.8 0-12.8 12.8-12.8 32 0 44.8l275.2 277.333333-277.333333 275.2c-12.8 12.8-12.8 32 0 44.8 6.4 6.4 14.933333 8.533333 23.466666 8.533333s17.066667-2.133333 23.466667-8.533333L512 556.8 787.2 832c6.4 6.4 14.933333 8.533333 23.466667 8.533333s17.066667-2.133333 23.466666-8.533333c12.8-12.8 12.8-32 0-44.8L556.8 512z"></path></svg>\n                            </button>\n                        </div>\n                    </div>\n                    \n                    <div style="position: relative;">\n                        <select class="hu-select" id="hero-up-select">\n                            <option value="">请选择要升级的武将...</option>\n                        </select>\n                        <div style="position: absolute; right: 14px; top: 14px; pointer-events: none;">\n                            <svg width="10" height="6" viewBox="0 0 10 6" fill="none"><path d="M1 1L5 5L9 1" stroke="#000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>\n                        </div>\n                    </div>\n                    \n                    <div class="hu-info" id="hero-up-info" style="display:none;">\n                        <p><span>等级：</span><strong id="hero-up-level" style="color:#000;">-</strong></p>\n                        <p><span>攻击：</span><strong id="hero-up-attack" style="color:#000;">-</strong></p>\n                        <p><span>速度：</span><strong id="hero-up-speed" style="color:#000;">-</strong></p>\n                        <div style="display:flex; justify-content:space-between; align-items:center; margin-top:10px; padding-top:10px; border-top:1px solid rgba(0,122,255,0.1);">\n                            <div class="hu-tip" id="hero-up-tip">已达最高阶</div>\n                            <button class="hu-btn hu-btn-order" id="hero-up-order-btn">手动进阶</button>\n                        </div>\n                    </div>\n                    \n                    <div class="hu-tabs">\n                        <div class="hu-tab active" id="hero-up-mode-level">目标等级</div>\n                        <div class="hu-tab" id="hero-up-mode-speed">目标速度</div>\n                    </div>\n                    \n                    <div class="hu-row" id="hero-up-level-row">\n                        <input type="number" class="hu-input" id="hero-up-target-level" placeholder="输入目标等级 (如: 4000)" />\n                    </div>\n                    <div class="hu-row" id="hero-up-speed-row" style="display:none;">\n                        <input type="number" class="hu-input" id="hero-up-target-speed" placeholder="输入目标速度" />\n                    </div>\n                    \n                    <button class="hu-btn hu-btn-auto" id="hero-up-auto-btn">\n                        <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M5 3v18l15-9L5 3z"/></svg>\n                        开始自动升级\n                    </button>\n                    <button class="hu-btn hu-btn-stop" id="hero-up-stop-btn">\n                        <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M6 6h12v12H6z"/></svg>\n                        停止升级\n                    </button>\n                </div>\n            ', document["body"]["appendChild"](_0x511e2f), this["panel"] = _0x511e2f, this["bindEvents"]();
    }
    ["bindEvents"]() {
      document["getElementById"]("hu-toggle")["addEventListener"]("click", () => {
        const _0x409b93 = document["getElementById"]("hu-panel");
        _0x409b93["classList"]["toggle"]("open"), _0x409b93["classList"]["contains"]("open") && 0x0 === this["heroOptionsList"]["length"] && this["refreshHeroUpgradeData"]();
      }), document["getElementById"]("hu-close")["addEventListener"]("click", () => {
        const _0x5a2802 = document["getElementById"]("hu-panel");
        _0x5a2802 && _0x5a2802["classList"]["remove"]("open");
      }), document["getElementById"]("hu-refresh")["addEventListener"]("click", () => this["refreshHeroUpgradeData"]()), document["getElementById"]("hero-up-select")["addEventListener"]("change", _0x3cbb3e => this["selectHeroForUpgrade"](_0x3cbb3e["target"]["value"])), document["getElementById"]("hero-up-mode-level")["addEventListener"]("click", () => this["switchUpgradeMode"]("level")), document["getElementById"]("hero-up-mode-speed")["addEventListener"]("click", () => this["switchUpgradeMode"]("speed")), document["getElementById"]("hero-up-order-btn")["addEventListener"]("click", () => this["doHeroUpgradeOrder"]()), document["getElementById"]("hero-up-auto-btn")["addEventListener"]("click", () => this["doHeroAutoUpgradeByMode"]()), document["getElementById"]("hero-up-stop-btn")["addEventListener"]("click", () => this["stopHeroUpgrade"]());
    }
    ["startInjection"]() {
      let _0xf1935 = 0x0;
      const _0x336471 = setInterval(() => {
        if (_0xf1935++, _0xf1935 >= 0x78) {
          clearInterval(_0x336471), console["error"]("[武将升级助手] 注入超时，回退到HTML按钮");
          const _0xa55ac9 = document["getElementById"]("hu-toggle");
          return void (_0xa55ac9 && (_0xa55ac9["style"]["display"] = "flex"));
        }
        "function" == typeof _0x583713["__require"] && "object" == typeof _0x583713["fgui"] && this["tryInject"]() && (clearInterval(_0x336471), console["log"]("[武将升级助手] FairyGUI按钮注入成功"));
      }, 0x1f4);
    }
    ["tryInject"]() {
      try {
        const _0x5a1566 = _0x583713["__require"]("HeroListPanel");
        return !(!_0x5a1566 || !_0x5a1566["HeroListPanel"]) && (this["injectCustomButton"](_0x5a1566["HeroListPanel"]), !0x0);
      } catch (_0x2ab1db) {
        return console["error"]("[武将升级助手] 注入失败:", _0x2ab1db), !0x1;
      }
    }
    ["injectCustomButton"](_0x253300) {
      const _0x553ad0 = this,
        _0x5938d2 = _0x253300["prototype"]["onShow"];
      _0x253300["prototype"]["onShow"] = function () {
        if (_0x5938d2["apply"](this, arguments), !this["_heroUpgradeBtn"]) try {
          this["_addHeroUpgradeButton"](_0x553ad0);
        } catch (_0xec8ecc) {
          console["error"]("[武将升级助手] 创建按钮失败:", _0xec8ecc);
        }
      }, _0x253300["prototype"]["_addHeroUpgradeButton"] = function (_0x41327a) {
        const _0x55bc07 = _0x583713["fgui"]["UIPackage"]["createObject"]("ui_common", "BtnInfo2");
        if (!_0x55bc07) return void console["error"]("[武将升级助手] 创建BtnInfo2按钮失败");
        const _0x224ff3 = _0x55bc07["asButton"];
        _0x224ff3["setScale"](0.8, 0.8), this["ui"]["m_lord"] ? _0x224ff3["setPosition"](0x6e, this["ui"]["m_lord"]["y"] - 0x4b) : _0x224ff3["setPosition"](0x6e, 0x8), _0x224ff3["onClick"](() => {
          console["log"]("[武将升级助手] 打开升级面板");
          const _0x17396d = document["getElementById"]("hu-panel");
          _0x17396d && (_0x17396d["classList"]["toggle"]("open"), _0x17396d["classList"]["contains"]("open") && 0x0 === _0x41327a["heroOptionsList"]["length"] && _0x41327a["refreshHeroUpgradeData"]());
        }), this["ui"]["addChild"](_0x224ff3), this["_heroUpgradeBtn"] = _0x224ff3;
      };
      const _0x490a0d = _0x253300["prototype"]["onHide"];
      _0x253300["prototype"]["onHide"] = function () {
        this["_heroUpgradeBtn"] && (this["_heroUpgradeBtn"]["dispose"](), this["_heroUpgradeBtn"] = null);
        const _0x1166a8 = document["getElementById"]("hu-panel");
        _0x1166a8 && _0x1166a8["classList"]["remove"]("open"), _0x490a0d["apply"](this, arguments);
      };
    }
  }();
}();
