import { Button } from "@/components/ui/button";
import { ArrowUpRight, CheckCircle2, MessageSquare, HeartPulse, LayoutDashboard, Bot } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const Products = () => {
  const { t } = useLanguage();

  const products = [
    {
      key: "mission",
      icon: LayoutDashboard,
      link: "/mission-control",
      external: false,
    },
    {
      key: "ops",
      icon: MessageSquare,
      link: "https://agentes.thiesse.com.br",
      external: true,
    },
    {
      key: "vacinapp",
      icon: HeartPulse,
      link: "https://vacinapp.com",
      external: true,
    },
  ];

  return (
    <section id="products" className="py-24 bg-background relative overflow-hidden">
      <div className="absolute inset-0 -z-10" aria-hidden="true">
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-2xl mb-16">
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-accent mb-4">
            {t("products.label")}
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            {t("products.title")}{" "}
            <span className="text-gradient-gold">{t("products.title_highlight")}</span>
          </h2>
          <p className="text-muted-foreground">{t("products.description")}</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <div
              key={product.key}
              className="group relative flex flex-col h-full bg-card-gradient rounded-2xl border border-border/70 shadow-card hover:shadow-card-hover hover:border-primary/30 transition-all duration-300 overflow-hidden"
            >
              {/* Top accent line */}
              <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-primary via-accent to-primary opacity-70 group-hover:opacity-100 transition-opacity" />

              <div className="p-8 flex flex-col h-full">
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <product.icon className="w-6 h-6 text-primary" />
                  </div>
                  <span className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground bg-muted px-3 py-1 rounded-full">
                    {t(`products.${product.key}.tag`)}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-foreground mb-1">
                  {t(`products.${product.key}.name`)}
                </h3>
                <p className="text-primary text-sm font-medium mb-4">
                  {t(`products.${product.key}.subtitle`)}
                </p>
                <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
                  {t(`products.${product.key}.description`)}
                </p>

                <ul className="space-y-3 mb-8">
                  {[1, 2, 3].map((i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-muted-foreground">
                      <CheckCircle2 className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                      <span>{t(`products.${product.key}.benefit${i}`)}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-auto">
                  <Button variant="gold" size="lg" className="w-full group/btn" asChild>
                    <a
                      href={product.link}
                      {...(product.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
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

        <div className="mt-14 text-center">
          <p className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-muted-foreground bg-muted/50 px-6 py-3 rounded-full border border-border/50">
            <Bot className="w-4 h-4 text-accent" />
            {t("products.footnote")}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Products;
