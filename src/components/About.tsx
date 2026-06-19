'use client';

import React from 'react';
import { ShieldCheck, Heart, Coffee } from 'lucide-react';
import Image from 'next/image';

export default function About() {
  const values = [
    {
      title: 'Reliable Curated Security',
      description: 'Gated facility monitored by standard boundary CCTV systems and verified guest locks.',
      icon: ShieldCheck,
    },
    {
      title: 'Famous On-site Mess Dining',
      description: 'Well-regarded daily mess serving consistent, high-quality home-cooked Bengali meals.',
      icon: Coffee,
    },
    {
      title: 'Worry-Free Guardianship',
      description: 'Helpful property warden resides nearby to offer continuous support to boarders.',
      icon: Heart,
    }
  ];

  return (
    <section id="about" className="py-24 bg-creamCard relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Visual Grid Column */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="relative rounded-3xl overflow-hidden aspect-[3/4] shadow-md border-4 border-whitePure transform hover:scale-[1.02] transition-transform duration-300">
                  <Image
                    className="object-cover"
                    src="/kanak-mess/images/dining.jpg"
                    alt="Kanak Mess Dining Room"
                    fill
                  />
                </div>
                <div className="bg-primaryGreen p-6 rounded-3xl text-whitePure shadow-lg text-center transform hover:scale-[1.02] transition-transform duration-300">
                  <span className="text-3xl font-extrabold text-goldBrand block">4.6 ★</span>
                  <span className="text-xs uppercase tracking-wider font-semibold font-bengali">অসাধারণ রিভিউ (4.6 Rating)</span>
                </div>
              </div>

              <div className="space-y-4 pt-8">
                <div className="bg-whitePure p-6 rounded-3xl shadow-lg border border-greyBorder text-center transform hover:scale-[1.02] transition-transform duration-300">
                  <span className="text-3xl font-extrabold text-accentRose block">80+</span>
                  <span className="text-xs text-charcoalText/60 uppercase tracking-wider font-semibold font-sans">Happy Boarders</span>
                </div>
                <div className="relative rounded-3xl overflow-hidden aspect-[3/4] shadow-md border-4 border-whitePure transform hover:scale-[1.02] transition-transform duration-300">
                  <Image
                    className="object-cover"
                    src="/kanak-mess/images/bedroom_yellow.jpg"
                    alt="Comfortable Marble Room Setup"
                    fill
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Copy Column */}
          <div className="space-y-8 text-left">
            <div>
              <span className="text-sm font-bold uppercase tracking-widest text-accentRose font-bengali">আমাদের সম্পর্কে (About Us)</span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-primaryGreen mt-2 leading-tight">
                Premium Stay & Dining in Saratpally, Midnapore
              </h2>
              <p className="text-charcoalText/85 mt-4 leading-relaxed">
                Kanak Mess Cum Paying Guest is a highly trusted co-living property in Midnapore. Over the years, we have built an excellent reputation for hosting college students and job candidates. We prioritize cleanliness, safety, and delicious home-cooked meals to make your stay feel just like home.
              </p>
            </div>

            <div className="space-y-4">
              {values.map((item, idx) => (
                <div key={idx} className="flex items-start space-x-4 p-4 rounded-2xl hover:bg-whitePure hover:shadow-md transition-all duration-300">
                  <div className="p-3 bg-primaryGreen/10 text-primaryGreen rounded-xl flex-shrink-0">
                    <item.icon size={22} />
                  </div>
                  <div>
                    <h3 className="font-bold text-primaryGreen text-base">{item.title}</h3>
                    <p className="text-sm text-charcoalText/75 mt-1 leading-relaxed">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
