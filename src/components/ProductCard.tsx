import Link from "next/link";
import Image from "next/image";
import { Product } from "@/data/products";

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="group bg-white rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden border border-candy-pink-light/30 hover:border-candy-pink/40 candy-bounce">
      {/* Image */}
      <div className="relative aspect-square overflow-hidden bg-gradient-to-br from-cotton-candy to-candy-peach">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-1.5">
          {product.bestseller && (
            <span className="px-2.5 py-1 bg-gradient-to-r from-candy-pink to-candy-rose text-white text-[10px] font-bold uppercase tracking-wider rounded-full shadow-sm">
              🌟 Bestseller
            </span>
          )}
          {product.limitedEdition && (
            <span className="px-2.5 py-1 bg-gradient-to-r from-candy-orange to-candy-yellow text-charcoal text-[10px] font-bold uppercase tracking-wider rounded-full shadow-sm">
              ⏰ Limited
            </span>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        <div className="flex items-start justify-between gap-2 mb-1.5">
          <h3 className="font-serif text-lg font-semibold text-candy-plum leading-tight group-hover:text-candy-pink transition-colors">
            {product.name}
          </h3>
          <span className="text-lg font-bold text-candy-pink whitespace-nowrap">
            ${product.price.toFixed(2)}
          </span>
        </div>
        <p className="text-sm text-charcoal-light/70 mb-1 italic">
          {product.tagline}
        </p>
        <p className="text-xs text-charcoal-light/60 mb-4 line-clamp-2 leading-relaxed">
          {product.description}
        </p>

        {/* Dietary Tags */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {product.dietary.map((d) => (
            <span
              key={d}
              className="px-2 py-0.5 bg-candy-mint-light/40 text-candy-mint-dark text-[10px] font-semibold uppercase tracking-wider rounded-full"
            >
              {d}
            </span>
          ))}
        </div>

        {/* Actions */}
        <div className="flex gap-2">
          <Link
            href={`/shop/${product.slug}`}
            className="flex-1 text-center px-4 py-2.5 bg-gradient-to-r from-candy-pink to-candy-rose text-white text-sm font-bold rounded-full hover:from-candy-pink-dark hover:to-candy-pink transition-all shadow-sm hover:shadow-md"
          >
            View Details
          </Link>
          <button className="px-4 py-2.5 border-2 border-candy-mint/40 text-candy-mint-dark text-sm font-bold rounded-full hover:bg-candy-mint-light/30 transition-all">
            🛒 Add
          </button>
        </div>
      </div>
    </div>
  );
}