<template>
  <div class="bg-white min-h-screen">
    <SharedHeader />

    <div class="max-w-3xl mx-auto px-6 py-16">
      <h1 class="text-3xl font-bold text-gray-900 mb-12">Privacy Policy</h1>

      <section class="mb-10">
        <h2 class="text-xl font-semibold text-gray-900 mb-3">Overview</h2>
        <p class="text-gray-600 leading-relaxed">
          Daddy's Resume does not collect, store, or process any personal data.
        </p>
      </section>

      <section class="mb-10">
        <h2 class="text-xl font-semibold text-gray-900 mb-3">Data Storage</h2>
        <p class="text-gray-600 leading-relaxed mb-3">
          All resume data (your Markdown content, CSS, and settings) is stored in your browser's <strong>localStorage</strong>. This data never leaves your device unless you choose to back it up.
        </p>
        <p class="text-gray-600 leading-relaxed">
          Clearing your browser data will delete your resumes from that device. We recommend using the Google Drive sync feature to keep a backup.
        </p>
      </section>

      <section class="mb-10">
        <h2 class="text-xl font-semibold text-gray-900 mb-3">Google Drive (Optional)</h2>
        <p class="text-gray-600 leading-relaxed mb-3">
          You can optionally connect your Google account to back up your resumes to your own Google Drive. This feature is optional.
        </p>
        <ul class="space-y-2 text-gray-600 text-sm pl-4 list-disc">
          <li>We only request the <code class="bg-gray-100 px-1 rounded text-xs">drive.file</code> scope, which limits access to files created by this app.</li>
          <li>Your data is saved to a single backup file in your own Google Drive.</li>
          <li>We do not store your credentials or tokens.</li>
          <li>You can revoke access at any time from your <a href="https://myaccount.google.com/permissions" target="_blank" rel="noopener noreferrer" class="underline hover:text-gray-900">Google Account settings</a>.</li>
        </ul>
      </section>

      <section class="mb-10">
        <h2 class="text-xl font-semibold text-gray-900 mb-3">Cookies and Tracking</h2>
        <p class="text-gray-600 leading-relaxed">
          We do not use cookies, analytics, or any third-party tracking scripts. We collect no usage data, IP addresses, or behavioral information.
        </p>
      </section>

      <section class="mb-10">
        <h2 class="text-xl font-semibold text-gray-900 mb-3">Third-Party Services</h2>
        <p class="text-gray-600 leading-relaxed mb-2">The app loads the following external resources:</p>
        <ul class="space-y-2 text-gray-600 text-sm pl-4 list-disc">
          <li><strong>Google Fonts</strong> for font rendering. Subject to <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" class="underline hover:text-gray-900">Google's Privacy Policy</a>.</li>
          <li><strong>Iconify CDN</strong> for resume icons. No personal data is shared.</li>
        </ul>
      </section>

      <section class="mb-10">
        <h2 class="text-xl font-semibold text-gray-900 mb-3">Children's Privacy</h2>
        <p class="text-gray-600 leading-relaxed">
          This app does not knowingly collect any information from children under 13. Since no personal data is collected, there is nothing specific to disclose.
        </p>
      </section>

      <section>
        <h2 class="text-xl font-semibold text-gray-900 mb-3">Contact</h2>
        <p class="text-gray-600 leading-relaxed">
          If you have questions about this policy, open an issue on our <a href="https://github.com/amitVaibhavTiwari/Daddy-s-Resume" target="_blank" rel="noopener noreferrer" class="underline hover:text-gray-900">GitHub repository</a>.
        </p>
      </section>
    </div>

    <SharedFooter />
  </div>
</template>

<script setup lang="ts">
useHead({
  title: "Privacy Policy | Daddy's Resume",
  meta: [
    { name: "description", content: "Privacy policy for Daddy's Resume. We collect no personal data. All resume data stays in your browser." }
  ]
});
</script>
