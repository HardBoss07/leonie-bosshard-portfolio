import BackButton from "@/components/UI/BackButton";
import MultiplePosters from "@/components/UI/projects/MultiplePosters";

const Posters = () => {
  return (
    <section id="posters">
      <div className="project-container">
        <div className="project-header-section">
          <BackButton />
          <h1>Grafik Design</h1>

          <h2>Plakate</h2>

          <div className="project-text">
            <p>
              Die Plakate entstanden im Rahmen freier Gestaltungsprojekte mit
              dem Fokus auf visuelle Kommunikation im Eventkontext. Ziel war es,
              unterschiedliche gestalterische Ansätze zu entwickeln und mit
              Typografie, Farbe und Komposition zu experimentieren. Jedes Plakat
              verfolgt dabei eine eigene visuelle Idee, die die jeweilige
              Stimmung und Ausrichtung der Veranstaltung widerspiegelt.
            </p>
          </div>

          <MultiplePosters />
        </div>
      </div>
    </section>
  );
};

export default Posters;
