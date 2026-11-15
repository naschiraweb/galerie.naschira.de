import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-foreground text-background">
      <div className="px-6 md:px-10 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-8">
          {/* Brand */}
          <div>
            <Link href="/" className="font-heading text-2xl tracking-tight">
              NASCHIRA
            </Link>
            <p className="font-body text-sm text-background/60 mt-4 leading-relaxed">
              Artist and Designer since born. Made in Germany.
            </p>
          </div>
          
          {/* Navigation */}
          <div>
            <h3 className="font-heading text-sm mb-4">NAVIGATION</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="font-body text-sm text-background/60 hover:text-background transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/#about" className="font-body text-sm text-background/60 hover:text-background transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/exhibition" className="font-body text-sm text-background/60 hover:text-background transition-colors">
                  Exhibition
                </Link>
              </li>
              <li>
                <Link href="/shop" className="font-body text-sm text-background/60 hover:text-background transition-colors">
                  Shop
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Shop */}
          <div>
            <h3 className="font-heading text-sm mb-4">SHOP</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/shop/poster" className="font-body text-sm text-background/60 hover:text-background transition-colors">
                  Poster
                </Link>
              </li>
              <li>
                <Link href="/shop/postkarte" className="font-body text-sm text-background/60 hover:text-background transition-colors">
                  Postkarten
                </Link>
              </li>
              <li>
                <Link href="/shop/sticker" className="font-body text-sm text-background/60 hover:text-background transition-colors">
                  Sticker
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Legal */}
          <div>
            <h3 className="font-heading text-sm mb-4">RECHTLICHES</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/impressum" className="font-body text-sm text-background/60 hover:text-background transition-colors">
                  Impressum
                </Link>
              </li>
              <li>
                <Link href="/datenschutz" className="font-body text-sm text-background/60 hover:text-background transition-colors">
                  Datenschutz
                </Link>
              </li>
              <li>
                <Link href="/agb" className="font-body text-sm text-background/60 hover:text-background transition-colors">
                  AGB
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-background/20 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="font-body text-xs text-background/40">
            © 2026 Naschira. Alle Rechte vorbehalten.
          </p>
          <div className="flex items-center gap-6">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="font-body text-xs text-background/40 hover:text-background transition-colors">
              Instagram
            </a>
            <a href="https://behance.net" target="_blank" rel="noopener noreferrer" className="font-body text-xs text-background/40 hover:text-background transition-colors">
              Behance
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
