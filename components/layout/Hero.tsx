'use client';

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link"; // مهم عشان الروابط
import { LuxuryButton } from "@/components/ui/LuxuryButton";

// 1. تعريف المتغيرات اللي الـ Hero محتاجاها من ملف الترجمة
interface HeroProps {
  subtitle: string;      // Fall / Winter...
  title: string;         // The Art of Living...
  description: string;   // Discover the new...
  primaryBtn: string;    // Shop Collection
  secondaryBtn: string;  // View Lookbook
}

export const Hero = ({ subtitle, title, description, primaryBtn, secondaryBtn }: HeroProps) => {
  return (
    <section className="relative h-screen w-full overflow-hidden flex items-center justify-center">
      
      {/* 1. الخلفية (صورة الموديل) */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1469334031218-e382a71b716b?q=80&w=2070&auto=format&fit=crop"
          alt="MemoElle Luxury Collection"
          fill
          priority
          className="object-cover object-top opacity-90"
        />
        {/* طبقة تغميق خفيفة عشان الكلام يبان */}
        <div className="absolute inset-0 bg-black/20" />
        {/* طبقة تدريج لوني من تحت */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#fdf8f6] to-transparent" />
      </div>

      {/* 2. المحتوى (الكلام والزرار) */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto space-y-8">
        
        {/* النص الصغير اللي فوق */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <span className="bg-white/20 backdrop-blur-md border border-white/30 text-white px-6 py-2 rounded-full text-xs uppercase tracking-[0.3em] font-medium font-zen">
            {subtitle}
          </span>
        </motion.div>

        {/* العنوان الرئيسي */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="font-serif text-5xl md:text-7xl lg:text-8xl text-white leading-tight drop-shadow-lg font-cara"
        >
          {title}
        </motion.h1>

        {/* وصف بسيط */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="text-white/90 text-lg md:text-xl font-light max-w-2xl mx-auto leading-relaxed"
        >
          {description}
        </motion.p>

        {/* الأزرار */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="flex flex-col md:flex-row gap-4 justify-center items-center pt-8"
        >
          <Link href="/category/Fashion">
            <LuxuryButton className="bg-white text-[#38221f] hover:bg-[#eaddd7] shadow-2xl min-w-[180px] border-none">
              {primaryBtn}
            </LuxuryButton>
          </Link>
          
          <Link href="/about">
            <LuxuryButton variant="outline" className="text-white border-white hover:bg-white/10 hover:text-white min-w-[180px]">
              {secondaryBtn}
            </LuxuryButton>
          </Link>
        </motion.div>

      </div>
    </section>
  );
};