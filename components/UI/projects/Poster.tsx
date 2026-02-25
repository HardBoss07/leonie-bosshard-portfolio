import { PosterDisplayProps } from "@/types/projects/posterDisplay";
import { cn } from "@/lib/utils/cn";
import Image from "next/image";

interface PosterDisplayComponentProps extends PosterDisplayProps {
  className?: string;
}

const Poster: React.FC<PosterDisplayComponentProps> = ({
  title,
  text,
  url,
  alt,
  className,
}) => {
  return (
    <div className={cn("flex flex-row gap-8 items-start mb-8", className)}>
      
      {/* Image Container - Width reduced to 1/4 (25%) with a max-width cap */}
      <div
        key={url}
        className="relative w-1/2 max-w-[350px] aspect-[842/1191] overflow-hidden shadow-xl transition-transform hover:scale-[1.02] shrink-0"
      >
        <Image
          src={url}
          alt={alt}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 33vw, 250px"
        />
      </div>

      {/* Text Container */}
      <div className="text-primary-text flex-1 pt-2 text-justify max-w-4xl flex flex-col gap-4 text-lg leading-relaxed">
        <h3>{title}</h3>
        <p>{text}</p>
      </div>
    </div>
  );
};

export default Poster;