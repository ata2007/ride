import { useState } from "react";
import { Menu, X, User } from "lucide-react";

export default function RiderHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="w-full bg-white shadow-sm fixed top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">

        <h1 className="text-2xl font-bold">DESTINATION</h1>

        {/* Desktop Menu */}
        <nav className="hidden md:flex gap-8 font-medium">
          <a href="#" className="hover:text-[#FFCF40]">Book Ride</a>
          <a href="#" className="hover:text-[#FFCF40]">My Trips</a>
          <a href="#" className="hover:text-[#FFCF40]">Support</a>
        </nav>

        {/* Profile */}
        <div className="hidden md:flex items-center gap-3">
          <div className="bg-[#FFCF40] p-2 rounded-full">
            <User size={18}/>
          </div>
        </div>

        {/* Mobile */}
        <button
          className="md:hidden"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={26}/> : <Menu size={26}/>}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-white border-t">
          <div className="flex flex-col gap-5 p-6">
            <a href="#">Book Ride</a>
            <a href="#">My Trips</a>
            <a href="#">Support</a>
            <a href="#">Profile</a>
          </div>
        </div>
      )}
    </header>
  );
}