import logo from "@/assets/thiesse-logo-dark.svg";
import { Linkedin, Mail, MessageCircle } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-navy-deep border-t border-border/50 py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex items-center gap-3">
            <img src={logo} alt="Thiesse Software" className="h-9 w-auto" />
          </div>

          <nav className="flex flex-wrap justify-center gap-x-8 gap-y-2 text-sm">
            <a href="#solutions" className="text-muted-foreground hover:text-foreground transition-colors">
              {t("nav.solutions")}
            </a>
            <a href="#products" className="text-muted-foreground hover:text-foreground transition-colors">
              {t("nav.products")}
            </a>
            <a href="#experience" className="text-muted-foreground hover:text-foreground transition-colors">
              {t("nav.experience")}
            </a>
            <a href="#about" className="text-muted-foreground hover:text-foreground transition-colors">
              {t("nav.about")}
            </a>
          </nav>

          <div className="flex items-center gap-3">
            <a
              href="https://linkedin.com/in/thiesse"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="w-10 h-10 rounded-lg border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/40 transition-colors"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href="mailto:davi@thiesse.com.br"
              aria-label="E-mail"
              className="w-10 h-10 rounded-lg border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/40 transition-colors"
            >
              <Mail className="w-4 h-4" />
            </a>
            <a
              href="https://wa.me/5579981029218"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="w-10 h-10 rounded-lg border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/40 transition-colors"
            >
              <MessageCircle className="w-4 h-4" />
            </a>
          </div>
        </div>

        <div className="mt-10 pt-8 border-t border-border/50 text-center">
          <p className="font-mono text-xs text-muted-foreground/70">
            © {new Date().getFullYear()} Thiesse Software. {t("footer.rights")} · {t("footer.markets")}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
