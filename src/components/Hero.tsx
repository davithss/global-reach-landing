import { Button } from "@/components/ui/button";
import { MapPin, Globe, Linkedin } from "lucide-react";
import heroImage from "@/assets/davi-hero.jpeg";
import { useLanguage } from "@/contexts/LanguageContext";

const Hero = () => {
  const { t } = useLanguage();
  
  return (
    <section className="relative min-h-screen bg-hero-gradient overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-10 w-72 h-72 bg-gold/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-gold/5 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-navy-light/10 rounded-full blur-3xl" />
      </div>
      
      <div className="container mx-auto px-6 pt-32 pb-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[calc(100vh-8rem)]">
          {/* Content */}
          <div className="text-center lg:text-left">
            <div className="animate-fade-up">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold/10 border border-gold/30 text-gold text-sm font-medium mb-6">
                <Globe className="w-4 h-4" />
                {t('hero.badge')}
              </span>
            </div>
            
            <h1 className="animate-fade-up-delay-1 text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight mb-6">
              Thiesse <span className="text-gradient-gold">Software</span>
            </h1>
            
            <p className="animate-fade-up-delay-2 text-xl md:text-2xl text-primary-foreground/80 mb-4 font-light">
              {t('hero.subtitle')}
            </p>
            
            <p className="animate-fade-up-delay-2 text-lg text-primary-foreground/60 mb-8 max-w-xl mx-auto lg:mx-0">
              {t('hero.description')}
            </p>
            
            <div className="animate-fade-up-delay-3 flex flex-wrap gap-4 justify-center lg:justify-start mb-10">
              <div className="flex items-center gap-2 text-primary-foreground/70">
                <MapPin className="w-5 h-5 text-gold" />
                <span>{t('hero.markets')}</span>
              </div>
              <div className="flex items-center gap-2 text-primary-foreground/70">
                <span className="text-gold font-semibold">18+</span>
                <span>{t('hero.years_total')}</span>
              </div>
              <div className="flex items-center gap-2 text-primary-foreground/70">
                <span className="text-gold font-semibold">8+</span>
                <span>{t('hero.years_intl')}</span>
              </div>
            </div>
            
            <div className="animate-fade-up-delay-4 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button variant="hero" size="xl" asChild>
                <a href="#contact">{t('hero.cta')}</a>
              </Button>
              <Button variant="heroOutline" size="xl" asChild>
                <a href="https://linkedin.com/in/thiesse" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                  <Linkedin className="w-5 h-5" />
                  LinkedIn
                </a>
              </Button>
            </div>
          </div>
          
          {/* Image */}
          <div className="relative flex justify-center lg:justify-end animate-scale-in">
            <div className="relative">
              {/* Decorative ring */}
              <div className="absolute -inset-4 rounded-full border-2 border-gold/20 animate-float" />
              <div className="absolute -inset-8 rounded-full border border-gold/10" />
              
              {/* Main image */}
              <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-gold/30 shadow-2xl">
                <img
                  src={heroImage}
                  alt="Thiesse Software - founder and team"
                  className="w-full h-full object-cover object-top"
                />
              </div>

              {/* Floating badges */}
              <div className="absolute -right-4 top-1/4 bg-card px-4 py-2 rounded-lg shadow-card border border-border animate-float">
                <p className="text-sm font-semibold text-foreground">🇺🇸 USA</p>
              </div>
              <div className="absolute -left-4 bottom-1/4 bg-card px-4 py-2 rounded-lg shadow-card border border-border animate-float" style={{ animationDelay: '0.5s' }}>
                <p className="text-sm font-semibold text-foreground">🇧🇷 Brasil / 🇪🇺 Europe</p>
              </div>
              <div className="absolute right-8 -bottom-2 bg-gold px-4 py-2 rounded-lg shadow-gold-glow animate-float" style={{ animationDelay: '1s' }}>
                <p className="text-sm font-semibold text-primary">Since 2017</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default Hero;
