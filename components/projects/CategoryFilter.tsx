"use client";

import React from "react";
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
            // Use the new uniform classes from globals.css
            activeCategory === category ? "btn-primary" : "btn-neutral",
          )}
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default CategoryFilter;
