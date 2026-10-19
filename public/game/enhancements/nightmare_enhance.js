// Adapted from the supplied 2.57.2 game enhancement asset.
// Static strings decoded; obfuscator guards removed; frame access stays local.
!function () {
  "use strict";
  if (window["__yunqiNightmareInstalled"] && window["__yunqiNightmareHookSuccess"]) return void console["log"]("[十殿增强] 已注入并 hook 成功，跳过重复初始化");
  window["__yunqiNightmareInstalled"] && !window["__yunqiNightmareHookSuccess"] && console["log"]("[十殿增强] 上次注入未完成 hook，本次重试"), window["__yunqiNightmareInstalled"] = !0x0;
  const _0xc54cf6 = window,
    _0x5baea0 = "[十殿增强]",
    _0x2bcb5b = "fqsd_nightmare_team_dismiss_broadcast",
    _0x40deb2 = "FQSD_NIGHTMARE_TEAM_DISMISSED",
    _0x3e9d29 = [{
      intervalMs: 0x32,
      endAttempt: 0x258
    }, {
      intervalMs: 0xc8,
      endAttempt: 0x2ee
    }, {
      intervalMs: 0x1f4,
      endAttempt: 0x366
    }],
    _0x31751d = {
      roleId: null,
      rewards: []
    },
    _0x1926ab = {
      isMonitoring: !0x1,
      currentBossCfgId: null,
      currentIsWin: !0x1,
      countdownTimer: null,
      fightListener: null,
      hasSetFighterCalled: !0x1,
      currentRoomId: null
    },
    _0x5d1dc5 = {
      0x3fc: "皮肤币",
      0x3fe: "\u767d\u7389",
      0x3ff: "\u5f69\u7389"
    };
  function _0x60d10(_0x3dcd52, ..._0x3d478e) {
    console["log"](_0x5baea0, _0x3dcd52, ..._0x3d478e);
  }
  function _0xe0aced(_0x5e38a3, ..._0x12322a) {
    console["warn"](_0x5baea0, _0x5e38a3, ..._0x12322a);
  }
  function _0x38ff6f(_0x3a9cb2, ..._0x23f309) {
    console["error"](_0x5baea0, _0x3a9cb2, ..._0x23f309);
  }
  function _0x41ae48(_0x54e574) {
    try {
      const _0x3ad15c = _0xc54cf6["__require"]("TipsManager");
      if (_0x3ad15c?.["SHOW_TIP"]) return void _0x3ad15c["SHOW_TIP"](_0x54e574);
    } catch (_0x2b77bc) {}
    _0x60d10(_0x54e574);
  }
  function _0x5806f8() {
    _0x1926ab["countdownTimer"] && (clearInterval(_0x1926ab["countdownTimer"]), _0x1926ab["countdownTimer"] = null);
  }
  function _0x7a5ad5(_0x1fadd9) {
    try {
      const _0x5a8259 = _0xc54cf6["__require"]("GlobalSignal")?.["GlobalSignal"];
      if (!_0x5a8259 || !_0x1fadd9) return void _0xe0aced("GlobalSignal / NightMareService 不可用，跳过倒计时监听设置");
      if (_0x1926ab["isMonitoring"]) return;
      _0x1926ab["fightListener"] = async function (_0x12cd0a) {
        try {
          if (!_0x1926ab["__loggedShape"]) {
            _0x1926ab["__loggedShape"] = !0x0;
            try {
              _0x60d10("fightData 结构示例 keys=" + Object["keys"](_0x12cd0a || {})["join"](",") + " battleData.keys=" + Object["keys"](_0x12cd0a && _0x12cd0a["battleData"] || {})["join"](","));
            } catch (_0x5c6094) {}
          }
          const _0x7beeb8 = _0x12cd0a?.["bossCfgId"],
            _0x280f7d = !0x0 === _0x12cd0a?.["battleData"]?.["result"]?.["isWin"] || !0x0 === _0x12cd0a?.["result"]?.["isWin"];
          _0x1926ab["currentBossCfgId"] = _0x7beeb8, _0x1926ab["currentIsWin"] = _0x280f7d, _0x31751d["roleId"] || (_0x31751d["roleId"] = _0x12cd0a?.["roleId"] || _0x12cd0a?.["battleData"]?.["leftTeam"]?.["roleId"] || null), _0x41ae48("当前关卡: " + _0x7beeb8 + ", 战斗结果: " + (_0x280f7d ? "\u80dc\u5229" : "\u5931\u8d25"));
          let _0x3b0ada = null;
          try {
            const _0xf4654d = _0xc54cf6["__require"]("data-index"),
              _0xad71c3 = _0xf4654d?.["ModuleType"],
              _0x949f8b = _0xf4654d?.["GET_MODULE"] || _0xc54cf6["GET_MODULE"];
            if (_0xad71c3 && _0x949f8b) {
              const _0x53519b = _0x949f8b(_0xad71c3["NIGHTMARE"]);
              _0x3b0ada = _0x53519b?.["roomData"]?.["roomId"] || null;
            }
          } catch (_0x2582cb) {}
          if (_0x3b0ada = _0x3b0ada || _0x1fadd9["currentRoomId"] || _0x1926ab["currentRoomId"], !_0x3b0ada) return void _0xe0aced("无 roomId，跳过 leaderComplete 调用");
          const _0x4e48a2 = await _0x1fadd9["leaderComplete"]({
            roomId: _0x3b0ada
          });
          if (0x0 !== _0x4e48a2?.["code"]) return void _0xe0aced("leaderComplete 返回非 0:", _0x4e48a2);
          _0x280f7d && _0x7beeb8 >= 0x8 ? (_0x41ae48("通关第 " + _0x7beeb8 + " 殿，自动结算中…"), await async function () {
            try {
              const _0x11797d = {
                type: _0x40deb2,
                parentRoleId: _0x31751d["roleId"],
                timestamp: Date["now"]()
              };
              try {
                localStorage["removeItem"](_0x2bcb5b), localStorage["setItem"](_0x2bcb5b, JSON["stringify"](_0x11797d));
              } catch (_0x43216b) {
                _0xe0aced("localStorage 广播失败", _0x43216b);
              }
              setTimeout(async () => {
                try {
                  const _0xa43425 = _0xc54cf6["__require"]("data-index"),
                    _0x2df237 = _0xa43425?.["NightMareService"];
                  if (!_0x2df237) return void _0xe0aced("NightMareService 未就绪，跳过自动领奖");
                  if (await _0x2df237["claimWeekReward"]({}), !_0x31751d["roleId"]) return void _0xe0aced("roleId 未知，无法查询 weekAward 信息");
                  const _0x11a5b8 = await _0x2df237["getRoleInfo"]({
                    roleId: _0x31751d["roleId"]
                  });
                  let _0x50519c = _0x11a5b8?.["_rawData"]?.["weekAward"]?.["turntableLeftCnt"] || 0x0;
                  const _0x43c0b4 = _0x11a5b8?.["_rawData"]?.["nightMare"],
                    _0x4f1f18 = await async function (_0x34e06b, _0x2c64bf) {
                      const _0x4b5b47 = _0x34e06b?.["NightMareService"];
                      if (!_0x4b5b47 || !_0x2c64bf) return null;
                      const _0x1f2904 = function () {
                        try {
                          const _0x54b285 = _0xc54cf6["__require"]("Configs"),
                            _0x12bad5 = _0x54b285?.["ConstantConf"]?.["config"]?.["NightmareEveryFiveGetOne"];
                          if ("number" == typeof _0x12bad5 && _0x12bad5 > 0x0) return _0x12bad5;
                        } catch (_0x4cfdd3) {}
                        return 0x5;
                      }();
                      let _0x4e3775 = _0x2c64bf,
                        _0x49c384 = null,
                        _0x3e0cca = 0x0;
                      for (let _0x189a03 = 0x0; _0x189a03 < 0xa; _0x189a03++) {
                        const _0x40827c = Number(_0x4e3775["bookScore"]) || 0x0,
                          _0x53dc74 = Number(_0x4e3775["turnRewardTime"]) || 0x0;
                        if (_0x40827c - _0x53dc74 < _0x1f2904) break;
                        try {
                          const _0x13c80c = await _0x4b5b47["claimTurnRewardTimes"]({});
                          if (_0x13c80c?.["code"]) {
                            _0xe0aced("claimTurnRewardTimes 返回非 0: " + _0x13c80c["code"]);
                            break;
                          }
                          _0x49c384 = _0x13c80c?.["_rawData"]?.["weekAward"] || _0x13c80c?.["rawData"]?.["weekAward"] || _0x49c384, _0x4e3775 = _0x13c80c?.["_rawData"]?.["nightMare"] || _0x13c80c?.["rawData"]?.["nightMare"] || _0x4e3775, _0x3e0cca++;
                          if ((Number(_0x4e3775["turnRewardTime"]) || 0x0) === _0x53dc74) {
                            _0xe0aced("claimTurnRewardTimes 返回 turnRewardTime 未变，跳出避免死循环");
                            break;
                          }
                        } catch (_0x2de4f6) {
                          _0x38ff6f("claimTurnRewardTimes 失败", _0x2de4f6);
                          break;
                        }
                      }
                      if (_0x3e0cca > 0x0) return _0x41ae48("领取额外抽奖机会 ×" + _0x3e0cca + "（阈值=" + _0x1f2904 + "）"), {
                        turntableLeftCnt: _0x49c384?.["turntableLeftCnt"] ?? null,
                        weekAward: _0x49c384,
                        nightMare: _0x4e3775
                      };
                      return null;
                    }(_0xa43425, _0x43c0b4);
                  _0x4f1f18 && "number" == typeof _0x4f1f18["turntableLeftCnt"] && (_0x50519c = _0x4f1f18["turntableLeftCnt"]), await async function (_0x4f732c) {
                    const _0x3dc92e = _0x4f732c?.["NightMareService"];
                    if (!_0x3dc92e) return 0x0;
                    const _0x1fa8fd = function () {
                      try {
                        const _0x1b9ead = _0xc54cf6["__require"]("data-index"),
                          _0x487a77 = _0x1b9ead?.["ModuleType"],
                          _0x2af8ad = _0x1b9ead?.["GET_MODULE"] || _0xc54cf6["GET_MODULE"];
                        if (_0x487a77 && _0x2af8ad) return _0x2af8ad(_0x487a77["NIGHTMARE"]);
                      } catch (_0x42bdbb) {}
                      return null;
                    }();
                    if (!_0x1fa8fd || "function" != typeof _0x1fa8fd["checkHasBookRed"]) return 0x0;
                    let _0x460239 = 0x0;
                    for (let _0x4eaf5a = 0x0; _0x4eaf5a < 0x8; _0x4eaf5a++) try {
                      if (!_0x1fa8fd["checkHasBookRed"]()) break;
                      const _0x125970 = await _0x3dc92e["claimBook"]({});
                      if (_0x125970?.["code"]) {
                        _0xe0aced("claimBook 返回非 0: " + _0x125970["code"]);
                        break;
                      }
                      _0x460239++;
                    } catch (_0x5b9121) {
                      _0x38ff6f("claimBook 失败", _0x5b9121);
                      break;
                    }
                    return _0x460239 > 0x0 && _0x41ae48("自动领取书籍奖励 ×" + _0x460239), _0x460239;
                  }(_0xa43425), _0x50519c > 0x0 && _0x53d8b4(_0xa43425, _0x50519c, 0x0);
                } catch (_0xbb496c) {
                  _0x38ff6f("自动抽奖失败", _0xbb496c);
                }
              }, 0x3e8);
            } catch (_0x2398d8) {
              _0x38ff6f("广播失败", _0x2398d8);
            }
          }(), function () {
            try {
              const _0x171da8 = _0xc54cf6["__require"]("GlobalSignal")?.["GlobalSignal"];
              _0x171da8 && _0x1926ab["fightListener"] && (_0x171da8["EventNightmareBattleStart"]["off"](_0x1926ab["fightListener"], _0x1926ab), _0x1926ab["fightListener"] = null), _0x5806f8(), _0x1926ab["isMonitoring"] = !0x1, _0x1926ab["currentBossCfgId"] = null, _0x1926ab["currentIsWin"] = !0x1, _0x1926ab["hasSetFighterCalled"] = !0x1, _0x1926ab["currentRoomId"] = null;
            } catch (_0x43c262) {
              _0x38ff6f("移除监听失败", _0x43c262);
            }
          }()) : function (_0x201809 = 0xf) {
            _0x5806f8();
            let _0x510f92 = _0x201809;
            _0x41ae48("阎罗正在擦拭武器 " + _0x510f92 + "s"), _0x1926ab["countdownTimer"] = setInterval(() => {
              _0x510f92--, _0x510f92 > 0x0 ? _0x41ae48("阎罗正在擦拭武器 " + _0x510f92 + "s") : (_0x5806f8(), _0x41ae48("可以开始下一关了！"));
            }, 0x3e8);
          }();
        } catch (_0x8fda59) {
          _0x38ff6f("战斗监听处理失败", _0x8fda59);
        }
      }, _0x5a8259["EventNightmareBattleStart"]["on"](_0x1926ab["fightListener"], _0x1926ab), _0x1926ab["isMonitoring"] = !0x0, _0x60d10("倒计时监听已设置");
    } catch (_0x3dfa3c) {
      _0x38ff6f("设置倒计时监听失败", _0x3dfa3c);
    }
  }
  function _0x53d8b4(_0x3a8300, _0x383d0a, _0x244303) {
    if (_0x244303 >= 0x1e) return void _0xe0aced("自动转盘达到最大次数 30，停止递归");
    const _0x11e194 = _0x3a8300?.["NightMareService"];
    _0x11e194 && _0x11e194["clickTurntable"]({})["then"](_0x52111d => {
      try {
        const _0x3671b5 = _0x52111d?.["_rawData"]?.["weekAward"];
        if (!_0x3671b5) return;
        const _0x2799f5 = _0x3671b5["turntableLeftCnt"];
        if (_0x3671b5["turntableReward"]) {
          const _0x23f147 = Object["keys"](_0x3671b5["turntableReward"]);
          if (_0x23f147["length"] > 0x0) {
            const _0x2799c3 = _0x3671b5["turntableReward"][_0x23f147[_0x23f147["length"] - 0x1]];
            if (_0x2799c3?.["length"] > 0x0) {
              const _0x55f47a = _0x2799c3[0x0];
              _0x31751d["rewards"]["push"]({
                itemId: String(_0x55f47a["itemId"]),
                value: _0x55f47a["value"]
              }), _0x41ae48("获得奖励: " + (_0x5d1dc5[_0x55f47a["itemId"]] || _0x55f47a["itemId"]) + "×" + _0x55f47a["value"]);
            }
          }
        }
        _0x2799f5 > 0x0 && setTimeout(() => _0x53d8b4(_0x3a8300, _0x2799f5, _0x244303 + 0x1), 0x1f4);
      } catch (_0x123026) {
        _0x38ff6f("解析转盘结果失败", _0x123026);
      }
    })["catch"](_0x23315f => {
      _0x38ff6f("自动转盘请求失败", _0x23315f);
    });
  }
  function _0x536a85() {
    try {
      const _0x29f8dd = _0xc54cf6["__require"]("data-index")?.["NightMareService"];
      if (_0x29f8dd && "function" == typeof _0x29f8dd["fight"] && "function" == typeof _0x29f8dd["setFighter"]) return _0x29f8dd;
    } catch (_0x478410) {}
    return null;
  }
  function _0x187f0a() {
    window["__yunqiNightmareWatchdog"] || (window["__yunqiNightmareWatchdog"] = setInterval(() => {
      try {
        const _0x52d079 = _0x536a85();
        if (!_0x52d079) return;
        const _0xa3ee61 = _0x52d079["fight"] && _0x52d079["fight"]["__yunqiPatched"],
          _0x42e721 = _0x52d079["setFighter"] && _0x52d079["setFighter"]["__yunqiPatched"];
        _0xa3ee61 && _0x42e721 || (_0xe0aced("watchdog 检测到 hook 失效（fight=" + !!_0xa3ee61 + " setFighter=" + !!_0x42e721 + "），重新挂钩"), _0x2e01d9(_0x52d079));
      } catch (_0x37fc46) {
        _0x38ff6f("watchdog 异常", _0x37fc46);
      }
    }, 0x2710));
  }
  function _0x2e01d9(_0x402791) {
    if (!_0x402791["fight"]["__yunqiPatched"]) {
      const _0x21874b = _0x402791["fight"];
      _0x402791["fight"] = async function () {
        const _0x4ce4c4 = arguments[0x0];
        _0x4ce4c4 && "object" == typeof _0x4ce4c4 && _0x4ce4c4["roleId"] && !_0x31751d["roleId"] && (_0x31751d["roleId"] = _0x4ce4c4["roleId"]);
        const _0x2de104 = await _0x21874b["apply"](this, arguments);
        try {
          _0x2de104?.["_rawData"]?.["roomId"] && (_0x1926ab["currentRoomId"] = _0x2de104["_rawData"]["roomId"]), _0x2de104?.["_rawData"]?.["roleId"] && !_0x31751d["roleId"] && (_0x31751d["roleId"] = _0x2de104["_rawData"]["roleId"]);
        } catch (_0x2cbd54) {}
        return _0x2de104;
      }, _0x402791["fight"]["__yunqiPatched"] = !0x0;
    }
    if (!_0x402791["setFighter"]["__yunqiPatched"]) {
      const _0xebb56b = _0x402791["setFighter"];
      _0x402791["setFighter"] = function () {
        const _0x1a4d5b = _0xebb56b["apply"](this, arguments);
        return _0x1926ab["hasSetFighterCalled"] || (_0x1926ab["hasSetFighterCalled"] = !0x0, _0x7a5ad5(_0x402791)), _0x1a4d5b;
      }, _0x402791["setFighter"]["__yunqiPatched"] = !0x0;
    }
    window["__yunqiNightmareHookSuccess"] = !0x0, _0x187f0a(), _0x60d10("hook NightMareService.fight / setFighter 完成（v3.1，watchdog 已启）");
  }
  setTimeout(function () {
    window["addEventListener"]("storage", _0x1987b9 => {
      if (_0x1987b9["key"] === _0x2bcb5b) try {
        const _0x418c48 = JSON["parse"](_0x1987b9["newValue"]);
        _0x418c48?.["type"] === _0x40deb2 && _0x41ae48("队伍已解散，等待自动抽奖");
      } catch (_0x1e42d0) {
        _0x38ff6f("解析广播消息失败", _0x1e42d0);
      }
    }), function (_0x375d96) {
      let _0x214713 = 0x0,
        _0x34e468 = 0x0,
        _0x5d5d58 = null;
      !function _0x301f82() {
        const _0x3a620f = _0x3e9d29[_0x34e468];
        _0x5d5d58 = setTimeout(function () {
          _0x214713++;
          const _0x2faee2 = _0x536a85();
          if (_0x2faee2) return _0x60d10("NightMareService 就绪（attempts=" + _0x214713 + "，约 " + Math["round"](_0x214713 * _0x3a620f["intervalMs"] / 0x3e8) + "s 内）"), void _0x375d96(_0x2faee2);
          _0x214713 >= _0x3a620f["endAttempt"] && _0x34e468 < _0x3e9d29["length"] - 0x1 && (_0x34e468++, _0x60d10("未就绪进入退避阶段 " + (_0x34e468 + 0x1) + "/" + _0x3e9d29["length"] + "，下一次间隔 " + _0x3e9d29[_0x34e468]["intervalMs"] + "ms")), _0x214713 >= 0x366 ? _0xe0aced("NightMareService 模块加载超时（120s），脚本未生效；watchdog 仍会持续重试") : _0x301f82();
        }, _0x3a620f["intervalMs"]);
      }();
    }(_0x752bab => {
      _0x2e01d9(_0x752bab);
    }), setTimeout(_0x187f0a, 0x3e8), _0x60d10("v3.1 已注入，等待游戏模块就绪…（120s 超时 + 10s watchdog 兜底）");
  }, 0x32);
}();
