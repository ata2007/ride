import { useState } from "react";
import { Menu, X, User, BarChart3, LogOut } from "lucide-react";
import { Link } from "react-router-dom";

export default function NavbarDriver() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-md border-b border-orange-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/driver" className="flex items-center">
            <span className="text-2xl font-black text-orange-600 tracking-tight">DESTINATION</span>
          </Link>

          <div className="hidden md:flex items-center gap-6">
            <a href="#requests" className="text-slate-700 hover:text-orange-600 font-medium transition">Requests</a>
            <a href="#earnings" className="text-slate-700 hover:text-orange-600 font-medium transition">Earnings</a>
            <a href="#trips" className="text-slate-700 hover:text-orange-600 font-medium transition">Trips</a>
          </div>

          <div className="hidden md:flex items-center gap-3">
            <div className="relative">
              <button
                onClick={() => setProfileOpen(!profileOpen)}
                className="flex items-center justify-center w-10 h-10 rounded-full bg-orange-100 text-orange-600 hover:bg-orange-200 transition"
              >
                <User size={20} />
              </button>
              {profileOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-orange-100 py-2">
                  <a href="#profile" className="block px-4 py-2 text-slate-700 hover:bg-orange-50">Driver Profile</a>
                  <a href="#vehicle" className="block px-4 py-2 text-slate-700 hover:bg-orange-50">Vehicle Info</a>
                  <a href="#documents" className="block px-4 py-2 text-slate-700 hover:bg-orange-50">Documents</a>
                  <a href="#settings" className="block px-4 py-2 text-slate-700 hover:bg-orange-50">Settings</a>
                  <hr className="my-1" />
                  <Link to="/" className="block px-4 py-2 text-red-600 hover:bg-red-50">Logout</Link>
                </div>
              )}
            </div>
          </div>

          <button
            className="md:hidden p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {mobileOpen && (
          <div className="md:hidden pb-4 space-y-3">
            <a href="#requests" className="block text-slate-700 font-medium py-2">Requests</a>
            <a href="#earnings" className="block text-slate-700 font-medium py-2">Earnings</a>
            <a href="#trips" className="block text-slate-700 font-medium py-2">Trips</a>
            <hr />
            <a href="#profile" className="block text-slate-700 font-medium py-2">Profile</a>
            <Link to="/" className="block text-red-600 font-medium py-2">Logout</Link>
          </div>
        )}
      </div>
    </nav>
  );
}
