export type ProjectCategory =
  | "Grafik Design"
  | "Fotografie"
  | "UX / UI Design"
  | "Analoges Design";

export interface ProjectCardProps {
  coverImage: string; // path relative to public or imported image
  name: string;
  category: ProjectCategory;
  url: string;
}
