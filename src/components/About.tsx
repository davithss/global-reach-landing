import { Code, Globe2, Rocket, Users } from "lucide-react";
import speakingImage from "@/assets/diego-speaking.jpeg";
import { useLanguage } from "@/contexts/LanguageContext";

const About = () => {
  const { t } = useLanguage();
  
  const stats = [
    { value: "18+", label: t('stat.years_exp') },
    { value: "8+", label: t('stat.intl_exp') },
    { value: "7+", label: t('stat.countries') },
    { value: "1", label: t('stat.startup') },
  ];

  const highlights = [
    {
      icon: Globe2,
      title: t('highlight.global.title'),
      description: t('highlight.global.desc'),
    },
    {
      icon: Rocket,
      title: t('highlight.startup.title'),
      description: t('highlight.startup.desc'),
    },
    {
      icon: Code,
      title: t('highlight.tech.title'),
      description: t('highlight.tech.desc'),
    },
    {
      icon: Users,
      title: t('highlight.enterprise.title'),
      description: t('highlight.enterprise.desc'),
    },
  ];

  return (
    <section id="about" className="py-24 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-1/2 h-full bg-gradient-to-r from-muted/50 to-transparent -z-10" />
      
      <div className="container mx-auto px-6">
        {/* Stats bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
          {stats.map((stat, index) => (
            <div 
              key={stat.label}
              className="text-center p-6 bg-card-gradient rounded-xl shadow-card border border-border/50 hover:shadow-card-hover transition-shadow duration-300"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <p className="text-3xl md:text-4xl font-bold text-gradient-gold mb-2">{stat.value}</p>
              <p className="text-muted-foreground text-sm">{stat.label}</p>
            </div>
          ))}
        </div>
        
        {/* About content */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <div>
            <span className="text-gold font-medium text-sm uppercase tracking-wider mb-4 block">{t('about.label')}</span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              {t('about.title')} <span className="text-gradient-gold">{t('about.title_highlight')}</span>
            </h2>
            <div className="space-y-4 text-muted-foreground">
              <p>{t('about.p1')}</p>
              <p>{t('about.p2')}</p>
              <p>
                {t('about.p3').split('Thiesse Softwares')[0]}
                <span className="text-foreground font-semibold">Thiesse Softwares</span>
                {t('about.p3').split('Thiesse Softwares')[1]}
              </p>
            </div>
          </div>
          
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-card-hover">
              <img 
                src={speakingImage} 
                alt="Davi Thiesse speaking at a tech event" 
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/60 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <p className="text-primary-foreground font-medium">{t('about.speaker')}</p>
                <p className="text-primary-foreground/70 text-sm">{t('about.speaker_desc')}</p>
              </div>
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-gold/10 rounded-xl -z-10" />
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-navy-medium/20 rounded-xl -z-10" />
          </div>
        </div>
        
        {/* Highlights grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((item) => (
            <div 
              key={item.title}
              className="group p-6 bg-card rounded-xl border border-border/50 hover:border-gold/30 hover:shadow-card-hover transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-lg bg-gold/10 flex items-center justify-center mb-4 group-hover:bg-gold/20 transition-colors">
                <item.icon className="w-6 h-6 text-gold" />
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
