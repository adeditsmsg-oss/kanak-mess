import React, { useState, useEffect } from 'react';
import { Phone, Menu, X, Landmark } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About Us', href: '#about' },
    { name: 'Rooms & Services', href: '#services' },
    { name: 'Why Kanak', href: '#why-us' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Reviews', href: '#testimonials' },
    { name: 'FAQs', href: '#faq' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'glass-panel py-3 shadow-sm' : 'bg-transparent py-5'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#home" className="flex items-center space-x-2">
            <div className="w-10 h-10 rounded-full bg-tealBrand flex items-center justify-center text-white">
              <Landmark size={20} />
            </div>
            <div>
              <span className="font-bengali text-xl font-bold text-tealBrand block leading-none">কনক মেস কাম পেয়িং গেস্ট</span>
              <span className="text-[10px] text-goldBrand font-semibold uppercase tracking-wider">Kanak Mess & PG</span>
            </div>
          </a>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center space-x-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-charcoalText hover:text-tealBrand transition-colors duration-200"
              >
                {link.name}
              </a>
            ))}
            <a
              href="tel:+91873083395"
              className="flex items-center space-x-2 bg-tealBrand text-white px-4 py-2 rounded-full font-medium hover:bg-goldBrand transition-all duration-300 transform hover:scale-105 shadow-md shadow-tealBrand/10"
            >
              <Phone size={16} />
              <span>Call Now</span>
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-charcoalText hover:text-tealBrand focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 glass-panel shadow-lg border-t border-greyBorder/20 animate-fadeIn">
          <div className="px-2 pt-2 pb-4 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block px-3 py-2 rounded-md text-base font-medium text-charcoalText hover:bg-sandBg hover:text-tealBrand transition-colors"
              >
                {link.name}
              </a>
            ))}
            <a
              href="tel:+91873083395"
              className="flex items-center justify-center space-x-2 bg-tealBrand text-white mx-3 my-4 py-3 rounded-full font-medium hover:bg-goldBrand transition-colors shadow-md"
            >
              <Phone size={18} />
              <span>Call Now</span>
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
