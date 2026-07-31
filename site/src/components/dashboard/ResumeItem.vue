<template>
  <div class="w-64">
    <div class="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden group/card hover:shadow-md transition-shadow duration-200">

      <!-- Preview area — fills full card width -->
      <div class="relative bg-gray-50">
        <nuxt-link
          :to="$nuxt.$localePath(`/editor/${props.resume.id}`)"
          class="block ring-when-focus peer"
          :style="{ width: `${previewW}px`, height: `${previewH}px` }"
        >
          <SharedResumeRender
            :id="resume.id"
            ref="renderRef"
            :markdown="resume.markdown"
            :styles="resume.styles"
            class="origin-top-left"
            :style="{ transform: `scale(${previewScale / PAPER.MM_TO_PX})` }"
          />
        </nuxt-link>

        <DashboardResumeOptions
          class="opacity-0 group-hover/card:opacity-100 peer-focus-within:opacity-100 focus-within:opacity-100"
          pos="absolute right-2 top-2"
          :resume="resume"
          @update="emit('update')"
        />
      </div>

      <!-- Info area -->
      <div class="border-t border-gray-100 px-3 py-3">
        <DashboardResumeInfo :resume="resume" />
      </div>

    </div>
  </div>
</template>

<script lang="ts" setup>
import { delay } from "@renovamen/utils";
import type { DbResume } from "~/utils/storage";
import { SharedResumeRender } from "#components";

const props = defineProps<{
  resume: DbResume;
}>();

const emit = defineEmits<{
  (e: "update"): void;
}>();

const { PAPER } = useConstant();
const size = PAPER.SIZES[props.resume.styles.paper];

// Scale preview to fill the card width (256px = w-64)
const CARD_WIDTH = 256;
const previewScale = CARD_WIDTH / size.w;
const previewW = CARD_WIDTH;
const previewH = Math.round(size.h * previewScale);

const renderRef = ref<InstanceType<typeof SharedResumeRender>>();

onMounted(async () => {
  dynamicCssService.injectCssEditor(props.resume.css, props.resume.id);
  await googleFontsService.resolve(props.resume.styles.fontEN);
  await googleFontsService.resolve(props.resume.styles.fontCJK);
  dynamicCssService.injectToolbar(props.resume.styles, props.resume.id);
  await delay(100);
  renderRef.value?.render();
});
</script>

<style scoped>
:deep(.resume-render) > *:not(:first-child) {
  @apply hidden;
}
</style>
