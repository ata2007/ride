import { useState } from "react";
import { Menu, X, Home, LogOut } from "lucide-react";
import { Link } from "react-router-dom";

export default function Sidebar({ links, mode = "rider" }) {
  const [open, setOpen] = useState(false);

  const modeColor = mode === "driver" ? "orange" : "orange";

  return (
    <>
      <button
        className="fixed bottom-6 right-6 z-40 md:hidden p-3 rounded-full bg-orange-500 text-white shadow-lg"
        onClick={() => setOpen(!open)}
      >
        {open ? <X size={24} /> : <Menu size={24} />}
      </button>

      <aside
        className={`fixed md:sticky left-0 top-16 w-64 h-screen md:h-[calc(100vh-4rem)] bg-white border-r border-orange-100 transition-transform duration-300 z-30 ${
          open ? "translate-x-0" : "-translate-x-full md:translate-x-0"
        }`}
      >
        <nav className="p-4 space-y-1">
          {links.map((link) => {
            const Icon = link.icon;
            return (
              <Link
                key={link.id}
                to={link.href}
                onClick={() => setOpen(false)}
                className="flex items-center gap-3 px-4 py-3 rounded-lg text-slate-700 hover:bg-orange-50 hover:text-orange-600 transition font-medium"
              >
                <Icon size={20} />
                {link.label}
              </Link>
            );
          })}

          <hr className="my-2 border-orange-100" />

          <Link
            to="/"
            onClick={() => setOpen(false)}
            className="flex items-center gap-3 px-4 py-3 rounded-lg text-red-600 hover:bg-red-50 transition font-medium"
          >
            <LogOut size={20} />
            Logout
          </Link>
        </nav>
      </aside>

      {open && <div className="fixed inset-0 bg-black/50 md:hidden z-20" onClick={() => setOpen(false)} />}
    </>
  );
}
