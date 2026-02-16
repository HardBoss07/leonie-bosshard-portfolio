"use client";
import Hero from "@/components/Sections/Hero";
import Projects from "@/components/Sections/Projects";
import SkillGroup from "@/components/skills/SkillGroup";
import About from "@/components/Sections/About";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <SkillGroup />
      <Projects />
    </main>
  );
}
