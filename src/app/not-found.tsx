import Link from "next/link";

export default function NotFound() {
  return (
    <section className="min-h-[60vh] flex items-center justify-center candy-wash-pink">
      <div className="text-center px-4">
        <span className="text-6xl mb-6 block">🍬</span>
        <h1 className="font-serif text-4xl font-bold text-candy-plum mb-3">
          Oops — This Candy Doesn&apos;t Exist 🍭
        </h1>
        <p className="text-charcoal-light/60 mb-8 max-w-md mx-auto">
          The page you&apos;re looking for must have melted. Let&apos;s get you
          back to something sweet ✨
        </p>
        <Link
          href="/shop"
          className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-candy-pink to-candy-rose text-white text-sm font-bold rounded-full hover:from-candy-pink-dark hover:to-candy-pink transition-all shadow-md"
        >
          Back to Shop 🍬
        </Link>
      </div>
    </section>
  );
}