import ProjectTemplate from "../ProjectTemplate";
import { projectData } from "@/lib/projects/projectDetailInfo";

const KaosKomplett = () => {
  return <ProjectTemplate {...projectData.kaosKomplett} />;
};

export default KaosKomplett;
