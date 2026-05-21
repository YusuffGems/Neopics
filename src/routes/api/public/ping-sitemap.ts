import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";

const SITEMAP_URL = "https://neopics.in/sitemap.xml";

const TARGETS = [
  // Note: Google deprecated their public sitemap ping endpoint in 2023, but
  // it still resolves and is harmless. Bing's IndexNow + ping endpoint still
  // accepts pings.
  `https://www.google.com/ping?sitemap=${encodeURIComponent(SITEMAP_URL)}`,
  `https://www.bing.com/ping?sitemap=${encodeURIComponent(SITEMAP_URL)}`,
];

export const Route = createFileRoute("/api/public/ping-sitemap")({
  server: {
    handlers: {
      GET: async () => {
        const results = await Promise.all(
          TARGETS.map(async (url) => {
            try {
              const r = await fetch(url, { method: "GET" });
              return { url, status: r.status, ok: r.ok };
            } catch (e) {
              return { url, status: 0, ok: false, error: (e as Error).message };
            }
          }),
        );
        return new Response(
          JSON.stringify({ pinged: SITEMAP_URL, at: new Date().toISOString(), results }, null, 2),
          { headers: { "Content-Type": "application/json" } },
        );
      },
    },
  },
});
