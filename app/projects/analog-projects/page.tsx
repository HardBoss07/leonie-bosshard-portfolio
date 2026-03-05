import ReDentKit from "@/components/projects/different-projects/ReDentKit";
import ProjectTemplate from "@/components/projects/ProjectTemplate";
import { projectData } from "@/lib/projects/projectDetailInfo";

const AnalogProjects = () => {
  return (
    <div>
      <ReDentKit />
      <ProjectTemplate {...projectData.kaosKomplett} />
    </div>
  );
};

export default AnalogProjects;
