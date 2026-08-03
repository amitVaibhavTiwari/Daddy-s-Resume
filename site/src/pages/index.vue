<template>
  <div class="bg-white">
    <SharedHeader />

    <!-- ── Hero: centered ── -->
    <section class="px-6 pt-20 pb-16 text-center max-w-4xl mx-auto">
      <h1 class="text-[3rem] sm:text-[4rem] font-bold text-gray-900 leading-[1.15] tracking-tight mb-6">
        Make your resumes<br/>the quick and easy way.
      </h1>
      <p class="text-lg text-gray-500 leading-relaxed mb-10 max-w-2xl mx-auto">
        Write your resume in Markdown with prebuilt ATS-friendly templates. Preview changes in real time,
        export to PDF, and keep your data stored locally in your browser. Sync with Google Drive,
        so your data always stays yours.
      </p>
      <div class="flex items-center justify-center gap-3 flex-wrap">
        <UiButton
          :as="NuxtLink"
          :to="$nuxt.$localePath('/templates')"
          class="h-11 px-7 text-base font-medium"
        >
          Browse Templates &rarr;
        </UiButton>
        <NuxtLink
          :to="$nuxt.$localePath('/dashboard')"
          class="h-11 px-6 text-base font-medium inline-flex items-center text-gray-600 border border-gray-200 rounded-md hover:bg-gray-50 transition-colors"
        >
          My Resumes
        </NuxtLink>
      </div>
    </section>

    <!-- ── Editor screenshot ── -->
    <section class="px-6 lg:px-12 pb-24 max-w-7xl mx-auto">
      <div class="relative">
        <div class="relative rounded-sm overflow-hidden shadow-md ring-1 ring-gray-900/10">
          <img :src="'/editor.png'" alt="Daddy's Resume editor" class="w-full h-auto block" />
        </div>
        <!-- Ambient glow -->
        <div class="absolute -inset-6 bg-gray-200/50 rounded-3xl -z-10 blur-3xl" />
      </div>
    </section>

    <!-- ── Privacy first ── -->
    <section class="border-t border-gray-100">
      <div class="max-w-5xl mx-auto px-6 lg:px-12">
        <div class="flex flex-col md:flex-row">
          <!-- Left: heading -->
          <div class="md:w-2/5 py-16 pr-0 md:pr-16">
            <p class="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-6">Privacy first</p>
            <h2 class="text-3xl font-bold text-gray-900 leading-snug mb-5">
              Your data never touches our servers.
            </h2>
            <p class="text-gray-500 text-base leading-relaxed">
              Everything stays in your browser. No sign-in, no cloud account, no database.
              When you need a backup, sync to your own Google Drive, not ours.
            </p>
          </div>

          <!-- Right: fact rows -->
          <div class="md:w-3/5 md:border-l border-gray-100 md:pl-16 py-16 flex flex-col justify-center">
            <div v-for="(item, i) in privacyItems" :key="item.title">
              <div class="flex items-start gap-4 py-5">
                <span class="text-xs font-mono text-gray-300 mt-0.5 w-5 shrink-0">0{{ i + 1 }}</span>
                <div>
                  <p class="text-base font-semibold text-gray-900 mb-1">{{ item.title }}</p>
                  <p class="text-sm text-gray-500">{{ item.desc }}</p>
                </div>
              </div>
              <div v-if="i < privacyItems.length - 1" class="border-t border-gray-100" />
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ── CTA ── -->
    <section class="py-24 px-6">
      <div class="max-w-3xl mx-auto text-center">
        <h2 class="text-4xl font-bold text-gray-900 mb-4 tracking-tight">
          Start writing your resume.
        </h2>
        <p class="text-gray-400 mb-10 text-lg">No sign-up. No credit card. Just open your browser.</p>
        <div class="flex items-center gap-3 flex-wrap justify-center">
          <UiButton
            :as="NuxtLink"
            :to="$nuxt.$localePath('/templates')"
            class="h-11 px-8 text-base font-medium"
          >
            Browse Templates &rarr;
          </UiButton>
          <a
            href="https://github.com/amitVaibhavTiwari/Daddy-s-Resume"
            target="_blank"
            rel="noopener noreferrer"
            class="h-11 px-6 text-base font-medium inline-flex items-center gap-2 text-gray-500 border border-gray-200 rounded-md hover:bg-gray-50 transition-colors"
          >
            <span class="i-tabler:brand-github text-lg" />
            GitHub
          </a>
        </div>
      </div>
    </section>

    <SharedFooter />
  </div>
</template>

<script setup lang="ts">
import { NuxtLink } from "#components";

useHead({
  title: "Daddy's Resume - Free & Open Source Markdown Resume Builder | No Signup, ATS-Friendly",
  meta: [
    { name: "description", content: "Build your resume for free using Markdown. Open source, real-time PDF preview, ATS-friendly templates, no account needed. Your data stays in your browser. Export to PDF in one click." },
    { property: "og:title", content: "Daddy's Resume - Free & Open Source Markdown Resume Builder" },
    { property: "og:description", content: "Build your resume for free using Markdown. Open source, real-time PDF preview, ATS-friendly templates, no account needed." },
    { property: "og:url", content: "https://daddysresume.amitvaibhavtiwari.dev" }
  ],
  script: [
    {
      type: "application/ld+json",
      innerHTML: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "WebSite",
        "name": "Daddy's Resume - Free & Open Source Markdown Resume Builder",
        "url": "https://daddysresume.amitvaibhavtiwari.dev"
      })
    },
    {
      type: "application/ld+json",
      innerHTML: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "SoftwareApplication",
        "name": "Daddy's Resume",
        "url": "https://daddysresume.amitvaibhavtiwari.dev",
        "description": "Free Markdown resume builder with real-time PDF preview. No signup, no login, no data sent to servers. ATS-friendly templates included.",
        "applicationCategory": "BusinessApplication",
        "operatingSystem": "Web",
        "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" },
        "featureList": [
          "Write resume in Markdown",
          "Real-time PDF preview",
          "ATS-friendly templates",
          "No account or login required",
          "Data stored locally in browser",
          "Google Drive sync",
          "Export to PDF",
          "Open source"
        ],
        "screenshot": "https://daddysresume.amitvaibhavtiwari.dev/editor.png"
      })
    }
  ]
});

const privacyItems = [
  {
    title: "Stored in your browser",
    desc: "All resumes live in your browser's local storage. Nothing is sent anywhere."
  },
  {
    title: "Sync to your own Drive",
    desc: "Back up to your own Google Drive on demand. Not ours."
  },
  {
    title: "No login required",
    desc: "No account, no email, no registration. Just open and start."
  },
  {
    title: "Zero tracking",
    desc: "No third-party scripts, no analytics, no cookies."
  }
];
</script>
