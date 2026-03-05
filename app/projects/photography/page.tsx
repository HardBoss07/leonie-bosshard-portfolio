import PortraitPhotography from "@/components/projects/different-projects/PortraitPhotography";
import { projectData } from "@/lib/projects/projectDetailInfo";
import ProjectTemplate from "@/components/projects/ProjectTemplate";

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
