import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";

const LanguageToggle = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex items-center gap-1 bg-muted/50 rounded-full p-1">
      <Button
        variant="ghost"
        size="sm"
        onClick={() => setLanguage('en')}
        className={`px-3 py-1 h-7 text-xs font-medium rounded-full transition-all ${
          language === 'en' 
            ? 'bg-gold text-primary hover:bg-gold/90' 
            : 'text-muted-foreground hover:text-foreground hover:bg-transparent'
        }`}
      >
        EN
      </Button>
      <Button
        variant="ghost"
        size="sm"
        onClick={() => setLanguage('pt')}
        className={`px-3 py-1 h-7 text-xs font-medium rounded-full transition-all ${
          language === 'pt' 
            ? 'bg-gold text-primary hover:bg-gold/90' 
            : 'text-muted-foreground hover:text-foreground hover:bg-transparent'
        }`}
      >
        PT
      </Button>
    </div>
  );
};

export default LanguageToggle;
