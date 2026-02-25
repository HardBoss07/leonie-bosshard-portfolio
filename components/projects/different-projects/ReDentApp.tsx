import { IMAGE_PREFIX as IP } from "@/lib/constants/imagePrefix";
import ImageDisplay from "@/components/UI/projects/ImageDisplay";

const ReDentApp = () => {
  const imageURLs: string[] = [
    `${IP[8]}redent_app_1_375x812.png`,
    `${IP[8]}redent_app_2_375x812.png`,
    `${IP[8]}redent_app_3_375x812.png`,
    `${IP[8]}redent_app_4_375x812.png`,
    `${IP[8]}redent_app_5_375x812.png`,
    `${IP[8]}redent_app_6_375x812.png`,
    `${IP[8]}redent_app_7_375x812.png`,
    `${IP[8]}redent_app_8_375x812.png`,
  ];

  return (
    <section id="redent-app">
      <div className="project-container">
        <div className="page-content">
          <h1>UX / UI Interface</h1>
          <h2>Re:Dent App</h2>

          <div className="project-text">
            <p>
              Die App entstand im Fach Eco Design und erweitert unser Konzept
              der regenerativen Mundhygiene um eine digitale Anwendung für die
              Zeit nach der Nutzung der Zahnbürste. Sie setzt genau dort an, wo
              das Produkt eingepflanzt wird, und begleitet anschliessend den
              Prozess des Pflanzenwachstums.
            </p>
            <p>
              Ergänzt wird die Anwendung durch einen Wissensbereich, eine
              Übersicht weiterer Produkte sowie eine Karte mit Orten zum
              Umpflanzen, für alle, die keinen eigenen Garten haben. In einem
              Community Bereich können Nutzer:innen die aus ihren Zahnbürsten
              gewachsenen Blumen teilen und sich austauschen. Zusätzlich lassen
              sich durch nachhaltige Aufgaben Punkte sammeln, die beim Kauf
              regenerativer Produkte eingelöst werden können.
            </p>
            <p>
              Gestalterisch wurde bewusst auf eine helle, weisse Oberfläche
              verzichtet, da sie zu steril wirkte und dem natürlichen,
              regenerativen Ansatz widersprach. Stattdessen setzt das Interface
              auf einen dunklen Hintergrund mit einem leuchtenden Neongrün, das
              Orientierung bietet und zentrale Interaktionen betont.
              Unterschiedliche Texturen wie Walnussschalen, Baumrinde und
              grafische Linien bringen Dynamik ins Design und schaffen eine
              Verbindung zur Natur, ohne klassisch ökologisch zu erscheinen.
              Insgesamt bewegt sich das visuelle Konzept gezielt zwischen
              Naturbezug und moderner digitaler Ästhetik.
            </p>
          </div>

          <h2>Resultate:</h2>

          <ImageDisplay imageURLs={imageURLs} altText="Re:Dent App Image" />
        </div>
      </div>
    </section>
  );
};

export default ReDentApp;
