'use client';

import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, Home, ShoppingBag, Heart, User, Instagram, Facebook, Twitter, Phone, HelpCircle, BookOpen } from "lucide-react";
import { products } from "@/lib/data";

// 1. استيراد الريدكس والترجمة
import { useSelector } from 'react-redux';
import { RootState } from '@/lib/redux/store';
import { translations } from '@/lib/translations';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export const Sidebar = ({ isOpen, onClose }: SidebarProps) => {
  // 2. قراءة اللغة الحالية
  const { lang } = useSelector((state: RootState) => state.language);
  const t = translations[lang as keyof typeof translations];

  // استخراج الأقسام
  const categories = Array.from(new Set(products.map(p => p.category)));

  // دالة صغيرة لترجمة اسم القسم
  const getCategoryName = (cat: string) => {
    // لو القسم اسمه Fashion يرجع t.cat_fashion، وهكذا
    const key = `cat_${cat.toLowerCase()}` as keyof typeof t;
    return t[key] || cat; // لو ملقاش ترجمة يرجع الاسم الإنجليزي
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* الخلفية المعتمة */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50"
          />

          {/* القائمة الجانبية */}
          <motion.aside
            // 3. تغيير اتجاه الفتح حسب اللغة
            initial={{ x: lang === 'ar' ? "100%" : "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: lang === 'ar' ? "100%" : "-100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className={`fixed top-0 ${lang === 'ar' ? 'right-0' : 'left-0'} h-full w-[320px] bg-[#fdf8f6] shadow-2xl z-50 flex flex-col border-r border-[#eaddd7]`}
          >
            {/* Header */}
            <div className="p-6 flex justify-between items-center border-b border-[#eaddd7]">
              <span className="font-serif text-2xl text-[#38221f] font-bold font-zen">MemoElle</span>
              <button onClick={onClose} className="p-2 hover:bg-[#eaddd7]/50 rounded-full transition-colors text-[#5e403a]">
                <X size={24} />
              </button>
            </div>

            {/* Scrollable Content */}
            <div className="flex-1 overflow-y-auto py-6 px-6 space-y-8">
              
              {/* Explore Section */}
              <div className="space-y-2">
                <p className="text-xs font-bold text-[#a67c74] uppercase tracking-widest mb-4">
                  {t.explore}
                </p>
                
                <Link href="/" onClick={onClose} className="flex items-center gap-3 text-[#38221f] hover:text-[#a67c74] transition-colors py-2 group">
                  <Home size={20} className="text-[#a67c74] group-hover:scale-110 transition-transform" />
                  <span className="text-lg">{t.nav_home}</span>
                </Link>

                <Link href="/about" onClick={onClose} className="flex items-center gap-3 text-[#38221f] hover:text-[#a67c74] transition-colors py-2 group">
                  <BookOpen size={20} className="text-[#a67c74] group-hover:scale-110 transition-transform" />
                  <span className="text-lg">{t.nav_about}</span>
                </Link>

                <Link href="/cart" onClick={onClose} className="flex items-center gap-3 text-[#38221f] hover:text-[#a67c74] transition-colors py-2 group">
                  <ShoppingBag size={20} className="text-[#a67c74] group-hover:scale-110 transition-transform" />
                  <span className="text-lg">{t.nav_cart}</span>
                </Link>

                <Link href="/wishlist" onClick={onClose} className="flex items-center gap-3 text-[#38221f] hover:text-[#a67c74] transition-colors py-2 group">
                  <Heart size={20} className="text-[#a67c74] group-hover:scale-110 transition-transform" />
                  <span className="text-lg">{t.nav_wishlist}</span>
                </Link>
                
                <Link href="/account" onClick={onClose} className="flex items-center gap-3 text-[#38221f] hover:text-[#a67c74] transition-colors py-2 group">
                  <User size={20} className="text-[#a67c74] group-hover:scale-110 transition-transform" />
                  <span className="text-lg">{t.nav_account}</span>
                </Link>
              </div>

              {/* Collections Section */}
              <div className="space-y-2">
                <p className="text-xs font-bold text-[#a67c74] uppercase tracking-widest mb-4">
                  {t.collections}
                </p>
                {categories.map((cat) => (
                  <Link 
                    key={cat} 
                    href={`/category/${cat}`} 
                    onClick={onClose}
                    className="block text-[#5e403a] hover:text-[#38221f] hover:translate-x-2 transition-all py-2 text-lg font-serif capitalize"
                  >
                    {getCategoryName(cat)} {/* هنا بنستخدم دالة الترجمة */}
                  </Link>
                ))}
              </div>

              {/* Client Services Section */}
              <div className="space-y-3 pt-4 border-t border-[#eaddd7]">
                 <p className="text-xs font-bold text-[#a67c74] uppercase tracking-widest mb-2">
                    {t.customer_care}
                 </p>
                 <Link href="/contact" onClick={onClose} className="flex items-center gap-2 text-sm text-[#5e403a]/80 hover:text-[#38221f]">
                    <Phone size={16}/> {t.nav_contact}
                 </Link>
                 <Link href="/faq" onClick={onClose} className="flex items-center gap-2 text-sm text-[#5e403a]/80 hover:text-[#38221f]">
                    <HelpCircle size={16}/> FAQ
                 </Link>
              </div>
            </div>

            {/* Footer */}
            <div className="bg-[#f2e8e5] p-6 border-t border-[#eaddd7]">
              <div className="flex items-center gap-4 mb-4">
                <div className="relative w-12 h-12 rounded-full overflow-hidden border border-[#a67c74]">
                   {/* أيقونة مؤقتة */}
                  <Image 
                    src="/icon.png" 
                    alt="MemoElle" 
                    fill 
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-serif text-[#38221f] font-bold">MemoElle</h4>
                  <p className="text-[10px] text-[#5e403a] leading-tight">
                    {t.footer_desc}
                  </p>
                </div>
              </div>
              
              <div className="flex gap-4 justify-center">
                <a href="#" className="p-2 bg-white rounded-full text-[#a67c74] hover:text-white hover:bg-[#a67c74] transition-all shadow-sm">
                  <Instagram size={16} />
                </a>
                <a href="#" className="p-2 bg-white rounded-full text-[#a67c74] hover:text-white hover:bg-[#a67c74] transition-all shadow-sm">
                  <Facebook size={16} />
                </a>
              </div>
            </div>

          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
};