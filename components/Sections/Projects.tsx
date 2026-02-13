import { useState } from "react";
import { ProjectCardProps, ProjectCategory } from "@/types/project";
import { CategoryFilter, ProjectGrid } from "@/components/projects";

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory | "All">(
    "All",
  );

  const mockProjects: ProjectCardProps[] = [
    {
      coverImage: "/images/example.png", // Using the hardcoded image for now
      name: "Branding Redesign",
      category: "Graphic Design",
    },
    {
      coverImage: "/images/example.png",
      name: "Urban Landscapes",
      category: "Photography",
    },
    {
      coverImage: "/images/example.png",
      name: "Mobile App UX",
      category: "UX / UI Design",
    },
    {
      coverImage: "/images/example.png",
      name: "Vintage Camera",
      category: "Photography",
    },
    {
      coverImage: "/images/example.png",
      name: "Magazine Layout",
      category: "Analog Design",
    },
    {
      coverImage: "/images/example.png",
      name: "Website Redesign",
      category: "UX / UI Design",
    },
  ];

  const filteredProjects =
    activeCategory === "All"
      ? mockProjects
      : mockProjects.filter((project) => project.category === activeCategory);

  return (
    <section className="section-padding">
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
