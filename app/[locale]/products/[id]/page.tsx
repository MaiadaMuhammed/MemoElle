'use client';

import { useState } from 'react';
import Image from 'next/image';
import { useParams } from 'next/navigation';
import { products } from '@/lib/data';
import { LuxuryButton } from '@/components/ui/LuxuryButton';
import { ShoppingBag, Star, Truck, ShieldCheck, Heart } from 'lucide-react';
import { motion } from 'framer-motion';

// Redux & Translation Imports
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '@/lib/redux/slices/cartSlice';
import { addToWishlist, removeFromWishlist } from '@/lib/redux/slices/wishlistSlice';
import { RootState } from '@/lib/redux/store';
import { translations } from '@/lib/translations';

export default function ProductPage() {
  const params = useParams();
  const dispatch = useDispatch();
  
  // 1. اللغة والترجمة
  const { lang } = useSelector((state: RootState) => state.language);
  const t = translations[lang as keyof typeof translations];
  
  // 2. Wishlist Logic
  const wishlistItems = useSelector((state: RootState) => state.wishlist.items);
  
  // البحث عن المنتج
  const productId = Number(params.id);
  const product = products.find((p) => p.id === productId);

  // States
  const [selectedVariantId, setSelectedVariantId] = useState(product?.variants[0].id);
  const [selectedSizeId, setSelectedSizeId] = useState(product?.variants[0].sizes[0].id);
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  if (!product) return <div className="text-center py-40 text-2xl font-serif">Product Not Found</div>;

  const currentVariant = product.variants.find(v => v.id === selectedVariantId) || product.variants[0];
  const currentSize = currentVariant.sizes.find(s => s.id === selectedSizeId) || currentVariant.sizes[0];

  const isInWishlist = wishlistItems.some((item) => item.id === product.id);

  const handleToggleWishlist = () => {
    if (isInWishlist) {
      dispatch(removeFromWishlist(product.id));
    } else {
      dispatch(addToWishlist({
        id: product.id,
        name: product.name,
        price: currentSize.price,
        image: currentVariant.images[0],
        category: product.category
      }));
    }
  };

  return (
    <main className="min-h-screen bg-[#fdf8f6] pt-28 pb-16">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          
          {/* Left: Image Gallery */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-4"
          >
            <div className="relative aspect-[3/4] w-full overflow-hidden rounded-2xl bg-[#f2e8e5]">
               <Image
                 src={currentVariant.images[activeImageIndex]}
                 alt={product.name}
                 fill
                 className="object-cover"
                 priority
               />
               {/* Badges */}
               <div className="absolute top-4 left-4 flex flex-col gap-2">
                 <span className="bg-white/90 backdrop-blur text-[#38221f] text-xs font-bold px-3 py-1 uppercase tracking-wider">
                    {product.category}
                 </span>
               </div>
            </div>
            
            <div className="grid grid-cols-4 gap-4">
              {currentVariant.images.map((img, idx) => (
                <button 
                  key={`img-${idx}`}
                  onClick={() => setActiveImageIndex(idx)}
                  className={`relative aspect-square rounded-lg overflow-hidden border-2 transition-all ${
                    activeImageIndex === idx ? 'border-[#38221f]' : 'border-transparent hover:border-[#a67c74]'
                  }`}
                >
                  <Image src={img} alt="Thumbnail" fill className="object-cover" />
                </button>
              ))}
            </div>
          </motion.div>

          {/* Right: Product Details */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex flex-col h-full py-4"
          >
            <div className="mb-2 flex items-center gap-2 text-[#a67c74]">
              <div className="flex text-[#a67c74]">
                {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
              </div>
              <span className="text-xs font-bold underline cursor-pointer hover:text-[#38221f]">
                24 {t.reviews}
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl font-serif text-[#38221f] mb-4 font-cara leading-tight">
              {product.name}
            </h1>
            
            <p className="text-3xl font-medium text-[#38221f] font-cara mb-8">
              {t.currency} {currentSize.price.toLocaleString()}
            </p>

            {/* Colors */}
            <div className="mb-8">
              <span className="text-xs font-bold text-[#a67c74] uppercase tracking-wider mb-3 block">
                {lang === 'en' ? 'Select Color' : 'اختر اللون'}
              </span>
              <div className="flex gap-3">
                {product.variants.map((variant, index) => (
                  <button
                    key={variant.id || `variant-${index}`} // إضافة index كاحتياطي
                    onClick={() => {
                      setSelectedVariantId(variant.id);
                      setActiveImageIndex(0); // Reset image to first of new color
                    }}
                    className={`w-10 h-10 rounded-full border-2 flex items-center justify-center transition-all ${
                      selectedVariantId === variant.id ? 'border-[#38221f] scale-110' : 'border-transparent'
                    }`}
                    style={{ backgroundColor: variant.colorCode }}
                    title={variant.colorName}
                  >
                    {selectedVariantId === variant.id && (
                       <div className="w-2 h-2 bg-white rounded-full shadow-sm" />
                    )}
                  </button>
                ))}
              </div>
            </div>

            {/* Sizes */}
            <div className="mb-10">
              <div className="flex justify-between mb-3">
                 <span className="text-xs font-bold text-[#a67c74] uppercase tracking-wider">
                    {t.select_size}
                 </span>
                 <button className="text-xs underline text-[#38221f] hover:text-[#a67c74]">
                    {lang === 'en' ? 'Size Guide' : 'دليل المقاسات'}
                 </button>
              </div>
              <div className="flex flex-wrap gap-3">
                {currentVariant.sizes.map((size, index) => (
                  <button
                    key={size.id || `size-${index}`} // إضافة index كاحتياطي
                    onClick={() => setSelectedSizeId(size.id)}
                    className={`h-12 min-w-[3rem] px-4 border rounded-lg text-sm font-bold transition-all ${
                      selectedSizeId === size.id
                        ? 'bg-[#38221f] text-white border-[#38221f]'
                        : 'bg-white text-[#38221f] border-[#eaddd7] hover:border-[#a67c74]'
                    }`}
                  >
                    {size.size}
                  </button>
                ))}
              </div>
            </div>

            {/* Actions */}
            <div className="flex gap-4 mb-10">
              <LuxuryButton 
                onClick={() => dispatch(addToCart({
                  id: product.id,
                  name: product.name,
                  price: currentSize.price,
                  image: currentVariant.images[0]
                }))}
                className="flex-1 justify-center py-4 text-lg"
              >
                {t.add_to_cart} <ShoppingBag className="w-5 h-5 mx-2 rtl:mr-2 rtl:ml-0" />
              </LuxuryButton>
              
              <button 
                onClick={handleToggleWishlist}
                className={`w-16 h-14 flex items-center justify-center rounded-full border transition-all ${
                  isInWishlist 
                    ? 'bg-red-50 border-red-200 text-red-500' 
                    : 'bg-white border-[#eaddd7] text-[#5e403a] hover:border-[#a67c74]'
                }`}
              >
                <Heart className={`w-6 h-6 ${isInWishlist ? 'fill-current' : ''}`} />
              </button>
            </div>

            {/* Info Tabs / Accordion */}
            <div className="border-t border-[#eaddd7] pt-6 space-y-4">
               <div className="flex gap-4 items-start text-sm text-[#5e403a]">
                  <Truck className="shrink-0 text-[#a67c74]" size={20} />
                  <div>
                    <p className="font-bold text-[#38221f] mb-1">{lang === 'en' ? 'Free Delivery' : 'توصيل مجاني'}</p>
                    <p className="opacity-80">{lang === 'en' ? 'For orders over 5000 EGP' : 'للطلبات أكثر من 5000 ج.م'}</p>
                  </div>
               </div>
               <div className="flex gap-4 items-start text-sm text-[#5e403a]">
                  <ShieldCheck className="shrink-0 text-[#a67c74]" size={20} />
                  <div>
                    <p className="font-bold text-[#38221f] mb-1">{lang === 'en' ? 'Authenticity Guaranteed' : 'منتجات أصلية 100%'}</p>
                    <p className="opacity-80">{lang === 'en' ? 'Directly from our ateliers' : 'مباشرة من المصنع إليك'}</p>
                  </div>
               </div>
            </div>

            <div className="mt-8">
               <h3 className="font-serif text-xl mb-3">{t.description}</h3>
               <p className="text-[#5e403a]/80 leading-relaxed">
                 {product.description}
               </p>
            </div>

          </motion.div>
        </div>
      </div>
    </main>
  );
}