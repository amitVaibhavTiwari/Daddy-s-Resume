<template>
  <footer class="border-t border-gray-100 py-8 px-6">
    <div class="max-w-7xl mx-auto flex items-center justify-center gap-6 text-sm text-gray-400">
      <NuxtLink :to="$nuxt.$localePath('/privacy')" class="hover:text-gray-700 transition-colors">Privacy Policy</NuxtLink>
      <NuxtLink :to="$nuxt.$localePath('/terms')" class="hover:text-gray-700 transition-colors">Terms of Use</NuxtLink>
      <a
        href="https://github.com/amitVaibhavTiwari/Daddy-s-Resume"
        target="_blank"
        rel="noopener noreferrer"
        class="hover:text-gray-700 transition-colors"
      >GitHub</a>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { NuxtLink } from "#components";
</script>
