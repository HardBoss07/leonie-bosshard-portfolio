import Image from "next/image";
import Link from "next/link";
import { ProjectCardProps } from "@/types/project";
import { cn } from "@/lib/utils/cn";

const ProjectCard: React.FC<ProjectCardProps> = ({
  coverImage,
  name,
  category,
  url, // Destructure the new prop
}) => {
  const placeholderImagePath = `/images/example.png`;

  return (
    <Link href={url} className="block">
      <div
        className={cn(
          "relative rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300",
          "bg-neutral-900 cursor-pointer", // Added cursor-pointer
          "w-[85vw] flex-shrink-0 snap-center",
          "sm:w-full",
        )}
      >
        <div className="relative w-full h-96">
          <Image
            src={coverImage || placeholderImagePath} // Use actual coverImage if available
            alt={name}
            fill // "layout='fill'" is legacy; "fill" is the modern Next.js way
            className="object-cover transition-transform duration-300 hover:scale-105"
          />
        </div>

        <div className="p-4 h-[4.375rem] flex flex-col justify-center">
          <div className="flex justify-between items-center">
            <h3 className="text-lg font-bold text-primary-text truncate">
              {name}
            </h3>
            <p className="text-primary-accent text-md font-normal whitespace-nowrap">
              {category}
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProjectCard;