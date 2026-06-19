import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

export default function FAQ() {
  const faqs = [
    {
      q: 'What facilities are included in the monthly PG packages?',
      a: 'Our monthly rent covers accommodation (wooden beds, study tables, marble flooring), 3 daily home-style meals from our on-site mess, high-speed Wi-Fi, daily sanitization of shared washrooms, and gated security access. There are zero hidden extra charges.'
    },
    {
      q: 'What is the security deposit policy at Kanak PG?',
      a: 'We require a 1-month security deposit along with the running month’s rent in advance during admission. The deposit is fully refundable upon giving a 1-month written notice prior to vacating.'
    },
    {
      q: 'What are the main entry gate timings?',
      a: 'To guarantee the safety of all boarders, our main security gate is locked at 10:30 PM daily. Special extensions for study groups, examinations, or night shifts are allowed with prior notification to the warden.'
    },
    {
      q: 'How consistent is the daily mess meal service?',
      a: 'Our mess is highly rated in Saratpally for consistent quality. We serve fresh, hot Bengali home meals cooked daily. Breakfast, lunch (rice, dal, sabji, fish/egg/chicken), and dinner are prepared using hygienic ingredients.'
    },
    {
      q: 'Can family members or guests visit boarders?',
      a: 'Parents and family members are welcome to visit boarders in our common visitor lounges. Overnight guest stays are subject to prior management approval and room availability.'
    }
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 bg-warmOffWhite border-t border-greyBorder/20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-sm font-bold uppercase tracking-widest text-goldBrand font-bengali">জিজ্ঞাসাবাদ (FAQ)</span>
          <h2 className="text-3xl sm:text-4xl font-bold mt-2 text-charcoalText">Frequently Asked Questions</h2>
          <p className="text-charcoalText/70 mt-4 leading-relaxed">
            Find details regarding the daily mess menu, security deposits, curator rules, and guest policies.
          </p>
        </div>

        {/* Accordions */}
        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl border border-greyBorder/20 overflow-hidden transition-all duration-300 shadow-sm"
            >
              <button
                onClick={() => toggleFAQ(idx)}
                className="w-full text-left p-6 flex justify-between items-center text-charcoalText hover:text-tealBrand transition-colors font-semibold"
              >
                <span className="text-base sm:text-lg">{faq.q}</span>
                <span className="ml-4 p-1.5 bg-warmOffWhite text-tealBrand rounded-lg flex-shrink-0">
                  {openIndex === idx ? <Minus size={18} /> : <Plus size={18} />}
                </span>
              </button>
              
              <div
                className={`transition-all duration-300 ease-in-out ${
                  openIndex === idx ? 'max-h-[500px] border-t border-greyBorder/10 p-6' : 'max-h-0 pointer-events-none'
                } overflow-hidden bg-sandBg/40`}
              >
                <p className="text-sm text-charcoalText/85 leading-relaxed">
                  {faq.a}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
