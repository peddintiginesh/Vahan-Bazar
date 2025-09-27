import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Filter, Heart, Fuel, Gauge, Calendar, MapPin, Star, Eye } from 'lucide-react';
import cb_shine from '@/assets/cb_shine.jpg';
import iQuebe from '@/assets/iQuebe.webp';
import classic from '@/assets/classic.jpg';
import pulsar_160 from '@/assets/pulsar_160.jpg';
import TVS_XL from '@/assets/TVS_XL.jpg';

// Sample vehicle data
const vehicles = [
  {
    id: 1,
    name: 'Honda CB Shine',
    brand: 'Honda',
    price: 125000,
    originalPrice: 140000,
    year: 2023,
    kmDriven: 2500,
    fuelType: 'Petrol',
    engine: '125cc',
    location: 'Tangutur',
    rating: 4.5,
    image: cb_shine,
    isVerified: true,
    isFeatured: true,
    type: 'Motorcycle'
  },
  {
    id: 2,
    name: 'TVS XL',
    brand: 'TVS',
    price: 180000,
    originalPrice: 190000,
    year: 2024,
    kmDriven: 800,
    fuelType: 'Petrol',
    engine: '100CC',
    location: 'Ongole',
    rating: 3.8,
    image: TVS_XL,
    isVerified: true,
    isFeatured: false,
    type: 'Scooter'
  },
  {
    id: 3,
    name: 'Royal Enfield Classic',
    brand: 'Royal Enfield',
    price: 220000,
    originalPrice: 250000,
    year: 2022,
    kmDriven: 5200,
    fuelType: 'Petrol',
    engine: '350cc',
    location: 'Addanki',
    rating: 3.3,
    image: classic,
    isVerified: true,
    isFeatured: true,
    type: 'Motorcycle'
  },
  {
    id: 4,
    name: 'Pulsar',
    brand: 'Bajaj',
    price: 220000,
    originalPrice: 250000,
    year: 2022,
    kmDriven: 5200,
    fuelType: 'Petrol',
    engine: '160cc',
    location: 'Ongole',
    rating: 4.3,
    image: pulsar_160,
    isVerified: true,
    isFeatured: true,
    type: 'Motorcycle'
  },
  {
    id: 5,
    name: 'iQube',
    brand: 'TVS',
    price: 150000,
    originalPrice: 170000,
    year: 2025,
    kmDriven: 200,
    fuelType: 'Electric',
    engine: '110cc',
    location: 'Vallur',
    rating: 4.0,
    image: iQuebe,
    isVerified: true,
    isFeatured: true,
    type: 'Scooter'
  }
];

const VehicleCard = ({ vehicle }: { vehicle: typeof vehicles[0] }) => {
  const [isFavorite, setIsFavorite] = useState(false);

  return (
    <div className="vehicle-card group">
      <div className="relative overflow-hidden rounded-lg mb-4">
        <img
          src={vehicle.image}
          alt={vehicle.name}
          className="w-full h-48 object-cover transition-smooth group-hover:scale-105"
        />
        <div className="absolute top-3 left-3 flex flex-col gap-2">
          {vehicle.isFeatured && (
            <Badge className="bg-accent text-accent-foreground">Featured</Badge>
          )}
          {vehicle.isVerified && (
            <Badge variant="secondary" className="bg-green-500/10 text-green-600 border-green-200">
              Verified
            </Badge>
          )}
        </div>
        <button
          onClick={() => setIsFavorite(!isFavorite)}
          className="absolute top-3 right-3 p-2 bg-background/80 backdrop-blur-sm rounded-full transition-smooth hover:bg-background"
        >
          <Heart
            className={`h-4 w-4 ${isFavorite ? 'fill-red-500 text-red-500' : 'text-muted-foreground'}`}
          />
        </button>
        <div className="absolute bottom-3 left-3 bg-background/90 backdrop-blur-sm px-3 py-1 rounded-lg">
          <div className="flex items-center space-x-2">
            <span className="font-bold text-lg">₹{vehicle.price.toLocaleString()}</span>
            {vehicle.originalPrice > vehicle.price && (
              <span className="text-sm text-muted-foreground line-through">
                ₹{vehicle.originalPrice.toLocaleString()}
              </span>
            )}
          </div>
        </div>
      </div>
      <div className="space-y-3">
        <div className="flex items-start justify-between">
          <div>
            <h3 className="font-semibold text-lg leading-tight">{vehicle.name}</h3>
            <p className="text-sm text-muted-foreground">{vehicle.brand}</p>
          </div>
          <div className="flex items-center space-x-1">
            <Star className="h-4 w-4 fill-accent text-accent" />
            <span className="text-sm font-medium">{vehicle.rating}</span>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-3 text-sm">
          <div className="flex items-center space-x-2">
            <Calendar className="h-4 w-4 text-muted-foreground" />
            <span>{vehicle.year}</span>
          </div>
          <div className="flex items-center space-x-2">
            <Gauge className="h-4 w-4 text-muted-foreground" />
            <span>{vehicle.kmDriven.toLocaleString()} km</span>
          </div>
          <div className="flex items-center space-x-2">
            <Fuel className="h-4 w-4 text-muted-foreground" />
            <span>{vehicle.fuelType}</span>
          </div>
          <div className="flex items-center space-x-2">
            <MapPin className="h-4 w-4 text-muted-foreground" />
            <span>{vehicle.location}</span>
          </div>
        </div>
        <div className="flex gap-2 pt-2">
          <Button variant="outline" size="sm" className="flex-1">
            <Eye className="mr-2 h-4 w-4" /> View Details
          </Button>
          <Button size="sm" className="flex-1 bg-primary text-primary-foreground hover:bg-primary/90">
            Contact Seller
          </Button>
        </div>
      </div>
    </div>
  );
};

