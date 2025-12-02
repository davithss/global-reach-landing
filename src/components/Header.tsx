import { Button } from "@/components/ui/button";
import logo from "@/assets/thiesse-logo.png";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
      <nav className="container mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#" className="flex items-center gap-3">
          <img src={logo} alt="Thiesse Softwares" className="h-10 w-auto" />
          <span className="font-outfit font-semibold text-lg text-foreground hidden sm:inline">
            Thiesse Softwares
          </span>
        </a>
        
        <div className="hidden md:flex items-center gap-8">
          <a href="#about" className="text-muted-foreground hover:text-foreground transition-colors">
            About
          </a>
          <a href="#experience" className="text-muted-foreground hover:text-foreground transition-colors">
            Experience
          </a>
          <a href="#clients" className="text-muted-foreground hover:text-foreground transition-colors">
            Clients
          </a>
        </div>
        
        <Button variant="gold" size="default" asChild>
          <a href="#contact">Get in Touch</a>
        </Button>
      </nav>
    </header>
  );
};

export default Header;
