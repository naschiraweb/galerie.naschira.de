import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { ShopSection } from "@/components/shop-section"
import { AboutSection } from "@/components/about-section"
import { ExhibitionSection } from "@/components/exhibition-section"
import { AboutFeatureSection } from "@/components/about-feature-section"
import { ContactSection } from "@/components/contact-section"
import { FAQSection, landingPageFAQ } from "@/components/faq-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroSection />
      <ShopSection />
      <AboutSection />
      <ExhibitionSection />
      <AboutFeatureSection />
      <ContactSection />
      <FAQSection title="FAQ" items={landingPageFAQ} />
      <Footer />
    </main>
  )
}
