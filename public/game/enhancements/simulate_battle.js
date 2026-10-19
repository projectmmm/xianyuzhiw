// Adapted from the supplied 2.57.2 game enhancement asset.
// Static strings decoded; obfuscator guards removed; frame access stays local.
!function () {
  "use strict";
  if (window["__NON_PVP_SIMULATOR__"]) return;
  const _0x2eadaf = "战斗模拟",
    _0x299c70 = "0.1.3",
    _0x9989df = "预模拟",
    _0x23b766 = "即时模拟",
    _0x33571f = "仅回放",
    _0x390640 = "不可用",
    _0x505384 = {
      tower: "咸将塔",
      genie: "\u706f\u795e",
      evoTower: "怪异塔",
      legionBoss: "俱乐部Boss",
      nightmare: "十殿试炼",
      nightmareStar: "星级挑战",
      capture: "最近战斗"
    },
    _0x4dc65a = "__non_pvp_sim_candidates__",
    _0x335c0c = "__non_pvp_sim_panel_state__",
    _0x1fda3b = "__non_pvp_sim_reusable_skeleton__",
    _0x5b877a = 0x3e8,
    _0x452ffd = 0xf,
    _0x3cb7ca = {
      collapsed: !0x0,
      debugExpanded: !0x1,
      panelX: null,
      panelY: null,
      modeChoice: "auto",
      targetValue: "",
      targetMajor: "",
      targetMinor: "",
      sampleCount: "1000"
    },
    _0x448ac1 = new Set(["pvp", "arena", "areaArena", "challengeMatch", "skyHorsePvp", "tournament", "crossArena", "leagueWar", "legionWar", "legionPayload", "quiz"]),
    _0x58a3e9 = {
      inited: !0x1,
      mainPanelHookInstalled: !0x1,
      runtimePatched: !0x1,
      latestCapture: null,
      stopRequested: !0x1,
      activeJob: null,
      lastReport: null,
      lastReports: [],
      lastSingleRun: null,
      lastDebugError: null,
      panel: null,
      manualTargetOptions: {},
      modeCaches: {
        tower: null,
        genie: null,
        evoTower: null,
        legionBoss: null,
        nightmare: null,
        nightmareStar: null
      },
      candidates: [],
      diagnosticSamples: [],
      dataSourceLines: [],
      panelPrefs: Object["assign"]({}, _0x3cb7ca),
      lastKnownSignature: "-",
      reusableSkeleton: null,
      reusableSkeletonMeta: null,
      runtimeReady: !0x1,
      runtimeActivating: !0x1,
      runtimeDelayedUntil: 0x0,
      startupCaptureTimer: null,
      playbackBattleVisibleDepth: 0x0,
      playbackRestoreTimer: null,
      playbackHiddenProxyStates: [],
      playbackHiddenLayerStates: [],
      playbackBackdropState: null,
      nightmareReplayScene: null,
      debugSeedCursorMap: Object["create"](null),
      languageTextCache: Object["create"](null),
      monsterConfigCache: Object["create"](null),
      monsterNameCache: Object["create"](null),
      panelDragState: null,
      suppressCollapseClick: !0x1,
      replayBusy: !0x1,
      playbackPanelSuppressed: !0x1,
      jobProgressView: null,
      jobProgressRaf: 0x0,
      gameButton: null,
      seedRecordView: {
        sourceId: "",
        page: 0x0,
        selectedIndex: 0x0
      },
      mainPush: {
        isRunning: !0x1,
        isResetting: !0x1,
        resetCount: 0x0,
        lastLevelId: null,
        lastBossName: "",
        lastRoundId: null,
        logLines: [],
        keepReport: !0x1,
        handler: null,
        signal: null,
        compLordProto: null,
        originalCanAutoAttack: null,
        resetTimer: null,
        lastStatusType: "info",
        lastStatusText: "未启动"
      }
    };
  window["__NON_PVP_SIMULATOR__"] = {
    state: _0x58a3e9,
    version: _0x299c70
  };
  let _0x2b08df = null;
  const _0x55f28d = {
      getGameWindow(_0x1504b3 = !0x1) {
        if (!_0x1504b3 && _0x2b08df && "function" == typeof _0x2b08df["__require"]) return _0x2b08df;
        if ("function" == typeof window["__require"]) return _0x2b08df = window, _0x2b08df;
        try {
          const _0x4ea174 = document["querySelectorAll"]("iframe");
          for (let _0x54fbd5 = 0x0; _0x54fbd5 < _0x4ea174["length"]; _0x54fbd5 += 0x1) {
            const _0x40c986 = _0x4ea174[_0x54fbd5]["contentWindow"];
            if (_0x40c986 && "function" == typeof _0x40c986["__require"]) return _0x2b08df = _0x40c986, _0x2b08df;
          }
        } catch (_0x1736fb) {}
        return _0x2b08df = null, null;
      },
      getGameWs() {
        const _0x427629 = this["getGameWindow"]();
        if (!_0x427629) return null;
        const _0x1f3ead = _0x427629["ws"] || _0x427629["h5websocket"] && _0x427629["h5websocket"]["ws"] || window["ws"] || null;
        return this["ensureWsSendAsync"](_0x1f3ead);
      },
      ensureWsSendAsync(_0x50a6a3) {
        if (_0x50a6a3 || (_0x50a6a3 = null), _0x50a6a3 && "function" == typeof _0x50a6a3["sendAsync"]) return _0x50a6a3;
        const _0x493cd0 = this["getGameWindow"](),
          _0x279d09 = [_0x50a6a3, _0x493cd0 && _0x493cd0["ws"], _0x493cd0 && _0x493cd0["h5websocket"] && _0x493cd0["h5websocket"]["ws"], _0x493cd0 && _0x493cd0["gameWS"], window["ws"], window["gameWS"]];
        for (let _0x1a3381 = 0x0; _0x1a3381 < _0x279d09["length"]; _0x1a3381 += 0x1) {
          const _0x36ff49 = _0x279d09[_0x1a3381];
          if (_0x36ff49 && "function" == typeof _0x36ff49["sendAsync"]) {
            if (_0x493cd0 && !_0x493cd0["ws"]) try {
              _0x493cd0["ws"] = _0x36ff49;
            } catch (_0xdcc040) {}
            if (!window["ws"]) try {
              window["ws"] = _0x36ff49;
            } catch (_0x1e8fd7) {}
            return _0x36ff49;
          }
        }
        try {
          const _0x2148cc = _0x493cd0 && _0x493cd0["__require"] || window["__require"];
          "function" == typeof _0x2148cc && ["H5WebSocket", "WebSocketManager", "NetworkManager"]["forEach"](_0x107a74 => {
            if (_0x50a6a3) return;
            const _0x82cda6 = _0x13e757["safeCall"](() => _0x2148cc(_0x107a74), null);
            if (!_0x82cda6) return;
            const _0x5ec25a = _0x82cda6["ws"] || _0x82cda6["instance"] || _0x82cda6["default"] || _0x82cda6;
            _0x5ec25a && "function" == typeof _0x5ec25a["sendAsync"] && (_0x50a6a3 = _0x5ec25a);
          });
        } catch (_0x5ba654) {}
        return _0x50a6a3 && "function" == typeof _0x50a6a3["sendAsync"] ? _0x50a6a3 : null;
      },
      readRoleIdFromGame() {
        try {
          const _0x29ed59 = this["getGameWindow"]();
          if (!_0x29ed59) return null;
          const _0x5c5cb1 = [];
          _0x29ed59["globalThis"] && _0x29ed59["globalThis"]["ROLE"] && _0x29ed59["globalThis"]["ROLE"]["roleId"] && _0x5c5cb1["push"](_0x29ed59["globalThis"]["ROLE"]["roleId"]), _0x29ed59["ROLE"] && _0x29ed59["ROLE"]["roleId"] && _0x5c5cb1["push"](_0x29ed59["ROLE"]["roleId"]), _0x29ed59["ROLE"] && _0x29ed59["ROLE"]["id"] && _0x5c5cb1["push"](_0x29ed59["ROLE"]["id"]);
          try {
            const _0x4ee200 = localStorage["getItem"]("roleId");
            _0x4ee200 && _0x5c5cb1["push"](_0x4ee200);
          } catch (_0x4ce175) {}
          try {
            window["__h5web_guestMeta"] && window["__h5web_guestMeta"]["roleId"] && _0x5c5cb1["push"](window["__h5web_guestMeta"]["roleId"]);
          } catch (_0x14c99f) {}
          try {
            const _0x1cef72 = _0x29ed59["__require"] && _0x29ed59["__require"]("data-index");
            _0x1cef72 && (_0x1cef72["ROLE"] && _0x1cef72["ROLE"]["roleId"] && _0x5c5cb1["push"](_0x1cef72["ROLE"]["roleId"]), _0x1cef72["ROLE"] && _0x1cef72["ROLE"]["id"] && _0x5c5cb1["push"](_0x1cef72["ROLE"]["id"]), _0x1cef72["role"] && _0x1cef72["role"]["roleId"] && _0x5c5cb1["push"](_0x1cef72["role"]["roleId"]), _0x1cef72["RoleService"] && _0x1cef72["RoleService"]["roleId"] && _0x5c5cb1["push"](_0x1cef72["RoleService"]["roleId"]));
          } catch (_0x516ed5) {}
          try {
            const _0x6abfb = _0x29ed59["__require"] && _0x29ed59["__require"]("ModuleManager"),
              _0x165e8e = _0x29ed59["__require"] && _0x29ed59["__require"]("Configs");
            if (_0x6abfb && _0x6abfb["GET_MODULE"] && _0x165e8e && _0x165e8e["ModuleType"]) {
              const _0x3ba129 = _0x6abfb["GET_MODULE"](_0x165e8e["ModuleType"]["ROLE"]) || _0x6abfb["GET_MODULE"](_0x165e8e["ModuleType"]["USER"]);
              _0x3ba129 && _0x3ba129["roleId"] && _0x5c5cb1["push"](_0x3ba129["roleId"]), _0x3ba129 && _0x3ba129["role"] && _0x3ba129["role"]["roleId"] && _0x5c5cb1["push"](_0x3ba129["role"]["roleId"]);
            }
          } catch (_0x20c4e0) {}
          for (let _0x8b7c67 = 0x0; _0x8b7c67 < _0x5c5cb1["length"]; _0x8b7c67 += 0x1) {
            const _0x1ad58e = +_0x5c5cb1[_0x8b7c67];
            if (_0x1ad58e > 0x0) return _0x1ad58e;
          }
        } catch (_0x3cd729) {}
        return null;
      },
      isGameSessionReady() {
        const _0x3efe27 = this["getGameWindow"]();
        if (!_0x3efe27 || "function" != typeof _0x3efe27["__require"]) return !0x1;
        if (!this["readRoleIdFromGame"]()) return !0x1;
        const _0x1e68c3 = this["getGameWs"]();
        return !(!_0x1e68c3 || "function" != typeof _0x1e68c3["sendAsync"]) && !!document["body"];
      },
      waitForGameReady(_0x52c7c7 = 0x927c0) {
        return new Promise(_0x5322e => {
          if (this["isGameSessionReady"]()) return void _0x5322e(!0x0);
          let _0x32d673 = 0x0;
          const _0x2d5089 = Date["now"](),
            _0x3f8b1a = () => {
              this["isGameSessionReady"]() ? _0x5322e(!0x0) : !this["getGameWindow"](!0x0) && Date["now"]() - _0x2d5089 > 0xea60 || Date["now"]() - _0x2d5089 > _0x52c7c7 ? _0x5322e(!0x1) : (_0x32d673 += 0x1, setTimeout(_0x3f8b1a, Math["min"](0x1388, 0x3e8 + 0x3e8 * Math["floor"](_0x32d673 / 0x5))));
            };
          _0x3f8b1a();
        });
      }
    },
    _0x13e757 = {
      log(..._0x20fee0) {
        console["log"]("[" + _0x2eadaf + "]", ..._0x20fee0);
      },
      warn(..._0x45bd49) {
        console["warn"]("[" + _0x2eadaf + "]", ..._0x45bd49);
      },
      error(..._0x35e32f) {
        console["error"]("[" + _0x2eadaf + "]", ..._0x35e32f);
      },
      sleep: _0x9d0441 => new Promise(_0x7a6c5d => setTimeout(_0x7a6c5d, _0x9d0441)),
      now: () => Date["now"](),
      formatPercent: (_0x51108e, _0x109729 = 0x2) => Number["isFinite"](_0x51108e) ? (0x64 * _0x51108e)["toFixed"](_0x109729) + "%" : "0.00%",
      formatNumber: (_0x261d4f, _0x567c4d = 0x2) => Number["isFinite"](_0x261d4f) ? _0x567c4d <= 0x0 ? "" + Math["round"](_0x261d4f) : _0x261d4f["toFixed"](_0x567c4d) : "0",
      formatTime(_0xf4769) {
        if (!_0xf4769) return "-";
        const _0x5dbfe4 = new Date(_0xf4769),
          _0x1fbf67 = _0x53a338 => ("" + _0x53a338)["padStart"](0x2, "0");
        return _0x1fbf67(_0x5dbfe4["getHours"]()) + ":" + _0x1fbf67(_0x5dbfe4["getMinutes"]()) + ":" + _0x1fbf67(_0x5dbfe4["getSeconds"]());
      },
      hashString(_0xec3992) {
        const _0xd085c4 = String(null == _0xec3992 ? "" : _0xec3992);
        let _0x562399 = 0x811c9dc5;
        for (let _0x3bf89e = 0x0; _0x3bf89e < _0xd085c4["length"]; _0x3bf89e += 0x1) _0x562399 ^= _0xd085c4["charCodeAt"](_0x3bf89e), _0x562399 += (_0x562399 << 0x1) + (_0x562399 << 0x4) + (_0x562399 << 0x7) + (_0x562399 << 0x8) + (_0x562399 << 0x18);
        return _0x562399 >>> 0x0;
      },
      pushDataSource(_0x54e1d0) {
        const _0x53003b = "[" + this["formatTime"](this["now"]()) + "]\x20" + _0x54e1d0;
        _0x58a3e9["dataSourceLines"]["unshift"](_0x53003b), _0x58a3e9["dataSourceLines"] = _0x58a3e9["dataSourceLines"]["slice"](0x0, 0x1e);
      },
      downloadTextFile(_0x5bb5f3, _0x4a290e) {
        const _0x5f1324 = new Blob([_0x4a290e], {
            type: "application/json;charset=utf-8"
          }),
          _0x277477 = URL["createObjectURL"](_0x5f1324),
          _0x12d0b8 = document["createElement"]("a");
        _0x12d0b8["href"] = _0x277477, _0x12d0b8["download"] = _0x5bb5f3, document["body"]["appendChild"](_0x12d0b8), _0x12d0b8["click"](), _0x12d0b8["remove"](), setTimeout(() => URL["revokeObjectURL"](_0x277477), 0x3e8);
      },
      toast(_0xf3b6e0, _0x2ab72d = "info") {
        if (this["log"](_0x2ab72d, _0xf3b6e0), !document["body"]) return;
        const _0x561077 = document["createElement"]("div");
        _0x561077["className"] = "non-pvp-sim-toast non-pvp-sim-toast-" + _0x2ab72d, _0x561077["textContent"] = _0xf3b6e0, document["body"]["appendChild"](_0x561077), requestAnimationFrame(() => _0x561077["classList"]["add"]("show")), setTimeout(() => {
          _0x561077["classList"]["remove"]("show"), setTimeout(() => _0x561077["remove"](), 0xf0);
        }, 0xa28);
      },
      safeCall(_0x33cf26, _0x5902c6 = null) {
        try {
          return _0x33cf26();
        } catch (_0xf48525) {
          return _0x5902c6;
        }
      },
      syncRoleInfo(_0x25d3b0 = "") {
        const _0x469a1f = Date["now"]();
        if (this["_lastRoleSyncPromise"] && _0x469a1f - (this["_lastRoleSyncAt"] || 0x0) < 0x5dc) return this["_lastRoleSyncPromise"];
        this["_lastRoleSyncAt"] = _0x469a1f;
        const _0x178b57 = (async () => {
          try {
            const _0x33ab09 = _0x55f28d["getGameWindow"]();
            if (!_0x33ab09) return this["warn"]("syncRoleInfo 跳过 (" + _0x25d3b0 + "): 游戏窗口未就绪"), !0x1;
            const _0x547293 = _0x13e757["safeCall"](() => _0x33ab09["__require"]("data-index"), null);
            if (_0x547293 && _0x547293["RoleService"] && "function" == typeof _0x547293["RoleService"]["getRoleInfo"]) {
              const _0x1bba14 = _0x13e757["safeCall"](() => _0x33ab09["__require"]("PlatformManager"), null),
                _0x125134 = _0x1bba14 && _0x1bba14["PlatformManager"] && _0x1bba14["PlatformManager"]["instance"],
                _0x17b9f4 = void 0x0 !== _0x33ab09["GAME_VERSION"] ? _0x33ab09["GAME_VERSION"] : "undefined" != typeof GAME_VERSION ? GAME_VERSION : "",
                _0x127b76 = await _0x547293["RoleService"]["getRoleInfo"]({
                  platform: _0x125134 ? _0x125134["platformType"] : "",
                  platformExt: _0x125134 ? _0x125134["platformExt"] : "",
                  inviteUid: 0x0,
                  clientVersion: _0x17b9f4,
                  scene: ""
                });
              return _0x127b76 && 0x0 === _0x127b76["code"] ? (_0x13e757["safeCall"](() => {
                const _0x2bb1e0 = _0x33ab09["__require"]("GlobalSignal");
                _0x2bb1e0 && _0x2bb1e0["GlobalSignal"] && _0x2bb1e0["GlobalSignal"]["EventRandomSeedUpdate"] && _0x2bb1e0["GlobalSignal"]["EventRandomSeedUpdate"]["dispatch"]();
              }, null), this["log"]("syncRoleInfo 已同步 (" + _0x25d3b0 + ") [RoleService]"), await _0x3eefb9(_0x25d3b0), !0x0) : (this["warn"]("syncRoleInfo RoleService 返回非 0 (" + _0x25d3b0 + "): code=" + (_0x127b76 && _0x127b76["code"])), !0x1);
            }
            const _0x479b7c = _0x55f28d["getGameWs"]();
            if (!_0x479b7c || "function" != typeof _0x479b7c["sendAsync"]) return this["warn"]("syncRoleInfo 跳过 (" + _0x25d3b0 + "): WebSocket sendAsync 不可用"), !0x1;
            const _0x306f3c = await _0x479b7c["sendAsync"]({
              ack: 0x0,
              cmd: "role_getroleinfo",
              params: {},
              seq: Date["now"](),
              time: Date["now"]()
            });
            return _0x306f3c && 0x0 === _0x306f3c["code"] ? (this["log"]("syncRoleInfo 已同步 (" + _0x25d3b0 + ") [ws]"), await _0x3eefb9(_0x25d3b0), !0x0) : (this["warn"]("syncRoleInfo 服务端返回非 0 (" + _0x25d3b0 + "): code=" + (_0x306f3c && _0x306f3c["code"])), !0x1);
          } catch (_0x15394a) {
            return this["warn"]("syncRoleInfo 失败 (" + _0x25d3b0 + "):", _0x15394a && _0x15394a["message"]), !0x1;
          }
        })();
        return this["_lastRoleSyncPromise"] = _0x178b57, _0x178b57;
      },
      deepClone(_0x4e1ffb, _0x497159 = new WeakMap()) {
        if (null === _0x4e1ffb || "object" != typeof _0x4e1ffb) return _0x4e1ffb;
        if (_0x497159["has"](_0x4e1ffb)) return _0x497159["get"](_0x4e1ffb);
        if (_0x4e1ffb instanceof Date) return new Date(_0x4e1ffb["getTime"]());
        if (_0x4e1ffb instanceof RegExp) return new RegExp(_0x4e1ffb["source"], _0x4e1ffb["flags"]);
        if (_0x4e1ffb instanceof Map) {
          const _0x231d17 = new Map();
          return _0x497159["set"](_0x4e1ffb, _0x231d17), _0x4e1ffb["forEach"]((_0x22f743, _0xa39ceb) => {
            _0x231d17["set"](this["deepClone"](_0xa39ceb, _0x497159), this["deepClone"](_0x22f743, _0x497159));
          }), _0x231d17;
        }
        if (_0x4e1ffb instanceof Set) {
          const _0x5d638e = new Set();
          return _0x497159["set"](_0x4e1ffb, _0x5d638e), _0x4e1ffb["forEach"](_0x2a8632 => {
            _0x5d638e["add"](this["deepClone"](_0x2a8632, _0x497159));
          }), _0x5d638e;
        }
        if (Array["isArray"](_0x4e1ffb)) {
          const _0x9da2e5 = new Array(_0x4e1ffb["length"]);
          _0x497159["set"](_0x4e1ffb, _0x9da2e5);
          for (let _0x15489b = 0x0; _0x15489b < _0x4e1ffb["length"]; _0x15489b += 0x1) _0x9da2e5[_0x15489b] = this["deepClone"](_0x4e1ffb[_0x15489b], _0x497159);
          return _0x9da2e5;
        }
        const _0x2fdb82 = Object["getPrototypeOf"](_0x4e1ffb),
          _0x1b1af4 = Object["create"](_0x2fdb82);
        return _0x497159["set"](_0x4e1ffb, _0x1b1af4), Reflect["ownKeys"](_0x4e1ffb)["forEach"](_0xbf6e1f => {
          const _0x265c93 = Object["getOwnPropertyDescriptor"](_0x4e1ffb, _0xbf6e1f);
          _0x265c93 && (Object["prototype"]["hasOwnProperty"]["call"](_0x265c93, "value") && (_0x265c93["value"] = this["deepClone"](_0x265c93["value"], _0x497159)), Object["defineProperty"](_0x1b1af4, _0xbf6e1f, _0x265c93));
        }), _0x1b1af4;
      },
      toSerializable(_0x1621eb, _0x16d06d = new WeakMap()) {
        if (null === _0x1621eb || "object" != typeof _0x1621eb) return _0x1621eb;
        if (_0x16d06d["has"](_0x1621eb)) return _0x16d06d["get"](_0x1621eb);
        if (_0x1621eb instanceof Date) return {
          __type: "Date",
          value: _0x1621eb["toISOString"]()
        };
        if (_0x1621eb instanceof Map) {
          const _0x479d51 = {
            __type: "Map",
            value: Array["from"](_0x1621eb["entries"]())["map"](([_0x50e8ab, _0x3b7e76]) => [this["toSerializable"](_0x50e8ab, _0x16d06d), this["toSerializable"](_0x3b7e76, _0x16d06d)])
          };
          return _0x16d06d["set"](_0x1621eb, _0x479d51), _0x479d51;
        }
        if (_0x1621eb instanceof Set) {
          const _0x5d1106 = {
            __type: "Set",
            value: Array["from"](_0x1621eb["values"]())["map"](_0x32f8c1 => this["toSerializable"](_0x32f8c1, _0x16d06d))
          };
          return _0x16d06d["set"](_0x1621eb, _0x5d1106), _0x5d1106;
        }
        if (Array["isArray"](_0x1621eb)) {
          const _0x285b73 = _0x1621eb["map"](_0x10f894 => this["toSerializable"](_0x10f894, _0x16d06d));
          return _0x16d06d["set"](_0x1621eb, _0x285b73), _0x285b73;
        }
        const _0x5801fb = {};
        return _0x16d06d["set"](_0x1621eb, _0x5801fb), Reflect["ownKeys"](_0x1621eb)["forEach"](_0x5d6ebd => {
          _0x5801fb[_0x5d6ebd] = this["toSerializable"](_0x1621eb[_0x5d6ebd], _0x16d06d);
        }), _0x5801fb;
      },
      fromSerializable(_0x18776f) {
        if (null === _0x18776f || "object" != typeof _0x18776f) return _0x18776f;
        if (Array["isArray"](_0x18776f)) return _0x18776f["map"](_0x12c900 => this["fromSerializable"](_0x12c900));
        if ("Date" === _0x18776f["__type"]) return new Date(_0x18776f["value"]);
        if ("Map" === _0x18776f["__type"]) return new Map((_0x18776f["value"] || [])["map"](([_0x7d184c, _0x1e3d95]) => [this["fromSerializable"](_0x7d184c), this["fromSerializable"](_0x1e3d95)]));
        if ("Set" === _0x18776f["__type"]) return new Set((_0x18776f["value"] || [])["map"](_0x325369 => this["fromSerializable"](_0x325369)));
        const _0x177103 = {};
        return Object["keys"](_0x18776f)["forEach"](_0x509819 => {
          _0x177103[_0x509819] = this["fromSerializable"](_0x18776f[_0x509819]);
        }), _0x177103;
      },
      stringifySeedScope(_0x408795) {
        try {
          return JSON["stringify"](_0x408795);
        } catch (_0x211781) {
          return String(_0x408795);
        }
      }
    };
  function _0x5d081c() {
    try {
      localStorage["setItem"](_0x335c0c, JSON["stringify"](_0x58a3e9["panelPrefs"]));
    } catch (_0x41232c) {
      _0x13e757["warn"]("保存面板状态失败", _0x41232c);
    }
  }
  function _0x882e98(_0x3cd378) {
    const _0x524d5b = String(null == _0x3cd378 ? "" : _0x3cd378)["trim"]();
    return _0x524d5b ? _0x524d5b["split"](/[^\d]+/)["filter"](Boolean)["map"](_0x2153fe => Number(_0x2153fe))["filter"](_0x439256 => Number["isFinite"](_0x439256)) : [];
  }
  function _0x208078(_0x3d012b) {
    return "tower" === _0x3d012b || "evoTower" === _0x3d012b;
  }
  function _0x568b0d(_0x5ca929) {
    const _0x45a63b = Number(_0x5ca929 || 0x0);
    if (!Number["isFinite"](_0x45a63b) || _0x45a63b <= 0x0) return "";
    return Math["floor"]((_0x45a63b - 0x1) / 0xa) + 0x1 + "-" + ((_0x45a63b - 0x1) % 0xa + 0x1);
  }
  function _0x24cb05(_0x23306a, _0x4d946b = "\u7b2c") {
    const _0x272384 = _0x568b0d(_0x23306a);
    return _0x272384 ? "" + _0x4d946b + _0x272384 + "层" : "";
  }
  function _0x6e5b7b(_0x417570) {
    const _0x53677f = _0x882e98(_0x417570);
    if (_0x53677f["length"] >= 0x2) {
      const _0x27ded7 = Number(_0x53677f[0x0] || 0x0),
        _0x53a340 = Number(_0x53677f[0x1] || 0x0);
      if (Number["isFinite"](_0x27ded7) && _0x27ded7 > 0x0 && Number["isFinite"](_0x53a340) && _0x53a340 > 0x0 && _0x53a340 <= 0xa) return 0xa * (_0x27ded7 - 0x1) + _0x53a340;
    }
    return 0x0;
  }
  function _0x19b328(_0x252d37, _0x48e5af) {
    if (!_0x208078(_0x252d37)) return {
      major: "",
      minor: ""
    };
    let _0x264f9a = _0x882e98(_0x521f1c(_0x252d37, _0x48e5af));
    return _0x264f9a["length"] < 0x2 && (_0x264f9a = _0x882e98(_0x568b0d(_0x48e5af))), {
      major: null != _0x264f9a[0x0] ? String(_0x264f9a[0x0]) : "",
      minor: null != _0x264f9a[0x1] ? String(_0x264f9a[0x1]) : ""
    };
  }
  function _0x2e0ca2(_0x322a97, _0x3ba1fa, _0x5be619) {
    if (!_0x208078(_0x322a97)) return "";
    const _0x1843a7 = String(null == _0x3ba1fa ? "" : _0x3ba1fa)["trim"](),
      _0x1beb3d = String(null == _0x5be619 ? "" : _0x5be619)["trim"]();
    if (!_0x1843a7 || !_0x1beb3d) return "";
    const _0x413c82 = _0x1843a7 + "-" + _0x1beb3d;
    return _0x6e5b7b(_0x413c82) > 0x0 ? _0x413c82 : "";
  }
  function _0x47e9d1() {
    return _0x58a3e9["panelPrefs"]["modeChoice"] || "auto";
  }
  function _0x390686(_0x1c08d7) {
    switch (_0x1c08d7) {
      case "tower":
        return "咸将塔直接输入游戏里显示的层数即可，例如 385-8；脚本会自动换算成内部关卡 id";
      case "evoTower":
        return "怪异塔直接输入游戏里显示的层数即可，例如 35-10；脚本会自动换算成真实 towerId";
      case "genie":
        return "可直接输入普通灯神层数；脚本会自动换算成对应的 genieLevelId，目标数量较少时也会给出下拉选择";
      case "genieShenhai":
        return "深海灯神可直接输入第 1-10 层，也可以直接下拉选择；脚本会自动补成真实 levelId";
      case "nightmare":
        return "可直接输入十殿试炼第几殿；脚本会自动换算成当前客户端里的真实 bossId，目标数量较少时也会给出下拉选择";
      case "nightmareStar":
        return "可直接输入星级挑战第几关；脚本会自动换算成真实 bossId，目标数量较少时也会给出下拉选择";
      case "capture":
        return "使用最近捕获战斗，不需要填写目标";
      default:
        return "自动识别模式时可留空；也可以先点“识别当前玩法”回填";
    }
  }
  function _0xe1c27(_0x29fcf2) {
    switch (_0x29fcf2) {
      case "tower":
        return "例如：385-8";
      case "evoTower":
        return "例如：35-10";
      case "genie":
        return "例如：12";
      case "genieShenhai":
        return "例如：7";
      case "nightmare":
        return "例如：9";
      case "nightmareStar":
        return "例如：3";
      default:
        return "目标层数 / 关卡序号";
    }
  }
  function _0x4bb397(_0x4a9ad8, _0x7b77d9, _0x39667f = null) {
    if (!_0x4a9ad8 || "object" != typeof _0x4a9ad8) return _0x39667f;
    for (let _0x4367e7 = 0x0; _0x4367e7 < _0x7b77d9["length"]; _0x4367e7 += 0x1) {
      const _0x12e80d = _0x7b77d9[_0x4367e7];
      if (null == _0x4a9ad8[_0x12e80d]) continue;
      const _0x3824a6 = Number(_0x4a9ad8[_0x12e80d]);
      if (Number["isFinite"](_0x3824a6)) return _0x3824a6;
    }
    return _0x39667f;
  }
  function _0x5d5d5f(_0x549b18, _0x4c7076, _0x42479d = "") {
    if (!_0x549b18 || "object" != typeof _0x549b18) return _0x42479d;
    for (let _0x5570fd = 0x0; _0x5570fd < _0x4c7076["length"]; _0x5570fd += 0x1) {
      const _0x5c01b2 = _0x549b18[_0x4c7076[_0x5570fd]];
      if (null != _0x5c01b2 && "" !== _0x5c01b2) return String(_0x5c01b2);
    }
    return _0x42479d;
  }
  function _0x5e2709(_0x304201, _0x4af737) {
    if (!_0x304201 || null == _0x4af737) return null;
    if ("function" == typeof _0x304201["getByKey"]) {
      const _0xf67ffe = _0x13e757["safeCall"](() => _0x304201["getByKey"](_0x4af737), null);
      if (null != _0xf67ffe) return _0xf67ffe;
    }
    if ("function" == typeof _0x304201["getById"]) {
      const _0x579748 = _0x13e757["safeCall"](() => _0x304201["getById"](_0x4af737), null);
      if (null != _0x579748) return _0x579748;
    }
    if (null != _0x304201[_0x4af737]) return _0x304201[_0x4af737];
    const _0x1f038f = String(_0x4af737);
    return null != _0x304201[_0x1f038f] ? _0x304201[_0x1f038f] : null;
  }
  function _0x463ddb(_0x46b0f5, _0x51931b) {
    if (!_0x46b0f5 || "function" != typeof _0x51931b) return null;
    if (Array["isArray"](_0x46b0f5)) {
      for (let _0x12f52e = 0x0; _0x12f52e < _0x46b0f5["length"]; _0x12f52e += 0x1) if (_0x51931b(_0x46b0f5[_0x12f52e])) return _0x46b0f5[_0x12f52e];
      return null;
    }
    if (Array["isArray"](_0x46b0f5["list"])) {
      for (let _0x18f2e7 = 0x0; _0x18f2e7 < _0x46b0f5["list"]["length"]; _0x18f2e7 += 0x1) if (_0x51931b(_0x46b0f5["list"][_0x18f2e7])) return _0x46b0f5["list"][_0x18f2e7];
    }
    if ("function" == typeof _0x46b0f5["forEach"]) {
      let _0x64d913 = null;
      if (_0x13e757["safeCall"](() => _0x46b0f5["forEach"](_0x582e26 => {
        !_0x64d913 && _0x51931b(_0x582e26) && (_0x64d913 = _0x582e26);
      }), null), _0x64d913) return _0x64d913;
    }
    return null;
  }
  function _0x44af4d(_0x5e97c1, _0x38763b, _0x56e714 = null) {
    const _0x352fb5 = _0x5e2709(_0x5e97c1, _0x38763b);
    if (null != _0x352fb5) return _0x352fb5;
    if (_0x56e714) {
      const _0x107ca5 = _0x463ddb(_0x5e97c1, _0x56e714);
      if (_0x107ca5) return _0x107ca5;
    }
    const _0x2c5ad3 = Object["keys"](_0x5e97c1 || {});
    for (let _0x2ead93 = 0x0; _0x2ead93 < _0x2c5ad3["length"]; _0x2ead93 += 0x1) {
      const _0x457220 = _0x5e97c1[_0x2c5ad3[_0x2ead93]];
      if (!_0x457220 || "object" != typeof _0x457220) continue;
      const _0x5e30d6 = _0x5e2709(_0x457220, _0x38763b);
      if (null != _0x5e30d6) return _0x5e30d6;
      if (_0x56e714) {
        const _0x56494a = _0x463ddb(_0x457220, _0x56e714);
        if (_0x56494a) return _0x56494a;
      }
    }
    return null;
  }
  function _0x4268f9(_0x1cff8c) {
    const _0x15d480 = String(null == _0x1cff8c ? "" : _0x1cff8c)["trim"]();
    if (!_0x15d480) return "";
    if (_0x58a3e9["languageTextCache"][_0x15d480]) return _0x58a3e9["languageTextCache"][_0x15d480];
    const _0xd5ae1d = function (_0x593205) {
        const _0x30819f = String(null == _0x593205 ? "" : _0x593205)["trim"]();
        if (!_0x30819f) return null;
        const _0xf70380 = _0x13e757["safeCall"](() => _0xf23a54["getConfigs"](), null),
          _0x33ca9e = _0xf70380 && _0xf70380["LanguageConf"] ? _0xf70380["LanguageConf"] : null;
        return _0x33ca9e ? _0x44af4d(_0x33ca9e, _0x30819f, _0x43cbbb => !(!_0x43cbbb || "object" != typeof _0x43cbbb) && _0x5d5d5f(_0x43cbbb, ["key", "id", "ID"], "") === _0x30819f) : null;
      }(_0x15d480),
      _0x558b1a = _0x3daf87("string" == typeof _0xd5ae1d ? _0xd5ae1d : _0x5d5d5f(_0xd5ae1d, ["chinese", "text", "title", "name", "value"], ""));
    return _0x558b1a ? (_0x58a3e9["languageTextCache"][_0x15d480] = _0x558b1a, _0x558b1a) : "";
  }
  function _0x20a697(_0x23d598, _0xd1fed2 = "") {
    const _0x46f7fb = String(null == _0x23d598 ? "" : _0x23d598)["trim"]();
    if (!_0x46f7fb) return _0xd1fed2;
    const _0x253782 = _0x4268f9(_0x46f7fb);
    return _0x253782 || _0xd1fed2 || _0x46f7fb;
  }
  function _0x3daf87(_0x290767) {
    const _0x2b56f0 = String(null == _0x290767 ? "" : _0x290767)["trim"]();
    return _0x2b56f0 ? _0x2b56f0["split"](/\r?\n/)["map"](_0x19dd1c => _0x19dd1c["trim"]())["find"](Boolean) || _0x2b56f0 : "";
  }
  function _0x474088(_0x4a254b) {
    const _0x2bea3f = Number(_0x4a254b || 0x0);
    if (!Number["isFinite"](_0x2bea3f) || _0x2bea3f <= 0x0) return "";
    const _0x3aa6a1 = _0x13e757["safeCall"](() => _0xf23a54["getConfigs"](), null),
      _0x1bfd07 = _0x3aa6a1 && _0x3aa6a1["Club"] ? _0x3aa6a1["Club"] : null,
      _0x483008 = [{
        keys: ["WEI", "Wei", "wei"],
        label: "\u9b4f"
      }, {
        keys: ["SHU", "Shu", "shu"],
        label: "\u8700"
      }, {
        keys: ["WU", "Wu", "wu"],
        label: "\u5434"
      }, {
        keys: ["QUN", "Qun", "qun"],
        label: "\u7fa4"
      }, {
        keys: ["SHENHAI", "ShenHai", "shenhai"],
        label: "\u6df1\u6d77"
      }];
    if (_0x1bfd07 && "object" == typeof _0x1bfd07) for (let _0x421638 = 0x0; _0x421638 < _0x483008["length"]; _0x421638 += 0x1) {
      const _0x2a1325 = _0x483008[_0x421638];
      for (let _0x5d4de0 = 0x0; _0x5d4de0 < _0x2a1325["keys"]["length"]; _0x5d4de0 += 0x1) if (Number(_0x1bfd07[_0x2a1325["keys"][_0x5d4de0]]) === _0x2bea3f) return _0x2a1325["label"];
    }
    return {
      0x1: "\u9b4f",
      0x2: "\u8700",
      0x3: "\u5434",
      0x4: "\u7fa4",
      0x5: "\u6df1\u6d77"
    }[_0x2bea3f] || "";
  }
  function _0x4c689a(_0x1bb2e0) {
    const _0x534bc3 = _0x474088(_0x1bb2e0);
    return _0x534bc3 ? "\u6df1\u6d77" === _0x534bc3 ? "深海灯神" : _0x534bc3 + "灯神" : "\u706f\u795e";
  }
  function _0x535f57(_0x26f015, _0x2ae00f, _0x51b5d0 = {}) {
    return null == _0x26f015 || null == _0x2ae00f || "" === _0x2ae00f ? null : Object["assign"]({
      value: String(_0x26f015),
      label: String(_0x2ae00f)
    }, _0x51b5d0 || {});
  }
  function _0x5ae5c8(_0x1089b8) {
    const _0x3c92f6 = new Map();
    return (_0x1089b8 || [])["forEach"](_0x4b1517 => {
      if (!_0x4b1517 || null == _0x4b1517["value"] || !_0x4b1517["label"]) return;
      const _0x32dd61 = String(_0x4b1517["value"]);
      _0x3c92f6["has"](_0x32dd61) || _0x3c92f6["set"](_0x32dd61, Object["assign"]({}, _0x4b1517, {
        value: _0x32dd61
      }));
    }), Array["from"](_0x3c92f6["values"]())["sort"]((_0x4c3968, _0x19e10a) => (Number["isFinite"](Number(_0x4c3968["sortValue"])) ? Number(_0x4c3968["sortValue"]) : Number["isFinite"](Number(_0x4c3968["displayNumber"])) ? Number(_0x4c3968["displayNumber"]) : Number(_0x4c3968["value"])) - (Number["isFinite"](Number(_0x19e10a["sortValue"])) ? Number(_0x19e10a["sortValue"]) : Number["isFinite"](Number(_0x19e10a["displayNumber"])) ? Number(_0x19e10a["displayNumber"]) : Number(_0x19e10a["value"])));
  }
  function _0x40f898(_0x4c393a) {
    if (!_0x4c393a || "auto" === _0x4c393a || "capture" === _0x4c393a) return [];
    const _0x44c90c = "legionBoss" === _0x4c393a,
      _0x29fe87 = _0x58a3e9["manualTargetOptions"][_0x4c393a];
    if (!_0x44c90c && _0x29fe87 && _0x29fe87["length"]) return _0x29fe87;
    let _0x3b19a4 = [];
    return "tower" === _0x4c393a ? _0x3b19a4 = function () {
      const _0x56842f = _0x458f53("TowerConf"),
        _0xcf1222 = _0xf23a54["getModuleByTypeKey"]("TOWER");
      return _0x487691(_0x56842f)["map"]((_0x234b73, _0x1aff1e) => {
        const _0x33cb53 = _0x4bb397(_0x234b73, ["id", "ID", "stageId"], null);
        if (null == _0x33cb53) return null;
        const _0x58d8c0 = _0x568b0d(_0x33cb53),
          _0x319d83 = _0x13e757["safeCall"](() => _0xcf1222 && _0xcf1222["constructor"] && "function" == typeof _0xcf1222["constructor"]["getTowerDetailName"] ? _0xcf1222["constructor"]["getTowerDetailName"](_0x33cb53) : "", "") || "咸将塔 " + _0x24cb05(_0x33cb53);
        return _0x535f57(_0x33cb53, _0x319d83, {
          rank: _0x1aff1e + 0x1,
          displayNumber: _0x1aff1e + 0x1,
          displayText: _0x58d8c0,
          sortValue: _0x33cb53
        });
      })["filter"](Boolean);
    }() : "evoTower" === _0x4c393a ? _0x3b19a4 = _0x487691(_0x458f53("EvoTowerConf", "CardTowerConf", "ActCardTowerConf"))["map"]((_0x3238b4, _0x29ef47) => {
      const _0x117f54 = _0x4bb397(_0x3238b4, ["id", "ID", "towerId"], null);
      if (null == _0x117f54) return null;
      const _0x363e4b = _0x568b0d(_0x117f54),
        _0x2b11bd = _0x5d5d5f(_0x3238b4, ["name", "title"], "");
      return _0x535f57(_0x117f54, _0x2b11bd ? "怪异咸将塔 " + _0x24cb05(_0x117f54) + " - " + _0x2b11bd : "怪异咸将塔 " + _0x24cb05(_0x117f54), {
        rank: _0x29ef47 + 0x1,
        displayNumber: _0x29ef47 + 0x1,
        displayText: _0x363e4b,
        sortValue: _0x117f54
      });
    })["filter"](Boolean) : "genie" === _0x4c393a ? _0x3b19a4 = _0x3ce3dd(!0x1) : "genieShenhai" === _0x4c393a ? _0x3b19a4 = _0x3ce3dd(!0x0) : "legionBoss" === _0x4c393a ? _0x3b19a4 = function () {
      const _0x554adc = _0x487691(_0x34d75a())["map"]((_0x1bdc1c, _0x2d7670) => {
        const _0x18a637 = _0x4bb397(_0x1bdc1c, ["legionBossId", "id", "ID"], null);
        if (null == _0x18a637) return null;
        const _0x1f52a0 = _0x4bb397(_0x1bdc1c, ["legionBossShow"], null),
          _0xc8de75 = _0x392ec4(_0x1f52a0, _0x4b53a3(_0x5d5d5f(_0x1bdc1c, ["name", "title", "bossName"], "")) || "Boss " + _0x18a637);
        return _0x535f57(_0x18a637, _0xc8de75 ? "俱乐部Boss 第 " + _0x18a637 + " 只 - " + _0xc8de75 : "俱乐部Boss 第 " + _0x18a637 + "\x20只", {
          rank: _0x2d7670 + 0x1,
          displayNumber: _0x18a637,
          sortValue: _0x18a637,
          legionBossShow: _0x1f52a0
        });
      })["filter"](Boolean);
      if (_0x554adc["length"]) return _0x554adc;
      return new Array(0x96)["fill"](0x0)["map"]((_0xb81b03, _0x493d24) => {
        const _0x4e094a = _0x493d24 + 0x1;
        return _0x535f57(_0x4e094a, "俱乐部Boss 第 " + _0x4e094a + "\x20只", {
          rank: _0x4e094a,
          displayNumber: _0x4e094a,
          sortValue: _0x4e094a
        });
      });
    }() : "nightmare" === _0x4c393a ? _0x3b19a4 = _0x5728c3() : "nightmareStar" === _0x4c393a && (_0x3b19a4 = _0x37005b()["map"]((_0x1fe3e6, _0x366462) => {
      const _0x2ff867 = Number(_0x1fe3e6["bossId"] || 0x0),
        _0x2ec875 = Number(_0x1fe3e6["stageNumber"] || _0x366462 + 0x1),
        _0x411965 = _0x1fe3e6["displayName"] || _0x1fe3e6["description"] || "";
      return _0x535f57(_0x2ff867, _0x411965 ? "星级挑战第 " + _0x2ec875 + " 关 - " + _0x411965 : "星级挑战第 " + (_0x366462 + 0x1) + "\x20关", {
        rank: _0x2ec875,
        displayNumber: _0x2ec875,
        sortValue: _0x2ec875
      });
    })["filter"](Boolean)), _0x3b19a4 = _0x5ae5c8(_0x3b19a4), _0x3b19a4["length"] && (_0x58a3e9["manualTargetOptions"][_0x4c393a] = _0x3b19a4), _0x3b19a4;
  }
  function _0x1b7069(_0x43cc8a, _0x187652) {
    const _0xe882a3 = _0x40f898(_0x43cc8a);
    if (!_0xe882a3["length"]) return null;
    const _0x4c463e = _0x1d9fc0(_0x43cc8a, _0x187652);
    return _0x4c463e && _0xe882a3["find"](_0x2fe108 => String(_0x2fe108["value"]) === String(_0x4c463e)) || null;
  }
  function _0x1d9fc0(_0x51b5b6, _0x36d408) {
    const _0x22eacf = _0x40f898(_0x51b5b6);
    if (!_0x22eacf["length"]) return "";
    const _0x2584b2 = String(null == _0x36d408 ? "" : _0x36d408)["trim"]();
    if (!_0x2584b2) return "";
    const _0x38aff5 = _0x22eacf["find"](_0x15788b => String(_0x15788b["value"]) === _0x2584b2);
    if (_0x38aff5) return String(_0x38aff5["value"]);
    const _0xcde08d = _0x882e98(_0x2584b2)["slice"](0x0, 0x2)["join"]("-"),
      _0x21c670 = _0x22eacf["find"](_0x4a8fa7 => String(_0x4a8fa7["displayText"] || "") === _0x2584b2 || _0xcde08d && String(_0x4a8fa7["displayText"] || "") === _0xcde08d);
    if (_0x21c670) return String(_0x21c670["value"]);
    if ("tower" === _0x51b5b6 || "evoTower" === _0x51b5b6) {
      const _0x1ba3b3 = _0x6e5b7b(_0x2584b2);
      if (_0x1ba3b3 > 0x0) {
        const _0x7f0ddd = _0x22eacf["find"](_0x25de13 => Number(_0x25de13["value"]) === _0x1ba3b3);
        if (_0x7f0ddd) return String(_0x7f0ddd["value"]);
      }
    }
    const _0x3fc7c6 = _0x882e98(_0x36d408);
    if (!_0x3fc7c6["length"]) return "";
    const _0x4f8ad3 = Number(_0x3fc7c6[0x0] || 0x0);
    if (!Number["isFinite"](_0x4f8ad3) || _0x4f8ad3 <= 0x0) return "";
    const _0x5e47ac = _0x22eacf["find"](_0x1d0947 => Number(_0x1d0947["value"]) === _0x4f8ad3);
    if (_0x5e47ac) return String(_0x5e47ac["value"]);
    const _0x41dbfe = _0x22eacf["find"](_0x4f73dc => Number(_0x4f73dc["displayNumber"]) === _0x4f8ad3);
    if (_0x41dbfe) return String(_0x41dbfe["value"]);
    const _0x2e7aa4 = _0x22eacf["find"](_0x508e36 => Number(_0x508e36["rank"]) === _0x4f8ad3);
    if (_0x2e7aa4) return String(_0x2e7aa4["value"]);
    if ("genieShenhai" === _0x51b5b6) {
      const _0x2d787a = _0x4f8ad3 >= 0x3e8 ? _0x4f8ad3 % 0x3e8 : _0x4f8ad3,
        _0x338c3c = _0x22eacf["find"](_0x4ae0f9 => Number(_0x4ae0f9["displayNumber"]) === _0x2d787a);
      if (_0x338c3c) return String(_0x338c3c["value"]);
    }
    return "";
  }
  function _0x521f1c(_0xcc4540, _0x198a01) {
    const _0xbffd2f = String(null == _0x198a01 ? "" : _0x198a01)["trim"](),
      _0x271b5c = _0x1b7069(_0xcc4540, _0x198a01);
    return _0x271b5c ? null != _0x271b5c["displayText"] && "" !== _0x271b5c["displayText"] ? String(_0x271b5c["displayText"]) : null != _0x271b5c["displayNumber"] && "" !== _0x271b5c["displayNumber"] ? String(_0x271b5c["displayNumber"]) : null != _0x271b5c["rank"] && "" !== _0x271b5c["rank"] ? String(_0x271b5c["rank"]) : String(_0x271b5c["value"]) : _0xbffd2f;
  }
  function _0x5be33a(_0x5f6410, _0x551293) {
    const _0x33655c = _0x47e9d1();
    if ("auto" === _0x33655c) return _0x551293;
    const _0x21e0ac = function (_0x53210d) {
        const _0x19b34b = _0x1d9fc0(_0x53210d, _0x58a3e9["panelPrefs"]["targetValue"]),
          _0x3291e9 = Number(_0x19b34b || 0x0);
        if (Number["isFinite"](_0x3291e9) && _0x3291e9 > 0x0) return _0x3291e9;
        const _0x2347b2 = _0x882e98(_0x58a3e9["panelPrefs"]["targetValue"]),
          _0x2b83c0 = Number(_0x2347b2[0x0] || 0x0);
        return Number["isFinite"](_0x2b83c0) && _0x2b83c0 > 0x0 ? _0x2b83c0 : 0x0;
      }(_0x33655c),
      _0x3239bc = _0x882e98(_0x58a3e9["panelPrefs"]["targetValue"]),
      _0x383b0e = Object["assign"]({}, _0x551293 || {});
    if ("tower" === _0x5f6410 && "tower" === _0x33655c && _0x21e0ac) _0x383b0e["stageId"] = _0x21e0ac, _0x383b0e["stageName"] = _0x24cb05(_0x21e0ac), _0x383b0e["manualTarget"] = !0x0;else {
      if ("evoTower" === _0x5f6410 && "evoTower" === _0x33655c && _0x21e0ac) _0x383b0e["towerId"] = _0x21e0ac, _0x383b0e["stageName"] = _0x24cb05(_0x21e0ac), _0x383b0e["manualTarget"] = !0x0;else {
        if ("nightmareStar" === _0x5f6410 && "nightmareStar" === _0x33655c && _0x21e0ac) {
          const _0x3caf9c = _0x4c527e(_0x21e0ac) || _0x3f2916(_0x21e0ac);
          _0x383b0e["bossId"] = _0x3caf9c ? _0x3caf9c["bossId"] : _0x21e0ac, _0x3caf9c && (_0x383b0e["stageNumber"] = _0x3caf9c["stageNumber"], _0x383b0e["bossName"] = _0x3caf9c["displayName"], _0x383b0e["monster"] = _0x3caf9c["monsters"]["map"](_0x54d373 => [_0x54d373["monsterId"], _0x54d373["index"], _0x54d373["level"]])), _0x383b0e["manualTarget"] = !0x0;
        } else {
          if ("nightmare" === _0x5f6410 && "nightmare" === _0x33655c && _0x21e0ac) {
            const _0x1585db = _0x41edc4(_0x21e0ac) || _0x28ae46(_0x21e0ac);
            _0x383b0e["bossId"] = _0x1585db ? _0x1585db["bossId"] : _0x21e0ac, _0x1585db && (_0x383b0e["hallNumber"] = _0x1585db["hallNumber"], _0x383b0e["bossName"] = _0x1585db["displayName"]), _0x383b0e["manualTarget"] = !0x0;
          } else {
            if ("legionBoss" === _0x5f6410 && "legionBoss" === _0x33655c && _0x21e0ac) {
              const _0x4cd34d = _0x22ca0c({
                legionBossId: _0x21e0ac
              });
              _0x383b0e["legionBossId"] = _0x21e0ac, _0x383b0e["legionBossShow"] = null != _0x4cd34d["legionBossShow"] ? _0x4cd34d["legionBossShow"] : _0x383b0e["legionBossShow"], _0x383b0e["bossName"] = _0x4cd34d["name"] || _0x383b0e["bossName"] || "", _0x383b0e["monster"] = _0x4cd34d["monsters"]["length"] ? _0x4cd34d["monsters"]["map"](_0x534ae7 => [_0x534ae7["monsterId"], _0x534ae7["index"], _0x534ae7["level"]]) : _0x383b0e["monster"], _0x383b0e["manualTarget"] = !0x0;
            } else {
              if ("genie" === _0x5f6410 && ("genie" === _0x33655c || "genieShenhai" === _0x33655c)) {
                const _0x5b9695 = _0x13e757["safeCall"](() => _0xf23a54["getConfigs"](), null),
                  _0x2f85c7 = _0x5b9695 && _0x5b9695["Club"] ? _0x5b9695["Club"]["SHENHAI"] : null;
                "genieShenhai" === _0x33655c && (_0x383b0e["title"] = "深海灯神", null != _0x2f85c7 && (_0x383b0e["clubId"] = _0x2f85c7));
                const _0x2c4f83 = _0x21e0ac || Number(_0x3239bc[0x0] || 0x0);
                if (_0x2c4f83 && (_0x2c4f83 >= 0x3e8 ? (_0x383b0e["genieLevelId"] = _0x2c4f83, _0x383b0e["genieId"] = _0x2c4f83) : _0x2c4f83 < 0x3e8 && null != _0x383b0e["clubId"] ? (_0x383b0e["genieId"] = 0x3e8 * _0x383b0e["clubId"] + _0x2c4f83, _0x383b0e["genieLevelId"] = _0x383b0e["genieId"]) : "genie" !== _0x33655c && (_0x383b0e["genieId"] = _0x2c4f83), null == _0x383b0e["genieId"] && null == _0x383b0e["genieLevelId"] || (_0x383b0e["manualTarget"] = !0x0)), null == _0x383b0e["clubId"]) {
                  const _0x5f097b = null != _0x383b0e["genieLevelId"] ? Math["floor"](Number(_0x383b0e["genieLevelId"]) / 0x3e8) : null != _0x383b0e["genieId"] ? Math["floor"](Number(_0x383b0e["genieId"]) / 0x3e8) : null;
                  Number["isFinite"](_0x5f097b) && _0x5f097b > 0x0 && (_0x383b0e["clubId"] = _0x5f097b);
                }
                _0x383b0e["title"] && "\u706f\u795e" !== _0x383b0e["title"] && "genieShenhai" !== _0x33655c || (_0x383b0e["title"] = _0x4c689a(_0x383b0e["clubId"]));
              }
            }
          }
        }
      }
    }
    return _0x383b0e;
  }
  function _0x5af598(_0x40c645) {
    return _0x40c645 ? _0x40c645["_rawData"] ? _0x40c645["_rawData"] : _0x40c645["rawData"] ? _0x40c645["rawData"] : "function" == typeof _0x40c645["getData"] ? _0x13e757["safeCall"](() => _0x40c645["getData"](), null) : _0x40c645 : null;
  }
  function _0x4be94f(_0x235fe7) {
    const _0x3ef52c = _0x5af598(_0x235fe7);
    return _0x3ef52c && _0x3ef52c["battleData"] ? _0x3ef52c["battleData"] : null;
  }
  function _0xb65e70(_0x14ab97) {
    if (!_0x14ab97) return "";
    const _0xc37bf0 = String(_0x14ab97);
    return "nMStarBoss" === _0xc37bf0 ? "nightmareStar" : "LegionBoss" === _0xc37bf0 ? "legionBoss" : _0xc37bf0;
  }
  const _0xf23a54 = {
    _requireCache: new Map(),
    _battleTypeInfo: null,
    require(_0x3fb270) {
      if (this["_requireCache"]["has"](_0x3fb270)) return this["_requireCache"]["get"](_0x3fb270);
      const _0x54f517 = _0x55f28d["getGameWindow"](),
        _0x490582 = _0x54f517 && _0x54f517["__require"] || window["__require"] || window["require"];
      if ("function" != typeof _0x490582) throw new Error("window.__require 尚未就绪");
      let _0x3494d2 = null;
      try {
        _0x3494d2 = _0x490582(_0x3fb270);
      } catch (_0xad0211) {
        _0x3494d2 = _0x490582(_0x3fb270["includes"]("/") ? _0x3fb270["split"]("/")["pop"]() : _0x3fb270);
      }
      return this["_requireCache"]["set"](_0x3fb270, _0x3494d2), _0x3494d2;
    },
    isReady: () => _0x55f28d["isGameSessionReady"](),
    getConfigs() {
      return this["require"]("Configs");
    },
    getDataIndex() {
      return this["require"]("data-index");
    },
    getServerData() {
      return this["require"]("ServerData");
    },
    getRole() {
      return this["getServerData"]()["ROLE"];
    },
    getGlobalSignal() {
      return this["require"]("GlobalSignal")["GlobalSignal"];
    },
    getModuleManager() {
      return this["require"]("ModuleManager");
    },
    getGET_MODULE() {
      return this["getModuleManager"]()["GET_MODULE"];
    },
    getBattleUIManager() {
      return this["require"]("BattleUIManager");
    },
    getIndexUI() {
      const _0x52f5d9 = this["require"]("index-ui");
      return _0x52f5d9 && _0x52f5d9["default"] && ("function" == typeof _0x52f5d9["default"]["GET_PROXY"] || "function" == typeof _0x52f5d9["default"]["SHOW_PROXY"] || "function" == typeof _0x52f5d9["default"]["SHOW_PROXY_OVER"] || _0x52f5d9["default"]["UIManager"]) ? _0x52f5d9["default"] : _0x52f5d9;
    },
    getManagerFactory() {
      return this["require"]("manager-factory");
    },
    getBattleDataOption() {
      return this["require"]("battle-data")["BattleDataOption"] || {};
    },
    getBattleTypeInfo() {
      if (this["_battleTypeInfo"]) return this["_battleTypeInfo"];
      const _0x4452ca = [];
      ["data-index", "battle-data", "types-orange", "consts"]["forEach"](_0x226fa6 => {
        const _0x5bf413 = _0x13e757["safeCall"](() => this["require"](_0x226fa6), null);
        _0x5bf413 && (_0x5bf413["BattleType"] && _0x4452ca["push"](_0x5bf413["BattleType"]), _0x5bf413["default"] && _0x5bf413["default"]["BattleType"] && _0x4452ca["push"](_0x5bf413["default"]["BattleType"]));
      });
      const _0x6848c5 = {},
        _0x210e7f = {};
      return _0x4452ca["forEach"](_0x51b36b => {
        Object["keys"](_0x51b36b || {})["forEach"](_0x38c015 => {
          const _0x66e03d = _0x51b36b[_0x38c015];
          "number" != typeof _0x66e03d && "string" != typeof _0x66e03d || (_0x6848c5[_0x38c015] = _0x66e03d, _0x210e7f[_0x66e03d] = _0x38c015);
        });
      }), this["_battleTypeInfo"] = {
        forward: _0x6848c5,
        reverse: _0x210e7f
      }, this["_battleTypeInfo"];
    },
    getBattleModeName(_0x46f72a) {
      const _0x40e8de = this["getBattleTypeInfo"]();
      if (_0x40e8de["reverse"][_0x46f72a]) return _0x40e8de["reverse"][_0x46f72a];
      return {
        0x2: "tower",
        0x9: "genie",
        0x23: "evoTower"
      }[_0x46f72a] || "";
    },
    getBattleModeValue(_0x2d407d) {
      const _0x15ce51 = this["getBattleTypeInfo"]();
      if (null != _0x15ce51["forward"][_0x2d407d]) return _0x15ce51["forward"][_0x2d407d];
      const _0x35a797 = String(null == _0x2d407d ? "" : _0x2d407d)["toLowerCase"]();
      if (_0x35a797) {
        const _0x2aa504 = Object["keys"](_0x15ce51["forward"])["find"](_0x1be6c6 => String(_0x1be6c6)["toLowerCase"]() === _0x35a797);
        if (_0x2aa504 && null != _0x15ce51["forward"][_0x2aa504]) return _0x15ce51["forward"][_0x2aa504];
      }
      return {
        tower: 0x2,
        genie: 0x9,
        evoTower: 0x23,
        nightmare: 0xd,
        nightmareStar: 0x25
      }[_0x2d407d];
    },
    getLevelBattle() {
      const _0x20eca2 = _0x13e757["safeCall"](() => this["getManagerFactory"](), null);
      return _0x20eca2 && "function" == typeof _0x20eca2["GET_LEVEL_BATTLE"] ? _0x13e757["safeCall"](() => _0x20eca2["GET_LEVEL_BATTLE"](), null) : null;
    },
    getModuleType(_0x12c91e) {
      const _0x43aaa3 = this["getConfigs"]();
      return _0x43aaa3["ModuleType"] ? _0x43aaa3["ModuleType"][_0x12c91e] : void 0x0;
    },
    getModuleByTypeKey(_0x17f3d5) {
      const _0x167369 = this["getModuleType"](_0x17f3d5);
      return null == _0x167369 ? null : _0x13e757["safeCall"](() => this["getGET_MODULE"]()(_0x167369), null);
    },
    async sendCommand(_0x48e6d3, _0x158fd1 = {}) {
      const _0x553b65 = _0x55f28d["getGameWs"]();
      if (!_0x553b65 || "function" != typeof _0x553b65["sendAsync"]) throw new Error("WebSocket sendAsync 不可用");
      return _0x553b65["sendAsync"]({
        ack: 0x0,
        cmd: _0x48e6d3,
        params: _0x158fd1,
        seq: Date["now"](),
        time: Date["now"]()
      });
    },
    getReusableBattleSkeleton(_0x41fb13 = !0x0) {
      let _0x2da9fd = _0x58a3e9["reusableSkeleton"];
      if (!_0x2da9fd && _0x58a3e9["latestCapture"] && _0x58a3e9["latestCapture"]["input"] && !_0x4f54ca(_0x58a3e9["latestCapture"]["input"]) && (_0x2da9fd = _0x58a3e9["latestCapture"]["input"]["battleData"]), !_0x2da9fd) {
        const _0x18c9a3 = ["tower", "genie", "evoTower", "legionBoss", "nightmareStar", "nightmare"];
        for (let _0x14e076 = 0x0; _0x14e076 < _0x18c9a3["length"]; _0x14e076 += 0x1) {
          const _0x4b81a2 = _0x58a3e9["modeCaches"][_0x18c9a3[_0x14e076]];
          if (_0x4b81a2 && _0x4b81a2["battleData"]) {
            _0x2da9fd = _0x4b81a2["battleData"];
            break;
          }
          if (_0x4b81a2 && _0x4b81a2["inputData"] && _0x4b81a2["inputData"]["battleData"]) {
            _0x2da9fd = _0x4b81a2["inputData"]["battleData"];
            break;
          }
        }
      }
      return _0x2da9fd && _0x3268ca(_0x2da9fd) ? (_0x58a3e9["reusableSkeleton"] || (_0x2ed9f7(_0x2da9fd, {
        source: "getReusableBattleSkeletonFallback",
        modeKey: _0xb65e70(this["getBattleModeName"](_0x2da9fd["mode"]))
      }), _0x2da9fd = _0x58a3e9["reusableSkeleton"] || _0x2da9fd), _0x41fb13 ? _0x13e757["deepClone"](_0x2da9fd) : _0x2da9fd) : null;
    },
    getDefaultSimConfig(_0x1fbc57) {
      const _0xf0b325 = this["getBattleDataOption"](),
        _0x5783a9 = (_0x13e757["safeCall"](() => this["require"]("decimal-number")["DecimalNumber"], null), this["getConfigs"]()),
        _0x95217b = this["getGET_MODULE"](),
        _0x54352f = this["getDataIndex"](),
        _0x5816b3 = _0x13e757["safeCall"](() => _0x95217b(_0x5783a9["ModuleType"]["LORD"]), null);
      let _0x52a97e = 0x64;
      try {
        _0x52a97e = _0x1fbc57 && _0x1fbc57["options"] && "function" == typeof _0x1fbc57["options"]["getExt"] ? _0x1fbc57["options"]["getExt"](_0xf0b325["AutoSpeed"], 0x64) : 0x64;
      } catch (_0x560576) {
        _0x52a97e = 0x64;
      }
      return {
        extend: Object["assign"]({
          noRender: !0x0
        }, _0x5816b3 ? {
          autoAttackInterval: _0x5816b3["autoAttackInterval"],
          autoAttack: _0x5816b3["autoAttack"]
        } : {}, _0x54352f && _0x54352f["GDRole"] ? {
          role: new _0x54352f["GDRole"]()
        } : {}),
        timeScale: 0x64
      };
    },
    _cachedBattleFactory: null,
    findBattleFactory() {
      if (this["_cachedBattleFactory"]) return this["_cachedBattleFactory"];
      try {
        var _0x3bbf86 = cc["director"]["getScene"](),
          _0x2f01f8 = null;
        function _0x4dea70(_0x2c683f) {
          for (var _0x147ada = _0x2c683f["_components"] || [], _0x4ef0c7 = 0x0; _0x4ef0c7 < _0x147ada["length"]; _0x4ef0c7++) if (_0x147ada[_0x4ef0c7] && _0x147ada[_0x4ef0c7]["_serverBattleFactory"]) return void (_0x2f01f8 = _0x147ada[_0x4ef0c7]["_serverBattleFactory"]);
          for (var _0x7211c0 = _0x2c683f["children"] || [], _0x241a0e = 0x0; _0x241a0e < _0x7211c0["length"]; _0x241a0e++) if (_0x4dea70(_0x7211c0[_0x241a0e]), _0x2f01f8) return;
        }
        return _0x4dea70(_0x3bbf86), _0x2f01f8 && (this["_cachedBattleFactory"] = _0x2f01f8), _0x2f01f8;
      } catch (_0x4768ff) {
        return null;
      }
    },
    simulateBattle(_0x11f2e9, _0x1eab88, _0x19a9d5) {
      var _0x553bf6,
        _0x1fc9c8 = this["findBattleFactory"](),
        _0x34a5bf = {
          battleData: _0x11f2e9,
          timeScale: _0x19a9d5 || 0x1,
          extend: Object["assign"]({
            noRender: !0x0
          }, _0x1eab88 || {})
        };
      if (_0x1fc9c8) _0x553bf6 = _0x1fc9c8["createBattleById"](_0x34a5bf);else {
        const _0x5a888e = new (0x0, this["require"]("launcher-server")["ServerBattleLauncher"])();
        _0x5a888e["initialize"](), _0x553bf6 = _0x5a888e["createBattleById"](_0x34a5bf);
      }
      if (!_0x553bf6) throw new Error("createBattleById returned null");
      var _0x1e116a = !0x1,
        _0x3fa129 = null,
        _0x41f967 = Date["now"](),
        _0x61ad11 = Date["now"]() + 0x9c40;
      return _0x553bf6["BattleResult"]["add"](function (_0x22a691) {
        if (!_0x1e116a) {
          _0x1e116a = !0x0, _0x3fa129 = _0x22a691;
          try {
            _0x553bf6["endBattle"]();
          } catch (_0x533f59) {}
        }
      }), _0x553bf6["startBattle"](), new Promise(function (_0x51915b, _0x41a29a) {
        !function _0x3576e5() {
          if (_0x1e116a) return _0x51915b(_0x3fa129);
          if (Date["now"]() > _0x61ad11) return _0x1e116a = !0x0, _0x41a29a(new Error("本地模拟超时"));
          try {
            _0x553bf6["isQuitted"] ? _0x1e116a || (_0x1e116a = !0x0, _0x51915b(_0x3fa129 || _0x553bf6["result"] || {
              isWin: !0x1
            })) : (_0x553bf6["update"](_0x41f967), _0x41f967 += 0x14, setTimeout(_0x3576e5, 0x0));
          } catch (_0xd13c21) {
            _0x1e116a = !0x0, _0x41a29a(_0xd13c21);
          }
        }();
      });
    },
    patchPromiseMethod(_0x30987e, _0x3722fb, _0x2a8190) {
      if (!_0x30987e || "function" != typeof _0x30987e[_0x3722fb]) return;
      const _0x3cf07c = _0x30987e[_0x3722fb];
      if (_0x3cf07c["__nonPvpSimPatched"]) return;
      const _0x1ed8ce = this,
        _0x495630 = function (..._0x427d27) {
          const _0x928163 = _0x3cf07c["apply"](this, _0x427d27);
          return _0x928163 && "function" == typeof _0x928163["then"] ? _0x928163["then"](_0x2c5746 => {
            try {
              _0x2a8190["call"](this, _0x2c5746, _0x427d27, _0x1ed8ce);
            } catch (_0x39e722) {
              _0x13e757["warn"]("patchPromiseMethod " + _0x3722fb + " 处理失败", _0x39e722);
            }
            return _0x2c5746;
          }) : _0x928163;
        };
      _0x495630["__nonPvpSimPatched"] = !0x0, _0x495630["__original"] = _0x3cf07c, _0x30987e[_0x3722fb] = _0x495630;
    },
    patchSignalDispatch(_0x47fd70, _0x485c9b) {
      if (!_0x47fd70 || "function" != typeof _0x47fd70["dispatch"] || _0x47fd70["dispatch"]["__nonPvpSimPatched"]) return;
      const _0x43577d = _0x47fd70["dispatch"];
      _0x47fd70["dispatch"] = function (..._0x4be03b) {
        try {
          _0x485c9b["apply"](this, _0x4be03b);
        } catch (_0x3993a1) {
          _0x13e757["warn"]("signal dispatch patch 处理失败", _0x3993a1);
        }
        return _0x43577d["apply"](this, _0x4be03b);
      }, _0x47fd70["dispatch"]["__nonPvpSimPatched"] = !0x0, _0x47fd70["dispatch"]["__original"] = _0x43577d;
    }
  };
  function _0x35f70e(_0x1b8bac, _0x4dd4fe, _0x1a6c3f = null) {
    if (!_0x1b8bac) return _0x1a6c3f;
    if ("function" == typeof _0x1b8bac["getExt"]) return _0x13e757["safeCall"](() => _0x1b8bac["getExt"](_0x4dd4fe, _0x1a6c3f), _0x1a6c3f);
    if ("function" == typeof _0x1b8bac["get"]) {
      const _0x360b78 = _0x13e757["safeCall"](() => _0x1b8bac["get"](_0x4dd4fe), void 0x0);
      return void 0x0 === _0x360b78 ? _0x1a6c3f : _0x360b78;
    }
    return Object["prototype"]["hasOwnProperty"]["call"](_0x1b8bac, _0x4dd4fe) ? _0x1b8bac[_0x4dd4fe] : _0x1a6c3f;
  }
  function _0x5b6389(_0x2c9300, _0x5e4100, _0x4ddac6) {
    _0x2c9300 && ("function" != typeof _0x2c9300["setExt"] ? "function" != typeof _0x2c9300["set"] ? _0x2c9300[_0x5e4100] = _0x4ddac6 : _0x13e757["safeCall"](() => _0x2c9300["set"](_0x5e4100, _0x4ddac6), null) : _0x13e757["safeCall"](() => _0x2c9300["setExt"](_0x5e4100, _0x4ddac6), null));
  }
  function _0x55d995(_0x440c03) {
    return _0x440c03["options"] || (_0x440c03["options"] = new Map()), _0x440c03["options"];
  }
  function _0x62fdff(_0x5df531, _0x42bb37) {
    const _0x30fd64 = _0xb65e70(_0xf23a54["getBattleModeName"](_0x5df531 && _0x5df531["mode"]));
    if (_0x505384[_0x30fd64]) return _0x30fd64;
    if ("nMStarBoss" === _0x30fd64) return "nightmareStar";
    const _0x3062af = _0xb65e70(_0x13e757["safeCall"](() => _0x42bb37["__nonPvpPlaybackMeta"]["modeKey"], "") || _0x13e757["safeCall"](() => _0x42bb37["modeKey"], ""));
    if (_0x505384[_0x3062af]) return _0x3062af;
    if ("pKRoom" === _0x30fd64 && _0xcf1cc4(_0x42bb37)) return "nightmare";
    const _0x3b88ca = _0x42bb37 && _0x42bb37["options"];
    if (_0x3b88ca && "function" == typeof _0x3b88ca["forEach"]) {
      let _0x7b6e03 = "";
      if (_0x3b88ca["forEach"](_0x3cea8b => {
        _0x3cea8b && "object" == typeof _0x3cea8b && _0x3cea8b["bossId"] && null != _0x3cea8b["remainStarFightCount"] && (_0x7b6e03 = "nightmareStar");
      }), _0x7b6e03) return _0x7b6e03;
    }
    return "capture";
  }
  function _0x4f54ca(_0x47290d) {
    const _0x302d8b = _0x47290d && _0x47290d["battleData"],
      _0x48c90f = _0xf23a54["getBattleModeName"](_0x302d8b && _0x302d8b["mode"]);
    if (_0x448ac1["has"](_0x48c90f)) return !0x0;
    const _0x149555 = _0x302d8b && _0x302d8b["rightTeam"] ? _0x302d8b["rightTeam"]["roleId"] : 0x0,
      _0x900eee = _0x302d8b && _0x302d8b["leftTeam"] ? _0x302d8b["leftTeam"]["roleId"] : 0x0;
    if (_0x149555 && _0x900eee && _0x149555 !== _0x900eee) {
      if (!new Set(["tower", "genie", "evoTower", "legionBoss", "nMStarBoss"])["has"](_0x48c90f)) return !0x0;
    }
    return !0x1;
  }
  function _0x3268ca(_0x2e7529) {
    return !!(_0x2e7529 && _0x2e7529["leftTeam"] && _0x2e7529["leftTeam"]["team"]);
  }
  async function _0x3eefb9(_0x67553f = "") {
    const _0x3b0450 = function () {
      const _0x13075c = _0x13e757["safeCall"](() => _0xf23a54["getLevelBattle"](), null),
        _0x405d58 = _0x13e757["safeCall"](() => _0x13075c && _0x13075c["options"] ? _0x13075c["options"]["battleData"] : null, null);
      return _0x405d58 ? _0x410638(_0x405d58) : "";
    }() || _0x410638(_0x58a3e9["reusableSkeleton"]);
    let _0x5bb398 = !0x1;
    const _0x1ddbea = _0x13e757["safeCall"](() => _0xf23a54["getModuleByTypeKey"]("LEVEL_BATTLE"), null);
    if (_0x1ddbea && "function" == typeof _0x1ddbea["resetLevelBattle"]) _0x13e757["safeCall"](() => _0x1ddbea["resetLevelBattle"](), null), _0x5bb398 = !0x0, _0x13e757["pushDataSource"]("换阵同步：LEVEL_BATTLE.resetLevelBattle (" + _0x67553f + ")");else {
      const _0x39c0a8 = _0x13e757["safeCall"](() => _0xf23a54["getGlobalSignal"](), null);
      _0x39c0a8 && _0x39c0a8["LevelBattleReset"] && "function" == typeof _0x39c0a8["LevelBattleReset"]["emit"] && (_0x13e757["safeCall"](() => _0x39c0a8["LevelBattleReset"]["emit"](), null), _0x5bb398 = !0x0, _0x13e757["pushDataSource"]("换阵同步：LevelBattleReset.emit (" + _0x67553f + ")"));
    }
    if (!_0x5bb398) {
      _0x13e757["warn"]("换阵同步：无法触发主线重置 (" + _0x67553f + ")，尝试直接捕获");
      const _0x42c47e = _0x4b632b("syncLineup.fallback." + _0x67553f);
      return _0x42c47e && (_0x58a3e9["activeSwitchedCandidate"] = null), _0x42c47e;
    }
    const _0x189c35 = _0x13e757["now"]() + 0xdac;
    for (; _0x13e757["now"]() < _0x189c35;) {
      if (await _0x13e757["sleep"](0xc8), !_0x4b632b("syncLineup." + _0x67553f)) continue;
      const _0x1d38a8 = _0x410638(_0x58a3e9["reusableSkeleton"]);
      if (_0x1d38a8 && _0x1d38a8 !== _0x3b0450) return _0x13e757["pushDataSource"]("换阵同步：主线骨架已更新 (" + _0x67553f + ")"), _0x58a3e9["activeSwitchedCandidate"] = null, !0x0;
      if (!_0x3b0450 && _0x1d38a8) return _0x58a3e9["activeSwitchedCandidate"] = null, !0x0;
    }
    const _0x182e4a = _0x4b632b("syncLineup.timeout." + _0x67553f);
    return _0x182e4a ? (_0x58a3e9["activeSwitchedCandidate"] = null, _0x13e757["pushDataSource"]("换阵同步：超时后仍捕获到主线骨架 (" + _0x67553f + ")")) : _0x13e757["warn"]("换阵同步：主线骨架刷新超时 (" + _0x67553f + ")"), _0x182e4a;
  }
  function _0x2ed9f7(_0x19bce2, _0x42b651 = {}) {
    if (!_0x3268ca(_0x19bce2)) return !0x1;
    _0x58a3e9["reusableSkeleton"] = _0x1acbd6(_0x13e757["deepClone"](_0x19bce2)), _0x58a3e9["reusableSkeletonMeta"] = Object["assign"]({
      source: "unknown",
      mode: _0x19bce2["mode"],
      modeKey: _0xb65e70(_0xf23a54["getBattleModeName"](_0x19bce2["mode"])),
      capturedAt: _0x13e757["now"]()
    }, _0x42b651, {
      mode: _0x19bce2["mode"],
      capturedAt: _0x13e757["now"]()
    });
    const _0x1db98a = _0x410638(_0x58a3e9["reusableSkeleton"]);
    return _0x1db98a && (_0x58a3e9["lastKnownSignature"] = _0x1db98a), _0x25601f(), !0x0;
  }
  function _0x4b632b(_0x162bc5 = "autoLevelBattle") {
    const _0xe98524 = _0x13e757["safeCall"](() => _0xf23a54["getLevelBattle"](), null),
      _0x3fac22 = _0x13e757["safeCall"](() => _0xe98524 && _0xe98524["options"] ? _0xe98524["options"]["battleData"] : null, null);
    return !!_0x3268ca(_0x3fac22) && (_0x2ed9f7(_0x3fac22, {
      source: _0x162bc5,
      modeKey: "level"
    }), _0x13e757["pushDataSource"]("捕获主线自动战斗骨架 " + _0x162bc5), !0x0);
  }
  function _0x2c5525(_0x338440, _0x13a590, _0x528ab1 = {}) {
    if (!_0x13a590) return;
    const _0x5d4ffd = Object["assign"]({}, _0x58a3e9["modeCaches"][_0x338440] || {}, _0x528ab1, {
      modeKey: _0x338440,
      battleData: _0x13e757["deepClone"](_0x13a590),
      capturedAt: _0x13e757["now"]()
    });
    _0x58a3e9["modeCaches"][_0x338440] = _0x5d4ffd, _0x2ed9f7(_0x13a590, {
      source: _0x528ab1["source"] || "captureAuthorityBattle",
      modeKey: _0x338440
    }), _0x13e757["pushDataSource"]("捕获 " + (_0x505384[_0x338440] || _0x338440) + " 权威 battleData"), _0x3159ac("authorityBattle", {
      modeKey: _0x338440,
      source: _0x528ab1["source"] || "captureAuthorityBattle",
      context: _0x528ab1["context"] || null,
      battleData: _0x13a590,
      extra: _0x528ab1
    });
  }
  function _0x4a0e85(_0xf52967, _0x1b58e0 = "replayLatest", _0x261339 = null) {
    if (!_0xf52967 || "object" != typeof _0xf52967) return _0xf52967;
    const _0x25d873 = Object["assign"]({}, _0xf52967["__nonPvpPlaybackMeta"] && "object" == typeof _0xf52967["__nonPvpPlaybackMeta"] ? _0xf52967["__nonPvpPlaybackMeta"] : {}, {
      skipCapture: !0x0,
      source: _0x1b58e0,
      markedAt: _0x13e757["now"]()
    }, _0x261339 && "object" == typeof _0x261339 ? _0x261339 : {});
    return Object["defineProperty"](_0xf52967, "__nonPvpPlaybackMeta", {
      value: _0x25d873,
      configurable: !0x0,
      enumerable: !0x1,
      writable: !0x0
    }), _0xf52967;
  }
  function _0x84824c() {
    _0x58a3e9["playbackRestoreTimer"] && (clearTimeout(_0x58a3e9["playbackRestoreTimer"]), _0x58a3e9["playbackRestoreTimer"] = null);
  }
  function _0x1fd65c(_0x2d066b) {
    const _0x1968fa = _0x13e757["safeCall"](() => _0xf23a54["getGlobalSignal"](), null),
      _0x4992c1 = _0x1968fa && _0x1968fa["EventBattleVisible"];
    return !!_0x4992c1 && ("function" == typeof _0x4992c1["emit"] ? (_0x4992c1["emit"](_0x2d066b), !0x0) : "function" == typeof _0x4992c1["dispatch"] && (_0x4992c1["dispatch"](_0x2d066b), !0x0));
  }
  function _0x128424(_0xa3c2b4 = "playback") {
    _0x58a3e9["playbackBattleVisibleDepth"] += 0x1, 0x1 === _0x58a3e9["playbackBattleVisibleDepth"] && (_0x84824c(), _0x1fd65c(!0x1) && _0x13e757["pushDataSource"]("hide main battle visuals (" + _0xa3c2b4 + ")"));
  }
  function _0x11ad81(_0x34fa85 = "playback") {
    _0x58a3e9["playbackBattleVisibleDepth"] > 0x0 && (_0x58a3e9["playbackBattleVisibleDepth"] -= 0x1), 0x0 === _0x58a3e9["playbackBattleVisibleDepth"] && (_0x84824c(), _0x1fd65c(!0x0) && _0x13e757["pushDataSource"]("restore main battle visuals (" + _0x34fa85 + ")"), _0x1bae77(_0x34fa85 + ":restore"), _0x1146a5(_0x34fa85 + ":restore"), _0x23c443(_0x34fa85 + ":restore"), async function (_0x4cbecc = "playback") {
      const _0x22dbc0 = _0x58a3e9["nightmareReplayScene"];
      if (!_0x22dbc0 || !_0x22dbc0["active"]) return !0x1;
      if (_0x58a3e9["nightmareReplayScene"] = null, !_0x22dbc0["openedByScript"]) return !0x1;
      const _0x15d33f = _0x13e757["safeCall"](() => _0xf23a54["getIndexUI"](), null),
        _0xedde92 = _0xc79fa9();
      if (!_0x15d33f || !_0xedde92) return !0x1;
      const _0x37efef = "function" == typeof _0x15d33f["GET_PROXY"] ? _0x13e757["safeCall"](() => _0x15d33f["GET_PROXY"](_0xedde92), null) : null;
      if (!_0x37efef || !_0x37efef["isShow"]) return !0x1;
      const _0x2aab4a = _0x13e757["safeCall"](() => _0x37efef["ui"], null);
      if (_0x2aab4a) try {
        _0x2aab4a["visible"] = !0x1, "boolean" == typeof _0x2aab4a["touchable"] && (_0x2aab4a["touchable"] = !0x1), _0x13e757["pushDataSource"]("预隐藏十殿背景 Scene UI (" + _0x4cbecc + ")");
      } catch (_0x4806e0) {
        _0x13e757["pushDataSource"]("预隐藏十殿背景 Scene UI 失败 (" + _0x4cbecc + "): " + _0x1c3d51(_0x4806e0));
      }
      if ("function" == typeof _0x15d33f["HIDE_PROXY"]) {
        let _0x1559b7 = !0x1;
        await Promise["race"]([Promise["resolve"](_0x15d33f["HIDE_PROXY"](_0xedde92)), new Promise(_0xe96447 => {
          setTimeout(() => {
            _0x1559b7 = !0x0, _0xe96447();
          }, 0x5dc);
        })]), _0x1559b7 && _0x13e757["pushDataSource"]("清理十殿背景 Scene 超时，已保底隐藏 UI (" + _0x4cbecc + ")");
      } else {
        if ("function" == typeof _0x15d33f["CLOSE_PROXY"]) {
          let _0x16ac26 = !0x1;
          await Promise["race"]([Promise["resolve"](_0x15d33f["CLOSE_PROXY"](_0xedde92)), new Promise(_0x4a943c => {
            setTimeout(() => {
              _0x16ac26 = !0x0, _0x4a943c();
            }, 0x5dc);
          })]), _0x16ac26 && _0x13e757["pushDataSource"]("关闭十殿背景 Scene 超时，已保底隐藏 UI (" + _0x4cbecc + ")");
        }
      }
      return _0x13e757["pushDataSource"]("清理十殿背景 Scene (" + _0x4cbecc + ")"), !0x0;
    }(_0x34fa85 + ":restore")["catch"](_0x529487 => {
      _0x13e757["pushDataSource"]("清理十殿背景 Scene 失败 (" + _0x34fa85 + "): " + _0x1c3d51(_0x529487)), _0x13e757["warn"]("cleanup nightmare replay scene failed", _0x529487);
    }), _0x481054(_0x34fa85));
  }
  function _0x481054(_0x3462cd = "playback") {
    _0x58a3e9["playbackPanelSuppressed"] && (_0x58a3e9["playbackPanelSuppressed"] = !0x1, _0x58a3e9["panelPrefs"]["collapsed"] = !0x1, _0x5d081c(), _0x1c2aee(), _0x13e757["pushDataSource"]("restore sim panel (" + _0x3462cd + ")"));
  }
  function _0x1582c6(_0x4d510f = "playback") {
    _0x84824c(), _0x58a3e9["playbackRestoreTimer"] = setTimeout(() => {
      _0x11ad81(_0x4d510f + ":timeout");
    }, 0xafc8);
  }
  function _0x279c6a(_0x880018, ..._0x1d03ca) {
    return !!_0x880018 && ("function" == typeof _0x880018["dispatch"] ? (_0x880018["dispatch"](..._0x1d03ca), !0x0) : "function" == typeof _0x880018["emit"] && (_0x880018["emit"](..._0x1d03ca), !0x0));
  }
  function _0xc79fa9() {
    const _0x5825ed = ["NightmareBattleScene", "../ui/nightmare/NightmareBattleScene", "ui/nightmare/NightmareBattleScene"];
    for (let _0x1cc011 = 0x0; _0x1cc011 < _0x5825ed["length"]; _0x1cc011 += 0x1) {
      const _0x1057d0 = _0x13e757["safeCall"](() => _0xf23a54["require"](_0x5825ed[_0x1cc011]), null);
      if (_0x1057d0) return _0x1057d0["NightmareBattleScene"] || _0x1057d0["default"] || _0x1057d0;
    }
    return null;
  }
  function _0x48cb44(_0x239e80 = null) {
    return _0x13e757["safeCall"](() => _0x239e80["__nonPvpPlaybackMeta"]["context"], null) || null;
  }
  function _0x50f79f(_0x5dc690 = []) {
    const _0x18b930 = {};
    let _0x27c8ee = !0x1;
    return _0x5dc690["forEach"](_0xad94ba => {
      _0xad94ba && "object" == typeof _0xad94ba && Object["keys"](_0xad94ba)["forEach"](_0x4dc83d => {
        const _0x13d454 = _0x18b930[_0x4dc83d],
          _0x2c4401 = _0xad94ba[_0x4dc83d],
          _0x4b517e = null == _0x13d454 || "" === _0x13d454 || Array["isArray"](_0x13d454) && !_0x13d454["length"],
          _0x4f06ab = null == _0x2c4401 || "" === _0x2c4401 || Array["isArray"](_0x2c4401) && !_0x2c4401["length"];
        _0x4b517e && !_0x4f06ab && (_0x18b930[_0x4dc83d] = _0x13e757["deepClone"](_0x2c4401), _0x27c8ee = !0x0);
      });
    }), _0x27c8ee ? _0x18b930 : null;
  }
  function _0x2da95b(_0x6da62b = "", _0x4d7f56 = null) {
    const _0x11817e = [_0x48cb44(_0x4d7f56), !_0x58a3e9["lastSingleRun"] || _0x58a3e9["lastSingleRun"]["replayInput"] !== _0x4d7f56 && _0x58a3e9["lastSingleRun"]["mode"] !== _0x6da62b && _0x58a3e9["lastSingleRun"]["adapterKey"] !== _0x6da62b ? null : _0x58a3e9["lastSingleRun"]["context"], !_0x58a3e9["lastReport"] || _0x58a3e9["lastReport"]["replayInput"] !== _0x4d7f56 && _0x58a3e9["lastReport"]["mode"] !== _0x6da62b && _0x58a3e9["lastReport"]["adapterKey"] !== _0x6da62b ? null : _0x58a3e9["lastReport"]["context"], _0x13e757["safeCall"](() => _0x58a3e9["modeCaches"][_0x6da62b]["context"], null)];
    return "nightmare" !== _0x6da62b && _0x11817e["push"](_0x13e757["safeCall"](() => _0x58a3e9["modeCaches"]["nightmare"] && _0x58a3e9["modeCaches"]["nightmare"]["context"], null)), _0x50f79f(_0x11817e) || {};
  }
  function _0x284e38(_0x5853a0 = null, _0x220ed7 = null) {
    const _0x5d17d6 = _0x50f79f([_0x220ed7, _0x48cb44(_0x5853a0)]) || {},
      _0x5d96ca = _0x4bb397(_0x5d17d6, ["bossId"], null),
      _0x557a43 = _0x13e757["safeCall"](() => _0x5853a0["fightNotify"], null) || {},
      _0x4eb524 = _0x13e757["safeCall"](() => _0x557a43["roomInfo"], null) || {},
      _0x3fb9fa = _0x4bb397(_0x5853a0 || {}, ["bossCfgId", "bossId"], null),
      _0x22fbc3 = _0x4bb397(_0x557a43 || {}, ["bossCfgId", "bossId"], null),
      _0x598075 = _0x4bb397(_0x4eb524, ["curMonsterCfgId", "lastMonsterCfgId", "lastMonsterId"], _0x4bb397(_0x5853a0 || {}, ["curMonsterCfgId", "lastMonsterCfgId", "lastMonsterId"], _0x4bb397(_0x5d17d6, ["monsterCfgId"], null))),
      _0x2d0ba4 = _0x28ae46(_0x5d96ca) || _0x28ae46(_0x3fb9fa) || _0x28ae46(_0x22fbc3) || _0x41edc4(_0x598075),
      _0x399dd2 = Number(_0x2d0ba4 ? _0x2d0ba4["bossId"] : _0x5d96ca || _0x3fb9fa || _0x22fbc3 || 0x0);
    return !Number["isFinite"](_0x399dd2) || _0x399dd2 <= 0x0 ? null : _0x399dd2;
  }
  function _0x1c3d51(_0x97f609) {
    return _0x97f609 ? "string" == typeof _0x97f609 ? _0x97f609 : "string" == typeof _0x97f609["message"] && _0x97f609["message"] ? _0x97f609["message"] : String(_0x97f609) : "unknown";
  }
  function _0x39b238() {
    const _0x229528 = _0x13e757["safeCall"](() => _0xf23a54["getIndexUI"](), null),
      _0x1ee71a = function () {
        const _0x38cdc3 = ["Layers", "../common/Layers", "common/Layers"];
        for (let _0xbafcdf = 0x0; _0xbafcdf < _0x38cdc3["length"]; _0xbafcdf += 0x1) {
          const _0x2d42be = _0x13e757["safeCall"](() => _0xf23a54["require"](_0x38cdc3[_0xbafcdf]), null);
          if (!_0x2d42be) continue;
          const _0x318b48 = _0x2d42be["Layers"] || _0x2d42be["default"] || _0x2d42be;
          if (_0x318b48) return _0x318b48;
        }
        return null;
      }();
    return _0x229528 && _0x1ee71a && "function" == typeof _0x229528["GET_PROXY"] ? _0x13e757["safeCall"](() => _0x229528["GET_PROXY"](_0x1ee71a), null) : null;
  }
  function _0x185e2e() {
    return new Set(["Mask", "Guide", "BottomTip", "Tip", "Console", "Loading"]);
  }
  function _0x509191() {
    const _0x21a74d = ["manager-asset", "../../battle/manager/manager-asset", "../battle/manager/manager-asset", "battle/manager/manager-asset"];
    for (let _0x363a5b = 0x0; _0x363a5b < _0x21a74d["length"]; _0x363a5b += 0x1) {
      const _0x36c53d = _0x13e757["safeCall"](() => _0xf23a54["require"](_0x21a74d[_0x363a5b]), null),
        _0x426d1d = _0x36c53d && _0x36c53d["BattleAssetManager"] ? _0x36c53d["BattleAssetManager"]["instance"] : null;
      if (_0x426d1d && "function" == typeof _0x426d1d["loadMap"]) return _0x426d1d;
    }
    return null;
  }
  function _0x2ddb05(_0x2acd2a) {
    const _0xef3f20 = Number(_0x2acd2a || 0x0);
    if (!Number["isFinite"](_0xef3f20) || _0xef3f20 <= 0x0) return 0x0;
    const _0x5dfe2d = _0x13e757["safeCall"](() => _0xf23a54["getConfigs"](), null),
      _0x1cbc8a = _0x5dfe2d && _0x5dfe2d["NightMareMonster"] && "function" == typeof _0x5dfe2d["NightMareMonster"]["getByBossId"] ? _0x13e757["safeCall"](() => _0x5dfe2d["NightMareMonster"]["getByBossId"](_0xef3f20), null) : null,
      _0x2d4b13 = Number(_0x4bb397(_0x1cbc8a, ["bossType", "type"], 0x0));
    return _0x2d4b13 > 0x0 ? 0x186a0 + _0x2d4b13 : 0x0;
  }
  function _0x23c443(_0x1521be = "playback") {
    const _0x2df508 = _0x58a3e9["playbackBackdropState"];
    if (!_0x2df508) return !0x1;
    _0x58a3e9["playbackBackdropState"] = null;
    const _0x48f499 = _0x2df508["display"];
    try {
      _0x48f499 && "function" == typeof _0x48f499["removeFromParent"] ? _0x48f499["removeFromParent"]() : _0x2df508["layerNode"] && "function" == typeof _0x2df508["layerNode"]["removeChild"] && _0x48f499 && _0x2df508["layerNode"]["removeChild"](_0x48f499);
    } catch (_0xcc1079) {
      _0x13e757["pushDataSource"]("移除回放背景失败 (" + _0x1521be + "): " + _0x1c3d51(_0xcc1079));
    }
    const _0x102288 = _0x509191();
    if (_0x102288 && "function" == typeof _0x102288["releaseMap"] && _0x2df508["mapUrl"]) try {
      _0x102288["releaseMap"](_0x2df508["mapUrl"]);
    } catch (_0x2239d8) {
      _0x13e757["pushDataSource"]("释放回放背景资源失败 " + _0x2df508["mapUrl"] + ":\x20" + _0x1c3d51(_0x2239d8));
    }
    return _0x13e757["pushDataSource"]("清理回放背景 " + (_0x2df508["mapUrl"] || "-") + "\x20(" + _0x1521be + ")"), !0x0;
  }
  async function _0x49071d(_0x31256c, _0x5543f5 = "", _0x7ac4ab = null, _0x1cce7c = "playback") {
    _0x23c443(_0x1cce7c + ":stale");
    const _0x54dba0 = function () {
      const _0x413602 = ["battle-const", "../../../extras/battle/basis/data/battle-const", "../../../../extras/battle/basis/data/battle-const", "extras/battle/basis/data/battle-const"];
      for (let _0x33f679 = 0x0; _0x33f679 < _0x413602["length"]; _0x33f679 += 0x1) {
        const _0x549084 = _0x13e757["safeCall"](() => _0xf23a54["require"](_0x413602[_0x33f679]), null);
        if (!_0x549084) continue;
        const _0x3688c9 = _0x549084["BattleConst"] || _0x549084["default"] || _0x549084;
        if (_0x3688c9 && "function" == typeof _0x3688c9["getMapUrl"]) return _0x3688c9;
      }
      return null;
    }();
    if (!_0x54dba0 || "function" != typeof _0x54dba0["getMapUrl"]) return _0x13e757["pushDataSource"]("回放背景跳过: BattleConst 不可用 (" + _0x1cce7c + ")"), !0x1;
    const _0x2cb384 = _0x509191();
    if (!_0x2cb384 || "function" != typeof _0x2cb384["loadMap"]) return _0x13e757["pushDataSource"]("回放背景跳过: BattleAssetManager 不可用 (" + _0x1cce7c + ")"), !0x1;
    const _0x401ef8 = function (_0x3b0f8a = "playback") {
      const _0x573d5f = _0x39b238(),
        _0x819475 = _0x13e757["safeCall"](() => _0x573d5f["ui"] && _0x573d5f["ui"]["_children"], null);
      if (!_0x573d5f || !Array["isArray"](_0x819475)) return _0x13e757["pushDataSource"]("回放背景层失败: Layers proxy 不可用 (" + _0x3b0f8a + ")"), null;
      const _0x466b47 = ["Normal", "Fixed"];
      for (let _0x1c41be = 0x0; _0x1c41be < _0x466b47["length"]; _0x1c41be += 0x1) {
        const _0x57a358 = _0x819475["find"](_0x5c5744 => _0x5c5744 && _0x5c5744["name"] === _0x466b47[_0x1c41be]);
        if (_0x57a358) return {
          layerName: _0x466b47[_0x1c41be],
          layerNode: _0x57a358
        };
      }
      const _0x402edf = _0x185e2e(),
        _0x5d7776 = _0x819475["find"](_0x5901a3 => _0x5901a3 && _0x5901a3["name"] && !_0x402edf["has"](_0x5901a3["name"]));
      return _0x5d7776 ? {
        layerName: _0x5d7776["name"] || "Unknown",
        layerNode: _0x5d7776
      } : null;
    }(_0x1cce7c);
    if (!_0x401ef8 || !_0x401ef8["layerNode"]) return _0x13e757["pushDataSource"]("回放背景跳过: 找不到背景层 (" + _0x1cce7c + ")"), !0x1;
    const _0x39d9f9 = function (_0x319dba, _0x49463b = "", _0xc5a4b5 = null) {
      const _0x2fc7b9 = [],
        _0xf6d9db = _0x3bc383 => {
          const _0x1021cb = Number(_0x3bc383 || 0x0);
          !Number["isFinite"](_0x1021cb) || _0x1021cb <= 0x0 || _0x2fc7b9["includes"](_0x1021cb) || _0x2fc7b9["push"](_0x1021cb);
        },
        _0xaeb72a = _0x319dba && _0x319dba["battleData"] ? _0x319dba["battleData"] : null;
      return _0xf6d9db(_0x319dba && _0x319dba["mapId"]), _0xf6d9db(_0x319dba && _0x319dba["mapID"]), _0xf6d9db(_0x35f70e(_0x319dba && _0x319dba["options"], "mapId", 0x0)), _0xf6d9db(_0x35f70e(_0x319dba && _0x319dba["options"], "mapID", 0x0)), _0xf6d9db(_0xaeb72a && _0xaeb72a["mapId"]), _0xf6d9db(_0xaeb72a && _0xaeb72a["mapID"]), "genie" === _0x49463b ? _0xf6d9db(_0x1df99b(_0xc5a4b5)) : "nightmare" === _0x49463b && (_0xf6d9db(_0x2ddb05(_0x4bb397(_0xc5a4b5 || {}, ["bossId", "lastMonsterId", "curMonsterCfgId"], 0x0))), _0xf6d9db(_0x2ddb05(_0x4bb397(_0x319dba || {}, ["bossId", "lastMonsterId", "curMonsterCfgId"], 0x0)))), _0xf6d9db(0x186a1), _0x2fc7b9;
    }(_0x31256c, _0x5543f5, _0x7ac4ab);
    for (let _0x1e89c9 = 0x0; _0x1e89c9 < _0x39d9f9["length"]; _0x1e89c9 += 0x1) {
      const _0xbb4a1d = _0x39d9f9[_0x1e89c9],
        _0x216a9b = _0x13e757["safeCall"](() => _0x54dba0["getMapUrl"](_0xbb4a1d), null);
      if (_0x216a9b) try {
        await Promise["race"]([Promise["resolve"](_0x2cb384["loadMap"](_0x216a9b)), new Promise((_0x1c574a, _0x4c5a7a) => setTimeout(() => _0x4c5a7a(new Error("地图加载超时")), 0xbb8))]);
        const _0x3e0b09 = _0x13e757["safeCall"](() => fgui["UIPackage"]["createObject"](_0x216a9b, "Map"), null);
        if (!_0x3e0b09) {
          _0x13e757["pushDataSource"]("回放背景创建失败 mapId=" + _0xbb4a1d + "\x20(" + _0x1cce7c + ")");
          continue;
        }
        try {
          _0x401ef8["layerNode"]["addChild"](_0x3e0b09);
        } catch (_0x5b48a5) {
          _0x13e757["pushDataSource"]("回放背景挂载失败 mapId=" + _0xbb4a1d + ":\x20" + _0x1c3d51(_0x5b48a5) + "\x20(" + _0x1cce7c + ")");
          continue;
        }
        return _0x58a3e9["playbackBackdropState"] = {
          mapId: _0xbb4a1d,
          mapUrl: _0x216a9b,
          layerName: _0x401ef8["layerName"],
          display: _0x3e0b09,
          layerNode: _0x401ef8["layerNode"]
        }, _0x13e757["pushDataSource"]("回放背景加载成功 mapId=" + _0xbb4a1d + "\x20(" + _0x1cce7c + ")"), !0x0;
      } catch (_0x85f5b4) {
        _0x13e757["pushDataSource"]("回放背景加载失败 mapId=" + _0xbb4a1d + ":\x20" + _0x1c3d51(_0x85f5b4) + "\x20(" + _0x1cce7c + ")");
      }
    }
    return _0x13e757["pushDataSource"]("回放背景全部失败，继续无背景播放 (" + _0x1cce7c + ")"), !0x1;
  }
  function _0x4d260c(_0x1db8b1, _0x55653f = 0x0) {
    return _0x1db8b1 && (_0x1db8b1["name"] || _0x13e757["safeCall"](() => _0x1db8b1["constructor"] && _0x1db8b1["constructor"]["name"], null)) || "anonymous-" + _0x55653f;
  }
  function _0x251af1(_0x2c78e1 = [], _0x4b033f = "playback") {
    Array["isArray"](_0x58a3e9["playbackHiddenProxyStates"]) && _0x58a3e9["playbackHiddenProxyStates"]["length"] && _0x1146a5(_0x4b033f + ":stale"), Array["isArray"](_0x58a3e9["playbackHiddenLayerStates"]) && _0x58a3e9["playbackHiddenLayerStates"]["length"] && _0x1bae77(_0x4b033f + ":stale");
    const _0x4fc432 = _0x13e757["safeCall"](() => _0xf23a54["getIndexUI"](), null),
      _0x17f440 = _0x13e757["safeCall"](() => _0x4fc432["UIManager"]["instance"], null),
      _0x2cda8e = _0x13e757["safeCall"](() => _0x4fc432["UILayer"], null);
    if (!_0x4fc432) return _0x13e757["pushDataSource"]("隐藏页面 proxy 失败: index-ui 不可用 (" + _0x4b033f + ")"), 0x0;
    if (!_0x17f440 || "function" != typeof _0x17f440["getProxyAt"]) return _0x13e757["pushDataSource"]("隐藏页面 proxy 失败: UIManager.instance.getProxyAt 不可用 (" + _0x4b033f + ")"), 0x0;
    if (!_0x2cda8e || "object" != typeof _0x2cda8e) return _0x13e757["pushDataSource"]("隐藏页面 proxy 失败: UILayer 不可用 (" + _0x4b033f + ")"), 0x0;
    const _0x2120c6 = [],
      _0x18a4cd = new Set();
    return Object["keys"](_0x2cda8e)["forEach"](_0x2a1728 => {
      const _0x24bc9c = _0x2cda8e[_0x2a1728];
      if ("number" != typeof _0x24bc9c && "string" != typeof _0x24bc9c) return;
      if (_0x18a4cd["has"](_0x24bc9c)) return;
      _0x18a4cd["add"](_0x24bc9c);
      const _0x597e55 = _0x13e757["safeCall"](() => _0x17f440["getProxyAt"](_0x24bc9c), null),
        _0x7f99de = _0x13e757["safeCall"](() => _0x597e55["ui"], null);
      if (!(_0x597e55 && _0x597e55["isShow"] && _0x7f99de && _0x7f99de["visible"])) return;
      if (function (_0x110ec4, _0x17ffb9 = []) {
        if (!_0x110ec4 || !_0x17ffb9 || !_0x17ffb9["length"]) return !0x1;
        for (let _0x45cb99 = 0x0; _0x45cb99 < _0x17ffb9["length"]; _0x45cb99 += 0x1) {
          const _0x2b66fe = _0x17ffb9[_0x45cb99];
          if ("function" == typeof _0x2b66fe) {
            if (_0x110ec4["constructor"] === _0x2b66fe) return !0x0;
            try {
              if (_0x110ec4 instanceof _0x2b66fe) return !0x0;
            } catch (_0xb5e5d1) {}
          }
        }
        return !0x1;
      }(_0x597e55, _0x2c78e1)) return;
      const _0x4fabc4 = function (_0x23dffa) {
          if (!_0x23dffa) return "UnknownProxy";
          const _0x175a45 = _0x13e757["safeCall"](() => _0x23dffa["constructor"] && _0x23dffa["constructor"]["name"], "");
          if (_0x175a45) return _0x175a45;
          const _0x431b54 = _0x13e757["safeCall"](() => _0x23dffa["ui"] && _0x23dffa["ui"]["name"], "");
          return _0x431b54 || "AnonymousProxy";
        }(_0x597e55),
        _0x364574 = {
          proxy: _0x597e55,
          layerValue: _0x24bc9c,
          layerName: _0x2a1728,
          proxyName: _0x4fabc4,
          visible: !!_0x7f99de["visible"],
          touchable: "boolean" == typeof _0x7f99de["touchable"] ? _0x7f99de["touchable"] : void 0x0
        };
      try {
        _0x7f99de["visible"] = !0x1, void 0x0 !== _0x364574["touchable"] && (_0x7f99de["touchable"] = !0x1), _0x2120c6["push"](_0x364574), _0x13e757["pushDataSource"]("隐藏页面 proxy " + _0x4fabc4 + "\x20@" + _0x2a1728);
      } catch (_0x38ce7b) {
        _0x13e757["pushDataSource"]("隐藏页面 proxy 失败 " + _0x4fabc4 + "\x20@" + _0x2a1728 + ":\x20" + _0x1c3d51(_0x38ce7b));
      }
    }), _0x58a3e9["playbackHiddenProxyStates"] = _0x2120c6, _0x2120c6["length"] || _0x13e757["pushDataSource"]("十殿回放未发现需隐藏的页面 proxy (" + _0x4b033f + ")"), _0x2120c6["length"];
  }
  function _0x2904c2(_0xa5d4b5 = [], _0x147fd2 = "playback") {
    const _0x1806cd = Array["from"](new Set((_0xa5d4b5 || [])["filter"](Boolean)));
    if (!_0x1806cd["length"]) return 0x0;
    const _0x59d6fa = _0x39b238(),
      _0x117f12 = _0x13e757["safeCall"](() => _0x59d6fa["ui"] && _0x59d6fa["ui"]["_children"], null);
    if (!_0x59d6fa || !Array["isArray"](_0x117f12)) return _0x13e757["pushDataSource"]("隐藏页面 layer 失败: Layers proxy 不可用 (" + _0x147fd2 + ")"), 0x0;
    const _0x372857 = [];
    return _0x1806cd["forEach"](_0x47cdb6 => {
      const _0x55671a = _0x117f12["find"](_0x291e02 => _0x291e02 && _0x291e02["name"] === _0x47cdb6);
      if (_0x55671a && _0x55671a["visible"]) try {
        const _0x17eb7b = function (_0x15e147) {
          if (!_0x15e147) return [];
          const _0x5815aa = _0x13e757["safeCall"](() => _0x15e147["_children"], null);
          if (Array["isArray"](_0x5815aa)) return _0x5815aa["filter"](Boolean);
          const _0x501799 = _0x13e757["safeCall"](() => _0x15e147["numChildren"], 0x0);
          if ("number" == typeof _0x501799 && _0x501799 > 0x0 && "function" == typeof _0x15e147["getChildAt"]) {
            const _0xfeadf7 = [];
            for (let _0x5573cd = 0x0; _0x5573cd < _0x501799; _0x5573cd += 0x1) {
              const _0x35b784 = _0x13e757["safeCall"](() => _0x15e147["getChildAt"](_0x5573cd), null);
              _0x35b784 && _0xfeadf7["push"](_0x35b784);
            }
            return _0xfeadf7;
          }
          return [];
        }(_0x55671a);
        let _0x4c45e2 = 0x0;
        _0x17eb7b["forEach"]((_0x4b2ed2, _0x257d90) => {
          _0x4b2ed2 && _0x4b2ed2["visible"] && (_0x372857["push"]({
            layerName: _0x47cdb6,
            layerNode: _0x55671a,
            child: _0x4b2ed2,
            childName: _0x4d260c(_0x4b2ed2, _0x257d90),
            visible: !!_0x4b2ed2["visible"],
            touchable: "boolean" == typeof _0x4b2ed2["touchable"] ? _0x4b2ed2["touchable"] : void 0x0
          }), _0x4b2ed2["visible"] = !0x1, "boolean" == typeof _0x4b2ed2["touchable"] && (_0x4b2ed2["touchable"] = !0x1), _0x4c45e2 += 0x1);
        }), _0x4c45e2 > 0x0 && _0x13e757["pushDataSource"]("hide playback layer " + _0x47cdb6 + " existing nodes=" + _0x4c45e2);
      } catch (_0x3a59d9) {
        _0x13e757["pushDataSource"]("hide playback layer failed " + _0x47cdb6 + ":\x20" + _0x1c3d51(_0x3a59d9));
      }
    }), _0x58a3e9["playbackHiddenLayerStates"] = _0x372857, _0x372857["length"];
  }
  function _0x1bae77(_0x261b31 = "playback") {
    const _0x1caa04 = Array["isArray"](_0x58a3e9["playbackHiddenLayerStates"]) ? _0x58a3e9["playbackHiddenLayerStates"] : [];
    return !!_0x1caa04["length"] && (_0x58a3e9["playbackHiddenLayerStates"] = [], _0x1caa04["forEach"](_0x1f385d => {
      if (_0x1f385d && _0x1f385d["child"]) try {
        _0x1f385d["child"]["visible"] = !0x1 !== _0x1f385d["visible"], void 0x0 !== _0x1f385d["touchable"] && (_0x1f385d["child"]["touchable"] = _0x1f385d["touchable"]), _0x13e757["pushDataSource"]("restore playback layer node " + _0x1f385d["layerName"] + "/" + (_0x1f385d["childName"] || "anonymous") + "\x20(" + _0x261b31 + ")");
      } catch (_0x32dc7b) {
        _0x13e757["pushDataSource"]("restore playback layer failed " + _0x1f385d["layerName"] + "/" + (_0x1f385d["childName"] || "anonymous") + ":\x20" + _0x1c3d51(_0x32dc7b));
      }
    }), !0x0);
  }
  function _0x1146a5(_0x3ed410 = "playback") {
    const _0xd00b75 = Array["isArray"](_0x58a3e9["playbackHiddenProxyStates"]) ? _0x58a3e9["playbackHiddenProxyStates"] : [];
    return !!_0xd00b75["length"] && (_0x58a3e9["playbackHiddenProxyStates"] = [], _0xd00b75["forEach"](_0x34223d => {
      const _0x1c3c29 = _0x13e757["safeCall"](() => _0x34223d["proxy"] && _0x34223d["proxy"]["ui"], null);
      if (_0x1c3c29) try {
        _0x1c3c29["visible"] = !0x1 !== _0x34223d["visible"], void 0x0 !== _0x34223d["touchable"] && (_0x1c3c29["touchable"] = _0x34223d["touchable"]), _0x13e757["pushDataSource"]("恢复页面 proxy " + (_0x34223d["proxyName"] || "UnknownProxy") + "\x20@" + (_0x34223d["layerName"] || _0x34223d["layerValue"]) + "\x20(" + _0x3ed410 + ")");
      } catch (_0x49a74e) {
        _0x13e757["pushDataSource"]("恢复页面 proxy 失败 " + (_0x34223d["proxyName"] || "UnknownProxy") + "\x20@" + (_0x34223d["layerName"] || _0x34223d["layerValue"]) + ":\x20" + _0x1c3d51(_0x49a74e));
      }
    }), !0x0);
  }
  async function _0x1bec52(_0x405c86 = null, _0x1c603b = null) {
    const _0x3f4c9a = _0x284e38(_0x1c603b, _0x405c86);
    if (!_0x3f4c9a) return _0x13e757["pushDataSource"]("十殿背景 Scene 失败: 未解析到 bossId"), !0x1;
    _0x13e757["pushDataSource"]("十殿背景 Scene 准备 boss=" + _0x3f4c9a);
    const _0x3f86bc = _0x13e757["safeCall"](() => _0xf23a54["getIndexUI"](), null),
      _0x403071 = _0xc79fa9();
    if (!_0x3f86bc) return _0x13e757["pushDataSource"]("十殿背景 Scene 失败: index-ui 不可用"), !0x1;
    if (!_0x403071) return _0x13e757["pushDataSource"]("十殿背景 Scene 失败: NightmareBattleScene 模块不可用"), !0x1;
    const _0x346919 = "function" == typeof _0x3f86bc["GET_PROXY"] ? _0x13e757["safeCall"](() => _0x3f86bc["GET_PROXY"](_0x403071), null) : null,
      _0x49798a = !(!_0x346919 || !_0x346919["isShow"]);
    _0x13e757["pushDataSource"]("十殿背景 Scene 状态 boss=" + _0x3f4c9a + " visible=" + (_0x49798a ? "1" : "0") + " class=" + (_0x403071["name"] || "NightmareBattleScene")), _0x58a3e9["nightmareReplayScene"] = {
      active: !0x0,
      bossId: _0x3f4c9a,
      openedByScript: !_0x49798a
    };
    try {
      if (_0x13e757["safeCall"](() => {
        _0x403071["bossId"] = _0x3f4c9a;
      }, null), _0x49798a) _0x13e757["pushDataSource"]("十殿背景 Scene 复用已有 proxy boss=" + _0x3f4c9a);else {
        if ("function" == typeof _0x3f86bc["SHOW_PROXY_OVER"]) try {
          await Promise["resolve"](_0x3f86bc["SHOW_PROXY_OVER"](_0x403071)), _0x13e757["pushDataSource"]("十殿背景 Scene SHOW_PROXY_OVER boss=" + _0x3f4c9a);
        } catch (_0x1109dc) {
          throw _0x13e757["pushDataSource"]("十殿背景 Scene SHOW_PROXY_OVER 失败: " + _0x1c3d51(_0x1109dc)), _0x1109dc;
        } else {
          if ("function" != typeof _0x3f86bc["SHOW_PROXY"]) return _0x13e757["pushDataSource"]("十殿背景 Scene 失败: index-ui 缺少 SHOW_PROXY_OVER/SHOW_PROXY"), _0x58a3e9["nightmareReplayScene"] = null, !0x1;
          try {
            await Promise["resolve"](_0x3f86bc["SHOW_PROXY"](_0x403071)), _0x13e757["pushDataSource"]("十殿背景 Scene SHOW_PROXY boss=" + _0x3f4c9a);
          } catch (_0x48e341) {
            throw _0x13e757["pushDataSource"]("十殿背景 Scene SHOW_PROXY 失败: " + _0x1c3d51(_0x48e341)), _0x48e341;
          }
        }
      }
      const _0x599a13 = "function" == typeof _0x3f86bc["GET_PROXY"] ? _0x13e757["safeCall"](() => _0x3f86bc["GET_PROXY"](_0x403071), null) : null;
      _0x599a13 && "function" == typeof _0x599a13["_onMapUpdate"] && (await Promise["resolve"](_0x599a13["_onMapUpdate"](_0x3f4c9a)), _0x13e757["pushDataSource"]("十殿背景 Scene 直连刷新 boss=" + _0x3f4c9a), _0x13e757["safeCall"](() => _0x599a13["ui"]["m_container"]["numChildren"], 0x0) || (await Promise["resolve"](_0x599a13["_onMapUpdate"](_0x3f4c9a)), _0x13e757["pushDataSource"]("十殿背景 Scene 二次刷新 boss=" + _0x3f4c9a)));
      const _0x2a2569 = _0x13e757["safeCall"](() => _0xf23a54["getGlobalSignal"](), null);
      return _0x279c6a(_0x2a2569 && _0x2a2569["EventNightmareMapUpdate"], _0x3f4c9a), _0x13e757["pushDataSource"]("挂载十殿背景 Scene boss=" + _0x3f4c9a), !0x0;
    } catch (_0x2352c3) {
      return _0x58a3e9["nightmareReplayScene"] = null, _0x13e757["warn"]("ensure nightmare replay scene failed", _0x2352c3), !0x1;
    }
  }
  function _0x3eeb55(_0x1f007d) {
    if (!_0x1f007d) return [];
    const _0x59b60f = [];
    return _0x1f007d instanceof Map ? _0x1f007d["forEach"]((_0x36eff3, _0x340484) => {
      _0x59b60f["push"]({
        pos: Number(_0x340484),
        entry: _0x36eff3
      });
    }) : Array["isArray"](_0x1f007d) ? _0x1f007d["forEach"]((_0x1c270c, _0x4bd447) => {
      const _0x407a5c = _0x1c270c && null != _0x1c270c["pos"] ? _0x1c270c["pos"] : _0x4bd447 + 0x1;
      _0x59b60f["push"]({
        pos: Number(_0x407a5c),
        entry: _0x1c270c
      });
    }) : "object" == typeof _0x1f007d && Object["keys"](_0x1f007d)["forEach"](_0x183069 => {
      _0x59b60f["push"]({
        pos: Number(_0x183069),
        entry: _0x1f007d[_0x183069]
      });
    }), _0x59b60f["sort"]((_0x1e95c7, _0x250f43) => _0x1e95c7["pos"] - _0x250f43["pos"]), _0x59b60f;
  }
  function _0x43484b(_0x16ef58, _0x38dcd3) {
    if (_0x16ef58 instanceof Map) {
      const _0x16b64a = new Map();
      return _0x38dcd3["forEach"](({
        pos: _0x1b4fcd,
        entry: _0x5d6136
      }) => _0x16b64a["set"](_0x1b4fcd, _0x5d6136)), _0x16b64a;
    }
    if (Array["isArray"](_0x16ef58)) return _0x38dcd3["map"](({
      entry: _0x165e13
    }) => _0x165e13);
    const _0x4fe745 = {};
    return _0x38dcd3["forEach"](({
      pos: _0xee6911,
      entry: _0x223cbf
    }) => {
      _0x4fe745[_0xee6911] = _0x223cbf;
    }), _0x4fe745;
  }
  function _0xc3ade5(_0x4a25da) {
    return _0x4a25da && "object" == typeof _0x4a25da ? Number(null != _0x4a25da["id"] ? _0x4a25da["id"] : null != _0x4a25da["heroId"] ? _0x4a25da["heroId"] : null != _0x4a25da["cfgId"] ? _0x4a25da["cfgId"] : null != _0x4a25da["monsterId"] ? _0x4a25da["monsterId"] : null != _0x4a25da["heroID"] ? _0x4a25da["heroID"] : 0x0) : 0x0;
  }
  function _0x410638(_0x506d97) {
    if (!_0x506d97 || !_0x506d97["leftTeam"] || !_0x506d97["leftTeam"]["team"]) return "";
    const _0x2d90c0 = _0x3eeb55(_0x506d97["leftTeam"]["team"])["map"](({
      pos: _0x5cb645,
      entry: _0xff5654
    }) => _0x5cb645 + ":" + _0xc3ade5(_0xff5654))["join"]("|") + "|weapon:" + (_0x506d97["leftTeam"]["weaponId"] || 0x0);
    return _0x13e757["hashString"](_0x2d90c0)["toString"](0x10) + ":" + _0x2d90c0;
  }
  function _0x342bd6(_0x29fc40) {
    const _0x2fcd4b = new Map();
    return (_0x29fc40 && _0x29fc40["battleTeam"] ? _0x29fc40["battleTeam"] : [])["forEach"](_0x2cdcca => {
      _0x2fcd4b["set"](Number(_0x2cdcca["pos"]), Number(_0x2cdcca["heroId"]));
    }), _0x2fcd4b;
  }
  function _0x30ad83() {
    const _0x314550 = _0x13e757["safeCall"](() => _0xf23a54["getRole"](), null);
    return _0x314550 ? {
      name: _0x314550["nickName"] || _0x314550["name"] || "",
      headImg: _0x314550["headImg"] || _0x314550["headPic"] || _0x314550["avatar"] || "",
      roleId: Number(_0x314550["roleId"] || _0x314550["id"] || 0x0)
    } : {
      name: "",
      headImg: "",
      roleId: 0x0
    };
  }
  function _0x1a9258(_0x3ed07e) {
    return _0x3ed07e && "object" == typeof _0x3ed07e ? Number(null != _0x3ed07e["heroId"] ? _0x3ed07e["heroId"] : null != _0x3ed07e["id"] ? _0x3ed07e["id"] : null != _0x3ed07e["heroID"] ? _0x3ed07e["heroID"] : 0x0) : 0x0;
  }
  function _0x741630(_0x1f36ba) {
    if (null == _0x1f36ba) return null;
    if ("boolean" == typeof _0x1f36ba) return _0x1f36ba;
    if ("number" == typeof _0x1f36ba) return Number["isFinite"](_0x1f36ba) ? !(_0x1f36ba <= 0x0) && (_0x1f36ba < 0x14 || null) : null;
    if ("string" == typeof _0x1f36ba) {
      const _0x760993 = _0x1f36ba["trim"]()["toLowerCase"]();
      if (!_0x760993) return null;
      if (["true", "yes", "y", "on", "battle", "inbattle", "in_team", "inteam"]["includes"](_0x760993)) return !0x0;
      if (["false", "no", "n", "off", "none", "out", "idle"]["includes"](_0x760993)) return !0x1;
      const _0x267d3c = Number(_0x760993);
      if (Number["isFinite"](_0x267d3c)) return _0x741630(_0x267d3c);
    }
    return null;
  }
  function _0x33ba10(_0x166e08, _0x2d9361) {
    const _0x2cad6d = Number(_0x166e08);
    return !Number["isFinite"](_0x2cad6d) || _0x2cad6d < 0x0 || _0x2cad6d >= 0x14 ? null : _0x2d9361 && _0x2cad6d >= 0x1 && _0x2cad6d <= 0x5 ? _0x2cad6d - 0x1 : _0x2cad6d;
  }
  function _0x4690fb(_0x1108d4, _0x2fe593, _0x5023a9 = null) {
    const _0x5c6e3c = [_0x13e757["safeCall"](() => "function" == typeof _0x1108d4["getBattlePos"] ? _0x1108d4["getBattlePos"]() : null, null), _0x13e757["safeCall"](() => "function" == typeof _0x1108d4["getTeamPos"] ? _0x1108d4["getTeamPos"]() : null, null), _0x13e757["safeCall"](() => "function" == typeof _0x1108d4["getPos"] ? _0x1108d4["getPos"]() : null, null), _0x13e757["safeCall"](() => "function" == typeof _0x1108d4["getSlot"] ? _0x1108d4["getSlot"]() : null, null), _0x1108d4["slot"], _0x1108d4["pos"], _0x1108d4["battlePos"], _0x1108d4["teamPos"], _0x1108d4["position"], _0x1108d4["lineupPos"], _0x1108d4["teamIndex"], _0x1108d4["teamSlot"], _0x1108d4["index"]];
    for (let _0x26150c = 0x0; _0x26150c < _0x5c6e3c["length"]; _0x26150c += 0x1) {
      const _0x4235ce = _0x33ba10(_0x5c6e3c[_0x26150c], _0x2fe593);
      if (null != _0x4235ce) return _0x4235ce;
    }
    return _0x5023a9;
  }
  function _0x1f61cd(_0x25527f) {
    const _0x4f23bc = _0x13e757["safeCall"](() => _0xf23a54["getRole"](), null),
      _0x3f0d5e = function (_0x3bb61c) {
        if (!_0x3bb61c) return [];
        if (_0x3bb61c instanceof Map) return Array["from"](_0x3bb61c["values"]());
        if (Array["isArray"](_0x3bb61c)) return _0x3bb61c["slice"]();
        if ("function" == typeof _0x3bb61c["forEach"]) {
          const _0x506f17 = [];
          if (_0x13e757["safeCall"](() => _0x3bb61c["forEach"](_0xf3c653 => {
            _0x506f17["push"](_0xf3c653);
          }), null), _0x506f17["length"]) return _0x506f17;
        }
        return "object" == typeof _0x3bb61c ? Object["keys"](_0x3bb61c)["map"](_0x3ccd51 => _0x3bb61c[_0x3ccd51]) : [];
      }(_0x4f23bc && _0x4f23bc["heroes"]);
    if (!_0x3f0d5e["length"]) return null;
    const _0x23f6ae = _0x3eeb55(_0x13e757["safeCall"](() => _0x25527f["leftTeam"]["team"], null)),
      _0x5a4e6b = _0x23f6ae["some"](_0x2de871 => 0x0 === Number(_0x2de871["pos"])),
      _0x2e4c04 = new Map();
    _0x23f6ae["forEach"](({
      pos: _0x4a6f67,
      entry: _0x3d04b3
    }) => {
      const _0x44fd1c = _0xc3ade5(_0x3d04b3);
      _0x44fd1c > 0x0 && !_0x2e4c04["has"](_0x44fd1c) && _0x2e4c04["set"](_0x44fd1c, Number(_0x4a6f67));
    });
    const _0x42129a = _0x13e757["safeCall"](() => function (_0x520958) {
      var _0x5a29d3 = _0x520958 && _0x520958["battleTeam"];
      if (!_0x5a29d3) return null;
      var _0x1c605c = new Map();
      try {
        if ("function" == typeof _0x5a29d3["forEach"]) _0x5a29d3["forEach"](function (_0x4998ec, _0x1ad210) {
          _0x4998ec && _0x4998ec["heroId"] && _0x1c605c["set"](Number(_0x4998ec["heroId"]), Number(_0x1ad210));
        });else {
          if ("function" == typeof _0x5a29d3["entries"]) {
            for (var _0x184eb5 of _0x5a29d3["entries"]()) _0x184eb5[0x1] && _0x184eb5[0x1]["heroId"] && _0x1c605c["set"](Number(_0x184eb5[0x1]["heroId"]), Number(_0x184eb5[0x0]));
          } else "object" == typeof _0x5a29d3 && Object["keys"](_0x5a29d3)["forEach"](function (_0x589b6b) {
            var _0xb54043 = _0x5a29d3[_0x589b6b];
            _0xb54043 && _0xb54043["heroId"] && _0x1c605c["set"](Number(_0xb54043["heroId"]), Number(_0x589b6b));
          });
        }
      } catch (_0x1970d0) {}
      return _0x1c605c["size"] > 0x0 ? _0x1c605c : null;
    }(_0x4f23bc), null);
    var _0x2f638d;
    if (!(_0x2f638d = _0x42129a && _0x42129a["size"] > 0x0 ? _0x3f0d5e["map"](_0x420fdd => ({
      hero: _0x420fdd,
      heroId: _0x1a9258(_0x420fdd)
    }))["filter"](_0x152017 => _0x152017["heroId"] > 0x0 && _0x42129a["has"](_0x152017["heroId"])) : _0x3f0d5e["map"](_0x45c906 => ({
      hero: _0x45c906,
      heroId: _0x1a9258(_0x45c906)
    }))["filter"](_0x57eb20 => _0x57eb20["heroId"] > 0x0 && function (_0x49e7cf) {
      if (!_0x49e7cf || "object" != typeof _0x49e7cf) return !0x1;
      const _0x476a84 = [_0x13e757["safeCall"](() => "function" == typeof _0x49e7cf["isInBattleTeam"] ? _0x49e7cf["isInBattleTeam"]() : null, null), _0x13e757["safeCall"](() => "function" == typeof _0x49e7cf["getIsInBattleTeam"] ? _0x49e7cf["getIsInBattleTeam"]() : null, null)];
      for (let _0x58dd8d = 0x0; _0x58dd8d < _0x476a84["length"]; _0x58dd8d += 0x1) {
        const _0x302849 = _0x741630(_0x476a84[_0x58dd8d]);
        if (null != _0x302849) return _0x302849;
      }
      const _0x5ef7df = [_0x49e7cf["isInBattleTeam"], _0x49e7cf["isInBattle"], _0x49e7cf["inBattle"], _0x49e7cf["inBattleTeam"], _0x49e7cf["isBattle"], _0x49e7cf["isFighting"], _0x49e7cf["battleTeamFlag"], _0x49e7cf["teamState"], _0x49e7cf["battleState"], _0x49e7cf["embattleState"]];
      for (let _0x153120 = 0x0; _0x153120 < _0x5ef7df["length"]; _0x153120 += 0x1) {
        const _0xaaaf0d = _0x741630(_0x5ef7df[_0x153120]);
        if (null != _0xaaaf0d) return _0xaaaf0d;
      }
      const _0x2b1771 = [_0x49e7cf["slot"], _0x49e7cf["pos"], _0x49e7cf["battlePos"], _0x49e7cf["teamPos"], _0x49e7cf["position"], _0x49e7cf["lineupPos"], _0x49e7cf["teamIndex"], _0x49e7cf["teamSlot"]];
      for (let _0x426c5c = 0x0; _0x426c5c < _0x2b1771["length"]; _0x426c5c += 0x1) {
        const _0x24c3d2 = Number(_0x2b1771[_0x426c5c]);
        if (Number["isFinite"](_0x24c3d2) && _0x24c3d2 >= 0x0 && _0x24c3d2 < 0x14) return !0x0;
      }
      return !0x1;
    }(_0x57eb20["hero"])))["length"]) return null;
    _0x2f638d["sort"]((_0x3f6af3, _0x1b29aa) => {
      const _0x2a6609 = _0x42129a ? _0x42129a["get"](_0x3f6af3["heroId"]) : void 0x0,
        _0xc6242e = _0x42129a ? _0x42129a["get"](_0x1b29aa["heroId"]) : void 0x0,
        _0x5dcab7 = null != _0x2a6609 ? _0x2a6609 : _0x4690fb(_0x3f6af3["hero"], _0x5a4e6b, _0x2e4c04["get"](_0x3f6af3["heroId"])),
        _0x305be8 = null != _0xc6242e ? _0xc6242e : _0x4690fb(_0x1b29aa["hero"], _0x5a4e6b, _0x2e4c04["get"](_0x1b29aa["heroId"]));
      return null != _0x5dcab7 && null != _0x305be8 && _0x5dcab7 !== _0x305be8 ? _0x5dcab7 - _0x305be8 : null != _0x5dcab7 && null == _0x305be8 ? -0x1 : null == _0x5dcab7 && null != _0x305be8 ? 0x1 : _0x3f6af3["heroId"] - _0x1b29aa["heroId"];
    });
    const _0x53a4b8 = new Set(),
      _0xe64ea8 = [];
    return _0x2f638d["forEach"](_0x530ae5 => {
      var _0x35be4f = _0x42129a ? _0x42129a["get"](_0x530ae5["heroId"]) : void 0x0;
      let _0x18f5d2 = null != _0x35be4f ? _0x35be4f : _0x4690fb(_0x530ae5["hero"], _0x5a4e6b, null);
      null == _0x18f5d2 && (_0x18f5d2 = _0x2e4c04["get"](_0x530ae5["heroId"])), (null == _0x18f5d2 || _0x53a4b8["has"](_0x18f5d2)) && (_0x18f5d2 = function (_0x4d424d, _0x211eb) {
        const _0x508313 = _0x211eb ? 0x0 : 0x1,
          _0x5990ac = _0x508313 + 0x5;
        for (let _0x1390ff = _0x508313; _0x1390ff < _0x5990ac; _0x1390ff += 0x1) if (!_0x4d424d["has"](_0x1390ff)) return _0x1390ff;
        let _0x3515b7 = _0x508313;
        for (; _0x4d424d["has"](_0x3515b7);) _0x3515b7 += 0x1;
        return _0x3515b7;
      }(_0x53a4b8, _0x5a4e6b)), _0x53a4b8["add"](_0x18f5d2);
      let _0x93f3fe = function (_0x61c414, _0x89e6c0 = null) {
        const _0x21eea0 = _0x9d1ae1 => {
            const _0x3cd1b3 = _0x3eeb55(_0x13e757["safeCall"](() => _0x9d1ae1["leftTeam"]["team"], null));
            for (let _0x3cf109 = 0x0; _0x3cf109 < _0x3cd1b3["length"]; _0x3cf109 += 0x1) if (_0xc3ade5(_0x3cd1b3[_0x3cf109]["entry"]) === _0x61c414) return _0x13e757["deepClone"](_0x3cd1b3[_0x3cf109]["entry"]);
            return null;
          },
          _0x231967 = _0x555e33 => {
            const _0x11b3ed = _0x13e757["fromSerializable"](_0x555e33 && _0x555e33["teamEntries"] ? _0x555e33["teamEntries"] : []);
            if (!Array["isArray"](_0x11b3ed)) return null;
            for (let _0x2e8be8 = 0x0; _0x2e8be8 < _0x11b3ed["length"]; _0x2e8be8 += 0x1) if (_0xc3ade5(_0x11b3ed[_0x2e8be8] && _0x11b3ed[_0x2e8be8]["entry"]) === _0x61c414) return _0x13e757["deepClone"](_0x11b3ed[_0x2e8be8]["entry"]);
            return null;
          },
          _0x572efa = _0x13e757["safeCall"](() => _0xf23a54["getLevelBattle"](), null),
          _0x202ebb = [_0x13e757["safeCall"](() => _0x572efa && _0x572efa["options"] ? _0x572efa["options"]["battleData"] : null, null), _0x89e6c0, _0x58a3e9["reusableSkeleton"], _0x13e757["safeCall"](() => _0x58a3e9["latestCapture"]["input"]["battleData"], null)];
        Object["keys"](_0x58a3e9["modeCaches"] || {})["forEach"](_0x326921 => {
          _0x202ebb["push"](_0x13e757["safeCall"](() => _0x58a3e9["modeCaches"][_0x326921]["battleData"], null));
        });
        for (let _0x198172 = 0x0; _0x198172 < _0x202ebb["length"]; _0x198172 += 0x1) {
          const _0x1b59f8 = _0x21eea0(_0x202ebb[_0x198172]);
          if (_0x1b59f8) return _0x1b59f8;
        }
        for (let _0x50ea96 = 0x0; _0x50ea96 < _0x58a3e9["candidates"]["length"]; _0x50ea96 += 0x1) {
          const _0x4c533a = _0x231967(_0x58a3e9["candidates"][_0x50ea96]);
          if (_0x4c533a) return _0x4c533a;
        }
        return null;
      }(_0x530ae5["heroId"], _0x25527f);
      _0x93f3fe || (_0x93f3fe = function (_0x41a76e, _0x15c21c, _0x274397) {
        return _0x41a76e && "object" == typeof _0x41a76e && _0x15c21c ? {
          id: _0x15c21c,
          heroId: _0x15c21c,
          type: Number(null != _0x41a76e["type"] ? _0x41a76e["type"] : 0x0),
          index: Number(_0x274397),
          level: Number(null != _0x41a76e["level"] ? _0x41a76e["level"] : null != _0x41a76e["lv"] ? _0x41a76e["lv"] : null != _0x41a76e["heroLv"] ? _0x41a76e["heroLv"] : 0x1),
          attack: Number(null != _0x41a76e["attack"] ? _0x41a76e["attack"] : null != _0x41a76e["atk"] ? _0x41a76e["atk"] : 0x0),
          defense: Number(null != _0x41a76e["defense"] ? _0x41a76e["defense"] : null != _0x41a76e["def"] ? _0x41a76e["def"] : 0x0),
          curHp: Number(null != _0x41a76e["curHp"] ? _0x41a76e["curHp"] : null != _0x41a76e["hp"] ? _0x41a76e["hp"] : null != _0x41a76e["maxHp"] ? _0x41a76e["maxHp"] : 0x0),
          hp: Number(null != _0x41a76e["hp"] ? _0x41a76e["hp"] : null != _0x41a76e["maxHp"] ? _0x41a76e["maxHp"] : null != _0x41a76e["curHp"] ? _0x41a76e["curHp"] : 0x0),
          curEnergy: Number(null != _0x41a76e["curEnergy"] ? _0x41a76e["curEnergy"] : -0x1),
          speed: Number(null != _0x41a76e["speed"] ? _0x41a76e["speed"] : null != _0x41a76e["spd"] ? _0x41a76e["spd"] : 0x0),
          color: Number(null != _0x41a76e["color"] ? _0x41a76e["color"] : 0x0),
          star: Number(null != _0x41a76e["star"] ? _0x41a76e["star"] : 0x0),
          order: Number(null != _0x41a76e["order"] ? _0x41a76e["order"] : null != _0x41a76e["awakenOrder"] ? _0x41a76e["awakenOrder"] : 0x0),
          skin: Number(null != _0x41a76e["skin"] ? _0x41a76e["skin"] : null != _0x41a76e["skinId"] ? _0x41a76e["skinId"] : 0x0),
          skinName: _0x41a76e["skinName"] || "",
          activeSkill: Number(null != _0x41a76e["activeSkill"] ? _0x41a76e["activeSkill"] : null != _0x41a76e["activeSkillId"] ? _0x41a76e["activeSkillId"] : 0x0),
          attribute: _0x41a76e["attribute"] || new Map(),
          skill: Array["isArray"](_0x41a76e["skill"]) ? _0x41a76e["skill"]["slice"]() : [],
          recordFlag: !!_0x41a76e["recordFlag"]
        } : null;
      }(_0x530ae5["hero"], _0x530ae5["heroId"], _0x18f5d2)), _0x93f3fe && (_0x93f3fe = _0x13e757["deepClone"](_0x93f3fe), _0x93f3fe["id"] = _0x530ae5["heroId"], _0x93f3fe["heroId"] = _0x530ae5["heroId"], _0x93f3fe["type"] = Number(null != _0x93f3fe["type"] ? _0x93f3fe["type"] : 0x0), _0x93f3fe["index"] = Number(_0x18f5d2), _0xe64ea8["push"]({
        pos: _0x18f5d2,
        entry: _0x93f3fe
      }));
    }), _0xe64ea8["length"] ? (_0xe64ea8["sort"]((_0x12e949, _0x203393) => _0x12e949["pos"] - _0x203393["pos"]), {
      entries: _0xe64ea8,
      battleTeam: _0xe64ea8["map"](({
        pos: _0x285688,
        entry: _0x4d8840
      }) => ({
        pos: _0x285688,
        heroId: _0xc3ade5(_0x4d8840)
      }))
    }) : null;
  }
  function _0x36007c(_0x466418 = null) {
    let _0x569fe0 = _0xf23a54["getReusableBattleSkeleton"](!0x1);
    if (_0x569fe0 && _0x569fe0["leftTeam"] && _0x569fe0["leftTeam"]["team"] || !_0x52d85b() || (_0x569fe0 = _0xf23a54["getReusableBattleSkeleton"](!0x1)), !_0x569fe0 || !_0x569fe0["leftTeam"] || !_0x569fe0["leftTeam"]["team"]) throw new Error("未找到当前阵容骨架，请先进入主线或产生一场可捕获的非PVP战斗");
    const _0x788aeb = _0x30ad83(),
      _0x24c42f = _0x1f61cd(_0x569fe0),
      _0x11d918 = _0x24c42f && _0x24c42f["entries"] && _0x24c42f["entries"]["length"] ? _0x24c42f["entries"] : _0x3eeb55(_0x569fe0["leftTeam"]["team"]),
      _0x468b66 = _0x24c42f && _0x24c42f["battleTeam"] && _0x24c42f["battleTeam"]["length"] ? _0x24c42f["battleTeam"] : _0x11d918["map"](({
        pos: _0x303e50,
        entry: _0x167085
      }) => ({
        pos: _0x303e50,
        heroId: _0xc3ade5(_0x167085)
      })),
      _0x2e2516 = _0x24c42f && _0x24c42f["entries"] && _0x24c42f["entries"]["length"] ? function (_0x32fbb9, _0x9d5f78 = 0x0) {
        const _0x547fe0 = (_0x32fbb9 || [])["map"](({
          pos: _0x3a2ac1,
          entry: _0x51ffda
        }) => _0x3a2ac1 + ":" + _0xc3ade5(_0x51ffda))["join"]("|") + "|weapon:" + Number(_0x9d5f78 || 0x0);
        return _0x13e757["hashString"](_0x547fe0)["toString"](0x10) + ":" + _0x547fe0;
      }(_0x11d918, _0x569fe0["leftTeam"]["weaponId"] || 0x0) : _0x410638(_0x569fe0);
    _0x2e2516 && (_0x58a3e9["lastKnownSignature"] = _0x2e2516), _0x24c42f && _0x24c42f["entries"] && _0x24c42f["entries"]["length"] ? _0x13e757["pushDataSource"]("获取当前阵容使用实时上阵队伍 " + _0x2e2516) : _0x13e757["pushDataSource"]("获取当前阵容回退到骨架阵容 " + _0x2e2516);
    const _0x179cdc = _0x13e757["safeCall"](() => {
        var _0x4ae429 = _0xf23a54["getRole"]();
        return _0x4ae429 && null != _0x4ae429["lordWeaponId"] ? Number(_0x4ae429["lordWeaponId"]) : 0x0;
      }, 0x0) || _0x569fe0["leftTeam"]["weaponId"] || 0x0,
      _0x8c751d = {
        id: "cand_" + Date["now"]() + "_" + Math["random"]()["toString"](0x24)["slice"](0x2, 0x8),
        capturedAt: _0x13e757["now"](),
        sourceMode: _0xf23a54["getBattleModeName"](_0x569fe0["mode"]) || "unknown",
        signature: _0x2e2516,
        lordWeaponId: _0x179cdc,
        battleTeam: _0x468b66,
        limitations: _0x466418,
        leftTeamMeta: _0x13e757["toSerializable"]((() => {
          const _0x20cb53 = {};
          return _0x569fe0 && _0x569fe0["leftTeam"] && Object["keys"](_0x569fe0["leftTeam"])["forEach"](_0x93b321 => {
            "team" !== _0x93b321 && "id" !== _0x93b321 && (_0x20cb53[_0x93b321] = _0x569fe0["leftTeam"][_0x93b321]);
          }), _0x20cb53["headImg"] = _0x20cb53["headImg"] || _0x788aeb["headImg"], _0x20cb53["name"] = _0x20cb53["name"] || _0x788aeb["name"], _0x20cb53["roleId"] = _0x20cb53["roleId"] || _0x788aeb["roleId"], _0x20cb53["weaponId"] = _0x179cdc, _0x20cb53;
        })()),
        teamEntries: _0x13e757["toSerializable"](_0x11d918["map"](({
          pos: _0x3df131,
          entry: _0x46a95a
        }) => ({
          pos: _0x3df131,
          entry: _0x13e757["deepClone"](_0x46a95a)
        })))
      };
    return _0x436c51(_0x8c751d, _0x569fe0, "captureCurrentTeamSnapshot") && _0x13e757["pushDataSource"]("当前阵容已同步到可复用骨架 " + _0x2e2516), _0x8c751d;
  }
  function _0x35a353(_0x1b09d2, _0x53e6f9) {
    if (!_0x1b09d2 || !_0x1b09d2["leftTeam"] || !_0x53e6f9) return _0x1b09d2;
    const _0x33cd0f = _0x13e757["fromSerializable"](_0x53e6f9["teamEntries"] || []);
    _0x33cd0f && _0x33cd0f["length"] && (_0x1b09d2["leftTeam"]["team"] = _0x43484b(_0x1b09d2["leftTeam"]["team"], _0x33cd0f["map"](({
      pos: _0x1179fa,
      entry: _0x53ec81
    }) => ({
      pos: Number(_0x1179fa),
      entry: _0x13e757["deepClone"](_0x53ec81)
    }))));
    const _0x5d7c03 = _0x13e757["fromSerializable"](_0x53e6f9["leftTeamMeta"] || {});
    return Object["keys"](_0x5d7c03)["forEach"](_0x4640f4 => {
      "team" !== _0x4640f4 && "id" !== _0x4640f4 && void 0x0 !== _0x5d7c03[_0x4640f4] && (_0x1b09d2["leftTeam"][_0x4640f4] = _0x13e757["deepClone"](_0x5d7c03[_0x4640f4]));
    }), _0x1b09d2;
  }
  function _0x437e96(_0x5cef95) {
    return Array["isArray"](_0x5cef95) ? _0x5cef95 : [];
  }
  function _0x471d19(_0x3b5ee9) {
    return _0x3b5ee9 instanceof Map ? _0x3b5ee9 : Array["isArray"](_0x3b5ee9) ? new Map(_0x3b5ee9) : _0x3b5ee9 && "Map" === _0x3b5ee9["__type"] && Array["isArray"](_0x3b5ee9["value"]) ? new Map(_0x3b5ee9["value"]) : _0x3b5ee9 && "object" == typeof _0x3b5ee9 ? new Map(Object["keys"](_0x3b5ee9)["map"](_0x4c4ab0 => [_0x4c4ab0, _0x3b5ee9[_0x4c4ab0]])) : new Map();
  }
  function _0x4f8189(_0x33649c) {
    return null == _0x33649c ? "" : String(_0x33649c);
  }
  function _0xd5f23e(_0x3759c7, _0x4a371c = !0x1) {
    if (!_0x3759c7 || "object" != typeof _0x3759c7) return;
    const _0x17953e = _0x4a371c ? null : _0x30ad83();
    _0x3759c7["name"] = _0x4f8189(_0x3759c7["name"]), _0x3759c7["headImg"] = _0x4f8189(_0x3759c7["headImg"]), _0x3759c7["legionName"] = _0x4f8189(_0x3759c7["legionName"]), _0x4a371c || (!_0x3759c7["name"] && _0x17953e && _0x17953e["name"] && (_0x3759c7["name"] = _0x17953e["name"]), !_0x3759c7["headImg"] && _0x17953e && _0x17953e["headImg"] && (_0x3759c7["headImg"] = _0x17953e["headImg"]), !_0x3759c7["roleId"] && _0x17953e && _0x17953e["roleId"] && (_0x3759c7["roleId"] = _0x17953e["roleId"])), _0x3759c7["lordSkill"] = _0x437e96(_0x3759c7["lordSkill"]), _0x3759c7["lordAttackTime"] = _0x437e96(_0x3759c7["lordAttackTime"]), _0x3759c7["lordAutoAttackTime"] = _0x437e96(_0x3759c7["lordAutoAttackTime"]), _0x3759c7["levelWeaponSkillId"] = _0x437e96(_0x3759c7["levelWeaponSkillId"]), _0x3759c7["options"] = _0x471d19(_0x3759c7["options"]), _0x3759c7["teamInfo"] = _0x471d19(_0x3759c7["teamInfo"]), _0x3759c7["attributeBonus"] = _0x471d19(_0x3759c7["attributeBonus"]), _0x3759c7["team"] || (_0x3759c7["team"] = new Map()), _0x3eeb55(_0x3759c7["team"])["forEach"](({
      entry: _0x1ff79d
    }) => {
      _0x1ff79d && "object" == typeof _0x1ff79d && (_0x1ff79d["skinName"] = _0x4f8189(_0x1ff79d["skinName"]), _0x1ff79d["skill"] = _0x437e96(_0x1ff79d["skill"]), _0x1ff79d["attribute"] = _0x471d19(_0x1ff79d["attribute"]), _0x4a371c && (delete _0x1ff79d["monsterId"], delete _0x1ff79d["template"], delete _0x1ff79d["monsterLv"], delete _0x1ff79d["cfgId"], delete _0x1ff79d["heroId"], delete _0x1ff79d["pos"]));
    });
  }
  function _0x1764c2(_0x14b731) {
    const _0x5e26fe = [],
      _0x537a79 = (_0x2d495f, _0x55db8f) => {
        _0x5e26fe["push"]({
          field: _0x2d495f,
          valueType: null === _0x55db8f ? "null" : typeof _0x55db8f
        });
      },
      _0x436550 = (_0xcdf8c4, _0x5d5029, _0x4d5d1d = !0x1) => {
        _0xcdf8c4 && "object" == typeof _0xcdf8c4 ? (["name", "headImg", "legionName"]["forEach"](_0x1857e4 => {
          const _0x3ff1cc = _0xcdf8c4[_0x1857e4];
          null == _0x3ff1cc && _0x537a79(_0x5d5029 + "." + _0x1857e4, _0x3ff1cc);
        }), _0x4d5d1d && ["lordSkill", "lordAttackTime", "lordAutoAttackTime"]["forEach"](_0x47f407 => {
          const _0x2adb5d = _0xcdf8c4[_0x47f407];
          null == _0x2adb5d && _0x537a79(_0x5d5029 + "." + _0x47f407, _0x2adb5d);
        }), _0x3eeb55(_0xcdf8c4["team"])["forEach"](({
          pos: _0xb6bd72,
          entry: _0x1270c7
        }) => {
          _0x1270c7 && "object" == typeof _0x1270c7 ? (null == _0x1270c7["skinName"] && _0x537a79(_0x5d5029 + ".team." + _0xb6bd72 + ".skinName", _0x1270c7["skinName"]), null == _0x1270c7["attribute"] && _0x537a79(_0x5d5029 + ".team." + _0xb6bd72 + ".attribute", _0x1270c7["attribute"]), null == _0x1270c7["skill"] && _0x537a79(_0x5d5029 + ".team." + _0xb6bd72 + ".skill", _0x1270c7["skill"])) : _0x537a79(_0x5d5029 + ".team." + _0xb6bd72, _0x1270c7);
        })) : _0x537a79(_0x5d5029, _0xcdf8c4);
      };
    return _0x436550(_0x14b731 && _0x14b731["leftTeam"], "leftTeam", !0x0), _0x436550(_0x14b731 && _0x14b731["rightTeam"], "rightTeam", !0x1), _0x5e26fe;
  }
  function _0x282068(_0x303e7e, _0x5b9971 = !0x1) {
    const _0xb1adfd = function (_0x45c57b, _0x3010fd = !0x1) {
        return _0x3eeb55(_0x13e757["safeCall"](() => _0x45c57b && _0x45c57b["team"], null))["map"](({
          pos: _0x26c2aa,
          entry: _0x65f465
        }) => ({
          heroId: _0xc3ade5(_0x65f465),
          color: Number(_0x65f465 && null != _0x65f465["color"] ? _0x65f465["color"] : 0x0),
          level: Number(_0x65f465 && null != _0x65f465["level"] ? _0x65f465["level"] : 0x0),
          order: Number(_0x65f465 && null != _0x65f465["order"] ? _0x65f465["order"] : 0x0),
          index: Number(_0x65f465 && null != _0x65f465["index"] ? _0x65f465["index"] : _0x26c2aa),
          rage: 0x0,
          club: Number(_0x65f465 && null != _0x65f465["club"] ? _0x65f465["club"] : 0x0),
          slot: Number(_0x26c2aa),
          star: Number(_0x65f465 && null != _0x65f465["star"] ? _0x65f465["star"] : 0x0),
          damage: 0x0,
          takeDamage: 0x0,
          treatment: 0x0,
          hp: Number(_0x65f465 && null != _0x65f465["curHp"] ? _0x65f465["curHp"] : _0x65f465 && null != _0x65f465["hp"] ? _0x65f465["hp"] : 0x0),
          energy: 0x0,
          skin: Number(_0x65f465 && null != _0x65f465["skin"] ? _0x65f465["skin"] : 0x0),
          skinName: _0x4f8189(_0x65f465 && _0x65f465["skinName"]),
          type: Number(_0x65f465 && null != _0x65f465["type"] ? _0x65f465["type"] : _0x3010fd ? 0x1 : 0x0),
          maxAttr: new Map(),
          statistic: new Map(),
          skillDamage: new Map(),
          skillTreatment: new Map()
        }));
      }(_0x303e7e, _0x5b9971),
      _0xf38f85 = _0x344c8c(_0xb1adfd);
    return {
      roleId: Number(_0x303e7e && null != _0x303e7e["roleId"] ? _0x303e7e["roleId"] : 0x0),
      name: _0x4f8189(_0x303e7e && _0x303e7e["name"]),
      headImg: _0x4f8189(_0x303e7e && _0x303e7e["headImg"]),
      avatarFrame: _0x13e757["deepClone"](_0x303e7e && _0x303e7e["avatarFrame"] ? _0x303e7e["avatarFrame"] : {
        id: 0x0,
        expire: 0x0
      }),
      power: Number(_0x303e7e && null != _0x303e7e["power"] ? _0x303e7e["power"] : 0x0),
      teamInfo: _0xb1adfd,
      ext: new Map([["curHP", _0xf38f85]])
    };
  }
  function _0x27cb40(_0x1c1a1f) {
    return _0x1c1a1f && "object" == typeof _0x1c1a1f ? (_0x1c1a1f["leftTeams"] = [], _0x1c1a1f["rightTeams"] = [], _0x1c1a1f["fightTime"] = 0x0, _0x1c1a1f["outputCode"] = {}, _0x1c1a1f["result"] = function (_0x120f51, _0xc70b49 = null) {
      const _0x1bc1dc = _0xc70b49 && "object" == typeof _0xc70b49 && !Array["isArray"](_0xc70b49) ? _0x13e757["deepClone"](_0xc70b49) : {},
        _0x56a018 = _0x282068(_0x13e757["safeCall"](() => _0x120f51["leftTeam"], null), !0x1),
        _0x521126 = _0x282068(_0x13e757["safeCall"](() => _0x120f51["rightTeam"], null), !0x0);
      return Object["assign"](_0x1bc1dc, {
        id: Number(_0x120f51 && _0x120f51["id"] ? _0x120f51["id"] : 0x0),
        seed: Number(_0x120f51 && _0x120f51["randomSeed"] ? _0x120f51["randomSeed"] : 0x0),
        version: Number(_0x120f51 && null != _0x120f51["version"] ? _0x120f51["version"] : 0x0),
        type: Number(_0x120f51 && null != _0x120f51["mode"] ? _0x120f51["mode"] : 0x0),
        sponsor: _0x56a018,
        accept: _0x521126,
        round: 0x0,
        isTimeout: 0x0,
        statistic: new Map(),
        sponsors: [],
        accepts: [],
        gameResults: [],
        memos: [],
        log: "",
        inputCode: "",
        outputCode: ""
      });
    }(_0x1c1a1f, _0x1c1a1f["result"]), _0x1c1a1f["statistic"] = [], _0x1c1a1f) : _0x1c1a1f;
  }
  function _0x1acbd6(_0x18812d) {
    if (!_0x18812d || "object" != typeof _0x18812d) return _0x18812d;
    if (_0x18812d["leftTeams"] = _0x437e96(_0x18812d["leftTeams"]), _0x18812d["rightTeams"] = _0x437e96(_0x18812d["rightTeams"]), _0x18812d["outputCode"] && "object" == typeof _0x18812d["outputCode"] && !Array["isArray"](_0x18812d["outputCode"]) || (_0x18812d["outputCode"] = {}), _0x18812d["result"] && "object" == typeof _0x18812d["result"] && !Array["isArray"](_0x18812d["result"]) || (_0x18812d["result"] = {}), _0x18812d["statistic"] && ("object" == typeof _0x18812d["statistic"] || Array["isArray"](_0x18812d["statistic"])) || (_0x18812d["statistic"] = []), _0xd5f23e(_0x18812d["leftTeam"], !0x1), _0xd5f23e(_0x18812d["rightTeam"], !0x0), _0x18812d["leftTeam"] && _0x18812d["rightTeam"]) {
      const _0x24d093 = (_0x1ceff5, _0x375faf) => {
        _0x1ceff5 && _0x375faf && "object" == typeof _0x1ceff5 && "object" == typeof _0x375faf && Object["keys"](_0x1ceff5)["forEach"](_0x29e211 => {
          void 0x0 === _0x375faf[_0x29e211] && (Array["isArray"](_0x1ceff5[_0x29e211]) ? _0x375faf[_0x29e211] = [] : _0x1ceff5[_0x29e211] instanceof Map && (_0x375faf[_0x29e211] = new Map()));
        });
      };
      _0x24d093(_0x18812d["leftTeam"], _0x18812d["rightTeam"]);
      let _0x5deea7 = null;
      if (_0x18812d["leftTeam"]["team"]) {
        const _0x431423 = _0x3eeb55(_0x18812d["leftTeam"]["team"]);
        _0x431423["length"] > 0x0 && _0x431423[0x0]["entry"] && (_0x5deea7 = _0x431423[0x0]["entry"]);
      }
      _0x5deea7 && _0x18812d["rightTeam"]["team"] && _0x3eeb55(_0x18812d["rightTeam"]["team"])["forEach"](({
        entry: _0x5ab1e8
      }) => {
        _0x5ab1e8 && "object" == typeof _0x5ab1e8 && _0x24d093(_0x5deea7, _0x5ab1e8);
      });
    }
    return _0x18812d;
  }
  function _0x1e3355(_0x3523cd) {
    if (!_0x3523cd) return null;
    const _0x357923 = _0x13e757["fromSerializable"](_0x3523cd["teamEntries"] || []);
    if (!Array["isArray"](_0x357923) || !_0x357923["length"]) return null;
    const _0x537363 = _0x13e757["fromSerializable"](_0x3523cd["leftTeamMeta"] || {}),
      _0x291451 = _0x537363 && (_0x537363["name"] || _0x537363["headImg"] || _0x537363["roleId"]) ? {
        name: _0x537363["name"] || "",
        headImg: _0x537363["headImg"] || "",
        roleId: Number(_0x537363["roleId"] || 0x0)
      } : _0x30ad83(),
      _0x6b8e25 = Object["assign"]({
        headImg: _0x291451["headImg"],
        name: _0x291451["name"],
        legionName: "",
        roleId: _0x291451["roleId"],
        power: 0x0,
        legacyColor: 0x0,
        tapAttack: 0x0,
        lordSkill: [],
        lordAttackTime: [],
        lordSkinId: 0x0,
        weaponId: _0x3523cd["lordWeaponId"] || 0x0,
        weaponActiveLevelId: 0x0,
        lordAutoAttackTime: [],
        avatarFrame: "",
        attributeBonus: new Map(),
        customCard: null,
        levelWeaponSkillId: [],
        teamInfo: new Map(),
        options: new Map()
      }, _0x13e757["deepClone"](_0x537363 || {}));
    return _0x6b8e25["team"] = _0x43484b(new Map(), _0x357923["map"](({
      pos: _0x4dce99,
      entry: _0x3a38c2
    }) => ({
      pos: Number(_0x4dce99),
      entry: _0x13e757["deepClone"](_0x3a38c2)
    }))), _0x1acbd6({
      id: 0x0,
      mode: 0x0,
      version: 0x0,
      randomSeed: 0x1,
      leftTeams: [],
      rightTeams: [],
      outputCode: {},
      result: {},
      statistic: {},
      options: new Map(),
      leftTeam: _0x6b8e25,
      rightTeam: {
        roleId: 0x0,
        name: "",
        headImg: "",
        legionName: "",
        lordSkill: [],
        lordAttackTime: [],
        lordAutoAttackTime: [],
        levelWeaponSkillId: [],
        options: new Map(),
        teamInfo: new Map(),
        attributeBonus: new Map(),
        team: new Map()
      }
    });
  }
  function _0x436c51(_0x4b2d29, _0xb1d936 = null, _0x255cc8 = "candidateCapture") {
    if (!_0x4b2d29) return !0x1;
    let _0x3cb50c = null;
    const _0x1f08f9 = [_0xb1d936, _0x58a3e9["reusableSkeleton"], _0x13e757["safeCall"](() => _0x58a3e9["latestCapture"]["input"]["battleData"], null)];
    Object["keys"](_0x58a3e9["modeCaches"] || {})["forEach"](_0x109799 => {
      const _0x132fff = _0x58a3e9["modeCaches"][_0x109799];
      _0x132fff && _0x132fff["battleData"] && _0x1f08f9["push"](_0x132fff["battleData"]);
    });
    for (let _0x2253c9 = 0x0; _0x2253c9 < _0x1f08f9["length"]; _0x2253c9 += 0x1) {
      const _0x5d64c2 = _0x1f08f9[_0x2253c9];
      if (_0x3268ca(_0x5d64c2)) {
        _0x3cb50c = _0x13e757["deepClone"](_0x5d64c2), _0x35a353(_0x3cb50c, _0x4b2d29);
        break;
      }
    }
    return _0x3cb50c || (_0x3cb50c = _0x13e757["safeCall"](() => _0x1e3355(_0x4b2d29), null)), !!_0x3cb50c && (_0x2ed9f7(_0x3cb50c, {
      source: _0x255cc8,
      modeKey: _0xb65e70(_0xf23a54["getBattleModeName"](_0x3cb50c["mode"])),
      signature: _0x4b2d29["signature"] || _0x410638(_0x3cb50c),
      candidateId: _0x4b2d29["id"] || ""
    }), _0x4b2d29["signature"] && (_0x58a3e9["lastKnownSignature"] = _0x4b2d29["signature"]), !0x0);
  }
  function _0x25601f() {
    try {
      if (!_0x58a3e9["reusableSkeleton"]) return void localStorage["removeItem"](_0x1fda3b);
      localStorage["setItem"](_0x1fda3b, JSON["stringify"](_0x13e757["toSerializable"]({
        battleData: _0x58a3e9["reusableSkeleton"],
        meta: _0x58a3e9["reusableSkeletonMeta"] || null
      })));
    } catch (_0x45643d) {
      _0x13e757["warn"]("保存可复用骨架失败", _0x45643d);
    }
  }
  function _0x52d85b() {
    const _0xde5bcb = (_0x58a3e9["candidates"] || [])["slice"]()["sort"]((_0x2bdd79, _0x39e8fe) => Number(_0x39e8fe["capturedAt"] || 0x0) - Number(_0x2bdd79["capturedAt"] || 0x0));
    for (let _0x2baa6 = 0x0; _0x2baa6 < _0xde5bcb["length"]; _0x2baa6 += 0x1) {
      const _0x7c9a47 = _0xde5bcb[_0x2baa6],
        _0x5c6f93 = _0x13e757["safeCall"](() => _0x1e3355(_0x7c9a47), null);
      if (_0x5c6f93) {
        if (_0x58a3e9["reusableSkeleton"] = _0x5c6f93, _0x58a3e9["reusableSkeletonMeta"] = {
          source: "savedCandidate",
          mode: _0x5c6f93["mode"],
          modeKey: _0x7c9a47["sourceMode"] || "candidate",
          capturedAt: _0x13e757["now"](),
          signature: _0x7c9a47["signature"] || "",
          candidateId: _0x7c9a47["id"] || ""
        }, _0x7c9a47["signature"]) _0x58a3e9["lastKnownSignature"] = _0x7c9a47["signature"];else {
          const _0xe2edc8 = _0x410638(_0x5c6f93);
          _0xe2edc8 && (_0x58a3e9["lastKnownSignature"] = _0xe2edc8);
        }
        return _0x13e757["pushDataSource"]("已从保存的候选阵容恢复可复用骨架 " + (_0x7c9a47["signature"] || _0x7c9a47["id"] || "")), _0x25601f(), !0x0;
      }
    }
    return !0x1;
  }
  function _0x516789(_0x4592b9 = !0x0) {
    _0x58a3e9["reusableSkeleton"] = null, _0x58a3e9["reusableSkeletonMeta"] = null;
    try {
      const _0x4444b2 = localStorage["getItem"](_0x1fda3b);
      if (_0x4444b2) {
        const _0x213675 = _0x13e757["fromSerializable"](JSON["parse"](_0x4444b2)),
          _0x29a269 = _0x213675 && _0x213675["battleData"] ? _0x213675["battleData"] : null;
        if (_0x29a269 && _0x3268ca(_0x29a269)) {
          _0x58a3e9["reusableSkeleton"] = _0x1acbd6(_0x29a269), _0x58a3e9["reusableSkeletonMeta"] = _0x213675 && _0x213675["meta"] ? _0x213675["meta"] : null;
          const _0x130c46 = _0x410638(_0x58a3e9["reusableSkeleton"]);
          return _0x130c46 && (_0x58a3e9["lastKnownSignature"] = _0x130c46), void _0x13e757["pushDataSource"]("已加载本地保存的可复用骨架");
        }
      }
    } catch (_0x4aacea) {
      _0x13e757["warn"]("加载可复用骨架失败", _0x4aacea);
    }
    _0x4592b9 && _0x52d85b();
  }
  function _0x538c3c() {
    try {
      localStorage["setItem"](_0x4dc65a, JSON["stringify"](_0x13e757["toSerializable"](_0x58a3e9["candidates"])));
    } catch (_0x4d9cc0) {
      _0x13e757["warn"]("保存候选阵容失败", _0x4d9cc0);
    }
  }
  function _0x3b82f0(_0x246347, _0x59d085, _0x21eb27) {
    const _0x5ef89b = {
        mode: _0x246347["mode"],
        context: _0x246347["context"],
        scope: _0x21eb27
      },
      _0xe52ea2 = _0x13e757["hashString"](_0x13e757["stringifySeedScope"](_0x5ef89b)) % 0x7ffffd78,
      _0x4aa3e3 = [];
    for (let _0x77a569 = 0x1; _0x77a569 <= _0x59d085; _0x77a569 += 0x1) {
      const _0x13f28b = (_0xe52ea2 + _0x77a569) % 0x7fffffff || 0x1;
      _0x4aa3e3["push"](_0x13f28b);
    }
    return _0x4aa3e3;
  }
  function _0x5711d4(_0x4e2297 = null) {
    _0x58a3e9["seedRecordView"]["sourceId"] = _0x4e2297 && _0x4e2297["reportId"] ? String(_0x4e2297["reportId"]) : "", _0x58a3e9["seedRecordView"]["page"] = 0x0, _0x58a3e9["seedRecordView"]["selectedIndex"] = 0x0;
  }
  function _0x2f06cc(_0x501e1d, _0x132ea2 = 0x3e8) {
    const _0x30dd24 = Number(String(null == _0x501e1d ? "" : _0x501e1d)["replace"](/[^\d]+/g, ""));
    return !Number["isFinite"](_0x30dd24) || _0x30dd24 <= 0x0 ? Number(_0x132ea2 || _0x5b877a) : Math["min"](0x1869f, Math["max"](0x1, Math["floor"](_0x30dd24)));
  }
  function _0x37e1f9(_0x9dcb04 = null) {
    const _0x4cdb57 = _0x2f06cc(null != _0x9dcb04 ? _0x9dcb04 : _0x58a3e9["panel"] && _0x58a3e9["panel"]["refs"] && _0x58a3e9["panel"]["refs"]["sampleCountInput"] ? _0x58a3e9["panel"]["refs"]["sampleCountInput"]["value"] : _0x58a3e9["panelPrefs"]["sampleCount"], _0x58a3e9["panelPrefs"]["sampleCount"] || _0x5b877a);
    return _0x58a3e9["panelPrefs"]["sampleCount"] = "" + _0x4cdb57, _0x5d081c(), _0x58a3e9["panel"] && _0x58a3e9["panel"]["refs"] && _0x58a3e9["panel"]["refs"]["sampleCountInput"] && (_0x58a3e9["panel"]["refs"]["sampleCountInput"]["value"] = "" + _0x4cdb57), _0x4cdb57;
  }
  function _0x344c8c(_0x2a717b) {
    return (_0x2a717b || [])["reduce"]((_0x1d590b, _0x29acf3) => _0x1d590b + Number(_0x29acf3 && _0x29acf3["hp"] ? _0x29acf3["hp"] : 0x0), 0x0);
  }
  function _0xae678d(_0x2845d4) {
    return (_0x2845d4 || [])["reduce"]((_0xa34443, _0x3afcda) => {
      const _0x18fd11 = _0x3afcda && null != _0x3afcda["maxHp"] ? _0x3afcda["maxHp"] : _0x3afcda && null != _0x3afcda["hp"] ? _0x3afcda["hp"] : 0x0;
      return _0xa34443 + Number(_0x18fd11 || 0x0);
    }, 0x0);
  }
  function _0x383601(_0x4f4e4b) {
    return (_0x4f4e4b || [])["reduce"]((_0x5a7100, _0x1b8231) => _0x5a7100 + (Number(_0x1b8231 && _0x1b8231["hp"] ? _0x1b8231["hp"] : 0x0) > 0x0 ? 0x1 : 0x0), 0x0);
  }
  function _0x24972c(_0x18ea90) {
    return _0x18ea90 ? Number["isFinite"](_0x18ea90["round"]) ? Number(_0x18ea90["round"]) : Number["isFinite"](_0x18ea90["totalRound"]) ? Number(_0x18ea90["totalRound"]) : Number["isFinite"](_0x18ea90["turn"]) ? Number(_0x18ea90["turn"]) : Number["isFinite"](_0x18ea90["totalFrame"]) ? Math["max"](0x1, Math["ceil"](Number(_0x18ea90["totalFrame"]) / 0x32)) : 0x0 : 0x0;
  }
  function _0x47ea84(_0x58280f) {
    return _0x58280f ? _0x58280f["sponsor"] && Array["isArray"](_0x58280f["sponsor"]["teamInfo"]) ? _0x58280f["sponsor"]["teamInfo"] : Array["isArray"](_0x58280f["leftTeamInfo"]) ? _0x58280f["leftTeamInfo"] : [] : [];
  }
  function _0x572107(_0x1a61b4) {
    return _0x1a61b4 ? _0x1a61b4["accept"] && Array["isArray"](_0x1a61b4["accept"]["teamInfo"]) ? _0x1a61b4["accept"]["teamInfo"] : Array["isArray"](_0x1a61b4["rightTeamInfo"]) ? _0x1a61b4["rightTeamInfo"] : [] : [];
  }
  function _0x34e7d8(_0x2623b5, _0x5d73ce = 0x14) {
    return _0x2623b5 && "object" == typeof _0x2623b5 ? _0x13e757["safeCall"](() => Reflect["ownKeys"](_0x2623b5)["filter"](_0x3831b0 => "string" == typeof _0x3831b0)["filter"](_0x2ed961 => "function" != typeof _0x2623b5[_0x2ed961])["slice"](0x0, _0x5d73ce), []) : [];
  }
  function _0x4aca44(_0x4ad082) {
    if (!_0x4ad082 || "object" != typeof _0x4ad082) return null;
    const _0x274df4 = [_0x4ad082["battleResult"], _0x4ad082["result"], _0x4ad082["replayResult"], _0x4ad082["fightResult"], _0x4ad082["rawResult"], _0x4ad082["data"] && _0x4ad082["data"]["battleResult"], _0x4ad082["data"] && _0x4ad082["data"]["result"]];
    for (let _0x234398 = 0x0; _0x234398 < _0x274df4["length"]; _0x234398 += 0x1) if (_0x274df4[_0x234398]) return _0x274df4[_0x234398];
    return null;
  }
  function _0x5e2607(_0x10ec15, _0x45c163 = 0x0, _0x181367 = new WeakSet()) {
    if (null == _0x10ec15 || "object" != typeof _0x10ec15) return _0x10ec15;
    if (_0x181367["has"](_0x10ec15)) return "[Circular]";
    if (_0x45c163 >= 0x2) return Array["isArray"](_0x10ec15) ? {
      type: "Array",
      length: _0x10ec15["length"]
    } : {
      type: _0x10ec15["constructor"] && _0x10ec15["constructor"]["name"] ? _0x10ec15["constructor"]["name"] : "Object",
      keys: _0x34e7d8(_0x10ec15, 0x8)
    };
    if (_0x181367["add"](_0x10ec15), _0x10ec15 instanceof Map) {
      const _0x43e9f0 = [];
      return _0x10ec15["forEach"]((_0x52f1d5, _0x585ea0) => {
        _0x43e9f0["length"] < 0x6 && _0x43e9f0["push"]([String(_0x585ea0), _0x5e2607(_0x52f1d5, _0x45c163 + 0x1, _0x181367)]);
      }), {
        type: "Map",
        size: _0x10ec15["size"],
        items: _0x43e9f0
      };
    }
    if (_0x10ec15 instanceof Set) {
      const _0x36795c = [];
      return _0x10ec15["forEach"](_0x5b6ab9 => {
        _0x36795c["length"] < 0x6 && _0x36795c["push"](_0x5e2607(_0x5b6ab9, _0x45c163 + 0x1, _0x181367));
      }), {
        type: "Set",
        size: _0x10ec15["size"],
        items: _0x36795c
      };
    }
    if (Array["isArray"](_0x10ec15)) return _0x10ec15["slice"](0x0, 0x6)["map"](_0x564ace => _0x5e2607(_0x564ace, _0x45c163 + 0x1, _0x181367));
    const _0x1ec65b = {};
    return _0x34e7d8(_0x10ec15, 0x8)["forEach"](_0x4b1d97 => {
      _0x1ec65b[_0x4b1d97] = _0x5e2607(_0x10ec15[_0x4b1d97], _0x45c163 + 0x1, _0x181367);
    }), _0x1ec65b;
  }
  function _0x1b7e5b(_0x30599b) {
    const _0x37a26e = [],
      _0x3af44a = new Set(),
      _0x465093 = (_0x154875, _0x4b018c) => {
        const _0x1b4414 = String(_0x154875);
        _0x3af44a["has"](_0x1b4414) || _0x37a26e["length"] >= 0x12 || (_0x3af44a["add"](_0x1b4414), _0x37a26e["push"]({
          key: _0x1b4414,
          value: _0x5e2607(_0x4b018c)
        }));
      };
    if (!_0x30599b) return {
      kind: "empty",
      entries: _0x37a26e
    };
    if ("function" == typeof _0x30599b["forEach"] && _0x13e757["safeCall"](() => {
      _0x30599b["forEach"]((_0x37a401, _0xe0cce7) => {
        _0x465093(function (_0x400613) {
          const _0x300c96 = Number(_0x400613),
            _0x30aa74 = _0x13e757["safeCall"](() => _0xf23a54["getBattleDataOption"](), null);
          if (!_0x30aa74 || !Number["isFinite"](_0x300c96)) return String(_0x400613);
          const _0x5e964b = Object["keys"](_0x30aa74)["find"](_0x4dfc23 => _0x30aa74[_0x4dfc23] === _0x300c96);
          return _0x5e964b ? _0x5e964b + "(" + _0x300c96 + ")" : String(_0x400613);
        }(_0xe0cce7), _0x37a401);
      });
    }, null), "function" == typeof _0x30599b["getExt"]) {
      const _0x3018d5 = _0x13e757["safeCall"](() => _0xf23a54["getBattleDataOption"](), null);
      _0x3018d5 && Object["keys"](_0x3018d5)["forEach"](_0x4e3773 => {
        const _0x5244e3 = _0x3018d5[_0x4e3773],
          _0x3b2d8c = _0x13e757["safeCall"](() => _0x30599b["getExt"](_0x5244e3, void 0x0), void 0x0);
        null != _0x3b2d8c && _0x465093("ext." + _0x4e3773, _0x3b2d8c);
      });
    }
    return Array["isArray"](_0x30599b) ? _0x30599b["slice"](0x0, 0xc)["forEach"]((_0x84274, _0x59a1d4) => _0x465093(_0x59a1d4, _0x84274)) : _0x34e7d8(_0x30599b, 0xc)["forEach"](_0xa52ee9 => _0x465093(_0xa52ee9, _0x30599b[_0xa52ee9])), {
      kind: _0x30599b["constructor"] && _0x30599b["constructor"]["name"] ? _0x30599b["constructor"]["name"] : typeof _0x30599b,
      entries: _0x37a26e
    };
  }
  function _0x3cf9e7(_0x132930) {
    const _0x273099 = _0x3eeb55(_0x132930)["map"](({
      pos: _0x356fef,
      entry: _0x52600c
    }) => function (_0x403e64, _0x8f518) {
      const _0x25e1fc = _0x536344 => {
          const _0x390c8d = _0x8f518 && null != _0x8f518[_0x536344] ? Number(_0x8f518[_0x536344]) : 0x0;
          return Number["isFinite"](_0x390c8d) ? _0x390c8d : 0x0;
        },
        _0xc2cb52 = ["attack", "defense", "hp", "maxHp", "curHp", "speed", "curEnergy", "energy"]["filter"](_0x801fbf => 0x0 !== _0x25e1fc(_0x801fbf)),
        _0x265fff = _0x34e7d8(_0x8f518, 0x1e);
      return {
        pos: _0x403e64,
        id: _0xc3ade5(_0x8f518),
        type: _0x25e1fc("type"),
        index: _0x8f518 && null != _0x8f518["index"] ? Number(_0x8f518["index"]) : _0x403e64,
        level: _0x25e1fc("level"),
        star: _0x25e1fc("star"),
        color: _0x25e1fc("color"),
        order: _0x25e1fc("order"),
        hp: _0x25e1fc("hp"),
        curHp: _0x25e1fc("curHp"),
        attack: _0x25e1fc("attack"),
        defense: _0x25e1fc("defense"),
        speed: _0x25e1fc("speed"),
        keyCount: _0x265fff["length"],
        keys: _0x265fff,
        nonZeroCoreStats: _0xc2cb52,
        hollow: _0xc3ade5(_0x8f518) > 0x0 && 0x0 === _0xc2cb52["length"]
      };
    }(_0x356fef, _0x52600c));
    return {
      count: _0x273099["length"],
      hollowCount: _0x273099["filter"](_0x2842fe => _0x2842fe["hollow"])["length"],
      brief: _0x273099["map"](_0x31f21b => _0x31f21b["pos"] + ":" + _0x31f21b["id"] + "@" + _0x31f21b["level"])["join"](" | "),
      entries: _0x273099
    };
  }
  function _0x476743(_0x302482) {
    if (!_0x302482) return null;
    const _0x721a4f = _0x47ea84(_0x302482),
      _0x39a47a = _0x572107(_0x302482),
      _0x17c69b = _0x344c8c(_0x721a4f),
      _0x229743 = _0xae678d(_0x721a4f),
      _0x3b6b9f = _0x344c8c(_0x39a47a),
      _0x54bfb8 = _0xae678d(_0x39a47a);
    return {
      isWin: !!_0x302482["isWin"],
      roundCount: _0x24972c(_0x302482),
      leftAlive: _0x383601(_0x721a4f),
      rightAlive: _0x383601(_0x39a47a),
      leftRemainHp: _0x17c69b,
      leftRemainHpRate: _0x229743 > 0x0 ? _0x17c69b / _0x229743 : 0x0,
      rightRemainHp: _0x3b6b9f,
      rightRemainHpRate: _0x54bfb8 > 0x0 ? _0x3b6b9f / _0x54bfb8 : 0x0,
      totalFrame: Number["isFinite"](_0x302482["totalFrame"]) ? Number(_0x302482["totalFrame"]) : 0x0
    };
  }
  function _0x3159ac(_0x5185fb, _0x514d65 = {}) {
    const _0x33f3eb = function (_0x41c0e2, _0x3fd872 = {}) {
      const _0x11eea8 = _0x3fd872["inputData"] || null,
        _0x22a4f7 = _0x3fd872["battleData"] || _0x11eea8 && _0x11eea8["battleData"] || null,
        _0x10b17b = _0x3fd872["battleResult"] || _0x4aca44(_0x11eea8),
        _0x157e4e = _0xb65e70(_0x3fd872["modeKey"] || _0x62fdff(_0x22a4f7, _0x11eea8) || "capture"),
        _0x2090d0 = null != _0x3fd872["context"] ? _0x13e757["deepClone"](_0x3fd872["context"]) : _0x13e757["deepClone"](_0x13e757["safeCall"](() => _0x58a3e9["modeCaches"][_0x157e4e] && _0x58a3e9["modeCaches"][_0x157e4e]["context"], null)),
        _0x16654d = _0xf23a54["getBattleModeName"](_0x22a4f7 && _0x22a4f7["mode"]),
        _0x18dbc7 = {
          modeName: _0x16654d,
          contextText: _0x5a98c8(_0x157e4e, _0x2090d0),
          battleId: _0x22a4f7 && null != _0x22a4f7["id"] ? _0x22a4f7["id"] : null,
          version: _0x22a4f7 && null != _0x22a4f7["version"] ? _0x22a4f7["version"] : null,
          randomSeed: _0x22a4f7 && null != _0x22a4f7["randomSeed"] ? _0x22a4f7["randomSeed"] : null,
          teamSignature: _0x410638(_0x22a4f7),
          leftRoleId: _0x22a4f7 && _0x22a4f7["leftTeam"] ? Number(_0x22a4f7["leftTeam"]["roleId"] || 0x0) : 0x0,
          rightRoleId: _0x22a4f7 && _0x22a4f7["rightTeam"] ? Number(_0x22a4f7["rightTeam"]["roleId"] || 0x0) : 0x0,
          leftTeam: _0x3cf9e7(_0x22a4f7 && _0x22a4f7["leftTeam"] ? _0x22a4f7["leftTeam"]["team"] : null),
          rightTeam: _0x3cf9e7(_0x22a4f7 && _0x22a4f7["rightTeam"] ? _0x22a4f7["rightTeam"]["team"] : null),
          options: _0x1b7e5b(_0x22a4f7 && _0x22a4f7["options"]),
          battleKeys: _0x34e7d8(_0x22a4f7, 0x18),
          inputKeys: _0x34e7d8(_0x11eea8, 0x10),
          result: _0x476743(_0x10b17b)
        };
      return _0x18dbc7["hypothesis"] = {
        rightTeamLooksConfigDriven: _0x18dbc7["rightTeam"]["count"] > 0x0 && _0x18dbc7["rightTeam"]["hollowCount"] === _0x18dbc7["rightTeam"]["count"],
        endsAtRound15: !(!_0x18dbc7["result"] || 0xf !== _0x18dbc7["result"]["roundCount"])
      }, {
        id: _0x13e757["now"]() + "-" + Math["random"]()["toString"](0x24)["slice"](0x2, 0x8),
        kind: _0x41c0e2,
        timestamp: _0x13e757["now"](),
        source: _0x3fd872["source"] || "-",
        modeKey: _0x157e4e,
        modeLabel: _0x505384[_0x157e4e] || _0x16654d || _0x157e4e,
        context: _0x2090d0,
        summary: _0x18dbc7,
        raw: {
          inputData: _0x11eea8 ? _0x13e757["toSerializable"](_0x11eea8) : null,
          battleData: _0x22a4f7 ? _0x13e757["toSerializable"](_0x22a4f7) : null,
          battleResult: _0x10b17b ? _0x13e757["toSerializable"](_0x10b17b) : null,
          extra: null != _0x3fd872["extra"] ? _0x13e757["toSerializable"](_0x3fd872["extra"]) : null
        }
      };
    }(_0x5185fb, _0x514d65);
    return _0x58a3e9["diagnosticSamples"]["unshift"](_0x33f3eb), _0x58a3e9["diagnosticSamples"] = _0x58a3e9["diagnosticSamples"]["slice"](0x0, 0x18), _0x13e757["pushDataSource"]("诊断采样 " + _0x33f3eb["modeLabel"] + " / " + _0x5185fb + " / " + _0x33f3eb["source"]), _0x13e757["log"]("诊断采样", _0x33f3eb["summary"]), _0x33f3eb;
  }
  function _0x1da3a6(_0x27b8ca) {
    const _0x5e4380 = _0x27b8ca["summary"]["result"],
      _0x5868ce = _0x5e4380 ? (_0x5e4380["isWin"] ? "\u80dc" : "\u8d1f") + " / " + (_0x5e4380["roundCount"] || 0x0) + " 回合" : "无结算";
    return _0x13e757["formatTime"](_0x27b8ca["timestamp"]) + " | " + _0x27b8ca["modeLabel"] + " | " + _0x27b8ca["source"] + " | 右侧空心 " + _0x27b8ca["summary"]["rightTeam"]["hollowCount"] + "/" + _0x27b8ca["summary"]["rightTeam"]["count"] + " | " + _0x5868ce;
  }
  function _0x8a594e(_0x5874e1) {
    const _0x13b39c = [];
    return _0x13b39c["push"](_0x1da3a6(_0x5874e1)), _0x13b39c["push"]("目标: " + (_0x5874e1["summary"]["contextText"] || "-")), _0x13b39c["push"]("battleId: " + (_0x5874e1["summary"]["battleId"] || "-") + " | seed: " + (_0x5874e1["summary"]["randomSeed"] || "-") + " | version: " + (_0x5874e1["summary"]["version"] || "-")), _0x13b39c["push"]("左侧签名: " + (_0x5874e1["summary"]["teamSignature"] || "-")), _0x13b39c["push"]("右侧敌方: " + (_0x5874e1["summary"]["rightTeam"]["brief"] || "-")), _0x13b39c["push"]("是否疑似纯代号驱动: " + (_0x5874e1["summary"]["hypothesis"]["rightTeamLooksConfigDriven"] ? "\u662f" : "\u5426")), _0x5874e1["summary"]["result"] && (_0x13b39c["push"]("真实结果: " + (_0x5874e1["summary"]["result"]["isWin"] ? "\u80dc\u5229" : "\u5931\u8d25") + " | 回合 " + _0x5874e1["summary"]["result"]["roundCount"] + " | 左存活 " + _0x5874e1["summary"]["result"]["leftAlive"] + " | 右存活 " + _0x5874e1["summary"]["result"]["rightAlive"]), _0x13b39c["push"]("是否 15 回合: " + (_0x5874e1["summary"]["hypothesis"]["endsAtRound15"] ? "\u662f" : "\u5426"))), _0x5874e1["summary"]["options"] && _0x5874e1["summary"]["options"]["entries"]["length"] && (_0x13b39c["push"]("玩法参数:"), _0x5874e1["summary"]["options"]["entries"]["slice"](0x0, 0x8)["forEach"](_0x4a7095 => {
      _0x13b39c["push"]("-\x20" + _0x4a7095["key"] + " = " + function (_0x35c081, _0x51b084 = 0x48) {
        let _0x885a03 = "";
        return _0x885a03 = "string" == typeof _0x35c081 ? _0x35c081 : _0x13e757["safeCall"](() => JSON["stringify"](_0x35c081), String(_0x35c081)), _0x885a03["length"] > _0x51b084 ? _0x885a03["slice"](0x0, _0x51b084) + "..." : _0x885a03;
      }(_0x4a7095["value"]));
    })), _0x13b39c["join"]("\x0a");
  }
  function _0x1683fd() {
    if (!_0x58a3e9["diagnosticSamples"]["length"]) return void alert("暂无诊断样本。请先真实打一场，再点一次“查看诊断日志”。");
    const _0x584efd = [];
    _0x584efd["push"]("脚本: " + _0x2eadaf + "\x20v" + _0x299c70), _0x584efd["push"]("诊断样本: " + _0x58a3e9["diagnosticSamples"]["length"]), _0x584efd["push"](""), _0x58a3e9["diagnosticSamples"]["slice"](0x0, 0x8)["forEach"]((_0x38d482, _0x564e97) => {
      _0x584efd["push"](_0x564e97 + 0x1 + ".\x20" + _0x8a594e(_0x38d482)), _0x584efd["push"]("");
    }), alert(_0x584efd["join"]("\x0a"));
  }
  function _0x458732() {
    if (!_0x58a3e9["diagnosticSamples"]["length"]) throw new Error("当前还没有诊断样本可导出");
    const _0x411d03 = new Date(),
      _0x365b1c = _0x447f0f => ("" + _0x447f0f)["padStart"](0x2, "0"),
      _0x104ccb = "battle-sim-replay-assistant-diagnostics-" + _0x411d03["getFullYear"]() + _0x365b1c(_0x411d03["getMonth"]() + 0x1) + _0x365b1c(_0x411d03["getDate"]()) + "-" + _0x365b1c(_0x411d03["getHours"]()) + _0x365b1c(_0x411d03["getMinutes"]()) + _0x365b1c(_0x411d03["getSeconds"]()) + ".json",
      _0x31ee92 = {
        scriptName: _0x2eadaf,
        version: _0x299c70,
        exportedAt: _0x411d03["toISOString"](),
        sampleCount: _0x58a3e9["diagnosticSamples"]["length"],
        samples: _0x58a3e9["diagnosticSamples"],
        dataSources: _0x58a3e9["dataSourceLines"],
        playbackHiddenProxyCount: Array["isArray"](_0x58a3e9["playbackHiddenProxyStates"]) ? _0x58a3e9["playbackHiddenProxyStates"]["length"] : 0x0,
        playbackHiddenProxyStates: (_0x58a3e9["playbackHiddenProxyStates"] || [])["map"](_0x547dee => ({
          layerValue: _0x547dee["layerValue"],
          layerName: _0x547dee["layerName"],
          proxyName: _0x547dee["proxyName"],
          visible: _0x547dee["visible"]
        })),
        playbackHiddenLayerCount: Array["isArray"](_0x58a3e9["playbackHiddenLayerStates"]) ? _0x58a3e9["playbackHiddenLayerStates"]["length"] : 0x0,
        playbackHiddenLayerStates: (_0x58a3e9["playbackHiddenLayerStates"] || [])["map"](_0xdc783 => ({
          layerName: _0xdc783["layerName"],
          childName: _0xdc783["childName"],
          visible: _0xdc783["visible"]
        })),
        playbackBackdropState: _0x58a3e9["playbackBackdropState"] ? {
          mapId: _0x58a3e9["playbackBackdropState"]["mapId"],
          mapUrl: _0x58a3e9["playbackBackdropState"]["mapUrl"],
          layerName: _0x58a3e9["playbackBackdropState"]["layerName"]
        } : null,
        nightmareReplayScene: _0x58a3e9["nightmareReplayScene"]
      },
      _0x4ca487 = JSON["stringify"](_0x31ee92, null, 0x2);
    return _0x13e757["downloadTextFile"](_0x104ccb, _0x4ca487), _0x104ccb;
  }
  function _0x2ab8a7() {
    _0x58a3e9["diagnosticSamples"] = [], _0x13e757["pushDataSource"]("诊断样本已清空");
  }
  function _0x427e11(_0x545070, _0x3e3b66, _0x245e4d) {
    const _0x545d13 = _0x47ea84(_0x245e4d),
      _0x1769ba = _0x572107(_0x245e4d),
      _0x1962d1 = _0x344c8c(_0x545d13),
      _0x439d43 = _0xae678d(_0x545d13),
      _0x5abb7b = _0x344c8c(_0x1769ba),
      _0x2f77dc = "nightmareStar" === _0x545070["mode"] ? function (_0x5c3082, _0x288fc6) {
        const _0x5f3e73 = _0x13e757["safeCall"](() => _0xf23a54["getConfigs"](), null),
          _0x1994b0 = _0x5f3e73 && _0x5f3e73["NightMareStarConf"] && _0x5f3e73["NightMareStarConf"]["getByBossId"] ? _0x5f3e73["NightMareStarConf"]["getByBossId"](_0x5c3082) : null,
          _0x522f3c = _0x5f3e73 && _0x5f3e73["NightMareStarConditionType"] ? _0x5f3e73["NightMareStarConditionType"] : {};
        if (!_0x1994b0 || !_0x288fc6 || !_0x288fc6["isWin"]) return {
          stars: 0x0,
          oneStar: !0x1,
          twoStar: !0x1,
          threeStar: !0x1
        };
        const _0x591524 = _0x24972c(_0x288fc6),
          _0x2508ec = _0x383601(_0x47ea84(_0x288fc6));
        let _0x3d051b = 0x0;
        const _0x3effc0 = _0x1994b0["nightMareStarConditionType"] || [],
          _0x4741d9 = _0x1994b0["nightMareStarConditionValue"] || [];
        for (let _0x1043f7 = 0x0; _0x1043f7 < _0x3effc0["length"]; _0x1043f7 += 0x1) {
          const _0x194b14 = _0x3effc0[_0x1043f7],
            _0x1eea70 = _0x4741d9[_0x1043f7] || [];
          let _0x4e91e0 = !0x1;
          if (_0x194b14 === _0x522f3c["STAR_CONDITION_ROUND"]) _0x4e91e0 = _0x591524 > 0x0 && _0x591524 <= Number(_0x1eea70[0x0] || 0x0);else {
            if (_0x194b14 === _0x522f3c["STAR_CONDITION_ROUND_HEROALIVE"]) {
              const _0x2eebe3 = Number(_0x1eea70[0x0] || 0x0),
                _0x31272a = Number(_0x1eea70[0x1] || 0x1);
              _0x4e91e0 = _0x591524 > 0x0 && _0x591524 <= _0x2eebe3 && _0x2508ec >= _0x31272a;
            }
          }
          _0x4e91e0 && (_0x3d051b += 0x1);
        }
        return {
          stars: _0x3d051b,
          oneStar: _0x3d051b >= 0x1,
          twoStar: _0x3d051b >= 0x2,
          threeStar: _0x3d051b >= 0x3
        };
      }(_0x545070["context"] && _0x545070["context"]["bossId"], _0x245e4d) : null;
    return {
      isWin: !(!_0x245e4d || !_0x245e4d["isWin"]),
      roundCount: _0x24972c(_0x245e4d),
      aliveCount: _0x383601(_0x545d13),
      remainHp: _0x1962d1,
      remainHpRate: _0x439d43 > 0x0 ? _0x1962d1 / _0x439d43 : 0x0,
      enemyRemainHp: _0x5abb7b,
      stars: _0x2f77dc,
      rawResult: _0x245e4d,
      battleData: _0x3e3b66
    };
  }
  function _0xfe5402(_0x2796a5, _0x478ca6 = null) {
    if (_0x478ca6 && _0x478ca6["battleData"] && !_0x4f54ca(_0x478ca6) && !function (_0x2e1d89) {
      if (!_0x2e1d89 || "object" != typeof _0x2e1d89) return !0x0;
      const _0x28784d = Reflect["ownKeys"](_0x2e1d89)["filter"](_0x51d095 => "string" == typeof _0x51d095);
      return !_0x28784d["length"] || _0x28784d["every"](_0x3d73e4 => "battleData" === _0x3d73e4 || "battleResult" === _0x3d73e4);
    }(_0x478ca6)) return _0x478ca6;
    if (_0x2796a5 && _0x58a3e9["modeCaches"][_0x2796a5] && _0x58a3e9["modeCaches"][_0x2796a5]["inputData"] && !_0x4f54ca(_0x58a3e9["modeCaches"][_0x2796a5]["inputData"])) return _0x58a3e9["modeCaches"][_0x2796a5]["inputData"];
    if (_0x58a3e9["latestCapture"] && _0x58a3e9["latestCapture"]["input"] && !_0x4f54ca(_0x58a3e9["latestCapture"]["input"])) return _0x58a3e9["latestCapture"]["input"];
    const _0x2329c5 = Object["keys"](_0x58a3e9["modeCaches"] || {});
    for (let _0x179974 = 0x0; _0x179974 < _0x2329c5["length"]; _0x179974 += 0x1) {
      const _0x367872 = _0x58a3e9["modeCaches"][_0x2329c5[_0x179974]];
      if (_0x367872 && _0x367872["inputData"] && !_0x4f54ca(_0x367872["inputData"])) return _0x367872["inputData"];
    }
    return null;
  }
  function _0x1f7919(_0x4e6381, _0x4973ee, _0x807074) {
    if (!_0x4e6381) return null;
    const _0x1e399a = _0x13e757["deepClone"](_0x4e6381);
    return _0x1e399a["battleData"] = _0x13e757["deepClone"](_0x4973ee), _0x1e399a["battleResult"] = _0x13e757["deepClone"](_0x807074), _0x1e399a["rawData"] && "object" == typeof _0x1e399a["rawData"] && (Object["prototype"]["hasOwnProperty"]["call"](_0x1e399a["rawData"], "battleData") && (_0x1e399a["rawData"]["battleData"] = _0x13e757["deepClone"](_0x4973ee)), Object["prototype"]["hasOwnProperty"]["call"](_0x1e399a["rawData"], "battleResult") && (_0x1e399a["rawData"]["battleResult"] = _0x13e757["deepClone"](_0x807074)), Object["prototype"]["hasOwnProperty"]["call"](_0x1e399a["rawData"], "result") && (_0x1e399a["rawData"]["result"] = _0x13e757["deepClone"](_0x807074))), _0x1e399a["battleData"] && "object" == typeof _0x1e399a["battleData"] && Object["prototype"]["hasOwnProperty"]["call"](_0x1e399a["battleData"], "result") && (_0x1e399a["battleData"]["result"] = _0x13e757["deepClone"](_0x807074)), _0x1e399a;
  }
  function _0x25acce(_0x1f2b4a) {
    return _0x13e757["safeCall"](() => _0x1f2b4a["fightNotify"]["roomInfo"]["rule"], null) || _0x13e757["safeCall"](() => _0x1f2b4a["roomInfo"]["rule"], null) || null;
  }
  function _0xc47482(_0x5f5cc0, _0x37af2c = null) {
    const _0x2c4a43 = _0x25acce(_0x5f5cc0);
    if (_0x5f5cc0 && "object" == typeof _0x5f5cc0 && Object["prototype"]["hasOwnProperty"]["call"](_0x5f5cc0, "nM")) {
      const _0x1a556b = Number(_0x5f5cc0["nM"]);
      if (Number["isFinite"](_0x1a556b)) return _0x1a556b;
    }
    if (_0x2c4a43 && "object" == typeof _0x2c4a43 && Object["prototype"]["hasOwnProperty"]["call"](_0x2c4a43, "nM")) {
      const _0x9af04b = Number(_0x2c4a43["nM"]);
      if (Number["isFinite"](_0x9af04b)) return _0x9af04b;
    }
    return _0x37af2c;
  }
  function _0x197dff(_0x56a83c) {
    const _0x28f005 = _0x25acce(_0x56a83c),
      _0x5cef3b = _0x4bb397(_0x56a83c || {}, ["clientRoleNum"], null);
    if (null != _0x5cef3b) return _0x5cef3b;
    const _0x2db593 = _0x4bb397(_0x28f005 || {}, ["clientRoleNum"], null);
    return null != _0x2db593 ? _0x2db593 : 0xc9;
  }
  function _0xcf1cc4(_0x58d147) {
    if (!_0x58d147 || !_0x58d147["battleData"]) return !0x1;
    return "pKRoom" === _0xb65e70(_0xf23a54["getBattleModeName"](_0x58d147["battleData"]["mode"])) && (null != _0xc47482(_0x58d147, null) || 0xc9 === _0x197dff(_0x58d147));
  }
  function _0x304e8b(_0x238743, _0xbab0f4 = null) {
    const _0x1902d8 = _0x4bb397(_0x238743 || {}, ["hallNumber"], null) || _0x13e757["safeCall"](() => _0x28ae46(_0x238743 && _0x238743["bossId"])["hallNumber"], null);
    if (null != _0x1902d8) return Math["max"](0x0, Number(_0x1902d8) - 0x1);
    const _0x2805e = _0xc47482(_0xbab0f4, null);
    return null != _0x2805e ? _0x2805e : 0x0;
  }
  function _0x44b836(_0x488f42, _0x7d18e9, _0x4e5492, _0x56a244 = null) {
    const _0x5e8539 = _0x13e757["safeCall"](() => _0x56a244["fightNotify"], null),
      _0x3e3682 = _0x13e757["safeCall"](() => _0x5e8539["roomInfo"], null),
      _0x2e3e7f = _0x13e757["deepClone"](_0x5e8539 || {}),
      _0x4bf20d = _0x13e757["deepClone"](_0x3e3682 || {}),
      _0x57936c = _0x28ae46(_0x4bb397(_0x488f42 || {}, ["bossId"], null)) || _0x41edc4(_0x4bb397(_0x488f42 || {}, ["monsterCfgId"], null)) || _0x41edc4(_0x4bb397(_0x4bf20d, ["curMonsterCfgId", "lastMonsterId"], null)),
      _0x2498cc = _0x57936c ? Number(_0x57936c["bossId"]) : _0x4bb397(_0x488f42 || {}, ["bossId"], _0x4bb397(_0x2e3e7f, ["bossCfgId", "bossId"], null)),
      _0x371537 = _0x57936c ? Number(_0x57936c["legionBossShow"] || _0x57936c["monsterIds"] && _0x57936c["monsterIds"][0x0] || 0x0) : _0x4bb397(_0x488f42 || {}, ["monsterCfgId"], _0x4bb397(_0x4bf20d, ["curMonsterCfgId", "lastMonsterCfgId", "lastMonsterId"], null)),
      _0x3567d6 = _0x4bb397(_0x4bf20d, ["leftRoleId"], Number(_0x13e757["safeCall"](() => _0x7d18e9["leftTeam"]["roleId"], 0x0)) || 0x0),
      _0x5452a3 = _0x4bb397(_0x4bf20d, ["rightRoleId"], Number(_0x13e757["safeCall"](() => _0x7d18e9["rightTeam"]["roleId"], 0x0)) || 0x1);
    return _0x4bf20d["roomId"] = null != _0x4bf20d["roomId"] ? _0x4bf20d["roomId"] : "", _0x4bf20d["roomName"] = null != _0x4bf20d["roomName"] ? _0x4bf20d["roomName"] : "", _0x4bf20d["roomType"] = _0x4bb397(_0x4bf20d, ["roomType"], 0x0), _0x4bf20d["state"] = _0x4bb397(_0x4bf20d, ["state"], 0x1), _0x4bf20d["leaderId"] = _0x4bb397(_0x4bf20d, ["leaderId"], 0x0), _0x4bf20d["createAt"] = _0x4bb397(_0x4bf20d, ["createAt"], 0x0), _0x4bf20d["lastFightAt"] = Math["floor"](Date["now"]() / 0x3e8), _0x4bf20d["nextOperateAt"] = _0x4bb397(_0x4bf20d, ["nextOperateAt"], 0x0), _0x4bf20d["leftRoleId"] = _0x3567d6, _0x4bf20d["rightRoleId"] = _0x5452a3, _0x4bf20d["round"] = _0x4bb397(_0x4bf20d, ["round"], 0x0), _0x4bf20d["matchRound"] = _0x4bb397(_0x4bf20d, ["matchRound"], 0x0), _0x4bf20d["matchIndex"] = _0x4bb397(_0x4bf20d, ["matchIndex"], 0x0), _0x4bf20d["innings"] = _0x4bb397(_0x4bf20d, ["innings"], 0x1), _0x4bf20d["curMonsterCfgId"] = _0x4bb397(_0x4bf20d, ["curMonsterCfgId"], _0x371537), _0x4bf20d["lastMonsterCfgId"] = _0x4bb397(_0x4bf20d, ["lastMonsterCfgId"], _0x371537), _0x4bf20d["lastMonsterId"] = _0x4bb397(_0x4bf20d, ["lastMonsterId"], _0x2498cc), _0x4bf20d["bossCfgId"] = _0x4bb397(_0x4bf20d, ["bossCfgId"], _0x2498cc), _0x4bf20d["rule"] && "object" == typeof _0x4bf20d["rule"] || (_0x4bf20d["rule"] = {}), _0x4bf20d["rule"]["groupType"] = _0x4bb397(_0x4bf20d["rule"], ["groupType"], 0x0), _0x4bf20d["rule"]["clientRoleNum"] = _0x4bb397(_0x4bf20d["rule"], ["clientRoleNum"], _0x197dff(_0x56a244)), _0x4bf20d["rule"]["bagStrength"] = _0x4bb397(_0x4bf20d["rule"], ["bagStrength"], 0x0), _0x4bf20d["rule"]["nM"] = _0x304e8b(_0x488f42, _0x56a244), _0x2e3e7f["roomInfo"] = _0x4bf20d, _0x2e3e7f["attackRoleId"] = _0x3567d6, _0x2e3e7f["defendRoleId"] = _0x5452a3, _0x2e3e7f["roleId"] = _0x4bb397(_0x2e3e7f, ["roleId"], _0x3567d6), _0x2e3e7f["bossCfgId"] = _0x4bb397(_0x2e3e7f, ["bossCfgId"], _0x2498cc), _0x2e3e7f["bossId"] = _0x4bb397(_0x2e3e7f, ["bossId"], _0x2498cc), _0x2e3e7f["monsterCfgId"] = _0x4bb397(_0x2e3e7f, ["monsterCfgId"], _0x371537), _0x2e3e7f["nextAttackRoleId"] = 0x0, _0x2e3e7f["nextDefendRoleId"] = 0x0, _0x2e3e7f["attackScore"] = _0x4e5492 && _0x4e5492["isWin"] ? 0x1 : 0x0, _0x2e3e7f["defendScore"] = _0x4e5492 && _0x4e5492["isWin"] ? 0x0 : 0x1, _0x2e3e7f["winRid"] = _0x4e5492 && _0x4e5492["isWin"] ? _0x3567d6 : _0x5452a3, _0x2e3e7f["innings"] = _0x4bb397(_0x2e3e7f, ["innings"], _0x4bf20d["innings"] || 0x1), _0x2e3e7f["isInningsEnd"] = !0x0, _0x2e3e7f["isMatchEnd"] = !0x0, _0x2e3e7f["isRoundEnd"] = !0x0, _0x2e3e7f["battleData"] = _0x13e757["deepClone"](_0x7d18e9), _0x2e3e7f["battleData"] && "object" == typeof _0x2e3e7f["battleData"] && (_0x2e3e7f["battleData"]["result"] = _0x13e757["deepClone"](_0x4e5492)), _0x2e3e7f;
  }
  function _0x46df90(_0x425cd9, _0x1ea805, _0x4ed6ff, _0x5407f5, _0x1d8775 = null) {
    const _0xff3770 = _0x425cd9 || {},
      _0x272ea6 = _0x1d8775 || _0xff3770,
      _0x2bc36b = _0x44b836(_0x1ea805, _0x4ed6ff, _0x5407f5, _0x272ea6);
    return _0xff3770["roomType"] = _0x4bb397(_0xff3770, ["roomType"], _0x4bb397(_0x2bc36b["roomInfo"] || {}, ["roomType"], 0x0)), _0xff3770["groupType"] = _0x4bb397(_0xff3770, ["groupType"], _0x4bb397(_0x2bc36b["roomInfo"] && _0x2bc36b["roomInfo"]["rule"] ? _0x2bc36b["roomInfo"]["rule"] : {}, ["groupType"], 0x0)), _0xff3770["clientRoleNum"] = _0x4bb397(_0xff3770, ["clientRoleNum"], _0x197dff(_0x272ea6)), _0xff3770["bagStrength"] = _0x4bb397(_0xff3770, ["bagStrength"], _0x4bb397(_0x2bc36b["roomInfo"] && _0x2bc36b["roomInfo"]["rule"] ? _0x2bc36b["roomInfo"]["rule"] : {}, ["bagStrength"], 0x0)), _0xff3770["roleId"] = _0x4bb397(_0xff3770, ["roleId"], _0x4bb397(_0x2bc36b, ["roleId"], 0x0)), _0xff3770["bossCfgId"] = _0x4bb397(_0xff3770, ["bossCfgId"], _0x4bb397(_0x2bc36b, ["bossCfgId"], null)), _0xff3770["bossId"] = _0x4bb397(_0xff3770, ["bossId"], _0x4bb397(_0x2bc36b, ["bossId"], null)), _0xff3770["curMonsterCfgId"] = _0x4bb397(_0xff3770, ["curMonsterCfgId"], _0x4bb397(_0x2bc36b["roomInfo"] || {}, ["curMonsterCfgId"], null)), _0xff3770["lastMonsterId"] = _0x4bb397(_0xff3770, ["lastMonsterId"], _0x4bb397(_0x2bc36b["roomInfo"] || {}, ["lastMonsterId"], null)), _0xff3770["nM"] = _0x304e8b(_0x1ea805, _0x272ea6), _0xff3770["valid"] = !0x1 !== _0xff3770["valid"], _0xff3770["ignoreResult"] = !0x1, _0xff3770["isReplay"] = !0x1, _0xff3770["robotReplay"] = !0x1, null == _0xff3770["mapId"] && (_0xff3770["mapId"] = 0x0), _0xff3770["showRightPower"] = Number(_0x13e757["safeCall"](() => _0x4ed6ff["rightTeam"]["power"], _0xff3770["showRightPower"] || 0x0)) || 0x0, _0xff3770["showRightLevel"] = _0x53eff9(_0x13e757["safeCall"](() => _0x4ed6ff["rightTeam"]["team"], null)) || Number(_0xff3770["showRightLevel"] || 0x0), null == _0xff3770["robotMaxDamage"] && (_0xff3770["robotMaxDamage"] = 0x0), null == _0xff3770["robotMaxDamageTime"] && (_0xff3770["robotMaxDamageTime"] = Date["now"]()), Array["isArray"](_0xff3770["replayPlayerInfo"]) || (_0xff3770["replayPlayerInfo"] = []), _0xff3770["battleData"] = _0x13e757["deepClone"](_0x4ed6ff), _0xff3770["battleResult"] = _0x13e757["deepClone"](_0x5407f5), _0xff3770["fightNotify"] = _0x2bc36b, _0xff3770["rawData"] && "object" == typeof _0xff3770["rawData"] && (Object["prototype"]["hasOwnProperty"]["call"](_0xff3770["rawData"], "battleData") && (_0xff3770["rawData"]["battleData"] = _0x13e757["deepClone"](_0x4ed6ff)), Object["prototype"]["hasOwnProperty"]["call"](_0xff3770["rawData"], "battleResult") && (_0xff3770["rawData"]["battleResult"] = _0x13e757["deepClone"](_0x5407f5)), Object["prototype"]["hasOwnProperty"]["call"](_0xff3770["rawData"], "result") && (_0xff3770["rawData"]["result"] = _0x13e757["deepClone"](_0x5407f5))), _0xff3770;
  }
  function _0x14e051(_0x5b9868, _0x35353d, _0x538898, _0x125783) {
    if (!_0x5b9868 || "object" != typeof _0x5b9868 || "function" != typeof _0x125783) return "function" == typeof _0x125783 ? _0x125783(!0x1) : null;
    const _0x32a23f = Object["prototype"]["hasOwnProperty"]["call"](_0x5b9868, _0x35353d),
      _0x85e40c = _0x32a23f ? Object["getOwnPropertyDescriptor"](_0x5b9868, _0x35353d) : null;
    let _0x1803d3 = !0x1;
    try {
      Object["defineProperty"](_0x5b9868, _0x35353d, {
        configurable: !0x0,
        enumerable: !_0x85e40c || !!_0x85e40c["enumerable"],
        writable: !0x0,
        value: _0x538898
      }), _0x1803d3 = !0x0;
    } catch (_0x1bf463) {
      _0x1803d3 = !0x1;
    }
    try {
      return _0x125783(_0x1803d3);
    } finally {
      _0x1803d3 && (_0x32a23f && _0x85e40c ? Object["defineProperty"](_0x5b9868, _0x35353d, _0x85e40c) : delete _0x5b9868[_0x35353d]);
    }
  }
  function _0x2f3182(_0x18b1ff, _0x1054bc, _0x6449d5, _0x30045c = null) {
    const _0x8b6f01 = function (_0xd6b881 = null) {
        const _0x1e7193 = [_0xd6b881, _0x13e757["safeCall"](() => _0x58a3e9["modeCaches"]["nightmare"]["inputData"], null), _0x13e757["safeCall"](() => _0x58a3e9["latestCapture"]["input"], null), _0x13e757["safeCall"](() => _0x58a3e9["lastSingleRun"]["replayInput"], null), _0x13e757["safeCall"](() => _0x58a3e9["lastReport"]["replayInput"], null)];
        for (let _0x19db9c = 0x0; _0x19db9c < _0x1e7193["length"]; _0x19db9c += 0x1) if (_0xcf1cc4(_0x1e7193[_0x19db9c])) return _0x1e7193[_0x19db9c];
        const _0x5ef206 = Object["keys"](_0x58a3e9["modeCaches"] || {});
        for (let _0xa0c4e4 = 0x0; _0xa0c4e4 < _0x5ef206["length"]; _0xa0c4e4 += 0x1) {
          const _0x1a5572 = _0x13e757["safeCall"](() => _0x58a3e9["modeCaches"][_0x5ef206[_0xa0c4e4]]["inputData"], null);
          if (_0xcf1cc4(_0x1a5572)) return _0x1a5572;
        }
        return null;
      }(_0x30045c),
      _0x140199 = function (_0x5a40ef, _0xc5f31c) {
        const _0x2b8adc = _0x13e757["deepClone"](_0x5a40ef || {}),
          _0x8b13eb = _0x13e757["safeCall"](() => _0xf23a54["getBattleModeValue"]("pKRoom"), null);
        return null != _0x8b13eb && (_0x2b8adc["mode"] = _0x8b13eb), _0x2b8adc["result"] = _0x13e757["deepClone"](_0xc5f31c), _0x2b8adc;
      }(_0x1054bc, _0x6449d5);
    if (_0x8b6f01) return _0x46df90(_0x1f7919(_0x8b6f01, _0x140199, _0x6449d5) || {
      battleData: _0x13e757["deepClone"](_0x140199),
      battleResult: _0x13e757["deepClone"](_0x6449d5)
    }, _0x18b1ff, _0x140199, _0x6449d5, _0x8b6f01);
    const _0x123fda = _0x13e757["safeCall"](() => _0xf23a54["getModuleByTypeKey"]("BATTLE_ROOM"), null);
    if (_0x123fda && "function" == typeof _0x123fda["createBattleInputData"]) {
      const _0xb07959 = _0x13e757["safeCall"](() => _0x123fda["cacheData"], null),
        _0x317f48 = _0x44b836(_0x18b1ff, _0x140199, _0x6449d5, _0x8b6f01),
        _0x5b79b4 = _0x13e757["deepClone"](_0x317f48["roomInfo"]),
        _0x533015 = function (_0x5ef359, _0x2924ba, _0x131b23 = null) {
          const _0xb0cf72 = _0x13e757["deepClone"](_0x5ef359 && "object" == typeof _0x5ef359 ? _0x5ef359 : {}) || {};
          _0xb0cf72["cachedPKRoom"] && "object" == typeof _0xb0cf72["cachedPKRoom"] || (_0xb0cf72["cachedPKRoom"] = {});
          const _0x2c3dae = _0xb0cf72["cachedPKRoom"],
            _0x39b3d1 = _0x13e757["deepClone"](_0x13e757["safeCall"](() => _0x2924ba["roomInfo"], null) || {}),
            _0x544c57 = _0x39b3d1 && "object" == typeof _0x39b3d1["rule"] ? _0x39b3d1["rule"] : {};
          return _0x2c3dae["roomInfo"] = _0x39b3d1, _0x2c3dae["matchIndex"] = _0x4bb397(_0x2c3dae, ["matchIndex"], _0x4bb397(_0x39b3d1, ["matchIndex"], 0x0)), _0x2c3dae["roomType"] = _0x4bb397(_0x2c3dae, ["roomType"], _0x4bb397(_0x39b3d1, ["roomType"], _0x4bb397(_0x131b23 || {}, ["roomType"], 0x0))), _0x2c3dae["groupType"] = _0x4bb397(_0x2c3dae, ["groupType"], _0x4bb397(_0x544c57, ["groupType"], _0x4bb397(_0x131b23 || {}, ["groupType"], 0x0))), _0x2c3dae["clientRoleNum"] = _0x4bb397(_0x2c3dae, ["clientRoleNum"], _0x4bb397(_0x544c57, ["clientRoleNum"], _0x197dff(_0x131b23))), _0x2c3dae["bagStrength"] = _0x4bb397(_0x2c3dae, ["bagStrength"], _0x4bb397(_0x544c57, ["bagStrength"], _0x4bb397(_0x131b23 || {}, ["bagStrength"], 0x0))), _0x2c3dae["nM"] = _0x4bb397(_0x2c3dae, ["nM"], _0x4bb397(_0x544c57, ["nM"], _0xc47482(_0x131b23, 0x0))), _0xb0cf72;
        }(_0xb07959, _0x317f48, _0x8b6f01),
        _0x145db9 = _0x14e051(_0x123fda, "roomInfo", _0x5b79b4, () => function (_0x370f92, _0x19ad23, _0x53c162) {
          return _0x14e051(_0x370f92, "cacheData", _0x19ad23, _0x95da2b => {
            if (_0x95da2b) return "function" == typeof _0x53c162 ? _0x53c162(!0x0) : null;
            const _0x2c9a50 = _0x13e757["safeCall"](() => _0x370f92["cacheData"], null);
            if (!_0x2c9a50 || "object" != typeof _0x2c9a50) return "function" == typeof _0x53c162 ? _0x53c162(!0x1) : null;
            const _0x1d4be9 = Object["prototype"]["hasOwnProperty"]["call"](_0x2c9a50, "cachedPKRoom"),
              _0x54745a = _0x13e757["deepClone"](_0x2c9a50["cachedPKRoom"]);
            _0x2c9a50["cachedPKRoom"] = _0x13e757["deepClone"](_0x19ad23 && "object" == typeof _0x19ad23 ? _0x19ad23["cachedPKRoom"] : null);
            try {
              return "function" == typeof _0x53c162 ? _0x53c162(!0x0) : null;
            } finally {
              _0x1d4be9 ? _0x2c9a50["cachedPKRoom"] = _0x54745a : delete _0x2c9a50["cachedPKRoom"];
            }
          });
        }(_0x123fda, _0x533015, () => _0x13e757["safeCall"](() => _0x123fda["createBattleInputData"](_0x317f48, !0x0), null)));
      if (_0x145db9) return _0x46df90(_0x145db9, _0x18b1ff, _0x140199, _0x6449d5, _0x8b6f01);
    }
    return _0x1dea53(_0x1054bc, _0x6449d5, "nightmare", _0x30045c);
  }
  function _0x975e94(_0x518047) {
    const _0x4cb652 = [_0x518047 && _0x518047["reward"], _0x518047 && _0x518047["rewards"], _0x518047 && _0x518047["rawData"] && _0x518047["rawData"]["reward"], _0x518047 && _0x518047["rawData"] && _0x518047["rawData"]["rewards"], _0x518047 && _0x518047["data"] && _0x518047["data"]["reward"], _0x518047 && _0x518047["data"] && _0x518047["data"]["rewards"], _0x518047 && _0x518047["__nonPvpPlaybackMeta"] && _0x518047["__nonPvpPlaybackMeta"]["rewards"]];
    for (let _0x449e63 = 0x0; _0x449e63 < _0x4cb652["length"]; _0x449e63 += 0x1) if (Array["isArray"](_0x4cb652[_0x449e63])) return _0x13e757["deepClone"](_0x4cb652[_0x449e63]);
    const _0xbf923f = _0x35f70e(_0x518047 && _0x518047["options"], "rewards", []);
    return Array["isArray"](_0xbf923f) ? _0x13e757["deepClone"](_0xbf923f) : [];
  }
  function _0x34c547(_0x5e8035, _0x50fc4f, _0x4a1891, _0x230c96 = "") {
    const _0x54295e = _0x5e8035 || {};
    return !_0x54295e["battleData"] && _0x50fc4f && (_0x54295e["battleData"] = _0x13e757["deepClone"](_0x50fc4f)), !_0x54295e["battleResult"] && _0x4a1891 && (_0x54295e["battleResult"] = _0x13e757["deepClone"](_0x4a1891)), _0x5b6389(_0x55d995(_0x54295e), "isReplay", !0x0), _0x54295e["battleEnd"] = function (_0x4a5097 = "") {
      return async function (_0x3ca4db, _0x484e45, _0x650455, _0x483105 = !0x1) {
        const _0x5be116 = _0x3ca4db && _0x3ca4db["battleResult"] && Number(_0x3ca4db["battleResult"]["totalFrame"] || 0x0) > 0x0 ? _0x3ca4db["battleResult"] : _0x484e45;
        _0x3ca4db && (_0x3ca4db["battleResult"] = _0x13e757["deepClone"](_0x5be116), _0x3ca4db["battleData"] && "object" == typeof _0x3ca4db["battleData"] && (_0x3ca4db["battleData"]["result"] = _0x13e757["deepClone"](_0x5be116)), _0x5b6389(_0x55d995(_0x3ca4db), "isReplay", !!_0x483105));
        const _0xf4de59 = _0x975e94(_0x3ca4db),
          _0x52b2f3 = _0x13e757["safeCall"](() => _0xf23a54["getBattleUIManager"](), null),
          _0x4cd1fb = _0x13e757["safeCall"](() => _0xf23a54["getManagerFactory"](), null);
        let _0x34bbe4 = !0x1,
          _0x7be7f = null;
        const _0x349c07 = () => {
            _0x7be7f && (clearTimeout(_0x7be7f), _0x7be7f = null);
          },
          _0x1601f4 = (_0x529753, _0x14dd2e = 0x5dc) => {
            _0x349c07(), _0x7be7f = setTimeout(() => {
              _0x13e757["pushDataSource"]("managed battleEnd fallback finalize " + (_0x505384[_0x4a5097] || _0x4a5097 || "capture") + " / reason=" + _0x529753), _0x3c86f9();
            }, _0x14dd2e);
          },
          _0x3c86f9 = () => {
            _0x34bbe4 || (_0x34bbe4 = !0x0, _0x349c07(), _0x4cd1fb && "function" == typeof _0x4cd1fb["QUIT_BATTLE"] && _0x3ca4db && _0x13e757["safeCall"](() => _0x4cd1fb["QUIT_BATTLE"](_0x3ca4db), null), _0x650455 && "function" == typeof _0x650455["close"] && _0x13e757["safeCall"](() => _0x650455["close"](), null), _0x11ad81("battleEnd:" + (_0x4a5097 || "capture")));
          };
        _0x13e757["pushDataSource"]("managed battleEnd " + (_0x505384[_0x4a5097] || _0x4a5097 || "capture") + " / replay=" + (_0x483105 ? "1" : "0"));
        try {
          if (_0x52b2f3 && "function" == typeof _0x52b2f3["SHOW_BATTLE_RESULT"] && _0x3ca4db && _0x5be116) return _0x1601f4("showResultStart", 0x1f40), await Promise["resolve"](_0x52b2f3["SHOW_BATTLE_RESULT"]({
            battleInputData: _0x3ca4db,
            battleResultData: _0x5be116,
            reward: _0xf4de59,
            hookOnHide: _0x3c86f9
          })), void (_0x34bbe4 || _0x1601f4("showResultResolvedNoHide", 0x4b0));
        } catch (_0x35a61e) {
          _0x13e757["warn"]("managed replay battleEnd failed", _0x35a61e);
        }
        _0x3c86f9();
      };
    }(_0x230c96), _0x4a0e85(_0x54295e, "ensureReplayInputRuntimeFields:" + (_0x230c96 || "capture"), {
      modeKey: _0x230c96 || ""
    });
  }
  function _0x5280ce(_0x4e99fe, _0x2de0e8 = "") {
    const _0x378854 = _0x4e99fe || {};
    return "tower" !== _0x2de0e8 && "evoTower" !== _0x2de0e8 || (null != _0x378854["endTime"] && (_0x378854["endTime"] = void 0x0), "evoTower" === _0x2de0e8 && _0x5b6389(_0x55d995(_0x378854), "evoTowerAutoBattle", 0x0)), "nightmareStar" !== _0x2de0e8 && "nightmare" !== _0x2de0e8 || (_0x378854["mapId"] = 0x186a1), _0x378854;
  }
  function _0x2153a3(_0x3256c9, _0x538760, _0x1317fb, _0x1c801b, _0x3de856) {
    if (!_0x1c801b || !_0x1c801b["battleData"]) throw new Error("当前玩法还没有可用的权威 battleData");
    return {
      mode: _0x3256c9,
      label: _0x505384[_0x3256c9] || _0x3256c9,
      context: _0x13e757["deepClone"](_0x538760 || {}),
      capability: _0x1317fb,
      notes: [],
      cache: _0x1c801b,
      buildBattleData(_0x48fa22, _0xe27848) {
        const _0x4065ea = _0x13e757["deepClone"](_0x1c801b["battleData"]);
        return _0x4065ea["id"] = Date["now"]() + _0xe27848, _0x4065ea["randomSeed"] = _0xe27848, _0x35a353(_0x4065ea, _0x48fa22), _0x27cb40(_0x4065ea), _0x4065ea;
      },
      buildReplayInput: (_0x28ac60, _0x233749, _0x425be3) => "function" == typeof _0x3de856 ? _0x3de856(_0x1c801b, _0x233749, _0x28ac60, _0x425be3) : _0x1dea53(_0x233749, _0x28ac60, _0x3256c9, _0x1c801b["inputData"] || _0x58a3e9["latestCapture"] && _0x58a3e9["latestCapture"]["input"])
    };
  }
  function _0x1dea53(_0x1e3654, _0x1083ea, _0x1d210c = "", _0x276ae6 = null) {
    const _0xf38e6d = _0x1f7919(_0xfe5402(_0x1d210c, _0x276ae6), _0x1e3654, _0x1083ea);
    return _0x5280ce(_0x34c547(_0xf38e6d || {
      battleData: _0x13e757["deepClone"](_0x1e3654),
      battleResult: _0x13e757["deepClone"](_0x1083ea)
    }, _0x1e3654, _0x1083ea, _0x1d210c), _0x1d210c);
  }
  function _0x774e29(_0x31fbef, _0xcdca2 = "", _0x2a11bf = !0x1) {
    const _0x5ed382 = _0x5280ce(_0x31fbef || {}, _0xcdca2);
    return _0x5b6389(_0x55d995(_0x5ed382), "isReplay", !!_0x2a11bf), _0x4a0e85(_0x5ed382, "replayLaunch:" + (_0xcdca2 || "capture"), {
      preferReplayUI: !!_0x2a11bf
    });
  }
  function _0x175fff(_0x2f64df, _0x23f57a, _0x39956d, _0x17be52, _0x2ccf2a) {
    return {
      mode: _0x2f64df,
      label: _0x505384[_0x2f64df] || _0x2f64df,
      context: _0x13e757["deepClone"](_0x23f57a || {}),
      capability: _0x39956d,
      notes: ["preview"],
      buildBattleData: (_0x1405f7, _0x2a355a) => _0x17be52(_0x1405f7, _0x2a355a),
      buildReplayInput: (_0x338198, _0x386cc4, _0x914eed) => "function" == typeof _0x2ccf2a ? _0x2ccf2a(_0x338198, _0x386cc4, _0x914eed) : _0x1dea53(_0x386cc4, _0x338198, _0x2f64df)
    };
  }
  function _0x20c2cb(_0x3aa5e8, _0x2ec56b) {
    if (!_0x3aa5e8 || null == _0x2ec56b) return null;
    if ("function" == typeof _0x3aa5e8["getById"]) {
      const _0x10f1e1 = _0x13e757["safeCall"](() => _0x3aa5e8["getById"](_0x2ec56b), null);
      if (_0x10f1e1) return _0x10f1e1;
    }
    return null != _0x3aa5e8[_0x2ec56b] ? _0x3aa5e8[_0x2ec56b] : null != _0x3aa5e8[String(_0x2ec56b)] ? _0x3aa5e8[String(_0x2ec56b)] : Array["isArray"](_0x3aa5e8["list"]) && _0x3aa5e8["list"]["find"](_0x44ce89 => Number(_0x44ce89 && (null != _0x44ce89["id"] ? _0x44ce89["id"] : _0x44ce89["ID"])) === Number(_0x2ec56b)) || null;
  }
  function _0x458f53(..._0x361256) {
    const _0x43422f = _0x13e757["safeCall"](() => _0xf23a54["getConfigs"](), null);
    if (!_0x43422f) return null;
    for (let _0x13abb7 = 0x0; _0x13abb7 < _0x361256["length"]; _0x13abb7 += 0x1) {
      const _0x386923 = _0x43422f[_0x361256[_0x13abb7]];
      if (_0x386923) return _0x386923;
    }
    return null;
  }
  function _0x487691(_0x4b5b9e) {
    if (!_0x4b5b9e) return [];
    if (Array["isArray"](_0x4b5b9e["list"])) return _0x4b5b9e["list"]["filter"](_0x1373e1 => _0x1373e1 && "object" == typeof _0x1373e1);
    if ("function" == typeof _0x4b5b9e["forEach"]) {
      const _0x3c5e4e = [];
      if (_0x13e757["safeCall"](() => _0x4b5b9e["forEach"](_0x4af4b1 => {
        _0x4af4b1 && "object" == typeof _0x4af4b1 && _0x3c5e4e["push"](_0x4af4b1);
      }), null), _0x3c5e4e["length"]) return _0x3c5e4e;
    }
    return Object["keys"](_0x4b5b9e)["map"](_0x4219e8 => _0x4b5b9e[_0x4219e8])["filter"](_0x5647ee => _0x5647ee && "object" == typeof _0x5647ee && !Array["isArray"](_0x5647ee));
  }
  function _0x43cfc7(_0x50cc97) {
    const _0x552168 = _0x13e757["safeCall"](() => _0xf23a54["getConfigs"](), null);
    return _0x552168 ? Object["keys"](_0x552168)["filter"](_0x374e79 => _0x50cc97(_0x374e79, _0x552168[_0x374e79]))["map"](_0x47de00 => ({
      name: _0x47de00,
      table: _0x552168[_0x47de00]
    })) : [];
  }
  function _0x3a749b(_0x27c801) {
    const _0x58ac11 = _0x43cfc7((_0x8df342, _0x33ea76) => !!(_0x8df342 && _0x33ea76 && _0x8df342["includes"](_0x27c801)) && _0x487691(_0x33ea76)["length"] > 0x0);
    return _0x58ac11["length"] ? _0x58ac11[0x0]["table"] : null;
  }
  function _0x5bbe36(_0x2ec3c7, _0x20efda, _0x3bfc5f, _0x1a9e83 = 0x0) {
    if (0x9 !== Number(_0x2ec3c7 || 0x0)) {
      const _0x4d19aa = Number(_0x1a9e83 || 0x0);
      return Number["isFinite"](_0x4d19aa) && _0x4d19aa > 0x0 ? _0x4d19aa : 0x0;
    }
    const _0x1baf8b = Number(_0x20efda || 0x0);
    if (0xb === _0x1baf8b) return 0x1;
    if (0xc === _0x1baf8b) return 0x2;
    const _0x1ca42f = Number(_0x3bfc5f || 0x0);
    if (0x1 === _0x1ca42f) return 0x1;
    if (0x0 === _0x1ca42f) return 0x2;
    const _0x143939 = Number(_0x1a9e83 || 0x0);
    return Number["isFinite"](_0x143939) && _0x143939 > 0x0 ? _0x143939 : 0x0;
  }
  function _0x546e4c(_0x279c61, _0x192640 = 0x0) {
    if (!_0x279c61) return null;
    const _0x2500a5 = Number(_0x279c61["bossId"] || 0x0),
      _0xe453ee = Number(_0x279c61["hallNumber"] || 0x0);
    if (!Number["isFinite"](_0x2500a5) || _0x2500a5 <= 0x0 || !Number["isFinite"](_0xe453ee) || _0xe453ee <= 0x0) return null;
    const _0x1d5fec = _0x5bbe36(_0xe453ee, _0x2500a5, _0x279c61["hidden"], _0x192640),
      _0x4c4718 = _0x279c61["displayName"] || _0x279c61["description"] || "",
      _0x3e643b = function (_0x50be29, _0x10ece5) {
        const _0x3d5f9c = Number(_0x50be29 || 0x0);
        return !Number["isFinite"](_0x3d5f9c) || _0x3d5f9c <= 0x0 ? "十殿试炼" : 0x9 === _0x3d5f9c && Number(_0x10ece5 || 0x0) > 0x0 ? 0x1 === Number(_0x10ece5) ? "第9殿 一形态" : 0x2 === Number(_0x10ece5) ? "第9殿 二形态" : "第9殿 形态" + _0x10ece5 : "第" + _0x3d5f9c + "殿";
      }(_0xe453ee, _0x1d5fec);
    return _0x535f57(_0x2500a5, _0x4c4718 ? "十殿试炼" + _0x3e643b + " - " + _0x4c4718 : "十殿试炼" + _0x3e643b, {
      rank: _0xe453ee,
      displayNumber: _0xe453ee,
      displayText: _0x1d5fec > 0x0 ? _0xe453ee + "-" + _0x1d5fec : "" + _0xe453ee,
      sortValue: _0x1d5fec > 0x0 ? 0xa * _0xe453ee + _0x1d5fec : _0xe453ee,
      hidden: _0x279c61["hidden"],
      phaseIndex: _0x1d5fec
    });
  }
  function _0x5f28c3() {
    return _0x487691(_0x458f53("NightMareMonster") || _0x3a749b("NightMareMonster"))["map"]((_0x2d8c48, _0x431cfa) => {
      const _0x993365 = _0x4bb397(_0x2d8c48, ["bossId", "id", "ID"], null),
        _0x4efab5 = _0x4bb397(_0x2d8c48, ["bossType", "roomId", "room", "idx", "index", "order"], _0x431cfa + 0x1);
      if (null == _0x993365 || null == _0x4efab5) return null;
      const _0x2c4eac = _0x4bb397(_0x2d8c48, ["hidden"], 0x0),
        _0x56e54b = _0x4bb397(_0x2d8c48, ["legionBossShow"], null),
        _0x59fccf = _0x5d2ec0(_0x2d8c48["monsters"] || _0x2d8c48["monster"] || _0x2d8c48["enemyMonsters"] || _0x2d8c48["fightTeam"] || []),
        _0x4bb848 = Array["isArray"](_0x2d8c48["monsters"]) ? _0x2d8c48["monsters"]["map"](_0x4aa6ab => Array["isArray"](_0x4aa6ab) ? Number(_0x4aa6ab[0x0] || 0x0) : 0x0)["filter"](_0x2a5acb => Number["isFinite"](_0x2a5acb) && _0x2a5acb > 0x0) : [],
        _0x80a8dc = _0x5d5d5f(_0x2d8c48, ["maskName", "name", "title"], ""),
        _0x19b961 = _0x3daf87(_0x20a697(_0x5d5d5f(_0x2d8c48, ["bossDescription", "description"], ""), ""));
      return {
        bossId: _0x993365,
        hallNumber: _0x4efab5,
        hidden: _0x2c4eac,
        phaseIndex: _0x5bbe36(_0x4efab5, _0x993365, _0x2c4eac, 0x0),
        legionBossShow: _0x56e54b,
        monsters: _0x59fccf,
        monsterIds: _0x4bb848,
        displayName: _0x80a8dc || _0x19b961 || "",
        description: _0x19b961,
        raw: _0x2d8c48
      };
    })["filter"](Boolean);
  }
  function _0x28ae46(_0x1ccd80) {
    const _0x3a9e6c = Number(_0x1ccd80 || 0x0);
    return !Number["isFinite"](_0x3a9e6c) || _0x3a9e6c <= 0x0 ? null : _0x5f28c3()["find"](_0xd42913 => Number(_0xd42913["bossId"]) === _0x3a9e6c) || null;
  }
  function _0x41edc4(_0x2d10c7) {
    const _0x266d5b = Number(_0x2d10c7 || 0x0);
    return !Number["isFinite"](_0x266d5b) || _0x266d5b <= 0x0 ? null : _0x5f28c3()["find"](_0x4fa5fe => Number(_0x4fa5fe["legionBossShow"]) === _0x266d5b || _0x4fa5fe["monsterIds"]["some"](_0x1b3710 => Number(_0x1b3710) === _0x266d5b)) || null;
  }
  function _0x260f56(_0x28a26e, _0x5358ae = null) {
    const _0x3e717b = _0x28ae46(_0x13e757["safeCall"](() => _0x28a26e["bossId"], null)) || _0x41edc4(_0x13e757["safeCall"](() => _0x28a26e["monsterCfgId"], null));
    return {
      bossMeta: _0x3e717b,
      monsters: _0x5d2ec0(_0x3e717b && Array["isArray"](_0x3e717b["monsters"]) && _0x3e717b["monsters"]["length"] ? _0x3e717b["monsters"] : _0x5358ae)
    };
  }
  function _0x55a3e0() {
    return _0x458f53("NightMareStarConf", "NightmareStarConf") || _0x3a749b("NightMareStar");
  }
  function _0x37005b() {
    const _0x33339c = _0x55a3e0(),
      _0x516396 = new Map(_0x5f28c3()["map"](_0x553c41 => [Number(_0x553c41["bossId"]), _0x553c41]));
    return _0x487691(_0x33339c)["map"]((_0x3ce7d5, _0xee43b6) => {
      const _0x4d60a6 = _0x4bb397(_0x3ce7d5, ["bossId", "id", "ID"], null);
      if (null == _0x4d60a6) return null;
      const _0x37095b = _0x5d2ec0(_0x3ce7d5["monsters"] || _0x3ce7d5["monster"] || _0x3ce7d5["enemyMonsters"] || _0x3ce7d5["fightTeam"] || []),
        _0x39cace = _0x37095b["map"](_0x2e293f => Number(_0x2e293f["monsterId"] || 0x0))["filter"](_0x442b44 => Number["isFinite"](_0x442b44) && _0x442b44 > 0x0),
        _0x13504e = _0x516396["get"](Number(_0x4d60a6)) || null,
        _0x32f506 = _0x3daf87(_0x20a697(_0x5d5d5f(_0x3ce7d5, ["bossDescription", "description"], ""), "")),
        _0x49f0fa = _0x5d5d5f(_0x3ce7d5, ["name", "title"], "") || _0x32f506 || (_0x13504e && _0x13504e["displayName"] ? _0x13504e["displayName"] : "");
      return {
        bossId: _0x4d60a6,
        stageNumber: _0xee43b6 + 0x1,
        unlockStar: _0x4bb397(_0x3ce7d5, ["unlockStar"], 0x0),
        challengeTime: _0x4bb397(_0x3ce7d5, ["challengeTime"], 0x0),
        legionBossShow: _0x4bb397(_0x3ce7d5, ["legionBossShow"], null),
        monsters: _0x37095b,
        monsterIds: _0x39cace,
        displayName: _0x49f0fa,
        description: _0x32f506,
        nightmareMeta: _0x13504e,
        raw: _0x3ce7d5
      };
    })["filter"](Boolean);
  }
  function _0x2af41b(_0x2e4e1d) {
    const _0x36a951 = Number(_0x2e4e1d || 0x0);
    if (!Number["isFinite"](_0x36a951) || _0x36a951 <= 0x0) return null;
    const _0x5ecaaa = _0x13e757["safeCall"](() => _0xf23a54["getConfigs"](), null),
      _0x292718 = _0x5ecaaa && _0x5ecaaa["NightMareStarConf"] && "function" == typeof _0x5ecaaa["NightMareStarConf"]["getByBossId"] ? _0x13e757["safeCall"](() => _0x5ecaaa["NightMareStarConf"]["getByBossId"](_0x36a951), null) : null;
    if (_0x292718) return _0x292718;
    return _0x487691(_0x55a3e0())["find"](_0x3c76c6 => Number(_0x4bb397(_0x3c76c6, ["bossId", "id", "ID"], 0x0)) === _0x36a951) || null;
  }
  function _0x3f2916(_0x466e4b) {
    const _0x6d42bb = Number(_0x466e4b || 0x0);
    return !Number["isFinite"](_0x6d42bb) || _0x6d42bb <= 0x0 ? null : _0x37005b()["find"](_0x406cfc => Number(_0x406cfc["bossId"]) === _0x6d42bb) || null;
  }
  function _0x4c527e(_0x416614) {
    const _0x2f71fd = Number(_0x416614 || 0x0);
    return !Number["isFinite"](_0x2f71fd) || _0x2f71fd <= 0x0 ? null : _0x37005b()["find"](_0xef40c1 => Number(_0xef40c1["legionBossShow"]) === _0x2f71fd || _0xef40c1["monsterIds"]["some"](_0x5d5650 => Number(_0x5d5650) === _0x2f71fd)) || null;
  }
  function _0x308b6f(_0x18a3de, _0xeca96a = null) {
    const _0x149345 = _0x3f2916(_0x13e757["safeCall"](() => _0x18a3de["bossId"], null)) || _0x4c527e(_0x13e757["safeCall"](() => _0x18a3de["monsterCfgId"], null)),
      _0x1be4de = _0x2af41b(_0x13e757["safeCall"](() => _0x18a3de["bossId"], null)) || _0x13e757["safeCall"](() => _0x149345["raw"], null),
      _0x1e45ae = _0x149345 && Array["isArray"](_0x149345["monsters"]) && _0x149345["monsters"]["length"] ? _0x149345["monsters"] : _0x1be4de && Array["isArray"](_0x1be4de["monsters"]) && _0x1be4de["monsters"]["length"] ? _0x1be4de["monsters"] : _0xeca96a;
    return {
      bossMeta: _0x149345,
      conf: _0x1be4de,
      monsters: _0x5d2ec0(_0x1e45ae)
    };
  }
  function _0x896b0a(_0x28a9eb) {
    const _0x513a7e = Number(_0x28a9eb || 0x0);
    if (!Number["isFinite"](_0x513a7e) || _0x513a7e <= 0x0) return null;
    const _0x4bfff9 = _0x3f2916(_0x513a7e),
      _0x574fa1 = _0x2af41b(_0x513a7e) || _0x13e757["safeCall"](() => _0x4bfff9["raw"], null),
      _0x25e618 = _0x13e757["safeCall"](() => _0x4bfff9["nightmareMeta"], null) || _0x28ae46(_0x513a7e),
      _0x39a86e = _0x3daf87(_0x20a697(_0x5d5d5f(_0x574fa1 || {}, ["bossDescription", "description"], ""), "")),
      _0x1d6264 = _0x5d5d5f(_0x574fa1 || {}, ["name", "title"], "") || _0x39a86e || (_0x4bfff9 && _0x4bfff9["displayName"] ? _0x4bfff9["displayName"] : "") || (_0x25e618 && _0x25e618["displayName"] ? _0x25e618["displayName"] : "");
    return {
      bossId: _0x513a7e,
      stageNumber: Number(_0x4bfff9 && _0x4bfff9["stageNumber"] ? _0x4bfff9["stageNumber"] : 0x0),
      conf: _0x574fa1,
      starMeta: _0x4bfff9,
      nightmareMeta: _0x25e618,
      displayName: _0x1d6264 || ""
    };
  }
  function _0x3eb53e(_0x255aab) {
    if (!_0x255aab || "object" != typeof _0x255aab) return [];
    const _0x1360fb = _0x13e757["safeCall"](() => _0xf23a54["getConfigs"](), null),
      _0x12858e = _0x1360fb && _0x1360fb["NightMareStarConditionType"] ? _0x1360fb["NightMareStarConditionType"] : {},
      _0x310656 = Array["isArray"](_0x255aab["nightMareStarConditionType"]) ? _0x255aab["nightMareStarConditionType"] : [],
      _0x6c540b = Array["isArray"](_0x255aab["nightMareStarConditionValue"]) ? _0x255aab["nightMareStarConditionValue"] : [];
    return _0x310656["map"]((_0x2577d0, _0x435483) => {
      const _0x3cb934 = Array["isArray"](_0x6c540b[_0x435483]) ? _0x6c540b[_0x435483] : [];
      if (_0x2577d0 === _0x12858e["STAR_CONDITION_ROUND"]) {
        const _0x2e3fdf = Number(_0x3cb934[0x0] || 0x0);
        return _0x2e3fdf > 0x0 ? _0x2e3fdf + "回合内完成关卡" : "";
      }
      if (_0x2577d0 === _0x12858e["STAR_CONDITION_ROUND_HEROALIVE"]) {
        const _0x5a1d2e = Number(_0x3cb934[0x0] || 0x0),
          _0xfac953 = Number(_0x3cb934[0x1] || 0x0),
          _0x2904cc = _0xfac953 >= 0x5 ? "且所有咸将存活" : _0xfac953 > 0x0 ? "且至少" + _0xfac953 + "名咸将存活" : "";
        return _0x5a1d2e > 0x0 ? _0x5a1d2e + "回合内完成关卡" + _0x2904cc : _0x2904cc;
      }
      return "";
    })["filter"](Boolean);
  }
  function _0x53eff9(_0x46e50d) {
    return _0x3eeb55(_0x46e50d)["reduce"]((_0x3108e7, {
      entry: _0x167d2b
    }) => {
      const _0x2d19d6 = Number(_0x167d2b && null != _0x167d2b["level"] ? _0x167d2b["level"] : 0x0);
      return _0x2d19d6 > _0x3108e7 ? _0x2d19d6 : _0x3108e7;
    }, 0x0);
  }
  function _0x3d20dd(_0x12505d, _0x5c5c25, _0x193e43, _0x471074 = null, _0x358966 = null) {
    const _0x57fd57 = _0x1f7919(_0x358966 && _0x358966["battleData"] ? _0x358966 : _0x58a3e9["modeCaches"]["nightmareStar"] && _0x58a3e9["modeCaches"]["nightmareStar"]["inputData"] ? _0x58a3e9["modeCaches"]["nightmareStar"]["inputData"] : null, _0x5c5c25, _0x193e43) || {
        battleData: _0x13e757["deepClone"](_0x5c5c25),
        battleResult: _0x13e757["deepClone"](_0x193e43)
      },
      _0x5d88c8 = _0x896b0a(_0x12505d && null != _0x12505d["bossId"] ? _0x12505d["bossId"] : null),
      _0x31d430 = Number(_0x5d88c8 && _0x5d88c8["stageNumber"] ? _0x5d88c8["stageNumber"] : 0x0),
      _0x3f15a8 = _0x31d430 > 0x0 ? "星级挑战" + _0x31d430 : "星级挑战";
    null == _0x57fd57["mapId"] && (_0x57fd57["mapId"] = 0x186a1), _0x57fd57["stageNameStr"] || (_0x57fd57["stageNameStr"] = _0x3f15a8), _0x57fd57["startTipTopName"] || (_0x57fd57["startTipTopName"] = _0x3f15a8), _0x57fd57["startTipStage"] || (_0x57fd57["startTipStage"] = "战斗开始"), _0x57fd57["topName"] || (_0x57fd57["topName"] = _0x3f15a8), null == _0x57fd57["showRightLevel"] && (_0x57fd57["showRightLevel"] = _0x53eff9(_0x13e757["safeCall"](() => _0x5c5c25["rightTeam"]["team"], null))), null == _0x57fd57["showRightPower"] && (_0x57fd57["showRightPower"] = Number(_0x13e757["safeCall"](() => _0x5c5c25["rightTeam"]["power"], 0x0)) || 0x0);
    const _0x181490 = Array["isArray"](_0x12505d && _0x12505d["nowStarIdxList"]) ? _0x12505d["nowStarIdxList"]["slice"]() : [],
      _0x94c1ac = Number(_0x12505d && null != _0x12505d["maxStarCount"] ? _0x12505d["maxStarCount"] : _0x5d88c8 && _0x5d88c8["conf"] && Array["isArray"](_0x5d88c8["conf"]["nightMareStarConditionType"]) ? _0x5d88c8["conf"]["nightMareStarConditionType"]["length"] : 0x3),
      _0x4650a7 = {
        bossId: Number(_0x12505d && null != _0x12505d["bossId"] ? _0x12505d["bossId"] : 0x0),
        maxStarCount: _0x94c1ac,
        nowStarCount: _0x181490["length"],
        nowStarIdxList: _0x181490,
        nowStarTaskDescList: _0x3eb53e(_0x5d88c8 && _0x5d88c8["conf"]),
        remainStarFightCount: Number(_0x12505d && null != _0x12505d["remainStarFightCount"] ? _0x12505d["remainStarFightCount"] : 0x0),
        battleTeam: _0x342bd6(_0x471074),
        lordWeaponId: Number(_0x12505d && null != _0x12505d["lordWeaponId"] ? _0x12505d["lordWeaponId"] : _0x471074 && null != _0x471074["lordWeaponId"] ? _0x471074["lordWeaponId"] : 0x0)
      };
    return _0x5b6389(_0x55d995(_0x57fd57), "NMStarBattleInputParasKey", _0x4650a7), _0x34c547(_0x57fd57, _0x5c5c25, _0x193e43, "nightmareStar");
  }
  function _0x3ce3dd(_0x314466 = !0x1) {
    const _0x1b3cb8 = _0x458f53("GenieLevelConf"),
      _0x40a427 = _0x13e757["safeCall"](() => _0xf23a54["getConfigs"](), null),
      _0x1da7ca = _0x40a427 && _0x40a427["Club"] ? _0x40a427["Club"]["SHENHAI"] : null,
      _0xf78bf3 = _0x487691(_0x1b3cb8)["map"]((_0x41f70f, _0x6b50aa) => {
        const _0x18f488 = _0x4bb397(_0x41f70f, ["id", "ID", "genieLevelId"], null);
        if (null == _0x18f488) return null;
        const _0x59ba1d = _0x18f488 >= 0x3e8 ? Math["floor"](_0x18f488 / 0x3e8) : null,
          _0xae6596 = null != _0x1da7ca && _0x59ba1d === _0x1da7ca;
        if (_0x314466 && !_0xae6596) return null;
        if (!_0x314466 && _0xae6596) return null;
        const _0x3d9bb4 = _0x18f488 >= 0x3e8 && _0x18f488 % 0x3e8 || _0x18f488,
          _0xa8082e = _0x5d5d5f(_0x41f70f, ["name", "title"], ""),
          _0xb85134 = _0x474088(_0x59ba1d),
          _0xa4d41 = _0x314466 ? "深海灯神" : _0x4c689a(_0x59ba1d);
        return _0x535f57(_0x18f488, _0xa8082e ? _0xa4d41 + "第\x20" + _0x3d9bb4 + " 层 - " + _0xa8082e : _0xa4d41 + "第\x20" + _0x3d9bb4 + "\x20层", {
          rank: _0x6b50aa + 0x1,
          displayNumber: _0x3d9bb4,
          displayText: _0x314466 ? "" + _0x3d9bb4 : _0xb85134 ? _0xb85134 + "-" + _0x3d9bb4 : "" + _0x3d9bb4,
          sortValue: _0x18f488,
          clubId: _0x59ba1d
        });
      })["filter"](Boolean);
    return _0x314466 && !_0xf78bf3["length"] ? new Array(0xa)["fill"](0x0)["map"]((_0x1cffcc, _0x15b32b) => {
      const _0x3e9d18 = _0x15b32b + 0x1,
        _0x4f24c1 = 0x1388 + _0x3e9d18;
      return _0x535f57(_0x4f24c1, "深海灯神第 " + _0x3e9d18 + "\x20层", {
        rank: _0x3e9d18,
        displayNumber: _0x3e9d18,
        sortValue: _0x4f24c1
      });
    }) : _0xf78bf3;
  }
  function _0x4b53a3(_0x4bfe62) {
    const _0x1d7cbe = _0x3daf87(null == _0x4bfe62 ? "" : String(_0x4bfe62)["trim"]());
    if (!_0x1d7cbe) return "";
    const _0x39825c = _0x4268f9(_0x1d7cbe);
    return _0x39825c || (function (_0x496691) {
      return !!_0x496691 && (!!/^\d+$/["test"](_0x496691) || !!/Conf_|_name_|_desc_|^ACT_|^skin_|^emojiConf_|^MULTI_/i["test"](_0x496691) || /^[A-Za-z0-9_.-]+$/["test"](_0x496691));
    }(_0x1d7cbe) ? "" : _0x1d7cbe);
  }
  function _0x392ec4(_0x24920e, _0x57d77d = "") {
    const _0x2ec39e = Number(_0x24920e || 0x0);
    if (!Number["isFinite"](_0x2ec39e) || _0x2ec39e <= 0x0) return _0x57d77d || "";
    if (_0x58a3e9["monsterNameCache"][_0x2ec39e]) return _0x58a3e9["monsterNameCache"][_0x2ec39e];
    const _0x3239e4 = function (_0x509e7d) {
        const _0x549bf8 = Number(_0x509e7d || 0x0);
        if (!Number["isFinite"](_0x549bf8) || _0x549bf8 <= 0x0) return null;
        if (_0x58a3e9["monsterConfigCache"][_0x549bf8]) return _0x58a3e9["monsterConfigCache"][_0x549bf8];
        const _0x4ba6c0 = _0x13e757["safeCall"](() => _0xf23a54["getConfigs"](), null),
          _0x55e88b = _0x4ba6c0 && _0x4ba6c0["MonsterConf"] ? _0x4ba6c0["MonsterConf"] : _0x458f53("MonsterConf") || _0x3a749b("MonsterConf") || _0x3a749b("Monster");
        if (!_0x55e88b) return null;
        const _0x323df3 = _0x44af4d(_0x55e88b, _0x549bf8, _0x844a38 => {
          if (!_0x844a38 || "object" != typeof _0x844a38) return !0x1;
          const _0x2ae326 = _0x4bb397(_0x844a38, ["id", "ID", "monsterId", "monsterCfgId", "monsterCfgID", "cfgId", "showId"], null);
          return Number(_0x2ae326) === _0x549bf8;
        });
        return _0x323df3 && (_0x58a3e9["monsterConfigCache"][_0x549bf8] = _0x323df3), _0x323df3 || null;
      }(_0x2ec39e),
      _0x4637b9 = ["monsterName", "displayName", "showName", "bossName", "name", "title", "chinese", "text"];
    for (let _0x53189d = 0x0; _0x53189d < _0x4637b9["length"]; _0x53189d += 0x1) {
      const _0x3989d0 = _0x4b53a3(_0x3239e4 ? _0x3239e4[_0x4637b9[_0x53189d]] : "");
      if (_0x3989d0) return _0x58a3e9["monsterNameCache"][_0x2ec39e] = _0x3989d0, _0x3989d0;
    }
    return _0x57d77d || "Boss " + _0x2ec39e;
  }
  function _0x34d75a() {
    return _0x458f53("LegionBossConf") || _0x3a749b("LegionBossConf") || _0x3a749b("LegionBoss");
  }
  function _0x22ca0c(_0x145f47, _0x3ae144 = null) {
    const _0x27aff0 = Number(_0x145f47 && null != _0x145f47["legionBossId"] ? _0x145f47["legionBossId"] : 0x0),
      _0x1cfe6f = _0x27aff0 > 0x0 ? function (_0x4bce6d) {
        return _0x20c2cb(_0x34d75a(), _0x4bce6d);
      }(_0x27aff0) : null,
      _0x23baeb = _0x4bb397(_0x1cfe6f, ["legionBossShow"], _0x4bb397(_0x145f47 || {}, ["legionBossShow"], null)),
      _0x5d308c = _0x1cfe6f && (_0x1cfe6f["monsters"] || _0x1cfe6f["monster"] || _0x1cfe6f["enemyMonsters"] || _0x1cfe6f["fightTeam"]) ? _0x1cfe6f["monsters"] || _0x1cfe6f["monster"] || _0x1cfe6f["enemyMonsters"] || _0x1cfe6f["fightTeam"] : _0x3ae144,
      _0x552c70 = Number(_0x145f47 && null != _0x145f47["currentHp"] ? _0x145f47["currentHp"] : 0x0);
    return {
      legionBossId: _0x27aff0,
      conf: _0x1cfe6f,
      legionBossShow: _0x23baeb,
      currentHp: Number["isFinite"](_0x552c70) && _0x552c70 > 0x0 ? _0x552c70 : 0x0,
      monsters: _0x5d2ec0(_0x5d308c),
      name: _0x392ec4(_0x23baeb, _0x27aff0 > 0x0 ? "俱乐部Boss " + _0x27aff0 : "俱乐部Boss")
    };
  }
  function _0x46f48e(_0x5c2f9d, _0x753b52) {
    const _0x2e4ca2 = Number(_0x753b52 || 0x0);
    if (!_0x5c2f9d || !Number["isFinite"](_0x2e4ca2) || _0x2e4ca2 <= 0x0) return;
    const _0x2413a5 = _0x3eeb55(_0x13e757["safeCall"](() => _0x5c2f9d["rightTeam"] && _0x5c2f9d["rightTeam"]["team"], null));
    if (!_0x2413a5["length"] || !_0x2413a5[0x0]["entry"] || "object" != typeof _0x2413a5[0x0]["entry"]) return;
    const _0x346137 = _0x2413a5[0x0]["entry"];
    _0x346137["curHp"] = _0x2e4ca2, (!Number["isFinite"](Number(_0x346137["hp"])) || Number(_0x346137["hp"]) < _0x2e4ca2) && (_0x346137["hp"] = _0x2e4ca2), (!Number["isFinite"](Number(_0x346137["maxHp"])) || Number(_0x346137["maxHp"]) < _0x2e4ca2) && (_0x346137["maxHp"] = _0x2e4ca2);
  }
  function _0x5728c3() {
    const _0x4a5944 = _0x5f28c3();
    if (_0x4a5944["length"]) {
      const _0x819693 = new Map();
      _0x4a5944["slice"]()["sort"]((_0xbd976, _0x4ef271) => Number(_0xbd976["hallNumber"] || 0x0) - Number(_0x4ef271["hallNumber"] || 0x0) || Number(_0xbd976["hidden"] || 0x0) - Number(_0x4ef271["hidden"] || 0x0) || Number(_0xbd976["bossId"] || 0x0) - Number(_0x4ef271["bossId"] || 0x0))["forEach"](_0x526689 => {
        const _0x163404 = _0x526689["displayName"] || _0x526689["description"] || "",
          _0x257fc4 = _0x163404 ? "十殿第 " + _0x526689["hallNumber"] + " 殿 - " + _0x163404 : "十殿第 " + _0x526689["hallNumber"] + "\x20殿",
          _0x58cc2f = _0x535f57(_0x526689["bossId"], _0x257fc4, {
            rank: _0x526689["hallNumber"],
            displayNumber: _0x526689["hallNumber"],
            sortValue: _0x526689["hallNumber"],
            hidden: _0x526689["hidden"]
          });
        if (!_0x58cc2f) return;
        const _0x1d92d8 = _0x819693["get"](_0x526689["hallNumber"]);
        (!_0x1d92d8 || 0x0 !== Number(_0x1d92d8["hidden"] || 0x0) && 0x0 === Number(_0x526689["hidden"] || 0x0)) && _0x819693["set"](_0x526689["hallNumber"], _0x58cc2f);
      });
      const _0x220240 = Array["from"](_0x819693["values"]())["sort"]((_0x121e30, _0x38ebbc) => Number(_0x121e30["sortValue"] || 0x0) - Number(_0x38ebbc["sortValue"] || 0x0));
      if (_0x220240["length"]) return _0x220240;
    }
    const _0x3c1487 = [...[_0x458f53("NightMareBossConf", "NightMareConf", "NightmareConf", "NightMareRoomConf")]["filter"](Boolean), ..._0x43cfc7((_0x1130f7, _0x5bee8f) => !(!_0x1130f7 || !_0x5bee8f) && !(!_0x1130f7["includes"]("NightMare") || _0x1130f7["includes"]("Star")) && !!_0x487691(_0x5bee8f)["length"])["map"](_0x3b68b0 => _0x3b68b0["table"])];
    let _0x56f5fb = [];
    return _0x3c1487["forEach"](_0x4bfa26 => {
      const _0xd3f3a4 = _0x5ae5c8(_0x487691(_0x4bfa26)["map"]((_0x502544, _0x5b41df) => {
        const _0x11aeea = _0x4bb397(_0x502544, ["bossId", "monsterCfgId", "monsterId", "id", "ID"], null);
        if (null == _0x11aeea) return null;
        const _0x436cd9 = _0x4bb397(_0x502544, ["roomId", "room", "idx", "index", "order"], _0x5b41df + 0x1),
          _0x1e4bf4 = _0x5d5d5f(_0x502544, ["name", "title"], "");
        return _0x535f57(_0x11aeea, _0x1e4bf4 ? "十殿第 " + _0x436cd9 + " 殿 - " + _0x1e4bf4 : "十殿第 " + _0x436cd9 + "\x20殿", {
          rank: _0x5b41df + 0x1,
          displayNumber: _0x436cd9,
          sortValue: _0x436cd9
        });
      })["filter"](Boolean));
      (_0xd3f3a4["length"] >= 0x8 && _0xd3f3a4["length"] <= 0xc || !_0x56f5fb["length"] && _0xd3f3a4["length"]) && (_0x56f5fb = _0xd3f3a4);
    }), _0x56f5fb;
  }
  function _0x5d2ec0(_0x4afdfe) {
    return Array["isArray"](_0x4afdfe) ? _0x4afdfe["map"]((_0x514a9f, _0x519d6c) => Array["isArray"](_0x514a9f) ? {
      monsterId: Number(_0x514a9f[0x0] || 0x0),
      index: Number(null != _0x514a9f[0x1] ? _0x514a9f[0x1] : 0xa + _0x519d6c),
      level: Number(_0x514a9f[0x2] || 0x0),
      template: null
    } : _0x514a9f && "object" == typeof _0x514a9f ? {
      monsterId: Number(null != _0x514a9f["monsterId"] ? _0x514a9f["monsterId"] : null != _0x514a9f["id"] ? _0x514a9f["id"] : _0x514a9f["cfgId"] || 0x0),
      index: Number(null != _0x514a9f["index"] ? _0x514a9f["index"] : null != _0x514a9f["pos"] ? _0x514a9f["pos"] : 0xa + _0x519d6c),
      level: Number(null != _0x514a9f["level"] ? _0x514a9f["level"] : null != _0x514a9f["monsterLv"] ? _0x514a9f["monsterLv"] : 0x0),
      template: _0x514a9f
    } : null)["filter"](_0x184770 => _0x184770 && _0x184770["monsterId"] > 0x0) : [];
  }
  function _0xa37c20(_0x4c526e, _0x46f1d7) {
    return _0x43484b(_0x4c526e, _0x5d2ec0(_0x46f1d7)["map"](_0x18b7c5 => ({
      pos: Number(_0x18b7c5["index"]),
      entry: (() => {
        const _0x3ff37f = Object["assign"]((_0x5daed0 = _0x18b7c5["monsterId"], _0x351056 = _0x18b7c5["index"], _0x2faa19 = _0x18b7c5["level"], {
          id: Number(_0x5daed0 || 0x0),
          type: 0x1,
          index: Number(_0x351056 || 0x0),
          level: Number(_0x2faa19 || 0x0),
          attack: 0x0,
          defense: 0x0,
          curHp: 0x0,
          hp: 0x0,
          curEnergy: 0x0,
          speed: 0x0,
          color: 0x0,
          star: 0x0,
          order: 0x0,
          skin: 0x0,
          skinName: "",
          activeSkill: 0x0,
          attribute: new Map(),
          skill: [],
          recordFlag: !0x1
        }), _0x18b7c5["template"] && "object" == typeof _0x18b7c5["template"] ? _0x13e757["deepClone"](_0x18b7c5["template"]) : {}, {
          id: Number(_0x18b7c5["monsterId"] || 0x0),
          type: 0x1,
          index: Number(_0x18b7c5["index"] || 0x0),
          level: Number(_0x18b7c5["level"] || 0x0)
        });
        var _0x5daed0, _0x351056, _0x2faa19;
        return _0x3ff37f["skinName"] = _0x4f8189(_0x3ff37f["skinName"]), _0x3ff37f["attribute"] = _0x471d19(_0x3ff37f["attribute"]), _0x3ff37f["skill"] = _0x437e96(_0x3ff37f["skill"]), delete _0x3ff37f["monsterId"], delete _0x3ff37f["template"], delete _0x3ff37f["monsterLv"], delete _0x3ff37f["cfgId"], delete _0x3ff37f["heroId"], delete _0x3ff37f["pos"], _0x3ff37f;
      })()
    })));
  }
  function _0x57730d(_0x2b1cb1, _0x1f8d9c, _0x31810f, _0x54a66f, _0x3abcbe, _0x15f049, _0xcc6270 = {}) {
    if (!_0x2b1cb1 || !_0x2b1cb1["leftTeam"]) throw new Error("当前没有可复用的战斗骨架，请先进入主线页面再试");
    const _0x10a334 = _0xf23a54["getBattleModeValue"](_0x1f8d9c);
    if (null == _0x10a334) throw new Error("未找到玩法 " + _0x1f8d9c + " 的 battle mode");
    const _0x269971 = _0x13e757["deepClone"](_0x2b1cb1);
    return _0x269971["mode"] = _0x10a334, _0x269971["id"] = Date["now"]() + _0x3abcbe, _0x269971["randomSeed"] = _0x3abcbe, _0x27cb40(_0x269971), _0x269971["leftTeams"] = [], _0x269971["rightTeams"] = [], _0x269971["rightTeam"] = _0x269971["rightTeam"] || {}, _0x269971["rightTeam"]["roleId"] = 0x0, _0x269971["rightTeam"]["team"] = _0xa37c20(_0x269971["rightTeam"]["team"] || new Map(), _0x15f049), _0x269971["options"] = _0x13e757["deepClone"](_0x269971["options"] || {}), Object["keys"](_0xcc6270["options"] || {})["forEach"](_0x4c54e2 => {
      !function (_0x1a473d, _0xa3e3c9, _0x4b95f0) {
        if (!_0x1a473d || !_0xa3e3c9) return;
        _0x5b6389(_0x1a473d, _0xa3e3c9, _0x4b95f0);
        const _0x36b351 = _0x13e757["safeCall"](() => _0xf23a54["getBattleDataOption"](), null);
        _0x36b351 && Object["prototype"]["hasOwnProperty"]["call"](_0x36b351, _0xa3e3c9) && _0x5b6389(_0x1a473d, _0x36b351[_0xa3e3c9], _0x4b95f0), "object" == typeof _0x1a473d && (_0x1a473d[_0xa3e3c9] = _0x4b95f0);
      }(_0x269971["options"], _0x4c54e2, _0xcc6270["options"][_0x4c54e2]);
    }), _0x35a353(_0x269971, _0x54a66f), _0x1acbd6(_0x269971), _0x13e757["pushDataSource"]("预构造 " + (_0x505384[_0x1f8d9c] || _0x1f8d9c) + " battleData"), _0x269971;
  }
  function _0x535a49(_0x376649, _0x331822 = null) {
    const _0xc2aa5c = _0x20c2cb(_0x458f53("TowerConf"), _0x376649);
    return _0x5d2ec0(_0xc2aa5c && _0xc2aa5c["monsters"] ? _0xc2aa5c["monsters"] : _0x331822);
  }
  function _0x53aea5(_0x57effc, _0x4fa7ed = null) {
    const _0x4d7443 = _0x20c2cb(_0x458f53("EvoTowerConf", "CardTowerConf", "ActCardTowerConf"), _0x57effc);
    return _0x5d2ec0(_0x4d7443 && (_0x4d7443["monsters"] || _0x4d7443["monster"] || _0x4d7443["enemyMonsters"]) ? _0x4d7443["monsters"] || _0x4d7443["monster"] || _0x4d7443["enemyMonsters"] : _0x4fa7ed);
  }
  function _0x1e68a0(_0x35782c, _0x231bc1 = null) {
    const _0x51f007 = Number(_0x35782c && (null != _0x35782c["genieLevelId"] ? _0x35782c["genieLevelId"] : null != _0x35782c["genieId"] ? _0x35782c["genieId"] : 0x0)),
      _0x38363d = _0x20c2cb(_0x458f53("GenieLevelConf"), _0x51f007);
    return {
      genieLevelId: _0x51f007,
      conf: _0x38363d,
      monsters: _0x5d2ec0(_0x38363d && (_0x38363d["monsters"] || _0x38363d["monster"] || _0x38363d["enemyMonsters"] || _0x38363d["fightTeam"]) ? _0x38363d["monsters"] || _0x38363d["monster"] || _0x38363d["enemyMonsters"] || _0x38363d["fightTeam"] : _0x231bc1)
    };
  }
  function _0x1df99b(_0x64c48d) {
    const _0x2e03c0 = _0xf23a54["getModuleByTypeKey"]("GENIE");
    if (!_0x2e03c0 || "function" != typeof _0x2e03c0["getMapId"]) return null;
    const _0x26ebd4 = [_0x64c48d && null != _0x64c48d["clubId"] ? Number(_0x64c48d["clubId"]) : null, _0x64c48d && null != _0x64c48d["genieLevelId"] ? Math["floor"](Number(_0x64c48d["genieLevelId"]) / 0x3e8) : null, _0x64c48d && null != _0x64c48d["genieId"] ? Math["floor"](Number(_0x64c48d["genieId"]) / 0x3e8) : null]["filter"](_0x26dd49 => Number["isFinite"](_0x26dd49) && _0x26dd49 >= 0x0);
    for (let _0x1579e5 = 0x0; _0x1579e5 < _0x26ebd4["length"]; _0x1579e5 += 0x1) {
      const _0x20e401 = _0x13e757["safeCall"](() => _0x2e03c0["getMapId"](_0x26ebd4[_0x1579e5]), null);
      if (null != _0x20e401) return _0x20e401;
    }
    return _0x13e757["safeCall"](() => _0x2e03c0["getMapId"](0x1), null);
  }
  function _0xa9f8ab() {
    const _0x1dae62 = _0x13e757["safeCall"](() => _0xf23a54["getReusableBattleSkeleton"](!0x1), null);
    return !!(_0x1dae62 && _0x1dae62["leftTeam"] && _0x1dae62["leftTeam"]["team"]);
  }
  function _0x1ccbb7(_0x51a71e, _0x39e385, _0x4d29b8) {
    return {
      index: Number(_0x4d29b8 || 0x0),
      seed: Number(_0x51a71e || 0x0),
      isWin: !(!_0x39e385 || !_0x39e385["isWin"]),
      roundCount: Number(_0x39e385 && _0x39e385["roundCount"] ? _0x39e385["roundCount"] : 0x0),
      aliveCount: Number(_0x39e385 && _0x39e385["aliveCount"] ? _0x39e385["aliveCount"] : 0x0),
      remainHpRate: Number(_0x39e385 && _0x39e385["remainHpRate"] ? _0x39e385["remainHpRate"] : 0x0),
      enemyRemainHp: Number(_0x39e385 && _0x39e385["enemyRemainHp"] ? _0x39e385["enemyRemainHp"] : 0x0),
      stars: (_0xa3ed26 = _0x39e385 && _0x39e385["stars"], _0xa3ed26 ? {
        oneStar: !!_0xa3ed26["oneStar"],
        twoStar: !!_0xa3ed26["twoStar"],
        threeStar: !!_0xa3ed26["threeStar"]
      } : null)
    };
    var _0xa3ed26;
  }
  function _0x3490f0(_0x6d8b88, _0x57193a) {
    const _0x33c7a5 = {};
    if ("tower" === _0x6d8b88 && _0x57193a && null != _0x57193a["stageId"]) _0x33c7a5["towerId"] = Number(_0x57193a["stageId"]);else {
      if ("genie" === _0x6d8b88) {
        const _0x2437b5 = _0x1e68a0(_0x57193a || {}, _0x57193a && _0x57193a["monster"]),
          _0x5da9c2 = Number(_0x2437b5["genieLevelId"] || _0x57193a && (_0x57193a["genieLevelId"] || _0x57193a["genieId"]) || 0x0);
        _0x5da9c2 > 0x0 && (_0x33c7a5["genieLevelId"] = _0x5da9c2);
      } else {
        if ("evoTower" === _0x6d8b88 && _0x57193a && null != _0x57193a["towerId"]) _0x33c7a5["towerId"] = Number(_0x57193a["towerId"]);else {
          if ("legionBoss" === _0x6d8b88) {
            const _0x506337 = _0x22ca0c(_0x57193a || {}, _0x57193a && _0x57193a["monster"]),
              _0x10aa53 = Number(_0x506337["legionBossId"] || _0x57193a && _0x57193a["legionBossId"] || 0x0),
              _0x3bad22 = Number(_0x506337["legionBossShow"] || _0x57193a && _0x57193a["legionBossShow"] || 0x0);
            _0x10aa53 > 0x0 && (_0x33c7a5["legionBossId"] = _0x10aa53), _0x3bad22 > 0x0 && (_0x33c7a5["legionBossShow"] = _0x3bad22);
          }
        }
      }
    }
    return Object["keys"](_0x33c7a5)["length"] ? {
      options: _0x33c7a5
    } : {};
  }
  function _0x570e3f(_0x3207a7, _0x414904) {
    if (!_0x3207a7 || !_0x414904) return null;
    const _0x2b4e6f = _0x3207a7["mode"] || "",
      _0x21715a = _0x13e757["deepClone"](_0x3207a7["context"] || {}),
      _0x344443 = _0x13e757["deepClone"](_0xfe5402(_0x2b4e6f, _0x3207a7["cache"] && _0x3207a7["cache"]["inputData"] ? _0x3207a7["cache"]["inputData"] : null));
    if (Array["isArray"](_0x3207a7["notes"]) && _0x3207a7["notes"]["includes"]("preview")) {
      const _0x15faf0 = _0x13e757["safeCall"](() => _0xf23a54["getReusableBattleSkeleton"](!0x0), null),
        _0x39506e = function (_0x14f3ee, _0x3cd59a) {
          switch (_0x14f3ee) {
            case "tower":
              return _0x535a49(_0x3cd59a && _0x3cd59a["stageId"], _0x3cd59a && _0x3cd59a["monster"]);
            case "genie":
              return _0x1e68a0(_0x3cd59a || {}, _0x3cd59a && _0x3cd59a["monster"])["monsters"];
            case "evoTower":
              return _0x53aea5(_0x3cd59a && _0x3cd59a["towerId"], _0x3cd59a && _0x3cd59a["monster"]);
            case "legionBoss":
              return _0x22ca0c(_0x3cd59a || {}, _0x3cd59a && _0x3cd59a["monster"])["monsters"];
            case "nightmareStar":
              return _0x308b6f(_0x3cd59a || {}, _0x3cd59a && _0x3cd59a["monster"])["monsters"];
            case "nightmare":
              return _0x260f56(_0x3cd59a || {}, _0x3cd59a && _0x3cd59a["monster"])["monsters"];
            default:
              return [];
          }
        }(_0x2b4e6f, _0x21715a);
      return _0x15faf0 && _0x39506e["length"] ? {
        source: "preview",
        mode: _0x2b4e6f,
        capability: _0x3207a7["capability"],
        context: _0x21715a,
        candidate: _0x13e757["deepClone"](_0x414904),
        preferredInput: _0x344443,
        skeletonBattleData: _0x15faf0,
        enemyMonsters: _0x13e757["deepClone"](_0x39506e),
        previewExtra: _0x13e757["deepClone"](_0x3490f0(_0x2b4e6f, _0x21715a))
      } : null;
    }
    const _0x263a0e = _0x13e757["deepClone"](_0x3207a7["cache"] && _0x3207a7["cache"]["battleData"] ? _0x3207a7["cache"]["battleData"] : null);
    return _0x263a0e ? {
      source: "authority",
      mode: _0x2b4e6f,
      capability: _0x3207a7["capability"],
      context: _0x21715a,
      candidate: _0x13e757["deepClone"](_0x414904),
      preferredInput: _0x344443,
      authorityBattleData: _0x263a0e
    } : null;
  }
  function _0xc62e30(_0x2ad4e6) {
    const _0xe17ebb = _0x2ad4e6 && _0x2ad4e6["replayBundle"] ? _0x2ad4e6["replayBundle"] : null,
      _0x2eab7a = _0xe17ebb && _0xe17ebb["candidate"] ? _0x13e757["deepClone"](_0xe17ebb["candidate"]) : _0x13e757["deepClone"](_0x2ad4e6 && _0x2ad4e6["candidate"] ? _0x2ad4e6["candidate"] : null);
    if (!_0xe17ebb || !_0x2eab7a) throw new Error("当前批量模拟没有可回放的种子记录");
    return {
      mode: _0xe17ebb["mode"],
      label: _0x505384[_0xe17ebb["mode"]] || _0xe17ebb["mode"] || "记录回放",
      context: _0x13e757["deepClone"](_0xe17ebb["context"] || {}),
      capability: _0xe17ebb["capability"] || _0x2ad4e6["capability"] || _0x390640,
      notes: ["recordedReplay"],
      buildBattleData(_0x39afb7, _0x2af449) {
        const _0x41d46a = _0x39afb7 || _0x2eab7a;
        if ("preview" === _0xe17ebb["source"]) {
          const _0x3d6934 = _0x57730d(_0xe17ebb["skeletonBattleData"], _0xe17ebb["mode"], _0xe17ebb["context"], _0x41d46a, _0x2af449, _0xe17ebb["enemyMonsters"] || [], _0xe17ebb["previewExtra"] || {});
          return "legionBoss" === _0xe17ebb["mode"] && _0x46f48e(_0x3d6934, _0x13e757["safeCall"](() => _0xe17ebb["context"]["currentHp"], 0x0)), _0x3d6934;
        }
        const _0x314adc = _0x13e757["deepClone"](_0xe17ebb["authorityBattleData"] || {});
        return _0x314adc["id"] = Date["now"]() + _0x2af449, _0x314adc["randomSeed"] = _0x2af449, _0x35a353(_0x314adc, _0x41d46a), _0x27cb40(_0x314adc), _0x314adc;
      },
      buildReplayInput: (_0xe9b74b, _0x54c52a, _0x13ff24) => function (_0x172cfb, _0x4dd000, _0x440781, _0x5de46a) {
        if (!_0x172cfb) return _0x1dea53(_0x4dd000, _0x440781, "", null);
        const _0x5dfbe0 = _0x172cfb["mode"] || "",
          _0x498534 = _0x172cfb["context"] || {},
          _0x1bfc2b = _0x172cfb["preferredInput"] || null;
        switch (_0x5dfbe0) {
          case "tower":
            {
              const _0x2f6ead = _0xf23a54["getModuleByTypeKey"]("TOWER");
              return _0x2f6ead && "function" == typeof _0x2f6ead["createBattleInputData"] ? _0x13e757["safeCall"](() => _0x2f6ead["createBattleInputData"](_0x4dd000, _0x440781, _0x498534["towerEnerge"] || 0x0), _0x1dea53(_0x4dd000, _0x440781, _0x5dfbe0, _0x1bfc2b)) : _0x1dea53(_0x4dd000, _0x440781, _0x5dfbe0, _0x1bfc2b);
            }
          case "genie":
            {
              const _0x409e87 = _0xf23a54["getModuleByTypeKey"]("GENIE");
              if (_0x409e87 && "function" == typeof _0x409e87["createBattleInputData"]) {
                const _0x56a73b = _0x1df99b(_0x498534);
                return null != _0x56a73b && (_0x409e87["mapId"] = _0x56a73b), _0x13e757["safeCall"](() => _0x409e87["createBattleInputData"](_0x4dd000, _0x440781), _0x1dea53(_0x4dd000, _0x440781, _0x5dfbe0, _0x1bfc2b));
              }
              return _0x1dea53(_0x4dd000, _0x440781, _0x5dfbe0, _0x1bfc2b);
            }
          case "evoTower":
            {
              const _0x2e9285 = _0xf23a54["getModuleByTypeKey"]("EVOTOWER");
              return _0x2e9285 && "function" == typeof _0x2e9285["createBattleInputData"] ? _0x13e757["safeCall"](() => _0x2e9285["createBattleInputData"](_0x4dd000, _0x440781, _0x498534["energy"] || 0x0), _0x1dea53(_0x4dd000, _0x440781, _0x5dfbe0, _0x1bfc2b)) : _0x1dea53(_0x4dd000, _0x440781, _0x5dfbe0, _0x1bfc2b);
            }
          case "legionBoss":
            {
              const _0x1c3482 = _0xf23a54["getModuleByTypeKey"]("LEGION");
              return _0x1c3482 && "function" == typeof _0x1c3482["createBattleInputData"] ? _0x13e757["safeCall"](() => _0x1c3482["createBattleInputData"](_0x4dd000, _0x440781), _0x1dea53(_0x4dd000, _0x440781, _0x5dfbe0, _0x1bfc2b)) : _0x1dea53(_0x4dd000, _0x440781, _0x5dfbe0, _0x1bfc2b);
            }
          case "nightmareStar":
            return _0x3d20dd(_0x498534, _0x4dd000, _0x440781, _0x5de46a, _0x1bfc2b);
          case "nightmare":
            return _0x2f3182(_0x498534, _0x4dd000, _0x440781, _0x1bfc2b);
          default:
            return _0x1dea53(_0x4dd000, _0x440781, _0x5dfbe0, _0x1bfc2b);
        }
      }(_0xe17ebb, _0x54c52a, _0xe9b74b, _0x13ff24 || _0x2eab7a)
    };
  }
  function _0x9ddb1e(_0x213b62, _0x49250e, _0x83d8a0, _0x49c17f, _0x3e3da3 = {}) {
    try {
      return _0x4a0e85(_0x5280ce(_0x213b62["buildReplayInput"](_0x49250e, _0x83d8a0, _0x49c17f), _0x213b62 && _0x213b62["mode"] ? _0x213b62["mode"] : _0x3e3da3["modeKey"] || ""), "safeBuildReplayInput:" + (_0x3e3da3["modeKey"] || _0x213b62["mode"] || "capture"), {
        modeKey: _0x3e3da3["modeKey"] || _0x213b62["mode"] || "",
        context: _0x13e757["deepClone"](_0x3e3da3["context"] || _0x213b62["context"] || {})
      });
    } catch (_0x136cc6) {
      const _0xdccc0e = _0x136cc6 && _0x136cc6["message"] ? _0x136cc6["message"] : String(_0x136cc6);
      return _0x3159ac("replayBuildError", {
        modeKey: _0x3e3da3["modeKey"] || _0x213b62["mode"],
        source: _0x3e3da3["source"] || "safeBuildReplayInput",
        context: _0x213b62["context"],
        battleData: _0x83d8a0,
        battleResult: _0x49250e,
        extra: {
          seed: _0x3e3da3["seed"],
          candidateSignature: _0x49c17f && _0x49c17f["signature"] ? _0x49c17f["signature"] : "",
          errorMessage: _0xdccc0e,
          errorStack: _0x136cc6 && _0x136cc6["stack"] ? String(_0x136cc6["stack"]) : ""
        }
      }), _0x1dea53(_0x83d8a0, _0x49250e, _0x213b62["mode"]);
    }
  }
  async function _0x1ca5a0(_0x49aa8f, _0x15a40a, _0xacab67, _0xb4be2f = {}) {
    const _0x48920c = _0x49aa8f["buildBattleData"](_0x15a40a, _0xacab67);
    _0x27cb40(_0x48920c), _0x1acbd6(_0x48920c);
    const _0x489fe8 = _0x1764c2(_0x48920c);
    try {
      const _0x367221 = _0xf23a54["getDefaultSimConfig"](_0x48920c),
        _0x45fb56 = await _0xf23a54["simulateBattle"](_0x48920c, _0x367221["extend"], _0x367221["timeScale"]),
        _0x4e6ee1 = _0x427e11(_0x49aa8f, _0x48920c, _0x45fb56);
      return {
        battleData: _0x48920c,
        result: _0x45fb56,
        replayInput: _0xb4be2f["includeReplay"] ? _0x9ddb1e(_0x49aa8f, _0x45fb56, _0x48920c, _0x15a40a, {
          modeKey: _0x49aa8f["mode"],
          source: _0xb4be2f["replaySource"] || "runSingleSeed",
          seed: _0xacab67
        }) : null,
        stats: _0x4e6ee1,
        warnings: _0x489fe8
      };
    } catch (_0x5b33de) {
      throw _0x3159ac("simulationError", {
        modeKey: _0x49aa8f["mode"],
        source: _0xb4be2f["replaySource"] || "runSingleSeed",
        context: _0x49aa8f["context"],
        battleData: _0x48920c,
        extra: {
          seed: _0xacab67,
          candidateSignature: _0x15a40a && _0x15a40a["signature"] ? _0x15a40a["signature"] : "",
          errorMessage: _0x5b33de && _0x5b33de["message"] ? _0x5b33de["message"] : String(_0x5b33de),
          errorStack: _0x5b33de && _0x5b33de["stack"] ? String(_0x5b33de["stack"]) : "",
          warnings: _0x489fe8
        }
      }), _0x5b33de;
    }
  }
  async function _0x270907(_0x2ba9c1, _0xd2cde0, _0x547f14, _0x1b3a2b, _0x52158b) {
    const _0x554ce0 = {
        sampleCount: _0x1b3a2b["length"],
        finishedCount: 0x0,
        winCount: 0x0,
        roundSum: 0x0,
        aliveSum: 0x0,
        remainHpRateSum: 0x0,
        firstWinSeed: null,
        replayInput: null,
        star1Count: 0x0,
        star2Count: 0x0,
        star3Count: 0x0,
        seedRecords: []
      },
      _0x5ab759 = _0x570e3f(_0xd2cde0, _0x547f14);
    for (let _0x2204cc = 0x0; _0x2204cc < _0x1b3a2b["length"] && !_0x58a3e9["stopRequested"]; _0x2204cc += 0x1) {
      const _0x5ef75a = _0x1b3a2b[_0x2204cc],
        _0x4029fb = await _0x1ca5a0(_0xd2cde0, _0x547f14, _0x5ef75a, {
          includeReplay: !_0x554ce0["replayInput"],
          replaySource: "evaluateCandidate"
        });
      if (_0x554ce0["finishedCount"] += 0x1, _0x554ce0["roundSum"] += _0x4029fb["stats"]["roundCount"], _0x554ce0["aliveSum"] += _0x4029fb["stats"]["aliveCount"], _0x554ce0["remainHpRateSum"] += _0x4029fb["stats"]["remainHpRate"], _0x554ce0["seedRecords"]["push"](_0x1ccbb7(_0x5ef75a, _0x4029fb["stats"], _0x2204cc)), !_0x554ce0["replayInput"] && _0x4029fb["replayInput"] && (_0x554ce0["replayInput"] = _0x4029fb["replayInput"]), _0x4029fb["stats"]["isWin"] && (_0x554ce0["winCount"] += 0x1, null == _0x554ce0["firstWinSeed"] && (_0x554ce0["firstWinSeed"] = _0x5ef75a)), _0x4029fb["stats"]["stars"] && (_0x554ce0["star1Count"] += _0x4029fb["stats"]["stars"]["oneStar"] ? 0x1 : 0x0, _0x554ce0["star2Count"] += _0x4029fb["stats"]["stars"]["twoStar"] ? 0x1 : 0x0, _0x554ce0["star3Count"] += _0x4029fb["stats"]["stars"]["threeStar"] ? 0x1 : 0x0), _0x58a3e9["panel"]) {
        const _0x2b5051 = _0x1b3a2b["length"] <= 0x1e ? 0x1 : _0x1b3a2b["length"] <= 0xc8 ? 0x2 : 0x5;
        0x0 !== _0x2204cc && (_0x2204cc + 0x1) % _0x2b5051 !== 0x0 && _0x2204cc !== _0x1b3a2b["length"] - 0x1 || _0x384b33(_0x52158b + "\x20" + _0xd76984(_0x547f14["signature"]), "进度 " + (_0x2204cc + 0x1) + "/" + _0x1b3a2b["length"] + "，当前胜率 " + _0x13e757["formatPercent"](_0x554ce0["winCount"] / _0x554ce0["finishedCount"]));
      }
    }
    const _0x374dcf = Math["max"](_0x554ce0["finishedCount"], 0x1);
    return {
      reportId: _0x2ba9c1["key"] + ":" + (_0x547f14["id"] || _0x547f14["signature"] || "candidate") + ":" + _0x13e757["now"](),
      candidateId: _0x547f14["id"],
      signature: _0x547f14["signature"],
      candidate: _0x547f14,
      totalCount: _0x554ce0["finishedCount"],
      winCount: _0x554ce0["winCount"],
      winRate: _0x554ce0["winCount"] / _0x374dcf,
      firstWinSeed: _0x554ce0["firstWinSeed"],
      avgRounds: _0x554ce0["roundSum"] / _0x374dcf,
      avgRemainingUnits: _0x554ce0["aliveSum"] / _0x374dcf,
      avgRemainingHpRate: _0x554ce0["remainHpRateSum"] / _0x374dcf,
      replayInput: _0x554ce0["replayInput"],
      starRates: {
        one: _0x554ce0["star1Count"] / _0x374dcf,
        two: _0x554ce0["star2Count"] / _0x374dcf,
        three: _0x554ce0["star3Count"] / _0x374dcf
      },
      adapterKey: _0x2ba9c1["key"],
      capability: _0xd2cde0["capability"],
      context: _0xd2cde0["context"],
      replayBundle: _0x5ab759,
      seedRecords: _0x554ce0["seedRecords"]
    };
  }
  function _0x919a12(_0x1f208e) {
    if (!_0x1f208e) return "暂无单次调试结果";
    const _0x48847b = [];
    return _0x48847b["push"]("seed " + _0x1f208e["seed"]), _0x48847b["push"]("结果 " + (_0x1f208e["stats"] && _0x1f208e["stats"]["isWin"] ? "\u80dc\u5229" : "\u5931\u8d25")), _0x48847b["push"]("回合 " + (_0x1f208e["stats"] ? _0x1f208e["stats"]["roundCount"] : 0x0)), _0x48847b["push"]("能力 " + (_0x1f208e["capability"] || "-")), _0x48847b["push"]("可回放 " + (_0x1f208e["replayInput"] ? "\u662f" : "\u5426")), _0x1f208e["warnings"] && _0x1f208e["warnings"]["length"] && _0x48847b["push"]("预检 " + _0x1f208e["warnings"]["length"] + "\x20项"), _0x1f208e["errorMessage"] && _0x48847b["push"]("异常 " + _0x1f208e["errorMessage"]), _0x48847b["join"]("\x0a");
  }
  async function _0x5918fe() {
    return _0x4b013a("单次调试模拟", async () => {
      await _0x13e757["syncRoleInfo"]("debugCurrentTeamOnce");
      const _0x47ad61 = _0x551349();
      if (!_0x47ad61) throw new Error("未识别到当前可模拟的非PVP玩法");
      const _0x19ce6e = _0x13e757["safeCall"](() => _0x47ad61["getContext"](), null),
        _0x313d28 = _0x58a3e9["activeSwitchedCandidate"] || _0x36007c(_0x19ce6e);
      await _0x47ad61["ensureAuthorityData"]();
      const _0xe411d2 = _0x47ad61["buildDraft"](_0x313d28),
        _0x2d713f = function (_0x252369, _0xa81ee6) {
          const _0xa4e28e = {
              mode: _0x252369["mode"],
              context: _0x252369["context"],
              scope: (_0xa81ee6 && _0xa81ee6["signature"] ? _0xa81ee6["signature"] : "-") + ":debug"
            },
            _0xcae226 = _0x13e757["stringifySeedScope"](_0xa4e28e),
            _0x2bb148 = _0x13e757["hashString"](_0xcae226) % 0x7ffffd78,
            _0x2120f9 = Number(_0x58a3e9["debugSeedCursorMap"][_0xcae226] || 0x0) + 0x1;
          return _0x58a3e9["debugSeedCursorMap"][_0xcae226] = _0x2120f9, (_0x2bb148 + _0x2120f9) % 0x7fffffff || 0x1;
        }(_0xe411d2, _0x313d28);
      let _0x1b4eb2 = null;
      try {
        _0x1b4eb2 = _0xe411d2["buildBattleData"](_0x313d28, _0x2d713f), _0x27cb40(_0x1b4eb2), _0x1acbd6(_0x1b4eb2);
        const _0x5b9fcf = _0x1764c2(_0x1b4eb2);
        _0x3159ac("previewBattleData", {
          modeKey: _0x47ad61["key"],
          source: "debugOnce.buildBattleData",
          context: _0xe411d2["context"],
          battleData: _0x1b4eb2,
          extra: {
            seed: _0x2d713f,
            capability: _0xe411d2["capability"],
            candidateSignature: _0x313d28["signature"],
            warnings: _0x5b9fcf
          }
        });
        const _0x289cff = _0xf23a54["getDefaultSimConfig"](_0x1b4eb2),
          _0x3cf9a5 = await _0xf23a54["simulateBattle"](_0x1b4eb2, _0x289cff["extend"], _0x289cff["timeScale"]),
          _0x399f64 = _0x9ddb1e(_0xe411d2, _0x3cf9a5, _0x1b4eb2, _0x313d28, {
            modeKey: _0x47ad61["key"],
            source: "debugOnce",
            seed: _0x2d713f
          }),
          _0x37a6fc = _0x427e11(_0xe411d2, _0x1b4eb2, _0x3cf9a5),
          _0xe91198 = {
            mode: _0xe411d2["mode"],
            label: _0xe411d2["label"],
            adapterKey: _0x47ad61["key"],
            capability: _0xe411d2["capability"],
            context: _0xe411d2["context"],
            candidate: _0x313d28,
            seed: _0x2d713f,
            battleData: _0x1b4eb2,
            result: _0x3cf9a5,
            replayInput: _0x399f64,
            stats: _0x37a6fc,
            warnings: _0x5b9fcf,
            capturedAt: _0x13e757["now"]()
          };
        return _0x58a3e9["lastSingleRun"] = _0xe91198, _0x58a3e9["lastDebugError"] = null, _0x3159ac("singleSimulation", {
          modeKey: _0x47ad61["key"],
          source: "debugOnce",
          context: _0xe411d2["context"],
          battleData: _0x1b4eb2,
          battleResult: _0x3cf9a5,
          extra: {
            seed: _0x2d713f,
            capability: _0xe411d2["capability"],
            candidateSignature: _0x313d28["signature"],
            warnings: _0x5b9fcf
          }
        }), _0x573139({
          title: _0xe411d2["label"] + " 单次调试",
          text: _0x919a12(_0xe91198)
        }), _0x1c2aee(), _0xe91198;
      } catch (_0x12ae05) {
        const _0x2cba89 = _0x12ae05 && _0x12ae05["message"] ? _0x12ae05["message"] : String(_0x12ae05);
        throw _0x58a3e9["lastSingleRun"] = null, _0x58a3e9["lastDebugError"] = {
          mode: _0xe411d2["mode"],
          label: _0xe411d2["label"],
          adapterKey: _0x47ad61["key"],
          context: _0xe411d2["context"],
          seed: _0x2d713f,
          candidateSignature: _0x313d28["signature"],
          errorMessage: _0x2cba89,
          errorStack: _0x12ae05 && _0x12ae05["stack"] ? String(_0x12ae05["stack"]) : "",
          capturedAt: _0x13e757["now"]()
        }, _0x1b4eb2 && _0x3159ac("simulationError", {
          modeKey: _0x47ad61["key"],
          source: "debugOnce.error",
          context: _0xe411d2["context"],
          battleData: _0x1b4eb2,
          extra: {
            seed: _0x2d713f,
            capability: _0xe411d2["capability"],
            candidateSignature: _0x313d28["signature"],
            errorMessage: _0x2cba89,
            errorStack: _0x12ae05 && _0x12ae05["stack"] ? String(_0x12ae05["stack"]) : "",
            warnings: _0x1764c2(_0x1b4eb2)
          }
        }), _0x573139({
          title: _0xe411d2["label"] + " 单次调试失败",
          text: "seed " + _0x2d713f + "\x0a" + _0x2cba89
        }), _0x1c2aee(), _0x12ae05;
      }
    });
  }
  function _0x3f6a2c(_0x16c14d, _0x600ae0) {
    return _0x600ae0["winRate"] !== _0x16c14d["winRate"] ? _0x600ae0["winRate"] - _0x16c14d["winRate"] : _0x600ae0["starRates"]["three"] !== _0x16c14d["starRates"]["three"] ? _0x600ae0["starRates"]["three"] - _0x16c14d["starRates"]["three"] : _0x600ae0["starRates"]["two"] !== _0x16c14d["starRates"]["two"] ? _0x600ae0["starRates"]["two"] - _0x16c14d["starRates"]["two"] : _0x600ae0["starRates"]["one"] !== _0x16c14d["starRates"]["one"] ? _0x600ae0["starRates"]["one"] - _0x16c14d["starRates"]["one"] : _0x600ae0["avgRemainingUnits"] !== _0x16c14d["avgRemainingUnits"] ? _0x600ae0["avgRemainingUnits"] - _0x16c14d["avgRemainingUnits"] : _0x16c14d["avgRounds"] !== _0x600ae0["avgRounds"] ? _0x16c14d["avgRounds"] - _0x600ae0["avgRounds"] : _0x600ae0["avgRemainingHpRate"] !== _0x16c14d["avgRemainingHpRate"] ? _0x600ae0["avgRemainingHpRate"] - _0x16c14d["avgRemainingHpRate"] : 0x0;
  }
  _0x1bec52 = async function (_0x5ac922 = null, _0x46c693 = null) {
    const _0x55fd09 = _0x284e38(_0x46c693, _0x5ac922);
    if (!_0x55fd09) return _0x13e757["pushDataSource"]("nightmare replay scene failed: missing bossId"), !0x1;
    _0x13e757["pushDataSource"]("nightmare replay scene start boss=" + _0x55fd09);
    const _0x1d5e22 = _0x13e757["safeCall"](() => _0xf23a54["getIndexUI"](), null);
    if (!_0x1d5e22) return _0x13e757["pushDataSource"]("nightmare replay scene failed: index-ui unavailable"), !0x1;
    const _0x711e0f = _0xc79fa9();
    if (!_0x711e0f) return _0x13e757["pushDataSource"]("nightmare replay scene failed: NightmareBattleScene unavailable"), !0x1;
    const _0x598084 = "function" == typeof _0x1d5e22["GET_PROXY"] ? _0x13e757["safeCall"](() => _0x1d5e22["GET_PROXY"](_0x711e0f), null) : null,
      _0x5b2a3d = !(!_0x598084 || !_0x598084["isShow"]);
    _0x13e757["pushDataSource"]("nightmare replay scene state boss=" + _0x55fd09 + " visible=" + (_0x5b2a3d ? "1" : "0") + " class=" + (_0x711e0f["name"] || "NightmareBattleScene")), _0x58a3e9["nightmareReplayScene"] = {
      active: !0x0,
      bossId: _0x55fd09,
      openedByScript: !_0x5b2a3d
    };
    try {
      if (_0x13e757["safeCall"](() => {
        _0x711e0f["bossId"] = _0x55fd09;
      }, null), _0x5b2a3d) _0x13e757["pushDataSource"]("nightmare replay scene reuse existing proxy boss=" + _0x55fd09);else {
        if ("function" == typeof _0x1d5e22["SHOW_PROXY_OVER"]) await Promise["resolve"](_0x1d5e22["SHOW_PROXY_OVER"](_0x711e0f)), _0x13e757["pushDataSource"]("nightmare replay scene SHOW_PROXY_OVER boss=" + _0x55fd09);else {
          if ("function" != typeof _0x1d5e22["SHOW_PROXY"]) return _0x13e757["pushDataSource"]("nightmare replay scene failed: missing SHOW_PROXY_OVER/SHOW_PROXY"), _0x58a3e9["nightmareReplayScene"] = null, !0x1;
          await Promise["resolve"](_0x1d5e22["SHOW_PROXY"](_0x711e0f)), _0x13e757["pushDataSource"]("nightmare replay scene SHOW_PROXY boss=" + _0x55fd09);
        }
      }
      const _0x1db87d = "function" == typeof _0x1d5e22["GET_PROXY"] ? _0x13e757["safeCall"](() => _0x1d5e22["GET_PROXY"](_0x711e0f), null) : null,
        _0x316b8c = _0x13e757["safeCall"](() => _0x1db87d && _0x1db87d["ui"], null);
      if (_0x316b8c) try {
        _0x316b8c["visible"] = !0x0, "boolean" == typeof _0x316b8c["touchable"] && (_0x316b8c["touchable"] = !0x0);
      } catch (_0x55a7ad) {
        _0x13e757["pushDataSource"]("nightmare replay scene ui restore failed boss=" + _0x55fd09 + ":\x20" + _0x1c3d51(_0x55a7ad));
      }
      if (_0x1db87d && "function" == typeof _0x1db87d["_onMapUpdate"]) try {
        await Promise["resolve"](_0x1db87d["_onMapUpdate"](_0x55fd09)), _0x13e757["pushDataSource"]("nightmare replay scene map refresh boss=" + _0x55fd09), _0x13e757["safeCall"](() => _0x1db87d["ui"]["m_container"]["numChildren"], 0x0) || (await Promise["resolve"](_0x1db87d["_onMapUpdate"](_0x55fd09)), _0x13e757["pushDataSource"]("nightmare replay scene map refresh retry boss=" + _0x55fd09));
      } catch (_0x5d61fb) {
        _0x13e757["pushDataSource"]("nightmare replay scene map refresh failed: " + _0x1c3d51(_0x5d61fb));
      } else _0x1db87d ? _0x13e757["pushDataSource"]("nightmare replay scene warning: _onMapUpdate unavailable boss=" + _0x55fd09) : _0x13e757["pushDataSource"]("nightmare replay scene warning: liveProxy missing boss=" + _0x55fd09);
      const _0xcfc42f = _0x13e757["safeCall"](() => _0xf23a54["getGlobalSignal"](), null),
        _0x3612f3 = _0x279c6a(_0xcfc42f && _0xcfc42f["EventNightmareMapUpdate"], _0x55fd09);
      _0x13e757["pushDataSource"]("nightmare replay scene dispatch boss=" + _0x55fd09 + " dispatched=" + (_0x3612f3 ? "1" : "0"));
      const _0x586266 = _0x251af1([_0x711e0f], "nightmare:boss=" + _0x55fd09),
        _0x2ee433 = _0x2904c2(function (_0x34e4bb = "playback") {
          const _0x4e6c9e = _0x185e2e(),
            _0x35f92e = _0x39b238(),
            _0x82ed8e = _0x13e757["safeCall"](() => _0x35f92e["ui"] && _0x35f92e["ui"]["_children"], null);
          if (!_0x35f92e || !Array["isArray"](_0x82ed8e)) return _0x13e757["pushDataSource"]("收集页面 layer 失败: Layers proxy 不可用 (" + _0x34e4bb + ")"), [];
          const _0x542633 = _0x82ed8e["filter"](_0x191f6d => _0x191f6d && _0x191f6d["name"] && _0x191f6d["visible"] && !_0x4e6c9e["has"](_0x191f6d["name"]))["map"](_0x4b4bee => _0x4b4bee["name"]);
          return _0x13e757["pushDataSource"]("当前可隐藏页面 layer: " + (_0x542633["length"] ? _0x542633["join"](",") : "-")), _0x542633;
        }("nightmare:boss=" + _0x55fd09), "nightmare:boss=" + _0x55fd09);
      return _0x13e757["pushDataSource"]("nightmare replay page hide count=" + _0x586266), _0x13e757["pushDataSource"]("nightmare replay layer hide count=" + _0x2ee433), _0x13e757["pushDataSource"]("nightmare replay scene mounted boss=" + _0x55fd09), !0x0;
    } catch (_0x5cd498) {
      return _0x58a3e9["nightmareReplayScene"] = null, _0x13e757["pushDataSource"]("nightmare replay scene failed boss=" + _0x55fd09 + ":\x20" + _0x1c3d51(_0x5cd498)), _0x13e757["warn"]("patched ensure nightmare replay scene failed", _0x5cd498), !0x1;
    }
  }, _0xf23a54["patchBattleCapture"] = function () {
    if (_0x58a3e9["runtimePatched"]) return;
    const _0x39dce5 = _0x13e757["safeCall"](() => this["getBattleUIManager"](), null);
    _0x39dce5 && ["SHOW_BATTLE_UI", "SHOW_BATTLE_REPLAY_UI"]["forEach"](_0x27f094 => {
      if (!_0x39dce5[_0x27f094] || _0x39dce5[_0x27f094]["__nonPvpSimPatched"]) return;
      const _0x8e005b = _0x39dce5[_0x27f094];
      _0x39dce5[_0x27f094] = function (_0x2b2d78, ..._0x222bac) {
        try {
          !function (_0x1b84f0, _0x1a61e8) {
            if (!_0x1b84f0 || !_0x1b84f0["battleData"] || _0x4f54ca(_0x1b84f0) || function (_0x1b3f72) {
              return !!(_0x1b3f72 && "object" == typeof _0x1b3f72 && _0x1b3f72["__nonPvpPlaybackMeta"] && _0x1b3f72["__nonPvpPlaybackMeta"]["skipCapture"]);
            }(_0x1b84f0)) return;
            const _0x5c81a5 = _0x62fdff(_0x1b84f0["battleData"], _0x1b84f0);
            _0x58a3e9["latestCapture"] = {
              input: _0x13e757["deepClone"](_0x1b84f0),
              source: _0x1a61e8,
              modeKey: _0x5c81a5,
              capturedAt: _0x13e757["now"]()
            }, _0x2ed9f7(_0x1b84f0["battleData"], {
              source: _0x1a61e8,
              modeKey: _0x5c81a5
            }), _0x5c81a5 && _0x58a3e9["modeCaches"][_0x5c81a5] ? _0x58a3e9["modeCaches"][_0x5c81a5] = Object["assign"]({}, _0x58a3e9["modeCaches"][_0x5c81a5], {
              inputData: _0x13e757["deepClone"](_0x1b84f0),
              capturedAt: _0x13e757["now"]()
            }) : _0x5c81a5 && "capture" !== _0x5c81a5 && (_0x58a3e9["modeCaches"][_0x5c81a5] = {
              modeKey: _0x5c81a5,
              inputData: _0x13e757["deepClone"](_0x1b84f0),
              battleData: _0x13e757["deepClone"](_0x1b84f0["battleData"]),
              capturedAt: _0x13e757["now"]()
            }), _0x13e757["pushDataSource"]("捕获战斗输入 " + _0x1a61e8 + " -> " + (_0x505384[_0x5c81a5] || _0x5c81a5)), _0x3159ac("battleInput", {
              modeKey: _0x5c81a5,
              source: _0x1a61e8,
              inputData: _0x1b84f0,
              battleResult: _0x4aca44(_0x1b84f0)
            });
          }(_0x2b2d78, _0x27f094);
        } catch (_0x4e81a8) {
          _0x13e757["warn"](_0x27f094 + " 捕获失败", _0x4e81a8);
        }
        return _0x8e005b["call"](this, _0x2b2d78, ..._0x222bac);
      }, _0x39dce5[_0x27f094]["__nonPvpSimPatched"] = !0x0, _0x39dce5[_0x27f094]["__original"] = _0x8e005b;
    });
    const _0x2bdca8 = _0x13e757["safeCall"](() => this["getDataIndex"](), null);
    _0x2bdca8 && (this["patchPromiseMethod"](_0x2bdca8["FightService"], "startTower", _0xffec61 => {
      const _0x342538 = _0x4be94f(_0xffec61);
      if (!_0x342538) return;
      const _0x544e25 = this["getModuleByTypeKey"]("TOWER");
      _0x2c5525("tower", _0x342538, {
        context: {
          stageId: _0x13e757["safeCall"](() => _0x544e25["curStageInfo"]["id"], null),
          towerEnerge: _0x13e757["safeCall"](() => _0x544e25["towerEnerge"], null),
          monster: _0x13e757["safeCall"](() => _0x544e25["curStageInfo"]["monster"], null)
        },
        source: "FightService.startTower"
      });
    }), this["patchPromiseMethod"](_0x2bdca8["FightService"], "startGenie", (_0x1e1b7d, _0x4d3e29) => {
      const _0x481484 = _0x4be94f(_0x1e1b7d);
      if (!_0x481484) return;
      const _0x2331c2 = _0x4d3e29 && _0x4d3e29[0x0] ? _0x4d3e29[0x0]["genieId"] : null;
      _0x2c5525("genie", _0x481484, {
        context: {
          genieId: _0x2331c2,
          genieLevelId: _0x35f70e(_0x13e757["safeCall"](() => _0x481484["options"], null), "genieLevelId", null),
          battleTeam: _0x4d3e29 && _0x4d3e29[0x0] ? _0x13e757["deepClone"](_0x4d3e29[0x0]["battleTeam"]) : null,
          lordWeaponId: _0x4d3e29 && _0x4d3e29[0x0] ? _0x4d3e29[0x0]["lordWeaponId"] : null
        },
        source: "FightService.startGenie"
      });
    }), this["patchPromiseMethod"](_0x2bdca8["FightService"], "startLegionBoss", _0x1a0155 => {
      const _0x399ac8 = _0x4be94f(_0x1a0155);
      if (!_0x399ac8) return;
      const _0x520e9c = this["getModuleByTypeKey"]("LEGION"),
        _0x595652 = _0x13e757["safeCall"](() => _0x520e9c["currentBossInfo"], null) || _0x13e757["safeCall"](() => _0x520e9c["legion"]["currentBossInfo"], null) || _0x13e757["safeCall"](() => _0x520e9c["legion"]["currentBoss"], null),
        _0x5d2987 = _0x13e757["safeCall"](() => _0x520e9c["legion"]["currentBoss"]["currentHP"], null) || _0x13e757["safeCall"](() => _0x520e9c["currentBoss"]["currentHP"], null) || _0x13e757["safeCall"](() => _0x595652["currentHP"], null);
      _0x2c5525("legionBoss", _0x399ac8, {
        context: {
          legionBossId: _0x4bb397(_0x595652 || {}, ["legionBossId", "id", "ID"], null),
          legionBossShow: _0x4bb397(_0x595652 || {}, ["legionBossShow"], null),
          legionBossZhanLi: _0x4bb397(_0x595652 || {}, ["legionBossZhanLi", "power"], null),
          monster: _0x13e757["safeCall"](() => _0x595652["monsters"], null),
          currentHp: null != _0x5d2987 ? Number(_0x5d2987) : null
        },
        source: "FightService.startLegionBoss"
      });
    }), this["patchPromiseMethod"](_0x2bdca8["EvoTowerService"], "readyFight", _0x11681a => {
      const _0x582398 = _0x4be94f(_0x11681a),
        _0x507f5f = this["getModuleByTypeKey"]("EVOTOWER"),
        _0x62af86 = _0x13e757["safeCall"](() => _0x507f5f["readyFightResp"]["battleData"], null),
        _0x5710be = _0x582398 || _0x62af86;
      _0x5710be && _0x2c5525("evoTower", _0x5710be, {
        context: {
          towerId: _0x13e757["safeCall"](() => _0x507f5f["curStageInfo"]["id"], null),
          rawTowerId: _0x13e757["safeCall"](() => _0x507f5f["curTowerId"], null),
          energy: _0x13e757["safeCall"](() => _0x507f5f["evoTower"]["energy"], null),
          monster: _0x13e757["safeCall"](() => _0x507f5f["curStageInfo"]["monster"], null)
        },
        source: "EvoTowerService.readyFight"
      });
    }), this["patchPromiseMethod"](_0x2bdca8["NMExtService"], "startBoss", (_0x58bae2, _0x474b3e) => {
      const _0x39e4ec = _0x4be94f(_0x58bae2),
        _0x4849c3 = _0x5af598(_0x58bae2);
      _0x39e4ec && _0x2c5525("nightmareStar", _0x39e4ec, {
        context: {
          bossId: _0x474b3e && _0x474b3e[0x0] ? _0x474b3e[0x0]["bossId"] : null,
          battleTeam: _0x474b3e && _0x474b3e[0x0] ? _0x13e757["deepClone"](_0x474b3e[0x0]["battleTeam"]) : null,
          lordWeaponId: _0x474b3e && _0x474b3e[0x0] ? _0x474b3e[0x0]["lordWeaponId"] : null,
          nowStarIdxList: _0x4849c3 && _0x4849c3["nowStarIdxList"] ? _0x13e757["deepClone"](_0x4849c3["nowStarIdxList"]) : []
        },
        source: "NMExtService.startBoss"
      });
    }));
    const _0x596c34 = _0x13e757["safeCall"](() => this["getGlobalSignal"](), null);
    _0x596c34 && _0x596c34["EventNightmareBattleStart"] && this["patchSignalDispatch"](_0x596c34["EventNightmareBattleStart"], _0x35d86c => {
      const _0xa81110 = _0x35d86c && _0x35d86c["battleData"] ? _0x35d86c["battleData"] : null;
      _0xa81110 && _0x2c5525("nightmare", _0xa81110, {
        context: {
          bossId: _0x35d86c["bossCfgId"] || null,
          roleId: _0x35d86c["roleId"] || null
        },
        source: "EventNightmareBattleStart"
      });
    }), _0x58a3e9["runtimePatched"] = !0x0, _0x13e757["pushDataSource"]("运行时捕获补丁已安装");
  };
  var _0x31655a = {
    0x1: "https://xxz-xyzw-res.hortorgames.com/remote/icons/native/5c/5c4652b9-7e51-4733-879a-1ad89a60a19e.6a8ea.png",
    0x2: "https://xxz-xyzw-res.hortorgames.com/remote/icons/native/0f/0f0f103c-bce6-4951-8293-789d07b91ea1.925a2.png",
    0x3: "https://xxz-xyzw-res.hortorgames.com/remote/icons/native/1f/1fdc6fac-cac3-4934-93f2-8c3e6b3b958e.0539f.png",
    0x4: "https://xxz-xyzw-res.hortorgames.com/remote/icons/native/9d/9d0875ac-41b2-4de1-9cb7-e207a3a977b7.458d0.png",
    0x5: "https://xxz-xyzw-res.hortorgames.com/remote/icons/native/01/01e407e7-8a48-45e3-a58a-914bbb58af99.28cea.png",
    0x6: "https://xxz-xyzw-res.hortorgames.com/remote/icons/native/c6/c64f985d-936f-4995-a2b8-29f379bbca77.d2c73.png",
    0x7: "https://xxz-xyzw-res.hortorgames.com/remote/icons/native/59/59966b57-2cd4-4e6d-bb50-3eedcb52e4ea.44cd2.png",
    0x8: "https://xxz-xyzw-res.hortorgames.com/remote/icons/native/88/88679199-6ae6-425b-8c30-5698461d2b10.478b8.png",
    0x9: "https://xxz-xyzw-res.hortorgames.com/remote/icons/native/a5/a59734bc-12d2-4959-a2ce-12c3a3c1be88.469fc.png"
  };
  function _0x2c819d(_0x2021dc, _0x12feac) {
    const _0xff1107 = _0x2021dc["battleTeam"] || [];
    if (!_0xff1107["length"]) return '<span style="color:#a0aec0;font-size:10px;">暂无阵容信息</span>';
    const _0x58b432 = new Map();
    try {
      const _0x269605 = _0x13e757["fromSerializable"](_0x2021dc["teamEntries"] || []);
      _0x269605 && _0x269605["length"] && _0x269605["forEach"](({
        pos: _0x670f16,
        entry: _0x56da9f
      }) => {
        const _0x164413 = _0x56da9f && _0x56da9f["skin"];
        _0x164413 && _0x164413 > 0x0 && _0x58b432["set"](Number(_0x670f16), _0x164413);
      });
    } catch (_0x1d42ad) {}
    const _0x392aba = null != _0x12feac ? _0x12feac : _0x2021dc["lordWeaponId"] || 0x0,
      _0x39157f = _0x392aba ? _0x31655a[String(_0x392aba)] : null;
    return (_0x39157f ? '<img class="sim-toy-icon-img" src="' + _0x39157f + '" onerror="this.style.display=\'none\'">' : "") + _0xff1107["map"](_0x190c94 => '<img class="sim-hero-icon-img" data-hero-id="' + (_0x58b432["get"](Number(_0x190c94["pos"])) || _0x190c94["heroId"]) + "\" src=\"\" onerror=\"if(this.src.endsWith('.png'))this.src=this.src.replace('.png','.pvr');else if(this.src.endsWith('.pvr'))this.src=this.src.replace('.pvr','.png');\">")["join"]("");
  }
  function _0x14b198(_0x52bf22) {
    if (!_0x52bf22) return Promise["resolve"]("");
    try {
      const _0x4cad6f = _0x13e757["safeCall"](() => _0xf23a54["getConfigs"](), null);
      if (!_0x4cad6f || !_0x4cad6f["AvatarConf"]) return Promise["resolve"]("");
      const _0x54e448 = _0x13e757["safeCall"](() => _0x4cad6f["AvatarConf"]["getById"](_0x52bf22), null),
        _0x2b827e = _0x54e448 && _0x54e448["smallHeadIcon"];
      if (!_0x2b827e) return Promise["resolve"]("");
      const _0x5e428c = window["cc"] && window["cc"]["assetManager"] && window["cc"]["assetManager"]["bundles"]["get"]("icons");
      return _0x5e428c ? new Promise(_0x1a8143 => {
        _0x5e428c["load"](_0x2b827e, window["cc"]["Texture2D"], (_0x591e1d, _0x27bdfb) => {
          if (_0x591e1d || !_0x27bdfb) return void _0x1a8143("");
          let _0x324153 = _0x27bdfb["nativeUrl"] || _0x27bdfb["url"] || _0x27bdfb["_nativeUrl"] || "";
          _0x324153["startsWith"]("assets/") && (_0x324153 = "https://xxz-xyzw-res.hortorgames.com/remote/" + _0x324153["substring"](0x7)), _0x1a8143(_0x324153);
        });
      }) : Promise["resolve"]("");
    } catch (_0x2c26cf) {
      return Promise["resolve"]("");
    }
  }
  function _0xd76984(_0x3e7a9b) {
    if (!_0x3e7a9b) return "未知阵容";
    const _0x5398d6 = _0x3e7a9b["indexOf"](":");
    return _0x5398d6 > 0x0 ? "#" + _0x3e7a9b["substring"](0x0, _0x5398d6) : "#" + _0x3e7a9b["substring"](0x0, 0x8);
  }
  function _0x49871f(_0x47e03a) {
    const _0x125ac9 = _0xd76984(_0x47e03a["signature"]) + " 胜率 " + _0x13e757["formatPercent"](_0x47e03a["winRate"]) + " 次数 " + _0x47e03a["totalCount"],
      _0x4d3870 = null != _0x47e03a["firstWinSeed"] ? "\n首胜Seed " + _0x47e03a["firstWinSeed"] : "";
    return _0x47e03a["starRates"] && _0x47e03a["starRates"]["one"] > 0x0 ? _0x125ac9 + "\n1星 " + _0x13e757["formatPercent"](_0x47e03a["starRates"]["one"]) + " 2星 " + _0x13e757["formatPercent"](_0x47e03a["starRates"]["two"]) + " 3星 " + _0x13e757["formatPercent"](_0x47e03a["starRates"]["three"]) + _0x4d3870 : _0x125ac9 + "\n平均回合 " + _0x13e757["formatNumber"](_0x47e03a["avgRounds"]) + " 平均剩余 " + _0x13e757["formatNumber"](_0x47e03a["avgRemainingUnits"]) + _0x4d3870;
  }
  function _0x313775() {
    return _0x58a3e9["lastReport"] && Array["isArray"](_0x58a3e9["lastReport"]["seedRecords"]) && _0x58a3e9["lastReport"]["seedRecords"]["length"] ? _0x58a3e9["lastReport"] : null;
  }
  function _0x31e888(_0x3ec7a4) {
    const _0x358e45 = _0x3ec7a4 && _0x3ec7a4["reportId"] ? String(_0x3ec7a4["reportId"]) : "";
    _0x58a3e9["seedRecordView"]["sourceId"] !== _0x358e45 && _0x5711d4(_0x3ec7a4);
    const _0x9bc14c = _0x3ec7a4 && Array["isArray"](_0x3ec7a4["seedRecords"]) ? _0x3ec7a4["seedRecords"] : [];
    if (!_0x9bc14c["length"]) return _0x58a3e9["seedRecordView"]["page"] = 0x0, void (_0x58a3e9["seedRecordView"]["selectedIndex"] = 0x0);
    const _0x8bd6e7 = _0x9bc14c["length"] - 0x1;
    !Number["isFinite"](Number(_0x58a3e9["seedRecordView"]["selectedIndex"])) || _0x58a3e9["seedRecordView"]["selectedIndex"] < 0x0 ? _0x58a3e9["seedRecordView"]["selectedIndex"] = 0x0 : _0x58a3e9["seedRecordView"]["selectedIndex"] > _0x8bd6e7 && (_0x58a3e9["seedRecordView"]["selectedIndex"] = _0x8bd6e7);
    const _0x3e21e8 = Math["max"](0x0, Math["ceil"](_0x9bc14c["length"] / _0x452ffd) - 0x1);
    !Number["isFinite"](Number(_0x58a3e9["seedRecordView"]["page"])) || _0x58a3e9["seedRecordView"]["page"] < 0x0 ? _0x58a3e9["seedRecordView"]["page"] = 0x0 : _0x58a3e9["seedRecordView"]["page"] > _0x3e21e8 && (_0x58a3e9["seedRecordView"]["page"] = _0x3e21e8);
    const _0xa0a639 = Math["floor"](_0x58a3e9["seedRecordView"]["selectedIndex"] / _0x452ffd);
    _0xa0a639 !== _0x58a3e9["seedRecordView"]["page"] && (_0x58a3e9["seedRecordView"]["page"] = _0xa0a639);
  }
  function _0x12a9a3() {
    if (!_0x58a3e9["panel"]) return;
    const _0x2400c3 = _0x58a3e9["panel"]["refs"];
    if (!(_0x2400c3["seedSection"] && _0x2400c3["seedList"] && _0x2400c3["seedSummary"] && _0x2400c3["seedPager"])) return;
    const _0x372680 = _0x313775();
    if (!_0x372680) return _0x2400c3["seedSection"]["style"]["display"] = "none", _0x2400c3["seedSummary"]["textContent"] = "暂无批量种子记录", _0x2400c3["seedPager"]["textContent"] = "0 / 0", void (_0x2400c3["seedList"]["innerHTML"] = "");
    _0x31e888(_0x372680);
    const _0x204f09 = _0x372680["seedRecords"] || [],
      _0x4e1500 = Number(_0x372680["winCount"] || 0x0),
      _0x4aa775 = Math["max"](0x0, _0x204f09["length"] - _0x4e1500),
      _0x2b0b8b = Number(_0x58a3e9["seedRecordView"]["page"] || 0x0),
      _0x1c8c9e = _0x2b0b8b * _0x452ffd,
      _0x2bc071 = _0x204f09["slice"](_0x1c8c9e, _0x1c8c9e + _0x452ffd),
      _0x2a6797 = Math["max"](0x1, Math["ceil"](_0x204f09["length"] / _0x452ffd));
    _0x2400c3["seedSection"]["style"]["display"] = "block", _0x2400c3["seedSummary"]["textContent"] = "共\x20" + _0x204f09["length"] + " 场 | 胜 " + _0x4e1500 + " | 负 " + _0x4aa775, _0x2400c3["seedPager"]["textContent"] = _0x2b0b8b + 0x1 + " / " + _0x2a6797, _0x2bc071["length"] ? _0x2400c3["seedList"]["innerHTML"] = _0x2bc071["map"]((_0xe8d710, _0x15330a) => {
      const _0x30a119 = _0x1c8c9e + _0x15330a,
        _0x3e2941 = _0xe8d710["isWin"] ? " is-win" : " is-lose",
        _0x59dbd2 = _0xe8d710["isWin"] ? "\u80dc" : "\u8d25";
      return '<div class="xc-seed-item' + _0x3e2941 + '" data-seed-record-index="' + _0x30a119 + '"><div class="xc-seed-body"><div class="xc-seed-head"><span><span class="xc-seed-num">#' + (_0x30a119 + 0x1) + '</span> <span class="xc-seed-id">seed ' + _0xe8d710["seed"] + '</span></span><span class="xc-seed-tag' + _0x3e2941 + "\x22>" + _0x59dbd2 + '</span></div><div class="xc-seed-detail">' + function (_0xb90431) {
        if (!_0xb90431) return "";
        const _0x10e649 = ["回合 " + (_0xb90431["roundCount"] || 0x0), "存活 " + (_0xb90431["aliveCount"] || 0x0), "残血 " + _0x13e757["formatPercent"](Number(_0xb90431["remainHpRate"] || 0x0))];
        if (_0xb90431["stars"]) {
          const _0x5d78ee = [_0xb90431["stars"]["oneStar"], _0xb90431["stars"]["twoStar"], _0xb90431["stars"]["threeStar"]]["filter"](Boolean)["length"];
          _0x10e649["push"](_0x5d78ee + "星");
        }
        return _0x10e649["join"](" | ");
      }(_0xe8d710) + '</div></div><button type="button" class="xc-seed-replay" data-replay-seed-index="' + _0x30a119 + '">回放</button></div>';
    })["join"]("") : _0x2400c3["seedList"]["innerHTML"] = '<div class="sim-seed-empty">暂无种子记录</div>';
  }
  var _0x3e3dec = "";
  function _0x573139(_0x3ec368, _0x32cb1f) {
    if (!_0x58a3e9["panel"] || !_0x58a3e9["panel"]["refs"]["reportBody"]) return;
    const _0x645e25 = _0x58a3e9["panel"]["refs"]["reportBody"];
    if (_0x3ec368) {
      if (_0x32cb1f && _0x32cb1f["length"]) {
        const _0x13a4e1 = "html:" + _0x32cb1f["map"](_0xcdf9e7 => _0xcdf9e7["reportId"] || _0xcdf9e7["signature"] || "")["join"]("|");
        if (_0x13a4e1 === _0x3e3dec) return;
        _0x3e3dec = _0x13a4e1, _0x645e25["className"] = "xc-report xc-report-html", _0x645e25["innerHTML"] = function (_0x470e8f, _0x54c576) {
          return '<div class="xc-report-title">' + _0x470e8f + "</div>" + _0x54c576["map"]((_0x4e5da3, _0x2cbc90) => {
            const _0x567ca9 = _0x54c576["length"] > 0x1 ? '<span style="font-weight:600;color:#718096;">' + (_0x2cbc90 + 0x1) + ".</span> " : "",
              _0x4380e1 = _0x4e5da3["candidate"] ? _0x2c819d(_0x4e5da3["candidate"]) : "",
              _0x1b0d19 = "胜率 " + _0x13e757["formatPercent"](_0x4e5da3["winRate"]) + " 次数 " + _0x4e5da3["totalCount"];
            let _0x43e408 = "";
            _0x43e408 = _0x4e5da3["starRates"] && _0x4e5da3["starRates"]["one"] > 0x0 ? "1星 " + _0x13e757["formatPercent"](_0x4e5da3["starRates"]["one"]) + " 2星 " + _0x13e757["formatPercent"](_0x4e5da3["starRates"]["two"]) + " 3星 " + _0x13e757["formatPercent"](_0x4e5da3["starRates"]["three"]) : "平均回合 " + _0x13e757["formatNumber"](_0x4e5da3["avgRounds"]) + " 平均剩余 " + _0x13e757["formatNumber"](_0x4e5da3["avgRemainingUnits"]);
            const _0x42436d = null != _0x4e5da3["firstWinSeed"] ? " | 首胜Seed " + _0x4e5da3["firstWinSeed"] : "";
            return '<div class="xc-report-item' + (_0x54c576["length"] > 0x1 ? " xc-report-multi" : "") + "\x22>" + _0x567ca9 + '<div class="sim-candidate-team" style="margin:2px 0 4px;">' + _0x4380e1 + '</div><div class="xc-report-stats">' + _0x1b0d19 + '</div><div class="xc-report-extra">' + _0x43e408 + _0x42436d + "</div></div>";
          })["join"]("");
        }(_0x3ec368["title"], _0x32cb1f), _0x645e25["querySelectorAll"](".sim-hero-icon-img")["forEach"](async _0x2ea7d2 => {
          const _0x42785 = _0x2ea7d2["dataset"]["heroId"];
          if (_0x42785) {
            const _0x20af83 = await _0x14b198(parseInt(_0x42785));
            _0x20af83 && (_0x2ea7d2["src"] = _0x20af83);
          }
        });
      } else {
        const _0x299c3b = "text:" + _0x3ec368["title"] + ":" + _0x3ec368["text"];
        if (_0x299c3b === _0x3e3dec) return;
        _0x3e3dec = _0x299c3b, _0x645e25["className"] = "xc-report", _0x645e25["textContent"] = _0x3ec368["title"] + "\x0a" + _0x3ec368["text"];
      }
    } else "__empty__" !== _0x3e3dec && (_0x645e25["className"] = "xc-report", _0x645e25["textContent"] = "暂无结果", _0x3e3dec = "__empty__");
  }
  function _0x29cf56() {
    if (!_0x58a3e9["panel"] || !_0x58a3e9["jobProgressView"]) return;
    const _0x406695 = _0x58a3e9["panel"]["refs"];
    _0x58a3e9["jobProgressView"]["autoLogTab"] && (!function () {
      const _0x2ccb3f = document["getElementById"]("tab3");
      _0x2ccb3f && (_0x2ccb3f["checked"] = !0x0);
    }(), _0x58a3e9["jobProgressView"]["autoLogTab"] = !0x1), _0x406695["job"] && _0x58a3e9["activeJob"] && (_0x406695["job"]["textContent"] = _0x58a3e9["activeJob"]["title"] + " / 运行中"), _0x406695["reportBody"] && null != _0x58a3e9["jobProgressView"]["text"] && _0x573139({
      title: _0x58a3e9["jobProgressView"]["title"] || _0x58a3e9["activeJob"] && _0x58a3e9["activeJob"]["title"] || "任务进度",
      text: _0x58a3e9["jobProgressView"]["text"]
    }, _0x58a3e9["jobProgressView"]["reports"] || null);
  }
  function _0x384b33(_0x196058, _0x5acf73, _0x4bd595 = {}) {
    const _0x2f9d86 = null != _0x4bd595["autoLogTab"] ? !!_0x4bd595["autoLogTab"] : !(_0x58a3e9["jobProgressView"] && _0x58a3e9["jobProgressView"]["text"]);
    _0x58a3e9["jobProgressView"] = {
      title: _0x196058,
      text: _0x5acf73,
      reports: _0x4bd595["reports"] || null,
      autoLogTab: _0x2f9d86
    }, _0x58a3e9["jobProgressRaf"] || (_0x58a3e9["jobProgressRaf"] = requestAnimationFrame(() => {
      _0x58a3e9["jobProgressRaf"] = 0x0, _0x29cf56();
    }));
  }
  function _0x15455c(_0x4ea6ea, _0xd04324 = "info") {
    const _0x2b0df2 = {
      info: "[信息]",
      success: "[成功]",
      warning: "[警告]",
      error: "[错误]"
    };
    _0x58a3e9["mainPush"]["lastStatusType"] = _0xd04324, _0x58a3e9["mainPush"]["lastStatusText"] = _0x4ea6ea;
    const _0x512639 = "[" + _0x13e757["formatTime"](_0x13e757["now"]()) + "]" + (_0x2b0df2[_0xd04324] || _0x2b0df2["info"]) + "\x20" + _0x4ea6ea;
    _0x58a3e9["mainPush"]["logLines"]["unshift"](_0x512639), _0x58a3e9["mainPush"]["logLines"] = _0x58a3e9["mainPush"]["logLines"]["slice"](0x0, 0x3c), _0x1c2aee();
  }
  function _0x25f6f8() {
    _0x573139(function () {
      const _0x1f223f = ["状态 " + (_0x58a3e9["mainPush"]["isRunning"] ? "运行中" : "已停止"), "当前关卡 " + (null != _0x58a3e9["mainPush"]["lastLevelId"] ? _0x58a3e9["mainPush"]["lastLevelId"] : "-"), "当前Boss " + (_0x58a3e9["mainPush"]["lastBossName"] || "-"), "当前轮次 " + (null != _0x58a3e9["mainPush"]["lastRoundId"] ? _0x58a3e9["mainPush"]["lastRoundId"] : "-"), "重置计数 " + (_0x58a3e9["mainPush"]["resetCount"] || 0x0), ""];
      return _0x58a3e9["mainPush"]["logLines"]["length"] ? _0x1f223f["push"](..._0x58a3e9["mainPush"]["logLines"]) : _0x1f223f["push"]("暂无日志"), {
        title: "主线模拟推关",
        text: _0x1f223f["join"]("\x0a")
      };
    }()), function () {
      if (!_0x58a3e9["panel"] || !_0x58a3e9["panel"]["refs"]["mainPushLogCard"] || !_0x58a3e9["panel"]["refs"]["mainPushLogBody"]) return;
      const _0x28e536 = _0x58a3e9["mainPush"] && _0x58a3e9["mainPush"]["isRunning"],
        _0xed4530 = _0x58a3e9["mainPush"] && _0x58a3e9["mainPush"]["logLines"] ? _0x58a3e9["mainPush"]["logLines"] : [];
      _0x58a3e9["panel"]["refs"]["mainPushLogCard"]["style"]["display"] = _0x28e536 || _0xed4530["length"] ? "" : "none", _0xed4530["length"] ? (_0x58a3e9["panel"]["refs"]["mainPushLogBody"]["textContent"] = _0xed4530["slice"](-0x28)["join"]("\x0a"), _0x58a3e9["panel"]["refs"]["mainPushLogBody"]["scrollTop"] = _0x58a3e9["panel"]["refs"]["mainPushLogBody"]["scrollHeight"]) : _0x58a3e9["panel"]["refs"]["mainPushLogBody"]["textContent"] = "暂无日志";
    }();
  }
  function _0x5c541f(_0x589011, ..._0x439eb8) {
    return !!_0x589011 && ("function" == typeof _0x589011["emit"] ? (_0x589011["emit"](..._0x439eb8), !0x0) : "function" == typeof _0x589011["dispatch"] && (_0x589011["dispatch"](..._0x439eb8), !0x0));
  }
  function _0x2bc8fd(_0x4c58d5) {
    try {
      const _0x27c52e = _0xf23a54["getConfigs"](),
        _0x321742 = _0x27c52e && _0x27c52e["LevelConf"] && "function" == typeof _0x27c52e["LevelConf"]["getById"] ? _0x27c52e["LevelConf"]["getById"](_0x4c58d5) : null;
      if (!_0x321742 || !Array["isArray"](_0x321742["monsters"])) return "\u672a\u77e5";
      for (let _0x3d7912 = 0x0; _0x3d7912 < _0x321742["monsters"]["length"]; _0x3d7912 += 0x1) {
        const _0x244f59 = _0x321742["monsters"][_0x3d7912];
        if (Array["isArray"](_0x244f59)) for (let _0x5ebecd = 0x0; _0x5ebecd < _0x244f59["length"]; _0x5ebecd += 0x1) {
          const _0x31803d = _0x244f59[_0x5ebecd],
            _0xa85a6d = Array["isArray"](_0x31803d) ? Number(_0x31803d[0x0] || 0x0) : Number(_0x31803d && _0x31803d["monsterId"] ? _0x31803d["monsterId"] : 0x0),
            _0x316bc6 = Array["isArray"](_0x31803d) ? Number(_0x31803d[0x1] || 0x0) : Number(_0x31803d && _0x31803d["monsterType"] ? _0x31803d["monsterType"] : 0x0);
          if (!(_0x316bc6 < 0x1a || _0x316bc6 > 0x1c)) return _0x392ec4(_0xa85a6d, "Boss " + _0xa85a6d);
        }
      }
    } catch (_0x5e8044) {
      _0x13e757["warn"]("读取主线 Boss 名称失败", _0x5e8044);
    }
    return "\u672a\u77e5";
  }
  function _0x46ecb8() {
    const _0x231b86 = _0xf23a54["getLevelBattle"](),
      _0x5421a7 = _0x13e757["safeCall"](() => _0x231b86 && _0x231b86["options"] ? _0x231b86["options"]["battleData"] : null, null);
    if (!_0x5421a7) throw new Error("当前未找到主线自动战斗 battleData");
    const _0x10a12f = _0x13e757["deepClone"](_0x5421a7);
    return _0x10a12f["id"] = _0x13e757["now"](), _0x27cb40(_0x10a12f), _0x1acbd6(_0x10a12f), {
      battleData: _0x10a12f,
      levelId: Number(_0x35f70e(_0x10a12f && _0x10a12f["options"] ? _0x10a12f["options"] : null, "levelId", _0x13e757["safeCall"](() => _0xf23a54["getRole"]()["levelId"], 0x0)) || 0x0)
    };
  }
  function _0xd918f0() {
    _0x58a3e9["mainPush"]["compLordProto"] && _0x58a3e9["mainPush"]["originalCanAutoAttack"] && (_0x58a3e9["mainPush"]["compLordProto"]["canAutoAttack"] = _0x58a3e9["mainPush"]["originalCanAutoAttack"]), _0x58a3e9["mainPush"]["compLordProto"] = null, _0x58a3e9["mainPush"]["originalCanAutoAttack"] = null;
  }
  function _0x5646f8(_0x55632f = "manual") {
    if (!_0x58a3e9["mainPush"]["isRunning"] && !_0x58a3e9["mainPush"]["handler"]) return !0x1;
    const _0x27118b = _0x13e757["safeCall"](() => _0xf23a54["getGlobalSignal"](), null),
      _0x1a4a8f = _0x58a3e9["mainPush"]["signal"] || (_0x27118b && _0x27118b["LevelBattleStart"] ? _0x27118b["LevelBattleStart"] : null);
    return _0x1a4a8f && _0x58a3e9["mainPush"]["handler"] && function (_0x34872e, _0x391941, _0x3b92de = null) {
      if (!_0x34872e) return !0x1;
      if ("function" == typeof _0x34872e["off"]) try {
        return _0x34872e["off"](_0x391941, _0x3b92de), !0x0;
      } catch (_0x62c0ae) {
        try {
          return _0x34872e["off"](_0x391941), !0x0;
        } catch (_0x5f482c) {
          return !0x1;
        }
      }
      if ("function" == typeof _0x34872e["remove"]) try {
        return _0x34872e["remove"](_0x391941, _0x3b92de), !0x0;
      } catch (_0x8c1570) {
        try {
          return _0x34872e["remove"](_0x391941), !0x0;
        } catch (_0x259b6c) {
          return !0x1;
        }
      }
    }(_0x1a4a8f, _0x58a3e9["mainPush"]["handler"]), _0xd918f0(), _0x58a3e9["mainPush"]["resetTimer"] && (clearTimeout(_0x58a3e9["mainPush"]["resetTimer"]), _0x58a3e9["mainPush"]["resetTimer"] = null), _0x58a3e9["mainPush"]["isRunning"] = !0x1, _0x58a3e9["mainPush"]["isResetting"] = !0x1, _0x58a3e9["mainPush"]["handler"] = null, _0x58a3e9["mainPush"]["signal"] = null, _0x58a3e9["activeJob"] && "mainPush" === _0x58a3e9["activeJob"]["kind"] && (_0x58a3e9["activeJob"] = null), _0x15455c("button" === _0x55632f || "manual" === _0x55632f ? "已停止模拟推关" : "模拟推关已停止：" + _0x55632f, "warning"), _0x1c2aee(), !0x0;
  }
  async function _0x1a2fc1(..._0x3c423a) {
    if (!_0x58a3e9["mainPush"]["isRunning"] || _0x58a3e9["mainPush"]["isResetting"]) return;
    const _0x1db483 = function (_0x5a030e) {
      if (Array["isArray"](_0x5a030e) && _0x5a030e["length"] >= 0x2 && Number["isFinite"](Number(_0x5a030e[0x1]))) return Number(_0x5a030e[0x1]);
      const _0x7a9f7c = Array["isArray"](_0x5a030e) && _0x5a030e["length"] ? _0x5a030e[0x0] : null;
      if (_0x7a9f7c && "object" == typeof _0x7a9f7c) {
        const _0x6fb546 = [_0x7a9f7c["roundId"], _0x7a9f7c["round"], _0x7a9f7c["roundIndex"], _0x7a9f7c["curRound"]];
        for (let _0xe1a74 = 0x0; _0xe1a74 < _0x6fb546["length"]; _0xe1a74 += 0x1) {
          const _0x2c0c9a = Number(_0x6fb546[_0xe1a74]);
          if (Number["isFinite"](_0x2c0c9a) && _0x2c0c9a > 0x0) return _0x2c0c9a;
        }
      }
      return 0x1;
    }(_0x3c423a);
    if (_0x58a3e9["mainPush"]["lastRoundId"] = _0x1db483, 0x1 === _0x1db483) try {
      const _0x97033f = await async function () {
          const _0x3fab7c = _0x46ecb8(),
            _0x56b9e2 = _0xf23a54["getDefaultSimConfig"](_0x3fab7c["battleData"]),
            _0x49c241 = await _0xf23a54["simulateBattle"](_0x3fab7c["battleData"], _0x56b9e2["extend"], _0x56b9e2["timeScale"]);
          return {
            battleData: _0x3fab7c["battleData"],
            levelId: _0x3fab7c["levelId"],
            result: _0x49c241,
            bossName: _0x2bc8fd(_0x3fab7c["levelId"])
          };
        }(),
        _0x4af473 = _0x97033f["levelId"];
      if (null != _0x58a3e9["mainPush"]["lastLevelId"] && _0x58a3e9["mainPush"]["lastLevelId"] !== _0x4af473 && (_0x58a3e9["mainPush"]["resetCount"] = 0x0), _0x58a3e9["mainPush"]["lastLevelId"] = _0x4af473, _0x58a3e9["mainPush"]["lastBossName"] = _0x97033f["bossName"], _0x58a3e9["mainPush"]["resetCount"] += 0x1, _0x4b632b("mainPush.tick"), _0x97033f["result"] && _0x97033f["result"]["isWin"]) _0x15455c("关卡 " + _0x4af473 + " [第 " + _0x58a3e9["mainPush"]["resetCount"] + " 次] 胜利", "success");else {
        if (_0x15455c("关卡 " + _0x4af473 + " [第 " + _0x58a3e9["mainPush"]["resetCount"] + " 次] 失败，准备重置", "warning"), _0x58a3e9["mainPush"]["resetCount"] >= 0xa) return _0x15455c("关卡 " + _0x4af473 + " 连续失败 " + _0x58a3e9["mainPush"]["resetCount"] + " 次，已自动停止模拟推关", "error"), void _0x5646f8("连续失败次数过多");
        _0x58a3e9["mainPush"]["isResetting"] || (_0x58a3e9["mainPush"]["isResetting"] = !0x0, _0x58a3e9["mainPush"]["resetTimer"] && (clearTimeout(_0x58a3e9["mainPush"]["resetTimer"]), _0x58a3e9["mainPush"]["resetTimer"] = null), _0x58a3e9["mainPush"]["resetTimer"] = setTimeout(() => {
          _0x58a3e9["mainPush"]["resetTimer"] = null, _0x58a3e9["mainPush"]["isResetting"] = !0x1;
          const _0x12f241 = _0x13e757["safeCall"](() => _0xf23a54["getGlobalSignal"](), null);
          _0x5c541f(_0x12f241 && _0x12f241["LevelBattleReset"] ? _0x12f241["LevelBattleReset"] : null) || _0x15455c("触发主线重置失败：LevelBattleReset 不可用", "error");
        }, 0x12c));
      }
    } catch (_0xb8b309) {
      _0x15455c("模拟推关异常：" + (_0xb8b309 && _0xb8b309["message"] ? _0xb8b309["message"] : String(_0xb8b309)), "error");
    }
  }
  async function _0xc52948() {
    if (_0x58a3e9["mainPush"]["isRunning"]) throw new Error("模拟推关已经在运行中");
    if (_0x58a3e9["activeJob"]) throw new Error("已有任务执行中：" + _0x58a3e9["activeJob"]["title"]);
    await _0x13e757["syncRoleInfo"]("startMainPush");
    const _0x554606 = _0x13e757["safeCall"](() => _0xf23a54["getGlobalSignal"](), null),
      _0x16b8ef = _0x554606 && _0x554606["LevelBattleStart"] ? _0x554606["LevelBattleStart"] : null;
    if (!_0x16b8ef) throw new Error("LevelBattleStart 信号不可用");
    _0x46ecb8();
    const _0x680e2f = _0x13e757["safeCall"](() => _0xf23a54["require"]("comp-lord")["CompLord"], null);
    if (!_0x680e2f || !_0x680e2f["prototype"] || "function" != typeof _0x680e2f["prototype"]["canAutoAttack"]) throw new Error("CompLord.canAutoAttack 不可用");
    if (_0x58a3e9["lastSingleRun"] = null, _0x58a3e9["lastDebugError"] = null, _0x58a3e9["lastReport"] = null, _0x58a3e9["lastReports"] = [], _0x5711d4(null), _0x58a3e9["mainPush"]["isRunning"] = !0x0, _0x58a3e9["mainPush"]["isResetting"] = !0x1, _0x58a3e9["mainPush"]["resetCount"] = 0x0, _0x58a3e9["mainPush"]["lastLevelId"] = null, _0x58a3e9["mainPush"]["lastBossName"] = "", _0x58a3e9["mainPush"]["lastRoundId"] = null, _0x58a3e9["mainPush"]["logLines"] = [], _0x58a3e9["mainPush"]["keepReport"] = !0x0, _0x58a3e9["mainPush"]["handler"] = _0x1a2fc1, _0x58a3e9["mainPush"]["signal"] = _0x16b8ef, _0x58a3e9["mainPush"]["compLordProto"] = _0x680e2f["prototype"], _0x58a3e9["mainPush"]["originalCanAutoAttack"] = _0x680e2f["prototype"]["canAutoAttack"], _0x58a3e9["mainPush"]["resetTimer"] && (clearTimeout(_0x58a3e9["mainPush"]["resetTimer"]), _0x58a3e9["mainPush"]["resetTimer"] = null), _0x680e2f["prototype"]["canAutoAttack"] = function () {
      return !0x1;
    }, !function (_0x14e6fd, _0x24bb48, _0x20a4ac = null) {
      if (!_0x14e6fd) return !0x1;
      if ("function" == typeof _0x14e6fd["on"]) try {
        return _0x14e6fd["on"](_0x24bb48, _0x20a4ac), !0x0;
      } catch (_0x38afa2) {
        try {
          return _0x14e6fd["on"](_0x24bb48), !0x0;
        } catch (_0x253984) {
          return !0x1;
        }
      }
      if ("function" == typeof _0x14e6fd["add"]) try {
        return _0x14e6fd["add"](_0x24bb48, _0x20a4ac), !0x0;
      } catch (_0x4c48ef) {
        try {
          return _0x14e6fd["add"](_0x24bb48), !0x0;
        } catch (_0x2230eb) {
          return !0x1;
        }
      }
      return !0x1;
    }(_0x16b8ef, _0x58a3e9["mainPush"]["handler"])) throw _0xd918f0(), _0x58a3e9["mainPush"]["isRunning"] = !0x1, _0x58a3e9["mainPush"]["handler"] = null, _0x58a3e9["mainPush"]["signal"] = null, new Error("LevelBattleStart 监听注册失败");
    _0x58a3e9["activeJob"] = {
      title: "模拟推关",
      kind: "mainPush",
      startedAt: _0x13e757["now"]()
    }, _0x4b632b("mainPush.start"), _0x15455c("主线模拟推关已启动", "success"), _0x25f6f8(), _0x5c541f(_0x554606 && _0x554606["LevelBattleReset"] ? _0x554606["LevelBattleReset"] : null) || _0x15455c("首次触发主线重置失败：LevelBattleReset 不可用", "error");
  }
  function _0x5a98c8(_0xe72f81, _0x28b52a) {
    if (!_0x28b52a) return "-";
    if ("tower" === _0xe72f81) return _0x28b52a["stageName"] || (null != _0x28b52a["stageId"] ? _0x24cb05(_0x28b52a["stageId"]) : "-");
    if ("evoTower" === _0xe72f81) return _0x28b52a["stageName"] || (null != _0x28b52a["towerId"] ? _0x24cb05(_0x28b52a["towerId"]) : "-");
    if ("genie" === _0xe72f81) {
      const _0x2839c3 = _0x1b7069((_0x28b52a["title"] || "")["includes"]("\u6df1\u6d77") ? "genieShenhai" : "genie", null != _0x28b52a["genieLevelId"] ? _0x28b52a["genieLevelId"] : _0x28b52a["genieId"]);
      if (_0x2839c3) return _0x2839c3["label"];
      if (null != _0x28b52a["genieLevelId"]) {
        if ((_0x28b52a["title"] || "")["includes"]("\u6df1\u6d77")) {
          const _0xa849fe = Number(_0x28b52a["genieLevelId"]) % 0x3e8 || Number(_0x28b52a["genieLevelId"]);
          return (_0x28b52a["title"] || "\u706f\u795e") + "\x20第" + _0xa849fe + "层";
        }
        return (_0x28b52a["title"] || "\u706f\u795e") + " Level " + _0x28b52a["genieLevelId"];
      }
      return null != _0x28b52a["genieId"] ? (_0x28b52a["title"] || "\u706f\u795e") + "\x20#" + _0x28b52a["genieId"] : "\u706f\u795e";
    }
    if ("nightmareStar" === _0xe72f81) {
      const _0x448749 = _0x1b7069("nightmareStar", _0x28b52a["bossId"]);
      return (_0x448749 ? _0x448749["label"] : null != _0x28b52a["bossId"] ? "Boss " + _0x28b52a["bossId"] : "星级挑战") + "，剩余次数 " + (null != _0x28b52a["remainStarFightCount"] ? _0x28b52a["remainStarFightCount"] : "-");
    }
    if ("nightmare" === _0xe72f81) {
      const _0x3bf9f7 = _0x1b7069("nightmare", _0x28b52a["bossId"]);
      if (_0x3bf9f7) return _0x3bf9f7["label"];
      if (null != _0x28b52a["hallNumber"] || _0x28b52a["bossName"]) return "" + (null != _0x28b52a["hallNumber"] ? "第" + _0x28b52a["hallNumber"] + "殿" : "十殿试炼") + (_0x28b52a["bossName"] ? " - " + _0x28b52a["bossName"] : "");
      return "Boss " + (null != _0x28b52a["bossId"] ? _0x28b52a["bossId"] : "-") + "，房间 " + (null != _0x28b52a["roomId"] ? _0x28b52a["roomId"] : "-");
    }
    return "capture" === _0xe72f81 ? _0x28b52a["source"] || "最近捕获" : "-";
  }
  function _0x390686(_0x3d2fb1) {
    switch (_0x3d2fb1) {
      case "tower":
        return "咸将塔改成双框填写了，左框填前段，右框填后段，例如 385 和 8；脚本会自动换算成内部 stageId。";
      case "evoTower":
        return "怪异塔也改成双框填写，左框填前段，右框填后段，例如 35 和 10；脚本会自动换算成真实 towerId。";
      case "genie":
        return "普通灯神现在会标出魏、蜀、吴、群；建议直接用下拉选择，或输入“魏-12”这种格式，脚本会自动换算成对应的 genieLevelId。";
      case "genieShenhai":
        return "深海灯神支持直接选第 1 到第 10 层，也支持下拉选择；脚本会自动补成真实 levelId。";
      case "legionBoss":
        return "俱乐部Boss支持直接输入第几只，也支持下拉选择 1-150；脚本会从 LegionBossConf 读取怪物配置并优先走预模拟。";
      case "nightmare":
        return "十殿试炼支持直接选殿数；第 9 殿已拆成 9-1 和 9-2 两个形态，默认输入 9 会优先第一形态。";
      case "nightmareStar":
        return "星级挑战可以直接输入关卡序号，也可以用下拉选择；脚本会自动换算成对应 bossId。";
      case "capture":
        return "使用最近一次抓到的战斗数据，不需要填写目标。";
      default:
        return "自动识别模式时可以留空；也可以先点“识别当前玩法”自动回填。";
    }
  }
  function _0xe1c27(_0x2636c1) {
    switch (_0x2636c1) {
      case "tower":
        return "例如 385-8";
      case "evoTower":
        return "例如 35-10";
      case "genie":
        return "例如 魏-12";
      case "genieShenhai":
        return "例如 7";
      case "legionBoss":
        return "例如 75";
      case "nightmare":
        return "例如 9-1";
      case "nightmareStar":
        return "例如 3";
      default:
        return "目标层数 / 关卡序号";
    }
  }
  function _0x5728c3() {
    const _0x221872 = _0x5f28c3();
    if (_0x221872["length"]) {
      const _0x40cf9c = new Map();
      _0x221872["slice"]()["sort"]((_0x5de860, _0x2a8217) => Number(_0x5de860["hallNumber"] || 0x0) - Number(_0x2a8217["hallNumber"] || 0x0) || Number(_0x5de860["phaseIndex"] || 0x0) - Number(_0x2a8217["phaseIndex"] || 0x0) || Number(_0x5de860["hidden"] || 0x0) - Number(_0x2a8217["hidden"] || 0x0) || Number(_0x5de860["bossId"] || 0x0) - Number(_0x2a8217["bossId"] || 0x0))["forEach"](_0x4bcffb => {
        const _0x173470 = Number(_0x4bcffb["hallNumber"] || 0x0);
        _0x40cf9c["has"](_0x173470) || _0x40cf9c["set"](_0x173470, []), _0x40cf9c["get"](_0x173470)["push"](_0x4bcffb);
      });
      const _0x12cad0 = [];
      if (Array["from"](_0x40cf9c["keys"]())["sort"]((_0x2ee90c, _0x2c70fa) => _0x2ee90c - _0x2c70fa)["forEach"](_0x52010a => {
        const _0x44e9d5 = _0x40cf9c["get"](_0x52010a) || [];
        if (!_0x44e9d5["length"]) return;
        if (0x9 === Number(_0x52010a) && _0x44e9d5["length"] > 0x1) return void _0x44e9d5["slice"]()["sort"]((_0x5c1222, _0x4e3e05) => Number(_0x5c1222["phaseIndex"] || 0x0) - Number(_0x4e3e05["phaseIndex"] || 0x0) || Number(_0x4e3e05["hidden"] || 0x0) - Number(_0x5c1222["hidden"] || 0x0) || Number(_0x5c1222["bossId"] || 0x0) - Number(_0x4e3e05["bossId"] || 0x0))["forEach"]((_0x26e28c, _0x4d062a) => {
          const _0x418a99 = _0x546e4c(_0x26e28c, _0x4d062a + 0x1);
          _0x418a99 && _0x12cad0["push"](_0x418a99);
        });
        const _0x15ae18 = _0x44e9d5["find"](_0x3ea2a8 => 0x0 === Number(_0x3ea2a8["hidden"] || 0x0)) || _0x44e9d5[0x0],
          _0x100491 = _0x546e4c(_0x15ae18, Number(_0x15ae18["phaseIndex"] || 0x0));
        _0x100491 && _0x12cad0["push"](_0x100491);
      }), _0x12cad0["length"]) return _0x5ae5c8(_0x12cad0);
    }
    const _0x542080 = [...[_0x458f53("NightMareBossConf", "NightMareConf", "NightmareConf", "NightMareRoomConf")]["filter"](Boolean), ..._0x43cfc7((_0x22de58, _0x39b4b9) => !(!_0x22de58 || !_0x39b4b9) && !(!_0x22de58["includes"]("NightMare") || _0x22de58["includes"]("Star")) && !!_0x487691(_0x39b4b9)["length"])["map"](_0x13ff12 => _0x13ff12["table"])];
    let _0x4da7e2 = [];
    return _0x542080["forEach"](_0x96e9b7 => {
      const _0x38ccc9 = new Map();
      _0x487691(_0x96e9b7)["forEach"]((_0x584193, _0x25efad) => {
        const _0x20e4e1 = _0x4bb397(_0x584193, ["bossId", "monsterCfgId", "monsterId", "id", "ID"], null);
        if (null == _0x20e4e1) return;
        const _0x5d0633 = _0x4bb397(_0x584193, ["roomId", "room", "idx", "index", "order"], _0x25efad + 0x1);
        _0x38ccc9["has"](_0x5d0633) || _0x38ccc9["set"](_0x5d0633, []), _0x38ccc9["get"](_0x5d0633)["push"]({
          bossId: _0x20e4e1,
          hallNumber: _0x5d0633,
          hidden: _0x4bb397(_0x584193, ["hidden"], 0x0),
          displayName: _0x5d5d5f(_0x584193, ["name", "title"], ""),
          description: ""
        });
      });
      const _0x565aeb = [];
      Array["from"](_0x38ccc9["keys"]())["sort"]((_0x23cdfb, _0x31b5bf) => _0x23cdfb - _0x31b5bf)["forEach"](_0x430f3d => {
        const _0x211217 = _0x38ccc9["get"](_0x430f3d) || [];
        if (!_0x211217["length"]) return;
        if (0x9 === Number(_0x430f3d) && _0x211217["length"] > 0x1) return void _0x211217["slice"]()["sort"]((_0x3daeb5, _0xe1d214) => Number(_0xe1d214["hidden"] || 0x0) - Number(_0x3daeb5["hidden"] || 0x0) || Number(_0x3daeb5["bossId"] || 0x0) - Number(_0xe1d214["bossId"] || 0x0))["forEach"]((_0x5df36b, _0x2dc46e) => {
          const _0x3ea99a = _0x546e4c(_0x5df36b, _0x2dc46e + 0x1);
          _0x3ea99a && _0x565aeb["push"](_0x3ea99a);
        });
        const _0x8dc7a5 = _0x546e4c(_0x211217[0x0], 0x0);
        _0x8dc7a5 && _0x565aeb["push"](_0x8dc7a5);
      });
      const _0x377a77 = _0x5ae5c8(_0x565aeb);
      (_0x377a77["length"] >= 0x8 && _0x377a77["length"] <= 0xc || !_0x4da7e2["length"] && _0x377a77["length"]) && (_0x4da7e2 = _0x377a77);
    }), _0x4da7e2;
  }
  const _0x255f00 = {
    tower: {
      key: "tower",
      label: _0x505384["tower"],
      getContext() {
        const _0x90c68d = _0xf23a54["getModuleByTypeKey"]("TOWER"),
          _0x27977f = _0x58a3e9["modeCaches"]["tower"],
          _0x1fd466 = _0x13e757["safeCall"](() => _0x90c68d["curStageInfo"]["id"], _0x13e757["safeCall"](() => _0x27977f["context"]["stageId"], null)),
          _0x46c700 = _0x13e757["safeCall"](() => _0x90c68d["curStageInfo"]["monster"], _0x13e757["safeCall"](() => _0x27977f["context"]["monster"], null)),
          _0x2072f3 = _0x535a49(_0x1fd466, _0x46c700);
        return _0x5be33a("tower", {
          stageId: _0x1fd466,
          stageName: _0x13e757["safeCall"](() => _0x90c68d["constructor"]["getTowerDetailName"](_0x1fd466), null) || (null != _0x1fd466 ? "关卡 " + _0x1fd466 : "-"),
          towerEnerge: _0x13e757["safeCall"](() => _0x90c68d["towerEnerge"], _0x13e757["safeCall"](() => _0x27977f["context"]["towerEnerge"], 0x0)),
          monster: _0x2072f3["length"] ? _0x2072f3["map"](_0x30ca17 => [_0x30ca17["monsterId"], _0x30ca17["index"], _0x30ca17["level"]]) : _0x46c700
        });
      },
      getScore() {
        let _0x41b7b4 = 0x0;
        return null != this["getContext"]()["stageId"] && (_0x41b7b4 += 0x14), _0x58a3e9["modeCaches"]["tower"] && _0x58a3e9["modeCaches"]["tower"]["capturedAt"] && (_0x41b7b4 += 0x64), _0x58a3e9["modeCaches"]["tower"] && _0x58a3e9["modeCaches"]["tower"]["inputData"] && (_0x41b7b4 += 0x28), _0x41b7b4;
      },
      capabilities() {
        const _0x21ecc2 = this["getContext"](),
          _0x2d690d = _0x58a3e9["modeCaches"]["tower"];
        return null != _0x21ecc2["stageId"] && _0xa9f8ab() && _0x535a49(_0x21ecc2["stageId"], _0x21ecc2["monster"])["length"] ? _0x9989df : _0x2d690d && _0x2d690d["inputData"] ? _0x33571f : _0x390640;
      },
      async ensureAuthorityData() {
        const _0x338c53 = this["getContext"]();
        if (!(null != _0x338c53["stageId"] && _0xa9f8ab() && _0x535a49(_0x338c53["stageId"], _0x338c53["monster"])["length"] || _0x58a3e9["modeCaches"]["tower"] && _0x58a3e9["modeCaches"]["tower"]["battleData"])) throw new Error("咸将塔当前既没有可预构造的骨架，也没有权威 battleData。请先进入主线页面或打一场后再试。");
      },
      buildDraft() {
        const _0x2b9108 = _0x58a3e9["modeCaches"]["tower"],
          _0x9cb20c = this["getContext"](),
          _0x1a747c = _0x535a49(_0x9cb20c["stageId"], _0x9cb20c["monster"]);
        if (null != _0x9cb20c["stageId"] && _0x1a747c["length"] && _0xa9f8ab()) {
          const _0x3ec430 = _0xf23a54["getReusableBattleSkeleton"](!0x0);
          return _0x175fff("tower", _0x9cb20c, _0x9989df, (_0x10d59a, _0x38b8ee) => _0x57730d(_0x3ec430, "tower", 0x0, _0x10d59a, _0x38b8ee, _0x1a747c, {
            options: {
              towerId: Number(_0x9cb20c["stageId"])
            }
          }), (_0x3d3a52, _0x34ce73) => {
            const _0x176230 = _0xf23a54["getModuleByTypeKey"]("TOWER");
            return _0x176230 && "function" == typeof _0x176230["createBattleInputData"] ? _0x13e757["safeCall"](() => _0x176230["createBattleInputData"](_0x34ce73, _0x3d3a52, _0x9cb20c["towerEnerge"] || 0x0), _0x1dea53(_0x34ce73, _0x3d3a52, "tower")) : _0x1dea53(_0x34ce73, _0x3d3a52, "tower");
          });
        }
        if (!_0x2b9108 || !_0x2b9108["battleData"]) throw new Error("咸将塔当前没有可用 battleData");
        return _0x2153a3("tower", _0x9cb20c, this["capabilities"](), _0x2b9108, (_0x579936, _0x518f61, _0x2df5f9) => {
          const _0x32566c = _0xf23a54["getModuleByTypeKey"]("TOWER");
          return _0x32566c && "function" == typeof _0x32566c["createBattleInputData"] ? _0x32566c["createBattleInputData"](_0x518f61, _0x2df5f9, _0x9cb20c["towerEnerge"] || 0x0) : _0x1f7919(_0x579936["inputData"] || _0x58a3e9["latestCapture"] && _0x58a3e9["latestCapture"]["input"], _0x518f61, _0x2df5f9);
        });
      }
    },
    genie: {
      key: "genie",
      label: _0x505384["genie"],
      getContext() {
        const _0x5a726c = _0x58a3e9["modeCaches"]["genie"],
          _0x3e895 = _0x13e757["safeCall"](() => _0xf23a54["getConfigs"](), null);
        let _0x43ce95 = _0x13e757["safeCall"](() => _0x5a726c["context"]["genieId"], null),
          _0x4ffd4f = _0x13e757["safeCall"](() => _0x5a726c["context"]["genieLevelId"], null);
        null == _0x4ffd4f && (_0x4ffd4f = _0x35f70e(_0x13e757["safeCall"](() => _0x5a726c["battleData"]["options"], null), "genieLevelId", null)), null == _0x4ffd4f && (_0x4ffd4f = _0x35f70e(_0x13e757["safeCall"](() => _0x5a726c["inputData"]["battleData"]["options"], null), "genieLevelId", null)), null == _0x43ce95 && null != _0x4ffd4f && (_0x43ce95 = _0x4ffd4f);
        const _0x5d6e5c = null != _0x4ffd4f ? Math["floor"](Number(_0x4ffd4f) / 0x3e8) : null != _0x43ce95 ? Math["floor"](Number(_0x43ce95) / 0x3e8) : null,
          _0x51a48f = _0x3e895 && _0x3e895["Club"] ? _0x3e895["Club"]["SHENHAI"] : null;
        return _0x5be33a("genie", {
          genieId: _0x43ce95,
          genieLevelId: _0x4ffd4f,
          clubId: _0x5d6e5c,
          title: null != _0x5d6e5c && null != _0x51a48f && _0x5d6e5c === _0x51a48f ? "深海灯神" : _0x4c689a(_0x5d6e5c),
          lordWeaponId: _0x13e757["safeCall"](() => _0x5a726c["context"]["lordWeaponId"], null)
        });
      },
      getScore() {
        let _0x472f84 = 0x0;
        return _0x58a3e9["modeCaches"]["genie"] && _0x58a3e9["modeCaches"]["genie"]["capturedAt"] && (_0x472f84 += 0x64), _0x58a3e9["modeCaches"]["genie"] && _0x58a3e9["modeCaches"]["genie"]["inputData"] && (_0x472f84 += 0x28), null != _0x13e757["safeCall"](() => _0x58a3e9["modeCaches"]["genie"]["context"]["genieId"], null) && (_0x472f84 += 0x14), _0x472f84;
      },
      capabilities() {
        const _0x3ac92f = this["getContext"](),
          _0x16d309 = _0x58a3e9["modeCaches"]["genie"];
        return null != _0x3ac92f["genieLevelId"] && _0xa9f8ab() && _0x1e68a0(_0x3ac92f)["monsters"]["length"] ? _0x9989df : _0x16d309 && _0x16d309["inputData"] ? _0x33571f : _0x390640;
      },
      async ensureAuthorityData() {
        const _0xfe52e6 = this["getContext"]();
        if (!(null != _0xfe52e6["genieLevelId"] && _0xa9f8ab() && _0x1e68a0(_0xfe52e6)["monsters"]["length"] || _0x58a3e9["modeCaches"]["genie"] && _0x58a3e9["modeCaches"]["genie"]["battleData"])) throw new Error("灯神当前缺少 genieLevelId 或可复用骨架。深海灯神建议直接填写 5007 这种 levelId，或先真实打一场。");
      },
      buildDraft() {
        const _0xdb478e = _0x58a3e9["modeCaches"]["genie"],
          _0x263cd5 = this["getContext"](),
          _0x34ce28 = _0x1e68a0(_0x263cd5, _0x13e757["safeCall"](() => _0xdb478e["context"]["monster"], null));
        if (_0x34ce28["genieLevelId"] && _0x34ce28["monsters"]["length"] && _0xa9f8ab()) {
          const _0x5ec043 = _0xf23a54["getReusableBattleSkeleton"](!0x0);
          return _0x175fff("genie", Object["assign"]({}, _0x263cd5, {
            genieLevelId: _0x34ce28["genieLevelId"]
          }), _0x9989df, (_0x300947, _0x27a430) => _0x57730d(_0x5ec043, "genie", 0x0, _0x300947, _0x27a430, _0x34ce28["monsters"], {
            options: {
              genieLevelId: Number(_0x34ce28["genieLevelId"])
            }
          }), (_0x4798bb, _0x419d9f) => {
            const _0x15c8f5 = _0xf23a54["getModuleByTypeKey"]("GENIE");
            if (_0x15c8f5 && "function" == typeof _0x15c8f5["createBattleInputData"]) {
              const _0x7f6e53 = _0x1df99b(_0x263cd5);
              return null != _0x7f6e53 && (_0x15c8f5["mapId"] = _0x7f6e53), _0x13e757["safeCall"](() => _0x15c8f5["createBattleInputData"](_0x419d9f, _0x4798bb), _0x1dea53(_0x419d9f, _0x4798bb, "genie"));
            }
            return _0x1dea53(_0x419d9f, _0x4798bb, "genie");
          });
        }
        if (!_0xdb478e || !_0xdb478e["battleData"]) throw new Error("灯神当前没有可用 battleData");
        return _0x2153a3("genie", _0x263cd5, this["capabilities"](), _0xdb478e, (_0x583709, _0x27ce5a, _0x2ad909) => {
          const _0x5e8f32 = _0xf23a54["getModuleByTypeKey"]("GENIE");
          if (_0x5e8f32 && "function" == typeof _0x5e8f32["createBattleInputData"]) {
            const _0x5a1c13 = _0x1df99b(_0x263cd5);
            return null != _0x5a1c13 && (_0x5e8f32["mapId"] = _0x5a1c13), _0x5e8f32["createBattleInputData"](_0x27ce5a, _0x2ad909);
          }
          return _0x1f7919(_0x583709["inputData"] || _0x58a3e9["latestCapture"] && _0x58a3e9["latestCapture"]["input"], _0x27ce5a, _0x2ad909);
        });
      }
    },
    evoTower: {
      key: "evoTower",
      label: _0x505384["evoTower"],
      getContext() {
        const _0x4b7df4 = _0xf23a54["getModuleByTypeKey"]("EVOTOWER"),
          _0x1f657a = _0x58a3e9["modeCaches"]["evoTower"],
          _0x227c60 = _0x13e757["safeCall"](() => _0x4b7df4["curStageInfo"]["id"], _0x13e757["safeCall"](() => _0x1f657a["context"]["towerId"], null)),
          _0x50e4e7 = _0x13e757["safeCall"](() => _0x4b7df4["curStageInfo"]["monster"], _0x13e757["safeCall"](() => _0x1f657a["context"]["monster"], null)),
          _0x3f65da = _0x53aea5(_0x227c60, _0x50e4e7);
        return _0x5be33a("evoTower", {
          towerId: _0x227c60,
          stageName: null != _0x227c60 ? "怪异塔 " + _0x227c60 : "怪异塔",
          energy: _0x13e757["safeCall"](() => _0x4b7df4["evoTower"]["energy"], _0x13e757["safeCall"](() => _0x1f657a["context"]["energy"], null)),
          monster: _0x3f65da["length"] ? _0x3f65da["map"](_0x82fc42 => [_0x82fc42["monsterId"], _0x82fc42["index"], _0x82fc42["level"]]) : _0x50e4e7
        });
      },
      getScore() {
        let _0x18d9ca = 0x0;
        return null != this["getContext"]()["towerId"] && (_0x18d9ca += 0x19), _0x58a3e9["modeCaches"]["evoTower"] && _0x58a3e9["modeCaches"]["evoTower"]["capturedAt"] && (_0x18d9ca += 0x64), _0x18d9ca;
      },
      capabilities() {
        const _0xdeaf41 = this["getContext"](),
          _0x3971eb = _0x58a3e9["modeCaches"]["evoTower"];
        return null != _0xdeaf41["towerId"] && _0xa9f8ab() && _0x53aea5(_0xdeaf41["towerId"], _0xdeaf41["monster"])["length"] ? _0x9989df : _0x3971eb && _0x3971eb["inputData"] ? _0x33571f : _0x390640;
      },
      async ensureAuthorityData() {
        const _0x1d4253 = this["getContext"]();
        if (null != _0x1d4253["towerId"] && _0xa9f8ab() && _0x53aea5(_0x1d4253["towerId"], _0x1d4253["monster"])["length"]) return;
        if (_0x58a3e9["modeCaches"]["evoTower"] && _0x58a3e9["modeCaches"]["evoTower"]["battleData"]) return;
        const _0x1c91ec = _0xf23a54["getModuleByTypeKey"]("EVOTOWER");
        if (!_0x1c91ec || "function" != typeof _0x1c91ec["sendReadyFight"]) throw new Error("未找到怪异塔 readyFight 接口");
        if (!(await _0x1c91ec["sendReadyFight"]())) throw new Error("怪异塔 readyFight 失败");
        await _0x13e757["sleep"](0x3c);
        const _0x3bf6d7 = _0x13e757["safeCall"](() => _0x1c91ec["readyFightResp"]["battleData"], null);
        if (_0x3bf6d7 && _0x2c5525("evoTower", _0x3bf6d7, {
          context: this["getContext"](),
          source: "EVOTOWER.sendReadyFight"
        }), !_0x58a3e9["modeCaches"]["evoTower"] || !_0x58a3e9["modeCaches"]["evoTower"]["battleData"]) throw new Error("怪异塔在 readyFight 后仍未拿到 battleData，请确认当前页面就是你选中的那一层。");
      },
      buildDraft() {
        const _0x42d33d = _0x58a3e9["modeCaches"]["evoTower"],
          _0x2e0b07 = this["getContext"](),
          _0x2d9c10 = _0x53aea5(_0x2e0b07["towerId"], _0x2e0b07["monster"]);
        if (null != _0x2e0b07["towerId"] && _0x2d9c10["length"] && _0xa9f8ab()) {
          const _0x251b12 = _0xf23a54["getReusableBattleSkeleton"](!0x0);
          return _0x175fff("evoTower", _0x2e0b07, _0x9989df, (_0x3ef1da, _0x2a8102) => _0x57730d(_0x251b12, "evoTower", 0x0, _0x3ef1da, _0x2a8102, _0x2d9c10, {
            options: {
              towerId: Number(_0x2e0b07["towerId"])
            }
          }), (_0x516a10, _0x215124) => {
            const _0x5b0a45 = _0xf23a54["getModuleByTypeKey"]("EVOTOWER");
            return _0x5b0a45 && "function" == typeof _0x5b0a45["createBattleInputData"] ? _0x13e757["safeCall"](() => _0x5b0a45["createBattleInputData"](_0x215124, _0x516a10, _0x2e0b07["energy"] || 0x0), _0x1dea53(_0x215124, _0x516a10, "evoTower")) : _0x1dea53(_0x215124, _0x516a10, "evoTower");
          });
        }
        if (!_0x42d33d || !_0x42d33d["battleData"]) throw new Error("怪异塔当前没有可用 battleData");
        return _0x2153a3("evoTower", _0x2e0b07, this["capabilities"](), _0x42d33d, (_0x3ef80c, _0x1aeb0d, _0x35f42e) => {
          const _0x3f237f = _0xf23a54["getModuleByTypeKey"]("EVOTOWER");
          return _0x3f237f && "function" == typeof _0x3f237f["createBattleInputData"] ? _0x3f237f["createBattleInputData"](_0x1aeb0d, _0x35f42e, _0x2e0b07["energy"] || 0x0) : _0x1f7919(_0x3ef80c["inputData"] || _0x58a3e9["latestCapture"] && _0x58a3e9["latestCapture"]["input"], _0x1aeb0d, _0x35f42e);
        });
      }
    },
    legionBoss: {
      key: "legionBoss",
      label: _0x505384["legionBoss"],
      getContext() {
        const _0x4aa357 = _0xf23a54["getModuleByTypeKey"]("LEGION"),
          _0x391069 = _0x58a3e9["modeCaches"]["legionBoss"],
          _0x9aee3c = _0x13e757["safeCall"](() => _0x4aa357["currentBossInfo"], null) || _0x13e757["safeCall"](() => _0x4aa357["legion"]["currentBossInfo"], null) || _0x13e757["safeCall"](() => _0x4aa357["legion"]["currentBoss"], null) || _0x13e757["safeCall"](() => _0x391069["context"]["currentBossInfo"], null),
          _0x1ee388 = _0x4bb397(_0x9aee3c || {}, ["legionBossId", "id", "ID"], _0x13e757["safeCall"](() => _0x391069["context"]["legionBossId"], null)),
          _0x438704 = _0x4bb397(_0x9aee3c || {}, ["legionBossShow"], _0x13e757["safeCall"](() => _0x391069["context"]["legionBossShow"], null)),
          _0x9414a1 = _0x13e757["safeCall"](() => _0x4aa357["legion"]["currentBoss"]["currentHP"], null) || _0x13e757["safeCall"](() => _0x4aa357["currentBoss"]["currentHP"], null) || _0x4bb397(_0x9aee3c || {}, ["currentHP", "currentHp", "hp"], _0x13e757["safeCall"](() => _0x391069["context"]["currentHp"], null)),
          _0x28b53d = _0x13e757["safeCall"](() => _0x9aee3c["monsters"], _0x13e757["safeCall"](() => _0x391069["context"]["monster"], null)),
          _0x1a867d = _0x22ca0c({
            legionBossId: _0x1ee388,
            legionBossShow: _0x438704,
            currentHp: _0x9414a1
          }, _0x28b53d);
        return _0x5be33a("legionBoss", {
          legionBossId: _0x1ee388,
          legionBossShow: null != _0x1a867d["legionBossShow"] ? _0x1a867d["legionBossShow"] : _0x438704,
          bossName: _0x1a867d["name"] || "",
          currentHp: _0x1a867d["currentHp"] || _0x9414a1 || 0x0,
          bossPower: _0x4bb397(_0x9aee3c || {}, ["legionBossZhanLi", "power"], _0x13e757["safeCall"](() => _0x391069["context"]["bossPower"], null)),
          monster: _0x1a867d["monsters"]["length"] ? _0x1a867d["monsters"]["map"](_0x4e9684 => [_0x4e9684["monsterId"], _0x4e9684["index"], _0x4e9684["level"]]) : _0x28b53d
        });
      },
      getScore() {
        let _0x26d66a = 0x0;
        return null != this["getContext"]()["legionBossId"] && (_0x26d66a += 0x19), _0x58a3e9["modeCaches"]["legionBoss"] && _0x58a3e9["modeCaches"]["legionBoss"]["capturedAt"] && (_0x26d66a += 0x64), _0x58a3e9["modeCaches"]["legionBoss"] && _0x58a3e9["modeCaches"]["legionBoss"]["inputData"] && (_0x26d66a += 0x28), _0x26d66a;
      },
      capabilities() {
        const _0x3c2c5c = this["getContext"](),
          _0x197200 = _0x22ca0c(_0x3c2c5c, _0x3c2c5c["monster"]);
        if (null != _0x3c2c5c["legionBossId"] && _0xa9f8ab() && _0x197200["monsters"]["length"]) return _0x9989df;
        const _0xfef4b6 = _0x58a3e9["modeCaches"]["legionBoss"];
        return _0xfef4b6 && _0xfef4b6["battleData"] ? _0x23b766 : _0xfef4b6 && _0xfef4b6["inputData"] ? _0x33571f : _0x390640;
      },
      async ensureAuthorityData() {
        const _0x40ec8b = this["getContext"](),
          _0x273cf8 = _0x22ca0c(_0x40ec8b, _0x40ec8b["monster"]);
        if (!(null != _0x40ec8b["legionBossId"] && _0xa9f8ab() && _0x273cf8["monsters"]["length"] || _0x58a3e9["modeCaches"]["legionBoss"] && _0x58a3e9["modeCaches"]["legionBoss"]["battleData"])) {
          if (null != _0x40ec8b["legionBossId"] && _0x273cf8["monsters"]["length"]) throw new Error("俱乐部Boss目标已识别，但当前没有可复用的战斗骨架。请先切到主线或任意非PVP战斗页面，再回来模拟。");
          throw new Error("俱乐部Boss当前既没有可复用骨架，也没有已抓到的权威 battleData。");
        }
      },
      buildDraft() {
        const _0x314926 = _0x58a3e9["modeCaches"]["legionBoss"],
          _0x27eebe = this["getContext"](),
          _0x1bfc54 = _0x22ca0c(_0x27eebe, _0x27eebe["monster"]);
        if (null != _0x27eebe["legionBossId"] && _0x1bfc54["monsters"]["length"] && _0xa9f8ab()) {
          const _0x303904 = _0xf23a54["getReusableBattleSkeleton"](!0x0);
          return _0x175fff("legionBoss", _0x27eebe, _0x9989df, (_0x5ec4d6, _0x36d50d) => {
            const _0x1ba17c = _0x57730d(_0x303904, "legionBoss", 0x0, _0x5ec4d6, _0x36d50d, _0x1bfc54["monsters"], {
              options: {
                legionBossId: Number(_0x1bfc54["legionBossId"] || _0x27eebe["legionBossId"] || 0x0),
                legionBossShow: Number(_0x1bfc54["legionBossShow"] || _0x27eebe["legionBossShow"] || 0x0)
              }
            });
            return _0x46f48e(_0x1ba17c, _0x27eebe["currentHp"]), _0x1ba17c;
          }, (_0x5ed476, _0x3a3fe3) => {
            const _0x314823 = _0xf23a54["getModuleByTypeKey"]("LEGION");
            return _0x314823 && "function" == typeof _0x314823["createBattleInputData"] ? _0x13e757["safeCall"](() => _0x314823["createBattleInputData"](_0x3a3fe3, _0x5ed476), _0x1dea53(_0x3a3fe3, _0x5ed476, "legionBoss", _0x314926 && _0x314926["inputData"] ? _0x314926["inputData"] : null)) : _0x1dea53(_0x3a3fe3, _0x5ed476, "legionBoss", _0x314926 && _0x314926["inputData"] ? _0x314926["inputData"] : null);
          });
        }
        if (!_0x314926 || !_0x314926["battleData"]) throw new Error("俱乐部Boss当前没有可用 battleData");
        return _0x2153a3("legionBoss", _0x27eebe, this["capabilities"](), _0x314926, (_0xc7be14, _0x6a0130, _0x4763c0) => {
          const _0x1d82bd = _0xf23a54["getModuleByTypeKey"]("LEGION");
          return _0x1d82bd && "function" == typeof _0x1d82bd["createBattleInputData"] ? _0x13e757["safeCall"](() => _0x1d82bd["createBattleInputData"](_0x6a0130, _0x4763c0), _0x1dea53(_0x6a0130, _0x4763c0, "legionBoss", _0xc7be14 && _0xc7be14["inputData"] ? _0xc7be14["inputData"] : null)) : _0x1dea53(_0x6a0130, _0x4763c0, "legionBoss", _0xc7be14 && _0xc7be14["inputData"] ? _0xc7be14["inputData"] : null);
        });
      }
    },
    nightmareStar: {
      key: "nightmareStar",
      label: _0x505384["nightmareStar"],
      getContext() {
        const _0x4176d0 = _0x58a3e9["modeCaches"]["nightmareStar"],
          _0x366193 = _0x4176d0 && _0x4176d0["inputData"] ? _0x4176d0["inputData"] : null;
        let _0x1eac34 = _0x13e757["safeCall"](() => _0x4176d0["context"]["remainStarFightCount"], null),
          _0x2ca70f = _0x13e757["safeCall"](() => _0x4176d0["context"]["maxStarCount"], null),
          _0x267a82 = _0x13e757["safeCall"](() => _0x4176d0["context"]["nowStarIdxList"], []);
        _0x366193 && _0x366193["options"] && "function" == typeof _0x366193["options"]["forEach"] && _0x366193["options"]["forEach"](_0x1f1e17 => {
          _0x1f1e17 && "object" == typeof _0x1f1e17 && _0x1f1e17["bossId"] && null != _0x1f1e17["remainStarFightCount"] && (_0x1eac34 = _0x1f1e17["remainStarFightCount"], _0x2ca70f = _0x1f1e17["maxStarCount"], _0x267a82 = _0x1f1e17["nowStarIdxList"] || []);
        });
        const _0x567aea = _0x5be33a("nightmareStar", {
            bossId: _0x13e757["safeCall"](() => _0x4176d0["context"]["bossId"], null),
            remainStarFightCount: _0x1eac34,
            maxStarCount: _0x2ca70f,
            nowStarIdxList: _0x267a82,
            lordWeaponId: _0x13e757["safeCall"](() => _0x4176d0["context"]["lordWeaponId"], null)
          }),
          _0x8e73e = _0x896b0a(_0x567aea && null != _0x567aea["bossId"] ? _0x567aea["bossId"] : null),
          _0x57a740 = _0x308b6f(_0x567aea, _0x13e757["safeCall"](() => _0x4176d0["context"]["monster"], null));
        return Object["assign"]({}, _0x567aea, {
          stageNumber: _0x8e73e ? _0x8e73e["stageNumber"] : null,
          bossName: _0x8e73e ? _0x8e73e["displayName"] : "",
          monster: _0x57a740["monsters"]["length"] ? _0x57a740["monsters"]["map"](_0x37883d => [_0x37883d["monsterId"], _0x37883d["index"], _0x37883d["level"]]) : _0x13e757["safeCall"](() => _0x4176d0["context"]["monster"], null)
        });
      },
      getScore() {
        let _0x177841 = 0x0;
        const _0x45afdc = this["getContext"](),
          _0x3b0d6e = _0x308b6f(_0x45afdc, _0x45afdc["monster"]);
        return null != _0x45afdc["bossId"] && _0xa9f8ab() && _0x3b0d6e["monsters"]["length"] && (_0x177841 += 0x78), _0x58a3e9["modeCaches"]["nightmareStar"] && _0x58a3e9["modeCaches"]["nightmareStar"]["capturedAt"] && (_0x177841 += 0x5f), null != _0x13e757["safeCall"](() => _0x58a3e9["modeCaches"]["nightmareStar"]["context"]["bossId"], null) && (_0x177841 += 0x14), _0x177841;
      },
      capabilities() {
        const _0x29aead = this["getContext"](),
          _0x55a735 = _0x308b6f(_0x29aead, _0x29aead["monster"]);
        if (null != _0x29aead["bossId"] && _0xa9f8ab() && _0x55a735["monsters"]["length"]) return _0x9989df;
        const _0x7e7da = _0x58a3e9["modeCaches"]["nightmareStar"];
        return _0x7e7da && _0x7e7da["battleData"] ? _0x23b766 : _0x7e7da && _0x7e7da["inputData"] ? _0x33571f : _0x390640;
      },
      async ensureAuthorityData() {
        const _0x4f3292 = this["getContext"](),
          _0x4d03cc = _0x308b6f(_0x4f3292, _0x4f3292["monster"]);
        if (!(null != _0x4f3292["bossId"] && _0xa9f8ab() && _0x4d03cc["monsters"]["length"] || _0x58a3e9["modeCaches"]["nightmareStar"] && _0x58a3e9["modeCaches"]["nightmareStar"]["battleData"])) throw new Error("星级挑战还没有权威 battleData。请先切到目标 boss 并真实开一次战斗。");
      },
      buildDraft() {
        const _0x53d83b = _0x58a3e9["modeCaches"]["nightmareStar"],
          _0x5c5020 = this["getContext"](),
          _0x2b1338 = _0x308b6f(_0x5c5020, _0x5c5020["monster"]);
        if (null != _0x5c5020["bossId"] && _0x2b1338["monsters"]["length"] && _0xa9f8ab()) {
          const _0x478390 = _0xf23a54["getReusableBattleSkeleton"](!0x0);
          return _0x175fff("nightmareStar", _0x5c5020, _0x9989df, (_0x21266c, _0x5df460) => _0x57730d(_0x478390, "nightmareStar", 0x0, _0x21266c, _0x5df460, _0x2b1338["monsters"]), (_0x2f2f91, _0x12e081, _0x45f7b9) => _0x3d20dd(_0x5c5020, _0x12e081, _0x2f2f91, _0x45f7b9, _0x53d83b && _0x53d83b["inputData"] ? _0x53d83b["inputData"] : null));
        }
        if (!_0x53d83b || !_0x53d83b["battleData"]) throw new Error("星级挑战当前没有可用 battleData");
        return _0x2153a3("nightmareStar", _0x5c5020, this["capabilities"](), _0x53d83b, (_0x524176, _0x365fa7, _0x32ca5a, _0x55dc5c) => _0x3d20dd(_0x5c5020, _0x365fa7, _0x32ca5a, _0x55dc5c, _0x524176 && _0x524176["inputData"] ? _0x524176["inputData"] : null));
      }
    },
    nightmare: {
      key: "nightmare",
      label: _0x505384["nightmare"],
      getContext() {
        const _0x1afce8 = _0xf23a54["getModuleByTypeKey"]("NIGHTMARE"),
          _0x2838cc = _0x13e757["safeCall"](() => _0x1afce8["roomData"]["roomInfo"], null),
          _0x1ad5bb = _0x58a3e9["modeCaches"]["nightmare"],
          _0x32e70f = _0x2838cc && (_0x2838cc["curMonsterCfgId"] || _0x2838cc["lastMonsterId"]) || null,
          _0xb16a = _0x41edc4(_0x32e70f) || _0x28ae46(_0x13e757["safeCall"](() => _0x1ad5bb["context"]["bossId"], null)),
          _0x213513 = _0x260f56({
            bossId: _0x13e757["safeCall"](() => _0x2838cc["bossCfgId"], null) || _0x13e757["safeCall"](() => _0x2838cc["bossId"], null) || (_0xb16a ? _0xb16a["bossId"] : null) || _0x13e757["safeCall"](() => _0x1ad5bb["context"]["bossId"], null),
            monsterCfgId: _0x32e70f
          }, _0x13e757["safeCall"](() => _0x1ad5bb["context"]["monster"], null));
        return _0x5be33a("nightmare", {
          roomId: _0x2838cc ? _0x2838cc["roomId"] : _0x13e757["safeCall"](() => _0x1ad5bb["context"]["roomId"], null),
          monsterCfgId: _0x32e70f,
          bossId: _0x13e757["safeCall"](() => _0x2838cc["bossCfgId"], null) || _0x13e757["safeCall"](() => _0x2838cc["bossId"], null) || (_0xb16a ? _0xb16a["bossId"] : null) || _0x13e757["safeCall"](() => _0x1ad5bb["context"]["bossId"], null),
          hallNumber: _0xb16a ? _0xb16a["hallNumber"] : _0x13e757["safeCall"](() => _0x1ad5bb["context"]["hallNumber"], null),
          bossName: _0xb16a ? _0xb16a["displayName"] : "",
          monster: _0x213513["monsters"]["length"] ? _0x213513["monsters"]["map"](_0x3740ae => [_0x3740ae["monsterId"], _0x3740ae["index"], _0x3740ae["level"]]) : _0x13e757["safeCall"](() => _0x1ad5bb["context"]["monster"], null),
          roleId: _0x13e757["safeCall"](() => _0x1ad5bb["context"]["roleId"], null)
        });
      },
      getScore() {
        let _0x248fcd = 0x0;
        const _0x43cb73 = this["getContext"](),
          _0x36c87d = _0x260f56(_0x43cb73, _0x43cb73["monster"]);
        return null != _0x43cb73["bossId"] && _0xa9f8ab() && _0x36c87d["monsters"]["length"] && (_0x248fcd += 0x78), _0x58a3e9["modeCaches"]["nightmare"] && _0x58a3e9["modeCaches"]["nightmare"]["capturedAt"] && (_0x248fcd += 0x5a), null != _0x43cb73["bossId"] && (_0x248fcd += 0x14), _0x248fcd;
      },
      capabilities() {
        const _0x59ae5c = this["getContext"](),
          _0x141820 = _0x260f56(_0x59ae5c, _0x59ae5c["monster"]);
        if (null != _0x59ae5c["bossId"] && _0xa9f8ab() && _0x141820["monsters"]["length"]) return _0x9989df;
        const _0x351ad0 = _0x58a3e9["modeCaches"]["nightmare"];
        return _0x351ad0 && _0x351ad0["battleData"] ? _0x23b766 : _0x351ad0 && _0x351ad0["inputData"] ? _0x33571f : _0x390640;
      },
      async ensureAuthorityData() {
        const _0x145517 = this["getContext"](),
          _0x2fcc4f = _0x260f56(_0x145517, _0x145517["monster"]);
        if (!(null != _0x145517["bossId"] && _0xa9f8ab() && _0x2fcc4f["monsters"]["length"] || _0x58a3e9["modeCaches"]["nightmare"] && _0x58a3e9["modeCaches"]["nightmare"]["battleData"])) throw new Error("十殿试炼还没有权威 battleData。请先进入目标试炼并真实开一次战斗。");
      },
      buildDraft() {
        const _0x2a2122 = _0x58a3e9["modeCaches"]["nightmare"],
          _0x1dc29c = this["getContext"](),
          _0x27cff8 = _0x260f56(_0x1dc29c, _0x1dc29c["monster"]);
        if (null != _0x1dc29c["bossId"] && _0x27cff8["monsters"]["length"] && _0xa9f8ab()) {
          const _0x11963e = _0xf23a54["getReusableBattleSkeleton"](!0x0);
          return _0x175fff("nightmare", _0x1dc29c, _0x9989df, (_0x296226, _0x477e47) => _0x57730d(_0x11963e, "nightmare", 0x0, _0x296226, _0x477e47, _0x27cff8["monsters"]), (_0x5ed3f0, _0x5ac214) => _0x2f3182(_0x1dc29c, _0x5ac214, _0x5ed3f0, _0x2a2122 && _0x2a2122["inputData"] ? _0x2a2122["inputData"] : null));
        }
        if (!_0x2a2122 || !_0x2a2122["battleData"]) throw new Error("十殿试炼当前没有可用 battleData");
        return _0x2153a3("nightmare", _0x1dc29c, this["capabilities"](), _0x2a2122, (_0x5656a3, _0x1e0d3a, _0x5d6d42) => _0x2f3182(_0x1dc29c, _0x1e0d3a, _0x5d6d42, _0x5656a3 && _0x5656a3["inputData"] ? _0x5656a3["inputData"] : null));
      }
    },
    capture: {
      key: "capture",
      label: _0x505384["capture"],
      getContext: () => _0x5be33a("capture", {
        source: _0x58a3e9["latestCapture"] ? _0x58a3e9["latestCapture"]["source"] : "\u6682\u65e0",
        modeKey: _0x58a3e9["latestCapture"] ? _0x58a3e9["latestCapture"]["modeKey"] : ""
      }),
      getScore: () => _0x58a3e9["latestCapture"] && _0x58a3e9["latestCapture"]["input"] && !_0x4f54ca(_0x58a3e9["latestCapture"]["input"]) ? 0x3c : 0x0,
      capabilities: () => _0x58a3e9["latestCapture"] && _0x58a3e9["latestCapture"]["input"] ? _0x33571f : _0x390640,
      async ensureAuthorityData() {
        if (!_0x58a3e9["latestCapture"] || !_0x58a3e9["latestCapture"]["input"]) throw new Error("当前没有最近捕获战斗");
      },
      buildDraft() {
        if (!_0x58a3e9["latestCapture"] || !_0x58a3e9["latestCapture"]["input"]) throw new Error("当前没有最近捕获战斗");
        const _0x2b3585 = _0x58a3e9["latestCapture"]["input"];
        return {
          mode: _0x58a3e9["latestCapture"]["modeKey"] || "capture",
          label: _0x505384["capture"],
          context: this["getContext"](),
          capability: this["capabilities"](),
          notes: [],
          buildBattleData(_0x243d53, _0x200357) {
            const _0xbf8384 = _0x13e757["deepClone"](_0x2b3585["battleData"]);
            return _0xbf8384["id"] = Date["now"]() + _0x200357, _0xbf8384["randomSeed"] = _0x200357, _0x35a353(_0xbf8384, _0x243d53), _0xbf8384;
          },
          buildReplayInput: (_0x186462, _0x4da051) => _0x1f7919(_0x2b3585, _0x4da051, _0x186462)
        };
      }
    }
  };
  _0x255f00["nightmare"]["ensureAuthorityData"] = async function () {
    const _0x5b97f4 = this["getContext"](),
      _0x4e82ae = _0x260f56(_0x5b97f4, _0x5b97f4["monster"]);
    if (!(null != _0x5b97f4["bossId"] && _0xa9f8ab() && _0x4e82ae["monsters"]["length"] || _0x58a3e9["modeCaches"]["nightmare"] && _0x58a3e9["modeCaches"]["nightmare"]["battleData"])) {
      if (null != _0x5b97f4["bossId"] && _0x4e82ae["monsters"]["length"]) throw new Error("十殿试炼目标已识别，但当前没有可复用的战斗骨架。请先切到主线或任意非 PVP 战斗页面，再回来模拟。");
      throw new Error("十殿试炼当前既没有可复用骨架，也没有已抓到的权威 battleData。");
    }
  };
  const _0x173fb4 = [_0x255f00["evoTower"], _0x255f00["tower"], _0x255f00["genie"], _0x255f00["legionBoss"], _0x255f00["nightmareStar"], _0x255f00["nightmare"], _0x255f00["capture"]];
  function _0x23b3fd() {
    const _0x579411 = _0x173fb4["map"](_0x1d9b72 => ({
      adapter: _0x1d9b72,
      score: _0x13e757["safeCall"](() => _0x1d9b72["getScore"](), 0x0)
    }))["filter"](_0x34d339 => _0x34d339["score"] > 0x0)["sort"]((_0x4c4586, _0x10c121) => _0x10c121["score"] - _0x4c4586["score"]);
    return _0x579411["length"] ? _0x579411[0x0]["adapter"] : null;
  }
  function _0x551349() {
    const _0x4758e8 = function () {
      const _0x1be74c = _0x47e9d1();
      return "auto" === _0x1be74c ? "" : "genieShenhai" === _0x1be74c ? "genie" : _0x1be74c;
    }();
    return _0x4758e8 ? _0x255f00[_0x4758e8] || null : _0x23b3fd();
  }
  async function _0x4b013a(_0x243ab9, _0x266924) {
    if (_0x58a3e9["activeJob"]) throw new Error("已有任务执行中：" + _0x58a3e9["activeJob"]["title"]);
    _0x58a3e9["stopRequested"] = !0x1, _0x58a3e9["activeJob"] = {
      title: _0x243ab9,
      startedAt: _0x13e757["now"]()
    }, _0x384b33(_0x243ab9, "任务启动中，请稍候...", {
      autoLogTab: !0x0
    }), _0x1c2aee();
    try {
      return await _0x266924();
    } finally {
      _0x58a3e9["activeJob"] = null, _0x58a3e9["stopRequested"] = !0x1, _0x58a3e9["jobProgressView"] = null, _0x58a3e9["jobProgressRaf"] && (cancelAnimationFrame(_0x58a3e9["jobProgressRaf"]), _0x58a3e9["jobProgressRaf"] = 0x0), _0x1c2aee();
    }
  }
  async function _0x3b265b() {
    if (_0x58a3e9["replayBusy"]) _0x13e757["pushDataSource"]("回放正在进行中，忽略重复点击");else {
      _0x58a3e9["replayBusy"] = !0x0;
      try {
        await async function () {
          const _0x3bfd00 = _0x58a3e9["lastSingleRun"] && _0x58a3e9["lastSingleRun"]["replayInput"] ? _0x58a3e9["lastSingleRun"]["replayInput"] : _0x58a3e9["lastReport"] && _0x58a3e9["lastReport"]["replayInput"] ? _0x58a3e9["lastReport"]["replayInput"] : _0x58a3e9["latestCapture"] && _0x58a3e9["latestCapture"]["input"] ? _0x58a3e9["latestCapture"]["input"] : null;
          if (!_0x3bfd00) throw new Error("当前没有可回放的数据");
          const _0x3f794c = _0xf23a54["getBattleUIManager"]();
          if (!_0x3f794c) throw new Error("BattleUIManager 不可用");
          const _0x187e0f = _0x62fdff(_0x3bfd00 && _0x3bfd00["battleData"] ? _0x3bfd00["battleData"] : null, _0x3bfd00),
            _0x54927e = _0x3bfd00 && _0x3bfd00["battleResult"] ? _0x3bfd00["battleResult"] : _0x4aca44(_0x3bfd00),
            _0x2082dc = _0x2da95b(_0x187e0f, _0x3bfd00),
            _0x23d331 = "nightmare" === _0x187e0f ? _0x2082dc : _0x2da95b("nightmare", _0x3bfd00);
          "nightmare" === _0x187e0f && _0x13e757["pushDataSource"]("nightmare replay resolved context boss=" + _0x4bb397(_0x23d331 || {}, ["bossId"], null) + " hall=" + _0x4bb397(_0x23d331 || {}, ["hallNumber"], null) + " monster=" + _0x4bb397(_0x23d331 || {}, ["monsterCfgId"], null));
          const _0x6d8fd = "nightmare" === _0x187e0f ? _0x2f3182(_0x23d331, _0x3bfd00 && _0x3bfd00["battleData"] ? _0x3bfd00["battleData"] : null, _0x54927e, _0x3bfd00) : _0x1dea53(_0x3bfd00 && _0x3bfd00["battleData"] ? _0x3bfd00["battleData"] : null, _0x54927e, _0x187e0f, _0x3bfd00),
            _0x4357e6 = function (_0x543640 = "") {
              return "nightmare" === _0x543640;
            }(_0x187e0f, _0x6d8fd);
          (function (_0x445ab6 = "playback") {
            !_0x58a3e9["playbackPanelSuppressed"] && _0x58a3e9["panel"] && (_0x58a3e9["playbackPanelSuppressed"] = !0x0, _0x58a3e9["panelPrefs"]["collapsed"] = !0x0, _0x1c2aee(), _0x13e757["pushDataSource"]("hide sim panel (" + _0x445ab6 + ")"));
          })("replay:" + (_0x187e0f || "capture")), "nightmare" === _0x187e0f && (await _0x1bec52(_0x23d331, _0x6d8fd));
          const _0x5a86cd = "nightmare" === _0x187e0f ? _0x23d331 : _0x2082dc;
          if (await _0x49071d(_0x6d8fd || _0x3bfd00, _0x187e0f, _0x5a86cd, "replay:" + (_0x187e0f || "capture")), !_0x4357e6 && "function" == typeof _0x3f794c["SHOW_BATTLE_UI"] && _0x6d8fd && _0x6d8fd["battleData"] && _0x6d8fd["battleResult"]) return _0x13e757["pushDataSource"]("使用 SHOW_BATTLE_UI 播放最近一次战斗，以保留原生结算返回"), _0x128424("SHOW_BATTLE_UI:" + (_0x187e0f || "capture")), _0x1582c6("SHOW_BATTLE_UI:" + (_0x187e0f || "capture")), void _0x3f794c["SHOW_BATTLE_UI"](_0x774e29(_0x6d8fd, _0x187e0f, !0x1));
          if ("function" != typeof _0x3f794c["SHOW_BATTLE_REPLAY_UI"]) throw new Error("BattleUIManager.SHOW_BATTLE_REPLAY_UI 不可用");
          _0x13e757["pushDataSource"]("使用 SHOW_BATTLE_REPLAY_UI 播放最近一次战斗"), _0x128424("SHOW_BATTLE_REPLAY_UI:" + (_0x187e0f || "capture")), _0x1582c6("SHOW_BATTLE_REPLAY_UI:" + (_0x187e0f || "capture")), _0x3f794c["SHOW_BATTLE_REPLAY_UI"](_0x774e29(_0x6d8fd || _0x13e757["deepClone"](_0x3bfd00), _0x187e0f, !0x0));
        }();
      } catch (_0x5c8ec2) {
        throw _0x481054("replay:error"), _0x5c8ec2;
      } finally {
        _0x58a3e9["replayBusy"] = !0x1;
      }
    }
  }
  function _0x1baeef() {
    if (!_0x58a3e9["panel"] || !_0x58a3e9["panel"]["root"]) return;
    const _0x5e67d4 = window["innerWidth"] <= 0x208 ? 0xa : 0xe,
      _0x4da1ea = Math["max"](0x104, window["innerWidth"] - 0x2 * _0x5e67d4),
      _0x3be169 = Math["max"](0x48, window["innerHeight"] - 0x2 * _0x5e67d4),
      _0x57b009 = Math["max"](0x30, Math["min"](0x3e, Math["round"](0.09 * Math["min"](window["innerWidth"], window["innerHeight"])))),
      _0x627603 = Math["max"](0x1e, Math["round"](0.64 * _0x57b009));
    _0x58a3e9["panel"]["root"]["style"]["setProperty"]("--panel-max-width", _0x4da1ea + "px"), _0x58a3e9["panel"]["root"]["style"]["setProperty"]("--panel-max-height", _0x3be169 + "px"), _0x58a3e9["panel"]["root"]["style"]["setProperty"]("--collapsed-size", _0x57b009 + "px"), _0x58a3e9["panel"]["root"]["style"]["setProperty"]("--collapsed-core-size", _0x627603 + "px"), _0x58a3e9["panel"]["root"]["style"]["width"] = _0x4da1ea + "px", _0x58a3e9["panel"]["root"]["style"]["maxWidth"] = _0x4da1ea + "px";
  }
  function _0x36da9b(_0x4e3984, _0x55672a) {
    if (!_0x58a3e9["panel"] || !_0x58a3e9["panel"]["root"]) return {
      x: 0xe,
      y: 0xe
    };
    const _0x51f93e = window["innerWidth"] <= 0x208 ? 0xa : 0xe,
      _0x4f4996 = _0x58a3e9["panel"]["root"]["getBoundingClientRect"](),
      _0x28c77c = Math["max"](0x30, Math["round"](_0x4f4996["width"] || _0x58a3e9["panel"]["root"]["offsetWidth"] || 0x0)),
      _0x4ce8a7 = Math["max"](0x30, Math["round"](_0x4f4996["height"] || _0x58a3e9["panel"]["root"]["offsetHeight"] || 0x0)),
      _0x15b163 = _0x51f93e,
      _0x4d0240 = _0x51f93e,
      _0x37332a = Math["max"](_0x15b163, window["innerWidth"] - _0x28c77c - _0x51f93e),
      _0x1c54dc = Math["max"](_0x4d0240, window["innerHeight"] - _0x4ce8a7 - _0x51f93e),
      _0x1ca7e0 = Math["max"](_0x4d0240, window["innerHeight"] - _0x4ce8a7 - _0x51f93e),
      _0x405cfd = Number["isFinite"](Number(_0x4e3984)) ? Number(_0x4e3984) : _0x15b163,
      _0x3eb431 = Number["isFinite"](Number(_0x55672a)) ? Number(_0x55672a) : _0x1ca7e0;
    return {
      x: Math["min"](_0x37332a, Math["max"](_0x15b163, Math["round"](_0x405cfd))),
      y: Math["min"](_0x1c54dc, Math["max"](_0x4d0240, Math["round"](_0x3eb431)))
    };
  }
  function _0x498707(_0x486d42 = !0x1) {
    if (!_0x58a3e9["panel"] || !_0x58a3e9["panel"]["root"]) return;
    const _0x20a39d = _0x36da9b(_0x58a3e9["panelPrefs"]["panelX"], _0x58a3e9["panelPrefs"]["panelY"]);
    _0x58a3e9["panel"]["root"]["style"]["left"] = _0x20a39d["x"] + "px", _0x58a3e9["panel"]["root"]["style"]["top"] = _0x20a39d["y"] + "px", _0x58a3e9["panel"]["root"]["style"]["right"] = "auto", _0x58a3e9["panel"]["root"]["style"]["bottom"] = "auto";
    const _0x8427e0 = Number(_0x58a3e9["panelPrefs"]["panelX"]) !== _0x20a39d["x"] || Number(_0x58a3e9["panelPrefs"]["panelY"]) !== _0x20a39d["y"];
    _0x58a3e9["panelPrefs"]["panelX"] = _0x20a39d["x"], _0x58a3e9["panelPrefs"]["panelY"] = _0x20a39d["y"], !_0x486d42 && !_0x8427e0 || _0x58a3e9["panelDragState"] || _0x5d081c();
  }
  function _0x374bde(_0x27ef1a = null) {
    const _0x33e0bb = _0x58a3e9["panelDragState"];
    if (!_0x33e0bb) return;
    if (null != _0x27ef1a && _0x33e0bb["pointerId"] !== _0x27ef1a) return;
    _0x33e0bb["handle"] && "function" == typeof _0x33e0bb["handle"]["releasePointerCapture"] && _0x13e757["safeCall"](() => _0x33e0bb["handle"]["releasePointerCapture"](_0x33e0bb["pointerId"]), null), _0x58a3e9["panel"]["root"]["classList"]["remove"]("dragging");
    const _0x389543 = !_0x33e0bb["moved"];
    _0x33e0bb["moved"] && _0x498707(!0x0), _0x58a3e9["panelDragState"] = null, _0x389543 && (_0x58a3e9["panelPrefs"]["collapsed"] = !_0x58a3e9["panelPrefs"]["collapsed"], _0x5d081c(), _0x1c2aee());
  }
  function _0x10f8d6(_0x284d8c) {
    if (!_0x58a3e9["panel"] || !_0x58a3e9["panel"]["root"] || 0x0 !== _0x284d8c["button"]) return;
    const _0x4b0769 = _0x284d8c["currentTarget"],
      _0x4a74fb = _0x36da9b(_0x58a3e9["panelPrefs"]["panelX"], _0x58a3e9["panelPrefs"]["panelY"]);
    _0x58a3e9["panelDragState"] = {
      pointerId: _0x284d8c["pointerId"],
      handle: _0x4b0769,
      startClientX: _0x284d8c["clientX"],
      startClientY: _0x284d8c["clientY"],
      originX: _0x4a74fb["x"],
      originY: _0x4a74fb["y"],
      moved: !0x1
    }, _0x58a3e9["panel"]["root"]["classList"]["add"]("dragging"), _0x4b0769 && "function" == typeof _0x4b0769["setPointerCapture"] && _0x13e757["safeCall"](() => _0x4b0769["setPointerCapture"](_0x284d8c["pointerId"]), null);
  }
  function _0x4a7ef9(_0x2936cb) {
    const _0x25802c = _0x58a3e9["panelDragState"];
    if (!_0x25802c || _0x25802c["pointerId"] !== _0x2936cb["pointerId"] || !_0x58a3e9["panel"] || !_0x58a3e9["panel"]["root"]) return;
    const _0x21c9a0 = _0x2936cb["clientX"] - _0x25802c["startClientX"],
      _0x4b8d2e = _0x2936cb["clientY"] - _0x25802c["startClientY"];
    !_0x25802c["moved"] && (Math["abs"](_0x21c9a0) >= 0x4 || Math["abs"](_0x4b8d2e) >= 0x4) && (_0x25802c["moved"] = !0x0);
    const _0x112108 = _0x36da9b(_0x25802c["originX"] + _0x21c9a0, _0x25802c["originY"] + _0x4b8d2e);
    _0x58a3e9["panelPrefs"]["panelX"] = _0x112108["x"], _0x58a3e9["panelPrefs"]["panelY"] = _0x112108["y"], _0x58a3e9["panel"]["root"]["style"]["left"] = _0x112108["x"] + "px", _0x58a3e9["panel"]["root"]["style"]["top"] = _0x112108["y"] + "px", _0x58a3e9["panel"]["root"]["style"]["right"] = "auto", _0x58a3e9["panel"]["root"]["style"]["bottom"] = "auto";
  }
  function _0x57678d(_0x44d5f9, _0x11b815) {
    if (!_0x44d5f9 || _0x44d5f9["_simEmbedBtn"] || !_0x44d5f9["ui"]) return !0x1;
    try {
      const _0x5d1da5 = _0x11b815["UIPackage"]["createObject"]("ui_common", "BtnInfo2");
      if (!_0x5d1da5) return !0x1;
      if (_0x5d1da5["title"] = "", _0x5d1da5["icon"] = "", _0x5d1da5["numChildren"] > 0x0) for (let _0x2a996d = 0x0; _0x2a996d < _0x5d1da5["numChildren"]; _0x2a996d += 0x1) {
        const _0x18be79 = _0x5d1da5["getChildAt"](_0x2a996d);
        _0x18be79 && "n0" === _0x18be79["name"] && (_0x18be79["visible"] = !0x1);
      }
      const _0x40beaa = new _0x11b815["GTextField"]();
      _0x40beaa["name"] = "customLabel", _0x40beaa["text"] = "\u6a21\u62df", _0x40beaa["fontSize"] = 0x1c, _0x40beaa["bold"] = !0x0, _0x40beaa["color"] = "#FFFFFF", _0x40beaa["singleLine"] = !0x0, "undefined" != typeof cc && (_0x40beaa["shadowOffset"] = new cc["Vec2"](0x0, 0x2), _0x40beaa["shadowColor"] = new cc["Color"](0x7a, 0x45, 0x30, 0xc8)), _0x40beaa["setPosition"]((_0x5d1da5["width"] - _0x40beaa["width"]) / 0x2, (_0x5d1da5["height"] - _0x40beaa["height"]) / 0x2), _0x40beaa["visible"] = !0x0, _0x40beaa["touchable"] = !0x1, _0x5d1da5["addChild"](_0x40beaa), _0x5d1da5["onClick"](() => {
        _0x58a3e9["panelPrefs"]["collapsed"] = !0x1, _0x5d081c(), _0x1c2aee();
      });
      const _0x19550e = _0x5d1da5["width"] + 0xa,
        _0x50177a = 0x14;
      return _0x5d1da5["setPosition"](_0x44d5f9["ui"]["width"] - _0x5d1da5["width"] - _0x19550e, _0x50177a), _0x44d5f9["ui"]["addChild"](_0x5d1da5), _0x44d5f9["_simEmbedBtn"] = _0x5d1da5, !0x0;
    } catch (_0x16c8f4) {
      return _0x13e757["warn"]("内嵌按钮创建失败: ", _0x16c8f4), !0x1;
    }
  }
  function _0x375773() {
    const _0x1852ac = ["mainPushCard", "mainPushLamp", "mainPushStateLabel", "mainPushStateDesc", "mainPushLevel", "mainPushBoss", "mainPushRound", "mainPushReset", "mainPushTag", "mainPushBtn"],
      _0x34a97f = _0x51b6be => _0x1852ac["every"](_0x233c5f => _0x51b6be && _0x51b6be[_0x233c5f]);
    if (_0x58a3e9["panel"] && _0x58a3e9["panel"]["root"] && document["body"]["contains"](_0x58a3e9["panel"]["root"])) {
      if (_0x34a97f(_0x58a3e9["panel"]["refs"])) return;
      _0x58a3e9["panel"]["root"]["remove"](), _0x58a3e9["panel"] = null;
    }
    const _0x2b2708 = document["getElementById"]("non-pvp-sim-panel");
    if (_0x2b2708) {
      const _0xfd6fab = {};
      if (_0x2b2708["querySelectorAll"]("[data-ref]")["forEach"](_0x57c8f2 => {
        _0xfd6fab[_0x57c8f2["dataset"]["ref"]] = _0x57c8f2;
      }), _0x34a97f(_0xfd6fab)) {
        if (!_0x58a3e9["panel"]) return void (_0x58a3e9["panel"] = {
          root: _0x2b2708,
          refs: _0xfd6fab
        });
      } else _0x2b2708["remove"]();
    }
    !function () {
      if (document["getElementById"]("non-pvp-sim-style")) return;
      const _0x3fd176 = document["createElement"]("style");
      _0x3fd176["id"] = "non-pvp-sim-style", _0x3fd176["textContent"] = '\n            #non-pvp-sim-panel {\n                position: fixed;\n                left: 18px;\n                bottom: 18px;\n                z-index: 999999;\n                width: 410px;\n                color: #1e293b;\n                background: #ffffff;\n                border: 1px solid rgba(0, 0, 0, 0.1);\n                border-radius: 16px;\n                box-shadow: 0 8px 24px rgba(0, 0, 0, 0.08);\n                font-family: "Microsoft YaHei", "PingFang SC", sans-serif;\n                overflow: hidden;\n                transition: width 0.2s ease, height 0.2s ease, border-radius 0.2s ease, box-shadow 0.2s ease;\n            }\n            #non-pvp-sim-panel * {\n                box-sizing: border-box;\n            }\n            #non-pvp-sim-panel .sim-head {\n                display: flex;\n                align-items: center;\n                justify-content: space-between;\n                padding: 10px 14px;\n                border-bottom: 1px solid rgba(0, 0, 0, 0.1);\n                background: rgba(255, 255, 255, 0.7);\n                backdrop-filter: saturate(1.2);\n                border-radius: 12px 12px 0 0;\n                cursor: grab;\n                user-select: none;\n                touch-action: none;\n            }\n            #non-pvp-sim-panel .sim-brand {\n                display: flex;\n                align-items: center;\n                gap: 12px;\n                min-width: 0;\n            }\n            #non-pvp-sim-panel .sim-brand-mark {\n                display: none;\n            }\n            #non-pvp-sim-panel .sim-brand-copy {\n                min-width: 0;\n            }\n            #non-pvp-sim-panel .sim-title {\n                font-weight: 700;\n                font-size: 15px;\n                color: #1e293b;\n                white-space: nowrap;\n                overflow: hidden;\n                text-overflow: ellipsis;\n            }\n            #non-pvp-sim-panel .sim-version {\n                margin-top: 2px;\n            }\n            #non-pvp-sim-panel .sim-collapse-btn {\n                background: transparent;\n                border: none;\n                border-radius: 8px;\n                padding: 2px 8px;\n                font-size: 14px;\n                cursor: pointer;\n                color: #718096;\n                display: flex;\n                align-items: center;\n                justify-content: center;\n                transition: all 0.2s ease;\n                box-shadow: none;\n            }\n            #non-pvp-sim-panel .sim-collapse-btn:hover {\n                background: #f7fafc;\n                border-color: #e53e3e;\n                color: #e53e3e;\n            }\n            #non-pvp-sim-panel .sim-collapse-badge {\n                display: none;\n            }\n            #non-pvp-sim-panel .sim-collapse-badge::before {\n                content: "";\n                position: absolute;\n                inset: 2px;\n                border-radius: inherit;\n                background:\n                    radial-gradient(circle at 30% 28%, rgba(179, 255, 235, 0.95), rgba(74, 179, 160, 0.92) 45%, rgba(16, 72, 68, 0.98) 100%);\n                border: 1px solid rgba(255, 249, 218, 0.24);\n            }\n            #non-pvp-sim-panel .sim-collapse-badge::after {\n                content: "";\n                position: absolute;\n                left: 4px;\n                right: 4px;\n                top: 3px;\n                height: 32%;\n                border-radius: 999px;\n                background: linear-gradient(180deg, rgba(255, 255, 255, 0.34), rgba(255, 255, 255, 0.04));\n                filter: blur(0.2px);\n            }\n            #non-pvp-sim-panel .sim-collapse-glyph {\n                position: relative;\n                z-index: 2;\n                display: inline-flex;\n                align-items: center;\n                justify-content: center;\n                font-size: 11px;\n                font-weight: 900;\n                letter-spacing: 0;\n                color: #fff2bd;\n                text-shadow:\n                    0 1px 0 rgba(89, 61, 18, 0.85),\n                    0 0 6px rgba(255, 236, 180, 0.16);\n                transform: translateY(-0.5px);\n            }\n            #non-pvp-sim-panel .sim-collapse-text {\n                font-size: 12px;\n                font-weight: 700;\n                color: #1e293b;\n            }\n            #non-pvp-sim-panel .sim-body {\n                display: flex;\n                flex-direction: column;\n                gap: 10px;\n                padding: 12px 14px 14px;\n                overflow: auto;\n                max-height: calc(var(--panel-max-height) - 74px);\n                overscroll-behavior: contain;\n            }\n            #non-pvp-sim-panel .sim-manual,\n            #non-pvp-sim-panel .sim-grid,\n            #non-pvp-sim-panel .sim-section {\n                padding: 10px;\n                border-radius: 12px;\n                background: #ffffff;\n                border: 1px solid rgba(0,0,0,0.06);\n                box-shadow: 0 2px 8px rgba(0,0,0,0.05);\n                margin-bottom: 0;\n            }\n            #non-pvp-sim-panel .sim-grid {\n                grid-template-columns: 86px minmax(0, 1fr);\n            }\n            #non-pvp-sim-panel .sim-mainpush-card {\n                padding: 11px 12px;\n                border-radius: 16px;\n                background: #ffffff;\n            }\n            #non-pvp-sim-panel .sim-toolbar {\n                display: grid;\n                grid-template-columns: minmax(0, 1fr) auto;\n                gap: 8px;\n                align-items: stretch;\n            }\n            #non-pvp-sim-panel .sim-sample-box {\n                display: flex;\n                align-items: center;\n                gap: 10px;\n                min-width: 0;\n                padding: 8px 10px;\n                border-radius: 12px;\n                border: 1px solid #e2e8f0;\n                background: #ffffff;\n            }\n            #non-pvp-sim-panel .sim-sample-label {\n                flex: 0 0 auto;\n                font-size: 11px;\n                color: #718096;\n                font-weight: 700;\n            }\n            #non-pvp-sim-panel .sim-sample-box input {\n                flex: 1;\n                min-width: 0;\n                min-height: 22px;\n                padding: 0;\n                border: none;\n                background: transparent;\n                text-align: right;\n                font-size: 13px;\n                font-weight: 700;\n                color: #d97706;\n            }\n            #non-pvp-sim-panel .sim-sample-box input:focus {\n                outline: none;\n            }\n            #non-pvp-sim-panel .sim-debug-toggle {\n                display: inline-flex;\n                align-items: center;\n                justify-content: space-between;\n                gap: 10px;\n                min-width: 118px;\n                padding: 8px 12px;\n                border-radius: 8px;\n                background: #ffffff;\n                border: 1px solid #e2e8f0;\n                box-shadow: 0 1px 3px rgba(0,0,0,0.05);\n            }\n            #non-pvp-sim-panel .sim-debug-toggle small {\n                font-size: 11px;\n                color: #d97706;\n                font-weight: 700;\n            }\n            #non-pvp-sim-panel .sim-actions {\n                grid-template-columns: repeat(2, minmax(0, 1fr));\n                margin-bottom: 0;\n            }\n            \n            #non-pvp-sim-panel .sim-debug-wrap {\n                display: none;\n            }\n            #non-pvp-sim-panel.debug-open .sim-debug-wrap {\n                display: block;\n            }\n            #non-pvp-sim-panel .sim-debug-actions {\n                padding: 10px;\n                border-radius: 14px;\n                background: #ffffff;\n                border: 1px solid #e2e8f0;\n            }\n            #non-pvp-sim-panel .sim-section {\n                margin-top: 0;\n                border-top: none;\n                padding-top: 10px;\n            }\n            #non-pvp-sim-panel .sim-section-title {\n                margin-bottom: 10px;\n                color: #1e293b;\n                letter-spacing: 0.04em;\n            }\n            #non-pvp-sim-panel .sim-candidate-list {\n                max-height: min(21vh, 176px);\n            }\n            #non-pvp-sim-panel .sim-report {\n                max-height: min(24vh, 220px);\n                overflow: auto;\n                border: 1px solid #e2e8f0;\n                background: #ffffff;\n            }\n            #non-pvp-sim-panel.collapsed {\n                display: none !important;\n            }\n            #non-pvp-sim-panel.dragging,\n            #non-pvp-sim-panel.dragging * {\n                cursor: grabbing !important;\n            }\n            #non-pvp-sim-panel.dragging {\n                transition: none !important;\n                box-shadow: 0 12px 28px rgba(0, 0, 0, 0.1);\n            }\n            #non-pvp-sim-panel .sim-debug-toggle,\n            #non-pvp-sim-panel button[data-action="debugOnce"] {\n                display: none !important;\n            }\n    \n            @media (max-width: 520px) {\n                #non-pvp-sim-panel {\n                    left: 10px;\n                    top: 10px;\n                    --panel-max-width: calc(100vw - 20px);\n                    --panel-max-height: calc(100vh - 20px);\n                }\n                #non-pvp-sim-panel .sim-toolbar,\n                #non-pvp-sim-panel .sim-manual,\n                #non-pvp-sim-panel .sim-actions {\n                    grid-template-columns: 1fr;\n                }\n                #non-pvp-sim-panel .sim-grid {\n                    grid-template-columns: 78px minmax(0, 1fr);\n                }\n                #non-pvp-sim-panel .sim-mainpush-metrics {\n                    grid-template-columns: repeat(2, minmax(0, 1fr));\n                }\n                #non-pvp-sim-panel .sim-split-target {\n                    grid-template-columns: minmax(0, 1fr) 14px minmax(0, 1fr);\n                }\n            }\n        ', document["head"]["appendChild"](_0x3fd176);
    }();
    const _0x2e8860 = document["createElement"]("div");
    _0x2e8860["id"] = "non-pvp-sim-panel", _0x2e8860["innerHTML"] = '\n            <div class="sim-head" data-ref="head">\n                <div class="sim-brand" data-ref="dragHandle">\n                    <div class="sim-brand-mark">SIM</div>\n                    <div class="sim-brand-copy">\n                        <div class="sim-title">' + _0x2eadaf + '</div>\n                        <div class="sim-version">v' + _0x299c70 + '</div>\n                    </div>\n                </div>\n                <div class="sim-head-actions">\n                    <button data-ref="collapseBtn" class="sim-collapse-btn" type="button">\n                        <span data-ref="collapseBadge" class="sim-collapse-badge"><span class="sim-collapse-glyph">战</span></span>\n                        <span data-ref="collapseLabel" class="sim-collapse-text">收起</span>\n                    </button>\n                </div>\n            </div>\n            <div class="sim-body">\n                <div class="sim-pvp-hint" data-ref="pvpHint">当前是玩家战斗场景，已隐藏模拟入口。</div>\n                <div class="sim-manual" data-ref="manualBlock">\n                    <select data-ref="modeSelect">\n                        <option value="auto">自动识别</option>\n                        <option value="tower">咸将塔</option>\n                        <option value="evoTower">怪异塔</option>\n                        <option value="genie">灯神</option>\n                        <option value="genieShenhai">深海灯神</option>\n                        <option value="legionBoss">俱乐部Boss</option>\n                        <option value="nightmare">十殿试炼</option>\n                        <option value="nightmareStar">星级挑战</option>\n                        <option value="capture">最近捕获</option>\n                    </select>\n                    <div data-ref="splitTargetWrap" class="sim-split-target">\n                        <input data-ref="targetMajorInput" type="text" inputmode="numeric" placeholder="前段">\n                        <div class="sim-split-sep">-</div>\n                        <input data-ref="targetMinorInput" type="text" inputmode="numeric" placeholder="后段">\n                    </div>\n                    <input data-ref="targetInput" type="text" placeholder="目标层数 / bossId / genieId">\n                    <select data-ref="quickTargetSelect" class="sim-quick-target"></select>\n                    <div class="sim-manual-hint" data-ref="targetHint">手动选择玩法和目标后直接评估即可</div>\n                </div>\n                <div class="sim-grid">\n                    <div class="label">当前玩法</div><div class="value" data-ref="mode">-</div>\n                    <div class="label">当前目标</div><div class="value" data-ref="context">-</div>\n                    <div class="label">能力等级</div><div class="value" data-ref="capability">-</div>\n                    <div class="label">当前阵容签名</div><div class="value" data-ref="signature">-</div>\n                    <div class="label">候选阵容数量</div><div class="value" data-ref="candidateCount">0</div>\n                    <div class="label">诊断样本</div><div class="value" data-ref="diagCount">0</div>\n                    <div class="label">当前任务</div><div class="value" data-ref="job">空闲</div>\n                </div>\n                <div class="sim-mainpush-card" data-ref="mainPushCard">\n                    <div class="sim-mainpush-top">\n                        <div class="sim-mainpush-state">\n                            <span class="sim-mainpush-lamp" data-ref="mainPushLamp" data-tone="idle"></span>\n                            <div class="sim-mainpush-state-copy">\n                                <div class="sim-mainpush-state-label" data-ref="mainPushStateLabel">已停止</div>\n                                <div class="sim-mainpush-state-desc" data-ref="mainPushStateDesc">未启动</div>\n                            </div>\n                        </div>\n                        <div class="sim-mainpush-tag" data-ref="mainPushTag">主线推关</div>\n                    </div>\n                    <div class="sim-mainpush-metrics">\n                        <div class="sim-mainpush-metric">\n                            <div class="sim-mainpush-metric-label">当前关卡</div>\n                            <div class="sim-mainpush-metric-value" data-ref="mainPushLevel">-</div>\n                        </div>\n                        <div class="sim-mainpush-metric">\n                            <div class="sim-mainpush-metric-label">当前 Boss</div>\n                            <div class="sim-mainpush-metric-value" data-ref="mainPushBoss">-</div>\n                        </div>\n                        <div class="sim-mainpush-metric">\n                            <div class="sim-mainpush-metric-label">当前轮次</div>\n                            <div class="sim-mainpush-metric-value" data-ref="mainPushRound">-</div>\n                        </div>\n                        <div class="sim-mainpush-metric">\n                            <div class="sim-mainpush-metric-label">重置次数</div>\n                            <div class="sim-mainpush-metric-value" data-ref="mainPushReset">0</div>\n                        </div>\n                    </div>\n                </div>\n                <div class="sim-toolbar" data-ref="toolbar">\n                    <label class="sim-sample-box">\n                        <span class="sim-sample-label">模拟次数</span>\n                        <input data-ref="sampleCountInput" type="text" inputmode="numeric" placeholder="1000">\n                    </label>\n                    <button data-ref="debugToggleBtn" class="sim-debug-toggle" type="button">\n                        <span>调试工具</span>\n                        <small data-ref="debugToggleLabel">展开</small>\n                    </button>\n                </div>\n                <div class="sim-actions sim-primary-actions" data-ref="actions">\n                    <button data-action="record">获取当前阵容</button>\n                    <button data-action="quick">单队模拟</button>\n                    <button data-action="mainPush" data-ref="mainPushBtn">模拟推关</button>\n                    <button data-action="debugOnce">单次调试模拟</button>\n                    <button data-action="replay">回放最近一次</button>\n                    <button data-action="stop">停止当前</button>\n                    <button data-action="clear">清空候选</button>\n                </div>\n                <div class="sim-debug-wrap" data-ref="debugWrap">\n                    <div class="sim-actions sim-debug-actions" data-ref="debugActions">\n                        <button data-action="sources">查看数据来源</button>\n                        <button data-action="diag">查看诊断日志</button>\n                        <button data-action="exportDiag">导出诊断日志</button>\n                        <button data-action="clearDiag">清空诊断</button>\n                    </div>\n                </div>\n                <div class="sim-section">\n                    <div class="sim-section-title">候选阵容</div>\n                    <div class="sim-candidate-list" data-ref="candidateList"></div>\n                </div>\n                <div class="sim-section">\n                    <div class="sim-section-title">最近结果</div>\n                    <div class="sim-report" data-ref="reportBody">暂无结果</div>\n                </div>\n                <div class="sim-section" data-ref="seedSection" style="display:none;">\n                    <div class="sim-section-title">种子记录</div>\n                    <div class="sim-seed-toolbar">\n                        <div class="sim-seed-summary" data-ref="seedSummary">暂无批量种子记录</div>\n                        <div class="sim-seed-pager-wrap">\n                            <button type="button" data-action="seedPrevPage">上一页</button>\n                            <div class="sim-seed-pager" data-ref="seedPager">0 / 0</div>\n                            <button type="button" data-action="seedNextPage">下一页</button>\n                        </div>\n                    </div>\n                    <div class="sim-seed-list" data-ref="seedList"></div>\n                </div>\n            </div>\n        ', document["getElementById"]("non-pvp-sim-style")["textContent"] = '\n            #non-pvp-sim-panel {\n                --xc-primary: #3182ce; --xc-primary-bg: #ebf4ff; --xc-primary-border: #bee3f8;\n                --xc-text: #4a5568; --xc-text-muted: #718096;\n                --xc-bg: rgba(247, 250, 252, 0.94); --xc-card: rgba(255, 255, 255, 0.92);\n                position: fixed; right: 14px; top: 14px; left: auto; z-index: 999999;\n                width: calc(100vw - 28px); max-height: calc(100vh - 28px);\n                background: var(--xc-bg); backdrop-filter: blur(14px);\n                border: 1px solid rgba(255, 255, 255, 0.8); border-radius: 12px;\n                box-shadow: 0 4px 16px rgba(0, 0, 0, 0.08), 0 0 0 1px rgba(0, 0, 0, 0.03);\n                font-family: inherit; line-height: 1.6; font-size: 13px;\n                display: flex; flex-direction: column; color: var(--xc-text); overflow: hidden;\n            }\n            #non-pvp-sim-panel * { box-sizing: border-box; }\n            .xc-head { display: flex; align-items: center; justify-content: space-between; padding: 10px 14px; background: linear-gradient(135deg, #ebf8ff 0%, #f0f4ff 50%, #faf5ff 100%); border-bottom: 1px solid rgba(49,130,206,0.08); border-radius: 12px 12px 0 0; cursor: grab; user-select: none; touch-action: none; overflow: hidden; }\n            .xc-brand { font-size: 14px; font-weight: 700; color: #2b6cb0; letter-spacing: 0.5px; display:flex; align-items:center; gap:8px; }\n            .xc-brand-icon { width: 26px; height: 26px; border-radius: 7px; background: linear-gradient(135deg, #3182ce, #6b46c1); display: flex; align-items: center; justify-content: center; flex-shrink: 0; box-shadow: 0 2px 6px rgba(49,130,206,0.25); }\n            .xc-brand-icon svg { width: 15px; height: 15px; stroke: #fff; fill: none; }\n            .xc-brand-ver { font-size: 10px; font-weight: 400; color: #a0aec0; margin-left: 2px; }\n            .xc-close { background: rgba(0,0,0,0.03); border: 1px solid rgba(0,0,0,0.04); font-size: 11px; color: var(--xc-text-muted); cursor: pointer; transition: all 0.2s; padding: 3px 10px; border-radius: 6px; }\n            .xc-close:hover { background: #fee2e2; color: #c53030; border-color: #fed7d7; }\n            .xc-body { display: flex; flex-direction: column; gap: 10px; padding: 12px 14px 16px; overflow-y: auto; overflow-x: hidden; }\n            .xc-card { background: var(--xc-card); border-radius: 10px; padding: 12px; box-shadow: 0 1px 2px rgba(0,0,0,0.02); border: 1px solid rgba(0,0,0,0.04); overflow: hidden; }\n            .xc-row { display: flex; align-items: center; gap: 8px; margin-bottom: 10px; flex-wrap: nowrap; overflow: hidden; }\n            .xc-row:last-child { margin-bottom: 0; }\n            .xc-select, .xc-input { flex: 1; min-width: 0; min-height: 38px; border: 1px solid #e2e8f0; border-radius: 6px; padding: 6px 10px; font-size: 13px; color: var(--xc-text); background: #ffffff; }\n            .xc-select:focus, .xc-input:focus { outline: none; border-color: var(--xc-primary-border); }\n            .xc-hint { font-size: 12px; color: #e53e3e; background: #fff5f5; padding: 8px; border-radius: 6px; display: none; }\n            .xc-label { font-size: 12px; color: var(--xc-text-muted); flex-shrink: 0; white-space: nowrap; }\n            .xc-val { font-size: 13px; color: var(--xc-text); max-width: 60%; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; line-height: 1.6; }\n            .xc-val-light { font-size: 13px; color: var(--xc-primary); white-space: nowrap; overflow: hidden; text-overflow: ellipsis; max-width: 60%; }\n            .xc-list-item { display: flex; justify-content: space-between; align-items: center; padding: 8px 0; border-bottom: 1px dashed rgba(0,0,0,0.04); flex-wrap: nowrap; overflow: hidden; }\n            .xc-list-item:last-child { border-bottom: none; }\n            .xc-status-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 2px 12px; }\n            .xc-status-item { display: flex; gap: 6px; align-items: center; padding: 5px 0; overflow: hidden; }\n            .xc-status-label { font-size: 11px; color: var(--xc-text-muted); white-space: nowrap; flex-shrink: 0; }\n            .xc-status-val { font-size: 12px; color: var(--xc-text); overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }\n            .xc-status-val-light { font-size: 12px; color: var(--xc-primary); overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }\n            .xc-actions-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 8px; margin-bottom: 8px; overflow: hidden; }\n            .xc-actions-grid:last-child { margin-bottom: 0; }\n            .xc-actions-grid-3 { display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 8px; overflow: hidden; }\n            .xc-btn { min-height: 36px; padding: 4px 8px; border-radius: 6px; font-size: 12px; cursor: pointer; background: #ffffff; border: 1px solid #e2e8f0; color: var(--xc-text); display: inline-flex; align-items: center; justify-content: center; gap: 4px; transition: all 0.2s ease; line-height: 1.4; white-space: nowrap; flex-shrink: 0; overflow: hidden; text-overflow: ellipsis; }\n            .xc-btn:hover { background: #f7fafc; border-color: #cbd5e1; }\n            .xc-btn svg { flex-shrink: 0; vertical-align: middle; }\n            .xc-btn-main { background: #ebf8ff !important; color: #2b6cb0 !important; border-color: #bee3f8 !important; font-weight: 600; }\n            .xc-btn-main:hover { background: #d6ecff !important; border-color: #90cdf4 !important; }\n            .xc-btn-accent { background: #fffaf0 !important; color: #c05621 !important; border-color: #feebc8 !important; font-weight: 600; }\n            .xc-btn-accent:hover { background: #fef3e2 !important; border-color: #fbd38d !important; }\n            .xc-btn-teal { background: #e6fffa !important; color: #276749 !important; border-color: #b2f5ea !important; }\n            .xc-btn-teal:hover { background: #d2f5ed !important; border-color: #81e6d9 !important; }\n            .xc-btn-purple { background: #faf5ff !important; color: #6b46c1 !important; border-color: #e9d8fd !important; }\n            .xc-btn-purple:hover { background: #f0e4ff !important; border-color: #d6bcfa !important; }\n            .xc-btn-warn { background: #fffbeb !important; color: #b7791f !important; border-color: #fefcbf !important; }\n            .xc-btn-warn:hover { background: #fef9c3 !important; border-color: #faf089 !important; }\n            .xc-btn-danger { background: #fff5f5 !important; color: #c53030 !important; border-color: #fed7d7 !important; }\n            .xc-btn-danger:hover { background: #fee2e2 !important; border-color: #feb2b2 !important; }\n            .xc-btn-sm { min-height: 26px; padding: 2px 8px; font-size: 11px; border-radius: 4px; background: #ffffff; border: 1px solid #e2e8f0; color: var(--xc-text); cursor: pointer; }\n            .xc-section-title { font-size: 13px; color: var(--xc-text-muted); margin-bottom: 8px; line-height: 1.6; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }\n            .xc-candidates { display: flex; flex-direction: column; gap: 8px; max-height: 200px; overflow-y: auto; overflow-x: hidden; }\n            .xc-can-item { background: #f8fafc; border-radius: 6px; padding: 8px 10px; border: 1px solid #edf2f7; overflow: hidden; }\n            .xc-can-sig { display: flex; justify-content: space-between; font-size: 12px; color: #dd6b20; margin-bottom: 4px; line-height: 1.6; overflow: hidden; }\n            .sim-candidate-group { font-size: 11px; font-weight: 600; color: #718096; padding: 4px 2px 2px; border-bottom: 1px solid #e2e8f0; margin-bottom: 4px; }\n            .sim-candidate-item { background: #f8fafc; border-radius: 8px; padding: 8px 10px; border: 1px solid #edf2f7; transition: all 0.2s; cursor: pointer; }\n            .sim-candidate-item:hover { background: #edf2f7; }\n            .sim-candidate-active { background: #ebf8ff; border-color: #90cdf4; box-shadow: 0 0 0 1px rgba(49,130,206,0.1); }\n            .sim-candidate-active:hover { background: #ebf8ff; }\n            .sim-candidate-badge { font-size: 10px; color: #3182ce; font-weight: 600; margin-bottom: 4px; }\n            .sim-candidate-row { display: flex; align-items: center; justify-content: space-between; gap: 8px; }\n            .sim-candidate-team { display: flex; gap: 4px; flex-wrap: nowrap; align-items: center; flex: 1; min-width: 0; }\n            .sim-candidate-del-btn { flex-shrink: 0; min-height: 24px; padding: 2px 10px; font-size: 11px; border-radius: 4px; background: #fff5f5; border: 1px solid #fed7d7; color: #e53e3e; cursor: pointer; transition: all 0.15s; }\n            .sim-candidate-del-btn:active { background: #fee2e2; }\n            .sim-candidate-meta { font-size: 10px; color: #a0aec0; margin-top: 5px; }\n            .sim-toy-icon-img { flex-shrink: 0; width: 26px; height: 26px; border-radius: 5px; object-fit: cover; background: rgba(0,0,0,0.04); border: 1px solid #e9d8fd; margin-right: 2px; }\n            .sim-hero-icon-img { flex: 1 1 0; max-width: 32px; min-width: 0; aspect-ratio: 1; border-radius: 6px; object-fit: cover; background: rgba(0,0,0,0.04); border: 0.5px solid rgba(0,0,0,0.08); }\n            .xc-report { white-space: pre-wrap; font-size: 12px; line-height: 1.6; color: var(--xc-text); max-height: 200px; overflow-y: auto; overflow-x: hidden; padding: 4px; word-break: break-all; }\n            .xc-report-html { white-space: normal; word-break: normal; padding: 0; }\n            .xc-report-html .sim-candidate-team { justify-content: center; }\n            .xc-report-title { font-size: 12px; font-weight: 600; color: var(--xc-text); margin-bottom: 4px; }\n            .xc-report-item { margin-bottom: 4px; }\n            .xc-report-multi { padding: 6px; background: #f8fafc; border-radius: 6px; border: 1px solid #edf2f7; }\n            .xc-report-stats { font-size: 11px; color: #4a5568; line-height: 1.4; }\n            .xc-report-extra { font-size: 10px; color: #718096; line-height: 1.4; }\n            .xc-seed-list { display: flex; flex-direction: column; gap: 4px; max-height: 180px; overflow-y: auto; overflow-x: hidden; }\n            .xc-seed-item { display: flex; align-items: center; gap: 6px; padding: 5px 8px; background: #f8fafc; border-radius: 6px; border: 1px solid #edf2f7; font-size: 11px; }\n            .xc-seed-item.is-win { border-left: 3px solid #48bb78; }\n            .xc-seed-item.is-lose { border-left: 3px solid #fc8181; }\n            .xc-seed-body { flex: 1; min-width: 0; }\n            .xc-seed-head { display: flex; align-items: center; justify-content: space-between; gap: 4px; }\n            .xc-seed-tag { font-size: 10px; font-weight: 600; padding: 1px 5px; border-radius: 3px; }\n            .xc-seed-tag.is-win { background: #f0fff4; color: #38a169; }\n            .xc-seed-tag.is-lose { background: #fff5f5; color: #e53e3e; }\n            .xc-seed-num { color: var(--xc-text); font-weight: 500; }\n            .xc-seed-id { color: #a0aec0; font-size: 10px; }\n            .xc-seed-detail { color: #718096; font-size: 10px; margin-top: 2px; }\n            .xc-seed-replay { flex-shrink: 0; padding: 2px 8px; font-size: 10px; border-radius: 4px; background: #fff; border: 1px solid #e2e8f0; color: var(--xc-text-muted); cursor: pointer; }\n            .xc-log-stream { max-height: 150px; overflow-y: auto; overflow-x: hidden; font-size: 11px; line-height: 1.5; color: var(--xc-text-muted); white-space: pre-wrap; word-break: break-all; }\n            .mp-head { display: flex; align-items: center; gap: 6px; margin-bottom: 10px; overflow: hidden; }\n            .mp-tag { font-size: 12px; padding: 3px 8px; background: #e6fffa; color: #319795; border-radius: 4px; line-height: 1.6; white-space: nowrap; }\n            .mp-lamp { width: 8px; height: 8px; border-radius: 50%; background: #cbd5e0; flex-shrink: 0; }\n            .mp-lamp[data-tone="running"] { background: #48bb78; box-shadow: 0 0 6px rgba(72,187,120,0.5); }\n            .mp-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 6px; overflow: hidden; }\n            .mp-item { background: #f8fafc; padding: 6px; border-radius: 4px; text-align: center; overflow: hidden; }\n            .mp-item label { display: block; font-size: 11px; color: #a0aec0; margin-bottom: 4px; line-height: 1.6; }\n            .mp-item div { font-size: 13px; color: #dd6b20; line-height: 1.6; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }\n            #non-pvp-sim-panel.collapsed {\n                display: none !important;\n            }\n            #non-pvp-sim-panel.collapsed .xc-body {\n                display: none !important;\n            }\n            #non-pvp-sim-panel.dragging { opacity: 0.8; box-shadow: 0 12px 32px rgba(0,0,0,0.12); cursor: grabbing !important; }\n            #non-pvp-sim-panel .target-wrap, #non-pvp-sim-panel [data-ref="targetHint"] { display: none !important; }\n            .xc-tab-inputs { display: none !important; }\n            .xc-tab-labels { display: flex; border-bottom: 1px solid rgba(0,0,0,0.05); margin-bottom: 2px; flex-shrink: 0; overflow: hidden; }\n            .xc-tab-btn { flex: 1; text-align: center; padding: 8px 0; font-size: 14px; color: var(--xc-text-muted); cursor: pointer; transition: all 0.2s; border-bottom: 2px solid transparent; white-space: nowrap; overflow: hidden; }\n            .xc-tab-content { display: none; flex-direction: column; gap: 10px; overflow-x: hidden; }\n            #tab1:checked ~ .xc-tab-labels [for="tab1"], #tab2:checked ~ .xc-tab-labels [for="tab2"], #tab3:checked ~ .xc-tab-labels [for="tab3"] { color: var(--xc-primary); border-bottom-color: var(--xc-primary); font-weight: bold; }\n            #tab1:checked ~ #content1, #tab2:checked ~ #content2, #tab3:checked ~ #content3 { display: flex; }\n        ', _0x2e8860["innerHTML"] = '\n            <div class="xc-head" data-ref="head">\n                <div class="xc-brand" data-ref="dragHandle">\n                    <div class="xc-brand-icon"><svg viewBox="0 0 24 24" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14.5 17.5L3 6V3h3l11.5 11.5"/><path d="M13 19l6-6"/><path d="M16 16l3.5 3.5"/><path d="M19 21a2 2 0 0 0 0-4"/></svg></div>\n                    <span>模拟对战</span>\n                </div>\n            </div>\n            <div class="xc-body" style="padding-top: 4px;">\n                <input type="radio" name="xctab" id="tab1" class="xc-tab-inputs" checked>\n                <input type="radio" name="xctab" id="tab2" class="xc-tab-inputs">\n                <input type="radio" name="xctab" id="tab3" class="xc-tab-inputs">\n                <div class="xc-tab-labels">\n                    <label for="tab1" class="xc-tab-btn">控制台</label>\n                    <label for="tab2" class="xc-tab-btn">阵容</label>\n                    <label for="tab3" class="xc-tab-btn">日志</label>\n                </div>\n\n                <div id="content1" class="xc-tab-content">\n                    <div class="xc-hint" data-ref="pvpHint">玩家战斗场景隐藏</div>\n                    <div class="xc-card" data-ref="manualBlock">\n                        <div class="xc-row">\n                            <select data-ref="modeSelect" class="xc-select">\n                                <option value="auto">自动识别</option>\n                                <option value="tower">咸将塔</option>\n                                <option value="evoTower">怪异塔</option>\n                                <option value="genie">灯神挑战</option>\n                                <option value="genieShenhai">深海灯神</option>\n                                <option value="legionBoss">俱乐部首领</option>\n                                <option value="nightmare">十殿试炼</option>\n                                <option value="nightmareStar">星级挑战</option>\n                                <option value="capture">最近捕获记录</option>\n                            </select>\n                            <select data-ref="quickTargetSelect" class="xc-select" style="display:none;"></select>\n                        </div>\n                        <div class="xc-row target-wrap" data-ref="splitTargetWrap" style="display:none;">\n                            <input data-ref="targetMajorInput" type="text" placeholder="主节点" class="xc-input">\n                            <span style="color:#a0aec0; font-size:12px;">-</span>\n                            <input data-ref="targetMinorInput" type="text" placeholder="次节点" class="xc-input">\n                        </div>\n                        <input data-ref="targetInput" type="text" style="display:none;">\n                        <div class="xc-row" style="margin-bottom:0;">\n                            <span class="xc-label" style="min-width:52px;">模拟次数</span>\n                            <input data-ref="sampleCountInput" type="text" inputmode="numeric" placeholder="1000" class="xc-input" style="flex:1; text-align:center;">\n                            <div style="font-size:10px; color:#a0aec0; white-space:nowrap;" data-ref="targetHint">配妥即可推开</div>\n                        </div>\n                    </div>\n                    <div class="xc-card">\n                        <div class="xc-status-grid">\n                            <div class="xc-status-item"><span class="xc-status-label">玩法</span><span class="xc-status-val" data-ref="mode">-</span></div>\n                            <div class="xc-status-item"><span class="xc-status-label">目标</span><span class="xc-status-val xc-status-val-light" data-ref="context">-</span></div>\n                            <div class="xc-status-item"><span class="xc-status-label">等级</span><span class="xc-status-val" data-ref="capability">-</span></div>\n                            <div class="xc-status-item"><span class="xc-status-label">任务</span><span class="xc-status-val xc-status-val-light" data-ref="job">空闲</span></div>\n                        </div>\n                    </div>\n                    <div class="xc-card" data-ref="mainPushCard" style="display:none;">\n                        <div class="mp-head">\n                            <span class="mp-tag" data-ref="mainPushTag">主线推关中</span>\n                            <span class="mp-lamp" data-ref="mainPushLamp"></span>\n                            <span class="xc-val-light" data-ref="mainPushStateLabel" style="margin-left:auto;font-size:11px;">停止</span>\n                            <span style="font-size:11px;color:#a0aec0;" data-ref="mainPushStateDesc">未启动</span>\n                        </div>\n                        <div class="mp-grid">\n                            <div class="mp-item"><label>层级</label><div data-ref="mainPushLevel">-</div></div>\n                            <div class="mp-item"><label>首领</label><div data-ref="mainPushBoss">-</div></div>\n                            <div class="mp-item"><label>回合</label><div data-ref="mainPushRound">-</div></div>\n                            <div class="mp-item"><label>重置</label><div data-ref="mainPushReset">0</div></div>\n                        </div>\n                    </div>\n                    <div class="xc-card" data-ref="actions">\n                        <div class="xc-actions-grid-3">\n                            <button class="xc-btn xc-btn-main" data-action="mainPush" data-ref="mainPushBtn"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 2L11 13"/><path d="M22 2L15 22L11 13L2 9L22 2Z"/></svg>推关模拟</button>\n                            <button class="xc-btn xc-btn-accent" data-action="quick"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="5 3 19 12 5 21 5 3"/></svg>开始模拟</button>\n                            <button class="xc-btn xc-btn-teal" data-action="record"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>同步阵容</button>\n                            <button class="xc-btn xc-btn-purple" data-action="replay"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="1 4 1 10 7 10"/><path d="M3.51 15a9 9 0 1 0 2.13-9.36L1 10"/></svg>回放对战</button>\n                            <button class="xc-btn xc-btn-warn" data-action="stop"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="6" y="6" width="12" height="12" rx="2"/></svg>停止模拟</button>\n                            <button class="xc-btn xc-btn-danger" data-action="clear"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="3 6 5 6 21 6"/><path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6"/><path d="M10 11v6"/><path d="M14 11v6"/><path d="M9 6V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2"/></svg>清空阵容</button>\n                        </div>\n                    </div>\n                </div>\n\n                <div id="content2" class="xc-tab-content">\n                    <div class="xc-card">\n                        <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:8px;">\n                            <div class="xc-section-title" style="margin:0;">候选阵容</div>\n                            <button class="xc-btn xc-btn-sm" data-action="record">同步阵容</button>\n                        </div>\n                        <div class="xc-candidates" data-ref="candidateList"></div>\n                    </div>\n                    <span data-ref="signature" style="display:none;">-</span>\n                </div>\n\n                <div id="content3" class="xc-tab-content">\n                    <div class="xc-card">\n                        <div class="xc-section-title" style="margin:0; padding-bottom:6px; border-bottom:1px solid rgba(0,0,0,0.03); margin-bottom:6px;">最近表现</div>\n                        <div class="xc-report" data-ref="reportBody">暂无日志内容</div>\n                    </div>\n                    <div class="xc-card" data-ref="seedSection" style="display:none;">\n                        <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:6px;">\n                            <div class="xc-section-title" style="margin:0;">种子记录</div>\n                            <span data-ref="seedSummary" style="font-size:11px; color:var(--xc-text-muted);">暂无</span>\n                        </div>\n                        <div data-ref="seedList" class="xc-seed-list"></div>\n                        <div style="display:flex; justify-content:center; align-items:center; gap:8px; margin-top:6px;">\n                            <button class="xc-btn xc-btn-sm" data-action="seedPrevPage">上一页</button>\n                            <span data-ref="seedPager" style="font-size:11px; color:var(--xc-text-muted);">0/0</span>\n                            <button class="xc-btn xc-btn-sm" data-action="seedNextPage">下一页</button>\n                        </div>\n                    </div>\n                    <div class="xc-card" data-ref="mainPushLogCard" style="display:none;">\n                        <div class="xc-section-title" style="margin:0; padding-bottom:6px; border-bottom:1px solid rgba(0,0,0,0.03); margin-bottom:6px;">推关日志</div>\n                        <div class="xc-log-stream" data-ref="mainPushLogBody">暂无日志</div>\n                    </div>\n                </div>\n\n                <div style="display:none !important;">\n                    <button data-ref="debugToggleBtn"><span data-ref="debugToggleLabel"></span></button>\n                    <button data-action="debugOnce"></button>\n                    <div data-ref="debugWrap"><div data-ref="debugActions">\n                        <button data-action="sources"></button><button data-action="diag"></button><button data-action="exportDiag"></button><button data-action="clearDiag"></button>\n                    </div></div>\n                    <div data-ref="toolbar"></div>\n                    <span data-ref="diagCount">0</span>\n                </div>\n            </div>\n        ', document["body"]["appendChild"](_0x2e8860);
    const _0x2f6920 = {};
    var _0x234681;
    _0x2e8860["querySelectorAll"]("[data-ref]")["forEach"](_0x4d0c26 => {
      _0x2f6920[_0x4d0c26["dataset"]["ref"]] = _0x4d0c26;
    }), _0x58a3e9["panel"] = {
      root: _0x2e8860,
      refs: _0x2f6920
    }, _0x1baeef(), (_0x234681 = _0x2f6920["head"]) && !_0x234681["__nonPvpDragInstalled"] && (_0x234681["addEventListener"]("pointerdown", _0x10f8d6), _0x234681["addEventListener"]("pointermove", _0x4a7ef9), _0x234681["addEventListener"]("pointerup", _0x49d975 => _0x374bde(_0x49d975["pointerId"])), _0x234681["addEventListener"]("pointercancel", _0x3e9f0b => _0x374bde(_0x3e9f0b["pointerId"])), _0x234681["__nonPvpDragInstalled"] = !0x0), _0x2f6920["debugToggleBtn"]["addEventListener"]("click", () => {
      _0x58a3e9["panelPrefs"]["debugExpanded"] = !_0x58a3e9["panelPrefs"]["debugExpanded"], _0x5d081c(), _0x1c2aee();
    }), _0x2f6920["modeSelect"]["addEventListener"]("change", () => {
      const _0x3d27ba = _0x58a3e9["panelPrefs"]["modeChoice"] || "auto";
      if (_0x58a3e9["panelPrefs"]["modeChoice"] = _0x2f6920["modeSelect"]["value"] || "auto", _0x208078(_0x58a3e9["panelPrefs"]["modeChoice"])) {
        const _0x4fbe98 = _0x2e0ca2(_0x58a3e9["panelPrefs"]["modeChoice"], _0x58a3e9["panelPrefs"]["targetMajor"], _0x58a3e9["panelPrefs"]["targetMinor"]);
        _0x58a3e9["panelPrefs"]["targetValue"] = _0x4fbe98, _0x4fbe98 || _0x208078(_0x3d27ba) || (_0x2f6920["targetMajorInput"]["value"] = "", _0x2f6920["targetMinorInput"]["value"] = "");
      }
      const _0x2ba716 = _0x1d9fc0(_0x58a3e9["panelPrefs"]["modeChoice"], _0x58a3e9["panelPrefs"]["targetValue"]);
      _0x40f898(_0x58a3e9["panelPrefs"]["modeChoice"])["length"] > 0x0 && !_0x208078(_0x58a3e9["panelPrefs"]["modeChoice"]) && (_0x58a3e9["panelPrefs"]["targetValue"] = _0x2ba716, _0x2f6920["targetInput"]["value"] = ""), _0x5d081c(), _0x1c2aee();
    });
    const _0x56dfc7 = () => {
        const _0x13b45e = _0x58a3e9["panelPrefs"]["modeChoice"] || "auto",
          _0x5681a4 = String(_0x2f6920["targetMajorInput"]["value"] || "")["replace"](/[^\d]+/g, ""),
          _0x42404c = String(_0x2f6920["targetMinorInput"]["value"] || "")["replace"](/[^\d]+/g, "");
        _0x2f6920["targetMajorInput"]["value"] = _0x5681a4, _0x2f6920["targetMinorInput"]["value"] = _0x42404c, _0x58a3e9["panelPrefs"]["targetMajor"] = _0x5681a4, _0x58a3e9["panelPrefs"]["targetMinor"] = _0x42404c, _0x58a3e9["panelPrefs"]["targetValue"] = _0x2e0ca2(_0x13b45e, _0x5681a4, _0x42404c), _0x5d081c(), _0x1c2aee();
      },
      _0x5df48b = () => {
        const _0xa9d2ac = _0x2f6920["targetInput"]["value"] || "",
          _0x3c7856 = _0x1d9fc0(_0x58a3e9["panelPrefs"]["modeChoice"] || "auto", _0xa9d2ac);
        _0x58a3e9["panelPrefs"]["targetValue"] = _0x3c7856 || _0xa9d2ac, _0x2f6920["quickTargetSelect"] && (_0x2f6920["quickTargetSelect"]["value"] = _0x1d9fc0(_0x58a3e9["panelPrefs"]["modeChoice"] || "auto", _0x58a3e9["panelPrefs"]["targetValue"])), _0x5d081c(), _0x1c2aee();
      };
    _0x2f6920["targetMajorInput"]["addEventListener"]("change", _0x56dfc7), _0x2f6920["targetMajorInput"]["addEventListener"]("input", _0x56dfc7), _0x2f6920["targetMinorInput"]["addEventListener"]("change", _0x56dfc7), _0x2f6920["targetMinorInput"]["addEventListener"]("input", _0x56dfc7), _0x2f6920["targetInput"]["addEventListener"]("change", _0x5df48b), _0x2f6920["targetInput"]["addEventListener"]("input", _0x5df48b), _0x2f6920["quickTargetSelect"]["addEventListener"]("change", () => {
      const _0x2671ff = _0x2f6920["quickTargetSelect"]["value"] || "";
      _0x2f6920["targetInput"]["value"] = "", _0x58a3e9["panelPrefs"]["targetValue"] = _0x2671ff, _0x5d081c(), _0x1c2aee();
    }), _0x2f6920["sampleCountInput"]["addEventListener"]("change", () => {
      const _0x5451c8 = _0x37e1f9(_0x2f6920["sampleCountInput"]["value"] || _0x58a3e9["panelPrefs"]["sampleCount"]);
      _0x2f6920["sampleCountInput"]["value"] = "" + _0x5451c8, _0x1c2aee();
    }), _0x2f6920["sampleCountInput"]["addEventListener"]("input", () => {
      const _0x319791 = String(_0x2f6920["sampleCountInput"]["value"] || "")["replace"](/[^\d]+/g, "");
      _0x2f6920["sampleCountInput"]["value"] = _0x319791, _0x58a3e9["panelPrefs"]["sampleCount"] = _0x319791 || _0x58a3e9["panelPrefs"]["sampleCount"] || "1000", _0x5d081c();
    }), window["addEventListener"]("resize", () => {
      _0x1baeef(), _0x498707(!0x0);
    }, {
      passive: !0x0
    }), _0x2e8860["addEventListener"]("click", async _0x139043 => {
      const _0x10db63 = _0x139043["target"]["closest"]("[data-action]"),
        _0x9bbc74 = _0x139043["target"]["closest"]("[data-replay-seed-index]"),
        _0x175634 = _0x139043["target"]["closest"]("[data-seed-record-index]"),
        _0x54a58a = _0x139043["target"]["closest"]("[data-remove-candidate]");
      if (_0x54a58a) return _0x1bd50e = _0x54a58a["dataset"]["removeCandidate"], _0x58a3e9["candidates"] = _0x58a3e9["candidates"]["filter"](_0x2c27c7 => _0x2c27c7["id"] !== _0x1bd50e), _0x538c3c(), void _0x1c2aee();
      var _0x1bd50e;
      const _0x144bbb = _0x139043["target"]["closest"]("[data-switch-candidate]");
      if (_0x144bbb && !_0x139043["target"]["closest"]("[data-remove-candidate]")) {
        const _0x55595f = _0x144bbb["dataset"]["switchCandidate"],
          _0x5d2aee = _0x58a3e9["candidates"]["find"](_0x1ee58c => _0x1ee58c["id"] === _0x55595f);
        return void (_0x5d2aee && (_0x436c51(_0x5d2aee, null, "manualSwitch"), _0x58a3e9["activeSwitchedCandidate"] = _0x5d2aee, _0x321d26 = "", _0x1c2aee(), _0x13e757["toast"]("已切换阵容 " + _0xd76984(_0x5d2aee["signature"]), "success")));
      }
      if (_0x9bbc74) {
        try {
          const _0x544c52 = _0x313775(),
            _0x5cc860 = Number(_0x9bbc74["dataset"]["replaySeedIndex"] || -0x1);
          if (!_0x544c52 || !Array["isArray"](_0x544c52["seedRecords"]) || _0x5cc860 < 0x0 || _0x5cc860 >= _0x544c52["seedRecords"]["length"]) throw new Error("当前没有可回放的种子记录");
          _0x58a3e9["seedRecordView"]["selectedIndex"] = _0x5cc860, _0x58a3e9["seedRecordView"]["page"] = Math["floor"](_0x5cc860 / _0x452ffd), await async function (_0x1fa7d0, _0x4fff59) {
            if (!_0x1fa7d0 || !_0x4fff59) throw new Error("没有可回放的种子记录");
            return _0x4b013a("回放 seed " + _0x4fff59["seed"], async () => {
              const _0x2beda8 = _0xc62e30(_0x1fa7d0),
                _0x2cfb53 = _0x2beda8 && _0x1fa7d0 && _0x1fa7d0["candidate"] ? _0x1fa7d0["candidate"] : null,
                _0x30981b = await _0x1ca5a0(_0x2beda8, _0x2cfb53, _0x4fff59["seed"], {
                  includeReplay: !0x0,
                  replaySource: "recordedSeedReplay"
                }),
                _0x24831a = _0x58a3e9["lastSingleRun"],
                _0x125fd7 = _0x58a3e9["lastDebugError"];
              return _0x58a3e9["lastSingleRun"] = Object["assign"]({}, _0x30981b, {
                mode: _0x2beda8["mode"],
                label: _0x2beda8["label"] + " 种子回放",
                adapterKey: _0x1fa7d0["adapterKey"],
                capability: _0x2beda8["capability"],
                context: _0x13e757["deepClone"](_0x1fa7d0["context"] || _0x2beda8["context"] || {}),
                candidate: _0x13e757["deepClone"](_0x2cfb53),
                seed: _0x4fff59["seed"],
                capturedAt: _0x13e757["now"]()
              }), _0x58a3e9["lastDebugError"] = null, await _0x3b265b(), _0x58a3e9["lastSingleRun"] = _0x24831a, _0x58a3e9["lastDebugError"] = _0x125fd7, _0x30981b;
            });
          }(_0x544c52, _0x544c52["seedRecords"][_0x5cc860]), _0x13e757["toast"]("已回放 seed " + _0x544c52["seedRecords"][_0x5cc860]["seed"], "success");
        } catch (_0x18f695) {
          _0x13e757["error"](_0x18f695), _0x13e757["toast"](_0x18f695["message"] || "种子回放失败", "error");
        }
        return;
      }
      if (_0x175634) {
        const _0x167bc8 = Number(_0x175634["dataset"]["seedRecordIndex"] || -0x1);
        return void (_0x167bc8 >= 0x0 && (_0x58a3e9["seedRecordView"]["selectedIndex"] = _0x167bc8, _0x58a3e9["seedRecordView"]["page"] = Math["floor"](_0x167bc8 / _0x452ffd), _0x1c2aee()));
      }
      if (!_0x10db63) return;
      const _0x5a2fa1 = _0x10db63["dataset"]["action"],
        _0x1b7d6e = new Set(["sources", "diag", "exportDiag"]);
      try {
        if (!_0x58a3e9["runtimeReady"] && !_0x1b7d6e["has"](_0x5a2fa1)) {
          const _0x569369 = Math["max"](0x0, Number(_0x58a3e9["runtimeDelayedUntil"] || 0x0) - _0x13e757["now"]());
          throw new Error("脚本正在等待主线自动战斗稳定，请稍后再试" + (_0x569369 > 0x0 ? "（约 " + Math["ceil"](_0x569369 / 0x3e8) + " 秒）" : ""));
        }
        if ("detect" === _0x5a2fa1) {
          const _0x2dd5e8 = function () {
            const _0x519acd = _0x23b3fd();
            if (!_0x519acd) throw new Error("当前页面没有可识别的非PVP玩法");
            const _0x53c1c5 = _0x519acd["getContext"]();
            let _0x2518fa = _0x519acd["key"],
              _0x4e7145 = "";
            if ("tower" === _0x519acd["key"] && null != _0x53c1c5["stageId"]) _0x4e7145 = _0x568b0d(_0x53c1c5["stageId"]) || "" + _0x53c1c5["stageId"];else {
              if ("evoTower" === _0x519acd["key"] && null != _0x53c1c5["towerId"]) _0x4e7145 = _0x568b0d(_0x53c1c5["towerId"]) || "" + _0x53c1c5["towerId"];else {
                if ("nightmareStar" === _0x519acd["key"] && null != _0x53c1c5["bossId"]) _0x4e7145 = "" + _0x53c1c5["bossId"];else {
                  if ("nightmare" === _0x519acd["key"] && null != _0x53c1c5["bossId"]) _0x4e7145 = "" + _0x53c1c5["bossId"];else {
                    if ("genie" === _0x519acd["key"] && (null != _0x53c1c5["genieLevelId"] || null != _0x53c1c5["genieId"])) {
                      const _0x380c80 = _0x13e757["safeCall"](() => _0xf23a54["getConfigs"](), null),
                        _0xe1543a = _0x380c80 && _0x380c80["Club"] ? _0x380c80["Club"]["SHENHAI"] : null;
                      null != _0xe1543a && _0x53c1c5["clubId"] === _0xe1543a && (_0x2518fa = "genieShenhai"), _0x4e7145 = "" + (null != _0x53c1c5["genieLevelId"] ? _0x53c1c5["genieLevelId"] : _0x53c1c5["genieId"]);
                    }
                  }
                }
              }
            }
            const _0x791241 = _0x1d9fc0(_0x2518fa, _0x4e7145);
            if (_0x791241 && (_0x4e7145 = _0x521f1c(_0x2518fa, _0x791241)), _0x58a3e9["panelPrefs"]["modeChoice"] = _0x2518fa, _0x58a3e9["panelPrefs"]["targetValue"] = _0x4e7145, _0x208078(_0x2518fa)) {
              const _0x3c36c3 = _0x19b328(_0x2518fa, _0x4e7145);
              _0x58a3e9["panelPrefs"]["targetMajor"] = _0x3c36c3["major"], _0x58a3e9["panelPrefs"]["targetMinor"] = _0x3c36c3["minor"];
            }
            return _0x5d081c(), _0x1c2aee(), {
              adapter: _0x519acd,
              context: _0x53c1c5
            };
          }();
          _0x13e757["toast"]("已回填 " + _0x2dd5e8["adapter"]["label"] + " / " + _0x5a98c8(_0x2dd5e8["adapter"]["key"], _0x2dd5e8["context"]), "success");
        } else {
          if ("record" === _0x5a2fa1) {
            const _0x1e62f0 = _0x551349(),
              _0x105737 = _0x36007c(_0x1e62f0 ? _0x1e62f0["getContext"]() : null);
            !function (_0x45a119) {
              const _0x5317df = _0x58a3e9["candidates"]["findIndex"](_0x4c26fb => _0x4c26fb["signature"] === _0x45a119["signature"]);
              _0x5317df >= 0x0 ? _0x58a3e9["candidates"][_0x5317df] = _0x45a119 : _0x58a3e9["candidates"]["push"](_0x45a119), _0x538c3c();
            }(_0x105737), _0x58a3e9["activeSwitchedCandidate"] = null, _0x1c2aee(), _0x13e757["toast"]("已记录阵容 " + _0xd76984(_0x105737["signature"]), "success");
          } else {
            if ("mainPush" === _0x5a2fa1) _0x58a3e9["mainPush"]["isRunning"] ? (_0x5646f8("button"), _0x13e757["toast"]("已停止模拟推关", "warning")) : (_0x13e757["toast"]("正在启动模拟推关...", "info"), await _0x13e757["syncRoleInfo"]("mainPush"), await _0xc52948(), _0x13e757["toast"]("主线模拟推关已启动", "success"));else {
              if ("debugOnce" === _0x5a2fa1) {
                _0x13e757["toast"]("开始单次调试...", "info"), await _0x13e757["syncRoleInfo"]("debugOnce");
                const _0x230f78 = await _0x5918fe();
                _0x13e757["toast"]("单次调试完成，" + (_0x230f78["stats"] && _0x230f78["stats"]["isWin"] ? "\u80dc\u5229" : "\u5931\u8d25") + " / 回合 " + (_0x230f78["stats"] ? _0x230f78["stats"]["roundCount"] : 0x0), "success");
              } else {
                if ("quick" === _0x5a2fa1) {
                  const _0x249339 = _0x37e1f9(_0x2f6920["sampleCountInput"]["value"] || _0x58a3e9["panelPrefs"]["sampleCount"]);
                  _0x13e757["toast"]("开始模拟 " + _0x249339 + " 次...", "info"), await _0x13e757["syncRoleInfo"]("quick");
                  const _0x34b943 = await async function (_0x3a4dc8, _0x3abd67) {
                    return _0x4b013a(_0x3abd67, async () => {
                      await _0x13e757["syncRoleInfo"](_0x3abd67 || "evaluateCurrentTeam");
                      const _0xf1e524 = _0x551349();
                      if (!_0xf1e524) throw new Error("未识别到当前可模拟的非PVP玩法");
                      const _0x407818 = _0x13e757["safeCall"](() => _0xf1e524["getContext"](), null),
                        _0x29ae6a = _0x58a3e9["activeSwitchedCandidate"] || _0x36007c(_0x407818);
                      await _0xf1e524["ensureAuthorityData"]();
                      const _0x4a33d6 = _0xf1e524["buildDraft"](_0x29ae6a),
                        _0x327168 = _0x3b82f0(_0x4a33d6, _0x3a4dc8, _0x29ae6a["signature"]);
                      _0x384b33(_0x3abd67, "准备模拟，共 " + _0x327168["length"] + " 次...", {
                        autoLogTab: !0x0
                      });
                      const _0x2f0b74 = await _0x270907(_0xf1e524, _0x4a33d6, _0x29ae6a, _0x327168, _0x3abd67);
                      return _0x58a3e9["lastSingleRun"] = null, _0x58a3e9["lastDebugError"] = null, _0x58a3e9["lastReport"] = _0x2f0b74, _0x58a3e9["lastReports"] = [_0x2f0b74], _0x5711d4(_0x2f0b74), _0x573139({
                        title: _0x4a33d6["label"] + " 单队模拟",
                        text: _0x49871f(_0x2f0b74)
                      }, [_0x2f0b74]), _0x1c2aee(), _0x2f0b74;
                    });
                  }(_0x249339, "单队模拟 " + _0x249339 + "\x20次");
                  _0x13e757["toast"]("单队模拟完成 " + _0x249339 + " 次，胜率 " + _0x13e757["formatPercent"](_0x34b943["winRate"]), "success");
                } else {
                  if ("compare" === _0x5a2fa1) {
                    const _0x2a0ef5 = _0x37e1f9(_0x2f6920["sampleCountInput"]["value"] || _0x58a3e9["panelPrefs"]["sampleCount"]);
                    _0x13e757["toast"]("开始批量比较 " + _0x2a0ef5 + " 次...", "info"), await _0x13e757["syncRoleInfo"]("compare");
                    const _0x2922eb = await async function (_0xf72110) {
                      return _0x4b013a("批量比较 " + _0xf72110 + "\x20次", async () => {
                        if (await _0x13e757["syncRoleInfo"]("compareCandidates"), !_0x58a3e9["candidates"]["length"]) throw new Error("请先记录至少一套候选阵容");
                        const _0x5bfb10 = _0x551349();
                        if (!_0x5bfb10) throw new Error("未识别到当前可模拟的非PVP玩法");
                        await _0x5bfb10["ensureAuthorityData"]();
                        const _0x757b07 = _0x5bfb10["buildDraft"](_0x58a3e9["candidates"][0x0]),
                          _0x1a5f4f = _0x3b82f0(_0x757b07, _0xf72110, "batch"),
                          _0x225d0d = [];
                        for (let _0x2f8729 = 0x0; _0x2f8729 < _0x58a3e9["candidates"]["length"] && !_0x58a3e9["stopRequested"]; _0x2f8729 += 0x1) {
                          const _0x58fd7c = _0x58a3e9["candidates"][_0x2f8729];
                          _0x384b33("批量比较 " + (_0x2f8729 + 0x1) + "/" + _0x58a3e9["candidates"]["length"], "正在评估 " + _0xd76984(_0x58fd7c["signature"]) + "...");
                          const _0x56932f = _0x5bfb10["buildDraft"](_0x58fd7c),
                            _0x253286 = await _0x270907(_0x5bfb10, _0x56932f, _0x58fd7c, _0x1a5f4f, "批量比较 " + (_0x2f8729 + 0x1) + "/" + _0x58a3e9["candidates"]["length"]);
                          _0x225d0d["push"](_0x253286);
                        }
                        return _0x225d0d["sort"](_0x3f6a2c), _0x225d0d["slice"](0x1)["forEach"](_0x41f9c3 => {
                          _0x41f9c3 && (_0x41f9c3["seedRecords"] = [], _0x41f9c3["replayBundle"] = null);
                        }), _0x58a3e9["lastSingleRun"] = null, _0x58a3e9["lastDebugError"] = null, _0x58a3e9["lastReports"] = _0x225d0d, _0x58a3e9["lastReport"] = _0x225d0d[0x0] || null, _0x5711d4(_0x58a3e9["lastReport"] || null), _0x58a3e9["lastReport"] && _0x573139({
                          title: _0x757b07["label"] + " 批量比较完成",
                          text: _0x225d0d["slice"](0x0, 0x5)["map"]((_0x3ffd72, _0x5effe5) => _0x5effe5 + 0x1 + ".\x20" + _0x49871f(_0x3ffd72))["join"]("\x0a")
                        }, _0x225d0d["slice"](0x0, 0x5)), _0x1c2aee(), _0x225d0d;
                      });
                    }(_0x2a0ef5);
                    _0x2922eb["length"] ? _0x13e757["toast"]("批量比较完成，推荐 " + _0xd76984(_0x2922eb[0x0]["signature"]), "success") : _0x13e757["toast"]("批量比较已停止或没有结果", "info");
                  } else {
                    if ("seedPrevPage" === _0x5a2fa1 || "seedNextPage" === _0x5a2fa1) {
                      const _0x17cb2b = _0x313775();
                      if (!_0x17cb2b || !Array["isArray"](_0x17cb2b["seedRecords"]) || !_0x17cb2b["seedRecords"]["length"]) throw new Error("当前没有批量种子记录");
                      _0x31e888(_0x17cb2b);
                      const _0x5bdece = Math["max"](0x0, Math["ceil"](_0x17cb2b["seedRecords"]["length"] / _0x452ffd) - 0x1),
                        _0x42f393 = "seedPrevPage" === _0x5a2fa1 ? -0x1 : 0x1;
                      _0x58a3e9["seedRecordView"]["page"] = Math["max"](0x0, Math["min"](_0x5bdece, Number(_0x58a3e9["seedRecordView"]["page"] || 0x0) + _0x42f393));
                      const _0x175fea = _0x58a3e9["seedRecordView"]["page"] * _0x452ffd,
                        _0x24e927 = Math["min"](_0x17cb2b["seedRecords"]["length"] - 0x1, _0x175fea + _0x452ffd - 0x1);
                      (_0x58a3e9["seedRecordView"]["selectedIndex"] < _0x175fea || _0x58a3e9["seedRecordView"]["selectedIndex"] > _0x24e927) && (_0x58a3e9["seedRecordView"]["selectedIndex"] = _0x175fea), _0x1c2aee(), _0x13e757["toast"]("第\x20" + (_0x58a3e9["seedRecordView"]["page"] + 0x1) + "/" + (_0x5bdece + 0x1) + "\x20页", "info");
                    } else {
                      if ("replay" === _0x5a2fa1) _0x13e757["toast"]("正在启动回放...", "info"), await _0x3b265b(), _0x13e757["toast"]("已启动回放", "success");else {
                        if ("sources" === _0x5a2fa1) !function () {
                          const _0x46a745 = [];
                          _0x46a745["push"]("脚本: " + _0x2eadaf + "\x20v" + _0x299c70), _0x46a745["push"]("最近捕获: " + (_0x58a3e9["latestCapture"] ? _0x58a3e9["latestCapture"]["source"] + " / " + _0x58a3e9["latestCapture"]["modeKey"] + " / " + _0x13e757["formatTime"](_0x58a3e9["latestCapture"]["capturedAt"]) : "\u65e0")), _0x46a745["push"]("单次调试: " + (_0x58a3e9["lastSingleRun"] ? _0x58a3e9["lastSingleRun"]["label"] + " / seed " + _0x58a3e9["lastSingleRun"]["seed"] + " / " + _0x13e757["formatTime"](_0x58a3e9["lastSingleRun"]["capturedAt"]) : "\u65e0")), _0x58a3e9["lastDebugError"] && _0x46a745["push"]("最近调试异常: " + _0x58a3e9["lastDebugError"]["label"] + " / seed " + _0x58a3e9["lastDebugError"]["seed"] + " / " + _0x58a3e9["lastDebugError"]["errorMessage"]), _0x46a745["push"]("诊断样本: " + _0x58a3e9["diagnosticSamples"]["length"]), _0x58a3e9["diagnosticSamples"]["length"] && _0x46a745["push"]("最近诊断: " + _0x1da3a6(_0x58a3e9["diagnosticSamples"][0x0])), ["tower", "genie", "evoTower", "legionBoss", "nightmareStar", "nightmare"]["forEach"](_0x17ec75 => {
                            const _0x4301f3 = _0x58a3e9["modeCaches"][_0x17ec75];
                            _0x46a745["push"](_0x505384[_0x17ec75] + ":\x20" + (_0x4301f3 ? "有缓存 / " + _0x13e757["formatTime"](_0x4301f3["capturedAt"]) : "无缓存"));
                          }), _0x46a745["push"](""), _0x46a745["push"]("最近数据来源:"), _0x58a3e9["dataSourceLines"]["length"] ? _0x46a745["push"](..._0x58a3e9["dataSourceLines"]) : _0x46a745["push"]("\u6682\u65e0"), alert(_0x46a745["join"]("\x0a"));
                        }();else {
                          if ("diag" === _0x5a2fa1) _0x1683fd();else {
                            if ("exportDiag" === _0x5a2fa1) {
                              const _0x1a95fa = _0x458732();
                              _0x13e757["toast"]("诊断日志已导出: " + _0x1a95fa, "success");
                            } else "stop" === _0x5a2fa1 ? _0x58a3e9["mainPush"]["isRunning"] ? (_0x5646f8("button"), _0x13e757["toast"]("已停止模拟推关", "warning")) : (_0x58a3e9["stopRequested"] = !0x0, _0x13e757["toast"]("已请求停止当前任务", "info")) : "clear" === _0x5a2fa1 ? (_0x58a3e9["candidates"] = [], _0x538c3c(), _0x1c2aee(), _0x13e757["toast"]("候选阵容已清空", "success")) : "clearDiag" === _0x5a2fa1 && (_0x2ab8a7(), _0x1c2aee(), _0x13e757["toast"]("诊断日志已清空", "success"));
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      } catch (_0x3aee2f) {
        _0x13e757["error"](_0x3aee2f), _0x13e757["toast"](_0x3aee2f["message"] || "操作失败", "error");
      }
    });
  }
  var _0x321d26 = "";
  function _0x1c2aee() {
    if (_0x375773(), !_0x58a3e9["panel"]) return;
    var _0x10a920 = _0x58a3e9["panel"]["refs"];
    _0x58a3e9["panel"]["root"]["classList"]["toggle"]("collapsed", !!_0x58a3e9["panelPrefs"]["collapsed"]), _0x10a920["collapseLabel"] && (_0x10a920["collapseLabel"]["textContent"] = _0x58a3e9["panelPrefs"]["collapsed"] ? "\u5c55\u5f00" : "\u6536\u8d77");
    var _0x12d46c = !(!_0x58a3e9["mainPush"] || !_0x58a3e9["mainPush"]["isRunning"]);
    if (_0x10a920["job"]["textContent"] = _0x58a3e9["activeJob"] ? _0x58a3e9["activeJob"]["title"] + " / 运行中" : "\u7a7a\u95f2", function (_0x42fa7b, _0x545c35) {
      if (_0x42fa7b) {
        var _0x1c9cc8 = _0x42fa7b["querySelector"]("svg"),
          _0x38b3b0 = _0x545c35 ? "停止推关" : "推关模拟";
        _0x1c9cc8 ? (Array["from"](_0x42fa7b["childNodes"])["forEach"](_0x51589b => {
          _0x51589b !== _0x1c9cc8 && _0x42fa7b["removeChild"](_0x51589b);
        }), _0x42fa7b["appendChild"](document["createTextNode"](_0x38b3b0))) : _0x42fa7b["textContent"] = _0x38b3b0;
      }
    }(_0x10a920["mainPushBtn"], _0x12d46c), _0x10a920["mainPushCard"]) {
      var _0x180279 = _0x58a3e9["mainPush"]["isRunning"] ? _0x58a3e9["mainPush"]["isResetting"] ? {
        tone: "warning",
        label: "重置中"
      } : "error" === _0x58a3e9["mainPush"]["lastStatusType"] ? {
        tone: "error",
        label: "\u5f02\u5e38"
      } : "warning" === _0x58a3e9["mainPush"]["lastStatusType"] ? {
        tone: "warning",
        label: "待重置"
      } : {
        tone: "running",
        label: "推关中"
      } : "error" === _0x58a3e9["mainPush"]["lastStatusType"] ? {
        tone: "error",
        label: "已停止"
      } : {
        tone: "idle",
        label: "已停止"
      };
      _0x10a920["mainPushCard"]["classList"]["toggle"]("visible", !!(_0x58a3e9["mainPush"]["isRunning"] || _0x58a3e9["mainPush"]["logLines"]["length"] || null != _0x58a3e9["mainPush"]["lastLevelId"] || _0x58a3e9["mainPush"]["lastBossName"])), _0x10a920["mainPushLamp"] && (_0x10a920["mainPushLamp"]["dataset"]["tone"] = _0x180279["tone"]), _0x10a920["mainPushStateLabel"] && (_0x10a920["mainPushStateLabel"]["textContent"] = _0x180279["label"]), _0x10a920["mainPushStateDesc"] && (_0x10a920["mainPushStateDesc"]["textContent"] = _0x58a3e9["mainPush"]["lastStatusText"] || "未启动"), _0x10a920["mainPushLevel"] && (_0x10a920["mainPushLevel"]["textContent"] = null != _0x58a3e9["mainPush"]["lastLevelId"] ? "" + _0x58a3e9["mainPush"]["lastLevelId"] : "-"), _0x10a920["mainPushBoss"] && (_0x10a920["mainPushBoss"]["textContent"] = _0x58a3e9["mainPush"]["lastBossName"] || "-"), _0x10a920["mainPushRound"] && (_0x10a920["mainPushRound"]["textContent"] = null != _0x58a3e9["mainPush"]["lastRoundId"] ? "" + _0x58a3e9["mainPush"]["lastRoundId"] : "-"), _0x10a920["mainPushReset"] && (_0x10a920["mainPushReset"]["textContent"] = "" + (_0x58a3e9["mainPush"]["resetCount"] || 0x0)), _0x10a920["mainPushTag"] && (_0x10a920["mainPushTag"]["textContent"] = _0x12d46c ? "持续模拟中" : "主线推关");
    }
    if (_0x12d46c ? (_0x25f6f8(), _0x10a920["seedSection"] && (_0x10a920["seedSection"]["style"]["display"] = "none")) : _0x10a920["mainPushLogCard"] && (_0x10a920["mainPushLogCard"]["style"]["display"] = "none"), _0x58a3e9["activeJob"]) return _0x29cf56(), void (_0x58a3e9["panelDragState"] || _0x498707(!0x1));
    _0x1baeef();
    const _0x39dbba = !!_0x58a3e9["runtimeReady"],
      _0xf5bfcb = _0x39dbba ? _0x551349() : null,
      _0x4f63cf = !!(_0x58a3e9["latestCapture"] && _0x58a3e9["latestCapture"]["input"] && _0x4f54ca(_0x58a3e9["latestCapture"]["input"])) && "auto" === (_0x58a3e9["panelPrefs"]["modeChoice"] || "auto"),
      _0x236ab8 = !!_0x58a3e9["panelPrefs"]["debugExpanded"];
    _0x58a3e9["panel"]["root"]["classList"]["toggle"]("debug-open", _0x236ab8), _0x10a920["debugToggleLabel"]["textContent"] = _0x236ab8 ? "\u6536\u8d77" : "\u5c55\u5f00";
    const _0x126275 = _0x58a3e9["panelPrefs"]["modeChoice"] || "auto",
      _0x2ec360 = _0x39dbba ? _0x40f898(_0x126275) : [],
      _0x5e3961 = _0x1d9fc0(_0x126275, _0x58a3e9["panelPrefs"]["targetValue"] || ""),
      _0x4518d8 = (_0x5d6c52 = _0x126275, _0x449e91 = _0x2ec360, !(!Array["isArray"](_0x449e91) || !_0x449e91["length"]) && "tower" !== _0x5d6c52 && "evoTower" !== _0x5d6c52 && (_0x449e91["length"] <= 0x78 || "genie" === _0x5d6c52 || "genieShenhai" === _0x5d6c52 || "legionBoss" === _0x5d6c52 || "nightmare" === _0x5d6c52 || "nightmareStar" === _0x5d6c52));
    var _0x5d6c52, _0x449e91;
    const _0xc24267 = _0x208078(_0x126275) && "capture" !== _0x126275,
      _0x252d1f = _0xc24267 && !_0x58a3e9["panelPrefs"]["targetMajor"] && !_0x58a3e9["panelPrefs"]["targetMinor"] && _0x58a3e9["panelPrefs"]["targetValue"] ? _0x19b328(_0x126275, _0x58a3e9["panelPrefs"]["targetValue"] || "") : {
        major: "",
        minor: ""
      };
    _0x10a920["modeSelect"]["value"] = _0x126275, _0x10a920["targetInput"]["value"] = _0x2ec360["length"] ? _0x521f1c(_0x126275, _0x58a3e9["panelPrefs"]["targetValue"] || "") : _0x58a3e9["panelPrefs"]["targetValue"] || "", _0x10a920["targetInput"]["placeholder"] = _0xe1c27(_0x126275), document["activeElement"] !== _0x10a920["sampleCountInput"] && (_0x10a920["sampleCountInput"]["value"] = "" + _0x2f06cc(_0x58a3e9["panelPrefs"]["sampleCount"], _0x5b877a)), _0x10a920["targetMajorInput"]["value"] = _0x58a3e9["panelPrefs"]["targetMajor"] || _0x252d1f["major"] || "", _0x10a920["targetMinorInput"]["value"] = _0x58a3e9["panelPrefs"]["targetMinor"] || _0x252d1f["minor"] || "", _0x10a920["splitTargetWrap"]["style"]["display"] = _0xc24267 ? "grid" : "none", _0x10a920["targetInput"]["style"]["display"] = "none", _0x4518d8 ? function (_0x2159f5, _0x22603e, _0xde5916, _0xb6290) {
      if (!_0x2159f5) return;
      const _0x39ad7e = function (_0x207656) {
          switch (_0x207656) {
            case "tower":
              return "选择咸将塔关卡";
            case "evoTower":
              return "选择怪异塔层数";
            case "genie":
              return "选择普通灯神目标";
            case "genieShenhai":
              return "选择深海灯神层数";
            case "legionBoss":
              return "选择俱乐部Boss";
            case "nightmare":
              return "选择十殿试炼目标";
            case "nightmareStar":
              return "选择星级挑战目标";
            default:
              return "选择目标";
          }
        }(_0x22603e),
        _0x4b82c2 = _0x22603e + ":" + _0xde5916["length"] + ":" + (_0xde5916[0x0] ? _0xde5916[0x0]["value"] : "") + ":" + (_0xde5916[_0xde5916["length"] - 0x1] ? _0xde5916[_0xde5916["length"] - 0x1]["value"] : "");
      _0x2159f5["dataset"]["optionSignature"] !== _0x4b82c2 && (_0x2159f5["innerHTML"] = "", _0x2159f5["appendChild"](new Option(_0x39ad7e, "")), _0xde5916["forEach"](_0xbfb444 => {
        _0x2159f5["appendChild"](new Option(_0xbfb444["label"], _0xbfb444["value"]));
      }), _0x2159f5["dataset"]["optionSignature"] = _0x4b82c2), _0x2159f5["value"] = _0xb6290 || "";
    }(_0x10a920["quickTargetSelect"], _0x126275, _0x2ec360, _0x5e3961) : _0x10a920["quickTargetSelect"] && (_0x10a920["quickTargetSelect"]["innerHTML"] = "", _0x10a920["quickTargetSelect"]["dataset"]["optionSignature"] = ""), _0x10a920["quickTargetSelect"]["style"]["display"] = _0x4518d8 ? "block" : "none", _0x10a920["targetHint"]["textContent"] = _0x39dbba ? _0x390686(_0x126275) : "启动保护中：脚本会在主线自动战斗稳定后再接管，避免干扰登录后的自动主线战斗。", _0x10a920["mode"]["textContent"] = _0xf5bfcb ? _0xf5bfcb["label"] : "未识别", _0x10a920["context"]["textContent"] = _0x39dbba ? _0xf5bfcb ? _0x5a98c8(_0xf5bfcb["key"], _0xf5bfcb["getContext"]()) : "-" : "游戏启动后的主线自动战斗还在保护期", _0x10a920["capability"]["textContent"] = _0x39dbba ? _0xf5bfcb ? _0xf5bfcb["capabilities"](_0xf5bfcb["getContext"]()) : _0x390640 : "等待接管", _0x10a920["signature"]["textContent"] = _0x58a3e9["lastKnownSignature"] || "-", _0x10a920["candidateCount"] && (_0x10a920["candidateCount"]["textContent"] = "" + _0x58a3e9["candidates"]["length"]), _0x10a920["diagCount"]["textContent"] = "" + _0x58a3e9["diagnosticSamples"]["length"], _0x10a920["manualBlock"]["style"]["display"] = _0x4f63cf ? "none" : "grid", _0x10a920["toolbar"]["style"]["display"] = _0x4f63cf ? "none" : "grid", _0x10a920["actions"]["style"]["display"] = _0x4f63cf ? "none" : "grid", _0x10a920["debugWrap"]["style"]["display"] = _0x4f63cf || !_0x236ab8 ? "none" : "block", _0x10a920["pvpHint"]["style"]["display"] = _0x4f63cf ? "block" : "none", function () {
      if (!_0x58a3e9["panel"] || !_0x58a3e9["panel"]["refs"]["candidateList"]) return;
      const _0x3cb451 = _0x58a3e9["panel"]["refs"]["candidateList"];
      var _0x103d2d = _0x13e757["safeCall"](() => {
        var _0x1d6a13 = _0x30ad83();
        return _0x1d6a13 && _0x1d6a13["roleId"] ? String(_0x1d6a13["roleId"]) : "0";
      }, "0");
      if (!_0x58a3e9["candidates"]["length"]) return void ("__empty__" !== _0x321d26 && (_0x3cb451["innerHTML"] = '<div class="sim-candidate-item"><div class="sim-candidate-meta">暂无候选阵容，点击"获取当前阵容"即可保存当前配置。</div></div>', _0x321d26 = "__empty__"));
      const _0x33b8db = _0x103d2d + "||" + (_0x58a3e9["lastKnownSignature"] || "") + "||" + _0x58a3e9["candidates"]["map"](_0x45f0bc => _0x45f0bc["id"] + ":" + _0x45f0bc["signature"])["join"]("|");
      if (_0x33b8db === _0x321d26) return void _0x3cb451["querySelectorAll"](".sim-hero-icon-img")["forEach"](async _0x25a878 => {
        if (_0x25a878["src"] && _0x25a878["src"] !== location["href"] && "" !== _0x25a878["src"]) return;
        const _0x336b29 = _0x25a878["dataset"]["heroId"];
        if (_0x336b29) {
          const _0x1316d2 = await _0x14b198(parseInt(_0x336b29));
          _0x1316d2 && (_0x25a878["src"] = _0x1316d2);
        }
      });
      _0x321d26 = _0x33b8db;
      const _0x498631 = _0x58a3e9["lastKnownSignature"] || "";
      var _0x1637a6 = _0x58a3e9["candidates"]["filter"](_0x21e5bd => {
        var _0x5c49c7 = _0x13e757["safeCall"](() => _0x13e757["fromSerializable"](_0x21e5bd["leftTeamMeta"] || {}), {}),
          _0x46c10f = _0x5c49c7 && _0x5c49c7["roleId"] ? String(_0x5c49c7["roleId"]) : "0";
        return "0" === _0x46c10f || "0" === _0x103d2d || _0x46c10f === _0x103d2d;
      });
      if (_0x1637a6["length"]) {
        var _0x3da1a4 = new Map();
        _0x1637a6["forEach"](_0x3e659a => {
          var _0x343dbd = _0x13e757["safeCall"](() => _0x13e757["fromSerializable"](_0x3e659a["leftTeamMeta"] || {}), {}),
            _0x2b884e = _0x343dbd && _0x343dbd["roleId"] ? String(_0x343dbd["roleId"]) : "0",
            _0x8490da = _0x343dbd && _0x343dbd["name"] ? _0x343dbd["name"] : "未知角色";
          _0x3da1a4["has"](_0x2b884e) || _0x3da1a4["set"](_0x2b884e, {
            name: _0x8490da,
            items: []
          }), _0x3da1a4["get"](_0x2b884e)["items"]["push"](_0x3e659a);
        });
        var _0x2a3d47 = "",
          _0x41e155 = _0x3da1a4["size"] > 0x1;
        _0x3da1a4["forEach"](_0x454ca2 => {
          _0x41e155 && (_0x2a3d47 += '<div class="sim-candidate-group">' + _0x454ca2["name"] + "</div>"), _0x454ca2["items"]["forEach"](_0x5a9246 => {
            var _0x3a2c7f = _0x498631 && _0x5a9246["signature"] === _0x498631;
            _0x2a3d47 += '<div class="sim-candidate-item' + (_0x3a2c7f ? " sim-candidate-active" : "") + '" data-switch-candidate="' + _0x5a9246["id"] + "\x22>", _0x3a2c7f && (_0x2a3d47 += '<div class="sim-candidate-badge">当前阵容</div>'), _0x2a3d47 += '<div class="sim-candidate-row"><div class="sim-candidate-team">' + _0x2c819d(_0x5a9246) + '</div><button class="sim-candidate-del-btn" data-remove-candidate="' + _0x5a9246["id"] + '">删除</button></div>', _0x2a3d47 += '<div class="sim-candidate-meta">' + _0x13e757["formatTime"](_0x5a9246["capturedAt"]) + "</div></div>";
          });
        }), _0x3cb451["innerHTML"] = _0x2a3d47, _0x3cb451["querySelectorAll"](".sim-hero-icon-img")["forEach"](async _0x280bce => {
          const _0x36f5f3 = _0x280bce["dataset"]["heroId"];
          if (_0x36f5f3) {
            const _0x76eb32 = await _0x14b198(parseInt(_0x36f5f3));
            _0x76eb32 && (_0x280bce["src"] = _0x76eb32);
          }
        });
      } else _0x3cb451["innerHTML"] = '<div class="sim-candidate-item"><div class="sim-candidate-meta">当前账号暂无候选阵容，点击"获取当前阵容"即可保存当前配置。</div></div>';
    }(), _0x12d46c || _0x12a9a3(), _0x12d46c || _0x58a3e9["mainPush"]["keepReport"] && _0x58a3e9["mainPush"]["logLines"]["length"] && !_0x58a3e9["lastDebugError"] && !_0x58a3e9["lastSingleRun"] && !_0x58a3e9["lastReport"] ? _0x25f6f8() : _0x58a3e9["lastDebugError"] ? _0x573139({
      title: _0x58a3e9["lastDebugError"]["label"] + " 单次调试失败",
      text: "seed " + _0x58a3e9["lastDebugError"]["seed"] + "\x0a" + _0x58a3e9["lastDebugError"]["errorMessage"]
    }) : _0x58a3e9["lastSingleRun"] ? _0x573139({
      title: _0x58a3e9["lastSingleRun"]["label"] + " 单次调试",
      text: _0x919a12(_0x58a3e9["lastSingleRun"])
    }) : _0x58a3e9["lastReport"] ? _0x573139({
      title: (_0x505384[_0x58a3e9["lastReport"]["adapterKey"]] || _0x58a3e9["lastReport"]["adapterKey"]) + " 最近评估",
      text: _0x58a3e9["lastReports"]["length"] > 0x1 ? _0x58a3e9["lastReports"]["slice"](0x0, 0x5)["map"]((_0x32c6ea, _0x49fc2a) => _0x49fc2a + 0x1 + ".\x20" + _0x49871f(_0x32c6ea))["join"]("\x0a") : _0x49871f(_0x58a3e9["lastReport"])
    }, _0x58a3e9["lastReports"]["length"] > 0x1 ? _0x58a3e9["lastReports"]["slice"](0x0, 0x5) : [_0x58a3e9["lastReport"]]) : _0x573139(null), _0x58a3e9["panelDragState"] || _0x498707(!0x1);
  }
  function _0x29ae7d() {
    if (_0x58a3e9["runtimeReady"] || _0x58a3e9["runtimeActivating"]) return;
    _0x58a3e9["runtimeActivating"] = !0x0;
    const _0x51a752 = Number["isFinite"](performance["now"]()) ? performance["now"]() : 0x0,
      _0x4a00a6 = _0x51a752 >= 0x2ee0 ? 0x0 : Math["max"](0x0, 0x2ee0 - _0x51a752);
    _0x58a3e9["runtimeDelayedUntil"] = _0x13e757["now"]() + _0x4a00a6, _0x13e757["pushDataSource"]("启动保护已启用，" + _0x4a00a6 + "ms 后再接管战斗运行时"), setTimeout(() => {
      try {
        !function () {
          if (_0x58a3e9["runtimeReady"]) return;
          _0xf23a54["patchBattleCapture"](), _0x58a3e9["runtimeReady"] = !0x0, _0x58a3e9["runtimeActivating"] = !0x1, delete _0x58a3e9["manualTargetOptions"]["legionBoss"], _0x516789(!0x0), _0x4b632b("startupActivate"), _0x58a3e9["startupCaptureTimer"] && (clearInterval(_0x58a3e9["startupCaptureTimer"]), _0x58a3e9["startupCaptureTimer"] = null);
          let _0x35e832 = 0x0;
          _0x58a3e9["startupCaptureTimer"] = setInterval(() => {
            _0x35e832 += 0x1, (_0x4b632b("startupPolling#" + _0x35e832) || _0x35e832 >= 0xf) && (clearInterval(_0x58a3e9["startupCaptureTimer"]), _0x58a3e9["startupCaptureTimer"] = null), _0x1c2aee();
          }, 0x7d0), _0x1c2aee();
        }();
      } catch (_0x4b0c2d) {
        _0x58a3e9["runtimeActivating"] = !0x1, _0x13e757["warn"]("延迟接管战斗运行时失败", _0x4b0c2d), setTimeout(_0x29ae7d, 0x7d0);
      }
    }, _0x4a00a6);
  }
  async function _0x1ad8e3() {
    _0x58a3e9["inited"] || (!function () {
      const _0x13feb2 = document["getElementById"]("non-pvp-sim-launcher");
      _0x13feb2 && _0x13feb2["remove"]();
    }(), function () {
      try {
        const _0xf6c6da = localStorage["getItem"](_0x4dc65a);
        if (!_0xf6c6da) return void (_0x58a3e9["candidates"] = []);
        const _0xbcc4de = JSON["parse"](_0xf6c6da);
        _0x58a3e9["candidates"] = _0x13e757["fromSerializable"](_0xbcc4de) || [];
      } catch (_0x56643c) {
        _0x13e757["warn"]("加载候选阵容失败", _0x56643c), _0x58a3e9["candidates"] = [];
      }
    }(), _0x516789(!0x1), function () {
      try {
        const _0xf33d7a = localStorage["getItem"](_0x335c0c);
        if (!_0xf33d7a) return void (_0x58a3e9["panelPrefs"] = Object["assign"]({}, _0x3cb7ca));
        const _0x58d5e4 = JSON["parse"](_0xf33d7a);
        _0x58a3e9["panelPrefs"] = Object["assign"]({}, _0x3cb7ca, _0x58d5e4 || {});
      } catch (_0xeb279d) {
        _0x58a3e9["panelPrefs"] = Object["assign"]({}, _0x3cb7ca);
      }
    }(), _0x58a3e9["panelPrefs"]["collapsed"] = !0x0, _0x5d081c(), Object["assign"](window["__NON_PVP_SIMULATOR__"], {
      getDiagnostics: () => _0x13e757["deepClone"](_0x58a3e9["diagnosticSamples"]),
      getLastReport: () => _0x13e757["deepClone"](_0x58a3e9["lastReport"]),
      getLastSingleRun: () => _0x13e757["deepClone"](_0x58a3e9["lastSingleRun"]),
      getLastDebugError: () => _0x13e757["deepClone"](_0x58a3e9["lastDebugError"]),
      runDebugOnce: _0x5918fe,
      startMainPush: _0xc52948,
      stopMainPush: _0x5646f8,
      showDiagnostics: _0x1683fd,
      exportDiagnostics: _0x458732,
      clearDiagnostics: _0x2ab8a7,
      openPanel() {
        _0x58a3e9["panelPrefs"]["collapsed"] = !0x1, _0x5d081c(), _0x1c2aee();
      }
    }), _0x375773(), _0x1c2aee(), function () {
      if (_0x58a3e9["mainPanelHookInstalled"]) return;
      let _0x247e83 = 0x0;
      const _0x24f56c = setInterval(() => {
        _0x247e83 += 0x1;
        const _0x324011 = _0x55f28d["getGameWindow"](),
          _0x379fd8 = _0x324011 && _0x324011["fgui"] || ("undefined" != typeof fgui ? fgui : null);
        if (_0x324011 && "function" == typeof _0x324011["__require"] && _0x379fd8) try {
          const _0x3e2380 = _0x324011["__require"]("MainPanel");
          if (!_0x3e2380 || !_0x3e2380["MainPanel"]) return void (_0x247e83 >= 0xb4 && (clearInterval(_0x24f56c), _0x13e757["warn"]("MainPanel 模块未找到")));
          if (!_0x58a3e9["mainPanelHookInstalled"]) {
            const _0x43374e = _0x3e2380["MainPanel"]["prototype"]["onShow"],
              _0x19f9de = _0x3e2380["MainPanel"]["prototype"]["onHide"];
            _0x3e2380["MainPanel"]["prototype"]["onShow"] = function (..._0x4eaf51) {
              _0x43374e["apply"](this, _0x4eaf51), _0x57678d(this, _0x379fd8);
            }, _0x3e2380["MainPanel"]["prototype"]["onHide"] = function (..._0x2b91f4) {
              this["_simEmbedBtn"] && (this["_simEmbedBtn"]["dispose"](), this["_simEmbedBtn"] = null), _0x19f9de["apply"](this, _0x2b91f4);
            }, _0x58a3e9["mainPanelHookInstalled"] = !0x0, _0x13e757["log"]("【模拟】MainPanel.onShow 已 Hook");
          }
          try {
            const _0x40d2a6 = _0x324011["__require"]("index-ui"),
              _0x23971e = _0x40d2a6 && _0x40d2a6["default"] ? _0x40d2a6["default"] : _0x40d2a6,
              _0x22edcf = _0x23971e && _0x23971e["GET_PROXY"] && _0x23971e["GET_PROXY"]("MainPanel");
            _0x22edcf && _0x57678d(_0x22edcf, _0x379fd8) && _0x13e757["log"]("【模拟】当前 MainPanel 实例已注入按钮");
          } catch (_0x3a9871) {}
          clearInterval(_0x24f56c);
        } catch (_0x1deb14) {
          _0x247e83 >= 0xb4 && (clearInterval(_0x24f56c), _0x13e757["warn"]("MainPanel 内嵌按钮注入失败", _0x1deb14));
        } else _0x247e83 >= 0xb4 && (clearInterval(_0x24f56c), _0x13e757["warn"]("MainPanel 内嵌按钮：游戏环境未就绪"));
      }, 0x320);
    }(), _0x29ae7d(), _0x58a3e9["inited"] = !0x0, setInterval(() => {
      try {
        _0x1c2aee();
      } catch (_0x458a2a) {
        _0x13e757["warn"]("面板刷新失败", _0x458a2a);
      }
    }, 0x5dc));
  }
  !async function _0x52997c() {
    if (_0x58a3e9["inited"]) return;
    if (!(await _0x55f28d["waitForGameReady"](0x927c0))) return _0x13e757["warn"]("等待游戏加载/登录超时，3秒后重试注入"), void setTimeout(_0x52997c, 0xbb8);
    if (_0x13e757["log"]("游戏会话已就绪，开始注入战斗模拟脚本"), _0xf23a54["isReady"]()) try {
      await _0x1ad8e3();
    } catch (_0x26f013) {
      _0x13e757["error"]("初始化失败", _0x26f013), setTimeout(_0x52997c, 0x7d0);
    } else setTimeout(_0x52997c, 0x3e8);
  }();
}();
