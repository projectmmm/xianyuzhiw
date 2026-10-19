import assert from "node:assert/strict";
import test from "node:test";
import {
  createLocalResourceProvider,
  parseLocalResourcePack,
} from "../src/utils/localResourcePack.js";

function packFile({ offset = "0", size = 128, magic = "DDS " } = {}) {
  const json = new TextEncoder().encode(
    JSON.stringify({
      files: { textures: { files: { "uuid-one.dds": { offset, size } } } },
    }),
  );
  const headerSize = 8 + json.length;
  const bytes = new Uint8Array(8 + headerSize + 128);
  const header = new DataView(bytes.buffer);
  header.setUint32(4, headerSize, true);
  header.setUint32(12, json.length, true);
  bytes.set(json, 16);
  bytes.set(
    typeof magic === "string" ? new TextEncoder().encode(magic) : magic,
    8 + headerSize,
  );
  return new File([bytes], "dds.test.asar");
}

test("local ASAR parser resolves texture bytes without extracting paths or making requests", async () => {
  const pack = await parseLocalResourcePack(packFile());
  const provider = createLocalResourceProvider(pack);
  assert.equal(pack.count, 1);
  assert.equal(provider.has("uuid-one"), true);
  assert.equal(provider.has("unknown"), false);
  const bytes = await provider.read("uuid-one");
  assert.equal(bytes.byteLength, 128);
  assert.equal(new TextDecoder().decode(bytes.slice(0, 4)), "DDS ");
  assert.equal(await provider.read("unknown"), null);
});

test("local resource import rejects BIN files, out-of-bounds entries and KTX archives", async () => {
  await assert.rejects(
    parseLocalResourcePack(new File([new Uint8Array(128)], "fixture.bin")),
    /asar/,
  );
  await assert.rejects(
    parseLocalResourcePack(packFile({ offset: "999999" })),
    /越界/,
  );
  const file = packFile({
    magic: new Uint8Array([0xab, 0x4b, 0x54, 0x58, 0x20, 0x32, 0x30, 0xbb]),
  });
  await assert.rejects(parseLocalResourcePack(file), /KTX2/);
});
