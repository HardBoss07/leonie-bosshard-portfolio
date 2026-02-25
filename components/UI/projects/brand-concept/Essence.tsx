import React from "react";
import { cn } from "@/lib/utils/cn";

interface EssenceProps {
  bold: string;
  text: string;
  className?: string;
}

const Essence: React.FC<EssenceProps> = ({ bold, text, className }) => {
  return (
    <div className={cn("w-full", className)}>
      <h3 className="text-2xl font-bold mb-4 border-b pb-2">Essence</h3>
      <p className="text-lg leading-relaxed">
        <strong>{bold}</strong>
        {text}
      </p>
    </div>
  );
};

export default Essence;
