<template>
  <div class="min-h-screen bg-gray-50">
    <SharedHeader />

    <div class="max-w-7xl mx-auto px-6 lg:px-10 pt-10 pb-16">
      <!-- Page header -->
      <div class="flex items-center justify-between mb-8 flex-wrap gap-4">
        <div>
          <h1 class="text-2xl font-bold text-gray-900">{{ $t("dashboard.my_resumes") }}</h1>
          <p v-if="status === 'success'" class="text-sm text-gray-400 mt-0.5">
            {{ resumes.length }} {{ resumes.length === 1 ? 'resume' : 'resumes' }}
          </p>
        </div>
        <div class="flex items-center gap-2 flex-wrap">
          <DashboardDriveSync @update="refresh" />
          <DashboardFile @update="refresh" />
        </div>
      </div>

      <!-- Resume grid -->
      <div class="flex flex-wrap gap-6">
        <DashboardNewResume />

        <template v-if="status === 'success'">
          <DashboardResumeItem
            v-for="resume in resumes"
            :key="resume.id"
            :resume="resume"
            @update="refresh"
          />
        </template>
        <template v-else>
          <div v-for="i in 4" :key="i" class="w-56">
            <UiSkeleton class="w-[210px] h-[299px] rounded-lg" />
            <div class="mt-3 space-y-1.5">
              <UiSkeleton class="h-4 w-32 rounded" />
              <UiSkeleton class="h-3 w-20 rounded" />
            </div>
          </div>
        </template>
      </div>
    </div>
    <SharedFooter />
  </div>
</template>

<script lang="ts" setup>
import type { DbResume } from "~/utils/storage";

const {
  data: resumes,
  refresh,
  status
} = useAsyncData<DbResume[]>("resume-list", () => storageService.getResumes(), {
  server: false,
  immediate: false,
  default: () => []
});

onMounted(refresh);
</script>
