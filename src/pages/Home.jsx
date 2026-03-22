import NavbarGuest from "../components/NavbarGuest";
import RideBookingForm from "../components/RideBookingForm";
import VehicleOptions from "../components/VehicleOptions";
import Button from "../components/Common/Button";
import Card from "../components/Common/Card";
import Footer from "../components/Footer";
import HeroSection from "../components/HeroSection";
import FeaturesGrid from "../components/FeaturesGrid";
import MapPlaceholder from "../components/MapPlaceholder";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-orange-50/50 to-white">
      <NavbarGuest />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <HeroSection />

        <section id="booking" className="py-12 md:py-16">
          <div className="grid lg:grid-cols-12 gap-6 items-start">
            <div className="lg:col-span-5">
              <Card className="overflow-hidden">
                <RideBookingForm />
              </Card>
            </div>
            <div className="lg:col-span-7">
              <MapPlaceholder />
            </div>
          </div>
        </section>

        <section id="vehicles" className="py-12 md:py-16">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-black text-slate-900">Ride Types</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">Pick the perfect ride depending on your needs and budget.</p>
          </div>
          <VehicleOptions />
        </section>

        <section id="features" className="py-12 md:py-16 bg-slate-50 rounded-3xl px-4 md:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-black text-slate-900">Why Choose DESTINATION</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">A modern ride experience with the reliability of a premium service.</p>
          </div>
          <FeaturesGrid />
        </section>

        <section className="py-12 md:py-16">
          <div className="bg-gradient-to-r from-orange-500 to-orange-600 rounded-3xl p-8 md:p-12 text-white text-center shadow-lg border border-orange-400">
            <h2 className="text-3xl md:text-4xl font-black mb-3">Get Started With DESTINATION</h2>
            <p className="text-orange-100 mb-6 max-w-2xl mx-auto">Create your account now and enjoy seamless rides with top-rated drivers.</p>
            <Link to="/auth?signup=true">
              <Button variant="secondary" size="lg" className="bg-white text-orange-600 hover:bg-orange-50">Create Account</Button>
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
