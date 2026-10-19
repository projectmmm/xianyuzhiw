import assert from "node:assert/strict";
import test from "node:test";
import { createScreenWakeLock } from "../src/utils/screenWakeLock.js";

function fixture(request) {
  const listeners = new Map();
  const document = {
    visibilityState: "visible",
    addEventListener: (name, handler) => listeners.set(name, handler),
    removeEventListener: (name) => listeners.delete(name),
  };
  const states = [];
  const controller = createScreenWakeLock({
    navigator: { wakeLock: { request } },
    document,
    onChange: (state) => states.push(state),
  });
  return { controller, document, listeners, states };
}

test("disabling a pending wake request immediately releases its eventual lock", async () => {
  let resolve;
  let releases = 0;
  const f = fixture(
    () =>
      new Promise((done) => {
        resolve = done;
      }),
  );
  const enable = f.controller.setEnabled(true);
  await Promise.resolve();
  await f.controller.setEnabled(false);
  resolve({ release: async () => releases++, addEventListener() {} });
  await enable;
  assert.equal(releases, 1);
  assert.ok(!f.states.includes("active"));
  await f.controller.dispose();
  assert.equal(f.listeners.size, 0);
});

test("visibility releases and reacquires one screen lock without duplicate requests", async () => {
  let requests = 0;
  let releases = 0;
  const f = fixture(async () => {
    requests++;
    return { release: async () => releases++, addEventListener() {} };
  });
  await f.controller.setEnabled(true);
  f.document.visibilityState = "hidden";
  f.listeners.get("visibilitychange")();
  await Promise.resolve();
  f.document.visibilityState = "visible";
  f.listeners.get("visibilitychange")();
  await new Promise((resolve) => setImmediate(resolve));
  assert.equal(requests, 2);
  assert.equal(releases, 1);
  await f.controller.dispose();
  assert.equal(releases, 2);
});
