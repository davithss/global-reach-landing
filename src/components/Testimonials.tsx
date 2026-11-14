import { useState } from "react";
import { Quote, Linkedin } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { cn } from "@/lib/utils";

const testimonialData = [
  { key: "brett", name: "Brett Burbidge", initials: "BB" },
  { key: "marcelo", name: "Marcelo Cajueiro", initials: "MC" },
  { key: "ernie", name: "Ernie Golen", initials: "EG" },
];

const Testimonials = () => {
  const { t } = useLanguage();
  const [open, setOpen] = useState<Record<string, boolean>>({});

  return (
    <section id="testimonials" className="py-24 bg-muted/30 border-y border-border/50 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-2xl mb-16">
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-accent mb-4">
            {t("testimonials.label")}
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            {t("testimonials.title")}{" "}
            <span className="text-gradient-gold">{t("testimonials.title_highlight")}</span>
          </h2>
          <p className="text-muted-foreground">{t("testimonials.description")}</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 items-start">
          {testimonialData.map((item) => {
            const isOpen = !!open[item.key];
            return (
              <figure
                key={item.key}
                className="flex flex-col bg-card-gradient rounded-2xl border border-border/70 shadow-card hover:shadow-card-hover hover:border-primary/30 transition-all duration-300 p-8"
              >
                <Quote className="w-8 h-8 text-primary/40 mb-5 shrink-0" aria-hidden="true" />
                <blockquote
                  className={cn(
                    "text-sm leading-relaxed text-muted-foreground whitespace-pre-line",
                    !isOpen && "line-clamp-6"
                  )}
                >
                  {t(`testimonials.${item.key}.text`)}
                </blockquote>

                <button
                  type="button"
                  onClick={() => setOpen((prev) => ({ ...prev, [item.key]: !prev[item.key] }))}
                  className="mt-4 self-start text-primary text-sm font-medium hover:text-accent transition-colors"
                >
                  {isOpen ? t("testimonials.read_less") : t("testimonials.read_more")}
                </button>

                <figcaption className="mt-auto pt-6 border-t border-border/50">
                  <div className="flex items-center gap-3">
                    <div className="w-11 h-11 rounded-full bg-primary/15 flex items-center justify-center font-bold text-primary shrink-0">
                      {item.initials}
                    </div>
                    <div>
                      <p className="font-bold text-foreground leading-tight">{item.name}</p>
                      <p className="text-xs text-muted-foreground mt-1">
                        {t(`testimonials.${item.key}.role`)}
                      </p>
                    </div>
                  </div>
                  <p className="text-xs text-muted-foreground/70 mt-3">
                    {t(`testimonials.${item.key}.relation`)}
                  </p>
                </figcaption>
              </figure>
            );
          })}
        </div>

        <div className="mt-12 text-center">
          <a
            href="https://www.linkedin.com/in/thiesse"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors bg-muted/50 px-6 py-3 rounded-full border border-border/50"
          >
            <Linkedin className="w-4 h-4 text-primary" />
            {t("testimonials.source")}
          </a>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
