<template>
  <div class="w-56 h-80">
    <button
      class="resume-card group w-[210px] h-[299px] flex-center bg-secondary hover:bg-background ring-when-focus"
      :aria-label="$t('dashboard.new')"
      @click="dialogOpen = true"
    >
      <span i-ic:round-plus text="5xl muted-foreground group-hover:primary" />
    </button>

    <UiDialog v-model:open="dialogOpen">
      <UiDialogContent class="max-w-xl">
        <UiDialogHeader>
          <UiDialogTitle>Choose a template</UiDialogTitle>
          <UiDialogDescription>
            Pick a starting template for your new resume.
          </UiDialogDescription>
        </UiDialogHeader>

        <div class="grid grid-cols-2 gap-4 py-4">
          <button
            v-for="template in templates"
            :key="template.id"
            class="flex flex-col items-start gap-2 rounded-lg border-2 p-4 text-left transition-colors hover:bg-secondary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
            :class="selected === template.id ? 'border-primary bg-secondary' : 'border-border'"
            @click="selected = template.id"
          >
            <span class="font-semibold text-sm">{{ template.name }}</span>
            <span class="text-xs text-muted-foreground leading-snug">{{ template.description }}</span>
          </button>
        </div>

        <UiDialogFooter>
          <UiButton variant="outline" @click="dialogOpen = false">Cancel</UiButton>
          <UiButton :disabled="!selected" @click="create">Create</UiButton>
        </UiDialogFooter>
      </UiDialogContent>
    </UiDialog>
  </div>
</template>

<script lang="ts" setup>
const router = useRouter();
const localePath = useLocalePath();
const { TEMPLATES } = useConstant();

const dialogOpen = ref(false);
const selected = ref<string | null>(null);

const templates = TEMPLATES;

const create = async () => {
  if (!selected.value) return;

  const data = await storageService.createResume(selected.value);

  if (!data) return;

  dialogOpen.value = false;
  selected.value = null;
  router.push(localePath(`/editor/${data.id}`));
};
</script>
