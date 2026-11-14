import { Code, Globe2, Landmark, Users } from "lucide-react";
import standingAsset from "@/assets/davi-portrait-standing.jpg.asset.json";
import profileAsset from "@/assets/davi-portrait-profile.jpg.asset.json";
import { useLanguage } from "@/contexts/LanguageContext";

const About = () => {
  const { t } = useLanguage();

  const stats = [
    { value: "18+", label: t("stat.years_exp") },
    { value: "8+", label: t("stat.intl_exp") },
    { value: "7+", label: t("stat.countries") },
    { value: "1", label: t("stat.startup") },
  ];

  const highlights = [
    { icon: Globe2, title: t("highlight.global.title"), description: t("highlight.global.desc") },
    { icon: Landmark, title: t("highlight.publicsector.title"), description: t("highlight.publicsector.desc") },
    { icon: Code, title: t("highlight.tech.title"), description: t("highlight.tech.desc") },
    { icon: Users, title: t("highlight.enterprise.title"), description: t("highlight.enterprise.desc") },
  ];

  return (
    <section id="about" className="py-24 bg-background relative overflow-hidden">
      <div className="container mx-auto px-6">
        {/* Stats bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-border/50 rounded-2xl overflow-hidden border border-border/50 mb-24">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center p-8 bg-card">
              <p className="text-3xl md:text-4xl font-bold text-gradient-gold mb-2">{stat.value}</p>
              <p className="text-muted-foreground text-sm">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Story + founder */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.25em] text-accent mb-4">
              {t("about.label")}
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              {t("about.title")}{" "}
              <span className="text-gradient-gold">{t("about.title_highlight")}</span>
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>{t("about.p1")}</p>
              <p>{t("about.p2")}</p>
              <p>{t("about.p3")}</p>
            </div>
          </div>

          <div className="relative max-w-md mx-auto lg:mx-0 lg:justify-self-end w-full">
            <div className="relative rounded-2xl overflow-hidden shadow-card-hover border border-border/60">
              <img
                src={standingAsset.url}
                alt="Davi Thiesse, fundador da Thiesse Software, em retrato profissional de terno"
                className="w-full h-auto object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
              <div className="absolute bottom-5 left-5 right-5">
                <p className="text-foreground font-semibold">{t("about.founder_name")}</p>
                <p className="text-muted-foreground text-sm">{t("about.founder_role")}</p>
              </div>
            </div>
            {/* Secondary portrait */}
            <div className="absolute -bottom-8 -left-8 w-28 h-28 md:w-36 md:h-36 rounded-2xl overflow-hidden border-2 border-primary/40 shadow-gold-glow hidden sm:block">
              <img
                src={profileAsset.url}
                alt="Perfil de Davi Thiesse"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/10 rounded-xl -z-10" aria-hidden="true" />
          </div>
        </div>

        {/* Highlights grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((item) => (
            <div
              key={item.title}
              className="group p-6 bg-card rounded-xl border border-border/70 hover:border-primary/30 hover:shadow-card-hover transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <item.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
              <p className="text-sm text-muted-foreground">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
