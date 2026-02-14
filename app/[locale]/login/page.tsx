'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { LuxuryButton } from '@/components/ui/LuxuryButton';
import { ArrowRight, Mail, Lock, User, Check } from 'lucide-react';

export default function LoginPage() {
  const [isLogin, setIsLogin] = useState(true); // للتبديل بين الدخول والتسجيل

  return (
    <main className="min-h-screen grid grid-cols-1 lg:grid-cols-2 bg-[#fdf8f6]">
      
      {/* 1. الجانب الأيسر: الصورة (يظهر فقط في الشاشات الكبيرة) */}
      <div className="relative hidden lg:block h-full overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=2000&auto=format&fit=crop"
          alt="Luxury Fashion"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-[#38221f]/30 backdrop-blur-[2px] flex flex-col justify-end p-12 text-white">
          <h2 className="font-serif text-5xl mb-4 font-cara">Join the Elite</h2>
          <p className="text-lg opacity-90 max-w-md font-light">
            Unlock exclusive access to new arrivals, limited editions, and personalized styling services.
          </p>
        </div>
      </div>

      {/* 2. الجانب الأيمن: الفورم */}
      <div className="flex items-center justify-center p-8 pt-28 lg:pt-0">
        <div className="w-full max-w-md space-y-8">
          
          {/* Header */}
          <div className="text-center">
            <h1 className="font-zen text-3xl text-[#38221f] mb-2">
              {isLogin ? 'Welcome Back' : 'Create Account'}
            </h1>
            <p className="text-[#a67c74]">
              {isLogin ? 'Please enter your details to sign in.' : 'Begin your luxury journey with us.'}
            </p>
          </div>

          {/* Form Switcher (Tabs) */}
          <div className="flex bg-[#eaddd7]/30 p-1 rounded-full relative">
            <motion.div 
              className="absolute top-1 bottom-1 bg-white rounded-full shadow-sm w-[48%]"
              animate={{ x: isLogin ? 0 : '100%' }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            />
            <button 
              onClick={() => setIsLogin(true)}
              className={`flex-1 py-2 text-sm font-bold relative z-10 transition-colors ${isLogin ? 'text-[#38221f]' : 'text-[#a67c74]'}`}
            >
              Sign In
            </button>
            <button 
              onClick={() => setIsLogin(false)}
              className={`flex-1 py-2 text-sm font-bold relative z-10 transition-colors ${!isLogin ? 'text-[#38221f]' : 'text-[#a67c74]'}`}
            >
              Sign Up
            </button>
          </div>

          {/* Animated Forms */}
          <div className="relative overflow-hidden min-h-[350px]">
            <AnimatePresence mode="wait">
              
              {/* === Login Form === */}
              {isLogin ? (
                <motion.form
                  key="login"
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 50 }}
                  className="space-y-6 absolute inset-0"
                  onSubmit={(e) => e.preventDefault()}
                >
                  <div className="space-y-4">
                    <div className="relative group">
                      <Mail className="absolute left-0 top-3 text-[#a67c74] group-focus-within:text-[#38221f] transition-colors" size={20} />
                      <input 
                        type="email" 
                        placeholder="Email Address" 
                        className="w-full bg-transparent border-b border-[#eaddd7] py-3 pl-8 text-[#38221f] focus:outline-none focus:border-[#a67c74] transition-colors placeholder-[#a67c74]/50"
                      />
                    </div>
                    <div className="relative group">
                      <Lock className="absolute left-0 top-3 text-[#a67c74] group-focus-within:text-[#38221f] transition-colors" size={20} />
                      <input 
                        type="password" 
                        placeholder="Password" 
                        className="w-full bg-transparent border-b border-[#eaddd7] py-3 pl-8 text-[#38221f] focus:outline-none focus:border-[#a67c74] transition-colors placeholder-[#a67c74]/50"
                      />
                    </div>
                  </div>

                  <div className="flex justify-between items-center text-sm">
                    <label className="flex items-center gap-2 text-[#5e403a] cursor-pointer">
                      <input type="checkbox" className="accent-[#38221f]" />
                      Remember me
                    </label>
                    <a href="#" className="text-[#a67c74] hover:text-[#38221f] underline">Forgot password?</a>
                  </div>

                  <LuxuryButton className="w-full justify-center py-4">
                    Sign In <ArrowRight className="ml-2 w-4 h-4" />
                  </LuxuryButton>
                  
                  {/* Social Login */}
                  <div className="pt-6 border-t border-[#eaddd7] text-center">
                    <p className="text-xs text-[#a67c74] uppercase tracking-widest mb-4">Or continue with</p>
                    <div className="flex gap-4 justify-center">
                      <button className="w-10 h-10 rounded-full border border-[#eaddd7] flex items-center justify-center hover:bg-[#38221f] hover:text-white transition-colors">G</button>
                      <button className="w-10 h-10 rounded-full border border-[#eaddd7] flex items-center justify-center hover:bg-[#38221f] hover:text-white transition-colors">f</button>
                    </div>
                  </div>
                </motion.form>
              ) : (
                
                /* === Sign Up Form === */
                <motion.form
                  key="signup"
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  className="space-y-6 absolute inset-0"
                  onSubmit={(e) => e.preventDefault()}
                >
                  <div className="space-y-4">
                    <div className="relative group">
                      <User className="absolute left-0 top-3 text-[#a67c74] group-focus-within:text-[#38221f] transition-colors" size={20} />
                      <input 
                        type="text" 
                        placeholder="Full Name" 
                        className="w-full bg-transparent border-b border-[#eaddd7] py-3 pl-8 text-[#38221f] focus:outline-none focus:border-[#a67c74] transition-colors placeholder-[#a67c74]/50"
                      />
                    </div>
                    <div className="relative group">
                      <Mail className="absolute left-0 top-3 text-[#a67c74] group-focus-within:text-[#38221f] transition-colors" size={20} />
                      <input 
                        type="email" 
                        placeholder="Email Address" 
                        className="w-full bg-transparent border-b border-[#eaddd7] py-3 pl-8 text-[#38221f] focus:outline-none focus:border-[#a67c74] transition-colors placeholder-[#a67c74]/50"
                      />
                    </div>
                    <div className="relative group">
                      <Lock className="absolute left-0 top-3 text-[#a67c74] group-focus-within:text-[#38221f] transition-colors" size={20} />
                      <input 
                        type="password" 
                        placeholder="Create Password" 
                        className="w-full bg-transparent border-b border-[#eaddd7] py-3 pl-8 text-[#38221f] focus:outline-none focus:border-[#a67c74] transition-colors placeholder-[#a67c74]/50"
                      />
                    </div>
                  </div>

                  <div className="space-y-3">
                     <div className="flex items-start gap-2 text-xs text-[#5e403a]/80">
                       <Check size={14} className="mt-0.5 text-green-600" />
                       <span>Must be at least 8 characters.</span>
                     </div>
                     <div className="flex items-start gap-2 text-xs text-[#5e403a]/80">
                       <Check size={14} className="mt-0.5 text-[#eaddd7]" />
                       <span>Must contain one special character.</span>
                     </div>
                  </div>

                  <LuxuryButton className="w-full justify-center py-4">
                    Create Account <ArrowRight className="ml-2 w-4 h-4" />
                  </LuxuryButton>
                </motion.form>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </main>
  );
}