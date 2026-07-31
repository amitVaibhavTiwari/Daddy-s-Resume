<template>
  <div class="w-64">
    <button
      class="w-full bg-white rounded-xl border-2 border-dashed border-gray-200 overflow-hidden group hover:border-gray-400 hover:shadow-md transition-all duration-200 text-left ring-when-focus"
      :aria-label="$t('dashboard.new')"
      @click="goToTemplates"
    >
      <!-- Preview placeholder matching full A4 scaled height (~364px at w-64) -->
      <div class="flex-center flex-col gap-3 bg-gray-50 group-hover:bg-gray-100 transition-colors" style="height: 364px">
        <div class="size-11 rounded-full bg-white shadow-sm flex-center">
          <span class="i-ic:round-plus text-2xl text-gray-400 group-hover:text-gray-600 transition-colors" />
        </div>
        <span class="text-sm text-gray-400 group-hover:text-gray-600 font-medium transition-colors">New Resume</span>
      </div>

      <!-- Info placeholder to match card height -->
      <div class="border-t border-gray-100 px-3 py-3">
        <div class="h-4 w-24 bg-gray-100 rounded mb-2" />
        <div class="h-3 w-32 bg-gray-100 rounded mb-1" />
        <div class="h-3 w-28 bg-gray-100 rounded mb-1" />
        <div class="h-3 w-20 bg-gray-100 rounded" />
      </div>
    </button>
  </div>
</template>

<script lang="ts" setup>
const router = useRouter();
const localePath = useLocalePath();

const goToTemplates = () => {
  router.push(localePath("/templates"));
};
</script>
