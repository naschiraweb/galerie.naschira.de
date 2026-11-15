"use client"

import Link from "next/link"
import Image from "next/image"
import { useState } from "react"
import { ContactSection } from "./contact-section"
import { ImageDetailModal } from "./image-detail-modal"
import { FAQSection, exhibitionFAQ } from "./faq-section"
import { AboutFeatureSection } from "./about-feature-section"
import { Footer } from "./footer"
import { exhibitionCategoryLinks, findShopAssetForArtwork, getAssetsByCategory, getShopAssetHref } from "@/lib/art-assets"

interface ExhibitionPageProps {
  category: string
  categoryLabel: string
  pictureCount: number
}

const createImages = (category: string) =>
  getAssetsByCategory(category).map((asset, index) => ({
    asset,
    id: index + 1,
    title: asset.title,
    category: asset.category,
    date: asset.date ?? "",
    dimensions: asset.dimensions ?? "",
    exhibitions: [{ year: "2026", name: "Kunstfreunde Hainburg" }],
    story: "",
    shopHref: getShopAssetHref(findShopAssetForArtwork(asset.title)),
  }))

export function ExhibitionPage({ category, categoryLabel }: ExhibitionPageProps) {
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null)
  const images = createImages(category)

  const handleNext = () => {
    if (selectedImageIndex !== null && selectedImageIndex < images.length - 1) {
      setSelectedImageIndex(selectedImageIndex + 1)
    }
  }

  const handlePrev = () => {
    if (selectedImageIndex !== null && selectedImageIndex > 0) {
      setSelectedImageIndex(selectedImageIndex - 1)
    }
  }

  return (
    <main className="min-h-screen pt-20">
      {/* Header */}
      <div className="px-6 md:px-10 pt-14 md:pt-20 pb-12 md:pb-16">
        <h1 className="flex items-baseline gap-4 mb-12">
          <span className="font-heading text-5xl md:text-7xl lg:text-8xl">EXHIBITION</span>
          <span className="font-body text-3xl md:text-5xl lg:text-6xl">{categoryLabel}.</span>
        </h1>
        
        {/* Filter bar - closer to images */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-2">
          <h2 className="font-heading text-base">SELECTED WORKS</h2>
          
          <nav className="flex items-center gap-1">
            {exhibitionCategoryLinks.map((cat, index) => (
              <span key={cat.slug} className="flex items-center">
                <Link
                  href={cat.slug ? `/exhibition/${cat.slug}` : "/exhibition"}
                  className={`font-body text-sm transition-opacity ${
                    (category === cat.slug) || (category === "all" && cat.slug === "")
                      ? "text-foreground font-heading"
                      : "text-foreground/40 hover:text-foreground/70"
                  }`}
                >
                  {cat.label}
                </Link>
                {index < exhibitionCategoryLinks.length - 1 && (
                  <span className="text-foreground/40 mx-1">,</span>
                )}
              </span>
            ))}
          </nav>
          
          <span className="font-body text-sm text-foreground/60">{images.length} Pictures</span>
        </div>
      </div>
      
      {/* Image Grid - no gaps */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-0">
        {images.map((img, index) => (
          <button
            key={img.id}
            onClick={() => setSelectedImageIndex(index)}
            className="relative aspect-[4/3] cursor-pointer overflow-hidden hover:opacity-90 transition-opacity"
          >
            <Image
              src={img.asset.src}
              alt={img.asset.alt}
              fill
              sizes="(min-width: 768px) 25vw, 50vw"
              className="object-cover"
              priority={index < 4}
            />
          </button>
        ))}
      </div>
      
      <AboutFeatureSection />
      <ContactSection />
      <FAQSection title="FAQ" items={exhibitionFAQ} />
      <Footer />

      {/* Image Detail Modal */}
      {selectedImageIndex !== null && (
        <ImageDetailModal
          isOpen={selectedImageIndex !== null}
          onClose={() => setSelectedImageIndex(null)}
          onNext={selectedImageIndex < images.length - 1 ? handleNext : undefined}
          onPrev={selectedImageIndex > 0 ? handlePrev : undefined}
          image={images[selectedImageIndex]}
        />
      )}
    </main>
  )
}
