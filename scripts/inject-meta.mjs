/** Create static route-specific heads for crawlers, preserving the React entry point. */
import { readFileSync, writeFileSync, mkdirSync } from "node:fs";
import { resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";
const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const distDir = resolve(root, "dist");
const pages = JSON.parse(readFileSync(resolve(root, "src/lib/seo-pages.json"), "utf8"));
const base = readFileSync(resolve(distDir, "index.html"), "utf8");
const escape = value => value.replaceAll("&", "&amp;").replaceAll('"', "&quot;").replaceAll("<", "&lt;").replaceAll(">", "&gt;");
for (const [path, page] of Object.entries(pages)) {
  const url = `https://thiesse.com.br${path}`;
  let html = base.replace(/<title>[^<]*<\/title>/, `<title>${escape(page.title)}</title>`);
  for (const [attribute, key, value] of [
    ["name", "description", page.description], ["property", "og:title", page.title],
    ["property", "og:description", page.description], ["property", "og:url", url],
    ["name", "twitter:title", page.title], ["name", "twitter:description", page.description],
  ]) html = html.replace(new RegExp(`<meta ${attribute}="${key}"[^>]*>`), `<meta ${attribute}="${key}" content="${escape(value)}" />`);
  // Route canonicals are absent from the app shell: Helmet owns them at runtime.
  html = html.replace(/<link rel="canonical"[^>]*>/g, "");
  html = html.replace("</head>", `  <link rel="canonical" href="${url}" data-rh="true" />\n    <script type="application/ld+json" data-rh="true">${JSON.stringify({ "@context": "https://schema.org", "@type": page.schemaType, name: page.title, description: page.description, url, inLanguage: "pt-BR", publisher: { "@id": "https://thiesse.com.br/#organization" } }).replaceAll("<", "\\u003c")}</script>\n  </head>`);
  // Preserve the existing Mission Control share image; don't generate a new image.
  if (path.startsWith("/mission-control")) {
    html = html.replace(/(<meta (?:property="og:image"|name="twitter:image") content=")[^"]*(")/g, '$1https://thiesse.com.br/og-mission-control.png?v=2$2');
  }
  const outDir = path === "/" ? distDir : resolve(distDir, path.slice(1));
  mkdirSync(outDir, { recursive: true });
  writeFileSync(resolve(outDir, "index.html"), html);
  console.log(`✓ ${path} metadata generated`);
}
