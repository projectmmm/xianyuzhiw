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
      <n-form v-if="definition" label-placement="left" label-width="160">
        <n-form-item
          v-for="field in definition.fields"
          :key="field.key"
          :label="field.label"
        >
          <n-input-number
            v-if="field.type === 'number'"
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
          :disabled="busy || !selectedCount || !definition"
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
import { computed, ref, watch } from "vue";
import GameEnhancementSettings from "@/components/Setting/GameEnhancementSettings.vue";
import { extendedTaskCatalog } from "@/utils/batch/extendedTaskCatalog.js";
const props = defineProps({
  busy: Boolean,
  selectedCount: { type: Number, default: 0 },
  settings: { type: Object, default: () => ({}) },
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
