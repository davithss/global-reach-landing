import { Button } from "@/components/ui/button";
import { Linkedin, MapPin, Calendar, MessageCircle } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const Contact = () => {
  const { t } = useLanguage();

  return (
    <section id="contact" className="py-24 bg-background relative overflow-hidden">
      <div className="absolute inset-0 -z-10" aria-hidden="true">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-primary/8 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-14">
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-accent mb-4">
            {t("contact.label")}
          </p>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            {t("contact.title")}{" "}
            <span className="text-gradient-gold">{t("contact.title_highlight")}</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            {t("contact.description")}
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button variant="hero" size="xl" asChild>
              <a
                href="https://wa.me/5579936181642"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <MessageCircle className="w-5 h-5" />
                {t("contact.whatsapp")}
              </a>
            </Button>
          </div>

          <div className="grid sm:grid-cols-2 gap-px bg-border/50 rounded-2xl overflow-hidden border border-border/50">
            <div className="bg-card p-6 flex items-center gap-4">
              <div className="w-11 h-11 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                <MapPin className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="font-medium text-foreground text-sm">{t("contact.location")}</p>
                <p className="text-muted-foreground text-xs mt-0.5">{t("contact.location_desc")}</p>
              </div>
            </div>
            <div className="bg-card p-6 flex items-center gap-4">
              <div className="w-11 h-11 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                <Calendar className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="font-medium text-foreground text-sm">{t("contact.availability")}</p>
                <p className="text-muted-foreground text-xs mt-0.5">{t("contact.availability_desc")}</p>
              </div>
            </div>
          </div>

          <div className="mt-8 text-center">
            <a
              href="https://linkedin.com/in/thiesse"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              <Linkedin className="w-4 h-4" />
              {t("contact.linkedin")}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
