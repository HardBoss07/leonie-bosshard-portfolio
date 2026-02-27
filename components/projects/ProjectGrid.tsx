import React, { useState, useRef, UIEvent } from "react";
import { ProjectCardProps } from "@/types/project";
import ProjectCard from "@/components/projects/ProjectCard";

interface ProjectGridProps {
  projects: ProjectCardProps[];
}

const ProjectGrid: React.FC<ProjectGridProps> = ({ projects }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);

  const handleScroll = (e: UIEvent<HTMLDivElement>) => {
    const container = e.currentTarget;
    const scrollPosition = container.scrollLeft;
    const width = container.offsetWidth;

    const index = Math.round(scrollPosition / width);
    setActiveIndex(index);
  };

  return (
    <div className="group relative">
      <div
        ref={scrollRef}
        onScroll={handleScroll}
        className="flex overflow-x-auto snap-x snap-mandatory gap-0 mt-12 pb-4 hide-scrollbar sm:grid sm:grid-cols-2 lg:grid-cols-3 sm:gap-6 sm:pb-0"
      >
        {projects.map((project, index) => (
          <div
            key={index}
            className="min-w-full snap-center px-4 sm:min-w-0 sm:px-0"
          >
            <ProjectCard {...project} />
          </div>
        ))}
      </div>

      {projects.length > 1 && (
        <div className="flex justify-center items-center gap-2 mt-4 sm:hidden">
          {projects.map((_, index) => (
            <div
              key={index}
              className={`h-2 w-2 rounded-full transition-all duration-300 ease-in-out bg-primary-text 
                ${activeIndex === index ? "scale-125 opacity-100" : "scale-100 opacity-30"}`}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default ProjectGrid;
