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
  const isEightImages = images.length === 8;

  return (
    <div
      className={cn(
        "w-full mt-12 gap-4",
        isEightImages ? "grid grid-cols-2 md:grid-cols-4" : "flex flex-wrap",
        className,
      )}
    >
      {images.map((image, index) => {
        const aspectRatio = image.w / image.h;

        return (
          <div
            key={image.src}
            className="relative overflow-hidden project-card-shadow"
            style={{
              ...(!isEightImages && {
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
                isEightImages
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
