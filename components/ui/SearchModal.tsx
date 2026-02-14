'use client';

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, Search, ArrowRight } from "lucide-react";
import { products } from "@/lib/data";

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SearchModal = ({ isOpen, onClose }: SearchModalProps) => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState(products);

  // تصفير البحث لما نقفل المودال
  useEffect(() => {
    if (!isOpen) setQuery("");
  }, [isOpen]);

  // منطق البحث الفوري
  useEffect(() => {
    if (query.trim() === "") {
      setResults([]);
    } else {
      const filtered = products.filter((p) => 
        p.name.toLowerCase().includes(query.toLowerCase()) || 
        p.category.toLowerCase().includes(query.toLowerCase())
      );
      setResults(filtered);
    }
  }, [query]);

  // قفل المودال بزرار Esc
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] bg-[#fdf8f6]/95 backdrop-blur-xl flex flex-col"
        >
          {/* Header: Close Button */}
          <div className="flex justify-end p-6">
            <button 
              onClick={onClose}
              className="p-2 bg-white rounded-full hover:bg-[#eaddd7] transition-colors shadow-sm"
            >
              <X size={24} className="text-[#5e403a]" />
            </button>
          </div>

          {/* Search Input Area */}
          <div className="container mx-auto px-6 pt-10 pb-6">
            <div className="relative max-w-3xl mx-auto">
              <input
                type="text"
                placeholder="Search for luxury items..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                autoFocus
                className="w-full bg-transparent border-b-2 border-[#eaddd7] text-3xl md:text-5xl font-serif text-[#38221f] placeholder-[#eaddd7] py-4 focus:outline-none focus:border-[#a67c74] transition-colors text-center"
              />
              <Search className="absolute right-0 top-1/2 -translate-y-1/2 text-[#a67c74] opacity-50" size={32} />
            </div>
            <p className="text-center text-[#a67c74] mt-4 text-sm uppercase tracking-widest">
              {results.length} results found
            </p>
          </div>

          {/* Results Grid */}
          <div className="flex-1 overflow-y-auto px-6 pb-20">
            <div className="container mx-auto max-w-5xl">
              {query === "" ? (
                // Suggestion State (لما ميكونش كاتب حاجة)
                <div className="text-center mt-20 opacity-50">
                  <p className="font-serif text-2xl text-[#38221f] mb-4">Popular Searches</p>
                  <div className="flex justify-center gap-4 flex-wrap">
                    {['Velvet Gown', 'Oud Perfume', 'Silk Scarf', 'Candles'].map(term => (
                      <button 
                        key={term}
                        onClick={() => setQuery(term)}
                        className="px-4 py-2 border border-[#eaddd7] rounded-full hover:bg-[#38221f] hover:text-white transition-all"
                      >
                        {term}
                      </button>
                    ))}
                  </div>
                </div>
              ) : (
                // Results State
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
                  {results.length > 0 ? (
                    results.map((product) => (
                      <Link 
                        key={product.id} 
                        href={`/products/${product.id}`}
                        onClick={onClose} // يقفل البحث لما يختار منتج
                        className="group flex gap-4 p-4 bg-white rounded-xl border border-[#eaddd7] hover:border-[#a67c74] transition-all"
                      >
                        <div className="relative w-20 h-24 bg-[#f2e8e5] rounded-lg overflow-hidden shrink-0">
                          <Image src={product.variants[0].images[0]} alt={product.name} fill className="object-cover" />
                        </div>
                        <div className="flex flex-col justify-center">
                          <span className="text-[10px] text-[#a67c74] uppercase tracking-wider font-bold mb-1">{product.category}</span>
                          <h4 className="font-serif text-lg text-[#38221f] leading-tight group-hover:text-[#a67c74] transition-colors">{product.name}</h4>
                          <span className="text-sm font-medium text-[#5e403a] mt-1">EGP {product.variants[0].sizes[0].price.toLocaleString()}</span>
                        </div>
                        <div className="ml-auto self-center opacity-0 group-hover:opacity-100 transition-opacity -translate-x-2 group-hover:translate-x-0 duration-300">
                          <ArrowRight size={20} className="text-[#a67c74]" />
                        </div>
                      </Link>
                    ))
                  ) : (
                    <div className="col-span-full text-center py-20">
                      <p className="text-xl text-[#5e403a]">No results found for "{query}"</p>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};