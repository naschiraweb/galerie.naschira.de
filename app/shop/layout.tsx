import { Navbar } from "@/components/navbar"

export default function ShopLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <main className="min-h-screen">
      <Navbar />
      {children}
    </main>
  )
}
