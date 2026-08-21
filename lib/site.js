// Single source of truth for the deployed site's absolute origin — used by
// metadataBase, the OG/Twitter images, sitemap.js, and robots.js. Set
// NEXT_PUBLIC_SITE_URL once the real production domain is known; this
// placeholder follows OneMark's existing onemark.co.in domain pattern.
export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || "https://lekka.onemark.co.in";
