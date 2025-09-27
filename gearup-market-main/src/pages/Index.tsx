import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import VehicleBrowse from '@/components/VehicleBrowse';
import EmiCalculator from '@/components/EmiCalculator';
import TestRideBooking from '@/components/TestRideBooking';
import SellBike from '@/components/SellBike';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero />
      <VehicleBrowse />
      <EmiCalculator />
      <TestRideBooking />
      <SellBike />
      <Footer />
    </main>
  );
};

export default Index;