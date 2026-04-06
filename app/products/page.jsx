"use client";
import { useState, useMemo } from "react";
import ProductCard from "@/components/ProductCard";
import { Shield } from "lucide-react";

const IMG = "https://www.petitsprix.ma/wp-content/uploads/2024/07/Ordinateur-portable-Gaming-Asus-ROG-Strix-SCAR-18-2-To-SSD.jpg";

const ALL_LAPTOPS = [
  {
    id: 1,
    name: "ASUS ROG Zephyrus G16",
    brand: "ASUS",
    cpu: "i9-14900HX",
    gpu: "RTX 4090",
    ram: 32,
    price: 3999,
    image: IMG,
  },
  {
    id: 2,
    name: "Razer Blade 18",
    brand: "RAZER",
    cpu: "i9-13980HX",
    gpu: "RTX 4080",
    ram: 32,
    price: 3499,
    image: IMG,
  },
  {
    id: 3,
    name: "Dell Alienware m18",
    brand: "DELL",
    cpu: "i9-13900HX",
    gpu: "RTX 4080",
    ram: 64,
    price: 3299,
    image: IMG,
  },
  {
    id: 4,
    name: "MSI Titan GT77",
    brand: "MSI",
    cpu: "i9-13980HX",
    gpu: "RTX 4090",
    ram: 64,
    price: 4299,
    image: IMG,
  },
  {
    id: 5,
    name: "ASUS ProArt Studiobook",
    brand: "ASUS",
    cpu: "i9-13980HX",
    gpu: "RTX 4070",
    ram: 32,
    price: 2999,
    image: IMG,
  },
  {
    id: 6,
    name: "Razer Blade 16",
    brand: "RAZER",
    cpu: "i9-14900HX",
    gpu: "RTX 4070",
    ram: 16,
    price: 2799,
    image: IMG,
  },
  {
    id: 7,
    name: "Dell XPS 17",
    brand: "DELL",
    cpu: "i9-13900H",
    gpu: "RTX 4070",
    ram: 32,
    price: 2599,
    image: IMG,
  },
  {
    id: 8,
    name: "MSI Raider GE78",
    brand: "MSI",
    cpu: "i9-13950HX",
    gpu: "RTX 4080",
    ram: 64,
    price: 3799,
    image: IMG,
  },
];

export default function Products() {
  const [filters, setFilters] = useState({ brands: [], ram: [], gpu: [] });

  const filteredLaptops = useMemo(() => {
    return ALL_LAPTOPS.filter((l) => {
      const bMatch = filters.brands.length === 0 || filters.brands.includes(l.brand.toUpperCase());
      const rMatch = filters.ram.length === 0 || filters.ram.includes(l.ram.toString());
      const gMatch = filters.gpu.length === 0 || filters.gpu.some((g) => l.gpu.includes(g));
      return bMatch && rMatch && gMatch;
    });
  }, [filters]);

  const toggleFilter = (cat, val) => {
    setFilters((prev) => ({
      ...prev,
      [cat]: prev[cat].includes(val) ? prev[cat].filter((v) => v !== val) : [...prev[cat], val],
    }));
  };

  return (
    <main className="min-h-screen bg-[#050505] text-white">

      <div className="relative mt-25">

        {/* --- 1. THE HEADER --- */}
        <header className="px-6 py-12 border-b border-white/5">
          <div className="mx-auto max-w-7xl">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
              <div className="space-y-4">
                <h1 className="text-5xl md:text-8xl font-black tracking-tighter italic leading-none text-white">
                  THE ARMORY
                </h1>
                <div className="flex items-center gap-3">
                  <span className="h-2 w-2 rounded-full bg-blue-500 animate-pulse" />
                  <p className="text-gray-500 font-mono text-[10px] uppercase tracking-[0.3em]">
                    Live_Stock // Inventory_Online
                  </p>
                </div>
              </div>

              <div className="flex flex-col items-end border-l border-white/10 pl-8">
                <p className="text-4xl font-black text-blue-500">{filteredLaptops.length}</p>
                <p className="text-[10px] text-gray-500 font-bold uppercase tracking-widest">Available Beasts</p>
              </div>
            </div>
          </div>
        </header>

        {/* --- 2. THE CONTENT --- */}
        <section className="mx-auto max-w-7xl px-6 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">

            {/* SIDEBAR */}
            <aside className="lg:col-span-3">
              <div className="lg:sticky lg:top-32 space-y-12">
                <FilterGroup
                  label="Manufacturer"
                  options={["ASUS", "RAZER", "DELL", "MSI"]}
                  activeItems={filters.brands}
                  onToggle={(v) => toggleFilter("brands", v)}
                />
                <FilterGroup
                  label="Memory (RAM)"
                  options={["16", "32", "64"]}
                  suffix="GB"
                  activeItems={filters.ram}
                  onToggle={(v) => toggleFilter("ram", v)}
                />
                <FilterGroup
                  label="GPU Series"
                  options={["4090", "4080", "4070"]}
                  prefix="RTX "
                  activeItems={filters.gpu}
                  onToggle={(v) => toggleFilter("gpu", v)}
                />

                <div className="p-6 rounded-2xl border border-white/5 bg-white/[0.02]">
                  <Shield size={20} className="text-blue-500 mb-3" />
                  <p className="text-xs font-bold uppercase text-white">Stress Tested</p>
                  <p className="text-[10px] text-gray-500 mt-1 leading-relaxed">System performance verified before shipping.</p>
                </div>
              </div>
            </aside>

            {/* MAIN GRID */}
            <div className="lg:col-span-9">
              {filteredLaptops.length === 0 ? (
                <div className="flex flex-col items-center justify-center py-32 text-gray-500 gap-4">
                  <p className="text-5xl">🔍</p>
                  <p className="text-sm font-bold uppercase tracking-widest">No beasts match your filters</p>
                  <button
                    onClick={() => setFilters({ brands: [], ram: [], gpu: [] })}
                    className="mt-2 text-xs text-blue-500 hover:text-blue-400 transition-colors cursor-pointer underline underline-offset-4"
                  >
                    Clear all filters
                  </button>
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {filteredLaptops.map((laptop) => (
                    <ProductCard key={laptop.id} product={laptop} />
                  ))}
                </div>
              )}
            </div>

          </div>
        </section>
      </div>
    </main>
  );
}

function FilterGroup({ label, options, activeItems, onToggle, prefix = "", suffix = "" }) {
  return (
    <div className="space-y-5">
      <p className="text-[10px] font-black text-gray-500 uppercase tracking-widest">{label}</p>
      <div className="flex flex-wrap lg:flex-col gap-3">
        {options.map((opt) => (
          <button
            key={opt}
            onClick={() => onToggle(opt)}
            className={`flex items-center gap-3 transition-all group cursor-pointer ${
              activeItems.includes(opt) ? "text-blue-500" : "text-gray-500 hover:text-gray-300"
            }`}
          >
            <div
              className={`w-3 h-3 border border-white/20 rounded-sm transition-all ${
                activeItems.includes(opt) ? "bg-blue-500 border-blue-500" : "group-hover:border-white/40"
              }`}
            />
            <span className="text-xs font-bold uppercase tracking-tighter">
              {prefix}{opt}{suffix}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}