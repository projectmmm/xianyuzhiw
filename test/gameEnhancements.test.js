import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";
import vm from "node:vm";

const catalog = JSON.parse(
  await readFile(
    new URL("../src/utils/gameEnhancementCatalog.json", import.meta.url),
    "utf8",
  ),
);
const loader = await readFile(
  new URL("../public/game/enhancement-loader.js", import.meta.url),
  "utf8",
);

async function runLoader(settings, { fail = null } = {}) {
  const loaded = [];
  const requests = [];
  const win = {};
  vm.runInNewContext(loader, {
    window: win,
    URL,
    Set,
    console: { warn() {} },
    localStorage: { getItem: () => JSON.stringify(settings) },
    fetch: async (url) => {
      requests.push(String(url));
      return { ok: true, json: async () => catalog };
    },
    document: {
      currentScript: {
        src: "https://helper.invalid/nested/game/enhancement-loader.js",
      },
      createElement: () => ({}),
      head: {
        appendChild(script) {
          loaded.push(script.src);
          queueMicrotask(() =>
            script.src.endsWith(fail) ? script.onerror() : script.onload(),
          );
        },
      },
    },
  });
  await win.__XYZW_ENHANCEMENTS_READY__;
  return { win, loaded, requests };
}

test("optional enhancements are off by default and perform no requests", async () => {
  const f = await runLoader({});
  assert.deepEqual(f.loaded, []);
  assert.deepEqual(f.requests, []);
});

test("enhancements load only known local assets once and tolerate one resource failure", async () => {
  const f = await runLoader(
    {
      skipPopup: true,
      skipChest: true,
      heroAttrs: true,
      nightmareAccel: true,
      evil: "https://other.invalid/upload",
    },
    { fail: "hero_attrs_enhance.js" },
  );
  assert.equal(f.loaded.filter((url) => url.endsWith("basic.js")).length, 1);
  assert.equal(f.win.__XYZW_ENHANCEMENT_STATUS__.heroAttrs, "failed");
  assert.equal(f.win.__XYZW_ENHANCEMENT_STATUS__.nightmareAccel, "loaded");
  for (const url of [...f.requests, ...f.loaded])
    assert.ok(url.startsWith("https://helper.invalid/nested/game/"));
});

test("all distributed enhancement files parse and contain no credential upload or cloud dependencies", async () => {
  const files = new Set([
    "panel_enhancer.js",
    ...catalog.map((item) => item.file),
  ]);
  for (const file of files) {
    assert.match(file, /^[a-z_]+\.js$/);
    const source = await readFile(
      new URL(`../public/game/enhancements/${file}`, import.meta.url),
      "utf8",
    );
    assert.ok(new vm.Script(source, { filename: file }));
    assert.doesNotMatch(
      source,
      /8\.133\.250\.145|cloud-sync|\/api\/upload|\/cloud\/|\beval\(/,
    );
  }
});
