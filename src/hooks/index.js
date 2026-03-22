import { useState } from "react";

export function useAuth() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);

  const login = async (email, password) => {
    setLoading(true);
    // Simulate API call
    setTimeout(() => {
      setUser({ id: "user123", email, name: "John Doe", type: "rider" });
      setLoading(false);
    }, 1000);
  };

  const signup = async (data) => {
    setLoading(true);
    setTimeout(() => {
      setUser({ ...data, id: "user123" });
      setLoading(false);
    }, 1000);
  };

  const logout = () => {
    setUser(null);
  };

  return { user, loading, login, signup, logout };
}

export function useRides() {
  const [rides, setRides] = useState([
    {
      id: 1,
      from: "123 Main St",
      to: "456 Park Ave",
      driver: "John Smith",
      rating: 4.8,
      price: "$12.50",
      date: "Today at 2:30 PM",
      status: "completed",
    },
    {
      id: 2,
      from: "789 Oak St",
      to: "321 Elm Ave",
      driver: "Sarah Johnson",
      rating: 5,
      price: "$8.75",
      date: "Yesterday",
      status: "completed",
    },
  ]);

  const [activeRide, setActiveRide] = useState(null);

  return { rides, activeRide, setActiveRide };
}

export function useFares() {
  const fares = {
    bike: { basePrice: 2, perKm: 1.5, perMin: 0.25 },
    keke: { basePrice: 4, perKm: 2, perMin: 0.35 },
    car: { basePrice: 8, perKm: 3, perMin: 0.5 },
  };

  const calculateFare = (type, distance, duration) => {
    const fare = fares[type];
    if (!fare) return 0;
    return (
      fare.basePrice +
      distance * fare.perKm +
      (duration / 60) * fare.perMin
    );
  };

  return { fares, calculateFare };
}

export function useNotifications() {
  const [notifications, setNotifications] = useState([]);

  const addNotification = (message, type = "info", duration = 3000) => {
    const id = Date.now();
    const notification = { id, message, type };
    setNotifications((prev) => [...prev, notification]);
    setTimeout(() => {
      setNotifications((prev) =>
        prev.filter((notif) => notif.id !== id)
      );
    }, duration);
  };

  return { notifications, addNotification };
}
