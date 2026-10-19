import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";
import vm from "node:vm";
import ts from "typescript";
import { availableTasks } from "../src/utils/batch/constants.js";

const source = await readFile(
  new URL("../src/views/BatchDailyTasks.vue", import.meta.url),
  "utf8",
);
const script = source.match(/<script setup>([\s\S]*?)<\/script>/)[1];
const ast = ts.createSourceFile(
  "BatchDailyTasks.js",
  script,
  ts.ScriptTarget.ES2022,
  true,
);
const declaration = ast.statements.find(
  (node) =>
    ts.isFunctionDeclaration(node) && node.name.text === "getScheduledTask",
);
const functions = Object.fromEntries(
  availableTasks.map(({ value }) => [value, () => value]),
);
const context = vm.createContext({ ...functions, extendedTasks: functions });
vm.runInContext(declaration.getText(ast), context);

test("every configured scheduled task resolves to its existing implementation", () => {
  for (const { value } of availableTasks) {
    assert.equal(context.getScheduledTask(value), functions[value], value);
  }
});

test("unknown task identifiers cannot evaluate source or resolve inherited properties", () => {
  for (const value of [
    "missing",
    "constructor",
    "toString",
    "__proto__",
    "globalThis.executed = true",
  ]) {
    assert.equal(context.getScheduledTask(value), undefined);
  }
  assert.equal(context.executed, undefined);
});
