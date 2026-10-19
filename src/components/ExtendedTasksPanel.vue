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
            v-if="field.type === 'gameGoods'"
            :value="selectedGoods?.goodsId ?? null"
            :options="goodsOptions"
            :render-label="renderGoodsLabel"
            :virtual-scroll="false"
            :loading="loadingGoods"
            :disabled="busy || loadingGoods"
            filterable
            placeholder="按道具名称选择商品"
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
      <template v-if="goodsField">
        <n-button
          :loading="loadingGoods"
          :disabled="busy || !selectedCount || loadingGoods"
          @click="refreshGoods"
          >读取 / 刷新游戏商品</n-button
        >
        <n-text depth="3"
          >商品列表来自第一个勾选角色；执行时会逐个角色重新核验活动、余额和限购。充值商品仅展示，请在游戏内购买。</n-text
        >
        <n-alert v-if="goodsError" type="warning">{{ goodsError }}</n-alert>
        <n-alert v-else-if="goodsLoaded && !goods.length" type="info"
          >该角色当前没有开放的活动商品。</n-alert
        >
        <n-alert v-if="selectedGoods" type="info"
          >{{ selectedGoods.name }} · 单价 {{ selectedGoods.priceText }} ·
          {{
            selectedGoods.remaining == null
              ? "不限购"
              : `剩余 ${selectedGoods.remaining} 次`
          }}</n-alert
        >
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
            (!!goodsField && (!selectedGoods || selectedGoods.disabled))
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
const goods = ref([]);
const goodsLoaded = ref(false);
const goodsError = ref("");
const loadingGoods = ref(false);
let goodsRequest = 0;
const goodsField = computed(() =>
  definition.value?.fields.find((field) => field.type === "gameGoods"),
);
const selectedGoods = computed(() =>
  goods.value.find((item) => item.goodsId === draft.value.goodsId),
);
const goodsOptions = computed(() =>
  goods.value.map((item) => ({
    label: item.label,
    value: item.goodsId,
    disabled: item.disabled,
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
  if (!goodsField.value || !props.loadGoods || props.busy || loadingGoods.value)
    return;
  const request = ++goodsRequest;
  const source = goodsField.value.source;
  loadingGoods.value = true;
  goodsError.value = "";
  goodsLoaded.value = false;
  goods.value = [];
  try {
    const result = await props.loadGoods(source);
    if (request !== goodsRequest) return;
    goods.value = result;
    goodsLoaded.value = true;
    if (
      !result.some(
        (item) => item.goodsId === draft.value.goodsId && !item.disabled,
      )
    )
      update("goodsId", null);
  } catch (error) {
    if (request === goodsRequest)
      goodsError.value = error.message || "读取商品失败，请重试";
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
        props.settings[selectedTask.value]?.[field.key] ?? field.default,
      ]),
    );
  },
  { immediate: true },
);
watch([selectedTask, () => props.accountKey], () => {
  goodsRequest++;
  goods.value = [];
  goodsLoaded.value = false;
  goodsError.value = "";
  loadingGoods.value = false;
  if (goodsField.value && props.selectedCount && !props.busy)
    void refreshGoods();
});
function update(key, value) {
  draft.value = { ...draft.value, [key]: value };
  emit("update:settings", {
    ...props.settings,
    [selectedTask.value]: { ...draft.value },
  });
}
</script>
<style scoped>
.extended-tasks {
  margin-top: 18px;
}
</style>
