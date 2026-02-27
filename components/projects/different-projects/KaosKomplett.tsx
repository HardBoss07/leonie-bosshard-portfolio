import ImageDisplay from "@/components/UI/projects/ImageDisplay";
import { kaosKomplettImages } from "@/lib/images/kaosKomplettImages";

const KaosKomplett = () => {
  return (
    <section id="kaos-komplett">
      <div className="project-container">
        <div className="project-header-section">
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

          <h2></h2>
          <ImageDisplay images={kaosKomplettImages} />
        </div>
      </div>
    </section>
  );
};

export default KaosKomplett;
