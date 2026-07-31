<template>
  <div class="bg-white">
    <SharedHeader />

    <!-- ── Hero: centered ── -->
    <section class="px-6 pt-20 pb-16 text-center max-w-4xl mx-auto">
      <h1 class="text-[3rem] sm:text-[4rem] font-bold text-gray-900 leading-[1.05] tracking-tight mb-6">
        Make your resumes<br/>the quick and easy way.
      </h1>
      <p class="text-lg text-gray-500 leading-relaxed mb-10 max-w-2xl mx-auto">
        Use prebuilt ATS-friendly templates to write your resume in Markdown with real-time preview
        and PDF export, all inside your browser. Sync to your own Google Drive, so your data always stays yours.
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

    <!-- ── Editor mock ── -->
    <section class="px-6 lg:px-12 pb-24 max-w-5xl mx-auto">
      <div class="relative">
        <div class="relative rounded-xl overflow-hidden shadow-2xl ring-1 ring-gray-900/10">
          <!-- Window chrome -->
          <div class="bg-[#1e1e2e] px-4 py-3 flex items-center gap-3">
            <div class="flex gap-1.5">
              <div class="size-3 rounded-full bg-[#ff5f57]" />
              <div class="size-3 rounded-full bg-[#febc2e]" />
              <div class="size-3 rounded-full bg-[#28c840]" />
            </div>
            <div class="text-xs text-gray-400 font-mono ml-2">resume.md — Daddy's Resume</div>
          </div>

          <!-- Split pane -->
          <div class="flex h-96">
            <!-- Markdown editor -->
            <div class="w-1/2 bg-[#1e1e2e] p-5 font-mono text-[11px] leading-[1.75] border-r border-white/5 overflow-hidden select-none">
              <div class="text-violet-400">---</div>
              <div><span class="text-blue-300">name</span><span class="text-gray-500">: </span><span class="text-green-300">Jake Ryan</span></div>
              <div><span class="text-blue-300">header</span><span class="text-gray-500">:</span></div>
              <div class="pl-3"><span class="text-gray-500">- </span><span class="text-blue-300">text</span><span class="text-gray-500">: </span><span class="text-green-300">jake@su.edu</span></div>
              <div class="pl-3"><span class="text-gray-500">- </span><span class="text-blue-300">text</span><span class="text-gray-500">: </span><span class="text-green-300">github.com/jake</span></div>
              <div class="text-violet-400">---</div>
              <div class="mt-3 text-violet-400">## Education</div>
              <div class="mt-1"><span class="text-rose-300 font-semibold">**Southwestern University**</span></div>
              <div class="text-gray-500 pl-2">~ Georgetown, TX</div>
              <div class="mt-1 text-gray-400 italic">*B.A. Computer Science*</div>
              <div class="text-gray-500 pl-2">~ 2018 -- 2021</div>
              <div class="mt-3 text-violet-400">## Experience</div>
              <div class="mt-1"><span class="text-rose-300 font-semibold">**Software Engineer**</span></div>
              <div class="text-gray-500 pl-2">~ Jan 2022 -- Present</div>
              <div class="mt-1 text-gray-400">- Built REST APIs used by 500+ users</div>
              <div class="text-gray-400">- Reduced page load time by 40%</div>
              <div class="text-gray-400">- Shipped 3 products end-to-end</div>
              <div class="mt-3 text-violet-400">## Skills</div>
              <div class="mt-1 text-gray-400">TypeScript, React, Node.js, Go</div>
            </div>

            <!-- Resume preview -->
            <div class="w-1/2 bg-white p-5 overflow-hidden select-none">
              <div class="text-center mb-2">
                <div class="text-sm font-bold text-gray-900 tracking-widest uppercase">Jake Ryan</div>
                <div class="text-[9px] text-gray-500 mt-1">jake@su.edu &nbsp;·&nbsp; github.com/jake</div>
              </div>
              <div class="border-b border-gray-300 mb-3" />
              <div class="mb-3">
                <div class="text-[9px] font-bold text-gray-900 uppercase tracking-widest border-b border-gray-200 pb-1 mb-2">Education</div>
                <div class="flex justify-between">
                  <div class="text-[10px] font-bold text-gray-800">Southwestern University</div>
                  <div class="text-[9px] text-gray-500">Georgetown, TX</div>
                </div>
                <div class="flex justify-between mt-0.5">
                  <div class="text-[9px] italic text-gray-600">B.A. Computer Science</div>
                  <div class="text-[9px] italic text-gray-500">2018 – 2021</div>
                </div>
              </div>
              <div class="mb-3">
                <div class="text-[9px] font-bold text-gray-900 uppercase tracking-widest border-b border-gray-200 pb-1 mb-2">Experience</div>
                <div class="flex justify-between">
                  <div class="text-[10px] font-bold text-gray-800">Software Engineer</div>
                  <div class="text-[9px] text-gray-500">Jan 2022 – Present</div>
                </div>
                <div class="mt-1 space-y-0.5">
                  <div class="text-[8.5px] text-gray-600 flex gap-1.5"><span>•</span><span>Built REST APIs used by 500+ users</span></div>
                  <div class="text-[8.5px] text-gray-600 flex gap-1.5"><span>•</span><span>Reduced page load time by 40%</span></div>
                  <div class="text-[8.5px] text-gray-600 flex gap-1.5"><span>•</span><span>Shipped 3 products end-to-end</span></div>
                </div>
              </div>
              <div>
                <div class="text-[9px] font-bold text-gray-900 uppercase tracking-widest border-b border-gray-200 pb-1 mb-2">Skills</div>
                <div class="text-[8.5px] text-gray-600">TypeScript, React, Node.js, Go</div>
              </div>
            </div>
          </div>
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

    <!-- ── Footer ── -->
    <footer class="border-t border-gray-100 py-8 px-6">
      <div class="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-gray-400">
        <span class="hstack gap-2 font-medium text-gray-500">
          <img :src="'/logo.png'" alt="Daddy's Resume" class="h-6 w-auto" />
          free and open source
        </span>
        <div class="flex items-center gap-6">
          <a
            href="https://github.com/amitVaibhavTiwari/Markdown-Resume"
            target="_blank"
            rel="noopener noreferrer"
            class="hover:text-gray-700 transition-colors"
          >GitHub</a>
          <NuxtLink
            :to="$nuxt.$localePath('/dashboard')"
            class="hover:text-gray-700 transition-colors"
          >Dashboard</NuxtLink>
        </div>
      </div>
    </footer>
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
