"use client"

import { useState } from "react"
import { Heart } from "lucide-react"

export interface ImageCardItem {
  id: string
  imageUrl: string
  title?: string
  subtitle?: string
  description?: string
  price?: number
  originalPrice?: number
  badge?: string
  likes?: number
  featured?: boolean
}

interface ImageCardGridProps {
  items: ImageCardItem[]
  columns?: {
    sm?: number
    md?: number
    lg?: number
  }
  gap?: string
  imageHeight?: string
  showLikes?: boolean
  onLikeToggle?: (id: string, liked: boolean) => void
}

export default function ImageCardGrid({
  items,
  columns = { sm: 1, md: 2, lg: 3 },
  gap = "gap-x-6 gap-y-12",
  imageHeight = "aspect-square",
  showLikes = true,
  onLikeToggle,
}: ImageCardGridProps) {
  // Generate responsive grid classes based on props
  const gridCols = `grid-cols-${columns.sm} md:grid-cols-${columns.md} lg:grid-cols-${columns.lg}`

  return (
    <div className={`grid ${gridCols} ${gap}`}>
      {items.map((item) => (
        <ImageCard
          key={item.id}
          item={item}
          imageHeight={imageHeight}
          showLikes={showLikes}
          onLikeToggle={onLikeToggle}
        />
      ))}
    </div>
  )
}

interface ImageCardProps {
  item: ImageCardItem
  imageHeight: string
  showLikes: boolean
  onLikeToggle?: (id: string, liked: boolean) => void
}

function ImageCard({ item, imageHeight, showLikes, onLikeToggle }: ImageCardProps) {
  const [liked, setLiked] = useState(false)

  const handleLikeToggle = () => {
    const newLikedState = !liked
    setLiked(newLikedState)
    if (onLikeToggle) {
      onLikeToggle(item.id, newLikedState)
    }
  }

  return (
    <div className="flex flex-col relative">
      {/* Image with Like Button */}
      <div className={`relative mb-3 ${imageHeight}`}>
        <img
          src={item.imageUrl || "/placeholder.svg"}
          alt={item.title || "Product image"}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-contain w-full"
          loading={item.featured ? "eager" : "lazy"}
        />
         {showLikes && (
          <>
          <div className="absolute right-2 top-2 z-1 flex justify-end gap-2 p-0">
            <button
              className="z-1"
              onClick={handleLikeToggle}
              aria-label={liked ? "Remove from favorites" : "Add to favorites"}
              >
              <Heart size={24} className={`${liked ? "fill-black" : "text-black"}`} />
            </button>
            {item.likes && item.likes > 0 && (
                <span className="text-sm font-medium">{item.likes}</span>
            )}
            </div>
          </>
        )}
        {item.badge && (
          <span className="absolute top-2 left-2 bg-black text-white text-xs px-2 py-1 rounded">{item.badge}</span>
        )}
      </div>

      {/* Content */}
      <div className="flex flex-col justify-center items-center">
        {item.title && (
          <div className="mb-1 text-center w-64 ">
            <span className="font-bold">{item.title}</span>
            {item.subtitle && <span className="text-sm"> {item.subtitle}</span>}
          </div>
        )}

        {item.description && <div className="text-xs text-gray-600 mb-1">{item.description}</div>}

        {(item.price || item.originalPrice) && (
          <div className="flex items-center gap-2">
            {item.originalPrice && (
              <span className="text-gray-500 line-through text-sm bg-gray-100 rounded-3xl px-1">${item.originalPrice.toLocaleString()}</span>
            )}
            {item.price && <span className="font-medium">${item.price.toLocaleString()}</span>}
          </div>
        )}
      </div>
    </div>
  )
}

