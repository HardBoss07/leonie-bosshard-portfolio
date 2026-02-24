import { IMAGE_PREFIX as IP } from "@/lib/constants/imagePrefix";
import ImageDisplay from "@/components/UI/projects/ImageDisplay";
import VisualIdentity from "@/components/UI/projects/VisualIdentity";
import { Promise } from "@/components/UI/projects/Promise";

const Mora = () => {
  const imageURLs: string[] = [
    `${IP[1]}mora_1_4000x3000.png`,
    `${IP[1]}mora_2_4000x3000.png`,
    `${IP[1]}mora_3_3400x3200.png`,
    `${IP[1]}mora_4_4000x2667.png`,
    `${IP[1]}mora_5_4000x3000.png`,
    `${IP[1]}mora_6_4000x3000.png`,
  ];

  const colorPalette = [
    { hex: "#C7B6CF", name: "Pastel Purple" },
    { hex: "#FFF5EB", name: "Cream" },
    { hex: "#E7BFC8", name: "Pastel Raspberry" },
    { hex: "#F3A7B3", name: "Pastel Cherry" },
    { hex: "#7A5A5A", name: "Cocoa" },
  ];

  return (
    <section className="section-padding flex items-center min-h-screen py-20">
      <div className="page-container flex flex-col items-center justify-between gap-12">
        <div className="flex flex-col gap-1 z-10 w-full text-center lg:text-left items-center lg:items-start">
          <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-8 bg-gradient-to-r from-[#FF0A54] via-[#FF5C93] to-[#FF0A54] bg-clip-text text-transparent">
            Markenkonzept
          </h1>
          <h2 className="text-primary-accent text-4xl font-bold mb-2">mora</h2>
          <p className="text-xl italic text-gray-600 mb-10">
            Tagline: gentle care, every day.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 w-full text-justify lg:text-left">
            <div className="flex flex-col gap-8">
              <div>
                <h3 className="text-2xl font-bold mb-4 border-b pb-2">
                  Essence
                </h3>
                <p className="text-lg leading-relaxed">
                  <strong>mora</strong> is a playful, modern personal care brand
                  that&apos;s fun, gentle, and feel-good. Mild, nourishing, and
                  visually soft, it turns every shower into a joyful moment.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-4 border-b pb-2">
                  Personality
                </h3>
                <ul className="list-disc list-inside space-y-2 text-lg text-primary-text/80">
                  <li>Optimistic, light, approachable</li>
                  <li>Playful, never preachy</li>
                  <li>Friendly, rounded, modern</li>
                </ul>
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-4 border-b pb-2">
                  Audience
                </h3>
                <ul className="list-disc list-inside space-y-2 text-lg text-primary-text/80">
                  <li>18-35, health-conscious, trend-savvy</li>
                  <li>Pastel-loving, social media friendly</li>
                  <li>Values clean, minimal, feel-good design</li>
                </ul>
              </div>
            </div>

            <div className="flex flex-col gap-8">
              <VisualIdentity colors={colorPalette} />
              <div>
                <h3 className="text-2xl font-bold mb-4 border-b pb-2">
                  System
                </h3>
                <p className="mb-4 font-semibold">
                  Flavors instantly recognizable by color:
                </p>
                <ul className="space-y-3 text-lg">
                  <li className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-[#C7B6CF]"></span>
                    Blackberry & Vanilla
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-[#E7BFC8]"></span>
                    Raspberry & Hibiscus
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-[#F3A7B3]"></span>
                    Cherry & Almond
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <Promise
            prefix="Gentle care, playful touch —"
            suffix="feel soft, shower happy."
            textColor="#FFF5EB"
            accentColor="#E7BFC8"
            highlightColor="#F3A7B3"
          />

          <ImageDisplay imageURLs={imageURLs} altText="mora Brand Image" />
        </div>
      </div>
    </section>
  );
};

export default Mora;
