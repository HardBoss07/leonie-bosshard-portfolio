import { IMAGE_PREFIX as IP } from "@/lib/constants/imagePrefix";
import ImageDisplay from "@/components/UI/projects/ImageDisplay";

const PagerPrototype = () => {
  const imageURLs: string[] = [
    `${IP[7]}pager_prototype_1_1198x804.png`,
    `${IP[7]}pager_prototype_2_1278x856.png`,
    `${IP[7]}pager_prototype_3_1208x810.png`,
    `${IP[7]}pager_prototype_4_1208x808.png`,
  ];

  return (
    <section id="pager-prototype">
      <div className="project-container">
        <div className="page-content">
          <h2> Pager Prototyp</h2>

          <div className="project-text">
            <p>
              Das Projekt entstand im Rahmen eines UX/UI-Designkurses und
              beschäftigte sich mit der Neugestaltung eines Feuerwehrpagers.
              Ziel war es, ausschliesslich Anpassungen an der bestehenden
              Hardware vorzunehmen, ohne in die vorhandenen technischen Systeme
              einzugreifen. Dadurch lag der Fokus besonders auf der optimalen
              Nutzung und Gestaltung der vorhandenen Strukturen.
            </p>
            <p>
              Der Entwurfsprozess basierte auf umfangreichen Recherchen,
              zahlreichen Interviews mit Nutzer:innen sowie der Entwicklung
              verschiedener Prototypen. Diese wurden in mehreren Testphasen
              erprobt und kontinuierlich überarbeitet. Auf diese Weise konnten
              Erkenntnisse aus der Praxis direkt in die Gestaltung einfließen.
              Im Mittelpunkt stand dabei stets die User Experience sowie die
              realen Anforderungen und Abläufe im Einsatzalltag.
            </p>
            <p>
              Zentrale Designentscheidungen wurden insbesondere aus der Analyse
              der Nutzung des Pagers abgeleitet, der eine wichtige Rolle im
              Arbeitsalltag der Feuerwehr spielt. Ziel war es, eine einfache,
              schnelle und intuitive Bedienung zu ermöglichen. Gleichzeitig
              wurde auf ein zurückhaltendes und funktionales Design geachtet,
              das die Nutzer:innen unterstützt, Ablenkungen vermeidet und die
              Effizienz im Einsatz erhöht.
            </p>
          </div>

          <h2> Resultate:</h2>
          <ImageDisplay imageURLs={imageURLs} altText="Product Photograph" />
        </div>
      </div>
    </section>
  );
};

export default PagerPrototype;
