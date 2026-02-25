import Poster from "@/components/UI/projects/Poster";
import { IMAGE_PREFIX as IP } from "@/lib/constants/imagePrefix";

const MultiplePosters = () => {
  const imageURLs: string[] = [
    `${IP[2]}graphic-design_1_842x1191.png`,
    `${IP[2]}graphic-design_2_842x1191.png`,
    `${IP[2]}graphic-design_3_842x1191.png`,
  ];

  return (
    <div className="p-8 m-4">
      <Poster
        url={imageURLs[2]}
        title="Resonanz"
        text="Das Plakat für das fiktive Techno-Event setzt auf eine reduzierte, kontrastreiche Gestaltung und greift die Ästhetik elektronischer Musik visuell auf. Körnige Strukturen, harte Typografie und gezielte Farbakzente spiegeln die rohe, industrielle Atmosphäre wider. Ziel war es, die Spannung zwischen Kontrolle und Chaos gestalterisch sichtbar zu machen und die Energie des Events zu transportieren."
        alt="Resonanz Poster"
      />

      <Poster
        url={imageURLs[0]}
        title="Beat Pulse"
        text="Das Festivalplakat kombiniert klare Typografie mit verspielten, weichen Formen und schafft so eine einladende und lebendige Bildsprache. Warme Farben und organische Elemente vermitteln eine offene, sommerliche Stimmung. Die Gestaltung zielt darauf ab, die Vielfalt des Line-ups sowie die entspannte Festivalatmosphäre visuell zu kommunizieren."
        alt="Beat Pulse Poster"
      />

      <Poster
        url={imageURLs[1]}
        title="Sydney Festival"
        text="Das Plakat ist eine eigene Interpretation des Sydney Festivals und greift dessen visuelle Sprache auf, interpretiert sie jedoch neu. Fliessende Farbverläufe und weiche Übergänge erzeugen eine dynamische, fast abstrakte Bildwirkung. In Kombination mit prägnanter Typografie entsteht ein modernes Erscheinungsbild, das Kunst, Bewegung und kulturelle Vielfalt widerspiegelt."
        alt="Sydney Festival Poster"
      />
    </div>
  );
};

export default MultiplePosters;
