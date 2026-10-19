// Adapted from the supplied 2.57.2 game enhancement asset.
// Static strings decoded; obfuscator guards removed; frame access stays local.
!function () {
  if (!0x1 !== window["__yunqi_skinHook"]) {
    try {
      var _0x5ef9ee = Date["now"]();
      if (window["__yunqi_skinHookInitTs"] && _0x5ef9ee - window["__yunqi_skinHookInitTs"] < 0xbb8) {
        try {
          console["log"]("[皮肤管理] 重复注入已拦截 (3s 内, dt=" + (_0x5ef9ee - window["__yunqi_skinHookInitTs"]) + "ms)");
        } catch (_0x14c570) {}
        return;
      }
      window["__yunqi_skinHookInitTs"] = _0x5ef9ee;
    } catch (_0x136b3a) {}
    if (!window["__yunqi_skinHookDone"]) {
      var _0x430b82 = "[皮肤管理]",
        _0x347d22 = {},
        _0xbc57ee = null,
        _0x7cd93 = !0x1;
      window["__yunqi_skinOverrides"] = _0x347d22, window["__yunqi_loadSkinOverrides"] = _0x241908, window["__yunqi_saveSkinOverrides"] = _0x3dd92b;
      var _0x4ec6cd = !0x1,
        _0x533bb3 = null,
        _0x57d405 = 0x0,
        _0x21a37e = 0x0,
        _0x471ea4 = !0x1,
        _0x2f6b6f = 0x0;
      !function _0x29c02a() {
        if (_0x57d405++, "function" == typeof window["__require"]) try {
          var _0x583f40 = window["__require"]("Configs"),
            _0xa4a88e = _0x583f40 && (_0x583f40["Configs"] || _0x583f40["default"]) || _0x583f40;
          if (!_0xa4a88e || !_0xa4a88e["HeroConf"]) return void (_0x57d405 < 0x78 && setTimeout(_0x29c02a, 0xc8));
          var _0x347b16 = _0xa4a88e["HeroConf"];
          if (!_0x347b16 || "function" != typeof _0x347b16["getById"]) return void (_0x57d405 < 0x78 && setTimeout(_0x29c02a, 0xc8));
          if (_0x347b16["getById"]["__skinHooked"] && _0x347b16["getById"]["__origFn"]) return _0x533bb3 = _0x347b16["getById"]["__origFn"], void (_0x4ec6cd = !0x0);
          _0x533bb3 = _0x347b16["getById"]["bind"](_0x347b16), _0x347b16["getById"] = function (_0x1e6af7) {
            var _0x34dc7a = _0x533bb3(_0x1e6af7);
            if (_0x34dc7a && _0x34dc7a["skinList"] && _0x347d22[_0x1e6af7] && !window["__yc_skinSuppress"]) {
              var _0x1529be = Object["assign"]({}, _0x34dc7a),
                _0x26e41e = _0x347d22[_0x1e6af7],
                _0x8b7f49 = _0x34dc7a["skinList"]["slice"](0x0);
              return _0x8b7f49["length"] > 0x0 && (_0x8b7f49[0x0] = _0x26e41e), _0x1529be["skinList"] = _0x8b7f49, _0x1529be;
            }
            return _0x34dc7a;
          }, _0x347b16["getById"]["__skinHooked"] = !0x0, _0x347b16["getById"]["__origFn"] = _0x533bb3, _0x4ec6cd = !0x0;
        } catch (_0xfdfab3) {
          _0x57d405 < 0x78 && setTimeout(_0x29c02a, 0x1f4);
        } else _0x57d405 < 0x78 && setTimeout(_0x29c02a, 0xc8);
      }(), function _0x28eaac() {
        if (_0x21a37e++, _0x4ec6cd && _0x533bb3) try {
          var _0x579d24 = window["ROLE"];
          if (!_0x579d24 || "function" != typeof _0x579d24["getHeroById"]) return void (_0x21a37e < 0x78 && setTimeout(_0x28eaac, 0x12c));
          if (!_0x241908()) return void (_0x21a37e < 0x78 && setTimeout(_0x28eaac, 0x12c));
          for (var _0x432944 = null, _0x598c60 = [0x65, 0x67, 0x6b, 0x6c, 0x6e, 0xc9, 0xcd, 0x12d, 0x131], _0x4e1901 = 0x0; _0x4e1901 < _0x598c60["length"] && !_0x432944; _0x4e1901++) try {
            var _0x3cdab7 = _0x579d24["getHeroById"](_0x598c60[_0x4e1901]);
            _0x3cdab7 && _0x3cdab7["skin"] && (_0x432944 = _0x3cdab7);
          } catch (_0x670668) {}
          if (!_0x432944) return void (_0x21a37e < 0x78 && setTimeout(_0x28eaac, 0x12c));
          for (var _0x3bfb21 = null, _0xba3369 = 0x0; _0xba3369 < _0x598c60["length"] && !_0x3bfb21; _0xba3369++) try {
            var _0x47729d = _0x533bb3(_0x598c60[_0xba3369]);
            _0x47729d && _0x47729d["skinList"] && (_0x3bfb21 = _0x47729d);
          } catch (_0x5ce55e) {}
          if (!_0x3bfb21) return void (_0x21a37e < 0x78 && setTimeout(_0x28eaac, 0x12c));
          var _0x53784f = window["__require"]("Configs"),
            _0x554202 = _0x53784f && (_0x53784f["Configs"] || _0x53784f["default"]) || _0x53784f;
          window["__yunqi_origSkinLists"] = window["__yunqi_origSkinLists"] || {}, window["__yunqi_origBaseSkins"] = window["__yunqi_origBaseSkins"] || {};
          var _0x572bad = 0x0,
            _0x3a7980 = 0x0,
            _0x375f64 = [];
          try {
            var _0x144c42 = _0x554202["HeroConf"],
              _0x4b8e98 = _0x144c42["_data"] || _0x144c42["_map"] || _0x144c42["datas"] || _0x144c42["_pool"];
            if (_0x4b8e98 || "function" != typeof _0x144c42["getAll"] || (_0x4b8e98 = _0x144c42["getAll"]()), _0x4b8e98) for (var _0x2ce9e6 = "function" == typeof _0x4b8e98["keys"] ? Array["from"](_0x4b8e98["keys"]()) : Object["keys"](_0x4b8e98), _0x37ee2f = 0x0; _0x37ee2f < _0x2ce9e6["length"]; _0x37ee2f++) {
              var _0x50228d = parseInt(_0x2ce9e6[_0x37ee2f]);
              if (!isNaN(_0x50228d)) try {
                _0x579d24["getHeroById"](_0x50228d) && _0x375f64["push"](_0x50228d);
              } catch (_0x295e1c) {}
            }
          } catch (_0x111fad) {}
          if (0x0 === _0x375f64["length"]) {
            for (var _0x324706 = 0x64; _0x324706 <= 0x3e7; _0x324706++) try {
              _0x579d24["getHeroById"](_0x324706) && _0x375f64["push"](_0x324706);
            } catch (_0x55d9e7) {}
          }
          for (var _0x3cfc34 = 0x0; _0x3cfc34 < _0x375f64["length"]; _0x3cfc34++) try {
            var _0x5dbc10 = _0x579d24["getHeroById"](_0x375f64[_0x3cfc34]);
            if (!_0x5dbc10 || !_0x5dbc10["skin"]) continue;
            var _0x394bdd = _0x533bb3(_0x375f64[_0x3cfc34]);
            if (!_0x394bdd || !_0x394bdd["skinList"]) continue;
            window["__yunqi_origSkinLists"][_0x375f64[_0x3cfc34]] = _0x394bdd["skinList"]["slice"](0x0);
            var _0xa23f57 = _0x394bdd["skinList"][0x0];
            window["__yunqi_origBaseSkins"][_0x375f64[_0x3cfc34]] = _0xa23f57;
            for (var _0x2e0fa0 = 0x0, _0x391e56 = 0x0; _0x391e56 < _0x394bdd["skinList"]["length"]; _0x391e56++) {
              var _0x205668 = _0x394bdd["skinList"][_0x391e56];
              _0x205668 !== _0x375f64[_0x3cfc34] && _0x205668 !== _0xa23f57 && (_0x5dbc10["skin"]["has"](_0x205668) || (_0x5dbc10["skin"]["set"](_0x205668, {
                skinId: _0x205668,
                name: "",
                setNameTime: 0x0,
                setNameCnt: 0x0,
                expiration: -0x1
              }), _0x2e0fa0++, _0x572bad++));
            }
            _0x2e0fa0 > 0x0 && _0x3a7980++;
            var _0x398453 = _0x375f64[_0x3cfc34];
            try {
              _0x5dbc10["hasOwnProperty"]("__ycHooked") || function (_0x5d709d, _0x21ef39) {
                var _0x409893 = _0x5d709d["useSkin"],
                  _0x39af10 = _0x5d709d["skinId"];
                !_0x39af10 && _0x409893 && _0x409893 > 0x0 && (_0x39af10 = _0x409893), Object["defineProperty"](_0x5d709d, "useSkin", {
                  get: function () {
                    try {
                      var _0x31fbac = window["__yunqi_skinOverrides"] || _0x347d22;
                      if (_0x31fbac && _0x31fbac[_0x21ef39]) return 0x0;
                    } catch (_0x27c8ae) {}
                    return _0x409893;
                  },
                  set: function (_0x304a3c) {
                    _0x409893 = _0x304a3c;
                  },
                  configurable: !0x0,
                  enumerable: !0x0
                }), Object["defineProperty"](_0x5d709d, "skinId", {
                  get: function () {
                    try {
                      var _0x47efb9 = window["__yunqi_skinOverrides"] || _0x347d22;
                      if (_0x47efb9 && _0x47efb9[_0x21ef39]) return 0x0;
                    } catch (_0x31342e) {}
                    return _0x39af10;
                  },
                  set: function (_0x59ced6) {
                    _0x39af10 = _0x59ced6;
                  },
                  configurable: !0x0,
                  enumerable: !0x0
                }), Object["defineProperty"](_0x5d709d, "__ycHooked", {
                  value: !0x0,
                  configurable: !0x0
                });
              }(_0x5dbc10, _0x398453);
            } catch (_0x18f9c1) {}
          } catch (_0x21e0c9) {}
          _0x471ea4 = !0x0, window["__yunqi_skinReady"] = !0x0;
          try {
            console["log"](_0x430b82 + " phase2 就绪 roleId=" + _0xbc57ee + " scanned=" + _0x375f64["length"] + " injectedSkins=" + _0x572bad + " coveredHeroes=" + _0x3a7980 + " overrides=" + Object["keys"](_0x347d22)["length"]);
          } catch (_0xc2208e) {}
        } catch (_0x1b0787) {
          _0x21a37e < 0x78 && setTimeout(_0x28eaac, 0x1f4);
        } else _0x21a37e < 0x78 && setTimeout(_0x28eaac, 0x12c);
      }(), function _0x14db29() {
        if (_0x2f6b6f++, _0x471ea4) try {
          var _0x29f316 = window["ws"];
          if (!_0x29f316 || "function" != typeof _0x29f316["sendAsync"]) return void (_0x2f6b6f < 0x3c && setTimeout(_0x14db29, 0x3e8));
          if (_0x29f316["sendAsync"]["__skinHooked"]) return;
          var _0x528711 = window["__require"]("Configs"),
            _0x1853ee = _0x528711 && (_0x528711["Configs"] || _0x528711["default"]) || _0x528711,
            _0x28cd04 = window["ROLE"];
          try {
            for (var _0x3bcfb5 = null, _0x5342c6 = [0x65, 0x67, 0x6b, 0x6c, 0x6e, 0xc9, 0xcd, 0x12d], _0x240c0a = 0x0; _0x240c0a < _0x5342c6["length"] && !_0x3bcfb5; _0x240c0a++) try {
              _0x3bcfb5 = _0x28cd04["getHeroById"](_0x5342c6[_0x240c0a]);
            } catch (_0x15e7cc) {}
            if (_0x3bcfb5) {
              var _0x568d7c = Object["getPrototypeOf"](_0x3bcfb5),
                _0x341d4b = Object["getOwnPropertyDescriptor"](_0x568d7c, "curUseSkin");
              if (_0x341d4b && _0x341d4b["get"] && !window["__yunqi_curUseSkinOverridden"]) {
                var _0xc6cd71 = _0x341d4b["get"];
                Object["defineProperty"](_0x568d7c, "curUseSkin", {
                  get: function () {
                    var _0x202322 = this["heroId"] || this["id"] || this["roleId"] || this["oriHeroId"] || this["heroID"];
                    if (_0x202322 && _0x347d22[_0x202322] && !window["__yc_skinSuppress"]) {
                      var _0x44465a = _0x347d22[_0x202322];
                      return this["useSkin"] = _0x44465a, _0x44465a;
                    }
                    return _0xc6cd71["call"](this);
                  },
                  configurable: !0x0
                }), window["__yunqi_curUseSkinOverridden"] = !0x0;
              }
            }
          } catch (_0x15d05c) {}
          try {
            for (var _0x1cb365 = null, _0x4c1aab = [0x65, 0x67, 0x6b, 0x6c, 0x6e, 0xc9, 0xcd, 0x12d], _0x53a65a = 0x0; _0x53a65a < _0x4c1aab["length"] && !_0x1cb365; _0x53a65a++) try {
              _0x1cb365 = _0x28cd04["getHeroById"](_0x4c1aab[_0x53a65a]);
            } catch (_0x39f5fc) {}
            if (_0x1cb365 && !window["__yunqi_useSkinOverridden"]) {
              for (var _0x71c866 = null, _0x15ed9e = null, _0x3c492e = _0x1cb365, _0x5e5b64 = 0x0; _0x3c492e && _0x5e5b64 < 0x6;) {
                var _0x56ecbb = Object["getPrototypeOf"](_0x3c492e);
                if (!_0x56ecbb) break;
                var _0x65e836 = Object["getOwnPropertyDescriptor"](_0x56ecbb, "useSkin");
                if (_0x65e836) {
                  _0x71c866 = _0x56ecbb, _0x15ed9e = _0x65e836;
                  break;
                }
                _0x3c492e = _0x56ecbb, _0x5e5b64++;
              }
              var _0x25f647 = !0x1;
              if (_0x15ed9e && _0x15ed9e["get"]) {
                var _0x209cc8 = _0x15ed9e["get"],
                  _0x2517b9 = _0x15ed9e["set"];
                Object["defineProperty"](_0x71c866, "useSkin", {
                  get: function () {
                    try {
                      var _0x5f1655 = this["heroId"] || this["id"] || this["roleId"] || this["oriHeroId"] || this["heroID"],
                        _0x5a6f5d = window["__yunqi_skinOverrides"] || _0x347d22;
                      if (!window["__yc_skinSuppress"] && _0x5f1655 && _0x5a6f5d && _0x5a6f5d[_0x5f1655]) return _0x5a6f5d[_0x5f1655];
                    } catch (_0x5eada4) {}
                    return _0x209cc8["call"](this);
                  },
                  set: _0x2517b9,
                  configurable: !0x0
                }), _0x25f647 = !0x0;
                try {
                  console["log"](_0x430b82 + " useSkin 原型 getter 已覆盖 (depth=" + _0x5e5b64 + ")");
                } catch (_0x19f892) {}
              }
              for (var _0x12e816 = 0x0, _0x5eb611 = 0x0, _0x3d8b1e = 0x0, _0x3ec1fb = window["__yunqi_origSkinLists"] ? Object["keys"](window["__yunqi_origSkinLists"]) : [], _0x2353b5 = 0x0; _0x2353b5 < _0x3ec1fb["length"]; _0x2353b5++) try {
                var _0x383aa0,
                  _0x27d0e2 = parseInt(_0x3ec1fb[_0x2353b5]),
                  _0x9cf4ed = _0x28cd04["getHeroById"](_0x27d0e2);
                if (!_0x9cf4ed) continue;
                if (_0x9cf4ed["__ycHooked"]) {
                  _0x3d8b1e++;
                  continue;
                }
                try {
                  _0x383aa0 = _0x9cf4ed["useSkin"];
                } catch (_0x562008) {
                  _0x383aa0 = 0x0;
                }
                (function (_0x125229, _0x321c1a) {
                  var _0x250950 = _0x321c1a;
                  Object["defineProperty"](_0x125229, "useSkin", {
                    get: function () {
                      try {
                        var _0x17310b = _0x125229["heroId"] || _0x125229["id"],
                          _0x447637 = window["__yunqi_skinOverrides"] || _0x347d22;
                        if (_0x17310b && _0x447637 && _0x447637[_0x17310b]) return _0x447637[_0x17310b];
                      } catch (_0x2f4ceb) {}
                      return _0x250950;
                    },
                    set: function (_0x3453d9) {
                      _0x250950 = _0x3453d9;
                    },
                    configurable: !0x0,
                    enumerable: !0x0
                  });
                })(_0x9cf4ed, _0x383aa0), _0x12e816++;
              } catch (_0x3909fd) {
                _0x5eb611++;
              }
              window["__yunqi_useSkinOverridden"] = !0x0;
              try {
                console["log"](_0x430b82 + " useSkin 实例覆盖: ok=" + _0x12e816 + " fail=" + _0x5eb611 + " skip=" + _0x3d8b1e + " protoHook=" + _0x25f647);
              } catch (_0x4664c8) {}
            }
          } catch (_0x5d542b) {}
          try {
            for (var _0x328963 = null, _0x1c8d6d = [0x65, 0x67, 0x6b, 0x6c, 0x6e, 0xc9, 0xcd, 0x12d], _0x3e45fe = 0x0; _0x3e45fe < _0x1c8d6d["length"] && !_0x328963; _0x3e45fe++) try {
              _0x328963 = _0x28cd04["getHeroById"](_0x1c8d6d[_0x3e45fe]);
            } catch (_0xc0d1b1) {}
            if (_0x328963) {
              var _0x1c3916 = Object["getPrototypeOf"](_0x328963),
                _0x3201a4 = Object["getOwnPropertyDescriptor"](_0x1c3916, "realSkinName");
              if (_0x3201a4 && _0x3201a4["get"] && !window["__yunqi_realSkinNameOverridden"]) {
                var _0x3da44e = _0x3201a4["get"],
                  _0x20fe2a = _0x1853ee["SkinConf"] || null;
                Object["defineProperty"](_0x1c3916, "realSkinName", {
                  get: function () {
                    var _0x1ceaaa = this["heroId"] || this["id"] || this["roleId"] || this["oriHeroId"] || this["heroID"];
                    if (_0x1ceaaa && _0x347d22[_0x1ceaaa] && _0x20fe2a && !window["__yc_skinSuppress"]) try {
                      var _0x421e34 = _0x20fe2a["getById"](_0x347d22[_0x1ceaaa]);
                      if (_0x421e34 && _0x421e34["skinName"]) return _0x421e34["skinName"];
                    } catch (_0x59b63c) {}
                    return _0x3da44e["call"](this);
                  },
                  configurable: !0x0
                }), window["__yunqi_realSkinNameOverridden"] = !0x0;
              }
            }
          } catch (_0x21b027) {}
          var _0x5d1705 = _0x29f316["sendAsync"]["bind"](_0x29f316),
            _0x2d7c49 = /(^(fight_|team_|presetteam_|role_gettargetteam|arena_|rank_|legion_|guild_|friend_))|getotherinfo|getroleinfo|gettargetteam|targetteam|peekteam|watchrole|otherrole|otherteam|otherinfo/i,
            _0x529f5e = {
              battleData: 0x1,
              battleResult: 0x1,
              leftTeam: 0x1,
              rightTeam: 0x1,
              sponsor: 0x1,
              accept: 0x1,
              teamInfo: 0x1
            };
          function _0x415408(_0x339622, _0x3b0243) {
            return !(!_0x339622 || !_0x2d7c49["test"](_0x339622)) || !(!_0x3b0243 || !function (_0x4bf772, _0x327364) {
              if (!_0x4bf772 || "object" != typeof _0x4bf772 || _0x327364 > 0x4) return !0x1;
              if (_0x4bf772["battleData"] || _0x4bf772["battleResult"]) return !0x0;
              try {
                if ("function" == typeof _0x4bf772["getData"]) {
                  var _0x28c500 = _0x4bf772["getData"]();
                  if (_0x28c500 && (_0x28c500["battleData"] || _0x28c500["battleResult"])) return !0x0;
                }
              } catch (_0x5144af) {}
              for (var _0x473e6c in _0x4bf772) if (_0x529f5e[_0x473e6c] && _0x4bf772[_0x473e6c] && "object" == typeof _0x4bf772[_0x473e6c]) return !0x0;
              return !0x1;
            }(_0x3b0243, 0x0));
          }
          var _0x5ae693 = {},
            _0x481e47 = {};
          function _0x4f493(_0x40adc1, _0x2ee12f, _0x3478d4) {
            if (!_0x40adc1 || "object" != typeof _0x40adc1 || _0x2ee12f > 0xc) return 0x0;
            _0x3478d4 = !!_0x3478d4;
            var _0x5ccc0f = 0x0;
            if (Array["isArray"](_0x40adc1)) {
              for (var _0x4e709c = 0x0; _0x4e709c < _0x40adc1["length"]; _0x4e709c++) _0x5ccc0f += _0x4f493(_0x40adc1[_0x4e709c], _0x2ee12f + 0x1, _0x3478d4);
              return _0x5ccc0f;
            }
            if ("undefined" != typeof Map && _0x40adc1 instanceof Map) {
              try {
                _0x40adc1["forEach"](function (_0x571d6b) {
                  _0x5ccc0f += _0x4f493(_0x571d6b, _0x2ee12f + 0x1, _0x3478d4);
                });
              } catch (_0x5b9ede) {}
              return _0x5ccc0f;
            }
            if ("undefined" != typeof Set && _0x40adc1 instanceof Set) return 0x0;
            if (!_0x3478d4) try {
              var _0x283d1b = window["__yunqi_skinOverrides"] || _0x347d22,
                _0x16fd2c = _0x40adc1["heroId"] || _0x40adc1["hid"] || _0x40adc1["hero_id"] || _0x40adc1["heroID"];
              if (!_0x16fd2c && "number" == typeof _0x40adc1["id"] && "number" == typeof _0x40adc1["skin"]) {
                var _0x17c4b5 = window["__yunqi_origSkinLists"];
                _0x17c4b5 && _0x17c4b5["hasOwnProperty"](_0x40adc1["id"]) && (_0x16fd2c = null);
              }
              if (_0x16fd2c && _0x283d1b && _0x283d1b[_0x16fd2c]) {
                var _0x4008db = _0x283d1b[_0x16fd2c];
                if (((window["__yunqi_origSkinLists"] || {})[_0x16fd2c] || [])["indexOf"](_0x4008db) >= 0x0) for (var _0x26ce64 = ["useSkin", "uSkin", "skinId", "skin_id", "curSkin", "curUseSkin"], _0x49c379 = 0x0; _0x49c379 < _0x26ce64["length"]; _0x49c379++) {
                  var _0x4c4ead = _0x26ce64[_0x49c379];
                  void 0x0 !== _0x40adc1[_0x4c4ead] && "number" == typeof _0x40adc1[_0x4c4ead] && _0x40adc1[_0x4c4ead] !== _0x4008db && -0x1 !== _0x40adc1[_0x4c4ead] && (_0x40adc1[_0x4c4ead] = _0x4008db, _0x5ccc0f++);
                }
              }
            } catch (_0x48811e) {}
            for (var _0x4f0b5e in _0x40adc1) if ("_t" !== _0x4f0b5e && "_raw" !== _0x4f0b5e && "_sendMsg" !== _0x4f0b5e) try {
              _0x40adc1["hasOwnProperty"] && _0x40adc1["hasOwnProperty"](_0x4f0b5e) && _0x40adc1[_0x4f0b5e] && "object" == typeof _0x40adc1[_0x4f0b5e] && (_0x5ccc0f += _0x4f493(_0x40adc1[_0x4f0b5e], _0x2ee12f + 0x1, _0x3478d4 || !!_0x529f5e[_0x4f0b5e]));
            } catch (_0x456d2f) {}
            return _0x5ccc0f;
          }
          window["__yunqi_patchSkinResp"] = _0x4f493, window["__yunqi_shouldSkipSkinPatch"] = _0x415408, _0x29f316["sendAsync"] = function (_0x392375) {
            if (_0x392375 && "hero_useskin" === _0x392375["cmd"]) {
              var _0x58d90d = _0x392375["params"] && _0x392375["params"]["heroId"],
                _0x49c865 = _0x392375["params"] && _0x392375["params"]["skinId"];
              if (_0x58d90d && void 0x0 !== _0x49c865) return _0x347d22[_0x58d90d] = _0x49c865, _0x3dd92b(), Promise["resolve"]({
                code: 0x0,
                data: {
                  heroId: _0x58d90d,
                  skinId: _0x49c865
                }
              });
            }
            var _0x358ca4 = _0x392375 && _0x392375["cmd"] || "unknown";
            return _0x481e47[_0x358ca4] || (_0x481e47[_0x358ca4] = !0x0), _0x5d1705(_0x392375)["then"](function (_0x5f2fb8) {
              try {
                if (_0x358ca4 && /getroleinfo|getotherinfo|otherrole/i["test"](_0x358ca4)) {
                  if (!window["__yc_skinSuppress"]) try {
                    console["log"](_0x430b82 + " 进入他人视图(" + _0x358ca4 + ") suppress=on");
                  } catch (_0x4a653) {}
                  window["__yc_skinSuppress"] = !0x0;
                  try {
                    window["__yc_suppressTimer"] && clearTimeout(window["__yc_suppressTimer"]);
                  } catch (_0x1d3ac6) {}
                  try {
                    window["__yc_suppressTimer"] = setTimeout(function () {
                      window["__yc_skinSuppress"] = !0x1;
                    }, 0x1f40);
                  } catch (_0x522431) {}
                }
                if (_0x415408(_0x358ca4, _0x5f2fb8)) return _0x5f2fb8;
                var _0x18ad4d = _0x4f493(_0x5f2fb8, 0x0, !0x1);
                if (_0x18ad4d > 0x0 && (_0x5ae693[_0x358ca4] = (_0x5ae693[_0x358ca4] || 0x0) + _0x18ad4d, _0x5ae693[_0x358ca4] === _0x18ad4d)) try {
                  console["log"](_0x430b82 + " 响应已改写 cmd=" + _0x358ca4 + " hits=" + _0x18ad4d);
                } catch (_0x2348f5) {}
              } catch (_0x5ea614) {}
              return _0x5f2fb8;
            });
          }, _0x29f316["sendAsync"]["__skinHooked"] = !0x0;
          try {
            var _0x582d63 = window["__require"] && window["__require"]("HeroDataView"),
              _0x1cd4fa = _0x582d63 && _0x582d63["HeroDataView"] || _0x582d63;
            if (_0x1cd4fa && "function" == typeof _0x1cd4fa["getHeroAvatar"] && !_0x1cd4fa["getHeroAvatar"]["__ycGhaHooked"]) {
              var _0x42258d = _0x1cd4fa["getHeroAvatar"];
              _0x1cd4fa["getHeroAvatar"] = function (_0x8c28d4) {
                try {
                  var _0xfe9322 = "number" == typeof _0x8c28d4 ? _0x8c28d4 : _0x8c28d4 && (_0x8c28d4["heroId"] || _0x8c28d4["id"] || _0x8c28d4["roleId"]),
                    _0x2a6437 = window["__yunqi_skinOverrides"] || _0x347d22;
                  if (!window["__yc_skinSuppress"] && _0xfe9322 && _0x2a6437 && _0x2a6437[_0xfe9322]) return _0x2a6437[_0xfe9322];
                } catch (_0x594feb) {}
                return _0x42258d["apply"](this, arguments);
              }, _0x1cd4fa["getHeroAvatar"]["__ycGhaHooked"] = !0x0;
              try {
                console["log"](_0x430b82 + " HeroDataView.getHeroAvatar (static) 已 hook");
              } catch (_0x486734) {}
            } else {
              if (_0x1cd4fa && _0x1cd4fa["prototype"] && "function" == typeof _0x1cd4fa["prototype"]["getHeroAvatar"] && !_0x1cd4fa["prototype"]["getHeroAvatar"]["__ycGhaHooked"]) {
                var _0x3aa2fd = _0x1cd4fa["prototype"]["getHeroAvatar"];
                _0x1cd4fa["prototype"]["getHeroAvatar"] = function (_0x3ff354) {
                  try {
                    var _0x4eebba = "number" == typeof _0x3ff354 ? _0x3ff354 : _0x3ff354 && (_0x3ff354["heroId"] || _0x3ff354["id"] || _0x3ff354["roleId"]),
                      _0x4d0deb = window["__yunqi_skinOverrides"] || _0x347d22;
                    if (!window["__yc_skinSuppress"] && _0x4eebba && _0x4d0deb && _0x4d0deb[_0x4eebba]) return _0x4d0deb[_0x4eebba];
                  } catch (_0x4d8a69) {}
                  return _0x3aa2fd["apply"](this, arguments);
                }, _0x1cd4fa["prototype"]["getHeroAvatar"]["__ycGhaHooked"] = !0x0;
                try {
                  console["log"](_0x430b82 + " HeroDataView.prototype.getHeroAvatar 已 hook");
                } catch (_0x419b00) {}
              }
            }
            if (_0x1cd4fa && "function" == typeof _0x1cd4fa["judgeSkinValid"] && !_0x1cd4fa["judgeSkinValid"]["__ycJsvHooked"]) {
              var _0xc51cbc = _0x1cd4fa["judgeSkinValid"];
              _0x1cd4fa["judgeSkinValid"] = function (_0x3a5946, _0x596498) {
                try {
                  var _0x3df516 = "number" == typeof _0x3a5946 ? _0x3a5946 : _0x3a5946 && (_0x3a5946["heroId"] || _0x3a5946["id"]),
                    _0x46eeaa = "number" == typeof _0x596498 ? _0x596498 : _0x596498 && (_0x596498["skinId"] || _0x596498["id"]),
                    _0x31ec4 = window["__yunqi_skinOverrides"] || _0x347d22;
                  if (_0x3df516 && _0x31ec4 && _0x31ec4[_0x3df516] && (_0x46eeaa === _0x31ec4[_0x3df516] || void 0x0 === _0x46eeaa)) return !0x0;
                } catch (_0x38304e) {}
                return _0xc51cbc["apply"](this, arguments);
              }, _0x1cd4fa["judgeSkinValid"]["__ycJsvHooked"] = !0x0;
              try {
                console["log"](_0x430b82 + " judgeSkinValid 已 hook");
              } catch (_0x53d3de) {}
            }
            if (_0x1cd4fa && "function" == typeof _0x1cd4fa["getHeroIcon"] && !_0x1cd4fa["getHeroIcon"]["__ycGhiHooked"]) {
              var _0xd2b090 = _0x1cd4fa["getHeroIcon"];
              _0x1cd4fa["getHeroIcon"] = function (_0x2b7d57) {
                try {
                  var _0x1ecfd8 = "number" == typeof _0x2b7d57 ? _0x2b7d57 : _0x2b7d57 && (_0x2b7d57["heroId"] || _0x2b7d57["id"] || _0x2b7d57["roleId"]),
                    _0xfe383b = window["__yunqi_skinOverrides"] || _0x347d22;
                  if (!window["__yc_skinSuppress"] && _0x1ecfd8 && _0xfe383b && _0xfe383b[_0x1ecfd8]) return _0xfe383b[_0x1ecfd8];
                } catch (_0x32f08f) {}
                return _0xd2b090["apply"](this, arguments);
              }, _0x1cd4fa["getHeroIcon"]["__ycGhiHooked"] = !0x0;
              try {
                console["log"](_0x430b82 + " getHeroIcon 已 hook");
              } catch (_0x35bd94) {}
            }
            if (_0x1cd4fa && "function" == typeof _0x1cd4fa["hasSkin"] && !_0x1cd4fa["hasSkin"]["__ycHsHooked"]) {
              var _0x410c24 = _0x1cd4fa["hasSkin"];
              _0x1cd4fa["hasSkin"] = function (_0x89f52c, _0x4b85ed) {
                try {
                  var _0x2e4d3f = "number" == typeof _0x89f52c ? _0x89f52c : _0x89f52c && (_0x89f52c["heroId"] || _0x89f52c["id"]),
                    _0x5c6124 = "number" == typeof _0x4b85ed ? _0x4b85ed : _0x4b85ed && (_0x4b85ed["skinId"] || _0x4b85ed["id"]),
                    _0x413435 = window["__yunqi_skinOverrides"] || _0x347d22;
                  if (_0x2e4d3f && _0x413435 && _0x413435[_0x2e4d3f] && (_0x5c6124 === _0x413435[_0x2e4d3f] || void 0x0 === _0x5c6124)) return !0x0;
                } catch (_0x284ecb) {}
                return _0x410c24["apply"](this, arguments);
              }, _0x1cd4fa["hasSkin"]["__ycHsHooked"] = !0x0;
              try {
                console["log"](_0x430b82 + " hasSkin 已 hook");
              } catch (_0x5a6d69) {}
            }
          } catch (_0x18fe9f) {}
          try {
            var _0x525764 = window["__require"] && window["__require"]("UIHelper"),
              _0x5eea3c = _0x525764 && _0x525764["UIHelper"] || _0x525764,
              _0x209195 = window["__require"] && window["__require"]("AvatarConfExt"),
              _0x596579 = _0x209195 && _0x209195["AvatarConfExt"] || _0x209195;
            function _0x1535b1() {
              var _0x350c8f = {},
                _0x158d1d = {},
                _0x4cd4ba = {};
              try {
                var _0x44619f = window["__yunqi_skinOverrides"] || _0x347d22,
                  _0x638150 = window["__yunqi_origSkinLists"] || {},
                  _0x490d77 = _0x1853ee && _0x1853ee["AvatarConf"] || null,
                  _0x2de447 = _0x1853ee && _0x1853ee["EffectConf"] || null;
                for (var _0x1f9df7 in _0x44619f) if (_0x44619f["hasOwnProperty"](_0x1f9df7) && _0x44619f[_0x1f9df7]) {
                  var _0x252623 = parseInt(_0x1f9df7);
                  if (!isNaN(_0x252623)) {
                    for (var _0x59a56a = _0x44619f[_0x1f9df7], _0x5c1135 = _0x638150[_0x252623] || [], _0x4ed2cc = 0x0; _0x4ed2cc < _0x5c1135["length"]; _0x4ed2cc++) "number" == typeof _0x5c1135[_0x4ed2cc] && (_0x350c8f[_0x5c1135[_0x4ed2cc]] = _0x252623);
                    _0x350c8f[_0x252623] = _0x252623;
                    var _0x5e2c52 = null;
                    try {
                      _0x596579 && "function" == typeof _0x596579["getAvatarId"] && "number" == typeof (_0x5e2c52 = _0x596579["getAvatarId"](_0x252623, !0x0)) && _0x5e2c52 > 0x0 && (_0x350c8f[_0x5e2c52] = _0x252623);
                    } catch (_0x157836) {}
                    try {
                      if (_0x490d77 && "function" == typeof _0x490d77["getById"]) {
                        var _0x4a3ef4 = _0x490d77["getById"](_0x59a56a),
                          _0x36b226 = _0x4a3ef4 && _0x4a3ef4["path"];
                        if (_0x36b226) {
                          var _0x3d47a8 = _0x5c1135["slice"](0x0);
                          _0x5e2c52 && _0x3d47a8["push"](_0x5e2c52);
                          for (var _0x5989b9 = 0x0; _0x5989b9 < _0x3d47a8["length"]; _0x5989b9++) {
                            var _0x5c2748 = _0x490d77["getById"](_0x3d47a8[_0x5989b9]);
                            _0x5c2748 && _0x5c2748["path"] && _0x5c2748["path"] !== _0x36b226 && (_0x158d1d[_0x5c2748["path"]] = _0x36b226);
                            try {
                              _0x5c2748 && _0x5c2748["asset"] && _0x4a3ef4["asset"] && _0x5c2748["asset"] !== _0x4a3ef4["asset"] && (_0x158d1d[_0x5c2748["asset"]] = _0x4a3ef4["asset"]);
                              for (var _0x315bb4 = _0x5c2748 && _0x5c2748["preload"] || [], _0x225620 = _0x4a3ef4 && _0x4a3ef4["preload"] || [], _0x3d2261 = 0x0; _0x3d2261 < _0x315bb4["length"] && _0x3d2261 < _0x225620["length"]; _0x3d2261++) {
                                var _0x16483d = _0x490d77["getById"](_0x315bb4[_0x3d2261]),
                                  _0x5e5eaf = _0x490d77["getById"](_0x225620[_0x3d2261]);
                                _0x16483d && _0x5e5eaf && _0x16483d["path"] && _0x5e5eaf["path"] && _0x16483d["path"] !== _0x5e5eaf["path"] && (_0x158d1d[_0x16483d["path"]] = _0x5e5eaf["path"]), _0x16483d && _0x5e5eaf && _0x16483d["asset"] && _0x5e5eaf["asset"] && _0x16483d["asset"] !== _0x5e5eaf["asset"] && (_0x158d1d[_0x16483d["asset"]] = _0x5e5eaf["asset"]);
                              }
                              if (_0x2de447 && "function" == typeof _0x2de447["getById"]) for (var _0x26638f = _0x5c2748 && _0x5c2748["preloadEffects"] || [], _0x4249e8 = _0x4a3ef4 && _0x4a3ef4["preloadEffects"] || [], _0x5302b0 = 0x0; _0x5302b0 < _0x26638f["length"]; _0x5302b0++) {
                                _0x525104(_0x2de447["getById"](_0x26638f[_0x5302b0]), _0x2de447["getById"](_0x4249e8[_0x5302b0 >= _0x4249e8["length"] ? _0x4249e8["length"] - 0x1 : _0x5302b0]), _0x4cd4ba);
                              } else {
                                if (!window["__yc_effectConfWarned"]) {
                                  window["__yc_effectConfWarned"] = !0x0;
                                  try {
                                    console["log"](_0x430b82 + " Phase4 警告: EffectConf 不可用，effectRes 映射跳过");
                                  } catch (_0x3037c6) {}
                                }
                              }
                            } catch (_0x4d08e2) {}
                          }
                        }
                      }
                    } catch (_0x413a12) {}
                  }
                }
              } catch (_0x239d30) {}
              window["__yunqi_skinToHero"] = _0x350c8f, window["__yunqi_spinePathMap"] = _0x158d1d, window["__yunqi_effectResMap"] = _0x4cd4ba;
              try {
                console["log"](_0x430b82 + " Phase4 映射重建: skinMap=" + Object["keys"](_0x350c8f)["length"] + " spinePath=" + Object["keys"](_0x158d1d)["length"] + " effectRes=" + Object["keys"](_0x4cd4ba)["length"]);
              } catch (_0x5d4d79) {}
              return window["__yunqi_skinToHeroDirty"] = !0x1, _0x350c8f;
            }
            function _0x2f2b56(_0x20a7ee) {
              try {
                if (window["__yc_skinSuppress"]) return _0x20a7ee;
                if ("number" != typeof _0x20a7ee || _0x20a7ee <= 0x0) return _0x20a7ee;
                !0x1 === window["__yunqi_skinToHeroDirty"] && window["__yunqi_skinToHero"] || _0x1535b1();
                var _0x1e9597 = (window["__yunqi_skinToHero"] || {})[_0x20a7ee];
                if (!_0x1e9597) return _0x20a7ee;
                var _0x29c4e7 = window["__yunqi_skinOverrides"] || _0x347d22,
                  _0x5fb6f9 = _0x29c4e7 && _0x29c4e7[_0x1e9597];
                if (!_0x5fb6f9 || _0x5fb6f9 === _0x20a7ee) return _0x20a7ee;
                if (((window["__yunqi_origSkinLists"] || {})[_0x1e9597] || [])["indexOf"](_0x5fb6f9) >= 0x0) return _0x5fb6f9;
              } catch (_0x54b677) {}
              return _0x20a7ee;
            }
            window["__yunqi_rebuildSkinToHero"] = _0x1535b1, window["__yunqi_remapAvatar"] = _0x2f2b56, window["__yunqi_remapSpinePath"] = function (_0x3780d1) {
              try {
                if (!0x1 === window["__yc_battleRemapAllow"]) return _0x3780d1;
                if (!_0x3780d1 || "string" != typeof _0x3780d1) return _0x3780d1;
                !0x1 === window["__yunqi_skinToHeroDirty"] && window["__yunqi_spinePathMap"] || _0x1535b1();
                var _0x5e8bfa = (window["__yunqi_spinePathMap"] || {})[_0x3780d1];
                if (_0x5e8bfa && _0x5e8bfa !== _0x3780d1) return _0x5e8bfa;
              } catch (_0x3e614d) {}
              return _0x3780d1;
            };
            var _0x4d6f6a = window["__yunqi_battleSpineSubMap"] = window["__yunqi_battleSpineSubMap"] || {
              daqiao7_attack_loop: "daqiao7_attack_line",
              daqiao7_skill_loop: "daqiao7_skill_hit",
              zhangjiao5_skill_line: "zhangjiao5_skill_hit",
              zhangjiao5_skill_line_2: "zhangjiao5_skill_hit",
              zhangjiao5_guanghuan: "zhangjiao5_2",
              zhouyu9_huomiao: "zhouyu9_attack_hit",
              daqiao7_buff_shield: "daqiao7_armor_intro"
            };
            function _0x7b56d() {
              try {
                var _0x107532 = window["__yunqi_skinOverrides"] || _0x347d22,
                  _0x80d1be = _0x107532 && _0x107532[0x77];
                if (!_0x80d1be) return null;
                var _0x382126 = _0x1853ee && _0x1853ee["AvatarConf"] || null;
                if (!_0x382126 || "function" != typeof _0x382126["getById"]) return null;
                var _0x29f532 = _0x382126["getById"](_0x80d1be);
                return _0x29f532 && _0x29f532["path"] || null;
              } catch (_0x32f7dd) {}
              return null;
            }
            function _0x5cbde6(_0x2ece0d) {
              try {
                if (!_0x2ece0d) return null;
                if (_0x2ece0d["owner"] && _0x2ece0d["owner"]["actor"]) return _0x2ece0d["owner"];
                var _0x150eb5 = null;
                if ("function" == typeof _0x2ece0d["getComponents"]) for (var _0x459b38 = _0x2ece0d["getComponents"](), _0x58fb84 = 0x0; _0x58fb84 < _0x459b38["length"]; _0x58fb84++) {
                  var _0x3a40a8 = _0x459b38[_0x58fb84];
                  if (_0x3a40a8 && _0x3a40a8["armor"] && _0x3a40a8["armor"]["owner"]) return _0x3a40a8["armor"]["owner"];
                }
                if (_0x2ece0d["_components"]) {
                  var _0x9e9536 = _0x2ece0d["_components"];
                  if ("function" == typeof _0x9e9536["forEach"]) {
                    if (_0x9e9536["forEach"](function (_0x1f979e) {
                      !_0x150eb5 && _0x1f979e && _0x1f979e["armor"] && _0x1f979e["armor"]["owner"] && (_0x150eb5 = _0x1f979e["armor"]["owner"]);
                    }), _0x150eb5) return _0x150eb5;
                  } else for (var _0x44086 in _0x9e9536) {
                    var _0x25e1ed = _0x9e9536[_0x44086];
                    if (_0x25e1ed && _0x25e1ed["armor"] && _0x25e1ed["armor"]["owner"]) return _0x25e1ed["armor"]["owner"];
                  }
                }
              } catch (_0x984bcd) {}
              return null;
            }
            function _0x417d20(_0x51e0a4) {
              try {
                return _0x51e0a4 ? _0x51e0a4["target"] && _0x51e0a4["target"]["actor"] ? _0x51e0a4["target"] : _0x51e0a4["owner"] && _0x51e0a4["owner"]["actor"] ? _0x51e0a4["owner"] : _0x51e0a4["actor"] ? _0x51e0a4 : _0x5cbde6(_0x51e0a4) : null;
              } catch (_0x3277b2) {}
              return null;
            }
            function _0x256fef(_0x1ec9e6) {
              try {
                if (!_0x1ec9e6 || "function" != typeof _0x1ec9e6["getComponents"]) return null;
                for (var _0xa64cfc = _0x1ec9e6["getComponents"](), _0x181f9f = 0x0; _0x181f9f < _0xa64cfc["length"]; _0x181f9f++) {
                  var _0x9e5ac9 = _0xa64cfc[_0x181f9f];
                  if (_0x9e5ac9 && null != _0x9e5ac9["bundleName"] && null != _0x9e5ac9["path"]) return _0x9e5ac9;
                }
              } catch (_0x4f8080) {}
              return null;
            }
            function _0x558ebc(_0x2f8f88) {
              if (!_0x2f8f88) return !0x1;
              var _0x4cf3b3 = String(_0x2f8f88["bundleName"] || ""),
                _0x78e377 = String(_0x2f8f88["path"] || "");
              return "battleEffect" === _0x4cf3b3 && _0x78e377["indexOf"]("shield") >= 0x0;
            }
            function _0x3558c4(_0x3f4def) {
              try {
                var _0x2cf214 = _0x3f4def && _0x3f4def["actor"] && _0x3f4def["actor"]["camp"],
                  _0x144788 = window["__yc_myCamp"];
                return null != _0x144788 && null != _0x2cf214 && _0x2cf214 === _0x144788;
              } catch (_0x58ac7d) {}
              return !0x1;
            }
            function _0x991b1d(_0x15e3ea, _0x5beb9a) {
              try {
                if (!_0x15e3ea || "function" != typeof _0x15e3ea["getComponents"]) return null;
                for (var _0x30dfd4 = _0x15e3ea["getComponents"](), _0x162f45 = 0x0; _0x162f45 < _0x30dfd4["length"]; _0x162f45++) if (_0x5beb9a(_0x30dfd4[_0x162f45])) return _0x30dfd4[_0x162f45];
              } catch (_0x186f59) {}
              return null;
            }
            function _0x26b8ab(_0x1fe23f) {
              return _0x991b1d(_0x1fe23f, function (_0x31d80c) {
                return _0x31d80c && _0x31d80c["offset"] && null != _0x31d80c["position"] && ("function" == typeof _0x31d80c["init"] || null != _0x31d80c["dirty"]);
              });
            }
            function _0x53c2f8(_0x4360c7, _0x458fdc) {
              try {
                if (!_0x4360c7) return;
                if (!_0x558ebc(_0x256fef(_0x4360c7))) return;
                var _0x46f6f2 = _0x458fdc || _0x417d20(_0x4360c7);
                _0x4360c7["__yc_dqShieldAllyRemap"] = _0x3558c4(_0x46f6f2);
              } catch (_0x20816e) {}
            }
            function _0xeabc91(_0x5a0887, _0x162ee6) {
              try {
                if (!_0x5a0887) return;
                !function () {
                  try {
                    window["__yc_dqShieldPendingMap"] || (window["__yc_dqShieldPendingMap"] = new WeakMap());
                  } catch (_0x84b902) {}
                }();
                var _0x26fc61 = _0x3558c4(_0x162ee6 || _0x5cbde6(_0x5a0887));
                window["__yc_dqShieldPendingMap"]["set"](_0x5a0887, _0x26fc61);
              } catch (_0x1ea3c0) {}
            }
            function _0x78e5f0(_0x1bcc50) {
              try {
                if (!_0x1bcc50) return !0x1;
                if (null != _0x1bcc50["__yc_dqShieldAllyRemap"]) return !!_0x1bcc50["__yc_dqShieldAllyRemap"];
                if (window["__yc_dqShieldPendingMap"] && window["__yc_dqShieldPendingMap"]["has"](_0x1bcc50)) return !!window["__yc_dqShieldPendingMap"]["get"](_0x1bcc50);
              } catch (_0x13c656) {}
              return _0x3558c4(_0x417d20(_0x1bcc50));
            }
            function _0x3a83f7() {
              return function () {
                try {
                  var _0xd07709 = window["__yc_armorShieldCtxStack"];
                  return !!(_0xd07709 && _0xd07709["length"] && _0xd07709[_0xd07709["length"] - 0x1]);
                } catch (_0x3d4ab) {}
                return !0x1;
              }();
            }
            function _0x437b33(_0x2d2c70) {
              try {
                var _0x274729 = function () {
                  try {
                    var _0x691adf = window["__yunqi_dqShieldYOffset"];
                    return null == _0x691adf || "" === _0x691adf ? -0x32 : Number(_0x691adf) || 0x0;
                  } catch (_0x232ee7) {}
                  return -0x32;
                }();
                if (!_0x274729 || !_0x2d2c70) return;
                if (null != _0x2d2c70["__yc_dqShieldYOffsetApplied"]) return;
                var _0x5e29f2 = _0x256fef(_0x2d2c70);
                if (!_0x5e29f2) return;
                _0x5e29f2["yOffset"] = (Number(_0x5e29f2["yOffset"]) || 0x0) + _0x274729;
                var _0x5d0add = _0x26b8ab(_0x2d2c70);
                if (_0x5d0add && _0x5d0add["offset"]) {
                  var _0xc8a710 = null != _0x5d0add["offset"]["x"] ? Number(_0x5d0add["offset"]["x"]) : Number(_0x5e29f2["xOffset"]) || 0x0,
                    _0x11e3fa = (Number(_0x5d0add["offset"]["y"]) || 0x0) + _0x274729;
                  "function" == typeof _0x5d0add["offset"]["set"] ? _0x5d0add["offset"]["set"](_0xc8a710, _0x11e3fa) : _0x5d0add["offset"]["y"] = _0x11e3fa, null != _0x5d0add["dirty"] && (_0x5d0add["dirty"] = 0x7);
                }
                _0x2d2c70["__yc_dqShieldYOffsetApplied"] = _0x274729;
                try {
                  if (!0x1 !== window["__yunqi_spineDiag"]) (window["__yc_shieldYOffsetDiagN"] = (window["__yc_shieldYOffsetDiagN"] || 0x0) + 0x1) <= 0x14 && console["log"](_0x430b82 + " [v3.9.3盾位] 团队盾下移 dy=" + _0x274729 + " skY=" + _0x5e29f2["yOffset"] + " ally=" + _0x2d2c70["__yc_dqShieldAllyRemap"]);
                } catch (_0x6cac17) {}
              } catch (_0x3a001c) {}
            }
            function _0x3f88b5(_0x3274c0) {
              try {
                if (!_0x3274c0 || null == _0x3274c0["__yc_dqShieldYOffsetApplied"]) return;
                var _0x32fae0 = _0x26b8ab(_0x3274c0),
                  _0x3c49e4 = function (_0x4cd48a) {
                    return _0x991b1d(_0x4cd48a, function (_0x466c4f) {
                      return _0x466c4f && "function" == typeof _0x466c4f["setPosition"];
                    });
                  }(_0x3274c0);
                _0x32fae0 && _0x3c49e4 && "function" == typeof _0x3c49e4["setPosition"] && (_0x3c49e4["setPosition"](_0x32fae0["position"]["x"] + (_0x32fae0["offset"] ? _0x32fae0["offset"]["x"] : 0x0), _0x32fae0["position"]["y"] + (_0x32fae0["offset"] ? _0x32fae0["offset"]["y"] : 0x0)), null != _0x32fae0["dirty"] && (_0x32fae0["dirty"] = 0x7));
              } catch (_0x1721c0) {}
            }
            function _0x5df3cb(_0x315916, _0x3f166a) {
              try {
                if (!0x1 === window["__yunqi_battleReskin"]) return null;
                if (!function () {
                  try {
                    var _0x168471 = _0x7b56d();
                    if (!_0x168471) return !0x1;
                    !0x1 === window["__yunqi_skinToHeroDirty"] && window["__yunqi_spinePathMap"] || _0x1535b1();
                    var _0x2421be = window["__yunqi_spinePathMap"] || {},
                      _0xfce33d = window["__yc_myBattleSrcBundles"];
                    if (_0xfce33d) {
                      if (_0xfce33d[_0x168471]) return !0x0;
                      for (var _0x595d8c in _0x2421be) if (Object["prototype"]["hasOwnProperty"]["call"](_0x2421be, _0x595d8c) && _0x2421be[_0x595d8c] === _0x168471 && _0xfce33d[_0x595d8c]) return !0x0;
                    }
                    if (!window["__yc_myBattleHasRecord"]) return !0x0;
                  } catch (_0x27e24c) {}
                  return !0x1;
                }()) return null;
                var _0x2fbac = _0x7b56d();
                if (!_0x2fbac) return null;
                var _0x583adc = String(_0x315916),
                  _0x17b4c8 = String(_0x3f166a);
                if ("battleEffect" !== _0x583adc || _0x17b4c8["indexOf"]("shield") < 0x0) return null;
                if (!_0x3a83f7()) {
                  try {
                    if (!0x1 !== window["__yunqi_spineDiag"]) (window["__yc_shieldSkipEnemyN"] = (window["__yc_shieldSkipEnemyN"] || 0x0) + 0x1) <= 0x1e && console["log"](_0x430b82 + " [v3.9盾层]跳过非我方受盾 battleEffect/" + _0x17b4c8 + " ctx=" + (window["__yc_armorShieldCtxStack"] ? window["__yc_armorShieldCtxStack"]["length"] : 0x0));
                  } catch (_0x40fa9d) {}
                  return null;
                }
                _0x4fa576(_0x2fbac);
                var _0x124678 = _0x2fbac + "_armor_intro",
                  _0x161731 = _0x4d6f6a[_0x2fbac + "_buff_shield"] || _0x124678,
                  _0x53a061 = window["__yc_bundleRes"] && window["__yc_bundleRes"][_0x2fbac],
                  _0x317184 = _0x53a061 && _0x53a061[_0x124678] ? _0x124678 : _0x53a061 && _0x53a061[_0x161731] ? _0x161731 : null;
                if (!_0x317184) return null;
                try {
                  if (!0x1 !== window["__yunqi_spineDiag"]) (window["__yc_shieldLayerDiagN"] = (window["__yc_shieldLayerDiagN"] || 0x0) + 0x1) <= 0x28 && console["log"](_0x430b82 + " [v3.9盾层]我方叠加层 " + _0x583adc + "/" + _0x17b4c8 + " → " + _0x2fbac + "/" + _0x317184);
                } catch (_0xcc32d7) {}
                return [_0x2fbac, _0x317184];
              } catch (_0x4a2501) {}
              return null;
            }
            function _0x4356f8(_0x34d065, _0x40d7a2) {
              try {
                if (!0x1 === window["__yunqi_battleReskin"]) return [_0x34d065, _0x40d7a2];
                if (!_0x34d065 || !_0x40d7a2) return [_0x34d065, _0x40d7a2];
                var _0x4d0388 = _0x5df3cb(_0x34d065, _0x40d7a2);
                if (_0x4d0388) return _0x4d0388;
                if (!0x1 === window["__yc_battleRemapAllow"]) return [_0x34d065, _0x40d7a2];
                !0x1 === window["__yunqi_skinToHeroDirty"] && window["__yunqi_spinePathMap"] || _0x1535b1();
                var _0x51dbb0 = window["__yunqi_spinePathMap"] || {},
                  _0x5c7ef6 = String(_0x34d065),
                  _0x562fb4 = String(_0x40d7a2);
                if (_0x5c7ef6 === _0x562fb4) {
                  var _0x187ea3 = _0x51dbb0[_0x562fb4];
                  return _0x187ea3 && _0x187ea3 !== _0x562fb4 ? (!0x0 === window["__yc_battleRemapAllow"] && (window["__yc_myBattleSrcBundles"] || (window["__yc_myBattleSrcBundles"] = {}), window["__yc_myBattleSrcBundles"][_0x562fb4] = 0x1, window["__yc_myBattleHasRecord"] = !0x0), _0x4fa576(_0x187ea3), [_0x187ea3, _0x187ea3]) : [_0x34d065, _0x40d7a2];
                }
                var _0x2a55a4 = _0x51dbb0[_0x5c7ef6];
                if (_0x2a55a4 && _0x2a55a4 !== _0x5c7ef6) {
                  if ((!window["__yc_myBattleSrcBundles"] || !window["__yc_myBattleSrcBundles"][_0x5c7ef6]) && window["__yc_myBattleHasRecord"]) return [_0x34d065, _0x40d7a2];
                  if (_0x4fa576(_0x2a55a4), _0x562fb4 === _0x5c7ef6) return [_0x2a55a4, _0x2a55a4];
                  if (0x0 === _0x562fb4["indexOf"](_0x5c7ef6)) {
                    var _0x377202 = _0x2a55a4 + _0x562fb4["slice"](_0x5c7ef6["length"]),
                      _0x388d4b = window["__yc_bundleRes"] && window["__yc_bundleRes"][_0x2a55a4];
                    if (_0x388d4b && !_0x388d4b[_0x377202]) {
                      var _0x4ac52c = _0x4d6f6a[_0x377202];
                      return _0x4ac52c && _0x388d4b[_0x4ac52c] ? [_0x2a55a4, _0x4ac52c] : [_0x34d065, _0x40d7a2];
                    }
                    return [_0x2a55a4, _0x377202];
                  }
                }
              } catch (_0x4e73c3) {}
              return [_0x34d065, _0x40d7a2];
            }
            function _0x4fa576(_0x395e7c) {
              try {
                if (!_0x395e7c) return;
                if (window["__yc_dumpedBundles"] || (window["__yc_dumpedBundles"] = {}), window["__yc_dumpedBundles"][_0x395e7c]) return;
                var _0x4ca356 = "undefined" != typeof cc && cc["assetManager"] && cc["assetManager"]["bundles"] && cc["assetManager"]["bundles"]["get"] ? cc["assetManager"]["bundles"]["get"](_0x395e7c) : null;
                if (!_0x4ca356) return;
                var _0x982c5a = [],
                  _0xef2f82 = "none",
                  _0x548f89 = _0x4ca356["_config"] || _0x4ca356["config"] || {};
                function _0x1bfedf(_0x51dd36) {
                  return "string" == typeof _0x51dd36 && _0x51dd36 ? _0x51dd36 : null;
                }
                try {
                  if ("function" == typeof _0x4ca356["getDirWithPath"]) {
                    for (var _0x251400 = _0x4ca356["getDirWithPath"]("") || [], _0x203949 = 0x0; _0x203949 < _0x251400["length"]; _0x203949++) {
                      var _0x36d8b3 = _0x251400[_0x203949],
                        _0x1c1182 = _0x1bfedf(_0x36d8b3) || _0x36d8b3 && _0x1bfedf(_0x36d8b3["path"]) || (Array["isArray"](_0x36d8b3) ? _0x1bfedf(_0x36d8b3[0x0]) : null);
                      _0x1c1182 && _0x982c5a["push"](_0x1c1182);
                    }
                    _0x982c5a["length"] && (_0xef2f82 = "dir");
                  }
                } catch (_0x5781bc) {}
                if (!_0x982c5a["length"]) try {
                  var _0x5dc3a0 = _0x548f89["paths"],
                    _0x59364d = _0x5dc3a0 && (_0x5dc3a0["_map"] || _0x5dc3a0) || null;
                  if (_0x59364d) {
                    for (var _0x4b625e in _0x59364d) if (!_0x59364d["hasOwnProperty"] || _0x59364d["hasOwnProperty"](_0x4b625e)) {
                      var _0xa5aabd = _0x59364d[_0x4b625e],
                        _0x39b648 = _0x1bfedf(_0x4b625e) || _0x1bfedf(_0xa5aabd) || (Array["isArray"](_0xa5aabd) ? _0x1bfedf(_0xa5aabd[0x0]) : null) || _0xa5aabd && _0x1bfedf(_0xa5aabd["path"]);
                      _0x39b648 && _0x982c5a["push"](_0x39b648);
                    }
                    _0x982c5a["length"] && (_0xef2f82 = "paths(key)");
                  }
                } catch (_0x440c64) {}
                if (!_0x982c5a["length"]) try {
                  var _0x886809 = _0x548f89["assetInfos"];
                  _0x886809 && "function" == typeof _0x886809["forEach"] && (_0x886809["forEach"](function (_0x337729) {
                    var _0x40f80e = _0x337729 && (_0x1bfedf(_0x337729["path"]) || _0x1bfedf(_0x337729["uuid"])) || null;
                    _0x40f80e && _0x982c5a["push"](_0x40f80e);
                  }), _0x982c5a["length"] && (_0xef2f82 = "assetInfos"));
                } catch (_0x59299e) {}
                if (_0x982c5a["length"]) {
                  window["__yc_bundleRes"] || (window["__yc_bundleRes"] = {});
                  for (var _0x12095f = window["__yc_bundleRes"][_0x395e7c] = {}, _0x4dc99b = 0x0; _0x4dc99b < _0x982c5a["length"]; _0x4dc99b++) _0x12095f[_0x982c5a[_0x4dc99b]] = 0x1;
                }
                window["__yc_dumpedBundles"][_0x395e7c] = 0x1;
                try {
                  console["log"](_0x430b82 + " [转储]bundle " + _0x395e7c + " 资源数=" + _0x982c5a["length"] + " src=" + _0xef2f82 + " → " + _0x982c5a["slice"](0x0, 0x78)["join"](","));
                } catch (_0x4f1902) {}
              } catch (_0x162b0a) {}
            }
            function _0x4aa520(_0xb2e382, _0x123561) {
              try {
                !0x1 === window["__yunqi_skinToHeroDirty"] && window["__yunqi_spinePathMap"] || _0x1535b1();
                var _0x2bf4c7 = window["__yunqi_spinePathMap"] || {},
                  _0x2aaf48 = window["__yunqi_effectResMap"] || {},
                  _0x485b38 = (null != _0xb2e382 ? String(_0xb2e382) : "") + "|" + (null != _0x123561 ? String(_0x123561) : "");
                if (_0x2aaf48[_0x485b38]) {
                  var _0x22b28e = _0x2aaf48[_0x485b38]["split"]("|");
                  if (0x2 === _0x22b28e["length"]) return [_0x22b28e[0x0], _0x22b28e[0x1]];
                }
                if (null != _0xb2e382 && null != _0x123561 && String(_0xb2e382) === String(_0x123561)) {
                  var _0x3ee637 = _0x2bf4c7[_0xb2e382] || _0x2aaf48[_0xb2e382];
                  if (_0x3ee637 && _0x3ee637 !== _0xb2e382) return [_0x3ee637, _0x3ee637];
                }
              } catch (_0x1b88fe) {}
              return [_0xb2e382, _0x123561];
            }
            function _0x525104(_0x436700, _0x4f7df2, _0xa7072d) {
              try {
                if (!(_0x436700 && _0x4f7df2 && _0x436700["uri"] && _0x4f7df2["uri"] && _0x436700["uri"] !== _0x4f7df2["uri"])) return;
                _0xa7072d[_0x436700["uri"]] = _0x4f7df2["uri"];
                var _0x5b0193 = null != _0x436700["bundle"] ? String(_0x436700["bundle"]) : "",
                  _0x3e5a92 = null != _0x4f7df2["bundle"] ? String(_0x4f7df2["bundle"]) : "";
                _0x5b0193 && _0x3e5a92 && (_0xa7072d[_0x5b0193 + "|" + _0x436700["uri"]] = _0x3e5a92 + "|" + _0x4f7df2["uri"], _0x5b0193 !== _0x3e5a92 && (_0xa7072d[_0x5b0193] = _0x3e5a92));
              } catch (_0x156673) {}
            }
            function _0x9ed04b(_0x3a288f, _0x415ac1) {
              try {
                var _0x4310de = _0x3a288f && _0x3a288f["team"];
                if (!_0x4310de) return !0x1;
                if ("function" == typeof _0x4310de["forEach"]) {
                  var _0x3d9ec7 = !0x1;
                  return _0x4310de["forEach"](function (_0xfc7511) {
                    !_0x3d9ec7 && _0xfc7511 && (_0xfc7511["id"] === _0x415ac1 || _0xfc7511["heroId"] === _0x415ac1 || _0xfc7511["hero"] && (_0xfc7511["hero"]["id"] === _0x415ac1 || _0xfc7511["hero"]["heroId"] === _0x415ac1)) && (_0x3d9ec7 = !0x0);
                  }), _0x3d9ec7;
                }
                if (Array["isArray"](_0x4310de)) for (var _0x111c30 = 0x0; _0x111c30 < _0x4310de["length"]; _0x111c30++) {
                  var _0x443efe = _0x4310de[_0x111c30];
                  if (_0x443efe && (_0x443efe["id"] === _0x415ac1 || _0x443efe["heroId"] === _0x415ac1)) return !0x0;
                }
              } catch (_0x4b49dd) {}
              return !0x1;
            }
            function _0x144baf(_0x25cc13, _0x1e75ca) {
              var _0x389d82 = [];
              try {
                var _0x369b2b = [];
                _0x25cc13["leftTeam"] && _0x369b2b["push"](_0x25cc13["leftTeam"]), _0x25cc13["rightTeam"] && _0x369b2b["push"](_0x25cc13["rightTeam"]), _0x25cc13["leftTeams"] && _0x25cc13["leftTeams"]["length"] && (_0x369b2b = _0x369b2b["concat"](Array["prototype"]["slice"]["call"](_0x25cc13["leftTeams"]))), _0x25cc13["rightTeams"] && _0x25cc13["rightTeams"]["length"] && (_0x369b2b = _0x369b2b["concat"](Array["prototype"]["slice"]["call"](_0x25cc13["rightTeams"])));
                for (var _0x56518f = 0x0; _0x56518f < _0x369b2b["length"]; _0x56518f++) _0x369b2b[_0x56518f] && _0x369b2b[_0x56518f]["roleId"] === _0x1e75ca && _0x389d82["push"](_0x369b2b[_0x56518f]);
              } catch (_0x2f47d6) {}
              return _0x389d82;
            }
            function _0x1e00c6(_0x580f6c, _0x27620c) {
              try {
                if (window["__yc_myCampWorld"] !== _0x580f6c && (window["__yc_myCamp"] = null, window["__yc_myCampWorld"] = _0x580f6c), null != window["__yc_myCamp"]) return window["__yc_myCamp"];
                var _0x4ecd9b = _0x580f6c && _0x580f6c["options"] && _0x580f6c["options"]["battleData"],
                  _0xb2f244 = _0x27620c && _0x27620c["actor"],
                  _0x4e8a58 = _0xb2f244 && _0xb2f244["camp"],
                  _0x317ed8 = window["ROLE"] && window["ROLE"]["roleId"];
                if (!_0x4ecd9b || null == _0x4e8a58 || null == _0x317ed8) return null;
                var _0x2adb3d = null;
                if (_0xb2f244["data"] && (_0x2adb3d = null != _0xb2f244["data"]["id"] ? _0xb2f244["data"]["id"] : null != _0xb2f244["data"]["heroId"] ? _0xb2f244["data"]["heroId"] : _0xb2f244["data"]["oriHeroId"]), null == _0x2adb3d && (_0x2adb3d = _0xb2f244["id"]), null == _0x2adb3d) return null;
                for (var _0x4478bc = _0x144baf(_0x4ecd9b, _0x317ed8), _0x4e6f51 = 0x0; _0x4e6f51 < _0x4478bc["length"]; _0x4e6f51++) if (_0x9ed04b(_0x4478bc[_0x4e6f51], _0x2adb3d)) {
                  window["__yc_myCamp"] = _0x4e8a58;
                  try {
                    console["log"](_0x430b82 + " Phase7 本方camp=" + _0x4e8a58 + " (battleData锚定 myRoleId=" + _0x317ed8 + " hid=" + _0x2adb3d + ")");
                  } catch (_0xac2262) {}
                  return _0x4e8a58;
                }
              } catch (_0x26fe15) {}
              return null;
            }
            if (window["__yunqi_remapBattleSpine"] = _0x4356f8, window["__yunqi_dumpBundle"] = _0x4fa576, window["__yunqi_remapLoadAssetPair"] = _0x4aa520, window["__yunqi_resolveMyCamp"] = _0x1e00c6, _0x5eea3c) {
              if ("function" == typeof _0x5eea3c["showHero"] && !_0x5eea3c["showHero"]["__ycReskinHooked"]) {
                var _0x4eda48 = _0x5eea3c["showHero"];
                _0x5eea3c["showHero"] = function () {
                  var _0x573739 = Array["prototype"]["slice"]["call"](arguments);
                  try {
                    _0x573739["length"] >= 0x2 && (_0x573739[0x1] = _0x2f2b56(_0x573739[0x1]));
                  } catch (_0x291e84) {}
                  return _0x4eda48["apply"](this, _0x573739);
                }, _0x5eea3c["showHero"]["__ycReskinHooked"] = !0x0;
              }
              if ("function" == typeof _0x5eea3c["showHeroNew"] && !_0x5eea3c["showHeroNew"]["__ycReskinHooked"]) {
                var _0x5407dd = _0x5eea3c["showHeroNew"];
                _0x5eea3c["showHeroNew"] = function () {
                  var _0x5bf929 = Array["prototype"]["slice"]["call"](arguments);
                  try {
                    _0x5bf929["length"] >= 0x2 && (_0x5bf929[0x1] = _0x2f2b56(_0x5bf929[0x1]));
                  } catch (_0x50eb3f) {}
                  return _0x5407dd["apply"](this, _0x5bf929);
                }, _0x5eea3c["showHeroNew"]["__ycReskinHooked"] = !0x0;
              }
              if ("function" == typeof _0x5eea3c["showHeroIconFromDetail"] && !_0x5eea3c["showHeroIconFromDetail"]["__ycReskinHooked"]) {
                var _0x52fc94 = _0x5eea3c["showHeroIconFromDetail"];
                _0x5eea3c["showHeroIconFromDetail"] = function () {
                  var _0x979e72 = Array["prototype"]["slice"]["call"](arguments);
                  try {
                    if (!window["__yc_skinSuppress"]) {
                      var _0x53c16a = "number" == typeof _0x979e72[0x1] ? _0x979e72[0x1] : parseInt(_0x979e72[0x1]),
                        _0x499e4e = window["__yunqi_skinOverrides"] || _0x347d22;
                      if (_0x53c16a && _0x499e4e && _0x499e4e[_0x53c16a]) ((window["__yunqi_origSkinLists"] || {})[_0x53c16a] || [])["indexOf"](_0x499e4e[_0x53c16a]) >= 0x0 && (_0x979e72[0x6] = _0x499e4e[_0x53c16a]);
                    }
                  } catch (_0x584727) {}
                  return _0x52fc94["apply"](this, _0x979e72);
                }, _0x5eea3c["showHeroIconFromDetail"]["__ycReskinHooked"] = !0x0;
              }
              try {
                if (_0x596579 && "function" == typeof _0x596579["getAvatarId"] && !_0x596579["getAvatarId"]["__ycSuppressHooked"]) {
                  var _0x2c54ab = _0x596579["getAvatarId"];
                  _0x596579["getAvatarId"] = function (_0x36ddb8, _0x4df1e7) {
                    if (window["__yc_skinSuppress"]) try {
                      return _0x2c54ab["call"](this, _0x36ddb8, !0x0);
                    } catch (_0x1f3d5b) {}
                    return _0x2c54ab["apply"](this, arguments);
                  }, _0x596579["getAvatarId"]["__ycSuppressHooked"] = !0x0;
                  try {
                    console["log"](_0x430b82 + " Phase4 getAvatarId suppress 兜底已安装");
                  } catch (_0x33ba4c) {}
                }
              } catch (_0x2519c1) {}
              if ("function" == typeof _0x5eea3c["setHeadIcon"] && !_0x5eea3c["setHeadIcon"]["__ycFrameHooked"]) {
                var _0xf51671 = _0x5eea3c["setHeadIcon"];
                _0x5eea3c["setHeadIcon"] = function (_0x4935b5, _0x481644, _0x4922e0, _0x6b1a81, _0x1fc6ed) {
                  try {
                    if (_0x4922e0 === (window["ROLE"] && window["ROLE"]["roleId"]) && window["__yunqi_frameOverride"]) {
                      var _0x433b73 = Array["prototype"]["slice"]["call"](arguments);
                      return _0x433b73[0x3] = {
                        id: window["__yunqi_frameOverride"],
                        expire: -0x1
                      }, _0xf51671["apply"](this, _0x433b73);
                    }
                  } catch (_0x1e5991) {}
                  return _0xf51671["apply"](this, arguments);
                }, _0x5eea3c["setHeadIcon"]["__ycFrameHooked"] = !0x0;
                try {
                  console["log"](_0x430b82 + " Phase9 头像框 hook 已安装 (setHeadIcon)");
                } catch (_0x18e587) {}
              }
              try {
                console["log"](_0x430b82 + " Phase4 渲染层重映射已安装 (showHero/showHeroNew/showHeroIconFromDetail)");
              } catch (_0x3577bb) {}
            } else try {
              console["log"](_0x430b82 + " Phase4 警告: 未取到 UIHelper 模块，渲染层重映射跳过");
            } catch (_0x4156fb) {}
            !function _0x141f6a(_0x44ccbb) {
              try {
                var _0x445c85 = window["__require"] && window["__require"]("manager-asset"),
                  _0x32f70d = _0x445c85 && _0x445c85["BattleAssetManager"] || null;
                if (_0x32f70d && _0x32f70d["prototype"] && "function" == typeof _0x32f70d["prototype"]["loadSpine"]) {
                  if (!_0x32f70d["prototype"]["loadSpine"]["__ycReskinHooked"]) {
                    var _0x5b96be = _0x32f70d["prototype"]["loadSpine"];
                    _0x32f70d["prototype"]["loadSpine"] = function (_0x3dcd05, _0x51436c, _0x1155bf) {
                      var _0x4f3f4e = _0x3dcd05,
                        _0x3b1610 = _0x51436c;
                      try {
                        var _0x55a85c = _0x4356f8(_0x3dcd05, _0x51436c),
                          _0x39f1e8 = _0x55a85c[0x0] !== _0x3dcd05 || _0x55a85c[0x1] !== _0x51436c;
                        _0x3dcd05 = _0x55a85c[0x0], _0x51436c = _0x55a85c[0x1];
                        try {
                          if (!0x1 !== window["__yunqi_spineDiag"]) {
                            if ((window["__yc_spineDiagN"] = (window["__yc_spineDiagN"] || 0x0) + 0x1) <= 0x50) {
                              var _0x27a303 = _0x3b1610["indexOf"]("_buff_shield") >= 0x0 ? " [英雄盾层·叠加保留]" : "";
                              console["log"](_0x430b82 + " [诊断]loadSpine " + _0x4f3f4e + "/" + _0x3b1610 + " → " + _0x3dcd05 + "/" + _0x51436c + " remap=" + _0x39f1e8 + " camp=" + window["__yc_battleRemapAllow"] + _0x27a303);
                            }
                          }
                        } catch (_0x11499b) {}
                      } catch (_0x57e38f) {}
                      return _0x5b96be["call"](this, _0x3dcd05, _0x51436c, _0x1155bf);
                    }, _0x32f70d["prototype"]["loadSpine"]["__ycReskinHooked"] = !0x0;
                    try {
                      console["log"](_0x430b82 + " Phase5 战斗骨骼换肤已安装 (BattleAssetManager.loadSpine)");
                    } catch (_0x4b2f75) {}
                  }
                  return;
                }
              } catch (_0x3cd50d) {}
              if (_0x44ccbb < 0x28) setTimeout(function () {
                _0x141f6a(_0x44ccbb + 0x1);
              }, 0x1f4);else try {
                console["log"](_0x430b82 + " Phase5 警告: 未取到 BattleAssetManager，战斗骨骼换肤跳过");
              } catch (_0x3c6863) {}
            }(0x0), function _0x4838cf(_0x4ddb54) {
              try {
                var _0x4b1498 = window["__require"] && window["__require"]("ResourceManager"),
                  _0x32efb1 = _0x4b1498 && _0x4b1498["ResourceManager"] || _0x4b1498;
                if (_0x32efb1 && _0x32efb1["prototype"] && "function" == typeof _0x32efb1["prototype"]["loadAsset"]) {
                  if (!_0x32efb1["prototype"]["loadAsset"]["__ycReskinHooked"]) {
                    var _0x15a071 = _0x32efb1["prototype"]["loadAsset"];
                    _0x32efb1["prototype"]["loadAsset"] = function (_0x202d2e, _0x371337) {
                      try {
                        if (!0x0 === window["__yc_battleRemapAllow"]) {
                          var _0x2f04d3 = _0x4aa520(_0x202d2e, _0x371337);
                          if (_0x2f04d3[0x0] !== _0x202d2e || _0x2f04d3[0x1] !== _0x371337) {
                            try {
                              (window["__yc_laLog"] = (window["__yc_laLog"] || 0x0) + 0x1) <= 0x8 && console["log"](_0x430b82 + " Phase5b loadAsset 重映射 " + _0x202d2e + "/" + _0x371337 + " → " + _0x2f04d3[0x0] + "/" + _0x2f04d3[0x1]);
                            } catch (_0xe8655b) {}
                            _0x202d2e = _0x2f04d3[0x0], _0x371337 = _0x2f04d3[0x1];
                          }
                        }
                      } catch (_0x53c2dd) {}
                      var _0x11b2c9 = Array["prototype"]["slice"]["call"](arguments);
                      return _0x11b2c9[0x0] = _0x202d2e, _0x11b2c9[0x1] = _0x371337, _0x15a071["apply"](this, _0x11b2c9);
                    }, _0x32efb1["prototype"]["loadAsset"]["__ycReskinHooked"] = !0x0;
                    try {
                      console["log"](_0x430b82 + " Phase5b loadAsset hook 已安装 (ResourceManager, 阵营门控)");
                    } catch (_0x412c81) {}
                  }
                  return;
                }
              } catch (_0x44ebd1) {}
              if (_0x4ddb54 < 0x28) setTimeout(function () {
                _0x4838cf(_0x4ddb54 + 0x1);
              }, 0x1f4);else try {
                console["log"](_0x430b82 + " Phase5b 警告: 未取到 ResourceManager.loadAsset");
              } catch (_0x49b262) {}
            }(0x0), function _0x2bef3c(_0x3b7963) {
              try {
                var _0x1ec5d6 = !0x1,
                  _0x408c52 = window["__require"] && window["__require"]("BattleUIManager"),
                  _0x7bbdb7 = _0x408c52 && _0x408c52["BattleUIManager"] || null;
                function _0x21ee08(_0xa5d0ec, _0x5560ef, _0x41e264) {
                  if (!_0xa5d0ec || "function" != typeof _0xa5d0ec[_0x5560ef] || _0xa5d0ec[_0x5560ef]["__ycPreloadHooked"]) return !0x1;
                  var _0x4b9810 = _0xa5d0ec[_0x5560ef];
                  _0xa5d0ec[_0x5560ef] = function () {
                    var _0x5c9330 = window["__yc_currentBattleData"],
                      _0x1b351c = window["__yc_inBattlePreload"],
                      _0x2d96f6 = arguments[0x2];
                    window["__yc_currentBattleData"] = _0x2d96f6 && _0x2d96f6["battleData"], window["__yc_inBattlePreload"] = !0x0;
                    var _0x2d4517 = function () {
                      window["__yc_inBattlePreload"] = _0x1b351c, window["__yc_currentBattleData"] = _0x5c9330;
                    };
                    try {
                      var _0x5c5555 = _0x4b9810["apply"](this, arguments);
                      return _0x5c5555 && "function" == typeof _0x5c5555["then"] ? _0x5c5555["then"](function (_0x1dd9ee) {
                        return _0x2d4517(), _0x1dd9ee;
                      }, function (_0x507a83) {
                        throw _0x2d4517(), _0x507a83;
                      }) : (_0x2d4517(), _0x5c5555);
                    } catch (_0x2fc7a6) {
                      throw _0x2d4517(), _0x2fc7a6;
                    }
                  }, _0xa5d0ec[_0x5560ef]["__ycPreloadHooked"] = !0x0;
                  try {
                    console["log"](_0x430b82 + " Phase5c 战斗预加载 hook 已安装 (" + _0x41e264 + ")");
                  } catch (_0x59bdf8) {}
                  return !0x0;
                }
                _0x7bbdb7 && _0x7bbdb7["prototype"] && (_0x21ee08(_0x7bbdb7["prototype"], "showBattleLoading", "showBattleLoading") && (_0x1ec5d6 = !0x0), _0x21ee08(_0x7bbdb7["prototype"], "showSkyBattleLoading", "showSkyBattleLoading") && (_0x1ec5d6 = !0x0));
                var _0x4084c1 = window["__require"] && (window["__require"]("battle-data") || window["__require"]("ClientActorData")),
                  _0x412a3d = _0x4084c1 && _0x4084c1["ClientActorData"] || null;
                if (_0x412a3d && "function" == typeof _0x412a3d["getActorAvatar"] && !_0x412a3d["getActorAvatar"]["__ycPreloadHooked"]) {
                  var _0x48baf7 = _0x412a3d["getActorAvatar"];
                  _0x412a3d["getActorAvatar"] = function (_0xaa49b9) {
                    var _0x4a56bc = _0x48baf7["apply"](this, arguments);
                    try {
                      if (window["__yc_inBattlePreload"] && function (_0x23aa60) {
                        try {
                          var _0x33c409 = window["__yc_currentBattleData"],
                            _0x251905 = window["ROLE"] && window["ROLE"]["roleId"];
                          if (!_0x33c409 || null == _0x251905 || !_0x23aa60) return !0x1;
                          var _0x46e4b4 = null != _0x23aa60["id"] ? _0x23aa60["id"] : null != _0x23aa60["heroId"] ? _0x23aa60["heroId"] : null;
                          if (null == _0x46e4b4) return !0x1;
                          for (var _0x4647de = _0x144baf(_0x33c409, _0x251905), _0x3e4b68 = 0x0; _0x3e4b68 < _0x4647de["length"]; _0x3e4b68++) if (_0x9ed04b(_0x4647de[_0x3e4b68], _0x46e4b4)) return !0x0;
                        } catch (_0x101463) {}
                        return !0x1;
                      }(_0xaa49b9)) {
                        var _0x359bac = _0x2f2b56(_0x4a56bc);
                        if (_0x359bac !== _0x4a56bc) {
                          try {
                            (window["__yc_gaaLog"] = (window["__yc_gaaLog"] || 0x0) + 0x1) <= 0x8 && console["log"](_0x430b82 + " Phase5c getActorAvatar 预加载 " + _0x4a56bc + " → " + _0x359bac);
                          } catch (_0x2ba070) {}
                          _0x4a56bc = _0x359bac;
                        }
                      }
                    } catch (_0x4f8709) {}
                    return _0x4a56bc;
                  }, _0x412a3d["getActorAvatar"]["__ycPreloadHooked"] = !0x0;
                  try {
                    console["log"](_0x430b82 + " Phase5c getActorAvatar hook 已安装");
                  } catch (_0x484ce6) {}
                  _0x1ec5d6 = !0x0;
                }
                if (_0x1ec5d6) return;
              } catch (_0x3f440c) {}
              if (_0x3b7963 < 0x28) setTimeout(function () {
                _0x2bef3c(_0x3b7963 + 0x1);
              }, 0x1f4);else try {
                console["log"](_0x430b82 + " Phase5c 警告: 战斗预加载 hook 未完全就绪");
              } catch (_0x9bb4b5) {}
            }(0x0), function _0x491bba(_0x5ba39d) {
              try {
                var _0x45c4f1 = window["__require"] && window["__require"]("PlayerInfoDialog");
                if (_0x45c4f1) {
                  var _0xe8f647 = [_0x45c4f1["PlayerInfoDialog"], _0x45c4f1["PlayerInfoTopDialog"]],
                    _0x1e58bd = !0x1;
                  function _0x370e6a(_0x1b0bd1) {
                    try {
                      var _0x195775 = _0x1b0bd1 && _0x1b0bd1["model"] && "function" == typeof _0x1b0bd1["model"]["get"] && _0x1b0bd1["model"]["get"]("ROLE_INFO"),
                        _0x18a2c7 = window["ROLE"] && window["ROLE"]["roleId"];
                      return !!(_0x195775 && _0x195775["roleId"] && _0x18a2c7 && _0x195775["roleId"] !== _0x18a2c7);
                    } catch (_0x420208) {
                      return !0x1;
                    }
                  }
                  for (var _0xc553bf = 0x0; _0xc553bf < _0xe8f647["length"]; _0xc553bf++) {
                    var _0x4b18fe = _0xe8f647[_0xc553bf];
                    _0x4b18fe && _0x4b18fe["prototype"] && !_0x4b18fe["prototype"]["__ycOwnerHooked"] && (function (_0x36f2eb) {
                      for (var _0x26fa8e = ["onShow", "onShown"], _0x34b38b = 0x0; _0x34b38b < _0x26fa8e["length"]; _0x34b38b++) (function (_0xd1b62d) {
                        if ("function" == typeof _0x36f2eb[_0xd1b62d]) {
                          var _0x1afbdd = _0x36f2eb[_0xd1b62d];
                          _0x36f2eb[_0xd1b62d] = function () {
                            try {
                              var _0x449935 = _0x370e6a(this);
                              if (window["__yc_skinSuppress"] = _0x449935, _0x449935) try {
                                console["log"](_0x430b82 + " Phase6 他人名片 suppress=on (不换肤)");
                              } catch (_0x553426) {}
                            } catch (_0x32c305) {}
                            return _0x1afbdd["apply"](this, arguments);
                          };
                        }
                      })(_0x26fa8e[_0x34b38b]);
                      if ("function" == typeof _0x36f2eb["onHide"]) {
                        var _0x57efa1 = _0x36f2eb["onHide"];
                        _0x36f2eb["onHide"] = function () {
                          try {
                            window["__yc_skinSuppress"] = !0x1;
                          } catch (_0x33a5e6) {}
                          return _0x57efa1["apply"](this, arguments);
                        };
                      }
                      _0x36f2eb["__ycOwnerHooked"] = !0x0;
                    }(_0x4b18fe["prototype"]), _0x1e58bd = !0x0);
                  }
                  if (_0x1e58bd) {
                    try {
                      console["log"](_0x430b82 + " Phase6 归属门控已安装 (查看他人名片不换肤)");
                    } catch (_0x26a5ed) {}
                    return;
                  }
                }
              } catch (_0x149713) {}
              if (_0x5ba39d < 0x28) setTimeout(function () {
                _0x491bba(_0x5ba39d + 0x1);
              }, 0x1f4);else try {
                console["log"](_0x430b82 + " Phase6 警告: 未取到 PlayerInfoDialog，归属门控跳过");
              } catch (_0x491339) {}
            }(0x0), function _0x92163(_0x3f7686) {
              try {
                var _0x31f30f = window["__require"] && window["__require"]("system-skeleton-loader"),
                  _0x58be67 = _0x31f30f && _0x31f30f["SystemSkeletonLoader"] || null;
                if (_0x58be67 && _0x58be67["prototype"] && "function" == typeof _0x58be67["prototype"]["onEntityAdded"]) {
                  if (!_0x58be67["prototype"]["onEntityAdded"]["__ycCampHooked"]) {
                    var _0x48c29b = _0x58be67["prototype"]["onEntityAdded"];
                    if (_0x58be67["prototype"]["onEntityAdded"] = function (_0x28a89a, _0x3db716) {
                      var _0x23fa77 = window["__yc_battleRemapAllow"],
                        _0x3de5de = !0x1;
                      try {
                        this["world"] !== window["__yc_lastBattleWorld"] && (window["__yc_lastBattleWorld"] = this["world"], window["__yc_myBattleSrcBundles"] = {}, window["__yc_myBattleHasRecord"] = !0x1);
                        var _0x384dd8 = _0x28a89a && _0x28a89a["actor"] && _0x28a89a["actor"]["camp"],
                          _0x4be608 = _0x1e00c6(this["world"], _0x28a89a);
                        null != _0x384dd8 && null != _0x4be608 && (window["__yc_battleRemapAllow"] = _0x384dd8 === _0x4be608), _0x3de5de = function (_0x420eb2) {
                          try {
                            var _0x5b5fbd = _0x256fef(_0x420eb2);
                            if (!_0x558ebc(_0x5b5fbd)) return !0x1;
                            window["__yc_armorShieldCtxStack"] || (window["__yc_armorShieldCtxStack"] = []);
                            var _0x48d3a1 = _0x78e5f0(_0x420eb2);
                            window["__yc_armorShieldCtxStack"]["push"](!!_0x48d3a1);
                            try {
                              !0x1 !== window["__yunqi_spineDiag"] && (window["__yc_shieldPushDiagN"] = (window["__yc_shieldPushDiagN"] || 0x0) + 0x1) <= 0x28 && console["log"](_0x430b82 + " [v3.9.4盾层]压栈 battleEffect/" + _0x5b5fbd["path"] + " ally=" + _0x48d3a1 + " ctx→" + window["__yc_armorShieldCtxStack"]["length"]);
                            } catch (_0x501942) {}
                            return !0x0;
                          } catch (_0x2fc240) {}
                          return !0x1;
                        }(_0x28a89a);
                      } catch (_0x177cc9) {}
                      try {
                        return _0x48c29b["apply"](this, arguments);
                      } finally {
                        window["__yc_battleRemapAllow"] = _0x23fa77, _0x3de5de && function () {
                          try {
                            var _0x239e04 = window["__yc_armorShieldCtxStack"];
                            _0x239e04 && _0x239e04["length"] && _0x239e04["pop"]();
                          } catch (_0x4f726f) {}
                        }();
                      }
                    }, _0x58be67["prototype"]["onEntityAdded"]["__ycCampHooked"] = !0x0, "function" == typeof _0x58be67["prototype"]["setSkeleton"] && !_0x58be67["prototype"]["setSkeleton"]["__ycDqShieldHooked"]) {
                      var _0x5a6f23 = _0x58be67["prototype"]["setSkeleton"];
                      _0x58be67["prototype"]["setSkeleton"] = function (_0x964774, _0x6f6275, _0x2b9ee5) {
                        _0x5a6f23["apply"](this, arguments);
                        try {
                          var _0xc48c62 = _0x256fef(_0x964774);
                          _0x964774 && _0x558ebc(_0xc48c62) && _0x78e5f0(_0x964774) && (_0x53c2f8(_0x964774), _0x437b33(_0x964774), _0x3f88b5(_0x964774));
                        } catch (_0x5a7b79) {}
                      }, _0x58be67["prototype"]["setSkeleton"]["__ycDqShieldHooked"] = !0x0;
                    }
                    try {
                      console["log"](_0x430b82 + " Phase7 战斗阵营门控已安装 (SystemSkeletonLoader + v3.9.4盾层)");
                    } catch (_0x50cd4c) {}
                  }
                  return;
                }
              } catch (_0x492444) {}
              if (_0x3f7686 < 0x28) setTimeout(function () {
                _0x92163(_0x3f7686 + 0x1);
              }, 0x1f4);else try {
                console["log"](_0x430b82 + " Phase7 警告: 未取到 SystemSkeletonLoader，战斗阵营门控跳过");
              } catch (_0x48fa1b) {}
            }(0x0), function _0x242244(_0x47537b) {
              try {
                var _0xda44f5 = window["__require"] && window["__require"]("system-create-effect"),
                  _0x54363e = _0xda44f5 && _0xda44f5["SystemCreateEffect"] || null;
                if (_0x54363e && _0x54363e["prototype"]) {
                  if ("function" == typeof _0x54363e["prototype"]["_createArmorEffect"] && !_0x54363e["prototype"]["_createArmorEffect"]["__ycDqShieldHooked"]) {
                    var _0x1cbe96 = _0x54363e["prototype"]["_createArmorEffect"];
                    _0x54363e["prototype"]["_createArmorEffect"] = function (_0x598c68) {
                      var _0x25c13c = null;
                      try {
                        _0x25c13c = _0x5cbde6(_0x598c68);
                      } catch (_0x37e5c7) {}
                      _0xeabc91(_0x598c68, _0x25c13c);
                      var _0x3512bc = _0x1cbe96["apply"](this, arguments);
                      try {
                        _0x3512bc && (_0x3512bc !== _0x598c68 && _0xeabc91(_0x3512bc, _0x25c13c), _0x53c2f8(_0x3512bc, _0x25c13c));
                      } catch (_0x11c6f0) {}
                      return _0x3512bc;
                    }, _0x54363e["prototype"]["_createArmorEffect"]["__ycDqShieldHooked"] = !0x0;
                  }
                  if ("function" == typeof _0x54363e["prototype"]["_createArmorIntroduceEffect"] && !_0x54363e["prototype"]["_createArmorIntroduceEffect"]["__ycDqShieldHooked"]) {
                    var _0x2f1e22 = _0x54363e["prototype"]["_createArmorIntroduceEffect"];
                    _0x54363e["prototype"]["_createArmorIntroduceEffect"] = function (_0x5b6185) {
                      var _0x1efb8c = null;
                      try {
                        _0x1efb8c = _0x5cbde6(_0x5b6185);
                      } catch (_0x2c90ea) {}
                      _0xeabc91(_0x5b6185, _0x1efb8c);
                      var _0x239781 = _0x2f1e22["apply"](this, arguments);
                      try {
                        _0x239781 && (_0x239781 !== _0x5b6185 && _0xeabc91(_0x239781, _0x1efb8c), _0x53c2f8(_0x239781, _0x1efb8c));
                      } catch (_0x3599c3) {}
                      return _0x239781;
                    }, _0x54363e["prototype"]["_createArmorIntroduceEffect"]["__ycDqShieldHooked"] = !0x0;
                  }
                  if (_0x54363e["prototype"]["_createArmorEffect"] && _0x54363e["prototype"]["_createArmorEffect"]["__ycDqShieldHooked"]) {
                    try {
                      console["log"](_0x430b82 + " Phase7b 大乔盾层预注册已安装 (createArmor* 前 WeakMap + 后标记)");
                    } catch (_0x3aced2) {}
                    return;
                  }
                }
              } catch (_0x349015) {}
              if (_0x47537b < 0x28) setTimeout(function () {
                _0x242244(_0x47537b + 0x1);
              }, 0x1f4);else try {
                console["log"](_0x430b82 + " Phase7b 警告: 未取到 SystemCreateEffect，盾层归属上下文跳过");
              } catch (_0x594078) {}
            }(0x0), function _0x56c5d1(_0x5eef0a) {
              try {
                var _0x4053b8 = window["__require"] && window["__require"]("system-effect"),
                  _0x24fc5e = _0x4053b8 && _0x4053b8["SystemEffect"] || null;
                if (_0x24fc5e && _0x24fc5e["prototype"] && "function" == typeof _0x24fc5e["prototype"]["_updateEffectPos"]) {
                  if (!_0x24fc5e["prototype"]["_updateEffectPos"]["__ycDqShieldHooked"]) {
                    var _0x5d48d9 = _0x24fc5e["prototype"]["_updateEffectPos"];
                    _0x24fc5e["prototype"]["_updateEffectPos"] = function (_0x1297c1, _0x581f0c) {
                      _0x5d48d9["apply"](this, arguments);
                      try {
                        _0x3f88b5(_0x1297c1);
                      } catch (_0x37d835) {}
                    }, _0x24fc5e["prototype"]["_updateEffectPos"]["__ycDqShieldHooked"] = !0x0;
                    try {
                      console["log"](_0x430b82 + " Phase7c 团队盾位置刷新已安装 (SystemEffect._updateEffectPos)");
                    } catch (_0x46519d) {}
                  }
                  return;
                }
              } catch (_0x45e98e) {}
              _0x5eef0a < 0x28 && setTimeout(function () {
                _0x56c5d1(_0x5eef0a + 0x1);
              }, 0x1f4);
            }(0x0);
            try {
              var _0x72ed58 = window["ROLE"];
              if (_0x72ed58) {
                var _0x10a193 = Object["getPrototypeOf"](_0x72ed58);
                if (_0x10a193 && "function" == typeof _0x10a193["getRealLordSkinId"] && !_0x10a193["getRealLordSkinId"]["__ycLordHooked"]) {
                  var _0x5e5653 = _0x10a193["getRealLordSkinId"];
                  _0x10a193["getRealLordSkinId"] = function (_0x3564f7) {
                    try {
                      var _0x4ea5bc = window["ROLE"] && window["ROLE"]["roleId"];
                      if (_0x3564f7 && _0x3564f7["roleId"] === _0x4ea5bc && window["__yunqi_lordOverride"]) return window["__yunqi_lordOverride"];
                    } catch (_0x1b5d1d) {}
                    return _0x5e5653["apply"](this, arguments);
                  }, _0x10a193["getRealLordSkinId"]["__ycLordHooked"] = !0x0;
                  try {
                    console["log"](_0x430b82 + " Phase8 主公皮肤 hook 已安装 (getRealLordSkinId)");
                  } catch (_0x2b0689) {}
                }
                try {
                  for (var _0x10b90a = null, _0xa83d24 = _0x10a193, _0x9d03fa = 0x0; _0xa83d24 && _0x9d03fa < 0x6 && !_0x10b90a;) (_0x10b90a = Object["getOwnPropertyDescriptor"](_0xa83d24, "realLordSkinId")) || (_0xa83d24 = Object["getPrototypeOf"](_0xa83d24), _0x9d03fa++);
                  if (_0x10b90a && _0x10b90a["get"] && !window["__yunqi_realLordSkinIdHooked"]) {
                    var _0x38b662 = _0x10b90a["get"];
                    Object["defineProperty"](_0xa83d24, "realLordSkinId", {
                      get: function () {
                        try {
                          if (window["__yunqi_lordOverride"]) return window["__yunqi_lordOverride"];
                        } catch (_0x118e4c) {}
                        return _0x38b662["call"](this);
                      },
                      configurable: !0x0
                    }), window["__yunqi_realLordSkinIdHooked"] = !0x0;
                    try {
                      console["log"](_0x430b82 + " Phase8 realLordSkinId getter 已覆盖");
                    } catch (_0x52576e) {}
                  }
                } catch (_0x255f8e) {}
              }
            } catch (_0x25a840) {}
          } catch (_0x249cdd) {}
          try {
            var _0x2155dd = window["ROLE"] && Object["getPrototypeOf"](window["ROLE"]),
              _0x1e5c66 = window["__require"] && window["__require"]("Configs"),
              _0x2146b7 = _0x1e5c66 && (_0x1e5c66["Configs"] || _0x1e5c66["default"]) || _0x1e5c66;
            if (_0x2155dd && _0x2146b7) {
              if (!window["__yunqi_pvpMapHooked"]) {
                for (var _0x3063c5 = _0x2155dd, _0x5260a6 = 0x0, _0x184797 = null; _0x3063c5 && _0x5260a6 < 0x6 && !_0x184797;) (_0x184797 = Object["getOwnPropertyDescriptor"](_0x3063c5, "pvpMapId")) || (_0x3063c5 = Object["getPrototypeOf"](_0x3063c5), _0x5260a6++);
                if (_0x184797 && _0x184797["get"]) {
                  var _0x58a2db = _0x184797["get"],
                    _0x5e9e18 = _0x2146b7["PVPMapConf"];
                  Object["defineProperty"](_0x3063c5, "pvpMapId", {
                    get: function () {
                      try {
                        if (window["__yunqi_pvpMapOverride"] && _0x5e9e18) {
                          var _0x5d384c = _0x5e9e18["getById"](window["__yunqi_pvpMapOverride"]),
                            _0x530a3a = _0x5d384c && _0x5d384c["mapId"];
                          if (_0x530a3a) {
                            try {
                              window["__yc_pvpGetterTs"] = Date["now"]();
                            } catch (_0x1fbdcc) {}
                            try {
                              (window["__yc_pvpLogN"] = (window["__yc_pvpLogN"] || 0x0) + 0x1) <= 0x8 && console["log"](_0x430b82 + " Phase10 pvpMapId getter 命中: override=" + window["__yunqi_pvpMapOverride"] + " → mapId=" + _0x530a3a);
                            } catch (_0x2ba6e7) {}
                            return _0x530a3a;
                          }
                          try {
                            (window["__yc_pvpLogF"] = (window["__yc_pvpLogF"] || 0x0) + 0x1) <= 0x4 && console["log"](_0x430b82 + " Phase10 pvpMapId getById 失败: override=" + window["__yunqi_pvpMapOverride"] + " conf=" + (_0x5d384c ? "has" : "null") + " mapId=" + (_0x5d384c && _0x5d384c["mapId"]));
                          } catch (_0x2b8a23) {}
                        }
                      } catch (_0x999f71) {}
                      return _0x58a2db["call"](this);
                    },
                    configurable: !0x0
                  }), window["__yunqi_pvpMapHooked"] = !0x0;
                  try {
                    console["log"](_0x430b82 + " Phase10 竞技场景 hook 已安装 (pvpMapId)");
                  } catch (_0x2cb1aa) {}
                }
              }
              ["cardData", "customCard"]["forEach"](function (_0x2b90f1) {
                try {
                  if (window["__yunqi_" + _0x2b90f1 + "Hooked"]) return;
                  for (var _0x36b58d = _0x2155dd, _0x14d4d5 = 0x0, _0xa25211 = null; _0x36b58d && _0x14d4d5 < 0x6 && !_0xa25211;) (_0xa25211 = Object["getOwnPropertyDescriptor"](_0x36b58d, _0x2b90f1)) || (_0x36b58d = Object["getPrototypeOf"](_0x36b58d), _0x14d4d5++);
                  if (_0xa25211 && _0xa25211["get"]) {
                    var _0x48ed4e = _0xa25211["get"];
                    Object["defineProperty"](_0x36b58d, _0x2b90f1, {
                      get: function () {
                        try {
                          if (window["__yunqi_cardOverride"]) return {
                            id: window["__yunqi_cardOverride"],
                            expire: -0x1
                          };
                        } catch (_0x30fa3f) {}
                        return _0x48ed4e["call"](this);
                      },
                      configurable: !0x0
                    }), window["__yunqi_" + _0x2b90f1 + "Hooked"] = !0x0;
                    try {
                      console["log"](_0x430b82 + " Phase10 名片 hook 已安装 (" + _0x2b90f1 + ", 覆盖原 getter)");
                    } catch (_0x2a4a28) {}
                  } else {
                    Object["defineProperty"](_0x2155dd, _0x2b90f1, {
                      get: function () {
                        try {
                          if (window["__yunqi_cardOverride"]) return {
                            id: window["__yunqi_cardOverride"],
                            expire: -0x1
                          };
                        } catch (_0x2ee8bd) {}
                        try {
                          return this["cardData"];
                        } catch (_0x4b31c0) {}
                        return {
                          id: 0x0,
                          expire: 0x0
                        };
                      },
                      set: function () {},
                      configurable: !0x0,
                      enumerable: !0x1
                    }), window["__yunqi_" + _0x2b90f1 + "Hooked"] = !0x0;
                    try {
                      console["log"](_0x430b82 + " Phase10 名片 getter 新增 (" + _0x2b90f1 + ", ROLE 原无此属性)");
                    } catch (_0x6d3691) {}
                  }
                } catch (_0x4ed1c8) {}
              });
            }
          } catch (_0x2e6c34) {}
          try {
            if (!window["__yunqi_mapCreateHooked"] && window["fgui"] && window["fgui"]["UIPackage"] && "function" == typeof window["fgui"]["UIPackage"]["createObject"]) {
              var _0xbadd6f = window["fgui"]["UIPackage"],
                _0x5805e5 = _0xbadd6f["createObject"],
                _0x949318 = window["__require"] && window["__require"]("Configs"),
                _0xc3e759 = _0x949318 && (_0x949318["Configs"] || _0x949318["default"]) || _0x949318,
                _0x574c7e = _0xc3e759 && _0xc3e759["PVPMapConf"],
                _0xdd5424 = window["__require"] && window["__require"]("manager-asset"),
                _0x8d72a6 = _0xdd5424 && _0xdd5424["BattleAssetManager"];
              window["__ycOverrideSceneUrlNow"] = function () {
                var _0x29e7c8 = function () {
                  try {
                    if (window["__yunqi_pvpMapOverride"] && _0x574c7e) {
                      var _0x2cfde8 = _0x574c7e["getById"](window["__yunqi_pvpMapOverride"]);
                      return _0x2cfde8 && _0x2cfde8["mapId"] || null;
                    }
                  } catch (_0x496054) {}
                  return null;
                }();
                return _0x29e7c8 ? "map_" + _0x29e7c8 : null;
              }, window["__ycPreloadOverrideScene"] = function () {
                try {
                  var _0x55db9b = window["__ycOverrideSceneUrlNow"]();
                  if (!_0x55db9b || !_0x8d72a6 || !_0x8d72a6["instance"]) return;
                  if (_0xbadd6f["getByName"] && _0xbadd6f["getByName"](_0x55db9b)) return;
                  if (window["__yc_scenePreloading"] === _0x55db9b) return;
                  window["__yc_scenePreloading"] = _0x55db9b, _0x8d72a6["instance"]["loadMap"](_0x55db9b, !0x1)["then"](function () {
                    window["__yc_scenePreloading"] = null;
                    try {
                      console["log"](_0x430b82 + " Phase11 override scene 已预加载并保持: " + _0x55db9b);
                    } catch (_0x34dc23) {}
                  })["catch"](function () {
                    window["__yc_scenePreloading"] = null;
                  });
                } catch (_0x2e81a6) {
                  window["__yc_scenePreloading"] = null;
                }
              }, _0xbadd6f["createObject"] = function (_0x1499a8, _0x950bd8) {
                try {
                  if ("Map" === _0x950bd8 && window["__yunqi_pvpMapOverride"]) {
                    var _0x436547 = window["__ycOverrideSceneUrlNow"]();
                    if (_0x436547 && _0x436547 !== _0x1499a8) {
                      var _0x43ecfb = !0x1;
                      try {
                        _0x43ecfb = !(!_0xbadd6f["getByName"] || !_0xbadd6f["getByName"](_0x436547));
                      } catch (_0x3dd99b) {}
                      if (_0x43ecfb) {
                        try {
                          console["log"](_0x430b82 + " Phase11 主线 map 替换: " + _0x1499a8 + " → " + _0x436547);
                        } catch (_0x5b07b4) {}
                        _0x1499a8 = _0x436547;
                      } else {
                        try {
                          window["__ycPreloadOverrideScene"]();
                        } catch (_0x864fb) {}
                        try {
                          (window["__yc_mapWaitLog"] = (window["__yc_mapWaitLog"] || 0x0) + 0x1) <= 0x5 && console["log"](_0x430b82 + " Phase11 override scene 加载中，本次保持原图（重建后生效）");
                        } catch (_0x24780a) {}
                      }
                    }
                  }
                } catch (_0x44c524) {}
                return _0x5805e5["call"](this, _0x1499a8, _0x950bd8);
              }, window["__yunqi_mapCreateHooked"] = !0x0;
              try {
                console["log"](_0x430b82 + " Phase11 主线场景 hook 已安装 (fgui.UIPackage.createObject, url=map_<mapId>)");
              } catch (_0x28b162) {}
              try {
                window["__yunqi_pvpMapOverride"] && window["__ycPreloadOverrideScene"]();
              } catch (_0x3fb30e) {}
            }
          } catch (_0x10aee1) {}
          !function _0x373bcb(_0x2a9704) {
            function _0x3cb7e4(_0x4894ff) {
              try {
                if (_0x4894ff) {
                  var _0x2ef33c = _0x4894ff["isMe"];
                  if (!0x0 === _0x2ef33c || !0x1 === _0x2ef33c) return _0x2ef33c;
                }
              } catch (_0x343f7d) {}
              try {
                var _0x2fec9e = window["ROLE"] && window["ROLE"]["roleId"];
                if (!_0x2fec9e) return !0x1;
                if (_0x4894ff["roleId"] === _0x2fec9e || _0x4894ff["id"] === _0x2fec9e) return !0x0;
                var _0x1fe259 = _0x4894ff["_serverData"];
                if (_0x1fe259 && (_0x1fe259["roleId"] === _0x2fec9e || _0x1fe259["codeId"] === _0x2fec9e || _0x1fe259["codeIdV2"] === _0x2fec9e)) return !0x0;
              } catch (_0x4950eb) {}
              return !0x1;
            }
            try {
              var _0x4ad04d = window["__require"] && window["__require"]("LegionWarPlayer"),
                _0x58a86b = _0x4ad04d && (_0x4ad04d["LegionWarPlayer"] || _0x4ad04d["default"]),
                _0x3f9530 = _0x58a86b && _0x58a86b["prototype"];
              if (_0x3f9530) {
                var _0x228b42 = window["__require"]("Configs"),
                  _0x51be6b = _0x228b42 && (_0x228b42["Configs"] || _0x228b42["default"]) || _0x228b42,
                  _0x39feb5 = _0x51be6b && _0x51be6b["AirshipConf"];
                if (!window["__yunqi_lwAirshipHooked"]) {
                  var _0x346a3a = Object["getOwnPropertyDescriptor"](_0x3f9530, "airshipBundle");
                  if (_0x346a3a && _0x346a3a["get"]) {
                    var _0x24c7e1 = _0x346a3a["get"];
                    Object["defineProperty"](_0x3f9530, "airshipBundle", {
                      get: function () {
                        try {
                          if (window["__yunqi_airshipOverride"] && _0x39feb5 && _0x3cb7e4(this)) {
                            var _0x57d7e1 = _0x39feb5["getById"](window["__yunqi_airshipOverride"]);
                            if (_0x57d7e1 && _0x57d7e1["airshipSkin"]) {
                              try {
                                (window["__yc_airLog"] = (window["__yc_airLog"] || 0x0) + 0x1) <= 0x4 && console["log"](_0x430b82 + " Phase12 飞艇 self 命中 → " + _0x57d7e1["airshipSkin"]);
                              } catch (_0x4d1f3e) {}
                              return _0x57d7e1["airshipSkin"];
                            }
                          }
                        } catch (_0x236d40) {}
                        return _0x24c7e1["call"](this);
                      },
                      configurable: !0x0
                    }), window["__yunqi_lwAirshipHooked"] = !0x0;
                    try {
                      console["log"](_0x430b82 + " Phase12 盐场飞艇 hook 已安装 (LegionWarPlayer.airshipBundle)");
                    } catch (_0x5cba56) {}
                  }
                }
                if (!window["__yunqi_lwMultiKillHooked"]) {
                  var _0x3a9892 = Object["getOwnPropertyDescriptor"](_0x3f9530, "multiKillId");
                  if (_0x3a9892 && _0x3a9892["get"]) {
                    var _0x39e9b0 = _0x3a9892["get"];
                    Object["defineProperty"](_0x3f9530, "multiKillId", {
                      get: function () {
                        try {
                          if (window["__yunqi_multiKillOverride"] && _0x3cb7e4(this)) {
                            try {
                              (window["__yc_mkLog"] = (window["__yc_mkLog"] || 0x0) + 0x1) <= 0x4 && console["log"](_0x430b82 + " Phase13 连杀 self 命中 → " + window["__yunqi_multiKillOverride"]);
                            } catch (_0x5b1f06) {}
                            return window["__yunqi_multiKillOverride"];
                          }
                        } catch (_0x7f71e) {}
                        return _0x39e9b0["call"](this);
                      },
                      configurable: !0x0
                    }), window["__yunqi_lwMultiKillHooked"] = !0x0;
                    try {
                      console["log"](_0x430b82 + " Phase13 击杀特效 hook 已安装 (LegionWarPlayer.multiKillId)");
                    } catch (_0x114132) {}
                  }
                }
                if (window["__yunqi_lwAirshipHooked"] && window["__yunqi_lwMultiKillHooked"]) return;
              }
            } catch (_0x61fafa) {}
            if (_0x2a9704 < 0x28) setTimeout(function () {
              _0x373bcb(_0x2a9704 + 0x1);
            }, 0x1f4);else try {
              console["log"](_0x430b82 + " Phase12/13 警告: 未取到 LegionWarPlayer（" + (window["__yunqi_lwAirshipHooked"] ? "飞艇ok" : "飞艇缺") + "/" + (window["__yunqi_lwMultiKillHooked"] ? "连杀ok" : "连杀缺") + "\uff09");
            } catch (_0x109bb3) {}
          }(0x0), function _0x12a67d(_0x5d367d) {
            function _0x53b9aa(_0x45085d, _0x5449d8) {
              try {
                if (!_0x45085d || "function" != typeof _0x45085d["isHas"]) return !0x1;
                if (_0x45085d["isHas"]["__ycUnlockHooked"]) return !0x0;
                var _0x3fe706 = _0x45085d["isHas"];
                _0x45085d["isHas"] = function (_0x59c7ef) {
                  try {
                    if (0x0 === _0x59c7ef || null == _0x59c7ef) return !0x0;
                    if ("function" == typeof this["getConfById"] ? this["getConfById"](_0x59c7ef) : null) return !0x0;
                  } catch (_0x5cf43f) {}
                  return _0x3fe706["call"](this, _0x59c7ef);
                }, _0x45085d["isHas"]["__ycUnlockHooked"] = !0x0;
                try {
                  console["log"](_0x430b82 + " Phase14 装扮解锁 hook 已安装: " + _0x5449d8);
                } catch (_0x35f53b) {}
                return !0x0;
              } catch (_0x17457e) {
                return !0x1;
              }
            }
            try {
              var _0xb0f729 = 0x0,
                _0x5df74b = window["__require"] && window["__require"]("LordSkinOtherDressPage");
              _0x5df74b && _0x5df74b["LordSkinDressData"] && _0x53b9aa(_0x5df74b["LordSkinDressData"]["prototype"], "LordSkinDressData(框/名片/飞艇/连杀/场景)") && _0xb0f729++;
              var _0x5a103f = window["__require"] && window["__require"]("DRV2DataAdapter");
              if (_0x5a103f && _0x5a103f["DRV2LordSkinDecoData"] && _0x53b9aa(_0x5a103f["DRV2LordSkinDecoData"]["prototype"], "DRV2LordSkinDecoData(主公皮肤)") && _0xb0f729++, _0x5a103f && _0x5a103f["DRV2ProfileCardDecoData"] && _0x53b9aa(_0x5a103f["DRV2ProfileCardDecoData"]["prototype"], "DRV2ProfileCardDecoData(工牌)") && _0xb0f729++, _0xb0f729 >= 0x3) {
                try {
                  console["log"](_0x430b82 + " Phase14 装扮室全解锁完成 (3/3)");
                } catch (_0x141458) {}
                return;
              }
            } catch (_0x1fb48c) {}
            if (_0x5d367d < 0x28) setTimeout(function () {
              _0x12a67d(_0x5d367d + 0x1);
            }, 0x1f4);else try {
              console["log"](_0x430b82 + " Phase14 警告: 装扮解锁部分未安装");
            } catch (_0x2db098) {}
          }(0x0), function _0x591892(_0x42233b) {
            var _0x4798fa = {
              0x1: "frameOverride",
              0x2: "cardOverride",
              0x3: "airshipOverride",
              0x4: "multiKillOverride",
              0x5: "pvpMapOverride"
            };
            function _0x57986a(_0x34b5cd, _0x8797f6) {
              try {
                window["__yunqi_" + _0x34b5cd] = _0x8797f6;
                var _0x2ddc00 = window["ROLE"] && window["ROLE"]["roleId"];
                if (_0x2ddc00) {
                  var _0x2ed39f = "__yunqi_" + _0x34b5cd + "_" + _0x2ddc00;
                  _0x8797f6 ? localStorage["setItem"](_0x2ed39f, "" + _0x8797f6) : localStorage["removeItem"](_0x2ed39f);
                }
              } catch (_0x48af65) {}
            }
            try {
              var _0x50924d = 0x0,
                _0x2be777 = window["__require"] && window["__require"]("LordSkinOtherDressPage"),
                _0x2f8dd2 = _0x2be777 && _0x2be777["LordSkinDressData"];
              if (_0x2f8dd2 && _0x2f8dd2["prototype"] && !_0x2f8dd2["prototype"]["useDress"]["__ycLocalEquip"]) {
                var _0xc9a714 = _0x2f8dd2["prototype"]["useDress"],
                  _0x5f03f3 = _0x2f8dd2["prototype"]["getNowUse"];
                _0x2f8dd2["prototype"]["useDress"] = function (_0x1abb17) {
                  try {
                    var _0x723216 = _0x4798fa[this["_type"]];
                    if (_0x723216) {
                      if (_0x57986a(_0x723216, _0x1abb17), 0x5 === this["_type"] && window["__ycPreloadOverrideScene"]) try {
                        window["__ycPreloadOverrideScene"]();
                      } catch (_0x127068) {}
                      try {
                        console["log"](_0x430b82 + " Phase15 本地装备 type=" + this["_type"] + " → " + _0x1abb17 + "（不发服务器）");
                      } catch (_0x212a6a) {}
                      return Promise["resolve"](!0x0);
                    }
                  } catch (_0x28bcaf) {}
                  return _0xc9a714["call"](this, _0x1abb17);
                }, _0x2f8dd2["prototype"]["useDress"]["__ycLocalEquip"] = !0x0, _0x2f8dd2["prototype"]["getNowUse"] = function () {
                  try {
                    var _0x567839 = _0x4798fa[this["_type"]];
                    if (_0x567839 && window["__yunqi_" + _0x567839]) return window["__yunqi_" + _0x567839];
                  } catch (_0x151431) {}
                  return _0x5f03f3["call"](this);
                }, _0x50924d++;
                try {
                  console["log"](_0x430b82 + " Phase15 useDress 拦截已装 (LordSkinDressData)");
                } catch (_0x49de44) {}
              } else _0x2f8dd2 && _0x2f8dd2["prototype"] && _0x2f8dd2["prototype"]["useDress"]["__ycLocalEquip"] && _0x50924d++;
              var _0x38f693 = window["__require"] && window["__require"]("DRV2DataAdapter");
              if (_0x38f693 && _0x38f693["DRV2LordSkinDecoData"] && _0x38f693["DRV2LordSkinDecoData"]["prototype"] && !_0x38f693["DRV2LordSkinDecoData"]["prototype"]["useDress"]["__ycLocalEquip"]) {
                var _0xdc2f6a = _0x38f693["DRV2LordSkinDecoData"]["prototype"]["useDress"],
                  _0x5184f0 = _0x38f693["DRV2LordSkinDecoData"]["prototype"]["getNowUse"];
                _0x38f693["DRV2LordSkinDecoData"]["prototype"]["useDress"] = function (_0x74b921) {
                  try {
                    _0x57986a("lordOverride", _0x74b921);
                    try {
                      console["log"](_0x430b82 + " Phase15 本地装备 主公皮肤 → " + _0x74b921 + "（不发服务器）");
                    } catch (_0x1eee17) {}
                    return Promise["resolve"](!0x0);
                  } catch (_0x3a857f) {}
                  return _0xdc2f6a["call"](this, _0x74b921);
                }, _0x38f693["DRV2LordSkinDecoData"]["prototype"]["useDress"]["__ycLocalEquip"] = !0x0, _0x38f693["DRV2LordSkinDecoData"]["prototype"]["getNowUse"] = function () {
                  try {
                    if (window["__yunqi_lordOverride"]) return window["__yunqi_lordOverride"];
                  } catch (_0x294527) {}
                  return _0x5184f0["call"](this);
                }, _0x50924d++;
                try {
                  console["log"](_0x430b82 + " Phase15 useDress 拦截已装 (DRV2LordSkinDecoData)");
                } catch (_0x1553fd) {}
              } else _0x38f693 && _0x38f693["DRV2LordSkinDecoData"] && _0x38f693["DRV2LordSkinDecoData"]["prototype"]["useDress"]["__ycLocalEquip"] && _0x50924d++;
              if (_0x38f693 && _0x38f693["DRV2ProfileCardDecoData"] && _0x38f693["DRV2ProfileCardDecoData"]["prototype"] && !_0x38f693["DRV2ProfileCardDecoData"]["prototype"]["useDress"]["__ycLocalEquip"]) {
                var _0x48fb1e = _0x38f693["DRV2ProfileCardDecoData"]["prototype"]["useDress"],
                  _0x5a8018 = _0x38f693["DRV2ProfileCardDecoData"]["prototype"]["getNowUse"];
                _0x38f693["DRV2ProfileCardDecoData"]["prototype"]["useDress"] = function (_0x141d07) {
                  try {
                    _0x57986a("profileCardOverride", _0x141d07);
                    try {
                      console["log"](_0x430b82 + " Phase15 本地装备 工牌 → " + _0x141d07 + "（不发服务器）");
                    } catch (_0xcdcd95) {}
                    return Promise["resolve"](!0x0);
                  } catch (_0x13d6bc) {}
                  return _0x48fb1e["call"](this, _0x141d07);
                }, _0x38f693["DRV2ProfileCardDecoData"]["prototype"]["useDress"]["__ycLocalEquip"] = !0x0, _0x38f693["DRV2ProfileCardDecoData"]["prototype"]["getNowUse"] = function () {
                  try {
                    if (window["__yunqi_profileCardOverride"]) return window["__yunqi_profileCardOverride"];
                  } catch (_0x1353fe) {}
                  return _0x5a8018["call"](this);
                }, _0x50924d++;
                try {
                  console["log"](_0x430b82 + " Phase15 useDress 拦截已装 (DRV2ProfileCardDecoData)");
                } catch (_0x2e2765) {}
              } else _0x38f693 && _0x38f693["DRV2ProfileCardDecoData"] && _0x38f693["DRV2ProfileCardDecoData"]["prototype"]["useDress"]["__ycLocalEquip"] && _0x50924d++;
              if (_0x50924d >= 0x3) {
                try {
                  console["log"](_0x430b82 + " Phase15 装扮本地装备拦截完成 (3/3)");
                } catch (_0x474d9b) {}
                return;
              }
            } catch (_0x270940) {}
            if (_0x42233b < 0x28) setTimeout(function () {
              _0x591892(_0x42233b + 0x1);
            }, 0x1f4);else try {
              console["log"](_0x430b82 + " Phase15 警告: useDress 拦截部分未安装");
            } catch (_0x41b31b) {}
          }(0x0), function _0x2ec7b2(_0x498690) {
            try {
              var _0x7ce892 = window["__require"] && window["__require"]("DRV2DataAdapter"),
                _0x5c4ff7 = _0x7ce892 && _0x7ce892["DRV2LordSkinDecoData"] && _0x7ce892["DRV2LordSkinDecoData"]["instance"],
                _0x5f46f3 = _0x5c4ff7 && _0x5c4ff7["lordSkinData"],
                _0x261b87 = _0x5f46f3 && Object["getPrototypeOf"](_0x5f46f3);
              if (_0x261b87 && "function" == typeof _0x261b87["getCurSkinData"]) {
                if (!_0x261b87["getCurSkinData"]["__ycLordCur"]) {
                  var _0x5e71b7 = _0x261b87["getCurSkinData"];
                  _0x261b87["getCurSkinData"] = function () {
                    try {
                      var _0x41c3cd = window["__yunqi_lordOverride"];
                      if (_0x41c3cd) {
                        if (window["__yc_lordSkinDataCache"] && window["__yc_lordSkinDataCacheId"] === _0x41c3cd) return window["__yc_lordSkinDataCache"];
                        var _0x2854f4 = "function" == typeof this["getDepotSkinData"] ? this["getDepotSkinData"]() : null;
                        if (_0x2854f4) {
                          for (var _0x58178f = 0x0; _0x58178f < _0x2854f4["length"]; _0x58178f++) if (_0x2854f4[_0x58178f] && _0x2854f4[_0x58178f]["lordSkinId"] === _0x41c3cd) {
                            window["__yc_lordSkinDataCache"] = _0x2854f4[_0x58178f], window["__yc_lordSkinDataCacheId"] = _0x41c3cd;
                            try {
                              (window["__yc_lordCurLog"] = (window["__yc_lordCurLog"] || 0x0) + 0x1) <= 0x3 && console["log"](_0x430b82 + " Phase16 getCurSkinData → override " + _0x41c3cd + " (avatarId=" + _0x2854f4[_0x58178f]["avatarId"] + ")");
                            } catch (_0x9c985a) {}
                            return _0x2854f4[_0x58178f];
                          }
                        }
                      }
                    } catch (_0x2e3d65) {}
                    return _0x5e71b7["call"](this);
                  }, _0x261b87["getCurSkinData"]["__ycLordCur"] = !0x0;
                  try {
                    console["log"](_0x430b82 + " Phase16 主公皮肤 getCurSkinData hook 已安装（主界面头像跟随）");
                  } catch (_0x196026) {}
                }
                return;
              }
            } catch (_0x34e98e) {}
            if (_0x498690 < 0x28) setTimeout(function () {
              _0x2ec7b2(_0x498690 + 0x1);
            }, 0x1f4);else try {
              console["log"](_0x430b82 + " Phase16 警告: 未取到 lordSkinData");
            } catch (_0x2252f1) {}
          }(0x0), window["__yunqi_skinHookDone"] = !0x0;
          try {
            console["log"](_0x430b82 + " 所有 Hook 安装完成");
          } catch (_0x44a3d3) {}
        } catch (_0x3e9f97) {
          _0x2f6b6f < 0x3c && setTimeout(_0x14db29, 0x7d0);
        } else _0x2f6b6f < 0x3c && setTimeout(_0x14db29, 0x3e8);
      }(), function () {
        if (!document["getElementById"]("__yc_skpanel")) {
          var _0x24b0d4 = 0x0;
          !function _0x483120() {
            _0x24b0d4++, window["__yunqi_skinReady"] ? function () {
              var _0x24b897 = window["__yunqi_skinOverrides"] || {},
                _0x55b998 = window["__yunqi_origSkinLists"] || {},
                _0x8cd7db = window["__yunqi_origBaseSkins"] || {},
                _0x27e157 = window["ROLE"],
                _0x277fd5 = window["__require"]("Configs"),
                _0x4b2ff2 = _0x277fd5 && (_0x277fd5["Configs"] || _0x277fd5["default"]) || _0x277fd5,
                _0x360b8c = _0x4b2ff2 && _0x4b2ff2["SkinConf"],
                _0x479aab = _0x4b2ff2 && _0x4b2ff2["LanguageConf"],
                _0x530141 = _0x4b2ff2 && _0x4b2ff2["LordSkinConf"];
              function _0x5460a0() {
                var _0x2aa8b3 = _0x27e157 && _0x27e157["roleId"];
                return _0x2aa8b3 ? "__yunqi_lordOverride_" + _0x2aa8b3 : null;
              }
              if (null == window["__yunqi_lordOverride"]) try {
                var _0x414149 = _0x5460a0(),
                  _0x150930 = _0x414149 && localStorage["getItem"](_0x414149);
                window["__yunqi_lordOverride"] = _0x150930 && parseInt(_0x150930) || 0x0;
              } catch (_0x1833ad) {
                window["__yunqi_lordOverride"] = 0x0;
              }
              function _0x1d4898(_0x32e2ee) {
                try {
                  var _0xddc5f5 = _0x530141 && _0x530141["getById"](_0x32e2ee);
                  if (_0xddc5f5) {
                    var _0x164d24 = _0xddc5f5["skinName"] || _0xddc5f5["name"] || _0xddc5f5["lordSkinName"];
                    if (_0x164d24) {
                      if (_0x479aab && _0x479aab["getByKey"]) try {
                        var _0x12968 = _0x479aab["getByKey"](_0x164d24);
                        if (_0x12968 && _0x12968["chinese"]) return _0x12968["chinese"];
                      } catch (_0x56af63) {}
                      return _0x164d24;
                    }
                  }
                } catch (_0x4acad3) {}
                return "主公#" + _0x32e2ee;
              }
              function _0x3ea316() {
                var _0x59064a = [];
                try {
                  var _0x37564e = _0x530141 && (_0x530141["list"] || (_0x530141["map"] && "function" == typeof _0x530141["map"]["values"] ? Array["from"](_0x530141["map"]["values"]()) : null));
                  _0x37564e && _0x37564e["forEach"] && _0x37564e["forEach"](function (_0x30bb2d) {
                    _0x30bb2d && null != _0x30bb2d["id"] && 0x0 !== _0x30bb2d["id"] && _0x59064a["push"](_0x30bb2d["id"]);
                  });
                } catch (_0x3fb614) {}
                return _0x59064a;
              }
              var _0x3486c7 = _0x4b2ff2 && _0x4b2ff2["AvatarFrameConf"];
              function _0x4cbb51() {
                var _0x5db0a1 = _0x27e157 && _0x27e157["roleId"];
                return _0x5db0a1 ? "__yunqi_frameOverride_" + _0x5db0a1 : null;
              }
              if (null == window["__yunqi_frameOverride"]) try {
                var _0xa6f2d8 = _0x4cbb51(),
                  _0xf27a4e = _0xa6f2d8 && localStorage["getItem"](_0xa6f2d8);
                window["__yunqi_frameOverride"] = _0xf27a4e && parseInt(_0xf27a4e) || 0x0;
              } catch (_0x54a75e) {
                window["__yunqi_frameOverride"] = 0x0;
              }
              function _0x49e880(_0xcdf92d) {
                try {
                  var _0x44203c = _0x3486c7 && _0x3486c7["getById"](_0xcdf92d);
                  if (_0x44203c) {
                    var _0x417688 = _0x44203c["name"];
                    if (_0x417688) {
                      if (_0x479aab && _0x479aab["getByKey"]) try {
                        var _0x376437 = _0x479aab["getByKey"](_0x417688);
                        if (_0x376437 && _0x376437["chinese"]) return _0x376437["chinese"];
                      } catch (_0x31cf1e) {}
                      return _0x417688;
                    }
                  }
                } catch (_0xed8cba) {}
                return "\u6846#" + _0xcdf92d;
              }
              function _0x219cde() {
                var _0x2207da = [];
                try {
                  var _0x10ad3e = _0x3486c7 && (_0x3486c7["list"] || (_0x3486c7["map"] && "function" == typeof _0x3486c7["map"]["values"] ? Array["from"](_0x3486c7["map"]["values"]()) : null));
                  _0x10ad3e && _0x10ad3e["forEach"] && _0x10ad3e["forEach"](function (_0x3234bb) {
                    _0x3234bb && null != _0x3234bb["id"] && 0x0 !== _0x3234bb["id"] && _0x2207da["push"](_0x3234bb["id"]);
                  });
                } catch (_0x309127) {}
                return _0x2207da;
              }
              function _0x337eed(_0x479cfe) {
                var _0x3eac5f = [];
                try {
                  var _0x39ba6a = _0x479cfe && (_0x479cfe["list"] || (_0x479cfe["map"] && "function" == typeof _0x479cfe["map"]["values"] ? Array["from"](_0x479cfe["map"]["values"]()) : null));
                  _0x39ba6a && _0x39ba6a["forEach"] && _0x39ba6a["forEach"](function (_0x4d8e42) {
                    _0x4d8e42 && null != _0x4d8e42["id"] && 0x0 !== _0x4d8e42["id"] && _0x3eac5f["push"](_0x4d8e42["id"]);
                  });
                } catch (_0x584710) {}
                return _0x3eac5f;
              }
              function _0x2324ff(_0x474e40, _0x55f996, _0x3b0924) {
                try {
                  var _0x1a1a31 = _0x474e40 && _0x474e40["getById"](_0x55f996);
                  if (_0x1a1a31) {
                    var _0x51e73c = _0x1a1a31["name"] || _0x1a1a31["skinName"];
                    if (_0x51e73c) {
                      if (_0x479aab && _0x479aab["getByKey"]) try {
                        var _0x35f623 = _0x479aab["getByKey"](_0x51e73c);
                        if (_0x35f623 && _0x35f623["chinese"]) return _0x35f623["chinese"];
                      } catch (_0x4b1a87) {}
                      return _0x51e73c;
                    }
                  }
                } catch (_0x4cf2ee) {}
                return _0x3b0924 + _0x55f996;
              }
              var _0x59dca3 = _0x4b2ff2 && _0x4b2ff2["PVPMapConf"],
                _0x213427 = _0x4b2ff2 && _0x4b2ff2["CustomCardConf"],
                _0x50855e = _0x4b2ff2 && _0x4b2ff2["AirshipConf"],
                _0x4318af = _0x4b2ff2 && _0x4b2ff2["MultiKillConf"];
              function _0x3947cd() {
                var _0x299735 = _0x27e157 && _0x27e157["roleId"];
                return _0x299735 ? "__yunqi_pvpMapOverride_" + _0x299735 : null;
              }
              function _0x1d0c0d() {
                var _0x346ffc = _0x27e157 && _0x27e157["roleId"];
                return _0x346ffc ? "__yunqi_cardOverride_" + _0x346ffc : null;
              }
              function _0xbce3b2() {
                var _0x425e5d = _0x27e157 && _0x27e157["roleId"];
                return _0x425e5d ? "__yunqi_airshipOverride_" + _0x425e5d : null;
              }
              function _0x349f56() {
                var _0xcf9d9b = _0x27e157 && _0x27e157["roleId"];
                return _0xcf9d9b ? "__yunqi_multiKillOverride_" + _0xcf9d9b : null;
              }
              if (null == window["__yunqi_pvpMapOverride"]) try {
                var _0x14f32f = _0x3947cd(),
                  _0x1069fe = _0x14f32f && localStorage["getItem"](_0x14f32f);
                window["__yunqi_pvpMapOverride"] = _0x1069fe && parseInt(_0x1069fe) || 0x0;
              } catch (_0x511f90) {
                window["__yunqi_pvpMapOverride"] = 0x0;
              }
              if (null == window["__yunqi_cardOverride"]) try {
                var _0x2f3cf8 = _0x1d0c0d(),
                  _0x1dd4c5 = _0x2f3cf8 && localStorage["getItem"](_0x2f3cf8);
                window["__yunqi_cardOverride"] = _0x1dd4c5 && parseInt(_0x1dd4c5) || 0x0;
              } catch (_0x1aa350) {
                window["__yunqi_cardOverride"] = 0x0;
              }
              if (null == window["__yunqi_airshipOverride"]) try {
                var _0x5c873b = _0xbce3b2(),
                  _0x59b42b = _0x5c873b && localStorage["getItem"](_0x5c873b);
                window["__yunqi_airshipOverride"] = _0x59b42b && parseInt(_0x59b42b) || 0x0;
              } catch (_0x662368) {
                window["__yunqi_airshipOverride"] = 0x0;
              }
              if (null == window["__yunqi_multiKillOverride"]) try {
                var _0x26a506 = _0x349f56(),
                  _0x161cfd = _0x26a506 && localStorage["getItem"](_0x26a506);
                window["__yunqi_multiKillOverride"] = _0x161cfd && parseInt(_0x161cfd) || 0x0;
              } catch (_0x51a388) {
                window["__yunqi_multiKillOverride"] = 0x0;
              }
              function _0x1e57bd(_0x27f8c9, _0x314388, _0x3ca453, _0x1f6725, _0x1a7da0, _0x5480ca, _0x34eb9c, _0x2a1d10) {
                var _0x5606f9 = "";
                if (!_0x5480ca["length"]) return _0x5606f9;
                _0x5606f9 += '<div style="display:flex;align-items:center;padding:14px 20px 6px;">', _0x5606f9 += '<div style="width:3px;height:14px;border-radius:2px;background:' + _0x314388 + ';margin-right:8px;"></div>', _0x5606f9 += '<span style="font-size:14px;font-weight:bold;color:#1A1A2E;">' + _0x27f8c9 + "</span>", _0x1a7da0 && (_0x5606f9 += '<span style="margin-left:8px;font-size:11px;color:#06B6D4;background:#F0F4FF;padding:1px 6px;border-radius:4px;">已设置</span>'), _0x5606f9 += '</div><div style="display:flex;flex-wrap:wrap;gap:6px;padding:4px 20px 8px;">';
                var _0x197cd2 = !_0x1a7da0;
                _0x5606f9 += '<div class="' + _0x1f6725 + '" data-d="0" style="padding:5px 12px;border-radius:6px;cursor:pointer;font-size:13px;border:1px solid ' + (_0x197cd2 ? _0x314388 : "#E0E0E0") + ";color:" + (_0x197cd2 ? _0x314388 : "#6B7280") + ";background:" + (_0x197cd2 ? _0x3ca453 : "#fff") + ';">默认</div>';
                for (var _0x3bbc18 = 0x0; _0x3bbc18 < _0x5480ca["length"]; _0x3bbc18++) {
                  var _0x1cb1fa = _0x5480ca[_0x3bbc18],
                    _0x4aee65 = _0x1a7da0 === _0x1cb1fa;
                  _0x5606f9 += '<div class="' + _0x1f6725 + '" data-d="' + _0x1cb1fa + '" style="padding:5px 12px;border-radius:6px;cursor:pointer;font-size:13px;border:1px solid ' + (_0x4aee65 ? _0x314388 : "#E0E0E0") + ";color:" + (_0x4aee65 ? _0x314388 : "#374151") + ";background:" + (_0x4aee65 ? _0x3ca453 : "#fff") + ';">' + _0x2324ff(_0x34eb9c, _0x1cb1fa, _0x2a1d10) + "</div>";
                }
                return _0x5606f9 += '</div><div style="height:0.5px;background:#E0E0E0;margin:0 20px;"></div>';
              }
              function _0x7cbfb1() {
                if (window["__yunqi_saveSkinOverrides"]) window["__yunqi_saveSkinOverrides"]();else try {
                  var _0x3b343e = window["__yunqi_skinCurRoleId"] ? "__yunqi_skinOverrides_" + window["__yunqi_skinCurRoleId"] : null;
                  _0x3b343e && localStorage["setItem"](_0x3b343e, JSON["stringify"](_0x24b897));
                } catch (_0x26974f) {}
              }
              function _0xe62a98(_0x4328de) {
                try {
                  var _0x10e3bb = _0x360b8c && _0x360b8c["getById"](_0x4328de);
                  if (_0x10e3bb && _0x10e3bb["skinName"]) {
                    if (_0x479aab && _0x479aab["getByKey"]) try {
                      var _0x1ac197 = _0x479aab["getByKey"](_0x10e3bb["skinName"]);
                      if (_0x1ac197 && _0x1ac197["chinese"]) return _0x1ac197["chinese"];
                    } catch (_0x34540d) {}
                    return /[\u4e00-\u9fff]/["test"](_0x10e3bb["skinName"]), _0x10e3bb["skinName"];
                  }
                } catch (_0x406071) {}
                return "ID:" + _0x4328de;
              }
              function _0x5c1f12(_0x22d16d) {
                var _0x47dfc5 = _0xe62a98(_0x8cd7db[_0x22d16d] || _0x22d16d);
                if (_0x47dfc5 && 0x0 !== _0x47dfc5["indexOf"]("ID:")) return _0x47dfc5;
                try {
                  var _0x225b90 = _0x24b897[_0x22d16d];
                  delete _0x24b897[_0x22d16d];
                  var _0x2a7e45 = _0x27e157 && _0x27e157["getHeroById"](_0x22d16d);
                  if (_0x2a7e45) {
                    var _0xe756f4 = _0x2a7e45["realSkinName"];
                    if (_0x225b90 && (_0x24b897[_0x22d16d] = _0x225b90), _0xe756f4) {
                      if (_0x479aab && _0x479aab["getByKey"]) try {
                        var _0x9e6026 = _0x479aab["getByKey"](_0xe756f4);
                        if (_0x9e6026 && _0x9e6026["chinese"]) return _0x9e6026["chinese"];
                      } catch (_0x58a333) {}
                      return _0xe756f4;
                    }
                  }
                  _0x225b90 && (_0x24b897[_0x22d16d] = _0x225b90);
                } catch (_0x4762f2) {}
                return "ID:" + _0x22d16d;
              }
              var _0x204150 = {};
              for (var _0x56f977 in _0x55b998) _0x204150[_0x56f977] = _0x5c1f12(parseInt(_0x56f977));
              var _0x3facdc = document["createElement"]("div");
              _0x3facdc["id"] = "__yc_skmask", _0x3facdc["style"]["cssText"] = "position:fixed;top:0;left:0;right:0;bottom:0;background:rgba(0,0,0,0.4);z-index:99999;display:none;", document["body"]["appendChild"](_0x3facdc);
              var _0x2269b5 = document["createElement"]("div");
              _0x2269b5["id"] = "__yc_skpanel", _0x2269b5["style"]["cssText"] = "position:fixed;left:0;right:0;bottom:0;max-height:80vh;background:#fff;border-radius:16px 16px 0 0;z-index:100000;display:none;flex-direction:column;font-family:-apple-system,sans-serif;color:#1A1A2E;font-size:14px;transition:transform 0.2s ease;", document["body"]["appendChild"](_0x2269b5);
              var _0x202b3a = document["createElement"]("div");
              _0x202b3a["style"]["cssText"] = "flex-shrink:0;background:#fff;border-radius:16px 16px 0 0;padding-bottom:4px;touch-action:none;", _0x202b3a["innerHTML"] = '<div style="display:flex;justify-content:center;padding:12px 0 10px;"><div style="width:36px;height:5px;border-radius:3px;background:#9CA3AF;"></div></div><div style="padding:0 20px 4px;font-size:17px;font-weight:bold;color:#1A1A2E;">皮肤管理</div><div style="height:0.5px;background:#E0E0E0;margin:8px 20px 0;"></div>', _0x2269b5["appendChild"](_0x202b3a);
              var _0x1cb44f = document["createElement"]("div");
              _0x1cb44f["style"]["cssText"] = "flex:1;overflow-y:auto;-webkit-overflow-scrolling:touch;padding-bottom:env(safe-area-inset-bottom,16px);", _0x2269b5["appendChild"](_0x1cb44f);
              var _0x6f6735 = 0x0,
                _0x365762 = 0x0,
                _0x3ee4d5 = !0x1;
              function _0x4401a8() {
                var _0x560ee0 = "";
                _0x560ee0 += '<div id="__yc_skreset" style="margin:12px 20px;padding:8px 0;border-radius:8px;text-align:center;cursor:pointer;font-size:13px;color:#EF4444;border:1px solid #FCA5A5;background:#FEF2F2;">恢复全部默认</div>';
                try {
                  var _0x17c48e = _0x3ea316();
                  if (_0x17c48e["length"]) {
                    var _0x34b511 = window["__yunqi_lordOverride"] || 0x0;
                    _0x560ee0 += '<div style="display:flex;align-items:center;padding:14px 20px 6px;">', _0x560ee0 += '<div style="width:3px;height:14px;border-radius:2px;background:#A855F7;margin-right:8px;"></div>', _0x560ee0 += '<span style="font-size:14px;font-weight:bold;color:#1A1A2E;">主公皮肤</span>', _0x34b511 && (_0x560ee0 += '<span style="margin-left:8px;font-size:11px;color:#06B6D4;background:#F0F4FF;padding:1px 6px;border-radius:4px;">已设置·回大厅查看</span>'), _0x560ee0 += "</div>", _0x560ee0 += '<div style="display:flex;flex-wrap:wrap;gap:6px;padding:4px 20px 8px;">';
                    var _0x2fe077 = !_0x34b511;
                    _0x560ee0 += '<div class="__yc_lord" data-l="0" style="padding:5px 12px;border-radius:6px;cursor:pointer;font-size:13px;border:1px solid ' + (_0x2fe077 ? "#A855F7" : "#E0E0E0") + ";color:" + (_0x2fe077 ? "#A855F7" : "#6B7280") + ";background:" + (_0x2fe077 ? "#FAF5FF" : "#fff") + ';">默认</div>';
                    for (var _0x53d083 = 0x0; _0x53d083 < _0x17c48e["length"]; _0x53d083++) {
                      var _0x91a238 = _0x17c48e[_0x53d083],
                        _0x4b7709 = _0x34b511 === _0x91a238;
                      _0x560ee0 += '<div class="__yc_lord" data-l="' + _0x91a238 + '" style="padding:5px 12px;border-radius:6px;cursor:pointer;font-size:13px;border:1px solid ' + (_0x4b7709 ? "#A855F7" : "#E0E0E0") + ";color:" + (_0x4b7709 ? "#A855F7" : "#374151") + ";background:" + (_0x4b7709 ? "#FAF5FF" : "#fff") + ';">' + _0x1d4898(_0x91a238) + "</div>";
                    }
                    _0x560ee0 += "</div>", _0x560ee0 += '<div style="height:0.5px;background:#E0E0E0;margin:0 20px;"></div>';
                  }
                } catch (_0x5ae93f) {}
                try {
                  var _0x47bf9e = _0x219cde();
                  if (_0x47bf9e["length"]) {
                    var _0x34b3f9 = window["__yunqi_frameOverride"] || 0x0;
                    _0x560ee0 += '<div style="display:flex;align-items:center;padding:14px 20px 6px;">', _0x560ee0 += '<div style="width:3px;height:14px;border-radius:2px;background:#F59E0B;margin-right:8px;"></div>', _0x560ee0 += '<span style="font-size:14px;font-weight:bold;color:#1A1A2E;">头像框</span>', _0x34b3f9 && (_0x560ee0 += '<span style="margin-left:8px;font-size:11px;color:#06B6D4;background:#F0F4FF;padding:1px 6px;border-radius:4px;">已设置</span>'), _0x560ee0 += "</div>", _0x560ee0 += '<div style="display:flex;flex-wrap:wrap;gap:6px;padding:4px 20px 8px;">';
                    var _0x25942d = !_0x34b3f9;
                    _0x560ee0 += '<div class="__yc_frame" data-f="0" style="padding:5px 12px;border-radius:6px;cursor:pointer;font-size:13px;border:1px solid ' + (_0x25942d ? "#F59E0B" : "#E0E0E0") + ";color:" + (_0x25942d ? "#F59E0B" : "#6B7280") + ";background:" + (_0x25942d ? "#FFFBEB" : "#fff") + ';">默认</div>';
                    for (var _0x589f52 = 0x0; _0x589f52 < _0x47bf9e["length"]; _0x589f52++) {
                      var _0x30d98b = _0x47bf9e[_0x589f52],
                        _0x128db3 = _0x34b3f9 === _0x30d98b;
                      _0x560ee0 += '<div class="__yc_frame" data-f="' + _0x30d98b + '" style="padding:5px 12px;border-radius:6px;cursor:pointer;font-size:13px;border:1px solid ' + (_0x128db3 ? "#F59E0B" : "#E0E0E0") + ";color:" + (_0x128db3 ? "#F59E0B" : "#374151") + ";background:" + (_0x128db3 ? "#FFFBEB" : "#fff") + ';">' + _0x49e880(_0x30d98b) + "</div>";
                    }
                    _0x560ee0 += "</div>", _0x560ee0 += '<div style="height:0.5px;background:#E0E0E0;margin:0 20px;"></div>';
                  }
                } catch (_0x4a4fca) {}
                try {
                  var _0x48c63f = _0x337eed(_0x59dca3),
                    _0x53c157 = _0x337eed(_0x213427),
                    _0x2a44d6 = _0x337eed(_0x50855e),
                    _0x345e40 = _0x337eed(_0x4318af);
                  console["log"](_0x430b82 + " 面板装扮选项: 竞技场景=" + _0x48c63f["length"] + " 名片=" + _0x53c157["length"] + " 飞艇=" + _0x2a44d6["length"] + " 连杀=" + _0x345e40["length"]), _0x560ee0 += _0x1e57bd("竞技场景", "#10B981", "#ECFDF5", "__yc_pvpmap", window["__yunqi_pvpMapOverride"] || 0x0, _0x48c63f, _0x59dca3, "场景#"), _0x560ee0 += _0x1e57bd("个性名片", "#EC4899", "#FDF2F8", "__yc_card", window["__yunqi_cardOverride"] || 0x0, _0x53c157, _0x213427, "名片#"), _0x560ee0 += _0x1e57bd("盐场飞艇", "#0EA5E9", "#E0F2FE", "__yc_airship", window["__yunqi_airshipOverride"] || 0x0, _0x2a44d6, _0x50855e, "飞艇#"), _0x560ee0 += _0x1e57bd("击杀特效", "#F59E0B", "#FEF3C7", "__yc_multikill", window["__yunqi_multiKillOverride"] || 0x0, _0x345e40, _0x4318af, "连杀#");
                } catch (_0x598caf) {
                  try {
                    console["log"](_0x430b82 + " 面板装扮渲染异常: " + _0x598caf);
                  } catch (_0x12f3cb) {}
                }
                for (var _0x19c098 = Object["keys"](_0x55b998)["sort"](function (_0x34fb55, _0x11ec04) {
                    return _0x34fb55 - _0x11ec04;
                  }), _0x768ec3 = 0x0; _0x768ec3 < _0x19c098["length"]; _0x768ec3++) {
                  var _0x1cf7da = parseInt(_0x19c098[_0x768ec3]),
                    _0x122d16 = _0x55b998[_0x1cf7da];
                  if (_0x122d16 && !(_0x122d16["length"] < 0x1)) {
                    for (var _0x576487 = _0x8cd7db[_0x1cf7da] || _0x1cf7da, _0x36acf6 = 0x0, _0x59572b = 0x0; _0x59572b < _0x122d16["length"]; _0x59572b++) _0x122d16[_0x59572b] !== _0x1cf7da && _0x122d16[_0x59572b] !== _0x576487 && _0x36acf6++;
                    if (!(_0x36acf6 < 0x1)) {
                      var _0x37d6af = _0x24b897[_0x1cf7da] || 0x0;
                      _0x560ee0 += '<div style="display:flex;align-items:center;padding:14px 20px 6px;">', _0x560ee0 += '<div style="width:3px;height:14px;border-radius:2px;background:#3B82F6;margin-right:8px;"></div>', _0x560ee0 += '<span style="font-size:14px;font-weight:bold;color:#1A1A2E;">' + (_0x204150[_0x1cf7da] || _0x5c1f12(_0x1cf7da)) + "</span>", _0x37d6af && (_0x560ee0 += '<span style="margin-left:8px;font-size:11px;color:#06B6D4;background:#F0F4FF;padding:1px 6px;border-radius:4px;">已设置</span>'), _0x560ee0 += "</div>", _0x560ee0 += '<div style="display:flex;flex-wrap:wrap;gap:6px;padding:4px 20px 8px;">';
                      var _0xc77c63 = !_0x37d6af;
                      _0x560ee0 += '<div class="__yc_si" data-h="' + _0x1cf7da + '" data-s="0" style="padding:5px 12px;border-radius:6px;cursor:pointer;font-size:13px;border:1px solid ' + (_0xc77c63 ? "#3B82F6" : "#E0E0E0") + ";color:" + (_0xc77c63 ? "#3B82F6" : "#6B7280") + ";background:" + (_0xc77c63 ? "#EFF6FF" : "#fff") + ';">默认</div>';
                      for (var _0x5e7d88 = 0x0; _0x5e7d88 < _0x122d16["length"]; _0x5e7d88++) {
                        var _0x303392 = _0x122d16[_0x5e7d88];
                        if (_0x303392 !== _0x1cf7da && _0x303392 !== _0x576487) {
                          var _0x14d9b7 = _0x37d6af === _0x303392;
                          _0x560ee0 += '<div class="__yc_si" data-h="' + _0x1cf7da + '" data-s="' + _0x303392 + '" style="padding:5px 12px;border-radius:6px;cursor:pointer;font-size:13px;border:1px solid ' + (_0x14d9b7 ? "#3B82F6" : "#E0E0E0") + ";color:" + (_0x14d9b7 ? "#3B82F6" : "#374151") + ";background:" + (_0x14d9b7 ? "#EFF6FF" : "#fff") + ';">' + _0xe62a98(_0x303392) + "</div>";
                        }
                      }
                      _0x560ee0 += "</div>", _0x560ee0 += '<div style="height:0.5px;background:#E0E0E0;margin:0 20px;"></div>';
                    }
                  }
                }
                _0x560ee0 += '<div style="height:16px;"></div>', _0x1cb44f["innerHTML"] = _0x560ee0;
              }
              function _0x18cec2() {
                _0x4401a8(), _0x3facdc["style"]["display"] = "block", _0x2269b5["style"]["display"] = "flex", _0x2269b5["style"]["transform"] = "";
              }
              function _0x3b77c7() {
                _0x3facdc["style"]["display"] = "none", _0x2269b5["style"]["display"] = "none", _0x2269b5["style"]["transform"] = "";
              }
              _0x202b3a["addEventListener"]("touchstart", function (_0x51570d) {
                _0x6f6735 = _0x51570d["touches"][0x0]["clientY"], _0x365762 = _0x6f6735, _0x3ee4d5 = !0x0, _0x2269b5["style"]["transition"] = "none";
              }), _0x202b3a["addEventListener"]("touchmove", function (_0x3866f2) {
                if (_0x3ee4d5) {
                  var _0x153107 = (_0x365762 = _0x3866f2["touches"][0x0]["clientY"]) - _0x6f6735;
                  _0x153107 > 0x0 && (_0x2269b5["style"]["transform"] = "translateY(" + _0x153107 + "px)");
                }
              }), _0x202b3a["addEventListener"]("touchend", function () {
                _0x3ee4d5 && (_0x3ee4d5 = !0x1, _0x2269b5["style"]["transition"] = "transform 0.2s ease", _0x365762 - _0x6f6735 > 0x50 && _0x3b77c7(), _0x2269b5["style"]["transform"] = "");
              }), window["__yunqi_showSkinPicker"] = _0x18cec2, window["__yunqi_hideSkinPicker"] = _0x3b77c7, _0x3facdc["addEventListener"]("click", _0x3b77c7), _0x1cb44f["addEventListener"]("click", function (_0x4df730) {
                var _0x1db827 = _0x4df730["target"];
                if (_0x1db827["classList"]["contains"]("__yc_lord")) {
                  var _0x3afdc8 = parseInt(_0x1db827["dataset"]["l"]) || 0x0;
                  window["__yunqi_lordOverride"] = _0x3afdc8;
                  try {
                    var _0x34a5b5 = _0x5460a0();
                    _0x34a5b5 && (_0x3afdc8 ? localStorage["setItem"](_0x34a5b5, "" + _0x3afdc8) : localStorage["removeItem"](_0x34a5b5));
                  } catch (_0x1c48dc) {}
                  _0x4401a8();
                } else {
                  if (_0x1db827["classList"]["contains"]("__yc_frame")) {
                    var _0x349abe = parseInt(_0x1db827["dataset"]["f"]) || 0x0;
                    window["__yunqi_frameOverride"] = _0x349abe;
                    try {
                      var _0x365312 = _0x4cbb51();
                      _0x365312 && (_0x349abe ? localStorage["setItem"](_0x365312, "" + _0x349abe) : localStorage["removeItem"](_0x365312));
                    } catch (_0x497a8b) {}
                    _0x4401a8();
                  } else {
                    if (_0x1db827["classList"]["contains"]("__yc_pvpmap")) {
                      var _0x2a3402 = parseInt(_0x1db827["dataset"]["d"]) || 0x0;
                      window["__yunqi_pvpMapOverride"] = _0x2a3402, window["__yc_pvpLogN"] = 0x0, window["__yc_pvpLogF"] = 0x0;
                      try {
                        var _0xae9e8b = _0x3947cd();
                        _0xae9e8b && (_0x2a3402 ? localStorage["setItem"](_0xae9e8b, "" + _0x2a3402) : localStorage["removeItem"](_0xae9e8b));
                      } catch (_0x2449fc) {}
                      try {
                        _0x2a3402 && window["__ycPreloadOverrideScene"] && window["__ycPreloadOverrideScene"]();
                      } catch (_0x1e6843) {}
                      try {
                        console["log"](_0x430b82 + " Phase10 竞技场景 已选 override=" + _0x2a3402 + "（竞技场即时生效；主线/home 做一场战斗或重登后生效）");
                      } catch (_0x11c83f) {}
                      _0x4401a8();
                    } else {
                      if (_0x1db827["classList"]["contains"]("__yc_card")) {
                        var _0x32641e = parseInt(_0x1db827["dataset"]["d"]) || 0x0;
                        window["__yunqi_cardOverride"] = _0x32641e;
                        try {
                          var _0x10e1e7 = _0x1d0c0d();
                          _0x10e1e7 && (_0x32641e ? localStorage["setItem"](_0x10e1e7, "" + _0x32641e) : localStorage["removeItem"](_0x10e1e7));
                        } catch (_0x5ea608) {}
                        try {
                          console["log"](_0x430b82 + " Phase10 个性名片 已选 override=" + _0x32641e);
                        } catch (_0x1b0e3e) {}
                        _0x4401a8();
                      } else {
                        if (_0x1db827["classList"]["contains"]("__yc_airship")) {
                          var _0x153e28 = parseInt(_0x1db827["dataset"]["d"]) || 0x0;
                          window["__yunqi_airshipOverride"] = _0x153e28;
                          try {
                            var _0x3ce79f = _0xbce3b2();
                            _0x3ce79f && (_0x153e28 ? localStorage["setItem"](_0x3ce79f, "" + _0x153e28) : localStorage["removeItem"](_0x3ce79f));
                          } catch (_0x2c7f50) {}
                          try {
                            console["log"](_0x430b82 + " Phase12 盐场飞艇 已选 override=" + _0x153e28 + "（进盐场/军团战查看）");
                          } catch (_0x17cd88) {}
                          _0x4401a8();
                        } else {
                          if (_0x1db827["classList"]["contains"]("__yc_multikill")) {
                            var _0x5a2ce8 = parseInt(_0x1db827["dataset"]["d"]) || 0x0;
                            window["__yunqi_multiKillOverride"] = _0x5a2ce8;
                            try {
                              var _0x3d688f = _0x349f56();
                              _0x3d688f && (_0x5a2ce8 ? localStorage["setItem"](_0x3d688f, "" + _0x5a2ce8) : localStorage["removeItem"](_0x3d688f));
                            } catch (_0x219137) {}
                            try {
                              console["log"](_0x430b82 + " Phase13 击杀特效 已选 override=" + _0x5a2ce8 + "（进盐场/军团战连杀查看）");
                            } catch (_0x266d8c) {}
                            _0x4401a8();
                          } else {
                            if ("__yc_skreset" === _0x1db827["id"]) {
                              for (var _0x2f0d8e in _0x24b897) {
                                try {
                                  var _0x1ec414 = _0x27e157["getHeroById"](parseInt(_0x2f0d8e));
                                  _0x1ec414 && (_0x1ec414["skinId"] = 0x0, _0x1ec414["useSkin"] = 0x0);
                                } catch (_0x59b8bb) {}
                                delete _0x24b897[_0x2f0d8e];
                              }
                              return _0x7cbfb1(), void _0x4401a8();
                            }
                            if (_0x1db827["classList"]["contains"]("__yc_si")) {
                              var _0x151749 = parseInt(_0x1db827["dataset"]["h"]),
                                _0x4df875 = parseInt(_0x1db827["dataset"]["s"]);
                              if (0x0 === _0x4df875) {
                                delete _0x24b897[_0x151749];
                                try {
                                  var _0x5f1ac7 = _0x27e157["getHeroById"](_0x151749);
                                  _0x5f1ac7 && (_0x5f1ac7["skinId"] = 0x0, _0x5f1ac7["useSkin"] = 0x0);
                                } catch (_0x29b819) {}
                              } else {
                                _0x24b897[_0x151749] = _0x4df875;
                                try {
                                  var _0x65c066 = _0x27e157["getHeroById"](_0x151749);
                                  _0x65c066 && (_0x65c066["skinId"] = _0x4df875, _0x65c066["useSkin"] = _0x4df875);
                                } catch (_0x58c8e7) {}
                              }
                              _0x7cbfb1(), _0x4401a8();
                            }
                          }
                        }
                      }
                    }
                  }
                }
              });
            }() : _0x24b0d4 < 0x78 && setTimeout(_0x483120, 0x1f4);
          }();
        }
      }(), console["log"](_0x430b82 + " 已注入，Phase 1/2/3 启动中");
    }
  } else console["log"]("[皮肤管理] 功能已关闭，跳过");
  function _0x27a83b() {
    if (!_0xbc57ee) try {
      window["ROLE"] && window["ROLE"]["roleId"] && (_0xbc57ee = window["ROLE"]["roleId"]);
    } catch (_0x5e2c6a) {}
    return _0xbc57ee ? "__yunqi_skinOverrides_" + _0xbc57ee : null;
  }
  function _0x241908() {
    if (_0x7cd93) return !0x0;
    var _0x36af07 = _0x27a83b();
    if (!_0x36af07) return !0x1;
    try {
      var _0x322e1c = localStorage["getItem"](_0x36af07);
      if (_0x322e1c) {
        var _0x461245 = JSON["parse"](_0x322e1c);
        for (var _0x4b5fc8 in _0x461245) _0x347d22[_0x4b5fc8] = _0x461245[_0x4b5fc8];
      }
      _0x7cd93 = !0x0, window["__yunqi_skinCurRoleId"] = _0xbc57ee;
      try {
        console["log"](_0x430b82 + " 已加载 roleId=" + _0xbc57ee + " count=" + Object["keys"](_0x347d22)["length"] + " key=" + _0x36af07);
      } catch (_0x433559) {}
    } catch (_0x3e2e46) {}
    return _0x7cd93;
  }
  function _0x3dd92b() {
    var _0x12afa4 = _0x27a83b();
    if (_0x12afa4) {
      try {
        localStorage["setItem"](_0x12afa4, JSON["stringify"](_0x347d22));
        try {
          console["log"](_0x430b82 + " 已保存 roleId=" + _0xbc57ee + " count=" + Object["keys"](_0x347d22)["length"]);
        } catch (_0x4bdc81) {}
      } catch (_0x545a18) {}
      try {
        window["__yunqi_skinToHeroDirty"] = !0x0;
      } catch (_0x36ab76) {}
    }
  }
}();
