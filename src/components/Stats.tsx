import React from 'react';

export default function Stats() {
  const stats = [
    { value: '4.6 ★', label: 'Google Rating', desc: 'Highly rated for food & accommodation.' },
    { value: '5+ Years', label: 'Experience', desc: 'Serving Saratpally boarders since 2020.' },
    { value: '100%', label: 'Security Record', desc: 'No safety incident reported since launch.' },
    { value: '80+', label: 'Happy Boarders', desc: 'Trusted by college and university students.' }
  ];

  return (
    <section className="py-16 bg-tealBrand text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-5 alpana-pattern" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          {stats.map((stat, idx) => (
            <div key={idx} className="space-y-2 group">
              <span className="text-4xl sm:text-5xl font-extrabold text-goldBrand block transition-transform duration-300 group-hover:scale-105">
                {stat.value}
              </span>
              <h4 className="font-bold text-sm sm:text-base text-white/90">
                {stat.label}
              </h4>
              <p className="text-xs text-white/60">
                {stat.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
