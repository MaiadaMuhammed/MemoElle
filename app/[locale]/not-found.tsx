'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { LuxuryButton } from '@/components/ui/LuxuryButton';
import { ArrowLeft, Search } from 'lucide-react';

export default function NotFound() {
  return (
    <main className="min-h-screen bg-[#fdf8f6] flex items-center justify-center px-6 relative overflow-hidden">
      
      {/* خلفية جمالية (دائرة ضبابية) */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#eaddd7]/30 rounded-full blur-[100px] pointer-events-none" />

      <div className="text-center relative z-10 max-w-2xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <p className="font-zen text-[#a67c74] text-sm font-bold tracking-[0.3em] uppercase mb-4">
            Error 404
          </p>
          
          <h1 className="font-serif text-6xl md:text-8xl text-[#38221f] mb-6 font-cara">
            Lost in Luxury?
          </h1>
          
          <p className="text-[#5e403a] text-lg mb-10 leading-relaxed">
            The page you are looking for seems to have gone out of style. 
            It might have been removed, renamed, or is temporarily unavailable.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/">
              <LuxuryButton className="w-full sm:w-auto px-8 py-3">
                <ArrowLeft className="mr-2 w-4 h-4" /> Return Home
              </LuxuryButton>
            </Link>
            
            <Link href="/contact">
              <button className="px-8 py-3 rounded-full border border-[#eaddd7] text-[#38221f] hover:bg-[#eaddd7] hover:border-[#a67c74] transition-all flex items-center justify-center gap-2 font-medium">
                <Search className="w-4 h-4" /> Search Site
              </button>
            </Link>
          </div>
        </motion.div>
      </div>

      {/* رقم 404 كبير في الخلفية كديكور */}
      <div className="absolute bottom-0 right-0 opacity-[0.03] pointer-events-none select-none">
        <span className="font-serif text-[400px] leading-none text-[#38221f]">404</span>
      </div>
    </main>
  );
}