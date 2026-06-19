'use client';

import React from 'react';
import { FormInput, Eye, ShieldCheck } from 'lucide-react';

export default function Process() {
  const steps = [
    {
      step: '01',
      title: 'Online Enquiry',
      description: 'Fill out the room availability form or call us directly via phone.',
      icon: FormInput
    },
    {
      step: '02',
      title: 'Hostel Visit',
      description: 'Schedule a visit to Saratpally to inspect our rooms, lobby, and dining facilities.',
      icon: Eye
    },
    {
      step: '03',
      title: 'Easy Move-In',
      description: 'Select your preferred sharing style, submit the deposit, and move in immediately.',
      icon: ShieldCheck
    }
  ];

  return (
    <section className="py-24 bg-creamBg text-charcoalText border-t border-greyBorder/30 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-sm font-bold uppercase tracking-widest text-accentRose font-bengali">ভর্তির সহজ পদ্ধতি (Process)</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-primaryGreen mt-2 font-serif">3 Simple Steps to Move In</h2>
          <p className="text-charcoalText/80 mt-4 leading-relaxed text-sm sm:text-base">
            Booking a secure room and daily dining service at Kanak PG is transparent and quick.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          
          {/* Connector line for large screens */}
          <div className="hidden md:block absolute top-1/2 left-[15%] right-[15%] h-0.5 bg-primaryGreen/10 -translate-y-1/2 pointer-events-none" />

          {steps.map((step, idx) => (
            <div
              key={idx}
              className="bg-whitePure p-8 rounded-3xl border border-greyBorder/50 relative z-10 hover:border-primaryGreen transition-all duration-300 text-center space-y-4 hover:shadow-lg"
            >
              <div className="absolute top-4 right-4 text-primaryGreen/20 text-3xl font-black font-serif">
                {step.step}
              </div>
              <div className="w-16 h-16 rounded-2xl bg-primaryGreen/5 text-primaryGreen flex items-center justify-center mx-auto">
                <step.icon size={28} />
              </div>
              <h3 className="font-bold text-lg text-primaryGreen font-serif">{step.title}</h3>
              <p className="text-xs text-charcoalText/80 leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
