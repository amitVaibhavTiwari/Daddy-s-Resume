<template>
  <div class="bg-white">
    <SharedHeader />

    <!-- ── Hero: centered ── -->
    <section class="px-6 pt-20 pb-16 text-center max-w-4xl mx-auto">
      <h1 class="text-[3rem] sm:text-[4rem] font-bold text-gray-900 leading-[1.05] tracking-tight mb-6">
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
        <a
          href="https://github.com/amitVaibhavTiwari/Markdown-Resume"
          target="_blank"
          rel="noopener noreferrer"
          class="h-11 px-6 text-base font-medium inline-flex items-center gap-2 text-gray-600 border border-gray-200 rounded-md hover:bg-gray-50 transition-colors"
        >
          <span class="i-tabler:brand-github text-lg" />
          GitHub
        </a>
      </div>
    </section>

    <!-- ── Editor screenshot ── -->
    <section class="px-6 lg:px-12 pb-24 max-w-7xl mx-auto">
      <div class="relative">
        <div class="relative rounded-sm overflow-hidden shadow-2xl ring-1 ring-gray-900/10">
          <img :src="'/editor.png'" alt="Daddy's Resume editor" class="w-full h-auto block" />
        </div>
        <!-- Ambient glow -->
        <div class="absolute -inset-6 bg-gray-200/50 rounded-3xl -z-10 blur-3xl" />
      </div>
    </section>

    <!-- ── Features ── -->
    <section class="max-w-5xl mx-auto px-6 lg:px-12 py-24 grid grid-cols-1 md:grid-cols-2 gap-20">
      <div>
        <p class="text-xs font-semibold text-gray-900 uppercase tracking-widest mb-5">Privacy first</p>
        <h2 class="text-3xl font-bold text-gray-900 mb-5 leading-snug">
          Your data never<br/>touches our servers.
        </h2>
        <p class="text-gray-500 leading-relaxed mb-8">
          Everything is stored in your browser's local storage. No sign-in, no cloud account, no database.
          When you need a backup, sync to your own Google Drive — not ours.
        </p>
        <ul class="space-y-3.5">
          <li v-for="item in privacyItems" :key="item" class="flex items-start gap-3 text-sm text-gray-600">
            <span class="i-ic:baseline-check-circle text-gray-900 text-base flex-shrink-0 mt-0.5" />
            {{ item }}
          </li>
        </ul>
      </div>

      <div>
        <p class="text-xs font-semibold text-gray-900 uppercase tracking-widest mb-5">Built for developers</p>
        <h2 class="text-3xl font-bold text-gray-900 mb-5 leading-snug">
          The format you<br/>already write in.
        </h2>
        <p class="text-gray-500 leading-relaxed mb-8">
          Markdown is readable, portable, and version-controllable. Your resume is plain text — no proprietary formats, no lock-in, no bloat.
        </p>
        <ul class="space-y-3.5">
          <li v-for="item in devItems" :key="item" class="flex items-start gap-3 text-sm text-gray-600">
            <span class="i-ic:baseline-check-circle text-gray-900 text-base flex-shrink-0 mt-0.5" />
            {{ item }}
          </li>
        </ul>
      </div>
    </section>

    <!-- ── CTA ── -->
    <div class="border-t border-gray-100">
      <section class="bg-gray-50 py-24 px-6 text-center">
        <h2 class="text-4xl font-bold text-gray-900 mb-4 tracking-tight">
          Start writing your resume.
        </h2>
        <p class="text-gray-500 mb-8">No sign-up. No credit card. Just open your browser.</p>
        <div class="flex items-center gap-3 flex-wrap justify-center">
          <UiButton
            :as="NuxtLink"
            :to="$nuxt.$localePath('/templates')"
            class="h-11 px-8 text-base font-medium"
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
    </div>

  </div>
</template>

<script setup lang="ts">
import { NuxtLink } from "#components";

const principles = [
  "Local first — data stays on your device",
  "No login or registration",
  "Sync to your Google Drive, not ours",
  "Open source",
  "Zero tracking or analytics"
];

const privacyItems = [
  "All resumes stored in browser localStorage only",
  "Sync to your own Google Drive on demand",
  "No login, no registration, no email required",
  "Zero third-party scripts or analytics"
];

const devItems = [
  "Standard Markdown — works anywhere, no proprietary format",
  "Real-time PDF preview as you type",
  "Custom CSS for complete layout control",
  "Multiple variants for different job applications"
];
</script>
