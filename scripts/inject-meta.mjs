/**
 * inject-meta.mjs
 * Roda após o build do Vite.
 * Cria dist/mission-control/index.html com as meta tags corretas
 * para que scrapers (WhatsApp, Twitter, etc.) leiam o HTML estático certo.
 */
import { readFileSync, writeFileSync, mkdirSync } from "fs";
import { resolve, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const distDir = resolve(__dirname, "../dist");

const pages = [
  {
    route: "mission-control",
    title: "Mission Control — Uma empresa inteira de IA para seu negócio",
    description:
      "Agentes de marketing, conteúdo, design, atendimento e operações trabalhando juntos. Implantação sob medida com você no comando. Aplique para um diagnóstico.",
    ogImage: "https://thiesse.com.br/og-mission-control.png?v=2",
    canonical: "https://thiesse.com.br/mission-control",
  },
];

const base = readFileSync(`${distDir}/index.html`, "utf-8");

for (const page of pages) {
  let html = base
    // title
    .replace(/<title>[^<]*<\/title>/, `<title>${page.title}</title>`)
    // description
    .replace(
      /<meta name="description"[^>]*>/,
      `<meta name="description" content="${page.description}" />`
    )
    // canonical
    .replace(
      /<link rel="canonical"[^>]*>/,
      `<link rel="canonical" href="${page.canonical}" />`
    )
    // og:title
    .replace(
      /<meta property="og:title"[^>]*>/,
      `<meta property="og:title" content="${page.title}" />`
    )
    // og:description
    .replace(
      /<meta property="og:description"[^>]*>/,
      `<meta property="og:description" content="${page.description}" />`
    )
    // og:url
    .replace(
      /<meta property="og:url"[^>]*>/,
      `<meta property="og:url" content="${page.canonical}" />`
    )
    // og:image
    .replace(
      /<meta property="og:image"[^>]*>/,
      `<meta property="og:image" content="${page.ogImage}" />`
    )
    // twitter:title
    .replace(
      /<meta name="twitter:title"[^>]*>/,
      `<meta name="twitter:title" content="${page.title}" />`
    )
    // twitter:description
    .replace(
      /<meta name="twitter:description"[^>]*>/,
      `<meta name="twitter:description" content="${page.description}" />`
    )
    // twitter:image
    .replace(
      /<meta name="twitter:image"[^>]*>/,
      `<meta name="twitter:image" content="${page.ogImage}" />`
    );

  const outDir = `${distDir}/${page.route}`;
  mkdirSync(outDir, { recursive: true });
  writeFileSync(`${outDir}/index.html`, html);
  console.log(`✓ dist/${page.route}/index.html gerado`);
}
