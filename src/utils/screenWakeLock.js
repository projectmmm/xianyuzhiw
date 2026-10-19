/** Own one browser screen lock, including visibility changes and pending requests. */
export function createScreenWakeLock({
  navigator,
  document,
  onChange = () => {},
}) {
  let enabled = false;
  let disposed = false;
  let sentinel = null;
  let pending = null;
  let generation = 0;
  const supported = typeof navigator?.wakeLock?.request === "function";
  const acquire = async () => {
    if (
      !enabled ||
      disposed ||
      document.visibilityState !== "visible" ||
      sentinel ||
      pending
    )
      return;
    const requestGeneration = generation;
    pending = (async () => {
      try {
        const lock = await navigator.wakeLock.request("screen");
        if (
          !enabled ||
          disposed ||
          document.visibilityState !== "visible" ||
          requestGeneration !== generation
        ) {
          await lock.release();
          return;
        }
        sentinel = lock;
        lock.addEventListener("release", () => {
          if (sentinel === lock) {
            sentinel = null;
            onChange("released");
          }
        });
        onChange("active");
      } catch {
        onChange("unavailable");
      } finally {
        pending = null;
      }
    })();
    await pending;
  };
  const release = async () => {
    const lock = sentinel;
    sentinel = null;
    if (lock) await lock.release().catch(() => {});
  };
  const onVisibility = () => {
    if (document.visibilityState === "visible") void acquire();
    else {
      generation++;
      void release();
    }
  };
  document.addEventListener("visibilitychange", onVisibility);
  return {
    supported,
    async setEnabled(value) {
      enabled = value === true;
      generation++;
      if (!supported) {
        onChange("unsupported");
        return;
      }
      if (enabled) {
        await pending;
        await acquire();
      } else {
        await release();
        onChange("disabled");
      }
    },
    async dispose() {
      disposed = true;
      enabled = false;
      generation++;
      document.removeEventListener("visibilitychange", onVisibility);
      await release();
    },
  };
}
