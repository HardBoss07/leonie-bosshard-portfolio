import { IMAGE_PREFIX as IP } from "@/lib/constants/imagePrefix";
import ImageDisplay from "@/components/UI/projects/ImageDisplay";

const ReDentKit = () => {
  const imageURLs: string[] = [
    `${IP[9]}redent_kit_1_4096x2731.png`,
    `${IP[9]}redent_kit_2_4096x2725.png`,
    `${IP[9]}redent_kit_3_4096x4064.png`,
    `${IP[9]}redent_kit_4_4096x2731.png`,
    `${IP[9]}redent_kit_5_4096x2731.png`,
    `${IP[9]}redent_kit_6_4096x2731.png`,
  ];

  return (
    <section id="redent-kit" className="section-padding flex items-center min-h-screen py-20">
      <div className="page-container flex flex-col items-center justify-between gap-12">
        <div className="flex flex-col gap-1 z-10 w-full text-center lg:text-left items-center lg:items-start">
          <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-8 bg-gradient-to-r from-[#FF0A54] via-[#FF5C93] to-[#FF0A54] bg-clip-text text-transparent">
            Analoge Projekte
          </h1>
          <h2 className="text-primary-accent text-4xl font-bold mb-6">
            Re:Dent Kit
          </h2>

          <div className="text-justify max-w-4xl flex flex-col gap-4 text-lg leading-relaxed">
            <p>
              Die Verpackung entstand im Rahmen des Projekts Regenarrativ im Eco
              Design Lab und versteht sich nicht als blosse Hülle, sondern als
              aktiver Bestandteil eines regenerativen Produktsystems.
              Ausgangspunkt war die Frage, wie Verpackung so gestaltet werden
              kann, dass sie nach der Nutzung nicht zu Abfall wird, sondern in
              einen natürlichen Kreislauf übergeht.
            </p>
            <p>
              Zentrales Element ist selbst geschöpftes Papier, das mit Blumen
              und Kräutersamen versehen wurde. Nach seiner informativen Funktion
              kann es eingepflanzt werden und wird Teil eines
              Wachstumsprozesses. Die Pflanzen stehen in direktem Bezug zum
              Mundwasser des Kits, dessen Herstellung über eine analoge
              Anleitung in Form eines Rezepts vermittelt wird. So verbindet das
              Konzept Produkt, Ritual und ökologisches Bewusstsein.
            </p>
            <p>
              Gestalterisch kombiniert das Projekt analoge und digitale
              Prozesse. Gelaserte Holzstempel wurden von Hand mit neongrüner
              Siebdruckfarbe gedruckt, wodurch jedes Exemplar einzigartig ist.
              Makro Scans von Blättern und Holzstrukturen wurden gerastert und
              als grafische Elemente eingesetzt. Transparentpapier und
              Kunststofffolie schaffen zusätzliche Materialkontraste und machen
              den Spannungsraum zwischen Natur und Industrie sichtbar.
            </p>
            <p>
              Alle Printprodukte basieren auf einem einheitlichen 3x3 Raster,
              das als modulares Ordnungssystem dient und auch die Aufteilung des
              Packaging strukturiert. Typografisch entsteht ein bewusster
              Kontrast zwischen der rasterbasierten Displayschrift Hofmann und
              der sachlichen ABC Favorit Mono. Insgesamt bewegt sich das
              visuelle Konzept zwischen Materialität und digitaler Klarheit und
              macht regenerative Kreisläufe gestalterisch erfahrbar.
            </p>
          </div>

          <h2 className="text-primary-accent text-4xl font-bold mt-16 mb-10">
            Resultate:
          </h2>

          <ImageDisplay imageURLs={imageURLs} altText="Re:Dent Kit Image" />
        </div>
      </div>
    </section>
  );
};

export default ReDentKit;
