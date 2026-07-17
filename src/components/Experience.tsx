import { Building2, MapPin, Calendar } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const Experience = () => {
  const { t } = useLanguage();
  
  const experiences = [
    {
      company: "Thiesse Software",
      role: t('exp.thiesse.role'),
      period: t('exp.current'),
      location: t('exp.thiesse.location'),
      client: t('exp.thiesse.client'),
      clientDescription: t('exp.thiesse.clientDesc'),
      highlights: [
        t('exp.thiesse.highlight1'),
        t('exp.thiesse.highlight2'),
        t('exp.thiesse.highlight3'),
      ],
      flag: "🇧🇷",
    },
    {
      company: "Nortal / Nearsure",
      role: t('exp.nortal.role'),
      period: t('exp.current'),
      location: t('exp.nortal.location'),
      client: "Cenexel",
      clientDescription: t('exp.nortal.clientDesc'),
      highlights: [
        t('exp.nortal.highlight1'),
        t('exp.nortal.highlight2'),
        t('exp.nortal.highlight3'),
      ],
      flag: "🇺🇸",
    },
    {
      company: "Code1",
      role: t('exp.code1.role'),
      period: t('exp.previous'),
      location: t('exp.code1.location'),
      client: "Real Page",
      clientDescription: t('exp.code1.clientDesc'),
      highlights: [
        t('exp.code1.highlight1'),
        t('exp.code1.highlight2'),
        t('exp.code1.highlight3'),
      ],
      flag: "🇺🇸",
    },
    {
      company: "Crably",
      role: t('exp.crably.role'),
      period: t('exp.previous'),
      location: t('exp.crably.location'),
      client: t('exp.crably.client'),
      clientDescription: t('exp.crably.clientDesc'),
      highlights: [
        t('exp.crably.highlight1'),
        t('exp.crably.highlight2'),
        t('exp.crably.highlight3'),
      ],
      flag: "🇩🇰",
    },
    {
      company: "Jaya",
      role: t('exp.jaya.role'),
      period: t('exp.previous'),
      location: t('exp.jaya.location'),
      client: "PWN Health",
      clientDescription: t('exp.jaya.clientDesc'),
      highlights: [
        t('exp.jaya.highlight1'),
        t('exp.jaya.highlight2'),
        t('exp.jaya.highlight3'),
      ],
      flag: "🇺🇸",
    }
  ];

  return (
    <section id="experience" className="py-24 bg-muted/30 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-gold font-medium text-sm uppercase tracking-wider mb-4 block">{t('exp.label')}</span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            {t('exp.title')} <span className="text-gradient-gold">{t('exp.title_highlight')}</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {t('exp.description')}
          </p>
        </div>
        
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-gold via-gold/50 to-transparent" />
          
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div 
                key={exp.company}
                className={`relative flex flex-col md:flex-row gap-8 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-8 md:left-1/2 w-4 h-4 -translate-x-1/2 bg-gold rounded-full border-4 border-background shadow-gold-glow z-10" />
                
                {/* Content */}
                <div className={`flex-1 ${index % 2 === 0 ? 'md:pr-16 md:text-right' : 'md:pl-16'} pl-16 md:pl-0`}>
                  <div className={`bg-card p-6 md:p-8 rounded-2xl shadow-card border border-border/50 hover:shadow-card-hover hover:border-gold/20 transition-all duration-300 ${
                    index % 2 === 0 ? 'md:ml-auto' : ''
                  } max-w-xl`}>
                    <div className={`flex items-center gap-3 mb-4 ${index % 2 === 0 ? 'md:justify-end' : ''}`}>
                      <span className="text-2xl">{exp.flag}</span>
                      <div>
                        <h3 className="font-bold text-foreground text-lg">{exp.company}</h3>
                        <p className="text-gold font-medium">{exp.role}</p>
                      </div>
                    </div>
                    
                    <div className={`flex flex-wrap gap-4 text-sm text-muted-foreground mb-4 ${index % 2 === 0 ? 'md:justify-end' : ''}`}>
                      <span className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {exp.period}
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        {exp.location}
                      </span>
                    </div>
                    
                    <div className={`inline-flex items-center gap-2 px-3 py-1.5 bg-gold/10 rounded-full mb-4`}>
                      <Building2 className="w-4 h-4 text-gold" />
                      <span className="text-sm font-medium text-foreground">{exp.client}</span>
                      <span className="text-xs text-muted-foreground">• {exp.clientDescription}</span>
                    </div>
                    
                    <ul className={`space-y-2 ${index % 2 === 0 ? 'md:text-right' : ''}`}>
                      {exp.highlights.map((highlight, hIndex) => (
                        <li key={hIndex} className="text-sm text-muted-foreground flex items-start gap-2">
                          {index % 2 !== 0 && <span className="text-gold mt-1">•</span>}
                          <span className="flex-1">{highlight}</span>
                          {index % 2 === 0 && <span className="text-gold mt-1">•</span>}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                
                {/* Spacer for opposite side */}
                <div className="hidden md:block flex-1" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
