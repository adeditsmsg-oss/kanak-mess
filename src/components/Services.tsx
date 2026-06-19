'use client';

import React from 'react';
import { Check, ArrowRight, Star } from 'lucide-react';

export default function Services() {
  const rooms = [
    {
      id: 'triple',
      name: 'Triple Sharing',
      banglaName: 'সাশ্রয়ী ট্রিপল বেড',
      price: '999',
      period: 'Per Month',
      popular: false,
      description: 'Extremely budget-friendly choice featuring friendly community living, perfect for college students.',
      features: ['Individual Single Bed', 'Shared Wardrobe Space', 'Access to Common Study Lobby', 'All Standard Utilities Included'],
      image: '/kanak-mess/images/bedroom_green.jpg'
    },
    {
      id: 'double',
      name: 'Double Sharing',
      banglaName: 'জনপ্রিয় ডাবল বেড',
      price: '1,500',
      period: 'Per Month',
      popular: true,
      description: 'Our most balanced package offering ample privacy and cozy shared study environments.',
      features: ['Two Beds & Study Desks', 'Spacious Room Layout', 'Shared Wardrobe Space', 'High-Speed Wi-Fi & Electricity'],
      image: '/kanak-mess/images/bedroom_green.jpg'
    },
    {
      id: 'single',
      name: 'Single Room',
      banglaName: 'প্রাইভেট সিঙ্গেল বেড',
      price: '2,500',
      period: 'Per Month',
      popular: false,
      description: 'Ideal option for job seekers and boarders seeking absolute privacy and quiet study space.',
      features: ['Personal Bed & Study Desk', 'Attached Balcony (Optional)', 'Individual Wardrobe & Storage', 'High-Speed Wi-Fi'],
      image: '/kanak-mess/images/bedroom_yellow.jpg'
    }
  ];

  return (
    <section id="services" className="py-24 bg-creamBg text-charcoalText relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-sm font-bold uppercase tracking-widest text-accentRose font-bengali">রুম ও সুযোগ-সুবিধা (Services)</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-primaryGreen mt-2 font-serif">Affordable Room Packages</h2>
          <p className="text-charcoalText/80 mt-4 leading-relaxed text-sm sm:text-base">
            Select the perfect budget accommodation. All our packages include daily dining, standard utilities, and housekeeping.
          </p>
        </div>

        {/* Pricing Cards (3 Column Grid - Replicating reference image layout with stars under title) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {rooms.map((room) => (
            <div
              key={room.id}
              className={`bg-whitePure rounded-3xl overflow-hidden border transition-all duration-300 flex flex-col justify-between hover:shadow-xl ${
                room.popular
                  ? 'border-accentOrange ring-2 ring-accentOrange relative scale-105 z-10 shadow-xl'
                  : 'border-greyBorder/50 shadow-md'
              }`}
            >
              {room.popular && (
                <div className="absolute top-4 right-4 bg-accentOrange text-whitePure text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                  Popular
                </div>
              )}

              {/* Card Header & Visual */}
              <div>
                <div className="h-52 overflow-hidden bg-creamCard relative">
                  <img
                    src={room.image}
                    alt={room.name}
                    className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
                  />
                </div>

                <div className="p-6 sm:p-8 space-y-4 text-left">
                  <div>
                    <span className="text-[10px] uppercase tracking-wider text-accentRose font-bold font-bengali block">{room.banglaName}</span>
                    <h3 className="text-xl font-bold text-primaryGreen mt-1 font-serif">{room.name}</h3>
                    
                    {/* Stars Rating immediately under title - Like the reference image */}
                    <div className="flex items-center space-x-0.5 text-goldBrand mt-1.5">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} size={12} className="fill-goldBrand" />
                      ))}
                    </div>
                  </div>

                  <p className="text-xs text-charcoalText/75 leading-relaxed">{room.description}</p>

                  <div className="pt-4 border-t border-greyBorder/30 space-y-2">
                    {room.features.map((feature, i) => (
                      <div key={i} className="flex items-start space-x-2 text-xs text-charcoalText/85">
                        <Check size={14} className="text-primaryGreen mt-0.5 flex-shrink-0" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Card Footer */}
              <div className="p-6 sm:p-8 pt-0 border-t border-greyBorder/10 flex items-center justify-between">
                <div>
                  <span className="text-2xl font-black text-primaryGreen font-serif">₹{room.price}</span>
                  <span className="text-[10px] text-charcoalText/55 block font-semibold">{room.period}</span>
                </div>
                <a
                  href="#contact"
                  className={`px-5 py-2.5 rounded-xl font-bold text-xs uppercase tracking-wider transition-colors flex items-center space-x-1 ${
                    room.popular
                      ? 'bg-accentOrange text-whitePure hover:bg-accentHover shadow-sm'
                      : 'bg-creamCard text-charcoalText hover:bg-accentOrange hover:text-whitePure'
                  }`}
                >
                  <span>Book Seat</span>
                  <ArrowRight size={12} />
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
