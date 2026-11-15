import { Navbar } from "@/components/navbar"
import { ContactSection } from "@/components/contact-section"
import { FAQSection, shopFAQ } from "@/components/faq-section"
import { Footer } from "@/components/footer"
import { AboutFeatureSection } from "@/components/about-feature-section"
import { ProductDetail } from "@/components/product-detail"
import { shopAssets } from "@/lib/art-assets"
import { notFound } from "next/navigation"

interface ProductPageProps {
  params: Promise<{ id: string }>
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { id } = await params
  const productId = Number.parseInt(id, 10)

  if (!shopAssets[productId - 1]) {
    notFound()
  }

  return (
    <main className="min-h-screen">
      <Navbar />
      <ProductDetail productId={productId} />
      <AboutFeatureSection />
      <ContactSection />
      <FAQSection title="FAQ" items={shopFAQ} />
      <Footer />
    </main>
  )
}
