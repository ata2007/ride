import { Settings, Bell, Lock, Eye, MapPin, Save } from "lucide-react";
import { useState } from "react";
import NavbarRider from "../components/NavbarRider";
import Sidebar from "../components/Sidebar";
import Card from "../components/Common/Card";
import Button from "../components/Common/Button";

const riderLinks = [
  { id: "settings", href: "/settings", label: "Settings", icon: Settings },
];

export default function SettingsPage() {
  const [settings, setSettings] = useState({
    notifications: true,
    sms: false,
    emailUpdates: true,
    shareLocation: true,
    emergencyContact: "Emergency Contact",
    preferredPayment: "card",
  });

  const handleToggle = (key) => {
    setSettings({ ...settings, [key]: !settings[key] });
  };

  const handleSave = () => {
    console.log("Settings saved:", settings);
  };

  return (
    <div className="min-h-screen bg-slate-50">
      <NavbarRider />

      <div className="md:flex">
        <Sidebar links={riderLinks} mode="rider" />

        <main className="flex-1 p-4 md:p-8">
          <div className="max-w-2xl">
            <h1 className="text-3xl font-black text-slate-900 mb-6">Settings</h1>

            <Card className="p-6 md:p-8 space-y-6">
              <div>
                <h3 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
                  <Bell size={20} /> Notifications
                </h3>
                <div className="space-y-3">
                  <label className="flex items-center gap-3 p-3 rounded-lg border border-orange-100 hover:bg-orange-50 cursor-pointer transition">
                    <input
                      type="checkbox"
                      checked={settings.notifications}
                      onChange={() => handleToggle("notifications")}
                      className="w-4 h-4 rounded border-orange-300 text-orange-600"
                    />
                    <span className="flex-1 text-slate-700 font-medium">Push Notifications</span>
                  </label>
                  <label className="flex items-center gap-3 p-3 rounded-lg border border-orange-100 hover:bg-orange-50 cursor-pointer transition">
                    <input
                      type="checkbox"
                      checked={settings.sms}
                      onChange={() => handleToggle("sms")}
                      className="w-4 h-4 rounded border-orange-300 text-orange-600"
                    />
                    <span className="flex-1 text-slate-700 font-medium">SMS Updates</span>
                  </label>
                  <label className="flex items-center gap-3 p-3 rounded-lg border border-orange-100 hover:bg-orange-50 cursor-pointer transition">
                    <input
                      type="checkbox"
                      checked={settings.emailUpdates}
                      onChange={() => handleToggle("emailUpdates")}
                      className="w-4 h-4 rounded border-orange-300 text-orange-600"
                    />
                    <span className="flex-1 text-slate-700 font-medium">Email Updates</span>
                  </label>
                </div>
              </div>

              <hr className="border-orange-100" />

              <div>
                <h3 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
                  <MapPin size={20} /> Location & Safety
                </h3>
                <div className="space-y-3">
                  <label className="flex items-center gap-3 p-3 rounded-lg border border-orange-100 hover:bg-orange-50 cursor-pointer transition">
                    <input
                      type="checkbox"
                      checked={settings.shareLocation}
                      onChange={() => handleToggle("shareLocation")}
                      className="w-4 h-4 rounded border-orange-300 text-orange-600"
                    />
                    <span className="flex-1 text-slate-700 font-medium">Share Real-time Location</span>
                  </label>
                </div>
              </div>

              <hr className="border-orange-100" />

              <div>
                <h3 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
                  <Lock size={20} /> Privacy & Security
                </h3>
                <div className="space-y-2">
                  <Button variant="secondary" className="w-full justify-center">Change Password</Button>
                  <Button variant="secondary" className="w-full justify-center">Manage Permissions</Button>
                  <Button variant="danger" className="w-full justify-center">Delete Account</Button>
                </div>
              </div>

              <Button onClick={handleSave} className="w-full mt-6">
                <Save size={16} /> Save Settings
              </Button>
            </Card>
          </div>
        </main>
      </div>
    </div>
  );
}
