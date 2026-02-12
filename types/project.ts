export type ProjectCategory =
  | "Graphic Design"
  | "Photography"
  | "UX / UI Design"
  | "Analog Design";

export interface ProjectCardProps {
  coverImage: string; // path relative to public or imported image
  name: string;
  category: ProjectCategory;
}
