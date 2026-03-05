import { ProjectCardProps } from "@/types/project";
import { IMAGE_PREFIX as IP } from "../constants/imagePrefix";

const suffix: string = "/projects/";

const graphicDesign: string = `${suffix}graphic-design/#`;
const photography: string = `${suffix}photography/#`;
const uiUxInterface: string = `${suffix}ui-ux-interface/#`;
const analogProjects: string = `${suffix}analog-projects/#`;

export const projects: ProjectCardProps[] = [
  {
    coverImage: `${IP[2]}graphic-design_1_842x1191.png`,
    name: "Poster Design",
    category: "Grafik Design",
    url: `${graphicDesign}posters`,
  },
  {
    coverImage: `${IP[1]}mora_1_4000x3000.png`,
    name: "Brand Concept: mora",
    category: "Grafik Design",
    url: `${graphicDesign}brand-concept`,
  },
  {
    coverImage: `${IP[0]}bubbl_1_4000x4000.png`,
    name: "Brand Concept: bubbl",
    category: "Grafik Design",
    url: `${graphicDesign}brand-concept`,
  },
  {
    coverImage: `${IP[4]}portrait_photography_1_2296x2296.png`,
    name: "Portraitfotograpfie",
    category: "Fotografie",
    url: `${photography}portrait-photography`,
  },
  {
    coverImage: `${IP[3]}independent_photography_1_1066x1600.png`,
    name: "Freie fotografische Arbeiten",
    category: "Fotografie",
    url: `${photography}independent-photography`,
  },
  {
    coverImage: `${IP[5]}product_photography_1_3078x4096.png`,
    name: "Produktfotografie",
    category: "Fotografie",
    url: `${photography}product-photography`,
  },
  {
    coverImage: `${IP[8]}redent_app_1_375x812.png`,
    name: "Re:Dent App",
    category: "UX / UI Interface",
    url: `${uiUxInterface}redent-app`,
  },
  {
    coverImage: `${IP[7]}pager_prototype_1_1198x804.png`,
    name: "Pager Prototyp",
    category: "UX / UI Interface",
    url: `${uiUxInterface}pager-prototype`,
  },
  {
    coverImage: `${IP[9]}redent_kit_1_4096x2731.png`,
    name: "Re:Dent Kit",
    category: "Analoge Projekte",
    url: `${analogProjects}redent-kit`,
  },
  {
    coverImage: `${IP[6]}kaos_komplett_1_2048x1365.png`,
    name: "Kaos Komplett",
    category: "Analoge Projekte",
    url: `${analogProjects}kaos-komplett`,
  },
];
