'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, Send, Instagram, Facebook, Twitter } from 'lucide-react';
import { LuxuryButton } from '@/components/ui/LuxuryButton';

export default function ContactPage() {
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('submitting');
    
    // محاكاة إرسال الرسالة
    setTimeout(() => {
      setFormStatus('success');
    }, 1500);
  };

  return (
    <main className="min-h-screen bg-[#fdf8f6] pt-28 pb-16 px-4 md:px-6">
      <div className="container mx-auto max-w-6xl">
        
        {/* Header */}
        <div className="text-center mb-16">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-[#a67c74] text-sm font-bold tracking-[0.2em] uppercase font-zen block mb-3"
          >
            Get In Touch
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-6xl font-serif text-[#38221f] font-cara mb-6"
          >
            Client Concierge
          </motion.h1>
          <motion.div 
            initial={{ width: 0 }}
            animate={{ width: 100 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="h-1 bg-[#eaddd7] mx-auto rounded-full"
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-start">
          
          {/* Left Column: Contact Info */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="space-y-12"
          >
            <div>
              <h3 className="font-zen text-2xl text-[#38221f] mb-6">Visit Our Boutique</h3>
              <div className="flex gap-4 items-start text-[#5e403a]">
                <div className="p-3 bg-white rounded-full shadow-sm border border-[#eaddd7] text-[#a67c74]">
                  <MapPin size={24} />
                </div>
                <div>
                  <p className="font-serif text-lg text-[#38221f]">MemoElle Flagship Store</p>
                  <p className="leading-relaxed mt-2 opacity-80">
                    15 Luxury Avenue, Zamalek<br />
                    Cairo, Egypt 11211
                  </p>
                  <a href="#" className="text-[#a67c74] text-sm mt-3 inline-block border-b border-[#a67c74] hover:text-[#38221f] transition-colors">
                    Get Directions
                  </a>
                </div>
              </div>
            </div>

            <div>
              <h3 className="font-zen text-2xl text-[#38221f] mb-6">Contact Info</h3>
              <div className="space-y-6">
                <div className="flex gap-4 items-center text-[#5e403a]">
                  <div className="p-3 bg-white rounded-full shadow-sm border border-[#eaddd7] text-[#a67c74]">
                    <Phone size={20} />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-wider opacity-60">Call Us</p>
                    <p className="font-serif text-lg text-[#38221f]">+20 123 456 7890</p>
                  </div>
                </div>
                
                <div className="flex gap-4 items-center text-[#5e403a]">
                  <div className="p-3 bg-white rounded-full shadow-sm border border-[#eaddd7] text-[#a67c74]">
                    <Mail size={20} />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-wider opacity-60">Email Us</p>
                    <p className="font-serif text-lg text-[#38221f]">concierge@memoelle.com</p>
                  </div>
                </div>

                <div className="flex gap-4 items-center text-[#5e403a]">
                  <div className="p-3 bg-white rounded-full shadow-sm border border-[#eaddd7] text-[#a67c74]">
                    <Clock size={20} />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-wider opacity-60">Working Hours</p>
                    <p className="font-serif text-lg text-[#38221f]">Mon - Sat: 10:00 AM - 10:00 PM</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div className="pt-8 border-t border-[#eaddd7]">
               <h4 className="font-serif text-[#38221f] mb-4">Follow Our Journey</h4>
               <div className="flex gap-4">
                 {[Instagram, Facebook, Twitter].map((Icon, i) => (
                   <a key={i} href="#" className="w-10 h-10 rounded-full bg-[#38221f] text-white flex items-center justify-center hover:bg-[#a67c74] transition-all hover:-translate-y-1">
                     <Icon size={18} />
                   </a>
                 ))}
               </div>
            </div>
          </motion.div>

          {/* Right Column: Minimalist Form */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-white p-8 md:p-12 rounded-3xl shadow-xl border border-[#eaddd7]"
          >
            {formStatus === 'success' ? (
              <div className="text-center py-12">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Send size={32} className="text-green-600 ml-1" />
                </div>
                <h3 className="font-serif text-3xl text-[#38221f] mb-4">Message Sent</h3>
                <p className="text-[#5e403a]">Thank you for reaching out. Our concierge team will get back to you within 24 hours.</p>
                <button 
                  onClick={() => setFormStatus('idle')}
                  className="mt-8 text-[#a67c74] underline hover:text-[#38221f]"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="space-y-2">
                  <h3 className="font-serif text-2xl text-[#38221f]">Send a Message</h3>
                  <p className="text-[#5e403a]/70 text-sm">Whether you have a question about a product, shipping, or just want to say hello.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="group">
                    <label className="block text-xs font-bold text-[#a67c74] uppercase tracking-wider mb-2 group-focus-within:text-[#38221f] transition-colors">First Name</label>
                    <input required type="text" className="w-full bg-transparent border-b border-[#eaddd7] py-2 text-[#38221f] focus:outline-none focus:border-[#a67c74] transition-colors placeholder-transparent" placeholder="Name" />
                  </div>
                  <div className="group">
                    <label className="block text-xs font-bold text-[#a67c74] uppercase tracking-wider mb-2 group-focus-within:text-[#38221f] transition-colors">Last Name</label>
                    <input required type="text" className="w-full bg-transparent border-b border-[#eaddd7] py-2 text-[#38221f] focus:outline-none focus:border-[#a67c74] transition-colors placeholder-transparent" placeholder="Name" />
                  </div>
                </div>

                <div className="group">
                  <label className="block text-xs font-bold text-[#a67c74] uppercase tracking-wider mb-2 group-focus-within:text-[#38221f] transition-colors">Email Address</label>
                  <input required type="email" className="w-full bg-transparent border-b border-[#eaddd7] py-2 text-[#38221f] focus:outline-none focus:border-[#a67c74] transition-colors placeholder-transparent" placeholder="Email" />
                </div>

                <div className="group">
                  <label className="block text-xs font-bold text-[#a67c74] uppercase tracking-wider mb-2 group-focus-within:text-[#38221f] transition-colors">Subject</label>
                  <select className="w-full bg-transparent border-b border-[#eaddd7] py-2 text-[#38221f] focus:outline-none focus:border-[#a67c74] transition-colors cursor-pointer">
                    <option>General Inquiry</option>
                    <option>Order Status</option>
                    <option>Returns & Exchanges</option>
                    <option>Product Information</option>
                  </select>
                </div>

                <div className="group">
                  <label className="block text-xs font-bold text-[#a67c74] uppercase tracking-wider mb-2 group-focus-within:text-[#38221f] transition-colors">Message</label>
                  <textarea required rows={4} className="w-full bg-transparent border-b border-[#eaddd7] py-2 text-[#38221f] focus:outline-none focus:border-[#a67c74] transition-colors resize-none" placeholder="How can we help you?"></textarea>
                </div>

                <LuxuryButton 
                  disabled={formStatus === 'submitting'}
                  className="w-full justify-center py-4 text-lg"
                >
                  {formStatus === 'submitting' ? 'Sending...' : 'Send Message'}
                </LuxuryButton>
              </form>
            )}
          </motion.div>

        </div>

        {/* Map Section (Image Placeholder) */}
        <motion.div 
           initial={{ opacity: 0, y: 50 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           className="mt-20 h-[400px] w-full rounded-3xl overflow-hidden relative grayscale hover:grayscale-0 transition-all duration-700 shadow-xl border border-[#eaddd7]"
        >
          {/* صورة خريطة وهمية من Unsplash */}
          <Image 
            src="https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=2074&auto=format&fit=crop" 
            alt="MemoElle Location" 
            fill 
            className="object-cover"
          />
          <div className="absolute inset-0 bg-[#38221f]/20 flex items-center justify-center group">
            <div className="bg-white/90 backdrop-blur-md px-8 py-4 rounded-full flex items-center gap-3 shadow-2xl group-hover:scale-110 transition-transform">
              <MapPin className="text-[#a67c74]" fill="currentColor" />
              <span className="font-serif text-[#38221f] font-bold">Find us on Maps</span>
            </div>
          </div>
        </motion.div>

      </div>
    </main>
  );
}