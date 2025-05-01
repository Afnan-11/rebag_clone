"use client"

import { ChevronDown, ChevronUp } from "lucide-react"
import type { ReactNode } from "react"

interface FilterSectionProps {
  title: string
  expanded: boolean
  onToggle: () => void
  children?: ReactNode
}

export default function FilterSection({ title, expanded, onToggle, children }: FilterSectionProps) {
  return (
    <div className="border-b border-gray-200">
      <button className="flex justify-between items-center w-full py-3 text-left font-medium" onClick={onToggle}>
        <span>{title}</span>
        {expanded ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
      </button>
      {expanded && children}
    </div>
  )
}

