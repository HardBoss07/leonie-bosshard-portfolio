"use client";
import Hero from "@/components/Sections/Hero";
import Projects from "@/components/Sections/Projects";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import SkillGroup from "@/components/skills/SkillGroup";
import About from "@/components/Sections/About";

export default function Home() {
  return (
    <main>
      <Header />
      <section id="home">
        <Hero />
      </section>
      <section id="about">
        <About />
        <SkillGroup />
      </section>
      <section id="portfolio">
        <Projects />
      </section>
      <section id="contact">
        <Footer />
      </section>
    </main>
  );
}
