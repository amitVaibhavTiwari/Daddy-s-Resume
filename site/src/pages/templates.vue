<template>
  <div class="bg-gray-50 min-h-screen">
    <SharedHeader />

    <div class="max-w-[1500px] mx-auto px-6 lg:px-10 pt-10 pb-16">
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
          class="w-[460px] bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow duration-200"
        >
          <!-- Screenshot area — matches resume card preview height -->
          <div class="bg-gray-50 border-b border-gray-100 flex items-center justify-center relative overflow-hidden" style="height: 651px">
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
            <div class="text-[11px] text-gray-400 mb-2">
              Inspired by <a :href="t.inspiredUrl" target="_blank" rel="noopener noreferrer" class="underline hover:text-gray-600 transition-colors">{{ t.inspired }}</a>
            </div>
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
                download
                class="h-8 px-3 text-xs font-medium inline-flex items-center gap-1 text-gray-600 border border-gray-200 rounded-md hover:bg-gray-50 transition-colors"
                :class="{ 'pointer-events-none opacity-40': !t.sample }"
              >
                <span class="i-ic:baseline-download text-sm" />
                Download Preview
              </a>
            </div>
          </div>
        </div>
      </div>

    </div>
    <SharedFooter />
  </div>
</template>

<script setup lang="ts">
useHead({
  title: "Free ATS-Friendly Markdown Resume Templates | Daddy's Resume",
  meta: [
    { name: "description", content: "Browse free ATS-friendly Markdown resume templates. Pick a template, write your resume in Markdown, preview as PDF in real time, and export with one click. No signup required." },
    { name: "keywords", content: "markdown resume templates, ATS friendly resume templates, free resume templates, markdown resume, software engineer resume template" },
    { name: "robots", content: "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" },
    { property: "og:title", content: "Free ATS-Friendly Markdown Resume Templates | Daddy's Resume" },
    { property: "og:description", content: "Browse free ATS-friendly Markdown resume templates. Write in Markdown, preview as PDF, export with one click. No signup required." },
    { property: "og:url", content: "https://daddysresume.amitvaibhavtiwari.dev/templates" }
  ]
});

const router = useRouter();
const localePath = useLocalePath();

const creating = ref<string | null>(null);

const templates = [
  {
    id: "default",
    name: "Template 1",
    inspired: "billryan resume",
    inspiredUrl: "https://github.com/billryan/resume",
    desc: "Classic academic style. Great for researchers and detailed formatting. Supports CJK characters.",
    screenshot: "/template-1.webp",
    sample: "/template1.pdf"
  },
  {
    id: "jake",
    name: "Template 2",
    inspired: "Jake's Resume by Jake Gutierrez",
    inspiredUrl: "https://github.com/jakegut/resume",
    desc: "Clean, minimal layout popular among software engineers. Tight spacing and structured entries give it a sharp, professional look. Great for keeping everything on one page.",
    screenshot: "/template-2.webp",
    sample: "/template2.pdf"
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
