'use client';
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  hoverEffect?: boolean;
}

export const GlassCard = ({ children, className, hoverEffect = true }: GlassCardProps) => {
  return (
    <motion.div
      whileHover={hoverEffect ? { y: -5 } : {}}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className={cn(
        // تنسيقات الزجاج الأساسية
        "relative overflow-hidden rounded-2xl border border-white/40 bg-white/30 backdrop-blur-md shadow-sm",
        "transition-all duration-300",
        className
      )}
    >
      {/* لمعة خفيفة (Shine) */}
      <div className="absolute inset-0 bg-gradient-to-tr from-white/40 via-transparent to-transparent pointer-events-none" />
      
      {/* المحتوى */}
      <div className="relative z-10">
        {children}
      </div>
    </motion.div>
  );
};