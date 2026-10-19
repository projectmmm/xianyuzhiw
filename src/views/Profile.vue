<template>
  <div class="settings-page">
    <h1>本地设置</h1>
    <p>角色与配置保存在当前浏览器，导入 BIN 后沿用现有游戏连接流程。</p>
    <n-card title="系统偏好">
      <n-space vertical :size="18">
        <n-space align="center"
          ><span>界面主题</span
          ><n-button @click="toggleTheme">{{
            isDark ? "切换浅色" : "切换深色"
          }}</n-button></n-space
        >
        <n-space align="center"
          ><span>保持屏幕唤醒</span
          ><n-switch :value="enabled" @update:value="setEnabled" /><n-text
            depth="3"
            >{{ wakeStatus }}</n-text
          ></n-space
        >
        <n-text depth="3"
          >浏览器需支持屏幕唤醒且页面保持可见；关闭后恢复系统设置。</n-text
        >
      </n-space>
    </n-card>
    <GameEnhancementSettings />
    <n-card title="本地 Token 备份与管理"
      ><n-p>在 Token 管理页导入、导出和管理当前角色。</n-p
      ><n-button @click="router.push('/tokens')"
        >打开 Token 管理</n-button
      ></n-card
    >
  </div>
</template>
<script setup>
import { computed } from "vue";
import { useRouter } from "vue-router";
import GameEnhancementSettings from "@/components/Setting/GameEnhancementSettings.vue";
import { useScreenWakeLock } from "@/composables/useScreenWakeLock";
import { useTheme } from "@/composables/useTheme";
const router = useRouter();
const { isDark, toggleTheme } = useTheme();
const { status, enabled, setEnabled } = useScreenWakeLock();
const wakeStatus = computed(
  () =>
    ({
      active: "已保持唤醒",
      disabled: "已关闭",
      unsupported: "当前浏览器不支持",
      unavailable: "浏览器暂未允许唤醒",
      released: "已释放，页面可见时恢复",
    })[status.value] || "等待页面可见",
);
</script>
<style scoped>
.settings-page {
  max-width: 1100px;
  margin: 0 auto;
  padding: 24px;
  display: flex;
  flex-direction: column;
  gap: 18px;
}
h1,
p {
  margin: 0;
}
p {
  color: var(--text-secondary);
}
</style>
