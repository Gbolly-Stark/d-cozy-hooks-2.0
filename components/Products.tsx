
"use client";

import { ShoppingCart, Search, Heart } from "lucide-react";
import { products } from "../types/products";
import Link from "next/link";
import { useState } from "react";

const Products = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <section id={'/collection'} className="w-full bg-white px-5 py-16 md:px-10 lg:px-16">

      
      <div className="mx-auto max-w-2xl text-center">
        <p className="mb-2 text-sm font-semibold uppercase tracking-[0.3em] text-[#B026FF]">
          Our Collection
        </p>

        <h2 className="font-heading text-4xl font-bold text-gray-900 md:text-5xl">
          Shop Our Products
        </h2>

        <p className="mt-4 text-sm leading-7 text-gray-500 md:text-base">
          Discover beautiful handmade crochet pieces created with love,
          creativity, and attention to detail.
        </p>
      </div>

    
      <div className="mx-auto mt-10 flex max-w-2xl items-center rounded-full border border-gray-300 bg-white px-4 py-2 shadow-sm transition-all duration-300 focus-within:border-[#B026FF] focus-within:shadow-[0_0_20px_rgba(176,38,255,0.15)]">

        <Search
          size={21}
          strokeWidth={2}
          className="mr-3 shrink-0 text-gray-500"
        />

        <input
          type="text"
          placeholder="Search products..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full bg-transparent py-2 text-sm text-gray-900 outline-none placeholder:text-gray-400"
        />

        {searchTerm && (
          <button
            type="button"
            onClick={() => setSearchTerm("")}
            className="ml-2 text-sm font-medium text-[#B026FF] hover:text-black"
          >
            Clear
          </button>
        )}
      </div>

      
      <div className="mx-auto mt-10 grid max-w-7xl grid-cols-2 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">

        {filteredProducts.map((product) => (
          <div
            key={product.id}
            className="group overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
          >

    
            <Link
              href={`/${product.id}`}
              className="block"
            >
              <div className="relative overflow-hidden">

                <img
                  src={product.image}
                  alt={product.name}
                  className="h-52 w-full object-cover transition-transform duration-500 group-hover:scale-105 sm:h-60"
                />

                <div className="absolute inset-0 bg-[#B026FF]/0 transition-all duration-300 group-hover:bg-[#B026FF]/5" />

              </div>
            </Link>

          
            <div className="p-4">

              <Link href={`/products/${product.id}`}>
                <h3 className="line-clamp-1 text-base font-semibold text-gray-900 transition-colors duration-300 hover:text-[#B026FF] sm:text-lg">
                  {product.name}
                </h3>

                <p className="text-sm text-gray-500">
                  {product.description}
                </p>
              </Link>

              <div className="mt-3 flex items-center justify-between gap-2">

                
                <p className="text-base font-bold text-[#B026FF] sm:text-lg">
                  ${product.price.toFixed(2)}
                </p>

              
                <div className="flex items-center gap-2">

                  
                  <button
                    type="button"
                    onClick={() => {
                      console.log("Added to cart:", product.name);
                    }}
                    aria-label={`Add ${product.name} to cart`}
                    className="flex h-9 w-9 items-center justify-center rounded-full bg-[#B026FF] text-white transition-all duration-300 hover:scale-110 hover:bg-[#8a1bd1]"
                  >
                    <ShoppingCart size={17} />
                  </button>

                
                  <button
                    type="button"
                    onClick={() => {
                      console.log(
                        "Added to wishlist:",
                        product.name
                      );
                    }}
                    aria-label={`Add ${product.name} to wishlist`}
                    className="flex h-9 w-9 items-center justify-center rounded-full bg-black text-white transition-all duration-300 hover:scale-110 hover:bg-[#B026FF]"
                  >
                    <Heart size={17} />
                  </button>

                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* No Products */}
      {filteredProducts.length === 0 && (
        <div className="py-20 text-center">

          <h3 className="text-xl font-semibold text-gray-900">
            No products found
          </h3>

          <p className="mt-2 text-gray-500">
            Try searching for something else.
          </p>

          <button
            type="button"
            onClick={() => setSearchTerm("")}
            className="mt-5 rounded-full bg-[#B026FF] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#8a1bd1]"
          >
            View All Products
          </button>

        </div>
      )}
    </section>
  );
};

export default Products;

