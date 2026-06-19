'use client';

import React, { useState } from 'react';
import Image from 'next/image';

export default function Gallery() {
  const images = [
    {
      title: 'Hostel Building Exterior',
      desc: 'The daylight front view of the Kanak Mess property in Saratpally.',
      url: '/kanak-mess/images/building.jpg',
      category: 'building'
    },
    {
      title: 'Green Bed Room (Triple Sharing)',
      desc: 'Clean marble floor, large windows, and solid wooden beds.',
      url: '/kanak-mess/images/bedroom_green.jpg',
      category: 'rooms'
    },
    {
      title: 'Yellow Bed Room (Double Sharing)',
      desc: 'Comfortable layout with study table setups and natural lighting.',
      url: '/kanak-mess/images/bedroom_yellow.jpg',
      category: 'rooms'
    },
    {
      title: 'Hygienic Modern Washroom',
      desc: 'Spacious tiled bathroom with high cleanliness standards.',
      url: '/kanak-mess/images/bathroom.jpg',
      category: 'amenities'
    },
    {
      title: 'Dining Room & Kitchen Lobby',
      desc: 'Our clean dining hall setup featuring solid wooden benches.',
      url: '/kanak-mess/images/dining.jpg',
      category: 'food'
    },
    {
      title: 'Sanitized Basin Area',
      desc: 'Well-maintained hand-wash basin area near the dining lobby.',
      url: '/kanak-mess/images/lobby.jpg',
      category: 'amenities'
    }
  ];

  const [filter, setFilter] = useState('all');

  const filteredImages = filter === 'all' ? images : images.filter(img => img.category === filter);

  return (
    <section id="gallery" className="py-24 bg-creamCard relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-sm font-bold uppercase tracking-widest text-accentRose font-bengali">ছবি গ্যালারি (Gallery)</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-primaryGreen mt-2 font-serif">Explore Kanak Mess Property</h2>
          <p className="text-charcoalText/80 mt-4 leading-relaxed text-sm sm:text-base">
            Browse through actual property photos of our bedrooms, washrooms, dining lobby, and building structure.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-2.5 mb-12">
          {['all', 'rooms', 'food', 'amenities', 'building'].map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300 ${
                filter === cat
                  ? 'bg-primaryGreen text-whitePure shadow-md'
                  : 'bg-whitePure text-charcoalText hover:bg-creamBg border border-greyBorder'
              }`}
            >
              {cat === 'all' ? 'All Photos' : cat === 'rooms' ? 'Bedrooms' : cat === 'food' ? 'Dining & Food' : cat === 'amenities' ? 'Washrooms' : 'Building'}
            </button>
          ))}
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredImages.map((img, index) => (
            <div
              key={index}
              className="relative group rounded-[2rem] overflow-hidden shadow-md bg-whitePure border border-greyBorder/40 aspect-video sm:aspect-square transform hover:scale-[1.02] transition-all duration-500"
            >
              <Image
                src={img.url}
                alt={img.title}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primaryGreen/95 via-primaryGreen/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6 text-whitePure text-left">
                <span className="text-[10px] uppercase tracking-widest text-goldBrand font-extrabold mb-1">
                  {img.category === 'rooms' ? 'Rooms & Comfort' : img.category === 'food' ? 'Dining & Food' : 'General Campus'}
                </span>
                <h4 className="text-base sm:text-lg font-bold font-serif">{img.title}</h4>
                <p className="text-xs text-whitePure/80 mt-1 leading-relaxed">{img.desc}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
