import { Code2, Landmark, Workflow, CheckCircle2 } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const Solutions = () => {
  const { t } = useLanguage();

  const solutions = [
    { key: "eng", icon: Code2 },
    { key: "gov", icon: Landmark },
    { key: "auto", icon: Workflow },
  ];

  return (
    <section id="solutions" className="py-24 bg-background relative overflow-hidden">
      <div className="absolute inset-0 -z-10" aria-hidden="true">
        <div className="absolute top-0 right-1/4 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-2xl mb-16">
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-accent mb-4">
            {t("solutions.label")}
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            {t("solutions.title")}{" "}
            <span className="text-gradient-gold">{t("solutions.title_highlight")}</span>
          </h2>
          <p className="text-muted-foreground">{t("solutions.description")}</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {solutions.map((solution) => (
            <div
              key={solution.key}
              className="group flex flex-col bg-card-gradient rounded-2xl border border-border/70 shadow-card hover:shadow-card-hover hover:border-primary/30 transition-all duration-300 p-8"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <solution.icon className="w-6 h-6 text-primary" />
              </div>

              <h3 className="text-xl font-bold text-foreground mb-3">
                {t(`solutions.${solution.key}.title`)}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                {t(`solutions.${solution.key}.desc`)}
              </p>

              <ul className="space-y-3 mt-auto">
                {[1, 2, 3].map((i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-muted-foreground">
                    <CheckCircle2 className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                    <span>{t(`solutions.${solution.key}.cap${i}`)}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Solutions;
