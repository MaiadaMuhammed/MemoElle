'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '@/lib/redux/store';
import { removeFromCart, updateQuantity } from '@/lib/redux/slices/cartSlice';
import { translations } from '@/lib/translations'; // استيراد
import { LuxuryButton } from '@/components/ui/LuxuryButton';
import { Trash2, Plus, Minus, ArrowRight, ShoppingBag } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function CartPage() {
  const dispatch = useDispatch();
  const cart = useSelector((state: RootState) => state.cart);
  
  // 1. اللغة
  const { lang } = useSelector((state: RootState) => state.language);
  const t = translations[lang as keyof typeof translations];

  return (
    <main className="min-h-screen bg-[#fdf8f6] pt-28 pb-16 px-4 md:px-6">
      <div className="container mx-auto max-w-6xl">
        
        <div className="mb-12 text-center">
          <h1 className="font-zen text-4xl md:text-5xl text-[#38221f] mb-2">{t.cart_title}</h1>
          <p className="font-cara text-2xl text-[#a67c74]">
             {cart.totalQuantity} {lang === 'en' ? 'items' : 'عناصر'}
          </p>
        </div>

        {cart.items.length === 0 ? (
          // Empty State
          <div className="flex flex-col items-center justify-center py-20 text-center">
            <div className="w-24 h-24 bg-[#eaddd7]/30 rounded-full flex items-center justify-center mb-6">
              <ShoppingBag size={48} className="text-[#a67c74]" />
            </div>
            <h2 className="text-2xl font-serif text-[#38221f] mb-4">{t.cart_empty}</h2>
            <Link href="/">
              <LuxuryButton className="px-8 py-3">
                {t.btn_continue} <ArrowRight className="ml-2 w-4 h-4 rtl:rotate-180" />
              </LuxuryButton>
            </Link>
          </div>
        ) : (
          // Cart Items
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            
            {/* List */}
            <div className="lg:col-span-2 space-y-6">
              <AnimatePresence>
                {cart.items.map((item) => (
                  <motion.div
                    key={item.id}
                    layout
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    className="flex gap-6 p-4 bg-white rounded-2xl border border-[#eaddd7]"
                  >
                    <div className="relative w-24 h-32 bg-[#f2e8e5] rounded-xl overflow-hidden shrink-0">
                      <Image src={item.image} alt={item.name} fill className="object-cover" />
                    </div>
                    
                    <div className="flex flex-col flex-1 justify-between">
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="font-serif text-xl text-[#38221f]">{item.name}</h3>
                          <p className="text-[#a67c74] font-medium mt-1">{t.currency} {item.price.toLocaleString()}</p>
                        </div>
                        <button 
                          onClick={() => dispatch(removeFromCart(item.id))}
                          className="text-[#a67c74] hover:text-red-500 transition-colors p-2"
                        >
                          <Trash2 size={18} />
                        </button>
                      </div>

                      <div className="flex items-center gap-4 mt-4">
                        <div className="flex items-center border border-[#eaddd7] rounded-full">
                          <button 
                            onClick={() => dispatch(updateQuantity({ id: item.id, quantity: Math.max(1, item.quantity - 1) }))}
                            className="p-2 hover:bg-[#f2e8e5] rounded-full text-[#38221f]"
                          >
                            <Minus size={14} />
                          </button>
                          <span className="w-8 text-center font-medium text-[#38221f]">{item.quantity}</span>
                          <button 
                            onClick={() => dispatch(updateQuantity({ id: item.id, quantity: item.quantity + 1 }))}
                            className="p-2 hover:bg-[#f2e8e5] rounded-full text-[#38221f]"
                          >
                            <Plus size={14} />
                          </button>
                        </div>
                        <p className="ml-auto font-bold text-[#38221f] text-lg">
                          {t.currency} {(item.price * item.quantity).toLocaleString()}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>

            {/* Summary */}
            <div className="lg:col-span-1">
              <div className="bg-white p-8 rounded-3xl border border-[#eaddd7] sticky top-28 shadow-xl">
                <h3 className="font-serif text-2xl text-[#38221f] mb-6">{t.cart_subtotal}</h3>
                
                <div className="space-y-4 mb-8">
                  <div className="flex justify-between text-[#5e403a]">
                    <span>{t.cart_subtotal}</span>
                    <span className="font-bold">{t.currency} {cart.totalPrice.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between text-[#5e403a]">
                    <span>{lang === 'en' ? 'Shipping' : 'الشحن'}</span>
                    <span className="text-xs text-[#a67c74] uppercase">{lang === 'en' ? 'Calculated at checkout' : 'يحسب عند الدفع'}</span>
                  </div>
                  <div className="pt-4 border-t border-[#eaddd7] flex justify-between text-xl font-bold text-[#38221f]">
                    <span>Total</span>
                    <span>{t.currency} {cart.totalPrice.toLocaleString()}</span>
                  </div>
                </div>

                <p className="text-xs text-[#a67c74] mb-6 text-center">
                  {t.cart_shipping_note}
                </p>

                <LuxuryButton className="w-full justify-center py-4">
                  {t.btn_checkout} <ArrowRight className="ml-2 w-4 h-4 rtl:rotate-180" />
                </LuxuryButton>
              </div>
            </div>

          </div>
        )}
      </div>
    </main>
  );
}