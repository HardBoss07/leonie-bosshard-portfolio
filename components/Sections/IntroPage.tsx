import React from "react";
import ButtonComponent from "@/components/UI/ButtonComponent";

export default function IntroPage() {
    //TODO add actual navigation to contact
    const contactMe = () => {
        console.log("Contacted!");
    };
    //TODO add actual CV download
    const downloadCV = () => {
        console.log("Downloaded CV");
    };

    return (
        <>
            <div>
                <h4>Hi I am</h4>
                <h3><strong>Leonie Bosshard</strong></h3>
                <h1>Design Portfolio</h1>
                <div className="flex flex-row gap-4 items-center">
                    <ButtonComponent text="Contact me" style="btn-pink-on-white" onClick={contactMe}/>
                    <ButtonComponent text="Download CV" style="btn-grey-on-transparent" onClick={downloadCV}/>
                </div>
            </div>
        </>
    );
}