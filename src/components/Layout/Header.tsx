import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";
import tribotLogo from "@/assets/tribot-logo.png";

const Header = () => {
  const location = useLocation();
  
  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <header className="w-full bg-white border-b border-gray-100 sticky top-0 z-50">
      <div className="container mx-auto px-6 py-4">
        <nav className="flex items-center">
          <Link to="/" className="flex items-center space-x-3 mr-16">
            <img src={tribotLogo} alt="Tribot" className="h-8 w-8" />
            <span className="text-xl font-bold text-foreground">TRIBOT</span>
          </Link>
          
          <div className="hidden md:flex items-center space-x-12 flex-1">
            <Link 
              to="/" 
              className={`text-sm font-medium tracking-wide transition-colors ${
                isActive('/') ? 'text-blue-600' : 'text-gray-900 hover:text-blue-600'
              }`}
            >
              HOME
            </Link>
            <Link 
              to="/technology" 
              className={`text-sm font-medium tracking-wide transition-colors ${
                isActive('/technology') ? 'text-blue-600' : 'text-gray-900 hover:text-blue-600'
              }`}
            >
              TECHNOLOGY
            </Link>
            <Link 
              to="/applications" 
              className={`text-sm font-medium tracking-wide transition-colors ${
                isActive('/applications') ? 'text-blue-600' : 'text-gray-900 hover:text-blue-600'
              }`}
            >
              APPLICATIONS
            </Link>
            <Link 
              to="/research" 
              className={`text-sm font-medium tracking-wide transition-colors ${
                isActive('/research') ? 'text-blue-600' : 'text-gray-900 hover:text-blue-600'
              }`}
            >
              RESEARCH
            </Link>
            <Link 
              to="/about" 
              className={`text-sm font-medium tracking-wide transition-colors ${
                isActive('/about') ? 'text-blue-600' : 'text-gray-900 hover:text-blue-600'
              }`}
            >
              ABOUT
            </Link>
            <Link 
              to="/contact" 
              className={`text-sm font-medium tracking-wide transition-colors ${
                isActive('/contact') ? 'text-blue-600' : 'text-gray-900 hover:text-blue-600'
              }`}
            >
              CONTACT
            </Link>
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