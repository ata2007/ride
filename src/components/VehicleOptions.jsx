import Card from "./Common/Card";
import { Truck, Zap, Gauge } from "lucide-react";

export default function VehicleOptions() {
  const vehicles = [
    {
      id: "bike",
      name: "Bike",
      description: "Quick & affordable",
      price: "From $2",
      icon: Zap,
      features: ["Fast", "Eco-friendly", "Affordable"],
    },
    {
      id: "keke",
      name: "Keke",
      description: "Comfortable for 2",
      price: "From $4",
      icon: Truck,
      features: ["Spacious", "Weather proof", "Reliable"],
    },
    {
      id: "car",
      name: "Car",
      description: "Premium comfort",
      price: "From $8",
      icon: Gauge,
      features: ["Luxury", "AC", "Professional"],
    },
  ];

  return (
    <div className="grid md:grid-cols-3 gap-4">
      {vehicles.map((vehicle) => {
        const IconComponent = vehicle.icon;
        return (
          <Card key={vehicle.id} className="p-5 text-center hover:scale-105 transform transition-transform animate-fade-in-up">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-orange-100 text-orange-600 mb-3 mx-auto">
              <IconComponent size={28} />
            </div>
            <h4 className="text-lg font-bold text-slate-900 mb-1">{vehicle.name}</h4>
            <p className="text-sm text-slate-600 mb-2">{vehicle.description}</p>
            <p className="text-lg font-semibold text-orange-600 mb-3">{vehicle.price}</p>
            <ul className="text-xs text-slate-600 space-y-1">
              {vehicle.features.map((feature, idx) => (
                <li key={idx} className="flex items-center justify-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-orange-400"></span>
                  {feature}
                </li>
              ))}
            </ul>
          </Card>
        );
      })}
    </div>
  );
}
