import { Helmet } from "react-helmet-async";
import pages from "@/lib/seo-pages.json";

type PagePath = keyof typeof pages;
type Metadata = { title: string; description: string; titleEn?: string; descriptionEn?: string; schemaType: string };
const baseUrl = "https://thiesse.com.br";

export default function PageSEO({ path, language = "pt" }: { path?: PagePath; language?: "pt" | "en" }) {
  const page: Metadata | undefined = path ? pages[path] : undefined;
  const title = page ? (language === "en" ? page.titleEn ?? page.title : page.title) : "Página não encontrada | TSoftwares";
  const description = page ? (language === "en" ? page.descriptionEn ?? page.description : page.description) : "Esta página não foi encontrada. Conheça as soluções e os produtos da TSoftwares.";
  const url = path ? `${baseUrl}${path}` : undefined;
  return (
    <Helmet>
      <html lang={language === "en" ? "en" : "pt-BR"} />
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="robots" content={page ? "index, follow" : "noindex, follow"} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="TSoftwares" />
      <meta property="og:locale" content={language === "en" ? "en_US" : "pt_BR"} />
      {url && <meta property="og:url" content={url} />}
      {url && <link rel="canonical" href={url} />}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      {url && page && <script type="application/ld+json">{JSON.stringify({
        "@context": "https://schema.org", "@type": page.schemaType, name: title, description, url,
        inLanguage: language === "en" ? "en" : "pt-BR",
        publisher: { "@type": "Organization", "@id": `${baseUrl}/#organization`, name: "TSoftwares", url: `${baseUrl}/` },
      })}</script>}
    </Helmet>
  );
}