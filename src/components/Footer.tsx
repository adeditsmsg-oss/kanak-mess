'use client';

import React from 'react';
import { Phone, MapPin, Heart, MessageSquare } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-primaryGreen text-whitePure pt-16 pb-8 border-t border-accentRose/20 relative overflow-hidden">
      <div className="absolute inset-0 opacity-5 floral-backdrop" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10 grid grid-cols-1 md:grid-cols-12 gap-12 text-left">
        
        {/* Description & Branding */}
        <div className="md:col-span-5 space-y-4">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 rounded-full bg-accentRose flex items-center justify-center text-whitePure text-sm font-black">
              K
            </div>
            <div>
              <h3 className="font-bengali text-base sm:text-lg font-extrabold leading-none">কনক মেস কাম পেয়িং গেস্ট</h3>
              <p className="text-[9px] text-goldBrand uppercase tracking-widest font-bold">Kanak Mess Cum PG</p>
            </div>
          </div>
          
          <p className="text-whitePure/77 text-xs sm:text-sm leading-relaxed max-w-sm">
            The leading PG and dining mess in Saratpally, Midnapore. Providing clean marble floor rooms, sanitized washrooms, and consistent home-style daily dining services since 2020.
          </p>

          <p className="text-[10px] text-whitePure/45">
            © {new Date().getFullYear()} Kanak Mess Cum Paying Guest. All Rights Reserved.
          </p>
        </div>

        {/* Quick Links */}
        <div className="md:col-span-3 space-y-4">
          <h4 className="font-bold text-xs uppercase tracking-widest text-goldBrand">Navigation</h4>
          <ul className="space-y-2 text-xs sm:text-sm text-whitePure/75">
            <li><a href="#home" className="hover:text-goldBrand transition-colors">Home</a></li>
            <li><a href="#about" className="hover:text-goldBrand transition-colors">About Us</a></li>
            <li><a href="#services" className="hover:text-goldBrand transition-colors">Pricing & Packages</a></li>
            <li><a href="#why-us" className="hover:text-goldBrand transition-colors">PG Amenities</a></li>
            <li><a href="#contact" className="hover:text-goldBrand transition-colors">Enquiry Desk</a></li>
          </ul>
        </div>

        {/* Contact details */}
        <div className="md:col-span-4 space-y-4">
          <h4 className="font-bold text-xs uppercase tracking-widest text-goldBrand">Contact Details</h4>
          <ul className="space-y-3 text-xs sm:text-sm text-whitePure/75">
            <li className="flex items-start space-x-2">
              <MapPin size={16} className="text-goldBrand mt-0.5 flex-shrink-0" />
              <span>Saratpally, near Saratpally Bus Stand, Midnapore, West Bengal 721101</span>
            </li>
            <li className="flex items-center space-x-2">
              <Phone size={16} className="text-goldBrand flex-shrink-0" />
              <span>Call: +91 87308 3395</span>
            </li>
            <li className="flex items-center space-x-2">
              <MessageSquare size={16} className="text-green-500 flex-shrink-0" />
              <span>WhatsApp: +91 87308 3395</span>
            </li>
          </ul>
        </div>

      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 mt-12 pt-8 border-t border-whitePure/10 flex flex-col sm:flex-row items-center justify-between text-[10px] text-whitePure/40 gap-4">
        <p>Designed and optimized for local SEO in Saratpally, Midnapore.</p>
        <p className="flex items-center">
          Created with <Heart size={12} className="text-accentRose mx-1 fill-accentRose" /> for Kanak Mess Cum PG.
        </p>
      </div>
    </footer>
  );
}
