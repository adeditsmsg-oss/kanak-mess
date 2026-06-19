'use client';

import React from 'react';
import { Wifi, ShieldCheck, Coffee, Zap, Sparkles, MapPin, Smile, FileText } from 'lucide-react';
import { TulipLeft, TulipRight } from './FlowerAccent';

export default function WhyChooseUs() {
  const points = [
    {
      title: 'Peaceful Saratpally Location',
      desc: 'Situated in a calm, study-friendly residential neighborhood, away from noisy highways but close to transport lines.',
      icon: MapPin,
    },
    {
      title: 'Consistent Dining Excellence',
      desc: 'Known locally for high food quality. Hot daily meals prepared under hygienic conditions, serving healthy home-style plates.',
      icon: Coffee,
    },
    {
      title: 'Active Daily Cleaning Service',
      desc: 'Housekeeping staff handles sanitation of all shared washrooms, lobby areas, and corridors daily.',
      icon: Sparkles,
    },
    {
      title: 'Transparent Pricing Structure',
      desc: 'Rent packages cover high-speed Wi-Fi, electricity base limits, housekeeping, and meals. No unexpected hidden bills.',
      icon: FileText,
    }
  ];

  return (
    <section id="why-us" className="py-24 bg-creamCard relative overflow-hidden">
      
      {/* Elegant margin flower accents */}
      <TulipLeft />
      <TulipRight />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
        
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-sm font-bold uppercase tracking-widest text-accentRose font-bengali">কেন আমরা সেরা (Why Choose Us)</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-primaryGreen mt-2 font-serif">What Makes Kanak Mess Different?</h2>
          <p className="text-charcoalText/80 mt-4 leading-relaxed text-sm sm:text-base">
            We solve the common pain points of local student PGs in Midnapore by prioritizing food quality, cleanliness, and security.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {points.map((item, index) => (
            <div
              key={index}
              className="bg-whitePure p-6 rounded-3xl border border-greyBorder/50 shadow-sm hover:border-accentOrange hover:shadow-md transition-all duration-300 text-left flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="p-3.5 bg-primaryGreen/5 text-primaryGreen rounded-2xl w-fit">
                  <item.icon size={22} strokeWidth={2.5} />
                </div>
                <h3 className="font-bold text-primaryGreen text-base font-serif">{item.title}</h3>
                <p className="text-xs text-charcoalText/75 leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
