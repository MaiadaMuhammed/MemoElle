'use client';

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUp } from "lucide-react";

export const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  // إظهار الزر عند النزول 400 بيكسل
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 400) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  // دالة الصعود بنعومة (Smooth Scroll)
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.5, y: 20 }} // يبدأ صغير ومختفي
          animate={{ opacity: 1, scale: 1, y: 0 }}    // يظهر ويكبر
          exit={{ opacity: 0, scale: 0.5, y: 20 }}    // يختفي بنفس الطريقة
          whileHover={{ y: -5 }}                      // يترفع لفوق لما الماوس يجي عليه
          whileTap={{ scale: 0.9 }}                   // يصغر سنة لما تدوس عليه
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-50 p-3 rounded-full bg-[#38221f]/90 backdrop-blur-sm text-white shadow-xl border border-white/10 hover:bg-[#5e403a] transition-colors cursor-pointer"
        >
          <ArrowUp size={24} strokeWidth={2} />
        </motion.button>
      )}
    </AnimatePresence>
  );
};