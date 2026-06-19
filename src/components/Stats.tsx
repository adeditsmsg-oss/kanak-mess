'use client';

import React from 'react';

export default function Stats() {
  const stats = [
    { value: '4.6 ★', label: 'Google Rating', desc: 'Highly rated for home food & clean rooms.' },
    { value: '5+ Years', label: 'Experience', desc: 'Serving Saratpally boarders since 2020.' },
    { value: '100%', label: 'Security Record', desc: 'No safety incident reported since launch.' },
    { value: '80+', label: 'Happy Boarders', desc: 'Trusted by local college and university students.' }
  ];

  return (
    <section className="py-16 bg-primaryGreen text-whitePure relative overflow-hidden">
      <div className="absolute inset-0 opacity-5 floral-backdrop" />
      
      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          {stats.map((stat, idx) => (
            <div key={idx} className="space-y-2 group">
              <span className="text-4xl sm:text-5xl font-black text-goldBrand block transition-transform duration-300 group-hover:scale-105 font-serif">
                {stat.value}
              </span>
              <h4 className="font-bold text-sm sm:text-base text-whitePure/90 uppercase tracking-widest font-sans">
                {stat.label}
              </h4>
              <p className="text-xs text-whitePure/60 max-w-[200px] mx-auto leading-relaxed">
                {stat.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
