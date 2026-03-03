import BackButton from "@/components/UI/BackButton";
import ImageDisplay from "@/components/UI/projects/ImageDisplay";
import { ProjectProps } from "@/types/project";

const ProjectTemplate = ({
  id,
  header1,
  header2,
  projectTexts,
  images,
}: ProjectProps) => {
  return (
    <section id={id}>
      <div className="project-container">
        <div className="project-header-section">
          {/* If header1 exists, show BackButton and the h1 title */}
          {header1 && (
            <>
              <BackButton />
              <h1 className="project-category">{header1}</h1>
            </>
          )}

          <h2 className="project-title">{header2}</h2>

          <div className="project-text">
            {projectTexts.map((text, index) => (
              <p key={`${id}-text-${index}`}>{text}</p>
            ))}
          </div>

          <ImageDisplay images={images} />
        </div>
      </div>
    </section>
  );
};

export default ProjectTemplate;
