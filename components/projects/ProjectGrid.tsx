import React from "react";
import { ProjectCardProps } from "@/types/project";
import ProjectCard from "./ProjectCard"; // Assuming ProjectCard is in the same directory

interface ProjectGridProps {
  projects: ProjectCardProps[];
}

const ProjectGrid: React.FC<ProjectGridProps> = ({ projects }) => {
  return (
    <div className="flex flex-wrap justify-center gap-6 p-8">
      {projects.map((project, index) => (
        <ProjectCard key={index} {...project} />
      ))}
    </div>
  );
};

export default ProjectGrid;
