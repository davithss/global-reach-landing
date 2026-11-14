import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import logo from "@/assets/thiesse-logo-dark.svg";
import LanguageToggle from "./LanguageToggle";
import { useLanguage } from "@/contexts/LanguageContext";

const Header = () => {
  const { t } = useLanguage();
  const [open, setOpen] = useState(false);

  const links = [
    { href: "#solutions", label: t("nav.solutions") },
    { href: "#products", label: t("nav.products") },
    { href: "#experience", label: t("nav.experience") },
    { href: "#about", label: t("nav.about") },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/60">
      <nav className="container mx-auto px-6 py-3 flex items-center justify-between">
        <a href="#" className="flex items-center gap-3" aria-label="Thiesse Software">
          <img src={logo} alt="Thiesse Software" className="h-10 w-auto object-contain" />
        </a>

        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <LanguageToggle />
          <Button variant="gold" size="default" asChild className="hidden md:inline-flex">
            <a href="#contact">{t("nav.contact")}</a>
          </Button>
          <button
            type="button"
            onClick={() => setOpen(!open)}
            aria-label={t("nav.menu")}
            className="md:hidden w-10 h-10 flex items-center justify-center rounded-lg border border-border text-foreground"
          >
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="md:hidden border-t border-border/60 bg-background/95 backdrop-blur-md">
          <div className="container mx-auto px-6 py-4 flex flex-col gap-1">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="py-3 text-muted-foreground hover:text-foreground transition-colors border-b border-border/40 last:border-0"
              >
                {link.label}
              </a>
            ))}
            <Button variant="gold" size="lg" asChild className="mt-3">
              <a href="#contact" onClick={() => setOpen(false)}>
                {t("nav.contact")}
              </a>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
