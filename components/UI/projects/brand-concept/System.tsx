import React from "react";
import { cn } from "@/lib/utils/cn";
import VisualIdentity from "@/components/UI/projects/brand-concept/VisualIdentity";

interface SystemItem {
  color: string;
  label: string;
}

interface Color {
  hex: string;
  name?: string;
}

interface SystemProps {
  title?: string;
  description?: string;
  items: SystemItem[];
  footer: string;
  className?: string;
  colorPalette: Color[];
}

const System: React.FC<SystemProps> = ({
  title = "System",
  description,
  items,
  footer,
  colorPalette,
  className,
}) => {
  return (
    <div className={cn("w-full", className)}>
      <VisualIdentity colors={colorPalette} />
      <h3 className="project-section-title">{title}</h3>

      {description && <p className="mb-4 font-semibold">{description}</p>}

      <ul className="project-system-list">
        {items.map((item, index) => (
          <li key={index} className="flex items-center gap-2">
            <span
              className="w-3 h-3 rounded-full shrink-0"
              style={{ backgroundColor: item.color }}
            />
            {item.label}
          </li>
        ))}
      </ul>

      {footer && <p className="mt-4 text-sm text-gray-400 italic">{footer}</p>}
    </div>
  );
};

export default System;
