"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { products, categories } from "@/data/products";
import { ProductCard } from "@/components/ProductCard";

const dietaryFilters = [
  { slug: "organic", label: "Organic 🌿" },
  { slug: "gluten-free", label: "Gluten-Free" },
  { slug: "dairy-free", label: "Dairy-Free" },
  { slug: "vegan", label: "Vegan 💚" },
];

export default function ShopClient() {
  const searchParams = useSearchParams();
  const initialCategory = searchParams.get("category") || "all";

  const [activeCategory, setActiveCategory] = useState(initialCategory);
  const [activeDietary, setActiveDietary] = useState<string[]>([]);
  const [sortBy, setSortBy] = useState("featured");

  const filteredProducts = useMemo(() => {
    let filtered = products;

    if (activeCategory !== "all") {
      filtered = filtered.filter((p) => p.category === activeCategory);
    }

    if (activeDietary.length > 0) {
      filtered = filtered.filter((p) =>
        activeDietary.every((d) => p.dietary.includes(d))
      );
    }

    switch (sortBy) {
      case "price-low":
        return [...filtered].sort((a, b) => a.price - b.price);
      case "price-high":
        return [...filtered].sort((a, b) => b.price - a.price);
      case "name":
        return [...filtered].sort((a, b) => a.name.localeCompare(b.name));
      default:
        return filtered;
    }
  }, [activeCategory, activeDietary, sortBy]);

  const toggleDietary = (slug: string) => {
    setActiveDietary((prev) =>
      prev.includes(slug) ? prev.filter((d) => d !== slug) : [...prev, slug]
    );
  };

  return (
    <>
      {/* Hero */}
      <section className="candy-wash-pink">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20">
          <div className="max-w-2xl">
            <span className="text-xs font-semibold text-candy-pink tracking-widest uppercase mb-4 block">
              The Collection 🍭
            </span>
            <h1 className="font-serif text-4xl sm:text-5xl font-bold text-candy-plum mb-4">
              Shop Artisan Candies
            </h1>
            <p className="text-lg text-charcoal-light/70 leading-relaxed">
              Handcrafted hard candies made with all-natural and organic ingredients.
              From classic flavors to seasonal specials, gift boxes, and custom creations ✨
            </p>
          </div>
        </div>
      </section>

      {/* Filters + Products */}
      <section className="py-8 sm:py-12 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Category Tabs */}
          <div className="flex flex-wrap gap-2 mb-6">
            <button
              onClick={() => setActiveCategory("all")}
              className={`px-4 py-2 text-sm font-bold rounded-full transition-all duration-300 ${
                activeCategory === "all"
                  ? "bg-gradient-to-r from-candy-pink to-candy-rose text-white shadow-md"
                  : "bg-white text-charcoal-light border-2 border-candy-pink-light/30 hover:border-candy-pink/50"
              }`}
            >
              All 🍬
            </button>
            {categories.map((cat) => (
              <button
                key={cat.slug}
                onClick={() => setActiveCategory(cat.slug)}
                className={`px-4 py-2 text-sm font-bold rounded-full transition-all duration-300 ${
                  activeCategory === cat.slug
                    ? "bg-gradient-to-r from-candy-pink to-candy-rose text-white shadow-md"
                    : "bg-white text-charcoal-light border-2 border-candy-pink-light/30 hover:border-candy-pink/50"
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>

          {/* Dietary Filters + Sort */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8 pb-6 border-b-2 border-candy-pink-light/20">
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-xs font-semibold text-charcoal-light/50 uppercase tracking-wider mr-1">
                Dietary:
              </span>
              {dietaryFilters.map((d) => (
                <button
                  key={d.slug}
                  onClick={() => toggleDietary(d.slug)}
                  className={`px-3 py-1.5 text-xs font-bold rounded-full transition-all duration-300 ${
                    activeDietary.includes(d.slug)
                      ? "bg-candy-mint text-white shadow-sm"
                      : "bg-candy-mint-light/30 text-candy-mint-dark hover:bg-candy-mint-light/50"
                  }`}
                >
                  {d.label}
                </button>
              ))}
            </div>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="px-3 py-2 text-sm border-2 border-candy-pink-light/30 rounded-xl bg-white text-charcoal-light focus:outline-none focus:ring-2 focus:ring-candy-pink"
            >
              <option value="featured">Featured</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="name">Name: A–Z</option>
            </select>
          </div>

          {/* Product Grid */}
          {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <span className="text-5xl mb-4 block">🍬</span>
              <h3 className="font-serif text-xl text-candy-plum mb-2">
                No candies match your filters
              </h3>
              <p className="text-charcoal-light/60 mb-4">
                Try removing some filters to see more options.
              </p>
              <button
                onClick={() => {
                  setActiveCategory("all");
                  setActiveDietary([]);
                }}
                className="text-sm font-bold text-candy-pink hover:text-candy-pink-dark transition-colors"
              >
                Clear All Filters ✨
              </button>
            </div>
          )}

          {/* Results Count */}
          <div className="mt-8 text-center text-sm text-charcoal-light/50">
            Showing {filteredProducts.length} of {products.length} products
          </div>
        </div>
      </section>

      {/* Bundle Suggestion */}
      <section className="candy-wash-mint py-16 sm:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-xs font-semibold text-candy-mint-dark tracking-widest uppercase mb-4 block">
            Save More 🎁
          </span>
          <h2 className="font-serif text-3xl font-bold text-candy-plum mb-3">
            Gift Boxes: More Candy, More Savings 💕
          </h2>
          <p className="text-charcoal-light/60 max-w-lg mx-auto mb-6">
            Our curated gift boxes include multiple flavors at a better price
            than buying individually. The perfect gift — or treat for yourself ✨
          </p>
          <Link
            href="/shop?category=gift-boxes"
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-candy-pink to-candy-rose text-white text-sm font-bold rounded-full hover:from-candy-pink-dark hover:to-candy-pink transition-all shadow-md hover:shadow-lg"
          >
            Shop Gift Boxes 🎁
            <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </section>

      {/* Custom Order CTA */}
      <section className="py-16 sm:py-20 bg-cream">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl p-8 sm:p-12 border-2 border-candy-lavender-light/40 shadow-sm text-center">
            <span className="text-5xl mb-4 block">✨</span>
            <h2 className="font-serif text-3xl font-bold text-candy-plum mb-3">
              Can&apos;t Find What You&apos;re Looking For?
            </h2>
            <p className="text-charcoal-light/60 max-w-lg mx-auto mb-6">
              We create custom candies for weddings, corporate events, and special
              occasions. Your flavor, your color, your story — made by hand 🍬
            </p>
            <Link
              href="/shop/custom-candy-creation"
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-candy-lavender to-candy-pink text-white text-sm font-bold rounded-full hover:from-candy-lavender-dark hover:to-candy-pink transition-all shadow-md hover:shadow-lg"
            >
              Learn About Custom Orders 💜
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}