import { MapPin, ToggleLeft, AlertCircle, TrendingUp, User, Clock, DollarSign } from "lucide-react";
import NavbarDriver from "../components/NavbarDriver";
import Sidebar from "../components/Sidebar";
import Card from "../components/Common/Card";
import Button from "../components/Common/Button";
import { useState } from "react";

const driverLinks = [
  { id: "requests", href: "/driver", label: "Ride Requests", icon: MapPin },
  { id: "earnings", href: "#earnings", label: "Earnings", icon: TrendingUp },
  { id: "trips", href: "#trips", label: "Trip History", icon: Clock },
  { id: "documents", href: "#documents", label: "Documents", icon: User },
];

export default function DriverDashboard() {
  const [online, setOnline] = useState(false);
  const [selectedRequest, setSelectedRequest] = useState(null);

  const rideRequests = [
    {
      id: 1,
      rider: "Emma Wilson",
      rating: 4.9,
      from: "123 Main St",
      to: "456 Park Ave",
      distance: "2.5 km",
      estimatedFare: "$12.50",
      timeAgo: "Just now",
    },
    {
      id: 2,
      rider: "Michael Brown",
      rating: 4.7,
      from: "789 Oak St",
      to: "321 Elm Ave",
      distance: "1.8 km",
      estimatedFare: "$8.75",
      timeAgo: "2 mins ago",
    },
  ];

  const earnings = [
    { period: "Today", amount: "$145.30" },
    { period: "This Week", amount: "$892.15" },
    { period: "This Month", amount: "$3,456.80" },
  ];

  const completedTrips = [
    {
      id: 1,
      rider: "John Doe",
      from: "123 Main St",
      to: "456 Park Ave",
      fare: "$12.50",
      rating: 5,
      time: "Today at 2:30 PM",
    },
    {
      id: 2,
      rider: "Sarah Johnson",
      from: "789 Oak St",
      to: "321 Elm Ave",
      fare: "$8.75",
      rating: 4.8,
      time: "Yesterday at 6:15 PM",
    },
  ];

  return (
    <div className="min-h-screen bg-slate-50">
      <NavbarDriver />

      <div className="md:flex">
        <Sidebar links={driverLinks} mode="driver" />

        <main className="flex-1 p-4 md:p-8 ml-0">
          <div className="max-w-6xl space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-3xl font-black text-slate-900">Driver Dashboard</h1>
                <p className="text-slate-600 mt-2">Manage your rides and earnings</p>
              </div>

              <div className="flex items-center gap-2 bg-white border border-orange-200 rounded-full p-1">
                <button
                  onClick={() => setOnline(!online)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-full font-semibold transition ${
                    online
                      ? "bg-green-100 text-green-700"
                      : "bg-slate-100 text-slate-700"
                  }`}
                >
                  <ToggleLeft size={18} />
                  {online ? "Online" : "Offline"}
                </button>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-4">
              {earnings.map((item, idx) => (
                <Card key={idx} className="p-4">
                  <p className="text-sm text-slate-600 font-medium">{item.period}</p>
                  <p className="text-3xl font-black text-orange-600 mt-2">{item.amount}</p>
                </Card>
              ))}
            </div>

            {!online && (
              <div className="flex items-start gap-3 p-4 rounded-lg border border-amber-200 bg-amber-50">
                <AlertCircle size={20} className="text-amber-600 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-amber-900">You're Currently Offline</p>
                  <p className="text-sm text-amber-800 mt-1">Turn on to start receiving ride requests</p>
                </div>
              </div>
            )}

            <div className="grid md:grid-cols-3 gap-8">
              <div className="md:col-span-2 space-y-6">
                <Card id="requests" className="p-6 md:p-8">
                  <h3 className="text-xl font-bold text-slate-900 mb-6">Incoming Ride Requests</h3>
                  {rideRequests.length > 0 ? (
                    <div className="space-y-4">
                      {rideRequests.map((request) => (
                        <div
                          key={request.id}
                          className={`p-5 border rounded-lg cursor-pointer transition ${
                            selectedRequest?.id === request.id
                              ? "border-orange-500 bg-orange-50"
                              : "border-orange-200 hover:border-orange-400 hover:bg-orange-50"
                          }`}
                          onClick={() => setSelectedRequest(request)}
                        >
                          <div className="flex items-start justify-between mb-3">
                            <div>
                              <p className="font-bold text-slate-900">{request.rider}</p>
                              <p className="text-xs text-slate-600 flex items-center gap-1 mt-0.5">
                                ⭐ {request.rating} • {request.timeAgo}
                              </p>
                            </div>
                            <p className="font-black text-orange-600">{request.estimatedFare}</p>
                          </div>

                          <div className="space-y-2 text-sm text-slate-700">
                            <p className="flex items-center gap-2">
                              <MapPin size={14} className="text-orange-500" />
                              {request.from}
                            </p>
                            <p className="flex items-center gap-2">
                              <MapPin size={14} className="text-orange-500" />
                              {request.to}
                            </p>
                          </div>

                          <p className="text-xs text-slate-600 mt-3">Distance: {request.distance}</p>

                          {selectedRequest?.id === request.id && (
                            <div className="flex gap-2 mt-4 pt-4 border-t border-orange-100">
                              <Button variant="secondary" className="flex-1">Decline</Button>
                              <Button className="flex-1">Accept Ride</Button>
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  ) : (
                    <p className="text-slate-600 text-center py-8">No incoming requests</p>
                  )}
                </Card>

                <Card id="trips" className="p-6 md:p-8">
                  <h3 className="text-xl font-bold text-slate-900 mb-6">Completed Trips</h3>
                  <div className="space-y-4">
                    {completedTrips.map((trip) => (
                      <div key={trip.id} className="p-4 border border-orange-100 rounded-lg hover:bg-orange-50 transition">
                        <div className="flex items-start justify-between mb-2">
                          <div>
                            <p className="font-semibold text-slate-900">{trip.rider}</p>
                            <p className="text-xs text-slate-600 mt-1">{trip.time}</p>
                          </div>
                          <div className="text-right">
                            <p className="font-black text-orange-600">{trip.fare}</p>
                            <p className="text-xs text-yellow-500 flex items-center justify-end gap-1 mt-1">⭐ {trip.rating}</p>
                          </div>
                        </div>
                        <p className="text-sm text-slate-600">{trip.from} → {trip.to}</p>
                      </div>
                    ))}
                  </div>
                </Card>
              </div>

              <div className="space-y-6">
                <Card className="p-6 bg-gradient-to-br from-orange-50 to-white border-orange-200">
                  <h3 className="text-lg font-bold text-slate-900 mb-4">Quick Stats</h3>
                  <div className="space-y-4">
                    <div>
                      <p className="text-sm text-slate-600">Trips Today</p>
                      <p className="text-3xl font-black text-orange-600">8</p>
                    </div>
                    <div>
                      <p className="text-sm text-slate-600">Avg Rating</p>
                      <p className="text-3xl font-black text-orange-600">4.9</p>
                    </div>
                    <div>
                      <p className="text-sm text-slate-600">Acceptance Rate</p>
                      <p className="text-3xl font-black text-orange-600">98%</p>
                    </div>
                  </div>
                </Card>

                <Card id="documents" className="p-6">
                  <h3 className="text-lg font-bold text-slate-900 mb-4">Documents</h3>
                  <div className="space-y-3 text-sm">
                    <div className="flex items-center justify-between">
                      <span className="text-slate-700">License</span>
                      <span className="px-2 py-1 rounded-full bg-green-100 text-green-700 text-xs font-semibold">Active</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-slate-700">Insurance</span>
                      <span className="px-2 py-1 rounded-full bg-green-100 text-green-700 text-xs font-semibold">Active</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-slate-700">Inspection</span>
                      <span className="px-2 py-1 rounded-full bg-amber-100 text-amber-700 text-xs font-semibold">Exp. Soon</span>
                    </div>
                  </div>
                  <Button variant="ghost" className="w-full mt-4">View Details</Button>
                </Card>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
