import { Button } from "@/components/ui/button";
import tribotLogo from "@/assets/tribot-logo.png";

const Header = () => {
  return (
    <header className="w-full bg-background/95 backdrop-blur-sm border-b border-border sticky top-0 z-50">
      <div className="container mx-auto px-6 py-4">
        <nav className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <img src={tribotLogo} alt="Tribot" className="h-8 w-8" />
            <span className="text-xl font-bold text-foreground">Tribot</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-foreground hover:text-primary transition-colors font-medium">
              HOME
            </a>
            <a href="#technology" className="text-foreground hover:text-primary transition-colors font-medium">
              TECHNOLOGY
            </a>
            <a href="#applications" className="text-foreground hover:text-primary transition-colors font-medium">
              APPLICATIONS
            </a>
            <a href="#research" className="text-foreground hover:text-primary transition-colors font-medium">
              RESEARCH
            </a>
            <a href="#about" className="text-foreground hover:text-primary transition-colors font-medium">
              ABOUT
            </a>
            <a href="#contact" className="text-foreground hover:text-primary transition-colors font-medium">
              CONTACT
            </a>
          </div>

          <Button variant="hero" className="hidden md:flex">
            TRIBOT PROTOTYPE
          </Button>

          <Button 
            className="md:hidden"
            variant="ghost"
            size="icon"
          >
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </Button>
        </nav>
      </div>
    </header>
  );
};

export default Header;