import type { StaticImageData } from "next/image"

import asset1 from "@/Assets/Acryl/Bones Album Cover, 80 x 80 cm, 10.2022.jpg"
import asset2 from "@/Assets/Acryl/Cat Study 1, 20 x 10 cm, 06.2025.jpg"
import asset3 from "@/Assets/Acryl/Cat Study 2, 20 x 10 cm, 06.2025.jpg"
import asset4 from "@/Assets/Acryl/Cat Study 3, 20 x 10 cm, 06.2025.jpg"
import asset5 from "@/Assets/Acryl/Coffe Table, 80x60cm, 12.2024.png"
import asset6 from "@/Assets/Acryl/Infinite Pond Water, 80 x 100 cm, 12.2023.jpg"
import asset7 from "@/Assets/Acryl/Lena, 12.2025.jpg"
import asset8 from "@/Assets/Acryl/My Abstract Self, 20 x 20 cm, 07.2024.jpg"
import asset9 from "@/Assets/Acryl/Planet Study, 20 x 20 cm, 12.2021.jpg"
import asset10 from "@/Assets/Acryl/Selfportrait 2, A4, 08.2021.png"
import asset11 from "@/Assets/Acryl/Selfportrait 3, A4, 08.2021.jpg"
import asset12 from "@/Assets/Acryl/Selfportrait as a Fish, A0, 03.2022.png"
import asset13 from "@/Assets/Acryl/Starwars Fanart, Glases Etui, 03.2025.jpg"
import asset14 from "@/Assets/Acryl/Unfinished Process, 20 x 20 cm, 10.2022.jpg"
import asset15 from "@/Assets/Aquarell/Choking Clown, 15 x 15 cm, 04.2022.png"
import asset16 from "@/Assets/Aquarell/Getting Ready, 15 x 15 cm, 04.2022.png"
import asset17 from "@/Assets/Aquarell/Girls Day, 30 x 15 cm, 04.2022.jpg"
import asset18 from "@/Assets/Aquarell/IMG_20210408_232431.jpg"
import asset19 from "@/Assets/Aquarell/Maren Smoking a Zigarette, 15 x 15 cm, 04.2022.png"
import asset20 from "@/Assets/Charcol/I Am Not Loosing Myself, A3, 11.2026.jpg"
import asset21 from "@/Assets/Charcol/Mirrowing, A3, 11.2026.png"
import asset22 from "@/Assets/Charcol/Red Light Mirrow, A3, 11.2026.jpg"
import asset23 from "@/Assets/Charcol/Roxanne, A3, 11.2026.png"
import asset24 from "@/Assets/Charcol/The Darkness within, A3, 11.2026.png"
import asset25 from "@/Assets/Pencil/Francois Mitterand, 100 x 80 cm, Weißer Buntstift auf schwarzer Leinwand, 2022.jpg"
import asset26 from "@/Assets/Pencil/Frau in Tüll, 100 cm x 80 cm, 11.2025, Weißer Buntstift auf Schwarzer Leinwand.jpg"
import asset27 from "@/Assets/Pencil/I Want To Ride, A4, 2021, Bleistift.png"
import asset28 from "@/Assets/Pencil/Nia Fanart, A5, 2020.png"
import asset29 from "@/Assets/Pencil/Soft And Hard, A5, 2020.png"
import asset30 from "@/Assets/Pencil/The Forbidden Fruit,.png"
import asset31 from "@/Assets/Pencil/The Witcher, A5, 2019.jpg"
import asset32 from "@/Assets/Pencil/Vogelmiere, A4, Fineliner, 2023.jpg"
import asset33 from "@/Assets/Commissions/Digital/image15.png"
import asset34 from "@/Assets/Commissions/Digital/image20.png"
import asset35 from "@/Assets/Commissions/Digital/image21.png"
import asset36 from "@/Assets/Commissions/Digital/image28.png"
import asset37 from "@/Assets/Commissions/Digital/image46.png"
import asset38 from "@/Assets/Commissions/Digital/image64.png"
import asset39 from "@/Assets/Commissions/Digital/image65.png"
import asset40 from "@/Assets/Commissions/Digital/image69.png"
import asset41 from "@/Assets/Commissions/Digital/image8.png"
import asset42 from "@/Assets/Commissions/image2.png"
import asset43 from "@/Assets/Commissions/image22.png"
import asset44 from "@/Assets/Commissions/image26.png"
import asset45 from "@/Assets/Commissions/image3.png"
import asset46 from "@/Assets/Commissions/image40.png"
import asset47 from "@/Assets/Commissions/image5.png"
import asset48 from "@/Assets/Commissions/image67.png"
import asset49 from "@/Assets/Commissions/image86.png"
import asset50 from "@/Assets/Commissions/Jenny & Sven.jpg"
import asset51 from "@/Assets/Commissions/Portrait Commissions/IMG_20200618_172316.jpg"
import asset52 from "@/Assets/Commissions/Portrait Commissions/IMG-20210831-WA0015.jpg"
import asset53 from "@/Assets/Mood/IMG_0033.jpg"
import asset54 from "@/Assets/Mood/IMG_20210727_170439.jpg"
import asset55 from "@/Assets/Mood/IMG_20231001_115519.jpg"
import asset56 from "@/Assets/Mood/IMG_20231006_114357.jpg"
import asset57 from "@/Assets/Mood/IMG_20231103_150946.jpg"
import asset58 from "@/Assets/Mood/IMG_20231113_142215.jpg"
import asset59 from "@/Assets/Mood/IMG_20240705_215601.jpg"
import asset60 from "@/Assets/Mood/IMG_20241122_095240.jpg"
import asset61 from "@/Assets/Mood/About Me.jpg"
import asset62 from "@/Assets/Mood/IMG_20250702_133325.jpg"
import asset63 from "@/Assets/Mood/IMG_20250702_135343.jpg"
import asset64 from "@/Assets/Mood/IMG_20250702_142658.jpg"
import asset65 from "@/Assets/Mood/PXL_20250724_205132162.jpg"
import asset66 from "@/Assets/Mood/PXL_20250807_091416571.jpg"
import asset67 from "@/Assets/Mood/PXL_20251003_130106789.jpg"
import asset68 from "@/Assets/Mood/PXL_20251121_165358787.jpg"
import asset69 from "@/Assets/Mood/PXL_20251203_152447588.jpg"
import asset70 from "@/Assets/Mood/PXL_20251204_132102835.jpg"
import asset71 from "@/Assets/Mood/PXL_20251220_075133790.jpg"
import asset72 from "@/Assets/Mood/PXL_20251220_075147579.jpg"
import asset73 from "@/Assets/Mood/PXL_20251220_111343231.jpg"
import asset74 from "@/Assets/Mood/PXL_20251226_151111840.jpg"
import asset75 from "@/Assets/Mood/PXL_20260111_170125062.jpg"
import asset76 from "@/Assets/Mood/PXL_20260111_211732873.jpg"
import asset77 from "@/Assets/Mood/schirm.png"
import asset78 from "@/Assets/Mood/Unbenannt-1.png"
import asset79 from "@/Assets/Mood/Unbenannt-2.png"
import asset80 from "@/Assets/Mood/unknown.png"
import asset81 from "@/Assets/Shop/Poster/Cat Study 1, A4-A5.png"
import asset82 from "@/Assets/Shop/Poster/Cat Study 3, A4-A5.png"
import asset83 from "@/Assets/Shop/Poster/Lena, Print A2-A4.png"
import asset84 from "@/Assets/Shop/Poster/Maren, A4-A5.png"
import asset85 from "@/Assets/Shop/Poster/Mirrowing, A2-A4.png"
import asset86 from "@/Assets/Shop/Poster/My Abstract Self, A4-A5.png"
import asset87 from "@/Assets/Shop/Poster/Red Light Mirrow, A2-A4.png"
import asset88 from "@/Assets/Shop/Poster/Roxanne, A1-A4.png"
import asset89 from "@/Assets/Shop/Poster/The Darkness within, A2-A4.png"
import asset90 from "@/Assets/Shop/Postkarte/Cat Study 1.png"
import asset91 from "@/Assets/Shop/Postkarte/Cat Study 3.png"
import asset92 from "@/Assets/Shop/Postkarte/Girls Day 2.png"
import asset93 from "@/Assets/Shop/Postkarte/Girls Day.png"
import asset94 from "@/Assets/Shop/Postkarte/Lena.png"
import asset95 from "@/Assets/Shop/Postkarte/My Abstract Self.png"
import asset96 from "@/Assets/Shop/Sticker/Cat Study 1.png"
import asset97 from "@/Assets/Shop/Sticker/Cat Study 3.png"
import asset98 from "@/Assets/Shop/Sticker/Girls Day.png"
import asset99 from "@/Assets/Shop/Sticker/Lena.png"
import asset100 from "@/Assets/Shop/Sticker/My Abstract Self.png"

