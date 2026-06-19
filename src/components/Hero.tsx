import React from 'react';
import { ShieldCheck, Coffee, BookOpen, ChevronRight, MessageSquare, Star } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen pt-28 pb-16 flex items-center justify-center overflow-hidden bg-sandBg alpana-pattern">
      {/* Decorative Warm Backdrops */}
      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-terracotta/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-goldBrand/5 rounded-full blur-[120px] pointer-events-none" />

      {/* Main Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
        
        {/* LEFT COLUMN: Premium Asymmetric Typography */}
        <div className="lg:col-span-7 space-y-8 text-left">
          <div className="inline-flex items-center space-x-2 bg-terracotta/10 border border-terracotta/20 px-4 py-2 rounded-full text-terracotta text-sm font-semibold tracking-wide">
            <span className="w-2.5 h-2.5 rounded-full bg-terracotta animate-ping" />
            <span>Admission Open | 2026 Session</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight text-primaryDark">
            <span className="font-bengali block text-2xl sm:text-3xl text-goldBrand font-medium mb-3">
              নিজের ঘরের শান্তি, অতুলনীয় স্বাদের আহার।
            </span>
            Premium Paying Guest <br />
            <span className="text-terracotta text-3xl sm:text-4xl lg:text-5xl font-black relative">
              Starting at ₹999/mo
              <span className="absolute -bottom-1 left-0 w-full h-1 bg-goldAccent/40 rounded-full"></span>
            </span>
          </h1>

          <p className="text-base sm:text-lg text-charcoalText/90 leading-relaxed max-w-xl">
            Kanak Mess Cum Paying Guest provides comfortable marble floor rooms and a highly praised daily mess in Saratpally, Midnapore. Discover an clean, secure second home designed carefully for students and professionals.
          </p>

          {/* Call To Actions */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
            <a
              href="#contact"
              className="flex items-center justify-center space-x-2 bg-terracotta text-white px-8 py-4 rounded-2xl font-bold hover:bg-primaryDark transition-all duration-300 transform hover:-translate-y-1 shadow-lg shadow-terracotta/20"
            >
              <span>Book A Seat</span>
              <ChevronRight size={18} />
            </a>
            
            <a
              href="https://wa.me/91873083395?text=Hi!%20I%20am%20interested%20in%20Kanak%20Mess%20Cum%20Paying%20Guest.%20Please%20share%20room%20availability."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center space-x-2 bg-white text-charcoalText border border-greyBorder px-8 py-4 rounded-2xl font-bold hover:bg-sandBg transition-all duration-300 shadow-sm"
            >
              <MessageSquare size={18} className="text-green-600 fill-green-600" />
              <span>Chat on WhatsApp</span>
            </a>
          </div>

          {/* Quick Features List */}
          <div className="pt-8 border-t border-greyBorder/50 grid grid-cols-3 gap-6">
            <div className="space-y-1">
              <div className="flex items-center text-primaryDark font-bold">
                <ShieldCheck size={18} className="mr-1.5 text-terracotta" />
                <span>Gated Security</span>
              </div>
              <p className="text-xs text-charcoalText/60">24/7 CCTV & Warden</p>
            </div>
            <div className="space-y-1">
              <div className="flex items-center text-primaryDark font-bold">
                <Coffee size={18} className="mr-1.5 text-terracotta" />
                <span>Daily Mess</span>
              </div>
              <p className="text-xs text-charcoalText/60">Hygienic Bengali Food</p>
            </div>
            <div className="space-y-1">
              <div className="flex items-center text-primaryDark font-bold">
                <BookOpen size={18} className="mr-1.5 text-terracotta" />
                <span>Modern Rooms</span>
              </div>
              <p className="text-xs text-charcoalText/60">Clean Marble Floors</p>
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN: Redesigned Overlapping Card Collage */}
        <div className="lg:col-span-5 relative flex items-center justify-center">
          <div className="relative w-full max-w-[380px] sm:max-w-[420px] aspect-[4/5] z-10">
            {/* Background Accent Box */}
            <div className="absolute -inset-4 bg-gradient-to-tr from-goldBrand to-terracotta rounded-[2.5rem] opacity-10 blur-xl -z-10" />
            
            {/* Primary Large Image */}
            <div className="w-full h-full rounded-[2.5rem] overflow-hidden shadow-2xl border-8 border-white transform -rotate-2 hover:rotate-0 transition-transform duration-500 relative">
              <img
                src={`${import.meta.env.BASE_URL}images/building.jpg`}
                alt="Kanak Mess Saratpally Building"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primaryDark/80 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 text-white text-left">
                <p className="text-xs uppercase font-extrabold tracking-wider text-goldBrand">Saratpally, Midnapore</p>
                <h3 className="text-xl font-bold mt-1">Kanak Mess & PG Front</h3>
              </div>
            </div>

            {/* Overlapping Small Floating Card 1 */}
            <div className="absolute -bottom-6 -left-10 bg-white p-4 rounded-2xl shadow-2xl border border-greyBorder/30 flex items-center space-x-3 max-w-[200px] transform rotate-3 hover:scale-105 transition-transform">
              <div className="w-10 h-10 rounded-xl overflow-hidden flex-shrink-0">
                <img
                  src={`${import.meta.env.BASE_URL}images/bedroom_green.jpg`}
                  alt="Cozy Room"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="text-left">
                <p className="text-[10px] uppercase font-bold text-terracotta">Modern Living</p>
                <p className="text-xs font-extrabold text-primaryDark">Cozy Clean Rooms</p>
              </div>
            </div>

            {/* Overlapping Small Floating Card 2 */}
            <div className="absolute -top-6 -right-6 bg-primaryDark text-white p-4 rounded-2xl shadow-2xl flex flex-col items-center justify-center transform rotate-6 hover:scale-105 transition-transform">
              <div className="flex items-center text-goldBrand space-x-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={12} className="fill-goldBrand" />
                ))}
              </div>
              <p className="text-[10px] font-bold text-white/70 uppercase tracking-widest mt-1">Rated 4.6 on Google</p>
              <p className="text-xs font-extrabold text-goldBrand mt-0.5">Best Student PG</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
