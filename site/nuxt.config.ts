import { pwa } from "./configs/pwa";
import { i18n } from "./configs/i18n";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  srcDir: "src/",

  modules: [
    "@vueuse/nuxt",
    "@unocss/nuxt",
    "@pinia/nuxt",
    "@nuxtjs/i18n",
    "@nuxtjs/color-mode",
    "@vite-pwa/nuxt",
    "nuxt-simple-sitemap",
    "radix-vue/nuxt",
    "shadcn-nuxt"
  ],

  css: [
    "@unocss/reset/tailwind.css",
    "katex/dist/katex.min.css",
    "~/assets/css/index.css"
  ],

  i18n,

  shadcn: {
    prefix: "Ui",
    componentDir: "./src/components/ui"
  },

  runtimeConfig: {
    public: {
      googleFontsKey: "",
      googleClientId: ""
    }
  },

  colorMode: {
    classSuffix: "",
    preference: "light"
  },

  app: {
    head: {
      viewport: "width=device-width,initial-scale=1",
      link: [
        { rel: "icon", type: "image/png", href: "/daddys-resume-logo.png" },
        { rel: "apple-touch-icon", href: "/daddys-resume-logo.png" },
        { rel: "preconnect", href: "https://fonts.googleapis.com" },
        { rel: "preconnect", href: "https://fonts.gstatic.com", crossorigin: "" },
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Lato:wght@400;700&display=swap"
        },
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=EB+Garamond:ital,wght@0,400..700;1,400..700&display=swap"
        },
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Noto+Serif+JP:wght@400;600;700&display=swap"
        }
      ],
      meta: [
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        { name: "application-name", content: "Daddy's Resume" },
        { name: "apple-mobile-web-app-title", content: "Daddy's Resume" },
        { name: "msapplication-TileColor", content: "#fff" },
        { property: "og:url", content: "https://daddysresume.amitvaibhavtiwari.dev" },
        { property: "og:type", content: "website" },
        { property: "og:image", content: "https://daddysresume.amitvaibhavtiwari.dev/editor.png" },
        { property: "og:image:width", content: "1200" },
        { property: "og:image:alt", content: "Daddy's Resume - Free & Open Source Markdown Resume Builder" },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:image", content: "https://daddysresume.amitvaibhavtiwari.dev/editor.png" },
        { name: "twitter:title", content: "Daddy's Resume - Free & Open Source Markdown Resume Builder" },
        { name: "twitter:description", content: "Build your resume for free using Markdown. Open source, real-time PDF preview, ATS-friendly templates, no account needed." }
      ]
    }
  },

  site: {
    url: "https://daddysresume.amitvaibhavtiwari.dev"
  },

  pwa,
  compatibilityDate: "2026-07-28"
});