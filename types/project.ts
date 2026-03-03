import { ImageData } from "@/types/image";

export type ProjectCategory =
  | "Grafik Design"
  | "Fotografie"
  | "UX / UI Interface"
  | "Analoge Projekte";

export interface ProjectCardProps {
  coverImage: string; // path relative to public or imported image
  name: string;
  category: ProjectCategory;
  url: string;
}

export interface ProjectProps {
  id: string;
  header1?: string;
  header2: string;
  projectTexts: string[];
  images: ImageData[];
}