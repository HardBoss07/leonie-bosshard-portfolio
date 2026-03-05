import ImageDisplay from "@/components/UI/projects/ImageDisplay";
import { Promise } from "@/components/UI/projects/brand-concept/Promise";
import List from "@/components/UI/projects/brand-concept/List";
import System from "@/components/UI/projects/brand-concept/System";
import Essence from "@/components/UI/projects/brand-concept/Essence";
import { projectImages } from "@/lib/images";

const Bubbl = () => {
  const colorPalette = [
    { hex: "#FAF7F2", name: "Cream / Off-White" },
    { hex: "#F3E3A1", name: "Butter Yellow" },
    { hex: "#BFD9E8", name: "Sky Blue" },
    { hex: "#F28C8C", name: "Soft Coral" },
    { hex: "#5A3A2E", name: "Cola Brown" },
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
              text=" ist eine verspielte, moderne Limonade, die Spass macht, funktional ist und ohne schlechtes Gewissen genossen werden kann. Wenig Zucker, gut für den Darm und visuell frisch - jeder Schluck wird zu einem kleinen Glücksmoment."
            />

            <List
              title="Persönlichkeit"
              items={[
                "Optimistisch, leicht, zugänglich",
                "Spielerisch, aber niemals belehrend",
                "Freundlich, rund, modern",
              ]}
            />

            <List
              title="Zielgruppe"
              items={[
                "18-35",
                "gesundheitsbewusst",
                "trendaffin",
                "social-media-freundlich"
              ]}
            />
          </div>

          <System
            description="Geschmacksrichtungen sind sofort über Farbe erkennbar:"
            items={[
              { color: "#F3E3A1", label: "Lemon Fizz" },
              { color: "#F28C8C", label: "Cherry Pop" },
              { color: "#BFD9E8", label: "Blueberry Calm" },
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
