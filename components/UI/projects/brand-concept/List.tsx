import React from "react";
import { cn } from "@/lib/utils/cn";

interface ListProps {
  title: string;
  items: string[];
  className?: string;
}

const List: React.FC<ListProps> = ({ title, items, className }) => {
  return (
    <div className={cn("w-full", className)}>
      <h3 className="project-section-title">{title}</h3>
      <ul className="project-list-base">
        {items.map((item, index) => (
          <li key={index} className="text-primary-text">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default List;
