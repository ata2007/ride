import { ChevronDown } from "lucide-react";
import { useState } from "react";
import NavbarGuest from "../components/NavbarGuest";
import Footer from "../components/Footer";
import Card from "../components/Common/Card";

export default function FAQ() {
  const [openId, setOpenId] = useState(0);

  const faqs = [
    {
      q: "How do I book a ride?",
      a: "Enter your pickup and destination, choose a vehicle type, and confirm. Our driver will arrive shortly with real-time tracking.",
    },
    {
      q: "What payment methods do you accept?",
      a: "We accept credit cards, debit cards, mobile wallets, and in-app credit. All payments are secure and encrypted.",
    },
    {
      q: "Can I cancel my ride?",
      a: "Yes, you can cancel free of charge up to 2 minutes after booking. After that, cancellation fees may apply.",
    },
    {
      q: "Is my data safe?",
      a: "Yes, we use industry-standard encryption and privacy protocols. Your data is never shared without consent.",
    },
    {
      q: "How do I rate my driver?",
      a: "After your ride, you'll receive a prompt to rate your driver. Your feedback helps us maintain high-quality service.",
    },
    {
      q: "What if I have an accident?",
      a: "Report immediately through the app to emergency support. We provide instant assistance and insurance coverage.",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-orange-50/50 to-white">
      <NavbarGuest />

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-black text-slate-900 mb-4">
            Frequently Asked Questions
          </h1>
          <p className="text-lg text-slate-600">
            Find answers to common questions about DESTINATION
          </p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, idx) => (
            <Card
              key={idx}
              className={`p-4 cursor-pointer transition ${
                openId === idx ? "border-orange-500 bg-orange-50" : "border-orange-100"
              }`}
              onClick={() => setOpenId(openId === idx ? -1 : idx)}
            >
              <div className="flex items-start justify-between gap-4">
                <h3 className="font-bold text-slate-900 flex-1">{faq.q}</h3>
                <ChevronDown
                  size={20}
                  className={`text-orange-600 transition-transform flex-shrink-0 ${
                    openId === idx ? "rotate-180" : ""
                  }`}
                />
              </div>
              {openId === idx && (
                <p className="mt-4 text-slate-600 pt-4 border-t border-orange-200">{faq.a}</p>
              )}
            </Card>
          ))}
        </div>

        <div className="mt-16 p-8 bg-gradient-to-r from-orange-50 to-orange-100 rounded-3xl border border-orange-200 text-center">
          <h2 className="text-2xl font-black text-slate-900 mb-3">Still need help?</h2>
          <p className="text-slate-700 mb-4">
            Contact our 24/7 support team for instant assistance
          </p>
          <button className="bg-orange-600 hover:bg-orange-700 text-white px-6 py-2.5 rounded-full font-semibold transition">
            Contact Support
          </button>
        </div>
      </main>

      <Footer />
    </div>
  );
}
