<template>
  <n-card title="扩展功能" class="extended-tasks">
    <n-p>使用上方勾选的 {{ selectedCount }} 个角色，结果写入现有任务日志。</n-p>
    <n-space vertical :size="16">
      <n-select
        v-model:value="selectedGroup"
        :options="groups"
        :disabled="busy"
        placeholder="功能分类"
      />
      <n-select
        v-model:value="selectedTask"
        :options="taskOptions"
        :disabled="busy"
        filterable
        placeholder="选择功能"
      />
      <n-form v-if="definition" label-placement="top">
        <n-form-item
          v-for="field in definition.fields"
          :key="field.key"
          :label="field.label"
        >
          <n-select
            v-if="['gameGoods', 'gameSelection'].includes(field.type)"
            :value="selectedOption(field.key)?.value ?? null"
            :options="choices[field.key] || []"
            :render-label="renderGoodsLabel"
            :virtual-scroll="false"
            :loading="loadingGoods"
            :disabled="busy || loadingGoods"
            filterable
            :placeholder="`读取游戏后，按名称选择${field.label}`"
            @update:value="(value) => update(field.key, value)"
          />
          <n-input-number
            v-else-if="field.type === 'number'"
            :value="draft[field.key]"
            :min="field.min"
            :max="field.max"
            :precision="0"
            :disabled="busy"
            @update:value="(value) => update(field.key, value)"
          />
          <n-select
            v-else-if="field.type === 'select'"
            :value="draft[field.key]"
            :options="field.options"
            :disabled="busy"
            @update:value="(value) => update(field.key, value)"
          />
          <n-input
            v-else
            :value="draft[field.key]"
            :disabled="busy"
            @update:value="(value) => update(field.key, value)"
          />
        </n-form-item>
      </n-form>
      <template v-if="dynamicFields.length">
        <n-button
          :loading="loadingGoods"
          :disabled="busy || !selectedCount || loadingGoods"
          @click="refreshGoods"
          >读取 / 刷新游戏数据</n-button
        >
        <n-text depth="3"
          >列表来自第一个勾选角色及官方游戏配置；执行时逐个角色重新核验。活动、系列等关联参数自动带入。充值商品请在游戏内购买。</n-text
        >
        <n-alert v-if="goodsError" type="warning">{{ goodsError }}</n-alert>
        <n-alert v-if="dataNotice" type="info">{{ dataNotice }}</n-alert>
        <template v-for="field in dynamicFields" :key="field.key">
          <n-alert
            v-if="goodsLoaded && !choices[field.key]?.length"
            type="info"
          >
            暂无可选择的{{
              field.label
            }}：可能尚未开放、没有持有，或游戏未返回可识别的名称配置。可刷新数据后重试。
          </n-alert>
          <n-alert v-if="selectedOption(field.key)" type="info">{{
            selectedOption(field.key).label
          }}</n-alert>
        </template>
      </template>
      <n-text v-if="validationError" type="warning">{{
        validationError
      }}</n-text>
      <n-alert
        v-if="selectedTask === 'batchNightmareChallengePresets'"
        type="info"
        >勾选 1～5
        个角色，勾选顺序的第一个角色担任队长，其余为队员。开始前请确保角色没有加入其他队伍。</n-alert
      >
      <n-text depth="3"
        >购买、抽奖、升级和开包会消耗对应游戏资源。次数与数量按每个角色计算；活动需处于开放期。</n-text
      >
      <n-space>
        <n-button
          type="primary"
          :disabled="
            busy ||
            loadingGoods ||
            !selectedCount ||
            !definition ||
            !!validationError ||
            !selectionsReady
          "
          @click="$emit('run', selectedTask)"
          >执行所选功能</n-button
        >
        <n-button v-if="busy" type="warning" @click="$emit('stop')"
          >停止任务</n-button
        >
        <n-button @click="showEnhancements = !showEnhancements"
          >游戏内增强设置</n-button
        >
      </n-space>
      <n-text depth="3"
        >新增定时任务时也可选择这些功能，保存时会记录各功能当前参数。</n-text
      >
      <GameEnhancementSettings v-if="showEnhancements" />
    </n-space>
  </n-card>
