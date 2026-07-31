<template>
  <div class="bg-gray-50 min-h-screen">
    <SharedHeader />

    <div class="max-w-7xl mx-auto px-6 lg:px-10 pt-10 pb-16">
      <!-- Heading -->
      <div class="mb-8">
        <h1 class="text-2xl font-bold text-gray-900 tracking-tight mb-1">Templates</h1>
        <p class="text-gray-400 text-sm">Pick a starting point. Customize everything from there.</p>
      </div>

      <!-- Cards -->
      <div class="flex flex-wrap gap-6">
        <div
          v-for="t in templates"
          :key="t.id"
          class="w-64 bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow duration-200"
        >
          <!-- Screenshot area — matches resume card preview height -->
          <div class="bg-gray-50 border-b border-gray-100 flex items-center justify-center relative overflow-hidden" style="height: 364px">
            <img
              v-if="t.screenshot"
              :src="t.screenshot"
              :alt="t.name + ' preview'"
              class="w-full h-full object-cover object-top"
            />
            <div v-else class="text-center text-gray-300 select-none">
              <span class="i-ic:baseline-insert-drive-file text-5xl block mb-2" />
              <span class="text-xs font-medium">Preview coming soon</span>
            </div>
          </div>

          <!-- Info -->
          <div class="px-3 py-3 border-t border-gray-100">
            <div class="font-semibold text-gray-800 text-sm mb-0.5">{{ t.name }}</div>
            <div class="text-[11px] text-gray-400 mb-2">{{ t.inspired }}</div>
            <p class="text-[11px] text-gray-500 leading-relaxed mb-3">{{ t.desc }}</p>

            <div class="flex gap-2">
              <UiButton class="flex-1 h-8 text-xs" :disabled="creating === t.id" @click="useTemplate(t.id)">
                <span v-if="creating === t.id" class="i-svg-spinners:3-dots-fade size-3.5 mr-1" />
                {{ creating === t.id ? "Opening..." : "Use Template" }}
              </UiButton>
              <a
                :href="t.sample"
                target="_blank"
                rel="noopener noreferrer"
                class="h-8 px-3 text-xs font-medium inline-flex items-center gap-1 text-gray-600 border border-gray-200 rounded-md hover:bg-gray-50 transition-colors"
                :class="{ 'pointer-events-none opacity-40': !t.sample }"
              >
                <span class="i-ic:baseline-download text-sm" />
                PDF
              </a>
            </div>
          </div>
        </div>
      </div>

      <p class="mt-10 text-xs text-gray-400">More templates coming soon.</p>
    </div>
  </div>
</template>

<script setup lang="ts">
const router = useRouter();
const localePath = useLocalePath();

const creating = ref<string | null>(null);

const templates = [
  {
    id: "default",
    name: "Template 1",
    inspired: "Inspired by Brilliant Resume",
    desc: "Classic academic style. Great for researchers and detailed formatting.",
    screenshot: "",
    sample: ""
  },
  {
    id: "jake",
    name: "Template 2",
    inspired: "Inspired by Jake's Resume by Jake Gutierrez",
    desc: "Clean, minimal layout for software engineers. Tight spacing, structured entries.",
    screenshot: "",
    sample: ""
  }
];

const useTemplate = async (id: string) => {
  creating.value = id;
  try {
    const data = await storageService.createResume(id);
    if (data) {
      router.push(localePath(`/editor/${data.id}`));
    }
  } finally {
    creating.value = null;
  }
};
</script>
