import { Metadata } from "next";
import Link from "next/link";
import { getBestsellers, getLimitedEditions, categories } from "@/data/products";
import { seoConfig } from "@/data/site";
import { ProductCard } from "@/components/ProductCard";

export const metadata: Metadata = {
  title: seoConfig.home.title,
  description: seoConfig.home.description,
  keywords: seoConfig.home.keywords,
};

export default function HomePage() {
  const bestsellers = getBestsellers();
  const limitedEditions = getLimitedEditions();

  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden candy-wash-pink">
        <div className="absolute inset-0 opacity-40">
          <div className="absolute top-20 left-10 w-72 h-72 bg-candy-pink-light/30 rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-candy-lavender-light/30 rounded-full blur-3xl" />
          <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-candy-yellow/20 rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28 lg:py-36">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/70 backdrop-blur-sm rounded-full border border-candy-pink-light/40 mb-6 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-candy-mint animate-pulse" />
              <span className="text-xs font-semibold text-candy-plum tracking-wider uppercase">
                Small-batch · Handcrafted · Organic 🍬
              </span>
            </div>
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-7xl font-bold text-candy-plum leading-[1.1] mb-6">
              Hard Candy,
              <br />
              <span className="bg-gradient-to-r from-candy-pink to-candy-lavender bg-clip-text text-transparent">
                Soft Heart
              </span>
              {" "}
              <span className="text-2xl sm:text-3xl lg:text-4xl">🍭</span>
            </h1>
            <p className="text-lg sm:text-xl text-charcoal-light/80 max-w-xl mb-8 leading-relaxed">
              Artisan hard candies made with all-natural and organic ingredients
              in Rigby, Idaho. Each piece is hand-pulled, hand-wrapped, and made
              with the kind of care you can taste ✨
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/shop"
                className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-candy-pink to-candy-rose text-white text-base font-bold rounded-full hover:from-candy-pink-dark hover:to-candy-pink transition-all shadow-lg hover:shadow-xl hover:-translate-y-1 duration-300"
              >
                Shop the Collection 🍬
                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-candy-pink/25 text-candy-pink text-base font-bold rounded-full hover:bg-candy-pink/5 hover:border-candy-pink/50 transition-all"
              >
                Our Story 💜
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Candy Dot Divider */}
      <div className="candy-dot-divider">
        <span></span><span></span><span></span><span></span><span></span>
      </div>

      {/* Value Props */}
      <section className="bg-white border-b border-candy-pink-light/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {[
              {
                icon: "🌿",
                title: "All-Natural",
                desc: "Zero artificial flavors, colors, or preservatives. Ever.",
              },
              {
                icon: "🧑‍🍳",
                title: "Small-Batch",
                desc: "Every candy is hand-pulled and hand-wrapped by our team.",
              },
              {
                icon: "🚚",
                title: "Nationwide Shipping",
                desc: "Free shipping on orders over $50. Local pickup available.",
              },
              {
                icon: "💝",
                title: "Gift-Ready",
                desc: "Beautifully packaged. Add a note at checkout 💌",
              },
            ].map((item) => (
              <div key={item.title} className="text-center group candy-bounce">
                <div className="w-14 h-14 mx-auto mb-3 rounded-2xl bg-gradient-to-br from-cotton-candy to-candy-peach flex items-center justify-center text-2xl shadow-sm group-hover:scale-110 transition-transform duration-300">
                  {item.icon}
                </div>
                <h3 className="font-serif text-base font-semibold text-candy-plum mb-1">
                  {item.title}
                </h3>
                <p className="text-sm text-charcoal-light/60 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bestsellers */}
      <section className="py-16 sm:py-24 candy-wash-lavender">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between mb-10 sm:mb-14">
            <div>
              <span className="text-xs font-semibold text-candy-pink tracking-widest uppercase mb-2 block">
                🌟 Most Loved
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-candy-plum">
                Bestsellers
              </h2>
            </div>
            <Link
              href="/shop"
              className="hidden sm:inline-flex items-center text-sm font-bold text-candy-pink hover:text-candy-pink-dark transition-colors"
            >
              View All
              <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {bestsellers.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Brand Story Teaser */}
      <section className="bg-gradient-to-r from-candy-plum to-candy-plum-dark text-warm-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-xs font-semibold text-candy-pink-light tracking-widest uppercase mb-4 block">
                Our Story ✨
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-warm-white leading-tight mb-6">
                From a Kitchen in Rigby to Your Doorstep 💜
              </h2>
              <p className="text-candy-lavender-light/70 text-base sm:text-lg leading-relaxed mb-4">
                Cristal started making hard candies in her home kitchen because
                she couldn&apos;t find a single candy at the store made with real
                ingredients. No artificial colors. No corn syrup from who-knows-where.
                Just sugar, water, flavor, and a whole lot of patience.
              </p>
              <p className="text-candy-lavender-light/70 text-base sm:text-lg leading-relaxed mb-8">
                Today, every piece of Cristal&apos;s Candies is still made the same
                way — hand-pulled, hand-wrapped, and made with organic ingredients
                we&apos;d be proud to put on our own kitchen table. Because that&apos;s
                exactly where they started 🍬
              </p>
              <Link
                href="/about"
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-candy-pink to-candy-rose text-white text-sm font-bold rounded-full hover:from-candy-pink-dark hover:to-candy-pink transition-all shadow-md hover:shadow-lg"
              >
                Read the Full Story
                <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
            <div className="flex items-center justify-center">
              <div className="w-64 h-64 sm:w-80 sm:h-80 rounded-full bg-gradient-to-br from-candy-pink/20 to-candy-lavender/20 flex items-center justify-center border border-candy-lavender/10">
                <div className="w-48 h-48 sm:w-60 sm:h-60 rounded-full bg-gradient-to-br from-candy-pink-light/30 to-candy-lavender-light/30 flex items-center justify-center">
                  <span className="text-7xl sm:text-8xl">👩‍🍳</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Seasonal / Limited Editions */}
      {limitedEditions.length > 0 && (
        <section className="py-16 sm:py-24 candy-wash-mint">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10 sm:mb-14">
              <span className="text-xs font-semibold text-candy-orange tracking-widest uppercase mb-2 block">
                ⏰ Limited Time
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-candy-plum">
                Seasonal Specials
              </h2>
              <p className="mt-3 text-charcoal-light/60 max-w-lg mx-auto">
                These flavors won&apos;t last forever. Grab them before they&apos;re gone! 🍁
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {limitedEditions.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Shop by Category */}
      <section className="py-16 sm:py-24 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 sm:mb-14">
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-candy-plum">
              Explore Our Collection 🍭
            </h2>
            <p className="mt-3 text-charcoal-light/60 max-w-lg mx-auto">
              From classic favorites to custom creations, there&apos;s something for every sweet tooth.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((cat) => (
              <Link
                key={cat.slug}
                href={`/shop?category=${cat.slug}`}
                className="group relative p-8 sm:p-10 rounded-3xl bg-white border-2 border-candy-pink-light/20 hover:border-candy-pink/40 hover:shadow-lg transition-all overflow-hidden text-center candy-bounce"
              >
                <div className="absolute inset-0 bg-gradient-to-b from-cotton-candy/0 to-candy-lavender-light/0 group-hover:from-cotton-candy/30 group-hover:to-candy-lavender-light/20 transition-colors duration-300" />
                <div className="relative">
                  <span className="text-4xl mb-4 block">
                    {cat.slug === "classic" ? "🍬" :
                     cat.slug === "seasonal" ? "🍁" :
                     cat.slug === "gift-boxes" ? "🎁" :
                     "✨"}
                  </span>
                  <h3 className="font-serif text-xl font-semibold text-candy-plum group-hover:text-candy-pink transition-colors mb-2">
                    {cat.name}
                  </h3>
                  <p className="text-sm text-charcoal-light/60 mb-4">
                    {cat.description}
                  </p>
                  <span className="inline-flex items-center text-sm font-bold text-candy-pink group-hover:text-candy-pink-dark transition-colors">
                    Browse
                    <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Signals */}
      <section className="bg-white border-t border-b border-candy-pink-light/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="candy-bounce">
              <div className="text-3xl mb-2">⭐</div>
              <h3 className="font-serif text-lg font-semibold text-candy-plum mb-1">
                4.9 ★ Average Rating
              </h3>
              <p className="text-sm text-charcoal-light/60">
                Hundreds of happy candy lovers and counting 💕
              </p>
            </div>
            <div className="candy-bounce">
              <div className="text-3xl mb-2">🤝</div>
              <h3 className="font-serif text-lg font-semibold text-candy-plum mb-1">
                Woman-Owned Business
              </h3>
              <p className="text-sm text-charcoal-light/60">
                Proudly female-owned and operated in Rigby, Idaho
              </p>
            </div>
            <div className="candy-bounce">
              <div className="text-3xl mb-2">♻️</div>
              <h3 className="font-serif text-lg font-semibold text-candy-plum mb-1">
                Sustainable Packaging
              </h3>
              <p className="text-sm text-charcoal-light/60">
                Recyclable, compostable, and plastic-free wherever possible 🌿
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="bg-gradient-to-r from-candy-pink via-candy-rose to-candy-lavender text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 text-center">
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Ready to Taste the Difference? 🍬
          </h2>
          <p className="text-white/80 text-base sm:text-lg max-w-lg mx-auto mb-8">
            Artisan hard candies made with real ingredients, real care, and a whole lot of love ✨
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/shop"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-candy-pink text-base font-bold rounded-full hover:bg-cream transition-all shadow-lg hover:shadow-xl hover:-translate-y-1 duration-300"
            >
              Shop Now — Free Shipping Over $50 🛍️
            </Link>
            <Link
              href="/wholesale"
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-white/40 text-white text-base font-bold rounded-full hover:bg-white/15 transition-colors"
            >
              Wholesale Inquiry 📦
            </Link>
          </div>
        </div>
      </section>

      {/* Candy Dot Divider */}
      <div className="candy-dot-divider">
        <span></span><span></span><span></span><span></span><span></span>
      </div>

      {/* Future Feature: Subscription Preview */}
      <section className="py-16 sm:py-24 candy-wash-peach">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-candy-yellow/20 rounded-full border border-candy-yellow/30 mb-6 shadow-sm">
              <span className="text-xs font-semibold text-candy-orange tracking-wider uppercase">Coming Soon 🍭</span>
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-candy-plum mb-4">
              The Candy Club ✨
            </h2>
            <p className="text-charcoal-light/60 text-base sm:text-lg leading-relaxed mb-8">
              A monthly subscription box of seasonal flavors, exclusive releases,
              and hand-selected favorites delivered to your door. Be the first
              to know when it launches 💕
            </p>
            <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto" action="#">
              <input
                type="email"
                placeholder="Your email address 💌"
                className="flex-1 px-4 py-3 rounded-full bg-white border-2 border-candy-pink-light/40 text-charcoal placeholder:text-charcoal-light/40 focus:outline-none focus:ring-2 focus:ring-candy-pink focus:border-candy-pink text-sm"
              />
              <button
                type="submit"
                className="px-6 py-3 bg-gradient-to-r from-candy-pink to-candy-rose text-white text-sm font-bold rounded-full hover:from-candy-pink-dark hover:to-candy-pink transition-all shadow-md"
              >
                Notify Me 🍬
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}