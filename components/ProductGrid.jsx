"use client";
import ProductCard from "./ProductCard";

const IMG = "https://www.petitsprix.ma/wp-content/uploads/2024/07/Ordinateur-portable-Gaming-Asus-ROG-Strix-SCAR-18-2-To-SSD.jpg";

const LAPTOPS = [
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
];

export default function ProductGrid() {
  return (
    <section id="explore" className="relative z-20 py-32 px-6">
      <div className="mx-auto max-w-7xl">

        {/* Section Header */}
        <div className="mb-16 flex flex-col items-center justify-between gap-6 md:flex-row md:items-end">
          <div className="space-y-3 text-center md:text-left">
            <h2 className="text-4xl font-black tracking-tighter text-white sm:text-5xl">
              FEATURED BEASTS
            </h2>
            <p className="text-gray-500 max-w-md">
              Hand-picked performance machines for the most demanding users on earth.
            </p>
          </div>
          <a href="/products" className="group flex items-center gap-2 text-sm font-bold text-blue-500 transition-all hover:text-blue-400 cursor-pointer">
            VIEW ALL PRODUCTS
            <div className="h-[2px] w-8 bg-blue-500 transition-all group-hover:w-12" />
          </a>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {LAPTOPS.map((laptop) => (
            <ProductCard key={laptop.id} product={laptop} />
          ))}
        </div>

      </div>
    </section>
  );
}