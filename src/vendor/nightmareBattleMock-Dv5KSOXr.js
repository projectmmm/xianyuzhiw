// Adapted from the supplied 2.57.2 game enhancement asset.
// Static strings decoded; obfuscator guards removed; frame access stays local.
const a = {
    initialRoomInfo: {
      curMonsterCfgId: 0x1,
      monsterTeamInfo: {},
      curMonsterData: {},
      fightRoleBase: [],
      playerTeamInfo: {},
    },
    fightSnapshots: [],
  },
  e = {
    0x65: {
      name: "司马懿",
      type: "\u9b4f\u56fd",
      avatar: "/team/simayi.png",
    },
    0x66: {
      name: "\u90ed\u5609",
      type: "\u9b4f\u56fd",
      avatar: "/team/guojia.png",
    },
    0x67: {
      name: "\u5173\u7fbd",
      type: "\u8700\u56fd",
      avatar: "/team/guanyu.png",
    },
    0x68: {
      name: "诸葛亮",
      type: "\u8700\u56fd",
      avatar: "/team/zhugeliang.png",
    },
    0x69: {
      name: "\u5468\u745c",
      type: "\u5434\u56fd",
      avatar: "/team/zhouyu.png",
    },
    0x6a: {
      name: "太史慈",
      type: "\u5434\u56fd",
      avatar: "/team/taishici.png",
    },
    0x6b: {
      name: "\u5415\u5e03",
      type: "\u7fa4\u96c4",
      avatar: "/team/lvbu.png",
    },
    0x6c: {
      name: "\u534e\u4f57",
      type: "\u7fa4\u96c4",
      avatar: "/team/huatuo.png",
    },
    0x6d: {
      name: "\u7504\u59ec",
      type: "\u9b4f\u56fd",
      avatar: "/team/zhenji.png",
    },
    0x6e: {
      name: "黄月英",
      type: "\u8700\u56fd",
      avatar: "/team/huangyueying.png",
    },
    0x6f: {
      name: "\u5b59\u7b56",
      type: "\u5434\u56fd",
      avatar: "/team/sunce.png",
    },
    0x70: {
      name: "\u8d3e\u8be9",
      type: "\u7fa4\u96c4",
      avatar: "/team/jiaxu.png",
    },
    0x71: {
      name: "\u66f9\u4ec1",
      type: "\u9b4f\u56fd",
      avatar: "/team/caoren.png",
    },
    0x72: {
      name: "\u59dc\u7ef4",
      type: "\u8700\u56fd",
      avatar: "/team/jiangwei.png",
    },
    0x73: {
      name: "\u5b59\u575a",
      type: "\u5434\u56fd",
      avatar: "/team/sunjian.png",
    },
    0x74: {
      name: "公孙瓒",
      type: "\u7fa4\u96c4",
      avatar: "/team/gongsunzan.png",
    },
    0x75: {
      name: "\u5178\u97e6",
      type: "\u9b4f\u56fd",
      avatar: "/team/dianwei.png",
    },
    0x76: {
      name: "\u8d75\u4e91",
      type: "\u8700\u56fd",
      avatar: "/team/zhaoyun.png",
    },
    0x77: {
      name: "\u5927\u4e54",
      type: "\u5434\u56fd",
      avatar: "/team/daqiao.png",
    },
    0x78: {
      name: "\u5f20\u89d2",
      type: "\u7fa4\u96c4",
      avatar: "/team/zhangjiao.png",
    },
    0x79: {
      name: "\u9c81\u8083",
      type: "\u5434\u56fd",
      avatar: "/team/lusu.png",
    },
    0x7a: {
      name: "\u5f20\u8fbd",
      type: "\u9b4f\u56fd",
      avatar: "/team/zhangliao.png",
    },
    0xc9: {
      name: "\u5f90\u6643",
      type: "\u9b4f\u56fd",
      avatar: "/team/xuhuang.png",
    },
    0xca: {
      name: "\u8340\u5f67",
      type: "\u9b4f\u56fd",
      avatar: "/team/xunyu.png",
    },
    0xcb: {
      name: "\u5178\u97e6",
      type: "\u9b4f\u56fd",
      avatar: "/team/xiaodianwei.png",
    },
    0xcc: {
      name: "\u5f20\u98de",
      type: "\u8700\u56fd",
      avatar: "/team/zhangfei.png",
    },
    0xcd: {
      name: "\u8d75\u4e91",
      type: "\u8700\u56fd",
      avatar: "/team/xiaozhaoyun.png",
    },
    0xce: {
      name: "\u5e9e\u7edf",
      type: "\u8700\u56fd",
      avatar: "/team/pangtong.png",
    },
    0xcf: {
      name: "\u9c81\u8083",
      type: "\u5434\u56fd",
      avatar: "/team/xiaolusu.png",
    },
    0xd0: {
      name: "\u9646\u900a",
      type: "\u5434\u56fd",
      avatar: "/team/luxun.png",
    },
    0xd1: {
      name: "\u7518\u5b81",
      type: "\u5434\u56fd",
      avatar: "/team/ganning.png",
    },
    0xd2: {
      name: "\u8c82\u8749",
      type: "\u7fa4\u96c4",
      avatar: "/team/diaochan.png",
    },
    0xd3: {
      name: "\u8463\u5353",
      type: "\u7fa4\u96c4",
      avatar: "/team/dongzhuo.png",
    },
    0xd4: {
      name: "\u5f20\u89d2",
      type: "\u7fa4\u96c4",
      avatar: "/team/xiaozhangjiao.png",
    },
    0xd5: {
      name: "\u5f20\u8fbd",
      type: "\u9b4f\u56fd",
      avatar: "/team/zhangliao.png",
    },
    0xd6: {
      name: "夏侯惇",
      type: "\u9b4f\u56fd",
      avatar: "/team/xiahoudun.png",
    },
    0xd7: {
      name: "\u8bb8\u891a",
      type: "\u9b4f\u56fd",
      avatar: "/team/xuzhu.png",
    },
    0xd8: {
      name: "夏侯渊",
      type: "\u9b4f\u56fd",
      avatar: "/team/xiahouyuan.png",
    },
    0xd9: {
      name: "\u9b4f\u5ef6",
      type: "\u8700\u56fd",
      avatar: "/team/weiyan.png",
    },
    0xda: {
      name: "\u9ec4\u5fe0",
      type: "\u8700\u56fd",
      avatar: "/team/huangzhong.png",
    },
    0xdb: {
      name: "\u9a6c\u8d85",
      type: "\u8700\u56fd",
      avatar: "/team/machao.png",
    },
    0xdc: {
      name: "\u9a6c\u5cb1",
      type: "\u8700\u56fd",
      avatar: "/team/madai.png",
    },
    0xdd: {
      name: "\u5415\u8499",
      type: "\u5434\u56fd",
      avatar: "/team/lvmeng.png",
    },
    0xde: {
      name: "\u9ec4\u76d6",
      type: "\u5434\u56fd",
      avatar: "/team/huanggai.png",
    },
    0xdf: {
      name: "蔡文姬",
      type: "\u9b4f\u56fd",
      avatar: "/team/caiwenji.png",
    },
    0xe0: {
      name: "\u5c0f\u4e54",
      type: "\u5434\u56fd",
      avatar: "/team/xiaoqiao.png",
    },
    0xe1: {
      name: "\u8881\u7ecd",
      type: "\u7fa4\u96c4",
      avatar: "/team/yuanshao.png",
    },
    0xe2: {
      name: "\u534e\u96c4",
      type: "\u7fa4\u96c4",
      avatar: "/team/huaxiong.png",
    },
    0xe3: {
      name: "\u989c\u826f",
      type: "\u7fa4\u96c4",
      avatar: "/team/yanliang.png",
    },
    0xe4: {
      name: "\u6587\u4e11",
      type: "\u7fa4\u96c4",
      avatar: "/team/wenchou.png",
    },
    0x12d: {
      name: "\u5468\u6cf0",
      type: "\u5434\u56fd",
      avatar: "/team/zhoutai.png",
    },
    0x12e: {
      name: "\u8bb8\u6538",
      type: "\u9b4f\u56fd",
      avatar: "/team/xuyou.png",
    },
    0x12f: {
      name: "\u4e8e\u7981",
      type: "\u9b4f\u56fd",
      avatar: "/team/yujin.png",
    },
    0x130: {
      name: "张星彩",
      type: "\u8700\u56fd",
      avatar: "/team/zhangxingcai.png",
    },
    0x131: {
      name: "关银屏",
      type: "\u8700\u56fd",
      avatar: "/team/guanyinping.png",
    },
    0x132: {
      name: "\u5173\u5e73",
      type: "\u8700\u56fd",
      avatar: "/team/guanping.png",
    },
    0x133: {
      name: "\u7a0b\u666e",
      type: "\u5434\u56fd",
      avatar: "/team/chengpu.png",
    },
    0x134: {
      name: "\u5f20\u662d",
      type: "\u5434\u56fd",
      avatar: "/team/zhangzhao.png",
    },
    0x135: {
      name: "\u9646\u7ee9",
      type: "\u5434\u56fd",
      avatar: "/team/luji.png",
    },
    0x136: {
      name: "吕玲绮",
      type: "\u7fa4\u96c4",
      avatar: "/team/lvlingqi.png",
    },
    0x137: {
      name: "\u6f58\u51e4",
      type: "\u7fa4\u96c4",
      avatar: "/team/panfeng.png",
    },
    0x138: {
      name: "邢道荣",
      type: "\u7fa4\u96c4",
      avatar: "/team/xingdaorong.png",
    },
    0x139: {
      name: "祝融夫人",
      type: "\u8700\u56fd",
      avatar: "/team/zhurongfuren.png",
    },
    0x13a: {
      name: "\u5b5f\u83b7",
      type: "\u8700\u56fd",
      avatar: "/team/menghuo.png",
    },
  },
  n = [
    {
      name: "\u5434\u56fd",
      required: [0x6a, 0x6f],
      colorProps: {
        color: "#f5222d",
        textColor: "#fff",
      },
    },
    {
      name: "\u59dc\u7ef4",
      required: [0x72, 0x6f],
      colorProps: {
        color: "#237804",
        textColor: "#fff",
      },
    },
    {
      name: "\u6bd2\u7206",
      required: [0x6c, 0x70, 0x78],
      colorProps: {
        color: "#722ed1",
        textColor: "#fff",
      },
    },
    {
      name: "\u5415\u8d75",
      required: [0x6b, 0x74, 0x76],
      colorProps: {
        color: "#faad14",
        textColor: "#fff",
      },
    },
    {
      name: "\u4e09\u8700",
      required: [0x68, 0x6e, 0x76],
      colorProps: {
        color: "#389e0d",
        textColor: "#fff",
      },
    },
    {
      name: "\u5178\u97e6",
      required: [0x75, 0x71],
      colorProps: {
        color: "#40a9ff",
        textColor: "#fff",
      },
    },
    {
      name: "司马懿",
      required: [0x65, 0x71],
      colorProps: {
        color: "#0050b3",
        textColor: "#fff",
      },
    },
    {
      name: "\u5173\u7fbd",
      required: [0x67],
      colorProps: {
        color: "#73d13d",
        textColor: "#fff",
      },
    },
    {
      name: "\u5415\u5e03",
      required: [0x6b, 0x74],
      forbidden: [0x76],
      colorProps: {
        color: "#f06f44ff",
        textColor: "#fff",
      },
    },
    {
      name: "控制毒",
      required: [0x78, 0x68, 0x6e],
      colorProps: {
        color: "#722ed1",
        textColor: "#fff",
      },
    },
    {
      name: "控制吴",
      required: [0x69, 0x68, 0x6e],
      colorProps: {
        color: "#f5222d",
        textColor: "#fff",
      },
    },
  ],
  t = (_0x5eab93) => {
    const _0x38861b = new Set(
        _0x5eab93["map"]((_0x1db0a9) =>
          Number["parseInt"](_0x1db0a9["heroId"]),
        ),
      ),
      _0x2f0c35 = (_0x2eb5ba) => _0x38861b["has"](_0x2eb5ba);
    for (const _0x44adcc of n)
      if (
        (!_0x44adcc["required"] ||
          _0x44adcc["required"]["every"]((_0x377442) =>
            _0x2f0c35(_0x377442),
          )) &&
        (!_0x44adcc["forbidden"] ||
          !_0x44adcc["forbidden"]["some"]((_0x19b8fc) => _0x2f0c35(_0x19b8fc)))
      ) {
        if (
          _0x44adcc["oneOf"] &&
          !_0x44adcc["oneOf"]["every"]((_0x429930) =>
            _0x429930["some"]((_0x346194) => _0x2f0c35(_0x346194)),
          )
        )
          continue;
        return _0x44adcc["name"];
      }
    return "\u5176\u4ed6";
  },
  m = {
    0xfc32f: {
      name: "\u788e\u76fe",
    },
    0xfc330: {
      name: "\u51a5\u60f3",
    },
    0xfc331: {
      name: "\u5b9a\u5fc3",
    },
    0xfc332: {
      name: "\u51b0\u6e05",
    },
    0xfc333: {
      name: "\u653b\u5fc3",
    },
    0xfc334: {
      name: "\u5f3a\u6743",
    },
    0xfc335: {
      name: "\u76fe\u51fb",
    },
    0xfc336: {
      name: "\u5408\u529b",
    },
    0xfc337: {
      name: "\u4ec1\u5fc3",
    },
    0xfc338: {
      name: "\u6e38\u9f99",
    },
    0xfc339: {
      name: "\u56de\u5143",
    },
  },
  o = {
    0x4b1: {
      name: "龙鱼·幽影",
    },
    0x4b2: {
      name: "龙鱼·青龙",
    },
    0x4b3: {
      name: "龙鱼·火镰",
    },
    0x4b4: {
      name: "龙鱼·无双",
    },
    0x4b5: {
      name: "龙鱼·永霜",
    },
    0x4b6: {
      name: "龙鱼·八卦",
    },
    0x4b7: {
      name: "龙鱼·紫电",
    },
    0x4b8: {
      name: "龙鱼·青囊",
    },
    0x4b9: {
      name: "龙鱼·洛神",
    },
    0x4ba: {
      name: "龙鱼·机神",
    },
    0x4bb: {
      name: "龙鱼·霸王",
    },
    0x4bc: {
      name: "龙鱼·蚀骨",
    },
    0x4bd: {
      name: "龙鱼·坚盾",
    },
    0x4be: {
      name: "龙鱼·麒麟",
    },
    0x4bf: {
      name: "龙鱼·古锭",
    },
    0x4c0: {
      name: "龙鱼·义从",
    },
    0x4c1: {
      name: "龙鱼·恶来",
    },
    0x4c2: {
      name: "龙鱼·龙胆",
    },
    0x4c3: {
      name: "龙鱼·国色",
    },
    0x4c4: {
      name: "龙鱼·天公",
    },
    0x515: {
      name: "\u6708\u5c3e",
    },
    0x516: {
      name: "\u7130\u795e",
    },
    0x517: {
      name: "\u7ea2\u8776",
    },
    0x518: {
      name: "\u8d64\u7fbd",
    },
    0x519: {
      name: "千年笛",
    },
    0x579: {
      name: "四带胡椒",
    },
    0x57a: {
      name: "鬼狮子鱼",
    },
    0x57b: {
      name: "黑斑雀鲷",
    },
    0x57c: {
      name: "诅咒花椒",
    },
    0x57d: {
      name: "九斑刺豚",
    },
    0x57e: {
      name: "魔鬼刺镰",
    },
    0x57f: {
      name: "黄背刺鲷",
    },
    0x580: {
      name: "黑鳍刺鲷",
    },
    0x581: {
      name: "长棘刺鲷",
    },
    0x582: {
      name: "粒突箱鲀",
    },
    0x583: {
      name: "大跳跳鱼",
    },
    0x584: {
      name: "蓝心胖头",
    },
    0x5dd: {
      name: "钱胡椒",
    },
    0x5de: {
      name: "狮子鱼",
    },
    0x5df: {
      name: "塔雀鲷",
    },
    0x5e0: {
      name: "紫斑鳅",
    },
    0x5e1: {
      name: "密刺豚",
    },
    0x5e2: {
      name: "长鳍镰",
    },
    0x641: {
      name: "胖头鱼",
    },
    0x642: {
      name: "青刺鲷",
    },
    0x643: {
      name: "跳跳鱼",
    },
    0x644: {
      name: "箱豚鱼",
    },
    0x44d: {
      name: "黄金锦鲤",
    },
    0x44e: {
      name: "\u5229\u5203",
    },
    0x44f: {
      name: "\u60ca\u6d9b",
    },
    0x450: {
      name: "\u9a87\u6d6a",
    },
    0x451: {
      name: "\u661f\u9a70",
    },
    0x452: {
      name: "公同心",
    },
    0x453: {
      name: "母同心",
    },
    0x454: {
      name: "公协力",
    },
    0x455: {
      name: "母协力",
    },
    0x456: {
      name: "\u6708\u5149",
    },
    0x457: {
      name: "公铁血",
    },
    0x458: {
      name: "母铁血",
    },
    0x459: {
      name: "公丹心",
    },
    0x45a: {
      name: "母丹心",
    },
    0x45b: {
      name: "\u5de8\u7075",
    },
    0x45c: {
      name: "公剑胆",
    },
    0x45d: {
      name: "母剑胆",
    },
    0x45e: {
      name: "\u7487\u7391",
    },
    0x45f: {
      name: "公琴心",
    },
    0x460: {
      name: "母琴心",
    },
    0x461: {
      name: "\u56de\u54cd",
    },
  },
  r = {
    0x1: {
      color: "\u767d\u8272",
      value: "white",
    },
    0x2: {
      color: "\u7eff\u8272",
      value: "green",
    },
    0x3: {
      color: "\u84dd\u8272",
      value: "blue",
    },
    0x4: {
      color: "\u7d2b\u8272",
      value: "purple",
    },
    0x5: {
      color: "\u6a59\u8272",
      value: "orange",
    },
    0x6: {
      color: "\u7ea2\u8272",
      value: "red",
    },
  },
  p = {
    0x1: "一支穿云箭",
    0x2: "皮鞋手机",
    0x3: "懦弱百合",
    0x4: "正义喇叭",
    0x5: "祖传大饼",
    0x6: "冰镇啤酒",
    0x7: "导演话筒",
    0x8: "驱蚊花露水",
    0x9: "止痒花露水",
  },
  i = {
    0x1: {
      name: "\u867e\u7c73",
      value: "green",
    },
    0x2: {
      name: "\u5165\u95e8",
      value: "blue",
    },
    0x3: {
      name: "\u9ad8\u624b",
      value: "purple",
    },
    0x4: {
      name: "\u5b97\u5e08",
      value: "orange",
    },
    0x5: {
      name: "\u6cf0\u6597",
      value: "red",
    },
    0x6: {
      name: "\u81f3\u5c0a",
      value: "gold",
    },
    0x7: {
      name: "珍·至尊",
      value: "gold",
    },
  },
  g = (_0x5bd0ab) => p[_0x5bd0ab],
  l = (_0x1b654c) => {
    const _0x3131f4 = {};
    return (
      _0x1b654c &&
        _0x1b654c["heroes"] &&
        "object" == typeof _0x1b654c["heroes"] &&
        Object["values"](_0x1b654c["heroes"])["forEach"]((_0x353491) => {
          ((_0x3131f4[_0x353491["artifactId"]] = {
            FishInfo: o[("" + _0x353491["artifactId"])["substring"](0x0, 0x4)],
            artifactId: _0x353491["artifactId"],
          }),
            _0x353491["appendSkill"] &&
              Array["isArray"](_0x353491["appendSkill"]) &&
              _0x353491["appendSkill"]["forEach"]((_0xf2db6b) => {
                m[_0xf2db6b["skillId"]] &&
                  (_0x3131f4[_0x353491["artifactId"]]["PearlSkill"] =
                    m[_0xf2db6b["skillId"]]);
              }));
        }),
      _0x1b654c &&
        _0x1b654c["pearlMap"] &&
        "object" == typeof _0x1b654c["pearlMap"] &&
        Object["values"](_0x1b654c["pearlMap"])["forEach"]((_0x3e2553) => {
          _0x3131f4[_0x3e2553["artifactId"]] &&
            _0x3e2553["slotMap"] &&
            "object" == typeof _0x3e2553["slotMap"] &&
            (_0x3131f4[_0x3e2553["artifactId"]]["slotMap"] = Object["values"](
              _0x3e2553["slotMap"],
            )["map"]((_0x3408cb) =>
              Object["assign"]({}, _0x3408cb, r[_0x3408cb["colorId"]]),
            ));
        }),
      _0x3131f4
    );
  },
  s = {
    0x65: 0x3c,
    0x66: 0x32,
    0x67: 0x28,
    0x68: 0x1e,
    0x69: 0x14,
    0x6a: 0x14,
    0x6b: 0x14,
    0x6c: 0x14,
    0x6d: 0x1e,
    0x6e: 0x1e,
    0x6f: 0x1e,
    0x70: 0x1e,
    0x71: 0x1e,
    0x72: 0x1e,
    0xc9: 0x3c,
    0xca: 0x32,
    0xcb: 0x28,
    0xcc: 0x1e,
    0xcd: 0x14,
    0xce: 0x14,
    0xcf: 0x14,
    0xd0: 0x14,
    0xd1: 0x1e,
    0xd2: 0x1e,
    0xd3: 0x1e,
    0xd4: 0x1e,
    0xd5: 0x1e,
    0xd6: 0x1e,
    0x12d: 0x3c,
    0x12e: 0x32,
    0x12f: 0x28,
    0x130: 0x1e,
    0x131: 0x14,
    0x132: 0x14,
    0x133: 0x14,
    0x134: 0x14,
    0x135: 0x1e,
    0x136: 0x1e,
    0x137: 0x1e,
    0x138: 0x1e,
    0x139: 0x1e,
    0x13a: 0x1e,
    0x191: 0x3c,
    0x192: 0x32,
    0x193: 0x28,
    0x194: 0x1e,
    0x195: 0x14,
    0x196: 0x14,
    0x197: 0x14,
    0x198: 0x14,
    0x199: 0x1e,
    0x19a: 0x1e,
    0x19b: 0x1e,
    0x19c: 0x1e,
    0x19d: 0x1e,
    0x19e: 0x1e,
    0x1f5: 0x3c,
    0x1f6: 0x32,
    0x1f7: 0x28,
    0x1f8: 0x1e,
    0x1f9: 0x14,
    0x1fa: 0x14,
    0x1fb: 0x14,
    0x1fc: 0x14,
    0x1fd: 0x1e,
    0x1fe: 0x1e,
    0x1ff: 0x1e,
    0x200: 0x1e,
    0x201: 0x1e,
    0x202: 0x1e,
    0x259: 0x3c,
    0x25a: 0x32,
    0x25b: 0x28,
    0x25c: 0x1e,
    0x25d: 0x14,
    0x25e: 0x14,
    0x25f: 0x14,
    0x260: 0x14,
    0x261: 0x1e,
    0x262: 0x1e,
    0x263: 0x1e,
    0x264: 0x1e,
    0x265: 0x1e,
    0x266: 0x1e,
  },
  u = {
    0x1: [
      0x65, 0x66, 0x67, 0x68, 0x69, 0x6a, 0x6b, 0x6c, 0x6d, 0x6e, 0x6f, 0x70,
      0x71, 0x72,
    ],
    0x2: [
      0xc9, 0xca, 0xcb, 0xcc, 0xcd, 0xce, 0xcf, 0xd0, 0xd1, 0xd2, 0xd3, 0xd4,
      0xd5, 0xd6,
    ],
    0x3: [
      0x12d, 0x12e, 0x12f, 0x130, 0x131, 0x132, 0x133, 0x134, 0x135, 0x136,
      0x137, 0x138, 0x139, 0x13a,
    ],
    0x4: [
      0x191, 0x192, 0x193, 0x194, 0x195, 0x196, 0x197, 0x198, 0x199, 0x19a,
      0x19b, 0x19c, 0x19d, 0x19e,
    ],
    0x5: [
      0x1f5, 0x1f6, 0x1f7, 0x1f8, 0x1f9, 0x1fa, 0x1fb, 0x1fc, 0x1fd, 0x1fe,
      0x1ff, 0x200, 0x201, 0x202,
    ],
    0x6: [
      0x259, 0x25a, 0x25b, 0x25c, 0x25d, 0x25e, 0x25f, 0x260, 0x261, 0x262,
      0x263, 0x264, 0x265, 0x266,
    ],
  },
  f = {
    0x1: [
      0x65, 0x66, 0x67, 0x68, 0x69, 0x6a, 0x6b, 0x6c, 0x6d, 0x6e, 0x6f, 0x70,
      0x71, 0x72,
    ],
    0x2: [
      0x259, 0x25a, 0x25b, 0x25c, 0x25d, 0x25e, 0x25f, 0x260, 0x261, 0x262,
      0x263, 0x264, 0x265, 0x266,
    ],
    0x3: [
      0x1f5, 0x1f6, 0x1f7, 0x1f8, 0x1f9, 0x1fa, 0x1fb, 0x1fc, 0x1fd, 0x1fe,
      0x1ff, 0x200, 0x201, 0x202,
    ],
    0x4: [
      0xc9, 0xca, 0xcb, 0xcc, 0xcd, 0xce, 0xcf, 0xd0, 0xd1, 0xd2, 0xd3, 0xd4,
      0xd5, 0xd6,
    ],
    0x5: [
      0x191, 0x192, 0x193, 0x194, 0x195, 0x196, 0x197, 0x198, 0x199, 0x19a,
      0x19b, 0x19c, 0x19d, 0x19e,
    ],
    0x6: [
      0x12d, 0x12e, 0x12f, 0x130, 0x131, 0x132, 0x133, 0x134, 0x135, 0x136,
      0x137, 0x138, 0x139, 0x13a,
    ],
  },
  c = {
    0x1: "\u6218\u58eb",
    0x2: "\u6cd5\u5e08",
    0x3: "\u5c04\u624b",
    0x4: "\u523a\u5ba2",
    0x5: "\u8f85\u52a9",
    0x6: "\u8089\u76fe",
  },
  v = {
    0x65: "战士生命",
    0x66: "战士攻击力",
    0x67: "战士暴击",
    0x68: "战士格挡",
    0x69: "战士技能伤害",
    0x6a: "战士速度",
    0x6b: "战士体质",
    0x6c: "战士心智",
    0x6d: "战士抵抗",
    0x6e: "法师抵抗",
    0x6f: "射手抵抗",
    0x70: "刺客抵抗",
    0x71: "辅助抵抗",
    0x72: "肉盾抵抗",
    0xc9: "法师生命",
    0xca: "法师攻击力",
    0xcb: "法师暴击",
    0xcc: "法师精准",
    0xcd: "法师技能伤害",
    0xce: "法师速度",
    0xcf: "法师体质",
    0xd0: "法师心智",
    0xd1: "战士抵抗",
    0xd2: "法师抵抗",
    0xd3: "射手抵抗",
    0xd4: "刺客抵抗",
    0xd5: "辅助抵抗",
    0xd6: "肉盾抵抗",
    0x12d: "射手生命",
    0x12e: "射手攻击力",
    0x12f: "射手格挡",
    0x130: "射手精准",
    0x131: "射手技能伤害",
    0x132: "射手速度",
    0x133: "射手体质",
    0x134: "射手心智",
    0x135: "战士抵抗",
    0x136: "法师抵抗",
    0x137: "射手抵抗",
    0x138: "刺客抵抗",
    0x139: "辅助抵抗",
    0x13a: "肉盾抵抗",
    0x191: "刺客生命",
    0x192: "刺客暴击伤害",
    0x193: "刺客暴击",
    0x194: "刺客破甲",
    0x195: "刺客技能伤害",
    0x196: "刺客速度",
    0x197: "刺客体质",
    0x198: "刺客心智",
    0x199: "战士抵抗",
    0x19a: "法师抵抗",
    0x19b: "射手抵抗",
    0x19c: "刺客抵抗",
    0x19d: "辅助抵抗",
    0x19e: "肉盾抵抗",
    0x1f5: "辅助生命",
    0x1f6: "辅助格挡",
    0x1f7: "辅助暴击",
    0x1f8: "辅助速度1",
    0x1f9: "辅助技能伤害",
    0x1fa: "辅助速度",
    0x1fb: "辅助体质",
    0x1fc: "辅助心智",
    0x1fd: "战士抵抗",
    0x1fe: "法师抵抗",
    0x1ff: "射手抵抗",
    0x200: "刺客抵抗",
    0x201: "辅助抵抗",
    0x202: "肉盾抵抗",
    0x259: "肉盾生命",
    0x25a: "肉盾格挡1",
    0x25b: "肉盾暴击",
    0x25c: "肉盾格挡2",
    0x25d: "肉盾技能伤害",
    0x25e: "肉盾速度",
    0x25f: "肉盾体质",
    0x260: "肉盾心智",
    0x261: "战士抵抗",
    0x262: "法师抵抗",
    0x263: "射手抵抗",
    0x264: "刺客抵抗",
    0x265: "辅助抵抗",
    0x266: "肉盾抵抗",
  },
  y = {
    0x65: {
      name: "大眼海胆",
    },
    0xc9: {
      name: "你真蚌",
    },
    0x12d: {
      name: "冰灯水母",
    },
    0x191: {
      name: "潮团兽",
    },
    0x1f5: {
      name: "\u6b66\u867e",
    },
    0x259: {
      name: "甲锅龟",
    },
    0x66: {
      name: "芽芽蛙",
    },
    0xca: {
      name: "梨嘴鸭",
    },
    0x12e: {
      name: "\u70ed\u72d7",
    },
    0x192: {
      name: "\u76d8\u7259",
    },
    0x1f6: {
      name: "拳击狐",
    },
    0x25a: {
      name: "炎鬃狮",
    },
    0x67: {
      name: "泡泡蝇",
    },
    0xcb: {
      name: "响尾蜂",
    },
    0x12f: {
      name: "幽影蝶",
    },
    0x193: {
      name: "铁头飞猪",
    },
    0x1f7: {
      name: "雷帽绒",
    },
    0x25b: {
      name: "疾风隼",
    },
    0x68: {
      name: "小幽灵",
    },
    0xcc: {
      name: "溜溜萝",
    },
    0x130: {
      name: "\u70db\u7075",
    },
    0x194: {
      name: "长颈树",
    },
    0x1f8: {
      name: "灰烬兔",
    },
    0x25c: {
      name: "蛇尾枭",
    },
  },
  d = {
    0x1: {
      id: 0x1,
      name: "秦广王",
    },
    0x2: {
      id: 0x2,
      name: "楚江王",
    },
    0x3: {
      id: 0x3,
      name: "宋帝王",
    },
    0x4: {
      id: 0x4,
      name: "五官王",
    },
    0x5: {
      id: 0x5,
      name: "阎罗王",
    },
    0x6: {
      id: 0x6,
      name: "卞城王",
    },
    0x7: {
      id: 0x7,
      name: "泰山王",
    },
    0x8: {
      id: 0x8,
      name: "都市王",
    },
  };
