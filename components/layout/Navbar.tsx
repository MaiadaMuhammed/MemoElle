'use client';

import { useState } from "react";
import Image from "next/image";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { Menu, ShoppingBag, Heart, User, Search, Globe } from "lucide-react";

// استيراد المكونات الفرعية
import { Sidebar } from "./Sidebar";
import { SearchModal } from "@/components/ui/SearchModal";
import { cn } from "@/lib/utils";

// استدعاءات Redux (للسلة فقط الآن)
import { RootState } from '@/lib/redux/store';
import { useSelector } from 'react-redux';

// استدعاءات الترجمة الجديدة (next-intl)
import { useTranslations } from 'next-intl';
import { Link, usePathname, useRouter } from '@/lib/navigation';

export const Navbar = () => {
  // 1. استخدام الترجمة من ملفات JSON
  const t = useTranslations('Navbar'); 
  
  // 2. استخدام أدوات التوجيه الخاصة بـ next-intl
  const pathname = usePathname();
  const router = useRouter();

  // States
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  // Redux Selectors (للسلة فقط)
  const cartQuantity = useSelector((state: RootState) => state.cart.totalQuantity);

  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 50);
  });

  // دالة تغيير اللغة
  const switchLanguage = () => {
    // التحقق من اللغة الحالية من الرابط (الميدل وير بيضيف /ar أو /en)
    // لو المسار الحالي بالانجليزي (الافتراضي) هنحوله لعربي، والعكس
    // next-intl بيتعامل مع الـ locale بذكاء
    // ملاحظة: router.replace هنا بياخد الـ pathname الحالي ويغير الـ locale
    const nextLocale = document.documentElement.lang === 'ar' ? 'en' : 'ar';
    router.replace(pathname, { locale: nextLocale });
  };

  const currentLang = typeof document !== 'undefined' ? document.documentElement.lang : 'en';

  return (
    <>
      <motion.header
        className={cn(
          "fixed top-0 left-0 right-0 z-40 transition-all duration-300 border-b border-transparent",
          isScrolled 
            ? "bg-white/80 backdrop-blur-xl py-3 shadow-sm border-white/20" 
            : "bg-transparent py-6"
        )}
      >
        <div className="container mx-auto px-6 flex items-center justify-between">
          
          {/* === اليسار: القائمة والبحث === */}
          <div className="flex items-center gap-2 flex-1">
            <button 
              onClick={() => setIsSidebarOpen(true)}
              className="p-2 hover:bg-[#eaddd7]/50 rounded-full transition-colors"
              title="Menu"
            >
              <Menu className="w-6 h-6 text-[#38221f]" />
            </button>
            
            <button 
              onClick={() => setIsSearchOpen(true)} 
              className="p-2 hover:bg-[#eaddd7]/50 rounded-full transition-colors"
              title={t('search')} 
            >
              <Search className="w-5 h-5 text-[#38221f]" />
            </button>
          </div>

          {/* === المنتصف: اللوجو === */}
          <div className="flex-1 text-center flex justify-center">
            <Link href="/">
              <div className="relative h-14 w-14 md:h-16 md:w-16 rounded-full overflow-hidden border-2 border-[#a67c74]/20 hover:border-[#a67c74] transition-colors">
                <Image 
                  src="/icon.png"
                  alt="MemoElle Logo"
                  fill
                  priority
                  className="object-cover"
                />
              </div>
            </Link>
          </div>

          {/* === اليمين: الأيقونات واللغة === */}
          <div className="flex items-center justify-end gap-2 flex-1">
            
            {/* زر تغيير اللغة */}
            <button 
              onClick={switchLanguage}
              className="p-2 hover:bg-[#eaddd7]/50 rounded-full transition-colors flex items-center gap-1 group"
              title={currentLang === 'en' ? 'Switch to Arabic' : 'تغيير للإنجليزية'}
            >
              <Globe className="w-5 h-5 text-[#38221f] group-hover:text-[#a67c74] transition-colors" />
              <span className="text-xs font-bold uppercase text-[#38221f]">{currentLang === 'en' ? 'AR' : 'EN'}</span>
            </button>

            <Link href="/login" title={t('account')}>
              <button className="p-2 hover:bg-[#eaddd7]/50 rounded-full transition-colors">
                <User className="w-5 h-5 text-[#38221f]" />
              </button>
            </Link>

            <Link href="/wishlist" title={t('wishlist')}>
              <button className="p-2 hover:bg-[#eaddd7]/50 rounded-full transition-colors hidden md:block">
                <Heart className="w-5 h-5 text-[#38221f]" />
              </button>
            </Link>

            <Link href="/cart" title={t('cart')}>
              <button className="relative p-2 bg-[#38221f] text-white rounded-full hover:bg-[#5e403a] transition-colors shadow-lg shadow-[#eaddd7] ms-2">
                <ShoppingBag className="w-5 h-5" />
                {cartQuantity > 0 && (
                  <span className="absolute -top-1 -right-1 bg-red-600 text-white text-[10px] w-4 h-4 flex items-center justify-center rounded-full animate-pulse border border-white">
                    {cartQuantity}
                  </span>
                )}
              </button>
            </Link>
          </div>
        </div>
      </motion.header>

      {/* المكونات الخارجية */}
      <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
      <SearchModal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
    </>
  );
};