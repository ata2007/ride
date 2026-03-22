import { useMemo, useState } from "react";
import { Menu, X, MapPin, Truck, Smartphone, Star, Globe, Clock, Users, Gauge } from "lucide-react";

const rideTypes = [
  { name: "Launch", price: "$5", description: "Smart-route, low-cost economy with instant pickup" },
  { name: "Orbit", price: "$11", description: "Premium comfort for longer journeys" },
  { name: "Zenith", price: "$18", description: "Luxury with concierge service and in-trip Wi-Fi" },
];

export default function GuestHeader() {
  const [open, setOpen] = useState(false);
  const [pickup, setPickup] = useState("");
  const [dropoff, setDropoff] = useState("");
  const [rideType, setRideType] = useState("Economy");
  const [booked, setBooked] = useState(false);

  const estimate = useMemo(() => {
    if (!pickup || !dropoff) return "--";
    const base = rideTypes.find((r) => r.name === rideType)?.price.replace("$", "") || "0";
    const fee = 2;
    const total = parseInt(base, 10) + fee;
    return `$${total}`;
  }, [pickup, dropoff, rideType]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-orange-50 to-white text-slate-900">
      <header className="w-full bg-white/95 shadow-sm backdrop-blur fixed top-0 left-0 z-50">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
          <h1 className="text-2xl font-black text-orange-600 tracking-tight">DESTINATION</h1>

          <nav className="hidden md:flex items-center gap-8 text-slate-700 font-medium">
            <a href="#hero" className="hover:text-orange-500 transition">Home</a>
            <a href="#features" className="hover:text-orange-500 transition">Features</a>
            <a href="#drivers" className="hover:text-orange-500 transition">Drivers</a>
            <a href="#app" className="hover:text-orange-500 transition">App</a>
          </nav>

          <div className="hidden md:flex items-center gap-4">
            <button className="text-orange-600 font-semibold hover:text-orange-700">Log in</button>
            <button className="bg-orange-500 hover:bg-orange-400 text-white px-5 py-2 rounded-full font-semibold transition">Sign up</button>
          </div>

          <button className="md:hidden" onClick={() => setOpen(!open)}>
            {open ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>

        {open && (
          <div className="md:hidden bg-white border-t">
            <div className="flex flex-col gap-4 p-5 text-slate-700 font-medium">
              <a href="#hero" onClick={() => setOpen(false)}>Home</a>
              <a href="#features" onClick={() => setOpen(false)}>Features</a>
              <a href="#drivers" onClick={() => setOpen(false)}>Drivers</a>
              <a href="#app" onClick={() => setOpen(false)}>App</a>
              <hr />
              <button className="text-left font-semibold text-orange-600">Login</button>
              <button className="text-left text-white bg-orange-500 px-3 py-2 rounded-full">Register</button>
            </div>
          </div>
        )}
      </header>

      <main className="pt-24">
        <section id="hero" className="max-w-7xl mx-auto px-6 py-20 md:py-28">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <div>
              <p className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-orange-600">
                <MapPin size={14} /> fast trips
              </p>
              <h2 className="mt-4 text-4xl md:text-5xl font-black text-slate-900 leading-tight">Destination ride sharing done right.</h2>
              <p className="mt-5 text-slate-700 text-lg md:text-xl max-w-xl">Book a ride in seconds with clean cars, verified drivers, and transparent fares—powered by Destination, your orange & white mobility service.</p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a href="#book" className="inline-flex items-center gap-2 bg-orange-500 text-white font-semibold px-6 py-3 rounded-full shadow hover:bg-orange-400 transition">Book Ride</a>
                <a href="#app" className="inline-flex items-center gap-2 border border-orange-300 text-orange-600 font-semibold px-6 py-3 rounded-full hover:bg-orange-50 transition">Download App</a>
              </div>
            </div>

            <div id="book" className="bg-white border border-orange-100 rounded-3xl p-6 shadow-sm">
              <h3 className="text-xl font-bold text-slate-900">Quick Ride Estimate</h3>
              <p className="text-sm text-slate-600 mt-1">Enter pickup and dropoff to see your fare.</p>
              <div className="mt-5 space-y-4">
                <label className="block text-sm text-slate-700 font-medium">Pickup</label>
                <input
                  className="w-full border border-orange-200 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-300"
                  placeholder="123 Main St"
                  value={pickup}
                  onChange={(e) => setPickup(e.target.value)}
                />
                <label className="block text-sm text-slate-700 font-medium">Dropoff</label>
                <input
                  className="w-full border border-orange-200 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-300"
                  placeholder="456 Elm Ave"
                  value={dropoff}
                  onChange={(e) => setDropoff(e.target.value)}
                />
                <label className="block text-sm text-slate-700 font-medium">Ride type</label>
                <select
                  className="w-full border border-orange-200 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-300"
                  value={rideType}
                  onChange={(e) => setRideType(e.target.value)}
                >
                  {rideTypes.map((ride) => (
                    <option key={ride.name} value={ride.name}>{ride.name}</option>
                  ))}
                </select>
                <div className="flex items-center justify-between text-sm font-semibold text-slate-600">
                  <span>Estimated fare</span>
                  <span className="text-orange-600">{estimate}</span>
                </div>
                <button
                  className="w-full bg-orange-500 text-white font-semibold py-2.5 rounded-lg hover:bg-orange-400 transition"
                  onClick={() => { if (pickup && dropoff) setBooked(true); }}
                  disabled={!pickup || !dropoff}
                >
                  Confirm Ride
                </button>
                {booked && (
                  <div className="rounded-lg border border-green-100 bg-green-50 p-3 text-green-700 text-sm">
                    Ride booked from {pickup} to {dropoff} with {rideType} (approx. {estimate}).
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>

        <section id="features" className="bg-white py-20">
          <div className="max-w-7xl mx-auto px-6">
            <h3 className="text-3xl font-bold text-slate-900 text-center">Why Destination?</h3>
            <p className="mt-3 text-slate-600 text-center max-w-2xl mx-auto">Fast, safe, and reliable rides with the most transparent pricing in orange and white.</p>
            <div className="mt-10 grid gap-6 md:grid-cols-3">
              {[
                { title: "Instant Bookings", text: "Tap to request and get an ETA in seconds." },
                { title: "Top Drivers", text: "Vetted professionals with 24/7 support." },
                { title: "Cashless Payments", text: "Use cards, wallets, or promo credits." },
              ].map((item) => (
                <div key={item.title} className="border border-orange-100 rounded-2xl p-6 hover:shadow-lg transition">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-orange-100 text-orange-600 mb-3"><Truck size={20} /></div>
                  <h4 className="text-xl font-semibold text-slate-900">{item.title}</h4>
                  <p className="mt-2 text-slate-600">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="drivers" className="py-20 bg-orange-50">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid gap-10 lg:grid-cols-2 items-center">
              <div>
                <h3 className="text-3xl font-bold text-slate-900">Drivers are at the heart of Destination.</h3>
                <p className="mt-4 text-slate-700">Join the fleet and earn with flexible shifts, transparent incentives, and an easy onboarding process.</p>
                <ul className="mt-6 space-y-3 text-slate-800">
                  <li className="flex items-start gap-2"><Star size={16} className="text-orange-500 mt-1"/> Guaranteed mileage and bonuses</li>
                  <li className="flex items-start gap-2"><Star size={16} className="text-orange-500 mt-1"/> In-app navigation & support</li>
                  <li className="flex items-start gap-2"><Star size={16} className="text-orange-500 mt-1"/> Rider reviews and safety tools</li>
                </ul>
                <button className="mt-6 bg-white text-orange-600 border border-orange-300 px-5 py-2.5 rounded-full font-semibold hover:bg-orange-50 transition">Become a driver</button>
              </div>
              <div className="rounded-2xl border border-orange-200 p-6 bg-white drop-shadow-sm">
                <h4 className="text-lg font-semibold text-slate-900">Driver snapshot</h4>
                <p className="mt-2 text-slate-600">Daily targets, instant earnings, and fast payouts in one app.</p>
                <ul className="mt-4 text-slate-700 space-y-2">
                  <li>• 24/7 in-app support for drivers</li>
                  <li>• Real-time route optimization</li>
                  <li>• High-demand ride alerts</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section id="app" className="bg-white py-20">
          <div className="max-w-7xl mx-auto px-6 text-center">
            <h3 className="text-3xl font-bold text-slate-900">Get the Destination app</h3>
            <p className="mt-3 text-slate-600 max-w-lg mx-auto">Download for iOS and Android to request rides, track your driver, and pay with a tap.</p>
            <div className="mt-8 flex justify-center gap-4 flex-wrap">
              <a className="inline-flex items-center gap-2 bg-slate-900 text-white px-5 py-3 rounded-xl hover:bg-slate-800" href="#">
                <Smartphone size={16} /> App Store
              </a>
              <a className="inline-flex items-center gap-2 bg-orange-500 text-white px-5 py-3 rounded-xl hover:bg-orange-400" href="#">
                <Smartphone size={16} /> Google Play
              </a>
            </div>
          </div>
        </section>

        <footer className="border-t border-orange-100 bg-orange-50 py-8">
          <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4 text-slate-600">
            <p>&copy; {new Date().getFullYear()} Destination. All rights reserved.</p>
            <div className="flex gap-4">
              <a href="#" className="hover:text-orange-700">Privacy</a>
              <a href="#" className="hover:text-orange-700">Terms</a>
              <a href="#" className="hover:text-orange-700">Support</a>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}
