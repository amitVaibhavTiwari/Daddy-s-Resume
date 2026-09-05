<template>
  <div class="bg-gray-50 min-h-screen">
    <SharedHeader />

    <div class="max-w-[1500px] mx-auto px-6 lg:px-10 pt-10 pb-16">
      <div class="mb-8">
        <h1 class="text-2xl font-bold text-gray-900 tracking-tight mb-1">
          ATS-Friendly Markdown Resume Templates
        </h1>
        <p class="text-gray-400 text-sm">
          Free, ATS-friendly templates for Daddy's Resume. Pick a starting point, write in Markdown,
          and customize everything from there.
        </p>
      </div>

      <!-- Cards -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div
          v-for="t in templates"
          :key="t.id"
          class="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow duration-200"
        >
          <!-- Live resume preview -->
          <TemplatesPreviewCard :template="fullTemplate(t.id)" />

          <!-- Info -->
          <div class="px-3 py-3 border-t border-gray-100">
            <div class="font-semibold text-gray-800 text-sm mb-0.5">{{ t.name }}</div>
            <div class="text-[11px] text-gray-400 mb-2">
              Inspired by <a :href="t.inspiredUrl" target="_blank" rel="noopener noreferrer" class="underline hover:text-gray-600 transition-colors">{{ t.inspired }}</a>
            </div>
            <p class="text-[11px] text-gray-500 leading-relaxed mb-3 line-clamp-2">{{ t.desc }}</p>

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
const { TEMPLATES: tplContent } = useConstant();
const fullTemplate = (id: string) => tplContent.find(t => t.id === id)!;

const router = useRouter();
const localePath = useLocalePath();

const creating = ref<string | null>(null);

const templates = [
  {
    id: "default",
    name: "Template 1",
    inspired: "billryan resume",
    inspiredUrl: "https://github.com/billryan/resume",
    desc: "Classic academic style with rich formatting support and CJK characters. Originally built by Renovamen for OhMyCv.",
    sample: "/Template-1.pdf"
  },
  {
    id: "jake",
    name: "Template 2",
    inspired: "Jake's Resume by Jake Gutierrez",
    inspiredUrl: "https://github.com/jakegut/resume",
    desc: "Clean, minimal layout popular among software engineers. Tight spacing and structured entries give it a sharp, professional look. Great for keeping everything on one page.",
    sample: "/Template-2.pdf"
  },
  {
    id: "muratcan",
    name: "Template 3",
    inspired: "AlexW00/CV by Alexander Weichart",
    inspiredUrl: "https://github.com/AlexW00/CV",
    desc: "Mid-senior engineer style layout with colored section headings, trailing divider rules, and bold-label skill rows. Specially designed for clean and structured look in one page.",
    sample: "/Template-3.pdf"
  }
];

useSeo({
  title: "Free ATS-Friendly Markdown Resume Templates | Daddy's Resume",
  description:
    "Browse free ATS-friendly Markdown resume templates from Daddy's Resume. Pick a template, write your resume in Markdown, preview as PDF in real time, and export with one click. No signup required.",
  keywords:
    "markdown resume templates, ATS friendly resume templates, free resume templates, markdown resume, software engineer resume template, daddys resume templates",
  image: "/template-1.webp",
  imageAlt: "ATS-friendly Markdown resume templates",
  schema: [
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Daddy's Resume",
          "item": `${SITE_URL}/`
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Resume Templates",
          "item": `${SITE_URL}/templates/`
        }
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "ItemList",
      "name": "Free ATS-friendly Markdown resume templates",
      "itemListElement": templates.map((t, i) => ({
        "@type": "ListItem",
        "position": i + 1,
        "name": `${t.name} — inspired by ${t.inspired}`,
        "description": t.desc,
        "url": `${SITE_URL}/templates/`
      }))
    }
  ]
});

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
