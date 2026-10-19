// Adapted from the supplied 2.57.2 game enhancement asset.
// Static strings decoded; obfuscator guards removed; frame access stays local.
!function () {
  "use strict";
  const _0x3f10cc = {
      seq: 0x1,
      isWaitingForResponse: !0x1,
      battleData: null,
      position: {
        x: 0xa,
        y: 0xa
      },
      isCollapsed: !0x0,
      originalSendAsync: null,
      isMonitoring: !0x0,
      hasUnreadData: !0x1,
      interceptedRoleId: null,
      interceptedRoleName: null,
      roleIdHistory: [],
      isRoleIdMonitoring: !0x0,
      interceptCount: 0x0,
      activeTab: "wash",
      visibleStart: 0x0,
      visibleCount: 0x5,
      itemHeight: 0x28
    },
    _0x23afec = "opponent-wash-",
    _0xd93d6b = {
      0x65: "司马懿",
      0x66: "\u90ed\u5609",
      0x67: "\u5173\u7fbd",
      0x68: "诸葛亮",
      0x69: "\u5468\u745c",
      0x6a: "太史慈",
      0x6b: "\u5415\u5e03",
      0x6c: "\u534e\u4f57",
      0x6d: "\u7504\u59ec",
      0x6e: "黄月英",
      0x6f: "\u5b59\u7b56",
      0x70: "\u8d3e\u8be9",
      0x71: "\u66f9\u4ec1",
      0x72: "\u59dc\u7ef4",
      0x73: "\u5b59\u575a",
      0x74: "公孙瓒",
      0x75: "\u5178\u97e6",
      0x76: "\u8d75\u4e91",
      0x77: "\u5927\u4e54",
      0x78: "\u5f20\u89d2",
      0xc9: "\u5f90\u6643",
      0xca: "\u8340\u5f67",
      0xcb: "橙典韦",
      0xcc: "\u5f20\u98de",
      0xcd: "橙赵云",
      0xce: "\u5e9e\u7edf",
      0xcf: "\u9c81\u8083",
      0xd0: "\u9646\u900a",
      0xd1: "\u7518\u5b81",
      0xd2: "\u8c82\u8749",
      0xd3: "\u8463\u5353",
      0xd4: "橙张角",
      0xd5: "\u5f20\u8fbd",
      0xd6: "夏侯惇",
      0xd7: "\u8bb8\u8bf8",
      0xd8: "夏侯渊",
      0xd9: "\u9b4f\u5ef6",
      0xda: "\u9ec4\u5fe0",
      0xdb: "\u9a6c\u8d85",
      0xdc: "\u9a6c\u5cb1",
      0xdd: "\u5415\u8499",
      0xde: "\u9ec4\u76d6",
      0xdf: "蔡文姬",
      0xe0: "\u5c0f\u4e54",
      0xe1: "\u8881\u7ecd",
      0xe2: "\u534e\u96c4",
      0xe3: "\u989c\u826f",
      0xe4: "\u6587\u4e11",
      0x12d: "\u5468\u6cf0",
      0x12e: "\u8bb8\u6538",
      0x12f: "\u4e8e\u7981",
      0x130: "张星彩",
      0x131: "关银屏",
      0x132: "\u5173\u5e73",
      0x133: "\u7a0b\u666e",
      0x134: "\u5f20\u662d",
      0x135: "\u9646\u7ee9",
      0x136: "吕玲绮",
      0x137: "\u6f58\u51e4",
      0x138: "邢道荣",
      0x139: "祝融夫人",
      0x13a: "\u5b5f\u83b7"
    },
    _0x70e9b5 = {
      attack: "攻击力",
      hp: "生命值",
      speed: "\u901f\u5ea6",
      0x33: "\u7834\u7532",
      0x34: "破甲抵抗",
      0x35: "\u7cbe\u51c6",
      0x36: "\u683c\u6321",
      0x38: "\u51cf\u4f24",
      0x39: "\u66b4\u51fb",
      0x3a: "暴击抵抗",
      0x3b: "\u7206\u4f24",
      0x3c: "爆伤抵抗",
      0x3d: "技能伤害",
      0x3e: "技能减伤",
      0x3f: "\u514d\u63a7",
      0x40: "控制命中",
      0x41: "眩晕免疫",
      0x42: "冰冻免疫",
      0x43: "沉默免疫",
      0x44: "流血免疫",
      0x45: "中毒免疫",
      0x46: "灼烧免疫",
      0x50: "灼烧命中",
      0x65: "VIP增减伤",
      0xe2: "战士抵抗",
      0xe3: "肉盾抵抗",
      0xe4: "辅助抵抗",
      0xe5: "法师抵抗",
      0xe6: "刺客抵抗",
      0xe7: "射手抵抗",
      0x12d: "怒气速率",
      0x5: "阵营光环+徽章",
      0xfc32f: "\u788e\u76fe",
      0xfc330: "\u51a5\u60f3",
      0xfc331: "\u5b9a\u5fc3",
      0xfc332: "\u51b0\u6e05",
      0xfc333: "\u653b\u5fc3",
      0xfc334: "\u5f3a\u6743",
      0xfc335: "\u76fe\u51fb",
      0xfc336: "\u5408\u529b",
      0xfc337: "\u4ec1\u5fc3",
      0xfc338: "\u6e38\u9f99",
      0xfc339: "\u56de\u5143"
    },
    _0x42be0f = {
      0x44d: "黄金锦鲤",
      0x44e: "\u5229\u5203",
      0x44f: "\u60ca\u6d9b",
      0x450: "\u9a87\u6d6a",
      0x451: "\u661f\u9a70",
      0x452: "\u540c\u5fc3",
      0x454: "协力♂",
      0x455: "协力♀",
      0x456: "\u6708\u5149",
      0x457: "铁血♂",
      0x458: "铁血♀",
      0x459: "丹心♂",
      0x45a: "丹心♀",
      0x45b: "\u5de8\u7075",
      0x45c: "剑胆♂",
      0x45d: "剑胆♀",
      0x45e: "\u7487\u7391"
    },
    _0x3b0cba = ["fight_startpvp", "fight_startareaarena"],
    _0x1409fc = ["rank_getroleinfo", "rank_get_role_info"],
    _0xc135e = "OpponentWashDB",
    _0x2d68c6 = "roleIds";
  let _0x64b1f2 = null;
  async function _0x561a4c() {
    return new Promise((_0x444ff9, _0x2fd9d7) => {
      const _0x337a13 = indexedDB["open"](_0xc135e, 0x1);
      _0x337a13["onerror"] = () => {
        console["error"]("[对手洗练] 数据库打开失败", _0x337a13["error"]), _0x2fd9d7(_0x337a13["error"]);
      }, _0x337a13["onsuccess"] = () => {
        _0x64b1f2 = _0x337a13["result"], console["log"]("[对手洗练] 数据库连接成功"), _0x444ff9(_0x64b1f2);
      }, _0x337a13["onupgradeneeded"] = _0x1f3420 => {
        if (_0x64b1f2 = _0x1f3420["target"]["result"], !_0x64b1f2["objectStoreNames"]["contains"](_0x2d68c6)) {
          const _0x539784 = _0x64b1f2["createObjectStore"](_0x2d68c6, {
            keyPath: "id",
            autoIncrement: !0x0
          });
          _0x539784["createIndex"]("roleId", "roleId", {
            unique: !0x1
          }), _0x539784["createIndex"]("roleName", "roleName", {
            unique: !0x1
          }), _0x539784["createIndex"]("timestamp", "timestamp", {
            unique: !0x1
          }), _0x539784["createIndex"]("source", "source", {
            unique: !0x1
          }), console["log"]("[对手洗练] 数据库对象存储创建成功");
        }
      };
    });
  }
  async function _0x5b8e06(_0x1216f7) {
    return _0x64b1f2 || (await _0x561a4c()), new Promise((_0x536ff3, _0x2f8fc4) => {
      const _0x5bd922 = _0x64b1f2["transaction"]([_0x2d68c6], "readwrite")["objectStore"](_0x2d68c6),
        _0x4238a5 = {
          ..._0x1216f7,
          timestamp: Date["now"](),
          createTime: new Date()["toLocaleString"]("zh-CN")
        },
        _0xaeacec = _0x5bd922["add"](_0x4238a5);
      _0xaeacec["onsuccess"] = () => {
        console["log"]("[对手洗练] RoleID保存成功:", _0x1216f7["roleId"]), _0x536ff3(_0xaeacec["result"]);
      }, _0xaeacec["onerror"] = () => {
        console["error"]("[对手洗练] RoleID保存失败:", _0xaeacec["error"]), _0x2f8fc4(_0xaeacec["error"]);
      };
    });
  }
  async function _0x57100a(_0x3572ac = 0x64) {
    return _0x64b1f2 || (await _0x561a4c()), new Promise((_0xc017cf, _0x4858ca) => {
      const _0x5f3e72 = _0x64b1f2["transaction"]([_0x2d68c6], "readonly")["objectStore"](_0x2d68c6)["index"]("timestamp"),
        _0x4d934d = [];
      let _0x167427 = 0x0;
      const _0x3ed952 = _0x5f3e72["openCursor"](null, "prev");
      _0x3ed952["onsuccess"] = _0x60ef48 => {
        const _0x77718b = _0x60ef48["target"]["result"];
        _0x77718b && _0x167427 < _0x3572ac ? (_0x4d934d["push"](_0x77718b["value"]), _0x167427++, _0x77718b["continue"]()) : (console["log"]("[对手洗练] 从数据库加载了 " + _0x4d934d["length"] + " 条记录"), _0xc017cf(_0x4d934d));
      }, _0x3ed952["onerror"] = () => {
        console["error"]("[对手洗练] 获取记录失败:", _0x3ed952["error"]), _0x4858ca(_0x3ed952["error"]);
      };
    });
  }
  async function _0x2b2d58(_0x1ce178) {
    return _0x64b1f2 || (await _0x561a4c()), new Promise((_0x264084, _0x53f01a) => {
      const _0x5820a0 = _0x64b1f2["transaction"]([_0x2d68c6], "readwrite")["objectStore"](_0x2d68c6)["delete"](_0x1ce178);
      _0x5820a0["onsuccess"] = () => {
        console["log"]("[对手洗练] 记录删除成功:", _0x1ce178), _0x264084();
      }, _0x5820a0["onerror"] = () => {
        console["error"]("[对手洗练] 删除记录失败:", _0x5820a0["error"]), _0x53f01a(_0x5820a0["error"]);
      };
    });
  }
  function _0x198691(_0x5ae8d9, _0x1d86b1 = "info") {
    document["querySelectorAll"]("." + _0x23afec + "tip")["forEach"](_0x5ea0ec => _0x5ea0ec["remove"]());
    const _0x7714d4 = document["createElement"]("div");
    _0x7714d4["className"] = _0x23afec + "tip", _0x7714d4["textContent"] = _0x5ae8d9;
    const _0x222fbd = {
        info: "#4A90E2",
        success: "#51CF66",
        error: "#FF6B6B",
        warning: "#FFD93D"
      },
      _0x4caec1 = _0x222fbd[_0x1d86b1] || _0x222fbd["info"];
    if (_0x7714d4["style"]["cssText"] = "\n            position: fixed;\n            top: 20px;\n            right: 20px;\n            background: " + _0x4caec1 + ";\n            color: white;\n            padding: 10px 18px;\n            border-radius: 6px;\n            font-size: 13px;\n            font-weight: 600;\n            z-index: 100000;\n            box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);\n            animation: " + _0x23afec + "slideIn 0.3s ease;\n        ", !document["getElementById"](_0x23afec + "animations")) {
      const _0x6c2919 = document["createElement"]("style");
      _0x6c2919["id"] = _0x23afec + "animations", _0x6c2919["textContent"] = "\n                @keyframes " + _0x23afec + "slideIn {\n                    from { transform: translateX(100%); opacity: 0; }\n                    to { transform: translateX(0); opacity: 1; }\n                }\n            ", document["head"]["appendChild"](_0x6c2919);
    }
    document["body"]["appendChild"](_0x7714d4), setTimeout(() => {
      _0x7714d4["style"]["opacity"] = "0", _0x7714d4["style"]["transform"] = "translateX(100%)", setTimeout(() => _0x7714d4["remove"](), 0x12c);
    }, 0xbb8);
  }
  async function _0x3f9704(_0x151b2d, _0x368159, _0x34d723 = "未知名称") {
    if (!_0x151b2d || -0x1 === _0x151b2d || !_0x3f10cc["isRoleIdMonitoring"]) return;
    _0x3f10cc["interceptedRoleId"] = _0x151b2d, _0x3f10cc["interceptedRoleName"] = decodeURIComponent(_0x34d723) || "未知名称", _0x3f10cc["interceptCount"]++;
    const _0x2f1ca8 = await async function (_0x39ab5d, _0x1fd9d5 = 0x927c0) {
      return _0x64b1f2 || (await _0x561a4c()), new Promise((_0x6e16d2, _0x309081) => {
        const _0x2b9f26 = _0x64b1f2["transaction"]([_0x2d68c6], "readonly")["objectStore"](_0x2d68c6)["index"]("roleId")["openCursor"](IDBKeyRange["only"](_0x39ab5d), "prev");
        _0x2b9f26["onsuccess"] = _0x2c00fa => {
          const _0x296cf6 = _0x2c00fa["target"]["result"];
          if (_0x296cf6) {
            const _0x182c50 = _0x296cf6["value"];
            Date["now"]() - _0x182c50["timestamp"] < _0x1fd9d5 ? _0x6e16d2(!0x0) : _0x296cf6["continue"]();
          } else _0x6e16d2(!0x1);
        }, _0x2b9f26["onerror"] = () => {
          console["error"]("[对手洗练] 检查重复失败:", _0x2b9f26["error"]), _0x6e16d2(!0x1);
        };
      });
    }(_0x151b2d, 0x927c0);
    if (_0x2f1ca8) console["log"]("[对手洗练] RoleID " + _0x151b2d + " 最近已记录，但仍然自动查询");else try {
      await _0x5b8e06({
        roleId: _0x151b2d,
        roleName: _0x3f10cc["interceptedRoleName"],
        source: _0x368159,
        power: _0x3f10cc["battleData"]?.["rightTeam"]?.["power"] || 0x0,
        headImg: _0x3f10cc["battleData"]?.["rightTeam"]?.["headImg"] || ""
      }), _0x5c17c8();
    } catch (_0x372111) {
      console["error"]("[对手洗练] 保存到数据库失败:", _0x372111);
    }
    _0x3f10cc["roleIdHistory"]["unshift"]({
      roleId: _0x151b2d,
      roleName: _0x3f10cc["interceptedRoleName"],
      time: new Date()["toLocaleString"]("zh-CN"),
      source: _0x368159
    }), _0x407da1(_0x151b2d), _0x3a7d96(), _0x3f10cc["isWaitingForResponse"] || setTimeout(() => {
      _0x46e958(!0x0);
    }, 0x1f4), _0x198691("✅ 拦截到角色: " + _0x3f10cc["interceptedRoleName"] + " (ID: " + _0x151b2d + ")，已保存到数据库", "success");
  }
  function _0x407da1(_0x5d931d) {
    const _0x418d73 = document["getElementById"](_0x23afec + "target-id");
    _0x418d73 && (_0x418d73["value"] = _0x5d931d, _0x418d73["dispatchEvent"](new Event("input", {
      bubbles: !0x0
    })), _0x418d73["dispatchEvent"](new Event("change", {
      bubbles: !0x0
    })));
  }
  async function _0x4b3d96() {
    console["log"]("[对手洗练] 等待游戏加载完成...");
    try {
      await _0x561a4c(), await _0x319300();
    } catch (_0x172d27) {
      console["error"]("[对手洗练] 数据库初始化失败:", _0x172d27);
    }
    const _0x845a88 = setInterval(() => {
      window["ws"] && "function" == typeof window["ws"]["sendAsync"] && (clearInterval(_0x845a88), console["log"]("[对手洗练] 游戏加载完成！"), function () {
        const _0x5f26c6 = document["createElement"]("style");
        _0x5f26c6["textContent"] = "\n            /* 原有样式保留，优化输入框和标签页样式 */\n            ." + _0x23afec + "switch {\n                position: relative; display: inline-block; width: 40px; height: 20px;\n            }\n            ." + _0x23afec + "switch input { opacity: 0; width: 0; height: 0; }\n            ." + _0x23afec + "slider {\n                position: absolute; cursor: pointer; top: 0; left: 0; right: 0; bottom: 0;\n                background-color: #ccc; transition: .4s; border-radius: 20px;\n            }\n            ." + _0x23afec + 'slider:before {\n                position: absolute; content: ""; height: 16px; width: 16px; left: 2px; bottom: 2px;\n                background-color: white; transition: .4s; border-radius: 50%;\n            }\n            input:checked + .' + _0x23afec + "slider { background-color: #407BFF; }\n            input:focus + ." + _0x23afec + "slider { box-shadow: 0 0 1px #407BFF; }\n            input:checked + ." + _0x23afec + "slider:before { transform: translateX(20px); }\n\n            #" + _0x23afec + "assistant {\n                position: fixed; top: " + _0x3f10cc["position"]["y"] + "px; left: " + _0x3f10cc["position"]["x"] + "px;\n                width: auto; min-width: 300px; max-width: 90vw; background: #ffffff;\n                height: auto; max-height: none;\n                border: 1px solid #d1d5db; border-radius: 6px;\n                box-shadow: 0 1px 4px rgba(0, 0, 0, 0.1);\n                z-index: 99999 !important;\n                font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;\n                overflow: visible; transition: all 0.2s ease;\n                cursor: default; user-select: none;\n                max-height: 90vh; overflow-y: auto;\n                font-size: 12px; /* 全局字体大小调大 */\n            }\n\n            /* 移除响应式布局，统一使用紧凑样式 */\n            ." + _0x23afec + "content { padding: 12px; }\n            ." + _0x23afec + "hero-selector { gap: 4px; }\n            ." + _0x23afec + "hero-item { padding: 3px 4px; flex: 1 0 calc(20% - 4px); }\n            ." + _0x23afec + "hero-item ." + _0x23afec + "hero-name { font-size: 9px; }\n            ." + _0x23afec + "hero-item ." + _0x23afec + "hero-position { font-size: 7px; }\n            ." + _0x23afec + "hero-stats { font-size: 12px; gap: 5px; }\n\n            /* 最小化状态 - 独立的图标容器 */\n            #" + _0x23afec + "assistant." + _0x23afec + "collapsed {\n                all: unset !important; /* 重置所有样式 */\n                position: fixed !important;\n                width: 14px !important;\n                height: 14px !important;\n                top: 10px !important;\n                left: 10px !important;\n                z-index: 99999 !important;\n                cursor: pointer !important;\n                user-select: none !important;\n            }\n            \n            /* 最小化图标 */\n            ." + _0x23afec + "collapsed-icon {\n                display: none;\n                width: 14px;\n                height: 14px;\n                border-radius: 3px;\n                background: #6b7280;\n                color: white;\n                font-size: 11px;\n                line-height: 14px;\n                text-align: center;\n                box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);\n                transition: all 0.2s ease;\n            }\n            \n            ." + _0x23afec + "collapsed-icon:hover {\n                background: #4b5563;\n                transform: scale(1.1);\n            }\n            \n            ." + _0x23afec + "collapsed-icon." + _0x23afec + "has-unread {\n                background: #3b82f6;\n            }\n            \n            ." + _0x23afec + "collapsed-icon." + _0x23afec + "has-unread:hover {\n                background: #2563eb;\n            }\n            \n            #" + _0x23afec + "assistant." + _0x23afec + "collapsed ." + _0x23afec + "collapsed-icon {\n                display: block !important;\n            }\n            \n            /* 展开状态下隐藏所有内容 */\n            #" + _0x23afec + "assistant." + _0x23afec + "collapsed ." + _0x23afec + "header,\n            #" + _0x23afec + "assistant." + _0x23afec + "collapsed ." + _0x23afec + "content {\n                display: none !important;\n            }\n\n            ." + _0x23afec + "header {\n                padding: 6px 10px; background: #6b7280; color: white;\n                display: flex; justify-content: space-between; align-items: center;\n                user-select: none; height: 24px;\n            }\n\n            ." + _0x23afec + "title { display: flex; align-items: center; gap: 5px; font-size: 12px; font-weight: 600; }\n\n            ." + _0x23afec + "icon {\n                font-size: 12px; line-height: 1;\n                display: flex; align-items: center; justify-content: center;\n            }\n\n            ." + _0x23afec + "controls-minimal { display: flex; align-items: center; gap: 4px; }\n            #" + _0x23afec + "assistant." + _0x23afec + "collapsed ." + _0x23afec + "controls-minimal { display: none; }\n\n            #" + _0x23afec + "toggle {\n                width: 20px; height: 20px; display: flex; align-items: center; justify-content: center;\n                border: none; background: transparent; color: white; cursor: pointer;\n                font-size: 14px; padding: 0; margin: 0; line-height: 1;\n            }\n            #" + _0x23afec + "toggle:hover { background: rgba(255, 255, 255, 0.2); border-radius: 2px; }\n\n            ." + _0x23afec + "content {\n                padding: 10px; transition: all 0.2s ease;\n                overflow: visible; height: auto;\n            }\n            #" + _0x23afec + "assistant." + _0x23afec + "collapsed ." + _0x23afec + "content { max-height: 0; padding: 0; }\n\n            ." + _0x23afec + "section { margin-bottom: 10px; }\n            ." + _0x23afec + "section:last-child { margin-bottom: 0; }\n\n            /* 输入框布局 */\n            ." + _0x23afec + "input-group { display: flex; align-items: center; gap: 6px; margin-bottom: 8px; }\n            ." + _0x23afec + "target-id-wrapper { flex: 1; min-width: 120px; }\n            ." + _0x23afec + "input {\n                width: 100%; padding: 6px 8px; border: 1px solid #d1d5db;\n                border-radius: 4px; font-size: 12px; outline: none;\n                transition: border-color 0.2s;\n            }\n            ." + _0x23afec + "input:focus { border-color: #3b82f6; }\n\n            ." + _0x23afec + "btn {\n                padding: 6px 12px; border: none; border-radius: 4px;\n                font-size: 12px; font-weight: 600; cursor: pointer;\n                transition: all 0.2s; display: inline-flex; align-items: center;\n                justify-content: center; gap: 4px;\n            }\n            ." + _0x23afec + "btn." + _0x23afec + "primary { background: #3b82f6; color: white; }\n            ." + _0x23afec + "btn." + _0x23afec + "primary:hover { background: #2563eb; }\n            ." + _0x23afec + "btn." + _0x23afec + "primary:active { background: #1d4ed8; }\n            ." + _0x23afec + "btn:disabled { opacity: 0.5; cursor: not-allowed; }\n\n            /* 监控开关样式 */\n            ." + _0x23afec + "monitor-switch-wrapper {\n                display: flex; align-items: center; gap: 6px;\n                color: #374151; font-size: 12px;\n                flex-shrink: 0;\n            }\n            ." + _0x23afec + "monitor-label { font-weight: 500; font-size: 11px; }\n\n            /* 标签页样式 */\n            ." + _0x23afec + "tabs {\n                display: flex; \n                border-bottom: 1px solid #e2e8f0; \n                margin-bottom: 8px;\n                padding-left: 6px;\n                justify-content: center;\n            }\n            ." + _0x23afec + "tab {\n                padding: 6px 16px; cursor: pointer; font-size: 12px; font-weight: 600;\n                color: #64748b; border-bottom: 2px solid transparent;\n                transition: all 0.2s;\n            }\n            ." + _0x23afec + "tab:hover { color: #3b82f6; }\n            ." + _0x23afec + "tab." + _0x23afec + "active {\n                color: #3b82f6; border-bottom-color: #3b82f6;\n            }\n            ." + _0x23afec + "tab-content { display: none; }\n            ." + _0x23afec + "tab-content." + _0x23afec + "active { display: block; }\n\n            /* 历史记录样式 */\n            ." + _0x23afec + "history-panel {\n                background: #f8fafc; \n                border-radius: 6px; \n                padding: 8px;\n                height: 250px;\n                overflow-y: auto;\n                position: relative;\n            }\n            ." + _0x23afec + "virtual-scroll-container {\n                position: relative;\n                width: 100%;\n            }\n            ." + _0x23afec + "virtual-scroll-spacer {\n                position: absolute;\n                top: 0;\n                left: 0;\n                width: 1px;\n                pointer-events: none;\n            }\n            ." + _0x23afec + "virtual-scroll-viewport {\n                position: relative;\n                width: 100%;\n            }\n            ." + _0x23afec + "history-item {\n                display: flex; justify-content: space-between; align-items: center;\n                padding: 6px 8px; margin: 3px 0;\n                background: white; border-radius: 4px; border: 1px solid #e2e8f0;\n                cursor: pointer; transition: all 0.2s;\n                box-sizing: border-box;\n                position: absolute; /* 虚拟滚动需要 */\n                left: 0;\n                right: 0;\n            }\n            ." + _0x23afec + "history-item-left {\n                display: flex;\n                align-items: center;\n                gap: 10px;\n                flex: 1;\n            }\n            ." + _0x23afec + "history-checkbox {\n                width: 14px;\n                height: 14px;\n                cursor: pointer;\n            }\n            ." + _0x23afec + "history-item-content {\n                flex: 1;\n                display: flex;\n                justify-content: space-between;\n                align-items: center;\n            }\n            ." + _0x23afec + "history-delete {\n                padding: 3px 8px;\n                background: #ef4444;\n                color: white;\n                border: none;\n                border-radius: 4px;\n                font-size: 11px;\n                cursor: pointer;\n                transition: background 0.2s;\n            }\n            ." + _0x23afec + "history-delete:hover {\n                background: #dc2626;\n            }\n            ." + _0x23afec + "history-name {\n                font-size: 11px; font-weight: 600; color: #1e40af;\n                white-space: nowrap; overflow: hidden; text-overflow: ellipsis;\n                max-width: 120px;\n            }\n            ." + _0x23afec + "history-id {\n                font-size: 11px; color: #64748b; margin-left: 5px;\n            }\n            ." + _0x23afec + "history-meta {\n                display: flex; align-items: center; gap: 6px;\n                font-size: 10px; color: #94a3b8;\n            }\n            ." + _0x23afec + "no-history {\n                color: #94a3b8; font-size: 12px; text-align: center;\n                padding: 20px;\n            }\n            ." + _0x23afec + "history-actions {\n                display: flex; gap: 4px; margin-bottom: 6px;\n                justify-content: center;\n                flex-wrap: wrap;\n            }\n            ." + _0x23afec + "btn-sm {\n                padding: 4px 10px; font-size: 11px;\n            }\n            ." + _0x23afec + "db-stats {\n                padding: 3px 8px;\n                background: #eff6ff;\n                border-radius: 4px;\n                margin-bottom: 6px;\n                text-align: center;\n                font-size: 10px;\n            }\n            ." + _0x23afec + "btn-secondary {\n                background: #6b7280; color: white;\n            }\n            ." + _0x23afec + "btn-secondary:hover {\n                background: #4b5563;\n            }\n\n            /* 战斗面板样式 */\n            ." + _0x23afec + "battle-panel {\n                background: #f8fafc; border-radius: 6px;\n                padding: 8px; height: auto; max-height: none;\n                overflow: visible;\n            }\n            ." + _0x23afec + "player-info {\n                display: flex; align-items: center; margin-bottom: 6px;\n                padding: 4px 6px; background: #f8fafc; border-radius: 4px;\n                border: 1px solid #e2e8f0;\n            }\n            ." + _0x23afec + "player-header {\n                display: flex; align-items: center; gap: 5px;\n                width: 100%; justify-content: flex-start;\n            }\n            ." + _0x23afec + "player-avatar {\n                width: 32px; height: 32px; border-radius: 50%;\n                border: 1px solid #e2e8f0;\n            }\n            ." + _0x23afec + "player-name {\n                font-size: 11px; font-weight: 600; color: #1e40af;\n                white-space: nowrap;\n            }\n            ." + _0x23afec + "player-id { font-size: 11px; color: #64748b; }\n\n            ." + _0x23afec + "hero-selector {\n                display: flex; gap: 3px; margin-bottom: 6px;\n                overflow: hidden; padding-bottom: 2px;\n                flex-wrap: wrap; justify-content: space-between;\n            }\n            ." + _0x23afec + "hero-item {\n                background: white; border-radius: 3px; padding: 2px 4px;\n                border: 1px solid #e2e8f0; cursor: pointer;\n                transition: all 0.2s ease; text-align: center;\n                flex: 1 0 calc(20% - 3px); min-width: 0; box-sizing: border-box;\n            }\n            ." + _0x23afec + "hero-item:hover { border-color: #93c5fd; background: #eff6ff; }\n            ." + _0x23afec + "hero-item." + _0x23afec + "selected {\n                border-color: #3b82f6; background: #dbeafe;\n                box-shadow: 0 2px 4px rgba(59, 130, 246, 0.2);\n            }\n\n            ." + _0x23afec + "hero-details {\n                background: white; border-radius: 4px; padding: 8px;\n                border: 1px solid #e2e8f0; height: auto; overflow: visible;\n                width: 100%; box-sizing: border-box;\n            }\n            ." + _0x23afec + "hero-item ." + _0x23afec + "hero-name {\n                font-size: 10px; font-weight: 600; color: #374151;\n                margin-bottom: 1px; white-space: nowrap;\n                overflow: hidden; text-overflow: ellipsis;\n            }\n            ." + _0x23afec + "hero-item ." + _0x23afec + "hero-position {\n                font-size: 8px; color: #64748b;\n            }\n            ." + _0x23afec + "hero-stats {\n                display: grid; grid-template-columns: repeat(2, 1fr);\n                gap: 6px; font-size: 11px; color: #374151;\n                margin-bottom: 8px;\n            }\n            /* 鱼灵和鱼珠作为属性行显示 */\n            ." + _0x23afec + "fish-stat,\n            ." + _0x23afec + "pearl-stat {\n                display: flex;\n                justify-content: space-between;\n                align-items: center;\n                padding: 1px 0 !important;\n                line-height: 1.1 !important;\n            }\n            ." + _0x23afec + "fish-stat-name,\n            ." + _0x23afec + "pearl-stat-name {\n                font-weight: 600;\n                font-size: 12px;\n                color: #374151;\n            }\n            ." + _0x23afec + "fish-stat-value,\n            ." + _0x23afec + "pearl-stat-value {\n                font-weight: 700;\n                color: #1e40af;\n                font-size: 12px;\n                text-align: right;\n            }\n            ." + _0x23afec + "hero-stat {\n                display: flex; justify-content: space-between; align-items: center;\n                padding: 1px 0 !important; line-height: 1.1 !important;\n            }\n            ." + _0x23afec + "hero-stat-name { font-weight: 600; }\n            ." + _0x23afec + "hero-stat-value {\n                font-weight: 700; color: #1e40af; font-size: 12px;\n            }\n\n            /* 滚动条样式 */\n            ." + _0x23afec + "battle-panel::-webkit-scrollbar,\n            ." + _0x23afec + "history-panel::-webkit-scrollbar { width: 3px; }\n            ." + _0x23afec + "battle-panel::-webkit-scrollbar-track,\n            ." + _0x23afec + "history-panel::-webkit-scrollbar-track { background: #f1f5f9; }\n            ." + _0x23afec + "battle-panel::-webkit-scrollbar-thumb,\n            ." + _0x23afec + "history-panel::-webkit-scrollbar-thumb {\n                background: #cbd5e1; border-radius: 1.5px;\n            }\n            ." + _0x23afec + "battle-panel::-webkit-scrollbar-thumb:hover,\n            ." + _0x23afec + "history-panel::-webkit-scrollbar-thumb:hover { background: #94a3b8; }\n        ", document["head"]["appendChild"](_0x5f26c6);
        const _0x25d0da = document["createElement"]("div");
        if (_0x25d0da["id"] = _0x23afec + "assistant", _0x25d0da["className"] = "", _0x25d0da["innerHTML"] = '\n            <div class="' + _0x23afec + 'collapsed-icon" id="' + _0x23afec + 'collapsed-icon">🔒</div>\n            <div class="' + _0x23afec + 'header">\n                <div class="' + _0x23afec + 'title">\n                    <span class="' + _0x23afec + 'icon">📋</span>\n                    <span>对手洗练（自动查询）</span>\n                </div>\n                <div class="' + _0x23afec + 'controls-minimal">\n                    <button id="' + _0x23afec + 'toggle" title="折叠/展开（有新数据时显示🔓）" style="width: 14px; height: 14px; display: flex; align-items: center; justify-content: center;">\n                        🔒\n                    </button>\n                </div>\n            </div>\n            <div class="' + _0x23afec + 'content">\n                <!-- 输入区域 -->\n                <div class="' + _0x23afec + 'section" style="margin-bottom: 10px;">\n                    <div class="' + _0x23afec + 'input-group">\n                        <div class="' + _0x23afec + 'target-id-wrapper">\n                            <input type="number" class="' + _0x23afec + 'input" id="' + _0x23afec + 'target-id" placeholder="输入ID" />\n                        </div>\n                        <button class="' + _0x23afec + "btn " + _0x23afec + 'primary" id="' + _0x23afec + 'send-challenge">\n                            获取洗炼\n                        </button>\n                        <!-- 监控开关 -->\n                        <label class="' + _0x23afec + 'monitor-switch-wrapper">\n                            <span class="' + _0x23afec + 'monitor-label">监控</span>\n                            <label class="' + _0x23afec + 'switch">\n                                <input type="checkbox" id="' + _0x23afec + 'roleid-monitor-switch" checked>\n                                <span class="' + _0x23afec + 'slider"></span>\n                            </label>\n                        </label>\n                    </div>\n                    <div id="' + _0x23afec + 'player-info-container" style="display: none;">\n                        <div class="' + _0x23afec + 'player-info" id="' + _0x23afec + 'player-info">\n                            <!-- 玩家信息将在这里显示 -->\n                        </div>\n                    </div>\n                </div>\n\n                <!-- 新增标签页 -->\n                <div class="' + _0x23afec + 'tabs">\n                    <div class="' + _0x23afec + "tab " + _0x23afec + 'active" data-tab="wash">查询洗炼</div>\n                    <div class="' + _0x23afec + 'tab" data-tab="history">历史查询</div>\n                </div>\n\n                <!-- 标签页内容：查询洗炼（原内容） -->\n                <div class="' + _0x23afec + "tab-content " + _0x23afec + 'active" id="' + _0x23afec + 'wash-tab" style="height: auto; overflow: visible;">\n                    <div class="' + _0x23afec + 'battle-panel" id="' + _0x23afec + 'battle-panel">\n                        <div class="' + _0x23afec + 'hero-selector" id="' + _0x23afec + 'hero-selector">\n                            <!-- 武将选择器 -->\n                        </div>\n                        <div class="' + _0x23afec + 'hero-details" id="' + _0x23afec + 'hero-details">\n                            <!-- 选中武将的详细属性 -->\n                        </div>\n                    </div>\n                </div>\n\n                <!-- 标签页内容：历史查询 -->\n                <div class="' + _0x23afec + 'tab-content" id="' + _0x23afec + 'history-tab">\n                    <div class="' + _0x23afec + 'db-stats" id="' + _0x23afec + 'db-stats">\n                        <span style="font-size: 11px; color: #64748b;">数据库记录：<span id="' + _0x23afec + 'db-count">0</span> 条</span>\n                    </div>\n                    <div class="' + _0x23afec + 'history-actions">\n                        <button class="' + _0x23afec + "btn " + _0x23afec + 'btn-secondary btn-sm" id="' + _0x23afec + 'export-db">\n                            导出数据\n                        </button>\n                        <button class="' + _0x23afec + "btn " + _0x23afec + 'btn-secondary btn-sm" id="' + _0x23afec + 'import-db">\n                            导入数据\n                        </button>\n                        <button class="' + _0x23afec + "btn " + _0x23afec + 'btn-secondary btn-sm" id="' + _0x23afec + 'batch-delete" style="background: #ef4444;">\n                            批量删除\n                        </button>\n                        <button class="' + _0x23afec + "btn " + _0x23afec + 'btn-secondary btn-sm" id="' + _0x23afec + 'clear-history">\n                            清空历史\n                        </button>\n                    </div>\n                    <div class="' + _0x23afec + 'history-panel" id="' + _0x23afec + 'history-panel">\n                        <div class="' + _0x23afec + 'no-history">正在加载历史记录...</div>\n                    </div>\n                </div>\n            </div>\n        ', document["body"]["appendChild"](_0x25d0da), function () {
          const _0x371fdb = document["getElementById"](_0x23afec + "assistant");
          if (!_0x371fdb) return;
          _0x371fdb["addEventListener"]("click", _0x1940ea => {
            const _0x398c98 = _0x1940ea["target"];
            if (_0x3f10cc["isCollapsed"] && (_0x398c98["id"] === _0x23afec + "collapsed-icon" || _0x398c98["closest"]("#" + _0x23afec + "collapsed-icon"))) return _0x1940ea["stopPropagation"](), void _0x563e18();
            if (_0x398c98["id"] === _0x23afec + "toggle" || _0x398c98["closest"]("#" + _0x23afec + "toggle")) _0x1940ea["stopPropagation"](), _0x563e18();else {
              if (_0x398c98["closest"]("." + _0x23afec + "header") && !_0x398c98["closest"]("#" + _0x23afec + "toggle")) _0x1940ea["stopPropagation"](), _0x563e18();else {
                if (_0x398c98["closest"]("#" + _0x23afec + "send-challenge")) _0x1940ea["stopPropagation"](), _0x46e958(!0x1);else {
                  if (_0x398c98["closest"]("." + _0x23afec + "hero-item")) {
                    _0x1940ea["stopPropagation"]();
                    const _0x13ea84 = _0x398c98["closest"]("." + _0x23afec + "hero-item"),
                      _0x1e5b14 = _0x13ea84["dataset"]["position"],
                      _0x2efbe4 = (_0x3f10cc["battleData"]?.["rightTeam"]?.["team"] || {})[_0x1e5b14];
                    _0x2efbe4 && (document["querySelectorAll"]("." + _0x23afec + "hero-item")["forEach"](_0x5748b6 => {
                      _0x5748b6["classList"]["remove"](_0x23afec + "selected");
                    }), _0x13ea84["classList"]["add"](_0x23afec + "selected"), _0x212a9f(_0x2efbe4, _0x1e5b14));
                  } else {
                    if (_0x398c98["closest"]("." + _0x23afec + "tab")) {
                      _0x1940ea["stopPropagation"]();
                      const _0x14ec45 = _0x398c98["closest"]("." + _0x23afec + "tab"),
                        _0x5e4e10 = _0x14ec45["dataset"]["tab"];
                      document["querySelectorAll"]("." + _0x23afec + "tab")["forEach"](_0xe756ea => _0xe756ea["classList"]["remove"](_0x23afec + "active")), document["querySelectorAll"]("." + _0x23afec + "tab-content")["forEach"](_0x5f4f07 => _0x5f4f07["classList"]["remove"](_0x23afec + "active")), _0x14ec45["classList"]["add"](_0x23afec + "active"), document["getElementById"]("" + _0x23afec + _0x5e4e10 + "-tab")["classList"]["add"](_0x23afec + "active"), _0x3f10cc["activeTab"] = _0x5e4e10;
                    } else {
                      if (_0x398c98["closest"]("." + _0x23afec + "history-item-content")) {
                        _0x1940ea["stopPropagation"]();
                        const _0x11075f = _0x398c98["closest"]("." + _0x23afec + "history-item"),
                          _0x3f9798 = _0x11075f["dataset"]["roleid"],
                          _0x21ddb4 = _0x11075f["dataset"]["rolename"];
                        _0x3f9798 && (_0x407da1(_0x3f9798), document["querySelectorAll"]("." + _0x23afec + "tab")["forEach"](_0x508554 => _0x508554["classList"]["remove"](_0x23afec + "active")), document["querySelectorAll"]("." + _0x23afec + "tab-content")["forEach"](_0x2a951f => _0x2a951f["classList"]["remove"](_0x23afec + "active")), document["querySelector"]("." + _0x23afec + 'tab[data-tab="wash"]')["classList"]["add"](_0x23afec + "active"), document["getElementById"](_0x23afec + "wash-tab")["classList"]["add"](_0x23afec + "active"), _0x3f10cc["activeTab"] = "wash", _0x46e958(!0x1), _0x198691("已选择角色: " + _0x21ddb4 + " (ID: " + _0x3f9798 + ")", "success"));
                      } else {
                        if (_0x398c98["classList"]["contains"](_0x23afec + "history-delete")) {
                          _0x1940ea["stopPropagation"]();
                          const _0xc1851e = _0x398c98["dataset"]["roleid"],
                            _0xaa1561 = parseInt(_0x398c98["dataset"]["index"]);
                          confirm("确定要删除该记录吗？") && async function (_0x159747, _0x412046) {
                            try {
                              await _0x2b2d58(_0x159747), _0x3f10cc["roleIdHistory"]["splice"](_0x412046, 0x1), _0x3a7d96(), _0x5c17c8(), _0x198691("删除成功", "success");
                            } catch (_0x45440d) {
                              console["error"]("[对手洗炼] 删除失败:", _0x45440d), _0x198691("删除失败，请重试", "error");
                            }
                          }(_0xc1851e, _0xaa1561);
                        } else {
                          if (_0x398c98["closest"]("#" + _0x23afec + "batch-delete")) {
                            _0x1940ea["stopPropagation"]();
                            const _0x1dc1b4 = document["querySelectorAll"]("." + _0x23afec + "history-checkbox:checked");
                            if (0x0 === _0x1dc1b4["length"]) return void _0x198691("请先选择要删除的记录", "warning");
                            confirm("确定要删除选中的 " + _0x1dc1b4["length"] + " 条记录吗？") && async function (_0x6b1c80) {
                              try {
                                const _0x38daf5 = Array["from"](_0x6b1c80)["map"](_0x4c6e1a => _0x4c6e1a["dataset"]["roleid"]);
                                let _0x3dba91 = 0x0;
                                for (const _0x1fe754 of _0x38daf5) try {
                                  await _0x2b2d58(_0x1fe754), _0x3dba91++;
                                } catch (_0x189196) {
                                  console["warn"]("删除记录失败: " + _0x1fe754, _0x189196);
                                }
                                _0x3f10cc["roleIdHistory"] = _0x3f10cc["roleIdHistory"]["filter"](_0x542356 => !_0x38daf5["includes"](_0x542356["roleId"]["toString"]())), _0x3f10cc["visibleStart"] = 0x0, _0x3a7d96(), _0x5c17c8(), _0x198691("成功删除 " + _0x3dba91 + " 条记录", "success");
                              } catch (_0x3539d2) {
                                console["error"]("[对手洗炼] 批量删除失败:", _0x3539d2), _0x198691("批量删除失败，请重试", "error");
                              }
                            }(_0x1dc1b4);
                          } else _0x398c98["closest"]("#" + _0x23afec + "clear-history") ? (_0x1940ea["stopPropagation"](), confirm("确定要清空所有历史记录吗？此操作将同时清空数据库。") && (_0x3f10cc["visibleStart"] = 0x0, async function () {
                            try {
                              await async function () {
                                return _0x64b1f2 || (await _0x561a4c()), new Promise((_0x5011a3, _0x2d430e) => {
                                  const _0x4b8ced = _0x64b1f2["transaction"]([_0x2d68c6], "readwrite")["objectStore"](_0x2d68c6)["clear"]();
                                  _0x4b8ced["onsuccess"] = () => {
                                    console["log"]("[对手洗练] 数据库已清空"), _0x5011a3();
                                  }, _0x4b8ced["onerror"] = () => {
                                    console["error"]("[对手洗练] 清空数据库失败:", _0x4b8ced["error"]), _0x2d430e(_0x4b8ced["error"]);
                                  };
                                });
                              }(), _0x3f10cc["roleIdHistory"] = [], _0x3a7d96(), _0x5c17c8(), _0x198691("所有历史记录已清空", "info");
                            } catch (_0xbbba31) {
                              console["error"]("[对手洗练] 清空失败:", _0xbbba31), _0x198691("清空失败，请重试", "error");
                            }
                          }())) : _0x398c98["closest"]("#" + _0x23afec + "export-db") ? (_0x1940ea["stopPropagation"](), async function () {
                            try {
                              const _0x5f1488 = await _0x57100a(0x2710),
                                _0xf468dc = JSON["stringify"](_0x5f1488, null, 0x2),
                                _0x589c58 = new Blob([_0xf468dc], {
                                  type: "application/json"
                                }),
                                _0x4e8122 = URL["createObjectURL"](_0x589c58),
                                _0xacba33 = document["createElement"]("a");
                              _0xacba33["href"] = _0x4e8122, _0xacba33["download"] = "opponent_wash_data_" + new Date()["getTime"]() + ".json", document["body"]["appendChild"](_0xacba33), _0xacba33["click"](), document["body"]["removeChild"](_0xacba33), URL["revokeObjectURL"](_0x4e8122), _0x198691("导出成功，共 " + _0x5f1488["length"] + " 条记录", "success");
                            } catch (_0x13597d) {
                              console["error"]("[对手洗练] 导出失败:", _0x13597d), _0x198691("导出失败，请重试", "error");
                            }
                          }()) : _0x398c98["closest"]("#" + _0x23afec + "import-db") && (_0x1940ea["stopPropagation"](), function () {
                            const _0x54fbc3 = document["createElement"]("input");
                            _0x54fbc3["type"] = "file", _0x54fbc3["accept"] = ".json", _0x54fbc3["onchange"] = async _0x5ccf6e => {
                              const _0x3d65a3 = _0x5ccf6e["target"]["files"][0x0];
                              if (_0x3d65a3) try {
                                const _0x289678 = await _0x3d65a3["text"](),
                                  _0x1ac880 = JSON["parse"](_0x289678);
                                if (!Array["isArray"](_0x1ac880)) throw new Error("无效的数据格式");
                                let _0x5d44db = 0x0;
                                for (const _0x47a9c8 of _0x1ac880) if (_0x47a9c8["roleId"] && _0x47a9c8["roleName"]) try {
                                  await _0x5b8e06({
                                    roleId: _0x47a9c8["roleId"],
                                    roleName: _0x47a9c8["roleName"],
                                    source: _0x47a9c8["source"] || "\u5bfc\u5165",
                                    power: _0x47a9c8["power"] || 0x0,
                                    headImg: _0x47a9c8["headImg"] || ""
                                  }), _0x5d44db++;
                                } catch (_0x18e945) {
                                  console["warn"]("导入记录失败: " + _0x47a9c8["roleId"], _0x18e945);
                                }
                                await _0x319300(), _0x3a7d96(), _0x5c17c8(), _0x198691("导入成功，共 " + _0x5d44db + " 条记录", "success");
                              } catch (_0x590ea8) {
                                console["error"]("[对手洗练] 导入失败:", _0x590ea8), _0x198691("导入失败，请检查文件格式", "error");
                              }
                            }, _0x54fbc3["click"]();
                          }());
                        }
                      }
                    }
                  }
                }
              }
            }
          });
          const _0x21dda8 = document["getElementById"](_0x23afec + "roleid-monitor-switch");
          _0x21dda8 && _0x21dda8["addEventListener"]("change", _0x2f00cc => {
            _0x3f10cc["isRoleIdMonitoring"] = _0x2f00cc["target"]["checked"], _0x3f10cc["isRoleIdMonitoring"] ? _0x198691("RoleID自动监控已开启", "success") : _0x198691("RoleID自动监控已关闭", "warning");
          });
          const _0x2b02e5 = document["getElementById"](_0x23afec + "target-id");
          _0x2b02e5 && _0x2b02e5["addEventListener"]("keypress", _0x4e7fb4 => {
            "Enter" === _0x4e7fb4["key"] && (_0x4e7fb4["stopPropagation"](), _0x46e958(!0x1));
          });
        }(), _0x3f10cc["isCollapsed"]) {
          _0x25d0da["classList"]["add"](_0x23afec + "collapsed");
          const _0x17ba07 = document["getElementById"](_0x23afec + "toggle"),
            _0x4fdcdf = document["getElementById"](_0x23afec + "collapsed-icon");
          _0x17ba07 && (_0x17ba07["innerHTML"] = "\ud83d\udd12"), _0x4fdcdf && (_0x4fdcdf["innerHTML"] = "\ud83d\udd12");
        }
        _0x3a7d96();
      }(), _0x552a68(), _0x5c17c8());
    }, 0x1f4);
    setTimeout(() => {
      clearInterval(_0x845a88), console["log"]("[对手洗练] 超时，停止等待游戏加载");
    }, 0x7530);
  }
  let _0x410261 = 0x0;
  const _0x41fc6b = 0x1e;
  function _0x552a68() {
    const _0x219f28 = window["ws"] || window["h5websocket"] && window["h5websocket"]["ws"];
    if (!_0x219f28 || "function" != typeof _0x219f28["sendAsync"]) return _0x410261++, void (_0x410261 <= _0x41fc6b ? (console["log"]("[对手洗练] 无法设置WebSocket监控（" + _0x410261 + "/" + _0x41fc6b + "），1秒后重试..."), setTimeout(_0x552a68, 0x3e8)) : console["warn"]("[对手洗练] WebSocket监控设置失败次数过多（30次），停止重试"));
    _0x3f10cc["originalSendAsync"] || (_0x3f10cc["originalSendAsync"] = _0x219f28["sendAsync"], console["log"]("[对手洗练] WebSocket已就绪，开始监控战斗指令和RoleID"), _0x219f28["sendAsync"] = async _0x56c612 => {
      const _0x5cbcf9 = await _0x3f10cc["originalSendAsync"]["call"](_0x219f28, _0x56c612),
        _0x4500b3 = (_0x56c612["cmd"] || "")["toLowerCase"]();
      if (_0x1409fc["includes"](_0x4500b3)) {
        console["log"]("[对手洗练] 🎯 拦截到RoleID相关命令:", _0x56c612["cmd"]);
        let _0x539b58 = "未知名称";
        if (_0x56c612["body"] && _0x56c612["body"]["roleName"] && (_0x539b58 = _0x56c612["body"]["roleName"]), _0x5cbcf9 && _0x5cbcf9["_rawData"]) {
          const _0x37acaa = _0x5cbcf9["_rawData"],
            _0x49d0ff = [_0x37acaa["body"]?.["roleInfo"]?.["name"], _0x37acaa["body"]?.["bottle"]?.["name"], _0x37acaa["body"]?.["name"], _0x37acaa["roleInfo"]?.["name"], _0x37acaa["bottle"]?.["name"], _0x37acaa["name"]];
          for (const _0x11eb9b of _0x49d0ff) if (_0x11eb9b) {
            _0x539b58 = _0x11eb9b;
            break;
          }
        }
        if (_0x56c612["body"] && _0x56c612["body"]["roleId"] && _0x3f9704(_0x56c612["body"]["roleId"], "\u8bf7\u6c42", _0x539b58), _0x5cbcf9 && _0x5cbcf9["_rawData"]) {
          const _0x4abd40 = _0x5cbcf9["_rawData"],
            _0x585881 = [_0x4abd40["body"]?.["bottle"]?.["roleId"], _0x4abd40["body"]?.["roleInfo"]?.["roleId"], _0x4abd40["body"]?.["roleId"], _0x4abd40["bottle"]?.["roleId"], _0x4abd40["roleInfo"]?.["roleId"], _0x4abd40["roleId"]];
          for (const _0xdf4483 of _0x585881) if (_0xdf4483 && -0x1 !== _0xdf4483) {
            _0x3f9704(_0xdf4483, "\u54cd\u5e94", _0x539b58);
            break;
          }
        }
      }
      return _0x3b0cba["includes"](_0x4500b3) && _0x3f10cc["isMonitoring"] && console["log"]("[对手洗练] 捕获到战斗指令，解析对手数据..."), _0x5cbcf9;
    });
  }
  function _0x563e18() {
    const _0x44ecba = document["getElementById"](_0x23afec + "assistant"),
      _0x1022c1 = document["getElementById"](_0x23afec + "toggle"),
      _0xc71682 = document["getElementById"](_0x23afec + "collapsed-icon");
    _0x44ecba && (_0x3f10cc["isCollapsed"] = !_0x3f10cc["isCollapsed"], _0x44ecba["classList"]["toggle"](_0x23afec + "collapsed"), _0x3f10cc["isCollapsed"] ? (_0x1022c1 && (_0x1022c1["innerHTML"] = _0x3f10cc["hasUnreadData"] ? "\ud83d\udd13" : "\ud83d\udd12"), _0xc71682 && (_0xc71682["innerHTML"] = _0x3f10cc["hasUnreadData"] ? "\ud83d\udd13" : "\ud83d\udd12", _0x3f10cc["hasUnreadData"] ? _0xc71682["classList"]["add"](_0x23afec + "has-unread") : _0xc71682["classList"]["remove"](_0x23afec + "has-unread"))) : (_0x1022c1 && (_0x1022c1["innerHTML"] = "\ud83d\udccb"), _0x44ecba["style"]["left"] = _0x3f10cc["position"]["x"] + "px", _0x44ecba["style"]["top"] = _0x3f10cc["position"]["y"] + "px", _0x3f10cc["hasUnreadData"] && _0x3f10cc["battleData"] && (_0x52c008(), _0x3f10cc["hasUnreadData"] = !0x1, function () {
      const _0x203411 = document["getElementById"](_0x23afec + "toggle"),
        _0x186939 = document["getElementById"](_0x23afec + "collapsed-icon");
      if (!_0x3f10cc["isCollapsed"]) return;
      _0x203411 && (_0x203411["innerHTML"] = _0x3f10cc["hasUnreadData"] ? "\ud83d\udd13" : "\ud83d\udd12"), _0x186939 && (_0x186939["innerHTML"] = _0x3f10cc["hasUnreadData"] ? "\ud83d\udd13" : "\ud83d\udd12", _0x3f10cc["hasUnreadData"] ? _0x186939["classList"]["add"](_0x23afec + "has-unread") : _0x186939["classList"]["remove"](_0x23afec + "has-unread"));
    }())));
  }
  async function _0x3a7d96() {
    const _0x153be5 = document["getElementById"](_0x23afec + "history-panel");
    if (_0x153be5) {
      if (_0x3f10cc["roleIdHistory"]["length"] > 0x0) {
        const _0x218782 = _0x3f10cc["roleIdHistory"]["length"] * _0x3f10cc["itemHeight"];
        _0x153be5["innerHTML"] = '\n                <div class="' + _0x23afec + 'virtual-scroll-container">\n                    <div class="' + _0x23afec + 'virtual-scroll-spacer" style="height: ' + _0x218782 + 'px;"></div>\n                    <div class="' + _0x23afec + 'virtual-scroll-viewport" id="' + _0x23afec + 'viewport">\n                        <!-- 动态渲染的内容 -->\n                    </div>\n                </div>\n            ', _0x16098b(), _0x153be5["onscroll"] = _0x422afd;
      } else _0x153be5["innerHTML"] = '<div class="' + _0x23afec + 'no-history">暂无查询记录</div>', _0x153be5["onscroll"] = null;
      _0x5c17c8();
    }
  }
  function _0x422afd(_0x279365) {
    const _0x52ff0f = _0x279365["target"]["scrollTop"],
      _0x5f1952 = Math["floor"](_0x52ff0f / _0x3f10cc["itemHeight"]);
    _0x5f1952 !== _0x3f10cc["visibleStart"] && (_0x3f10cc["visibleStart"] = _0x5f1952, _0x16098b());
  }
  function _0x16098b() {
    const _0x196d6f = document["getElementById"](_0x23afec + "viewport");
    if (!_0x196d6f) return;
    const _0x19e33e = _0x3f10cc["visibleStart"],
      _0x8790e2 = Math["min"](_0x19e33e + _0x3f10cc["visibleCount"] + 0x2, _0x3f10cc["roleIdHistory"]["length"]),
      _0x578ee3 = _0x3f10cc["roleIdHistory"]["slice"](_0x19e33e, _0x8790e2);
    let _0x792b62 = "";
    _0x578ee3["forEach"]((_0x42872b, _0xceb08c) => {
      const _0x331ec6 = _0x19e33e + _0xceb08c,
        _0x190da7 = _0x331ec6 * _0x3f10cc["itemHeight"];
      _0x792b62 += '\n                <div class="' + _0x23afec + 'history-item" \n                     data-roleid="' + _0x42872b["roleId"] + '" \n                     data-rolename="' + _0x42872b["roleName"] + '"\n                     data-index="' + _0x331ec6 + '"\n                     style="position: absolute; top: ' + _0x190da7 + "px; left: 0; right: 0; height: " + _0x3f10cc["itemHeight"] + 'px;">\n                    <div class="' + _0x23afec + 'history-item-left">\n                        <input type="checkbox" class="' + _0x23afec + 'history-checkbox" data-roleid="' + _0x42872b["roleId"] + '" />\n                        <div class="' + _0x23afec + 'history-item-content">\n                            <div style="display: flex; align-items: center;">\n                                <span class="' + _0x23afec + 'history-name">' + _0x42872b["roleName"] + '</span>\n                                <span class="' + _0x23afec + 'history-id">ID: ' + _0x42872b["roleId"] + '</span>\n                            </div>\n                        </div>\n                    </div>\n                    <button class="' + _0x23afec + 'history-delete" data-roleid="' + _0x42872b["roleId"] + '" data-index="' + _0x331ec6 + '">删除</button>\n                </div>\n            ';
    }), _0x196d6f["innerHTML"] = _0x792b62;
  }
  async function _0x46e958(_0x316566) {
    if (_0x3f10cc["isWaitingForResponse"]) return console["log"]("[对手洗练] 正在等待响应，请稍候..."), void (_0x316566 || _0x198691("正在等待响应，请稍候", "warning"));
    const _0x3a1aa8 = document["getElementById"](_0x23afec + "target-id")["value"]["trim"](),
      _0xaf6192 = parseInt(_0x3a1aa8);
    if (!_0x3a1aa8 || isNaN(_0xaf6192)) return console["log"]("[对手洗练] 请输入有效的目标ID"), void (_0x316566 || _0x198691("请输入有效的目标ID", "error"));
    try {
      _0x3f10cc["isWaitingForResponse"] = !0x0, console["log"]("[对手洗练] 正在获取ID:" + _0xaf6192 + "的洗练数据...");
      const _0x238aca = await async function (_0x3f5f06, _0x47db3a) {
        if (!window["ws"] || !window["ws"]["sendAsync"]) throw new Error("WebSocket连接不可用");
        const _0x368727 = {
          ack: 0x0,
          cmd: _0x3f5f06,
          params: _0x47db3a,
          seq: _0x3f10cc["seq"]++,
          time: Date["now"]()
        };
        return await window["ws"]["sendAsync"](_0x368727);
      }("role_gettargetteam", {
        cCMonsterId: 0x0,
        targetId: _0xaf6192,
        teamType: 0x11
      });
      if (console["log"]("[对手洗练] 完整响应数据:", _0x238aca), !_0x238aca) return console["log"]("[对手洗练] 获取洗练数据失败，响应为空"), _0x316566 || _0x198691("获取洗练数据失败，响应为空", "error"), void (_0x3f10cc["isWaitingForResponse"] = !0x1);
      const _0x39ab96 = _0x238aca?.["body"]?.["teamInfo"] || _0x238aca?.["teamInfo"] || _0x238aca?.["_rawData"]?.["teamInfo"] || _0x238aca?.["rawData"]?.["teamInfo"];
      if (console["log"]("[对手洗练] 解析到的teamInfo:", _0x39ab96), !_0x39ab96) return console["log"]("[对手洗练] 响应中未找到teamInfo数据"), _0x316566 || _0x198691("未找到对手数据，请重试", "error"), void (_0x3f10cc["isWaitingForResponse"] = !0x1);
      _0x3f10cc["battleData"] = {
        rightTeam: {
          name: _0x39ab96["name"] || _0x3f10cc["interceptedRoleName"] || "未知玩家",
          power: _0x39ab96["power"] || 0x0,
          team: _0x39ab96["team"] || {},
          roleId: _0x39ab96["roleId"] || _0xaf6192,
          headImg: _0x39ab96["headImg"]
        }
      }, _0x52c008(), "wash" !== _0x3f10cc["activeTab"] && (document["querySelectorAll"]("." + _0x23afec + "tab")["forEach"](_0x2eac89 => _0x2eac89["classList"]["remove"](_0x23afec + "active")), document["querySelectorAll"]("." + _0x23afec + "tab-content")["forEach"](_0x338d24 => _0x338d24["classList"]["remove"](_0x23afec + "active")), document["querySelector"]("." + _0x23afec + 'tab[data-tab="wash"]')["classList"]["add"](_0x23afec + "active"), document["getElementById"](_0x23afec + "wash-tab")["classList"]["add"](_0x23afec + "active"), _0x3f10cc["activeTab"] = "wash"), _0x3f10cc["isCollapsed"] && _0x563e18(), _0x3f10cc["isWaitingForResponse"] = !0x1;
    } catch (_0x521031) {
      console["log"]("[对手洗练] 获取洗练数据失败: " + _0x521031["message"]), _0x316566 || _0x198691("获取失败: " + _0x521031["message"], "error"), _0x3f10cc["isWaitingForResponse"] = !0x1;
    }
  }
  function _0x52c008() {
    if (!_0x3f10cc["battleData"]) return;
    const _0x436e47 = document["getElementById"](_0x23afec + "hero-selector"),
      _0x3116dc = document["getElementById"](_0x23afec + "hero-details"),
      _0x47b4af = document["getElementById"](_0x23afec + "battle-panel"),
      _0x543211 = document["getElementById"](_0x23afec + "player-info-container"),
      _0x4bb433 = document["getElementById"](_0x23afec + "player-info");
    _0x436e47["innerHTML"] = "", _0x3116dc["innerHTML"] = "";
    const _0x3eff10 = _0x3f10cc["battleData"]["rightTeam"];
    if (!_0x3eff10) return;
    _0x4bb433["innerHTML"] = '\n            <div style="display: flex; justify-content: space-between; align-items: center; width: 100%;">\n                <div class="' + _0x23afec + 'player-header">\n                    <img class="' + _0x23afec + 'player-avatar" src="' + (_0x3eff10["headImg"] || "") + '" alt="头像">\n                    <div class="' + _0x23afec + 'player-name">' + decodeURIComponent(_0x3eff10["name"] || "未知玩家") + '</div>\n                    <div class="' + _0x23afec + 'player-id">ID: ' + (_0x3eff10["roleId"] || "") + '</div>\n                </div>\n                <div style="color: #10b981; font-size: 12px; white-space: nowrap;">获取洗练数据成功</div>\n            </div>\n        ', _0x543211["style"]["display"] = "block";
    const _0x15dc44 = [];
    for (let _0x49cb05 = 0x0; _0x49cb05 < 0x5; _0x49cb05++) {
      const _0x56673d = _0x3eff10["team"][_0x49cb05["toString"]()];
      _0x56673d && _0x56673d["id"] && _0x15dc44["push"]({
        data: _0x56673d,
        position: _0x49cb05
      });
    }
    (_0x15dc44["forEach"](({
      data: _0x55f4f2,
      position: _0x5427aa
    }) => {
      const _0xebfa7 = document["createElement"]("div");
      _0xebfa7["className"] = _0x23afec + "hero-item", _0xebfa7["dataset"]["position"] = _0x5427aa, _0xebfa7["innerHTML"] = '\n                <div class="' + _0x23afec + 'hero-name">' + (_0xd93d6b[_0x55f4f2["id"]["toString"]()] || "未知英雄 (" + _0x55f4f2["id"] + ")") + '</div>\n                <div class="' + _0x23afec + 'hero-position">' + (_0x5427aa + 0x1) + "号位</div>\n            ", _0x436e47["appendChild"](_0xebfa7);
    }), _0x15dc44["length"] > 0x0) && (_0x436e47["querySelector"]("." + _0x23afec + "hero-item")["classList"]["add"](_0x23afec + "selected"), _0x212a9f(_0x15dc44[0x0]["data"], _0x15dc44[0x0]["position"])), _0x47b4af["style"]["display"] = "block";
  }
  function _0x212a9f(_0x29e5c2, _0x196701) {
    const _0x4d990a = document["getElementById"](_0x23afec + "hero-details");
    _0x4d990a["innerHTML"] = "";
    const _0x1b9d8b = document["createElement"]("div");
    _0x1b9d8b["className"] = _0x23afec + "hero-stats";
    const _0x58c3a5 = _0x29e5c2["attribute"] || {};
    ["attack", "hp", "speed", "56", "51", "52", "53", "54", "57", "58", "59", "60", "61", "62", "63", "64", "65", "66", "67", "68", "70", "80", "69", "301", "226", "227", "228", "229", "230", "231", "101", "5"]["filter"](_0x40f244 => _0x70e9b5["hasOwnProperty"](_0x40f244))["forEach"](_0x14bf48 => {
      let _0x2f27d2, _0x1c5473;
      "attack" === _0x14bf48 ? (_0x2f27d2 = _0x29e5c2["attack"] || 0x0, _0x1c5473 = (_0x2f27d2 / 0x5f5e100)["toFixed"](0x3) + "\u4ebf") : "hp" === _0x14bf48 ? (_0x2f27d2 = _0x29e5c2["hp"] || 0x0, _0x1c5473 = (_0x2f27d2 / 0x5f5e100)["toFixed"](0x3) + "\u4ebf") : "speed" === _0x14bf48 ? (_0x2f27d2 = _0x29e5c2["speed"] || 0x0, _0x1c5473 = _0x2f27d2["toString"]()) : (_0x2f27d2 = _0x58c3a5[_0x14bf48] || 0x0, _0x1c5473 = (0x64 * _0x2f27d2)["toFixed"](0x1) + "%");
      const _0xe651cb = document["createElement"]("div");
      _0xe651cb["className"] = _0x23afec + "hero-stat", _0xe651cb["innerHTML"] = '\n                <span class="' + _0x23afec + 'hero-stat-name">' + _0x70e9b5[_0x14bf48] + '</span>\n                <span class="' + _0x23afec + 'hero-stat-value">' + _0x1c5473 + "</span>\n            ", _0x1b9d8b["appendChild"](_0xe651cb);
    });
    const _0x447ef5 = _0x29e5c2["skill"] || [];
    let _0x29d54e = "\u65e0";
    for (const _0x1e09e6 of _0x447ef5) {
      const _0x7976c6 = _0x1e09e6["toString"]();
      if (_0x7976c6["length"] >= 0x5 && (_0x7976c6["startsWith"]("11") || _0x7976c6["startsWith"]("12"))) {
        const _0x8e6c1d = _0x7976c6["substring"](0x0, 0x5),
          _0x50fcfd = _0x8e6c1d["substring"](0x0, 0x4),
          _0x517a13 = parseInt(_0x8e6c1d["charAt"](0x4)),
          _0x22f9ed = _0x42be0f[_0x50fcfd];
        if (_0x22f9ed) {
          _0x29d54e = _0x517a13 + "星" + _0x22f9ed;
          break;
        }
      }
    }
    const _0x340d5e = document["createElement"]("div");
    _0x340d5e["className"] = _0x23afec + "fish-stat", _0x340d5e["innerHTML"] = '\n            <span class="' + _0x23afec + 'fish-stat-name">鱼灵</span>\n            <span class="' + _0x23afec + 'fish-stat-value">' + _0x29d54e + "</span>\n        ", _0x1b9d8b["appendChild"](_0x340d5e);
    const _0x22ad45 = [];
    _0x447ef5["forEach"](_0x1d4cb1 => {
      const _0x554b77 = _0x1d4cb1["toString"]();
      _0x554b77["startsWith"]("1033") && _0x70e9b5[_0x554b77] && _0x22ad45["push"](_0x70e9b5[_0x554b77]);
    });
    const _0x5d138d = _0x22ad45["length"] > 0x0 ? _0x22ad45["join"]("\u3001") : "\u65e0",
      _0x4dcfac = document["createElement"]("div");
    _0x4dcfac["className"] = _0x23afec + "pearl-stat", _0x4dcfac["innerHTML"] = '\n            <span class="' + _0x23afec + 'pearl-stat-name">鱼珠</span>\n            <span class="' + _0x23afec + 'pearl-stat-value">' + _0x5d138d + "</span>\n        ", _0x1b9d8b["appendChild"](_0x4dcfac), _0x4d990a["appendChild"](_0x1b9d8b);
  }
  async function _0x319300() {
    try {
      const _0x1120f3 = await _0x57100a(0x3e8);
      _0x3f10cc["roleIdHistory"] = _0x1120f3["map"](_0x2ca721 => ({
        roleId: _0x2ca721["roleId"],
        roleName: _0x2ca721["roleName"],
        time: _0x2ca721["createTime"] || new Date(_0x2ca721["timestamp"])["toLocaleString"]("zh-CN"),
        source: _0x2ca721["source"] || "数据库"
      })), console["log"]("[对手洗练] 从数据库加载了 " + _0x3f10cc["roleIdHistory"]["length"] + " 条历史记录");
    } catch (_0x4322da) {
      console["error"]("[对手洗练] 加载历史记录失败:", _0x4322da);
    }
  }
  async function _0x5c17c8() {
    try {
      const _0x30341c = await async function () {
          return _0x64b1f2 || (await _0x561a4c()), new Promise((_0x46c5b1, _0x45c34f) => {
            const _0x35d268 = _0x64b1f2["transaction"]([_0x2d68c6], "readonly")["objectStore"](_0x2d68c6)["count"]();
            _0x35d268["onsuccess"] = () => {
              _0x46c5b1({
                totalCount: _0x35d268["result"],
                dbName: _0xc135e,
                storeName: _0x2d68c6
              });
            }, _0x35d268["onerror"] = () => {
              console["error"]("[对手洗练] 获取统计信息失败:", _0x35d268["error"]), _0x45c34f(_0x35d268["error"]);
            };
          });
        }(),
        _0x3652d6 = document["getElementById"](_0x23afec + "db-count");
      _0x3652d6 && (_0x3652d6["textContent"] = _0x30341c["totalCount"]);
    } catch (_0x55684c) {
      console["error"]("[对手洗练] 更新统计信息失败:", _0x55684c);
    }
  }
  "loading" === document["readyState"] ? document["addEventListener"]("DOMContentLoaded", _0x4b3d96) : _0x4b3d96();
}();