export type ArtCategory = "Acryl" | "Aquarell" | "Charcol" | "Pencil" | "Commissions"
export type MoodCategory = "Mood"
export type ShopCategory = "poster" | "postkarte" | "sticker"

export type ArtAsset = {
  src: StaticImageData
  title: string
  alt: string
  category: ArtCategory | MoodCategory | "Poster" | "Postkarte" | "Sticker"
  shopCategory?: ShopCategory
  dimensions?: string
  date?: string
  availableSizes?: string[]
}

export const artAssets: ArtAsset[] = [
  { src: asset1, title: "Bones Album Cover", alt: "Bones Album Cover", category: "Acryl", dimensions: "80 x 80 cm", date: "10.2022" },
  { src: asset2, title: "Cat Study 1", alt: "Cat Study 1", category: "Acryl", dimensions: "20 x 10 cm", date: "06.2025" },
  { src: asset3, title: "Cat Study 2", alt: "Cat Study 2", category: "Acryl", dimensions: "20 x 10 cm", date: "06.2025" },
  { src: asset4, title: "Cat Study 3", alt: "Cat Study 3", category: "Acryl", dimensions: "20 x 10 cm", date: "06.2025" },
  { src: asset5, title: "Coffe Table", alt: "Coffe Table", category: "Acryl", dimensions: "80x60cm", date: "12.2024" },
  { src: asset6, title: "Infinite Pond Water", alt: "Infinite Pond Water", category: "Acryl", dimensions: "80 x 100 cm", date: "12.2023" },
  { src: asset7, title: "Lena", alt: "Lena", category: "Acryl", date: "12.2025" },
  { src: asset8, title: "My Abstract Self", alt: "My Abstract Self", category: "Acryl", dimensions: "20 x 20 cm", date: "07.2024" },
  { src: asset9, title: "Planet Study", alt: "Planet Study", category: "Acryl", dimensions: "20 x 20 cm", date: "12.2021" },
  { src: asset10, title: "Selfportrait 2", alt: "Selfportrait 2", category: "Acryl", dimensions: "A4", date: "08.2021", availableSizes: ["A4"] },
  { src: asset11, title: "Selfportrait 3", alt: "Selfportrait 3", category: "Acryl", dimensions: "A4", date: "08.2021", availableSizes: ["A4"] },
  { src: asset12, title: "Selfportrait as a Fish", alt: "Selfportrait as a Fish", category: "Acryl", dimensions: "A0", date: "03.2022", availableSizes: ["A0"] },
  { src: asset13, title: "Starwars Fanart", alt: "Starwars Fanart", category: "Acryl", date: "03.2025" },
  { src: asset14, title: "Unfinished Process", alt: "Unfinished Process", category: "Acryl", dimensions: "20 x 20 cm", date: "10.2022" },
  { src: asset15, title: "Choking Clown", alt: "Choking Clown", category: "Aquarell", dimensions: "15 x 15 cm", date: "04.2022" },
  { src: asset16, title: "Getting Ready", alt: "Getting Ready", category: "Aquarell", dimensions: "15 x 15 cm", date: "04.2022" },
  { src: asset17, title: "Girls Day", alt: "Girls Day", category: "Aquarell", dimensions: "30 x 15 cm", date: "04.2022" },
  { src: asset18, title: "IMG_20210408_232431", alt: "IMG_20210408_232431", category: "Aquarell" },
  { src: asset19, title: "Maren Smoking a Zigarette", alt: "Maren Smoking a Zigarette", category: "Aquarell", dimensions: "15 x 15 cm", date: "04.2022" },
  { src: asset20, title: "I Am Not Loosing Myself", alt: "I Am Not Loosing Myself", category: "Charcol", dimensions: "A3", date: "11.2026", availableSizes: ["A3"] },
  { src: asset21, title: "Mirrowing", alt: "Mirrowing", category: "Charcol", dimensions: "A3", date: "11.2026", availableSizes: ["A3"] },
  { src: asset22, title: "Red Light Mirrow", alt: "Red Light Mirrow", category: "Charcol", dimensions: "A3", date: "11.2026", availableSizes: ["A3"] },
  { src: asset23, title: "Roxanne", alt: "Roxanne", category: "Charcol", dimensions: "A3", date: "11.2026", availableSizes: ["A3"] },
  { src: asset24, title: "The Darkness within", alt: "The Darkness within", category: "Charcol", dimensions: "A3", date: "11.2026", availableSizes: ["A3"] },
  { src: asset25, title: "Francois Mitterand", alt: "Francois Mitterand", category: "Pencil", dimensions: "100 x 80 cm", date: "2022" },
  { src: asset26, title: "Frau in Tüll", alt: "Frau in Tüll", category: "Pencil", dimensions: "100 cm x 80 cm", date: "11.2025" },
  { src: asset27, title: "I Want To Ride", alt: "I Want To Ride", category: "Pencil", dimensions: "A4", date: "2021", availableSizes: ["A4"] },
  { src: asset28, title: "Nia Fanart", alt: "Nia Fanart", category: "Pencil", dimensions: "A5", date: "2020", availableSizes: ["A5"] },
  { src: asset29, title: "Soft And Hard", alt: "Soft And Hard", category: "Pencil", dimensions: "A5", date: "2020", availableSizes: ["A5"] },
  { src: asset30, title: "The Forbidden Fruit", alt: "The Forbidden Fruit", category: "Pencil" },
  { src: asset31, title: "The Witcher", alt: "The Witcher", category: "Pencil", dimensions: "A5", date: "2019", availableSizes: ["A5"] },
  { src: asset32, title: "Vogelmiere", alt: "Vogelmiere", category: "Pencil", dimensions: "A4", date: "2023", availableSizes: ["A4"] },
  { src: asset33, title: "image15", alt: "image15", category: "Commissions" },
  { src: asset34, title: "image20", alt: "image20", category: "Commissions" },
  { src: asset35, title: "image21", alt: "image21", category: "Commissions" },
  { src: asset36, title: "image28", alt: "image28", category: "Commissions" },
  { src: asset37, title: "image46", alt: "image46", category: "Commissions" },
  { src: asset38, title: "image64", alt: "image64", category: "Commissions" },
  { src: asset39, title: "image65", alt: "image65", category: "Commissions" },
  { src: asset40, title: "image69", alt: "image69", category: "Commissions" },
  { src: asset41, title: "image8", alt: "image8", category: "Commissions" },
  { src: asset42, title: "image2", alt: "image2", category: "Commissions" },
  { src: asset43, title: "image22", alt: "image22", category: "Commissions" },
  { src: asset44, title: "image26", alt: "image26", category: "Commissions" },
  { src: asset45, title: "image3", alt: "image3", category: "Commissions" },
  { src: asset46, title: "image40", alt: "image40", category: "Commissions" },
  { src: asset47, title: "image5", alt: "image5", category: "Commissions" },
  { src: asset48, title: "image67", alt: "image67", category: "Commissions" },
  { src: asset49, title: "image86", alt: "image86", category: "Commissions" },
  { src: asset50, title: "Jenny & Sven", alt: "Jenny & Sven", category: "Commissions" },
  { src: asset51, title: "IMG_20200618_172316", alt: "IMG_20200618_172316", category: "Commissions" },
  { src: asset52, title: "IMG-20210831-WA0015", alt: "IMG-20210831-WA0015", category: "Commissions" },
]

