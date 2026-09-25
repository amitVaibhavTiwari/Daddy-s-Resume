import type { LocaleObject } from "@nuxtjs/i18n";

/**
 * Locales kept in the repo but not registered in `i18n.ts` (no /sp/ or /zh-cn/ URLs).
 * When translations are ready, spread these into `locales` in `configs/i18n.ts`.
 */
export const dormantLocales = [
  {
    code: "sp",
    name: "Spanish",
    icon: "i-material-symbols:language-spanish",
    file: "sp.yaml"
  },
  {
    code: "zh-cn",
    name: "简体中文",
    icon: "i-icon-park-outline:chinese",
    file: "zh-cn.yaml"
  }
] satisfies LocaleObject[];
