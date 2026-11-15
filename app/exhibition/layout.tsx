import { Navbar } from "@/components/navbar"

export default function ExhibitionLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <Navbar />
      {children}
    </>
  )
}
