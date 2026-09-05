<template>
  <div class="bg-white">
    <SharedHeader />

    <section class="px-6 pt-20 pb-16 text-center max-w-4xl mx-auto">
      <h1 class="text-[3rem] sm:text-[4rem] font-bold text-gray-900 leading-[1.17] tracking-tight mb-7">
        Write your resume in Markdown,<br/>the quick and easy way.
      </h1>
      <p class="text-lg text-gray-500 leading-relaxed mb-10 max-w-2xl mx-auto">
        <strong class="font-semibold text-gray-700">Daddy's Resume</strong> is a free, open-source
        Markdown resume builder. Create resumes in Markdown using ATS-friendly templates, preview
        as PDF in real time, and export with one click, while your data stays private in your
        browser with optional Google Drive sync.
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
          <img
            :src="'/editor.png'"
            alt="Daddy's Resume Markdown resume builder editor showing Markdown source on the left and a live A4 PDF preview on the right"
            width="1200"
            height="630"
            fetchpriority="high"
            class="w-full h-auto block"
          />
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

    <!-- ── FAQ (mirrors the FAQPage structured data) ── -->
    <section class="border-t border-gray-100">
      <div class="max-w-3xl mx-auto px-6 lg:px-12 py-20">
        <h2 class="text-3xl font-bold text-gray-900 tracking-tight mb-3">
          Frequently asked questions
        </h2>
        <p class="text-gray-500 text-base mb-10">
          Everything about building a resume in Markdown with Daddy's Resume.
        </p>

        <div class="divide-y divide-gray-100 border-t border-gray-100">
          <details v-for="faq in faqs" :key="faq.q" class="group py-5">
            <summary
              class="flex items-start justify-between gap-4 cursor-pointer list-none text-base font-semibold text-gray-900"
            >
              <h3 class="text-base font-semibold text-gray-900">{{ faq.q }}</h3>
              <span
                class="i-tabler:chevron-down text-gray-400 shrink-0 mt-0.5 transition-transform group-open:rotate-180"
              />
            </summary>
            <p class="text-sm text-gray-500 leading-relaxed mt-3 pr-8">{{ faq.a }}</p>
          </details>
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

const faqs = [
  {
    q: "What is Daddy's Resume?",
    a: "Daddy's Resume is a free, open source Markdown resume builder. You write your resume in Markdown, see it rendered as a PDF in real time, and export it with one click. There is no signup, and your data never leaves your browser."
  },
  {
    q: "What is a Markdown resume builder?",
    a: "A Markdown resume builder lets you write your resume using Markdown syntax — a simple, readable plain text format — and automatically renders it as a formatted PDF. Because the content is plain text, it stays easy to version, diff and reuse across job applications."
  },
  {
    q: "How do I create a resume in Markdown?",
    a: "Pick an ATS-friendly template, fill in your details using Markdown syntax in the built-in editor, and watch the formatted PDF update in real time. When you are happy with it, export to PDF with one click. No signup or account needed."
  },
  {
    q: "Is this Markdown resume builder free?",
    a: "Yes, Daddy's Resume is completely free. It is open source under GPL-3.0 with no paid plans, no subscriptions and no hidden costs."
  },
  {
    q: "Are the resume templates ATS-friendly?",
    a: "Yes. Every template is designed to be ATS (Applicant Tracking System) friendly — clean formatting, standard fonts, and structured sections that parse correctly in recruiter software."
  },
  {
    q: "Do I need to create an account?",
    a: "No. You can build and export your resume without creating an account or giving an email address. Your resume data is stored locally in your browser."
  },
  {
    q: "Where is my resume data stored?",
    a: "Your resume data is stored entirely in your browser's local storage. Nothing is sent to any server. Optionally, you can back up to your own Google Drive."
  },
  {
    q: "Can I export my resume to PDF?",
    a: "Yes. Daddy's Resume exports your Markdown resume to a high-quality PDF with one click, directly from your browser. A4 and US Letter page sizes are both supported."
  }
];

useSeo({
  title: "Daddy's Resume - Free Markdown Resume Builder | ATS-Friendly & Open Source",
  description:
    "Daddy's Resume is a free, open source Markdown resume builder. Write your resume in Markdown, preview as PDF in real time, pick ATS-friendly templates and export with one click. No signup, no tracking.",
  keywords:
    "daddys resume, daddy's resume, markdown resume builder, markdown resume, free resume builder, ATS friendly resume, resume to PDF, open source resume builder, markdown to PDF, resume maker",
  schema: [
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "name": "Daddy's Resume",
      "alternateName": ["Daddys Resume", "Markdown Resume Builder"],
      "url": `${SITE_URL}/`,
      "description":
        "Free open source Markdown resume builder with real-time PDF preview and ATS-friendly templates.",
      "inLanguage": "en",
      "publisher": { "@id": `${SITE_URL}/#person` }
    },
    {
      "@context": "https://schema.org",
      "@type": "Person",
      "@id": `${SITE_URL}/#person`,
      "name": "Amit Vaibhav Tiwari",
      "url": "https://amitvaibhavtiwari.dev",
      "sameAs": ["https://github.com/amitVaibhavTiwari"]
    },
    {
      "@context": "https://schema.org",
      "@type": "WebApplication",
      "name": "Daddy's Resume",
      "alternateName": "Daddy's Resume - Markdown Resume Builder",
      "url": `${SITE_URL}/`,
      "description":
        "Free Markdown resume builder with real-time PDF preview. Write in Markdown, choose ATS-friendly templates, export to PDF. No signup, no login, no data sent to servers.",
      "applicationCategory": "BusinessApplication",
      "applicationSubCategory": "Resume Builder",
      "operatingSystem": "Web",
      "browserRequirements": "Requires JavaScript",
      "isAccessibleForFree": true,
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
      "screenshot": `${SITE_URL}/editor.png`,
      "softwareVersion": "1.0",
      "license": "https://opensource.org/licenses/GPL-3.0",
      "author": { "@id": `${SITE_URL}/#person` }
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": faqs.map((f) => ({
        "@type": "Question",
        "name": f.q,
        "acceptedAnswer": { "@type": "Answer", "text": f.a }
      }))
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
