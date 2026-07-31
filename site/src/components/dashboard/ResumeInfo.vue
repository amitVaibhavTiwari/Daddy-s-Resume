<template>
  <div>
    <SharedUiEditable
      class="w-full font-semibold text-gray-800 text-sm leading-snug"
      :default-value="resume.name"
      submit-mode="enter"
      auto-resize
      @submit="(text) => rename(text)"
    />
    <div class="mt-1.5 space-y-0.5">
      <div class="text-[11px] text-gray-400">Updated: {{ formatDate(resume.updated_at) }} UTC</div>
      <div class="text-[11px] text-gray-400">Created: {{ formatDate(resume.created_at) }} UTC</div>
    </div>
    <div class="flex items-center gap-1.5 mt-1.5">
      <span
        class="size-3 flex-shrink-0"
        :class="resume.drive_synced ? 'i-ic:baseline-cloud-done text-green-500' : 'i-ic:baseline-cloud-off text-gray-500'"
      />
      <span class="text-[11px]" :class="resume.drive_synced ? 'text-green-500' : 'text-gray-500'">
        {{ resume.drive_synced ? 'Synced to Drive' : 'Not synced' }}
      </span>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { isInteger } from "@renovamen/utils";
import type { DbResume } from "~/utils/storage";

const props = defineProps<{
  resume: DbResume;
}>();

const rename = async (text?: string) => {
  if (!text) return;
  await storageService.updateResume({ id: props.resume.id, name: text }, false);
};

const formatDate = (date?: string) =>
  date &&
  isInteger(date, { allowString: true }) &&
  new Date(parseInt(date))
    .toISOString()
    .substring(0, 19)
    .replace("T", " ")
    .replaceAll("-", "/");
</script>
