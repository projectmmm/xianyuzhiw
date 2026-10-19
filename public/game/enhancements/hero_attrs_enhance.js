// Adapted from the supplied 2.57.2 game enhancement asset.
// Static strings decoded; obfuscator guards removed; frame access stays local.
!function () {
  "use strict";
  const _0x75d4b3 = 0x3e8,
    _0x4e94a8 = 0x1e;
  let _0xc00bed = !0x1,
    _0x4b00ef = null,
    _0xc8d4dc = null,
    _0x45cd97 = null;
  function _0x14bc02() {
    const _0x473171 = this,
      _0x3c2708 = this["ui"],
      _0x41dd10 = this["model"]["get"](this["constructor"]["OP_HERO_ID"], 0x0),
      _0x20ad5b = this["role"]["getHeroById"](_0x41dd10);
    if (_0x20ad5b) try {
      const _0x5b13f8 = window["__require"]("Configs")["ConstantConf"],
        _0x3a4b87 = window["__require"]("LanguageExt"),
        _0x247554 = _0x5b13f8["config"]["basicBattleAttribute"] || [],
        _0x579295 = _0x5b13f8["config"]["specialBattleAttribute"] || [],
        _0xc91d28 = new Set([..._0x247554, ..._0x579295]);
      _0x20ad5b["attribute"] && "function" == typeof _0x20ad5b["attribute"]["forEach"] && _0x20ad5b["attribute"]["forEach"]((_0x207599, _0x3061dd) => {
        _0xc91d28["add"](_0x3061dd);
      });
      const _0x24a8d2 = Array["from"](_0xc91d28),
        _0x57907f = [0x5, 0x7, 0x6, 0x8],
        _0x9c086a = _0x24a8d2["filter"](_0x48ce3d => !_0x57907f["includes"](_0x48ce3d));
      _0x3c2708["m_attr"]["numItems"] = _0x57907f["length"], _0x3c2708["m_advanceAttr"]["numItems"] = _0x9c086a["length"];
      for (let _0x42b948 = 0x0; _0x42b948 < _0x57907f["length"]; _0x42b948++) {
        const _0xeec7de = _0x57907f[_0x42b948],
          _0x8e0013 = _0x3c2708["m_attr"]["getChildAt"](_0x42b948);
        if (!_0x8e0013) continue;
        const _0xac90f4 = _0x3a4b87["LanguageExt"]["getAttributeName"](_0xeec7de);
        let _0x264bdd = "";
        switch (_0xeec7de) {
          case 0x5:
            _0x264bdd = _0x20ad5b["calculateAttack"];
            break;
          case 0x7:
            _0x264bdd = _0x20ad5b["calculateDefense"];
            break;
          case 0x6:
            _0x264bdd = _0x20ad5b["calculateSpeed"];
            break;
          case 0x8:
            _0x264bdd = _0x20ad5b["calculateHp"];
        }
        _0x8e0013["m_attrName"] && _0x8e0013["m_value"] && (_0x8e0013["m_attrName"]["text"] = _0xac90f4, _0x8e0013["m_value"]["text"] = String(_0x264bdd), _0x8e0013["m_state"]["selectedPage"] = "base");
      }
      for (let _0x2cb2e5 = 0x0; _0x2cb2e5 < _0x9c086a["length"]; _0x2cb2e5++) {
        const _0x4c35de = _0x9c086a[_0x2cb2e5],
          _0x1f4397 = _0x3c2708["m_advanceAttr"]["getChildAt"](_0x2cb2e5);
        if (!_0x1f4397) continue;
        let _0x3cdc7b = _0x3a4b87["LanguageExt"]["getAttributeName"](_0x4c35de);
        0x12f === _0x4c35de && (_0x3cdc7b = "\u5b9a\u5fc3");
        let _0x1d9218,
          _0x483725 = _0x20ad5b["attribute"] ? _0x20ad5b["attribute"]["get"](_0x4c35de) : 0x0;
        null == _0x483725 && (_0x483725 = 0x0), _0x1d9218 = 0x9 === _0x4c35de ? String(Math["round"](_0x483725)) : (Math["round"](0x2710 * _0x483725) / 0x64)["toFixed"](0x1) + "%", _0x1f4397["m_attrName"] && _0x1f4397["m_value"] && (_0x1f4397["m_attrName"]["text"] = _0x3cdc7b, _0x1f4397["m_value"]["text"] = String(_0x1d9218), _0x1f4397["m_state"]["selectedPage"] = "advance");
      }
      _0x3c2708["onceClick"](this["close"], this);
    } catch (_0x43d41b) {
      _0xc8d4dc && _0xc8d4dc["call"](_0x473171);
    }
  }
  window["heroAttributeEnhancer"] = {
    restore: function () {
      try {
        const _0x2ce5f3 = window["__require"]("HeroAttributeToolTip");
        if (_0x2ce5f3) {
          const _0x58e78d = _0x2ce5f3["HeroAttributeToolTip"]["prototype"],
            _0xff838c = _0x2ce5f3["SeasonHeroAttributeToolTip"]["prototype"];
          _0x58e78d && _0xc8d4dc && (_0x58e78d["onShow"] = _0xc8d4dc, console["log"]("[英雄属性增强] 已恢复 HeroAttributeToolTip.onShow")), _0xff838c && _0x45cd97 && (_0xff838c["onShow"] = _0x45cd97, console["log"]("[英雄属性增强] 已恢复 SeasonHeroAttributeToolTip.onShow"));
        }
      } catch (_0x136a4d) {
        console["error"]("[英雄属性增强] 恢复原始方法失败:", _0x136a4d);
      }
    },
    status: function () {
      return {
        gameReady: _0xc00bed,
        hooked: null !== _0xc8d4dc
      };
    }
  }, function () {
    let _0x52548c = 0x0;
    _0x4b00ef = setInterval(() => {
      !function () {
        try {
          if ("function" != typeof window["__require"]) return !0x1;
          try {
            return !!window["__require"]("HeroAttributeToolTip");
          } catch (_0x3009e4) {
            return !0x1;
          }
        } catch (_0x428880) {
          return !0x1;
        }
      }() ? (_0x52548c++, _0x52548c > 0xa * _0x4e94a8 && clearInterval(_0x4b00ef)) : (_0xc00bed = !0x0, clearInterval(_0x4b00ef), function () {
        try {
          const _0xa92fce = window["__require"]("HeroAttributeToolTip");
          if (!_0xa92fce) return;
          const _0x1ec2f6 = _0xa92fce["HeroAttributeToolTip"]["prototype"],
            _0x4e5258 = _0xa92fce["SeasonHeroAttributeToolTip"]["prototype"];
          _0x1ec2f6 && _0x1ec2f6["onShow"] && (_0xc8d4dc = _0x1ec2f6["onShow"], _0x1ec2f6["onShow"] = _0x14bc02), _0x4e5258 && _0x4e5258["onShow"] && (_0x45cd97 = _0x4e5258["onShow"], _0x4e5258["onShow"] = _0x14bc02);
        } catch (_0x2529b9) {}
      }());
    }, _0x75d4b3);
  }();
}();
