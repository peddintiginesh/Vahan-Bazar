import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { 
  Calendar, 
  Clock, 
  MapPin, 
  User, 
  Phone, 
  Mail,
  CheckCircle,
  Star
} from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import bikeRed from '@/assets/cb_shine.jpg';
import classic from '@/assets/classic.jpg';
import TVS from '@/assets/TVS_XL.jpg';

const TestRideBooking = () => {
  const [selectedVehicle, setSelectedVehicle] = useState('honda-cb-shine');
  const [selectedShowroom, setSelectedShowroom] = useState('');
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  
  const vehicles = [
    { id: 'honda-cb-shine', name: 'Honda CB Shine', image: bikeRed, price: '₹1.25L' },
    { id: 'ather-450x', name: 'TVS_XL', image: TVS, price: '₹1.8L' },
    { id: 're-classic', name: 'Royal Enfield Classic', image: classic, price: '₹2.2L' }
  ];

  const showrooms = [
    { 
      id: 'express-honda-ongole', 
      name: 'Express Honda (Cars & Bikes)', 
      location: 'Throvagunta Center, Ongole, Andhra Pradesh', 
      rating: 4.7,
      phone: '+91 7680909731'
    },
    { 
      id: 'honda-bigwing-ongole', 
      name: 'Honda BigWing - Ongole South', 
      location: 'Lawyerpet Extension, Near BPCL Petrol Bunk, Ongole', 
      rating: 4.8,
      phone: '+91 9550745510'
    },
    { 
      id: 'pioneer-honda-ongole', 
      name: 'Pioneer Honda', 
      location: 'Opposite Police Parade Grounds, By-Pass Road, Ongole', 
      rating: 4.6,
      phone: '+91 9550225795'
    },
    { 
      id: 'pavan-honda-kanigiri', 
      name: 'Pavan Honda', 
      location: 'Opposite ICICI Bank, O. V. Road, Kanigiri, Ongole', 
      rating: 4.5,
      phone: '+91 7729912829'
    }
  ];

  const timeSlots = [
    '10:00 AM', '11:00 AM', '12:00 PM', '2:00 PM', '3:00 PM', '4:00 PM', '5:00 PM'
  ];

  return (
    <section id="test-ride" className="py-16 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <Calendar className="inline-block mr-3 h-8 w-8" />
              Book Test <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Ride</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Experience your dream bike before you buy. Book a test ride at your nearest showroom.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Booking Form */}
            <div className="lg:col-span-2 space-y-6">
              {/* Vehicle Selection */}
              <Card className="shadow-card">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <User className="mr-2 h-5 w-5" />
                    Select Vehicle
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4">
                    {vehicles.map((vehicle) => (
                      <div
                        key={vehicle.id}
                        className={`p-4 rounded-lg border-2 cursor-pointer transition-smooth ${
                          selectedVehicle === vehicle.id
                            ? 'border-primary bg-primary/5'
                            : 'border-border hover:border-primary/50'
                        }`}
                        onClick={() => setSelectedVehicle(vehicle.id)}
                      >
                        <div className="flex items-center space-x-4">
                          <img
                            src={vehicle.image}
                            alt={vehicle.name}
                            className="w-16 h-16 object-cover rounded-lg"
                          />
                          <div className="flex-1">
                            <h4 className="font-medium">{vehicle.name}</h4>
                            <p className="text-sm text-muted-foreground">Starting from {vehicle.price}</p>
                          </div>
                          {selectedVehicle === vehicle.id && (
                            <CheckCircle className="h-5 w-5 text-primary" />
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Showroom Selection */}
              <Card className="shadow-card">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <MapPin className="mr-2 h-5 w-5" />
                    Select Showroom
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4">
                    {showrooms.map((showroom) => (
                      <div
                        key={showroom.id}
                        className={`p-4 rounded-lg border-2 cursor-pointer transition-smooth ${
                          selectedShowroom === showroom.id
                            ? 'border-primary bg-primary/5'
                            : 'border-border hover:border-primary/50'
                        }`}
                        onClick={() => setSelectedShowroom(showroom.id)}
                      >
                        <div className="flex items-center justify-between">
                          <div>
                            <h4 className="font-medium">{showroom.name}</h4>
                            <p className="text-sm text-muted-foreground">{showroom.location}</p>
                          </div>
                          <div className="flex items-center space-x-2">
                            <div className="flex items-center space-x-1">
                              <Star className="h-4 w-4 fill-accent text-accent" />
                              <span className="text-sm">{showroom.rating}</span>
                            </div>
                            {selectedShowroom === showroom.id && (
                              <CheckCircle className="h-5 w-5 text-primary" />
                            )}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Date & Time Selection */}
              <Card className="shadow-card">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Clock className="mr-2 h-5 w-5" />
                    Select Date & Time
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Select Date</label>
                    <Input
                      type="date"
                      value={selectedDate}
                      onChange={(e) => setSelectedDate(e.target.value)}
                      min={new Date().toISOString().split('T')[0]}
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Available Time Slots</label>
                    <div className="grid grid-cols-3 gap-2">
                      {timeSlots.map((time) => (
                        <Button
                          key={time}
                          variant={selectedTime === time ? "default" : "outline"}
                          size="sm"
                          onClick={() => setSelectedTime(time)}
                          className="w-full"
                        >
                          {time}
                        </Button>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Contact Form & Summary */}
            <div className="space-y-6">
              {/* Contact Information */}
              <Card className="shadow-card">
                <CardHeader>
                  <CardTitle>Contact Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Input placeholder="Full Name" />
                  <div className="relative">
                    <Phone className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                    <Input placeholder="Phone Number" className="pl-10" />
                  </div>
                  <div className="relative">
                    <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                    <Input placeholder="Email Address" className="pl-10" />
                  </div>
                </CardContent>
              </Card>

              {/* Booking Summary */}
              <Card className="shadow-card">
                <CardHeader>
                  <CardTitle>Booking Summary</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                          <span className="text-muted-foreground">Vehicle:</span>
                          <span className="font-medium">
                            {vehicles.find(v => v.id === selectedVehicle)?.name || 'Not selected'}
                          </span>
                        </div>

                     <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Showroom:</span>
                        <span className="font-medium">
                          {showrooms.find(s => s.id === selectedShowroom)?.name || 'Not selected'}
                        </span>
                      </div>

                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Date:</span>
                      <span className="font-medium">
                        {selectedDate || 'Not selected'}
                      </span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Time:</span>
                      <span className="font-medium">
                        {selectedTime || 'Not selected'}
                      </span>
                    </div>
                  </div>

                  <div className="border-t pt-4">
                    <Badge variant="secondary" className="mb-4 w-full justify-center">
                      Free Test Ride
                    </Badge>
                    <Button 
                      className="w-full hero-button"
                      disabled={!selectedShowroom || !selectedDate || !selectedTime}
                    >
                      Confirm Booking
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Benefits */}
              <Card className="shadow-card">
                <CardContent className="pt-6">
                  <h4 className="font-medium mb-3">Test Ride Benefits</h4>
                  <ul className="text-sm space-y-2">
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span>30-minute test ride</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span>Expert guidance</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span>Insurance included</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span>No booking charges</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestRideBooking;