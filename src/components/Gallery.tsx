import React, { useState } from 'react';

export default function Gallery() {
  const images = [
    {
      title: 'Hostel Building Exterior',
      desc: 'The daylight front view of the Kanak Mess property in Saratpally.',
      url: 'images/building.jpg',
      category: 'building'
    },
    {
      title: 'Green Bed Room (Triple Sharing)',
      desc: 'Clean marble floor, windows, and solid wooden beds.',
      url: 'images/bedroom_green.jpg',
      category: 'rooms'
    },
    {
      title: 'Yellow Bed Room (Double Sharing)',
      desc: 'Comfortable layout with study table setups and natural lighting.',
      url: 'images/bedroom_yellow.jpg',
      category: 'rooms'
    },
    {
      title: 'Hygienic Modern Washroom',
      desc: 'Spacious tiled bathroom with high cleanliness standards.',
      url: 'images/bathroom.jpg',
      category: 'amenities'
    },
    {
      title: 'Dining Room & Kitchen Lobby',
      desc: 'Our clean dining hall setup featuring wooden benches.',
      url: 'images/dining.jpg',
      category: 'food'
    },
    {
      title: 'Sanitized Basin Area',
      desc: 'Well-maintained hand-wash basin area near the dining lobby.',
      url: 'images/lobby.jpg',
      category: 'amenities'
    }
  ];

  const [filter, setFilter] = useState('all');

  const filteredImages = filter === 'all' ? images : images.filter(img => img.category === filter);

  return (
    <section id="gallery" className="py-20 bg-warmOffWhite border-t border-greyBorder/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-sm font-bold uppercase tracking-widest text-goldBrand font-bengali">ছবি গ্যালারি (Gallery)</span>
          <h2 className="text-3xl sm:text-4xl font-bold mt-2">Explore Kanak Mess Property</h2>
          <p className="text-charcoalText/70 mt-4 leading-relaxed">
            Browse through actual property photos of our bedrooms, washrooms, dining lobby, and building structure.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {['all', 'rooms', 'food', 'amenities', 'building'].map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-5 py-2 rounded-full text-xs font-bold uppercase transition-all duration-300 ${
                filter === cat
                  ? 'bg-tealBrand text-white shadow-md'
                  : 'bg-white text-charcoalText hover:bg-white/80 border border-greyBorder/30'
              }`}
            >
              {cat === 'all' ? 'All Photos' : cat === 'rooms' ? 'Rooms' : cat === 'food' ? 'Dining & Food' : cat === 'amenities' ? 'Facilities' : 'Building'}
            </button>
          ))}
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredImages.map((img, index) => (
            <div
              key={index}
              className="relative group rounded-3xl overflow-hidden shadow-md bg-white border border-greyBorder/20 aspect-video sm:aspect-square transform hover:scale-[1.02] transition-all duration-500"
            >
              <img
                src={`${import.meta.env.BASE_URL}${img.url}`}
                alt={img.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoalText/90 via-charcoalText/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6 text-white text-left">
                <span className="text-xs uppercase tracking-wider text-goldBrand font-bold mb-1">
                  {img.category === 'rooms' ? 'Rooms & Beds' : img.category === 'food' ? 'Dining & Food' : 'General Amenities'}
                </span>
                <h4 className="text-lg font-bold">{img.title}</h4>
                <p className="text-xs text-white/80 mt-1">{img.desc}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
