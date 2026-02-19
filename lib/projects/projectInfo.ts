import { ProjectCardProps } from "@/types/project";
import { IMAGE_PREFIX as IP } from "../constants/imagePrefix";

const s: string = "/projects/";

export const projects: ProjectCardProps[] = [
    {
        coverImage: `${IP[0]}bubbl_1_4000x4000.png`,
        name: "Markenkonzept: bubbl",
        category: "Grafik Design",
        url: `${s}bubbl`,
    },
    {
        coverImage: `${IP[5]}product_photography_1_3078x4096.png`,
        name: "Produktfotografie",
        category: "Fotografie",
        url: `${s}product-photography`,
    },
    {
        coverImage: `${IP[4]}portrait_photography_1_2296x2296.png`,
        name: "Portraitfotograpfie",
        category: "Fotografie",
        url: `${s}portrait-photography`,
    },
    {
        coverImage: `${IP[2]}graphic-design_1_842x1191.png`,
        name: "Poster Design",
        category: "Grafik Design",
        url: `${s}graphic-design`,
    },
    {
        coverImage: `${IP[3]}independent_photography_1_1066x1600.png`,
        name: "Freie fotografische Arbeiten",
        category: "Fotografie",
        url: `${s}independent-photography`,
    },
    {
        coverImage: `${IP[9]}redent_kit_1_4096x2731.png`,
        name: "Re:Dent Kit",
        category: "Analoges Design",
        url: `${s}redent-kit`,
    },

    {
        coverImage: `${IP[1]}mora_1_4000x3000.png`,
        name: "Markenkonzept: mora",
        category: "Grafik Design",
        url: `${s}mora`,
    },

    {
        coverImage: `${IP[6]}kaos_komplett_1_2048x1365.png`,
        name: "Kaos Komplett",
        category: "Analoges Design",
        url: `${s}kaos-komplett`,
    },
    {
        coverImage: `${IP[7]}pager_prototype_1_1198x804.png`,
        name: "Pager Prototyp",
        category: "UX / UI Design",
        url: `${s}pager-prototype`,
    },
    {
        coverImage: `${IP[8]}redent_app_1_375x812.png`,
        name: "Re:Dent App",
        category: "UX / UI Design",
        url: `${s}redent-app`,
    },

];