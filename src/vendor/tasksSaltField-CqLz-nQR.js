// Adapted from the supplied 2.57.2 game enhancement asset.
// Static strings decoded; obfuscator guards removed; frame access stays local.
var e = Object["defineProperty"],
  t = Object["defineProperties"],
  n = Object["getOwnPropertyDescriptors"],
  i = Object["getOwnPropertySymbols"],
  o = Object["prototype"]["hasOwnProperty"],
  a = Object["prototype"]["propertyIsEnumerable"],
  s = (_0x5cd104, _0x40aec3, _0x18a3ee) =>
    _0x40aec3 in _0x5cd104
      ? e(_0x5cd104, _0x40aec3, {
          enumerable: !0x0,
          configurable: !0x0,
          writable: !0x0,
          value: _0x18a3ee,
        })
      : (_0x5cd104[_0x40aec3] = _0x18a3ee),
  r = (_0x5e6ac9, _0x54e26e) => {
    for (var _0x202a45 in _0x54e26e || (_0x54e26e = {}))
      o["call"](_0x54e26e, _0x202a45) &&
        s(_0x5e6ac9, _0x202a45, _0x54e26e[_0x202a45]);
    if (i) {
      for (var _0x202a45 of i(_0x54e26e))
        a["call"](_0x54e26e, _0x202a45) &&
          s(_0x5e6ac9, _0x202a45, _0x54e26e[_0x202a45]);
    }
    return _0x5e6ac9;
  },
  l = (_0x2aaa35, _0x3474a1) => t(_0x2aaa35, n(_0x3474a1));
import { g_utils as _0x4a55a4 } from "../utils/bonProtocol.js";
import { roadPointList as _0x2cda59 } from "../utils/legionWar.js";
import { isNowInLegionWarTime } from "../utils/clubBattleUtils.js";

