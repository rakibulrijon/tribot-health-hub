import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import tribotLogo from "@/assets/tribot-logo.png";

const Header = () => {
  return (
    <header className="w-full bg-background/95 backdrop-blur-sm border-b border-border sticky top-0 z-50">
      <div className="container mx-auto px-6 py-4">
        <nav className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-3">
            <img src={tribotLogo} alt="Tribot" className="h-8 w-8" />
            <span className="text-xl font-bold text-foreground">Tribot</span>
          </Link>
          
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-foreground hover:text-primary transition-colors font-medium">
              HOME
            </Link>
            <Link to="/technology" className="text-foreground hover:text-primary transition-colors font-medium">
              TECHNOLOGY
            </Link>
            <Link to="/applications" className="text-foreground hover:text-primary transition-colors font-medium">
              APPLICATIONS
            </Link>
            <Link to="/research" className="text-foreground hover:text-primary transition-colors font-medium">
              RESEARCH
            </Link>
            <Link to="/about" className="text-foreground hover:text-primary transition-colors font-medium">
              ABOUT
            </Link>
            <Link to="/contact" className="text-foreground hover:text-primary transition-colors font-medium">
              CONTACT
            </Link>
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