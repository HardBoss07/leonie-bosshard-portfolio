import Headshot from "@/components/UI/Headshot";
import { Download } from "iconoir-react";

const About = () => {
  return (
    <section className="section-padding" id="about">
      <div className="page-container">
        <div className="flex flex-col items-center mb-12 space-y-2">
          <h2 className="text-4xl md:text-5xl font-bold text-primary-accent">
            About Me
          </h2>
          <h3 className="text-xl text-neutral-400 font-medium">
            Intermedia Student, Photographer
          </h3>
        </div>

        <div className="flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-20">
          <div className="flex-shrink-0 mx-auto lg:mx-0">
            <Headshot
              topLeft
              topRight
              className="w-80 h-96 md:w-[26rem] md:h-[32rem] shadow-2xl"
            />
          </div>

          <div className="flex flex-col gap-8 max-w-2xl">
            <div className="text-lg text-primary-text leading-loose text-justify">
              <p>
                Ich bin Intermedia-Studentin an der Fachhochschule Vorarlberg in
                Österreich mit einem besonderen Interesse an visueller
                Kommunikation und Gestaltung. Derzeit verbringe ich mein
                Auslandssemester an der University of Technology Sydney, wo ich
                neue Perspektiven sammle und meine gestalterischen Fähigkeiten
                in einem internationalen Umfeld weiterentwickle.
              </p>
              <p>
                Neben meinem Studium arbeite ich als Fotografin und beschäftige
                mich intensiv damit, wie Bilder wirken und Geschichten
                vermitteln können.
              </p>
              <p>
                Ich probiere gerne neue Dinge aus, von digitalen Anwendungen bis
                hin zu experimentellen, analogen Konzepten. Mein Fokus liegt
                darauf, kreative Ideen strukturiert umzusetzen und
                unterschiedliche Medien sinnvoll miteinander zu verbinden.
              </p>
              <p>
                In meiner Arbeit lege ich Wert auf Offenheit, Neugier und eine
                strukturierte Herangehensweise. Ich arbeite gerne im Austausch
                mit anderen und freue mich über neue Impulse und kreative
                Zusammenarbeit.
              </p>
              <p>
                Ich bin immer offen für spannende Projekte, Kollaborationen und
                neue Herausforderungen.
              </p>
            </div>

            {/*<div className="flex justify-center lg:justify-start pt-2">
              <button className="btn-primary gap-3">
                <Download className="w-6 h-6" strokeWidth={2} />
                <span>Download CV</span>
              </button>
            </div>*/}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
