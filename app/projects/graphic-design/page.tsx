import { Metadata } from "next";
import Posters from "@/components/projects/different-projects/Posters";
import Bubbl from "@/components/projects/different-projects/Bubbl";
import Mora from "@/components/projects/different-projects/Mora";

export const metadata: Metadata = {
  title: "Graphic Design Portfolio",
  description:
    "Discover the Graphic Design portfolio of Leonie Bosshard. Featuring Poster Design, Brand Concept: mora, and Brand Concept: bubbl.",
  keywords: [
    "Graphic Design",
    "Brand Concept",
    "Poster Design",
    "Leonie Bosshard",
  ],
};

const GraphicDesign = () => {
  return (
    <div>
      <Posters />
      <Mora />
      <Bubbl />
    </div>
  );
};

export default GraphicDesign;
