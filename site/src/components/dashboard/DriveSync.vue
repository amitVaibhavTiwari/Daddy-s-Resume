<template>
  <div class="flex gap-2">
    <UiButton variant="outline" :disabled="syncing || !clientId" @click="syncConfirmOpen = true">
      <span v-if="syncing" class="i-svg-spinners:3-dots-fade size-4 mr-1.5" />
      <span v-else class="i-ic:baseline-cloud-upload size-4 mr-1.5" />
      {{ syncing ? "Syncing..." : "Sync to Drive" }}
    </UiButton>
    <UiButton variant="outline" :disabled="importing || !clientId" @click="importConfirmOpen = true">
      <span v-if="importing" class="i-svg-spinners:3-dots-fade size-4 mr-1.5" />
      <span v-else class="i-ic:baseline-cloud-download size-4 mr-1.5" />
      {{ importing ? "Importing..." : "Import from Drive" }}
    </UiButton>

    <UiDialog v-model:open="syncConfirmOpen">
      <UiDialogContent class="sm:max-w-xl gap-5">
        <UiDialogHeader>
          <UiDialogTitle class="text-xl font-bold">
            {{ $t("dashboard.drive_sync.sync.title") }}
          </UiDialogTitle>
          <UiDialogDescription class="text-sm leading-relaxed pt-1">
            {{ $t("dashboard.drive_sync.sync.message") }}
          </UiDialogDescription>
        </UiDialogHeader>
        <UiDialogFooter>
          <UiButton variant="outline" @click="syncConfirmOpen = false">
            {{ $t("dashboard.cancel") }}
          </UiButton>
          <UiButton @click="confirmSync">
            {{ $t("dashboard.confirm") }}
          </UiButton>
        </UiDialogFooter>
      </UiDialogContent>
    </UiDialog>

    <UiDialog v-model:open="importConfirmOpen">
      <UiDialogContent class="sm:max-w-xl gap-5">
        <UiDialogHeader>
          <UiDialogTitle class="text-xl font-bold">
            {{ $t("dashboard.drive_sync.import.title") }}
          </UiDialogTitle>
          <UiDialogDescription class="text-sm leading-relaxed pt-1">
            {{ $t("dashboard.drive_sync.import.message") }}
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
const emit = defineEmits<{ (e: "update"): void }>();

const { clientId, saveAllToDrive, loadFromDrive } = useGoogleDrive();
const toast = useToast();

const syncing = ref(false);
const importing = ref(false);
const syncConfirmOpen = ref(false);
const importConfirmOpen = ref(false);

const confirmSync = () => {
  syncConfirmOpen.value = false;
  handleSync();
};

const confirmImport = () => {
  importConfirmOpen.value = false;
  handleImport();
};

const handleSync = async () => {
  syncing.value = true;
  try {
    const json = await storageService.getSyncData();
    const ok = await saveAllToDrive(json);
    if (ok) {
      await storageService.markAllAsDriveSynced();
      emit("update");
    }
    toast.driveSync(ok);
  } catch {
    toast.driveSync(false);
  } finally {
    syncing.value = false;
  }
};

const handleImport = async () => {
  importing.value = true;
  try {
    const content = await loadFromDrive();
    if (!content) {
      toast.driveImport(false);
      return;
    }
    const ok = await storageService.importFromDrive(content);
    if (ok) emit("update");
    toast.driveImport(ok);
  } catch {
    toast.driveImport(false);
  } finally {
    importing.value = false;
  }
};
</script>
