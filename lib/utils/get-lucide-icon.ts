import { Camera, Figma, LucideIcon, LucideProps, Palette } from "lucide-react";
import React from "react";

interface IconProps extends LucideProps {
  name: string;
}

const icons: { [key: string]: LucideIcon } = {
  Figma: Figma,
  Camera: Camera,
  Palette: Palette,
};

const Icon = ({ name, ...props }: IconProps) => {
  const LucideIconComponent = icons[name];

  if (!LucideIconComponent) {
    console.warn(`Icon '${name}' not found.`);
    return null;
  }

  return React.createElement(LucideIconComponent, props);
};

export default Icon;
