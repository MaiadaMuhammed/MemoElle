'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '@/lib/redux/store';
import { removeFromWishlist } from '@/lib/redux/slices/wishlistSlice';
import { addToCart } from '@/lib/redux/slices/cartSlice';
import { GlassCard } from '@/components/ui/GlassCard'; // لازم نستخدم الكارت الزجاجي
import { LuxuryButton } from '@/components/ui/LuxuryButton';
import { Trash2, ShoppingBag, Heart, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function WishlistPage() {
  const dispatch = useDispatch();
  const wishlistItems = useSelector((state: RootState) => state.wishlist.items);

  return (
    <main className="min-h-screen bg-[#fdf8f6] pt-28 pb-16 px-4 md:px-6">
      <div className="container mx-auto max-w-6xl">
        
        {/* Header */}
        <div className="mb-12 text-center">
          <h1 className="font-zen text-4xl md:text-5xl text-[#38221f] mb-2">My Wishlist</h1>
          <p className="font-cara text-2xl text-[#a67c74]">
            {wishlistItems.length} {wishlistItems.length === 1 ? 'item' : 'items'} saved for later
          </p>
        </div>

        {wishlistItems.length === 0 ? (
          // === حالة القائمة الفارغة ===
          <div className="flex flex-col items-center justify-center py-20 text-center">
            <div className="w-24 h-24 bg-[#eaddd7]/30 rounded-full flex items-center justify-center mb-6">
              <Heart size={48} className="text-[#a67c74]" />
            </div>
            <h2 className="text-2xl font-serif text-[#38221f] mb-4">Your wishlist is empty</h2>
            <p className="text-[#5e403a]/70 mb-8 max-w-md">
              Save your favorite luxury pieces here to review them anytime.
            </p>
            <Link href="/">
              <LuxuryButton className="px-8 py-3">
                Explore Collection <ArrowRight className="ml-2 w-4 h-4" />
              </LuxuryButton>
            </Link>
          </div>
        ) : (
          // === شبكة المنتجات (نفس ستايل الصفحة الرئيسية) ===
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence>
              {wishlistItems.map((item) => (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9, transition: { duration: 0.2 } }}
                >
                  <GlassCard className="h-full flex flex-col group relative overflow-hidden hover:shadow-2xl transition-all duration-500">
                    
                    {/* زر الحذف (Trash Icon) - يظهر فوق الصورة */}
                    <button 
                      onClick={(e) => {
                        e.preventDefault();
                        dispatch(removeFromWishlist(item.id));
                      }}
                      className="absolute top-4 right-4 z-20 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center text-[#a67c74] hover:bg-red-50 hover:text-red-500 transition-colors shadow-sm"
                      title="Remove from wishlist"
                    >
                      <Trash2 size={18} />
                    </button>

                    {/* صورة المنتج - اضغط عليها تروح للتفاصيل */}
                    <Link href={`/products/${item.id}`} className="block relative aspect-[3/4] overflow-hidden rounded-t-2xl bg-[#f2e8e5]">
                      <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                        sizes="(max-width: 768px) 100vw, 33vw"
                      />
                      
                      {/* Badge للقسم */}
                      <span className="absolute top-4 left-4 bg-[#38221f]/90 text-white text-[10px] uppercase px-3 py-1 tracking-wider rounded-sm z-10">
                        {item.category}
                      </span>
                    </Link>

                    {/* التفاصيل والأزرار */}
                    <div className="p-6 flex flex-col flex-grow bg-white/50">
                      <Link href={`/products/${item.id}`}>
                        <h3 className="font-serif text-xl text-[#38221f] mb-2 group-hover:text-[#a67c74] transition-colors">
                          {item.name}
                        </h3>
                      </Link>
                      
                      <p className="font-medium text-[#38221f] font-cara text-2xl mb-6">
                        EGP {item.price.toLocaleString()}
                      </p>
                      
                      <div className="mt-auto">
                        <LuxuryButton 
                          onClick={() => {
                            // إضافة للسلة
                            dispatch(addToCart({
                              id: item.id,
                              name: item.name,
                              price: item.price,
                              image: item.image
                            }));
                            // اختياري: حذف من الويش ليست بعد النقل للسلة
                            // dispatch(removeFromWishlist(item.id)); 
                          }}
                          className="w-full text-sm py-3 justify-center shadow-none border border-[#38221f] hover:bg-[#38221f] hover:text-white transition-all"
                        >
                          Move to Bag <ShoppingBag className="w-4 h-4 ml-2" />
                        </LuxuryButton>
                      </div>
                    </div>

                  </GlassCard>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        )}
      </div>
    </main>
  );
}