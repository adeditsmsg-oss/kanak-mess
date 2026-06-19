import React from 'react';
import { Wifi, ShieldAlert, Coffee, Zap, Check } from 'lucide-react';

export default function Services() {
  const rooms = [
    {
      id: 'triple',
      name: 'Triple Sharing',
      banglaName: 'সাশ্রয়ী ট্রিপল বেড',
      price: '₹999',
      period: 'Per Month',
      popular: false,
      description: 'Extremely budget-friendly choice featuring friendly community living, perfect for college students.',
      features: ['Individual Single Bed', 'Shared Wardrobe Space', 'Access to Common Study Lobby', 'All Standard Utilities Included'],
      image: 'images/bedroom_green.jpg'
    },
    {
      id: 'double',
      name: 'Double Sharing',
      banglaName: 'জনপ্রিয় ডাবল বেড',
      price: '₹1,500',
      period: 'Per Month',
      popular: true,
      description: 'Our most balanced package offering ample privacy and cozy shared study environments.',
      features: ['Two Beds & Study Desks', 'Spacious Room Layout', 'Shared Wardrobe Space', 'High-Speed Wi-Fi & Electricity'],
      image: 'images/bedroom_green.jpg'
    },
    {
      id: 'single',
      name: 'Single Room',
      banglaName: 'প্রাইভেট সিঙ্গেল বেড',
      price: '₹2,500',
      period: 'Per Month',
      popular: false,
      description: 'Ideal option for job seekers and boarders seeking absolute privacy and quiet study space.',
      features: ['Personal Bed & Study Desk', 'Attached Balcony (Optional)', 'Individual Wardrobe & Storage', 'High-Speed Wi-Fi'],
      image: 'images/bedroom_yellow.jpg'
    }
  ];

  const amenities = [
    { title: 'High-Speed Wi-Fi', desc: 'Unlimited internet access across all rooms', icon: Wifi },
    { title: 'CCTV & Security', desc: '24/7 boundary security and active wardens', icon: ShieldAlert },
    { title: 'Delicious Daily Meals', desc: 'Consistent, hygienic home-style food cooked daily', icon: Coffee },
    { title: 'Water & Power Backup', desc: 'RO filtered water and continuous electricity flow', icon: Zap },
  ];

  return (
    <section id="services" className="py-20 bg-ivory text-charcoalText border-t border-greyBorder/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-sm font-bold uppercase tracking-widest text-goldBrand font-bengali">রুম ও সুযোগ-সুবিধা (Services)</span>
          <h2 className="text-3xl sm:text-4xl font-bold mt-2">Affordable Room Packages</h2>
          <p className="text-charcoalText/70 mt-4 leading-relaxed">
            Select the perfect budget accommodation. All our packages include dining, utilities, and daily housekeeping.
          </p>
        </div>

        {/* REDESIGNED: Horizontal Pricing Grid (No Selector) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch mb-20">
          {rooms.map((room) => (
            <div
              key={room.id}
              className={`bg-white rounded-3xl overflow-hidden border transition-all duration-300 flex flex-col justify-between hover:shadow-2xl ${
                room.popular
                  ? 'border-terracotta ring-2 ring-terracotta relative scale-105 z-10 shadow-xl'
                  : 'border-greyBorder/50 shadow-md'
              }`}
            >
              {room.popular && (
                <div className="absolute top-4 right-4 bg-terracotta text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                  Popular
                </div>
              )}

              {/* Card Header & Visual */}
              <div>
                <div className="h-48 overflow-hidden bg-warmOffWhite">
                  <img
                    src={`${import.meta.env.BASE_URL}${room.image}`}
                    alt={room.name}
                    className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
                  />
                </div>

                <div className="p-6 sm:p-8 space-y-4">
                  <div>
                    <span className="text-xs uppercase tracking-wider text-terracotta font-bold">{room.banglaName}</span>
                    <h3 className="text-2xl font-bold text-primaryDark mt-1">{room.name}</h3>
                  </div>

                  <p className="text-sm text-charcoalText/70">{room.description}</p>

                  <div className="pt-4 border-t border-greyBorder/20 space-y-2">
                    {room.features.map((feature, i) => (
                      <div key={i} className="flex items-start space-x-2 text-sm text-charcoalText/80">
                        <Check size={16} className="text-terracotta mt-0.5 flex-shrink-0" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Card Footer */}
              <div className="p-6 sm:p-8 pt-0 border-t border-greyBorder/10 flex items-center justify-between">
                <div>
                  <span className="text-3xl font-extrabold text-terracotta">{room.price}</span>
                  <span className="text-xs text-charcoalText/60 block">{room.period}</span>
                </div>
                <a
                  href="#contact"
                  className={`px-5 py-3 rounded-xl font-bold text-sm transition-colors ${
                    room.popular
                      ? 'bg-terracotta text-white hover:bg-goldBrand'
                      : 'bg-warmOffWhite text-charcoalText hover:bg-terracotta hover:text-white'
                  }`}
                >
                  Book Seat
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Grid of General Amenities */}
        <div>
          <h3 className="text-2xl font-bold text-center text-primaryDark mb-10">Standard Utilities Included For All</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {amenities.map((item, idx) => (
              <div
                key={idx}
                className="bg-white p-6 rounded-2xl border border-greyBorder/20 hover:border-terracotta transition-all duration-300 shadow-sm hover:shadow-md"
              >
                <div className="p-3 bg-terracotta/10 text-terracotta rounded-xl w-fit">
                  <item.icon size={24} />
                </div>
                <h4 className="font-bold text-primaryDark mt-4">{item.title}</h4>
                <p className="text-sm text-charcoalText/70 mt-2">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
