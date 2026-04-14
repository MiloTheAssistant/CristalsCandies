import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/data/site";

export function Footer() {
  return (
    <footer className="bg-gradient-to-b from-candy-plum-dark to-candy-plum text-cream-dark">
      {/* Newsletter Section */}
      <div className="border-b border-candy-lavender/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="font-serif text-2xl sm:text-3xl text-warm-white mb-2">
              Sweet Updates, Straight to You 💌
            </h3>
            <p className="text-candy-lavender-light mb-6 text-sm sm:text-base">
              New flavors, seasonal drops, and exclusive offers. No spam — just sweetness.
            </p>
            <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto" action="#">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-1 px-4 py-3 rounded-full bg-candy-plum/50 border border-candy-lavender/30 text-warm-white placeholder:text-candy-lavender-light/50 focus:outline-none focus:ring-2 focus:ring-candy-pink-light text-sm"
              />
              <button
                type="submit"
                className="px-6 py-3 bg-gradient-to-r from-candy-pink to-candy-rose text-white text-sm font-bold rounded-full hover:from-candy-pink-dark hover:to-candy-pink transition-all shadow-md hover:shadow-lg"
              >
                Subscribe ✨
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Link href="/" className="mb-4 block">
              <Image
                src="/logo.png"
                alt="Cristal's Candies"
                width={140}
                height={100}
                className="h-14 w-auto"
              />
            </Link>
            <p className="text-candy-lavender-light/70 text-sm leading-relaxed mb-4">
              Handcrafted Hard Candies, Made with Heart. Small-batch artisan hard
              candies made with all-natural and organic ingredients in Rigby, Idaho 🍬
            </p>
            <div className="flex gap-3">
              <a
                href={siteConfig.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-candy-lavender/10 flex items-center justify-center text-candy-lavender-light hover:text-warm-white hover:bg-candy-pink/30 transition-all duration-300"
                aria-label="Instagram"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
              </a>
              <a
                href={siteConfig.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-candy-lavender/10 flex items-center justify-center text-candy-lavender-light hover:text-warm-white hover:bg-candy-pink/30 transition-all duration-300"
                aria-label="Facebook"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif text-warm-white font-semibold mb-4">Shop 🍭</h4>
            <ul className="space-y-2.5">
              <li><Link href="/shop" className="text-sm text-candy-lavender-light/70 hover:text-candy-pink-light transition-colors">All Candies</Link></li>
              <li><Link href="/shop?category=classic" className="text-sm text-candy-lavender-light/70 hover:text-candy-pink-light transition-colors">Classic Hard Candies</Link></li>
              <li><Link href="/shop?category=seasonal" className="text-sm text-candy-lavender-light/70 hover:text-candy-pink-light transition-colors">Seasonal Specials</Link></li>
              <li><Link href="/shop?category=gift-boxes" className="text-sm text-candy-lavender-light/70 hover:text-candy-pink-light transition-colors">Gift Boxes</Link></li>
              <li><Link href="/shop?category=custom" className="text-sm text-candy-lavender-light/70 hover:text-candy-pink-light transition-colors">Custom Orders</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-serif text-warm-white font-semibold mb-4">Company ✨</h4>
            <ul className="space-y-2.5">
              <li><Link href="/about" className="text-sm text-candy-lavender-light/70 hover:text-candy-pink-light transition-colors">Our Story</Link></li>
              <li><Link href="/wholesale" className="text-sm text-candy-lavender-light/70 hover:text-candy-pink-light transition-colors">Wholesale</Link></li>
              <li><Link href="/contact" className="text-sm text-candy-lavender-light/70 hover:text-candy-pink-light transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-serif text-warm-white font-semibold mb-4">Get in Touch 💜</h4>
            <ul className="space-y-2.5">
              <li>
                <a href={`mailto:${siteConfig.contact.email}`} className="text-sm text-candy-lavender-light/70 hover:text-candy-pink-light transition-colors">
                  {siteConfig.contact.email}
                </a>
              </li>
              <li>
                <a href={`tel:${siteConfig.contact.phone}`} className="text-sm text-candy-lavender-light/70 hover:text-candy-pink-light transition-colors">
                  {siteConfig.contact.phone}
                </a>
              </li>
              <li className="text-sm text-candy-lavender-light/70">
                {siteConfig.contact.address}
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-candy-lavender/15">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-candy-lavender-light/40">
            © {new Date().getFullYear()} Cristal&apos;s Candies. From Our Kitchen in Rigby to Your Sweet Tooth 🍬
          </p>
          <div className="flex gap-6">
            <span className="text-xs text-candy-lavender-light/40">Privacy Policy</span>
            <span className="text-xs text-candy-lavender-light/40">Terms of Service</span>
            <span className="text-xs text-candy-lavender-light/40">Shipping Info</span>
          </div>
        </div>
      </div>
    </footer>
  );
}