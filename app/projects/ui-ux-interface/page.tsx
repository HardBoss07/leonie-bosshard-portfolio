import { Metadata } from "next";
import { projectData } from "@/lib/projects/projectDetailInfo";
import ProjectTemplate from "@/components/projects/ProjectTemplate";

export const metadata: Metadata = {
  title: "UI/UX Interface Design Portfolio",
  description:
    "View the UI/UX Interface design portfolio of Leonie Bosshard. Specialized in app prototypes, user experience, and interactive design projects like Re:Dent App and Pager Prototype.",
  keywords: [
    "UI/UX Design",
    "Interface Design",
    "App Design",
    "User Experience",
    "Leonie Bosshard",
  ],
};

const UiUxInterface = () => {
  return (
    <div>
      <ProjectTemplate {...projectData.redentApp} />
      <ProjectTemplate {...projectData.pagerPrototype} />
    </div>
  );
};

export default UiUxInterface;
