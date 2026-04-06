"use client";
import { ShoppingCart } from "lucide-react";
import { useCart } from "./CartContext";

export default function AddToCartButton({ product }) {
  const { addToCart } = useCart();

  return (
    <button 
      onClick={() => addToCart(product)}
      className="group flex h-16 items-center justify-center gap-4 rounded-full bg-white px-10 text-sm font-black text-black transition-all hover:bg-blue-600 hover:text-white hover:scale-105 active:scale-95 cursor-pointer"
    >
      ADD TO ARSENAL
      <ShoppingCart size={18} className="transition-transform group-hover:translate-x-1" />
    </button>
  );
}
