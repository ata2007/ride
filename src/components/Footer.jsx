import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin } from "lucide-react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-12 grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-black text-orange-500 mb-4">DESTINATION</h3>
            <p className="text-slate-400 text-sm mb-4">Your ride, your way. Fast, safe, and affordable rides in your city.</p>
            <div className="flex gap-3">
              <a href="#" className="bg-orange-600 hover:bg-orange-700 p-2 rounded-full transition">
                <Facebook size={16} />
              </a>
              <a href="#" className="bg-orange-600 hover:bg-orange-700 p-2 rounded-full transition">
                <Twitter size={16} />
              </a>
              <a href="#" className="bg-orange-600 hover:bg-orange-700 p-2 rounded-full transition">
                <Linkedin size={16} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-white mb-4">For Riders</h4>
            <ul className="space-y-2 text-slate-400 text-sm">
              <li><a href="#" className="hover:text-orange-500 transition">Book a Ride</a></li>
              <li><a href="#" className="hover:text-orange-500 transition">Ride Pricing</a></li>
              <li><a href="#" className="hover:text-orange-500 transition">Safety</a></li>
              <li><a href="#" className="hover:text-orange-500 transition">FAQ</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-white mb-4">For Drivers</h4>
            <ul className="space-y-2 text-slate-400 text-sm">
              <li><a href="#" className="hover:text-orange-500 transition">Become a Driver</a></li>
              <li><a href="#" className="hover:text-orange-500 transition">Driver Requirements</a></li>
              <li><a href="#" className="hover:text-orange-500 transition">Support</a></li>
              <li><a href="#" className="hover:text-orange-500 transition">Community</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-white mb-4">Contact</h4>
            <ul className="space-y-3 text-slate-400 text-sm">
              <li className="flex items-center gap-2">
                <Phone size={16} />
                <span>+1 (555) 000-0000</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={16} />
                <span>support@destination.com</span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin size={16} className="mt-0.5" />
                <span>123 City Ave, Your City 12345</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-700 py-6 text-center text-slate-400 text-sm">
          <p>&copy; 2024 DESTINATION Ride Sharing. All rights reserved.</p>
          <div className="mt-3 flex justify-center gap-4">
            <a href="#" className="hover:text-orange-500 transition">Privacy Policy</a>
            <a href="#" className="hover:text-orange-500 transition">Terms of Service</a>
            <a href="#" className="hover:text-orange-500 transition">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
