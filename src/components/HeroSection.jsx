import { Zap } from "lucide-react";
import { Link } from "react-router-dom";
import Button from "./Common/Button";

export default function HeroSection() {
  return (
    <section className="pt-12 md:pt-20 pb-10 md:pb-14">
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <div className="space-y-6 animate-fade-in-up">
          <p className="inline-flex items-center gap-2 text-sm font-bold text-orange-600 uppercase tracking-wider">
            <Zap size={16} /> Fast, reliable rides
          </p>
          <h1 className="text-4xl md:text-5xl font-black leading-tight text-slate-900">
            Your Ride, <span className="text-orange-600">Your Way</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-700 max-w-xl">
            Destination connects you with the best drivers, real-time ETA, and seamless payments. Book instantly, track safely, and enjoy every trip.
          </p>

          <div className="flex flex-col sm:flex-row gap-3">
            <Link to="/auth?signup=true">
              <Button size="lg">Book Your First Ride</Button>
            </Link>
            <a href="#vehicles">
              <Button variant="secondary" size="lg">Explore Vehicles</Button>
            </a>
          </div>

          <div className="grid grid-cols-3 gap-3 pt-5">
            {[
              { label: "+250k Riders" },
              { label: "12k Drivers" },
              { label: "4.9 Rating" },
            ].map((item) => (
              <div key={item.label} className="bg-white/80 border border-orange-100 rounded-xl px-4 py-3"> 
                <p className="text-orange-600 text-lg font-bold">{item.label}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="relative">
          <div className="rounded-3xl overflow-hidden border border-orange-100 shadow-lg">
            <div className="h-80 bg-gradient-to-br from-orange-100 to-orange-50 p-6">
              <div className="h-full rounded-2xl bg-white/80 p-5 flex flex-col justify-between">
                <div>
                  <h3 className="text-slate-900 font-bold">Your ride is arriving soon</h3>
                  <p className="text-slate-500 text-sm mt-1">Real-time tracking with driver details and ETA</p>
                </div>
                <div>
                  <p className="text-xs uppercase text-orange-500">Ride status</p>
                  <p className="text-3xl font-black text-slate-900">3 min</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
