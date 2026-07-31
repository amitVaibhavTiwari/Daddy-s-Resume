<template>
  <div class="bg-white min-h-screen">
    <SharedHeader />

    <div class="max-w-5xl mx-auto px-6 lg:px-12 pt-16 pb-24">
      <!-- Heading -->
      <div class="mb-14">
        <h1 class="text-4xl font-bold text-gray-900 tracking-tight mb-3">Templates</h1>
        <p class="text-gray-500 text-lg">
          Pick a starting point. Customize everything from there.
        </p>
      </div>

      <!-- Cards -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-10">
        <div
          v-for="t in templates"
          :key="t.id"
          class="border border-gray-100 rounded-xl overflow-hidden hover:shadow-md transition-shadow"
        >
          <!-- Screenshot area -->
          <div class="bg-gray-50 border-b border-gray-100 aspect-[210/270] flex items-center justify-center relative overflow-hidden">
            <img
              v-if="t.screenshot"
              :src="t.screenshot"
              :alt="t.name + ' preview'"
              class="w-full h-full object-cover object-top"
            />
            <div v-else class="text-center text-gray-300 select-none">
              <span class="i-ic:baseline-insert-drive-file text-6xl block mb-2" />
              <span class="text-sm font-medium">Preview coming soon</span>
            </div>
          </div>

          <!-- Info -->
          <div class="p-6">
            <div class="mb-4">
              <h2 class="text-xl font-bold text-gray-900 mb-1">{{ t.name }}</h2>
              <p class="text-xs text-gray-500 font-medium mb-3">{{ t.inspired }}</p>
              <p class="text-sm text-gray-500 leading-relaxed">{{ t.desc }}</p>
            </div>

            <div class="flex gap-3 pt-2">
              <UiButton class="flex-1" :disabled="creating === t.id" @click="useTemplate(t.id)">
                <span v-if="creating === t.id" class="i-svg-spinners:3-dots-fade size-4 mr-1" />
                {{ creating === t.id ? "Opening..." : "Use Template" }}
              </UiButton>
              <a
                :href="t.sample"
                target="_blank"
                rel="noopener noreferrer"
                class="h-9 px-4 text-sm font-medium inline-flex items-center gap-1.5 text-gray-600 border border-gray-200 rounded-md hover:bg-gray-50 transition-colors"
                :class="{ 'pointer-events-none opacity-40': !t.sample }"
              >
                <span class="i-ic:baseline-download text-base" />
                Sample PDF
              </a>
            </div>
          </div>
        </div>
      </div>

      <!-- More coming -->
      <p class="mt-12 text-sm text-gray-400 text-center">More templates coming soon.</p>
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
    desc: "A classic, academic-style resume with support for publications, CJK fonts, and detailed section formatting. Great for researchers and academics.",
    screenshot: "",
    sample: ""
  },
  {
    id: "jake",
    name: "Template 2",
    inspired: "Inspired by Jake's Resume by Jake Gutierrez",
    desc: "Clean, minimal layout built for software engineers. Small-caps headings, tight spacing, and a structured two-column entry format.",
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
