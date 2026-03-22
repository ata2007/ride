import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import './index.css'

import ErrorBoundary from "./components/ErrorBoundary"
import Home from "./pages/Home"
import Auth from "./pages/Auth"
import RiderDashboard from "./pages/RiderDashboard"
import DriverDashboard from "./pages/DriverDashboard"
import Profile from "./pages/Profile"
import Settings from "./pages/Settings"
import FAQ from "./pages/FAQ"
import About from "./pages/About"

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ErrorBoundary>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/rider" element={<RiderDashboard />} />
          <Route path="/driver" element={<DriverDashboard />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </BrowserRouter>
    </ErrorBoundary>
  </StrictMode>
)
