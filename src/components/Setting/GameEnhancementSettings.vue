<template>
  <n-card title="游戏内增强">
    <n-p
      >按需开启后，下次进入或重新加载游戏窗口生效。多开窗口各自保存游戏数据。</n-p
    >
    <n-space class="setting-actions">
      <n-button size="small" @click="clear">全部关闭</n-button>
      <n-text depth="3">已开启 {{ enabledCount }} 项</n-text>
    </n-space>
    <div class="enhancement-grid">
      <label
        v-for="feature in gameEnhancementCatalog"
        :key="feature.key"
        class="enhancement-option"
      >
        <span
          ><strong>{{ feature.name }}</strong
          ><small>{{ feature.description }}</small></span
        >
        <n-switch
          :value="settings[feature.key]"
          @update:value="(value) => update(feature.key, value)"
        />
      </label>
    </div>
    <LocalResourceSettings />
    <n-alert type="info" :show-icon="false"
      >宠物、活动及道具批量操作在“批量日常”的“扩展功能”中。已有的阵容、开箱、升星等工具仍在原位置。</n-alert
    >
  </n-card>
</template>
<script setup>
import { computed, ref } from "vue";
import {
  gameEnhancementCatalog,
  readGameEnhancements,
  saveGameEnhancements,
} from "@/utils/gameEnhancements";
import LocalResourceSettings from "./LocalResourceSettings.vue";
const settings = ref(readGameEnhancements());
const enabledCount = computed(
  () => Object.values(settings.value).filter(Boolean).length,
);
function update(key, value) {
  settings.value = saveGameEnhancements({ ...settings.value, [key]: value });
}
function clear() {
  settings.value = saveGameEnhancements({});
}
</script>
<style scoped>
.setting-actions {
  margin-bottom: 16px;
}
.enhancement-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 12px;
  margin-bottom: 20px;
}
.enhancement-option {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  padding: 12px;
  border: 1px solid var(--border-color);
  border-radius: 8px;
}
.enhancement-option small {
  display: block;
  margin-top: 5px;
  opacity: 0.7;
  font-size: 12px;
}
</style>
