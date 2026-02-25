import { IMAGE_PREFIX as IP } from "@/lib/constants/imagePrefix";
import ImageDisplay from "@/components/UI/projects/ImageDisplay";

const KaosKomplett = () => {
  const imageURLs: string[] = [
    `${IP[6]}kaos_komplett_1_2048x1365.png`,
    `${IP[6]}kaos_komplett_2_2048x1365.png`,
    `${IP[6]}kaos_komplett_3_2048x1365.png`,
    `${IP[6]}kaos_komplett_4_2481x1654.png`,
  ];

  return (
    <section id="kaos-komplett">
      <div className="project-container">
        <div className="page-content">
          <h2> Kaos Komplett</h2>

          <div className="project-text">
            <p>
              Das Kartenspiel KaosKomplett entstand im Rahmen des Moduls
              Gestaltungsgrundlagen und verbindet die Vermittlung von
              Naturwissen mit der Förderung mentaler Kombinationsfähigkeit. Ziel
              war es, ein analoges System zu entwerfen, bei dem das Erlernen von
              Tierbezeichnungen, Spuren und Habitaten beiläufig durch den
              Spielmechanismus funktioniert.
            </p>
            <p>
              Gestalterisch basiert das Projekt auf handgezeichneten
              Illustrationen und einem kohärenten Farbschema, das eine schnelle
              visuelle Einordnung der Kategorien ermöglicht. Die Ästhetik setzt
              auf abgerundete Formen und eine hochwertige Haptik, um die
              spielerische Interaktion zwischen 3 bis 6 Personen zu
              unterstützen.
            </p>
            <p>
              In der Produktion wurde auf Langlebigkeit gesetzt: 300 g/m²
              starkes Papier für Karten und Verpackung bildet die Basis für das
              hochwertige Produktsystem. Durch das modulare Prinzip der "TRIOs"
              bleibt das Konzept zudem beliebig erweiterbar und zukunftsfähig.
            </p>
          </div>

          <h2> Resultate:</h2>
          <ImageDisplay imageURLs={imageURLs} altText="Kaos Komplett Image" />
        </div>
      </div>
    </section>
  );
};

export default KaosKomplett;
