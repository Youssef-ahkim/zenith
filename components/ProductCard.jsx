import { ShoppingCart, Cpu, Gauge, Monitor } from "lucide-react";

export default function ProductCard({ product }) {
  return (
    <div className="group relative rounded-3xl border border-white/5 bg-[#0a0a0a] p-5 transition-all duration-500 hover:border-blue-500/50 hover:bg-[#0f0f0f] hover:shadow-[0_0_40px_rgba(37,99,235,0.1)] cursor-pointer">
      
      {/* 1. Image Area */}
      <div className="relative mb-6 aspect-[4/3] rounded-2xl bg-[#050505]">
        <img
          src={product.image}
          alt={product.name}
          className="h-full w-full object-cover rounded-2xl transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute top-4 left-4 rounded-full bg-blue-600 px-3 py-1 text-[10px] font-black uppercase tracking-widest text-white">
          In Stock
        </div>
      </div>

      {/* 2. Product Info */}
      <div className="space-y-5">
        <div>
          <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">
            {product.name}
          </h3>
          <p className="text-xs font-medium text-gray-500 uppercase tracking-wider">{product.brand}</p>
        </div>

        {/* 3. Specs Grid (The 'Pro' look) */}
        <div className="grid grid-cols-3 gap-3 border-y border-white/5 py-4 text-[10px] text-gray-400">
          <div className="flex flex-col items-center gap-1.5">
            <Cpu size={14} className="text-blue-500" />
            <span className="truncate w-full text-center">{product.cpu}</span>
          </div>
          <div className="flex flex-col items-center gap-1.5">
            <Monitor size={14} className="text-blue-500" />
            <span className="truncate w-full text-center">{product.gpu}</span>
          </div>
          <div className="flex flex-col items-center gap-1.5">
            <Gauge size={14} className="text-blue-500" />
            <span className="truncate w-full text-center">{product.ram}GB RAM</span>
          </div>
        </div>

        {/* 4. Price & Button */}
        <div className="flex items-center justify-between">
          <div className="flex flex-col">
            <span className="text-xs text-gray-500 line-through">$4,299</span>
            <span className="text-2xl font-black text-white">${product.price}</span>
          </div>
          <button className="flex h-12 w-12 items-center justify-center rounded-xl bg-white text-black transition-all hover:bg-blue-600 hover:text-white hover:rotate-6 active:scale-90 cursor-pointer">
            <ShoppingCart size={20} />
          </button>
        </div>
      </div>
    </div>
  );
}