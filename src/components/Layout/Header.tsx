import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import tribotLogo from "@/assets/tribot-logo.png";

const Header = () => {
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <header className={`w-full border-b sticky top-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-purple-600 border-purple-500' : 'bg-white border-gray-100'
    }`}>
      <div className="container mx-auto px-6 py-4">
        <nav className="flex items-center">
          <Link to="/" className="flex items-center space-x-3 mr-16">
            <img src={tribotLogo} alt="Tribot" className="h-8 w-8" />
            <span className={`text-xl font-bold transition-colors ${
              isScrolled ? 'text-white' : 'text-foreground'
            }`}>TRIBOT</span>
          </Link>
          
          <div className="hidden md:flex items-center space-x-12 flex-1">
            <Link 
              to="/" 
              className={`text-sm font-medium tracking-wide transition-colors ${
                isActive('/') 
                  ? (isScrolled ? 'text-yellow-300' : 'text-blue-600')
                  : (isScrolled ? 'text-gray-100 hover:text-yellow-300' : 'text-gray-900 hover:text-blue-600')
              }`}
            >
              HOME
            </Link>
            <Link 
              to="/technology" 
              className={`text-sm font-medium tracking-wide transition-colors ${
                isActive('/technology') 
                  ? (isScrolled ? 'text-yellow-300' : 'text-blue-600')
                  : (isScrolled ? 'text-gray-100 hover:text-yellow-300' : 'text-gray-900 hover:text-blue-600')
              }`}
            >
              TECHNOLOGY
            </Link>
            <Link 
              to="/applications" 
              className={`text-sm font-medium tracking-wide transition-colors ${
                isActive('/applications') 
                  ? (isScrolled ? 'text-yellow-300' : 'text-blue-600')
                  : (isScrolled ? 'text-gray-100 hover:text-yellow-300' : 'text-gray-900 hover:text-blue-600')
              }`}
            >
              APPLICATIONS
            </Link>
            <Link 
              to="/research" 
              className={`text-sm font-medium tracking-wide transition-colors ${
                isActive('/research') 
                  ? (isScrolled ? 'text-yellow-300' : 'text-blue-600')
                  : (isScrolled ? 'text-gray-100 hover:text-yellow-300' : 'text-gray-900 hover:text-blue-600')
              }`}
            >
              RESEARCH
            </Link>
            <Link 
              to="/about" 
              className={`text-sm font-medium tracking-wide transition-colors ${
                isActive('/about') 
                  ? (isScrolled ? 'text-yellow-300' : 'text-blue-600')
                  : (isScrolled ? 'text-gray-100 hover:text-yellow-300' : 'text-gray-900 hover:text-blue-600')
              }`}
            >
              ABOUT
            </Link>
            <Link 
              to="/contact" 
              className={`text-sm font-medium tracking-wide transition-colors ${
                isActive('/contact') 
                  ? (isScrolled ? 'text-yellow-300' : 'text-blue-600')
                  : (isScrolled ? 'text-gray-100 hover:text-yellow-300' : 'text-gray-900 hover:text-blue-600')
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