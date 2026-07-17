import { Button } from "@/components/ui/button";
import { ArrowUpRight, CheckCircle2, Layers, MessageSquare, HeartPulse, Bot } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const Products = () => {
  const { t } = useLanguage();

  const products = [
    {
      key: "mission",
      icon: Layers,
      link: "https://thiesse.com.br/mission-control",
    },
    {
      key: "ops",
      icon: MessageSquare,
      link: "https://agentes.thiesse.com.br",
    },
    {
      key: "vacinapp",
      icon: HeartPulse,
      link: "https://vacinapp.com",
    },
  ];

  return (
    <section id="products" className="py-24 bg-background relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 right-1/4 w-80 h-80 bg-gold/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-navy-medium/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <span className="text-gold font-medium text-sm uppercase tracking-wider mb-4 block">
            {t("products.label")}
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            {t("products.title")}{" "}
            <span className="text-gradient-gold">{t("products.title_highlight")}</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {t("products.description")}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {products.map((product) => (
            <div
              key={product.key}
              className="group relative flex flex-col h-full bg-card-gradient rounded-2xl border border-border/50 shadow-card hover:shadow-card-hover hover:border-gold/20 transition-all duration-300 overflow-hidden"
            >
              {/* Top accent line */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-gold via-gold-light to-gold opacity-80 group-hover:opacity-100 transition-opacity" />

              <div className="p-8 md:p-10 flex flex-col h-full">
                <div className="flex items-center justify-between mb-6">
                  <div className="w-14 h-14 rounded-xl bg-gold/10 flex items-center justify-center group-hover:bg-gold/20 transition-colors">
                    <product.icon className="w-7 h-7 text-gold" />
                  </div>
                  <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground bg-muted px-3 py-1 rounded-full">
                    {t(`products.${product.key}.tag`)}
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-foreground mb-2">
                  {t(`products.${product.key}.name`)}
                </h3>
                <p className="text-gold font-medium mb-4">
                  {t(`products.${product.key}.subtitle`)}
                </p>
                <p className="text-muted-foreground mb-8 leading-relaxed">
                  {t(`products.${product.key}.description`)}
                </p>

                <ul className="space-y-3 mb-10">
                  {[1, 2, 3].map((i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-muted-foreground">
                      <CheckCircle2 className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                      <span>{t(`products.${product.key}.benefit${i}`)}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-auto">
                  <Button
                    variant="gold"
                    size="lg"
                    className="w-full group/btn"
                    asChild
                  >
                    <a
                      href={product.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2"
                    >
                      {t(`products.${product.key}.cta`)}
                      <ArrowUpRight className="w-4 h-4 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom value statement */}
        <div className="mt-16 text-center">
          <p className="inline-flex items-center gap-2 text-sm text-muted-foreground bg-muted/50 px-6 py-3 rounded-full border border-border/50">
            <Bot className="w-4 h-4 text-gold" />
            {t("products.footnote")}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Products;
