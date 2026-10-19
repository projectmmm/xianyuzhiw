// Adapted from the supplied 2.57.2 game enhancement asset.
// Static strings decoded; obfuscator guards removed; frame access stays local.
!function () {
  if (!window["__xingchiAvatarHeadImgFixInstalled"]) {
    window["__xingchiAvatarHeadImgFixInstalled"] = !0x0;
    var _0x2eeb60 = 0x0,
      _0x5b8a64 = null;
    setTimeout(function _0x1a5825() {
      _0x2eeb60++, _0x525990();
      var _0x5b743b = function () {
          var _0x13f0c3 = _0xcf553a("PlayerInfoDialog");
          if (!_0x13f0c3) return !0x1;
          var _0x489723 = !0x1;
          return ["PlayerInfoDialog", "PlayerInfoTopDialog"]["forEach"](function (_0x496b00) {
            var _0x3f33a0 = _0x13f0c3[_0x496b00] && _0x13f0c3[_0x496b00]["prototype"];
            if (_0x3f33a0 && "function" == typeof _0x3f33a0["_isNeedUpgrade"]) {
              if (_0x3f33a0["_isNeedUpgrade"]["__xingchiAvatarPatched"]) _0x489723 = !0x0;else {
                var _0x2d0390 = _0x3f33a0["_isNeedUpgrade"];
                _0x3f33a0["_isNeedUpgrade"] = function () {
                  return !0x1;
                }, _0x3f33a0["_isNeedUpgrade"]["__xingchiAvatarPatched"] = !0x0, _0x3f33a0["__xingchiAvatarOriginalIsNeedUpgrade"] = _0x2d0390, _0x489723 = !0x0;
              }
            }
          }), _0x489723;
        }(),
        _0x533fc5 = _0x168a61();
      _0x5b743b && _0x533fc5 ? function () {
        try {
          var _0x3d104c = Array["prototype"]["slice"]["call"](arguments);
          _0x3d104c["unshift"]("[AvatarHeadImgFix]"), console["log"]["apply"](console, _0x3d104c);
        } catch (_0x5b3789) {}
      }("ready") : _0x2eeb60 < 0x78 && setTimeout(_0x1a5825, 0x1f4);
    }, 0x1f40);
  }
  function _0xcf553a(_0x325074) {
    try {
      var _0x550852 = "function" == typeof window["__require"] ? window["__require"] : null;
      return _0x550852 ? _0x550852(_0x325074) : null;
    } catch (_0x17b953) {
      return null;
    }
  }
  function _0x525990() {
    var _0x510429 = _0xcf553a("PlatformManager");
    !_0x5b8a64 && _0x510429 && "function" == typeof _0x510429["getClientVersion"] && (_0x5b8a64 = function () {
      return _0x510429["getClientVersion"]();
    });
    var _0x1e17d0 = _0x510429 && _0x510429["PlatformManager"] && _0x510429["PlatformManager"]["instance"];
    _0x1e17d0 && (_0x1e17d0["getClientVersion"] = function () {
      return Promise["resolve"](function () {
        try {
          if (_0x5b8a64) {
            var _0x36d56b = _0x5b8a64();
            if (_0x36d56b && "function" == typeof _0x36d56b["then"]) return _0x36d56b;
            if (_0x36d56b) return String(_0x36d56b);
          }
        } catch (_0x2edbbf) {}
        for (var _0x33960c = [window["GAME_VERSION"], window["gameVersion"], window["__GAME_VERSION__"], window["__gameVersion"]], _0x5e9387 = 0x0; _0x5e9387 < _0x33960c["length"]; _0x5e9387++) if (_0x33960c[_0x5e9387]) return String(_0x33960c[_0x5e9387]);
        return "";
      }());
    });
  }
  function _0x2b0d92(_0x3b2832, _0x200bb0) {
    var _0x37c38b = document["createElement"]("canvas");
    _0x37c38b["width"] = _0x200bb0, _0x37c38b["height"] = _0x200bb0;
    var _0x5902ca = _0x37c38b["getContext"]("2d");
    _0x5902ca["fillStyle"] = "#fff", _0x5902ca["fillRect"](0x0, 0x0, _0x200bb0, _0x200bb0);
    var _0x580015 = _0x3b2832["naturalWidth"] || _0x3b2832["width"],
      _0x53223b = _0x3b2832["naturalHeight"] || _0x3b2832["height"],
      _0x2479ce = Math["min"](_0x580015, _0x53223b),
      _0x10ebdf = Math["max"](0x0, (_0x580015 - _0x2479ce) / 0x2),
      _0x114bbc = Math["max"](0x0, (_0x53223b - _0x2479ce) / 0x2);
    return _0x5902ca["drawImage"](_0x3b2832, _0x10ebdf, _0x114bbc, _0x2479ce, _0x2479ce, 0x0, 0x0, _0x200bb0, _0x200bb0), _0x37c38b["toDataURL"]("image/jpeg", 0.86)["split"](",")[0x1] || "";
  }
  function _0x168a61() {
    var _0x43e613 = _0xcf553a("PlatformManager"),
      _0x5006a1 = _0x43e613 && _0x43e613["PlatformManager"] && _0x43e613["PlatformManager"]["instance"];
    return !!_0x5006a1 && (_0x5006a1["chooseImage"] && _0x5006a1["chooseImage"]["__xingchiAvatarPatched"] || (_0x5006a1["chooseImage"] = function (_0xdcbfe7) {
      return function (_0x5244a9) {
        return new Promise(function (_0x26138d, _0x19edc8) {
          var _0x3186a6 = document["createElement"]("input");
          _0x3186a6["type"] = "file", _0x3186a6["accept"] = "image/*", _0x3186a6["style"]["cssText"] = "position:fixed;left:-9999px;top:-9999px;width:1px;height:1px;opacity:0;", document["body"]["appendChild"](_0x3186a6), _0x3186a6["onchange"] = function () {
            var _0x5a2b31 = _0x3186a6["files"] && _0x3186a6["files"][0x0];
            clearTimeout(_0x52a817);
            try {
              document["body"]["removeChild"](_0x3186a6);
            } catch (_0x1c3c78) {}
            if (_0x5a2b31) {
              var _0x565063 = new FileReader();
              _0x565063["onload"] = function () {
                var _0x59599e = new Image();
                _0x59599e["onload"] = function () {
                  try {
                    var _0x793265 = _0x5244a9 && _0x5244a9[0x0] ? _0x5244a9[0x0] : 0x200,
                      _0x2efc66 = _0x5244a9 && _0x5244a9[0x1] ? _0x5244a9[0x1] : 0x62;
                    _0x26138d({
                      base64s: [_0x2b0d92(_0x59599e, _0x793265), _0x2b0d92(_0x59599e, _0x2efc66)]
                    });
                  } catch (_0x18a543) {
                    _0x19edc8(_0x18a543 && _0x18a543["message"] ? _0x18a543["message"] : _0x18a543);
                  }
                }, _0x59599e["onerror"] = function () {
                  _0x19edc8("image load fail");
                }, _0x59599e["src"] = _0x565063["result"];
              }, _0x565063["onerror"] = function () {
                _0x19edc8("read fail");
              }, _0x565063["readAsDataURL"](_0x5a2b31);
            } else _0x19edc8("no file");
          };
          var _0x52a817 = setTimeout(function () {
            try {
              document["body"]["removeChild"](_0x3186a6);
            } catch (_0x1eb3a4) {}
          }, 0x1d4c0);
          _0x3186a6["addEventListener"]("cancel", function () {
            clearTimeout(_0x52a817);
            try {
              document["body"]["removeChild"](_0x3186a6);
            } catch (_0x58529a) {}
            _0x19edc8("cancel");
          }), _0x3186a6["click"]();
        });
      }(_0xdcbfe7);
    }, _0x5006a1["chooseImage"]["__xingchiAvatarPatched"] = !0x0, _0x5006a1["readImgFile"] = function () {
      return Promise["resolve"]("");
    }), !0x0);
  }
}();
