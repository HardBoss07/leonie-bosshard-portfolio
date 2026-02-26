import ImageDisplay from "@/components/UI/projects/ImageDisplay";
import { Promise } from "@/components/UI/projects/brand-concept/Promise";
import List from "@/components/UI/projects/brand-concept/List";
import System from "@/components/UI/projects/brand-concept/System";
import Essence from "@/components/UI/projects/brand-concept/Essence";
import { moraImages } from "@/lib/images/moraImages";

const Mora = () => {
  const colorPalette = [
    { hex: "#C7B6CF", name: "Pastel Purple" },
    { hex: "#FFF5EB", name: "Cream" },
    { hex: "#E7BFC8", name: "Pastel Raspberry" },
    { hex: "#F3A7B3", name: "Pastel Cherry" },
    { hex: "#7A5A5A", name: "Cocoa" },
  ];

  return (
    <section id="mora">
      <div className="project-container">
        <div className="page-content">
          <h1> Brand Concept</h1>
          <h2>mora</h2>
          <p className="text-xl italic text-gray-600 mb-10">
            Tagline: gentle care, every day.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 w-full text-justify lg:text-left">
            <div className="flex flex-col gap-8">
              <Essence
                className="className=flex flex-col gap-8"
                bold="mora"
                text=" is a playful, modern personal care brand that's fun, gentle, and feel-good. Mild, nourishing, and visually soft, it turns every shower into a joyful moment."
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
              description="Duft-/Sortenwelt sofort über Farbe erkennbar:"
              items={[
                {
                  color: "#C7B6CF",
                  label: "Blackberry & Vanilla - Pastel Purple",
                },
                {
                  color: "#E7BFC8",
                  label: "Raspberry & Hibiscus - Pastel Raspberry",
                },
                { color: "#F3A7B3", label: "Cherry & Almond - Pastel Cherry" },
              ]}
              footer="Namenssystem: Erst die Hauptnote (Flavor), dann eine verspielte zweite Note"
              colorPalette={colorPalette}
            />
          </div>

          <Promise
            prefix="Gentle care, playful touch —"
            suffix="feel soft, shower happy."
            textColor="#FFF5EB"
            accentColor="#E7BFC8"
            highlightColor="#F3A7B3"
          />

          <ImageDisplay images={moraImages} />
        </div>
      </div>
    </section>
  );
};

export default Mora;
