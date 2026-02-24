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
    <section id="redent-app" className="section-padding flex items-center min-h-screen py-20">
      <div className="page-container flex flex-col items-center justify-between gap-12">
        <div className="flex flex-col gap-1 z-10 w-full text-center lg:text-left items-center lg:items-start">
          <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-8 bg-gradient-to-r from-[#FF0A54] via-[#FF5C93] to-[#FF0A54] bg-clip-text text-transparent">
            UX / UI Interface
          </h1>
          <h2 className="text-primary-accent text-4xl font-bold mb-6">
            Re:Dent App
          </h2>

          <div className="text-justify max-w-4xl flex flex-col gap-4 text-lg leading-relaxed">
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

          <h2 className="text-primary-accent text-4xl font-bold mt-16 mb-10">
            Resultate:
          </h2>

          <ImageDisplay imageURLs={imageURLs} altText="Re:Dent App Image" />
        </div>
      </div>
    </section>
  );
};

export default ReDentApp;
