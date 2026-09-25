import type { NuxtI18nOptions } from "@nuxtjs/i18n";

export const i18n: NuxtI18nOptions = {
  defaultLocale: "en",
  strategy: "no_prefix",
  locales: [
    {
      code: "en",
      name: "English",
      icon: "i-icon-park-outline:english",
      file: "en.yaml"
    }
  ],
  langDir: "i18n",
  compilation: {
    strictMessage: false
  }
};
