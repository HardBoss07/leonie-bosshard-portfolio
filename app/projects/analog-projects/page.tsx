import { Metadata } from "next";
import ReDentKit from "@/components/projects/different-projects/ReDentKit";
import ProjectTemplate from "@/components/projects/ProjectTemplate";
import { projectData } from "@/lib/projects/projectDetailInfo";

export const metadata: Metadata = {
  title: "Analog Design Projects Portfolio",
  description:
    "Explore the analog design projects by Leonie Bosshard, featuring physical products and creative installations like Re:Dent Kit and Kaos Komplett.",
  keywords: [
    "Analog Design",
    "Product Design",
    "Physical Prototypes",
    "Leonie Bosshard",
  ],
};

const AnalogProjects = () => {
  return (
    <div>
      <ReDentKit />
      <ProjectTemplate {...projectData.kaosKomplett} />
    </div>
  );
};

export default AnalogProjects;
