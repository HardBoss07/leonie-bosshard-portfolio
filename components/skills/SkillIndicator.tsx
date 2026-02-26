import React from "react";
import { SkillIndicatorProps } from "@/types/skill";
import { cn } from "@/lib/utils/cn";
import { Figma } from "iconoir-react";
import AdobeIcon from "./AdobeIcon";
import { AdobeTool } from "@/types/adobeTool";

interface SkillIndicatorComponentProps extends SkillIndicatorProps {
  className?: string;
}

const SkillIndicator: React.FC<SkillIndicatorComponentProps> = ({
  icon,
  skill,
  className,
}) => {
  const radius = 40;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (skill / 100) * circumference;

  const renderIcon = () => {
    if (icon.startsWith("Adobe")) {
      const toolName = icon.replace("Adobe ", "").replace(" ", "") as AdobeTool;
      return <AdobeIcon tool={toolName} size={32} />;
    }

    if (icon === "Figma") {
      return <Figma className="w-8 h-8 text-primary-text" />;
    }

    return <span className="text-white text-[0.625rem] uppercase">Icon</span>;
  };

  return (
    <div className={cn("flex flex-col items-center", className)}>
      <div className="relative w-24 h-24">
        <svg className="w-full h-full" viewBox="0 0 100 100">
          <circle
            className="stroke-neutral-800"
            strokeWidth="8"
            fill="transparent"
            r={radius}
            cx="50"
            cy="50"
          />
          <circle
            className="stroke-primary-accent"
            strokeWidth="8"
            strokeDasharray={circumference}
            strokeDashoffset={offset}
            strokeLinecap="round"
            fill="transparent"
            r={radius}
            cx="50"
            cy="50"
            transform="rotate(-90 50 50)"
          />
        </svg>

        <div className="absolute inset-0 flex items-center justify-center">
          {renderIcon()}
        </div>
      </div>

      <span className="mt-2 text-primary-accent text-lg font-bold">
        {skill}%
      </span>

      <span className="text-primary-text font-bold text-md capitalize">
        {icon}
      </span>
    </div>
  );
};

export default SkillIndicator;