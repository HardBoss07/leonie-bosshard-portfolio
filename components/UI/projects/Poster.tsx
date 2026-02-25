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
    <div
      className={cn(
        "flex flex-col md:flex-row gap-6 md:gap-8 items-start mb-8",
        className,
      )}
    >
      <div className="text-primary-text flex-1 pt-2 text-justify max-w-4xl flex flex-col gap-4 text-lg leading-relaxed order-1 md:order-2">
        <h3 className="text-2xl font-bold">{title}</h3>
        <p>{text}</p>
      </div>

      <div
        key={url}
        className="relative w-full md:w-1/2 max-w-[350px] aspect-[842/1191] overflow-hidden shadow-xl transition-transform hover:scale-[1.02] shrink-0 order-2 md:order-1"
      >
        <Image
          src={url}
          alt={alt}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 350px"
        />
      </div>
    </div>
  );
};

export default Poster;
