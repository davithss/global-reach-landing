import logo from "@/assets/thiesse-logo-horizontal.svg";
import { Linkedin, Mail } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const Footer = () => {
  const { t } = useLanguage();
  
  return (
    <footer className="bg-navy-deep py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <img src={logo} alt="Thiesse Softwares" className="h-10 w-auto" />
            <div>
              <p className="font-semibold text-primary-foreground">Thiesse Softwares</p>
              <p className="text-sm text-primary-foreground/60">{t('footer.company')}</p>
            </div>
          </div>
          
          <div className="flex items-center gap-6">
            <a 
              href="https://linkedin.com/in/thiesse" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-primary-foreground/60 hover:text-gold transition-colors"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a 
              href="mailto:davi@thiesse.com.br"
              className="text-primary-foreground/60 hover:text-gold transition-colors"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-primary-foreground/10 text-center">
          <p className="text-sm text-primary-foreground/40">
            © {new Date().getFullYear()} Thiesse Softwares. {t('footer.rights')} | {t('footer.markets')}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
