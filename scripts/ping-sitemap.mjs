#!/usr/bin/env node
// Post-deploy sitemap ping. Notifies Google + Bing of fresh URLs.
// Vercel runs this automatically via the `postbuild` script.
// Skipped on preview deployments to avoid pinging staging URLs.

const SITEMAP =
  process.env.SITEMAP_URL ||
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}/sitemap.xml`
    : "https://neopics.in/sitemap.xml");

// Only run on production builds
if (process.env.VERCEL_ENV && process.env.VERCEL_ENV !== "production") {
  console.log(`[ping-sitemap] Skipping (VERCEL_ENV=${process.env.VERCEL_ENV})`);
  process.exit(0);
}

const targets = [
  `https://www.google.com/ping?sitemap=${encodeURIComponent(SITEMAP)}`,
  `https://www.bing.com/ping?sitemap=${encodeURIComponent(SITEMAP)}`,
];

console.log(`[ping-sitemap] Sitemap: ${SITEMAP}`);

const results = await Promise.allSettled(
  targets.map(async (url) => {
    const r = await fetch(url);
    return { url, status: r.status };
  }),
);

results.forEach((r, i) => {
  if (r.status === "fulfilled") {
    console.log(`  ✓ ${r.value.status} ${targets[i]}`);
  } else {
    console.log(`  ✗ ${targets[i]} — ${r.reason?.message ?? r.reason}`);
  }
});
