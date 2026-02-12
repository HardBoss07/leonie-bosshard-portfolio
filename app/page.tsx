"use client"
import Hero from "@/components/Sections/Hero";
import Projects from "@/components/Sections/Projects";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import SkillGroup from "@/components/skills/SkillGroup";
import About from "@/components/Sections/About";

export default function Home() {
    return (
        <div className="min-h-screen bg-background text-primary-text"> {/* Overall page background and text color */}
            <Header />
            <Hero />
            <About />
            <SkillGroup />
            <Projects />
            <Footer />
        </div>
    );
}
