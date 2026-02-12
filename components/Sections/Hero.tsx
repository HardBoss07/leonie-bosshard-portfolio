import React from "react";
import ButtonComponent from "@/components/UI/ButtonComponent";
import Headshot from "../UI/Headshot";

export default function Hero() {
    const contactMe = () => console.log("Contacted!");
    const downloadCV = () => console.log("Downloaded CV");

    return (
        <section className="relative min-h-[90vh] flex items-center px-8 md:px-16 overflow-hidden">

            <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between gap-12 relative">

                {/* LEFT SIDE: TEXT & BUTTONS */}
                <div className="flex flex-col gap-1 z-10 max-w-2xl">
                    <h4 className="text-xl md:text-2xl text-[#656565] font-semibold mb-1">
                        Hi I am
                    </h4>
                    <h3 className="text-3xl md:text-4xl text-primary-text font-bold">
                        Leonie Bosshard
                    </h3>

                    <h1 className="leading-tight mb-8 bg-gradient-to-r from-[#FF0A54] via-[#FF5C93] to-[#FF0A54] bg-clip-text text-transparent">
                        Design Portfolio
                    </h1>

                    <div className="flex flex-row gap-6 items-center">
                        <ButtonComponent
                            text="Contact me"
                            style="btn-primary"
                            onClick={contactMe}
                        />
                        <ButtonComponent
                            text="Download CV"
                            style="btn-outline"
                            onClick={downloadCV}
                        />
                    </div>
                </div>

                {/* RIGHT SIDE: HEADSHOT */}
                <div className="relative">
                    <Headshot
                        topLeft
                        topRight
                        bottomLeft
                        bottomRight
                        className="w-80 h-80 md:w-[450px] md:h-[450px] lg:w-[500px] lg:h-[500px]"
                    />
                </div>
            </div>
        </section>
    );
}