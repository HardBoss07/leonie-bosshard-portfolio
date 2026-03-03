import ProjectTemplate from "../ProjectTemplate";
import { projectData } from "@/lib/projects/projectDetailInfo";

const ReDentApp = () => {
  return <ProjectTemplate {...projectData.redentApp} />;
};

export default ReDentApp;
