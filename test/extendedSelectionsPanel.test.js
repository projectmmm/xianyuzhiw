import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";
import vm from "node:vm";
import ts from "typescript";
import * as vue from "vue";
import * as catalog from "../src/utils/batch/extendedTaskCatalog.js";

async function panel(loader) {
  const source = await readFile(
    new URL("../src/components/ExtendedTasksPanel.vue", import.meta.url),
    "utf8",
  );
  const script = `${
    source.match(/<script setup>([\s\S]*?)<\/script>/)[1]
  }\nexport {selectedTask, choices, goodsLoaded, refreshGoods, selectionsReady, update, draft, goodsError};`;
  const code = ts.transpileModule(script, {
    compilerOptions: {
      module: ts.ModuleKind.CommonJS,
      target: ts.ScriptTarget.ES2022,
    },
  }).outputText;
  const props = vue.reactive({
    busy: false,
    selectedCount: 1,
    accountKey: "first",
    settings: {},
    loadGoods: loader,
  });
  const scope = vue.effectScope();
  const exports = {};
  scope.run(() =>
    vm.runInNewContext(code, {
      exports,
      defineProps: () => props,
      defineEmits: () => (event, settings) => {
        if (event === "update:settings") props.settings = settings;
      },
      require(name) {
        if (name === "vue") return vue;
        if (name.includes("extendedTaskCatalog")) return catalog;
        return {};
      },
    }),
  );
  return { state: exports, props, close: () => scope.stop() };
}
const flush = async () => {
  await vue.nextTick();
  await Promise.resolve();
  await vue.nextTick();
};

test("name selector ignores late responses after changing accounts and blocks empty/error lists", async () => {
  const pending = [];
  const p = await panel(() => new Promise((resolve) => pending.push(resolve)));
  try {
    assert.equal(pending.length, 1);
    p.props.accountKey = "second";
    await flush();
    assert.equal(pending.length, 2);
    pending[1]({
      fields: {
        formation: [
          { value: 0, label: "当前阵容 · 吕布", settings: { formation: 0 } },
        ],
      },
    });
    await flush();
    assert.equal(p.state.selectionsReady.value, true);
    pending[0]({
      fields: {
        formation: [
          { value: 6, label: "旧角色阵容", settings: { formation: 6 } },
        ],
      },
    });
    await flush();
    assert.equal(p.state.choices.value.formation[0].value, 0);
    assert.equal(p.state.selectionsReady.value, true);
    p.props.loadGoods = async () => {
      throw new Error("读取失败");
    };
    await p.state.refreshGoods();
    assert.equal(p.state.selectionsReady.value, false);
    assert.equal(p.state.goodsError.value, "读取失败");
    p.props.loadGoods = async () => ({ fields: { formation: [] } });
    await p.state.refreshGoods();
    assert.equal(p.state.selectionsReady.value, false);
    assert.equal(p.state.draft.value.formation, null);
  } finally {
    p.close();
  }
});

test("switching feature requires a fresh named target and cannot retain a previous task's choices", async () => {
  const p = await panel(async () => ({
    fields: {
      formation: [{ value: 0, label: "当前阵容", settings: { formation: 0 } }],
    },
  }));
  try {
    await flush();
    p.state.selectedTask.value = "batchCollectionActivate";
    await flush();
    assert.equal(p.state.draft.value.target, null);
    assert.equal(p.state.selectionsReady.value, false);
    assert.equal(p.state.choices.value.target, undefined);
  } finally {
    p.close();
  }
});
