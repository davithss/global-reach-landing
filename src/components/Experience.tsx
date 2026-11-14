import { Building2, MapPin } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const Experience = () => {
  const { t } = useLanguage();

  const experiences = [
    {
      company: "Thiesse Software",
      role: t("exp.thiesse.role"),
      period: t("exp.current"),
      location: t("exp.thiesse.location"),
      client: t("exp.thiesse.client"),
      clientDescription: t("exp.thiesse.clientDesc"),
      highlights: [
        t("exp.thiesse.highlight1"),
        t("exp.thiesse.highlight2"),
        t("exp.thiesse.highlight3"),
      ],
      flag: "🇧🇷",
      kind: "company",
    },
    {
      company: "Nortal / Nearsure",
      role: t("exp.nortal.role"),
      period: t("exp.current"),
      location: t("exp.nortal.location"),
      client: "Cenexel",
      clientDescription: t("exp.nortal.clientDesc"),
      highlights: [
        t("exp.nortal.highlight1"),
        t("exp.nortal.highlight2"),
        t("exp.nortal.highlight3"),
      ],
      flag: "🇺🇸",
      kind: "founder",
    },
    {
      company: "Code1",
      role: t("exp.code1.role"),
      period: t("exp.previous"),
      location: t("exp.code1.location"),
      client: "Real Page",
      clientDescription: t("exp.code1.clientDesc"),
      highlights: [
        t("exp.code1.highlight1"),
        t("exp.code1.highlight2"),
        t("exp.code1.highlight3"),
      ],
      flag: "🇺🇸",
      kind: "founder",
    },
    {
      company: "Crably",
      role: t("exp.crably.role"),
      period: t("exp.previous"),
      location: t("exp.crably.location"),
      client: t("exp.crably.client"),
      clientDescription: t("exp.crably.clientDesc"),
      highlights: [
        t("exp.crably.highlight1"),
        t("exp.crably.highlight2"),
        t("exp.crably.highlight3"),
      ],
      flag: "🇩🇰",
      kind: "founder",
    },
    {
      company: "Jaya",
      role: t("exp.jaya.role"),
      period: t("exp.previous"),
      location: t("exp.jaya.location"),
      client: "PWN Health",
      clientDescription: t("exp.jaya.clientDesc"),
      highlights: [
        t("exp.jaya.highlight1"),
        t("exp.jaya.highlight2"),
        t("exp.jaya.highlight3"),
      ],
      flag: "🇺🇸",
      kind: "founder",
    },
  ];

  return (
    <section id="experience" className="py-24 bg-muted/30 border-y border-border/50 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mb-16">
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-accent mb-4">
            {t("exp.label")}
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            {t("exp.title")}{" "}
            <span className="text-gradient-gold">{t("exp.title_highlight")}</span>
          </h2>
          <p className="text-muted-foreground">{t("exp.description")}</p>
        </div>

        <div className="border-t border-border/60">
          {experiences.map((exp) => (
            <article
              key={exp.company}
              className={`grid md:grid-cols-[minmax(0,1fr)_minmax(0,2fr)] gap-6 md:gap-12 py-10 border-b border-border/60 ${
                exp.kind === "company" ? "relative" : ""
              }`}
            >
              {/* Left: company meta */}
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-xl" aria-hidden="true">{exp.flag}</span>
                  <h3 className="text-xl font-bold text-foreground">{exp.company}</h3>
                </div>
                <p className="text-primary text-sm font-medium mb-3">{exp.role}</p>
                <div className="flex flex-wrap gap-x-4 gap-y-1 text-xs text-muted-foreground">
                  <span className="font-mono uppercase tracking-wider">{exp.period}</span>
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5" />
                    {exp.location}
                  </span>
                </div>
                <p className="mt-3 font-mono text-[10px] uppercase tracking-wider text-muted-foreground/70">
                  {exp.kind === "company" ? t("exp.company_delivery") : t("exp.founder_track")}
                </p>
              </div>

              {/* Right: details */}
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-primary/10 rounded-full mb-5">
                  <Building2 className="w-4 h-4 text-primary" />
                  <span className="text-sm font-medium text-foreground">{exp.client}</span>
                  <span className="text-xs text-muted-foreground">· {exp.clientDescription}</span>
                </div>
                <ul className="space-y-2">
                  {exp.highlights.map((highlight, hIndex) => (
                    <li key={hIndex} className="text-sm text-muted-foreground flex items-start gap-3">
                      <span className="text-accent mt-0.5" aria-hidden="true">—</span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
