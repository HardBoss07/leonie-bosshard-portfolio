import { ProjectCardProps } from "@/types/project";
import { projectImages } from "../images";

const suffix: string = "/projects/";

const graphicDesign: string = `${suffix}graphic-design/#`;
const photography: string = `${suffix}photography/#`;
const uiUxInterface: string = `${suffix}ui-ux-interface/#`;
const analogProjects: string = `${suffix}analog-projects/#`;

export const projects: ProjectCardProps[] = [
  {
    coverImage: projectImages.graphicDesign[0].src,
    name: "Poster Design",
    category: "Grafik Design",
    url: `${graphicDesign}posters`,
  },
  {
    coverImage: projectImages.mora[0].src,
    name: "Brand Concept: mora",
    category: "Grafik Design",
    url: `${graphicDesign}brand-concept`,
  },
  {
    coverImage: projectImages.bubbl[0].src,
    name: "Brand Concept: bubbl",
    category: "Grafik Design",
    url: `${graphicDesign}brand-concept`,
  },
  {
    coverImage: projectImages.portrait[0].src,
    name: "Portraitfotograpfie",
    category: "Fotografie",
    url: `${photography}portrait-photography`,
  },
  {
    coverImage: projectImages.independentPhotography[0].src,
    name: "Freie fotografische Arbeiten",
    category: "Fotografie",
    url: `${photography}independent-photography`,
  },
  {
    coverImage: projectImages.productPhotography[0].src,
    name: "Produktfotografie",
    category: "Fotografie",
    url: `${photography}product-photography`,
  },
  {
    coverImage: projectImages.redentApp[0].src,
    name: "Re:Dent App",
    category: "UX / UI Interface",
    url: `${uiUxInterface}redent-app`,
  },
  {
    coverImage: projectImages.pagerPrototype[0].src,
    name: "Pager Prototyp",
    category: "UX / UI Interface",
    url: `${uiUxInterface}pager-prototype`,
  },
  {
    coverImage: projectImages.redentKit[0].src,
    name: "Re:Dent Kit",
    category: "Analoge Projekte",
    url: `${analogProjects}redent-kit`,
  },
  {
    coverImage: projectImages.kaosKomplett[0].src,
    name: "Kaos Komplett",
    category: "Analoge Projekte",
    url: `${analogProjects}kaos-komplett`,
  },
];
