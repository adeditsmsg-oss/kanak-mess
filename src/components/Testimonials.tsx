import React, { useState } from 'react';
import { Star, ArrowLeft, ArrowRight, UserCheck } from 'lucide-react';

export default function Testimonials() {
  const reviews = [
    {
      name: 'Sourav Das',
      role: 'Student, Midnapore College',
      rating: 5,
      comment: 'Best paying guest in Saratpally, Midnapore. The room rates are extremely reasonable and the food feels like home-cooked meals. খুব ভালো ব্যবহার ও ঘরোয়া পরিবেশ!',
      date: '1 month ago'
    },
    {
      name: 'Subhajit Kundu',
      role: 'IT Professional',
      rating: 5,
      comment: 'I stayed here for over a year. The marble floors are clean, and the washrooms are sanitised daily. Saratpally-তে থাকার জন্য এবং সুস্বাদু খাবারের জন্য এটি বেস্ট চয়েস!',
      date: '3 months ago'
    },
    {
      name: 'Rahul Paul',
      role: 'Competitive Exam Aspirant',
      rating: 4,
      comment: 'Highly recommended mess option! Consistent meals are served hot daily. Security is strictly maintained, making it ideal for job aspirants. মেস ওনার খুব হেল্পফুল!',
      date: '2 months ago'
    },
    {
      name: 'Anirban Sen',
      role: 'University Student',
      rating: 5,
      comment: 'Clean and peaceful rooms with stable Wi-Fi. The daily mess dining area is spacious and hygiene is properly maintained. মেদিনীপুরের অন্যতম সেরা মেস!',
      date: '2 weeks ago'
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? reviews.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === reviews.length - 1 ? 0 : prev + 1));
  };

  return (
    <section id="testimonials" className="py-20 bg-ivory text-charcoalText border-t border-greyBorder/20 alpana-pattern">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-sm font-bold uppercase tracking-widest text-goldBrand font-bengali">ছাত্রী ও অভিভাবকদের মতামত (Testimonials)</span>
          <h2 className="text-3xl sm:text-4xl font-bold mt-2">What Our Boarders Say</h2>
          <p className="text-charcoalText/70 mt-4 leading-relaxed">
            Read real feedback and experiences from college boarders and working professionals.
          </p>
        </div>

        {/* Testimonial slider / grid */}
        <div className="relative max-w-4xl mx-auto">
          
          {/* Card Container */}
          <div className="bg-white p-8 sm:p-12 rounded-[2.5rem] shadow-xl border border-greyBorder/20 relative min-h-[300px] flex flex-col justify-between">
            <div className="space-y-6">
              
              {/* Rating stars */}
              <div className="flex items-center space-x-1 text-goldBrand">
                {[...Array(reviews[currentIndex].rating)].map((_, i) => (
                  <Star key={i} size={20} className="fill-goldBrand text-goldBrand" />
                ))}
                {[...Array(5 - reviews[currentIndex].rating)].map((_, i) => (
                  <Star key={i} size={20} className="text-greyBorder/40" />
                ))}
              </div>

              {/* Review Text */}
              <p className="text-lg sm:text-xl font-medium text-charcoalText italic leading-relaxed">
                "{reviews[currentIndex].comment}"
              </p>
            </div>

            {/* Author info */}
            <div className="mt-8 pt-6 border-t border-greyBorder/20 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 rounded-full bg-tealBrand/10 text-tealBrand flex items-center justify-center">
                  <UserCheck size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-charcoalText text-base">{reviews[currentIndex].name}</h4>
                  <p className="text-xs text-charcoalText/60 font-medium">{reviews[currentIndex].role}</p>
                </div>
              </div>
              
              <div className="text-xs text-charcoalText/40 self-start sm:self-center">
                {reviews[currentIndex].date}
              </div>
            </div>

            {/* Floating decorative elements */}
            <div className="absolute bottom-6 right-8 text-tealBrand/5 text-9xl font-serif pointer-events-none select-none">
              ”
            </div>
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-center space-x-4 mt-8">
            <button
              onClick={prevSlide}
              className="p-3 bg-white border border-greyBorder/30 hover:border-tealBrand hover:text-tealBrand rounded-full text-charcoalText transition-colors shadow-sm"
              aria-label="Previous Testimonial"
            >
              <ArrowLeft size={20} />
            </button>
            <button
              onClick={nextSlide}
              className="p-3 bg-white border border-greyBorder/30 hover:border-tealBrand hover:text-tealBrand rounded-full text-charcoalText transition-colors shadow-sm"
              aria-label="Next Testimonial"
            >
              <ArrowRight size={20} />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}
