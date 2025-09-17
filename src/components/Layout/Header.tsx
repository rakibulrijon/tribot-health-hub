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
            <a href="#accelerator" className="text-foreground hover:text-primary transition-colors font-medium">
              ACCELERATOR
            </a>
            <a href="#news" className="text-foreground hover:text-primary transition-colors font-medium">
              NEWS
            </a>
            <a href="#community" className="text-foreground hover:text-primary transition-colors font-medium">
              COMMUNITY
            </a>
            <a href="#amplify-tech" className="text-foreground hover:text-primary transition-colors font-medium">
              AMPLIFY TECH
            </a>
            <a href="#investment" className="text-foreground hover:text-primary transition-colors font-medium">
              INVESTMENT
            </a>
          </div>

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