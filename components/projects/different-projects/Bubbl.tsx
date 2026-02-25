import { IMAGE_PREFIX as IP } from "@/lib/constants/imagePrefix";
import ImageDisplay from "@/components/UI/projects/ImageDisplay";
import { Promise } from "@/components/UI/projects/brand-concept/Promise";
import List from "@/components/UI/projects/brand-concept/List";
import System from "@/components/UI/projects/brand-concept/System";
import Essence from "@/components/UI/projects/brand-concept/Essence";

const Bubbl = () => {
  const imageURLs: string[] = [
    `${IP[0]}bubbl_1_4000x4000.png`,
    `${IP[0]}bubbl_2_4000x4000.png`,
    `${IP[0]}bubbl_3_4000x3000.png`,
    `${IP[0]}bubbl_4_3400x3200.png`,
    `${IP[0]}bubbl_5_4000x4000.png`,
    `${IP[0]}bubbl_6_4000x4000.png`,
  ];

  const colorPalette = [
    { hex: "#FAF7F2", name: "Alabaster" },
    { hex: "#F3E3A1", name: "Wheat" },
    { hex: "#BFD9E8", name: "Sky Blue" },
    { hex: "#F28C8C", name: "Soft Coral" },
    { hex: "#5A3A2E", name: "Deep Earth" },
  ];

  return (
    <section id="bubbl">
      <div className="project-container">
        <div className="page-content">
          <h2>bubbl</h2>
          <p className="text-xl italic text-gray-600 mb-10">
            Tagline: Bubbles, but better.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 w-full text-justify lg:text-left">
          <div className="flex flex-col gap-8">
            <Essence
              className="className=flex flex-col gap-8"
              bold="bubbl"
              text=" is a playful, modern soda that's fun, functional, and guilt-free. Low sugar, gut-friendly, and visually fresh, it turns every sip into a joyful moment."
            />

            <List
              title="Personality"
              items={[
                "Optimistic, light, approachable",
                "Playful, never preachy",
                "Friendly, rounded, modern",
              ]}
            />

            <List
              title="Audience"
              items={[
                "18-35, health-conscious, trend-savvy",
                "Pastel-loving, social media friendly",
                "Values clean, minimal, feel-good design",
              ]}
            />
          </div>

          <System
            description="Geschmacksrichtungen sind sofort über Farbe erkennbar:"
            items={[
              { color: "#BFD9E8", label: "Lemon Fizz" },
              { color: "#F3E3A1", label: "Cherry Pop" },
              { color: "#F28C8C", label: "Blueberry Calm" },
            ]}
            footer="Ruhe zuerst, Verspieltheit danach."
            colorPalette={colorPalette}
          />
        </div>

        <Promise
          prefix="Gentle care, playful touch —"
          suffix="bubbles made better."
          textColor="#FAF7F2"
          accentColor="#F28C8C"
          highlightColor="#F3E3A1"
        />

        <ImageDisplay imageURLs={imageURLs} altText="bubbl Brand Image" />
      </div>
    </section>
  );
};

export default Bubbl;
