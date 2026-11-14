import { Button } from "@/components/ui/button";
import { ArrowRight, ArrowDown } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const Hero = () => {
  const { t } = useLanguage();

  return (
    <section className="relative min-h-screen bg-hero-gradient overflow-hidden">
      {/* Grid overlay */}
      <div className="absolute inset-0 bg-grid" aria-hidden="true" />
      <div
        className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-background to-transparent"
        aria-hidden="true"
      />

      <div className="container mx-auto px-6 pt-36 pb-24 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center min-h-[calc(100vh-10rem)]">
          {/* Content */}
          <div>
            <p className="animate-fade-up font-mono text-xs uppercase tracking-[0.25em] text-accent mb-6 flex items-center gap-2">
              <span className="inline-block w-2 h-2 rounded-full bg-accent" />
              {t("hero.kicker")}
            </p>

            <h1 className="animate-fade-up-delay-1 text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-[1.1] mb-6">
              {t("hero.title")}{" "}
              <span className="text-gradient-gold">{t("hero.title_highlight")}</span>
            </h1>

            <p className="animate-fade-up-delay-2 text-lg md:text-xl text-muted-foreground mb-10 max-w-xl leading-relaxed">
              {t("hero.subtitle")}
            </p>

            <div className="animate-fade-up-delay-3 flex flex-col sm:flex-row gap-4 mb-12">
              <Button variant="hero" size="xl" asChild>
                <a href="#contact" className="flex items-center gap-2">
                  {t("hero.cta_primary")}
                  <ArrowRight className="w-5 h-5" />
                </a>
              </Button>
              <Button variant="heroOutline" size="xl" asChild>
                <a href="#solutions" className="flex items-center gap-2">
                  {t("hero.cta_secondary")}
                  <ArrowDown className="w-5 h-5" />
                </a>
              </Button>
            </div>

            <div className="animate-fade-up-delay-4 flex flex-wrap gap-x-10 gap-y-4">
              <div>
                <p className="text-2xl font-bold text-foreground">18+</p>
                <p className="text-sm text-muted-foreground">{t("hero.stat_years")}</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-foreground">8+</p>
                <p className="text-sm text-muted-foreground">{t("hero.stat_intl")}</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-foreground">2017</p>
                <p className="text-sm text-muted-foreground">{t("hero.stat_since")}</p>
              </div>
            </div>
          </div>

          {/* Abstract architecture visualization */}
          <div className="relative animate-scale-in">
            <div className="relative bg-card-gradient rounded-2xl border border-border/70 shadow-card-hover p-6 md:p-8">
              <div className="flex items-center justify-between mb-6">
                <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
                  {t("hero.diagram_title")}
                </p>
                <div className="flex gap-1.5" aria-hidden="true">
                  <span className="w-2.5 h-2.5 rounded-full bg-border" />
                  <span className="w-2.5 h-2.5 rounded-full bg-border" />
                  <span className="w-2.5 h-2.5 rounded-full bg-accent/70" />
                </div>
              </div>

              <svg viewBox="0 0 480 340" className="w-full h-auto" role="img" aria-label={t("hero.diagram_title")}>
                {/* Connection lines */}
                <g stroke="hsl(217 91% 60% / 0.35)" strokeWidth="1.5" fill="none">
                  <path className="flow-line" d="M 240 170 L 110 70" />
                  <path className="flow-line" d="M 240 170 L 370 70" />
                  <path className="flow-line" d="M 240 170 L 110 270" />
                  <path className="flow-line" d="M 240 170 L 370 270" />
                </g>

                {/* Module nodes */}
                <g>
                  <rect x="40" y="44" width="140" height="52" rx="10" fill="hsl(222 32% 10%)" stroke="hsl(220 18% 20%)" />
                  <text x="110" y="75" textAnchor="middle" fill="hsl(210 30% 96%)" fontSize="13" fontWeight="600" fontFamily="Outfit, sans-serif">
                    {t("hero.diagram_products")}
                  </text>

                  <rect x="300" y="44" width="140" height="52" rx="10" fill="hsl(222 32% 10%)" stroke="hsl(220 18% 20%)" />
                  <text x="370" y="75" textAnchor="middle" fill="hsl(210 30% 96%)" fontSize="13" fontWeight="600" fontFamily="Outfit, sans-serif">
                    {t("hero.diagram_operations")}
                  </text>

                  <rect x="40" y="244" width="140" height="52" rx="10" fill="hsl(222 32% 10%)" stroke="hsl(220 18% 20%)" />
                  <text x="110" y="275" textAnchor="middle" fill="hsl(210 30% 96%)" fontSize="13" fontWeight="600" fontFamily="Outfit, sans-serif">
                    {t("hero.diagram_public")}
                  </text>

                  <rect x="300" y="244" width="140" height="52" rx="10" fill="hsl(222 32% 10%)" stroke="hsl(220 18% 20%)" />
                  <text x="370" y="275" textAnchor="middle" fill="hsl(210 30% 96%)" fontSize="12" fontWeight="600" fontFamily="Outfit, sans-serif">
                    {t("hero.diagram_markets")}
                  </text>
                </g>

                {/* Core node */}
                <g>
                  <rect x="165" y="138" width="150" height="64" rx="12" fill="hsl(217 91% 60% / 0.12)" stroke="hsl(217 91% 60%)" strokeWidth="1.5" />
                  <text x="240" y="175" textAnchor="middle" fill="hsl(199 95% 70%)" fontSize="14" fontWeight="700" fontFamily="Outfit, sans-serif">
                    {t("hero.diagram_core")}
                  </text>
                </g>

                {/* Connection dots */}
                <g fill="hsl(187 92% 50%)">
                  <circle cx="110" cy="70" r="3" />
                  <circle cx="370" cy="70" r="3" />
                  <circle cx="110" cy="270" r="3" />
                  <circle cx="370" cy="270" r="3" />
                  <circle cx="240" cy="170" r="4" />
                </g>
              </svg>
            </div>

            {/* Floating chips */}
            <div className="absolute -top-4 -right-3 md:-right-6 bg-card px-4 py-2 rounded-lg shadow-card border border-border animate-float">
              <p className="font-mono text-xs text-accent">BR · US · EU</p>
            </div>
            <div
              className="absolute -bottom-4 -left-3 md:-left-6 bg-card px-4 py-2 rounded-lg shadow-card border border-border animate-float"
              style={{ animationDelay: "0.8s" }}
            >
              <p className="font-mono text-xs text-muted-foreground">since 2017</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
