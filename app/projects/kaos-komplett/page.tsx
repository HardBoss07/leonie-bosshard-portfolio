import Image from "next/image";
import { IMAGE_PREFIX as IP } from "@/lib/constants/imagePrefix";

const KaosKomplett = () => {
    const imageURLs: string[] = [
        `${IP[6]}kaos_komplett_1_2048x1365.png`,
        `${IP[6]}kaos_komplett_2_2048x1365.png`,
        `${IP[6]}kaos_komplett_3_2048x1365.png`,
        `${IP[6]}kaos_komplett_4_2481x1654.png`,
    ];

    return (
        <section className="section-padding flex items-center min-h-screen py-20">
            <div className="page-container flex flex-col items-center justify-between gap-12">
                <div className="flex flex-col gap-1 z-10 w-full text-center lg:text-left items-center lg:items-start">
                    <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-8 bg-gradient-to-r from-[#FF0A54] via-[#FF5C93] to-[#FF0A54] bg-clip-text text-transparent">
                        Analog Design
                    </h1>
                    <h2 className="text-primary-accent text-4xl font-bold mb-6">
                        Kaos Komplett
                    </h2>

                    <div className="text-justify max-w-4xl flex flex-col gap-4 text-lg leading-relaxed">
                        <p>
                            Das Kartenspiel KaosKomplett entstand im Rahmen des Moduls Gestaltungsgrundlagen und verbindet die Vermittlung von Naturwissen mit der Förderung mentaler Kombinationsfähigkeit. Ziel war es, ein analoges System zu entwerfen, bei dem das Erlernen von Tierbezeichnungen, Spuren und Habitaten beiläufig durch den Spielmechanismus funktioniert.
                        </p>
                        <p>
                            Gestalterisch basiert das Projekt auf handgezeichneten Illustrationen und einem kohärenten Farbschema, das eine schnelle visuelle Einordnung der Kategorien ermöglicht. Die Ästhetik setzt auf abgerundete Formen und eine hochwertige Haptik, um die spielerische Interaktion zwischen 3 bis 6 Personen zu unterstützen.
                        </p>
                        <p>
                            In der Produktion wurde auf Langlebigkeit gesetzt: 300 g/m² starkes Papier für Karten und Verpackung bildet die Basis für das hochwertige Produktsystem. Durch das modulare Prinzip der "TRIOs" bleibt das Konzept zudem beliebig erweiterbar und zukunftsfähig.
                        </p>
                    </div>

                    <h2 className="text-primary-accent text-4xl font-bold mt-16 mb-10">
                        Results:
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
                        {imageURLs.map((url, index) => (
                            <div
                                key={url}
                                className="relative w-full aspect-[842/1191] overflow-hidden rounded-xl shadow-2xl transition-transform hover:scale-[1.02]"
                            >
                                <Image
                                    src={url}
                                    alt={`Kaos Komplett Image ${index + 1}`}
                                    fill
                                    priority={index === 0}
                                    className="object-cover"
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default KaosKomplett;