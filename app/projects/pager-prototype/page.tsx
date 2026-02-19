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
    <section className="section-padding flex items-center min-h-screen py-20">
      <div className="page-container flex flex-col items-center justify-between gap-12">
        <div className="flex flex-col gap-1 z-10 w-full text-center lg:text-left items-center lg:items-start">
          <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-8 bg-gradient-to-r from-[#FF0A54] via-[#FF5C93] to-[#FF0A54] bg-clip-text text-transparent">
            UI / UX Design
          </h1>
          <h2 className="text-primary-accent text-4xl font-bold mb-6">
            Pager Prototype
          </h2>

          <div className="text-justify max-w-4xl flex flex-col gap-4 text-lg leading-relaxed">
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

          <h2 className="text-primary-accent text-4xl font-bold mt-16 mb-10">
            Results:
          </h2>
          <ImageDisplay imageURLs={imageURLs} altText="Product Photograph" />
        </div>
      </div>
    </section>
  );
};

export default PagerPrototype;
