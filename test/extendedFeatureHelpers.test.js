import assert from "node:assert/strict";
import test from "node:test";
import {
  deriveFilmActivityIds,
  getBattlePreset,
} from "../src/utils/batch/extendedFeatureHelpers.js";
import { runNightmareGroupTask } from "../src/utils/batch/nightmareGroupTask.js";

test("battle presets use only the requested slot from the current server response", () => {
  const response = {
    presetTeamInfo: {
      useTeamId: 2,
      presetTeamInfo: {
        1: { teamInfo: { 0: { heroId: 101 } } },
        2: { teamInfo: { 1: { heroId: 107 } }, weapon: { weaponId: 9 } },
      },
    },
  };
  assert.deepEqual(getBattlePreset(response), {
    battleTeam: { 1: 107 },
    lordWeaponId: 9,
  });
  assert.throws(() => getBattlePreset(response, 6), /阵容为空/);
});

test("photo activity uses explicit config and live state, never the largest unrelated ID", () => {
  const now = Date.parse("2026-10-19T00:00:00Z");
  const config = {
    ActFestivalConf: {
      2610168: {
        id: 2610168,
        actType: 36,
        actGroup: 2,
        itemId: 5290,
        start: now / 1000 - 100,
        end: now / 1000 + 100,
      },
      2610169: {
        id: 2610169,
        actType: 37,
        actGroup: 2,
        itemId: 5290,
        start: now / 1000 - 100,
        end: now / 1000 + 100,
      },
    },
    PhotoConf: { 261016101: { id: 261016101, actId: 2610168 } },
    PhotoPieceConf: { 11: { id: 11, actId: 2610168, progressNeed: 10 } },
    BattlePassMissionConf: {
      261016901: { id: 261016901, actId: 2610169, rank: 1 },
    },
  };
  const response = {
    body: {
      activity: {
        photoActivityInfo: { 2610168: { pieceId: 11, num: 2 } },
        commonActivityInfo: { 26101611: {}, 999999999: {} },
      },
    },
  };
  const result = deriveFilmActivityIds(response, config, now);
  assert.equal(result.photoActId, 2610168);
  assert.equal(result.taskActId, 2610169);
  assert.equal(result.itemId, 5290);
  assert.deepEqual(
    result.missions.map((row) => row.id),
    [261016901],
  );
  assert.deepEqual(
    result.pieces.map((row) => row.id),
    [11],
  );
  assert.throws(
    () => deriveFilmActivityIds(response, config, now + 200000),
    /唯一确认/,
  );
  assert.throws(
    () => deriveFilmActivityIds({ activity: {} }, config, now),
    /咸来入镜活动状态/,
  );
});

test("nightmare group refuses occupied teams and releases only connections it acquired", async () => {
  const closed = [];
  let released = 0;
  const writes = [];
  const deps = {
    selectedTokens: { value: ["captain", "member"] },
    tokens: { value: [{ id: "captain" }, { id: "member" }] },
    tokenStatus: { value: {} },
    isRunning: { value: false },
    shouldStop: { value: false },
    batchSettings: { maxActive: 5 },
    currentRunningTokenId: { value: null },
    ensureConnection: async (id, _retries, owned) => owned(id === "member"),
    releaseConnectionSlot: () => released++,
    tokenStore: {
      getWebSocketStatus: () => "connected",
      closeWebSocketConnection: (id) => closed.push(id),
      async sendMessageWithPromise(id, command) {
        writes.push(command);
        if (command === "role_getroleinfo")
          return { role: { id: id === "captain" ? 1 : 2 } };
        return id === "member" ? { teamInfo: { teamId: 42 } } : {};
      },
    },
    addLog() {},
    message: { warning() {} },
  };
  const result = await runNightmareGroupTask(deps, {
    minutes: 1,
    formation: 0,
  });
  assert.equal(result.failed, 2);
  assert.deepEqual(closed, ["member"]);
  assert.equal(released, 1);
  assert.ok(
    writes.every((command) =>
      ["matchteam_getroleteaminfo", "role_getroleinfo"].includes(command),
    ),
  );
  assert.equal(deps.isRunning.value, false);
});