export const moodAssets: ArtAsset[] = [
  { src: asset53, title: "IMG_0033", alt: "IMG_0033", category: "Mood" },
  { src: asset54, title: "IMG_20210727_170439", alt: "IMG_20210727_170439", category: "Mood" },
  { src: asset55, title: "IMG_20231001_115519", alt: "IMG_20231001_115519", category: "Mood" },
  { src: asset56, title: "IMG_20231006_114357", alt: "IMG_20231006_114357", category: "Mood" },
  { src: asset57, title: "IMG_20231103_150946", alt: "IMG_20231103_150946", category: "Mood" },
  { src: asset58, title: "IMG_20231113_142215", alt: "IMG_20231113_142215", category: "Mood" },
  { src: asset59, title: "IMG_20240705_215601", alt: "IMG_20240705_215601", category: "Mood" },
  { src: asset60, title: "IMG_20241122_095240", alt: "IMG_20241122_095240", category: "Mood" },
  { src: asset61, title: "About Me", alt: "About Me", category: "Mood" },
  { src: asset62, title: "IMG_20250702_133325", alt: "IMG_20250702_133325", category: "Mood" },
  { src: asset63, title: "IMG_20250702_135343", alt: "IMG_20250702_135343", category: "Mood" },
  { src: asset64, title: "IMG_20250702_142658", alt: "IMG_20250702_142658", category: "Mood" },
  { src: asset65, title: "PXL_20250724_205132162", alt: "PXL_20250724_205132162", category: "Mood" },
  { src: asset66, title: "PXL_20250807_091416571", alt: "PXL_20250807_091416571", category: "Mood" },
  { src: asset67, title: "PXL_20251003_130106789", alt: "PXL_20251003_130106789", category: "Mood" },
  { src: asset68, title: "PXL_20251121_165358787", alt: "PXL_20251121_165358787", category: "Mood" },
  { src: asset69, title: "PXL_20251203_152447588", alt: "PXL_20251203_152447588", category: "Mood" },
  { src: asset70, title: "PXL_20251204_132102835", alt: "PXL_20251204_132102835", category: "Mood" },
  { src: asset71, title: "PXL_20251220_075133790", alt: "PXL_20251220_075133790", category: "Mood" },
  { src: asset72, title: "PXL_20251220_075147579", alt: "PXL_20251220_075147579", category: "Mood" },
  { src: asset73, title: "PXL_20251220_111343231", alt: "PXL_20251220_111343231", category: "Mood" },
  { src: asset74, title: "PXL_20251226_151111840", alt: "PXL_20251226_151111840", category: "Mood" },
  { src: asset75, title: "PXL_20260111_170125062", alt: "PXL_20260111_170125062", category: "Mood" },
  { src: asset76, title: "PXL_20260111_211732873", alt: "PXL_20260111_211732873", category: "Mood" },
  { src: asset77, title: "schirm", alt: "schirm", category: "Mood" },
  { src: asset78, title: "Unbenannt-1", alt: "Unbenannt-1", category: "Mood" },
  { src: asset79, title: "Unbenannt-2", alt: "Unbenannt-2", category: "Mood" },
  { src: asset80, title: "unknown", alt: "unknown", category: "Mood" },
]

