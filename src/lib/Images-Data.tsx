import ImageCardGrid, { type ImageCardItem } from "../Components/newArrivals/image-card-grid"

// Example data that matches the structure in the reference image
export const luxuryItems: ImageCardItem[] = [
  {
    id: "1",
    imageUrl:
      "https://cdn.shopify.com/s/files/1/0384/0161/files/334539-122_20Chanel_20O_20Case_20Clutch_20Quilted_20Caviar_20Large_2D_0002_300x300.jpg?v=1742841374",
    title: "Christian Dior",
    subtitle: "Ultra Matte Saddle Nano Pouch Leather",
    description: "Great Condition",
    originalPrice: 960,
    price: 815,
    likes: 296,
    featured: true,
  },
  {
    id: "2",
    imageUrl:
      "https://cdn.shopify.com/s/files/1/0384/0161/files/326003-45_20Cartier_20Love_20Cuff_20Bracelet_2018K_20Rose_20Gold_2D_0002_300x300.jpg?v=1742841033",
    title: "Rolex",
    subtitle: "Oyster Perpetual President Datejust Automatic Watch Yellow Gold",
    description: "Good Condition",
    originalPrice: 10800,
    price: 9230,
    likes: 210,
    featured: true,
  },
  {
    id: "3",
    imageUrl:
      "https://cdn.shopify.com/s/files/1/0384/0161/files/335182-3_20Chanel_20Classic_20Double_20Flap_20Bag_20Quilted_20Patent_20Medium_2D_0002_300x300.jpg?v=1742841029",
    title: "Chanel",
    subtitle: "Classic Double Flap Bag Tweed and Quilted Lambskin Medium",
    description: "Good Condition",
    originalPrice: 5950,
    price: 3165,
    likes: 180,
    featured: true,
  },
  {
    id: "4",
    imageUrl:
      "https://cdn.shopify.com/s/files/1/0384/0161/files/331673-87_20Rolex_20Oyster_20Perpetual_20Deepsea_20Sea-Dweller_20James_20Cameron_20Automatic_20Watch_20Stainless_20Steel_20and_20Cerachrom_2044_2D_0002_300x300.jpg?v=1742841023",
    title: "Saint Laurent",
    subtitle: "Classic Monogram College Bag Chevron Corduroy",
    description: "Very Good Condition",
    originalPrice: 1695,
    price: 1370,
    likes: 167,
  },
  {
    id: "5",
    imageUrl:
      "https://cdn.shopify.com/s/files/1/0384/0161/files/334774-62_20Louis_20Vuitton_20Neverfull_20NM_20Tote_20Monogram_20Canvas_20MM_2D_0002_300x300.jpg?v=1742841019",
    title: "Chanel",
    subtitle: "Classic Single Flap Bag Quilted Tweed and Ribbon Mini",
    description: "Good Condition",
    originalPrice: 4705,
    price: 2940,
    likes: 162,
  },
  {
    id: "6",
    imageUrl:
      "https://cdn.shopify.com/s/files/1/0384/0161/files/327706-32_20Van_20Cleef_20_26_20Arpels_20Byzantine_20Alhambra_20Pendant_20Necklace_2018K_20Yellow_20Gold_2D_0002_300x300.jpg?v=1742841012",
    title: "Louis Vuitton",
    subtitle: "Neverfull Tote Monogram Idylle MM",
    description: "Very Good Condition",
    originalPrice: 2085,
    price: 1155,
    likes: 160,
  },
]

export default function ExampleUsage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6">Luxury Products</h1>

      <ImageCardGrid
        items={luxuryItems}
        columns={{ sm: 1, md: 2, lg: 3 }}
        gap="gap-x-6 gap-y-12"
        onLikeToggle={(id: any, liked: any) => {
          console.log(`Product ${id} ${liked ? "liked" : "unliked"}`)
        }}
      />
    </div>
  )
}

