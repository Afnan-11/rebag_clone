import type { Bag } from "./Types"

export function getBags(): Bag[] {
  return [
    {
      id: "1",
      brand: "Chanel",
      name: "O Case Clutch Quilted Caviar Large",
      imageUrl: "/placeholder.svg?height=400&width=400",
      price: 1430,
      condition: "Excellent Condition",
      likes: 14,
    },
    {
      id: "2",
      brand: "Cartier",
      name: "Love Cuff Bracelet 18K Rose Gold", 
      imageUrl: "/placeholder.svg?height=400&width=400",
      price: 4570,
      condition: "Very Good Condition",
      likes: 3,
    },
    {
      id: "3",
      brand: "Chanel",
      name: "Classic Double Flap Bag Quilted Patent Medium",
      imageUrl: "/placeholder.svg?height=400&width=400",
      price: 4740,
      condition: "Very Good Condition",
      likes: 0,
    },
    {
      id: "4",
      brand: "Louis Vuitton",
      name: "Neverfull MM Monogram Canvas",
      imageUrl: "/placeholder.svg?height=400&width=400",
      price: 1250,
      condition: "Good Condition",
      likes: 7,
    },
    {
      id: "5",
      brand: "Hermès",
      name: "Birkin 30 Togo Leather",
      imageUrl: "/placeholder.svg?height=400&width=400",
      price: 18500,
      condition: "Excellent Condition",
      likes: 22,
    },
    {
      id: "6",
      brand: "Gucci",
      name: "Marmont Matelassé Mini Bag",
      imageUrl: "/placeholder.svg?height=400&width=400",
      price: 1100,
      condition: "Very Good Condition",
      likes: 5,
    },
  ]
}

