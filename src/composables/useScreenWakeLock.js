import { onMounted, onUnmounted, ref } from "vue";
import { createScreenWakeLock } from "@/utils/screenWakeLock";

export const WAKE_LOCK_KEY = "xyzw_prevent_sleep_v1";
const status = ref("disabled");
const enabled = ref(false);

export function useScreenWakeLock() {
  return {
    status,
    enabled,
    setEnabled(value) {
      localStorage.setItem(WAKE_LOCK_KEY, value === true ? "1" : "0");
      window.dispatchEvent(new Event("xyzw-wake-lock-change"));
    },
  };
}

export function installScreenWakeLock() {
  let controller;
  const sync = () => {
    enabled.value = localStorage.getItem(WAKE_LOCK_KEY) === "1";
    void controller.setEnabled(enabled.value);
  };
  const onStorage = (event) => {
    if (event.key === WAKE_LOCK_KEY || event.key === null) sync();
  };
  onMounted(() => {
    controller = createScreenWakeLock({
      navigator,
      document,
      onChange: (value) => {
        status.value = value;
      },
    });
    window.addEventListener("xyzw-wake-lock-change", sync);
    window.addEventListener("storage", onStorage);
    sync();
  });
  onUnmounted(() => {
    window.removeEventListener("xyzw-wake-lock-change", sync);
    window.removeEventListener("storage", onStorage);
    void controller?.dispose();
  });
}
