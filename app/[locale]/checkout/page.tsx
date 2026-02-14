'use client';

import { useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '@/lib/redux/store';
import { translations } from '@/lib/translations';
import { LuxuryButton } from '@/components/ui/LuxuryButton';
import { GlassCard } from '@/components/ui/GlassCard';
import { ShieldCheck, Truck, CreditCard, ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export default function CheckoutPage() {
  const { items, totalPrice } = useSelector((state: RootState) => state.cart);
  const { lang } = useSelector((state: RootState) => state.language);
  const t = translations[lang as keyof typeof translations];

  const [isSuccess, setIsSuccess] = useState(false);

  const handlePlaceOrder = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSuccess(true);
    // هنا مستقبلاً هنربط بـ API أو Payment Gateway
  };

  if (isSuccess) {
    return (
      <main className="min-h-screen bg-[#fdf8f6] flex items-center justify-center p-6 text-center">
        <div className="max-w-md">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <ShieldCheck size={40} className="text-green-600" />
          </div>
          <h1 className="text-4xl font-serif text-[#38221f] mb-4">
            {lang === 'en' ? 'Thank You for Your Order' : 'شكراً لطلبك'}
          </h1>
          <p className="text-[#5e403a] mb-8">
            {lang === 'en' 
              ? 'Your order has been placed successfully. Our concierge will contact you shortly.' 
              : 'تم استلام طلبك بنجاح. سيتواصل معك فريق خدمة العملاء قريباً لتأكيد الشحن.'}
          </p>
          <Link href="/">
            <LuxuryButton className="px-10">{t.nav_home}</LuxuryButton>
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#fdf8f6] pt-28 pb-16 px-4 md:px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="flex items-center gap-4 mb-10">
          <Link href="/cart" className="text-[#a67c74] hover:text-[#38221f] transition-colors">
            <ArrowLeft size={24} className="rtl:rotate-180" />
          </Link>
          <h1 className="text-4xl font-serif text-[#38221f] font-cara">{t.checkout_title}</h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Form Side */}
          <div className="lg:col-span-7 space-y-10">
            <form onSubmit={handlePlaceOrder} className="space-y-12">
              <section>
                <h2 className="text-xl font-serif text-[#38221f] mb-6 border-b border-[#eaddd7] pb-2">
                  {t.shipping_info}
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs uppercase font-bold text-[#a67c74] tracking-widest">{t.full_name}</label>
                    <input required className="w-full bg-transparent border-b border-[#eaddd7] py-2 focus:outline-none focus:border-[#38221f] transition-colors" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs uppercase font-bold text-[#a67c74] tracking-widest">{t.phone_number}</label>
                    <input required type="tel" className="w-full bg-transparent border-b border-[#eaddd7] py-2 focus:outline-none focus:border-[#38221f] transition-colors" />
                  </div>
                  <div className="md:col-span-2 space-y-2">
                    <label className="text-xs uppercase font-bold text-[#a67c74] tracking-widest">{t.city}</label>
                    <input required className="w-full bg-transparent border-b border-[#eaddd7] py-2 focus:outline-none focus:border-[#38221f] transition-colors" />
                  </div>
                  <div className="md:col-span-2 space-y-2">
                    <label className="text-xs uppercase font-bold text-[#a67c74] tracking-widest">{t.address}</label>
                    <input required className="w-full bg-transparent border-b border-[#eaddd7] py-2 focus:outline-none focus:border-[#38221f] transition-colors" />
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-xl font-serif text-[#38221f] mb-6 border-b border-[#eaddd7] pb-2">
                  {t.payment_method}
                </h2>
                <div className="grid grid-cols-1 gap-4">
                  <label className="flex items-center justify-between p-4 border border-[#38221f] rounded-xl bg-white cursor-pointer">
                    <div className="flex items-center gap-4">
                      <div className="w-5 h-5 rounded-full border-4 border-[#38221f]" />
                      <span className="font-medium">{t.cash_on_delivery}</span>
                    </div>
                    <Truck size={20} className="text-[#a67c74]" />
                  </label>
                  <label className="flex items-center justify-between p-4 border border-[#eaddd7] rounded-xl bg-white/50 opacity-60 cursor-not-allowed">
                    <div className="flex items-center gap-4">
                      <div className="w-5 h-5 rounded-full border border-[#eaddd7]" />
                      <span className="font-medium">{t.credit_card}</span>
                    </div>
                    <CreditCard size={20} className="text-[#eaddd7]" />
                  </label>
                </div>
              </section>

              <LuxuryButton type="submit" className="w-full py-5 text-xl">
                {t.place_order}
              </LuxuryButton>
            </form>
          </div>

          {/* Summary Side */}
          <div className="lg:col-span-5">
            <GlassCard className="p-8 sticky top-28">
              <h2 className="text-2xl font-serif text-[#38221f] mb-8">{t.order_summary}</h2>
              <div className="space-y-6 max-h-[400px] overflow-y-auto mb-8 pr-2">
                {items.map((item) => (
                  <div key={item.id} className="flex gap-4">
                    <div className="relative w-16 h-20 rounded-lg overflow-hidden bg-[#f2e8e5]">
                      <Image src={item.image} alt={item.name} fill className="object-cover" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-serif text-[#38221f] leading-tight">{item.name}</h4>
                      <p className="text-sm text-[#a67c74]">x{item.quantity}</p>
                    </div>
                    <p className="font-bold text-[#38221f]">
                      {t.currency} {(item.price * item.quantity).toLocaleString()}
                    </p>
                  </div>
                ))}
              </div>

              <div className="border-t border-[#eaddd7] pt-6 space-y-4">
                <div className="flex justify-between text-lg">
                  <span className="text-[#a67c74]">{t.cart_subtotal}</span>
                  <span className="text-[#38221f] font-bold">{t.currency} {totalPrice.toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-lg">
                  <span className="text-[#a67c74]">{lang === 'en' ? 'Shipping' : 'الشحن'}</span>
                  <span className="text-green-600 font-bold uppercase text-sm">
                    {lang === 'en' ? 'Free' : 'مجاني'}
                  </span>
                </div>
                <div className="flex justify-between text-2xl font-serif pt-4 border-t border-[#38221f]/10">
                  <span>Total</span>
                  <span className="text-[#38221f]">{t.currency} {totalPrice.toLocaleString()}</span>
                </div>
              </div>
            </GlassCard>
          </div>
        </div>
      </div>
    </main>
  );
}