<template>
  <div class="bg-white min-h-screen">
    <SharedHeader />

    <div class="max-w-3xl mx-auto px-6 py-16">
      <h1 class="text-3xl font-bold text-gray-900 mb-12">Terms of Use</h1>

      <section class="mb-10">
        <h2 class="text-xl font-semibold text-gray-900 mb-3">Acceptance</h2>
        <p class="text-gray-600 leading-relaxed">
          By using Daddy's Resume, you agree to these terms. If you do not agree, please do not use the app.
        </p>
      </section>

      <section class="mb-10">
        <h2 class="text-xl font-semibold text-gray-900 mb-3">Use of the App</h2>
        <p class="text-gray-600 leading-relaxed mb-3">
          Daddy's Resume is a free, open-source tool for creating resumes. You may use it for personal or professional purposes without restriction.
        </p>
        <p class="text-gray-600 leading-relaxed">
          You are solely responsible for the content you create using this app. Do not use the app to create or distribute false, misleading, or harmful content.
        </p>
      </section>

      <section class="mb-10">
        <h2 class="text-xl font-semibold text-gray-900 mb-3">Your Data</h2>
        <p class="text-gray-600 leading-relaxed">
          All data you enter is stored locally in your browser. We do not have access to your data. You are responsible for keeping your own backups. We are not liable for any data loss resulting from browser data being cleared, device changes, or any other reason.
        </p>
      </section>

      <section class="mb-10">
        <h2 class="text-xl font-semibold text-gray-900 mb-3">Google Drive Integration</h2>
        <p class="text-gray-600 leading-relaxed">
          If you use the optional Google Drive sync feature, you are subject to <a href="https://policies.google.com/terms" target="_blank" rel="noopener noreferrer" class="underline hover:text-gray-900">Google's Terms of Service</a> in addition to these terms. We are not responsible for any issues arising from Google's services.
        </p>
      </section>

      <section class="mb-10">
        <h2 class="text-xl font-semibold text-gray-900 mb-3">Disclaimer of Warranties</h2>
        <p class="text-gray-600 leading-relaxed">
          This app is provided "as is" without any warranty of any kind. We make no guarantees about uptime, accuracy, or fitness for any particular purpose. Use it at your own discretion.
        </p>
      </section>

      <section class="mb-10">
        <h2 class="text-xl font-semibold text-gray-900 mb-3">Limitation of Liability</h2>
        <p class="text-gray-600 leading-relaxed">
          To the maximum extent permitted by law, we are not liable for any direct, indirect, incidental, or consequential damages arising from your use of this app, including but not limited to data loss.
        </p>
      </section>

      <section class="mb-10">
        <h2 class="text-xl font-semibold text-gray-900 mb-3">Open Source</h2>
        <p class="text-gray-600 leading-relaxed">
          Daddy's Resume is open source under the <a href="https://github.com/amitVaibhavTiwari/Daddy-s-Resume/blob/main/LICENSE" target="_blank" rel="noopener noreferrer" class="underline hover:text-gray-900">GPL-3.0 license</a>. You are free to use, modify, and distribute the source code in accordance with that license.
        </p>
      </section>

      <section>
        <h2 class="text-xl font-semibold text-gray-900 mb-3">Changes to These Terms</h2>
        <p class="text-gray-600 leading-relaxed">
          We may update these terms from time to time. Continued use of the app after changes are posted constitutes acceptance of the updated terms.
        </p>
      </section>
    </div>

    <SharedFooter />
  </div>
</template>

<script setup lang="ts">
useHead({
  title: "Terms of Use | Daddy's Resume",
  meta: [
    { name: "description", content: "Terms of use for Daddy's Resume — free, open-source Markdown resume builder." }
  ]
});
</script>
