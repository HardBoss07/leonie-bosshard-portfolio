import { SkillIndicator } from "@/components/skills";

const SkillGroup = () => {
    return (
                    <section className="container mx-auto py-16 px-4">
                <h2 className="text-center text-primary-accent text-4xl font-bold mb-10">My Skills</h2>
                <div className="flex flex-wrap justify-center gap-8">
                    <SkillIndicator icon="Figma" skill={65} />
                    <SkillIndicator icon="Adobe InDesign" skill={80} />
                    <SkillIndicator icon="Adobe Photoshop" skill={65} />
                    <SkillIndicator icon="Adobe Illustrator" skill={75} />
                    <SkillIndicator icon="Adobe Premiere" skill={70} />
                    <SkillIndicator icon="Adobe Lightroom" skill={85} />
                </div>
            </section>
    );
}

export default SkillGroup;