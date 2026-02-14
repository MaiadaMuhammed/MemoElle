'use client';

import Link from 'next/link';
import { Facebook, Instagram, Twitter } from 'lucide-react';
import { useSelector } from 'react-redux'; // استيراد
import { RootState } from '@/lib/redux/store'; // استيراد
import { translations } from '@/lib/translations'; // استيراد

export const Footer = () => {
  // 1. هات اللغة والترجمة
  const { lang } = useSelector((state: RootState) => state.language);
  const t = translations[lang as keyof typeof translations];

  return (
    <footer className="bg-[#38221f] text-[#fdf8f6] pt-20 pb-10 px-6 mt-auto">
      <div className="container mx-auto max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand Info */}
          <div className="space-y-6">
            <Link href="/" className="font-serif text-3xl font-bold font-zen block">
              MemoElle
            </Link>
            <p className="text-[#eaddd7]/80 leading-relaxed text-sm max-w-xs">
              {t.footer_desc}
            </p>
            <div className="flex gap-4">
              {[Instagram, Facebook, Twitter].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-full border border-[#eaddd7]/20 flex items-center justify-center hover:bg-[#fdf8f6] hover:text-[#38221f] transition-colors">
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif text-lg mb-6 text-[#eaddd7]">{t.quick_links}</h4>
            <ul className="space-y-3 text-sm text-[#eaddd7]/70">
              <li><Link href="/shop" className="hover:text-white transition-colors">{t.nav_shop}</Link></li>
              <li><Link href="/about" className="hover:text-white transition-colors">{t.nav_about}</Link></li>
              <li><Link href="/contact" className="hover:text-white transition-colors">{t.nav_contact}</Link></li>
              <li><Link href="/faq" className="hover:text-white transition-colors">FAQ</Link></li>
            </ul>
          </div>

          {/* Customer Care */}
          <div>
            <h4 className="font-serif text-lg mb-6 text-[#eaddd7]">{t.customer_care}</h4>
            <ul className="space-y-3 text-sm text-[#eaddd7]/70">
              <li><Link href="/account" className="hover:text-white transition-colors">{t.nav_account}</Link></li>
              <li><Link href="/wishlist" className="hover:text-white transition-colors">{t.nav_wishlist}</Link></li>
              <li><a href="#" className="hover:text-white transition-colors">{t.shipping}</a></li>
              <li><a href="#" className="hover:text-white transition-colors">{t.nav_contact}</a></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-serif text-lg mb-6 text-[#eaddd7]">{t.newsletter_title}</h4>
            <p className="text-[#eaddd7]/70 text-sm mb-4">{t.newsletter_desc}</p>
            <form className="space-y-3">
              <input 
                type="email" 
                placeholder={t.newsletter_placeholder}
                className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:border-[#eaddd7] transition-colors text-sm"
              />
              <button className="w-full bg-[#fdf8f6] text-[#38221f] font-bold py-3 rounded-lg hover:bg-[#eaddd7] transition-colors text-sm uppercase tracking-wider">
                {t.newsletter_btn}
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-[#eaddd7]/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-[#eaddd7]/40">
          <p>&copy; 2024 MemoElle. {t.rights}</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};