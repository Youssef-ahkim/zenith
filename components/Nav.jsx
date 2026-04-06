"use client";
import { useState, useEffect } from "react";
import { Search, ShoppingCart} from "lucide-react";
import Image from "next/image";

export default function Nav() {
  const [isScrolled, setIsScrolled] = useState(false);
  const cartCount = 0;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-1/2 -translate-x-1/2 z-50 w-full max-w-[1920px] animate-nav-down transition-all duration-500 ${
        isScrolled 
          ? "border-b border-white/10 bg-[#050505]/95 backdrop-blur-sm py-2 shadow-xl" 
          : "bg-transparent py-4"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6">
        
        <div className="flex items-center group cursor-pointer">
          <div className="relative w-32 md:w-40 aspect-[1920/600] transition-transform duration-500 group-hover:scale-105">
            <Image 
              src="/logo.png" 
              alt="Zenith Logo" 
              fill 
              className="object-contain"
              priority 
            />
          </div>
        </div>

        {/* 2. Sleek Search Bar */}
        <div className="hidden md:flex relative w-1/3 group">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 transition-colors duration-300 group-focus-within:text-blue-500" size={16} />
          <input
            type="text"
            placeholder="Search for your next beast..."
            className="w-full rounded-full border border-white/5 bg-white/5 py-2.5 pl-12 pr-4 text-xs text-white outline-none transition-all duration-500 placeholder:text-gray-600 focus:border-blue-500/30 focus:bg-white/10 focus:ring-4 focus:ring-blue-500/5"
          />
          <div className="absolute right-4 top-1/2 -translate-y-1/2 rounded border border-white/10 px-1.5 py-0.5 text-[9px] font-bold text-gray-500 group-focus-within:border-blue-500/50 group-focus-within:text-blue-400">
            CMD + K
          </div>
        </div>

        {/* 3. Icons & Cart */}

          <button className="relative group text-gray-400 transition-all duration-300 hover:text-white cursor-pointer">
            <ShoppingCart size={20} className="group-hover:scale-110 transition-transform" />
            {cartCount > 0 && (
              <span className="absolute -right-2 -top-2 flex h-4 w-4 items-center justify-center rounded-full bg-blue-600 text-[10px] font-black text-white ring-2 ring-[#050505] animate-pulse">
                {cartCount}
              </span>
            )}
          </button>
      </div>
    </nav>
  );
}