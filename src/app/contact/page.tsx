import { Metadata } from "next";
import { seoConfig } from "@/data/site";

export const metadata: Metadata = {
  title: seoConfig.contact.title,
  description: seoConfig.contact.description,
  keywords: seoConfig.contact.keywords,
};

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="candy-wash-lavender">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
          <div className="max-w-3xl">
            <span className="text-xs font-semibold text-candy-lavender tracking-widest uppercase mb-4 block">
              Contact 💜
            </span>
            <h1 className="font-serif text-4xl sm:text-5xl font-bold text-candy-plum leading-tight mb-6">
              We&apos;d Love to
              <br />
              <span className="bg-gradient-to-r from-candy-pink to-candy-lavender bg-clip-text text-transparent">Hear From You</span> ✨
            </h1>
            <p className="text-lg text-charcoal-light/80 leading-relaxed">
              Questions about an order, want to collaborate, or just want to
              tell us about your favorite candy? We read every message and
              we&apos;re happy to help 🍬
            </p>
          </div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-8 sm:py-16 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">
            {/* Contact Info */}
            <div className="lg:col-span-1">
              <div className="space-y-8">
                <div>
                  <h3 className="font-serif text-lg font-semibold text-candy-plum mb-3">
                    Get in Touch 💌
                  </h3>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <span className="text-lg">📧</span>
                      <div>
                        <p className="font-medium text-charcoal-light/80 text-sm">Email</p>
                        <a
                          href="mailto:hello@cristalscandies.shop"
                          className="text-sm text-candy-pink hover:text-candy-pink-dark transition-colors"
                        >
                          hello@cristalscandies.shop
                        </a>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-lg">📞</span>
                      <div>
                        <p className="font-medium text-charcoal-light/80 text-sm">Phone</p>
                        <a
                          href="tel:+12085550193"
                          className="text-sm text-candy-pink hover:text-candy-pink-dark transition-colors"
                        >
                          (208) 555-0193
                        </a>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-lg">📍</span>
                      <div>
                        <p className="font-medium text-charcoal-light/80 text-sm">Location</p>
                        <p className="text-sm text-charcoal-light/60">
                          Rigby, Idaho
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="font-serif text-lg font-semibold text-candy-plum mb-3">
                    Hours 🕐
                  </h3>
                  <div className="space-y-1.5 text-sm text-charcoal-light/70">
                    <div className="flex justify-between">
                      <span>Monday – Friday</span>
                      <span>9am – 5pm MT</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Saturday</span>
                      <span>10am – 3pm MT</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Sunday</span>
                      <span>Closed</span>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="font-serif text-lg font-semibold text-candy-plum mb-3">
                    Local Pickup 🚗
                  </h3>
                  <p className="text-sm text-charcoal-light/70 leading-relaxed">
                    Select &quot;Local Pickup&quot; at checkout and we&apos;ll have your
                    order ready at our Rigby location. You&apos;ll receive an email
                    when it&apos;s ready for pickup — usually within 24 hours ✨
                  </p>
                </div>

                <div>
                  <h3 className="font-serif text-lg font-semibold text-candy-plum mb-3">
                    Follow Us 📱
                  </h3>
                  <div className="flex gap-3">
                    <a
                      href="https://instagram.com/cristalscandies"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full bg-candy-pink-light/10 flex items-center justify-center text-candy-pink hover:bg-candy-pink/20 transition-all duration-300"
                      aria-label="Instagram"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
                    </a>
                    <a
                      href="https://facebook.com/cristalscandies"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full bg-candy-pink-light/10 flex items-center justify-center text-candy-pink hover:bg-candy-pink/20 transition-all duration-300"
                      aria-label="Facebook"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-3xl p-8 sm:p-10 border-2 border-candy-pink-light/30 shadow-sm">
                <h2 className="font-serif text-2xl font-bold text-candy-plum mb-6">
                  Send Us a Message 💌
                </h2>
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
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      className="w-full px-4 py-3 rounded-xl border-2 border-candy-pink-light/30 bg-cream text-charcoal placeholder:text-charcoal-light/40 focus:outline-none focus:ring-2 focus:ring-candy-pink focus:border-candy-pink text-sm"
                      placeholder="your@email.com ✉️"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-charcoal-light/80 mb-1.5">
                      Subject *
                    </label>
                    <select className="w-full px-4 py-3 rounded-xl border-2 border-candy-pink-light/30 bg-cream text-charcoal focus:outline-none focus:ring-2 focus:ring-candy-pink text-sm">
                      <option>Select a subject</option>
                      <option>Order Inquiry 🛍️</option>
                      <option>Custom Candy Order ✨</option>
                      <option>Wholesale Question 📦</option>
                      <option>Feedback or Review 💕</option>
                      <option>Collaboration / Partnership 🤝</option>
                      <option>Something Else 🍬</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-charcoal-light/80 mb-1.5">
                      Message *
                    </label>
                    <textarea
                      required
                      rows={5}
                      className="w-full px-4 py-3 rounded-xl border-2 border-candy-pink-light/30 bg-cream text-charcoal placeholder:text-charcoal-light/40 focus:outline-none focus:ring-2 focus:ring-candy-pink focus:border-candy-pink text-sm resize-none"
                      placeholder="What's on your mind? We'd love to hear from you 💜"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full sm:w-auto px-8 py-3.5 bg-gradient-to-r from-candy-pink to-candy-rose text-white text-sm font-bold rounded-full hover:from-candy-pink-dark hover:to-candy-pink transition-all shadow-md hover:shadow-lg"
                  >
                    Send Message 🍬
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="candy-wash-peach py-16 sm:py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl font-bold text-candy-plum text-center mb-10">
            Frequently Asked Questions 💕
          </h2>
          <div className="space-y-6">
            {[
              {
                q: "Do you ship nationwide?",
                a: "Yes! We ship to all 50 states. Orders over $50 ship free. Standard shipping typically arrives within 3–5 business days. 🚚",
              },
              {
                q: "Can I pick up my order locally?",
                a: "Absolutely. Select 'Local Pickup' at checkout and we'll email you when your order is ready — usually within 24 hours. Our pickup location is in Rigby, Idaho.",
              },
              {
                q: "Are all your candies really all-natural?",
                a: "Yes, 100%! We use organic cane sugar, real fruit, actual herbs and botanicals, and never add artificial flavors, colors, or preservatives. Every ingredient is listed on the package and our website. 🌿",
              },
              {
                q: "Do you offer custom flavors for events?",
                a: "We do! Custom Candy Creations are one of our favorite things to make. We work with you to develop a flavor, color, and shape that matches your event. Custom orders start at 50 pieces and typically ship within 3–4 weeks. ✨",
              },
              {
                q: "How should I store my candy?",
                a: "Keep your candy in a cool, dry place away from direct sunlight. Our candies are shelf-stable for 6+ months when stored properly. No refrigeration needed.",
              },
              {
                q: "Do you offer refunds or exchanges?",
                a: "We want you to be happy with every purchase. If something isn't right, email us within 7 days of receiving your order and we'll make it right — whether that's a replacement, exchange, or refund 💕",
              },
            ].map((item) => (
              <div key={item.q} className="bg-white rounded-2xl p-6 border-2 border-candy-pink-light/20">
                <h3 className="font-serif text-base font-semibold text-candy-plum mb-2">
                  {item.q}
                </h3>
                <p className="text-sm text-charcoal-light/60 leading-relaxed">
                  {item.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}