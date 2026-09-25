/**
 * Public, indexable routes only (must match prerendered English pages).
 * Do not add /dashboard/, /editor/*, or dormant locale prefixes (/sp/, /zh-cn/, /en/).
 */
export const SITE_URL = "https://daddysresume.amitvaibhavtiwari.dev";

export const INDEXABLE_ROUTES = [
  "/",
  "/templates/",
  "/privacy/",
  "/terms/"
] as const;

export type IndexableRoute = (typeof INDEXABLE_ROUTES)[number];

export const toAbsoluteUrl = (path: IndexableRoute | `/${string}`) =>
  `${SITE_URL}${path}`;

export const indexableSitemapEntries = [
  { loc: "/", changefreq: "weekly" as const, priority: 1.0 },
  { loc: "/templates/", changefreq: "weekly" as const, priority: 0.9 },
  { loc: "/privacy/", changefreq: "yearly" as const, priority: 0.3 },
  { loc: "/terms/", changefreq: "yearly" as const, priority: 0.3 }
];

/** Legacy locale URL prefixes — strip for canonicals only; never list in sitemap/llms.txt. */
export const LEGACY_LOCALE_PREFIXES = ["en", "sp", "zh-cn"] as const;
