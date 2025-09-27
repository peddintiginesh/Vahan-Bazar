import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { 
  Search, 
  Menu, 
  X, 
  Car, 
  Calculator, 
  Calendar, 
  MapPin, 
  Bike,
  Phone,
  User,
  LogIn
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { Link, useNavigate } from 'react-router-dom';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  // Define navigation items
  const navItems = [
    { label: 'Browse Vehicles', href: '#browse', icon: Car, type: 'section' },
    { label: 'Compare', href: '/under-development', icon: Search, type: 'page' },
    { label: 'EMI Calculator', href: '#calculator', icon: Calculator, type: 'section' },
    { label: 'Test Ride', href: '#test-ride', icon: Calendar, type: 'section' },
    { label: 'Showrooms', href: '#showrooms', icon: MapPin, type: 'section' },
    { label: 'Sell Bike', href: '#sell', icon: Bike, type: 'section' },
    { label: 'Contact', href: '/under-development', icon: Phone, type: 'page' }
  ];

  const handleNavClick = (item: typeof navItems[0]) => {
    setIsMenuOpen(false); // close mobile menu if open

    if (item.type === 'section') {
      // Smooth scroll to section
      const sectionId = item.href.replace('#', '');
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      } else {
        navigate('/under-development'); // fallback if section missing
      }
    } else {
      // Navigate to page
      navigate(item.href);
    }
  };

  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="gradient-hero h-8 w-8 rounded-lg flex items-center justify-center">
              <Car className="h-5 w-5 text-white" />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Vahan Bazar
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <button
                  key={item.label}
                  onClick={() => handleNavClick(item)}
                  className="flex items-center space-x-1 text-sm font-medium text-muted-foreground hover:text-primary transition-smooth"
                >
                  <Icon className="h-4 w-4" />
                  <span>{item.label}</span>
                </button>
              );
            })}

            {/* Auth buttons */}
            <div className="flex items-center space-x-3 ml-6 pl-6 border-l border-border">
              <Link to="/login">
                <Button variant="ghost" size="sm" className="flex items-center space-x-1">
                  <LogIn className="h-4 w-4" />
                  <span>Login</span>
                </Button>
              </Link>
              <Link to="/register">
                <Button variant="default" size="sm" className="flex items-center space-x-1">
                  <User className="h-4 w-4" />
                  <span>Register</span>
                </Button>
              </Link>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={cn(
            "md:hidden border-t transition-all duration-300 ease-in-out",
            isMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0 overflow-hidden"
          )}
        >
          <div className="py-4 space-y-2">
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <button
                  key={item.label}
                  onClick={() => handleNavClick(item)}
                  className="flex items-center space-x-3 px-4 py-2 text-sm font-medium text-muted-foreground hover:text-primary hover:bg-muted rounded-lg transition-smooth w-full text-left"
                >
                  <Icon className="h-4 w-4" />
                  <span>{item.label}</span>
                </button>
              );
            })}

            {/* Mobile Auth buttons */}
            <div className="border-t border-border pt-4 mt-4 space-y-2 px-4">
              <Link to="/login" onClick={() => setIsMenuOpen(false)}>
                <Button variant="ghost" size="sm" className="w-full flex items-center justify-start space-x-2">
                  <LogIn className="h-4 w-4" />
                  <span>Login</span>
                </Button>
              </Link>
              <Link to="/register" onClick={() => setIsMenuOpen(false)}>
                <Button variant="default" size="sm" className="w-full flex items-center justify-start space-x-2">
                  <User className="h-4 w-4" />
                  <span>Register</span>
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
