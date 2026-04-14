import { Metadata } from "next";
import { seoConfig } from "@/data/site";

export const metadata: Metadata = {
  title: seoConfig.shop.title,
  description: seoConfig.shop.description,
  keywords: seoConfig.shop.keywords,
};

export default function ShopLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}