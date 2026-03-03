import ProjectTemplate from "../ProjectTemplate";
import { projectData } from "@/lib/projects/projectDetailInfo";

const ProductPhotography = () => {
  return <ProjectTemplate {...projectData.productPhotography} />;
};

export default ProductPhotography;