function m(_0x3e88a9) {
  var _0x33c5e8;
  return (
    !!_0x3e88a9 &&
    ("march" === _0x3e88a9["state"] ||
      "march" ===
        (null == (_0x33c5e8 = _0x3e88a9["serverData"])
          ? void 0x0
          : _0x33c5e8["state"]))
  );
}
function f(_0x1abe2f) {
  return (
    !!_0x1abe2f &&
    ("combat" === _0x1abe2f["state"] || Number(_0x1abe2f["battleId"]) > 0x0)
  );
}
function g(_0x94bf1f) {
  return (
    !!_0x94bf1f &&
    ("die" === _0x94bf1f["state"] ||
      "resurrect" === _0x94bf1f["state"] ||
      !0x0 === _0x94bf1f["isDead"])
  );
}
function h(_0x314ab2) {
  return (
    !!_0x314ab2 &&
    (function (_0x5da83b) {
      return (
        !!_0x5da83b &&
        ("idle" === _0x5da83b["state"] || "idle" === _0x5da83b["svrState"])
      );
    })(_0x314ab2) &&
    !g(_0x314ab2) &&
    !m(_0x314ab2) &&
    !f(_0x314ab2)
  );
}
function y(_0x263304) {
  var _0x32ac78,
    _0x3c93a0,
    _0x23d991,
    _0x25fd2b,
    _0x28a68a,
    _0x3bd259,
    _0x5ef3e3,
    _0x36eae3,
    _0x21db91;
  if (!_0x263304) return 0x0;
  const _0xf09626 = Date["now"](),
    _0x947c02 = Number(
      null !=
        (_0x28a68a =
          null !=
          (_0x25fd2b =
            null != (_0x3c93a0 = _0x263304["reviveTime"])
              ? _0x3c93a0
              : null == (_0x32ac78 = _0x263304["serverData"])
                ? void 0x0
                : _0x32ac78["reviveTimeLeft"])
            ? _0x25fd2b
            : null == (_0x23d991 = _0x263304["_serverData"])
              ? void 0x0
              : _0x23d991["reviveTimeLeft"])
        ? _0x28a68a
        : 0x0,
    );
  if (Number["isFinite"](_0x947c02) && _0x947c02 > 0x0 && _0x947c02 < 0x15180)
    return Math["ceil"](_0x947c02);
  const _0x2daec2 = Number(_0x263304["endDieTime"] || 0x0);
  if (Number["isFinite"](_0x2daec2) && _0x2daec2 > _0xf09626)
    return Math["ceil"]((_0x2daec2 - _0xf09626) / 0x3e8);
  const _0x26aefc = Number(
    null !=
      (_0x21db91 =
        null !=
        (_0x36eae3 =
          null == (_0x3bd259 = _0x263304["serverData"])
            ? void 0x0
            : _0x3bd259["reviveTime"])
          ? _0x36eae3
          : null == (_0x5ef3e3 = _0x263304["_serverData"])
            ? void 0x0
            : _0x5ef3e3["reviveTime"])
      ? _0x21db91
      : 0x0,
  );
  if (Number["isFinite"](_0x26aefc) && _0x26aefc > 0x0) {
    const _0x3c0dda = _0x26aefc > 0x2540be400 ? _0x26aefc : 0x3e8 * _0x26aefc;
    if (_0x3c0dda > _0xf09626)
      return Math["ceil"]((_0x3c0dda - _0xf09626) / 0x3e8);
  }
  return 0x0;
}
function p(_0x41e90e) {
  var _0x22fcf3, _0x1d7c04;
  return null !=
    (_0x1d7c04 =
      null != (_0x22fcf3 = null == _0x41e90e ? void 0x0 : _0x41e90e["state"])
        ? _0x22fcf3
        : null == _0x41e90e
          ? void 0x0
          : _0x41e90e["svrState"])
    ? _0x1d7c04
    : null;
}
function w(_0x28cfc5) {
  return "watching" === p(_0x28cfc5);
}
function b(_0x3c0211) {
  return null !== p(_0x3c0211) && !w(_0x3c0211);
}
function $(_0x5c9e26) {
  var _0x2419da;
  if (!_0x5c9e26) return !0x1;
  const _0x1321b6 =
    null != (_0x2419da = _0x5c9e26["code"])
      ? _0x2419da
      : _0x5c9e26["errorCode"];
  return (
    "3000560" === String(_0x1321b6) ||
    /(^|\D)3000560(\D|$)/["test"](String(_0x5c9e26["message"] || ""))
  );
}
class v {
  constructor(_0x97e50b, _0x13f16e, _0x1fb5a0) {
    var _0x199575;
    ((this["sid"] = _0x13f16e),
      (this["battlefieldId"] = _0x1fb5a0),
      (this["token"] = _0x97e50b),
      (this["utils"] = _0x4a55a4),
      (this["enc"] = (
        null == (_0x199575 = this["utils"]) ? void 0x0 : _0x199575["getEnc"]
      )
        ? this["utils"]["getEnc"]("auto")
        : null),
      (this["sendQueue"] = []),
      (this["sendQueueTimer"] = null),
      (this["heartbeatTimer"] = null),
      (this["heartbeatInterval"] = 0x1388),
      (this["socket"] = null),
      (this["ack"] = 0x0),
      (this["seq"] = 0x0),
      (this["connected"] = !0x1),
      (this["promises"] = Object["create"](null)),
      (this["messageListener"] = null),
      (this["onDisconnect"] = null),
      (this["onError"] = null),
      (this["manualClose"] = !0x1),
      (this["reconnecting"] = !0x1),
      (this["maxReconnect"] = 0x6));
  }
  async ["init"]() {
    return new Promise((_0xd1e451, _0x564eed) => {
      let _0x2cee68 =
        "wss://xxz-xyzw-new.hortorgames.com/agent?p=" +
        encodeURIComponent(this["token"]) +
        "&e=x&sid2=" +
        this["sid"] +
        "&lang=chinese&sid2=" +
        this["sid"];
      // Use the host project's direct game-server connection; no vendor relay.
      if (this["socket"])
        try {
          ((this["socket"]["onopen"] = null),
            (this["socket"]["onerror"] = null),
            (this["socket"]["onclose"] = null),
            (this["socket"]["onmessage"] = null),
            this["socket"]["close"]());
        } catch (_0x5a5625) {}
      ((this["manualClose"] = !0x1),
        (this["connected"] = !0x1),
        (this["seq"] = 0x0),
        (this["ack"] = 0x0),
        console["log"](
          "[盐场] 最终 WS 地址:",
          _0x2cee68["split"]("?")[0x0],
          "| 浏览器直连",
        ),
        (this["socket"] = new WebSocket(_0x2cee68)),
        (this["socket"]["binaryType"] = "arraybuffer"));
      let _0xd5237 = !0x1;
      ((this["socket"]["onopen"] = () => {
        ((_0xd5237 = !0x0),
          (this["connected"] = !0x0),
          this["_setupHeartbeat"](),
          this["_processQueueLoop"](),
          console["log"]("[SaltField] 连接成功"),
          this["onConnect"] && this["onConnect"](),
          _0xd1e451(this));
      }),
        (this["socket"]["onerror"] = (_0x50e911) => {
          (console["error"](
            "[SaltField] 连接错误:",
            _0x50e911,
            "| url=",
            _0x2cee68["split"]("?")[0x0],
            "readyState=",
            this["socket"] && this["socket"]["readyState"],
          ),
            _0xd5237 || _0x564eed(new Error("盐场 WS 连接失败")),
            this["onError"] && this["onError"](_0x50e911));
        }),
        (this["socket"]["onclose"] = (_0x23dcdc) => {
          (console["log"](
            "[SaltField] 连接关闭:",
            _0x23dcdc["code"],
            _0x23dcdc["reason"],
          ),
            (this["connected"] = !0x1),
            this["_clearTimers"](),
            this["onDisconnect"] && this["onDisconnect"](_0x23dcdc));
        }),
        (this["socket"]["onmessage"] = (_0x4bae34) => {
          this["_handleMessage"](_0x4bae34);
        }),
        setTimeout(() => {
          _0xd5237 ||
            (this["disconnect"](), _0x564eed(new Error("盐场 WS 连接超时")));
        }, 0x2710));
    });
  }
  ["_handleMessage"](_0x2f1a2d) {
    try {
      let _0x1a5b69;
      if ("string" == typeof _0x2f1a2d["data"])
        _0x1a5b69 = JSON["parse"](_0x2f1a2d["data"]);
      else {
        if (!(_0x2f1a2d["data"] instanceof ArrayBuffer))
          return "undefined" != typeof Blob && _0x2f1a2d["data"] instanceof Blob
            ? void _0x2f1a2d["data"]
                ["arrayBuffer"]()
                ["then"]((_0x5b90ad) => {
                  try {
                    this["_processPacket"](this["_parseBinary"](_0x5b90ad));
                  } catch (_0x438223) {
                    console["error"](
                      "[SaltField] 消息处理失败:",
                      _0x438223["message"],
                    );
                  }
                })
                ["catch"]((_0x3fd5ca) => {
                  console["error"](
                    "[SaltField] Blob 读取失败:",
                    null == _0x3fd5ca ? void 0x0 : _0x3fd5ca["message"],
                  );
                })
            : void console["warn"](
                "[SaltField] 未知消息类型:",
                typeof _0x2f1a2d["data"],
              );
        _0x1a5b69 = this["_parseBinary"](_0x2f1a2d["data"]);
      }
      this["_processPacket"](_0x1a5b69);
    } catch (_0x565153) {
      console["error"]("[SaltField] 消息处理失败:", _0x565153["message"]);
    }
  }
  ["_parseBinary"](_0x29bfa8) {
    return this["utils"]
      ? this["utils"]["parseLegion"]
        ? this["utils"]["parseLegion"](_0x29bfa8, "auto")
        : this["utils"]["parse"]
          ? this["utils"]["parse"](_0x29bfa8, "auto", !0x0)
          : new TextDecoder()["decode"](_0x29bfa8)
      : new TextDecoder()["decode"](_0x29bfa8);
  }
  ["_processPacket"](_0x3b6bb7) {
    var _0x29b5d5, _0x4c0fca;
    if (!_0x3b6bb7) return;
    const _0x4fe6db = _0x3b6bb7["_raw"] || _0x3b6bb7,
      _0xe98331 =
        "number" == typeof (null == _0x4fe6db ? void 0x0 : _0x4fe6db["seq"])
          ? _0x4fe6db["seq"]
          : void 0x0;
    if (
      ("number" == typeof _0xe98331 &&
        _0xe98331 >= 0x0 &&
        (this["ack"] = _0xe98331),
      _0x4fe6db["body"] && this["_shouldDecodeBody"](_0x4fe6db["body"]))
    )
      try {
        if (
          null ==
          (_0x4c0fca =
            null == (_0x29b5d5 = this["utils"]) ? void 0x0 : _0x29b5d5["bon"])
            ? void 0x0
            : _0x4c0fca["decode"]
        ) {
          const _0x1c4c8e = this["_convertToUint8Array"](_0x4fe6db["body"]);
          if (_0x1c4c8e) {
            const _0x325a3c = this["utils"]["bon"]["decode"](_0x1c4c8e);
            ((_0x3b6bb7["decodedBody"] = _0x325a3c),
              _0x3b6bb7["_raw"] &&
                (_0x3b6bb7["_raw"]["decodedBody"] = _0x325a3c));
          }
        }
      } catch (_0xa93209) {}
    if (
      (this["messageListener"] && this["messageListener"](_0x3b6bb7),
      void 0x0 !== _0x3b6bb7["resp"] && this["promises"][_0x3b6bb7["resp"]])
    ) {
      const _0xa16b2e = this["promises"][_0x3b6bb7["resp"]];
      delete this["promises"][_0x3b6bb7["resp"]];
      const _0x197a93 =
        void 0x0 !== _0x3b6bb7["rawData"]
          ? _0x3b6bb7["rawData"]
          : void 0x0 !== _0x3b6bb7["decodedBody"]
            ? _0x3b6bb7["decodedBody"]
            : _0x3b6bb7["body"];
      if (0x0 === _0x3b6bb7["code"] || void 0x0 === _0x3b6bb7["code"])
        _0xa16b2e["resolve"](_0x197a93 || _0x3b6bb7);
      else {
        const _0x41f1a9 = new Error("服务器错误：" + _0x3b6bb7["code"]);
        ((_0x41f1a9["code"] = _0x3b6bb7["code"]),
          (_0x41f1a9["cmd"] = _0x3b6bb7["cmd"]),
          (_0x41f1a9["response"] = _0x197a93 || _0x3b6bb7),
          _0xa16b2e["reject"](_0x41f1a9));
      }
    } else this["_handleLegacyResponse"](_0x3b6bb7);
  }
  ["_handleLegacyResponse"](_0x377292) {
    const _0x1f71e2 = null == _0x377292 ? void 0x0 : _0x377292["cmd"];
    if (!_0x1f71e2) return;
    const _0x3f589a = {
      war_enterbattlefieldresp: "war_enterbattlefield",
      war_getbattlefieldinforesp: "war_getbattlefieldinfo",
      war_teamsetbattleteamresp: "war_teamsetbattleteam",
      war_setbattleteamresp: "war_setbattleteam",
      war_startmarchresp: "war_startmarch",
      war_speedupresp: "war_speedup",
      war_startattackbuildingresp: "war_startattackbuilding",
      war_startbattleresp: "war_startbattle",
    }["string" == typeof _0x1f71e2 ? _0x1f71e2["toLowerCase"]() : _0x1f71e2];
    if (_0x3f589a) {
      for (const [_0x4d31d7, _0x3f2fb8] of Object["entries"](this["promises"]))
        if (_0x3f2fb8["originalCmd"] === _0x3f589a) {
          delete this["promises"][_0x4d31d7];
          const _0x5637c3 =
            void 0x0 !== _0x377292["rawData"]
              ? _0x377292["rawData"]
              : void 0x0 !== _0x377292["decodedBody"]
                ? _0x377292["decodedBody"]
                : _0x377292["body"];
          if (0x0 === _0x377292["code"] || void 0x0 === _0x377292["code"])
            _0x3f2fb8["resolve"](_0x5637c3 || _0x377292);
          else {
            const _0x24455e = new Error("服务器错误：" + _0x377292["code"]);
            ((_0x24455e["code"] = _0x377292["code"]),
              (_0x24455e["cmd"] = _0x377292["cmd"]),
              (_0x24455e["response"] = _0x5637c3 || _0x377292),
              _0x3f2fb8["reject"](_0x24455e));
          }
          break;
        }
    }
  }
  ["_shouldDecodeBody"](_0xd49018) {
    if (!_0xd49018) return !0x1;
    if (_0xd49018 instanceof Uint8Array || Array["isArray"](_0xd49018))
      return !0x0;
    if ("object" == typeof _0xd49018 && _0xd49018["constructor"] === Object) {
      const _0x266e6c = Object["keys"](_0xd49018);
      return (
        _0x266e6c["length"] > 0x0 &&
        _0x266e6c["every"]((_0x572605) => !isNaN(parseInt(_0x572605)))
      );
    }
    return !0x1;
  }
  ["_convertToUint8Array"](_0x2352f6) {
    if (!_0x2352f6) return null;
    if (_0x2352f6 instanceof Uint8Array) return _0x2352f6;
    if (Array["isArray"](_0x2352f6)) return new Uint8Array(_0x2352f6);
    if ("object" == typeof _0x2352f6 && _0x2352f6["constructor"] === Object) {
      const _0xe85e5f = Object["keys"](_0x2352f6)
        ["map"]((_0x5086eb) => parseInt(_0x5086eb))
        ["sort"]((_0x552eef, _0x2e88a9) => _0x552eef - _0x2e88a9);
      if (_0xe85e5f["length"] > 0x0) {
        const _0x180cbb = Math["max"](..._0xe85e5f),
          _0x3c0a68 = new Array(_0x180cbb + 0x1)["fill"](0x0);
        for (const [_0x365d55, _0xb534f6] of Object["entries"](_0x2352f6)) {
          const _0x31f9b7 = parseInt(_0x365d55);
          isNaN(_0x31f9b7) ||
            "number" != typeof _0xb534f6 ||
            (_0x3c0a68[_0x31f9b7] = _0xb534f6);
        }
        return new Uint8Array(_0x3c0a68);
      }
    }
    return null;
  }
  async ["sendWithPromise"](_0xdc7592, _0x14c43f = {}, _0x3df59b = 0x1f40) {
    return new Promise((_0x261a46, _0x3a433a) => {
      if (!this["connected"] && !this["socket"])
        return _0x3a433a(new Error("盐场 WS 连接已关闭"));
      const _0x7ed884 = ++this["seq"];
      ((this["promises"][_0x7ed884] = {
        resolve: _0x261a46,
        reject: _0x3a433a,
        originalCmd: _0xdc7592,
      }),
        setTimeout(() => {
          (delete this["promises"][_0x7ed884],
            _0x3a433a(
              new Error("请求超时：" + _0xdc7592 + "\x20(" + _0x3df59b + "ms)"),
            ));
        }, _0x3df59b),
        this["send"](_0xdc7592, _0x14c43f, {
          seq: _0x7ed884,
          onSent: () => {},
        }));
    });
  }
  ["send"](_0x4ae706, _0x674baa = {}, _0x4a4d4f = {}) {
    const _0x46128 = {
      cmd: _0x4ae706,
      params: _0x674baa,
      seq: void 0x0 !== _0x4a4d4f["seq"] ? _0x4a4d4f["seq"] : ++this["seq"],
      hint: this["battlefieldId"],
      sleep: _0x4a4d4f["sleep"] || 0x0,
      onSent: _0x4a4d4f["onSent"],
    };
    this["sendQueue"]["push"](_0x46128);
  }
  ["_processQueueLoop"]() {
    (this["sendQueueTimer"] && clearInterval(this["sendQueueTimer"]),
      (this["sendQueueTimer"] = setInterval(() => {
        var _0x37f119, _0x5cafda, _0x55b7b2;
        if (
          !this["sendQueue"]["length"] ||
          !this["connected"] ||
          !this["socket"]
        )
          return;
        const _0x26fc1b = this["sendQueue"]["shift"]();
        if (_0x26fc1b)
          try {
            const _0x543306 = l(r({}, _0x26fc1b["params"]), {
                battlefieldId: this["battlefieldId"],
              }),
              _0x40a806 = (
                null ==
                (_0x5cafda =
                  null == (_0x37f119 = this["utils"])
                    ? void 0x0
                    : _0x37f119["bon"])
                  ? void 0x0
                  : _0x5cafda["encode"]
              )
                ? this["utils"]["bon"]["encode"](_0x543306)
                : _0x543306,
              _0xfa2945 = {
                cmd: _0x26fc1b["cmd"],
                ack: this["ack"],
                seq: _0x26fc1b["seq"],
                hint: _0x26fc1b["hint"],
                time: Date["now"](),
                body: _0x40a806,
              };
            let _0x2cfaf3;
            ((_0x2cfaf3 =
              (null == (_0x55b7b2 = this["utils"])
                ? void 0x0
                : _0x55b7b2["encode"]) && this["enc"]
                ? this["utils"]["encode"](_0xfa2945, this["enc"])
                : JSON["stringify"](_0xfa2945)),
              this["socket"]["send"](_0x2cfaf3));
          } catch (_0x3c59bd) {
            console["error"](
              "[SaltField] 发送失败：" + _0x26fc1b["cmd"],
              _0x3c59bd["message"],
            );
          }
      }, 0x32)));
  }
  ["_sendHeartbeat"]() {
    var _0x5b014a, _0x49bb76;
    if (
      !this["connected"] ||
      (null == (_0x5b014a = this["socket"])
        ? void 0x0
        : _0x5b014a["readyState"]) !== WebSocket["OPEN"]
    )
      return;
    const _0x559ce1 = {
      cmd: "war_ping",
      ack: this["ack"],
      seq: 0x0,
      hint: this["battlefieldId"],
      time: Date["now"](),
      body: {
        battlefieldId: this["battlefieldId"],
      },
    };
    try {
      const _0x7f8449 =
        (null == (_0x49bb76 = this["utils"])
          ? void 0x0
          : _0x49bb76["encode"]) && this["enc"]
          ? this["utils"]["encode"](_0x559ce1, this["enc"])
          : JSON["stringify"](_0x559ce1);
      this["socket"]["send"](_0x7f8449);
    } catch (_0x1524c0) {
      console["error"]("[SaltField] 心跳发送失败:", _0x1524c0["message"]);
    }
  }
  ["_setupHeartbeat"]() {
    (this["heartbeatTimer"] && clearInterval(this["heartbeatTimer"]),
      (this["heartbeatDelayTimer"] = setTimeout(
        () => this["_sendHeartbeat"](),
        0xbb8,
      )),
      (this["heartbeatTimer"] = setInterval(
        () => this["_sendHeartbeat"](),
        this["heartbeatInterval"],
      )));
  }
  ["_clearTimers"]() {
    (this["heartbeatDelayTimer"] &&
      (clearTimeout(this["heartbeatDelayTimer"]),
      (this["heartbeatDelayTimer"] = null)),
      this["heartbeatTimer"] &&
        (clearInterval(this["heartbeatTimer"]),
        (this["heartbeatTimer"] = null)),
      this["sendQueueTimer"] &&
        (clearInterval(this["sendQueueTimer"]),
        (this["sendQueueTimer"] = null)));
  }
  ["disconnect"]() {
    if (((this["manualClose"] = !0x0), this["socket"])) {
      try {
        this["socket"]["close"]();
      } catch (_0x1b8a8e) {}
      this["socket"] = null;
    }
    ((this["connected"] = !0x1), this["_clearTimers"]());
  }
  async ["reconnect"]() {
    if (this["manualClose"]) return !0x1;
    if (this["reconnecting"]) return !0x1;
    this["reconnecting"] = !0x0;
    try {
      return (await this["init"](), this["connected"]);
    } catch (_0x9118bd) {
      return !0x1;
    } finally {
      this["reconnecting"] = !0x1;
    }
  }
}
function S(_0x510ed8, _0x960c8c) {
  if (_0x510ed8 && "object" == typeof _0x510ed8) {
    if (void 0x0 !== _0x510ed8[_0x960c8c]) return _0x510ed8[_0x960c8c];
    for (const _0xbdc90 of [
      "rawData",
      "_rawData",
      "decodedBody",
      "body",
      "data",
    ]) {
      const _0x2576b3 = _0x510ed8[_0xbdc90];
      if (
        _0x2576b3 &&
        "object" == typeof _0x2576b3 &&
        void 0x0 !== _0x2576b3[_0x960c8c]
      )
        return _0x2576b3[_0x960c8c];
    }
  }
}
function D(_0x3b6574) {
  return _0x3b6574
    ? _0x3b6574 instanceof Map
      ? [..._0x3b6574["entries"]()]
      : Array["isArray"](_0x3b6574)
        ? _0x3b6574["map"]((_0x3ea9d0, _0x56d993) => {
            var _0x439a6d;
            return _0x3ea9d0 && "object" == typeof _0x3ea9d0
              ? "string" == typeof _0x3ea9d0["id"] &&
                _0x3ea9d0["id"]["includes"]("_")
                ? [_0x3ea9d0["id"], _0x3ea9d0]
                : Number["isFinite"](Number(_0x3ea9d0["x"])) &&
                    Number["isFinite"](Number(_0x3ea9d0["y"]))
                  ? [_0x3ea9d0["x"] + "_" + _0x3ea9d0["y"], _0x3ea9d0]
                  : [
                      String(
                        null != (_0x439a6d = _0x3ea9d0["id"])
                          ? _0x439a6d
                          : _0x56d993,
                      ),
                      _0x3ea9d0,
                    ]
              : [String(_0x56d993), _0x3ea9d0];
          })
        : "object" == typeof _0x3b6574
          ? Object["entries"](_0x3b6574)
          : []
    : [];
}
function T(_0x51f1b1, _0x4551ad) {
  var _0x5e83c2, _0x47b9f0;
  if (_0x4551ad && "object" == typeof _0x4551ad) {
    for (const [_0x35e07a, _0x332d8b] of D(_0x4551ad["buildingData"]))
      null === _0x332d8b
        ? delete _0x51f1b1["buildingData"][_0x35e07a]
        : _0x332d8b &&
          "object" == typeof _0x332d8b &&
          (_0x51f1b1["buildingData"][_0x35e07a] = _0x332d8b);
    for (const [_0x39e629, _0x14c600] of D(_0x4551ad["roles"])) {
      const _0xc4996b =
        _0x14c600 &&
        null !=
          (null != (_0x5e83c2 = _0x14c600["roleCodeId"])
            ? _0x5e83c2
            : _0x14c600["codeId"])
          ? String(
              null != (_0x47b9f0 = _0x14c600["roleCodeId"])
                ? _0x47b9f0
                : _0x14c600["codeId"],
            )
          : String(_0x39e629);
      null === _0x14c600
        ? delete _0x51f1b1["roles"][_0xc4996b]
        : _0x14c600 &&
          "object" == typeof _0x14c600 &&
          (_0x51f1b1["roles"][_0xc4996b] = r(
            r({}, _0x51f1b1["roles"][_0xc4996b] || {}),
            _0x14c600,
          ));
    }
    for (const [_0x39440c, _0x12601b] of D(_0x4551ad["marches"]))
      null === _0x12601b
        ? delete _0x51f1b1["marches"][_0x39440c]
        : _0x12601b &&
          "object" == typeof _0x12601b &&
          (_0x51f1b1["marches"][_0x39440c] = _0x12601b);
  }
}
function I(_0x103ab8, _0x6422) {
  var _0x491206, _0x981ddc, _0x5c3009;
  if (!_0x6422 || "object" != typeof _0x6422) return;
  const _0x29364a =
    null != (_0x491206 = _0x6422["tileData"]) ? _0x491206 : _0x6422;
  for (const [_0x46d1a0, _0x57fa76] of D(_0x29364a)) {
    if (!_0x57fa76 || "object" != typeof _0x57fa76) continue;
    for (const [_0x3d2bcd, _0x24d9f0] of D(_0x57fa76["marches"]))
      _0x24d9f0 &&
        "object" == typeof _0x24d9f0 &&
        (_0x103ab8["marches"][
          String(null != (_0x981ddc = _0x24d9f0["id"]) ? _0x981ddc : _0x3d2bcd)
        ] = _0x24d9f0);
    const _0x22bafe =
      null != (_0x5c3009 = _0x57fa76["building"])
        ? _0x5c3009
        : _0x57fa76["buildingData"];
    _0x22bafe && "object" == typeof _0x22bafe
      ? (_0x103ab8["buildingData"][_0x46d1a0] = r(
          r({}, _0x103ab8["buildingData"][_0x46d1a0] || {}),
          _0x22bafe,
        ))
      : (void 0x0 === _0x57fa76["belongsLegionId"] &&
          void 0x0 === _0x57fa76["belongsLegion"] &&
          void 0x0 === _0x57fa76["hP"] &&
          void 0x0 === _0x57fa76["type"]) ||
        (_0x103ab8["buildingData"][_0x46d1a0] = r(
          r({}, _0x103ab8["buildingData"][_0x46d1a0] || {}),
          _0x57fa76,
        ));
  }
}
function k(_0x1871d9, _0x39e776) {
  return (
    _0x1871d9 % 0x2 == 0x0
      ? [
          {
            q: -0x1,
            r: 0x0,
          },
          {
            q: -0x1,
            r: -0x1,
          },
          {
            q: 0x0,
            r: 0x1,
          },
          {
            q: 0x0,
            r: -0x1,
          },
          {
            q: 0x1,
            r: 0x0,
          },
          {
            q: 0x1,
            r: -0x1,
          },
        ]
      : [
          {
            q: -0x1,
            r: 0x0,
          },
          {
            q: -0x1,
            r: 0x1,
          },
          {
            q: 0x0,
            r: 0x1,
          },
          {
            q: 0x0,
            r: -0x1,
          },
          {
            q: 0x1,
            r: 0x0,
          },
          {
            q: 0x1,
            r: 0x1,
          },
        ]
  )["map"]((_0x1d9d0e) => ({
    x: _0x1871d9 + _0x1d9d0e["q"],
    y: _0x39e776 + _0x1d9d0e["r"],
  }));
}
const L = new Set([0x1, 0x2, 0x3, 0x4, 0x5, 0x6]),
  x = new Set([0x4, 0x5]),
  _ = new Set(_0x2cda59["map"]((_0x4ca863) => _0x4ca863["id"])),
  N = new Map(
    _0x2cda59["map"]((_0x1d836f) => [
      _0x1d836f["id"],
      Number(_0x1d836f["type"]),
    ]),
  );
