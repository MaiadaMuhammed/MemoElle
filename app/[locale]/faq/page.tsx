'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus, HelpCircle } from 'lucide-react';
import Link from 'next/link';
import { LuxuryButton } from '@/components/ui/LuxuryButton';

// بيانات الأسئلة والأجوبة
const faqs = [
  {
    question: "Do you ship internationally?",
    answer: "Yes, MemoElle ships to over 50 countries worldwide via DHL Express. International shipping typically takes 3-7 business days."
  },
  {
    question: "What is your return policy?",
    answer: "We accept returns within 14 days of delivery. Items must be unworn, unwashed, and in their original packaging with all tags attached. Customized items are final sale."
  },
  {
    question: "How can I track my order?",
    answer: "Once your order ships, you will receive a confirmation email with a tracking number. You can also track the status in your 'My Account' dashboard."
  },
  {
    question: "Do you offer size customization?",
    answer: "Yes, for our exclusive evening wear collection, we offer bespoke tailoring. Please contact our concierge service to book an appointment."
  },
  {
    question: "Are your products sustainable?",
    answer: "Absolutely. We source organic fabrics and work with artisans who are paid fair wages. Sustainability is at the core of our philosophy."
  }
];

export default function FAQPage() {
  // بنخزن رقم السؤال المفتوح (null يعني مفيش حاجة مفتوحة)
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <main className="min-h-screen bg-[#fdf8f6] pt-28 pb-16 px-4 md:px-6">
      <div className="container mx-auto max-w-4xl">
        
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-[#a67c74] text-sm font-bold tracking-[0.2em] uppercase font-zen block mb-3">
            Help Center
          </span>
          <h1 className="text-4xl md:text-5xl font-serif text-[#38221f] font-cara mb-6">
            Frequently Asked Questions
          </h1>
          <div className="w-24 h-1 bg-[#eaddd7] mx-auto rounded-full" />
        </div>

        {/* Questions Grid */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className={`border rounded-2xl transition-all duration-300 ${
                openIndex === index 
                  ? 'bg-white border-[#a67c74] shadow-md' 
                  : 'bg-white/50 border-[#eaddd7] hover:border-[#a67c74]/50'
              }`}
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
              >
                <span className={`font-serif text-lg transition-colors ${
                  openIndex === index ? 'text-[#a67c74]' : 'text-[#38221f]'
                }`}>
                  {faq.question}
                </span>
                <span className={`p-2 rounded-full transition-colors ${
                  openIndex === index ? 'bg-[#a67c74] text-white' : 'bg-[#fdf8f6] text-[#38221f]'
                }`}>
                  {openIndex === index ? <Minus size={16} /> : <Plus size={16} />}
                </span>
              </button>
              
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6 text-[#5e403a]/80 leading-relaxed border-t border-[#eaddd7]/50 pt-4">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>

        {/* Still need help? */}
        <div className="mt-20 bg-[#38221f] text-white rounded-3xl p-8 md:p-12 text-center relative overflow-hidden">
          <div className="relative z-10">
            <div className="w-16 h-16 bg-[#a67c74] rounded-full flex items-center justify-center mx-auto mb-6">
              <HelpCircle size={32} />
            </div>
            <h3 className="font-serif text-3xl mb-4">Still have questions?</h3>
            <p className="text-[#eaddd7]/80 mb-8 max-w-lg mx-auto">
              Can't find the answer you're looking for? Please chat to our friendly team.
            </p>
            <Link href="/contact">
              <LuxuryButton className="bg-white text-[#38221f] hover:bg-[#eaddd7] border-none px-8">
                Contact Concierge
              </LuxuryButton>
            </Link>
          </div>
          
          {/* Decorative Pattern */}
          <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
             <div className="absolute -top-24 -left-24 w-64 h-64 rounded-full bg-white blur-3xl" />
             <div className="absolute -bottom-24 -right-24 w-64 h-64 rounded-full bg-[#a67c74] blur-3xl" />
          </div>
        </div>

      </div>
    </main>
  );
}