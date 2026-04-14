import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { products, getProductBySlug, getRelatedProducts } from "@/data/products";
import { seoConfig } from "@/data/site";
import { ProductCard } from "@/components/ProductCard";
import { notFound } from "next/navigation";

interface ProductPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return products.map((product) => ({
    slug: product.slug,
  }));
}

export async function generateMetadata({ params }: ProductPageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) return { title: "Product Not Found" };

  return {
    title: `${product.name} — ${product.tagline} | Cristal's Candies`,
    description: product.description,
    keywords: `${product.flavors.join(", ")} candy, artisan hard candy, organic candy, ${product.category} candy`,
    openGraph: {
      title: product.name,
      description: product.tagline,
      type: "website",
    },
  };
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  const related = getRelatedProducts(product.related);

  return (
    <>
      {/* Breadcrumb */}
      <section className="bg-cream border-b-2 border-candy-pink-light/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <nav className="flex items-center gap-2 text-xs text-charcoal-light/50">
            <Link href="/" className="hover:text-candy-pink transition-colors">Home</Link>
            <span>/</span>
            <Link href="/shop" className="hover:text-candy-pink transition-colors">Shop</Link>
            <span>/</span>
            <Link
              href={`/shop?category=${product.category}`}
              className="hover:text-candy-pink transition-colors"
            >
              {product.category.charAt(0).toUpperCase() + product.category.slice(1).replace("-", " ")}
            </Link>
            <span>/</span>
            <span className="text-charcoal-light/80">{product.name}</span>
          </nav>
        </div>
      </section>

      {/* Product Detail */}
      <section className="py-10 sm:py-16 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
            {/* Image */}
            <div className="relative aspect-square rounded-3xl overflow-hidden border-2 border-candy-pink-light/30">
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />
              {/* Badges */}
              <div className="absolute top-4 left-4 flex flex-col gap-2">
                {product.bestseller && (
                  <span className="px-3 py-1.5 bg-gradient-to-r from-candy-pink to-candy-rose text-white text-xs font-bold uppercase tracking-wider rounded-full shadow-sm">
                    🌟 Bestseller
                  </span>
                )}
                {product.limitedEdition && (
                  <span className="px-3 py-1.5 bg-gradient-to-r from-candy-orange to-candy-yellow text-charcoal text-xs font-bold uppercase tracking-wider rounded-full shadow-sm">
                    ⏰ Limited Edition
                  </span>
                )}
                {!product.inStock && (
                  <span className="px-3 py-1.5 bg-charcoal text-white text-xs font-bold uppercase tracking-wider rounded-full shadow-sm">
                    Sold Out
                  </span>
                )}
              </div>
            </div>

            {/* Product Info */}
            <div>
              <div className="mb-6">
                <div className="flex flex-wrap gap-2 mb-3">
                  <Link
                    href={`/shop?category=${product.category}`}
                    className="px-2.5 py-0.5 bg-candy-mint-light/40 text-candy-mint-dark text-[10px] font-semibold uppercase tracking-wider rounded-full"
                  >
                    {product.category.replace("-", " ")}
                  </Link>
                  {product.dietary.map((d) => (
                    <span
                      key={d}
                      className="px-2.5 py-0.5 bg-candy-mint-light/40 text-candy-mint-dark text-[10px] font-semibold uppercase tracking-wider rounded-full"
                    >
                      {d}
                    </span>
                  ))}
                </div>
                <h1 className="font-serif text-3xl sm:text-4xl font-bold text-candy-plum mb-2">
                  {product.name}
                </h1>
                <p className="text-lg text-charcoal-light/60 italic mb-4">
                  {product.tagline}
                </p>
                <div className="flex items-baseline gap-3">
                  <span className="text-3xl font-bold text-candy-pink">
                    ${product.price.toFixed(2)}
                  </span>
                  <span className="text-sm text-charcoal-light/40">
                    + Free Shipping over $50 🚚
                  </span>
                </div>
              </div>

              {/* Description */}
              <div className="mb-6">
                <p className="text-charcoal-light/80 leading-relaxed">
                  {product.longDescription}
                </p>
              </div>

              {/* Scarcity / Trust */}
              <div className="flex flex-wrap gap-3 mb-6">
                {product.limitedEdition && (
                  <div className="flex items-center gap-1.5 px-3 py-1.5 bg-candy-pink-light/10 border-2 border-candy-pink-light/30 rounded-full">
                    <span className="w-2 h-2 rounded-full bg-candy-pink animate-pulse" />
                    <span className="text-xs font-semibold text-candy-pink-dark">Limited Edition — While Supplies Last ⏰</span>
                  </div>
                )}
                {product.inStock && (
                  <div className="flex items-center gap-1.5 px-3 py-1.5 bg-candy-mint-light/10 border-2 border-candy-mint-light/30 rounded-full">
                    <span className="w-2 h-2 rounded-full bg-candy-mint" />
                    <span className="text-xs font-semibold text-candy-mint-dark">In Stock — Ships within 2–3 days ✨</span>
                  </div>
                )}
              </div>

              {/* Add to Cart */}
              <div className="flex flex-col sm:flex-row gap-3 mb-8">
                <div className="flex items-center border-2 border-candy-pink-light/30 rounded-full overflow-hidden">
                  <button className="px-4 py-3 text-charcoal-light hover:text-candy-pink transition-colors text-lg font-medium">
                    −
                  </button>
                  <span className="px-4 py-3 text-charcoal font-medium min-w-[3rem] text-center">
                    1
                  </span>
                  <button className="px-4 py-3 text-charcoal-light hover:text-candy-pink transition-colors text-lg font-medium">
                    +
                  </button>
                </div>
                <button
                  className="flex-1 px-8 py-3 bg-gradient-to-r from-candy-pink to-candy-rose text-white text-base font-bold rounded-full hover:from-candy-pink-dark hover:to-candy-pink transition-all shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
                  disabled={!product.inStock}
                >
                  {product.inStock ? "Add to Cart 🛒" : "Sold Out"}
                </button>
              </div>

              {/* Ingredients */}
              <div className="border-t-2 border-candy-pink-light/20 pt-6 mb-6">
                <h3 className="font-serif text-lg font-semibold text-candy-plum mb-2">
                  Ingredients 🌿
                </h3>
                <p className="text-sm text-charcoal-light/70 leading-relaxed">
                  {product.ingredients}
                </p>
              </div>

              {/* The Story */}
              <div className="border-t-2 border-candy-pink-light/20 pt-6">
                <h3 className="font-serif text-lg font-semibold text-candy-plum mb-2">
                  The Story Behind This Candy 💜
                </h3>
                <p className="text-sm text-charcoal-light/70 leading-relaxed italic">
                  {product.story}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Placeholder */}
      <section className="candy-wash-lavender py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="font-serif text-2xl font-bold text-candy-plum mb-2">
              Reviews 💕
            </h2>
            <div className="flex items-center justify-center gap-1 mb-3">
              {[1, 2, 3, 4, 5].map((star) => (
                <svg key={star} className="w-5 h-5 text-candy-yellow" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <p className="text-charcoal-light/60 text-sm">
              Reviews coming soon. Be the first to share your experience with this candy! 🍬
            </p>
          </div>
        </div>
      </section>

      {/* Related Products */}
      {related.length > 0 && (
        <section className="py-12 sm:py-16 bg-cream">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-serif text-2xl font-bold text-candy-plum mb-8">
              You Might Also Love 💕
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {related.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}