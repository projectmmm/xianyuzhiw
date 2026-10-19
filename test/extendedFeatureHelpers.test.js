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

test("film activity IDs derive from the returned active activity family", () => {
  assert.deepEqual(
    deriveFilmActivityIds({
      activity: { commonActivityInfo: { 2609106: {}, 2609105: {} } },
    }),
    { shopId: 2609106, taskActId: 2609104, photoActId: 2609103 },
  );
  assert.throws(
    () => deriveFilmActivityIds({ activity: {} }),
    /活动信息不完整/,
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
