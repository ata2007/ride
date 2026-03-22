import { MapPin, Navigation, Clock, DollarSign, Star, MessageSquare } from "lucide-react";
import NavbarRider from "../components/NavbarRider";
import Sidebar from "../components/Sidebar";
import Card from "../components/Common/Card";
import Button from "../components/Common/Button";
import { useState } from "react";

const riderLinks = [
  { id: "book", href: "/rider", label: "Book Ride", icon: MapPin },
  { id: "active", href: "#active", label: "Active Rides", icon: Navigation },
  { id: "history", href: "#history", label: "Trip History", icon: Clock },
  { id: "wallet", href: "#wallet", label: "Wallet", icon: DollarSign },
  { id: "ratings", href: "#ratings", label: "Ratings", icon: Star },
];

export default function RiderDashboard() {
  const [activeTab, setActiveTab] = useState("booking");
  const [pickup, setPickup] = useState("");
  const [destination, setDestination] = useState("");

  const recentTrips = [
    {
      id: 1,
      from: "123 Main St",
      to: "456 Park Ave",
      driver: "John Smith",
      rating: 4.8,
      price: "$12.50",
      date: "Today at 2:30 PM",
    },
    {
      id: 2,
      from: "789 Oak St",
      to: "321 Elm Ave",
      driver: "Sarah Johnson",
      rating: 5,
      price: "$8.75",
      date: "Yesterday at 6:15 PM",
    },
  ];

  return (
    <div className="min-h-screen bg-slate-50">
      <NavbarRider />

      <div className="md:flex">
        <Sidebar links={riderLinks} mode="rider" />

        <main className="flex-1 p-4 md:p-8 md:ml-0 ml-0">
          <div className="max-w-6xl space-y-6">
            <div>
              <h1 className="text-3xl font-black text-slate-900">Book Your Ride</h1>
              <p className="text-slate-600 mt-2">Where do you want to go today?</p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <Card id="book" className="p-6 md:p-8">
                <h3 className="text-xl font-bold text-slate-900 mb-6">Request a Ride</h3>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">From</label>
                    <div className="flex items-center gap-2 border border-orange-200 rounded-lg px-3 py-2 focus-within:ring-2 focus-within:ring-orange-300">
                      <MapPin size={18} className="text-orange-500" />
                      <input
                        type="text"
                        value={pickup}
                        onChange={(e) => setPickup(e.target.value)}
                        placeholder="Your location"
                        className="flex-1 outline-none bg-transparent"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">To</label>
                    <div className="flex items-center gap-2 border border-orange-200 rounded-lg px-3 py-2 focus-within:ring-2 focus-within:ring-orange-300">
                      <MapPin size={18} className="text-orange-500" />
                      <input
                        type="text"
                        value={destination}
                        onChange={(e) => setDestination(e.target.value)}
                        placeholder="Destination"
                        className="flex-1 outline-none bg-transparent"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-3 gap-2">
                    {[
                      { id: "bike", name: "Bike", price: "$2" },
                      { id: "keke", name: "Keke", price: "$4" },
                      { id: "car", name: "Car", price: "$8" },
                    ].map((option) => (
                      <button
                        key={option.id}
                        className="p-3 rounded-lg border border-orange-200 hover:border-orange-500 hover:bg-orange-50 transition"
                      >
                        <div className="text-sm font-semibold text-slate-900">{option.name}</div>
                        <div className="text-xs text-orange-600">{option.price}</div>
                      </button>
                    ))}
                  </div>

                  <Button className="w-full">Request Ride</Button>
                </div>
              </Card>

              <div className="space-y-6">
                <Card id="active" className="p-6 bg-gradient-to-br from-orange-50 to-white border-orange-200">
                  <h3 className="text-lg font-bold text-slate-900 mb-4">Active Ride</h3>
                  <p className="text-slate-600 text-center py-6">No active rides at the moment</p>
                </Card>

                <Card className="p-6">
                  <h3 className="text-lg font-bold text-slate-900 mb-4">Wallet Balance</h3>
                  <p className="text-3xl font-black text-orange-600">$45.80</p>
                  <p className="text-sm text-slate-600 mt-2">Available balance</p>
                  <Button variant="secondary" className="w-full mt-4">Add Money</Button>
                </Card>
              </div>
            </div>

            <Card id="history" className="p-6 md:p-8">
              <h3 className="text-xl font-bold text-slate-900 mb-6">Recent Trips</h3>
              <div className="space-y-4">
                {recentTrips.map((trip) => (
                  <div key={trip.id} className="flex items-start justify-between p-4 border border-orange-100 rounded-lg hover:bg-orange-50 transition">
                    <div className="flex-1">
                      <p className="font-semibold text-slate-900">{trip.from}</p>
                      <p className="text-sm text-slate-600 flex items-center gap-2 mt-1">
                        <Navigation size={14} /> {trip.to}
                      </p>
                      <p className="text-xs text-slate-500 mt-2">{trip.date}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-lg font-bold text-orange-600">{trip.price}</p>
                      <p className="text-sm text-slate-600 flex items-center gap-1 mt-1">
                        <Star size={14} className="text-yellow-500" /> {trip.rating}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            <Card className="p-6 md:p-8 bg-gradient-to-r from-orange-50 to-orange-100 border-orange-200">
              <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                <div>
                  <h3 className="text-lg font-bold text-slate-900">Rate Your Last Trip</h3>
                  <p className="text-slate-600 text-sm mt-1">Help drivers improve with your feedback</p>
                </div>
                <Button>Rate Trip</Button>
              </div>
            </Card>
          </div>
        </main>
      </div>
    </div>
  );
}
