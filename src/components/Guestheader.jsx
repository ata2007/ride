import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function GuestHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="w-full bg-white shadow-sm fixed top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">

        {/* Logo */}
        <h1 className="text-2xl font-bold text-black">
          DESTINATION
        </h1>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center gap-8 text-black font-medium">
          <a href="#" className="hover:text-[#FFCF40] transition">Home</a>
          <a href="#" className="hover:text-[#FFCF40] transition">How it Works</a>
          <a href="#" className="hover:text-[#FFCF40] transition">Become Driver</a>
        </nav>

        {/* Buttons */}
        <div className="hidden md:flex items-center gap-4">
          <button className="font-medium hover:text-[#FFCF40]">
            Login
          </button>

          <button className="bg-[#FFCF40] hover:bg-[#FFD77A] text-black px-5 py-2 rounded-full font-semibold transition">
            Register
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden"
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-white border-t">
          <div className="flex flex-col gap-5 p-6 font-medium">
            <a href="#">Home</a>
            <a href="#">How it Works</a>
            <a href="#">Become Driver</a>
            <button className="text-left">Login</button>

            <button className="bg-[#FFCF40] text-black py-2 rounded-full font-semibold">
              Register
            </button>
          </div>
        </div>
      )}
    </header>
  );
}