import { useEffect, useState } from "react";

// Lightweight SEO debug panel. Activate via ?seo=debug in the URL.
// Validates JSON-LD blocks already injected on the page (FAQPage,
// LocalBusiness, Service, Review) so schema errors are caught early.

type Issue = { level: "error" | "warn" | "ok"; type: string; message: string };

function asArray<T>(v: T | T[] | undefined): T[] {
  if (!v) return [];
  return Array.isArray(v) ? v : [v];
}

function validateNode(node: Record<string, unknown>, issues: Issue[]) {
  const types = asArray(node["@type"] as string | string[]);
  const has = (k: string) => node[k] !== undefined && node[k] !== null && node[k] !== "";

  if (types.includes("LocalBusiness") || types.includes("ProfessionalService")) {
    const t = "LocalBusiness";
    if (!has("name")) issues.push({ level: "error", type: t, message: "Missing name" });
    if (!has("address")) issues.push({ level: "error", type: t, message: "Missing address" });
    if (!has("telephone")) issues.push({ level: "warn", type: t, message: "Missing telephone" });
    if (!has("image")) issues.push({ level: "warn", type: t, message: "Missing image" });
    if (!has("geo")) issues.push({ level: "warn", type: t, message: "Missing geo coordinates" });
    if (has("aggregateRating")) {
      const ar = node.aggregateRating as Record<string, unknown>;
      if (!ar.ratingValue || !ar.reviewCount)
        issues.push({ level: "error", type: t, message: "aggregateRating missing fields" });
    }
    if (issues.filter((i) => i.type === t).length === 0)
      issues.push({ level: "ok", type: t, message: "Valid" });

    asArray(node.review as Record<string, unknown> | Record<string, unknown>[]).forEach((r, i) => {
      const rt = `Review[${i}]`;
      if (!r.author) issues.push({ level: "error", type: rt, message: "Missing author" });
      if (!r.reviewRating) issues.push({ level: "error", type: rt, message: "Missing reviewRating" });
      if (!r.reviewBody) issues.push({ level: "warn", type: rt, message: "Missing reviewBody" });
    });

    asArray(node.makesOffer as Record<string, unknown> | Record<string, unknown>[]).forEach(
      (o, i) => {
        const st = `Service[${i}]`;
        const item = o.itemOffered as Record<string, unknown> | undefined;
        if (!item) {
          issues.push({ level: "error", type: st, message: "Offer missing itemOffered" });
          return;
        }
        if (!item.name) issues.push({ level: "error", type: st, message: "Service missing name" });
        if (!item.description)
          issues.push({ level: "warn", type: st, message: "Service missing description" });
      },
    );
  }

  if (types.includes("FAQPage")) {
    const t = "FAQPage";
    const entities = asArray(node.mainEntity as Record<string, unknown> | Record<string, unknown>[]);
    if (entities.length === 0) {
      issues.push({ level: "error", type: t, message: "No questions in mainEntity" });
    } else {
      entities.forEach((q, i) => {
        if (!q.name) issues.push({ level: "error", type: t, message: `Q${i + 1}: missing name` });
        const ans = q.acceptedAnswer as Record<string, unknown> | undefined;
        if (!ans?.text)
          issues.push({ level: "error", type: t, message: `Q${i + 1}: missing answer text` });
      });
      if (issues.filter((i) => i.type === t).length === 0)
        issues.push({ level: "ok", type: t, message: `${entities.length} Q&A pairs valid` });
    }
  }
}

export function SeoDebug() {
  const [active, setActive] = useState(false);
  const [issues, setIssues] = useState<Issue[]>([]);
  const [raw, setRaw] = useState<string[]>([]);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const sp = new URLSearchParams(window.location.search);
    if (sp.get("seo") !== "debug") return;
    setActive(true);

    const blocks = Array.from(
      document.querySelectorAll<HTMLScriptElement>('script[type="application/ld+json"]'),
    );
    const found: Issue[] = [];
    const rawBlocks: string[] = [];

    if (blocks.length === 0) {
      found.push({ level: "error", type: "JSON-LD", message: "No JSON-LD blocks on page" });
    }

    blocks.forEach((b, idx) => {
      try {
        const json = JSON.parse(b.textContent || "{}");
        rawBlocks.push(JSON.stringify(json, null, 2));
        const graph = json["@graph"] ?? [json];
        (graph as Record<string, unknown>[]).forEach((n) => validateNode(n, found));
      } catch (e) {
        found.push({
          level: "error",
          type: "JSON-LD",
          message: `Block #${idx + 1} invalid JSON: ${(e as Error).message}`,
        });
      }
    });

    setIssues(found);
    setRaw(rawBlocks);
  }, []);

  if (!active) return null;

  const errors = issues.filter((i) => i.level === "error").length;
  const warns = issues.filter((i) => i.level === "warn").length;

  return (
    <div className="fixed bottom-24 right-6 z-[200] w-[380px] max-h-[70vh] overflow-y-auto bg-background border border-border shadow-elegant text-xs font-mono">
      <div className="sticky top-0 bg-background border-b border-border px-4 py-3 flex justify-between items-center">
        <strong>SEO Debug</strong>
        <span>
          <span className="text-red-500">{errors} err</span>{" "}
          <span className="text-yellow-500">{warns} warn</span>
        </span>
      </div>
      <ul className="p-3 space-y-1">
        {issues.map((i, idx) => (
          <li
            key={idx}
            className={
              i.level === "error"
                ? "text-red-500"
                : i.level === "warn"
                  ? "text-yellow-500"
                  : "text-green-500"
            }
          >
            [{i.level.toUpperCase()}] {i.type}: {i.message}
          </li>
        ))}
      </ul>
      <details className="border-t border-border p-3">
        <summary className="cursor-pointer text-muted-foreground">Raw JSON-LD</summary>
        {raw.map((r, i) => (
          <pre key={i} className="mt-2 whitespace-pre-wrap break-all text-[10px] opacity-70">
            {r}
          </pre>
        ))}
      </details>
      <div className="border-t border-border p-3 text-muted-foreground text-[10px]">
        Add ?seo=debug to URL to view. Test live:{" "}
        <a
          className="text-accent underline"
          href={`https://search.google.com/test/rich-results?url=${encodeURIComponent(location.origin + location.pathname)}`}
          target="_blank"
          rel="noreferrer"
        >
          Google Rich Results
        </a>
      </div>
    </div>
  );
}
