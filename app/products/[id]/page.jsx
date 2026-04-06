import { ALL_LAPTOPS } from "@/lib/data";
import Link from "next/link";
import { ArrowLeft, ShoppingCart, Cpu, Monitor, Zap, ShieldCheck } from "lucide-react";
import AddToCartButton from "@/components/AddToCartButton";

export default async function ProductPage({ params }) {
  const resolvedParams = await params;
  const productId = parseInt(resolvedParams.id, 10);
  const product = ALL_LAPTOPS.find((p) => p.id === productId);

  if (!product) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-[#050505] text-white gap-6">
        <h1 className="text-6xl font-black italic tracking-tighter">404 // NOT FOUND</h1>
        <Link href="/products" className="text-blue-500 hover:text-blue-400 underline underline-offset-4 uppercase text-xs tracking-widest font-bold">
          Return to Armory
        </Link>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-[#050505] text-white pt-24 md:pt-32 pb-16">
      <div className="mx-auto max-w-7xl px-6">
        
        {/* Back navigation */}
        <Link href="/products" className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-gray-400 hover:text-white transition-colors mb-8 md:mb-12 cursor-pointer">
          <ArrowLeft size={16} />
          Back to Armory
        </Link>

        {/* Product Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Left: Glowing Product Image */}
          <div data-sa="fade-right" className="relative group w-full aspect-square md:aspect-[4/3] rounded-3xl bg-[#0a0a0a] border border-white/5 flex items-center justify-center overflow-hidden">
             <div className="absolute inset-0 bg-blue-600/5 mix-blend-screen opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
             <div className="absolute -inset-10 bg-blue-600/10 blur-[80px] rounded-full opacity-50 group-hover:opacity-80 transition-opacity duration-1000 -z-10" />
             <img 
               src={product.image} 
               alt={product.name}
               className="w-full h-full object-contain p-8 md:p-16 transition-transform duration-1000 group-hover:scale-105 group-hover:-rotate-1"
             />
             <div className="absolute top-6 left-6 rounded-full bg-blue-600 px-4 py-2 text-xs font-black uppercase tracking-widest text-white shadow-xl shadow-blue-500/20">
               In Stock
             </div>
          </div>

          {/* Right: Product Details */}
          <div className="space-y-10">
            
            {/* Header info */}
            <div data-sa="fade-up" data-sa-delay="100">
              <p className="text-blue-500 font-bold tracking-[0.2em] uppercase text-xs mb-3">{product.brand}</p>
              <h1 className="text-4xl md:text-6xl font-black leading-none tracking-tight mb-6">
                {product.name}
              </h1>
              <p className="text-gray-400 text-sm leading-relaxed max-w-lg">
                Engineered for maximum payload and unrivaled performance. Whether for intense gaming or complex computational tasks, this {product.brand} system dominates the landscape.
              </p>
            </div>

            {/* Core Specs */}
            <div className="grid grid-cols-2 gap-4">
               <div data-sa="zoom-up" data-sa-delay="200" className="bg-[#0a0a0a] p-4 rounded-2xl border border-white/5 flex gap-4 items-center group/spec hover:bg-white/5 transition-colors cursor-pointer">
                  <div className="h-10 w-10 flex items-center justify-center bg-[#0f0f0f] rounded-xl text-blue-500 transition-transform group-hover/spec:scale-110">
                     <Cpu size={20} />
                  </div>
                  <div>
                    <p className="text-[10px] text-gray-500 uppercase font-black tracking-widest group-hover/spec:text-gray-300 transition-colors">Processor</p>
                    <p className="font-bold text-sm">{product.cpu}</p>
                  </div>
               </div>
               <div data-sa="zoom-up" data-sa-delay="300" className="bg-[#0a0a0a] p-4 rounded-2xl border border-white/5 flex gap-4 items-center group/spec hover:bg-white/5 transition-colors cursor-pointer">
                  <div className="h-10 w-10 flex items-center justify-center bg-[#0f0f0f] rounded-xl text-blue-500 transition-transform group-hover/spec:scale-110">
                     <Monitor size={20} />
                  </div>
                  <div>
                    <p className="text-[10px] text-gray-500 uppercase font-black tracking-widest group-hover/spec:text-gray-300 transition-colors">Graphics</p>
                    <p className="font-bold text-sm">{product.gpu}</p>
                  </div>
               </div>
               <div data-sa="zoom-up" data-sa-delay="400" className="bg-[#0a0a0a] p-4 rounded-2xl border border-white/5 flex gap-4 items-center group/spec hover:bg-white/5 transition-colors cursor-pointer">
                  <div className="h-10 w-10 flex items-center justify-center bg-[#0f0f0f] rounded-xl text-blue-500 transition-transform group-hover/spec:scale-110">
                     <Zap size={20} />
                  </div>
                  <div>
                    <p className="text-[10px] text-gray-500 uppercase font-black tracking-widest group-hover/spec:text-gray-300 transition-colors">Memory</p>
                    <p className="font-bold text-sm">{product.ram} GB DDR5</p>
                  </div>
               </div>
               <div data-sa="zoom-up" data-sa-delay="500" className="bg-[#0a0a0a] p-4 rounded-2xl border border-white/5 flex gap-4 items-center group/spec hover:bg-white/5 transition-colors cursor-pointer">
                  <div className="h-10 w-10 flex items-center justify-center bg-[#0f0f0f] rounded-xl text-blue-500 transition-transform group-hover/spec:scale-110">
                     <ShieldCheck size={20} />
                  </div>
                  <div>
                    <p className="text-[10px] text-gray-500 uppercase font-black tracking-widest group-hover/spec:text-gray-300 transition-colors">Warranty</p>
                    <p className="font-bold text-sm">3 Years Elite</p>
                  </div>
               </div>
            </div>

            <hr data-sa="fade-up" data-sa-delay="600" className="border-white/5" />

            {/* Price & Action */}
            <div data-sa="fade-up" data-sa-delay="700" className="flex flex-col sm:flex-row gap-6 sm:items-center justify-between">
              <div>
                <p className="text-xs text-gray-500 font-bold uppercase tracking-widest mb-1">MSRP / Price</p>
                <p className="text-5xl font-black">${product.price}</p>
              </div>
              
              <AddToCartButton product={product} />
            </div>

          </div>
        </div>
      </div>
    </main>
  );
}
