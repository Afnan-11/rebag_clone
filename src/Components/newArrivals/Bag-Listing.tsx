"use client"

import { useMemo } from "react"
import type { Bag } from "../../lib/Types"
import ProductCard from "../newArrivals/Product-Card"

interface BagListingProps {
  bags: Bag[]
}

export default function BagListing({ bags }: BagListingProps) {
  // Using useMemo to optimize rendering when bags array doesn't change
  const bagItems = useMemo(() => {
    return bags.map((bag) => <ProductCard key={bag.id} product={bag} />)
  }, [bags])

  return <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">{bagItems}</div>
}

