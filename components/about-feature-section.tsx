import Image from "next/image"
import { moodAssets } from "@/lib/art-assets"

const aboutImage = moodAssets.find((asset) => asset.title === "About Me") ?? moodAssets[moodAssets.length - 1]

export function AboutFeatureSection() {
  if (!aboutImage) return null

  return (
    <section className="w-full px-6 md:px-10 py-20 md:py-28">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        <div className="lg:col-span-5">
          <p className="font-heading text-sm mb-3">ABOUT ME</p>
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl leading-none mb-5">
            ARTIST AND DESIGNER
          </h2>
          <p className="font-body text-base md:text-lg text-foreground mb-6">
            since born. made in germany.
          </p>
          <p className="font-body text-sm md:text-base leading-relaxed text-foreground/60 max-w-md">
            I move between fine art, commissioned pieces and design work. My practice is built from observation, instinct and the kind of visual details that stay in your head long after a moment has passed.
          </p>
        </div>

        <div className="lg:col-span-7">
          <div className="relative aspect-[4/3] md:aspect-[16/10] overflow-hidden">
            <Image
              src={aboutImage.src}
              alt={aboutImage.alt}
              fill
              sizes="(min-width: 1024px) 58vw, 100vw"
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
