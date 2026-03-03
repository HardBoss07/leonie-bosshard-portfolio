import ImageDisplay from "@/components/UI/projects/ImageDisplay";
import { Promise } from "@/components/UI/projects/brand-concept/Promise";
import List from "@/components/UI/projects/brand-concept/List";
import System from "@/components/UI/projects/brand-concept/System";
import Essence from "@/components/UI/projects/brand-concept/Essence";
import { projectImages } from "@/lib/images";

const Bubbl = () => {
  const colorPalette = [
    { hex: "#FAF7F2", name: "Alabaster" },
    { hex: "#F3E3A1", name: "Wheat" },
    { hex: "#BFD9E8", name: "Sky Blue" },
    { hex: "#F28C8C", name: "Soft Coral" },
    { hex: "#5A3A2E", name: "Deep Earth" },
  ];

  return (
    <section id="bubbl" className="section-padding">
      <div className="project-container">
        <div className="project-header-section">
          <h2>bubbl</h2>
          <p className="project-header-tagline">
            Tagline: Bubbles, but better.
          </p>
        </div>

        <div className="project-layout-grid">
          <div className="flex flex-col gap-8">
            <Essence
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

        <ImageDisplay images={projectImages.bubbl} />
      </div>
    </section>
  );
};

export default Bubbl;