function j(_0x1ae16a, _0x1b7e4c) {
  return _0x1ae16a + "_" + _0x1b7e4c;
}
function F(_0x2a3b80) {
  for (const _0x5e3640 of [
    "legionId",
    "legionID",
    "belongLegionId",
    "belongsLegionId",
    "guildId",
  ]) {
    const _0x5e81db = Number(
      null == _0x2a3b80 ? void 0x0 : _0x2a3b80[_0x5e3640],
    );
    if (Number["isFinite"](_0x5e81db) && _0x5e81db > 0x0) return _0x5e81db;
  }
  return null;
}
function M(_0x52a37b) {
  var _0x2dfa30,
    _0x43da72,
    _0x56db4e,
    _0x3803fc,
    _0x8645c7,
    _0x5adc4c,
    _0x4eb0d4;
  const _0x4f5ae7 =
    null !=
    (_0x56db4e =
      null !=
      (_0x43da72 =
        null !=
        (_0x2dfa30 = null == _0x52a37b ? void 0x0 : _0x52a37b["position"])
          ? _0x2dfa30
          : null == _0x52a37b
            ? void 0x0
            : _0x52a37b["pos"])
        ? _0x43da72
        : null == _0x52a37b
          ? void 0x0
          : _0x52a37b["tile"])
      ? _0x56db4e
      : null == _0x52a37b
        ? void 0x0
        : _0x52a37b["currentPosition"];
  if (null == _0x4f5ae7) return null;
  let _0x4bed7f, _0x13e0b5;
  if (Array["isArray"](_0x4f5ae7)) [_0x4bed7f, _0x13e0b5] = _0x4f5ae7;
  else {
    if ("string" == typeof _0x4f5ae7) {
      const _0x5e65e2 = _0x4f5ae7["split"](/[_,:]/);
      _0x5e65e2["length"] >= 0x2 && ([_0x4bed7f, _0x13e0b5] = _0x5e65e2);
    } else
      "object" == typeof _0x4f5ae7 &&
        ((_0x4bed7f =
          null !=
          (_0x8645c7 =
            null != (_0x3803fc = _0x4f5ae7["x"]) ? _0x3803fc : _0x4f5ae7["X"])
            ? _0x8645c7
            : _0x4f5ae7["posX"]),
        (_0x13e0b5 =
          null !=
          (_0x4eb0d4 =
            null != (_0x5adc4c = _0x4f5ae7["y"]) ? _0x5adc4c : _0x4f5ae7["Y"])
            ? _0x4eb0d4
            : _0x4f5ae7["posY"]));
  }
  return (
    (_0x4bed7f = Number(_0x4bed7f)),
    (_0x13e0b5 = Number(_0x13e0b5)),
    Number["isFinite"](_0x4bed7f) && Number["isFinite"](_0x13e0b5)
      ? {
          x: _0x4bed7f,
          y: _0x13e0b5,
        }
      : null
  );
}
function O(_0x378d21, _0x322717, _0x4a6ae4, _0xd217ee) {
  for (const [_0xa0ced0, _0x395932] of Object["entries"](
    _0x322717["roles"] || {},
  )) {
    if (String(_0xa0ced0) === String(_0x4a6ae4)) continue;
    if (g(_0x395932)) continue;
    if (f(_0x395932)) continue;
    const _0x17983c = M(_0x395932);
    if (!_0x17983c || j(_0x17983c["x"], _0x17983c["y"]) !== _0x378d21) continue;
    const _0xbb4cb2 = F(_0x395932);
    if (null != _0xbb4cb2 && (null == _0xd217ee || _0xbb4cb2 !== _0xd217ee))
      return {
        codeId: _0xa0ced0,
        role: _0x395932,
        legionId: _0xbb4cb2,
      };
  }
  return null;
}
function E(_0xb70734) {
  const _0x349605 = Number(null == _0xb70734 ? void 0x0 : _0xb70734["code"]),
    _0x19cd63 = {
      0x30d54: "参数错误(200020)：目标格/参数服务端不接受",
      0x2dc706: "战斗状态不满足(3000070)",
      0x2dc864: "状态提示(3000420)",
      0x2dc8be: "队伍状态不满足(3000510)",
      0x2dc8f0: "布阵状态未就绪(3000560)：需重新布阵",
    };
  return _0x19cd63[_0x349605] ? "\x20" + _0x19cd63[_0x349605] : "";
}
function A(_0x43c284, _0x11d99a) {
  var _0xc42a68, _0xa83b52, _0x478af3, _0x24fa46;
  const _0x4a9770 = _0x11d99a["buildingData"][_0x43c284] || null,
    _0x46cf60 = Number(
      null !=
        (_0xa83b52 =
          null != (_0xc42a68 = null == _0x4a9770 ? void 0x0 : _0x4a9770["type"])
            ? _0xc42a68
            : N["get"](_0x43c284))
        ? _0xa83b52
        : 0x9,
    ),
    _0x330c58 =
      null !=
      (_0x24fa46 =
        null !=
        (_0x478af3 =
          null == _0x4a9770 ? void 0x0 : _0x4a9770["belongsLegionId"])
          ? _0x478af3
          : null == _0x4a9770
            ? void 0x0
            : _0x4a9770["belongLegionId"])
        ? _0x24fa46
        : null == _0x4a9770
          ? void 0x0
          : _0x4a9770["legionId"],
    _0x857724 = Number(_0x330c58);
  return {
    key: _0x43c284,
    exists: _["has"](_0x43c284) || !!_0x4a9770,
    type: _0x46cf60,
    hasBuilding: Number["isFinite"](_0x46cf60) && L["has"](_0x46cf60),
    isHome: x["has"](_0x46cf60),
    belongsLegionId: Number["isFinite"](_0x857724) ? _0x857724 : -0x1,
    real: _0x4a9770,
  };
}
function C(_0x116a50, _0x72fbd5) {
  return (
    null != _0x72fbd5 &&
    _0x116a50["hasBuilding"] &&
    _0x116a50["belongsLegionId"] === _0x72fbd5
  );
}
function R(_0x2d81c6, _0x203555, _0x623c9) {
  var _0xcf98b6;
  return !(
    !_0x2d81c6["exists"] ||
    !_0x2d81c6["hasBuilding"] ||
    _0x2d81c6["isHome"] ||
    C(_0x2d81c6, _0x623c9["myLegionId"]) ||
    (function (_0x539ded, _0x466012, _0x176491, _0xf9b386) {
      if (null == _0x176491) return !0x1;
      for (const [_0x541612, _0x412fe1] of Object["entries"](
        _0x466012["roles"],
      ))
        if (
          _0x541612 !== _0xf9b386 &&
          (null == _0x412fe1 ? void 0x0 : _0x412fe1["position"]) &&
          j(_0x412fe1["position"]["x"], _0x412fe1["position"]["y"]) ===
            _0x539ded &&
          F(_0x412fe1) === _0x176491
        )
          return !0x0;
      return !0x1;
    })(
      _0x2d81c6["key"],
      _0x203555,
      _0x623c9["myLegionId"],
      _0x623c9["myCodeId"],
    ) ||
    (_0x623c9["myKey"] && _0x2d81c6["key"] === _0x623c9["myKey"]) ||
    (null == (_0xcf98b6 = _0x623c9["blocked"])
      ? void 0x0
      : _0xcf98b6["has"](_0x2d81c6["key"]))
  );
}
function B(_0x1827e9, _0x2fa294, _0x4922a0) {
  if (_0x4922a0["allowBusyKey"] === _0x1827e9) return !0x1;
  for (const [_0x802963, _0x2588dd] of Object["entries"](
    _0x2fa294["roles"] || {},
  ))
    if (
      _0x802963 !== _0x4922a0["myCodeId"] &&
      (null == _0x2588dd ? void 0x0 : _0x2588dd["position"]) &&
      j(_0x2588dd["position"]["x"], _0x2588dd["position"]["y"]) === _0x1827e9
    )
      return !0x0;
  for (const _0x2a5d39 of Object["values"](_0x2fa294["marches"] || {}))
    if (
      _0x2a5d39 &&
      _0x2a5d39["to"] &&
      String(_0x2a5d39["codeId"]) !== String(_0x4922a0["myCodeId"]) &&
      j(_0x2a5d39["to"]["x"], _0x2a5d39["to"]["y"]) === _0x1827e9
    )
      return !0x0;
  return !0x1;
}
function P(_0xa2f670, _0x172e0b) {
  return 0x9 === _0xa2f670["type"] || C(_0xa2f670, _0x172e0b);
}
function q(_0x2975f8, _0x398876, _0x3d5c13) {
  const _0x1b114b = new Set([_0x2975f8]),
    _0x49c160 = new Map();
  let _0x369172 = [_0x2975f8];
  for (
    let _0x3cec3f = 0x0;
    _0x3cec3f < 0x28 && _0x369172["length"] > 0x0;
    _0x3cec3f++
  ) {
    const _0xae4d88 = [];
    for (const _0x1a32bb of _0x369172) {
      const [_0x1c079e, _0x2d5226] = String(_0x1a32bb)
        ["split"]("_")
        ["map"](Number);
      if (Number["isFinite"](_0x1c079e) && Number["isFinite"](_0x2d5226))
        for (const _0x37b4ec of k(_0x1c079e, _0x2d5226)) {
          const _0x2b240a = j(_0x37b4ec["x"], _0x37b4ec["y"]),
            _0x215976 = A(_0x2b240a, _0x398876);
          _0x215976["exists"] &&
            ((_0x215976["hasBuilding"] &&
              (_0x49c160["has"](_0x2b240a) ||
                _0x49c160["set"](_0x2b240a, {
                  tile: _0x215976,
                  dist: _0x3cec3f + 0x1,
                }),
              !P(_0x215976, _0x3d5c13["myLegionId"]))) ||
              _0x1b114b["has"](_0x2b240a) ||
              (_0x1b114b["add"](_0x2b240a), _0xae4d88["push"](_0x2b240a)));
        }
    }
    _0x369172 = _0xae4d88;
  }
  return _0x49c160;
}
function W(_0x2b4db4, _0x480580) {
  return "saltPanFirst" === _0x480580
    ? 0x6 === _0x2b4db4["type"]
      ? 0x0
      : 0x3 === _0x2b4db4["type"]
        ? 0x1
        : 0x2 === _0x2b4db4["type"]
          ? 0x2
          : 0x1 === _0x2b4db4["type"]
            ? 0x3
            : 0x4
    : "enemyFirst" === _0x480580
      ? _0x2b4db4["busy"]
        ? 0x0
        : 0x1
      : 0x0;
}
function U(_0x2e5ada, _0x21ec93, _0x165525) {
  const _0x2b81a8 = q(j(_0x21ec93["x"], _0x21ec93["y"]), _0x2e5ada, _0x165525),
    _0x1d9299 = [];
  for (const { tile: _0x658b9d, dist: _0xaaf95c } of _0x2b81a8["values"]()) {
    if (!R(_0x658b9d, _0x2e5ada, _0x165525)) continue;
    const [_0x473937, _0x3ae2e3] = _0x658b9d["key"]
      ["split"]("_")
      ["map"](Number);
    _0x1d9299["push"](
      l(r({}, _0x658b9d), {
        x: _0x473937,
        y: _0x3ae2e3,
        dist: _0xaaf95c,
        busy: B(_0x658b9d["key"], _0x2e5ada, _0x165525),
      }),
    );
  }
  const _0x1c78dc = "enemyFirst" === _0x165525["targetPriority"] ? 0x0 : 0.5;
  return (
    _0x1d9299["sort"]((_0x413a91, _0x15a7ed) => {
      const _0x460e7a =
          W(_0x413a91, _0x165525["targetPriority"]) +
          (_0x413a91["busy"] ? _0x1c78dc : 0x0),
        _0x3ff0de =
          W(_0x15a7ed, _0x165525["targetPriority"]) +
          (_0x15a7ed["busy"] ? _0x1c78dc : 0x0);
      return _0x460e7a !== _0x3ff0de
        ? _0x460e7a - _0x3ff0de
        : _0x413a91["dist"] - _0x15a7ed["dist"];
    }),
    _0x1d9299
  );
}
function G(_0x1d9c5b, _0xae4d3b, _0x599a08) {
  let _0xeab4d = null;
  for (const [_0x4eb082, _0x1a0eb6] of Object["entries"](
    _0x1d9c5b["marches"] || {},
  )) {
    if (!_0x1a0eb6 || !_0x1a0eb6["to"]) continue;
    if (String(_0x1a0eb6["codeId"]) !== String(_0xae4d3b)) continue;
    const _0x1de0e5 = l(r({}, _0x1a0eb6), {
      marchId: _0x4eb082,
      endTime: Number(_0x1a0eb6["endTime"]) || 0x0,
    });
    if (
      _0x599a08 &&
      Number(_0x1a0eb6["to"]["x"]) === Number(_0x599a08["x"]) &&
      Number(_0x1a0eb6["to"]["y"]) === Number(_0x599a08["y"])
    )
      return _0x1de0e5;
    _0xeab4d || (_0xeab4d = _0x1de0e5);
  }
  return _0xeab4d;
}
function Q() {
  return isNowInLegionWarTime();
}
function H(_0x20f7a2) {
  const _0x30425b = new Date(_0x20f7a2);
  return (
    String(_0x30425b["getHours"]())["padStart"](0x2, "0") +
    ":" +
    String(_0x30425b["getMinutes"]())["padStart"](0x2, "0")
  );
}
function z(_0x434409) {
  const _0x5a6ded = Math["max"](0x0, Math["floor"](_0x434409 / 0x3e8));
  return _0x5a6ded >= 0x3c
    ? Math["floor"](_0x5a6ded / 0x3c) +
        "分" +
        String(_0x5a6ded % 0x3c)["padStart"](0x2, "0") +
        "秒"
    : _0x5a6ded + "秒";
}
function K(_0x5d150e) {
  const {
      tokenStore: _0x456c11,
      addLog: _0x5d74fa,
      tokenStatus: _0x46fa20,
      selectedTokens: _0x2800df,
      isRunning: _0x3432f4,
      shouldStop: _0x3e65a0,
      batchSettings: _0xdab757,
      safeDelay: _0x47ec2b,
      getModuleDelay: _0x567a8d,
      ensureConnection: _0x352676,
      releaseConnectionSlot: _0x344bc9,
    } = _0x5d150e,
    _0x5714d8 = "function" == typeof _0x344bc9 ? _0x344bc9 : null,
    _0x3b5226 = async (_0x1d1844, _0x2b6b15, _0x55c6ad, _0x37a94a = {}) => {
      var _0x62be13;
      const {
          timeout: _0x11ca79 = _0xdab757["defaultCommandTimeout"] || 0x1388,
          retries: _0x304620 = void 0x0 !== _0xdab757["defaultRetryCount"]
            ? _0xdab757["defaultRetryCount"]
            : 0x2,
          noRetryErrors: _0x23c253 = [
            "400000",
            "200020",
            "3000560",
            "3100080",
            "3100030",
          ],
        } = _0x37a94a,
        _0x1e1e52 = _0x456c11["getWebSocketClient"](_0x1d1844);
      let _0x5312f5;
      (_0x1e1e52 && _0x1e1e52["connected"]) ||
        (_0x5d74fa({
          time: new Date()["toLocaleTimeString"](),
          message:
            ((null ==
            (_0x62be13 = _0x456c11["gameTokens"]["find"](
              (_0x57b6c0) => _0x57b6c0["id"] === _0x1d1844,
            ))
              ? void 0x0
              : _0x62be13["name"]) || _0x1d1844) + " 未连接，正在建立...",
          type: "warning",
        }),
        "function" == typeof _0x352676
          ? await _0x352676(_0x1d1844, 0x1)
          : await _0x456c11["createWebSocketConnection"](_0x1d1844),
        await _0x47ec2b(0x7d0));
      for (let _0x10e24f = 0x0; _0x10e24f <= _0x304620; _0x10e24f++) {
        if (_0x3e65a0["value"]) throw new Error("用户取消操作");
        try {
          return await _0x456c11["sendMessageWithPromise"](
            _0x1d1844,
            _0x2b6b15,
            _0x55c6ad,
            _0x11ca79,
          );
        } catch (_0x20348b) {
          _0x5312f5 = _0x20348b;
          const _0x159cd9 = _0x20348b["message"] || "";
          if (
            _0x23c253["some"]((_0x3dc2ed) => _0x159cd9["includes"](_0x3dc2ed))
          )
            throw _0x20348b;
          if (_0x10e24f >= _0x304620) throw _0x20348b;
          await _0x47ec2b(0x3e8);
        }
      }
      throw _0x5312f5;
    },
    _0x4bc73d = async (_0x417eb0, _0x352a2f, _0x2ddd55 = {}) => {
      var _0x5af705,
        _0x2612cb,
        _0x1db8a8,
        _0xe7612c,
        _0x59280a,
        _0x3a2cd9,
        _0x3b4bb1,
        _0x5e88a9,
        _0x4a2a7a,
        _0x217715,
        _0x390c44,
        _0x361fed,
        _0x1f5401,
        _0x5e7067,
        _0x2971ff,
        _0x4057a1,
        _0x267ce8,
        _0x1765a9,
        _0x30dedd,
        _0x36ee37;
      const _0x559d95 = _0x2ddd55["stopRef"] || _0x3e65a0,
        _0xe6dd1d = !0x0 === _0x2ddd55["skipWindowCheck"],
        _0x470fc7 = _0x352a2f["name"] || _0x417eb0["slice"](0x0, 0x8);
      _0x5d74fa({
        time: new Date()["toLocaleTimeString"](),
        message: "=== ⛏️ 盐场刨地：" + _0x470fc7 + " ===",
        type: "info",
      });
      let _0x394c9a = null;
      try {
        let _0x1371b8, _0x567407;
        _0x5d74fa({
          time: new Date()["toLocaleTimeString"](),
          message: _0x470fc7 + " 获取盐场入口...",
          type: "info",
        });
        for (let _0xbd344 = 0x1; _0xbd344 <= 0x4; _0xbd344++)
          try {
            const _0x196aab = await _0x3b5226(
              _0x417eb0,
              "legion_getbattlefield",
              {},
              {
                retries: 0x0,
                noRetryErrors: [],
              },
            );
            if (_0x196aab && _0x196aab["info"]) {
              ((_0x1371b8 = _0x196aab["info"]["sid"]),
                (_0x567407 = _0x196aab["info"]["battlefieldId"]),
                _0x5d74fa({
                  time: new Date()["toLocaleTimeString"](),
                  message:
                    _0x470fc7 +
                    " ✅ 战场ID: " +
                    _0x567407 +
                    ", 服务器: " +
                    _0x1371b8,
                  type: "success",
                }));
              break;
            }
          } catch (_0x5442f6) {
            if (_0xbd344 >= 0x4)
              throw new Error(
                "获取战场失败(第" + _0xbd344 + "次): " + _0x5442f6["message"],
              );
            (_0x5d74fa({
              time: new Date()["toLocaleTimeString"](),
              message:
                _0x470fc7 +
                " ⚠ 第" +
                _0xbd344 +
                "次尝试失败: " +
                _0x5442f6["message"],
              type: "warning",
            }),
              await _0x47ec2b(0x9c4));
          }
        if (!_0x1371b8 || !_0x567407) throw new Error("无法获取盐场入口");
        (_0x5d74fa({
          time: new Date()["toLocaleTimeString"](),
          message: _0x470fc7 + " 连接盐场服务器...",
          type: "info",
        }),
          (_0x394c9a = new v(_0x352a2f["token"], _0x1371b8, _0x567407)),
          await _0x394c9a["init"]());
        const _0x12c41b = (..._0x2ace85) =>
            _0x394c9a["sendWithPromise"](..._0x2ace85),
          _0x537f34 = {
            roles: {},
            buildingData: {},
            marches: {},
          };
        let _0x3dcf2c = null,
          _0x194b0c = null;
        _0x394c9a["messageListener"] = (_0x4fff14) => {
          const _0x459d98 = S(_0x4fff14, "battlefield");
          _0x459d98 && T(_0x537f34, _0x459d98);
          const _0x59956e = S(_0x4fff14, "bf");
          _0x59956e &&
            (function (_0x1422b3, _0xbbac9b) {
              var _0x5746e8, _0x5b4d47, _0x405ca9, _0x29b3e7;
              if (!_0xbbac9b || "object" != typeof _0xbbac9b) return;
              const _0x3724a1 =
                null != (_0x5746e8 = _0xbbac9b["roles"])
                  ? _0x5746e8
                  : _0xbbac9b;
              for (const [_0x8d66f9, _0x5bdefd] of D(_0x3724a1)) {
                if (!_0x5bdefd || "object" != typeof _0x5bdefd) continue;
                if (Array["isArray"](_0x5bdefd)) continue;
                const _0x5c81fc = String(
                  null !=
                    (_0x29b3e7 =
                      null !=
                      (_0x405ca9 =
                        null != (_0x5b4d47 = _0x5bdefd["roleCodeId"])
                          ? _0x5b4d47
                          : _0x5bdefd["codeId"])
                        ? _0x405ca9
                        : _0x5bdefd["id"])
                    ? _0x29b3e7
                    : _0x8d66f9,
                );
                _0x1422b3["roles"][_0x5c81fc] = r(
                  r({}, _0x1422b3["roles"][_0x5c81fc] || {}),
                  _0x5bdefd,
                );
              }
            })(_0x537f34, _0x59956e);
          const _0x24f3af = S(_0x4fff14, "tileDataMap");
          _0x24f3af && I(_0x537f34, _0x24f3af);
          const _0x41bb7d = S(_0x4fff14, "marchRoleId");
          null != _0x41bb7d &&
            (function (_0x376600, _0x3ef4b5, _0x56cc6b) {
              var _0x55e4f7;
              const _0x149dc3 = String(_0x3ef4b5),
                _0x54c9b9 = _0x376600["roles"][_0x149dc3] || {};
              let _0x31d92c = _0x54c9b9["position"];
              if ("string" == typeof _0x56cc6b && _0x56cc6b["includes"]("_")) {
                const [_0x267978, _0x43e0ea] =
                  _0x56cc6b["split"]("_")["map"](Number);
                Number["isFinite"](_0x267978) &&
                  Number["isFinite"](_0x43e0ea) &&
                  (_0x31d92c = {
                    x: _0x267978,
                    y: _0x43e0ea,
                  });
              }
              const _0x1180af =
                  null != (_0x55e4f7 = _0x54c9b9["state"])
                    ? _0x55e4f7
                    : _0x54c9b9["svrState"],
                _0x4c8ade = l(r({}, _0x54c9b9), {
                  position: _0x31d92c,
                });
              ((_0x1180af && "march" !== _0x1180af) ||
                ((_0x4c8ade["state"] = "idle"),
                (_0x4c8ade["svrState"] = "idle")),
                (_0x376600["roles"][_0x149dc3] = _0x4c8ade));
              for (const [_0x49618f, _0x71487d] of Object["entries"](
                _0x376600["marches"],
              ))
                _0x71487d &&
                  String(_0x71487d["codeId"]) === _0x149dc3 &&
                  delete _0x376600["marches"][_0x49618f];
            })(_0x537f34, _0x41bb7d, S(_0x4fff14, "lastPosition"));
          const _0x17ca4c = S(_0x4fff14, "marchId");
          null != _0x17ca4c && (_0x194b0c = String(_0x17ca4c));
        };
        const _0x519f8c = async (_0x2c1e5e = 0x14) => {
          var _0x28c463, _0x571e94, _0x2d82f8, _0x2b9c51;
          const _0x2dacb7 =
              (null ==
              (_0x571e94 =
                null ==
                (_0x28c463 =
                  null == _0x456c11 ? void 0x0 : _0x456c11["gameData"])
                  ? void 0x0
                  : _0x28c463["roleInfo"])
                ? void 0x0
                : _0x571e94["role"]) || {},
            _0x10b0cd = _0x2dacb7["name"] ? String(_0x2dacb7["name"]) : "",
            _0x107b79 =
              null != _0x2dacb7["roleId"] ? String(_0x2dacb7["roleId"]) : "",
            _0x513072 =
              null !=
              (_0x2b9c51 =
                null != (_0x2d82f8 = _0x2dacb7["legionID"])
                  ? _0x2d82f8
                  : _0x2dacb7["legionId"])
                ? _0x2b9c51
                : null,
            _0x52c4fc = (_0x3380b2) => {
              var _0x510d41;
              return (
                null == _0x513072 ||
                String(
                  null !=
                    (_0x510d41 =
                      null == _0x3380b2 ? void 0x0 : _0x3380b2["legionID"])
                    ? _0x510d41
                    : null == _0x3380b2
                      ? void 0x0
                      : _0x3380b2["legionId"],
                ) === String(_0x513072)
              );
            };
          for (
            let _0x129167 = 0x0;
            _0x129167 < _0x2c1e5e && !_0x559d95["value"];
            _0x129167++
          ) {
            (_0x394c9a["send"]("war_getbattlefieldinfo", {}),
              await _0x47ec2b(0x1f4));
            const _0x14ad2e = _0x537f34["roles"] || {};
            if (_0x107b79 && _0x14ad2e[_0x107b79]) return _0x107b79;
            if (_0x10b0cd) {
              const _0xe4cca3 = Object["entries"](_0x14ad2e)["find"](
                ([, _0x175ec0]) =>
                  _0x175ec0 &&
                  String(_0x175ec0["name"]) === _0x10b0cd &&
                  _0x52c4fc(_0x175ec0),
              );
              if (_0xe4cca3) return _0xe4cca3[0x0];
            }
            const _0x42bbdc = Object["entries"](_0x14ad2e)["filter"](
              ([, _0x3135f4]) => b(_0x3135f4) && _0x52c4fc(_0x3135f4),
            );
            if (0x1 === _0x42bbdc["length"]) return _0x42bbdc[0x0][0x0];
          }
          return "";
        };
        (await _0x47ec2b(0x1388),
          _0x5d74fa({
            time: new Date()["toLocaleTimeString"](),
            message: _0x470fc7 + " 检测战场状态...",
            type: "info",
          }));
        const _0x12a452 = await _0x519f8c(0x6),
          _0x2c2975 = _0x12a452 ? _0x537f34["roles"][_0x12a452] : null;
        if (_0x12a452)
          ((_0x3dcf2c = _0x12a452),
            _0x5d74fa({
              time: new Date()["toLocaleTimeString"](),
              message:
                _0x470fc7 +
                " ℹ 识别到已在战场（codeId=" +
                _0x3dcf2c +
                "，state=" +
                p(_0x2c2975) +
                (w(_0x2c2975) ? "，尚未布阵" : "，已布阵进场") +
                "），跳过重复进场",
              type: "info",
            }));
        else {
          _0x5d74fa({
            time: new Date()["toLocaleTimeString"](),
            message: _0x470fc7 + " 进入战场...",
            type: "info",
          });
          let _0x5b0dfc = null;
          try {
            _0x5b0dfc = await _0x12c41b(
              "war_enterbattlefield",
              {
                useGzip: !0x0,
              },
              0x2710,
            );
          } catch (_0x5c57a6) {
            if (!$(_0x5c57a6)) throw _0x5c57a6;
            (_0x5d74fa({
              time: new Date()["toLocaleTimeString"](),
              message:
                _0x470fc7 +
                ' ℹ 识别到"已布阵进场"（3000560 ErrorDeploy），跳过重复进场，复用当前战场状态',
              type: "info",
            }),
              (_0x5b0dfc = _0x5c57a6["response"] || null));
          }
          const _0x53566e = S(_0x5b0dfc, "battlefield");
          (_0x53566e && T(_0x537f34, _0x53566e),
            (_0x3dcf2c = String(
              null != (_0x5af705 = S(_0x5b0dfc, "roleCodeId")) ? _0x5af705 : "",
            )));
        }
        if ((_0x3dcf2c || (_0x3dcf2c = await _0x519f8c()), !_0x3dcf2c))
          throw new Error(
            "进场失败：未获取到 roleCodeId（3000560 ErrorDeploy 且无法从战场反查自己）",
          );
        const _0x3e91f0 = _0x537f34["roles"][_0x3dcf2c];
        (_0x5d74fa({
          time: new Date()["toLocaleTimeString"](),
          message:
            _0x470fc7 +
            " ✅ 进场成功, codeId: " +
            _0x3dcf2c +
            "（状态 " +
            (w(_0x3e91f0)
              ? "watching/待布阵"
              : null != (_0x2612cb = p(_0x3e91f0))
                ? _0x2612cb
                : "\u672a\u77e5") +
            "）",
          type: "success",
        }),
          _0x394c9a["send"]("war_getbattlefieldinfo", {}),
          _0x5d74fa({
            time: new Date()["toLocaleTimeString"](),
            message: _0x470fc7 + " 布阵准备：读取账号阵容...",
            type: "info",
          }));
        let _0x2a0447 = 0x0;
        try {
          const _0x2d8ce1 = localStorage["getItem"](
            "daily-settings:" + _0x417eb0,
          );
          if (_0x2d8ce1) {
            const _0x866e13 = JSON["parse"](_0x2d8ce1),
              _0x31b79e = Number(_0x866e13["saltFieldPeachFormation"]);
            _0x31b79e >= 0x1 && _0x31b79e <= 0x6 && (_0x2a0447 = _0x31b79e);
          }
        } catch (_0x33339f) {}
        let _0x41b926 = null,
          _0x322386 = "",
          _0x114652 = null,
          _0x6b7da6 = null;
        try {
          const _0x5a20d2 =
            S(
              await _0x3b5226(
                _0x417eb0,
                "presetteam_getinfo",
                {},
                {
                  retries: 0x1,
                  noRetryErrors: [],
                  timeout: 0x1f40,
                },
              ),
              "presetTeamInfo",
            ) || {};
          _0x114652 = Number(_0x5a20d2["useTeamId"]) || 0x1;
          const _0x2ed63e = _0x5a20d2["presetTeamInfo"];
          _0x6b7da6 =
            _0x2ed63e &&
            "object" == typeof _0x2ed63e &&
            !Array["isArray"](_0x2ed63e)
              ? _0x2ed63e
              : "object" != typeof _0x5a20d2 || Array["isArray"](_0x5a20d2)
                ? null
                : _0x5a20d2;
        } catch (_0x4649ce) {
          _0x5d74fa({
            time: new Date()["toLocaleTimeString"](),
            message:
              _0x470fc7 + " ⚠ 读取主服预设阵容失败：" + _0x4649ce["message"],
            type: "warning",
          });
        }
        const _0x2a1dd0 =
          (_0x6b7da6 &&
            _0x6b7da6[String(_0x2a0447 >= 0x1 ? _0x2a0447 : _0x114652)]) ||
          null;
        if (
          _0x2a1dd0 &&
          _0x2a1dd0["teamInfo"] &&
          "object" == typeof _0x2a1dd0["teamInfo"]
        ) {
          const _0x194270 = {};
          for (const [_0x2a35d3, _0x199f99] of Object["entries"](
            _0x2a1dd0["teamInfo"],
          ))
            _0x199f99 &&
              null != _0x199f99["heroId"] &&
              (_0x194270[_0x2a35d3] = _0x199f99["heroId"]);
          Object["keys"](_0x194270)["length"] > 0x0 &&
            ((_0x41b926 = _0x194270),
            (_0x322386 =
              _0x2a0447 >= 0x1
                ? "盐场配置预设阵容" + _0x2a0447
                : "当前出战阵容#" + _0x114652 + "（跟随当前）"));
        }
        _0x41b926 ||
          ((_0x41b926 = {
            0x0: 0x6b,
          }),
          (_0x322386 =
            _0x322386 ||
            (_0x6b7da6
              ? _0x2a0447 >= 0x1
                ? "预设阵容" + _0x2a0447 + "无有效武将"
                : "当前阵容#" + _0x114652 + "无有效武将"
              : "预设阵容读取失败") + "，自动回退吕布单将"));
        const _0x445ad2 = _0x537f34["roles"][_0x3dcf2c],
          _0x1feb75 = b(_0x445ad2),
          _0x5bbdc2 = async (_0x52cfb2, _0x1241ec) => {
            try {
              return S(
                await _0x12c41b(
                  _0x52cfb2,
                  {
                    battleTeam: _0x41b926,
                  },
                  0x1f40,
                ),
                "battlefield",
              );
            } catch (_0x280e1d) {
              if (!$(_0x280e1d)) throw _0x280e1d;
              return (
                _0x5d74fa({
                  time: new Date()["toLocaleTimeString"](),
                  message:
                    _0x470fc7 +
                    " ℹ " +
                    _0x1241ec +
                    " 返回 3000560(ErrorDeploy)：已布阵进场/当前无需重复布阵，跳过",
                  type: "info",
                }),
                null
              );
            }
          },
          _0x32c70f = async () => {
            if (!_0x41b926 || 0x0 === Object["keys"](_0x41b926)["length"])
              return !0x1;
            (await _0x5bbdc2("war_teamsetbattleteam", "重新布阵(设置阵容)"),
              await _0x47ec2b(0x320));
            const _0x15cea9 = await _0x5bbdc2("war_setbattleteam", "重新布阵");
            return (
              _0x15cea9 && T(_0x537f34, _0x15cea9),
              await _0x47ec2b(0x3e8),
              !0x0
            );
          };
        if (_0x1feb75)
          _0x5d74fa({
            time: new Date()["toLocaleTimeString"](),
            message:
              _0x470fc7 +
              " ℹ 已布阵进场（state=" +
              p(_0x445ad2) +
              "），跳过重复布阵",
            type: "info",
          });
        else {
          (_0x5d74fa({
            time: new Date()["toLocaleTimeString"](),
            message:
              _0x470fc7 +
              " 🛡 布阵：" +
              _0x322386 +
              "（" +
              Object["values"](_0x41b926)["length"] +
              "人）",
            type: "info",
          }),
            await _0x5bbdc2("war_teamsetbattleteam", "设置阵容"),
            await _0x47ec2b(0x320));
          const _0x21e420 = await _0x5bbdc2(
            "war_setbattleteam",
            "\u5e03\u9635",
          );
          (_0x21e420 && T(_0x537f34, _0x21e420),
            _0x5d74fa({
              time: new Date()["toLocaleTimeString"](),
              message: _0x470fc7 + " ✅ 布阵完成",
              type: "success",
            }));
        }
        for (let _0x87c019 = 0x0; _0x87c019 < 0x14; _0x87c019++) {
          await _0x47ec2b(0x1f4);
          const _0x21f7c1 = _0x537f34["roles"][_0x3dcf2c];
          if (_0x21f7c1 && h(_0x21f7c1)) break;
          if (_0x559d95["value"]) break;
        }
        if (!0x0 === _0x2ddd55["lineupOnly"]) {
          const _0x321bfa = _0x537f34["roles"][_0x3dcf2c];
          try {
            _0x394c9a["disconnect"]();
          } catch (_0x2814ce) {}
          return (
            _0x5d74fa({
              time: new Date()["toLocaleTimeString"](),
              message:
                _0x470fc7 +
                " ✅ 盐场布阵完成（进场 + 布阵，state=" +
                (null != (_0x1db8a8 = p(_0x321bfa))
                  ? _0x1db8a8
                  : "\u672a\u77e5") +
                "），结束",
              type: "success",
            }),
            !0x0
          );
        }
        _0x5d74fa({
          time: new Date()["toLocaleTimeString"](),
          message: _0x470fc7 + " 🔄 开始刨地循环...",
          type: "info",
        });
        let _0x4719d7 = 0x0,
          _0x342212 = 0x0,
          _0x3161a5 = 0x0,
          _0xea979d = 0x0,
          _0x34f030 = 0x0,
          _0x3d6ce4 = 0x0,
          _0x5e6292 = 0x0,
          _0x5dc35a = null,
          _0x3479a9 = 0x0;
        const _0xc29559 = new Map(),
          _0x2066cf = Math.min(
            2000,
            Math.max(1, Number(_0xdab757.saltFieldMaxActions) || 100),
          );
        let _0x35736f = "saltPanFirst",
          _0x328e7c = null;
        try {
          const _0x1b7262 = localStorage["getItem"](
            "daily-settings:" + _0x417eb0,
          );
          if (_0x1b7262) {
            const _0x577f8d = JSON["parse"](_0x1b7262);
            (["saltPanFirst", "nearest", "enemyFirst"]["includes"](
              _0x577f8d["saltFieldTargetPriority"],
            ) && (_0x35736f = _0x577f8d["saltFieldTargetPriority"]),
              _0x577f8d["saltFieldLockedRoleId"] &&
                (_0x328e7c = _0x577f8d["saltFieldLockedRoleId"]));
          }
        } catch (_0x1ddb4a) {}
        const _0x3fd7c4 =
            null != (_0x3a2cd9 = F(_0x537f34["roles"][_0x3dcf2c]))
              ? _0x3a2cd9
              : F(
                  null ==
                    (_0x59280a =
                      null ==
                      (_0xe7612c =
                        null == _0x456c11 ? void 0x0 : _0x456c11["gameData"])
                        ? void 0x0
                        : _0xe7612c["roleInfo"])
                    ? void 0x0
                    : _0x59280a["role"],
                ),
          _0x20f7ef = {
            myLegionId: _0x3fd7c4,
            myCodeId: _0x3dcf2c,
            targetPriority: _0x35736f,
            blocked: null,
            allowBusyKey: null,
            myKey: null,
          },
          _0x930423 = new Map();
        _0x20f7ef["blocked"] = {
          has: (_0x489584) => {
            const _0xdf25d6 = _0x930423["get"](_0x489584);
            return !(
              !_0xdf25d6 ||
              (Date["now"]() > _0xdf25d6 &&
                (_0x930423["delete"](_0x489584), 0x1))
            );
          },
        };
        const _0x4fe6c0 = Object["keys"](_0x537f34["buildingData"]),
          _0x198858 =
            null == (_0x3b4bb1 = _0x537f34["roles"][_0x3dcf2c])
              ? void 0x0
              : _0x3b4bb1["position"],
          _0x3a97b4 = [..._]["filter"](
            (_0x1986da) => A(_0x1986da, _0x537f34)["hasBuilding"],
          )["length"];
        for (
          _0x5d74fa({
            time: new Date()["toLocaleTimeString"](),
            message:
              _0x470fc7 +
              " 🗺 地图自检：静态地图 " +
              _["size"] +
              " 格（其中建筑 " +
              _0x3a97b4 +
              " 格，道路 " +
              (_["size"] - _0x3a97b4) +
              " 格），实时 buildingData " +
              _0x4fe6c0["length"] +
              " 格，角色位置 " +
              (_0x198858
                ? "(" + _0x198858["x"] + "," + _0x198858["y"] + ")"
                : "\u672a\u77e5") +
              "，我方军团 " +
              (null != _0x3fd7c4 ? _0x3fd7c4 : "\u672a\u77e5") +
              "（行军目标只取建筑格，道路格不作为目标）",
            type: "info",
          });
          !_0x559d95["value"] && (_0xe6dd1d || Q()) && _0x4719d7 < _0x2066cf;
        ) {
          if (
            _0x394c9a &&
            !_0x394c9a["connected"] &&
            !_0x394c9a["reconnecting"] &&
            !_0x394c9a["manualClose"]
          ) {
            _0x5d74fa({
              time: new Date()["toLocaleTimeString"](),
              message: _0x470fc7 + " ⚠ 战场连接已断开，尝试自动重连...",
              type: "warning",
            });
            let _0x49dc4c = !0x1;
            for (
              let _0x85af0e = 0x1;
              _0x85af0e <= _0x394c9a["maxReconnect"] && !_0x559d95["value"];
              _0x85af0e++
            ) {
              await _0x47ec2b(0x3e8);
              try {
                if (await _0x394c9a["reconnect"]()) {
                  _0x49dc4c = !0x0;
                  break;
                }
              } catch (_0x2fe684) {}
              _0x85af0e < _0x394c9a["maxReconnect"] &&
                _0x5d74fa({
                  time: new Date()["toLocaleTimeString"](),
                  message:
                    _0x470fc7 + "\x20第" + _0x85af0e + "次重连失败，1s 后重试",
                  type: "warning",
                });
            }
            if (!_0x49dc4c)
              return (
                _0x5d74fa({
                  time: new Date()["toLocaleTimeString"](),
                  message: _0x470fc7 + " ❌ 重连失败，终止刨地",
                  type: "error",
                }),
                !0x1
              );
            try {
              _0x394c9a["send"]("war_getbattlefieldinfo", {});
            } catch (_0x2fc393) {}
            (await _0x47ec2b(0x3e8),
              _0x5d74fa({
                time: new Date()["toLocaleTimeString"](),
                message: _0x470fc7 + " ✅ 战场连接已恢复，继续刨地",
                type: "success",
              }));
          }
          const _0x35a2ab = _0x537f34["roles"][_0x3dcf2c];
          if (_0x35a2ab && g(_0x35a2ab)) {
            const _0x34b038 = y(_0x35a2ab);
            _0x5d74fa({
              time: new Date()["toLocaleTimeString"](),
              message:
                _0x470fc7 +
                " ⚠ 检测到角色死亡，等待复活（预计 " +
                (_0x34b038 > 0x0 ? _0x34b038 + "s" : "\u672a\u77e5") +
                "）...",
              type: "warning",
            });
            let _0x512030 = !0x1,
              _0x264285 = -0x1;
            for (
              let _0x42b74a = 0x0;
              _0x42b74a < 0xf0 && !_0x559d95["value"];
              _0x42b74a++
            ) {
              if (_0x42b74a % 0x4 == 0x0)
                try {
                  _0x394c9a["send"]("war_getbattlefieldinfo", {});
                } catch (_0x2771b5) {}
              await _0x47ec2b(0x1f4);
              const _0x36022b = _0x537f34["roles"][_0x3dcf2c];
              if (_0x36022b && h(_0x36022b)) {
                _0x512030 = !0x0;
                break;
              }
              const _0x56790a = _0x36022b ? y(_0x36022b) : 0x0;
              _0x56790a > 0x0 &&
                _0x56790a !== _0x264285 &&
                _0x42b74a % 0x4 == 0x0 &&
                ((_0x264285 = _0x56790a),
                _0x5d74fa({
                  time: new Date()["toLocaleTimeString"](),
                  message: _0x470fc7 + " ⏳ 复活倒计时 " + _0x56790a + "s",
                  type: "info",
                }));
            }
            const _0x1b5745 = _0x537f34["roles"][_0x3dcf2c];
            if (!_0x512030 || !_0x1b5745 || !h(_0x1b5745))
              return (
                _0x5d74fa({
                  time: new Date()["toLocaleTimeString"](),
                  message:
                    _0x470fc7 +
                    " ❌ 角色无法复活（倒计时未归零或已超时），终止任务",
                  type: "error",
                }),
                !0x1
              );
            _0x5d74fa({
              time: new Date()["toLocaleTimeString"](),
              message: _0x470fc7 + " ✅ 已复活，重新布阵以恢复刨地",
              type: "success",
            });
            try {
              await _0x32c70f();
            } catch (_0x36b1f7) {}
          }
          const _0x2880c7 = M(_0x35a2ab);
          if (!_0x35a2ab || !_0x2880c7) {
            await _0x47ec2b(0x5dc);
            continue;
          }
          const _0x2440d8 = j(_0x2880c7["x"], _0x2880c7["y"]);
          if (
            ((_0x20f7ef["myKey"] = _0x2440d8), m(_0x35a2ab) || f(_0x35a2ab))
          ) {
            const _0x7c344b = G(_0x537f34, _0x3dcf2c),
              _0x4cb149 =
                null !=
                (_0x4a2a7a =
                  null !=
                  (_0x5e88a9 =
                    null == _0x7c344b ? void 0x0 : _0x7c344b["marchId"])
                    ? _0x5e88a9
                    : _0x35a2ab["marchId"])
                  ? _0x4a2a7a
                  : _0x35a2ab["marchID"];
            if (
              m(_0x35a2ab) &&
              null != _0x4cb149 &&
              Date["now"]() - _0x34f030 >= 0x7d0
            ) {
              _0x34f030 = Date["now"]();
              try {
                _0x394c9a["send"]("war_speedup", {
                  battlefieldId: _0x567407,
                  marchId: _0x4cb149,
                });
              } catch (_0x1e6824) {}
            }
            (Date["now"]() - _0x3d6ce4 >= 0xbb8 &&
              ((_0x3d6ce4 = Date["now"]()),
              _0x394c9a["send"]("war_getbattlefieldinfo", {})),
              _0x3161a5++,
              _0x3161a5 % 0xa == 0x1 &&
                _0x5d74fa({
                  time: new Date()["toLocaleTimeString"](),
                  message:
                    _0x470fc7 +
                    " ⏳ 角色忙碌（state=" +
                    (null !=
                    (_0x390c44 =
                      null !=
                      (_0x217715 =
                        null == _0x35a2ab ? void 0x0 : _0x35a2ab["state"])
                        ? _0x217715
                        : null == _0x35a2ab
                          ? void 0x0
                          : _0x35a2ab["svrState"])
                      ? _0x390c44
                      : "\u672a\u77e5") +
                    (null != _0x4cb149 ? "，行军中 marchId=" + _0x4cb149 : "") +
                    "），等待就绪...",
                  type: "info",
                }),
              (0x3d !== _0x3161a5 && 0xb5 !== _0x3161a5) ||
                _0x5d74fa({
                  time: new Date()["toLocaleTimeString"](),
                  message:
                    _0x470fc7 +
                    " ⚠ 角色已忙碌 " +
                    _0x3161a5 +
                    " 秒仍未就绪（state=" +
                    (null !=
                    (_0x1f5401 =
                      null !=
                      (_0x361fed =
                        null == _0x35a2ab ? void 0x0 : _0x35a2ab["state"])
                        ? _0x361fed
                        : null == _0x35a2ab
                          ? void 0x0
                          : _0x35a2ab["svrState"])
                      ? _0x1f5401
                      : "\u672a\u77e5") +
                    "）" +
                    (null != _0x4cb149 ? "" : "，且行军记录已消失") +
                    "，已持续加速并刷新战场",
                  type: "warning",
                }),
              await _0x47ec2b(0x3e8));
            continue;
          }
          _0x3161a5 = 0x0;
          const _0x277ca3 = _0x2440d8,
            _0x6d0788 = A(_0x277ca3, _0x537f34);
          if (
            _0x6d0788["hasBuilding"] &&
            !_0x6d0788["isHome"] &&
            !C(_0x6d0788, _0x3fd7c4) &&
            !_0x20f7ef["blocked"]["has"](_0x277ca3)
          ) {
            const _0x242c49 = Date["now"](),
              _0x50bb18 = O(_0x277ca3, _0x537f34, _0x3dcf2c, _0x3fd7c4);
            if (_0x50bb18 && h(_0x35a2ab)) {
              if (
                ((_0x5dc35a = null),
                (_0x3479a9 = 0x0),
                _0x242c49 - _0x5e6292 >= 0x9c4)
              ) {
                _0x5e6292 = _0x242c49;
                try {
                  (await _0x12c41b(
                    "war_startbattle",
                    {
                      battlefieldId: _0x567407,
                      targetCodeId:
                        Number(_0x50bb18["codeId"]) || _0x50bb18["codeId"],
                    },
                    0x1f40,
                  ),
                    _0x5d74fa({
                      time: new Date()["toLocaleTimeString"](),
                      message:
                        _0x470fc7 +
                        " ⚔ [" +
                        _0x2880c7["x"] +
                        "," +
                        _0x2880c7["y"] +
                        "] 同格敌人 " +
                        _0x50bb18["codeId"] +
                        "（军团" +
                        _0x50bb18["legionId"] +
                        "），发起战斗",
                      type: "info",
                    }));
                } catch (_0x3f6bc8) {
                  _0x5d74fa({
                    time: new Date()["toLocaleTimeString"](),
                    message:
                      _0x470fc7 +
                      " ⚠ 发起战斗失败 [" +
                      _0x2880c7["x"] +
                      "," +
                      _0x2880c7["y"] +
                      "]：" +
                      _0x3f6bc8["message"] +
                      E(_0x3f6bc8),
                    type: "warning",
                  });
                }
              }
              await _0x47ec2b(0x320);
              continue;
            }
            const _0x4ce145 =
              {
                0x1: "青铜矿",
                0x2: "白银矿",
                0x3: "黄金矿",
                0x6: "\u76d0\u7530",
              }[_0x6d0788["type"]] || "type=" + _0x6d0788["type"];
            if (
              (_0x5dc35a !== _0x277ca3 &&
                ((_0x5dc35a = _0x277ca3),
                (_0x3479a9 = 0x0),
                _0x5d74fa({
                  time: new Date()["toLocaleTimeString"](),
                  message:
                    _0x470fc7 +
                    " ⛏ 已在建筑上 [" +
                    _0x2880c7["x"] +
                    "," +
                    _0x2880c7["y"] +
                    "]\x20" +
                    _0x4ce145 +
                    "（归属=" +
                    _0x6d0788["belongsLegionId"] +
                    "），开始刨地",
                  type: "info",
                })),
              _0x242c49 - _0x5e6292 >= 0x4b0)
            ) {
              ((_0x5e6292 = _0x242c49),
                _0x3479a9++,
                _0x242c49 - _0x3d6ce4 >= 0xbb8 &&
                  ((_0x3d6ce4 = _0x242c49),
                  _0x394c9a["send"]("war_getbattlefieldinfo", {})));
              try {
                (await _0x12c41b(
                  "war_startattackbuilding",
                  {
                    battlefieldId: _0x567407,
                    buildingId: _0x277ca3,
                  },
                  0x1f40,
                ),
                  _0xc29559["delete"](_0x277ca3),
                  _0x4719d7++,
                  (0x1 !== _0x3479a9 && _0x3479a9 % 0xa != 0x0) ||
                    _0x5d74fa({
                      time: new Date()["toLocaleTimeString"](),
                      message:
                        _0x470fc7 +
                        " ⛏ 刨地中 [" +
                        _0x2880c7["x"] +
                        "," +
                        _0x2880c7["y"] +
                        "] 第" +
                        _0x3479a9 +
                        "次（归属=" +
                        _0x6d0788["belongsLegionId"] +
                        "，累计" +
                        _0x4719d7 +
                        "/" +
                        _0x2066cf +
                        "）",
                      type: "success",
                    }));
              } catch (_0xa8c206) {
                if ($(_0xa8c206) && _0xea979d < 0x3) {
                  (_0xea979d++,
                    _0x5d74fa({
                      time: new Date()["toLocaleTimeString"](),
                      message:
                        _0x470fc7 +
                        ' ⚠ 刨地被拒(3000560 ErrorDeploy)：识别为"布阵状态被重置"，重新布阵后重试（第' +
                        _0xea979d +
                        "次）",
                      type: "warning",
                    }));
                  try {
                    await _0x32c70f();
                  } catch (_0x430c0a) {}
                  (_0xc29559["delete"](_0x277ca3),
                    (_0x5dc35a = null),
                    (_0x3479a9 = 0x0),
                    await _0x47ec2b(0x4b0));
                  continue;
                }
                const _0xa9690f = (_0xc29559["get"](_0x277ca3) || 0x0) + 0x1;
                (_0xc29559["set"](_0x277ca3, _0xa9690f),
                  _0x5d74fa({
                    time: new Date()["toLocaleTimeString"](),
                    message:
                      _0x470fc7 +
                      " ⚠ 刨地失败 [" +
                      _0x2880c7["x"] +
                      "," +
                      _0x2880c7["y"] +
                      "] 第" +
                      _0xa9690f +
                      "次：" +
                      _0xa8c206["message"] +
                      E(_0xa8c206),
                    type: "warning",
                  }),
                  _0xa9690f >= 0x4 &&
                    (_0xc29559["delete"](_0x277ca3),
                    _0x930423["set"](_0x277ca3, Date["now"]() + 0xea60),
                    (_0x5dc35a = null),
                    (_0x3479a9 = 0x0),
                    _0x5d74fa({
                      time: new Date()["toLocaleTimeString"](),
                      message:
                        _0x470fc7 +
                        " ⛔ [" +
                        _0x2880c7["x"] +
                        "," +
                        _0x2880c7["y"] +
                        "] 连续刨地失败，判定该建筑暂不可刨，跳过 60s 换目标",
                      type: "warning",
                    })));
              }
            }
            await _0x47ec2b(0x1f4);
            continue;
          }
          _0x5dc35a &&
            (_0x5dc35a === _0x277ca3 &&
              C(_0x6d0788, _0x3fd7c4) &&
              _0x5d74fa({
                time: new Date()["toLocaleTimeString"](),
                message:
                  _0x470fc7 +
                  " ✅ [" +
                  _0x2880c7["x"] +
                  "," +
                  _0x2880c7["y"] +
                  "] 已归我方（刨地 " +
                  _0x3479a9 +
                  " 次），寻找下一个目标",
                type: "success",
              }),
            (_0x5dc35a = null),
            (_0x3479a9 = 0x0));
          let _0x2c9201 = null,
            _0x2f8be9 = null,
            _0x2aaf7b = 0x0,
            _0x473338 = 0x0,
            _0x5270b6 = !0x1;
          if (_0x328e7c) {
            const _0x488133 = _0x537f34["roles"][_0x328e7c];
            if (_0x488133 && _0x488133["position"]) {
              const _0x532f57 = Number(_0x488133["position"]["x"]),
                _0x41dda6 = Number(_0x488133["position"]["y"]),
                _0xe1fc9d = j(_0x532f57, _0x41dda6),
                _0x167037 = A(_0xe1fc9d, _0x537f34);
              !_0x167037["hasBuilding"] ||
                _0x167037["isHome"] ||
                C(_0x167037, _0x3fd7c4) ||
                _0x20f7ef["blocked"]["has"](_0xe1fc9d) ||
                ((_0x2c9201 = {
                  x: _0x532f57,
                  y: _0x41dda6,
                }),
                (_0x2f8be9 = _0xe1fc9d),
                (_0x5270b6 = !0x0),
                _0x5d74fa({
                  time: new Date()["toLocaleTimeString"](),
                  message:
                    _0x470fc7 +
                    " 🔒 锁敌：[" +
                    _0x532f57 +
                    "," +
                    _0x41dda6 +
                    "]",
                  type: "info",
                }));
            }
          }
          if (!_0x2c9201) {
            _0x20f7ef["allowBusyKey"] = null;
            const _0x430427 = U(_0x537f34, _0x2880c7, _0x20f7ef);
            if (
              ((_0x2aaf7b = _0x430427["length"]), _0x430427["length"] > 0x0)
            ) {
              const _0x4773df = _0x430427[0x0];
              ((_0x2c9201 = {
                x: _0x4773df["x"],
                y: _0x4773df["y"],
              }),
                (_0x2f8be9 = _0x4773df["key"]),
                (_0x473338 = _0x4773df["dist"]),
                (_0x5270b6 = _0x4773df["busy"]));
            }
          }
          if (!_0x2c9201) {
            (_0x342212++,
              _0x342212 % 0x3 == 0x1 &&
                _0x394c9a["send"]("war_getbattlefieldinfo", {}));
            const _0x190a7e = k(_0x2880c7["x"], _0x2880c7["y"]),
              _0x476a88 = _0x190a7e["filter"](
                (_0x4eeb27) =>
                  A(j(_0x4eeb27["x"], _0x4eeb27["y"]), _0x537f34)["exists"],
              )["length"],
              _0x115bff = _0x190a7e["filter"]((_0x1596c3) => {
                const _0x5c0348 = A(
                  j(_0x1596c3["x"], _0x1596c3["y"]),
                  _0x537f34,
                );
                return _0x5c0348["exists"] && !_0x5c0348["hasBuilding"];
              })["length"],
              _0x14b5c7 = [
                ...q(j(_0x2880c7["x"], _0x2880c7["y"]), _0x537f34, _0x20f7ef)[
                  "values"
                ](),
              ],
              _0x6988ff = _0x14b5c7["filter"](
                ({ tile: _0x21613e }) => _0x21613e["hasBuilding"],
              )["length"],
              _0x5ad617 = _0x14b5c7["filter"](({ tile: _0x12411c }) =>
                C(_0x12411c, _0x3fd7c4),
              )["length"],
              _0x5d8592 = _0x14b5c7["filter"](({ tile: _0x439e1d }) =>
                _0x20f7ef["blocked"]["has"](_0x439e1d["key"]),
              )["length"];
            (_0x5d74fa({
              time: new Date()["toLocaleTimeString"](),
              message:
                _0x470fc7 +
                " ⚠ 无可达建筑目标，原地等待（pos=(" +
                _0x2880c7["x"] +
                "," +
                _0x2880c7["y"] +
                ") 相邻存在 " +
                _0x476a88 +
                "/6，其中道路 " +
                _0x115bff +
                " 格不可派兵；可达建筑 " +
                _0x6988ff +
                "：我方据点 " +
                _0x5ad617 +
                "、临时拉黑 " +
                _0x5d8592 +
                "，实时建筑 " +
                Object["keys"](_0x537f34["buildingData"])["length"] +
                "）",
              type: "warning",
            }),
              await _0x47ec2b(0x5dc));
            continue;
          }
          _0x4719d7++;
          const _0x114c94 = A(_0x2f8be9, _0x537f34),
            _0x16daf0 =
              {
                0x1: "青铜矿",
                0x2: "白银矿",
                0x3: "黄金矿",
                0x4: "大本营",
                0x5: "\u5821\u5792",
                0x6: "\u76d0\u7530",
              }[_0x114c94["type"]] || "type=" + _0x114c94["type"];
          _0x5d74fa({
            time: new Date()["toLocaleTimeString"](),
            message:
              _0x470fc7 +
              " 🎯 目标：[" +
              _0x2c9201["x"] +
              "," +
              _0x2c9201["y"] +
              "]\x20" +
              _0x16daf0 +
              " 归属=" +
              _0x114c94["belongsLegionId"] +
              (_0x5270b6 ? "（有敌人，抢攻）" : "（空建筑）") +
              " 距离" +
              _0x473338 +
              " 可选" +
              _0x2aaf7b +
              "\x20(" +
              _0x4719d7 +
              "/" +
              _0x2066cf +
              ")",
            type: "info",
          });
          let _0x52582a = null;
          try {
            const _0x2ae4f5 = await _0x12c41b(
                "war_startmarch",
                {
                  battlefieldId: _0x567407,
                  target: _0x2c9201,
                },
                0x1f40,
              ),
              _0x537166 = S(_0x2ae4f5, "battlefield");
            _0x537166 && T(_0x537f34, _0x537166);
            const _0x14f9da = S(_0x2ae4f5, "tileDataMap");
            _0x14f9da && I(_0x537f34, _0x14f9da);
            const _0x3ae6ce = G(_0x537f34, _0x3dcf2c, _0x2c9201);
            if (
              (_0x3ae6ce && (_0x52582a = _0x3ae6ce["marchId"]),
              null == _0x52582a)
            ) {
              const _0x392376 =
                null != (_0x2971ff = S(_0x2ae4f5, "marchId"))
                  ? _0x2971ff
                  : null == (_0x5e7067 = _0x537f34["roles"][_0x3dcf2c])
                    ? void 0x0
                    : _0x5e7067["marchId"];
              null != _0x392376 && (_0x52582a = String(_0x392376));
            }
          } catch (_0x13692d) {
            if ($(_0x13692d) && _0xea979d < 0x3) {
              (_0xea979d++,
                _0x5d74fa({
                  time: new Date()["toLocaleTimeString"](),
                  message:
                    _0x470fc7 +
                    ' ⚠ 行军被拒(3000560 ErrorDeploy)：识别为"布阵状态未就绪"，重新布阵后重试（第' +
                    _0xea979d +
                    "次）",
                  type: "warning",
                }),
                await _0x32c70f(),
                await _0x47ec2b(0x5dc));
              continue;
            }
            (_0x930423["set"](_0x2f8be9, Date["now"]() + 0x7530),
              _0x5d74fa({
                time: new Date()["toLocaleTimeString"](),
                message:
                  _0x470fc7 +
                  " ❌ 行军失败：[" +
                  _0x2c9201["x"] +
                  "," +
                  _0x2c9201["y"] +
                  "]\x20" +
                  _0x13692d["message"] +
                  "（该格暂时跳过）",
                type: "warning",
              }),
              await _0x47ec2b(0x5dc));
            continue;
          }
          _0x5d74fa({
            time: new Date()["toLocaleTimeString"](),
            message:
              _0x470fc7 +
              " 🏃 行军 -> [" +
              _0x2c9201["x"] +
              "," +
              _0x2c9201["y"] +
              "]" +
              (null != _0x52582a ? " (marchId=" + _0x52582a + ")" : ""),
            type: "info",
          });
          let _0x1f46dd = !0x1,
            _0x4d0902 = 0x0,
            _0x5d50fa = 0x0;
          for (
            let _0xbe1ec6 = 0x0;
            _0xbe1ec6 < 0xb4 && !_0x559d95["value"];
            _0xbe1ec6++
          ) {
            const _0x21bff0 = _0x537f34["roles"][_0x3dcf2c],
              _0x27bdb2 = M(_0x21bff0);
            if (
              _0x27bdb2 &&
              _0x27bdb2["x"] === Number(_0x2c9201["x"]) &&
              _0x27bdb2["y"] === Number(_0x2c9201["y"]) &&
              !m(_0x21bff0)
            ) {
              _0x1f46dd = !0x0;
              break;
            }
            const _0x236734 =
              null !=
              (_0x4057a1 =
                null != _0x52582a
                  ? _0x52582a
                  : null == _0x21bff0
                    ? void 0x0
                    : _0x21bff0["marchId"])
                ? _0x4057a1
                : null == _0x21bff0
                  ? void 0x0
                  : _0x21bff0["marchID"];
            if (
              m(_0x21bff0) &&
              null != _0x236734 &&
              Date["now"]() - _0x4d0902 >= 0x7d0
            ) {
              _0x4d0902 = Date["now"]();
              try {
                _0x394c9a["send"]("war_speedup", {
                  battlefieldId: _0x567407,
                  marchId: _0x236734,
                });
              } catch (_0x29ec02) {}
            }
            if (
              (Date["now"]() - _0x5d50fa >= 0xbb8 &&
                ((_0x5d50fa = Date["now"]()),
                _0x394c9a["send"]("war_getbattlefieldinfo", {})),
              _0xbe1ec6 > 0x0 &&
                _0xbe1ec6 % 0x14 == 0x0 &&
                _0x5d74fa({
                  time: new Date()["toLocaleTimeString"](),
                  message:
                    _0x470fc7 +
                    " ⏳ 行军中 -> [" +
                    _0x2c9201["x"] +
                    "," +
                    _0x2c9201["y"] +
                    "]（state=" +
                    (null !=
                    (_0x1765a9 =
                      null !=
                      (_0x267ce8 =
                        null == _0x21bff0 ? void 0x0 : _0x21bff0["state"])
                        ? _0x267ce8
                        : null == _0x21bff0
                          ? void 0x0
                          : _0x21bff0["svrState"])
                      ? _0x1765a9
                      : "\u672a\u77e5") +
                    (_0x27bdb2
                      ? "，当前 (" + _0x27bdb2["x"] + "," + _0x27bdb2["y"] + ")"
                      : "") +
                    "，已 " +
                    _0xbe1ec6 / 0x2 +
                    "s）",
                  type: "info",
                }),
              null != _0x52582a && _0x194b0c === String(_0x52582a))
            ) {
              ((_0x194b0c = null), await _0x47ec2b(0x1f4));
              const _0x35d9bc = M(_0x537f34["roles"][_0x3dcf2c]);
              _0x35d9bc &&
                _0x35d9bc["x"] === Number(_0x2c9201["x"]) &&
                _0x35d9bc["y"] === Number(_0x2c9201["y"]) &&
                (_0x1f46dd = !0x0);
              break;
            }
            await _0x47ec2b(0x1f4);
          }
          if (!_0x1f46dd) {
            const _0xb61136 = _0x537f34["roles"][_0x3dcf2c],
              _0x13d77c = m(_0xb61136),
              _0x5079a4 = M(_0xb61136),
              _0x54884a = _0x5079a4
                ? A(j(_0x5079a4["x"], _0x5079a4["y"]), _0x537f34)
                : null,
              _0x5c9f23 = !(
                !_0x54884a ||
                !_0x54884a["hasBuilding"] ||
                _0x54884a["isHome"] ||
                C(_0x54884a, _0x3fd7c4)
              );
            (_0x13d77c ||
              !_0x2f8be9 ||
              _0x5c9f23 ||
              _0x930423["set"](_0x2f8be9, Date["now"]() + 0xea60),
              _0x5d74fa({
                time: new Date()["toLocaleTimeString"](),
                message:
                  _0x470fc7 +
                  " ⚠ 行军未到位 -> [" +
                  _0x2c9201["x"] +
                  "," +
                  _0x2c9201["y"] +
                  "]（state=" +
                  (null !=
                  (_0x36ee37 =
                    null !=
                    (_0x30dedd =
                      null == _0xb61136 ? void 0x0 : _0xb61136["state"])
                      ? _0x30dedd
                      : null == _0xb61136
                        ? void 0x0
                        : _0xb61136["svrState"])
                    ? _0x36ee37
                    : "\u672a\u77e5") +
                  (_0x5079a4
                    ? "，当前 (" + _0x5079a4["x"] + "," + _0x5079a4["y"] + ")"
                    : "") +
                  "）" +
                  (_0x13d77c
                    ? "，继续等待该次行军结算"
                    : _0x5c9f23
                      ? "，已就地停在建筑 (" +
                        _0x5079a4["x"] +
                        "," +
                        _0x5079a4["y"] +
                        ")，转入就地刨地"
                      : "，判定该目标暂不可达，跳过 60s"),
                type: "warning",
              }));
            continue;
          }
          if (_0x559d95["value"]) break;
          if (
            (_0x5d74fa({
              time: new Date()["toLocaleTimeString"](),
              message:
                _0x470fc7 +
                " 📍 已到达 [" +
                _0x2c9201["x"] +
                "," +
                _0x2c9201["y"] +
                "]，转入持续刨地",
              type: "success",
            }),
            await _0x47ec2b(0x258),
            _0x559d95["value"])
          )
            break;
        }
        return (
          _0x394c9a["disconnect"](),
          _0x5d74fa({
            time: new Date()["toLocaleTimeString"](),
            message: _0x470fc7 + " ⏹ 刨地结束 (" + _0x4719d7 + "次)",
            type: "info",
          }),
          !0x0
        );
      } catch (_0x5c4ecf) {
        return (
          _0x394c9a && _0x394c9a["disconnect"](),
          _0x5d74fa({
            time: new Date()["toLocaleTimeString"](),
            message: _0x470fc7 + " ❌ 刨地失败: " + _0x5c4ecf["message"],
            type: "error",
          }),
          !0x1
        );
      }
    },
    _0x10969a = async (_0x55b824, _0x2de02c = {}) => {
      const _0x3965ba = _0x2de02c["stopRef"] || _0x3e65a0,
        _0x45034a = _0x2de02c["label"] || "盐场刨地",
        _0x2f0821 = _0x2de02c["taskOpts"] || {},
        _0x44bf04 = [..._0x55b824],
        _0x5ea247 = [];
      let _0x38290f = 0x0,
        _0x491f69 = 0x0,
        _0x48b00b = 0x0;
      const _0x18b1c4 = async (_0x38214d) => {
          if (_0x3965ba["value"])
            return (
              _0x48b00b++,
              void (_0x46fa20["value"][_0x38214d] = _0x2de02c["deferUnstarted"]
                ? "waiting"
                : "failed")
            );
          const _0x1f1b85 = _0x456c11["gameTokens"]["find"](
            (_0x5d5fbe) => _0x5d5fbe["id"] === _0x38214d,
          );
          if (!_0x1f1b85)
            return (
              _0x491f69++,
              (_0x46fa20["value"][_0x38214d] = "failed"),
              void _0x5d74fa({
                time: new Date()["toLocaleTimeString"](),
                message:
                  "⚠️ " + _0x45034a + "：未找到账号 " + _0x38214d + " 的 Token",
                type: "warning",
              })
            );
          ((_0x46fa20["value"][_0x38214d] = "running"),
            _0x5ea247["push"](_0x38214d),
            (await _0x4bc73d(
              _0x38214d,
              _0x1f1b85,
              r(
                {
                  stopRef: _0x3965ba,
                  skipWindowCheck: !0x0,
                },
                _0x2f0821,
              ),
            ))
              ? (_0x38290f++, (_0x46fa20["value"][_0x38214d] = "completed"))
              : _0x3965ba["value"]
                ? (_0x48b00b++,
                  (_0x46fa20["value"][_0x38214d] = _0x2de02c["deferUnstarted"]
                    ? "waiting"
                    : "failed"))
                : (_0x491f69++, (_0x46fa20["value"][_0x38214d] = "failed")));
        },
        _0x54edf7 = Math["max"](
          0x1,
          Math["min"](
            Number(_0x2de02c["concurrency"]) || 0x1,
            _0x55b824["length"],
          ),
        );
      return (
        await Promise["all"](
          Array["from"](
            {
              length: _0x54edf7,
            },
            (_0x33355a, _0x82148e) =>
              (async (_0x568c7d) => {
                let _0x1ec716 = !0x0;
                for (; _0x44bf04["length"] > 0x0 && !_0x3965ba["value"];) {
                  const _0x45c187 = _0x44bf04["shift"]();
                  (_0x1ec716 &&
                    _0x568c7d > 0x0 &&
                    _0x2de02c["launchGap"] > 0x0 &&
                    (await _0x47ec2b(_0x2de02c["launchGap"] * _0x568c7d)),
                    (_0x1ec716 = !0x1),
                    await _0x18b1c4(_0x45c187),
                    _0x44bf04["length"] > 0x0 &&
                      _0x2de02c["launchGap"] > 0x0 &&
                      !_0x3965ba["value"] &&
                      (await _0x47ec2b(_0x2de02c["launchGap"])));
                }
              })(_0x82148e),
          ),
        ),
        _0x44bf04["length"] > 0x0 &&
          ((_0x48b00b += _0x44bf04["length"]),
          _0x44bf04["forEach"]((_0x592871) => {
            _0x46fa20["value"][_0x592871] = _0x2de02c["deferUnstarted"]
              ? "waiting"
              : "failed";
          }),
          (_0x44bf04["length"] = 0x0)),
        {
          success: _0x38290f,
          failed: _0x491f69,
          stopped: _0x48b00b,
          executed: _0x5ea247,
        }
      );
    };
  return {
    batchSaltFieldDig: async (_0x47eef6 = {}) => {
      var _0x4f45a3,
        _0x1d8275,
        _0x503336,
        _0x51fa56,
        _0x279b79,
        _0x5f02c4,
        _0x2e7970,
        _0x4a66b9;
      const _0x4c81f3 =
        Array["isArray"](_0x47eef6["tokenIds"]) &&
        _0x47eef6["tokenIds"]["length"]
          ? [..._0x47eef6["tokenIds"]]
          : [...((null == _0x2800df ? void 0x0 : _0x2800df["value"]) || [])];
      if (0x0 === _0x4c81f3["length"])
        return (
          _0x5d74fa({
            time: new Date()["toLocaleTimeString"](),
            message:
              "⚠️ 盐场刨地：未选择任何账号，请先在账号列表中勾选要执行的账号",
            type: "warning",
          }),
          {
            total: 0x0,
            success: 0x0,
            failed: 0x0,
            stopped: 0x0,
            concurrency: 0x0,
          }
        );
      const _0x5c6d7e = !0x0 === _0x47eef6["skipWindowCheck"];
      if (!_0x5c6d7e && !Q())
        return (
          _0x5d74fa({
            time: new Date()["toLocaleTimeString"](),
            message:
              "⚠️ 当前不在盐场活动时间窗内（每周六 20:00-21:00），已跳过批量执行",
            type: "warning",
          }),
          {
            total: _0x4c81f3["length"],
            success: 0x0,
            failed: 0x0,
            stopped: 0x0,
            concurrency: 0x0,
          }
        );
      const _0x393427 = (_0x4879a0) => {
          var _0xb41942;
          return (
            (null ==
            (_0xb41942 = _0x456c11["gameTokens"]["find"](
              (_0x433a0d) => _0x433a0d["id"] === _0x4879a0,
            ))
              ? void 0x0
              : _0xb41942["name"]) || String(_0x4879a0)["slice"](0x0, 0x8)
          );
        },
        _0x51f7c9 = Math["max"](
          0x1,
          Math["min"](
            Number(
              _0x47eef6["maxActive"] ||
                (null == _0xdab757
                  ? void 0x0
                  : _0xdab757["saltFieldConcurrency"]) ||
                (null == _0xdab757 ? void 0x0 : _0xdab757["maxActive"]),
            ) || 0x5,
            _0x4c81f3["length"],
          ),
        ),
        _0x5e96ae = Math["max"](
          0x0,
          Number(
            null !=
              (_0x1d8275 =
                null != (_0x4f45a3 = _0x47eef6["launchGapMs"])
                  ? _0x4f45a3
                  : null == _0xdab757
                    ? void 0x0
                    : _0xdab757["saltFieldLaunchGapMs"])
              ? _0x1d8275
              : 0x5dc,
          ),
        ),
        _0x1279b6 = Math["max"](
          0x0,
          Number(
            null !=
              (_0x51fa56 =
                null != (_0x503336 = _0x47eef6["batchGapMs"])
                  ? _0x503336
                  : null == _0xdab757
                    ? void 0x0
                    : _0xdab757["saltFieldBatchGapMs"])
              ? _0x51fa56
              : 0xbb8,
          ),
        ),
        _0x305c30 = _0x47eef6["stopRef"] || _0x3e65a0,
        _0x18eaf6 =
          null != (_0x279b79 = _0x47eef6["rotate"])
            ? _0x279b79
            : !0x0 ===
              (null == _0xdab757
                ? void 0x0
                : _0xdab757["saltFieldRotateEnabled"]),
        _0x6877ae = Math["min"](
          0x3c,
          Math["max"](
            0x1,
            Number(
              null != (_0x5f02c4 = _0x47eef6["batchMinutes"])
                ? _0x5f02c4
                : null == _0xdab757
                  ? void 0x0
                  : _0xdab757["saltFieldRotateMinutes"],
            ) || 0x3,
          ),
        ),
        _0x19d6d4 =
          null != (_0x2e7970 = _0x47eef6["loop"])
            ? _0x2e7970
            : !0x1 !==
              (null == _0xdab757 ? void 0x0 : _0xdab757["saltFieldRotateLoop"]),
        _0x470c54 = (function (_0xad9805) {
          const _0x277351 = String(null != _0xad9805 ? _0xad9805 : "")
            ["trim"]()
            ["match"](/^(\d{1,2})\s*[:\uff1a\u70b9]\s*(\d{1,2})?/);
          let _0x4efa81 = 0x15,
            _0x4ea78d = 0x0;
          _0x277351 &&
            ((_0x4efa81 = Math["min"](
              0x17,
              Math["max"](0x0, Number(_0x277351[0x1])),
            )),
            (_0x4ea78d = Math["min"](
              0x3b,
              Math["max"](0x0, Number(_0x277351[0x2] || 0x0)),
            )));
          const _0x287a6e = new Date();
          return (
            _0x287a6e["setHours"](_0x4efa81, _0x4ea78d, 0x0, 0x0),
            _0x287a6e["getTime"]()
          );
        })(
          null != (_0x4a66b9 = _0x47eef6["endTime"])
            ? _0x4a66b9
            : null == _0xdab757
              ? void 0x0
              : _0xdab757["saltFieldRotateEndTime"],
        );
      (_0x305c30 === _0x3e65a0 && (_0x3e65a0["value"] = !0x1),
        (_0x3432f4["value"] = !0x0));
      let _0x3a796e = 0x0,
        _0x23cac7 = 0x0,
        _0x5e07df = 0x0;
      const _0x1f2efc = new Set(),
        _0x30bf3b = (_0x1b1571) => {
          for (const _0x44089a of _0x1b1571) {
            try {
              _0x456c11["closeWebSocketConnection"](_0x44089a);
            } catch (_0x18b54f) {}
            if (_0x1f2efc["has"](_0x44089a))
              try {
                _0x5714d8 && _0x5714d8();
              } catch (_0x8629ef) {}
          }
        },
        _0x33c787 = async (_0x5e4f9d, _0x5c9ee3) => {
          const _0x184e16 = await _0x10969a(
            _0x5e4f9d,
            l(r({}, _0x5c9ee3), {
              label: "盐场刨地",
            }),
          );
          return (
            _0x184e16["executed"]["forEach"]((_0x3ba99a) =>
              _0x1f2efc["add"](_0x3ba99a),
            ),
            _0x184e16
          );
        };
      (_0x4c81f3["forEach"]((_0x3b82a3) => {
        _0x46fa20["value"][_0x3b82a3] = "waiting";
      }),
        _0x5d74fa({
          time: new Date()["toLocaleTimeString"](),
          message:
            "🚀 盐场刨地批量执行：共 " +
            _0x4c81f3["length"] +
            " 个账号，并发上限 " +
            _0x51f7c9 +
            "，账号启动间隔 " +
            _0x5e96ae +
            "ms" +
            (_0x18eaf6
              ? "，轮转模式：每批 " +
                _0x6877ae +
                " 分钟（批次间隔 " +
                _0x1279b6 +
                "ms），到 " +
                H(_0x470c54) +
                " 关闭所有账号"
              : "") +
            (_0x5c6d7e && !Q() ? "（手动执行，跳过时间窗校验）" : ""),
          type: "info",
        }));
      try {
        _0x18eaf6
          ? await (async () => {
              if (Date["now"]() >= _0x470c54)
                return (
                  _0x5d74fa({
                    time: new Date()["toLocaleTimeString"](),
                    message:
                      "⚠️ 盐场刨地轮转：当前已过结束时间 " +
                      H(_0x470c54) +
                      "，本次不执行",
                    type: "warning",
                  }),
                  void (_0x5e07df = _0x4c81f3["length"])
                );
              _0x5d74fa({
                time: new Date()["toLocaleTimeString"](),
                message:
                  "🔄 盐场刨地「轮转模式」：每批 " +
                  _0x51f7c9 +
                  " 个账号刨 " +
                  _0x6877ae +
                  " 分钟，" +
                  (_0x19d6d4
                    ? "全部账号轮完自动从第一批重新开始"
                    : "只跑一轮") +
                  "，剩余 " +
                  z(_0x470c54 - Date["now"]()) +
                  "，到 " +
                  H(_0x470c54) +
                  " 关闭所有账号",
                type: "info",
              });
              let _0x5e1bfe = 0x0,
                _0x4f2931 = 0x0,
                _0x27ee26 = 0x0;
              for (; !_0x305c30["value"] && Date["now"]() < _0x470c54;) {
                (_0x4f2931++,
                  _0x5d74fa({
                    time: new Date()["toLocaleTimeString"](),
                    message:
                      "🔁 第 " +
                      _0x4f2931 +
                      " 轮开始（剩余 " +
                      z(_0x470c54 - Date["now"]()) +
                      "）",
                    type: "info",
                  }));
                let _0x3a3a73 = 0x0;
                for (; !_0x305c30["value"] && Date["now"]() < _0x470c54;) {
                  const _0x553a7c = [];
                  for (
                    ;
                    _0x553a7c["length"] < _0x51f7c9 &&
                    _0x553a7c["length"] < _0x4c81f3["length"] &&
                    (_0x553a7c["push"](
                      _0x4c81f3[_0x5e1bfe % _0x4c81f3["length"]],
                    ),
                    _0x5e1bfe++,
                    _0x5e1bfe % _0x4c81f3["length"] !== 0x0);
                  );
                  if (0x0 === _0x553a7c["length"]) break;
                  _0x27ee26++;
                  const _0x366505 = _0x470c54 - Date["now"](),
                    _0x586121 = Math["max"](
                      0x3e8,
                      Math["min"](0xea60 * _0x6877ae, _0x366505),
                    );
                  (_0x5d74fa({
                    time: new Date()["toLocaleTimeString"](),
                    message:
                      "⛏ 第" +
                      _0x4f2931 +
                      "轮 第" +
                      _0x27ee26 +
                      "批（" +
                      _0x553a7c["length"] +
                      "个）：" +
                      _0x553a7c["map"](_0x393427)["join"]("\u3001") +
                      "，本批刨 " +
                      z(_0x586121) +
                      "（" +
                      H(Date["now"]() + _0x586121) +
                      " 收尾）",
                    type: "info",
                  }),
                    _0x553a7c["forEach"]((_0x2b06d9) => {
                      _0x46fa20["value"][_0x2b06d9] = "waiting";
                    }));
                  const _0x246de0 = {
                      value: !0x1,
                    },
                    _0x3e2c6e = setTimeout(() => {
                      _0x246de0["value"] = !0x0;
                    }, _0x586121),
                    _0x115980 = {
                      get value() {
                        return _0x305c30["value"] || _0x246de0["value"];
                      },
                    };
                  let _0x25b7a9;
                  try {
                    _0x25b7a9 = await _0x33c787(_0x553a7c, {
                      concurrency: _0x51f7c9,
                      launchGap: _0x5e96ae,
                      stopRef: _0x115980,
                      deferUnstarted: !0x0,
                    });
                  } finally {
                    (clearTimeout(_0x3e2c6e), (_0x246de0["value"] = !0x0));
                  }
                  if (
                    ((_0x3a796e += _0x25b7a9["success"]),
                    (_0x23cac7 += _0x25b7a9["failed"]),
                    (_0x5e07df += _0x25b7a9["stopped"]),
                    (_0x3a3a73 += _0x25b7a9["success"]),
                    _0x30bf3b(_0x553a7c),
                    _0x5d74fa({
                      time: new Date()["toLocaleTimeString"](),
                      message:
                        "⏸ 第" +
                        _0x4f2931 +
                        "轮 第" +
                        _0x27ee26 +
                        "批结束：成功 " +
                        _0x25b7a9["success"] +
                        " / 失败 " +
                        _0x25b7a9["failed"] +
                        "，已关闭本批 " +
                        _0x553a7c["length"] +
                        " 个账号连接",
                      type: "info",
                    }),
                    _0x5e1bfe % _0x4c81f3["length"] === 0x0)
                  )
                    break;
                  if (_0x305c30["value"] || Date["now"]() >= _0x470c54) break;
                  _0x1279b6 > 0x0 && (await _0x47ec2b(_0x1279b6));
                }
                if (
                  (_0x5d74fa({
                    time: new Date()["toLocaleTimeString"](),
                    message:
                      "✅ 第 " +
                      _0x4f2931 +
                      " 轮完成：本轮成功 " +
                      _0x3a3a73 +
                      " 个账号次（累计成功 " +
                      _0x3a796e +
                      "，失败 " +
                      _0x23cac7 +
                      "）",
                    type: "success",
                  }),
                  !_0x19d6d4)
                ) {
                  _0x5d74fa({
                    time: new Date()["toLocaleTimeString"](),
                    message: "⏹ 轮转设置为「只跑一轮」，结束",
                    type: "info",
                  });
                  break;
                }
                if (_0x305c30["value"] || Date["now"]() >= _0x470c54) break;
                _0x5d74fa({
                  time: new Date()["toLocaleTimeString"](),
                  message:
                    "🔁 全部 " +
                    _0x4c81f3["length"] +
                    " 个账号已完成第 " +
                    _0x4f2931 +
                    " 轮刨地，重新从第 1 批开始（剩余 " +
                    z(_0x470c54 - Date["now"]()) +
                    "）",
                  type: "info",
                });
              }
              (_0x5d74fa({
                time: new Date()["toLocaleTimeString"](),
                message:
                  "🏁 盐场刨地轮转结束（" +
                  (_0x305c30["value"]
                    ? "手动停止"
                    : "到达结束时间 " + H(_0x470c54)) +
                  "）：共 " +
                  _0x4f2931 +
                  " 轮 / " +
                  _0x27ee26 +
                  " 批，累计成功 " +
                  _0x3a796e +
                  "、失败 " +
                  _0x23cac7 +
                  "，正在关闭全部 " +
                  _0x4c81f3["length"] +
                  " 个账号连接",
                type: "info",
              }),
                _0x30bf3b(_0x4c81f3));
              const _0x176481 = _0x4c81f3["filter"]((_0x338693) => {
                const _0x3fd1d5 = _0x46fa20["value"][_0x338693];
                return (
                  "waiting" === _0x3fd1d5 ||
                  "running" === _0x3fd1d5 ||
                  void 0x0 === _0x3fd1d5
                );
              });
              _0x176481["length"] > 0x0 &&
                (_0x176481["forEach"]((_0x4d7c0f) => {
                  _0x46fa20["value"][_0x4d7c0f] = "completed";
                }),
                _0x5d74fa({
                  time: new Date()["toLocaleTimeString"](),
                  message:
                    "⏭\x20" +
                    _0x176481["length"] +
                    " 个账号本轮未轮到：" +
                    _0x176481["map"](_0x393427)["join"]("\u3001"),
                  type: "info",
                }));
            })()
          : await (async () => {
              const _0x599c2a = await _0x33c787(_0x4c81f3, {
                concurrency: _0x51f7c9,
                launchGap: _0x5e96ae,
                stopRef: _0x305c30,
              });
              ((_0x3a796e = _0x599c2a["success"]),
                (_0x23cac7 = _0x599c2a["failed"]),
                (_0x5e07df = _0x599c2a["stopped"]),
                _0x30bf3b(_0x4c81f3));
            })();
      } finally {
        _0x3432f4["value"] = !0x1;
      }
      return (
        _0x5d74fa({
          time: new Date()["toLocaleTimeString"](),
          message:
            "🏁 盐场刨地批量执行结束：成功 " +
            _0x3a796e +
            " / 失败 " +
            _0x23cac7 +
            (_0x5e07df ? " / 未完成 " + _0x5e07df : "") +
            "（共 " +
            _0x4c81f3["length"] +
            "）",
          type: "info",
        }),
        {
          total: _0x4c81f3["length"],
          success: _0x3a796e,
          failed: _0x23cac7,
          stopped: _0x5e07df,
          concurrency: _0x51f7c9,
        }
      );
    },
    batchSaltFieldLineup: async (_0x173f7e = {}) => {
      var _0x2f5bbb, _0x1cdfdd, _0x42a021, _0x1fe252;
      const _0x50783f =
        Array["isArray"](_0x173f7e["tokenIds"]) &&
        _0x173f7e["tokenIds"]["length"]
          ? [..._0x173f7e["tokenIds"]]
          : [...((null == _0x2800df ? void 0x0 : _0x2800df["value"]) || [])];
      if (0x0 === _0x50783f["length"])
        return (
          _0x5d74fa({
            time: new Date()["toLocaleTimeString"](),
            message:
              "⚠️ 盐场布阵：未选择任何账号，请先在账号列表中勾选要执行的账号",
            type: "warning",
          }),
          {
            total: 0x0,
            success: 0x0,
            failed: 0x0,
            stopped: 0x0,
            concurrency: 0x0,
            batches: 0x0,
          }
        );
      if (!Q())
        return (
          _0x5d74fa({
            time: new Date()["toLocaleTimeString"](),
            message:
              "⚠️ 盐场布阵：当前不在盐场活动时间窗内（每周六 20:00-21:00），布阵只在该时段生效，已跳过执行",
            type: "warning",
          }),
          {
            total: _0x50783f["length"],
            success: 0x0,
            failed: 0x0,
            stopped: 0x0,
            concurrency: 0x0,
            batches: 0x0,
          }
        );
      const _0x2c33b5 = (_0x43734d) => {
          var _0x96c1a6;
          return (
            (null ==
            (_0x96c1a6 = _0x456c11["gameTokens"]["find"](
              (_0x534611) => _0x534611["id"] === _0x43734d,
            ))
              ? void 0x0
              : _0x96c1a6["name"]) || String(_0x43734d)["slice"](0x0, 0x8)
          );
        },
        _0x223ece = Math["max"](
          0x1,
          Math["min"](
            Number(
              _0x173f7e["maxActive"] ||
                (null == _0xdab757
                  ? void 0x0
                  : _0xdab757["saltFieldConcurrency"]) ||
                (null == _0xdab757 ? void 0x0 : _0xdab757["maxActive"]),
            ) || 0x5,
            _0x50783f["length"],
          ),
        ),
        _0x48312a = Math["max"](
          0x0,
          Number(
            null !=
              (_0x1cdfdd =
                null != (_0x2f5bbb = _0x173f7e["launchGapMs"])
                  ? _0x2f5bbb
                  : null == _0xdab757
                    ? void 0x0
                    : _0xdab757["saltFieldLaunchGapMs"])
              ? _0x1cdfdd
              : 0x5dc,
          ),
        ),
        _0x557824 = Math["max"](
          0x0,
          Number(
            null !=
              (_0x1fe252 =
                null != (_0x42a021 = _0x173f7e["batchGapMs"])
                  ? _0x42a021
                  : null == _0xdab757
                    ? void 0x0
                    : _0xdab757["saltFieldBatchGapMs"])
              ? _0x1fe252
              : 0xbb8,
          ),
        ),
        _0x3300c6 = _0x173f7e["stopRef"] || _0x3e65a0;
      (_0x3300c6 === _0x3e65a0 && (_0x3e65a0["value"] = !0x1),
        (_0x3432f4["value"] = !0x0));
      let _0x2f9b33 = 0x0,
        _0x59edf6 = 0x0,
        _0x2601e1 = 0x0,
        _0x4a084c = 0x0;
      const _0x2899c8 = new Set(),
        _0x562b6e = (_0x330cb9) => {
          for (const _0x3433d9 of _0x330cb9) {
            try {
              _0x456c11["closeWebSocketConnection"](_0x3433d9);
            } catch (_0x348719) {}
            if (_0x2899c8["has"](_0x3433d9))
              try {
                _0x5714d8 && _0x5714d8();
              } catch (_0x3b5d79) {}
          }
        };
      _0x50783f["forEach"]((_0x1559f5) => {
        _0x46fa20["value"][_0x1559f5] = "waiting";
      });
      const _0x14bd42 = [];
      for (
        let _0x57f144 = 0x0;
        _0x57f144 < _0x50783f["length"];
        _0x57f144 += _0x223ece
      )
        _0x14bd42["push"](_0x50783f["slice"](_0x57f144, _0x57f144 + _0x223ece));
      _0x5d74fa({
        time: new Date()["toLocaleTimeString"](),
        message:
          "🚀 盐场布阵批量执行：共 " +
          _0x50783f["length"] +
          " 个账号，每批 " +
          _0x223ece +
          " 个（共 " +
          _0x14bd42["length"] +
          " 批），账号启动间隔 " +
          _0x48312a +
          "ms，批次间隔 " +
          _0x557824 +
          "ms（仅盐场活动时间 20:00-21:00 内执行）",
        type: "info",
      });
      try {
        for (
          let _0x4f5fcd = 0x0;
          _0x4f5fcd < _0x14bd42["length"];
          _0x4f5fcd++
        ) {
          const _0x30b186 = _0x14bd42[_0x4f5fcd];
          if (_0x3300c6["value"]) {
            ((_0x2601e1 += _0x30b186["length"]),
              _0x30b186["forEach"]((_0x4cd9c0) => {
                _0x46fa20["value"][_0x4cd9c0] = "failed";
              }));
            continue;
          }
          if (_0x4a084c > 0x0 && !Q()) {
            const _0x3fb60b = _0x14bd42["slice"](_0x4f5fcd)["flat"]();
            ((_0x2601e1 += _0x3fb60b["length"]),
              _0x3fb60b["forEach"]((_0x3c1b99) => {
                _0x46fa20["value"][_0x3c1b99] = "failed";
              }),
              _0x5d74fa({
                time: new Date()["toLocaleTimeString"](),
                message:
                  "⚠️ 盐场布阵：已超出活动时间窗（每周六 20:00-21:00），停止后续批次，剩余 " +
                  _0x3fb60b["length"] +
                  " 个账号未布阵（" +
                  _0x3fb60b["map"](_0x2c33b5)["join"]("\u3001") +
                  "）",
                type: "warning",
              }));
            break;
          }
          (_0x4a084c++,
            _0x5d74fa({
              time: new Date()["toLocaleTimeString"](),
              message:
                "🛡 第 " +
                _0x4a084c +
                "/" +
                _0x14bd42["length"] +
                " 批布阵（" +
                _0x30b186["length"] +
                "个）：" +
                _0x30b186["map"](_0x2c33b5)["join"]("\u3001"),
              type: "info",
            }));
          const _0x4f2a91 = {
              get value() {
                return _0x3300c6["value"];
              },
            },
            _0x24766b = await _0x10969a(_0x30b186, {
              concurrency: _0x223ece,
              launchGap: _0x48312a,
              stopRef: _0x4f2a91,
              deferUnstarted: !0x1,
              taskOpts: {
                lineupOnly: !0x0,
              },
              label: "盐场布阵",
            });
          if (
            (_0x24766b["executed"]["forEach"]((_0x2a99b5) =>
              _0x2899c8["add"](_0x2a99b5),
            ),
            (_0x2f9b33 += _0x24766b["success"]),
            (_0x59edf6 += _0x24766b["failed"]),
            (_0x2601e1 += _0x24766b["stopped"]),
            _0x562b6e(_0x30b186),
            _0x5d74fa({
              time: new Date()["toLocaleTimeString"](),
              message:
                "✅ 第 " +
                _0x4a084c +
                "/" +
                _0x14bd42["length"] +
                " 批布阵完成：成功 " +
                _0x24766b["success"] +
                " / 失败 " +
                _0x24766b["failed"] +
                "，已关闭本批 " +
                _0x30b186["length"] +
                " 个账号连接" +
                (_0x4f5fcd < _0x14bd42["length"] - 0x1 && !_0x3300c6["value"]
                  ? "，" + _0x557824 + "ms 后切换下一批"
                  : ""),
              type: "success",
            }),
            _0x3300c6["value"])
          )
            break;
          _0x4f5fcd < _0x14bd42["length"] - 0x1 &&
            _0x557824 > 0x0 &&
            (await _0x47ec2b(_0x557824));
        }
      } finally {
        _0x3432f4["value"] = !0x1;
      }
      return (
        _0x562b6e(_0x50783f),
        _0x5d74fa({
          time: new Date()["toLocaleTimeString"](),
          message:
            "🏁 盐场布阵批量执行结束：成功 " +
            _0x2f9b33 +
            " / 失败 " +
            _0x59edf6 +
            (_0x2601e1 ? " / 未完成 " + _0x2601e1 : "") +
            "（共 " +
            _0x50783f["length"] +
            "，已处理 " +
            _0x4a084c +
            " 批）",
          type: "info",
        }),
        {
          total: _0x50783f["length"],
          success: _0x2f9b33,
          failed: _0x59edf6,
          stopped: _0x2601e1,
          concurrency: _0x223ece,
          batches: _0x4a084c,
        }
      );
    },
    saltFieldDigForToken: _0x4bc73d,
    inSaltFieldWindow: Q,
  };
}
export { K as createSaltFieldTasks, Q as inSaltFieldWindow };
