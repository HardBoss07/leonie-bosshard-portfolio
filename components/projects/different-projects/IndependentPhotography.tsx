import ImageDisplay from "@/components/UI/projects/ImageDisplay";
import { independentPhotographyImages } from "@/lib/images/independentPhotographyImages";

const IndependentPhotography = () => {
  return (
    <section id="independent-photography">
      <div className="project-container">
        <div className="project-header-section">
          <h2> Freie fotografische Arbeiten</h2>

          <div className="project-text">
            <p>
              Die Independentfotografien entstanden mit dem Ziel, die
              Persönlichkeit und Individualität der dargestellten Personen
              authentisch und ästhetisch festzuhalten. Dabei wurde sowohl mit
              Licht und Farben experimentiert als auch bewusst auf schlichte,
              klassische Independents im Freien gesetzt, die durch Natürlichkeit
              und Ruhe überzeugen.
            </p>
            <p>
              Durch den Einsatz von farbigem Kunstlicht im Studio sowie
              natürlichem Tageslicht im Außenbereich entstanden unterschiedliche
              Stimmungen und Bildwirkungen. Intensive Farbkontraste erzeugen
              ausdrucksstarke, moderne Aufnahmen, während weiches Sonnenlicht
              und reduzierte Kompositionen zeitlose und unaufdringliche
              Independents ermöglichen.
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
              Ziel der Aufnahmen war es, vielseitige und authentische
              Independents zu schaffen, die sowohl experimentelle als auch
              klassische Ansätze verbinden und den individuellen Charakter der
              Personen sichtbar machen.
            </p>
          </div>

          <h2>Resultate:</h2>
          <ImageDisplay images={independentPhotographyImages} />
        </div>
      </div>
    </section>
  );
};

export default IndependentPhotography;
