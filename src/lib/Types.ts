export interface Product {
    id: string
    brand: string
    name: string
    imageUrl: string
    price: number
    condition: string
    likes: number
  }
  
  export type Bag = Product
  
  // Add these new interfaces for filter data

export interface FilterOption {
  id: string
  label: string
  count?: number
  value: string | boolean | number
  checked?: boolean
}

export interface FilterSection {
  id: string
  title: string
  type: "checkbox" | "radio" | "range" | "search"
  options?: FilterOption[]
  expanded?: boolean
  searchable?: boolean
}

export interface FilterData {
  sections: FilterSection[]
}