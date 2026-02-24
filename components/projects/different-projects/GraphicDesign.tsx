import { IMAGE_PREFIX as IP } from "@/lib/constants/imagePrefix";
import ImageDisplay from "@/components/UI/projects/ImageDisplay";

const GraphicDesign = () => {
  const imageURLs: string[] = [
    `${IP[2]}graphic-design_1_842x1191.png`,
    `${IP[2]}graphic-design_2_842x1191.png`,
    `${IP[2]}graphic-design_3_842x1191.png`,
  ];

  return (
    <section className="section-padding flex items-center min-h-screen py-20">
      <div className="page-container flex flex-col items-center justify-between gap-12">
        <div className="flex flex-col gap-1 z-10 w-full text-center lg:text-left items-center lg:items-start">
          <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-8 bg-gradient-to-r from-[#FF0A54] via-[#FF5C93] to-[#FF0A54] bg-clip-text text-transparent">
            Grafik Design
          </h1>

          <h2 className="text-primary-accent text-4xl font-bold mb-6">
            Plakate
          </h2>

          <div className="text-justify max-w-4xl flex flex-col gap-4 text-lg leading-relaxed">
            <p>
              Die Produktfotografien entstanden mit dem Ziel, die jeweiligen
              Markenidentitäten und Produkteigenschaften visuell hervorzuheben.
              Durch den gezielten Einsatz von Licht, Hintergrund und Komposition
              sollte die Wirkung der Produkte verstärkt und ihre Besonderheiten
              in den Fokus gerückt werden.
            </p>
            <p>
              Bei der Gestaltung wurde bewusst mit klaren, reduzierten
              Hintergründen gearbeitet, um Ablenkungen zu vermeiden und die
              Aufmerksamkeit vollständig auf die Produkte zu lenken. Die
              Verwendung von Reflexionen und Wassertropfen unterstützt dabei den
              Eindruck von Frische, Qualität und Hochwertigkeit. Gleichzeitig
              verleiht dies den Bildern eine lebendige und dynamische
              Atmosphäre.
            </p>
            <p>
              Die Farbgebung und das Licht wurden an die jeweiligen Produkte
              angepasst. Während dunkle Hintergründe und kontrastreiche
              Beleuchtung die Intensität und Eleganz der Verpackungen betonen,
              sorgen helle Flächen und natürliche Elemente wie Zitronen für eine
              frische und authentische Wirkung. Dadurch wird der Charakter der
              einzelnen Produkte visuell unterstrichen.
            </p>
            <p>
              Ziel der Fotoreihe war es, ansprechende und professionelle
              Produktbilder zu schaffen, die sowohl ästhetisch überzeugen als
              auch die Markenbotschaft klar kommunizieren. Die bewusste
              Inszenierung unterstützt die Wiedererkennbarkeit der Produkte und
              steigert ihre visuelle Präsenz in digitalen und gedruckten Medien.
            </p>
          </div>

          <h2 className="text-primary-accent text-4xl font-bold mt-16 mb-10">
            Resultate:
          </h2>
          <ImageDisplay imageURLs={imageURLs} altText="Grafik Design Poster" />
        </div>
      </div>
    </section>
  );
};

export default GraphicDesign;
