import BackButton from "@/components/UI/BackButton";
import PortraitMosaic from "@/components/UI/PortraitMosiac";

const PortraitPhotography = () => {
  return (
    <section id="portrait-photography">
      <div className="project-container">
        <div className="project-header-section">
          <BackButton />
          <h1>Fotografie</h1>

          <h2>Portraitfotograpfie</h2>

          <div className="project-text">
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

          <PortraitMosaic />
        </div>
      </div>
    </section>
  );
};

export default PortraitPhotography;
