import { Button } from "@/components/ui/button";
import { ArrowRight, ArrowDown, MessageCircle, Check } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import portrait from "@/assets/davi-portrait-hero.jpg.asset.json";

const Hero = () => {
  const { t } = useLanguage();

  return (
    <section aria-labelledby="hero-title" className="relative isolate overflow-hidden bg-background">
      <div className="absolute inset-0 -z-10" aria-hidden="true">
        <img src={portrait.url} alt="" fetchPriority="high" className="hero-portrait" />
        <div className="hero-photo-shade absolute inset-0" />
      </div>

      <div className="container relative mx-auto px-6 pt-24 pb-6 md:pt-32 md:pb-10">
        <div className="max-w-xl md:w-[60%] lg:w-[57%] lg:max-w-2xl">
          <p className="animate-fade-up mb-4 flex items-center gap-2 text-xs font-medium uppercase text-accent">
            <span className="h-px w-6 bg-accent" aria-hidden="true" />
            {t("hero.kicker")}
          </p>
          <h1 id="hero-title" className="animate-fade-up-delay-1 mb-4 text-4xl font-bold leading-tight text-foreground md:text-5xl lg:text-6xl">
            T<span className="text-primary">Softwares</span><span className="text-accent">.</span>
          </h1>
          <h2 className="animate-fade-up-delay-1 mb-5 text-3xl font-medium leading-[1.15] text-foreground md:text-4xl lg:text-5xl">
            {t("hero.title")}<br />
            <span className="text-accent">{t("hero.title_highlight")}</span>
          </h2>
          <p className="animate-fade-up-delay-2 mb-5 max-w-lg text-sm leading-relaxed text-foreground/80 md:mb-6 md:text-lg">
            {t("hero.subtitle")}
          </p>
          <ul className="animate-fade-up-delay-2 mb-5 flex flex-wrap gap-x-5 gap-y-2 text-xs text-foreground/80 md:mb-7 md:text-sm">
            {["hero.benefit1", "hero.benefit2", "hero.benefit3"].map((key) => (
              <li key={key} className="flex items-center gap-1.5"><Check className="h-3.5 w-3.5 text-accent" aria-hidden="true" />{t(key)}</li>
            ))}
          </ul>
          <div className="animate-fade-up-delay-3 flex flex-col gap-3 sm:flex-row">
            <Button size="lg" asChild className="px-5 font-semibold">
              <a href="https://wa.me/5579981029218" target="_blank" rel="noopener noreferrer">
                <MessageCircle aria-hidden="true" />{t("hero.cta_primary")}<ArrowRight aria-hidden="true" />
              </a>
            </Button>
            <Button variant="outline" size="lg" asChild className="border-foreground/20 bg-background/30 px-5 text-foreground hover:bg-secondary hover:text-foreground">
              <a href="#solutions">{t("hero.cta_secondary")}<ArrowDown aria-hidden="true" /></a>
            </Button>
          </div>
          <p className="mt-3 text-xs text-foreground/65">{t("hero.contact_note")}</p>
        </div>

        <div className="absolute bottom-12 right-8 hidden text-right md:block lg:right-12">
          <p className="text-sm font-semibold text-foreground">Davi Thiesse</p>
          <p className="mt-1 text-xs text-foreground/70">{t("about.founder_role")}</p>
        </div>
      </div>

      <div className="relative border-y border-border bg-background/90">
        <div className="container mx-auto flex flex-col gap-6 px-6 py-6 lg:flex-row lg:items-center lg:justify-between">
          <div className="grid grid-cols-3 gap-4 sm:gap-10">
            {[["18+", "hero.stat_years"], ["8+", "hero.stat_intl"], ["2017", "hero.stat_since"]].map(([value, key]) => (
              <div key={key} className="border-l border-primary/40 pl-3">
                <p className="text-xl font-semibold leading-none text-foreground md:text-2xl">{value}</p>
                <p className="mt-2 text-xs text-muted-foreground">{t(key)}</p>
              </div>
            ))}
          </div>
          <a href="#clients" className="hidden max-w-md text-sm text-foreground/80 sm:block">
            <span className="mb-2 block text-xs text-muted-foreground">{t("hero.proof_label")}</span>
            {t("clients.sergipe.name")} <span className="px-1 text-primary">/</span> CenExel <span className="px-1 text-primary">/</span> RealPage
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
