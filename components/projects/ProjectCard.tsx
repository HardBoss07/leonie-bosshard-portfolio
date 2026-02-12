import Image from "next/image";
import { ProjectCardProps } from "@/types/project";
import { cn } from "@/lib/utils/cn"; // Assuming cn is used for utility classes

const ProjectCard: React.FC<ProjectCardProps> = ({
  coverImage,
  name,
  category,
}) => {
  // Determine the placeholder image path based on the category
  // const placeholderImagePath = `/images/placeholder-${category.toLowerCase().replace(/ /g, '-')}.jpg`;
  const placeholderImagePath = `/images/example.png`;

  return (
    <div
      className={cn(
        "relative rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300",
        "bg-neutral-900 min-w-[400px] max-w-[400px]", // Changed background to bg-gray-900 for better contrast
      )}
    >
      <div className="relative w-full h-96"> {/* Adjusted height to h-96 */}
        <Image
          src={placeholderImagePath} // Use placeholder for now
          alt={name}
          layout="fill"
          objectFit="cover"
          className="transition-transform duration-300 hover:scale-105"
        />
      </div>
      <div className="p-4 h-[70px] flex flex-col justify-center"> {/* Added fixed height and centered content vertically */}
        <div className="flex justify-between items-center"> {/* Flexbox for title and category */}
          <h3 className="text-lg font-bold text-primary-text truncate">{name}</h3> {/* Added truncate to name */}
          <p className="text-primary-accent text-md font-normal whitespace-nowrap">{category}</p> {/* Added whitespace-nowrap to category */}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
