<template>
  <div class="flex gap-2">
    <UiButton variant="outline" @click="exportConfirmOpen = true">
      <span class="i-ic:baseline-save-as size-4 mr-1.5" />
      {{ $t("dashboard.saveas") }}
    </UiButton>
    <UiButton variant="outline" @click="importConfirmOpen = true">
      <span class="i-ic:round-upload-file size-4 mr-1.5" />
      {{ $t("dashboard.import") }}
    </UiButton>

    <UiDialog v-model:open="exportConfirmOpen">
      <UiDialogContent class="sm:max-w-xl gap-5">
        <UiDialogHeader>
          <UiDialogTitle class="text-xl font-bold">
            {{ $t("dashboard.file.export.title") }}
          </UiDialogTitle>
          <UiDialogDescription class="text-sm leading-relaxed pt-1">
            {{ $t("dashboard.file.export.message") }}
          </UiDialogDescription>
        </UiDialogHeader>
        <UiDialogFooter>
          <UiButton variant="outline" @click="exportConfirmOpen = false">
            {{ $t("dashboard.cancel") }}
          </UiButton>
          <UiButton @click="confirmExport">
            {{ $t("dashboard.confirm") }}
          </UiButton>
        </UiDialogFooter>
      </UiDialogContent>
    </UiDialog>

    <UiDialog v-model:open="importConfirmOpen">
      <UiDialogContent class="sm:max-w-xl gap-5">
        <UiDialogHeader>
          <UiDialogTitle class="text-xl font-bold">
            {{ $t("dashboard.file.import.title") }}
          </UiDialogTitle>
          <UiDialogDescription class="text-sm leading-relaxed pt-1">
            {{ $t("dashboard.file.import.message") }}
          </UiDialogDescription>
        </UiDialogHeader>
        <UiDialogFooter>
          <UiButton variant="outline" @click="importConfirmOpen = false">
            {{ $t("dashboard.cancel") }}
          </UiButton>
          <UiButton @click="confirmImport">
            {{ $t("dashboard.confirm") }}
          </UiButton>
        </UiDialogFooter>
      </UiDialogContent>
    </UiDialog>
  </div>
</template>

<script lang="ts" setup>
import { useShortcuts } from "@ohmycv/vue-shortcuts";
import { useFileDialog, readFile } from "@renovamen/utils";

const emits = defineEmits<{
  (e: "update"): void;
}>();

const { open, onChange } = useFileDialog(".json");

const exportConfirmOpen = ref(false);
const importConfirmOpen = ref(false);

onChange(async (file) => {
  const content = await readFile(file);
  await storageService.importFromJson(content);
  emits("update");
});

const exportToJSON = () => storageService.exportToJSON();

const confirmExport = () => {
  exportConfirmOpen.value = false;
  exportToJSON();
};

const confirmImport = () => {
  importConfirmOpen.value = false;
  open();
};

useShortcuts("shift+ctrl+s", exportToJSON);
</script>