function h(_0x5b2f34) {
  var _0x33e5c7;
  const _0x35086c = Number(_0x5b2f34);
  return (null == (_0x33e5c7 = e[_0x35086c]) ? void 0x0 : _0x33e5c7["name"])
    ? e[_0x35086c]["name"]
    : b[_0x35086c]
      ? b[_0x35086c]
      : "武将#" + _0x5b2f34;
}
const b = {};
!(function () {
  var _0x5d83fc;
  if (Object["keys"](b)["length"] > 0x0) return;
  const _0x5730e7 = [];
  (a["initialRoomInfo"] && _0x5730e7["push"](a["initialRoomInfo"]),
    a["fightSnapshots"] &&
      a["fightSnapshots"]["forEach"]((_0x28ffcb) => {
        _0x28ffcb["roomInfo"] && _0x5730e7["push"](_0x28ffcb["roomInfo"]);
      }));
  for (const _0x5e567a of _0x5730e7) {
    const _0x3c4038 = _0x5e567a["fightRoleBase"] || [];
    if (Array["isArray"](_0x3c4038))
      for (const _0x496371 of _0x3c4038) {
        const _0x7c482f =
          (null == (_0x5d83fc = _0x496371["battleData"])
            ? void 0x0
            : _0x5d83fc["team"]) || {};
        for (const _0x27f303 of Object["keys"](_0x7c482f)) {
          const _0xa35c8d = _0x7c482f[_0x27f303];
          _0xa35c8d &&
            _0xa35c8d["id"] &&
            !b[_0xa35c8d["id"]] &&
            (b[_0xa35c8d["id"]] = "武将" + _0xa35c8d["id"]);
        }
      }
  }
})();
const x = {};
function I(_0xcc82c9) {
  var _0x4b94a3, _0x3a8a91;
  const _0x205c51 = Number(_0xcc82c9);
  if (x[_0x205c51]) return x[_0x205c51];
  const _0x6bdd8a = String(_0x205c51);
  if (0x5 === _0x6bdd8a["length"] && _0x6bdd8a["startsWith"]("1000")) {
    const _0x1a8166 = Number(_0x6bdd8a[0x4]),
      _0x4d5815 =
        null == (_0x4b94a3 = d[_0x1a8166]) ? void 0x0 : _0x4b94a3["name"];
    if (_0x4d5815) return _0x4d5815;
  }
  if (0x7 === _0x6bdd8a["length"] && _0x6bdd8a["startsWith"]("1000")) {
    const _0x47b3d0 = Number(_0x6bdd8a[0x4]),
      _0x4bd7f2 = _0x6bdd8a["slice"](0x6),
      _0x4d3b57 =
        null == (_0x3a8a91 = d[_0x47b3d0]) ? void 0x0 : _0x3a8a91["name"];
    if (_0x4d3b57) return _0x4d3b57 + "喽啰" + _0x4bd7f2;
  }
  return "怪物#" + _0xcc82c9;
}
!(function () {
  var _0x1c6b4e, _0x498e9b;
  const _0x451eff = [];
  (a["initialRoomInfo"] && _0x451eff["push"](a["initialRoomInfo"]),
    a["fightSnapshots"] &&
      a["fightSnapshots"]["forEach"]((_0x1a7f6f) => {
        _0x1a7f6f["roomInfo"] && _0x451eff["push"](_0x1a7f6f["roomInfo"]);
      }));
  for (const _0x16194e of _0x451eff) {
    const _0x341e17 = _0x16194e["monsterTeamInfo"] || {};
    for (const [_0x431a3d, _0xa0ba01] of Object["entries"](_0x341e17)) {
      const _0x6acb01 =
        (null == (_0x1c6b4e = _0xa0ba01["monsterTeam"])
          ? void 0x0
          : _0x1c6b4e["team"]) || {};
      for (const [_0x355b66, _0x3f2bc3] of Object["entries"](_0x6acb01)) {
        const _0x35d46b = _0x3f2bc3["id"];
        if (_0x35d46b && !x[_0x35d46b]) {
          const _0x50067d =
              (null == (_0x498e9b = d[Number(_0x431a3d)])
                ? void 0x0
                : _0x498e9b["name"]) || "第" + _0x431a3d + "关Boss",
            _0xa151d =
              parseInt(_0x355b66) ===
              Math["min"](...Object["keys"](_0x6acb01)["map"](Number));
          x[_0x35d46b] = _0xa151d ? _0x50067d : _0x50067d + "喽啰" + _0x355b66;
        }
      }
    }
  }
})();
export {
  o as F,
  l as H,
  n as L,
  y as P,
  e as a,
  c as b,
  u as c,
  v as d,
  s as e,
  g as f,
  t as g,
  m as h,
  r as i,
  f as j,
  I as k,
  i as l,
  h as m,
  p as w,
};
