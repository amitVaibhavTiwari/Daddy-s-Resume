<template>
  <TabsRoot
    class="pane-container overflow-hidden"
    style="background-color: #282c34"
    flex="~ col"
    default-value="markdown"
    @update:model-value="onTabChange"
  >
    <TabsList
      class="relative shrink-0 hstack w-full text-sm h-9 px-4"
      style="border-bottom: 1px solid #3e4451"
      md="text-base h-10"
    >
      <TabsIndicator
        class="absolute left-0 bottom-0 h-0.5 rounded-full w-[--radix-tabs-indicator-size] translate-x-[--radix-tabs-indicator-position] transition-[width,transform] duration-300"
        style="background-color: #528bff"
      />

      <TabsTrigger
        value="markdown"
        p="x-2"
        :disabled="loading"
        style="color: #a6adc8"
        class="data-[state=active]:!text-white"
      >Markdown</TabsTrigger>
      <TabsTrigger
        value="css"
        p="x-4"
        :disabled="loading"
        style="color: #a6adc8"
        class="data-[state=active]:!text-white"
      >CSS</TabsTrigger>
      <TabsTrigger
        value="help"
        p="x-4"
        style="color: #a6adc8"
        class="data-[state=active]:!text-white"
      >Help</TabsTrigger>
    </TabsList>

    <!-- Monaco editor — hidden when Help tab is active -->
    <div ref="editor" class="flex-1" :class="activeTab === 'help' ? 'hidden' : ''" />

    <!-- Help panel -->
    <div v-if="activeTab === 'help'" class="flex-1 overflow-y-auto px-6 py-6 leading-relaxed" style="color: #abb2bf">
      <section class="mb-8">
        <h3 class="text-base font-semibold mb-3" style="color: #e5c07b">How it works</h3>
        <p class="text-sm">
          There are two editors: <span style="color: #98c379">Markdown</span> for your resume content and <span style="color: #61afef">CSS</span> for styling.
          As you type, the preview on the right updates live.
        </p>
      </section>

      <section class="mb-8">
        <h3 class="text-base font-semibold mb-3" style="color: #e5c07b">Saving</h3>
        <p class="text-sm mb-3">To save your changes:</p>
        <ul class="text-sm space-y-2 pl-1">
          <li>Press <kbd class="px-1.5 py-0.5 rounded text-xs font-mono" style="background:#3e4451;color:#cdd6f4">Ctrl+S</kbd> on Windows or <kbd class="px-1.5 py-0.5 rounded text-xs font-mono" style="background:#3e4451;color:#cdd6f4">Cmd+S</kbd> on Mac</li>
          <li>Or click the <span style="color:#cdd6f4">Save</span> button in the right panel</li>
        </ul>
      </section>

      <section class="mb-8">
        <h3 class="text-base font-semibold mb-3" style="color: #e5c07b">Backing up to Google Drive</h3>
        <p class="text-sm mb-2">
          Your resumes are stored in your browser only. If you switch devices or clear browser data, they'll be lost.
        </p>
        <p class="text-sm">
          To keep them safe, go to <span style="color:#cdd6f4">My Resumes</span> and click <span style="color:#98c379">Sync to Drive</span>. This saves everything to your own Google Drive account.
        </p>
      </section>

      <section class="mb-8">
        <h3 class="text-base font-semibold mb-3" style="color: #e5c07b">Using on another device</h3>
        <p class="text-sm">
          After syncing, open the app on your new device, go to <span style="color:#cdd6f4">My Resumes</span>, and click <span style="color:#98c379">Import from Drive</span>. All your resumes will load in.
        </p>
      </section>

      <section>
        <h3 class="text-base font-semibold mb-3" style="color: #e5c07b">New to Markdown?</h3>
        <p class="text-sm mb-3">You don't need to learn Markdown to use this. Here's a simple trick:</p>
        <ol class="text-sm space-y-2 pl-4 list-decimal">
          <li>Go to the <span style="color:#98c379">Markdown</span> tab, select everything (<kbd class="px-1.5 py-0.5 rounded text-xs font-mono" style="background:#3e4451;color:#cdd6f4">Ctrl+A</kbd>) and copy it.</li>
          <li>Open any AI: ChatGPT, Claude, Gemini, etc.</li>
          <li>Paste it and say: <span style="color:#cdd6f4">"This is my resume template. Fill it with my details."</span> Then give your info or upload your old resume.</li>
          <li>Copy the result back here and you're done.</li>
        </ol>
        <p class="text-xs mt-3" style="color:#7f848e">These AI tools handle Markdown very well. You don't need to touch the formatting at all.</p>
      </section>
    </div>
  </TabsRoot>
</template>

<script lang="ts" setup>
const editor = ref<HTMLDivElement>();
const activeTab = ref("markdown");
const { setup, activateModel, dispose, loading } = useMonaco();

const onTabChange = (value: string) => {
  activeTab.value = value;
  if (value !== "help") {
    activateModel(value);
  }
};

onMounted(async () => {
  await setup(editor.value);
  activateModel("markdown");
});

onBeforeUnmount(dispose);
</script>
