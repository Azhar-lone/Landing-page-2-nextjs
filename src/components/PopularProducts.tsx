import React from "react";
import { products } from "@/constants";
import PopularProductCard from "./PopularProductCard";
import { cn } from "@/lib/utils";

const PopularProducts = ({ className }: { className?: string }) => {
  return (
    <section
      id="products"
      className={cn("max-w-[1440px] max-sm:mt-12", className)}
    >
      <div className="flex flex-col justify-start gap-5">
        <h2 className="font-palanquin text-4xl font-bold">
          Our <span className="text-coral-red">Popular</span> Products
        </h2>
        <p className="mt-2 font-montserrat text-slate-gray lg:max-w-lg">
          Bouy top-notch quality and style from our famous collection. Discover
          the worl of comfort, design and value.
        </p>
      </div>

      <div className="mt-16 grid grid-cols-1 content-center gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {products.map((product) => (
          <PopularProductCard key={product.name} {...product} />
        ))}
      </div>
    </section>
  );
};

export default PopularProducts;
