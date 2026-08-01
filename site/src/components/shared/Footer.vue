<template>
  <footer class="border-t border-gray-100 py-8 px-6">
    <div class="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-gray-400">
      <span>© {{ new Date().getFullYear() }} Daddy's Resume. Open source under GPL-3.0.</span>
      <div class="flex items-center gap-6">
        <NuxtLink :to="$nuxt.$localePath('/privacy')" class="hover:text-gray-700 transition-colors">Privacy Policy</NuxtLink>
        <NuxtLink :to="$nuxt.$localePath('/terms')" class="hover:text-gray-700 transition-colors">Terms of Use</NuxtLink>
        <a
          href="https://github.com/amitVaibhavTiwari/Daddy-s-Resume"
          target="_blank"
          rel="noopener noreferrer"
          class="hover:text-gray-700 transition-colors"
        >GitHub</a>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { NuxtLink } from "#components";
</script>
