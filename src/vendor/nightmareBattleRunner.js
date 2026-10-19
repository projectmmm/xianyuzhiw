// Adapted from the supplied 2.57.2 game task implementation.
// No account, cloud sync or credential upload dependencies.
import {
  k as _0x3cec52,
  m as _0x54ce48,
} from "./nightmareBattleMock-Dv5KSOXr.js";
const We = (_0x1bf959) =>
  new Promise((_0x470fef) => setTimeout(_0x470fef, _0x1bf959));
const Ge = {
  0x1: {
    boss: 0x3474ed2d00,
    minion: 0x117d803c00,
  },
  0x2: {
    boss: 0x39b7fdcf00,
    minion: 0x133dba5400,
  },
  0x3: {
    boss: 0x3f7e2fc700,
    minion: 0x0,
  },
  0x4: {
    boss: 0x45d36ed700,
    minion: 0x0,
  },
  0x5: {
    boss: 0x4ccf928300,
    minion: 0x45f7321d00,
  },
  0x6: {
    boss: 0x12c,
    minion: 0x0,
  },
  0x7: {
    boss: 0xaee7025800,
    minion: 0x0,
  },
  0x8: {
    boss: 0xb7a824d000,
    minion: 0x0,
  },
};
const Ve = {
  0x1: "秦广王",
  0x2: "楚江王",
  0x3: "宋帝王",
  0x4: "五官王",
  0x5: "阎罗王",
  0x6: "卞城王",
  0x7: "泰山王",
  0x8: "都市王",
};
class Ye {
  constructor(_0x421758) {
    var _0x23bbb4;
    ((this["_captainTokenId"] = _0x421758["captainTokenId"]),
      (this["_roomId"] = _0x421758["roomId"]),
      (this["_teamId"] = _0x421758["teamId"]),
      (this["_presetData"] = _0x421758["presetData"] || {}),
      (this["_captainRoleId"] = _0x421758["captainRoleId"]),
      (this["_tokenStore"] = _0x421758["tokenStore"]),
      (this["_activeBattles"] = _0x421758["activeBattles"] || null),
      (this["_onLog"] = _0x421758["onLog"] || (() => {})),
      (this["_onStatusChange"] = _0x421758["onStatusChange"] || (() => {})),
      (this["_onComplete"] = _0x421758["onComplete"] || (() => {})),
      (this["_onError"] = _0x421758["onError"] || (() => {})),
      (this["_stopped"] = !0x1),
      (this["_status"] = "idle"),
      (this["_currentLevel"] = 0x0),
      (this["_monsters"] = []),
      (this["_members"] = []),
      (this["_attackRecords"] = {}),
      (this["_isCompleted"] = !0x1),
      (this["_startTime"] = Date["now"]()),
      (this["_MAX_BATTLE_TIME"] = 0x6ddd00),
      (this["_waitStartTime"] = null),
      (this["_level8FirstEntry"] = !0x1),
      (this["_cleanupDone"] = !0x1),
      (this["_preMidnightReconnectDone"] = !0x1),
      (this["_reopenRetryCount"] = 0x0),
      (this["_recoverUsed"] = 0x0),
      (this["_recoverCounts"] = {}),
      (this["_levelFailedAttempts"] = {}),
      (this["_noAttackerAttempts"] = {}),
      this["_restoreRecoverState"](),
      (this["_presetMemberRoleIds"] = []));
    const _0x3c4759 =
      (null == (_0x23bbb4 = this["_presetData"])
        ? void 0x0
        : _0x23bbb4["memberTokenIds"]) || [];
    this["_presetMemberTokenIds"] = _0x3c4759["slice"]();
    for (const _0x3fb6d0 of _0x3c4759) {
      const _0x25aaaa = this["_tokenStore"]["gameTokens"]["find"](
        (_0x20610f) => _0x20610f["id"] === _0x3fb6d0,
      );
      (null == _0x25aaaa ? void 0x0 : _0x25aaaa["roleId"]) &&
        this["_presetMemberRoleIds"]["push"](String(_0x25aaaa["roleId"]));
    }
    this["_captainRoleId"] &&
      !this["_presetMemberRoleIds"]["includes"](
        String(this["_captainRoleId"]),
      ) &&
      this["_presetMemberRoleIds"]["push"](String(this["_captainRoleId"]));
  }
  ["getStatus"]() {
    return this["_status"];
  }
  ["getCurrentLevel"]() {
    return this["_currentLevel"];
  }
  ["getRoomId"]() {
    return this["_roomId"];
  }
  ["getTeamId"]() {
    return this["_teamId"];
  }
  ["getBossHp"]() {
    const _0x1b8ed6 = this["_monsters"]["find"](
      (_0x3daea0) => _0x3daea0["isBoss"],
    );
    return _0x1b8ed6 && _0x1b8ed6["maxHp"]
      ? {
          curHp: _0x1b8ed6["curHp"],
          maxHp: _0x1b8ed6["maxHp"],
          name: _0x1b8ed6["name"],
        }
      : null;
  }
  ["getMembers"]() {
    return this["_members"]["map"]((_0xe6bc79) => ({
      name: _0xe6bc79["name"],
      roleId: _0xe6bc79["roleId"],
      isAllHeroesDead: _0xe6bc79["isAllHeroesDead"],
      isCaptain: _0xe6bc79["isCaptain"],
      heroes: _0xe6bc79["heroes"] || [],
      recoverCount: this["_recoverCounts"][String(_0xe6bc79["roleId"])] || 0x0,
    }));
  }
  ["getRecoverInfo"]() {
    let _0x1a873d = 0x1;
    return (
      this["_currentLevel"] > 0x4 && (_0x1a873d += 0x1),
      this["_currentLevel"] > 0x6 && (_0x1a873d += 0x1),
      {
        used: this["_recoverUsed"],
        total: _0x1a873d,
        left: Math["max"](0x0, _0x1a873d - this["_recoverUsed"]),
      }
    );
  }
  ["_persistRecoverState"]() {
    try {
      localStorage["setItem"](
        "nightmare-recover-" + this["_roomId"],
        JSON["stringify"]({
          used: this["_recoverUsed"],
          counts: this["_recoverCounts"],
          timestamp: Date["now"](),
        }),
      );
    } catch (_0x4ae315) {}
  }
  ["_restoreRecoverState"]() {
    try {
      const _0x20f21b = localStorage["getItem"](
        "nightmare-recover-" + this["_roomId"],
      );
      if (!_0x20f21b) return;
      const _0x4d88a0 = JSON["parse"](_0x20f21b);
      if (
        !_0x4d88a0["timestamp"] ||
        Date["now"]() - _0x4d88a0["timestamp"] > 0x5265c00
      )
        return void localStorage["removeItem"](
          "nightmare-recover-" + this["_roomId"],
        );
      ((this["_recoverUsed"] = _0x4d88a0["used"] || 0x0),
        (this["_recoverCounts"] = _0x4d88a0["counts"] || {}));
    } catch (_0xe10a99) {}
  }
  ["_clearRecoverState"]() {
    try {
      localStorage["removeItem"]("nightmare-recover-" + this["_roomId"]);
    } catch (_0x59e8b0) {}
  }
  ["getAttackRecords"]() {
    return this["_attackRecords"][this["_currentLevel"]] || [];
  }
  ["rebindCallbacks"](_0x3c778d) {
    (_0x3c778d["onLog"] && (this["_onLog"] = _0x3c778d["onLog"]),
      _0x3c778d["onStatusChange"] &&
        (this["_onStatusChange"] = _0x3c778d["onStatusChange"]),
      _0x3c778d["onComplete"] &&
        (this["_onComplete"] = _0x3c778d["onComplete"]),
      _0x3c778d["onError"] && (this["_onError"] = _0x3c778d["onError"]));
  }
  ["stop"]() {
    var _0x53dd84;
    ((this["_stopped"] = !0x0),
      (this["_status"] = "stopped"),
      this["_onLog"]("后台战斗已手动停止", "warning"),
      this["_onStatusChange"]({
        status: "stopped",
        presetName:
          null == (_0x53dd84 = this["_presetData"])
            ? void 0x0
            : _0x53dd84["name"],
      }));
  }
  async ["resume"]() {
    var _0x49dade, _0x1426ac, _0x3c5430, _0xbe93af;
    if ("stopped" === this["_status"] || "failed" === this["_status"]) {
      ((this["_stopped"] = !0x1),
        (this["_status"] = "running"),
        0x0 === new Date()["getDay"]() &&
          0x8 === this["_currentLevel"] &&
          (this["_level8FirstEntry"] = !0x1),
        (this["_startTime"] = Date["now"]()),
        (this["_cleanupDone"] = !0x1),
        this["_onLog"](
          "继续战斗：" +
            ((null == (_0x49dade = this["_presetData"])
              ? void 0x0
              : _0x49dade["name"]) || "未知预设") +
            " Room: " +
            this["_roomId"],
          "info",
        ),
        this["_onStatusChange"]({
          status: "running",
          currentLevel: this["_currentLevel"],
          presetName:
            null == (_0x1426ac = this["_presetData"])
              ? void 0x0
              : _0x1426ac["name"],
        }));
      try {
        if (!(await this["_fetchRoomInfo"]()))
          return (
            this["_onLog"]("获取房间信息失败，无法继续", "error"),
            (this["_status"] = "failed"),
            void this["_onStatusChange"]({
              status: "failed",
              presetName:
                null == (_0x3c5430 = this["_presetData"])
                  ? void 0x0
                  : _0x3c5430["name"],
              reason: "room_info_failed",
            })
          );
        if (this["_stopped"]) return;
        if ((await We(0x7d0), this["_stopped"])) return;
        if (this["_members"]["length"] > 0x0 && this["_isAllMembersDead"]()) {
          this["_onLog"]("重连后检测到全员阵亡，自动恢复中...", "warning");
          for (const _0x2eebce of this["_members"])
            try {
              (await this["_tokenStore"]["sendMessageWithPromise"](
                this["_captainTokenId"],
                "nightmare_restore",
                {
                  roomId: Number(this["_roomId"]),
                  roleId: Number(_0x2eebce["roleId"]),
                },
                0x2710,
              ),
                this["_recoverUsed"]++,
                (this["_recoverCounts"][String(_0x2eebce["roleId"])] =
                  (this["_recoverCounts"][String(_0x2eebce["roleId"])] || 0x0) +
                  0x1),
                this["_persistRecoverState"](),
                this["_onLog"]("已恢复 " + _0x2eebce["name"], "success"));
            } catch (_0x2ab821) {
              this["_onLog"](
                "恢复 " +
                  _0x2eebce["name"] +
                  " 失败: " +
                  (_0x2ab821["message"] || _0x2ab821),
                "warning",
              );
            }
          (await We(0x3e8), await this["_fetchRoomInfo"]());
        }
        await this["_battleLoop"]();
      } catch (_0x182677) {
        this["_stopped"] ||
          ((this["_status"] = "failed"),
          this["_onLog"](
            "继续战斗异常：" + (_0x182677["message"] || _0x182677),
            "error",
          ),
          this["_onError"](_0x182677),
          this["_onStatusChange"]({
            status: "failed",
            presetName:
              null == (_0xbe93af = this["_presetData"])
                ? void 0x0
                : _0xbe93af["name"],
            error: _0x182677["message"],
          }));
      } finally {
        this["_stopped"] ||
          this["_cleanupDone"] ||
          ((this["_cleanupDone"] = !0x0),
          await this["_dismissRoom"](this["_activeBattles"]));
      }
    } else this["_onLog"]("当前状态无需继续", "info");
  }
  async ["start"]() {
    var _0x45a5cc, _0x324350, _0xd6368b;
    ((this["_status"] = "running"),
      this["_onLog"](
        "后台战斗启动：" +
          ((null == (_0x45a5cc = this["_presetData"])
            ? void 0x0
            : _0x45a5cc["name"]) || "未知预设") +
          " Room: " +
          this["_roomId"],
        "info",
      ),
      this["_onStatusChange"]({
        status: "running",
        currentLevel: 0x0,
        presetName:
          null == (_0x324350 = this["_presetData"])
            ? void 0x0
            : _0x324350["name"],
      }));
    try {
      if ((await this["_fetchRoomInfo"](), this["_stopped"])) return;
      if (this["_members"]["length"] > 0x0 && this["_isAllMembersDead"]()) {
        this["_onLog"]("战斗开始前检测到全员阵亡，自动恢复中...", "warning");
        for (const _0x2b842a of this["_members"])
          try {
            (await this["_tokenStore"]["sendMessageWithPromise"](
              this["_captainTokenId"],
              "nightmare_restore",
              {
                roomId: Number(this["_roomId"]),
                roleId: Number(_0x2b842a["roleId"]),
              },
              0x2710,
            ),
              this["_recoverUsed"]++,
              (this["_recoverCounts"][String(_0x2b842a["roleId"])] =
                (this["_recoverCounts"][String(_0x2b842a["roleId"])] || 0x0) +
                0x1),
              this["_persistRecoverState"](),
              this["_onLog"]("已恢复 " + _0x2b842a["name"], "success"));
          } catch (_0x382bbe) {
            this["_onLog"](
              "恢复 " +
                _0x2b842a["name"] +
                " 失败: " +
                (_0x382bbe["message"] || _0x382bbe),
              "warning",
            );
          }
        (await We(0x3e8), await this["_fetchRoomInfo"]());
      }
      if ((await We(0xbb8), this["_stopped"])) return;
      await this["_battleLoop"]();
    } catch (_0x283911) {
      this["_stopped"] ||
        ((this["_status"] = "failed"),
        this["_onLog"](
          "后台战斗异常：" + (_0x283911["message"] || _0x283911),
          "error",
        ),
        this["_onError"](_0x283911),
        this["_onStatusChange"]({
          status: "failed",
          presetName:
            null == (_0xd6368b = this["_presetData"])
              ? void 0x0
              : _0xd6368b["name"],
          error: _0x283911["message"],
        }));
    } finally {
      this["_stopped"] ||
        this["_cleanupDone"] ||
        ((this["_cleanupDone"] = !0x0),
        await this["_dismissRoom"](this["_activeBattles"]));
    }
  }
  async ["_battleLoop"]() {
    for (
      var _0x21a67b,
        _0x20c2e7,
        _0x5e9000,
        _0x4873f5,
        _0x3eccf1,
        _0x35e8c6,
        _0x1c4eea,
        _0x38b241,
        _0x53e2a0,
        _0xe61d63,
        _0x177749,
        _0x2cf286,
        _0x1a7e7a,
        _0x45b158,
        _0x3584ad,
        _0x1f7df0,
        _0x504b80,
        _0x40fd9d,
        _0x271ab8,
        _0xa7bd90,
        _0x468185,
        _0x50871c,
        _0x5569cd,
        _0x5760c0,
        _0x3eb893,
        _0x355cf3,
        _0xf087cd,
        _0x459bc7;
      !this["_stopped"] && !this["_isCompleted"];
    ) {
      if (
        Date["now"]() - this["_startTime"] > this["_MAX_BATTLE_TIME"] &&
        "waiting_midnight" !== this["_status"]
      ) {
        (this["_onLog"]("后台战斗超时（2小时），自动停止并解散房间", "warning"),
          (this["_status"] = "failed"),
          await this["_dismissRoom"](this["_activeBattles"]),
          this["_onStatusChange"]({
            status: "failed",
            presetName:
              null == (_0x21a67b = this["_presetData"])
                ? void 0x0
                : _0x21a67b["name"],
            reason: "timeout",
          }),
          this["_onError"]({
            message: "后台战斗超时（2小时）",
            reason: "timeout",
          }));
        break;
      }
      if (this["_shouldWaitForMidnight"]()) {
        if ((await this["_waitForMidnight"](), this["_stopped"])) return;
        if (!(await this["_waitForStableConnection"]()))
          return (
            this["_onLog"]("队长重连失败，无法继续第8关", "error"),
            (this["_status"] = "failed"),
            this["_onStatusChange"]({
              status: "failed",
              presetName:
                null == (_0x20c2e7 = this["_presetData"])
                  ? void 0x0
                  : _0x20c2e7["name"],
              reason: "reconnect_failed",
            }),
            void this["_onError"]({
              message: "凌晨卡点等待后队长重连失败",
              reason: "reconnect_failed",
            })
          );
        await this["_fetchRoomInfo"]();
        continue;
      }
      if (this["_checkCompletion"]())
        return (
          (this["_isCompleted"] = !0x0),
          this["_onLog"]("🎉 十殿阎罗挑战通关！", "success"),
          await this["_dismissRoom"](this["_activeBattles"]),
          (this["_status"] = "completed"),
          this["_onComplete"]({
            level: 0x8,
            presetName:
              null == (_0x5e9000 = this["_presetData"])
                ? void 0x0
                : _0x5e9000["name"],
          }),
          void this["_onStatusChange"]({
            status: "completed",
            presetName:
              null == (_0x4873f5 = this["_presetData"])
                ? void 0x0
                : _0x4873f5["name"],
          })
        );
      const _0x190f03 = this["_getAutoAttacker"]();
      if (!_0x190f03) {
        const _0x58bfce = this["_members"]["length"],
          _0x145c18 = this["_members"]["filter"](
            (_0x8d6834) => _0x8d6834["isAllHeroesDead"],
          )["length"],
          _0x25628c = _0x58bfce - _0x145c18,
          _0x485439 =
            (null == (_0x3eccf1 = this["_attackRecords"][this["_currentLevel"]])
              ? void 0x0
              : _0x3eccf1["length"]) || 0x0;
        if (
          (this["_onLog"](
            "️ 无可用出战成员诊断：总成员" +
              _0x58bfce +
              "人，阵亡" +
              _0x145c18 +
              "人，存活" +
              _0x25628c +
              "人，已出战" +
              _0x485439 +
              "人",
            "warning",
          ),
          this["_currentLevel"] > 0x0 && this["_currentLevel"] < 0x8)
        ) {
          if (0x0 === _0x485439 && _0x25628c > 0x0) {
            this["_onLog"](
              "第" +
                this["_currentLevel"] +
                "关无成员出战但有" +
                _0x25628c +
                "个存活成员，检查预设配置...",
              "error",
            );
            const _0xcf42f7 =
              (null ==
              (_0x38b241 =
                null ==
                (_0x1c4eea =
                  null == (_0x35e8c6 = this["_presetData"])
                    ? void 0x0
                    : _0x35e8c6["levelConfig"])
                  ? void 0x0
                  : _0x1c4eea[this["_currentLevel"]])
                ? void 0x0
                : _0x38b241["priority"]) || [];
            if (
              (0x0 === _0xcf42f7["length"]
                ? this["_onLog"](
                    "第" +
                      this["_currentLevel"] +
                      "关预设出战顺序为空，请检查配置！",
                    "error",
                  )
                : this["_onLog"](
                    "第" +
                      this["_currentLevel"] +
                      "关预设顺序" +
                      _0xcf42f7["length"] +
                      "人，但都未匹配到成员",
                    "error",
                  ),
              (this["_noAttackerAttempts"][this["_currentLevel"]] =
                (this["_noAttackerAttempts"][this["_currentLevel"]] || 0x0) +
                0x1),
              this["_noAttackerAttempts"][this["_currentLevel"]] > 0x3)
            )
              return (
                this["_onLog"](
                  "❌ 第" +
                    this["_currentLevel"] +
                    "关连续多次无成员出战，结束挑战并解散房间（请检查预设出战顺序与成员是否匹配）",
                  "error",
                ),
                await this["_dismissRoom"](this["_activeBattles"]),
                (this["_status"] = "failed"),
                this["_onStatusChange"]({
                  status: "failed",
                  presetName:
                    null == (_0x53e2a0 = this["_presetData"])
                      ? void 0x0
                      : _0x53e2a0["name"],
                  reason: "no_attacker",
                }),
                void this["_onError"]({
                  message:
                    "第" +
                    this["_currentLevel"] +
                    "关无成员出战，请检查预设配置",
                  reason: "no_attacker",
                })
              );
            if (
              (this["_onLog"](
                "等待 10 秒后重新检查（第" +
                  this["_noAttackerAttempts"][this["_currentLevel"]] +
                  "次）...",
                "warning",
              ),
              await We(0x2710),
              this["_stopped"])
            )
              return;
            await this["_fetchRoomInfo"]();
            continue;
          }
          const _0x4dda8f =
            this["_levelFailedAttempts"][this["_currentLevel"]] || 0x0;
          if (_0x4dda8f < 0x2) {
            if (
              ((this["_levelFailedAttempts"][this["_currentLevel"]] =
                _0x4dda8f + 0x1),
              this["_onLog"](
                "第" +
                  this["_currentLevel"] +
                  "关挑战失败（第" +
                  this["_levelFailedAttempts"][this["_currentLevel"]] +
                  "次），等待后重新检查房间状态...",
                "warning",
              ),
              await We(0x2710),
              this["_stopped"])
            )
              return;
            await this["_fetchRoomInfo"]();
            continue;
          }
          return (
            this["_onLog"](
              "❌ 第" +
                this["_currentLevel"] +
                "关已重试 2 次仍无可用出战成员，结束挑战并解散房间",
              "error",
            ),
            await this["_dismissRoom"](this["_activeBattles"]),
            (this["_status"] = "failed"),
            this["_onStatusChange"]({
              status: "failed",
              presetName:
                null == (_0xe61d63 = this["_presetData"])
                  ? void 0x0
                  : _0xe61d63["name"],
              reason: "no_available_member",
            }),
            void this["_onError"]({
              message:
                "第" + this["_currentLevel"] + "关无可出战成员，挑战结束",
              reason: "no_available_member",
            })
          );
        }
        if (0x8 === this["_currentLevel"]) {
          if (this["_isAllMembersDead"]())
            return (
              this["_onLog"]("❌ 第8关全员阵亡，直接结束并解散房间", "error"),
              await this["_dismissRoom"](this["_activeBattles"]),
              (this["_status"] = "failed"),
              this["_onStatusChange"]({
                status: "failed",
                presetName:
                  null == (_0x177749 = this["_presetData"])
                    ? void 0x0
                    : _0x177749["name"],
                reason: "level8_all_dead",
              }),
              void this["_onError"]({
                message: "第8关全员阵亡",
                reason: "level8_all_dead",
              })
            );
          if (this["_reopenRetryCount"] >= 0x2)
            return (
              this["_onLog"](
                "第 8 关已重试 2 次仍未击杀 BOSS，结束挑战",
                "error",
              ),
              (this["_status"] = "failed"),
              this["_onStatusChange"]({
                status: "failed",
                presetName:
                  null == (_0x2cf286 = this["_presetData"])
                    ? void 0x0
                    : _0x2cf286["name"],
                reason: "retry_limit_reached",
              }),
              void this["_onError"]({
                message: "第 8 关重试次数已达上限",
                reason: "retry_limit_reached",
              })
            );
          this["_onLog"](
            "第8关全员已出战但BOSS未击杀，遣散战斗房间重建重试...",
            "warning",
          );
          try {
            (await this["_tokenStore"]["sendMessageWithPromise"](
              this["_captainTokenId"],
              "nightmare_dismiss",
              {
                roomId: Number(this["_roomId"]),
              },
              0x2710,
            ),
              this["_onLog"]("战斗房间已遣散（队伍保留）", "success"));
          } catch (_0x2f1093) {
            this["_onLog"](
              "遣散战斗房间失败: " + (_0x2f1093["message"] || _0x2f1093),
              "warning",
            );
          }
          if (
            ((this["_attackRecords"][0x8] = []),
            this["_members"]["forEach"]((_0x4766fe) => {
              _0x4766fe["isAllHeroesDead"] = !0x1;
            }),
            null == (_0x1a7e7a = this["_recoverAttempts"]) ||
              _0x1a7e7a["clear"](),
            await We(0xbb8),
            this["_stopped"])
          )
            return;
          const _0xa08136 = await this["_reopenRoom"]();
          if (!_0xa08136)
            return (
              this["_onLog"]("重建房间失败，无法继续重试", "error"),
              (this["_status"] = "failed"),
              this["_onStatusChange"]({
                status: "failed",
                presetName:
                  null == (_0x45b158 = this["_presetData"])
                    ? void 0x0
                    : _0x45b158["name"],
                reason: "reopen_failed",
              }),
              void this["_onError"]({
                message: "重建房间失败",
                reason: "reopen_failed",
              })
            );
          if (
            ((this["_roomId"] = _0xa08136),
            this["_persistRecoverState"](),
            this["_reopenRetryCount"]++,
            this["_onLog"]("重建房间成功，新 RoomId: " + _0xa08136, "success"),
            await We(0xbb8),
            this["_stopped"])
          )
            return;
          await this["_fetchRoomInfo"]();
          continue;
        }
        if (
          (this["_onLog"](
            "️ 异常情况无可用出战成员：currentLevel=" +
              this["_currentLevel"] +
              "，总成员" +
              _0x58bfce +
              "人，阵亡" +
              _0x145c18 +
              "人，存活" +
              _0x25628c +
              "人，已出战" +
              _0x485439 +
              "人",
            "warning",
          ),
          0x0 === _0x485439 && _0x25628c > 0x0)
        ) {
          const _0x221381 = "lv" + this["_currentLevel"];
          if (
            ((this["_noAttackerAttempts"][_0x221381] =
              (this["_noAttackerAttempts"][_0x221381] || 0x0) + 0x1),
            this["_noAttackerAttempts"][_0x221381] > 0x3)
          )
            return (
              this["_onLog"](
                "❌ 关卡状态异常（currentLevel=" +
                  this["_currentLevel"] +
                  "）且连续多次无成员出战，结束挑战并解散房间",
                "error",
              ),
              await this["_dismissRoom"](this["_activeBattles"]),
              (this["_status"] = "failed"),
              this["_onStatusChange"]({
                status: "failed",
                presetName:
                  null == (_0x3584ad = this["_presetData"])
                    ? void 0x0
                    : _0x3584ad["name"],
                reason: "abnormal_level",
              }),
              void this["_onError"]({
                message:
                  "关卡状态异常（currentLevel=" +
                  this["_currentLevel"] +
                  "），无成员出战",
                reason: "abnormal_level",
              })
            );
          if (
            (this["_onLog"](
              "存活" +
                _0x25628c +
                "人但未出战，等待 10 秒后重试（第" +
                this["_noAttackerAttempts"][_0x221381] +
                "次）...",
              "warning",
            ),
            await We(0x2710),
            this["_stopped"])
          )
            return;
          await this["_fetchRoomInfo"]();
          continue;
        }
        return (
          this["_onLog"]("无可用出战成员，结束战斗并解散队伍", "warning"),
          await this["_dismissRoom"](this["_activeBattles"]),
          (this["_status"] = "completed"),
          this["_onStatusChange"]({
            status: "completed",
            presetName:
              null == (_0x1f7df0 = this["_presetData"])
                ? void 0x0
                : _0x1f7df0["name"],
          }),
          void this["_onComplete"]({
            level: this["_currentLevel"],
            reason: "no_available_members",
          })
        );
      }
      const {
        member: _0x591dce,
        entry: _0x5cd71d,
        forceRecover: _0x2d9650,
      } = _0x190f03;
      if (_0x2d9650 || this["_shouldAutoRecover"](_0x591dce, _0x5cd71d)) {
        this["_onLog"]("自动恢复 " + _0x591dce["name"], "info");
        const _0x4cdc4c = await this["_memberRecover"](_0x591dce);
        await We(0x3e8);
        const _0xb9deab = this["_members"]["find"](
          (_0x3edccf) =>
            String(_0x3edccf["roleId"]) === String(_0x591dce["roleId"]),
        );
        (_0xb9deab &&
          (_0x591dce["isAllHeroesDead"] = _0xb9deab["isAllHeroesDead"]),
          _0x4cdc4c &&
            _0x591dce["isAllHeroesDead"] &&
            (this["_onLog"](
              _0x591dce["name"] +
                " 恢复指令已成功但房间信息仍显示阵亡，尝试直接出战",
              "warning",
            ),
            (_0x591dce["isAllHeroesDead"] = !0x1)));
      }
      this["_shouldAutoFullRage"](_0x591dce, _0x5cd71d) &&
        (this["_onLog"]("自动满怒 " + _0x591dce["name"], "info"),
        await this["_memberFullRage"](_0x591dce),
        await We(0x3e8));
      const _0x272ab4 = await this["_fight"](_0x591dce);
      if ("already_fought" === _0x272ab4) {
        if ((await We(0x3e8), this["_stopped"])) return;
        if ((await this["_fetchRoomInfo"]()) && this["_checkCompletion"]())
          return (
            (this["_isCompleted"] = !0x0),
            this["_onLog"](
              "🎉 十殿阎罗挑战已通关（服务器判定），遣散房间释放成员",
              "success",
            ),
            await this["_dismissRoom"](this["_activeBattles"]),
            (this["_status"] = "completed"),
            this["_onComplete"]({
              level: 0x8,
              presetName:
                null == (_0x504b80 = this["_presetData"])
                  ? void 0x0
                  : _0x504b80["name"],
            }),
            void this["_onStatusChange"]({
              status: "completed",
              presetName:
                null == (_0x40fd9d = this["_presetData"])
                  ? void 0x0
                  : _0x40fd9d["name"],
            })
          );
        const _0x3b4423 = this["_attackRecords"][this["_currentLevel"]] || [];
        if (
          this["_members"]["length"] > 0x0 &&
          _0x3b4423["length"] >= this["_members"]["length"]
        )
          return (
            (this["_isCompleted"] = !0x0),
            this["_onLog"](
              "🎉 当前关卡成员均已出战（服务器确认已完成），判定通关并遣散房间",
              "success",
            ),
            await this["_dismissRoom"](this["_activeBattles"]),
            (this["_status"] = "completed"),
            this["_onComplete"]({
              level: this["_currentLevel"],
              presetName:
                null == (_0x271ab8 = this["_presetData"])
                  ? void 0x0
                  : _0x271ab8["name"],
            }),
            void this["_onStatusChange"]({
              status: "completed",
              presetName:
                null == (_0xa7bd90 = this["_presetData"])
                  ? void 0x0
                  : _0xa7bd90["name"],
            })
          );
        continue;
      }
      if (_0x272ab4) {
        if (
          (this["_onLog"]("⏱ 战斗进行中 1 秒...", "info"),
          await We(0x3e8),
          this["_stopped"])
        )
          return;
        if (await this["_leaderComplete"]()) {
          if ((await this["_fetchRoomInfo"](), this["_stopped"])) return;
          if (this["_checkCompletion"]())
            return (
              (this["_isCompleted"] = !0x0),
              this["_onLog"]("🎉 十殿阎罗挑战通关！", "success"),
              await this["_dismissRoom"](this["_activeBattles"]),
              (this["_status"] = "completed"),
              this["_onComplete"]({
                level: 0x8,
                presetName:
                  null == (_0x3eb893 = this["_presetData"])
                    ? void 0x0
                    : _0x3eb893["name"],
              }),
              void this["_onStatusChange"]({
                status: "completed",
                presetName:
                  null == (_0x355cf3 = this["_presetData"])
                    ? void 0x0
                    : _0x355cf3["name"],
              })
            );
          if (0x8 === this["_currentLevel"] && this["_isAllMembersDead"]())
            return (
              this["_onLog"]("❌ 第8关全员阵亡，直接结束并解散房间", "error"),
              await this["_dismissRoom"](this["_activeBattles"]),
              (this["_status"] = "failed"),
              this["_onStatusChange"]({
                status: "failed",
                presetName:
                  null == (_0xf087cd = this["_presetData"])
                    ? void 0x0
                    : _0xf087cd["name"],
                reason: "level8_all_dead",
              }),
              void this["_onError"]({
                message: "第8关全员阵亡",
                reason: "level8_all_dead",
              })
            );
          if (this["_shouldWaitForMidnight"]()) {
            if ((await this["_waitForMidnight"](), this["_stopped"])) return;
            if (!(await this["_waitForStableConnection"]()))
              return (
                this["_onLog"]("队长重连失败，无法继续第8关", "error"),
                (this["_status"] = "failed"),
                this["_onStatusChange"]({
                  status: "failed",
                  presetName:
                    null == (_0x459bc7 = this["_presetData"])
                      ? void 0x0
                      : _0x459bc7["name"],
                  reason: "reconnect_failed",
                }),
                void this["_onError"]({
                  message: "凌晨卡点等待后队长重连失败",
                  reason: "reconnect_failed",
                })
              );
            await this["_fetchRoomInfo"]();
          } else {
            if (
              ((this["_status"] = "cooling"),
              this["_onStatusChange"]({
                status: "cooling",
                currentLevel: this["_currentLevel"],
              }),
              this["_onLog"]("⏱ 冷却 15秒...", "info"),
              await We(0x3a98),
              this["_stopped"])
            )
              return;
            this["_status"] = "running";
          }
        } else {
          if (
            (this["_onLog"]("leadercomplete 失败，等待5秒后重试", "error"),
            await We(0x1388),
            !(await this["_fetchRoomInfo"]()))
          )
            return (
              this["_onLog"](
                "房间已失效或不存在（可能已被服务器回收），无法继续战斗",
                "error",
              ),
              (this["_status"] = "failed"),
              this["_onStatusChange"]({
                status: "failed",
                presetName:
                  null == (_0x5569cd = this["_presetData"])
                    ? void 0x0
                    : _0x5569cd["name"],
                reason: "room_invalid",
              }),
              void this["_onError"]({
                message: "leadercomplete失败后房间已失效",
                reason: "room_invalid",
              })
            );
          if (!(await this["_waitForStableConnection"]()))
            return (
              this["_onLog"]("队长重连失败，无法继续战斗", "error"),
              (this["_status"] = "failed"),
              this["_onStatusChange"]({
                status: "failed",
                presetName:
                  null == (_0x5760c0 = this["_presetData"])
                    ? void 0x0
                    : _0x5760c0["name"],
                reason: "reconnect_failed",
              }),
              void this["_onError"]({
                message: "leadercomplete失败后重连失败",
                reason: "reconnect_failed",
              })
            );
        }
      } else {
        if (
          (this["_onLog"](
            _0x591dce["name"] + " 出战失败，等待 5 秒后重试",
            "error",
          ),
          await We(0x1388),
          !(await this["_fetchRoomInfo"]()))
        )
          return (
            this["_onLog"]("房间已失效或不存在，无法继续战斗", "error"),
            (this["_status"] = "failed"),
            this["_onStatusChange"]({
              status: "failed",
              presetName:
                null == (_0x468185 = this["_presetData"])
                  ? void 0x0
                  : _0x468185["name"],
              reason: "room_invalid",
            }),
            void this["_onError"]({
              message: "出战失败后房间已失效",
              reason: "room_invalid",
            })
          );
        if (!(await this["_waitForStableConnection"]()))
          return (
            this["_onLog"]("队长重连失败，无法继续战斗", "error"),
            (this["_status"] = "failed"),
            this["_onStatusChange"]({
              status: "failed",
              presetName:
                null == (_0x50871c = this["_presetData"])
                  ? void 0x0
                  : _0x50871c["name"],
              reason: "reconnect_failed",
            }),
            void this["_onError"]({
              message: "出战失败后重连失败",
              reason: "reconnect_failed",
            })
          );
      }
    }
  }
  async ["_ensureCaptainConnection"]() {
    const _0x56a43c = this["_tokenStore"]["getWebSocketStatus"](
      this["_captainTokenId"],
    );
    if ("connected" === _0x56a43c) return !0x0;
    this["_onLog"](
      "队长连接已断开（状态: " + _0x56a43c + "），正在重新连接...",
      "warning",
    );
    const _0x508714 = this["_tokenStore"]["gameTokens"]["find"](
      (_0x16a505) => _0x16a505["id"] === this["_captainTokenId"],
    );
    if (!_0x508714)
      return (this["_onLog"]("队长 Token 未找到，无法重连", "error"), !0x1);
    this["_tokenStore"]["createWebSocketConnection"](
      this["_captainTokenId"],
      _0x508714["token"],
      _0x508714["wsUrl"] || null,
    );
    let _0x13b2e3 = 0x0;
    for (
      ;
      "connected" !==
        this["_tokenStore"]["getWebSocketStatus"](this["_captainTokenId"]) &&
      _0x13b2e3 < 0x1e;
    )
      if ((await We(0x3e8), _0x13b2e3++, this["_stopped"])) return !0x1;
    return "connected" !==
      this["_tokenStore"]["getWebSocketStatus"](this["_captainTokenId"])
      ? (this["_onLog"]("队长重连超时（30秒），无法继续战斗", "error"), !0x1)
      : (this["_onLog"]("队长重连成功", "success"), await We(0x7d0), !0x0);
  }
  async ["_waitForStableConnection"](_0x2f6821 = 0x4, _0x167426 = 0x3a98) {
    for (let _0x4f412e = 0x1; _0x4f412e <= _0x2f6821; _0x4f412e++) {
      if (this["_stopped"]) return !0x1;
      if (await this["_ensureCaptainConnection"]()) return !0x0;
      if (
        (this["_onLog"](
          "队长连接未恢复（" +
            _0x4f412e +
            "/" +
            _0x2f6821 +
            "），等待" +
            _0x167426 / 0x3e8 +
            "秒后重试（其它设备占用队长时可自动待其释放）...",
          "warning",
        ),
        await We(_0x167426),
        this["_stopped"])
      )
        return !0x1;
    }
    return !0x1;
  }
  async ["_forceReconnectCaptain"]() {
    for (let _0x38e9ed = 0x1; _0x38e9ed <= 0x3; _0x38e9ed++) {
      try {
        const _0x4649f8 = this["_tokenStore"]["gameTokens"]["find"](
          (_0x107760) => _0x107760["id"] === this["_captainTokenId"],
        );
        if (!_0x4649f8)
          return (this["_onLog"]("队长 Token 未找到，无法重连", "error"), !0x1);
        (this["_onLog"]("🔄 强制重连队长 (第" + _0x38e9ed + "/3次)...", "info"),
          this["_tokenStore"]["createWebSocketConnection"](
            this["_captainTokenId"],
            _0x4649f8["token"],
            _0x4649f8["wsUrl"] || null,
          ));
        let _0x451f9 = 0x0;
        for (
          ;
          "connected" !==
            this["_tokenStore"]["getWebSocketStatus"](
              this["_captainTokenId"],
            ) && _0x451f9 < 0x1e;
        )
          if ((await We(0x3e8), _0x451f9++, this["_stopped"])) return !0x1;
        if (
          "connected" ===
          this["_tokenStore"]["getWebSocketStatus"](this["_captainTokenId"])
        )
          return (
            this["_onLog"](
              "✅ 队长强制重连成功 (第" + _0x38e9ed + "次)",
              "success",
            ),
            await We(0x7d0),
            !0x0
          );
        this["_onLog"]("❌ 队长重连超时 (第" + _0x38e9ed + "/3次)", "warning");
      } catch (_0x11662f) {
        this["_onLog"](
          "❌ 队长重连异常 (第" +
            _0x38e9ed +
            "次): " +
            (_0x11662f["message"] || _0x11662f),
          "error",
        );
      }
      if (_0x38e9ed < 0x3 && (await We(0x1388), this["_stopped"])) return !0x1;
    }
    return (
      this["_onLog"]("❌ 队长强制重连全部失败（3次），连接不可用", "error"),
      !0x1
    );
  }
  async ["_fetchRoomInfo"]() {
    var _0x38242b;
    try {
      const _0x146a09 = await this["_tokenStore"]["sendMessageWithPromise"](
          this["_captainTokenId"],
          "nightmare_getroominfo",
          {
            roomId: this["_roomId"],
          },
          0x2710,
        ),
        _0x1f3226 =
          (null == _0x146a09 ? void 0x0 : _0x146a09["roomInfo"]) ||
          (null ==
          (_0x38242b = null == _0x146a09 ? void 0x0 : _0x146a09["body"])
            ? void 0x0
            : _0x38242b["roomInfo"]) ||
          _0x146a09,
        _0x3b60d2 =
          (null == _0x146a09 ? void 0x0 : _0x146a09["captainRoleId"]) ||
          this["_captainRoleId"] ||
          "",
        _0x4ac193 = String(_0x3b60d2 || "");
      return (
        _0x4ac193 &&
          _0x4ac193 !== String(this["_captainRoleId"]) &&
          (this["_onLog"](
            "⚠️ 服务端队长变更: 预设=" +
              this["_captainRoleId"] +
              " → 服务端=" +
              _0x4ac193,
            "warning",
          ),
          this["_presetMemberRoleIds"]["length"] > 0x0 &&
            !this["_presetMemberRoleIds"]["includes"](_0x4ac193) &&
            this["_onLog"](
              "🚨 严重异常: 服务端队长 " +
                _0x4ac193 +
                " 不在预设成员列表中！预设成员: [" +
                this["_presetMemberRoleIds"]["join"](",\x20") +
                "]",
              "error",
            )),
        this["_parseRoomInfo"](_0x1f3226, _0x4ac193 || this["_captainRoleId"]),
        !0x0
      );
    } catch (_0x277aaf) {
      return (
        this["_onLog"](
          "获取房间信息失败: " + (_0x277aaf["message"] || _0x277aaf),
          "error",
        ),
        !0x1
      );
    }
  }
  ["_parseRoomInfo"](_0x3340f2, _0x218b5a) {
    var _0x17bf8a, _0x10fdf5, _0x2f6c27;
    if (!_0x3340f2) return;
    const _0xce1dfa = this["_currentLevel"],
      _0x38973d = _0x3340f2["curMonsterCfgId"] || 0x0;
    if (0x0 === _0x38973d && _0xce1dfa > 0x0)
      return void this["_onLog"](
        "房间信息缺少关卡数据，保留当前关卡状态",
        "warning",
      );
    ((this["_currentLevel"] = _0x38973d),
      this["_currentLevel"] !== _0xce1dfa &&
        this["_currentLevel"] > 0x0 &&
        ((this["_reopenRetryCount"] = 0x0),
        _0xce1dfa > 0x0 &&
          this["_attackRecords"][_0xce1dfa] &&
          this["_onLog"](
            "清理第" +
              _0xce1dfa +
              "关出战记录: " +
              this["_attackRecords"][_0xce1dfa]["join"](",\x20"),
            "info",
          ),
        this["_attackRecords"][this["_currentLevel"]] ||
          ((this["_attackRecords"][this["_currentLevel"]] = []),
          this["_onLog"](
            "初始化第" + this["_currentLevel"] + "关出战记录为空",
            "info",
          )),
        _0xce1dfa > 0x0 &&
          this["_onLog"](
            "关卡推进: 第" +
              _0xce1dfa +
              "关 → 第" +
              this["_currentLevel"] +
              "关，重置重试计数",
            "info",
          )));
    const _0xf932a6 = _0x3340f2["monsterTeamInfo"] || {},
      _0x2d4e87 = String(this["_currentLevel"]),
      _0x37d244 = _0xf932a6[_0x2d4e87],
      _0x511fc7 =
        (null ==
        (_0x17bf8a = null == _0x37d244 ? void 0x0 : _0x37d244["monsterTeam"])
          ? void 0x0
          : _0x17bf8a["team"]) || {},
      _0x42f219 =
        (null == _0x37d244 ? void 0x0 : _0x37d244["curMonsterData"]) || {};
    if (Object["keys"](_0x511fc7)["length"] > 0x0) {
      const _0x231c5f = Ge[Number(_0x2d4e87)] || {
          boss: 0x0,
          minion: 0x0,
        },
        _0x494f19 = [];
      for (const [_0x120a9f, _0x2507d8] of Object["entries"](_0x511fc7)) {
        if (!_0x2507d8) continue;
        const _0x37b890 = String(_0x2507d8["id"])["length"] <= 0x6,
          _0x15802a = _0x42f219[String(_0x2507d8["id"])] || {},
          _0x5bd63d = _0x37b890 ? _0x231c5f["boss"] : _0x231c5f["minion"],
          _0x5af90c = _0x5bd63d > 0x0 ? _0x5bd63d : _0x2507d8["hp"] || 0x0,
          _0x17b68d =
            null != _0x15802a["curHp"] ? _0x15802a["curHp"] : _0x5af90c;
        _0x494f19["push"]({
          id: _0x2507d8["id"],
          name: _0x3cec52(_0x2507d8["id"]),
          maxHp: _0x5af90c,
          curHp: Number(_0x17b68d),
          isBoss: _0x37b890,
        });
      }
      this["_monsters"] = _0x494f19;
    } else this["_monsters"] = [];
    const _0x218037 = _0x3340f2["fightRoleBase"] || {},
      _0x4b2e96 = _0x3340f2["playerTeamInfo"] || {},
      _0x2f389d = [],
      _0x3aebb6 = Array["isArray"](_0x218037)
        ? _0x218037["map"]((_0x1d0f10) => [
            String(_0x1d0f10["roleId"]),
            _0x1d0f10,
          ])
        : Object["entries"](_0x218037);
    for (const [_0x47b2b8, _0x5adb5f] of _0x3aebb6) {
      if (!_0x5adb5f) continue;
      const _0x2368b4 =
          (null == (_0x10fdf5 = _0x5adb5f["battleData"])
            ? void 0x0
            : _0x10fdf5["team"]) || {},
        _0x80b191 =
          (null == (_0x2f6c27 = _0x4b2e96[_0x47b2b8])
            ? void 0x0
            : _0x2f6c27["curHeroData"]) || {},
        _0x2a941d = [];
      for (let _0x2bdfd0 = 0x0; _0x2bdfd0 < 0x5; _0x2bdfd0++) {
        const _0x251003 = _0x2368b4[String(_0x2bdfd0)];
        if (_0x251003 && _0x251003["id"]) {
          const _0x16ef46 =
              _0x80b191[String(_0x251003["id"])] ||
              _0x80b191[_0x251003["id"]] ||
              {},
            _0x53b2a1 = _0x251003["hp"] || 0x0,
            _0x57b4f7 =
              null != _0x16ef46["curHp"] ? _0x16ef46["curHp"] : _0x53b2a1;
          _0x2a941d["push"]({
            id: _0x251003["id"],
            name: _0x54ce48(_0x251003["id"]),
            curHp: Number(_0x57b4f7),
            isAlive: Number(_0x57b4f7) > 0x0,
          });
        }
      }
      const _0x1b683e =
        _0x2a941d["length"] > 0x0 &&
        _0x2a941d["every"]((_0x4a497d) => !_0x4a497d["isAlive"]);
      _0x2f389d["push"]({
        roleId: String(_0x47b2b8),
        name: _0x5adb5f["name"] || String(_0x47b2b8),
        heroes: _0x2a941d,
        isAllHeroesDead: _0x1b683e,
        isCaptain: String(_0x47b2b8) === String(_0x218b5a),
      });
    }
    _0x2f389d["length"] > 0x0
      ? (this["_members"] = _0x2f389d)
      : this["_members"]["length"] > 0x0 &&
        this["_onLog"]("房间信息中无成员数据，保留上次成员列表", "warning");
    const _0xf9ca06 = this["getBossHp"]();
    this["_onStatusChange"]({
      status: this["_status"],
      currentLevel: this["_currentLevel"],
      bossHp: _0xf9ca06,
    });
  }
  ["_getAutoAttacker"]() {
    var _0x36e938, _0x358b5f, _0x188b16;
    const _0x7ce25b =
        (null ==
        (_0x188b16 =
          null ==
          (_0x358b5f =
            null == (_0x36e938 = this["_presetData"])
              ? void 0x0
              : _0x36e938["levelConfig"])
            ? void 0x0
            : _0x358b5f[this["_currentLevel"]])
          ? void 0x0
          : _0x188b16["priority"]) || [],
      _0x2e2c74 = this["_attackRecords"][this["_currentLevel"]] || [],
      _0x30b2b7 = this["_members"]
        ["map"](
          (_0x4f701e) =>
            "" +
            _0x4f701e["name"] +
            (_0x4f701e["isAllHeroesDead"] ? "(亡)" : ""),
        )
        ["join"](",\x20");
    (this["_onLog"](
      "第" +
        this["_currentLevel"] +
        "关 预设顺序" +
        _0x7ce25b["length"] +
        "人，已出战" +
        _0x2e2c74["length"] +
        "人，成员[" +
        _0x30b2b7 +
        "]",
      "info",
    ),
      this["_members"]["forEach"]((_0x204268) => {
        const _0x474048 = _0x2e2c74["includes"](String(_0x204268["roleId"]));
        this["_onLog"](
          "  成员：" +
            _0x204268["name"] +
            " (roleId: " +
            _0x204268["roleId"] +
            ") - 阵亡:" +
            (_0x204268["isAllHeroesDead"] ? "\u662f" : "\u5426") +
            ", 已出战:" +
            (_0x474048 ? "\u662f" : "\u5426"),
          "info",
        );
      }));
    for (const _0x5178fa of _0x7ce25b) {
      let _0xd8afd = this["_resolveRoleId"](_0x5178fa),
        _0x5b180e = this["_members"]["find"](
          (_0xd25eb7) => String(_0xd25eb7["roleId"]) === _0xd8afd,
        );
      if (!_0x5b180e) {
        const _0x1f421a = this["_resolveRoleIdByName"](_0x5178fa);
        _0x1f421a &&
          ((_0xd8afd = _0x1f421a),
          (_0x5b180e = this["_members"]["find"](
            (_0x1d4248) => String(_0x1d4248["roleId"]) === _0xd8afd,
          )));
      }
      if (_0x5b180e) {
        if (!_0x2e2c74["includes"](_0xd8afd)) {
          if (_0x5b180e["isAllHeroesDead"]) {
            const _0x34d0ec = this["_currentLevel"] + ":" + _0xd8afd;
            if (
              this["_shouldAutoRecover"](_0x5b180e, _0x5178fa) &&
              !(this["_recoverAttempts"] =
                this["_recoverAttempts"] || new Set())["has"](_0x34d0ec)
            )
              return (
                this["_recoverAttempts"]["add"](_0x34d0ec),
                this["_onLog"](
                  _0x5b180e["name"] +
                    " 全部阵亡，但本关配置了恢复，选中并先恢复",
                  "info",
                ),
                {
                  member: _0x5b180e,
                  entry: _0x5178fa,
                }
              );
            this["_onLog"](_0x5b180e["name"] + " 全部阵亡，跳过", "warning");
            continue;
          }
          return (
            this["_onLog"](
              "选中出战：" + _0x5b180e["name"] + " (roleId: " + _0xd8afd + ")",
              "success",
            ),
            {
              member: _0x5b180e,
              entry: _0x5178fa,
            }
          );
        }
        this["_onLog"](_0x5b180e["name"] + " 已出战过，跳过", "info");
      } else
        this["_onLog"](
          "成员 " +
            _0x5178fa["slice"](0x0, 0x8) +
            " 未匹配到（roleId: " +
            _0xd8afd +
            "）",
          "warning",
        );
    }
    for (const _0xe15fa9 of this["_members"])
      if (!_0x2e2c74["includes"](String(_0xe15fa9["roleId"]))) {
        if (_0xe15fa9["isAllHeroesDead"]) {
          const _0x3bc6f8 =
            this["_currentLevel"] + ":" + String(_0xe15fa9["roleId"]);
          if (
            this["_shouldAutoRecover"](_0xe15fa9, null) &&
            !(this["_recoverAttempts"] = this["_recoverAttempts"] || new Set())[
              "has"
            ](_0x3bc6f8)
          )
            return (
              this["_recoverAttempts"]["add"](_0x3bc6f8),
              this["_onLog"](
                _0xe15fa9["name"] +
                  " 全部阵亡，但本关配置了恢复，选中并先恢复（兆底）",
                "info",
              ),
              {
                member: _0xe15fa9,
                entry: null,
              }
            );
          continue;
        }
        return (
          this["_onLog"]("使用兆底出战：" + _0xe15fa9["name"], "info"),
          {
            member: _0xe15fa9,
            entry: null,
          }
        );
      }
    for (const _0x420488 of this["_members"]) {
      if (_0x2e2c74["includes"](String(_0x420488["roleId"]))) continue;
      if (!_0x420488["isAllHeroesDead"]) continue;
      const _0x2fc1cf =
        this["_currentLevel"] + ":" + String(_0x420488["roleId"]);
      if (
        !(this["_recoverAttempts"] = this["_recoverAttempts"] || new Set())[
          "has"
        ](_0x2fc1cf)
      )
        return (
          this["_recoverAttempts"]["add"](_0x2fc1cf),
          this["_onLog"](
            "自动恢复兜底：" +
              _0x420488["name"] +
              " 此前阵亡且本关未出战，恢复后继续挑战",
            "info",
          ),
          {
            member: _0x420488,
            entry: null,
            forceRecover: !0x0,
          }
        );
    }
    const _0x13ae77 = this["_members"]
        ["filter"]((_0x2715da) => _0x2715da["isAllHeroesDead"])
        ["map"]((_0x3865f4) => _0x3865f4["name"])
        ["join"](",\x20"),
      _0x5b0d6a = this["_members"]
        ["filter"]((_0x253055) =>
          _0x2e2c74["includes"](String(_0x253055["roleId"])),
        )
        ["map"]((_0x4902fb) => _0x4902fb["name"])
        ["join"](",\x20");
    return (
      this["_onLog"](
        "️ 无可用出战成员：阵亡[" +
          (_0x13ae77 || "\u65e0") +
          "]，已出战[" +
          (_0x5b0d6a || "\u65e0") +
          "]",
        "warning",
      ),
      null
    );
  }
  ["_resolveRoleId"](_0x86db38) {
    const _0x129581 = this["_tokenStore"]["gameTokens"]["find"](
      (_0x1c7642) => _0x1c7642["id"] === _0x86db38,
    );
    return (null == _0x129581 ? void 0x0 : _0x129581["roleId"])
      ? String(_0x129581["roleId"])
      : String(_0x86db38);
  }
  ["_resolveRoleIdByName"](_0x19a402) {
    const _0x3e8a2d = this["_tokenStore"]["gameTokens"]["find"](
      (_0x2a89d6) => _0x2a89d6["id"] === _0x19a402,
    );
    if (!(null == _0x3e8a2d ? void 0x0 : _0x3e8a2d["name"])) return null;
    const _0x53d929 = this["_members"]["find"](
      (_0x2168ff) => _0x2168ff["name"] === _0x3e8a2d["name"],
    );
    return _0x53d929 ? String(_0x53d929["roleId"]) : null;
  }
  ["_getConfigValue"](_0x31d6ee, _0x9c8647, _0x7041b2) {
    if (!_0x31d6ee) return !0x1;
    if (_0x7041b2 && _0x31d6ee[_0x7041b2]) return !0x0;
    if (_0x9c8647["roleId"] && _0x31d6ee[String(_0x9c8647["roleId"])])
      return !0x0;
    const _0x393224 = this["_tokenStore"]["gameTokens"]["find"](
      (_0x4f1493) =>
        (_0x4f1493["roleId"] &&
          String(_0x4f1493["roleId"]) === String(_0x9c8647["roleId"])) ||
        _0x4f1493["name"] === _0x9c8647["name"],
    );
    return !(!_0x393224 || !_0x31d6ee[_0x393224["id"]]);
  }
  ["_shouldAutoRecover"](_0x4f6f30, _0x3459e6) {
    var _0x590c0c, _0x24f104, _0x5c559f;
    const _0x4ed9d3 =
      null ==
      (_0x5c559f =
        null ==
        (_0x24f104 =
          null == (_0x590c0c = this["_presetData"])
            ? void 0x0
            : _0x590c0c["levelConfig"])
          ? void 0x0
          : _0x24f104[this["_currentLevel"]])
        ? void 0x0
        : _0x5c559f["recovery"];
    return this["_getConfigValue"](_0x4ed9d3, _0x4f6f30, _0x3459e6);
  }
  ["_shouldAutoFullRage"](_0x1471c7, _0x3cd09b) {
    var _0x2f9758, _0x234b7b, _0x56946d;
    const _0x1af8af =
      null ==
      (_0x56946d =
        null ==
        (_0x234b7b =
          null == (_0x2f9758 = this["_presetData"])
            ? void 0x0
            : _0x2f9758["levelConfig"])
          ? void 0x0
          : _0x234b7b[this["_currentLevel"]])
        ? void 0x0
        : _0x56946d["fullRage"];
    return this["_getConfigValue"](_0x1af8af, _0x1471c7, _0x3cd09b);
  }
  async ["_fight"](_0x5ec0d5) {
    if (_0x5ec0d5["isAllHeroesDead"])
      return (
        this["_onLog"](
          _0x5ec0d5["name"] + " 武将全部阵亡，无法出战",
          "warning",
        ),
        !0x1
      );
    ((this["_status"] = "fighting"),
      this["_onLog"](
        _0x5ec0d5["name"] +
          " 出战！（第" +
          this["_currentLevel"] +
          "关\x20" +
          (Ve[this["_currentLevel"]] || "") +
          "）",
        "info",
      ));
    try {
      return (
        await this["_tokenStore"]["sendMessageWithPromise"](
          this["_captainTokenId"],
          "nightmare_fight",
          {
            roomId: this["_roomId"],
            roleId: Number(_0x5ec0d5["roleId"]),
          },
          0x2710,
        ),
        this["_attackRecords"][this["_currentLevel"]] ||
          (this["_attackRecords"][this["_currentLevel"]] = []),
        this["_attackRecords"][this["_currentLevel"]]["push"](
          String(_0x5ec0d5["roleId"]),
        ),
        !0x0
      );
    } catch (_0x11f51d) {
      const _0x2415b4 = _0x11f51d["message"] || String(_0x11f51d);
      return _0x2415b4["includes"]("6100070")
        ? (this["_onLog"](
            _0x5ec0d5["name"] + " 已出战过（6100070），标记并跳过",
            "warning",
          ),
          this["_attackRecords"][this["_currentLevel"]] ||
            (this["_attackRecords"][this["_currentLevel"]] = []),
          this["_attackRecords"][this["_currentLevel"]]["includes"](
            String(_0x5ec0d5["roleId"]),
          ) ||
            this["_attackRecords"][this["_currentLevel"]]["push"](
              String(_0x5ec0d5["roleId"]),
            ),
          "already_fought")
        : _0x2415b4["includes"]("7100020")
          ? (this["_onLog"](
              _0x5ec0d5["name"] + " 已在此房间（7100020），标记并跳过",
              "warning",
            ),
            this["_attackRecords"][this["_currentLevel"]] ||
              (this["_attackRecords"][this["_currentLevel"]] = []),
            this["_attackRecords"][this["_currentLevel"]]["includes"](
              String(_0x5ec0d5["roleId"]),
            ) ||
              this["_attackRecords"][this["_currentLevel"]]["push"](
                String(_0x5ec0d5["roleId"]),
              ),
            "already_fought")
          : _0x2415b4["includes"]("7100040")
            ? (this["_onLog"](
                "当前队长位置不对，无法出战（" + _0x5ec0d5["name"] + "）",
                "error",
              ),
              !0x1)
            : _0x2415b4["includes"]("7100140")
              ? (this["_onLog"](
                  _0x5ec0d5["name"] + " 出战失败，限流中，等待恢复即可",
                  "warning",
                ),
                !0x1)
              : (this["_onLog"]("出战失败: " + _0x2415b4, "error"), !0x1);
    }
  }
  async ["_leaderComplete"]() {
    for (let _0x19b223 = 0x1; _0x19b223 <= 0x3; _0x19b223++)
      try {
        return (
          await this["_tokenStore"]["sendMessageWithPromise"](
            this["_captainTokenId"],
            "nightmare_leadercomplete",
            {
              roomId: this["_roomId"],
            },
            0x2710,
          ),
          !0x0
        );
      } catch (_0x47cb73) {
        _0x19b223 < 0x3 && (await We(0x7d0));
      }
    return !0x1;
  }
  async ["_memberRecover"](_0x370245) {
    try {
      (await this["_tokenStore"]["sendMessageWithPromise"](
        this["_captainTokenId"],
        "nightmare_restore",
        {
          roomId: Number(this["_roomId"]),
          roleId: Number(_0x370245["roleId"]),
        },
        0x2710,
      ),
        this["_recoverUsed"]++,
        (this["_recoverCounts"][String(_0x370245["roleId"])] =
          (this["_recoverCounts"][String(_0x370245["roleId"])] || 0x0) + 0x1),
        this["_persistRecoverState"]());
      const _0x4e6701 = this["getRecoverInfo"]();
      (this["_onLog"](
        _0x370245["name"] +
          " 恢复指令成功（剩余恢复次数 " +
          _0x4e6701["left"] +
          "/" +
          _0x4e6701["total"] +
          "）",
        "success",
      ),
        await We(0x5dc),
        await this["_fetchRoomInfo"]());
      const _0x3087f4 = this["_members"]["find"](
        (_0x3616d1) =>
          String(_0x3616d1["roleId"]) === String(_0x370245["roleId"]),
      );
      return (
        (null == _0x3087f4 ? void 0x0 : _0x3087f4["isAllHeroesDead"]) &&
          (await We(0x7d0), await this["_fetchRoomInfo"]()),
        !0x0
      );
    } catch (_0x1af536) {
      return (
        this["_onLog"](
          "恢复指令失败: " + (_0x1af536["message"] || _0x1af536),
          "warning",
        ),
        !0x1
      );
    }
  }
  async ["_memberFullRage"](_0x4c69c6) {
    try {
      (await this["_tokenStore"]["sendMessageWithPromise"](
        this["_captainTokenId"],
        "nightmare_fullrage",
        {
          roomId: this["_roomId"],
          targetRoleId: Number(_0x4c69c6["roleId"]),
        },
        0x2710,
      ),
        await this["_fetchRoomInfo"]());
    } catch (_0x3441fb) {
      this["_onLog"](
        "满怒指令失败: " + (_0x3441fb["message"] || _0x3441fb),
        "warning",
      );
    }
  }
  ["_checkCompletion"]() {
    const _0x2e261d =
        this["_monsters"]["length"] > 0x0 &&
        this["_monsters"]["every"]((_0x5bd03c) => _0x5bd03c["curHp"] <= 0x0),
      _0x498936 = 0x8 === this["_currentLevel"] && _0x2e261d;
    return this["_currentLevel"] > 0x8 || _0x498936;
  }
  ["_isAllMembersDead"]() {
    return (
      this["_members"]["length"] > 0x0 &&
      this["_members"]["every"]((_0x28a852) => _0x28a852["isAllHeroesDead"])
    );
  }
  ["_decrementPillowCache"]() {
    try {
      const _0x4e9f7c = JSON["parse"](
          localStorage["getItem"]("nightmare-pillow-cache") || "{}",
        ),
        _0x11d66b = [
          ...(this["_presetMemberRoleIds"] || []),
          this["_captainRoleId"],
        ]
          ["filter"](Boolean)
          ["map"](String),
        _0x489c73 = [
          ...(this["_presetMemberTokenIds"] || []),
          this["_captainTokenId"],
        ]["filter"](Boolean);
      let _0x1c29ea = !0x1;
      const _0x3c77ea = (_0x4ce556) => {
        const _0x23b78f = _0x4e9f7c[_0x4ce556];
        _0x23b78f &&
          "number" == typeof _0x23b78f["cnt"] &&
          _0x23b78f["cnt"] > 0x0 &&
          ((_0x23b78f["cnt"] -= 0x1),
          (_0x23b78f["ts"] = Date["now"]()),
          (_0x1c29ea = !0x0));
      };
      (_0x11d66b["forEach"](_0x3c77ea),
        _0x489c73["forEach"](_0x3c77ea),
        _0x1c29ea &&
          (localStorage["setItem"](
            "nightmare-pillow-cache",
            JSON["stringify"](_0x4e9f7c),
          ),
          window["dispatchEvent"](
            new CustomEvent("nightmare-pillow-cache-updated"),
          )));
    } catch (_0x412ffe) {}
  }
  async ["_reopenRoom"]() {
    var _0x5171f3, _0x355887, _0x2cdf98;
    try {
      const _0x4d1ed4 = await this["_tokenStore"]["sendMessageWithPromise"](
        this["_captainTokenId"],
        "matchteam_openteam",
        {
          teamId: Number(this["_teamId"]),
        },
        0x2710,
      );
      let _0x23de7a =
        (null == _0x4d1ed4 ? void 0x0 : _0x4d1ed4["roomId"]) ||
        (null == _0x4d1ed4 ? void 0x0 : _0x4d1ed4["roomid"]) ||
        (null ==
        (_0x5171f3 = null == _0x4d1ed4 ? void 0x0 : _0x4d1ed4["roomInfo"])
          ? void 0x0
          : _0x5171f3["roomId"]) ||
        null;
      if (!_0x23de7a) {
        this["_onLog"](
          "[debug] _reopenRoom: matchteam_openteam 未返回 roomId（仅 " +
            ((_0x4d1ed4 && JSON["stringify"](_0x4d1ed4)) || "\u7a7a") +
            "），改从 nightmare_getroleinfo 获取...",
          "info",
        );
        for (let _0x52fe5c = 0x1; _0x52fe5c <= 0xa; _0x52fe5c++) {
          if (this["_stopped"]) return null;
          try {
            const _0x5b21f3 = await this["_tokenStore"][
              "sendMessageWithPromise"
            ](
              this["_captainTokenId"],
              "nightmare_getroleinfo",
              this["_captainRoleId"]
                ? {
                    roleId: Number(this["_captainRoleId"]),
                  }
                : {},
              0x2710,
            );
            if (
              ((_0x23de7a =
                (null ==
                (_0x355887 =
                  null == _0x5b21f3 ? void 0x0 : _0x5b21f3["nightMareData"])
                  ? void 0x0
                  : _0x355887["roomId"]) ||
                (null ==
                (_0x2cdf98 =
                  null == _0x5b21f3 ? void 0x0 : _0x5b21f3["nightmareData"])
                  ? void 0x0
                  : _0x2cdf98["roomId"]) ||
                (null == _0x5b21f3 ? void 0x0 : _0x5b21f3["roomId"]) ||
                (null == _0x5b21f3 ? void 0x0 : _0x5b21f3["roomid"]) ||
                null),
              _0x23de7a)
            )
              break;
          } catch (_0x25e1b0) {}
          await We(0xbb8);
        }
      }
      return _0x23de7a
        ? (this["_decrementPillowCache"](), Number(_0x23de7a))
        : (this["_onLog"](
            "[debug] _reopenRoom: 无法获取 roomId，原始响应：" +
              JSON["stringify"](_0x4d1ed4 || null),
            "warning",
          ),
          this["_onLog"]("新 RoomId 尚未生成，结束挑战", "error"),
          null);
    } catch (_0x31a63f) {
      const _0x2183f0 = _0x31a63f["message"] || String(_0x31a63f);
      if (_0x2183f0["includes"]("7100020")) {
        this["_onLog"]("开启房间失败(7100020)，尝试刷新房间状态...", "warning");
        try {
          if ((await this["_fetchRoomInfo"]()) && this["_roomId"])
            return (
              this["_onLog"](
                "刷新后房间仍有效 RoomId: " + this["_roomId"] + "，跳过重建",
                "success",
              ),
              Number(this["_roomId"])
            );
        } catch (_0x3b6f6d) {}
        return (
          this["_onLog"](
            "刷新后无有效房间，不再重建空队伍，结束本次挑战",
            "error",
          ),
          null
        );
      }
      return (this["_onLog"]("重新开启房间失败: " + _0x2183f0, "error"), null);
    }
  }
  async ["_dismissRoom"](_0x528fa5 = null) {
    if (!this["_cleanupDone"]) {
      ((this["_cleanupDone"] = !0x0), this["_clearRecoverState"]());
      try {
        (await this["_tokenStore"]["sendMessageWithPromise"](
          this["_captainTokenId"],
          "nightmare_dismiss",
          {
            roomId: Number(this["_roomId"]),
          },
          0x2710,
        ),
          this["_onLog"]("战斗房间已遣散", "success"));
      } catch (_0x314d56) {
        const _0x2d2db4 = _0x314d56["message"] || String(_0x314d56);
        _0x2d2db4["includes"]("6100020") || _0x2d2db4["includes"]("6100010")
          ? this["_onLog"]("战斗房间已不存在或已清理，跳过遣散", "info")
          : this["_onLog"]("遣散房间失败: " + _0x2d2db4, "warning");
      }
      if (this["_teamId"]) {
        let _0x4b43fb = !0x1;
        if (
          (_0x528fa5 &&
            Array["isArray"](_0x528fa5) &&
            (_0x4b43fb = _0x528fa5["some"]((_0x2fb70f) => {
              var _0x53142c, _0x4060dc, _0x24ac8c, _0x3550ad, _0x46467f;
              return (
                _0x2fb70f &&
                _0x2fb70f["battle"] !== this &&
                String(
                  null !=
                    (_0x46467f =
                      null !=
                      (_0x3550ad =
                        null == (_0x53142c = _0x2fb70f["battle"])
                          ? void 0x0
                          : _0x53142c["_teamId"])
                        ? _0x3550ad
                        : null ==
                            (_0x24ac8c =
                              null == (_0x4060dc = _0x2fb70f["battle"])
                                ? void 0x0
                                : _0x4060dc["getTeamId"])
                          ? void 0x0
                          : _0x24ac8c["call"](_0x4060dc))
                    ? _0x46467f
                    : "",
                ) === String(this["_teamId"]) &&
                ("running" === _0x2fb70f["status"] ||
                  "cooling" === _0x2fb70f["status"] ||
                  "waiting_midnight" === _0x2fb70f["status"])
              );
            })),
          _0x4b43fb)
        )
          this["_onLog"](
            "队伍 " + this["_teamId"] + " 被其他战斗共享，跳过解散",
            "info",
          );
        else
          try {
            (await this["_tokenStore"]["sendMessageWithPromise"](
              this["_captainTokenId"],
              "matchteam_dismiss",
              {
                teamId: Number(this["_teamId"]),
              },
              0x2710,
            ),
              this["_onLog"]("组队已解散", "success"));
          } catch (_0x885a1c) {
            this["_onLog"](
              "解散组队失败: " + (_0x885a1c["message"] || _0x885a1c),
              "warning",
            );
          }
      }
    }
  }
  ["_shouldWaitForMidnight"]() {
    var _0x53c099;
    return (
      !!(null == (_0x53c099 = this["_presetData"])
        ? void 0x0
        : _0x53c099["waitLevel8"]) &&
      0x7 !== this["_currentLevel"] &&
      0x8 === this["_currentLevel"] &&
      0x0 === new Date()["getDay"]() &&
      !this["_level8FirstEntry"] &&
      ((this["_level8FirstEntry"] = !0x0), !0x0)
    );
  }
  async ["_waitForMidnight"]() {
    ((this["_status"] = "waiting_midnight"),
      (this["_waitStartTime"] = Date["now"]()),
      this["_onStatusChange"]({
        status: "waiting_midnight",
        currentLevel: this["_currentLevel"],
      }),
      this["_onLog"]("第7关完成，等待周一00:01后继续挑战第8关...", "info"));
    let _0x2c615d = -0x1,
      _0x53adfe = 0x0,
      _0xc13a2f = 0x0;
    for (; !this["_stopped"];) {
      const _0x5310a9 = new Date(),
        _0x59ea43 = _0x5310a9["getDay"](),
        _0x5b9aeb = _0x5310a9["getHours"](),
        _0x4553c3 = _0x5310a9["getMinutes"]();
      if (0x1 === _0x59ea43 && (_0x5b9aeb > 0x0 || _0x4553c3 >= 0x1)) break;
      if (0x0 !== _0x59ea43 && 0x1 !== _0x59ea43) break;
      const _0x3a4481 =
          (0x0 === _0x59ea43
            ? new Date(
                _0x5310a9["getFullYear"](),
                _0x5310a9["getMonth"](),
                _0x5310a9["getDate"]() + 0x1,
                0x0,
                0x1,
                0x5,
              )
            : new Date(
                _0x5310a9["getFullYear"](),
                _0x5310a9["getMonth"](),
                _0x5310a9["getDate"](),
                0x0,
                0x1,
                0x5,
              )) - _0x5310a9,
        _0xe796f2 = Math["max"](0x0, Math["ceil"](_0x3a4481 / 0xea60));
      if (
        ((_0x2c615d < 0x0 || Math["abs"](_0x2c615d - _0xe796f2) >= 0xa) &&
          ((_0x2c615d = _0xe796f2),
          this["_onLog"]("⏳ 距周一00:01还剩 " + _0xe796f2 + " 分钟", "info"),
          this["_onStatusChange"]({
            status: "waiting_midnight",
            currentLevel: this["_currentLevel"],
            remainMinutes: _0xe796f2,
          })),
        0x17 === _0x5b9aeb &&
          _0x4553c3 >= 0x3b &&
          !this["_preMidnightReconnectDone"] &&
          (this["_onLog"]("⏰ 23:59 主动断开重连队长...", "info"),
          (await this["_forceReconnectCaptain"]()) &&
            (await this["_fetchRoomInfo"](),
            this["_onLog"]("✅ 23:59 重连完成，等待00:01执行", "success")),
          (this["_preMidnightReconnectDone"] = !0x0)),
        Date["now"]() - _0x53adfe >= 0x493e0)
      ) {
        _0x53adfe = Date["now"]();
        try {
          (await this["_tokenStore"]["sendMessageWithPromise"](
            this["_captainTokenId"],
            "nightmare_getroominfo",
            {
              roomId: this["_roomId"],
            },
            0x2710,
          ),
            (_0xc13a2f = 0x0));
        } catch (_0x576350) {
          ((_0xc13a2f += 0x1),
            _0xc13a2f >= 0x3 &&
              ((_0xc13a2f = 0x0),
              this["_onLog"](
                "卡点等待心跳连续失败，尝试重连队长...",
                "warning",
              ),
              (await this["_forceReconnectCaptain"]()) &&
                (await this["_fetchRoomInfo"]())));
        }
      }
      for (
        let _0x1aecdc = 0x0;
        _0x1aecdc < 0x5 && !this["_stopped"];
        _0x1aecdc++
      )
        await We(0x3e8);
    }
    this["_stopped"] ||
      (this["_onLog"]("已到周一00:01，开始第8关挑战！", "success"),
      (this["_status"] = "running"),
      (this["_waitStartTime"] = null),
      (this["_startTime"] = Date["now"]()));
  }
}
export { Ye as NightmareBattleRunner };
