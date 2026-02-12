"use client"
import IntroPage from "@/components/Pages/IntroPage";
import Projects from "@/components/projects/Projects";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import SkillGroup from "@/components/skills/SkillGroup";

export default function Home() {
    return (
        <div className="min-h-screen bg-background text-primary-text"> {/* Overall page background and text color */}
            <Header />
            <IntroPage />
            <SkillGroup />
            <Projects />
            <Footer />
        </div>
    );
}
