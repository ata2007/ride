import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import Button from "./Common/Button";

export default function NavbarGuest() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-md border-b border-orange-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center">
            <span className="text-2xl font-black text-orange-600 tracking-tight">DESTINATION</span>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            <a href="/#book" className="text-slate-700 hover:text-orange-600 font-medium transition-all duration-200 transform hover:-translate-y-0.5">Book Ride</a>
            <a href="/#features" className="text-slate-700 hover:text-orange-600 font-medium transition-all duration-200 transform hover:-translate-y-0.5">Features</a>
            <Link to="/faq" className="text-slate-700 hover:text-orange-600 font-medium transition-all duration-200 transform hover:-translate-y-0.5">FAQ</Link>
            <Link to="/about" className="text-slate-700 hover:text-orange-600 font-medium transition-all duration-200 transform hover:-translate-y-0.5">About</Link>
          </div>

          <div className="hidden md:flex items-center gap-3">
            <Link to="/auth">
              <Button variant="ghost">Login</Button>
            </Link>
            <Link to="/auth?signup=true">
              <Button>Sign Up</Button>
            </Link>
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
            <a href="#features" className="block text-slate-700 font-medium py-2">Features</a>
            <a href="#vehicles" className="block text-slate-700 font-medium py-2">Vehicles</a>
            <a href="#faq" className="block text-slate-700 font-medium py-2">FAQ</a>
            <div className="flex gap-2 pt-2">
              <Link to="/auth" className="flex-1">
                <Button variant="secondary" className="w-full">Login</Button>
              </Link>
              <Link to="/auth?signup=true" className="flex-1">
                <Button className="w-full">Sign Up</Button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