const VehicleBrowse = () => {
  const [selectedType, setSelectedType] = useState('all');
  const [selectedBrand, setSelectedBrand] = useState('all');
  const [priceRange, setPriceRange] = useState('all');
  const [location, setLocation] = useState('');

  const filteredVehicles = vehicles.filter(vehicle => {
    if (selectedType !== 'all' && vehicle.type.toLowerCase() !== selectedType) return false;
    if (selectedBrand !== 'all' && vehicle.brand.toLowerCase() !== selectedBrand) return false;

    // Price filter
    if (priceRange === '0-100k' && vehicle.price > 100000) return false;
    if (priceRange === '100k-200k' && (vehicle.price < 100000 || vehicle.price > 200000)) return false;
    if (priceRange === '200k+' && vehicle.price <= 200000) return false;

    // Location filter
    if (location && !vehicle.location.toLowerCase().includes(location.toLowerCase())) return false;

    return true;
  });

  return (
    <section id="browse" className="py-16 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Browse <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Vehicles</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover verified bikes, scooters, and EVs from trusted sellers across India
          </p>
        </div>

        {/* Filters */}
        <div className="bg-card rounded-xl p-6 mb-8 shadow-card">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-semibold flex items-center">
              <Filter className="mr-2 h-5 w-5" />
              Filters
            </h3>
            <Button variant="ghost" size="sm" onClick={() => {
              setSelectedType('all');
              setSelectedBrand('all');
              setPriceRange('all');
              setLocation('');
            }}>Clear All</Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <Select value={selectedType} onValueChange={setSelectedType}>
              <SelectTrigger><SelectValue placeholder="Vehicle Type" /></SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Types</SelectItem>
                <SelectItem value="motorcycle">Motorcycle</SelectItem>
                <SelectItem value="scooter">Scooter</SelectItem>
                <SelectItem value="electric">Electric</SelectItem>
              </SelectContent>
            </Select>

            <Select value={selectedBrand} onValueChange={setSelectedBrand}>
              <SelectTrigger><SelectValue placeholder="Brand" /></SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Brands</SelectItem>
                <SelectItem value="honda">Honda</SelectItem>
                <SelectItem value="ather">Ather</SelectItem>
                <SelectItem value="royal enfield">Royal Enfield</SelectItem>
                <SelectItem value="bajaj">Bajaj</SelectItem>
                <SelectItem value="tvs">TVS</SelectItem>
              </SelectContent>
            </Select>

            <Select value={priceRange} onValueChange={setPriceRange}>
              <SelectTrigger><SelectValue placeholder="Price Range" /></SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Prices</SelectItem>
                <SelectItem value="0-100k">Under ₹1L</SelectItem>
                <SelectItem value="100k-200k">₹1L - ₹2L</SelectItem>
                <SelectItem value="200k+">Above ₹2L</SelectItem>
              </SelectContent>
            </Select>

            <Input
              placeholder="Search location..."
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            />
          </div>
        </div>

        {/* Results Count */}
        <div className="flex items-center justify-between mb-6">
          <p className="text-muted-foreground">
            Showing {filteredVehicles.length} of {vehicles.length} vehicles
          </p>
        </div>

        {/* Vehicle Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredVehicles.map((vehicle) => (
            <VehicleCard key={vehicle.id} vehicle={vehicle} />
          ))}
        </div>

        {/* Load More */}
        <div className="text-center mt-12">
          <Button size="lg" variant="outline" className="hover-glow">
            Load More Vehicles
          </Button>
        </div>
      </div>
    </section>
  );
};

export default VehicleBrowse;
