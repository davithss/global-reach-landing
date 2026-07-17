import { Shield, Building, Heart, Home, Landmark } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const clientsData = [
  { name: "Governo de Sergipe", key: "sergipe", icon: Landmark },
  { name: "Cenexel", key: "cenexel", icon: Heart },
  { name: "Real Page", key: "realpage", icon: Home },
  { name: "PWN Health", key: "pwn", icon: Shield },
  { name: "Crably", key: "crably", icon: Building },
];

const Clients = () => {
  const { t } = useLanguage();
  
  return (
    <section id="clients" className="py-24 bg-hero-gradient relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-64 h-64 bg-gold/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gold/5 rounded-full blur-3xl" />
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <span className="text-gold font-medium text-sm uppercase tracking-wider mb-4 block">{t('clients.label')}</span>
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
            {t('clients.title')} <span className="text-gradient-gold">{t('clients.title_highlight')}</span>
          </h2>
          <p className="text-primary-foreground/70 max-w-2xl mx-auto">
            {t('clients.description')}
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {clientsData.map((client) => (
            <div 
              key={client.name}
              className="group p-8 bg-card/10 backdrop-blur-sm rounded-2xl border border-primary-foreground/10 hover:border-gold/30 hover:bg-card/20 transition-all duration-300"
            >
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 rounded-xl bg-gold/20 flex items-center justify-center group-hover:bg-gold/30 transition-colors">
                  <client.icon className="w-7 h-7 text-gold" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="font-bold text-primary-foreground text-lg">{t(`clients.${client.key}.name`)}</h3>
                    <span className="text-xs px-2 py-0.5 bg-gold/20 text-gold rounded-full">{t(`clients.${client.key}.country`)}</span>
                  </div>
                  <p className="text-gold text-sm font-medium mb-2">{t(`clients.${client.key}.sector`)}</p>
                  <p className="text-primary-foreground/60 text-sm">{t(`clients.${client.key}.desc`)}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Trust indicators */}
        <div className="mt-16 flex flex-wrap justify-center gap-8 text-center">
          <div className="px-8">
            <p className="text-3xl font-bold text-gradient-gold mb-2">100%</p>
            <p className="text-primary-foreground/60 text-sm">{t('clients.satisfaction')}</p>
          </div>
          <div className="px-8 border-l border-primary-foreground/10">
            <p className="text-3xl font-bold text-gradient-gold mb-2">12+</p>
            <p className="text-primary-foreground/60 text-sm">{t('clients.projects')}</p>
          </div>
          <div className="px-8 border-l border-primary-foreground/10">
            <p className="text-3xl font-bold text-gradient-gold mb-2">7+</p>
            <p className="text-primary-foreground/60 text-sm">{t('clients.eu_countries')}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Clients;
