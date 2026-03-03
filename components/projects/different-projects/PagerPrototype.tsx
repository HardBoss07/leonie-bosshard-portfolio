import ProjectTemplate from "../ProjectTemplate";
import { projectData } from "@/lib/projects/projectDetailInfo";

const PagerPrototype = () => {
  return <ProjectTemplate {...projectData.pagerPrototype} />;
};

export default PagerPrototype;
