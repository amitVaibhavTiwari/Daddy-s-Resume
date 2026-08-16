<template>
  <div id="editor-page" class="flex flex-col">
    <div class="sticky top-0 z-40">
      <SharedHeader>
        <template #tail>
          <UiButton
            variant="ghost-secondary"
            size="round"
            @click="isToolbarOpen = !isToolbarOpen"
            :aria-label="isToolbarOpen ? $t('close_toolbar') : $t('open_toolbar')"
          >
            <span
              :class="[
                'size-4.5',
                isToolbarOpen
                  ? 'i-tabler:layout-sidebar-right-collapse'
                  : 'i-tabler:layout-sidebar-right-expand'
              ]"
            />
          </UiButton>
        </template>
      </SharedHeader>
    </div>

    <div class="workspace flex pb-2 mt-6">
      <SplitterGroup id="splitter-editor" direction="horizontal" class="px-3">
        <SplitterPanel id="code-pane">
          <EditorCode v-if="data.loaded" />
          <div v-else class="flex flex-col gap-y-2 h-full">
            <UiSkeleton class="h-10 bg-secondary" />
            <UiSkeleton class="flex-1 bg-secondary" />
          </div>
        </SplitterPanel>

        <SplitterResizeHandle
          id="code-preview-handle"
          class="w-3 relative after:(content-[''] absolute bg-gray-400/40 w-1 h-10 rounded-full inset-0 m-auto)"
        />

        <SplitterPanel id="preview-pane">
          <EditorPreview v-if="data.loaded" />
          <UiSkeleton v-else class="size-full bg-secondary" />
        </SplitterPanel>
      </SplitterGroup>

      <div
        v-if="isToolbarOpen"
        id="tools-pane"
        lt-lg="fixed z-10 max-w-full h-full right-0 top-12 pb-10"
      >
        <EditorToolbar v-if="data.loaded" />
        <UiSkeleton v-else class="h-full w-62 bg-secondary mr-10" />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { isInteger } from "@renovamen/utils";
import { onBeforeRouteLeave } from "vue-router";

const route = useRoute();
const dataStore = useDataStore();
const { data } = dataStore;

// Fetch resume data
onMounted(() => {
  if (isInteger(route.params.id, { allowString: true })) {
    storageService.switchToResume(Number(route.params.id));
  }
});

// Warn on unsaved changes: reload, close tab, external navigation
const handleBeforeUnload = (e: BeforeUnloadEvent) => {
  if (!dataStore.isDirty) return;
  e.preventDefault();
  e.returnValue = "";
};

onMounted(() => {
  window.addEventListener("beforeunload", handleBeforeUnload);
});

onBeforeUnmount(() => {
  window.removeEventListener("beforeunload", handleBeforeUnload);
});

// Warn on unsaved changes: internal SPA navigation (e.g. header links)
onBeforeRouteLeave(() => {
  if (!dataStore.isDirty) return true;
  return window.confirm(
    "You have unsaved changes to your resume. If you leave this page, those changes will be lost. Are you sure you want to leave?"
  );
});

// Toogle toolbar
const { width } = useWindowSize();
const isToolbarOpen = ref(width.value > 1024);
</script>
