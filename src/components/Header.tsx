"use client";

import Link from "next/link";
import { useState } from "react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "Our Story" },
  { href: "/shop", label: "Shop" },
  { href: "/wholesale", label: "Wholesale" },
  { href: "/contact", label: "Contact" },
];

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-warm-white/95 backdrop-blur-md border-b border-candy-pink-light/30 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-gradient-to-br from-candy-pink via-candy-lavender to-candy-mint flex items-center justify-center text-white font-serif font-bold text-sm sm:text-lg shadow-md group-hover:shadow-lg group-hover:scale-105 transition-all duration-300">
              C
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-lg sm:text-xl font-bold text-candy-plum leading-tight">
                Cristal&apos;s Candies
              </span>
              <span className="text-[10px] sm:text-xs text-candy-pink tracking-widest uppercase leading-none font-semibold">
                Handcrafted in Idaho ✨
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-semibold text-charcoal-light hover:text-candy-pink transition-colors tracking-wide uppercase relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-candy-pink after:transition-all after:duration-300 hover:after:w-full"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* CTA + Mobile Toggle */}
          <div className="flex items-center gap-3">
            <Link
              href="/shop"
              className="hidden sm:inline-flex items-center px-5 py-2.5 bg-gradient-to-r from-candy-pink to-candy-rose text-white text-sm font-bold rounded-full hover:from-candy-pink-dark hover:to-candy-pink transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5 duration-300"
            >
              Shop Now 🍬
            </Link>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden p-2 text-charcoal hover:text-candy-pink"
              aria-label="Toggle menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {mobileOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Nav */}
        {mobileOpen && (
          <nav className="md:hidden pb-4 border-t border-candy-pink-light/20">
            <div className="flex flex-col gap-1 pt-3">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="px-3 py-2.5 text-sm font-semibold text-charcoal-light hover:text-candy-pink hover:bg-cotton-candy/30 rounded-xl transition-colors tracking-wide uppercase"
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/shop"
                onClick={() => setMobileOpen(false)}
                className="mx-3 mt-2 inline-flex items-center justify-center px-5 py-2.5 bg-gradient-to-r from-candy-pink to-candy-rose text-white text-sm font-bold rounded-full"
              >
                Shop Now 🍬
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}