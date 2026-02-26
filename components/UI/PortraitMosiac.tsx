import Image from "next/image";
import { portraitImages } from "@/lib/images/portraitImages";

export default function PortraitMosaic() {
  return (
    <div className="flex flex-col gap-4 w-full max-w-5xl mx-auto p-4">
      <div className="grid grid-cols-2 gap-4">
        <div className="relative aspect-square overflow-hidden">
          <Image
            src={portraitImages[0].src}
            alt={portraitImages[0].alt}
            fill
            className="object-cover"
          />
        </div>
        <div className="relative aspect-square overflow-hidden">
          <Image
            src={portraitImages[1].src}
            alt={portraitImages[1].alt}
            fill
            className="object-cover"
          />
        </div>
      </div>

      <div
        className="relative w-full overflow-hiddeng"
        style={{
          aspectRatio: `${portraitImages[2].w} / ${portraitImages[2].h}`,
        }}
      >
        <Image
          src={portraitImages[2].src}
          alt={portraitImages[2].alt}
          fill
          className="object-cover"
        />
      </div>

      <div className="flex gap-4 w-full">
        <div
          className="relative overflow-hiddeng"
          style={{
            flex: `${portraitImages[3].w / portraitImages[3].h} 1 0%`,
            aspectRatio: `${portraitImages[3].w} / ${portraitImages[3].h}`,
          }}
        >
          <Image
            src={portraitImages[3].src}
            alt={portraitImages[3].alt}
            fill
            className="object-cover"
          />
        </div>

        <div
          className="relative overflow-hiddeng"
          style={{
            flex: `${portraitImages[4].w / portraitImages[4].h} 1 0%`,
            aspectRatio: `${portraitImages[4].w} / ${portraitImages[4].h}`,
          }}
        >
          <Image
            src={portraitImages[4].src}
            alt={portraitImages[4].alt}
            fill
            className="object-cover"
          />
        </div>
      </div>
    </div>
  );
}
