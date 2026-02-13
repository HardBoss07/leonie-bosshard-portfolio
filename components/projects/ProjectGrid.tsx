import React from "react";
import { ProjectCardProps } from "@/types/project";
import ProjectCard from "@/components/projects/ProjectCard";

interface ProjectGridProps {
  projects: ProjectCardProps[];
}

const ProjectGrid: React.FC<ProjectGridProps> = ({ projects }) => {
  return (
    <div className="flex overflow-x-auto snap-x snap-mandatory gap-0 mt-12 pb-8  hide-scrollbar sm:grid sm:grid-cols-2 lg:grid-cols-3 sm:gap-6 sm:pb-0">
      {projects.map((project, index) => (
        <div 
          key={index} 
          className="min-w-full snap-center px-4 sm:min-w-0 sm:px-0"
        >
          <ProjectCard {...project} />
        </div>
      ))}
    </div>
  );
};

export default ProjectGrid;