import { IMAGE_PREFIX as IP } from "@/lib/constants/imagePrefix";
import ImageDisplay from "@/components/UI/projects/ImageDisplay";

const Bubbl = () => {
  const imageURLs: string[] = [
    `${IP[0]}bubbl_1_4000x4000.png`,
    `${IP[0]}bubbl_2_4000x4000.png`,
    `${IP[0]}bubbl_3_4000x3000.png`,
    `${IP[0]}bubbl_4_3400x3200.png`,
    `${IP[0]}bubbl_5_4000x4000.png`,
    `${IP[0]}bubbl_6_4000x4000.png`,
  ];

  return (
    <section className="section-padding flex flex-col items-center min-h-screen py-20">
      <div className="page-container w-full flex flex-col gap-12">
        <div className="flex flex-col gap-1 z-10 w-full text-center lg:text-left items-center lg:items-start">
          <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-8 bg-gradient-to-r from-[#FF0A54] via-[#FF5C93] to-[#FF0A54] bg-clip-text text-transparent">
            Brand Concept
          </h1>
          <h2 className="text-primary-accent text-4xl font-bold mb-2">bubbl</h2>
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
            <div>
              <h3 className="text-2xl font-bold mb-4 border-b pb-2">
                Visual Identity
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-4">
                <div className="flex flex-col items-center gap-2">
                  <div
                    className="w-full h-12 rounded-md shadow-sm border border-white/10"
                    style={{ backgroundColor: "#FAF7F2" }}
                  ></div>
                  <span className="text-xs font-mono">#FAF7F2</span>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <div
                    className="w-full h-12 rounded-md shadow-sm border border-white/10"
                    style={{ backgroundColor: "#F3E3A1" }}
                  ></div>
                  <span className="text-xs font-mono">#F3E3A1</span>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <div
                    className="w-full h-12 rounded-md shadow-sm border border-white/10"
                    style={{ backgroundColor: "#BFD9E8" }}
                  ></div>
                  <span className="text-xs font-mono">#BFD9E8</span>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <div
                    className="w-full h-12 rounded-md shadow-sm border border-white/10"
                    style={{ backgroundColor: "#F28C8C" }}
                  ></div>
                  <span className="text-xs font-mono">#F28C8C</span>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <div
                    className="w-full h-12 rounded-md shadow-sm border border-white/10"
                    style={{ backgroundColor: "#5A3A2E" }}
                  ></div>
                  <span className="text-xs font-mono text-[#5A3A2E]">
                    #5A3A2E
                  </span>
                </div>
              </div>
            </div>
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
        <div className="mt-12 w-full p-10 rounded-2xl border border-[#7A5A5A]/30 bg-[#7A5A5A]/5 backdrop-blur-sm text-center">
          <h3 className="text-sm font-bold mb-4 uppercase tracking-[0.3em] text-[#F28C8C]">
            The Promise
          </h3>
          <p className="text-3xl md:text-4xl font-medium text-[#FAF7F2] leading-relaxed">
            Gentle care, playful touch — <br className="hidden md:block" />
            <span className="text-[#F3E3A1]">bubbles made better.</span>
          </p>
        </div>
        <ImageDisplay imageURLs={imageURLs} altText="bubbl Brand Image" />
      </div>
    </section>
  );
};

export default Bubbl;
