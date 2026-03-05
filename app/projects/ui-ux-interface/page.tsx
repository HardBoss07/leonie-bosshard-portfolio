import { projectData } from "@/lib/projects/projectDetailInfo";
import ProjectTemplate from "@/components/projects/ProjectTemplate";

const UiUxInterface = () => {
  return (
    <div>
      <ProjectTemplate {...projectData.redentApp} />
      <ProjectTemplate {...projectData.pagerPrototype} />
    </div>
  );
};

export default UiUxInterface;
