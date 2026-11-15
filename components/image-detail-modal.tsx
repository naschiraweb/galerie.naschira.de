"use client"

import { ChevronRight, ChevronLeft } from "lucide-react"
import { useEffect } from "react"
import Image, { type StaticImageData } from "next/image"
import Link from "next/link"

interface ImageDetailModalProps {
  isOpen: boolean
  onClose: () => void
  onNext?: () => void
  onPrev?: () => void
  image: {
    id: number
    title: string
    category: string
    date: string
    dimensions: string
    exhibitions: { year: string; name: string }[]
    story: string
    shopHref?: string
    asset?: {
      src: StaticImageData
      alt: string
    }
  }
}

export function ImageDetailModal({ isOpen, onClose, onNext, onPrev, image }: ImageDetailModalProps) {
  // Handle escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose()
      if (e.key === "ArrowRight" && onNext) onNext()
      if (e.key === "ArrowLeft" && onPrev) onPrev()
    }
    
    if (isOpen) {
      document.addEventListener("keydown", handleEscape)
    }
    
    return () => {
      document.removeEventListener("keydown", handleEscape)
    }
  }, [isOpen, onClose, onNext, onPrev])

  if (!isOpen) return null

  return (
    <>
      {/* Backdrop */}
      <div 
        className="fixed inset-0 z-[100] bg-background/80 backdrop-blur-sm"
        onClick={onClose}
      />
      
      {/* Navigation Arrows - Outside modal on sides of window */}
      {onPrev && (
        <button
          onClick={onPrev}
          className="fixed left-4 md:left-8 top-1/2 -translate-y-1/2 z-[120] p-2 hover:opacity-60 transition-opacity"
          aria-label="Previous image"
        >
          <ChevronLeft className="w-12 h-12 md:w-16 md:h-16" strokeWidth={0.5} />
        </button>
      )}
      {onNext && (
        <button
          onClick={onNext}
          className="fixed right-4 md:right-8 top-1/2 -translate-y-1/2 z-[120] p-2 hover:opacity-60 transition-opacity"
          aria-label="Next image"
        >
          <ChevronRight className="w-12 h-12 md:w-16 md:h-16" strokeWidth={0.5} />
        </button>
      )}
      
      {/* Modal Content */}
      <div className="fixed left-1/2 top-1/2 z-[110] w-[min(92vw,1120px)] max-h-[88vh] -translate-x-1/2 -translate-y-1/2 overflow-y-auto border border-foreground bg-background">
        {/* Close Button - X thinner and larger */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 hover:opacity-60 transition-opacity"
          aria-label="Close"
        >
          <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth="1">
            <line x1="4" y1="4" x2="24" y2="24" />
            <line x1="24" y1="4" x2="4" y2="24" />
          </svg>
        </button>
        
        <div className="grid grid-cols-1 lg:grid-cols-2">
          {/* Left Side - Info */}
          <div className="p-6 md:p-8 lg:p-10">
            {/* Category */}
            <p className="font-body text-sm text-foreground/60 mb-8">{image.category}</p>
            
            {/* Index and Title - Side by side with reduced line height */}
            <div className="grid grid-cols-[5rem_1fr] md:grid-cols-[6rem_1fr] gap-5 mb-10">
              <span className="font-body text-3xl md:text-4xl text-foreground/20 leading-none">
                /{String(image.id).padStart(2, "0")}
              </span>
              <h2 className="font-heading text-2xl md:text-3xl lg:text-4xl leading-none whitespace-pre-line">
                {image.title}
              </h2>
            </div>
            
            {/* Exhibitions - Label on left */}
            <div className="grid grid-cols-[5rem_1fr] md:grid-cols-[6rem_1fr] gap-5 mb-8">
              <span className="font-body text-sm text-foreground/60">Exhibitions</span>
              <div className="flex-1 border-t border-foreground/20">
                {image.exhibitions.map((ex, i) => (
                  <div key={i} className="flex gap-12 py-3 border-b border-foreground/20">
                    <span className="font-body text-sm">{ex.year}</span>
                    <span className="font-body text-sm">{ex.name}</span>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Story - Label on left */}
            <div className="grid grid-cols-[5rem_1fr] md:grid-cols-[6rem_1fr] gap-5 mb-10">
              <span className="font-body text-sm text-foreground/60">Story</span>
              <p className="font-body text-sm leading-relaxed text-foreground/80 whitespace-pre-line">
                {image.story}
              </p>
            </div>
            
            {/* Buttons */}
            <div className="flex flex-wrap">
              {image.shopHref && (
                <Link
                  href={image.shopHref}
                  className="bg-foreground text-background px-6 py-3 font-heading text-sm tracking-wide hover:opacity-80 transition-opacity"
                >
                  BUY ORIGINAL
                </Link>
              )}
              <Link
                href="/contact"
                className="border border-foreground px-6 py-3 font-heading text-sm tracking-wide hover:bg-foreground/5 transition-colors"
              >
                CONTACT
              </Link>
            </div>
          </div>
          
          {/* Right Side - Image */}
          <div className="p-6 md:p-8 lg:p-10 flex flex-col">
            {/* Image Meta */}
            <div className="mb-4 pr-12">
              <span className="font-body text-sm block">{image.date}</span>
              <span className="font-body text-sm block text-foreground/60">{image.dimensions}</span>
            </div>
            
            {/* Image */}
            <div className="relative overflow-hidden w-full aspect-[4/5] bg-neutral-200">
              {image.asset && (
                <Image
                  src={image.asset.src}
                  alt={image.asset.alt}
                  fill
                  sizes="(min-width: 1024px) 420px, 80vw"
                  className="object-cover"
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
