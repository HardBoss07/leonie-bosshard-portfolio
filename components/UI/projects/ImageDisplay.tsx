import { cn } from "@/lib/utils/cn";
import Image from "next/image";
import { ImageData } from "@/types/image";

interface ImageDisplayComponentProps {
  images: ImageData[];
  className?: string;
}

const ImageDisplay: React.FC<ImageDisplayComponentProps> = ({
  images = [],
  className,
}) => {
  return (
    <div className={cn("flex flex-wrap gap-4 w-full mt-12", className)}>
      {images.map((image, index) => {
        const aspectRatio = image.w / image.h;

        return (
          <div
            key={image.src}
            className="relative overflow-hidden project-card-shadow"
            style={{
              flex: `${aspectRatio} 1 0%`,
              aspectRatio: `${image.w} / ${image.h}`,
              minWidth: "calc(50% - 1rem)",
            }}
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              priority={index < 2}
              className="object-cover"
              sizes="(max-width: 768px) 50vw, 33vw"
            />
          </div>
        );
      })}
    </div>
  );
};

export default ImageDisplay;
