"use client"

import Link from "next/link"
import Image from "next/image"
import { ContactSection } from "./contact-section"
import { FAQSection, shopFAQ } from "./faq-section"
import { AboutFeatureSection } from "./about-feature-section"
import { Footer } from "./footer"
import { getShopAssetsByCategory, shopAssets, shopCategoryLinks } from "@/lib/art-assets"

interface ShopPageProps {
  activeCategory: string
  categoryLabel: string
  productCount: number
}

export function ShopPage({ activeCategory, categoryLabel }: ShopPageProps) {
  const products = getShopAssetsByCategory(activeCategory).map((asset) => ({
    id: shopAssets.indexOf(asset) + 1,
    name: asset.title,
    price: "XY EUR",
    asset,
  }))

  return (
    <main className="min-h-screen pt-20">
      {/* Header */}
      <div className="px-6 md:px-10 pt-14 md:pt-20 pb-12 md:pb-16">
        <h1 className="mb-12">
          <span className="font-heading text-5xl md:text-7xl lg:text-8xl">SHOP </span>
          <span className="font-body text-3xl md:text-5xl lg:text-6xl">{categoryLabel}.</span>
        </h1>

        {/* Filter Bar - closer to products */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-2">
          <h2 className="font-heading text-base">SELECTED PRODUCTS</h2>
          
          {/* Category Filter */}
          <div className="flex items-center gap-1 font-body text-sm">
            {shopCategoryLinks.map((cat, i) => (
              <span key={cat.slug} className="flex items-center">
                <Link
                  href={cat.slug ? `/shop/${cat.slug}` : "/shop"}
                  className={`hover:opacity-100 transition-opacity ${
                    activeCategory === cat.slug 
                      ? "text-foreground font-medium" 
                      : "text-foreground/40"
                  }`}
                >
                  {cat.label}
                </Link>
                {i < shopCategoryLinks.length - 1 && <span className="text-foreground/40 mx-1">,</span>}
              </span>
            ))}
          </div>
          
          <span className="font-body text-sm text-foreground/60">{products.length} PRODUCTS</span>
        </div>
      </div>

      {/* Product Grid */}
      <div className="px-6 md:px-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-3">
          {products.map((product) => (
            <Link 
              key={product.id}
              href={`/shop/product/${product.id}`}
              className="group"
            >
              <div className="relative aspect-square overflow-hidden w-full group-hover:opacity-80 transition-opacity">
                <Image
                  src={product.asset.src}
                  alt={product.asset.alt}
                  fill
                  sizes="(min-width: 768px) 25vw, 50vw"
                  className="object-cover"
                  priority={product.id <= 4}
                />
              </div>
              <div className="py-3">
                <p className="font-heading text-sm">{product.name}</p>
                <p className="font-body text-sm text-foreground/60">{product.price}</p>
              </div>
            </Link>
          ))}
        </div>
        {products.length === 0 && (
          <p className="font-body text-sm text-foreground/60 py-16">
            In dieser Kategorie sind aktuell keine Produkte hinterlegt.
          </p>
        )}
      </div>

      <AboutFeatureSection />
      <ContactSection />
      <FAQSection title="FAQ" items={shopFAQ} />
      <Footer />
    </main>
  )
}
