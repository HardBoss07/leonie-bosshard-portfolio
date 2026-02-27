import ImageDisplay from "@/components/UI/projects/ImageDisplay";
import { pagerPrototypeImages } from "@/lib/images/pagerPrototypeImages";

const PagerPrototype = () => {
  return (
    <section id="pager-prototype">
      <div className="project-container">
        <div className="project-header-section">
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

          <ImageDisplay images={pagerPrototypeImages} />
        </div>
      </div>
    </section>
  );
};

export default PagerPrototype;
