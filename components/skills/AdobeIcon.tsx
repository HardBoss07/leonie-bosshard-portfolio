import Image from "next/image";
import { cn } from "@/lib/utils/cn";
import { AdobeTool } from "@/types/adobeTool";

interface AdobeIconProps {
  tool: AdobeTool;
  className?: string;
  size?: number;
}

const AdobeIcon = ({ tool, className, size = 38 }: AdobeIconProps) => {
  const iconPath = `/icons/Adobe${tool}.svg`;

  return (
    <div
      className={cn(
        "relative inline-flex items-center justify-center",
        className,
      )}
      style={{ width: size, height: size }}
    >
      <Image
        src={iconPath}
        alt={`Adobe ${tool} Icon`}
        fill
        className="object-contain"
        priority
      />
    </div>
  );
};

export default AdobeIcon;
