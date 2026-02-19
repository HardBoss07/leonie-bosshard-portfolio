import { ImageDisplayProps } from "@/types/projects/imageDisplay";
import { cn } from "@/lib/utils/cn";
import Image from "next/image";

interface ImageDisplayComponentProps extends ImageDisplayProps {
  className?: string;
}

const ImageDisplay: React.FC<ImageDisplayComponentProps> = ({
  imageURLs,
  altText,
  className,
}) => {
  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full",
        className,
      )}
    >
      {imageURLs.map((url, index) => (
        <div
          key={url}
          className="relative w-full aspect-[842/1191] overflow-hidden rounded-xl shadow-2xl transition-transform hover:scale-[1.02]"
        >
          <Image
            src={url}
            alt={`${altText} ${index + 1}`}
            fill
            priority={index === 0}
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
      ))}
    </div>
  );
};

export default ImageDisplay;
