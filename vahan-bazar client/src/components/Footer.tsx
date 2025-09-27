import { 
  Car, 
  Mail, 
  Phone, 
  MapPin, 
  Facebook, 
  Twitter, 
  Instagram, 
  Youtube,
  Clock
} from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-card border-t">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="gradient-hero h-8 w-8 rounded-lg flex items-center justify-center">
                <Car className="h-5 w-5 text-white" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Vahan Bazar
              </span>
            </div>
            <p className="text-muted-foreground text-sm">
              India's most trusted two-wheeler marketplace. Buy and sell bikes, scooters, and EVs with complete confidence.
            </p>
            <div className="flex items-center space-x-2 text-sm">
              <Clock className="h-4 w-4 text-accent" />
              <span>24/7 Customer Support</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#browse" className="text-muted-foreground hover:text-primary transition-smooth">Browse Vehicles</a></li>
              <li><a href="#compare" className="text-muted-foreground hover:text-primary transition-smooth">Compare Bikes</a></li>
              <li><a href="#calculator" className="text-muted-foreground hover:text-primary transition-smooth">EMI Calculator</a></li>
              <li><a href="#test-ride" className="text-muted-foreground hover:text-primary transition-smooth">Book Test Ride</a></li>
              <li><a href="#sell" className="text-muted-foreground hover:text-primary transition-smooth">Sell Your Bike</a></li>
              <li><a href="#showrooms" className="text-muted-foreground hover:text-primary transition-smooth">Find Showrooms</a></li>
            </ul>
          </div>

          {/* Popular Brands */}
          <div>
            <h3 className="font-semibold mb-4">Popular Brands</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-smooth">Honda Bikes</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-smooth">Hero Motorcycles</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-smooth">Bajaj Bikes</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-smooth">Royal Enfield</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-smooth">Electric Scooters</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-smooth">Ather Energy</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold mb-4">Get in Touch</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <Phone className="h-4 w-4 text-primary mt-1" />
                <div className="text-sm">
                  <p className="font-medium">Call Us</p>
                  <p className="text-muted-foreground">+91 8309601104</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Mail className="h-4 w-4 text-primary mt-1" />
                <div className="text-sm">
                  <p className="font-medium">Email</p>
                  <p className="text-muted-foreground">gineshpeddinti353@gmail.com</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="h-4 w-4 text-primary mt-1" />
                <div className="text-sm">
                  <p className="font-medium">Office</p>
                  <p className="text-muted-foreground">Satyanarayanapuram 3-53, Ongole</p>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div className="mt-6">
              <p className="font-medium mb-3 text-sm">Follow Us</p>
              <div className="flex space-x-3">
                <a href="#" className="p-2 bg-muted rounded-lg hover:bg-primary hover:text-primary-foreground transition-smooth"><Facebook className="h-4 w-4" /></a>
                <a href="#" className="p-2 bg-muted rounded-lg hover:bg-primary hover:text-primary-foreground transition-smooth"><Twitter className="h-4 w-4" /></a>
                <a href="#" className="p-2 bg-muted rounded-lg hover:bg-primary hover:text-primary-foreground transition-smooth"><Instagram className="h-4 w-4" /></a>
                <a href="#" className="p-2 bg-muted rounded-lg hover:bg-primary hover:text-primary-foreground transition-smooth"><Youtube className="h-4 w-4" /></a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t mt-12 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <div className="text-sm text-muted-foreground">
              © 2024 Vahan Bazar. All rights reserved.
            </div>
            
            <div className="flex items-center space-x-6 text-sm">
              <a href="#" className="text-muted-foreground hover:text-primary transition-smooth">Privacy Policy</a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-smooth">Terms of Service</a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-smooth">Support</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
