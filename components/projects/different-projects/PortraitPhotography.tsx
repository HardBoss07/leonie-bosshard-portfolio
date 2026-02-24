import { IMAGE_PREFIX as IP } from "@/lib/constants/imagePrefix";
import ImageDisplay from "@/components/UI/projects/ImageDisplay";

const PortraitPhotography = () => {
  const imageURLs: string[] = [
    `${IP[4]}portrait_photography_1_2296x2296.png`,
    `${IP[4]}portrait_photography_2_2296x2296.png`,
    `${IP[4]}portrait_photography_3_3843x2702.png`,
    `${IP[4]}portrait_photography_4_2873x3370.png`,
    `${IP[4]}portrait_photography_5_3170x4795.png`,
  ];

  return (
    <section id="portrait-photography" className="section-padding flex items-center min-h-screen py-20">
      <div className="page-container flex flex-col items-center justify-between gap-12">
        <div className="flex flex-col gap-1 z-10 w-full text-center lg:text-left items-center lg:items-start">
          <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-8 bg-gradient-to-r from-[#FF0A54] via-[#FF5C93] to-[#FF0A54] bg-clip-text text-transparent">
            Fotografie
          </h1>
          <h2 className="text-primary-accent text-4xl font-bold mb-6">
            Portraitfotograpfie
          </h2>

          <div className="text-justify max-w-4xl flex flex-col gap-4 text-lg leading-relaxed">
            <p>
              Die Portraitfotografien entstanden mit dem Ziel, die
              Persönlichkeit und Individualität der dargestellten Personen
              authentisch und ästhetisch festzuhalten. Dabei wurde sowohl mit
              Licht und Farben experimentiert als auch bewusst auf schlichte,
              klassische Portraits im Freien gesetzt, die durch Natürlichkeit
              und Ruhe überzeugen.
            </p>
            <p>
              Durch den Einsatz von farbigem Kunstlicht im Studio sowie
              natürlichem Tageslicht im Außenbereich entstanden unterschiedliche
              Stimmungen und Bildwirkungen. Intensive Farbkontraste erzeugen
              ausdrucksstarke, moderne Aufnahmen, während weiches Sonnenlicht
              und reduzierte Kompositionen zeitlose und unaufdringliche
              Portraits ermöglichen.
            </p>
            <p>
              Die Wahl der Locations und Hintergründe erfolgte gezielt, um die
              jeweilige Person zu unterstützen, ohne von ihr abzulenken.
              Architektur, Landschaft und urbane Elemente wurden bewusst in die
              Gestaltung einbezogen und verleihen den Bildern Tiefe und Kontext.
              Der Fokus liegt dabei stets auf dem Gesichtsausdruck und der
              Körpersprache.
            </p>
            <p>
              Ziel der Aufnahmen war es, vielseitige und authentische Portraits
              zu schaffen, die sowohl experimentelle als auch klassische Ansätze
              verbinden und den individuellen Charakter der Personen sichtbar
              machen.
            </p>
          </div>

          <h2 className="text-primary-accent text-4xl font-bold mt-16 mb-10">
            Resultate:
          </h2>
          <ImageDisplay imageURLs={imageURLs} altText="Portrait Photograph" />
        </div>
      </div>
    </section>
  );
};

export default PortraitPhotography;
