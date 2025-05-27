import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FactoryInterface } from "@/types/factory";

const Items = ({ item }: { item: FactoryInterface }) => {
  const products = item.products.map((item) => item.name).join(" . ");
  return (
    <Link
      href={`/factory/${item.id}`}
      className="group relative rounded-xl overflow-hidden shadow-lg shadow-black/40 block h-[300px]"
    >
      {/* Background image with zoom effect */}
      <div className="absolute inset-0 w-full h-full transition-transform duration-300 ease-in-out group-hover:scale-110">
        <Image
          src={item.mainImage || "/background.jpg"}
          alt=""
          fill
          style={{ objectFit: "cover" }}
        />
      </div>

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent z-10" />

      {/* Text content over image */}
      <div className="absolute bottom-0 left-0 right-0 p-4 z-20 text-white">
        <h3 className="font-bold text-base leading-snug line-clamp-2">
          {item.name}
        </h3>
        <p className="text-sm mt-1 line-clamp-2">Main Products: {products}</p>
      </div>
    </Link>
  );
};

export default Items;

export const ItemsSkeleton = () => {
  return (
    <div className="animate-pulse relative rounded-xl overflow-hidden shadow-lg shadow-black/40 block h-[300px] bg-gray-200">
      {/* Simulated image background */}
      <div className="absolute inset-0 w-full h-full bg-gray-300" />

      {/* Gradient overlay (not animated but preserved for visual consistency) */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent z-10" />

      {/* Simulated text content */}
      <div className="absolute bottom-0 left-0 right-0 p-4 z-20 text-white space-y-2">
        <div className="h-4 bg-gray-400 rounded w-3/4" />
        <div className="h-3 bg-gray-400 rounded w-full" />
        <div className="h-3 bg-gray-400 rounded w-5/6" />
      </div>
    </div>
  );
};
