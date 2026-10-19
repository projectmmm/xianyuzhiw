import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";
import vm from "node:vm";

const source = await readFile(
  new URL("../public/game/enhancements/achievement_reward.js", import.meta.url),
  "utf8",
);
function fixture({ advance = true } = {}) {
  let claims = 0;
  class AchievementDialog {
    refresh() {}
  }
  const achievement = {
    state: 0,
    gotoConfig: { id: 42 },
    curid: 1,
    curIndex: 0,
  };
  const module = {
    achievementList: [achievement],
    _refreshAchieve() {},
    resortAchieve() {},
  };
  const modules = {
    Configs: { ModuleType: { ACHIEVEMENT: 1 } },
    ModuleManager: { GET_MODULE: () => module },
    "data-index": {
      TaskService: {
        async claimAchievement(body) {
          assert.deepEqual(body.achievementId, 42);
          claims++;
          if (advance) {
            achievement.curid++;
            if (claims === 2) achievement.state = 1;
          }
          return {
            code: 0,
            getData: () => ({ reward: [{ itemId: 1, value: 1 }] }),
          };
        },
      },
    },
    "index-ui": { SHOW_SIMPLE_DIALOG() {}, SHOW_PROXY() {} },
    AchievementDialog: { AchievementDialog },
  };
  const win = { __require: (name) => modules[name] };
  vm.runInNewContext(source, {
    window: win,
    console: { log() {}, warn() {} },
    setTimeout: (resolve) => queueMicrotask(resolve),
    setInterval() {
      throw new Error("unexpected polling");
    },
    clearInterval() {},
  });
  const dialog = new AchievementDialog();
  return { dialog, claims: () => claims };
}

test("achievement button claims consecutive unlocked steps and unlocks after completion", async () => {
  const f = fixture();
  f.dialog._achClaimHookOnClick();
  await new Promise((resolve) => setImmediate(resolve));
  assert.equal(f.claims(), 2);
  assert.equal(f.dialog._achClaimHookLocked, false);
});

test("achievement button stops after an acknowledgement without progress, even with rewards", async () => {
  const f = fixture({ advance: false });
  f.dialog._achClaimHookOnClick();
  await new Promise((resolve) => setImmediate(resolve));
  assert.equal(f.claims(), 1);
  assert.equal(f.dialog._achClaimHookLocked, false);
});
