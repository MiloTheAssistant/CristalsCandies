import { Metadata } from "next";
import { seoConfig } from "@/data/site";

export const metadata: Metadata = {
  title: seoConfig.wholesale.title,
  description: seoConfig.wholesale.description,
  keywords: seoConfig.wholesale.keywords,
};

export default function WholesalePage() {
  return (
    <>
      {/* Hero */}
      <section className="candy-wash-mint">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
          <div className="max-w-3xl">
            <span className="text-xs font-semibold text-candy-mint-dark tracking-widest uppercase mb-4 block">
              Wholesale 📦
            </span>
            <h1 className="font-serif text-4xl sm:text-5xl font-bold text-candy-plum leading-tight mb-6">
              Artisan Candy for
              <br />
              <span className="bg-gradient-to-r from-candy-mint-dark to-candy-pink bg-clip-text text-transparent">Your Business</span> ✨
            </h1>
            <p className="text-lg sm:text-xl text-charcoal-light/80 leading-relaxed">
              From boutique retail shops to hospitality gift amenities, Cristal&apos;s
              Candies brings handcrafted, all-natural hard candies to your customers.
              Beautiful packaging, real ingredients, and a story that sells itself 🍬
            </p>
          </div>
        </div>
      </section>

      {/* Why Wholesale */}
      <section className="py-16 sm:py-24 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: "🏪",
                title: "Retail & Boutiques",
                desc: "Our candies are a premium addition to gift shops, gourmet stores, and boutique retail. Eye-catching packaging and all-natural ingredients your customers will love 💕",
              },
              {
                icon: "🏨",
                title: "Hospitality & Events",
                desc: "Custom-branded candies for hotel amenities, wedding favors, corporate gifts, and event swag. Made to your specifications with real ingredients ✨",
              },
              {
                icon: "📦",
                title: "Private Label & Bulk",
                desc: "White-label options for brands that want artisan candy under their own name. Bulk orders with consistent quality across every batch 🍬",
              },
            ].map((item) => (
              <div key={item.title} className="bg-white rounded-3xl p-8 border-2 border-candy-pink-light/20 hover:border-candy-pink/40 hover:shadow-lg transition-all candy-bounce">
                <span className="text-4xl mb-4 block">{item.icon}</span>
                <h3 className="font-serif text-xl font-semibold text-candy-plum mb-3">
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

      {/* What We Offer */}
      <section className="candy-wash-lavender py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-candy-plum mb-3">
              What We Offer 🍭
            </h2>
            <p className="text-charcoal-light/60 max-w-lg mx-auto">
              Flexible wholesale programs designed for businesses of all sizes.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {[
              "Minimum order: 50 pieces per flavor",
              "Volume discounts starting at 200+ pieces",
              "Custom flavor development available",
              "Custom packaging and branding options",
              "Consistent quality across every batch",
              "Dedicated wholesale account manager",
              "Shelf-stable with 6+ month freshness",
              "All-natural and organic ingredient sourcing",
            ].map((item) => (
              <div key={item} className="flex items-start gap-3">
                <div className="w-5 h-5 mt-0.5 rounded-full bg-candy-mint-light/50 flex items-center justify-center flex-shrink-0">
                  <svg className="w-3 h-3 text-candy-mint-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-charcoal-light/80 text-sm leading-relaxed">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lead Capture Form */}
      <section className="py-16 sm:py-24 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            <div>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-candy-plum mb-6">
                Let&apos;s Build Something Sweet 🍬
              </h2>
              <p className="text-charcoal-light/80 leading-relaxed mb-6">
                Whether you need 200 pieces for a corporate event or 2,000 for
                a retail launch, we&apos;d love to work with you. Fill out the form
                and we&apos;ll get back to you within 1–2 business days with a
                custom quote ✨
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <span className="text-xl">📧</span>
                  <div>
                    <p className="font-medium text-charcoal-light/80">Email us directly</p>
                    <p className="text-sm text-charcoal-light/60">wholesale@cristalscandies.shop</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-xl">📞</span>
                  <div>
                    <p className="font-medium text-charcoal-light/80">Call us</p>
                    <p className="text-sm text-charcoal-light/60">(208) 555-0193</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-xl">⏱️</span>
                  <div>
                    <p className="font-medium text-charcoal-light/80">Response time</p>
                    <p className="text-sm text-charcoal-light/60">1–2 business days</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-3xl p-8 sm:p-10 border-2 border-candy-pink-light/30 shadow-sm">
              <form className="space-y-5" action="#">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-semibold text-charcoal-light/80 mb-1.5">
                      First Name *
                    </label>
                    <input
                      type="text"
                      required
                      className="w-full px-4 py-3 rounded-xl border-2 border-candy-pink-light/30 bg-cream text-charcoal placeholder:text-charcoal-light/40 focus:outline-none focus:ring-2 focus:ring-candy-pink focus:border-candy-pink text-sm"
                      placeholder="Your first name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-charcoal-light/80 mb-1.5">
                      Last Name *
                    </label>
                    <input
                      type="text"
                      required
                      className="w-full px-4 py-3 rounded-xl border-2 border-candy-pink-light/30 bg-cream text-charcoal placeholder:text-charcoal-light/40 focus:outline-none focus:ring-2 focus:ring-candy-pink focus:border-candy-pink text-sm"
                      placeholder="Your last name"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-charcoal-light/80 mb-1.5">
                    Business Name *
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full px-4 py-3 rounded-xl border-2 border-candy-pink-light/30 bg-cream text-charcoal placeholder:text-charcoal-light/40 focus:outline-none focus:ring-2 focus:ring-candy-pink focus:border-candy-pink text-sm"
                    placeholder="Your business name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-charcoal-light/80 mb-1.5">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    className="w-full px-4 py-3 rounded-xl border-2 border-candy-pink-light/30 bg-cream text-charcoal placeholder:text-charcoal-light/40 focus:outline-none focus:ring-2 focus:ring-candy-pink focus:border-candy-pink text-sm"
                    placeholder="you@business.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-charcoal-light/80 mb-1.5">
                    Estimated Volume
                  </label>
                  <select className="w-full px-4 py-3 rounded-xl border-2 border-candy-pink-light/30 bg-cream text-charcoal focus:outline-none focus:ring-2 focus:ring-candy-pink text-sm">
                    <option>Select approximate volume</option>
                    <option>50–200 pieces</option>
                    <option>200–500 pieces</option>
                    <option>500–1,000 pieces</option>
                    <option>1,000–5,000 pieces</option>
                    <option>5,000+ pieces</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-charcoal-light/80 mb-1.5">
                    Message *
                  </label>
                  <textarea
                    required
                    rows={4}
                    className="w-full px-4 py-3 rounded-xl border-2 border-candy-pink-light/30 bg-cream text-charcoal placeholder:text-charcoal-light/40 focus:outline-none focus:ring-2 focus:ring-candy-pink focus:border-candy-pink text-sm resize-none"
                    placeholder="Tell us about your project — flavors, timeline, custom packaging needs, etc. 🍬"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full px-6 py-3.5 bg-gradient-to-r from-candy-pink to-candy-rose text-white text-sm font-bold rounded-full hover:from-candy-pink-dark hover:to-candy-pink transition-all shadow-md hover:shadow-lg"
                >
                  Submit Wholesale Inquiry 📦
                </button>
                <p className="text-xs text-charcoal-light/40 text-center">
                  We&apos;ll respond within 1–2 business days. No commitment required 💕
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}