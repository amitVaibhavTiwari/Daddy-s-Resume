<template>
  <div
    ref="containerRef"
    class="relative bg-gray-50 border-b border-gray-100 overflow-hidden"
    :style="{ height: `${previewH}px` }"
  >
    <SharedResumeRender
      :id="template.id"
      ref="renderRef"
      :markdown="template.markdown"
      :styles="template.styles"
      class="origin-top-left"
      :style="{ transform: `scale(${cssScale})` }"
    />
  </div>
</template>

<script lang="ts" setup>
import { delay } from "@renovamen/utils";
import { SharedResumeRender } from "#components";
import type { ResumeStyles } from "~/composables/stores/style";

const props = defineProps<{
  template: {
    id: string;
    markdown: string;
    css: string;
    styles: ResumeStyles;
  };
}>();

const { PAPER } = useConstant();
const containerRef = ref<HTMLElement>();
const renderRef = ref<InstanceType<typeof SharedResumeRender>>();

const size = PAPER.SIZES[props.template.styles.paper];
const containerW = ref(460);
const previewScale = computed(() => containerW.value / size.w);
const cssScale = computed(() => previewScale.value / PAPER.MM_TO_PX);
const previewH = computed(() => Math.round(size.h * previewScale.value));

onMounted(async () => {
  await nextTick();
  if (containerRef.value) {
    containerW.value = containerRef.value.clientWidth;
  }
  dynamicCssService.injectCssEditor(props.template.css, props.template.id);
  await googleFontsService.resolve(props.template.styles.fontEN);
  await googleFontsService.resolve(props.template.styles.fontCJK);
  dynamicCssService.injectToolbar(props.template.styles, props.template.id);
  await delay(100);
  renderRef.value?.render();
});
</script>

<style scoped>
:deep(.resume-render) > *:not(:first-child) {
  @apply hidden;
}
</style>
