import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { 
  Search, 
  Star, 
  TrendingUp, 
  Shield, 
  Clock,
  CheckCircle,
  Car,
  Zap
} from 'lucide-react';
import heroImage from '@/assets/hero-bikes.jpg';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/60" />
      </div>

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          {/* Hero Content */}
          <div className="space-y-6 animate-fade-in">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
                Buy and Sell{' '}
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  Bikes
                </span>{' '}
                in Seconds
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-2xl">
                India's most trusted two-wheeler marketplace. Find your perfect bike, 
                scooter, or EV with verified sellers and instant deals.
              </p>
            </div>

            {/* Search Bar */}
            <div className="flex flex-col sm:flex-row gap-4 p-2 bg-card rounded-2xl shadow-elegant border">
              <div className="flex-1 flex items-center space-x-2 px-4">
                <Search className="h-5 w-5 text-muted-foreground" />
                <Input 
                  placeholder="Search bikes, scooters, or brand..."
                  className="border-0 bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0"
                />
              </div>
              <Button variant="hero" size="lg">
                <Search className="mr-2 h-4 w-4" />
                Find Vehicles
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap items-center gap-6 pt-4">
              <div className="flex items-center space-x-2">
                
              </div>
              
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <CheckCircle className="h-4 w-4 text-green-500" />
                <span>Verified Sellers</span>
              </div>
              
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <Shield className="h-4 w-4 text-blue-500" />
                <span>Secure Transactions</span>
              </div>
            </div>
          </div>
        </div>

        {/* Floating Stats */}
        <div className="absolute bottom-10 right-10 hidden lg:flex flex-col space-y-4">
          <div className="feature-card text-center animate-slide-up" style={{ animationDelay: '0.4s' }}>
            <Clock className="h-6 w-6 text-accent mx-auto mb-2" />
            <p className="font-semibold">24/7</p>
            <p className="text-sm text-muted-foreground">Support</p>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-muted-foreground rounded-full flex justify-center">
          <div className="w-1 h-3 bg-muted-foreground rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;