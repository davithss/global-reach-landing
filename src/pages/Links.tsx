import { Helmet } from "react-helmet-async";
import { ArrowUpRight, Globe, HeartPulse, LayoutDashboard, Linkedin, MessageCircle } from "lucide-react";
import { LanguageProvider, useLanguage } from "@/contexts/LanguageContext";
import LanguageToggle from "@/components/LanguageToggle";
import logo from "@/assets/thiesse-logo-dark.svg";
import portrait from "@/assets/davi-portrait-profile.jpg.asset.json";

const LinksContent = () => {
  const { t } = useLanguage();

  const links = [
    {
      key: "whatsapp",
      icon: MessageCircle,
      href: "https://wa.me/5579936181642",
      external: true,
      highlight: true,
    },
    {
      key: "mission",
      icon: LayoutDashboard,
      href: "/mission-control",
      external: false,
      highlight: false,
    },
    {
      key: "vacinapp",
      icon: HeartPulse,
      href: "https://vacinapp.com",
      external: true,
      highlight: false,
    },
    {
      key: "site",
      icon: Globe,
      href: "/",
      external: false,
      highlight: false,
    },
  ];

  return (
    <div className="relative min-h-screen overflow-hidden bg-background">
      <Helmet>
        <html lang="pt-BR" />
        <title>TSoftwares · Links</title>
        <meta name="description" content={t("links.meta_description")} />
        <meta name="robots" content="noindex" />
        <meta property="og:title" content="TSoftwares · Links" />
        <meta property="og:description" content={t("links.meta_description")} />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary" />
      </Helmet>

      {/* Ambient background */}
      <div className="absolute inset-0 -z-10" aria-hidden="true">
        <div className="bg-grid absolute inset-0 opacity-60" />
        <div className="absolute -top-32 left-1/2 h-96 w-[36rem] -translate-x-1/2 rounded-full bg-primary/15 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-accent/10 blur-3xl" />
      </div>

      <div className="absolute right-4 top-4 z-10">
        <LanguageToggle />
      </div>

      <main className="mx-auto flex min-h-screen w-full max-w-md flex-col items-center px-6 pb-16 pt-16">
        {/* Profile */}
        <div className="animate-fade-up flex flex-col items-center text-center">
          <div className="relative">
            <div className="absolute -inset-1.5 rounded-full bg-gradient-to-br from-primary to-accent opacity-70 blur-sm" aria-hidden="true" />
            <img
              src={portrait.url}
              alt="Davi Thiesse"
              className="relative h-28 w-28 rounded-full border-2 border-background object-cover"
            />
          </div>
          <img src={logo} alt="TSoftwares" className="mt-6 h-9 w-auto" />
          <p className="mt-3 max-w-xs text-sm leading-relaxed text-muted-foreground">
            {t("links.tagline")}
          </p>
        </div>

        {/* Links */}
        <nav className="mt-10 flex w-full flex-col gap-4" aria-label={t("links.nav_label")}>
          {links.map((link, i) => (
            <a
              key={link.key}
              href={link.href}
              {...(link.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
              className={`animate-fade-up group relative flex items-center gap-4 overflow-hidden rounded-2xl border p-4 transition-all duration-300 ${
                link.highlight
                  ? "border-primary/50 bg-gradient-to-r from-primary/20 to-accent/10 shadow-gold-glow hover:border-primary"
                  : "border-border/70 bg-card-gradient shadow-card hover:border-primary/40 hover:shadow-card-hover"
              }`}
              style={{ animationDelay: `${0.15 + i * 0.08}s` }}
            >
              <span
                className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl transition-colors ${
                  link.highlight
                    ? "bg-primary text-primary-foreground"
                    : "bg-primary/10 text-primary group-hover:bg-primary/20"
                }`}
              >
                <link.icon className="h-5 w-5" />
              </span>
              <span className="min-w-0 flex-1">
                <span className="block truncate text-sm font-semibold text-foreground">
                  {t(`links.${link.key}.title`)}
                </span>
                <span className="block truncate text-xs text-muted-foreground">
                  {t(`links.${link.key}.subtitle`)}
                </span>
              </span>
              <ArrowUpRight className="h-4 w-4 shrink-0 text-muted-foreground transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary" />
            </a>
          ))}
        </nav>

        {/* Social */}
        <div className="animate-fade-up-delay-4 mt-10 flex items-center gap-3">
          <a
            href="https://linkedin.com/in/thiesse"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="flex h-11 w-11 items-center justify-center rounded-xl border border-border text-muted-foreground transition-colors hover:border-primary/40 hover:text-primary"
          >
            <Linkedin className="h-4 w-4" />
          </a>
          <a
            href="https://wa.me/5579936181642"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp"
            className="flex h-11 w-11 items-center justify-center rounded-xl border border-border text-muted-foreground transition-colors hover:border-primary/40 hover:text-primary"
          >
            <MessageCircle className="h-4 w-4" />
          </a>
        </div>

        <p className="mt-10 font-mono text-[11px] text-muted-foreground/70">
          © {new Date().getFullYear()} TSoftwares · {t("footer.markets")}
        </p>
      </main>
    </div>
  );
};

const Links = () => (
  <LanguageProvider>
    <LinksContent />
  </LanguageProvider>
);

export default Links;
