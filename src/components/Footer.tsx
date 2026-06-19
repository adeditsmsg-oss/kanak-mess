import React from 'react';
import { Phone, MapPin, MessageSquare, Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-primaryDark text-white pt-16 pb-8 border-t border-terracotta/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-12 gap-12 text-left">
        
        {/* Branding & Description */}
        <div className="md:col-span-5 space-y-4">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 rounded-full bg-terracotta flex items-center justify-center text-white text-sm font-bold">
              K
            </div>
            <div>
              <h3 className="font-bengali text-lg font-bold leading-none">কনক মেস কাম পেয়িং গেস্ট</h3>
              <p className="text-[10px] text-goldBrand uppercase tracking-wider font-semibold">Kanak Mess Cum PG</p>
            </div>
          </div>
          
          <p className="text-white/60 text-sm leading-relaxed">
            The leading PG and dining mess in Saratpally, Midnapore. Providing clean marble floor rooms, sanitized tiled washrooms, and consistent home-style daily dining services since 2020.
          </p>

          <p className="text-xs text-white/40">
            © {new Date().getFullYear()} Kanak Mess Cum Paying Guest. All Rights Reserved.
          </p>
        </div>

        {/* Quick Links */}
        <div className="md:col-span-3 space-y-4">
          <h4 className="font-bold text-sm uppercase tracking-wider text-goldBrand">Navigation</h4>
          <ul className="space-y-2 text-sm text-white/70">
            <li><a href="#home" className="hover:text-goldBrand transition-colors">Home</a></li>
            <li><a href="#about" className="hover:text-goldBrand transition-colors">About Us</a></li>
            <li><a href="#services" className="hover:text-goldBrand transition-colors">Rooms & Mess</a></li>
            <li><a href="#why-us" className="hover:text-goldBrand transition-colors">Why Choose Us</a></li>
            <li><a href="#contact" className="hover:text-goldBrand transition-colors">Contact</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="md:col-span-4 space-y-4">
          <h4 className="font-bold text-sm uppercase tracking-wider text-goldBrand">Contact Details</h4>
          <ul className="space-y-3 text-sm text-white/70">
            <li className="flex items-start space-x-2">
              <MapPin size={16} className="text-goldBrand mt-1 flex-shrink-0" />
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

      {/* Made with Love by Agency / Local SEO Tag */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between text-xs text-white/40 gap-4">
        <p>Designed and optimized for local SEO in Saratpally, Midnapore.</p>
        <p className="flex items-center">
          Created with <Heart size={12} className="text-goldBrand mx-1 fill-goldBrand" /> for Bengali Art Theme Demo.
        </p>
      </div>
    </footer>
  );
}
