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
        { name: "author", content: "Amit Vaibhav Tiwari" },
        { name: "publisher", content: "Daddy's Resume" },
        { property: "og:image:width", content: "1200" },
        { property: "og:image:height", content: "630" },
        { name: "format-detection", content: "telephone=no" }
      ]
    }
  },

  site: {
    url: "https://daddysresume.amitvaibhavtiwari.dev",
    name: "Daddy's Resume",
    trailingSlash: true
  },

  sitemap: {
    autoI18n: false,
    inferStaticPagesAsRoutes: false,
    autoLastmod: true,
    credits: false,
    defaults: { changefreq: "weekly", priority: 0.8 },
    urls: [
      { loc: "/", changefreq: "weekly", priority: 1.0 },
      { loc: "/templates/", changefreq: "weekly", priority: 0.9 },
      { loc: "/privacy/", changefreq: "yearly", priority: 0.3 },
      { loc: "/terms/", changefreq: "yearly", priority: 0.3 }
    ]
  },

  pwa,
  compatibilityDate: "2026-07-28"
});