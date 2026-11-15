import Link from "next/link"
import { AboutFeatureSection } from "@/components/about-feature-section"
import { ContactSection } from "@/components/contact-section"
import { FAQSection, shopFAQ } from "@/components/faq-section"
import { Footer } from "@/components/footer"
import { Navbar } from "@/components/navbar"

export default function CartPage() {
  return (
    <main className="min-h-screen pt-20">
      <Navbar />
      <section className="px-6 md:px-10 pt-14 md:pt-20 pb-20">
        <h1 className="font-heading text-5xl md:text-7xl lg:text-8xl mb-12">CART</h1>
        <div className="border-y border-foreground py-10 md:py-14 grid grid-cols-1 md:grid-cols-[1fr_auto] gap-6 items-center">
          <div>
            <p className="font-heading text-2xl md:text-3xl mb-2">DEIN WARENKORB IST LEER</p>
            <p className="font-body text-sm text-foreground/60 max-w-md">
              Produkte koennen direkt ueber die Shopseiten ausgewaehlt werden. Der Checkout kann spaeter an ein Shopsystem angeschlossen werden.
            </p>
          </div>
          <Link
            href="/shop"
            className="inline-flex justify-center bg-foreground text-background px-6 py-3 font-heading text-sm hover:opacity-80 transition-opacity"
          >
            ZUM SHOP
          </Link>
        </div>
      </section>
      <AboutFeatureSection />
      <ContactSection />
      <FAQSection title="FAQ" items={shopFAQ} />
      <Footer />
    </main>
  )
}
