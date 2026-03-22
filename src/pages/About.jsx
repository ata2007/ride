import { Target, Users, Globe, Award } from "lucide-react";
import NavbarGuest from "../components/NavbarGuest";
import Footer from "../components/Footer";
import Card from "../components/Common/Card";
import Button from "../components/Common/Button";
import { Link } from "react-router-dom";

export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-orange-50/50 to-white">
      <NavbarGuest />

      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-black text-slate-900 mb-4">
            About DESTINATION
          </h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Redefining urban mobility through technology, safety, and community
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Our Mission</h2>
            <p className="text-slate-700 leading-relaxed mb-4">
              DESTINATION is dedicated to providing safe, reliable, and affordable ride-sharing services that connect people and communities. We believe in making urban mobility accessible to everyone.
            </p>
            <p className="text-slate-700 leading-relaxed">
              Our platform empowers drivers to earn on their own schedule while ensuring riders enjoy seamless, transparent, and trustworthy transportation.
            </p>
          </div>
          <div className="rounded-2xl bg-gradient-to-br from-orange-100 to-orange-50 p-8 border border-orange-200">
            <div className="space-y-4">
              <div>
                <p className="text-3xl font-black text-orange-600">250K+</p>
                <p className="text-slate-700 font-medium">Active Riders</p>
              </div>
              <div>
                <p className="text-3xl font-black text-orange-600">12K+</p>
                <p className="text-slate-700 font-medium">Professional Drivers</p>
              </div>
              <div>
                <p className="text-3xl font-black text-orange-600">2M+</p>
                <p className="text-slate-700 font-medium">Rides Completed</p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-4 gap-6 mb-16">
          {[
            {
              icon: Target,
              title: "Our Vision",
              text: "Transform transportation through innovation and customer care",
            },
            {
              icon: Users,
              title: "Our Community",
              text: "Build meaningful relationships between riders and drivers",
            },
            {
              icon: Globe,
              title: "Global Impact",
              text: "Expanding sustainable mobility solutions worldwide",
            },
            {
              icon: Award,
              title: "Excellence",
              text: "Maintain highest standards of service quality",
            },
          ].map((item, idx) => {
            const Icon = item.icon;
            return (
              <Card key={idx} className="p-6 text-center">
                <Icon size={32} className="mx-auto text-orange-600 mb-3" />
                <h3 className="font-bold text-slate-900 mb-2">{item.title}</h3>
                <p className="text-sm text-slate-600">{item.text}</p>
              </Card>
            );
          })}
        </div>

        <div className="bg-gradient-to-r from-slate-900 to-slate-800 rounded-3xl p-12 text-white text-center mb-16">
          <h2 className="text-3xl font-black mb-4">Ready to Join Us?</h2>
          <p className="text-slate-300 mb-6 max-w-2xl mx-auto">
            Whether you're a rider looking for reliable transportation or a driver seeking to earn, DESTINATION is your partner.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link to="/auth?signup=true">
              <Button variant="secondary" size="lg" className="bg-orange-600 text-white hover:bg-orange-700">
                Become a Rider
              </Button>
            </Link>
            <Button variant="secondary" size="lg" className="bg-white text-orange-600 hover:bg-orange-50">
              Become a Driver
            </Button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
