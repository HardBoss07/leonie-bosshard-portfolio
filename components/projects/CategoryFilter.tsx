"use client";

import React, { useState } from "react";
import { PROJECT_CATEGORIES } from "@/lib/constants/categories";
import { ProjectCategory } from "@/types/project";
import { cn } from "@/lib/utils/cn";

interface CategoryFilterProps {
  onSelectCategory: (category: ProjectCategory | "All") => void;
  activeCategory: ProjectCategory | "All";
}

const CategoryFilter: React.FC<CategoryFilterProps> = ({
  onSelectCategory,
  activeCategory,
}) => {
  const categories = ["All", ...PROJECT_CATEGORIES];

  return (
    <div className="flex flex-wrap justify-center gap-4 mb-8">
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => onSelectCategory(category as ProjectCategory | "All")}
          className={cn(
            "px-8 py-3 rounded-xl text-lg font-bold transition-colors duration-200", // Increased padding, smaller border-radius
            activeCategory === category
              ? "bg-primary-accent text-white shadow-md"
              : "bg-neutral-800 text-primary-text hover:bg-primary-accent hover:text-white", // Changed bg-gray-700 to bg-neutral-700
          )}
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default CategoryFilter;
