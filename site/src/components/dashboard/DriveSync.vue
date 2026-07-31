<template>
  <div class="flex gap-2">
    <UiButton :disabled="syncing || !clientId" @click="handleSync">
      <span v-if="syncing" i-svg-spinners:3-dots-fade size-4 mr-1 />
      <span v-else i-ic:baseline-cloud-upload size-4 mr-1 />
      {{ syncing ? "Syncing..." : "Sync to Drive" }}
    </UiButton>
    <UiButton
      :disabled="importing || !clientId"
      class="bg-neutral-800 hover:(bg-neutral-800/90 ring-neutral-800/40) dark:(bg-secondary hover:bg-background hover:ring-secondary/40)"
      @click="handleImport"
    >
      <span v-if="importing" i-svg-spinners:3-dots-fade size-4 mr-1 />
      <span v-else i-ic:baseline-cloud-download size-4 mr-1 />
      {{ importing ? "Importing..." : "Import from Drive" }}
    </UiButton>
  </div>
</template>

<script lang="ts" setup>
const emit = defineEmits<{ (e: "update"): void }>();

const { clientId, saveAllToDrive, loadFromDrive } = useGoogleDrive();
const toast = useToast();

const syncing = ref(false);
const importing = ref(false);

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
