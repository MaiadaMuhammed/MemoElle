'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { LuxuryButton } from '@/components/ui/LuxuryButton';
import { GlassCard } from '@/components/ui/GlassCard';
import { 
  User, Package, MapPin, Settings, LogOut, 
  ChevronRight, Clock, CheckCircle, CreditCard 
} from 'lucide-react';

export default function AccountPage() {
  const [activeTab, setActiveTab] = useState<'overview' | 'orders' | 'addresses' | 'settings'>('overview');

  // بيانات وهمية للطلبات
  const orders = [
    {
      id: '#MEMO-9281',
      date: 'Oct 24, 2024',
      status: 'Delivered',
      total: 12500,
      image: 'https://images.unsplash.com/photo-1566174053879-31528523f8ae?q=80&w=1924',
      items: 'Velvet Evening Gown + 1 more'
    },
    {
      id: '#MEMO-8821',
      date: 'Sep 12, 2024',
      status: 'Processing',
      total: 4500,
      image: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?q=80&w=1887',
      items: 'Linen Summer Set'
    }
  ];

  return (
    <main className="min-h-screen bg-[#fdf8f6] pt-28 pb-16 px-4 md:px-6">
      <div className="container mx-auto max-w-6xl">
        
        {/* Header */}
        <div className="mb-12 flex items-end justify-between border-b border-[#eaddd7] pb-6">
          <div>
            <h1 className="font-zen text-3xl md:text-4xl text-[#38221f] mb-2">My Account</h1>
            <p className="font-cara text-2xl text-[#a67c74]">Welcome back, Madam Elle.</p>
          </div>
          <button className="hidden md:flex items-center gap-2 text-[#a67c74] hover:text-red-500 transition-colors text-sm font-bold uppercase tracking-wider">
            <LogOut size={16} /> Sign Out
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          
          {/* 1. Sidebar Navigation */}
          <div className="lg:col-span-1 space-y-2">
            {[
              { id: 'overview', label: 'Overview', icon: User },
              { id: 'orders', label: 'My Orders', icon: Package },
              { id: 'addresses', label: 'Addresses', icon: MapPin },
              { id: 'settings', label: 'Settings', icon: Settings },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${
                  activeTab === tab.id 
                    ? 'bg-[#38221f] text-white shadow-lg' 
                    : 'text-[#5e403a] hover:bg-[#eaddd7]/50'
                }`}
              >
                <tab.icon size={18} />
                <span className="font-serif text-lg">{tab.label}</span>
                {activeTab === tab.id && <ChevronRight size={16} className="ml-auto" />}
              </button>
            ))}
            
            {/* Mobile Logout */}
            <button className="w-full flex md:hidden items-center gap-3 px-4 py-3 text-red-500 hover:bg-red-50 rounded-xl transition-colors mt-4">
              <LogOut size={18} />
              <span className="font-serif text-lg">Sign Out</span>
            </button>
          </div>

          {/* 2. Content Area */}
          <div className="lg:col-span-3">
            <AnimatePresence mode="wait">
              
              {/* === Overview Tab === */}
              {activeTab === 'overview' && (
                <motion.div 
                  key="overview"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="space-y-6"
                >
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="bg-[#a67c74] text-white p-6 rounded-2xl shadow-lg">
                      <p className="text-white/80 text-sm mb-1">Total Spent</p>
                      <h3 className="font-zen text-2xl">EGP 17,000</h3>
                    </div>
                    <div className="bg-white border border-[#eaddd7] p-6 rounded-2xl">
                      <p className="text-[#a67c74] text-sm mb-1">Active Orders</p>
                      <h3 className="font-zen text-2xl text-[#38221f]">1</h3>
                    </div>
                    <div className="bg-white border border-[#eaddd7] p-6 rounded-2xl">
                      <p className="text-[#a67c74] text-sm mb-1">Wishlist Items</p>
                      <h3 className="font-zen text-2xl text-[#38221f]">4</h3>
                    </div>
                  </div>

                  <h3 className="font-serif text-2xl text-[#38221f] mt-8 mb-4">Recent Order</h3>
                  <GlassCard className="flex flex-col md:flex-row gap-6 p-6 items-center">
                    <div className="relative w-24 h-32 rounded-lg overflow-hidden shrink-0">
                      <Image src={orders[0].image} alt="Order" fill className="object-cover" />
                    </div>
                    <div className="flex-1 w-full text-center md:text-left">
                      <div className="flex flex-col md:flex-row justify-between items-center mb-2">
                        <span className="font-bold text-[#38221f]">{orders[0].id}</span>
                        <span className="text-green-600 bg-green-50 px-3 py-1 rounded-full text-xs font-bold uppercase">{orders[0].status}</span>
                      </div>
                      <p className="text-[#5e403a] mb-1">{orders[0].items}</p>
                      <p className="text-sm text-[#a67c74]">{orders[0].date}</p>
                    </div>
                    <LuxuryButton className="text-sm px-6">Track Order</LuxuryButton>
                  </GlassCard>
                </motion.div>
              )}

              {/* === Orders Tab === */}
              {activeTab === 'orders' && (
                <motion.div 
                  key="orders"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="space-y-4"
                >
                  <h3 className="font-serif text-2xl text-[#38221f] mb-6">Order History</h3>
                  {orders.map((order) => (
                    <div key={order.id} className="bg-white border border-[#eaddd7] rounded-2xl p-6 flex flex-col md:flex-row gap-6 items-center hover:shadow-md transition-shadow">
                      <div className="relative w-20 h-24 rounded-lg overflow-hidden shrink-0 bg-[#f2e8e5]">
                         <Image src={order.image} alt="Order" fill className="object-cover" />
                      </div>
                      <div className="flex-1 w-full">
                        <div className="flex justify-between items-start mb-2">
                          <h4 className="font-bold text-[#38221f]">{order.id}</h4>
                          <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase ${
                            order.status === 'Delivered' ? 'bg-green-50 text-green-600' : 'bg-blue-50 text-blue-600'
                          }`}>
                            {order.status}
                          </span>
                        </div>
                        <p className="text-[#5e403a] text-sm mb-1">{order.items}</p>
                        <div className="flex items-center gap-4 text-xs text-[#a67c74]">
                          <span className="flex items-center gap-1"><Clock size={12}/> {order.date}</span>
                          <span className="flex items-center gap-1"><CreditCard size={12}/> EGP {order.total.toLocaleString()}</span>
                        </div>
                      </div>
                      <button className="text-[#38221f] underline text-sm hover:text-[#a67c74]">View Details</button>
                    </div>
                  ))}
                </motion.div>
              )}

              {/* === Addresses Tab === */}
              {activeTab === 'addresses' && (
                <motion.div 
                  key="addresses"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                >
                  <div className="flex justify-between items-center mb-6">
                    <h3 className="font-serif text-2xl text-[#38221f]">Saved Addresses</h3>
                    <button className="text-[#a67c74] text-sm font-bold uppercase tracking-wider hover:text-[#38221f]">+ Add New</button>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="border border-[#38221f] bg-[#fdf8f6] p-6 rounded-2xl relative">
                      <span className="absolute top-4 right-4 text-[#38221f] text-[10px] uppercase font-bold border border-[#38221f] px-2 py-1 rounded-full">Default</span>
                      <h4 className="font-bold text-[#38221f] mb-2">Home</h4>
                      <p className="text-[#5e403a] text-sm leading-relaxed mb-4">
                        15 Luxury Avenue, Zamalek<br/>
                        Cairo, Egypt<br/>
                        +20 123 456 7890
                      </p>
                      <div className="flex gap-4 text-sm underline text-[#a67c74]">
                        <button>Edit</button>
                        <button>Delete</button>
                      </div>
                    </div>
                    <div className="border border-[#eaddd7] bg-white p-6 rounded-2xl opacity-60 hover:opacity-100 transition-opacity">
                      <h4 className="font-bold text-[#38221f] mb-2">Office</h4>
                      <p className="text-[#5e403a] text-sm leading-relaxed mb-4">
                        Corporate Tower, New Cairo<br/>
                        Cairo, Egypt<br/>
                        +20 987 654 3210
                      </p>
                      <div className="flex gap-4 text-sm underline text-[#a67c74]">
                        <button>Edit</button>
                        <button>Delete</button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}

              {/* === Settings Tab === */}
              {activeTab === 'settings' && (
                <motion.div 
                  key="settings"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="max-w-xl"
                >
                  <h3 className="font-serif text-2xl text-[#38221f] mb-6">Account Settings</h3>
                  <form className="space-y-6">
                    <div className="grid grid-cols-2 gap-6">
                       <div>
                         <label className="text-xs font-bold text-[#a67c74] uppercase tracking-wider mb-2 block">First Name</label>
                         <input type="text" defaultValue="Madam" className="w-full bg-white border border-[#eaddd7] rounded-lg px-4 py-3 text-[#38221f]" />
                       </div>
                       <div>
                         <label className="text-xs font-bold text-[#a67c74] uppercase tracking-wider mb-2 block">Last Name</label>
                         <input type="text" defaultValue="Elle" className="w-full bg-white border border-[#eaddd7] rounded-lg px-4 py-3 text-[#38221f]" />
                       </div>
                    </div>
                    <div>
                      <label className="text-xs font-bold text-[#a67c74] uppercase tracking-wider mb-2 block">Email Address</label>
                      <input type="email" defaultValue="vip@memoelle.com" className="w-full bg-white border border-[#eaddd7] rounded-lg px-4 py-3 text-[#38221f]" />
                    </div>
                    
                    <div className="pt-6 border-t border-[#eaddd7]">
                      <h4 className="font-bold text-[#38221f] mb-4">Change Password</h4>
                      <div className="space-y-4">
                        <input type="password" placeholder="Current Password" className="w-full bg-white border border-[#eaddd7] rounded-lg px-4 py-3" />
                        <input type="password" placeholder="New Password" className="w-full bg-white border border-[#eaddd7] rounded-lg px-4 py-3" />
                      </div>
                    </div>

                    <LuxuryButton className="px-8 py-3">Save Changes</LuxuryButton>
                  </form>
                </motion.div>
              )}

            </AnimatePresence>
          </div>
        </div>
      </div>
    </main>
  );
}