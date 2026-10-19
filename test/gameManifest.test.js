import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";
import vm from "node:vm";

const source = await readFile(
  new URL("../public/game/main.2a00e.js", import.meta.url),
  "utf8",
);
function runtime(fetch) {
  const scope = {
    fetch,
    AbortSignal,
    console: { log() {}, error() {} },
    _CCSettings: { bundleVers: { internal: "" } },
  };
  scope.window = scope;
  vm.createContext(scope);
  vm.runInContext(source, scope);
  return scope;
}
const bundle = {
  codeVersion: "v2.50.3",
  game: "b72ac",
  launcher: "4cccb",
  COMMIT_ID: "896449c8",
};
const response = (value) => ({
  ok: true,
  text: async () => JSON.stringify(value),
});

test("game startup uses official H5 channel and normalizes the live login version", async () => {
  let request;
  const scope = runtime(async (url, options) => {
    request = { url, options };
    return response({
      body: { isLast: true, bundleVers: JSON.stringify(bundle) },
    });
  });
  await scope.ensureBundleVers();
  assert.equal(
    request.url,
    "https://xxz-xyzw.hortorgames.com/login/manifest?platform=hortor&version=0.1.0-androidh5",
  );
  assert.equal(request.options.method, "POST");
  assert.equal(request.options.body, "{}");
  assert.equal(request.options.cache, "no-store");
  assert.equal(request.options.credentials, "omit");
  assert.equal(scope._CCSettings.bundleVers.game, "b72ac");
  assert.equal(scope._CCSettings.bundleVers.launcher, "4cccb");
  assert.equal(scope._CCSettings.codeVersion, "2.50.3");
  assert.equal(scope.GAME_VERSION, "2.50.3-wx");
  scope.CODE_VERSION = "v2.50.3"; // The official launcher writes a v-prefixed codeVersion.
  scope.applyRemoteGameVersion();
  assert.equal(scope.CODE_VERSION, "2.50.3");
  assert.equal(scope.COMMIT_ID, "896449c8");
});

test("unavailable or incomplete official manifest stops boot before any stale game code runs", async () => {
  const cases = [
    { code: -1, body: { bundleVers: bundle } },
    { body: { isLast: false, bundleVers: bundle } },
    { body: { bundleVers: { ...bundle, game: "" } } },
    { body: { bundleVers: { ...bundle, codeVersion: "unknown" } } },
    { body: { bundleVers: [] } },
  ];
  for (const value of cases) {
    const scope = runtime(async () => response(value));
    scope.GAME_VERSION = "old";
    await assert.rejects(scope.boot());
    assert.equal(scope.GAME_VERSION, "old");
    assert.equal(scope.__officialGameManifest, undefined);
    assert.deepEqual(Object.keys(scope._CCSettings.bundleVers), ["internal"]);
  }
  const scope = runtime(async () => {
    throw new Error("offline");
  });
  await assert.rejects(scope.boot(), /offline/);
});
