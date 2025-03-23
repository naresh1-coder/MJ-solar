import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { siteConfig } from '@/lib/constants';
import { ThemeToggle } from '@/components/ThemeToggle';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import logo from "../assets/logo1.jpg";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [serviceMenuOpen, setServiceMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when navigating
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const handleServiceClick = () => {
    setServiceMenuOpen(!serviceMenuOpen);
  };

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out',
        isScrolled
          ? 'py-3 glass-panel'
          : 'py-5 bg-transparent'
      )}
    >
      <div className="container max-w-7xl mx-auto px-4 flex items-center justify-between">
        {/* Logo */}
        <Link 
          to="/" 
          className="flex items-center space-x-2 font-bold text-xl"
        >
          <div className="flex items-center justify-center w-20 h-10 rounded-[5px]">
            <img src={logo} alt=""/>
          </div>
          <span className="text-solar-red">MJ <span className="text-foreground">SOLAR</span></span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {siteConfig.navigation.map((item) => (
            <div key={item.href}>
              {item.title === 'Services' ? (
                <div className="relative">
                  <button
                    onClick={handleServiceClick}
                    className={cn(
                      'text-base font-medium transition-colors duration-300 link-underline',
                      location.pathname === item.href ? 'text-solar-red' : 'text-foreground hover:text-solar-red'
                    )}
                  >
                    {item.title}
                  </button>
                  {serviceMenuOpen && (
                    <div className="absolute top-full left-0 mt-2 w-48 bg-white shadow-lg rounded-lg py-2">
                      <Link to="/services/grid" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">On Grid System</Link>
                      <Link to="/services/off-grid" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Off Grid System</Link>
                      <Link to="/services/hybrid" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Hybrid System</Link>
                      <Link to="/services/solar-pumps" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Solar Pump</Link>
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  to={item.href}
                  className={cn(
                    'text-base font-medium transition-colors duration-300 link-underline',
                    location.pathname === item.href ? 'text-solar-red' : 'text-foreground hover:text-solar-red'
                  )}
                >
                  {item.title}
                </Link>
              )}
            </div>
          ))}
          <ThemeToggle />
          <Link 
            to="/contact" 
            className="solar-button-primary animate-pulse"
          >
            Get Free Quote
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <div className="flex items-center space-x-4 md:hidden">
          <ThemeToggle />
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-foreground focus:outline-none"
            aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-0 top-16 bg-background/95 backdrop-blur-md z-40 animate-fade-in">
          <nav className="flex flex-col items-center justify-center h-full gap-8">
            {siteConfig.navigation.map((item) => (
              <div key={item.href}>
                {item.title === 'Services' ? (
                  <div className="flex flex-col items-center">
                    <button
                      onClick={handleServiceClick}
                      className={cn(
                        'text-xl font-medium transition-colors duration-300',
                        location.pathname === item.href ? 'text-solar-red' : 'text-foreground hover:text-solar-red'
                      )}
                    >
                      {item.title}
                    </button>
                    {serviceMenuOpen && (
                      <div className="mt-2 flex flex-col items-center">
                        <Link to="/services/grid" className="text-lg text-gray-700 hover:text-solar-red">On Grid System</Link>
                        <Link to="/services/off-grid" className="text-lg text-gray-700 hover:text-solar-red">Off Grid System</Link>
                        <Link to="/services/hybrid" className="text-lg text-gray-700 hover:text-solar-red">Hybrid System</Link>
                        <Link to="/services/solar-pumps" className="text-lg text-gray-700 hover:text-solar-red">Solar Pump</Link>
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    to={item.href}
                    className={cn(
                      'text-xl font-medium transition-colors duration-300',
                      location.pathname === item.href ? 'text-solar-red' : 'text-foreground hover:text-solar-red'
                    )}
                  >
                    {item.title}
                  </Link>
                )}
              </div>
            ))}
            <Link 
              to="/contact" 
              className="solar-button-primary mt-4"
            >
              Get Free Quote
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}