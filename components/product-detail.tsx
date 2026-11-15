"use client"

import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { getShopAssetHref, normalizeArtworkTitle, shopAssets } from "@/lib/art-assets"

interface ProductDetailProps {
  productId: number
}

export function ProductDetail({ productId }: ProductDetailProps) {
  const productAsset = shopAssets[productId - 1]
  const availableSizes = productAsset.availableSizes ?? []
  const [selectedSize, setSelectedSize] = useState(availableSizes[0] ?? "")
  const normalizedTitle = normalizeArtworkTitle(productAsset.title)
  const variants = shopAssets
    .map((asset, index) => ({ id: index + 1, asset }))
    .filter(({ id, asset }) => id !== productId && normalizeArtworkTitle(asset.title) === normalizedTitle)

  return (
    <div className="pt-24 md:pt-32 px-6 md:px-10">
      <nav className="mb-8 font-body text-sm text-foreground/60">
        <Link href="/shop" className="hover:text-foreground transition-colors">Shop</Link>
        <span className="mx-2">/</span>
        <Link href={`/shop/${productAsset.shopCategory ?? ""}`} className="hover:text-foreground transition-colors">
          {productAsset.category}
        </Link>
        <span className="mx-2">/</span>
        <span className="text-foreground">{productAsset.title}</span>
      </nav>

      <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 mb-20">
        <div className="lg:w-1/2">
          <div className="relative aspect-square overflow-hidden w-full mb-3">
            <Image
              src={productAsset.src}
              alt={productAsset.alt}
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
              priority
            />
          </div>

          {variants.length > 0 && (
            <div className="grid grid-cols-4 gap-2 md:gap-3">
              {variants.map(({ id, asset }) => (
                <Link
                  key={`${asset.src.src}-${id}`}
                  href={getShopAssetHref(asset) ?? "/shop"}
                  className="relative aspect-square overflow-hidden border border-transparent hover:border-foreground transition-colors"
                >
                  <Image
                    src={asset.src}
                    alt={asset.alt}
                    fill
                    sizes="25vw"
                    className="object-cover"
                  />
                </Link>
              ))}
            </div>
          )}
        </div>

        <div className="lg:w-1/2">
          <span className="font-body text-sm text-foreground/60 mb-2 block">{productAsset.category}</span>
          <h1 className="font-heading text-4xl md:text-5xl mb-4">{productAsset.title}</h1>
          <p className="font-heading text-2xl mb-8">49 EUR</p>

          <p className="font-body text-foreground/70 leading-relaxed mb-8">
            Hochwertiger Art Print, sorgsam produziert und verpackt.
          </p>

          {availableSizes.length > 0 && (
            <div className="mb-8">
              <p className="font-heading text-sm mb-3 block">GROESSE</p>
              <div className="flex flex-wrap gap-2">
                {availableSizes.map((size) => (
                  <button
                    key={size}
                    type="button"
                    onClick={() => setSelectedSize(size)}
                    aria-pressed={size === selectedSize}
                    className={`px-4 py-2 border font-body text-sm transition-colors ${
                      size === selectedSize
                        ? "border-foreground bg-foreground text-background"
                        : "border-foreground/20 hover:border-foreground"
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>
          )}

          <Link
            href="/cart"
            className="block w-full bg-foreground text-background py-4 font-heading text-sm tracking-wide text-center hover:opacity-80 transition-opacity mb-8"
          >
            IN DEN WARENKORB
          </Link>

          <div className="border-t border-foreground/10 pt-8">
            <h3 className="font-heading text-sm mb-4">DETAILS</h3>
            <dl className="space-y-3">
              {[
                { label: "Material", value: "Fine Art Paper" },
                { label: "Groessen", value: availableSizes.length > 0 ? availableSizes.join(", ") : "Standard" },
                { label: "Signiert", value: "Ja, handschriftlich" },
                { label: "Limitiert", value: "Auflage von 50 Stueck" },
              ].map((detail) => (
                <div key={detail.label} className="flex justify-between gap-6">
                  <dt className="font-body text-sm text-foreground/60">{detail.label}</dt>
                  <dd className="font-body text-sm text-right">{detail.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </div>
  )
}
