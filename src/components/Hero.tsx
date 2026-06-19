'use client';

import React from 'react';
import { MessageSquare, Calendar, ShieldCheck, MapPin, ChevronRight } from 'lucide-react';
import Image from 'next/image';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen pt-32 pb-20 flex items-center justify-center overflow-hidden bg-creamBg floral-backdrop">
      
      {/* Decorative Blur Backdrops */}
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-primaryGreen/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 left-1/4 w-[400px] h-[400px] bg-accentRose/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
        
        {/* Left Content Column */}
        <div className="lg:col-span-7 text-left space-y-8">
          
          {/* Alert Banner */}
          <div className="inline-flex items-center space-x-3 bg-accentRose/15 border border-accentRose/30 px-5 py-2.5 rounded-2xl text-accentRose text-xs sm:text-sm font-bold uppercase tracking-wider shadow-sm animate-pulse">
            <Calendar size={16} />
            <span>Admission Open for 2026 Session | Saratpally</span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-primaryGreen leading-tight tracking-tight">
            <span className="font-bengali block text-2xl sm:text-3xl text-goldBrand font-medium mb-3">
              নিজের ঘরের শান্তি, অতুলনীয় স্বাদের আহার।
            </span>
            Premium PG & Mess <br className="hidden sm:inline" />
            <span className="text-accentRose">Starting at ₹999/mo</span>
          </h1>

          <p className="text-base sm:text-lg text-charcoalText/90 leading-relaxed max-w-xl">
            Kanak Mess Cum Paying Guest provides comfortable marble floor rooms and a highly praised daily mess in Saratpally, Midnapore. Discover an clean, secure second home designed carefully for students and professionals looking for quality on a budget.
          </p>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
            <a
              href="#services"
              className="flex items-center justify-center space-x-2 bg-primaryGreen text-whitePure px-8 py-4 rounded-2xl font-bold uppercase tracking-wider hover:bg-accentRose transition-all duration-300 transform hover:-translate-y-1 shadow-lg shadow-primaryGreen/20 text-xs sm:text-sm"
            >
              <span>Explore Room Packages</span>
              <ChevronRight size={16} />
            </a>
            
            <a
              href="https://wa.me/91873083395?text=Hi!%20I%20am%20interested%20in%20Kanak%20Mess%20Cum%20Paying%20Guest.%20Please%20share%20room%20availability."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center space-x-2 bg-whitePure text-charcoalText border border-greyBorder px-8 py-4 rounded-2xl font-bold uppercase tracking-wider hover:bg-creamBg transition-all duration-300 shadow-sm text-xs sm:text-sm"
            >
              <MessageSquare size={18} className="text-green-600 fill-green-600" />
              <span>Chat on WhatsApp</span>
            </a>
          </div>

          {/* Quick trust lists */}
          <div className="pt-8 border-t border-greyBorder/50 grid grid-cols-3 gap-6">
            <div className="space-y-1">
              <div className="flex items-center text-primaryGreen font-extrabold text-sm">
                <ShieldCheck size={16} className="mr-1.5 text-accentRose" />
                <span>Gated Security</span>
              </div>
              <p className="text-xs text-charcoalText/75">24/7 CCTV Monitoring</p>
            </div>
            <div className="space-y-1">
              <div className="flex items-center text-primaryGreen font-extrabold text-sm">
                <MapPin size={16} className="mr-1.5 text-accentRose" />
                <span>Saratpally</span>
              </div>
              <p className="text-xs text-charcoalText/75">Midnapore Town</p>
            </div>
            <div className="space-y-1">
              <div className="flex items-center text-primaryGreen font-extrabold text-sm">
                <span className="text-accentRose mr-1.5 font-black">★</span>
                <span>4.6 Rated</span>
              </div>
              <p className="text-xs text-charcoalText/75">Excellent Google Reviews</p>
            </div>
          </div>
        </div>

        {/* Right Visual Image Column */}
        <div className="lg:col-span-5 relative flex items-center justify-center">
          
          {/* Main image container */}
          <div className="relative w-full max-w-[360px] sm:max-w-[400px] aspect-[4/5] z-10">
            {/* Background Decorative Gold Accent Box */}
            <div className="absolute -inset-3 bg-gradient-to-tr from-goldBrand to-accentRose rounded-[2.5rem] opacity-10 blur-xl -z-10" />

            <div className="w-full h-full rounded-[2.5rem] overflow-hidden shadow-2xl border-[10px] border-whitePure transform -rotate-1 hover:rotate-0 transition-transform duration-500 relative">
              <Image
                src="/kanak-mess/images/building.jpg"
                alt="Kanak Mess Saratpally Campus View"
                fill
                priority
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primaryGreen/80 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 text-whitePure text-left">
                <p className="text-xs uppercase font-extrabold tracking-widest text-goldBrand">Saratpally Property</p>
                <h3 className="text-xl font-bold mt-1 text-whitePure font-serif">Front Daylight View</h3>
              </div>
            </div>

            {/* Overlapping Small Float Card 1: Bedroom */}
            <div className="absolute -bottom-6 -left-10 bg-whitePure p-3 rounded-2xl shadow-xl border border-greyBorder flex items-center space-x-3 max-w-[190px] transform rotate-3 hover:scale-105 transition-transform">
              <div className="w-12 h-12 rounded-xl overflow-hidden relative flex-shrink-0">
                <Image
                  src="/kanak-mess/images/bedroom_green.jpg"
                  alt="Cozy Marble Rooms"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="text-left">
                <p className="text-[9px] uppercase font-bold text-accentRose">Clean Spaces</p>
                <p className="text-xs font-extrabold text-primaryGreen">Cozy Study Bedrooms</p>
              </div>
            </div>

            {/* Overlapping Float Card 2: Safe Indicator */}
            <div className="absolute -top-6 -right-6 bg-primaryGreen text-whitePure p-4 rounded-2xl shadow-xl text-center transform rotate-6 hover:scale-105 transition-transform flex flex-col items-center">
              <span className="text-goldBrand font-black text-sm">★★★★★</span>
              <p className="text-[10px] text-whitePure/85 uppercase tracking-wider font-bold mt-1">Google Score</p>
              <p className="text-xs font-extrabold text-goldBrand">4.6 Rated Mess</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
