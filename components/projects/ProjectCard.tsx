import Image from "next/image";
import { ProjectCardProps } from "@/types/project";
import { cn } from "@/lib/utils/cn";

const ProjectCard: React.FC<ProjectCardProps> = ({
  coverImage,
  name,
  category,
}) => {
  const placeholderImagePath = `/images/example.png`;

  return (
    <div
      className={cn(
        "relative rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300",
        "bg-neutral-900",
        "w-[85vw] flex-shrink-0 snap-center",
        "sm:w-full"
      )}
    >
      <div className="relative w-full h-96">
        <Image
          src={placeholderImagePath}
          alt={name}
          layout="fill"
          objectFit="cover"
          className="transition-transform duration-300 hover:scale-105"
        />
      </div>
      <div className="p-4 h-[70px] flex flex-col justify-center">
        <div className="flex justify-between items-center">
          <h3 className="text-lg font-bold text-primary-text truncate">{name}</h3>
          <p className="text-primary-accent text-md font-normal whitespace-nowrap">{category}</p>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
