import React from "react";
import { SkillIndicatorProps } from "@/types/skill";
import { cn } from "@/lib/utils/cn";
import {
  Figma,
  AdobePhotoshop,
  AdobeIllustrator,
  AdobeLightroom,
  AdobeIndesign,
} from "iconoir-react";
// Import your custom icon component here
import { AdobePremiereIcon } from "@/components/skills/AdobePremiere";

/**
 * Mapping of skill names to Icon components.
 * This includes both library icons and your custom Next.js SVG component.
 */
const iconMap: Record<string, React.ComponentType<any>> = {
  Figma: Figma,
  "Adobe Photoshop": AdobePhotoshop,
  "Adobe Illustrator": AdobeIllustrator,
  "Adobe Lightroom": AdobeLightroom,
  "Adobe InDesign": AdobeIndesign,
  "Adobe Premiere": AdobePremiereIcon, // Unified in the list!
};

interface SkillIndicatorComponentProps extends SkillIndicatorProps {
  className?: string;
}

const SkillIndicator: React.FC<SkillIndicatorComponentProps> = ({
  icon,
  skill,
  className,
}) => {
  const radius = 40; // Circle radius
  const circumference = 2 * Math.PI * radius;

  // This calculates the remaining part of the circle
  const offset = circumference - (skill / 100) * circumference;

  // Resolve the icon component from the map
  const IconComponent = iconMap[icon];

  return (
    <div className={cn("flex flex-col items-center", className)}>
      <div className="relative w-24 h-24">
        {/* Container for the circular progress bar */}
        <svg className="w-full h-full" viewBox="0 0 100 100">
          {/* Background circle */}
          <circle
            className="stroke-neutral-600"
            strokeWidth="8"
            fill="transparent"
            r={radius}
            cx="50"
            cy="50"
          />
          {/* Progress circle */}
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
            transform="rotate(-90 50 50)" // Start from the top
          />
        </svg>

        <div className="absolute inset-0 flex flex-col items-center justify-center">
          {IconComponent ? (
            <IconComponent className="w-8 h-8 text-white" />
          ) : (
            // Fallback if the icon name isn't found in the map
            <span className="text-white text-[10px] uppercase">Icon</span>
          )}
        </div>
      </div>

      {/* Percentage text */}
      <span className="mt-2 text-primary-accent text-lg font-bold">
        {skill}%
      </span>

      {/* Icon name / tool name */}
      <span className="text-primary-text font-bold text-md capitalize">
        {icon}
      </span>
    </div>
  );
};

export default SkillIndicator;