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
  const imageCount = images.length;
  const isEightImages = imageCount === 8;
  const isSmallStack = imageCount > 0 && imageCount <= 3;

  return (
    <div
      className={cn(
        "w-full mt-12 gap-4",
        // Container changes
        isSmallStack
          ? "flex flex-col items-center" // Center the items when they hit the max-width
          : isEightImages
            ? "grid grid-cols-2 md:grid-cols-4"
            : "flex flex-wrap",
        className,
      )}
    >
      {images.map((image, index) => {
        const aspectRatio = image.w / image.h;

        return (
          <div
            key={image.src}
            // Item changes
            className={cn(
              "relative overflow-hidden project-card-shadow",
              isSmallStack && "w-full md:max-w-5xl", // Full width on mobile, capped on desktop
            )}
            style={{
              ...(!isSmallStack &&
                !isEightImages && {
                  flex: `${aspectRatio} 1 0%`,
                  minWidth: "calc(50% - 1rem)",
                }),
              aspectRatio: `${image.w} / ${image.h}`,
            }}
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              priority={index < 2}
              className="object-cover"
              sizes={
                isSmallStack
                  ? "(max-width: 1024px) 100vw, 1024px"
                  : isEightImages
                    ? "(max-width: 768px) 50vw, 25vw"
                    : "(max-width: 768px) 50vw, 33vw"
              }
            />
          </div>
        );
      })}
    </div>
  );
};

export default ImageDisplay;
