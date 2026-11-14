import { useLanguage } from "@/contexts/LanguageContext";

const LanguageToggle = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex items-center gap-1 bg-muted/60 border border-border/60 rounded-full p-1">
      <button
        type="button"
        onClick={() => setLanguage('en')}
        className={`px-3 py-1 h-7 text-xs font-mono font-medium rounded-full transition-all ${
          language === 'en'
            ? 'bg-primary text-primary-foreground'
            : 'text-muted-foreground hover:text-foreground'
        }`}
      >
        EN
      </button>
      <button
        type="button"
        onClick={() => setLanguage('pt')}
        className={`px-3 py-1 h-7 text-xs font-mono font-medium rounded-full transition-all ${
          language === 'pt'
            ? 'bg-primary text-primary-foreground'
            : 'text-muted-foreground hover:text-foreground'
        }`}
      >
        PT
      </button>
    </div>
  );
};

export default LanguageToggle;
