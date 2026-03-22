import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { Mail, Lock, User, Phone } from "lucide-react";
import Button from "../components/Common/Button";
import Card from "../components/Common/Card";

export default function Auth() {
  const [searchParams] = useSearchParams();
  const isSignup = searchParams.get("signup") === "true";
  const [mode, setMode] = useState(isSignup ? "signup" : "login");

  const [formData, setFormData] = useState({
    email: "",
    password: "",
    name: "",
    phone: "",
    userType: "rider",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-orange-50 flex items-center justify-center px-4">
      <Card className="w-full max-w-md p-8">
        <Link to="/" className="text-center mb-8 block">
          <h1 className="text-3xl font-black text-orange-600">DESTINATION</h1>
          <p className="text-sm text-slate-600 mt-1">Your Journey, Our Priority</p>
        </Link>

        <div className="flex gap-2 mb-8 bg-orange-100 p-1 rounded-lg">
          <button
            onClick={() => setMode("login")}
            className={`flex-1 py-2 rounded-md font-semibold transition ${
              mode === "login"
                ? "bg-white text-orange-600 shadow-sm"
                : "text-slate-600 hover:text-orange-600"
            }`}
          >
            Login
          </button>
          <button
            onClick={() => setMode("signup")}
            className={`flex-1 py-2 rounded-md font-semibold transition ${
              mode === "signup"
                ? "bg-white text-orange-600 shadow-sm"
                : "text-slate-600 hover:text-orange-600"
            }`}
          >
            Sign Up
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          {mode === "signup" && (
            <>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Full Name</label>
                <div className="flex items-center gap-2 border border-orange-200 rounded-lg px-3 py-2 focus-within:ring-2 focus-within:ring-orange-300">
                  <User size={18} className="text-orange-500" />
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    className="flex-1 outline-none bg-transparent"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Phone Number</label>
                <div className="flex items-center gap-2 border border-orange-200 rounded-lg px-3 py-2 focus-within:ring-2 focus-within:ring-orange-300">
                  <Phone size={18} className="text-orange-500" />
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+1 (555) 000-0000"
                    className="flex-1 outline-none bg-transparent"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">I am a</label>
                <select
                  name="userType"
                  value={formData.userType}
                  onChange={handleChange}
                  className="w-full border border-orange-200 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-300"
                >
                  <option value="rider">Rider</option>
                  <option value="driver">Driver</option>
                </select>
              </div>
            </>
          )}

          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">Email Address</label>
            <div className="flex items-center gap-2 border border-orange-200 rounded-lg px-3 py-2 focus-within:ring-2 focus-within:ring-orange-300">
              <Mail size={18} className="text-orange-500" />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="your@email.com"
                className="flex-1 outline-none bg-transparent"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">Password</label>
            <div className="flex items-center gap-2 border border-orange-200 rounded-lg px-3 py-2 focus-within:ring-2 focus-within:ring-orange-300">
              <Lock size={18} className="text-orange-500" />
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="••••••••"
                className="flex-1 outline-none bg-transparent"
              />
            </div>
          </div>

          {mode === "login" && (
            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center gap-2 text-slate-700">
                <input type="checkbox" className="w-4 h-4 rounded border-orange-300" />
                Remember me
              </label>
              <a href="#" className="text-orange-600 hover:text-orange-700 font-medium">
                Forgot Password?
              </a>
            </div>
          )}

          <Button type="submit" className="w-full">
            {mode === "login" ? "Sign In" : "Create Account"}
          </Button>
        </form>

        <div className="mt-6 space-y-3">
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-orange-200"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-white text-slate-600">Or continue with</span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-2">
            <button className="flex items-center justify-center gap-2 border border-orange-200 rounded-lg p-2 hover:bg-orange-50 transition">
              <span className="text-lg">G</span>
              <span className="text-sm font-medium text-slate-700">Google</span>
            </button>
            <button className="flex items-center justify-center gap-2 border border-orange-200 rounded-lg p-2 hover:bg-orange-50 transition">
              <span className="text-lg">f</span>
              <span className="text-sm font-medium text-slate-700">Facebook</span>
            </button>
          </div>
        </div>

        <p className="mt-6 text-center text-sm text-slate-600">
          {mode === "login" ? (
            <>
              Don't have an account?{" "}
              <button
                onClick={() => setMode("signup")}
                className="text-orange-600 hover:text-orange-700 font-semibold"
              >
                Sign up
              </button>
            </>
          ) : (
            <>
              Already have an account?{" "}
              <button
                onClick={() => setMode("login")}
                className="text-orange-600 hover:text-orange-700 font-semibold"
              >
                Log in
              </button>
            </>
          )}
        </p>
      </Card>
    </div>
  );
}
