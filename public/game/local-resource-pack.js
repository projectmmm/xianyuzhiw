const DB_NAME = "xyzw_local_resource_pack_v1";
const STORE = "packages";
const PACK_KEY = "current";

export async function parseLocalResourcePack(file) {
  if (!file || file.size < 16 || !/\.asar$/i.test(file.name || ""))
    throw new Error("请选择 DDS 贴图 .asar 资源包");
  const header = new DataView(await file.slice(0, 16).arrayBuffer());
  const headerSize = header.getUint32(4, true);
  const jsonSize = header.getUint32(12, true);
  const dataOffset = 8 + headerSize;
  if (
    !jsonSize ||
    jsonSize > 64 * 1024 * 1024 ||
    dataOffset < 16 + jsonSize ||
    dataOffset > file.size
  )
    throw new Error("资源包索引无效");
  const tree = JSON.parse(await file.slice(16, 16 + jsonSize).text());
  const index = new Map();
  const pending = [{ node: tree, depth: 0 }];
  let visited = 0;
  while (pending.length) {
    const { node, depth } = pending.pop();
    if (depth > 64 || !node?.files || typeof node.files !== "object")
      throw new Error("资源包目录无效");
    for (const [name, entry] of Object.entries(node.files)) {
      if (++visited > 250000) throw new Error("资源包条目过多");
      if (entry?.files) {
        pending.push({ node: entry, depth: depth + 1 });
        continue;
      }
      if (!entry || entry.offset === undefined || entry.unpacked || entry.link)
        continue;
      const offset = Number(entry.offset);
      const size = Number(entry.size);
      if (
        !Number.isSafeInteger(offset) ||
        !Number.isSafeInteger(size) ||
        offset < 0 ||
        size < 0 ||
        offset + size > file.size - dataOffset
      )
        throw new Error("资源包数据越界");
      const uuid = name.split(".")[0];
      if (!uuid || index.has(uuid))
        throw new Error("资源包包含重复或空的贴图标识");
      index.set(uuid, { offset, size });
    }
  }
  if (!index.size) throw new Error("资源包没有可读取的贴图");
  let hasDds = false;
  for (const entry of [...index.values()]
    .filter((item) => item.size >= 8)
    .slice(0, 32)) {
    const bytes = new Uint8Array(
      await file
        .slice(dataOffset + entry.offset, dataOffset + entry.offset + 8)
        .arrayBuffer(),
    );
    if (
      bytes[0] === 0xab &&
      bytes[1] === 0x4b &&
      bytes[2] === 0x54 &&
      bytes[3] === 0x58
    )
      throw new Error("KTX2 贴图包不受支持，请选择同版本 DDS 贴图包");
    if (
      bytes[0] === 0x44 &&
      bytes[1] === 0x44 &&
      bytes[2] === 0x53 &&
      bytes[3] === 0x20
    )
      hasDds = true;
  }
  if (!hasDds) throw new Error("未识别到 DDS 贴图，请检查资源包格式");
  return {
    file,
    name: file.name,
    size: file.size,
    index: [...index],
    dataOffset,
    count: index.size,
  };
}

function openDatabase() {
  return new Promise((resolve, reject) => {
    const request = indexedDB.open(DB_NAME, 1);
    request.onupgradeneeded = () => request.result.createObjectStore(STORE);
    request.onsuccess = () => resolve(request.result);
    request.onerror = () => reject(new Error("无法打开本地资源存储"));
    request.onblocked = () => reject(new Error("本地资源存储被其他窗口占用"));
  });
}

async function transaction(mode, action) {
  const db = await openDatabase();
  try {
    return await new Promise((resolve, reject) => {
      const tx = db.transaction(STORE, mode);
      const request = action(tx.objectStore(STORE));
      tx.oncomplete = () => resolve(request?.result);
      tx.onerror = () =>
        reject(new Error("本地贴图存储失败，可能是可用空间不足"));
      tx.onabort = () => reject(new Error("本地贴图存储已取消"));
    });
  } finally {
    db.close();
  }
}

export async function saveLocalResourcePack(file) {
  const pack = await parseLocalResourcePack(file);
  await transaction("readwrite", (store) => store.put(pack, PACK_KEY));
  return { name: pack.name, size: pack.size, count: pack.count };
}
export function readLocalResourcePack() {
  return transaction("readonly", (store) => store.get(PACK_KEY));
}
export function removeLocalResourcePack() {
  return transaction("readwrite", (store) => store.delete(PACK_KEY));
}
export function createLocalResourceProvider(pack) {
  const index = new Map(pack.index);
  return {
    has(uuid) {
      return index.has(uuid);
    },
    async read(uuid) {
      const entry = index.get(uuid);
      if (!entry) return null;
      return pack.file
        .slice(
          pack.dataOffset + entry.offset,
          pack.dataOffset + entry.offset + entry.size,
        )
        .arrayBuffer();
    },
  };
}
