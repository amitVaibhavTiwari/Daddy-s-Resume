import type { Ref } from "vue";

export const SITE_URL = "https://daddysresume.amitvaibhavtiwari.dev";
export const SITE_NAME = "Daddy's Resume";

const LOCALE_PREFIXES = ["en", "sp", "zh-cn"];

export const canonicalPath = (path: string) => {
  const segments = path.split("/").filter(Boolean);

  if (segments.length && LOCALE_PREFIXES.includes(segments[0]!)) segments.shift();

  return segments.length ? `/${segments.join("/")}/` : "/";
};

export const canonicalUrl = (path: string) => `${SITE_URL}${canonicalPath(path)}`;

interface SeoOptions {
  title: string;
  description: string;
  keywords?: string;
  image?: string;
  imageAlt?: string;
  noindex?: boolean;
  schema?: Record<string, unknown>[];
}

export const useSeo = (options: SeoOptions | Ref<SeoOptions>) => {
  const route = useRoute();
  const opts = computed(() => (isRef(options) ? options.value : options));

  const url = computed(() => canonicalUrl(route.path));

  const image = computed(() => {
    const img = opts.value.image ?? "/editor.png";
    return img.startsWith("http") ? img : `${SITE_URL}${img}`;
  });

  const robots = computed(() =>
    opts.value.noindex
      ? "noindex, nofollow"
      : "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1"
  );

  useHead(() => ({
    title: opts.value.title,
    link: [
      { rel: "canonical", href: url.value },
      { rel: "alternate", hreflang: "en", href: url.value },
      { rel: "alternate", hreflang: "x-default", href: url.value }
    ],
    meta: [
      { name: "description", content: opts.value.description },
      ...(opts.value.keywords
        ? [{ name: "keywords", content: opts.value.keywords }]
        : []),
      { name: "robots", content: robots.value },
      { name: "googlebot", content: robots.value },

      { property: "og:title", content: opts.value.title },
      { property: "og:description", content: opts.value.description },
      { property: "og:url", content: url.value },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: SITE_NAME },
      { property: "og:image", content: image.value },
      {
        property: "og:image:alt",
        content: opts.value.imageAlt ?? `${SITE_NAME} - Free Markdown Resume Builder`
      },

      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: opts.value.title },
      { name: "twitter:description", content: opts.value.description },
      { name: "twitter:image", content: image.value }
    ],
    script: (opts.value.schema ?? []).map((entry, i) => ({
      key: `ld-json-${i}`,
      type: "application/ld+json",
      innerHTML: JSON.stringify(entry)
    }))
  }));
};
