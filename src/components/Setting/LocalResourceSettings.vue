<template>
  <n-card title="本地 DDS 贴图包" size="small">
    <n-p
      >可选择与游戏版本匹配的 DDS .asar
      贴图包，保存在当前浏览器。启用上方“本地贴图”后，游戏优先读取本地资源，缺失贴图沿用原加载方式。</n-p
    >
    <n-space align="center">
      <label
        class="file-picker"
        role="button"
        tabindex="0"
        @keydown.enter.prevent="
          $event.currentTarget.querySelector('input').click()
        "
        ><input
          type="file"
          accept=".asar"
          :disabled="busy"
          @change="selectPack"
        />{{ busy ? "正在读取…" : "选择本地贴图包" }}</label
      >
      <n-text>{{
        pack
          ? `${pack.name} · ${pack.count} 项 · ${(pack.size / 1048576).toFixed(1)} MB`
          : "尚未选择"
      }}</n-text>
      <n-popconfirm v-if="pack" @positive-click="remove"
        ><template #trigger
          ><n-button size="small" :disabled="busy"
            >移除贴图包</n-button
          ></template
        >移除当前浏览器保存的贴图包？游戏会恢复原资源加载方式。</n-popconfirm
      >
    </n-space>
    <n-text v-if="error" type="error">{{ error }}</n-text>
  </n-card>
</template>
<script setup>
import { onMounted, ref } from "vue";
import {
  readLocalResourcePack,
  removeLocalResourcePack,
  saveLocalResourcePack,
} from "@/utils/localResourcePack.js";
const pack = ref(null);
const busy = ref(false);
const error = ref("");
onMounted(async () => {
  try {
    const saved = await readLocalResourcePack();
    if (saved)
      pack.value = { name: saved.name, size: saved.size, count: saved.count };
  } catch (reason) {
    error.value = reason.message;
  }
});
async function selectPack(event) {
  const file = event.target.files?.[0];
  if (!file) return;
  busy.value = true;
  error.value = "";
  try {
    pack.value = await saveLocalResourcePack(file);
  } catch (reason) {
    error.value = reason.message;
  } finally {
    busy.value = false;
    event.target.value = "";
  }
}
async function remove() {
  busy.value = true;
  try {
    await removeLocalResourcePack();
    pack.value = null;
    error.value = "";
  } catch (reason) {
    error.value = reason.message;
  } finally {
    busy.value = false;
  }
}
</script>
<style scoped>
.file-picker {
  display: inline-flex;
  border: 1px solid var(--border-color);
  border-radius: 5px;
  padding: 6px 12px;
  cursor: pointer;
}
.file-picker input {
  display: none;
}
</style>
