"use client"

import Link from "next/link"
import { useState } from "react"
import { Menu, ShoppingBag, X } from "lucide-react"
import { exhibitionCategoryLinks, shopCategoryLinks } from "@/lib/art-assets"

const exhibitionCategories = exhibitionCategoryLinks.map((category) => ({
  ...category,
  label: category.label.charAt(0) + category.label.slice(1).toLowerCase(),
}))

const shopCategories = shopCategoryLinks.map((category) => ({
  ...category,
  label: category.label.charAt(0) + category.label.slice(1).toLowerCase(),
}))

export function Navbar() {
  const [showExhibitionDropdown, setShowExhibitionDropdown] = useState(false)
  const [showShopDropdown, setShowShopDropdown] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-sm">
      <div className="flex items-center justify-between px-6 md:px-10 py-4">
        {/* Logo - Left */}
        <Link href="/" className="font-heading text-xl md:text-2xl tracking-tight">
          NASCHIRA
        </Link>
        
        {/* Desktop Navigation - Starting from center */}
        <div className="hidden md:flex items-center">
          <div className="flex items-center gap-12 lg:gap-20 mr-auto" style={{ marginLeft: 'calc(50vw - 50%)' }}>
            <Link 
              href="/#about" 
              className="font-heading text-sm tracking-wide hover:opacity-60 transition-opacity"
            >
              ABOUT
            </Link>
            
            {/* Exhibition with Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setShowExhibitionDropdown(true)}
              onMouseLeave={() => setShowExhibitionDropdown(false)}
            >
              <Link 
                href="/exhibition" 
                className="font-heading text-sm tracking-wide hover:opacity-60 transition-opacity"
              >
                EXHIBITION
              </Link>
              
              {showExhibitionDropdown && (
                <div className="absolute top-full left-0 pt-2">
                  <div className="bg-background border border-foreground/10 py-2 min-w-[140px]">
                    {exhibitionCategories.map((cat) => (
                      <Link
                        key={cat.slug}
                        href={cat.slug ? `/exhibition/${cat.slug}` : "/exhibition"}
                        className="block px-4 py-2 font-body text-sm hover:bg-foreground/5 transition-colors"
                      >
                        {cat.label}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
            
            {/* Shop with Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setShowShopDropdown(true)}
              onMouseLeave={() => setShowShopDropdown(false)}
            >
              <Link 
                href="/shop" 
                className="font-heading text-sm tracking-wide hover:opacity-60 transition-opacity"
              >
                SHOP
              </Link>
              
              {showShopDropdown && (
                <div className="absolute top-full left-0 pt-2">
                  <div className="bg-background border border-foreground/10 py-2 min-w-[140px]">
                    {shopCategories.map((cat) => (
                      <Link
                        key={cat.slug}
                        href={cat.slug ? `/shop/${cat.slug}` : "/shop"}
                        className="block px-4 py-2 font-body text-sm hover:bg-foreground/5 transition-colors"
                      >
                        {cat.label}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
        
        {/* Right Side - Contact & Mobile Menu */}
        <div className="flex items-center gap-4">
          <Link 
            href="/contact"
            className="hidden md:block bg-foreground text-background px-4 py-2 text-sm font-heading tracking-wide hover:opacity-80 transition-opacity"
          >
            CONTACT
          </Link>
          <Link
            href="/cart"
            className="hidden md:inline-flex h-9 w-9 items-center justify-center border border-foreground/20 hover:border-foreground transition-colors"
            aria-label="Warenkorb"
          >
            <ShoppingBag className="h-4 w-4" strokeWidth={1.5} />
          </Link>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-background border-t border-foreground/10">
          <div className="px-6 py-6 space-y-6">
            <Link 
              href="/#about"
              className="block font-heading text-lg"
              onClick={() => setMobileMenuOpen(false)}
            >
              ABOUT
            </Link>
            
            <div>
              <Link 
                href="/exhibition"
                className="block font-heading text-lg mb-3"
                onClick={() => setMobileMenuOpen(false)}
              >
                EXHIBITION
              </Link>
              <div className="pl-4 space-y-2">
                {exhibitionCategories.map((cat) => (
                  <Link
                    key={cat.slug}
                    href={cat.slug ? `/exhibition/${cat.slug}` : "/exhibition"}
                    className="block font-body text-sm text-foreground/60"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {cat.label}
                  </Link>
                ))}
              </div>
            </div>
            
            <div>
              <Link 
                href="/shop"
                className="block font-heading text-lg mb-3"
                onClick={() => setMobileMenuOpen(false)}
              >
                SHOP
              </Link>
              <div className="pl-4 space-y-2">
                {shopCategories.map((cat) => (
                  <Link
                    key={cat.slug}
                    href={cat.slug ? `/shop/${cat.slug}` : "/shop"}
                    className="block font-body text-sm text-foreground/60"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {cat.label}
                  </Link>
                ))}
              </div>
            </div>
            
            <Link 
              href="/contact"
              className="block bg-foreground text-background px-4 py-3 text-center font-heading"
              onClick={() => setMobileMenuOpen(false)}
            >
              CONTACT
            </Link>
            <Link
              href="/cart"
              className="flex items-center justify-center gap-2 border border-foreground px-4 py-3 text-center font-heading"
              onClick={() => setMobileMenuOpen(false)}
            >
              <ShoppingBag className="h-4 w-4" strokeWidth={1.5} />
              CART
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}
