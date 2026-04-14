import { Suspense } from "react";
import { Metadata } from "next";
import { seoConfig } from "@/data/site";
import ShopClient from "./ShopClient";

export const metadata: Metadata = {
  title: seoConfig.shop.title,
  description: seoConfig.shop.description,
  keywords: seoConfig.shop.keywords,
};

export const dynamic = "force-dynamic";

export default function ShopPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-[60vh] flex items-center justify-center">
          <div className="text-center">
            <span className="text-4xl mb-4 block animate-pulse">🍬</span>
            <p className="text-charcoal-light/60">Loading candies...</p>
          </div>
        </div>
      }
    >
      <ShopClient />
    </Suspense>
  );
}