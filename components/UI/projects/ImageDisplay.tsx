import { cn } from "@/lib/utils/cn";
import Image from "next/image";
import { ImageData } from "@/types/image";

interface ImageDisplayComponentProps {
  images: ImageData[]; // Updated to take the new ImageData array
  className?: string;
}

const ImageDisplay: React.FC<ImageDisplayComponentProps> = ({
  images = [],
  className,
}) => {
  return (
    <div
      className={cn(
        "mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full",
        className,
      )}
    >
      {images.map((image, index) => (
        <div
          key={image.src}
          className="relative w-full aspect-[842/1191] overflow-hidden project-card-shadow"
        >
          <Image
            src={image.src}
            alt={image.alt}
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
