import Card from "./Common/Card";

export default function FeaturesGrid() {
  const features = [
    {
      title: "WeGo Live Tracking",
      text: "Watch your driver arrive in real time, with lane-level precision.",
    },
    {
      title: "Cashless Payments",
      text: "You can pay with cards or wallet integration within one tap.",
    },
    {
      title: "Top-rated Drivers",
      text: "All drivers are verified, top-rated and trained for safety.",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {features.map((item) => (
        <Card key={item.title} className="p-6">
          <h4 className="text-lg font-bold text-slate-900 mb-2">{item.title}</h4>
          <p className="text-slate-600">{item.text}</p>
        </Card>
      ))}
    </div>
  );
}
