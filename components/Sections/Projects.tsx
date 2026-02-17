import { useState } from "react";
import { ProjectCardProps, ProjectCategory } from "@/types/project";
import { CategoryFilter, ProjectGrid } from "@/components/projects";
import { projects } from "@/lib/projects/projectInfo";

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory | "All">(
    "All",
  );

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((project) => project.category === activeCategory);

  return (
    <section className="section-padding" id="portfolio">
      <div className="page-container">
        <h2 className="text-center text-primary-accent text-4xl font-bold mb-10">
          Portfolio
        </h2>
        <CategoryFilter
          onSelectCategory={setActiveCategory}
          activeCategory={activeCategory}
        />
        <ProjectGrid projects={filteredProjects} />
      </div>
    </section>
  );
};

export default Projects;
