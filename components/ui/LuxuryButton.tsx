'use client';
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline';
  children: React.ReactNode;
}

export const LuxuryButton = ({ children, variant = 'primary', className, ...props }: ButtonProps) => {
  
  // تنسيقات الزرار حسب النوع
  const variants = {
    primary: "bg-brand-800 text-white shadow-lg shadow-brand-200 border border-transparent",
    outline: "border border-brand-800 text-brand-800 hover:text-white bg-transparent"
  };

  return (
    <motion.button
      whileTap={{ scale: 0.98 }}
      className={cn(
        "relative px-8 py-3 rounded-full font-medium tracking-wide overflow-hidden group transition-colors duration-300",
        variants[variant],
        className
      )}
      {...props}
    >
      {/* الخلفية المتحركة عند الـ Hover */}
      <div className={cn(
        "absolute inset-0 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out",
        variant === 'primary' ? "bg-brand-900" : "bg-brand-800"
      )} />
      
      {/* الكلام (لازم يكون فوق الخلفية) */}
      <span className="relative z-10 flex items-center gap-2 justify-center">
        {children}
      </span>
    </motion.button>
  );
};