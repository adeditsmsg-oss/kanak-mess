import React, { useState } from 'react';
import { Wifi, ShieldAlert, Coffee, Zap } from 'lucide-react';

export default function Services() {
  const [sharingType, setSharingType] = useState('double');

  const rooms = [
    {
      id: 'single',
      name: 'Single Room',
      banglaName: 'সিঙ্গেল রুম',
      price: '₹5,000',
      period: 'Per Month',
      description: 'Ideal option for job seekers and students seeking absolute privacy.',
      features: ['Personal Bed & Study Desk', 'Attached Balcony (Optional)', 'Individual Wardrobe', 'High-Speed Wi-Fi'],
      image: 'images/bedroom_yellow.jpg'
    },
    {
      id: 'double',
      name: 'Double Sharing',
      banglaName: 'ডাবল শেয়ারিং',
      price: '₹4,000',
      period: 'Per Month',
      description: 'Our most popular option featuring comfortable shared living and study environments.',
      features: ['Two Beds & Study Desks', 'Spacious Room Layout', 'Shared Wardrobe Space', 'All Standard Amenities'],
      image: 'images/bedroom_green.jpg'
    },
    {
      id: 'triple',
      name: 'Triple Sharing',
      banglaName: 'ট্রিপল শেয়ারিং',
      price: '₹3,200',
      period: 'Per Month',
      description: 'Highly economical option, perfect for university students.',
      features: ['Individual Beds & Storage', 'Common Wardrobes', 'Most Budget Friendly', 'Spacious Floor Layout'],
      image: 'images/bedroom_green.jpg'
    }
  ];

  const amenities = [
    { title: 'High-Speed Wi-Fi', desc: 'Unlimited access across rooms and corridors', icon: Wifi },
    { title: 'CCTV & Security', desc: '24/7 security cameras and wardens in attendance', icon: ShieldAlert },
    { title: 'Delicious Daily Meals', desc: 'Consistent, hygienic home-style food cooked daily', icon: Coffee },
    { title: 'Continuous Water & Power', desc: 'RO filtered water and power backup options', icon: Zap },
  ];

  const activeRoom = rooms.find(r => r.id === sharingType) || rooms[1];

  return (
    <section id="services" className="py-20 bg-ivory text-charcoalText border-t border-greyBorder/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-sm font-bold uppercase tracking-widest text-goldBrand font-bengali">রুম ও সুযোগ-সুবিধা (Services)</span>
          <h2 className="text-3xl sm:text-4xl font-bold mt-2">Our Packages & Amenities</h2>
          <p className="text-charcoalText/70 mt-4 leading-relaxed">
            Select the accommodation structure that best fits your lifestyle and budget. All standard packages include complete utilities.
          </p>
        </div>

        {/* Dynamic Calculator & Details (CRO booster) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-20">
          
          {/* Room Selector Column */}
          <div className="lg:col-span-5 space-y-4">
            <h3 className="text-xl font-bold mb-6">Select Room Style:</h3>
            {rooms.map((room) => (
              <button
                key={room.id}
                onClick={() => setSharingType(room.id)}
                className={`w-full text-left p-6 rounded-2xl border transition-all duration-300 flex items-center justify-between ${
                  sharingType === room.id
                    ? 'border-tealBrand bg-white shadow-lg ring-1 ring-tealBrand'
                    : 'border-greyBorder/30 bg-warmOffWhite hover:bg-white hover:border-greyBorder/50'
                }`}
              >
                <div>
                  <span className="text-xs uppercase tracking-wider text-tealBrand font-bold">{room.banglaName}</span>
                  <h4 className="font-bold text-charcoalText mt-1">{room.name}</h4>
                </div>
                <div className="text-right">
                  <span className="text-lg font-bold text-tealBrand">{room.price}</span>
                  <span className="text-xs text-charcoalText/60 block">{room.period}</span>
                </div>
              </button>
            ))}
          </div>

          {/* Active Room Card Highlight Column */}
          <div className="lg:col-span-7 bg-white p-6 sm:p-8 rounded-[2rem] shadow-xl border border-warmOffWhite grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="rounded-2xl overflow-hidden aspect-[4/3] bg-warmOffWhite">
              <img
                src={`${import.meta.env.BASE_URL}${activeRoom.image}`}
                alt={activeRoom.name}
                className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
              />
            </div>
            
            <div className="space-y-6">
              <div>
                <span className="inline-block bg-tealBrand/10 text-tealBrand px-3 py-1 rounded-full text-xs font-bold font-bengali">
                  জনপ্রিয় চয়েস (Popular)
                </span>
                <h3 className="text-2xl font-bold mt-2">{activeRoom.name}</h3>
                <p className="text-charcoalText/80 text-sm mt-2">{activeRoom.description}</p>
              </div>

              <div className="space-y-2">
                <p className="text-xs uppercase tracking-widest text-charcoalText/60 font-bold">What is included:</p>
                <ul className="grid grid-cols-1 gap-1 text-sm text-charcoalText">
                  {activeRoom.features.map((feature, i) => (
                    <li key={i} className="flex items-center space-x-2">
                      <span className="text-tealBrand">✔</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-4 border-t border-greyBorder/20 flex items-center justify-between">
                <div>
                  <span className="text-2xl font-extrabold text-tealBrand">{activeRoom.price}</span>
                  <span className="text-xs text-charcoalText/60 block">{activeRoom.period}</span>
                </div>
                <a
                  href="#contact"
                  className="bg-tealBrand text-white px-5 py-3 rounded-xl font-bold text-sm hover:bg-goldBrand transition-colors shadow-md"
                >
                  Book Seat
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Grid of General Amenities */}
        <div>
          <h3 className="text-2xl font-bold text-center mb-10">Standard Utilities Included For All</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {amenities.map((item, idx) => (
              <div
                key={idx}
                className="bg-white p-6 rounded-2xl border border-greyBorder/20 hover:border-tealBrand transition-all duration-300 shadow-sm hover:shadow-md"
              >
                <div className="p-3 bg-tealBrand/10 text-tealBrand rounded-xl w-fit">
                  <item.icon size={24} />
                </div>
                <h4 className="font-bold text-charcoalText mt-4">{item.title}</h4>
                <p className="text-sm text-charcoalText/70 mt-2">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
