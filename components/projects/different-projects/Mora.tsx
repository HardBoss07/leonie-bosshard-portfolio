import ImageDisplay from "@/components/UI/projects/ImageDisplay";
import { Promise } from "@/components/UI/projects/brand-concept/Promise";
import List from "@/components/UI/projects/brand-concept/List";
import System from "@/components/UI/projects/brand-concept/System";
import Essence from "@/components/UI/projects/brand-concept/Essence";
import { projectImages } from "@/lib/images";

const Mora = () => {
  const colorPalette = [
    { hex: "#C7B6CF", name: "Pastel Purple" },
    { hex: "#FFF5EB", name: "Cream / Off-White" },
    { hex: "#E7BFC8", name: "Pastel Raspberry" },
    { hex: "#F3A7B3", name: "Pastel Cherry" },
    { hex: "#7A5A5A", name: "Soft Cocoa-Brown" },
  ];

  return (
    <section id="brand-concept">
      <div className="project-container">
        <div className="project-header-section">
          <h1>Brand Concept</h1>
          <h2>mora</h2>
          <p className="project-header-tagline">
            Tagline: gentle care, every day.
          </p>
        </div>

        <div className="project-layout-grid">
          <div className="flex flex-col gap-8">
            <Essence
              bold="mora"
              text=" ist eine verspielte, moderne Personal-Care-Marke, die Spass macht, sanft ist und sich einfach gut anfühlt. Mild, pflegend und visuell weich verwandelt sie jede Dusche in einen kleinen Wohlfühlmoment."
            />

            <List
              title="Persönlichkeit"
              items={[
                "Optimistisch, leicht, zugänglich",
                "Spielerisch, aber niemals belehrend",
                "Freundlich, weich, modern",
              ]}
            />

            <List
              title="Zielgruppe"
              items={[
                "18-35 Jahre",
                "gesundheitsbewusst",
                "trendaffin",
                "Liebt Pastellfarben",
                "social-media-affin",
                "Schätzt klares, minimalistisches, positives Design",
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
              { color: "#F3A7B3", 
                label: "Cherry & Almond - Pastel Cherry"
              },
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

        <ImageDisplay images={projectImages.mora} />
      </div>
    </section>
  );
};

export default Mora;
