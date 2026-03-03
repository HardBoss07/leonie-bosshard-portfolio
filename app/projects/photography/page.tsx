import PortraitPhotography from "@/components/projects/different-projects/PortraitPhotography";
import { projectData } from "@/lib/projects/projectDetailInfo";
import ProjectTemplate from "@/components/projects/ProjectTemplate";

const Photography = () => {
  return (
    <div>
      <ProjectTemplate {...projectData.productPhotography} />;
      <PortraitPhotography />
      <ProjectTemplate {...projectData.independentPhotography} />;
    </div>
  );
};

export default Photography;
