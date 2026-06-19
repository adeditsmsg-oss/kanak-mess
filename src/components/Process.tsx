import React from 'react';
import { FormInput, Eye, Key } from 'lucide-react';

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
      icon: Key
    }
  ];

  return (
    <section className="py-20 bg-sandBg text-charcoalText border-t border-greyBorder/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-sm font-bold uppercase tracking-widest text-goldBrand font-bengali">ভর্তির সহজ পদ্ধতি (Process)</span>
          <h2 className="text-3xl sm:text-4xl font-bold mt-2">3 Simple Steps to Move In</h2>
          <p className="text-charcoalText/70 mt-4 leading-relaxed">
            Booking a secure room and daily dining service at Kanak PG is transparent and quick.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          
          {/* Connector line for large screens */}
          <div className="hidden md:block absolute top-1/2 left-[15%] right-[15%] h-0.5 bg-tealBrand/10 -translate-y-1/2 pointer-events-none" />

          {steps.map((step, idx) => (
            <div
              key={idx}
              className="bg-white p-8 rounded-2xl border border-greyBorder/20 relative z-10 hover:border-tealBrand transition-all duration-300 text-center space-y-4 hover:shadow-lg"
            >
              <div className="absolute top-4 right-4 text-tealBrand/20 text-3xl font-extrabold font-bengali">
                {step.step}
              </div>
              <div className="w-16 h-16 rounded-2xl bg-tealBrand/10 text-tealBrand flex items-center justify-center mx-auto">
                <step.icon size={28} />
              </div>
              <h3 className="font-bold text-lg text-charcoalText">{step.title}</h3>
              <p className="text-sm text-charcoalText/70 leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