export const shopAssets: ArtAsset[] = [
  { src: asset81, title: "Cat Study 1", alt: "Cat Study 1", category: "Poster", shopCategory: "poster", dimensions: "A4-A5", availableSizes: ["A4", "A5"] },
  { src: asset82, title: "Cat Study 3", alt: "Cat Study 3", category: "Poster", shopCategory: "poster", dimensions: "A4-A5", availableSizes: ["A4", "A5"] },
  { src: asset83, title: "Lena", alt: "Lena", category: "Poster", shopCategory: "poster", dimensions: "Print A2-A4", availableSizes: ["A2", "A3", "A4"] },
  { src: asset84, title: "Maren", alt: "Maren", category: "Poster", shopCategory: "poster", dimensions: "A4-A5", availableSizes: ["A4", "A5"] },
  { src: asset85, title: "Mirrowing", alt: "Mirrowing", category: "Poster", shopCategory: "poster", dimensions: "A2-A4", availableSizes: ["A2", "A3", "A4"] },
  { src: asset86, title: "My Abstract Self", alt: "My Abstract Self", category: "Poster", shopCategory: "poster", dimensions: "A4-A5", availableSizes: ["A4", "A5"] },
  { src: asset87, title: "Red Light Mirrow", alt: "Red Light Mirrow", category: "Poster", shopCategory: "poster", dimensions: "A2-A4", availableSizes: ["A2", "A3", "A4"] },
  { src: asset88, title: "Roxanne", alt: "Roxanne", category: "Poster", shopCategory: "poster", dimensions: "A1-A4", availableSizes: ["A1", "A2", "A3", "A4"] },
  { src: asset89, title: "The Darkness within", alt: "The Darkness within", category: "Poster", shopCategory: "poster", dimensions: "A2-A4", availableSizes: ["A2", "A3", "A4"] },
  { src: asset90, title: "Cat Study 1", alt: "Cat Study 1", category: "Postkarte", shopCategory: "postkarte" },
  { src: asset91, title: "Cat Study 3", alt: "Cat Study 3", category: "Postkarte", shopCategory: "postkarte" },
  { src: asset92, title: "Girls Day 2", alt: "Girls Day 2", category: "Postkarte", shopCategory: "postkarte" },
  { src: asset93, title: "Girls Day", alt: "Girls Day", category: "Postkarte", shopCategory: "postkarte" },
  { src: asset94, title: "Lena", alt: "Lena", category: "Postkarte", shopCategory: "postkarte" },
  { src: asset95, title: "My Abstract Self", alt: "My Abstract Self", category: "Postkarte", shopCategory: "postkarte" },
  { src: asset96, title: "Cat Study 1", alt: "Cat Study 1", category: "Sticker", shopCategory: "sticker" },
  { src: asset97, title: "Cat Study 3", alt: "Cat Study 3", category: "Sticker", shopCategory: "sticker" },
  { src: asset98, title: "Girls Day", alt: "Girls Day", category: "Sticker", shopCategory: "sticker" },
  { src: asset99, title: "Lena", alt: "Lena", category: "Sticker", shopCategory: "sticker" },
  { src: asset100, title: "My Abstract Self", alt: "My Abstract Self", category: "Sticker", shopCategory: "sticker" },
]

