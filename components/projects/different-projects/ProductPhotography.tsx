import { IMAGE_PREFIX as IP } from "@/lib/constants/imagePrefix";
import ImageDisplay from "@/components/UI/projects/ImageDisplay";

const ProductPhotography = () => {
  const imageURLs: string[] = [
    `${IP[5]}product_photography_1_3078x4096.png`,
    `${IP[5]}product_photography_2_3317x4096.png`,
    `${IP[5]}product_photography_3_2795x2820.png`,
  ];

  return (
    <section id="product-photography">
      <div className="project-container">
        <div className="page-content">
          <h1>Fotografie</h1>
          <h2>Produktfotografie</h2>

          <div className="project-text">
            <p>
              Die Produktfotografien entstanden mit dem Ziel, die jeweiligen
              Markenidentitäten und Produkteigenschaften visuell hervorzuheben.
              Durch den gezielten Einsatz von Licht, Hintergrund und Komposition
              sollte die Wirkung der Produkte verstärkt und ihre Besonderheiten
              in den Fokus gerückt werden.
            </p>
            <p>
              Bei der Gestaltung wurde bewusst mit klaren, reduzierten
              Hintergründen gearbeitet, um Ablenkungen zu vermeiden und die
              Aufmerksamkeit vollständig auf die Produkte zu lenken. Die
              Verwendung von Reflexionen und Wassertropfen unterstützt dabei den
              Eindruck von Frische, Qualität und Hochwertigkeit. Gleichzeitig
              verleiht dies den Bildern eine lebendige und dynamische
              Atmosphäre.
            </p>
            <p>
              Die Farbgebung und das Licht wurden an die jeweiligen Produkte
              angepasst. Während dunkle Hintergründe und kontrastreiche
              Beleuchtung die Intensität und Eleganz der Verpackungen betonen,
              sorgen helle Flächen und natürliche Elemente wie Zitronen für eine
              frische und authentische Wirkung. Dadurch wird der Charakter der
              einzelnen Produkte visuell unterstrichen.
            </p>
            <p>
              Ziel der Fotoreihe war es, ansprechende und professionelle
              Produktbilder zu schaffen, die sowohl ästhetisch überzeugen als
              auch die Markenbotschaft klar kommunizieren. Die bewusste
              Inszenierung unterstützt die Wiedererkennbarkeit der Produkte und
              steigert ihre visuelle Präsenz in digitalen und gedruckten Medien.
            </p>
          </div>

          <h2>Resultate:</h2>

          <ImageDisplay imageURLs={imageURLs} altText="Produktfotografie" />
        </div>
      </div>
    </section>
  );
};

export default ProductPhotography;
