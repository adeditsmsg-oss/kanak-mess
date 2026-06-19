'use client';

import React, { useState } from 'react';
import { Phone, Search, Menu, X, HelpCircle } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#FAF8F3]/95 border-b border-greyBorder/30 py-4 shadow-xs">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="flex items-center justify-between gap-4">
          
          {/* Logo (Orange Circle Accent) */}
          <a href="#home" className="flex items-center space-x-2.5 flex-shrink-0">
            <div className="w-9 h-9 rounded-full bg-accentOrange flex items-center justify-center text-whitePure font-extrabold text-lg">
              K
            </div>
            <div>
              <span className="font-bengali text-lg sm:text-xl font-black text-charcoalText block leading-none">কনক মেস কাম পেয়িং গেস্ট</span>
              <span className="text-[9px] text-accentOrange font-extrabold uppercase tracking-widest block mt-0.5">Kanak Mess & PG</span>
            </div>
          </a>

          {/* Search Bar (Center - Exactly like the reference image) */}
          <div className="hidden md:flex items-center flex-1 max-w-sm relative">
            <Search className="absolute left-4 text-charcoalText/40 w-4 h-4" />
            <input
              type="text"
              placeholder="Search room style, meals..."
              className="w-full pl-11 pr-4 py-2.5 bg-whitePure border border-greyBorder rounded-full text-xs text-charcoalText placeholder-charcoalText/40 outline-none focus:border-accentOrange focus:ring-1 focus:ring-accentOrange transition-colors"
            />
          </div>

          {/* Nav Items (Right side) */}
          <div className="hidden lg:flex items-center space-x-6">
            <a href="#home" className="text-xs font-bold uppercase tracking-wider text-charcoalText hover:text-accentOrange transition-colors">Home</a>
            <a href="#about" className="text-xs font-bold uppercase tracking-wider text-charcoalText hover:text-accentOrange transition-colors">About Us</a>
            <a href="#services" className="text-xs font-bold uppercase tracking-wider text-charcoalText hover:text-accentOrange transition-colors">Packages</a>
            <a href="#why-us" className="text-xs font-bold uppercase tracking-wider text-charcoalText hover:text-accentOrange transition-colors">Amenities</a>
            
            <a
              href="#contact"
              className="bg-accentOrange hover:bg-accentHover text-whitePure px-6 py-2.5 rounded-full font-bold text-xs uppercase tracking-wider transition-all duration-300 shadow-sm shadow-accentOrange/10"
            >
              Get Started
            </a>
          </div>

          {/* Mobile menu toggle */}
          <div className="lg:hidden flex items-center space-x-2">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-charcoalText hover:text-accentOrange focus:outline-none p-1"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile drawer */}
      {isOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-[#FAF8F3] border-b border-greyBorder shadow-lg py-4 px-6 space-y-4 animate-fadeIn">
          {/* Mobile Search */}
          <div className="flex items-center relative">
            <Search className="absolute left-4 text-charcoalText/45 w-4 h-4" />
            <input
              type="text"
              placeholder="Search room style..."
              className="w-full pl-11 pr-4 py-2.5 bg-whitePure border border-greyBorder rounded-full text-xs text-charcoalText outline-none"
            />
          </div>
          <div className="flex flex-col space-y-3 text-left">
            <a href="#home" onClick={() => setIsOpen(false)} className="text-xs font-bold uppercase tracking-wider text-charcoalText hover:text-accentOrange">Home</a>
            <a href="#about" onClick={() => setIsOpen(false)} className="text-xs font-bold uppercase tracking-wider text-charcoalText hover:text-accentOrange">About Us</a>
            <a href="#services" onClick={() => setIsOpen(false)} className="text-xs font-bold uppercase tracking-wider text-charcoalText hover:text-accentOrange">Packages</a>
            <a href="#why-us" onClick={() => setIsOpen(false)} className="text-xs font-bold uppercase tracking-wider text-charcoalText hover:text-accentOrange">Amenities</a>
            <a
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="bg-accentOrange text-whitePure text-center py-3 rounded-full font-bold text-xs uppercase tracking-widest"
            >
              Get Started
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
