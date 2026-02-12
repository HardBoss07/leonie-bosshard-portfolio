import React from "react";
import Headshot from "../UI/Headshot";
import { Download } from "iconoir-react";

const About = () => {
    return (
        <section className="w-full py-20 px-6 md:px-12 bg-background">
            <div className="max-w-7xl mx-auto">
                {/* Section Header */}
                <div className="flex flex-col items-center mb-16 space-y-2">
                    <h2 className="text-4xl md:text-5xl font-bold text-primary-accent">
                        About Me
                    </h2>
                    <h3 className="text-xl text-neutral-400 font-medium">
                        Intermedia Student, Photographer
                    </h3>
                </div>

                {/* Main Content Grid */}
                <div className="flex flex-col lg:flex-row items-start items-center justify-center gap-12 lg:gap-20">

                    {/* Left Column: Headshot */}
                    <div className="flex-shrink-0 mx-auto lg:mx-0">
                        {/* I increased the size here to match the design reference.
                           The aspect ratio is slightly taller (h-96) to emphasize the 'arch' shape.
                        */}
                        <Headshot
                            topLeft
                            topRight
                            className="w-80 h-96 md:w-[26rem] md:h-[32rem] shadow-2xl"
                        />
                    </div>

                    {/* Right Column: Text & Button */}
                    <div className="flex flex-col gap-8 max-w-2xl">
                        <p className="text-lg text-neutral-300 leading-loose text-justify">
                            A software engineer, the modern-day architect of digital realms,
                            navigates the ethereal landscapes of code, sculpting intangible
                            structures that shape our technological world. With fingers poised over
                            keyboards like virtuoso pianists, they compose symphonies of logic,
                            their minds a labyrinth of algorithms and solutions. Their canvas is a
                            screen, a vast expanse where lines of code dance in intricate patterns,
                            weaving the fabric of programs and applications. Each keystroke is a
                            brushstroke, crafting intricate architectures and breathing life into
                            innovative designs. In this digital atelier, they don the mantle of problem
                            solvers, confronting bugs and glitches like valiant knights in an ever-
                            evolving quest for perfection.
                        </p>

                        {/* Action Button */}
                        <div className="flex justify-center lg:justify-start pt-2">
                            <button className="btn-primary gap-3">
                                <Download className="w-6 h-6" strokeWidth={2} />
                                <span>Download CV</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;