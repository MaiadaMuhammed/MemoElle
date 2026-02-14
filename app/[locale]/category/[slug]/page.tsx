'use client';

import { useParams } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '@/lib/redux/store';
import { addToCart } from '@/lib/redux/slices/cartSlice';
import { translations } from '@/lib/translations';
import { products } from '@/lib/data'; // تأكد إن مسار الداتا صح
import { GlassCard } from '@/components/ui/GlassCard';
import { LuxuryButton } from '@/components/ui/LuxuryButton';
import { ShoppingBag, ArrowRight } from 'lucide-react';

export default function CategoryPage() {
  const params = useParams();
  const dispatch = useDispatch();
  
  // 1. استخراج اسم القسم من الرابط
  // (فك التشفير عشان لو الرابط فيه مسافات %20)
  const categorySlug = decodeURIComponent(params.slug as string);

  // 2. اللغة والترجمة
  const { lang } = useSelector((state: RootState) => state.language);
  const t = translations[lang as keyof typeof translations];

  // 3. فلتر المنتجات حسب القسم
  // (بنقارن الاسم اللي في الرابط بالاسم اللي في الداتا)
  const categoryProducts = products.filter(
    (p) => p.category.toLowerCase() === categorySlug.toLowerCase()
  );

  return (
    <main className="min-h-screen bg-[#fdf8f6] pt-28 pb-16 px-4 md:px-6">
      <div className="container mx-auto max-w-7xl">
        
        {/* Header */}
        <div className="text-center mb-16">
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-[#a67c74] text-sm font-bold tracking-[0.2em] uppercase font-zen mb-4"
          >
            {t.collections}
          </motion.p>
          <motion.h1 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-6xl font-serif text-[#38221f] font-cara capitalize"
          >
            {categorySlug}
          </motion.h1>
          <div className="w-24 h-1 bg-[#eaddd7] mx-auto mt-6 rounded-full" />
        </div>

        {/* Products Grid */}
        {categoryProducts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categoryProducts.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Link href={`/products/${product.id}`} className="block h-full group">
                  <GlassCard className="h-full flex flex-col hover:shadow-2xl transition-all duration-500">
                    <div className="relative aspect-[3/4] overflow-hidden rounded-t-2xl bg-[#f2e8e5]">
                      <Image
                        src={product.variants[0].images[0]}
                        alt={product.name}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      {/* Sale Badge Example */}
                      <div className="absolute top-4 left-4 bg-[#38221f] text-white text-[10px] px-2 py-1 uppercase tracking-wider">
                        New
                      </div>
                    </div>

                    <div className="p-6 flex flex-col flex-grow">
                      <h3 className="font-serif text-xl text-[#38221f] group-hover:text-[#a67c74] transition-colors mb-2">
                        {product.name}
                      </h3>
                      <p className="text-[#a67c74] font-medium text-lg mb-4">
                        {t.currency} {product.variants[0].sizes[0].price.toLocaleString()}
                      </p>
                      
                      <div className="mt-auto pt-4 border-t border-[#eaddd7]/50">
                        <LuxuryButton 
                          onClick={(e) => {
                            e.preventDefault();
                            dispatch(addToCart({
                              id: product.id,
                              name: product.name,
                              price: product.variants[0].sizes[0].price,
                              image: product.variants[0].images[0]
                            }));
                          }}
                          className="w-full justify-center text-sm py-3"
                        >
                          {t.add_to_cart} <ShoppingBag className="w-4 h-4 mx-2" />
                        </LuxuryButton>
                      </div>
                    </div>
                  </GlassCard>
                </Link>
              </motion.div>
            ))}
          </div>
        ) : (
          // Empty Category State
          <div className="text-center py-20">
            <h3 className="text-2xl text-[#38221f] font-serif mb-4">Coming Soon</h3>
            <p className="text-[#a67c74]">This collection is being curated by our designers.</p>
            <Link href="/">
              <LuxuryButton variant="outline" className="mt-8">
                Return Home <ArrowRight className="ml-2 w-4 h-4 rtl:rotate-180" />
              </LuxuryButton>
            </Link>
          </div>
        )}

      </div>
    </main>
  );
}