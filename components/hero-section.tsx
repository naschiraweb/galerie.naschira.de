"use client"

import { useEffect, useState, useRef } from "react"
import Image from "next/image"
import { getAssetByIndex, moodAssets } from "@/lib/art-assets"

interface FloatingImage {
  id: number
  x: number
  y: number
  width: number
  height: number
  depth: number
  zIndex: number
  mobile?: boolean
}

const floatingImages: FloatingImage[] = [
  { id: 1, x: 42, y: 8, width: 140, height: 100, depth: 0.8, zIndex: 20, mobile: true },
  { id: 2, x: 31, y: 16, width: 120, height: 140, depth: 0.5, zIndex: 10 },
  { id: 3, x: 64, y: 17, width: 82, height: 72, depth: 0.6, zIndex: 15, mobile: true },
  { id: 4, x: 4, y: 27, width: 70, height: 130, depth: 0.4, zIndex: 5 },
  { id: 5, x: 10, y: 50, width: 76, height: 64, depth: 0.7, zIndex: 25, mobile: true },
  { id: 6, x: 75, y: 31, width: 132, height: 198, depth: 0.3, zIndex: 8 },
  { id: 7, x: 18, y: 65, width: 130, height: 150, depth: 0.5, zIndex: 12 },
  { id: 8, x: 33, y: 63, width: 72, height: 72, depth: 0.9, zIndex: 30, mobile: true },
  { id: 9, x: 52, y: 84, width: 100, height: 60, depth: 0.6, zIndex: 18 },
  { id: 10, x: 67, y: 69, width: 138, height: 138, depth: 0.4, zIndex: 7, mobile: true },
  { id: 11, x: 90, y: 58, width: 54, height: 92, depth: 0.8, zIndex: 22 },
]

export function HeroSection() {
  const [mousePosition, setMousePosition] = useState({ x: 0.5, y: 0.5 })
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect()
        const x = (e.clientX - rect.left) / rect.width
        const y = (e.clientY - rect.top) / rect.height
        setMousePosition({ x, y })
      }
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  const calculateOffset = (depth: number) => {
    const maxOffset = 30
    const offsetX = (mousePosition.x - 0.5) * maxOffset * depth
    const offsetY = (mousePosition.y - 0.5) * maxOffset * depth
    return { x: offsetX, y: offsetY }
  }

  return (
    <section 
      ref={containerRef}
      className="relative w-full min-h-[680px] h-[100svh] overflow-hidden bg-background"
    >
      {/* Floating Images */}
      {floatingImages.map((img) => {
        const offset = calculateOffset(img.depth)
        return (
          <div
            key={img.id}
            className={`absolute transition-transform duration-200 ease-out ${img.mobile ? "" : "hidden md:block"}`}
            style={{
              left: `${img.x}%`,
              top: `${img.y}%`,
              width: `clamp(${Math.round(img.width * 0.62)}px, ${Math.round(img.width / 14)}vw, ${img.width}px)`,
              height: `clamp(${Math.round(img.height * 0.62)}px, ${Math.round(img.height / 14)}vw, ${img.height}px)`,
              zIndex: img.zIndex,
              transform: `translate(${offset.x}px, ${offset.y}px)`,
            }}
          >
            <div className="relative h-full w-full overflow-hidden transition-transform duration-300 ease-out hover:scale-110">
              <Image
                src={getAssetByIndex(img.id - 1, moodAssets).src}
                alt={getAssetByIndex(img.id - 1, moodAssets).alt}
                fill
                sizes="(min-width: 768px) 160px, 26vw"
                className="object-cover"
                priority={img.id <= 3}
              />
            </div>
          </div>
        )
      })}

      {/* Center Text */}
      <div className="absolute inset-0 flex flex-col items-center justify-center z-40 pointer-events-none">
        <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl text-foreground">
          THIS IS MY
        </h1>
        <p className="font-body text-xl md:text-2xl lg:text-3xl mt-1 text-foreground">
          creative world.
        </p>
      </div>
    </section>
  )
}
