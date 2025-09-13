"use client";
import { useState } from "react";
import categories from "@/app/components/products.json";

function ProductCard({ name, description, emoji, emojiBg, price }) {
  const priceWithoutVAT = (price / 1.05).toFixed(2).replace(".", ",");
  const priceWithVAT = price.toFixed(2).replace(".", ",");

  return (
    <div className="flex flex-col items-center space-y-4 bg-white shadow-sm hover:shadow-xl p-6 border border-neutral-200 rounded-xl h-full transition-transform hover:-translate-y-1 duration-300 ease-in-out transform">
      <div
        className="flex justify-center items-center rounded-full w-20 h-20 font-medium text-4xl"
        style={{
          background: `linear-gradient(145deg, ${emojiBg} 0%, #ffffff 100%)`,
        }}
      >
        {emoji}
      </div>

      <h3 className="font-semibold text-neutral-900 text-xl text-center">
        {name}
      </h3>
      <p className="text-neutral-500 text-sm text-center">{description}</p>

      <div className="flex flex-col items-center gap-1 mt-2">
        <span className="font-bold text-neutral-900 text-2xl">
          {priceWithoutVAT} zł <span className="text-sm">/opak.</span>
        </span>
        <span className="text-neutral-400 text-sm">
          {priceWithVAT} zł z VAT
        </span>
      </div>
    </div>
  );
}

export function ProductsSection() {
  const [activeTab, setActiveTab] = useState(categories[0].title);
  const currentCategory = categories.find((c) => c.title === activeTab);

  return (
    <section
      id="nasze-produkty"
      className="flex justify-center bg-white px-8 xl:px-0 py-24 w-full"
    >
      <div className="space-y-12 max-w-[1200px]">
        <h2 className="font-bold text-neutral-900 text-4xl text-center">
          Nasze produkty
        </h2>

        {/* podkreślenie z animacją */}
        <div className="flex justify-center gap-6 border-neutral-300 border-b">
          {categories.map((category) => (
            <button
              key={category.title}
              onClick={() => setActiveTab(category.title)}
              className={`relative px-6 py-3 font-semibold transition-colors ${
                activeTab === category.title
                  ? "text-neutral-900"
                  : "text-neutral-400 hover:text-neutral-900"
              }`}
            >
              {category.title}
              <span
                className={`absolute bottom-0 left-0 h-1 rounded-full bg-neutral-900 transition-all duration-300 ${
                  activeTab === category.title ? "w-full" : "w-0"
                }`}
              />
            </button>
          ))}
        </div>

        <div className="gap-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {currentCategory.products.map((product) => (
            <div
              key={product.name}
              className="opacity-0 scale-95 transition-all animate-fade-in duration-500 ease-in-out transform"
            >
              <ProductCard {...product} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
