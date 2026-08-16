export type SystemData = {
  markdown: string;
  css: string;
  resumeId: number | null;
  resumeName: string;
  loaded: boolean;
};

const DIRTY_KEYS: Array<keyof SystemData> = ["markdown", "css", "resumeName"];

export const useDataStore = defineStore("data", () => {
  const { DEFAULT } = useConstant();

  const data = reactive<SystemData>({
    markdown: "",
    css: "",
    resumeId: null,
    resumeName: DEFAULT.RESUME_NAME,
    loaded: false
  });

  const isDirty = ref(false);

  const setData = <T extends keyof SystemData>(key: T, value: SystemData[T]) => {
    data[key] = value;
    if (key === "css") dynamicCssService.injectCssEditor(value as string);
    if (DIRTY_KEYS.includes(key)) isDirty.value = true;
  };

  const setAndSyncToMonaco = (key: "markdown" | "css", value: string) => {
    setData(key, value);

    const { setContent } = useMonaco();
    setContent(key, value);
  };

  const markDirty = () => {
    isDirty.value = true;
  };

  const markSaved = () => {
    isDirty.value = false;
  };

  return {
    data,
    setData,
    setAndSyncToMonaco,
    isDirty,
    markDirty,
    markSaved
  };
});
