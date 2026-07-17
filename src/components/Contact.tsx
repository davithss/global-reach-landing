import { Button } from "@/components/ui/button";
import { Mail, Linkedin, MapPin, Calendar } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const Contact = () => {
  const { t } = useLanguage();
  
  return (
    <section id="contact" className="py-24 bg-background relative">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-gold font-medium text-sm uppercase tracking-wider mb-4 block">{t('contact.label')}</span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              {t('contact.title')} <span className="text-gradient-gold">{t('contact.title_highlight')}</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              {t('contact.description')}
            </p>
          </div>
          
          <div className="bg-card-gradient rounded-3xl shadow-card-hover border border-border/50 p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-12">
              {/* Contact info */}
              <div>
                <h3 className="font-semibold text-foreground text-xl mb-6">{t('contact.info')}</h3>
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-lg bg-gold/10 flex items-center justify-center">
                      <MapPin className="w-5 h-5 text-gold" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground">{t('contact.location')}</p>
                      <p className="text-muted-foreground text-sm">{t('contact.location_desc')}</p>
                    </div>
                  </div>
                  
                </div>
                
                <div className="mt-8 pt-8 border-t border-border">
                  <p className="text-sm text-muted-foreground mb-4">{t('contact.connect')}</p>
                  <div className="flex gap-4">
                    <a 
                      href="https://linkedin.com/in/thiesse" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="w-12 h-12 rounded-lg bg-gold/10 flex items-center justify-center hover:bg-gold/20 transition-colors"
                    >
                      <Linkedin className="w-5 h-5 text-gold" />
                    </a>
                    <a 
                      href="mailto:davi@thiesse.com.br" 
                      className="w-12 h-12 rounded-lg bg-gold/10 flex items-center justify-center hover:bg-gold/20 transition-colors"
                    >
                      <Mail className="w-5 h-5 text-gold" />
                    </a>
                  </div>
                </div>
              </div>
              
              {/* CTA */}
              <div className="flex flex-col justify-center">
                <div className="bg-navy-deep/5 rounded-2xl p-8 border border-navy-deep/10">
                  <h4 className="font-semibold text-foreground text-lg mb-3">{t('contact.cta_title')}</h4>
                  <p className="text-muted-foreground text-sm mb-6">
                    {t('contact.cta_desc')}
                  </p>
                  <div className="space-y-3">
                    <Button variant="gold" size="lg" className="w-full" asChild>
                      <a href="https://linkedin.com/in/thiesse" target="_blank" rel="noopener noreferrer">
                        <Linkedin className="w-5 h-5 mr-2" />
                        {t('contact.linkedin')}
                      </a>
                    </Button>
                    <Button variant="outline" size="lg" className="w-full" asChild>
                      <a href="mailto:davi@thiesse.com.br">
                        <Mail className="w-5 h-5 mr-2" />
                        {t('contact.email')}
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
