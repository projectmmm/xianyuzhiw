<template>
  <MyCard class="helper" :status-class="{ active: state.isRunning }">
    <template #icon>
      <img :src="iconPath" alt="普通鱼竿图标" />
    </template>
    <template #title>
      <h3>钓鱼助手</h3>
    </template>
    <template #badge>
      <span>{{ state.isRunning ? "运行中" : "已停止" }}</span>
    </template>
    <template #default>
      <div class="container">
        <div class="list">
          <div class="item" v-for="item in dataList" :key="item.type">
            <img :src="item.img" :alt="item.type" />
            <div class="box-info">
              <div class="box-type">{{ item.type }}</div>
              <div class="box-count">数量：{{ item.count }}</div>
            </div>
          </div>
        </div>
        <div class="selects">
          <n-select v-model:value="type" :options="typeOptions" />
          <n-select v-model:value="number" :options="numberOptions" />
        </div>
      </div>
    </template>
    <template #action>
      <a-button
        type="primary"
        :disabled="state.isRunning"
        secondary
        size="small"
        block
        @click="handleHelper"
      >
        {{ state.isRunning ? "运行中" : "开始钓鱼" }}
      </a-button>
    </template>
  </MyCard>
</template>

<script setup>
import { useMessage } from "naive-ui";
import { computed, ref } from "vue";
import { useTokenStore } from "@/stores/tokenStore";
import MyCard from "../Common/MyCard.vue";

const tokenStore = useTokenStore();
const message = useMessage();

const iconPath = computed(() => {
  return `${import.meta.env.BASE_URL}fish/hjyg.png`;
});

const roleInfo = computed(() => tokenStore.gameData?.roleInfo || null);

const dataList = computed(() => {
  const getImgPath = (path) =>
    import.meta.env.BASE_URL + path.replace(/^\//, "");
  return [
    {
      type: "普通鱼竿",
      img: getImgPath("/fish/ptyg.png"),
      count: roleInfo.value?.role?.items?.[1011]?.quantity || 0,
    },
    {
      type: "黄金鱼竿",
      img: getImgPath("/fish/hjyg.png"),
      count: roleInfo.value?.role?.items?.[1012]?.quantity || 0,
    },
  ];
});

const type = ref(1);
const typeOptions = [
  { label: "普通鱼竿", value: 1 },
  { label: "黄金鱼竿", value: 2 },
];

const number = ref(10);
const numberOptions = [
  { label: "10", value: 10 },
  { label: "20", value: 20 },
  { label: "50", value: 50 },
  { label: "80", value: 80 },
  { label: "100", value: 100 },
  { label: "160", value: 160 },
];

const state = ref({
  isRunning: false,
});

const handleHelper = async () => {
  if (!tokenStore.selectedToken) {
    message.warning("请先选择Token");
    return;
  }
  const tokenId = tokenStore.selectedToken.id;
  state.value.isRunning = true;
  message.info("钓鱼助手运行中");
  console.log("🚀 ~ handleHelper ~ type.value:", type.value);
  if (number.value >= 10) {
    const batches = Math.floor(number.value / 10);
    const remainder = number.value % 10;
    for (let i = 0; i < batches; i++) {
      await tokenStore.sendMessageWithPromise(tokenId, "artifact_lottery", {
        type: type.value,
        lotteryNumber: 10,
        newFree: true,
      });
    }
    if (remainder > 0) {
      await tokenStore.sendMessageWithPromise(tokenId, "artifact_lottery", {
        type: type.value,
        lotteryNumber: remainder,
        newFree: true,
      });
    }
    await tokenStore.sendMessage(tokenId, "role_getroleinfo");
    // 更新活动进度
    tokenStore.sendMessage(tokenId, "activity_get");
    message.success("钓鱼完毕");
    state.value.isRunning = false;
  }
};
</script>

<style scoped lang="scss">
.container {
  padding: 10px 0;
  display: flex;
  flex-direction: column;

  .list {
    display: flex;
    align-items: center;
    justify-content: space-around;

    .item {
      display: flex;
      flex-direction: column;
      align-items: center;

      > img {
        width: 40px;
        height: 40px;
      }

      .box-info {
        display: flex;
        flex-direction: column;
        align-items: center;

        .box-type {
          font-weight: bold;
          margin-top: 4px;
        }

        .box-count {
          margin-top: 2px;
          color: #666;
        }
      }
    }
  }

  .selects {
    display: flex;
    align-items: center;
    gap: 12px;
    margin-top: 12px;
  }
}
</style>
