<template>
  <div class="bg-white">
    <SharedHeader />

    <!-- ── Hero: centered ── -->
    <section class="px-6 pt-20 pb-16 text-center max-w-4xl mx-auto">
      <h1 class="text-[3rem] sm:text-[4rem] font-bold text-gray-900 leading-[1.17] tracking-tight mb-7">
        Make your resumes<br/>the quick and easy way.
      </h1>
      <p class="text-lg text-gray-500 leading-relaxed mb-10 max-w-2xl mx-auto">
        Create resumes in Markdown using ATS-friendly templates. Preview in real time, export to PDF
        and keep your data private in your browser with optional Google Drive sync.
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
              When you need a backup, sync to your Google Drive.
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
        <p class="text-gray-400 mb-10 text-base">No sign-up. No credit card. Just open your browser.</p>
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
  title: "Daddy's Resume - Free Markdown Resume Builder | ATS-Friendly & Open Source",
  meta: [
    { name: "description", content: "The best free Markdown resume builder. Write your resume in Markdown, preview as PDF in real time, pick ATS-friendly templates, and export with one click. No signup, no data sent to servers. Open source." },
    { name: "keywords", content: "markdown resume builder, markdown resume, free resume builder, ATS friendly resume, resume to PDF, open source resume builder, markdown to PDF, resume maker" },
    { name: "robots", content: "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" },
    { property: "og:title", content: "Daddy's Resume - Free Markdown Resume Builder" },
    { property: "og:description", content: "Write your resume in Markdown, preview as PDF in real time, and export with one click. ATS-friendly templates. No signup required. Open source." },
    { property: "og:url", content: "https://daddysresume.amitvaibhavtiwari.dev" }
  ],
  script: [
    {
      type: "application/ld+json",
      innerHTML: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "WebSite",
        "name": "Daddy's Resume",
        "alternateName": "Markdown Resume Builder",
        "url": "https://daddysresume.amitvaibhavtiwari.dev",
        "description": "Free open source Markdown resume builder with real-time PDF preview and ATS-friendly templates.",
        "potentialAction": {
          "@type": "SearchAction",
          "target": "https://daddysresume.amitvaibhavtiwari.dev/templates"
        }
      })
    },
    {
      type: "application/ld+json",
      innerHTML: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "SoftwareApplication",
        "name": "Daddy's Resume - Markdown Resume Builder",
        "url": "https://daddysresume.amitvaibhavtiwari.dev",
        "description": "Free Markdown resume builder with real-time PDF preview. Write in Markdown, choose ATS-friendly templates, export to PDF. No signup, no login, no data sent to servers.",
        "applicationCategory": "BusinessApplication",
        "applicationSubCategory": "Resume Builder",
        "operatingSystem": "Web",
        "browserRequirements": "Requires JavaScript",
        "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" },
        "featureList": [
          "Markdown resume editor",
          "Real-time PDF preview",
          "ATS-friendly resume templates",
          "No account or login required",
          "Data stored locally in browser",
          "Google Drive sync",
          "Export to PDF",
          "Open source"
        ],
        "screenshot": "https://daddysresume.amitvaibhavtiwari.dev/editor.png",
        "softwareVersion": "1.0",
        "license": "https://opensource.org/licenses/GPL-3.0",
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "5",
          "ratingCount": "1"
        }
      })
    },
    {
      type: "application/ld+json",
      innerHTML: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "What is a Markdown resume builder?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "A Markdown resume builder lets you write your resume using Markdown syntax — a simple, readable plain text format — and automatically renders it as a beautifully formatted PDF. Daddy's Resume is a free, open source Markdown resume builder with real-time PDF preview and ATS-friendly templates."
            }
          },
          {
            "@type": "Question",
            "name": "How do I create a resume in Markdown?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "With Daddy's Resume, you pick an ATS-friendly template, fill in your details using Markdown syntax in the built-in editor, and see the formatted PDF update in real time. When ready, export to PDF with one click. No signup or account needed."
            }
          },
          {
            "@type": "Question",
            "name": "Is this Markdown resume builder free?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, Daddy's Resume is completely free. It is open source (GPL-3.0) and has no paid plans, no subscriptions, and no hidden costs."
            }
          },
          {
            "@type": "Question",
            "name": "Are the resume templates ATS-friendly?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. All templates are designed to be ATS (Applicant Tracking System) friendly — clean formatting, standard fonts, and structured sections that parse correctly in recruiter software."
            }
          },
          {
            "@type": "Question",
            "name": "Do I need to create an account?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "No. You can build and export your resume without creating an account or providing an email. Your resume data is stored locally in your browser."
            }
          },
          {
            "@type": "Question",
            "name": "Where is my resume data stored?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Your resume data is stored entirely in your browser's local storage. Nothing is sent to any server. Optionally, you can back up to your own Google Drive."
            }
          },
          {
            "@type": "Question",
            "name": "Can I export my resume to PDF?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. Daddy's Resume lets you export your Markdown resume to a high-quality PDF with one click, directly from your browser."
            }
          }
        ]
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
    desc: "Back up to your own Google Drive if needed."
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
