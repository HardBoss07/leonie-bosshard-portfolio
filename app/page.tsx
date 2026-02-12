"use client"
import IntroPage from "@/components/Pages/IntroPage";
import Projects from "@/components/projects/Projects";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import SkillGroup from "@/components/skills/SkillGroup";
import Headshot from "@/components/UI/Headshot";

export default function Home() {
    return (
        <div className="min-h-screen bg-background text-primary-text"> {/* Overall page background and text color */}
            <Header />
            <IntroPage />
            <SkillGroup />
            <Projects />
            <Footer />
            <Headshot topLeft topRight className="w-64 h-64"/>

            <Headshot topLeft topRight bottomLeft bottomRight className="w-64 h-64"/>

        </div>
    );
}
