// Adapted from the supplied 2.57.2 game enhancement asset.
// Static strings decoded; obfuscator guards removed; frame access stays local.
!function () {
  "use strict";
  var _0x41332e = "[自动重连]",
    _0x554347 = /hortorgames\.com\/agent/i,
    _0x13ef60 = ["Idle", "Connecting", "Running", "Reconnecting", "Error"],
    _0x67d69e = null,
    _0x4e6b73 = null,
    _0x50a63a = null,
    _0x1e36c3 = !0x1,
    _0x21e2a9 = !0x1,
    _0x508129 = 0x0,
    _0x1911ab = -0x1,
    _0x237454 = 0x0,
    _0x2465e7 = 0x0,
    _0xf68a78 = 0x0,
    _0x5bcd61 = null,
    _0x166aaa = null,
    _0x2971a0 = null;
  function _0x5900c2() {
    var _0x513d81 = window["ws"];
    if (_0x513d81 && "number" == typeof _0x513d81["connectionState"]) return _0x50a63a = _0x513d81, _0x513d81["connectionState"];
    if (_0x513d81 && _0x513d81["_ws"] && "number" == typeof _0x513d81["_ws"]["readyState"]) {
      _0x50a63a = _0x513d81;
      var _0x44ed7a = _0x513d81["_ws"]["readyState"];
      return 0x1 === _0x44ed7a ? 0x2 : 0x3 === _0x44ed7a ? 0x0 : _0x44ed7a;
    }
    return _0x50a63a = _0x513d81 || null, -0x1;
  }
  function _0x136fde(_0x193ccc) {
    var _0x1c9484 = _0x5900c2();
    if (0x2 !== _0x1c9484) {
      if (0x3 !== _0x1c9484 && _0x21e2a9 && !_0x5bcd61) {
        var _0x1e4cb2 = Date["now"]();
        if (!(_0x1e4cb2 - _0x237454 < 0x2710)) {
          if (_0x237454 = _0x1e4cb2, _0xf68a78++, _0x2465e7++, console["log"](_0x41332e, "🔄 [" + _0x193ccc + "] 页面内自动重连 第" + _0xf68a78 + "/3次"), _0x4e15ca("reconnecting"), _0x224683("ws_reconnecting", {
            count: _0x2465e7
          }), _0xf68a78 > 0x3) return console["warn"](_0x41332e, "页面内重连已达上限，转为刷新页面"), _0x4e15ca("failed"), _0x224683("ws_reconnect_failed", {
            count: _0x2465e7
          }), void _0x1b9349();
          _0x5bcd61 = setTimeout(function () {
            if (_0x5bcd61 = null, !function () {
              if (!_0x50a63a) return !0x1;
              try {
                var _0x51d85f = _0x50a63a["connectOptions"],
                  _0x572e51 = _0x51d85f && "object" == typeof _0x51d85f && (_0x51d85f["url"] || _0x51d85f["token"]);
                if (0x0 !== _0x5900c2() && "function" == typeof _0x50a63a["reset"] && _0x50a63a["reset"](), "function" == typeof _0x50a63a["connect"] && _0x572e51) return _0x50a63a["connect"](_0x51d85f), console["log"](_0x41332e, "✅ 已通过引擎恢复机制重建连接 (第" + (_0xf68a78 + 0x1) + "\u6b21)"), !0x0;
                if ("function" == typeof _0x50a63a["interrupt"]) return _0x50a63a["interrupt"](), console["log"](_0x41332e, "✅ 已触发引擎自动重连状态机 (第" + (_0xf68a78 + 0x1) + "\u6b21)"), !0x0;
              } catch (_0x54516f) {
                console["warn"](_0x41332e, "引擎软重连失败:", _0x54516f["message"]);
              }
              return !0x1;
            }()) try {
              _0x67d69e && _0x67d69e["readyState"] === WebSocket["OPEN"] ? (_0x67d69e["close"](0xfa0, "auto-reconnect"), console["log"](_0x41332e, "已关闭旧连接以触发引擎重连")) : _0x1b9349();
            } catch (_0x24364c) {
              _0x1b9349();
            }
          }, 0x0);
        }
      }
    } else _0x1e36c3 = !0x0;
  }
  function _0x9cabe3() {
    _0x95abc7(), _0x166aaa = setInterval(function () {
      var _0x361ab6 = _0x5900c2();
      if (0x2 === _0x361ab6 || -0x1 === _0x361ab6 && _0x1e36c3) {
        var _0x2f6d58 = Date["now"]() - _0x508129;
        if (_0x2f6d58 > 0x3a98) {
          console["log"](_0x41332e, "⚠️ " + Math["round"](_0x2f6d58 / 0x3e8) + "秒无消息，连接疑似挂起，触发引擎重连");
          try {
            _0x50a63a && "function" == typeof _0x50a63a["interrupt"] ? _0x50a63a["interrupt"]() : _0x67d69e && _0x67d69e["readyState"] === WebSocket["OPEN"] && _0x67d69e["close"](0xfa0, "idle-probe");
          } catch (_0x528c62) {}
          _0x508129 = Date["now"]();
        }
        _0x224683("ws_health", {
          connected: _0x1e36c3,
          readyState: _0x361ab6,
          idleSeconds: Math["round"](_0x2f6d58 / 0x3e8),
          reconnectCount: _0x2465e7
        });
      }
    }, 0x3a98);
  }
  function _0x95abc7() {
    _0x166aaa && (clearInterval(_0x166aaa), _0x166aaa = null);
  }
  function _0x2ced4f() {
    _0x2971a0 && (clearInterval(_0x2971a0), _0x2971a0 = null);
  }
  window["__autoReconnectActive"] = !0x0;
  var _0xe5241b = window["WebSocket"];
  if (_0xe5241b && !_0xe5241b["__auto_reconnect_hooked"]) {
    function _0x4e8ba1(_0x8b4027, _0x467665) {
      var _0x322aeb = _0x467665 ? new _0xe5241b(_0x8b4027, _0x467665) : new _0xe5241b(_0x8b4027);
      return "string" == typeof _0x8b4027 && _0x554347["test"](_0x8b4027) && (_0x67d69e = _0x322aeb, _0x4e6b73 = _0x8b4027, _0x1e36c3 = !0x1, _0x508129 = Date["now"](), _0x322aeb["addEventListener"]("open", function () {
        _0x1e36c3 = !0x0, _0x508129 = Date["now"]();
      }), _0x322aeb["addEventListener"]("message", function () {
        _0x508129 = Date["now"]();
      }), _0x322aeb["addEventListener"]("close", function (_0x350295) {
        _0x1e36c3 = !0x1, _0x508129 = 0x0, console["log"](_0x41332e, "❌ 连接断开 code=" + _0x350295["code"] + " reason=" + (_0x350295["reason"] || "\u65e0")), _0x4e15ca("disconnected"), _0x224683("ws_disconnected", {
          code: _0x350295["code"],
          reason: _0x350295["reason"]
        }), _0x136fde("连接断开");
      }), _0x322aeb["addEventListener"]("error", function (_0x135a27) {
        console["warn"](_0x41332e, "⚠️ 连接错误:", _0x135a27 && (_0x135a27["message"] || _0x135a27["type"])), _0x224683("ws_error", {
          error: _0x135a27 && (_0x135a27["message"] || _0x135a27["type"])
        });
      })), _0x322aeb;
    }
    _0x4e8ba1["prototype"] = _0xe5241b["prototype"], _0x4e8ba1["CONNECTING"] = _0xe5241b["CONNECTING"], _0x4e8ba1["OPEN"] = _0xe5241b["OPEN"], _0x4e8ba1["CLOSING"] = _0xe5241b["CLOSING"], _0x4e8ba1["CLOSED"] = _0xe5241b["CLOSED"], _0x4e8ba1["__auto_reconnect_hooked"] = !0x0, _0x4e8ba1["__original"] = _0xe5241b;
    try {
      window["WebSocket"] = _0x4e8ba1;
    } catch (_0x2e9196) {}
    console["log"](_0x41332e, "WebSocket Hook 已安装");
  }
  function _0x224683(_0x56d9e0, _0x12a00a) {
    if (window !== window) try {
      window["postMessage"]({
        type: "WS_STATUS",
        wsType: _0x56d9e0,
        tokenId: window["_gameTokenId"] || "",
        data: _0x12a00a || {}
      }, "*");
    } catch (_0x3dca1a) {}
  }
  let refreshScheduled = false;
  function _0x1b9349() {
    if (refreshScheduled) return;
    let attempts = [];
    try { attempts = JSON.parse(sessionStorage.getItem("xyzw_reconnect_refresh_v1") || "[]").filter((time) => Number.isFinite(time) && Date.now() - time < 600000); } catch { attempts = []; }
    if (attempts.length >= 3) { console.warn("[自动重连] 刷新次数已达上限，请手动检查连接"); return; }
    refreshScheduled = true;
    attempts.push(Date.now());
    try { sessionStorage.setItem("xyzw_reconnect_refresh_v1", JSON.stringify(attempts)); } catch { /* Frame memory still prevents duplicate scheduling. */ }
    const timer = setTimeout(() => window.location.reload(), 10000);
    window.addEventListener("pagehide", () => clearTimeout(timer), {once:true});
  }

  window["addEventListener"]("message", function (_0x15c78f) {
    if (_0x15c78f.origin !== window.location.origin || _0x15c78f.source !== window) return;
    if (_0x15c78f["data"] && _0x15c78f["data"]["type"]) {
      if ("WS_HEALTH_PING" !== _0x15c78f["data"]["type"]) return "WS_FORCE_REFRESH" === _0x15c78f["data"]["type"] ? (console["log"](_0x41332e, "收到父窗口强制刷新指令"), void window["location"]["reload"]()) : void 0x0;
      _0x224683("ws_health_pong", {
        connected: _0x1e36c3,
        readyState: _0x5900c2(),
        lastMessageAt: _0x508129,
        reconnectCount: _0x2465e7
      });
    }
  });
  var _0x313a33 = null,
    _0x15f8e9 = null;
  function _0x4e15ca(_0x54d27a) {
    if (!_0x313a33) try {
      _0x313a33 || ((_0x313a33 = document["createElement"]("div"))["id"] = "__ws_indicator", _0x313a33["style"]["cssText"] = "position:fixed;top:4px;right:4px;z-index:99999;font-size:10px;padding:2px 6px;border-radius:4px;color:#fff;pointer-events:none;opacity:0.7;font-family:monospace;transition:all 0.3s;", _0x15f8e9 = document["createElement"]("span"), _0x313a33["appendChild"](_0x15f8e9), document["body"]["appendChild"](_0x313a33));
    } catch (_0x570c86) {
      return;
    }
    if (_0x313a33) switch (_0x54d27a) {
      case "connected":
        _0x313a33["style"]["background"] = "rgba(74,222,128,0.3)", _0x313a33["style"]["color"] = "#4ade80", _0x15f8e9["textContent"] = "● 已连接", setTimeout(function () {
          _0x313a33 && (_0x313a33["style"]["opacity"] = "0.3");
        }, 0xbb8);
        break;
      case "disconnected":
        _0x313a33["style"]["background"] = "rgba(255,77,79,0.4)", _0x313a33["style"]["color"] = "#ff4d4f", _0x313a33["style"]["opacity"] = "1", _0x15f8e9["textContent"] = "● 已断开";
        break;
      case "reconnecting":
        _0x313a33["style"]["background"] = "rgba(250,173,19,0.4)", _0x313a33["style"]["color"] = "#faad13", _0x313a33["style"]["opacity"] = "1", _0x15f8e9["textContent"] = "◌ 重连中...";
        break;
      case "failed":
        _0x313a33["style"]["background"] = "rgba(255,77,79,0.6)", _0x313a33["style"]["color"] = "#ff4d4f", _0x313a33["style"]["opacity"] = "1", _0x15f8e9["textContent"] = "✕ 重连失败";
    }
  }
  function _0x563f3e() {
    for (var _0xe02f9b = window, _0xd5ea9f = [_0xe02f9b["ws"], _0xe02f9b["h5websocket"] && _0xe02f9b["h5websocket"]["ws"], _0xe02f9b["h5websocket"], _0xe02f9b["gameWs"], _0xe02f9b["WebSocketClient"] && _0xe02f9b["WebSocketClient"]["ws"], _0xe02f9b["WebSocketClient"]], _0x12a709 = 0x0; _0x12a709 < _0xd5ea9f["length"]; _0x12a709++) {
      var _0xac2650 = _0xd5ea9f[_0x12a709];
      if (_0xac2650) {
        var _0x2df9f9 = _0xac2650["_ws"] || _0xac2650["socket"] || _0xac2650;
        if (_0x2df9f9 && _0x2df9f9["url"] && _0x554347["test"](_0x2df9f9["url"]) && 0x1 === _0x2df9f9["readyState"]) return _0x67d69e = _0x2df9f9, _0x4e6b73 = _0x2df9f9["url"], _0x1e36c3 = !0x0, _0x21e2a9 = !0x0, _0x508129 = Date["now"](), console["log"](_0x41332e, "已发现游戏连接"), _0x4e15ca("connected"), void _0x9cabe3();
      }
    }
  }
  setTimeout(_0x563f3e, 0x1388), setTimeout(_0x563f3e, 0x3a98), _0x2ced4f(), _0x2971a0 = setInterval(function () {
    var _0x1b3ca9 = _0x5900c2();
    if (-0x1 !== _0x1b3ca9) {
      if (_0x1b3ca9 !== _0x1911ab) switch (_0x1911ab = _0x1b3ca9, console["log"](_0x41332e, "引擎连接状态 →", _0x13ef60[_0x1b3ca9] || "\u672a\u77e5" + _0x1b3ca9), _0x1b3ca9) {
        case 0x2:
          _0x21e2a9 = !0x0, _0x1e36c3 = !0x0, _0xf68a78 = 0x0, _0x2465e7 = 0x0, _0x508129 = Date["now"](), _0x4e15ca("connected"), _0x224683("ws_connected", {}), _0x9cabe3();
          break;
        case 0x3:
          _0x1e36c3 = !0x1, _0x4e15ca("reconnecting");
          break;
        case 0x4:
          _0x1e36c3 = !0x1, _0x4e15ca("disconnected"), _0x224683("ws_disconnected", {
            code: -0x1,
            reason: "engine-error"
          }), _0x95abc7(), _0x21e2a9 && _0x136fde("引擎连接错误");
          break;
        case 0x0:
          _0x1e36c3 = !0x1, _0x21e2a9 && !_0x5bcd61 && _0x136fde("引擎空闲");
      } else 0x4 === _0x1b3ca9 && _0x21e2a9 && !_0x5bcd61 && _0x136fde("引擎Error卡死");
    } else _0x1e36c3 || !_0x21e2a9 || _0x5bcd61 || _0x136fde("引擎状态未知");
  }, 0x7d0), window["addEventListener"]("beforeunload", function () {
    _0x95abc7(), _0x2ced4f();
  }), console["log"](_0x41332e, "已就绪 (页面内重连上限3次, 冷却10s, 超限转刷新页面)");
}();