export const allDisplayAssets = artAssets

export const exhibitionCategoryLinks = [
  { slug: "", label: "ALL", category: "all" },
  { slug: "acryl", label: "ACRYL", category: "acryl" },
  { slug: "aquarell", label: "AQUARELL", category: "aquarell" },
  { slug: "charcol", label: "CHARCOL", category: "charcol" },
  { slug: "pencil", label: "PENCIL", category: "pencil" },
  { slug: "commissions", label: "COMMISSIONS", category: "commissions" },
]

export const shopCategoryLinks = [
  { slug: "", label: "ALL", category: "all" },
  { slug: "poster", label: "POSTER", category: "poster" },
  { slug: "postkarte", label: "POSTKARTEN", category: "postkarte" },
  { slug: "sticker", label: "STICKER", category: "sticker" },
]

export function getAssetByIndex(index: number, assets: ArtAsset[] = allDisplayAssets) {
  return assets[index % assets.length]
}

export function normalizeArtworkTitle(title: string) {
  return title.toLowerCase().replace(/\bprint\b/g, "").replace(/\bposter\b/g, "").replace(/[^a-z0-9]+/g, " ").trim()
}

export function getAssetsByCategory(category: string) {
  if (category === "all") return artAssets

  const normalizedCategory = category.toLowerCase()
  return artAssets.filter((asset) => asset.category.toLowerCase() === normalizedCategory)
}

export function getShopAssetsByCategory(category: string) {
  if (category === "all" || category === "") return shopAssets
  if (category === "prints") return shopAssets.filter((asset) => asset.shopCategory === "poster")

  return shopAssets.filter((asset) => asset.shopCategory === category)
}

export function getShopAssetHref(asset?: ArtAsset) {
  if (!asset) return undefined
  const index = shopAssets.indexOf(asset)
  return index === -1 ? undefined : `/shop/product/${index + 1}`
}

export function findShopAssetForArtwork(title: string) {
  const normalizedTitle = normalizeArtworkTitle(title)
  return shopAssets.find((asset) => normalizeArtworkTitle(asset.title) === normalizedTitle)
}
