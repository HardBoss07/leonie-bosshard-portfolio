import { IMAGE_PREFIX as IP } from "@/lib/constants/imagePrefix";
import ImageDisplay from "@/components/UI/projects/ImageDisplay";
import VisualIdentity from "@/components/UI/projects/VisualIdentity";
import { Promise } from "@/components/UI/projects/Promise";

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
            <div>
              <h3 className="text-2xl font-bold mb-4 border-b pb-2">Essence</h3>
              <p className="text-lg leading-relaxed">
                <strong>bubbl</strong> is a playful, modern soda that&apos;s
                fun, functional, and guilt-free. Low sugar, gut-friendly, and
                visually fresh, it turns every sip into a joyful moment.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-4 border-b pb-2">
                Personality
              </h3>
              <ul className="list-disc list-inside space-y-2 text-lg">
                <li>Optimistic, light, approachable</li>
                <li>Playful, never preachy</li>
                <li>Friendly, rounded, modern</li>
              </ul>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-4 border-b pb-2">
                Audience
              </h3>
              <ul className="list-disc list-inside space-y-2 text-lg">
                <li>18-35, health-conscious, trend-savvy</li>
                <li>Pastel-loving, social media friendly</li>
                <li>Values clean, minimal, feel-good design</li>
              </ul>
            </div>
          </div>

          <div className="flex flex-col gap-8">
            <VisualIdentity colors={colorPalette} />

            <div>
              <h3 className="text-2xl font-bold mb-4 border-b pb-2">System</h3>
              <p className="mb-4 font-semibold">
                Flavors instantly recognizable by color:
              </p>
              <ul className="space-y-3 text-lg">
                <li className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-[#BFD9E8]"></span>
                  Sky Blue - Fresh Cotton
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-[#F3E3A1]"></span>
                  Butter Yellow - Honey & Oats
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-[#F28C8C]"></span>
                  Soft Cherry - Wild Berry
                </li>
              </ul>
              <p className="mt-4 text-sm text-gray-400 italic">
                Naming system: Flavor first, playful secondary note second.
              </p>
            </div>
          </div>
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
