import { MapPin, Search } from "lucide-react";
import Card from "./Common/Card";
import Button from "./Common/Button";
import { useState } from "react";

export default function RideBookingForm() {
  const [pickup, setPickup] = useState("");
  const [destination, setDestination] = useState("");
  const [rideType, setRideType] = useState("bike");

  const handleBooking = (e) => {
    e.preventDefault();
    if (pickup && destination) {
      console.log("Booking:", { pickup, destination, rideType });
    }
  };

  return (
    <Card className="p-6 md:p-8 animate-fade-in-up">
      <h3 className="text-2xl font-bold text-slate-900 mb-6">Book Your Ride</h3>
      <form onSubmit={handleBooking} className="space-y-4">
        <div className="space-y-2">
          <label className="block text-sm font-medium text-slate-700">Pickup Location</label>
          <div className="flex items-center gap-3 border border-orange-200 rounded-lg px-3 py-2 focus-within:ring-2 focus-within:ring-orange-300">
            <MapPin size={18} className="text-orange-500" />
            <input
              type="text"
              value={pickup}
              onChange={(e) => setPickup(e.target.value)}
              placeholder="Enter pickup location"
              className="flex-1 outline-none bg-transparent text-slate-900"
            />
          </div>
        </div>

        <div className="space-y-2">
          <label className="block text-sm font-medium text-slate-700">Destination</label>
          <div className="flex items-center gap-3 border border-orange-200 rounded-lg px-3 py-2 focus-within:ring-2 focus-within:ring-orange-300">
            <MapPin size={18} className="text-orange-500" />
            <input
              type="text"
              value={destination}
              onChange={(e) => setDestination(e.target.value)}
              placeholder="Where to?"
              className="flex-1 outline-none bg-transparent text-slate-900"
            />
          </div>
        </div>

        <div className="space-y-2">
          <label className="block text-sm font-medium text-slate-700">Choose Ride Type</label>
          <div className="grid grid-cols-3 gap-2">
            {[
              { id: "bike", name: "Bike", price: "$2" },
              { id: "keke", name: "Keke", price: "$4" },
              { id: "car", name: "Car", price: "$8" },
            ].map((option) => (
              <button
                key={option.id}
                type="button"
                onClick={() => setRideType(option.id)}
                className={`p-2 rounded-lg border transition ${
                  rideType === option.id
                    ? "border-orange-500 bg-orange-50"
                    : "border-orange-100 hover:border-orange-300"
                }`}
              >
                <div className="text-sm font-semibold text-slate-900">{option.name}</div>
                <div className="text-xs text-orange-600">{option.price}</div>
              </button>
            ))}
          </div>
        </div>

        <Button type="submit" className="w-full" disabled={!pickup || !destination}>
          <Search size={18} />
          Confirm Ride
        </Button>
      </form>
    </Card>
  );
}
