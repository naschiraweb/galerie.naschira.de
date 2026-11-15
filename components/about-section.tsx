"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { getAssetByIndex, moodAssets } from "@/lib/art-assets"

interface FloatingImage {
  id: number
  width: number
  height: number
  top?: string
  bottom?: string
  left?: string
  right?: string
  depth: number
}

const floatingImages: FloatingImage[] = [
  { id: 1, width: 120, height: 165, top: "13%", left: "5%", depth: 0.3 },
  { id: 2, width: 106, height: 122, top: "12%", right: "24%", depth: 0.4 },
  { id: 3, width: 82, height: 82, top: "49%", left: "18%", depth: 0.25 },
  { id: 4, width: 74, height: 104, bottom: "14%", right: "7%", depth: 0.35 },
]

export function AboutSection() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const aboutImage = moodAssets.find((asset) => asset.title === "About Me") ?? moodAssets[moodAssets.length - 1]

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 2
      const y = (e.clientY / window.innerHeight - 0.5) * 2
      setMousePosition({ x, y })
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  const getTransform = (depth: number) => {
    const moveX = mousePosition.x * depth * 30
    const moveY = mousePosition.y * depth * 30
    return `translate(${moveX}px, ${moveY}px)`
  }

  return (
    <section id="about" className="relative min-h-[720px] md:min-h-[760px] bg-background overflow-hidden py-20 md:py-24">
      {/* Floating background images */}
      {floatingImages.map((img) => (
        <div
          key={img.id}
          className="absolute hidden md:block overflow-hidden transition-transform duration-300 ease-out"
          style={{
            width: img.width,
            height: img.height,
            top: img.top,
            bottom: img.bottom,
            left: img.left,
            right: img.right,
            transform: getTransform(img.depth),
          }}
        >
          <Image
            src={getAssetByIndex(img.id, moodAssets).src}
            alt={getAssetByIndex(img.id, moodAssets).alt}
            fill
            sizes="160px"
            className="object-cover"
          />
        </div>
      ))}

      <div className="relative z-10 flex min-h-[560px] flex-col justify-center px-6 md:px-10">
        {/* Main layout container */}
        <div className="relative">
          {/* ABOUT ME Heading - overlapping the image */}
          <h2
            className="absolute font-heading text-5xl md:text-7xl lg:text-[5.5rem] z-20"
            style={{ 
              top: "-0.5em",
              left: "12%",
            }}
          >
            ABOUT ME
          </h2>

          {/* Content grid */}
          <div className="grid grid-cols-12 gap-4 md:gap-6 items-start">
            {/* Main portrait image - center, square */}
            <div 
              className="col-span-12 md:col-span-4 md:col-start-5 transition-transform duration-300 ease-out"
              style={{ transform: getTransform(0.15) }}
            >
              <div className="relative overflow-hidden w-full aspect-square max-w-[320px] mx-auto md:mx-0">
                <Image
                  src={aboutImage.src}
                  alt={aboutImage.alt}
                  fill
                  sizes="(min-width: 768px) 320px, 80vw"
                  className="object-cover"
                />
              </div>
            </div>

            {/* Bio text - right side */}
            <div className="col-span-12 md:col-span-4 md:col-start-9 flex items-start pt-6 md:pt-10">
              <p className="font-body text-sm leading-relaxed text-[#888888] max-w-[280px]">
                I&apos;m Naschira, 24 years old, and I&apos;m studying Design Management. I am also training as a media designer, and I have been working as a freelance artist and designer since I was 16. I have been creatively active since birth.
              </p>
            </div>
          </div>

          {/* Bottom text */}
          <div className="mt-6 md:mt-4 md:pl-[22%]">
            <h3 className="font-heading text-2xl md:text-3xl lg:text-4xl">
              ARTIST AND DESIGNER
            </h3>
            <p className="font-body text-base md:text-lg mt-1 text-foreground">
              since born. made in germany.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
