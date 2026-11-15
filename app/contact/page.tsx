import { AboutFeatureSection } from "@/components/about-feature-section"
import { ContactSection } from "@/components/contact-section"
import { FAQSection, landingPageFAQ } from "@/components/faq-section"
import { Footer } from "@/components/footer"
import { Navbar } from "@/components/navbar"

export default function ContactPage() {
  return (
    <main className="min-h-screen pt-20">
      <Navbar />
      <section className="px-6 md:px-10 pt-14 md:pt-20 pb-12 md:pb-16">
        <h1 className="font-heading text-5xl md:text-7xl lg:text-8xl">CONTACT</h1>
      </section>
      <AboutFeatureSection />
      <ContactSection />
      <FAQSection title="FAQ" items={landingPageFAQ} />
      <Footer />
    </main>
  )
}
