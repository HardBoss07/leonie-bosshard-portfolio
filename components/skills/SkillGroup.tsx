import { SkillIndicator } from "@/components/skills";

const SkillGroup = () => {
  return (
    <section className="section-padding">
      <div className="page-container">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-8">
          <SkillIndicator icon="Figma" skill={65} />
          <SkillIndicator icon="Adobe InDesign" skill={80} />
          <SkillIndicator icon="Adobe Photoshop" skill={65} />
          <SkillIndicator icon="Adobe Illustrator" skill={75} />
          <SkillIndicator icon="Adobe Premiere" skill={70} />
          <SkillIndicator icon="Adobe Lightroom" skill={85} />
        </div>
      </div>
    </section>
  );
};

export default SkillGroup;
