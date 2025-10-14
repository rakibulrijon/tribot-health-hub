import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import tribotLogo from "@/assets/tribot-logo.png";

const Header = () => {
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
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

  const navigationItems = [
    { path: '/', label: 'HOME' },
    { path: '/technology', label: 'TECHNOLOGY' },
    { path: '/applications', label: 'APPLICATIONS' },
    { path: '/about', label: 'ABOUT' },
    { path: '/contact', label: 'CONTACT' },
  ];

  const getLinkClasses = (path: string) => {
    return `text-sm font-medium tracking-wide transition-colors ${
      isActive(path) 
        ? (isScrolled ? 'text-yellow-300' : 'text-blue-600')
        : (isScrolled ? 'text-gray-100 hover:text-yellow-300' : 'text-gray-900 hover:text-blue-600')
    }`;
  };

  const getMobileLinkClasses = (path: string) => {
    return `block px-4 py-3 text-lg font-medium transition-colors ${
      isActive(path) 
        ? 'text-blue-600 bg-blue-50'
        : 'text-gray-900 hover:text-blue-600 hover:bg-gray-50'
    }`;
  };

  return (
    <header className={`w-full border-b sticky top-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-purple-600 border-purple-500' : 'bg-white border-gray-100'
    }`}>
      <div className="container mx-auto px-4 sm:px-6 py-4">
        <nav className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-3">
            <img src={tribotLogo} alt="Tribot" className="h-8 w-8" />
            <span className={`text-xl font-bold transition-colors ${
              isScrolled ? 'text-white' : 'text-foreground'
            }`}>TRIBOT</span>
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8 lg:space-x-12">
            {navigationItems.map((item) => (
              <Link 
                key={item.path}
                to={item.path} 
                className={getLinkClasses(item.path)}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Mobile Menu */}
          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button 
                className={`md:hidden ${isScrolled ? 'text-white hover:text-yellow-300' : 'text-foreground'}`}
                variant="ghost"
                size="icon"
                aria-label="Open menu"
              >
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-80 bg-white">
              <div className="flex flex-col h-full">
                <div className="flex items-center justify-between p-4 border-b">
                  <div className="flex items-center space-x-3">
                    <img src={tribotLogo} alt="Tribot" className="h-8 w-8" />
                    <span className="text-xl font-bold text-foreground">TRIBOT</span>
                  </div>
                </div>
                
                <nav className="flex-1 py-6">
                  {navigationItems.map((item) => (
                    <Link 
                      key={item.path}
                      to={item.path} 
                      className={getMobileLinkClasses(item.path)}
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {item.label}
                    </Link>
                  ))}
                </nav>
              </div>
            </SheetContent>
          </Sheet>
        </nav>
      </div>
    </header>
  );
};

export default Header;