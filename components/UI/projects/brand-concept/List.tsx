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
      <h3 className="text-2xl font-bold mb-4 border-b pb-2">{title}</h3>
      <ul className="list-disc list-inside space-y-2 text-lg">
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
