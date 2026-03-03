import { ProjectProps } from "@/types/project";
import { redentAppImages } from "@/lib/images/redentAppImages";

export const projectData: Record<string, ProjectProps> = {
  redentApp: {
    id: "redent-app",
    header1: "UX / UI Interface",
    header2: "Re:Dent App",
    projectTexts: [
      "Die App entstand im Fach Eco Design und erweitert unser Konzept der regenerativen Mundhygiene um eine digitale Anwendung für die Zeit nach der Nutzung der Zahnbürste. Sie setzt genau dort an, wo das Produkt eingepflanzt wird, und begleitet anschliessend den Prozess des Pflanzenwachstums.",
      "Ergänzt wird die Anwendung durch einen Wissensbereich, eine Übersicht weiterer Produkte sowie eine Karte mit Orten zum Umpflanzen, für alle, die keinen eigenen Garten haben. In einem Community Bereich können Nutzer:innen die aus ihren Zahnbürsten gewachsenen Blumen teilen und sich austauschen. Zusätzlich lassen sich durch nachhaltige Aufgaben Punkte sammeln, die beim Kauf regenerativer Produkte eingelöst werden können.",
      "Gestalterisch wurde bewusst auf eine helle, weisse Oberfläche verzichtet, da sie zu steril wirkte und dem natürlichen, regenerativen Ansatz widersprach. Stattdessen setzt das Interface auf einen dunklen Hintergrund mit einem leuchtenden Neongrün, das Orientierung bietet und zentrale Interaktionen betont. Unterschiedliche Texturen wie Walnussschalen, Baumrinde und grafische Linien bringen Dynamik ins Design und schaffen eine Verbindung zur Natur, ohne klassisch ökologisch zu erscheinen. Insgesamt bewegt sich das visuelle Konzept gezielt zwischen Naturbezug und moderner digitaler Ästhetik."
    ],
    images: redentAppImages,
  },
};