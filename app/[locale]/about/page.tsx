'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { LuxuryButton } from '@/components/ui/LuxuryButton';
import { ArrowRight, Star, PenTool, Globe } from 'lucide-react';

export default function AboutPage() {
  // إعدادات الأنيميشن المتكررة
  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  return (
    <main className="min-h-screen bg-[#fdf8f6]">
      
      {/* 1. Hero Section (Parallax Effect) */}
      <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1469334031218-e382a71b716b?q=80&w=2070&auto=format&fit=crop"
            alt="MemoElle Atelier"
            fill
            className="object-cover brightness-[0.6]"
            priority
          />
        </div>
        <div className="relative z-10 text-center px-4">
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-[#eaddd7] text-sm font-bold tracking-[0.3em] uppercase font-zen mb-4"
          >
            Est. 2024
          </motion.p>
          <motion.h1 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="text-6xl md:text-8xl font-serif text-white font-cara mb-6"
          >
            The Art of Living
          </motion.h1>
          <motion.div 
            initial={{ height: 0 }}
            animate={{ height: 80 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="w-[1px] bg-white/50 mx-auto"
          />
        </div>
      </section>

      {/* 2. The Story (Split Screen) */}
      <section className="py-24 container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="space-y-8"
          >
            <span className="text-[#a67c74] text-xs font-bold tracking-[0.2em] uppercase font-zen">
              Our Philosophy
            </span>
            <h2 className="text-4xl md:text-5xl font-serif text-[#38221f] leading-tight">
              We don't just design products; <br/>
              <span className="italic text-[#a67c74] font-cara text-5xl md:text-6xl">we curate moments.</span>
            </h2>
            <p className="text-[#5e403a]/80 text-lg leading-relaxed">
              MemoElle was born from a desire to merge the timeless elegance of the past with the bold spirit of the modern world. We believe that true luxury lies not in the price tag, but in the craftsmanship, the story, and the feeling it evokes.
            </p>
            <p className="text-[#5e403a]/80 text-lg leading-relaxed">
              From the bustling markets of Cairo to the serene ateliers of Italy, we source materials that tell a story. Every stitch, every scent, and every texture is chosen with intention.
            </p>
            
            {/* توقيع المؤسس (بخط اليد) */}
            <div className="pt-6">
               <p className="font-cara text-4xl text-[#38221f]">Memo & Elle</p>
               <p className="text-xs uppercase tracking-widest text-[#a67c74] mt-2">Founders</p>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative h-[600px] w-full rounded-t-full overflow-hidden border-[10px] border-white shadow-2xl"
          >
            <Image
              src="https://images.unsplash.com/photo-1583336663277-620dc1996580?q=80&w=2069&auto=format&fit=crop"
              alt="Fashion Shoot"
              fill
              className="object-cover"
            />
          </motion.div>
        </div>
      </section>

      {/* 3. Values Section (Grid) */}
      <section className="py-24 bg-[#38221f] text-[#fdf8f6]">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            
            <motion.div 
              whileHover={{ y: -10 }}
              className="p-8 border border-[#5e403a] rounded-2xl bg-[#5e403a]/10 backdrop-blur-sm"
            >
              <div className="w-16 h-16 mx-auto bg-[#a67c74] rounded-full flex items-center justify-center mb-6 text-[#38221f]">
                <PenTool size={32} />
              </div>
              <h3 className="font-serif text-2xl mb-4">Artisanal Craft</h3>
              <p className="text-[#eaddd7]/70 leading-relaxed">
                We partner with master artisans who have dedicated their lives to perfecting their craft, ensuring every piece is a work of art.
              </p>
            </motion.div>

            <motion.div 
              whileHover={{ y: -10 }}
              className="p-8 border border-[#5e403a] rounded-2xl bg-[#5e403a]/10 backdrop-blur-sm"
            >
              <div className="w-16 h-16 mx-auto bg-[#a67c74] rounded-full flex items-center justify-center mb-6 text-[#38221f]">
                <Globe size={32} />
              </div>
              <h3 className="font-serif text-2xl mb-4">Ethically Sourced</h3>
              <p className="text-[#eaddd7]/70 leading-relaxed">
                Luxury shouldn't cost the earth. We are committed to sustainable practices and fair trade sourcing for all our materials.
              </p>
            </motion.div>

            <motion.div 
              whileHover={{ y: -10 }}
              className="p-8 border border-[#5e403a] rounded-2xl bg-[#5e403a]/10 backdrop-blur-sm"
            >
              <div className="w-16 h-16 mx-auto bg-[#a67c74] rounded-full flex items-center justify-center mb-6 text-[#38221f]">
                <Star size={32} />
              </div>
              <h3 className="font-serif text-2xl mb-4">Exclusive Quality</h3>
              <p className="text-[#eaddd7]/70 leading-relaxed">
                Limited runs and rigorous quality control mean you own something truly unique and built to last a lifetime.
              </p>
            </motion.div>

          </div>
        </div>
      </section>

      {/* 4. The Team / Quote (Video or Image) */}
      <section className="py-24 container mx-auto px-6">
        <motion.div 
           initial={{ opacity: 0, scale: 0.95 }}
           whileInView={{ opacity: 1, scale: 1 }}
           viewport={{ once: true }}
           className="relative rounded-3xl overflow-hidden h-[500px] flex items-center justify-center text-center"
        >
          <Image
            src="https://images.unsplash.com/photo-1558769132-cb1aea458c5e?q=80&w=1974&auto=format&fit=crop"
            alt="Design Studio"
            fill
            className="object-cover brightness-50"
          />
          <div className="relative z-10 max-w-3xl px-6">
            <h3 className="font-cara text-5xl md:text-7xl text-white mb-8 leading-tight">
              "Elegance is the only beauty that never fades."
            </h3>
            <Link href="/category/Fashion">
              <LuxuryButton className="bg-white text-[#38221f] hover:bg-[#eaddd7] px-8 py-4 border-none">
                Discover The Collection <ArrowRight className="ml-2" />
              </LuxuryButton>
            </Link>
          </div>
        </motion.div>
      </section>

    </main>
  );
}