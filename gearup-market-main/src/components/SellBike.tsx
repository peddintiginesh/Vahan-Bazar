import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { 
  Upload, 
  Car, 
  IndianRupee, 
  Calendar, 
  Gauge, 
  Fuel,
  User,
  Phone,
  Mail,
  MapPin,
  FileText,
  CheckCircle,
  Camera
} from 'lucide-react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

const SellBike = () => {
  const [step, setStep] = useState(1);
  const [vehicleData, setVehicleData] = useState({
    brand: '',
    model: '',
    year: '',
    kmDriven: '',
    fuelType: '',
    engine: '',
    price: '',
    description: '',
    ownerName: '',
    phone: '',
    email: '',
    location: ''
  });

  const handleInputChange = (field: string, value: string) => {
    setVehicleData(prev => ({ ...prev, [field]: value }));
  };

  const StepIndicator = ({ currentStep }: { currentStep: number }) => (
    <div className="flex items-center justify-center mb-8">
      {[1, 2, 3].map((stepNum) => (
        <div key={stepNum} className="flex items-center">
          <div className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold ${
            stepNum <= currentStep 
              ? 'gradient-primary text-white' 
              : 'bg-muted text-muted-foreground'
          }`}>
            {stepNum < currentStep ? <CheckCircle className="h-5 w-5" /> : stepNum}
          </div>
          {stepNum < 3 && (
            <div className={`w-16 h-1 mx-2 ${
              stepNum < currentStep ? 'gradient-primary' : 'bg-muted'
            }`} />
          )}
        </div>
      ))}
    </div>
  );

  return (
    <section id="sell" className="py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <Car className="inline-block mr-3 h-8 w-8" />
              Sell Your <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Bike</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Get the best price for your bike with our trusted selling platform
            </p>
          </div>

          <StepIndicator currentStep={step} />

          {/* Step Content */}
          {step === 1 && (
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <FileText className="mr-2 h-5 w-5" />
                  Vehicle Details
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">Brand *</label>
                    <Select value={vehicleData.brand} onValueChange={(value) => handleInputChange('brand', value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select brand" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="honda">Honda</SelectItem>
                        <SelectItem value="hero">Hero</SelectItem>
                        <SelectItem value="bajaj">Bajaj</SelectItem>
                        <SelectItem value="tvs">TVS</SelectItem>
                        <SelectItem value="royal-enfield">Royal Enfield</SelectItem>
                        <SelectItem value="yamaha">Yamaha</SelectItem>
                        <SelectItem value="ather">Ather</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Model *</label>
                    <Input
                      placeholder="e.g., CB Shine, Splendor Plus"
                      value={vehicleData.model}
                      onChange={(e) => handleInputChange('model', e.target.value)}
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Year *</label>
                    <Select value={vehicleData.year} onValueChange={(value) => handleInputChange('year', value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Manufacturing year" />
                      </SelectTrigger>
                      <SelectContent>
                        {Array.from({length: 15}, (_, i) => 2024 - i).map(year => (
                          <SelectItem key={year} value={year.toString()}>{year}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">KM Driven *</label>
                    <div className="relative">
                      <Gauge className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                      <Input
                        type="number"
                        placeholder="Odometer reading"
                        className="pl-10"
                        value={vehicleData.kmDriven}
                        onChange={(e) => handleInputChange('kmDriven', e.target.value)}
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Fuel Type *</label>
                    <Select value={vehicleData.fuelType} onValueChange={(value) => handleInputChange('fuelType', value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select fuel type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="petrol">Petrol</SelectItem>
                        <SelectItem value="electric">Electric</SelectItem>
                        <SelectItem value="cng">CNG</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Engine Capacity</label>
                    <Input
                      placeholder="e.g., 125cc, 6kW"
                      value={vehicleData.engine}
                      onChange={(e) => handleInputChange('engine', e.target.value)}
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Expected Price *</label>
                  <div className="relative">
                    <IndianRupee className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                    <Input
                      type="number"
                      placeholder="Your expected selling price"
                      className="pl-10"
                      value={vehicleData.price}
                      onChange={(e) => handleInputChange('price', e.target.value)}
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Description</label>
                  <Textarea
                    placeholder="Describe your bike's condition, any modifications, service history, etc."
                    rows={4}
                    value={vehicleData.description}
                    onChange={(e) => handleInputChange('description', e.target.value)}
                  />
                </div>

                <Button 
                  onClick={() => setStep(2)}
                  className="w-full hero-button"
                  disabled={!vehicleData.brand || !vehicleData.model || !vehicleData.year || !vehicleData.price}
                >
                  Next: Upload Photos
                </Button>
              </CardContent>
            </Card>
          )}

          {step === 2 && (
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Camera className="mr-2 h-5 w-5" />
                  Upload Photos
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <p className="text-muted-foreground">
                  Upload clear, high-quality photos of your bike to attract more buyers. Include front, back, side views and any damage.
                </p>

                {/* Photo Upload Grid */}
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {[
                    'Front View', 'Back View', 'Left Side', 
                    'Right Side', 'Dashboard', 'Engine'
                  ].map((label, index) => (
                    <div key={label} className="aspect-square border-2 border-dashed border-muted-foreground/25 rounded-lg flex flex-col items-center justify-center p-4 hover:border-primary/50 transition-smooth cursor-pointer">
                      <Upload className="h-8 w-8 text-muted-foreground mb-2" />
                      <span className="text-sm font-medium text-center">{label}</span>
                      <span className="text-xs text-muted-foreground mt-1">Click to upload</span>
                    </div>
                  ))}
                </div>

                <div className="bg-muted/50 rounded-lg p-4">
                  <h4 className="font-medium mb-2">Photo Tips for Better Response</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Take photos in good lighting, preferably daylight</li>
                    <li>• Clean your bike before taking photos</li>
                    <li>• Include close-ups of any scratches or damage</li>
                    <li>• Show documents and accessories if available</li>
                  </ul>
                </div>

                <div className="flex gap-4">
                  <Button variant="outline" onClick={() => setStep(1)} className="flex-1">
                    Back
                  </Button>
                  <Button onClick={() => setStep(3)} className="flex-1 hero-button">
                    Next: Contact Details
                  </Button>
                </div>
              </CardContent>
            </Card>
          )}

          {step === 3 && (
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <User className="mr-2 h-5 w-5" />
                  Contact Information
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">Full Name *</label>
                    <Input
                      placeholder="Your full name"
                      value={vehicleData.ownerName}
                      onChange={(e) => handleInputChange('ownerName', e.target.value)}
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Phone Number *</label>
                    <div className="relative">
                      <Phone className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                      <Input
                        placeholder="Your phone number"
                        className="pl-10"
                        value={vehicleData.phone}
                        onChange={(e) => handleInputChange('phone', e.target.value)}
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Email Address</label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                      <Input
                        type="email"
                        placeholder="your.email@domain.com"
                        className="pl-10"
                        value={vehicleData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Location *</label>
                    <div className="relative">
                      <MapPin className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                      <Input
                        placeholder="City, State"
                        className="pl-10"
                        value={vehicleData.location}
                        onChange={(e) => handleInputChange('location', e.target.value)}
                      />
                    </div>
                  </div>
                </div>

                {/* Summary */}
                <div className="bg-muted/50 rounded-lg p-6">
                  <h4 className="font-semibold mb-4">Listing Summary</h4>
                  <div className="grid md:grid-cols-2 gap-4 text-sm">
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Vehicle:</span>
                        <span>{vehicleData.brand} {vehicleData.model}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Year:</span>
                        <span>{vehicleData.year}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">KM Driven:</span>
                        <span>{vehicleData.kmDriven} km</span>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Price:</span>
                        <span className="font-semibold">₹{parseInt(vehicleData.price || '0').toLocaleString()}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Fuel:</span>
                        <span>{vehicleData.fuelType}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Location:</span>
                        <span>{vehicleData.location}</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex gap-4">
                  <Button variant="outline" onClick={() => setStep(2)} className="flex-1">
                    Back
                  </Button>
                  <Button 
                    className="flex-1 hero-button"
                    disabled={!vehicleData.ownerName || !vehicleData.phone || !vehicleData.location}
                  >
                    Submit Listing
                  </Button>
                </div>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </section>
  );
};

export default SellBike;