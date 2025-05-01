"use client"

import { useState, useEffect } from "react"
import { Search } from "lucide-react"
import FilterSection from "../newArrivals/Filter-Section"
import type { FilterData, FilterSection as FilterSectionType } from "../../lib/Types"
import {defaultFilterData} from '../../lib/Filter-Data'

interface FilterSidebarProps {
  filterData ?: FilterData
  onFilterChange?: (sectionId: string, optionId: string, checked: boolean) => void
}

export default function FilterSidebar({ filterData, onFilterChange = () => {} }: FilterSidebarProps) {
  // Default empty filter data if none provided

  // Use provided filter data or default
  const [filters, setFilters] = useState<FilterData>(filterData || defaultFilterData)

  // Update filters when filterData prop changes
  useEffect(() => {
    if (filterData) {
      setFilters(filterData)
    }
  }, [filterData])

  // Toggle section expanded state
  const toggleSection = (sectionId: string) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      sections: prevFilters.sections.map((section) =>
        section.id === sectionId ? { ...section, expanded: !section.expanded } : section,
      ),
    }))
  }

  // Handle checkbox change
  const handleOptionChange = (sectionId: string, optionId: string, checked: boolean) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      sections: prevFilters.sections.map((section) =>
        section.id === sectionId
          ? {
              ...section,
              options: section.options?.map((option) => (option.id === optionId ? { ...option, checked } : option)),
            }
          : section,
      ),
    }))

    // Call the callback function
    onFilterChange(sectionId, optionId, checked)
  }

  // Handle search input in filter sections
  const handleSearch = (sectionId: string, searchTerm: string) => {
    // Implement search functionality if needed
    console.log(`Searching in ${sectionId} for: ${searchTerm}`)
  }

  // Render filter options based on type
  const renderFilterOptions = (section: FilterSectionType) => {
    if (!section.options || section.options.length === 0) {
      return null
    }

    return (
      <div className="py-3 space-y-2">
        {section.searchable && (
          <div className="relative mb-3">
            <Search className="absolute left-2 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search"
              className="w-full pl-8 pr-2 py-1 border border-gray-300 rounded text-sm"
              onChange={(e) => handleSearch(section.id, e.target.value)}
            />
          </div>
        )}

        <div className={`space-y-2 ${section.options.length > 8 ? "max-h-[200px] overflow-y-auto pr-2" : ""}`}>
          {section.options.map((option) => (
            <div key={option.id} className="flex items-center">
              <input
                type={section.type === "radio" ? "radio" : "checkbox"}
                id={`${section.id}-${option.id}`}
                name={section.id}
                checked={option.checked || false}
                className="h-4 w-4 rounded border-gray-300"
                onChange={(e) => handleOptionChange(section.id, option.id, e.target.checked)}
              />
              <label htmlFor={`${section.id}-${option.id}`} className="ml-2 text-sm">
                {option.label}
                {typeof option.count !== "undefined" && (
                  <span className="text-gray-500">({option.count.toLocaleString()})</span>
                )}
              </label>
            </div>
          ))}
        </div>
      </div>
    )
  }

  return (
    <div className="w-full">
      {filters.sections.map((section) => (
        <FilterSection
          key={section.id}
          title={section.title}
          expanded={section.expanded || false}
          onToggle={() => toggleSection(section.id)}
        >
          {renderFilterOptions(section)}
        </FilterSection>
      ))}
    </div>
  )
}

