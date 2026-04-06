"use client"

import { ShoppingCart } from "lucide-react";
import ProductGrid from "../components/ProductGrid";
import HeroVisual from "../components/HeroVisual";

export default function Home() {

  // Smooth scroll to products
  const scrollToProducts = () => {
    const element = document.getElementById("featured-beasts");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div>

      {/* HERO SECTION */}
      <main className="relative w-full text-white">

        

        {/* Hero Content */}
        <div className="relative z-10 mx-auto flex h-full max-w-7xl items-center px-6 lg:items-start mt-30 lg:mt-50 sm:mt-30">
          <div className="grid w-full grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-12">

            {/* TEXT CONTAINER */}
            <div className="flex flex-col items-center text-center space-y-6 lg:items-start lg:text-left">

              {/* 1. Next-Gen Computing (Immediate) */}
              <div className="animate-reveal [animation-delay:100ms] opacity-0">
                <p className="text-[10px] font-bold tracking-[0.5em] text-blue-500 uppercase sm:text-xs">
                  Next-Generation Computing
                </p>
              </div>

              {/* 2. Main Title (200ms delay) */}
              <div className="animate-reveal [animation-delay:300ms] opacity-0">
                <h1 className="text-5xl font-black leading-[0.9] tracking-tighter sm:text-7xl lg:text-8xl">
                  POWER <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">
                    WITHOUT LIMITS.
                  </span>
                </h1>
              </div>

              {/* 3. Description (400ms delay) */}
              <div className="animate-reveal [animation-delay:500ms] opacity-0">
                <p className="max-w-xl text-white/80 text-sm sm:text-base">
                  High-performance laptops engineered for creators, gamers and professionals.
                  Work faster, play smoother, and create without limits.
                </p>
              </div>

              {/* 4. CTA BUTTON (600ms delay) */}
              <div className="animate-reveal [animation-delay:700ms] opacity-0 w-full sm:w-auto">
                <button
                  onClick={scrollToProducts}
                  className="group flex w-full items-center justify-center gap-4 rounded-full bg-white px-8 py-4 text-xs font-black text-black transition-all hover:bg-blue-600 hover:text-white sm:w-auto sm:px-10 sm:py-5 sm:text-sm cursor-pointer"
                >
                  BROWSE LAPTOPS
                  <ShoppingCart className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </button>
              </div>
            </div>

            {/* Hero Visual (Optional: You could add a delay here too) */}
            <div className="hidden lg:flex items-center justify-center">
              <HeroVisual />
            </div>

          </div>
        </div>
      </main>

      {/* PRODUCTS SECTION */}
      <div id="featured-beasts">
        <ProductGrid />
      </div>

    </div>
  );
}