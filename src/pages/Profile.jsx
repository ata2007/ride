import { User, Mail, Phone, MapPin, Save } from "lucide-react";
import { useState } from "react";
import NavbarRider from "../components/NavbarRider";
import Sidebar from "../components/Sidebar";
import Card from "../components/Common/Card";
import Button from "../components/Common/Button";

const riderLinks = [
  { id: "book", href: "/rider", label: "Book Ride", icon: MapPin },
];

export default function Profile() {
  const [formData, setFormData] = useState({
    name: "John Doe",
    email: "john.doe@example.com",
    phone: "+1 (555) 123-4567",
    address: "123 Main St, City, State",
    profilePic: "JD",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSave = () => {
    console.log("Profile saved:", formData);
  };

  return (
    <div className="min-h-screen bg-slate-50">
      <NavbarRider />

      <div className="md:flex">
        <Sidebar links={riderLinks} mode="rider" />

        <main className="flex-1 p-4 md:p-8">
          <div className="max-w-2xl">
            <h1 className="text-3xl font-black text-slate-900 mb-6">My Profile</h1>

            <Card className="p-6 md:p-8 mb-6">
              <div className="flex items-center gap-6 pb-6 border-b border-orange-100">
                <div className="flex items-center justify-center w-20 h-20 rounded-full bg-orange-100 text-orange-600 text-2xl font-bold">
                  {formData.profilePic}
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-slate-900">{formData.name}</h2>
                  <p className="text-slate-600">Regular Rider</p>
                </div>
              </div>

              <div className="mt-6 space-y-5">
                <div>
                  <label className="flex items-center gap-2 text-sm font-medium text-slate-700 mb-2">
                    <User size={16} /> Full Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full border border-orange-200 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-300"
                  />
                </div>

                <div>
                  <label className="flex items-center gap-2 text-sm font-medium text-slate-700 mb-2">
                    <Mail size={16} /> Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full border border-orange-200 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-300"
                  />
                </div>

                <div>
                  <label className="flex items-center gap-2 text-sm font-medium text-slate-700 mb-2">
                    <Phone size={16} /> Phone
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full border border-orange-200 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-300"
                  />
                </div>

                <div>
                  <label className="flex items-center gap-2 text-sm font-medium text-slate-700 mb-2">
                    <MapPin size={16} /> Address
                  </label>
                  <input
                    type="text"
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    className="w-full border border-orange-200 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-300"
                  />
                </div>

                <Button onClick={handleSave} className="w-full mt-6">
                  <Save size={16} /> Save Changes
                </Button>
              </div>
            </Card>
          </div>
        </main>
      </div>
    </div>
  );
}
