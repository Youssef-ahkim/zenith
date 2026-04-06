import { ShoppingCart, Cpu, HardDrive, Monitor } from "lucide-react";

export default function ProductCard({ product }) {
  return (
    <div className="group relative rounded-2xl border border-white/5 bg-white/5 p-4 transition-all duration-500 hover:border-blue-500/50 hover:bg-white/10 cursor-pointer">
      {/* Glow Effect on Hover */}
      <div className="absolute inset-0 -z-10 bg-blue-600/0 blur-[50px] transition-all duration-500 group-hover:bg-blue-600/10" />

      {/* Product Image */}
      <div className="relative mb-6 aspect-video overflow-hidden rounded-xl bg-[#0a0a0a]">
        <img
          src={product.image}
          alt={product.name}
          className="h-full w-full object-contain p-4 transition-transform duration-700 group-hover:scale-110"
        />
        {/* Badge */}
        <div className="absolute top-3 left-3 rounded-full bg-blue-600 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-white">
          In Stock
        </div>
      </div>

      {/* Info */}
      <div className="space-y-4">
        <div>
          <h3 className="text-lg font-bold text-white group-hover:text-blue-400 transition-colors">
            {product.name}
          </h3>
          <p className="text-sm text-gray-500">{product.brand}</p>
        </div>

        {/* Specs Icons */}
        <div className="grid grid-cols-3 gap-2 border-y border-white/5 py-3 text-[10px] text-gray-400">
          <div className="flex flex-col items-center gap-1">
            <Cpu size={14} className="text-blue-500" />
            <span>{product.cpu}</span>
          </div>
          <div className="flex flex-col items-center gap-1">
            <Monitor size={14} className="text-blue-500" />
            <span>{product.gpu}</span>
          </div>
          <div className="flex flex-col items-center gap-1">
            <HardDrive size={14} className="text-blue-500" />
            <span>{product.ram}GB</span>
          </div>
        </div>

        {/* Price & Action */}
        <div className="flex items-center justify-between pt-2">
          <span className="text-xl font-black text-white">${product.price}</span>
          <button className="rounded-lg bg-white p-2 text-black transition-all hover:bg-blue-600 hover:text-white cursor-pointer">
            <ShoppingCart size={18} />
          </button>
        </div>
      </div>
    </div>
  );
}