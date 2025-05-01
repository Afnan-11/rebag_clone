"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"

const sortOptions = ["Newest", "Price: Low to High", "Price: High to Low", "Popularity", "Brand: A-Z", "Brand: Z-A"]

export default function SortingComponent() {
  const [isOpen, setIsOpen] = useState(false)
  const [selectedOption, setSelectedOption] = useState("Newest")

  const handleSelect = (option: string) => {
    setSelectedOption(option)
    setIsOpen(false)
  }

  return (
    <div className="relative">
      <button
        className="flex items-center justify-between min-w-[180px] px-3 py-2 border border-gray-300 rounded-md bg-white text-sm"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>Sort by: {selectedOption}</span>
        <ChevronDown size={16} />
      </button>

      {isOpen && (
        <div className="absolute right-0 z-10 mt-1 w-full bg-white border border-gray-200 rounded-md shadow-lg">
          <ul className="py-1">
            {sortOptions.map((option) => (
              <li key={option}>
                <button
                  className={`block w-full text-left px-4 py-2 text-sm ${
                    selectedOption === option ? "bg-gray-100" : ""
                  }`}
                  onClick={() => handleSelect(option)}
                >
                  {option}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}