</template>
<script setup>
import { computed, h, ref, watch } from "vue";
import GameEnhancementSettings from "@/components/Setting/GameEnhancementSettings.vue";
import {
  extendedTaskCatalog,
  normalizeExtendedTaskSettings,
} from "@/utils/batch/extendedTaskCatalog.js";
const props = defineProps({
  busy: Boolean,
  selectedCount: { type: Number, default: 0 },
  settings: { type: Object, default: () => ({}) },
  accountKey: { type: String, default: "" },
  loadGoods: { type: Function, default: null },
});
const emit = defineEmits(["run", "stop", "update:settings"]);
const groups = [...new Set(extendedTaskCatalog.map((item) => item.group))].map(
  (label) => ({ label, value: label }),
);
const selectedGroup = ref(groups[0].value);
const taskOptions = computed(() =>
  extendedTaskCatalog
    .filter((item) => item.group === selectedGroup.value)
    .map(({ label, value }) => ({ label, value })),
);
const selectedTask = ref(taskOptions.value[0].value);
const definition = computed(() =>
  extendedTaskCatalog.find((item) => item.value === selectedTask.value),
);
const draft = ref({});
const showEnhancements = ref(false);
const choices = ref({});
const goodsLoaded = ref(false);
const goodsError = ref("");
const dataNotice = ref("");
const loadingGoods = ref(false);
let goodsRequest = 0;
const dynamicFields = computed(
  () =>
    definition.value?.fields.filter((field) =>
      ["gameGoods", "gameSelection"].includes(field.type),
    ) ?? [],
);
const goodsField = computed(() =>
  dynamicFields.value.find((field) => field.type === "gameGoods"),
);
const selectedOption = (key) =>
  choices.value[key]?.find((item) => item.value === draft.value[key]);
const selectionsReady = computed(
  () =>
    !dynamicFields.value.length ||
    (goodsLoaded.value &&
      !goodsError.value &&
      dynamicFields.value.every((field) => {
        const selected = selectedOption(field.key);
        return selected && !selected.disabled;
      })),
);
const renderGoodsLabel = (option) =>
  h(
    "span",
    {
      style: {
        whiteSpace: "normal",
        overflowWrap: "anywhere",
        lineHeight: "1.5",
      },
    },
    option.label,
  );
const validationError = computed(() => {
  if (!definition.value) return "";
  try {
    normalizeExtendedTaskSettings(selectedTask.value, draft.value);
    return "";
  } catch (error) {
    return error.message;
  }
});
async function refreshGoods() {
  if (
    !dynamicFields.value.length ||
    !props.loadGoods ||
    props.busy ||
    loadingGoods.value
  )
    return;
  const request = ++goodsRequest;
  const source = goodsField.value?.source;
  const task = selectedTask.value;
  loadingGoods.value = true;
  goodsError.value = "";
  dataNotice.value = "";
  goodsLoaded.value = false;
  choices.value = {};
  try {
    const result = await props.loadGoods(source ?? { task });
    if (request !== goodsRequest) return;
    choices.value = source
      ? { goodsId: result.map((item) => ({ ...item, value: item.goodsId })) }
      : result.fields;
    dataNotice.value = result.notice || "";
    goodsLoaded.value = true;
    const next = { ...draft.value };
    for (const field of dynamicFields.value) {
      if (
        !choices.value[field.key]?.some(
          (item) => item.value === next[field.key] && !item.disabled,
        )
      )
        next[field.key] = null;
    }
    save(next);
  } catch (error) {
    if (request === goodsRequest)
      goodsError.value = error.message || "读取游戏数据失败，请重试";
  } finally {
    if (request === goodsRequest) loadingGoods.value = false;
  }
}
watch(selectedGroup, () => {
  selectedTask.value = taskOptions.value[0].value;
});
watch(
  [definition, () => props.settings],
  () => {
    draft.value = Object.fromEntries(
      (definition.value?.fields || []).map((field) => [
        field.key,
        Object.hasOwn(props.settings[selectedTask.value] ?? {}, field.key)
          ? props.settings[selectedTask.value][field.key]
          : field.default,
      ]),
    );
  },
  { immediate: true },
);
watch(
  [selectedTask, () => props.accountKey],
  () => {
    goodsRequest++;
    choices.value = {};
    goodsLoaded.value = false;
    goodsError.value = "";
    dataNotice.value = "";
    loadingGoods.value = false;
    if (dynamicFields.value.length && props.selectedCount && !props.busy)
      void refreshGoods();
  },
  { immediate: true },
);
function save(next) {
  draft.value = next;
  emit("update:settings", {
    ...props.settings,
    [selectedTask.value]: { ...next },
  });
}
function update(key, value) {
  save({ ...draft.value, [key]: value });
}
</script>
<style scoped>
.extended-tasks {
  margin-top: 18px;
}
</style>
