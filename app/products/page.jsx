"use client";
import { useState, useMemo, useEffect, useRef } from "react";
import ProductCard from "@/components/ProductCard";
import { Shield, ArrowLeft } from "lucide-react";
import Link from "next/link";

import { ALL_LAPTOPS } from "@/lib/data";

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

  const gridRef = useRef(null);

  // Re-run scroll observer whenever filtered list changes
  useEffect(() => {
    const els = gridRef.current?.querySelectorAll("[data-sa]") ?? [];
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target;
            const delay = el.dataset.saDelay ? Number(el.dataset.saDelay) : 0;
            setTimeout(() => el.classList.add("sa-visible"), delay);
            observer.unobserve(el);
          }
        });
      },
      { threshold: 0.08 }
    );
    els.forEach((el) => {
      // Reset so re-filtered cards animate again
      el.classList.remove("sa-visible");
      observer.observe(el);
    });
    return () => observer.disconnect();
  }, [filteredLaptops]);

  return (
    <main className="min-h-screen bg-[#050505] text-white">

      <div className="relative mt-25">

        {/* --- 1. THE HEADER --- */}
        <header data-sa="fade-up" className="px-6 py-12 border-b border-white/5">
          <div className="mx-auto max-w-7xl">
            <Link href="/" className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-gray-500 hover:text-white transition-colors mb-8 cursor-pointer">
              <ArrowLeft size={16} />
              Back to Home
            </Link>

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
            <aside data-sa="fade-left" className="lg:col-span-3">
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
            <div className="lg:col-span-9" ref={gridRef}>
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
                  {filteredLaptops.map((laptop, index) => (
                    <div
                      key={laptop.id}
                      data-sa="zoom-up"
                      data-sa-delay={index * 60}
                    >
                      <ProductCard product={laptop} />
                    </div>
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