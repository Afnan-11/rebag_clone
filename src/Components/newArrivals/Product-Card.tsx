"use client"

import { useState } from "react"
import { Heart } from "lucide-react"
import type { Product } from "../../lib/Types"

interface ProductCardProps {
  product: Product
}

export default function ProductCard({ product }: ProductCardProps) {
  const [liked, setLiked] = useState(false)

  return (
    <div className="group relative">
      <div className="relative aspect-square w-full overflow-hidden rounded-md bg-gray-100">
        <img
          src={product.imageUrl || "/placeholder.svg"}
          alt={product.name}
          className="object-cover object-center transition-transform duration-300 group-hover:scale-105"
        />
        <button
          className="absolute top-2 right-2 p-1 rounded-full bg-white/80 hover:bg-white"
          onClick={() => setLiked(!liked)}
          aria-label={liked ? "Remove from favorites" : "Add to favorites"}
        >
          <Heart size={20} className={liked ? "fill-red-500 text-red-500" : "text-gray-600"} />
        </button>
        {product.likes > 0 && (
          <span className="absolute top-2 left-2 px-2 py-1 text-xs font-medium bg-white/80 rounded-full">
            {product.likes}
          </span>
        )}
      </div>
      <div className="mt-3">
        <h3 className="text-sm font-medium">
          {product.brand} {product.name}
        </h3>
        <p className="mt-1 text-xs text-gray-500">{product.condition}</p>
        <p className="mt-1 font-medium">${product.price.toLocaleString()}</p>
      </div>
    </div>
  )

}

