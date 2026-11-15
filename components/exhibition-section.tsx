import Link from "next/link"
import Image from "next/image"
import { exhibitionCategoryLinks, getAssetsByCategory } from "@/lib/art-assets"

const categories = exhibitionCategoryLinks
  .filter((category) => category.slug)
  .map((category) => ({
    name: category.label,
    href: `/exhibition/${category.slug}`,
    image: getAssetsByCategory(category.category)[0],
  }))

export function ExhibitionSection() {
  return (
    <section id="exhibition" className="w-full py-24 md:py-32">
      {/* Header - aligned starting from center */}
      <div className="px-6 md:px-10">
        <div className="flex justify-end mb-8">
          <div className="w-full md:w-1/2 md:pl-4">
            <h2 className="mb-2">
              <span className="font-heading text-3xl md:text-4xl lg:text-5xl">DISCOVER </span>
              <span className="font-body text-xl md:text-2xl lg:text-3xl tracking-tight">Exhibition.</span>
            </h2>
            <p className="font-body text-muted-foreground text-sm md:text-base leading-snug">
              {"You'll find all different kind of art pieces created in different mediums. Throughout my carrier i've experimented a lot and i will show you every step of my journey."}
            </p>
          </div>
        </div>
      </div>

      {/* Category Grid */}
      <div className="px-6 md:px-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-1">
          {categories.map((category) => (
            <Link 
              key={category.name} 
              href={category.href}
              className="group"
            >
              <span className="font-heading text-sm md:text-base mb-2 block">
                {category.name}
              </span>
              <div className="relative aspect-[3/4] overflow-hidden w-full group-hover:opacity-80 transition-opacity">
                {category.image && (
                  <Image
                    src={category.image.src}
                    alt={category.image.alt}
                    fill
                    sizes="(min-width: 768px) 20vw, 50vw"
                    className="object-cover"
                  />
                )}
              </div>
            </Link>
          ))}
        </div>

        {/* Visit Exhibition Link */}
        <div className="mt-6">
          <Link 
            href="/exhibition" 
            className="font-heading text-sm md:text-base hover:opacity-60 transition-opacity inline-flex items-center"
          >
            VISIT EXHIBITION
          </Link>
        </div>
      </div>
    </section>
  )
}
