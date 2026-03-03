import Poster from "@/components/UI/projects/Poster";
import { projectImages } from "@/lib/images";

const MultiplePosters = () => {
  const images = projectImages.graphicDesign;
  return (
    <div className="mt-12">
      <Poster
        url={images[2].src}
        title="Resonanz"
        text="Das Plakat für das fiktive Techno-Event setzt auf eine reduzierte, kontrastreiche Gestaltung und greift die Ästhetik elektronischer Musik visuell auf. Körnige Strukturen, harte Typografie und gezielte Farbakzente spiegeln die rohe, industrielle Atmosphäre wider. Ziel war es, die Spannung zwischen Kontrolle und Chaos gestalterisch sichtbar zu machen und die Energie des Events zu transportieren."
        alt={images[2].alt}
      />

      <Poster
        url={images[0].src}
        title="Beat Pulse"
        text="Das Festivalplakat kombiniert klare Typografie mit verspielten, weichen Formen und schafft so eine einladende und lebendige Bildsprache. Warme Farben und organische Elemente vermitteln eine offene, sommerliche Stimmung. Die Gestaltung zielt darauf ab, die Vielfalt des Line-ups sowie die entspannte Festivalatmosphäre visuell zu kommunizieren."
        alt={images[0].alt}
      />

      <Poster
        url={images[1].src}
        title="Sydney Festival"
        text="Das Plakat ist eine eigene Interpretation des Sydney Festivals und greift dessen visuelle Sprache auf, interpretiert sie jedoch neu. Fliessende Farbverläufe und weiche Übergänge erzeugen eine dynamische, fast abstrakte Bildwirkung. In Kombination mit prägnanter Typografie entsteht ein modernes Erscheinungsbild, das Kunst, Bewegung und kulturelle Vielfalt widerspiegelt."
        alt={images[1].alt}
      />
    </div>
  );
};

export default MultiplePosters;
