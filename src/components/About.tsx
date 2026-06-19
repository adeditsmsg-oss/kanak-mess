import React from 'react';
import { Home, Users, CheckCircle } from 'lucide-react';

export default function About() {
  const highlights = [
    {
      title: 'Comfortable Co-living Spaces',
      description: 'Elegant marble floor rooms with large windows, study desks, and standard wardrobes.',
      icon: Home
    },
    {
      title: 'Famous On-site Mess Dining',
      description: 'Well-regarded daily mess serving consistent, high-quality home-cooked Bengali meals.',
      icon: Users
    },
    {
      title: 'High Hygiene & Washroom standards',
      description: 'Equipped with modern tiled washrooms and wash basins cleaned regularly.',
      icon: CheckCircle
    }
  ];

  return (
    <section id="about" className="py-20 bg-warmOffWhite overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column: Visual Grid */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <img
                  className="rounded-2xl object-cover aspect-[3/4] shadow-md border-2 border-white transform hover:scale-[1.02] transition-transform duration-300"
                  src={`${import.meta.env.BASE_URL}images/dining.jpg`}
                  alt="Kanak Mess Dining Room"
                />
                <div className="bg-terracotta p-6 rounded-2xl text-white shadow-lg text-center transform hover:scale-[1.02] transition-transform duration-300">
                  <span className="text-3xl font-extrabold block">4.6 ★</span>
                  <span className="text-xs uppercase tracking-wider font-semibold font-bengali">অসাধারণ রিভিউ (4.6 Rating)</span>
                </div>
              </div>
              <div className="space-y-4 pt-8">
                <div className="bg-white p-6 rounded-2xl shadow-lg border border-greyBorder/20 text-center transform hover:scale-[1.02] transition-transform duration-300">
                  <span className="text-3xl font-extrabold text-goldBrand block">80+</span>
                  <span className="text-xs text-charcoalText/60 uppercase tracking-wider font-semibold">Happy Boarders</span>
                </div>
                <img
                  className="rounded-2xl object-cover aspect-[3/4] shadow-md border-2 border-white transform hover:scale-[1.02] transition-transform duration-300"
                  src={`${import.meta.env.BASE_URL}images/bedroom_yellow.jpg`}
                  alt="Comfortable Room Setup"
                />
              </div>
            </div>
          </div>

          {/* Right Column: Copy & Highlights */}
          <div className="space-y-8">
            <div>
              <span className="text-sm font-bold uppercase tracking-widest text-goldBrand font-bengali">আমাদের সম্পর্কে (About Us)</span>
              <h2 className="text-3xl sm:text-4xl font-bold text-primaryDark mt-2 leading-tight">
                Premium Stay & Dining in Saratpally, Midnapore
              </h2>
              <p className="text-charcoalText/80 mt-4 leading-relaxed">
                Kanak Mess Cum Paying Guest is a highly trusted co-living property in Midnapore. Over the years, we have built an excellent reputation for hosting college students and job candidates. We prioritize cleanliness, safety, and delicious home-cooked meals to make your stay feel just like home.
              </p>
            </div>

            <div className="space-y-4">
              {highlights.map((item, idx) => (
                <div key={idx} className="flex items-start space-x-4 p-4 rounded-xl hover:bg-white hover:shadow-md transition-all duration-300">
                  <div className="p-3 bg-terracotta/10 text-terracotta rounded-xl">
                    <item.icon size={22} />
                  </div>
                  <div>
                    <h3 className="font-bold text-primaryDark">{item.title}</h3>
                    <p className="text-sm text-charcoalText/70 mt-1">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
