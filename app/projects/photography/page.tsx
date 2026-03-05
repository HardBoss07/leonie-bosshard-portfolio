import { Metadata } from "next";
import PortraitPhotography from "@/components/projects/different-projects/PortraitPhotography";
import { projectData } from "@/lib/projects/projectDetailInfo";
import ProjectTemplate from "@/components/projects/ProjectTemplate";

export const metadata: Metadata = {
  title: "Professional Photography Portfolio",
  description:
    "Explore Leonie Bosshard's professional photography portfolio. Specialized in portrait, product, and independent photography.",
  keywords: [
    "Photography",
    "Portrait Photography",
    "Product Photography",
    "Leonie Bosshard",
  ],
};

const Photography = () => {
  return (
    <div>
      <PortraitPhotography />
      <ProjectTemplate {...projectData.independentPhotography} />
      <ProjectTemplate {...projectData.productPhotography} />
    </div>
  );
};

export default Photography;
