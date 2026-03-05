import ButtonComponent from "@/components/UI/ButtonComponent";
import Headshot from "@/components/UI/Headshot";

export default function Hero() {
  const contactMe = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    } else {
      window.location.hash = "#contact";
    }
  };

  const downloadCV = () => {
    const cvPath = "/docs/CV_LeonieBosshard.pdf";

    const link = document.createElement("a");
    link.href = cvPath;
    link.setAttribute("download", "CV_LeonieBosshard.pdf");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section
      className="section-padding flex items-center min-h-[70vh] lg:min-h-[80vh]"
      id="home"
    >
      <div className="page-container flex flex-col lg:flex-row items-center justify-between gap-12">
        <div className="flex flex-col gap-1 z-10 max-w-2xl text-center lg:text-left items-center lg:items-start">
          <h4 className="text-xl md:text-2xl text-[#656565] font-semibold mb-1">
            Hi Ich bin
          </h4>
          <h3 className="text-3xl md:text-4xl text-primary-text font-bold">
            Leonie Bosshard
          </h3>

          <h1 className="leading-tight mb-8 bg-gradient-to-r from-[#FF0A54] via-[#FF5C93] to-[#FF0A54] bg-clip-text text-transparent pr-2 pb-1">
            {" "}
            Design Portfolio
          </h1>

          <div className="flex flex-row gap-4 sm:gap-6 items-center">
            <ButtonComponent
              text="Kontakt"
              style="btn-primary"
              onClick={contactMe}
            />
            <ButtonComponent
              text="Lebenslauf"
              style="btn-outline"
              onClick={downloadCV}
            />
          </div>
        </div>

        <div className="relative">
          <Headshot
            topLeft
            topRight
            bottomLeft
            bottomRight
            className="w-80 h-80 md:w-[28.125rem] md:h-[28.125rem] lg:w-[31.25rem] lg:h-[31.25rem]"
          />
        </div>
      </div>
    </section>
  );
}
