// Adapted from the supplied 2.57.2 game enhancement asset.
// Static strings decoded; obfuscator guards removed; frame access stays local.
!function () {
  "use strict";
  var _0x3572c6 = "[怪异塔一键合成]",
    _0x17dd34 = "1.6.2";
  function _0x4e4530() {
    if ("function" == typeof window["__require"]) return window;
    try {
      for (var _0x5eff19 = document["querySelectorAll"]("iframe"), _0x22cddc = 0x0; _0x22cddc < _0x5eff19["length"]; _0x22cddc++) {
        var _0x22ac13 = _0x5eff19[_0x22cddc]["contentWindow"];
        if (_0x22ac13 && "function" == typeof _0x22ac13["__require"]) return _0x22ac13;
      }
    } catch (_0x2acb6d) {}
    return null;
  }
  function _0x649506(_0x3b6563) {
    var _0xb50df5 = _0x4e4530();
    if (!_0xb50df5) return null;
    try {
      return _0xb50df5["__require"](_0x3b6563);
    } catch (_0x22d3fa) {
      return null;
    }
  }
  function _0x4b590a() {
    return !!function () {
      try {
        var _0x438f3b = (_0x4e4530() || window)["fgui"];
        if (_0x438f3b && _0x438f3b["GRoot"] && _0x438f3b["GRoot"]["_inst"]) return _0x438f3b["GRoot"]["_inst"];
      } catch (_0x3662ad) {}
      try {
        var _0x55be35 = window["fgui"];
        if (_0x55be35 && _0x55be35["GRoot"] && _0x55be35["GRoot"]["_inst"]) return _0x55be35["GRoot"]["_inst"];
      } catch (_0x552a6f) {}
      return null;
    }();
  }
  function _0x393ff2() {
    var _0xdc20f6 = _0x649506("Configs"),
      _0x2fc6fc = _0x649506("ModuleManager");
    if (!_0xdc20f6 || !_0x2fc6fc || !_0xdc20f6["ModuleType"] || "function" != typeof _0x2fc6fc["GET_MODULE"]) return null;
    try {
      return _0x2fc6fc["GET_MODULE"](_0xdc20f6["ModuleType"]["MERGE_BOARD"]);
    } catch (_0x7c96d) {
      return null;
    }
  }
  function _0x3dfccb() {
    try {
      var _0x18befb = _0x649506("Configs");
      if (_0x18befb && _0x18befb["ActMergeFestivalType"] && null != _0x18befb["ActMergeFestivalType"]["EvoTower"]) return _0x18befb["ActMergeFestivalType"]["EvoTower"];
    } catch (_0x59d2d8) {}
    try {
      var _0x1f3457 = _0x649506("data-index");
      if (_0x1f3457 && _0x1f3457["ActMergeFestivalType"] && null != _0x1f3457["ActMergeFestivalType"]["EvoTower"]) return _0x1f3457["ActMergeFestivalType"]["EvoTower"];
    } catch (_0x2b635d) {}
    return null;
  }
  function _0x11ec87() {
    var _0x18b5da = _0x393ff2();
    if (!_0x18b5da) return console["warn"](_0x3572c6, "未找到 MERGE_BOARD 模块（需在游戏内运行）"), null;
    var _0x1e0b2d = _0x3dfccb();
    if (null != _0x1e0b2d && "function" == typeof _0x18b5da["getActData"]) try {
      var _0x7d3f52 = _0x18b5da["getActData"](_0x1e0b2d);
      if (_0x7d3f52 && "function" == typeof _0x7d3f52["sendAutoMergeItems"]) return _0x7d3f52;
    } catch (_0x28fae8) {}
    try {
      var _0x58c4ac = _0x18b5da["_actDataMap"];
      if (_0x58c4ac && "function" == typeof _0x58c4ac["forEach"]) {
        var _0x15225b = null;
        if (_0x58c4ac["forEach"](function (_0x20e3f7) {
          !_0x15225b && _0x20e3f7 && "function" == typeof _0x20e3f7["sendAutoMergeItems"] && (_0x15225b = _0x20e3f7);
        }), _0x15225b) return _0x15225b;
      }
    } catch (_0x793ec6) {}
    return console["warn"](_0x3572c6, "未找到怪异塔合成数据，请先进入「怪异塔/进化塔」合成界面再运行"), null;
  }
  function _0x9b2372() {
    try {
      var _0x353632 = _0x649506("MPData");
      if (_0x353632 && _0x353632["MPTileEmission"] && null != _0x353632["MPTileEmission"]["CAN_LAUNCH"]) return _0x353632["MPTileEmission"];
    } catch (_0x387941) {}
    return {
      NONE: 0x0,
      CAN_LAUNCH: 0x1,
      CAN_UNLOCK: 0x2,
      CAN_USE_ITEM: 0x3,
      WAIT_LAUNCH_LOSE_REQ: 0x4,
      WAIT_UNLOCK_LOSE_REQ: 0x5,
      WAIT_UNLOCK_LOSE_DEP: 0x6
    };
  }
  function _0x4d2fa8(_0x280212) {
    try {
      for (var _0x3143c0 = _0x280212["tiles"] || [], _0x4ff629 = {}, _0x8cbfd6 = 0x0; _0x8cbfd6 < _0x3143c0["length"]; _0x8cbfd6++) {
        var _0x253b59 = _0x3143c0[_0x8cbfd6];
        _0x253b59 && _0x253b59["canMerge"] && null != _0x253b59["gridItemId"] && (_0x4ff629[_0x253b59["gridItemId"]] = _0x4ff629[_0x253b59["gridItemId"]] || [])["push"](_0x8cbfd6);
      }
      var _0x2310b9 = "function" == typeof _0x280212["canMergeItems"];
      for (var _0x420458 in _0x4ff629) if (Object["prototype"]["hasOwnProperty"]["call"](_0x4ff629, _0x420458)) {
        for (var _0x7a9e8f = _0x4ff629[_0x420458], _0x1c364e = 0x0; _0x1c364e < _0x7a9e8f["length"]; _0x1c364e++) for (var _0x502136 = _0x1c364e + 0x1; _0x502136 < _0x7a9e8f["length"]; _0x502136++) {
          var _0x1faee6 = _0x280212["arrayIndexToPosition"](_0x7a9e8f[_0x502136]),
            _0x157168 = _0x280212["arrayIndexToPosition"](_0x7a9e8f[_0x1c364e]);
          if (!_0x2310b9 || _0x280212["canMergeItems"](_0x1faee6, _0x157168)) return {
            source: _0x1faee6,
            target: _0x157168
          };
        }
      }
    } catch (_0x48dad1) {}
    return null;
  }
  function _0x526a9f() {
    try {
      var _0x3caeae = _0x649506("MPData"),
        _0x2f994e = _0x3caeae && _0x3caeae["MPData"];
      if (_0x2f994e && _0x2f994e["prototype"] && "function" == typeof _0x2f994e["prototype"]["checkSatisfyUnlockAutoMerge"]) return _0x2f994e["prototype"]["__salt_unlocked"] || (_0x2f994e["prototype"]["checkSatisfyUnlockAutoMerge"] = function () {
        return !0x0;
      }, _0x2f994e["prototype"]["__salt_unlocked"] = !0x0), !0x0;
    } catch (_0x5b1168) {}
    return !0x1;
  }
  function _0x3d953c() {
    if (!_0x4b590a()) return !0x1;
    var _0x2477f7 = function () {
      if (!_0x4b590a()) return null;
      var _0x1fbaa9 = _0x649506("index-ui"),
        _0x525a72 = _0x649506("EvoTowerMergePlayDialog");
      if (!_0x1fbaa9 || "function" != typeof _0x1fbaa9["GET_PROXY"] || !_0x525a72 || !_0x525a72["EvoTowerMergePlayDialog"]) return null;
      try {
        return _0x1fbaa9["GET_PROXY"](_0x525a72["EvoTowerMergePlayDialog"]) || null;
      } catch (_0x138ebf) {
        return null;
      }
    }();
    if (!_0x2477f7) return !0x1;
    try {
      "function" == typeof _0x2477f7["_refreshAutoMerge"] && _0x2477f7["_refreshAutoMerge"]();
    } catch (_0x50208) {}
    try {
      var _0x4fa409 = _0x2477f7["ui"] && _0x2477f7["ui"]["m_btnAutoMerge"];
      if (_0x4fa409) {
        try {
          _0x4fa409["grayed"] = !0x1;
        } catch (_0x20dddf) {}
        try {
          _0x4fa409["touchable"] = !0x0;
        } catch (_0x709a2b) {}
        try {
          _0x4fa409["m_isEnabled"] && (_0x4fa409["m_isEnabled"]["selectedPage"] = "true");
        } catch (_0x16788a) {}
        if (!_0x4fa409["__salt_hooked"]) {
          try {
            "function" == typeof _0x4fa409["clearClick"] && _0x4fa409["clearClick"]();
          } catch (_0x5d2124) {}
          try {
            "function" == typeof _0x4fa409["onClick"] && (_0x4fa409["onClick"](function () {
              _0x23b12d["自动抽合"](!_0x23b12d["_running"]);
            }), _0x4fa409["__salt_hooked"] = !0x0);
          } catch (_0x9582e5) {}
        }
      }
    } catch (_0x381409) {}
    return !0x0;
  }
  function _0x4972c9(_0x1c3b89, _0x301686) {
    if (_0x1c3b89) {
      if ("function" == typeof _0x1c3b89["get"]) {
        var _0x412af5 = _0x1c3b89["get"](_0x301686);
        return void 0x0 !== _0x412af5 ? _0x412af5 : "number" == typeof _0x301686 ? _0x1c3b89["get"](String(_0x301686)) : _0x1c3b89["get"](Number(_0x301686));
      }
      var _0x3d3d58 = _0x1c3b89[_0x301686];
      return void 0x0 !== _0x3d3d58 ? _0x3d3d58 : _0x1c3b89[String(_0x301686)];
    }
  }
  function _0x19d077(_0x2c27a1) {
    if (!_0x2c27a1) return Promise["resolve"](!0x1);
    try {
      if ("function" == typeof _0x2c27a1["canClaimConsumeReward"] && _0x2c27a1["canClaimConsumeReward"]() && "function" == typeof _0x2c27a1["sendClaimCostProgressReward"]) return console["log"](_0x3572c6, "领取累积消耗奖励"), Promise["resolve"](_0x2c27a1["sendClaimCostProgressReward"]())["then"](function (_0x4809b0) {
        return !!_0x4809b0;
      }, function () {
        return !0x1;
      });
    } catch (_0x323da1) {}
    try {
      if ("function" == typeof _0x2c27a1["sendClaimMergeProgressReward"]) {
        if ("function" != typeof _0x2c27a1["canClaimProgressReward"] || _0x2c27a1["canClaimProgressReward"]()) {
          var _0x468f36 = function (_0x58a694) {
            var _0x4ae791 = [];
            try {
              var _0x35a247 = _0x649506("Configs"),
                _0x55746b = _0x35a247 && _0x35a247["ActMergeProgressConf"] && _0x35a247["ActMergeProgressConf"]["list"];
              if (!_0x55746b || !_0x58a694["taskMap"]) return _0x4ae791;
              _0x55746b["forEach"](function (_0x2e62cf) {
                var _0x561ed7 = Number(_0x4972c9(_0x58a694["taskMap"], _0x2e62cf["id"])) || 0x0,
                  _0x92dfb3 = Number(_0x4972c9(_0x58a694["taskClaimMap"], _0x2e62cf["id"])) || 0x0;
                _0x561ed7 > 0x0 && _0x92dfb3 <= 0x0 && _0x4ae791["push"](_0x2e62cf["id"]);
              });
            } catch (_0x1d39c7) {}
            return _0x4ae791;
          }(_0x2c27a1);
          if (_0x468f36["length"]) return console["log"](_0x3572c6, "领取合成进度奖励 task=" + _0x468f36[0x0]), Promise["resolve"](_0x2c27a1["sendClaimMergeProgressReward"](_0x468f36[0x0]))["then"](function (_0x22c2d6) {
            return !!_0x22c2d6;
          }, function () {
            return !0x1;
          });
        }
      }
    } catch (_0x12569c) {}
    try {
      if ("function" == typeof _0x2c27a1["canClaimFreeRewards"] && _0x2c27a1["canClaimFreeRewards"]()) {
        var _0x212328 = _0x393ff2(),
          _0x29f5e8 = _0x3dfccb();
        if (_0x212328 && "function" == typeof _0x212328["sendClaimFreeEnergy"] && null != _0x29f5e8) return console["log"](_0x3572c6, "领取免费钥匙/能量"), Promise["resolve"](_0x212328["sendClaimFreeEnergy"](_0x29f5e8))["then"](function (_0x3db13c) {
          return !!_0x3db13c;
        }, function () {
          return !0x1;
        });
      }
    } catch (_0x426967) {}
    return Promise["resolve"](!0x1);
  }
  function _0x4bedb5(_0x4403f8) {
    try {
      clearTimeout(_0x23b12d["_suppressTimer"]);
    } catch (_0x2c9615) {}
    _0x4403f8 ? _0x23b12d["_suppress"] = !0x0 : _0x23b12d["_suppressTimer"] = setTimeout(function () {
      _0x23b12d["_suppress"] = !0x1;
    }, 0x1388);
  }
  function _0x38953f() {
    if (_0x4b590a()) try {
      var _0x56db2f = _0x649506("index-ui");
      _0x56db2f && ["SHOW_DIALOG_DEFERRED", "SHOW_PROXY", "SHOW_PROXY_OVER", "PUSH_DIALOG_QUEUE"]["forEach"](function (_0x100e5d) {
        _0x4607df(_0x56db2f, _0x100e5d);
      });
    } catch (_0x1b38f3) {}
    function _0x4607df(_0x3eff56, _0x113ada) {
      if (_0x3eff56 && "function" == typeof _0x3eff56[_0x113ada] && !_0x3eff56[_0x113ada]["__guaiyita"]) {
        var _0x14478f = _0x3eff56[_0x113ada];
        _0x3eff56[_0x113ada] = function () {
          return _0x23b12d["_suppress"] && (function (_0x2171ad) {
            for (var _0x17c07a = 0x0; _0x17c07a < _0x2171ad["length"]; _0x17c07a++) {
              var _0x5b36ae = _0x2171ad[_0x17c07a];
              if (_0x5b36ae && "object" == typeof _0x5b36ae && (Array["isArray"](_0x5b36ae["rewards"]) || Array["isArray"](_0x5b36ae["reward"]))) return !0x0;
            }
            return !0x1;
          }(arguments) || (_0x4374f9 = (_0x57199a = arguments[0x0]) && (_0x57199a["name"] || _0x57199a["__classname__"] || _0x57199a["_name"] || _0x57199a["constructor"] && _0x57199a["constructor"]["name"] || ""), -0x1 !== (_0x4374f9 = String(_0x4374f9))["indexOf"]("ItemRewardsDialog") || -0x1 !== _0x4374f9["indexOf"]("RewardsDialog") || -0x1 !== _0x4374f9["indexOf"]("RewardDialog"))) ? "SHOW_DIALOG_DEFERRED" === _0x113ada ? Promise["resolve"](null) : null : _0x14478f["apply"](this, arguments);
          var _0x57199a, _0x4374f9;
        }, _0x3eff56[_0x113ada]["__guaiyita"] = !0x0;
      }
    }
  }
  function _0x25d4e3(_0x14bd13) {
    var _0x3155b5 = null != _0x14bd13["gap"] ? +_0x14bd13["gap"] : 0x0;
    _0x3155b5 < 0x0 && (_0x3155b5 = 0x0);
    var _0x4fe12f = null != _0x14bd13["cap"] ? +_0x14bd13["cap"] : 0xfa0,
      _0xe6fc7e = _0x14bd13["label"] || "\u5faa\u73af",
      _0x124f54 = ++_0x23b12d["_runId"];
    _0x23b12d["_running"] = !0x0, _0x4bedb5(!0x0);
    var _0x893a1 = 0x0,
      _0x8c23c3 = 0x0;
    function _0x292abb(_0x2ba371) {
      _0x23b12d["_running"] = !0x1, _0x4bedb5(!0x1), _0x2ba371 && console["log"](_0x3572c6, _0x2ba371);
    }
    function _0x1dc5c1() {
      _0x4bedb5(!0x0), _0x3155b5 > 0x0 ? setTimeout(_0xf19965, _0x3155b5) : Promise["resolve"]()["then"](_0xf19965);
    }
    function _0x2a65c3(_0x903cc5) {
      Promise["resolve"](_0x903cc5)["then"](_0x1dc5c1, _0x1dc5c1);
    }
    function _0xf19965() {
      if (_0x23b12d["_running"] && _0x124f54 === _0x23b12d["_runId"]) {
        if (_0x893a1 >= _0x4fe12f) _0x292abb(_0xe6fc7e + " 已达上限 " + _0x4fe12f + "，停止（共 " + _0x893a1 + " 步）");else {
          var _0x1ab30c = _0x11ec87();
          if (!_0x1ab30c) return ++_0x8c23c3 > 0x1e ? void _0x292abb(_0xe6fc7e + " 数据源持续不可用，已停止") : void setTimeout(_0xf19965, 0x190);
          _0x8c23c3 = 0x0;
          var _0x58bd40 = _0x4d2fa8(_0x1ab30c);
          if (_0x58bd40) {
            _0x893a1++;
            try {
              _0x2a65c3(_0x1ab30c["sendMergeItems"](_0x58bd40["source"], _0x58bd40["target"]));
            } catch (_0x4a6047) {
              _0x1dc5c1();
            }
          } else {
            if (_0x14bd13["draw"]) {
              var _0x8cebbd = function (_0x2f39ad, _0x35726a) {
                try {
                  for (var _0x42255e = _0x2f39ad["tiles"] || [], _0x1f8c6a = 0x0; _0x1f8c6a < _0x42255e["length"]; _0x1f8c6a++) {
                    var _0x2e081b = _0x2f39ad["arrayIndexToPosition"](_0x1f8c6a);
                    if (_0x2f39ad["isPositionInside"](_0x2e081b) && !_0x2f39ad["isPositionEmpty"](_0x2e081b) && _0x2f39ad["getEmissionState"](_0x2e081b) === _0x35726a) return _0x2e081b;
                  }
                } catch (_0x2e7112) {}
                return null;
              }(_0x1ab30c, _0x9b2372()["CAN_LAUNCH"]);
              if (_0x8cebbd) {
                _0x893a1++;
                try {
                  _0x2a65c3(_0x1ab30c["sendLaunchItem"](_0x8cebbd));
                } catch (_0x312287) {
                  _0x1dc5c1();
                }
                return;
              }
            }
            _0x14bd13["claim"] ? _0x19d077(_0x1ab30c)["then"](function (_0x292c14) {
              _0x292c14 ? (_0x893a1++, _0x1dc5c1()) : _0x292abb(_0xe6fc7e + " 完成：无可合/开箱/领奖（共 " + _0x893a1 + " 步）");
            }, function () {
              _0x292abb();
            }) : _0x292abb(_0xe6fc7e + " 完成：无可合" + (_0x14bd13["draw"] ? "/可开箱" : "") + "（共 " + _0x893a1 + " 步）");
          }
        }
      }
    }
    console["log"](_0x3572c6, _0xe6fc7e + " 已开启（回包即续，尽快执行；" + (_0x14bd13["draw"] ? "合并+开箱(不使用奖励物)" : "仅合并") + "；停止 _怪异塔." + _0xe6fc7e + "(false)）"), _0xf19965();
  }
  var _0x23b12d = {
    "\u7248\u672c": _0x17dd34,
    _running: !0x1,
    _runId: 0x0,
    _suppress: !0x1,
    "\u89e3\u9501": function () {
      _0x526a9f();
      var _0x48d025 = _0x3d953c();
      return console["log"](_0x3572c6, "原生「一键合成」是服务端门禁(12300080)，客户端无法真正解锁；已" + (_0x48d025 ? "点亮并接管按钮：点击=开始/停止 自动抽合（客户端逐对合并）" : "挂自动接管，进界面后生效") + "。也可 _怪异塔.自动抽合(true)。"), !0x0;
    },
    "\u5408\u6210": function () {
      var _0x15e6b2 = _0x11ec87();
      return !!_0x15e6b2 && (function (_0x122d72) {
        var _0x28bf6d = _0x4d2fa8(_0x122d72);
        if (!_0x28bf6d) return !0x1;
        try {
          return _0x122d72["sendMergeItems"](_0x28bf6d["source"], _0x28bf6d["target"]), !0x0;
        } catch (_0x19d728) {
          return console["warn"](_0x3572c6, "合并异常", _0x19d728 && _0x19d728["message"]), !0x1;
        }
      }(_0x15e6b2) ? (console["log"](_0x3572c6, "已合并一对（整盘合并用 _怪异塔.自动合成(true)）"), !0x0) : (console["log"](_0x3572c6, "当前没有可合并的同类物品"), !0x1));
    },
    "\u81ea\u52a8\u5408\u6210": function (_0x39a5dc, _0x365021) {
      if (!0x1 === _0x39a5dc) return _0x23b12d["_running"] = !0x1, _0x4bedb5(!0x1), void console["log"](_0x3572c6, "自动合成已停止");
      _0x25d4e3({
        draw: !0x1,
        gap: null != _0x365021 ? +_0x365021 : 0x0,
        cap: 0x1388,
        label: "自动合成"
      });
    },
    "\u81ea\u52a8\u62bd\u5408": function (_0x188e6b, _0x44bf1b, _0x5922fc) {
      if (!0x1 === _0x188e6b) return _0x23b12d["_running"] = !0x1, _0x4bedb5(!0x1), void console["log"](_0x3572c6, "自动抽合已停止");
      _0x25d4e3({
        draw: !0x0,
        claim: !0x0,
        gap: null != _0x44bf1b ? +_0x44bf1b : 0x0,
        cap: null != _0x5922fc ? +_0x5922fc : 0x5dc,
        label: "自动抽合"
      });
    },
    "\u9886\u5956": function () {
      var _0x3981e4 = _0x11ec87();
      if (_0x3981e4) {
        var _0x21fb1b = 0x0;
        _0x4bedb5(!0x0), function _0x371ac8() {
          _0x19d077(_0x3981e4)["then"](function (_0x1f78f0) {
            _0x1f78f0 && _0x21fb1b < 0xc8 ? (_0x21fb1b++, _0x4bedb5(!0x0), setTimeout(_0x371ac8, 0x3c)) : (_0x4bedb5(!0x1), console["log"](_0x3572c6, "领奖完成，共领 " + _0x21fb1b + "\x20\u9879"));
          }, function () {
            _0x4bedb5(!0x1), console["log"](_0x3572c6, "领奖结束，共领 " + _0x21fb1b + "\x20\u9879");
          });
        }();
      }
    },
    "\u72b6\u6001": function () {
      var _0x385d2c = _0x11ec87();
      if (_0x385d2c) {
        var _0x4efb74 = "?",
          _0x1a9cc8 = "?",
          _0x17bc5e = 0x0,
          _0x1dee52 = 0x0;
        try {
          "function" == typeof _0x385d2c["checkSatisfyUnlockAutoMerge"] && (_0x4efb74 = _0x385d2c["checkSatisfyUnlockAutoMerge"]());
        } catch (_0x1f0781) {}
        try {
          "function" == typeof _0x385d2c["checkExistMergeItems"] && (_0x1a9cc8 = _0x385d2c["checkExistMergeItems"]());
        } catch (_0x3e17da) {}
        try {
          for (var _0x31e9ef = _0x9b2372(), _0x303fe9 = _0x385d2c["tiles"] || [], _0x58744c = 0x0; _0x58744c < _0x303fe9["length"]; _0x58744c++) {
            var _0xbd9a05 = _0x385d2c["arrayIndexToPosition"](_0x58744c);
            if (_0x385d2c["isPositionInside"](_0xbd9a05) && !_0x385d2c["isPositionEmpty"](_0xbd9a05)) {
              var _0x2474da = _0x385d2c["getEmissionState"](_0xbd9a05);
              _0x2474da === _0x31e9ef["CAN_LAUNCH"] ? _0x17bc5e++ : _0x2474da === _0x31e9ef["CAN_USE_ITEM"] && _0x1dee52++;
            }
          }
        } catch (_0xe78cfe) {}
        return console["log"](_0x3572c6, "怪异塔合成 | 已解锁=" + _0x4efb74 + " 有可合成物=" + _0x1a9cc8 + " 可开箱=" + _0x17bc5e + " 可用物=" + _0x1dee52 + " actType=" + _0x385d2c["actType"]), {
          unlocked: _0x4efb74,
          hasItems: _0x1a9cc8,
          launchable: _0x17bc5e,
          usable: _0x1dee52,
          actType: _0x385d2c["actType"]
        };
      }
    },
    "\u5e2e\u52a9": function () {
      console["log"]([_0x3572c6 + "\x20v" + _0x17dd34 + " 用法：", "【说明】原生「一键合成」是服务端门禁(需达成8级怪物)，客户端无法真正解锁；", "本脚本改用客户端逐对合并(sendMergeItems)实现同等效果，并接管原生按钮点击。", "【已自动接管】进入界面后，点击原生「一键合成」= 开始/停止 自动抽合。", "_怪异塔.合成()                      — 合并一对同类（客户端，不受门禁）", "_怪异塔.自动合成(true[, 间隔ms])      — 整盘逐对合并(回包即续)；(false) 停止", "_怪异塔.自动抽合(true[, 间隔ms, 上限]) — 合并+开箱(耗钥匙)+自动领奖循环；(false) 停止", "_怪异塔.领奖()                      — 仅领取累积消耗/合成进度任务奖励", "_怪异塔.状态()                      — 打印可合成/可开箱/可用物", "提示：默认间隔0(回包即续,最快)；自动抽合会消耗钥匙、不动板上奖励物，但会领取顶部进度奖励。自动运行时抑制奖励弹窗。"]["join"]("\x0a"));
    }
  };
  try {
    var _0x156040 = _0x4e4530();
    _0x156040 && (_0x156040["_怪异塔"] = _0x23b12d);
  } catch (_0x9d99ba) {}
  try {
    window["_怪异塔"] = _0x23b12d;
  } catch (_0x332319) {}
  try {
    window["__guaiyita_guardTimer"] && clearInterval(window["__guaiyita_guardTimer"]);
  } catch (_0x3766cd) {}
  window["__guaiyita_guardTimer"] = setInterval(function () {
    try {
      if (_0x526a9f(), !_0x4b590a()) return;
      _0x38953f(), function () {
        try {
          var _0x3848df = _0x649506("ItemRewardsDialog"),
            _0x2424db = _0x3848df && _0x3848df["ItemRewardsDialog"];
          if (!_0x2424db || !_0x2424db["prototype"] || _0x2424db["prototype"]["__guaiyita_hooked"]) return;
          ["onShow", "onFixShow", "onShown"]["forEach"](function (_0x4390c0) {
            var _0x384a45 = _0x2424db["prototype"][_0x4390c0];
            "function" == typeof _0x384a45 && (_0x2424db["prototype"][_0x4390c0] = function () {
              var _0x493d3d = _0x384a45["apply"](this, arguments);
              if (_0x23b12d["_suppress"]) {
                var _0x54b28a = this,
                  _0x2cfc88 = function () {
                    if (_0x23b12d["_suppress"]) try {
                      "function" == typeof _0x54b28a["close"] ? _0x54b28a["close"]() : "function" == typeof _0x54b28a["hide"] && _0x54b28a["hide"]();
                    } catch (_0x5ee3e8) {}
                  };
                _0x2cfc88(), setTimeout(_0x2cfc88, 0x1e), setTimeout(_0x2cfc88, 0x78);
              }
              return _0x493d3d;
            });
          }), _0x2424db["prototype"]["__guaiyita_hooked"] = !0x0;
        } catch (_0x4e2329) {}
      }(), _0x3d953c(), _0x23b12d["_suppress"] && function () {
        if (_0x23b12d["_suppress"] && _0x4b590a()) {
          var _0x3644f0 = _0x649506("index-ui");
          if (_0x3644f0 && "function" == typeof _0x3644f0["GET_PROXY"]) try {
            var _0xd1f3a7 = _0x649506("ItemRewardsDialog"),
              _0x4456a0 = _0xd1f3a7 && _0xd1f3a7["ItemRewardsDialog"];
            if (_0x4456a0) {
              var _0x57a55b = _0x3644f0["GET_PROXY"](_0x4456a0);
              _0x57a55b && !0x1 !== _0x57a55b["isShow"] && !0x1 !== _0x57a55b["visible"] && "function" == typeof _0x57a55b["close"] && _0x57a55b["close"]();
            }
          } catch (_0x90fb63) {}
        }
      }();
    } catch (_0x1fb799) {}
  }, 0x7d0), _0x23b12d["_autoTimer2"] = window["__guaiyita_guardTimer"], console["log"](_0x3572c6, "v1.6.2 已就绪：客户端逐对合并(回包即续)+开箱+自动领奖；接管原生按钮(点击=开始/停止 自动抽合)；含奖励弹窗抑制与延迟注入守护。也可 _怪异塔.自动抽合(true)/领奖()。帮助 _怪异塔.帮助()");
}();
