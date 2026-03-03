import Image from "next/image";
import { projectImages } from "@/lib/images";

export default function PortraitMosaic() {
  const images = projectImages.portrait;
  return (
    <div className="mt-12 flex flex-col gap-4 w-full max-w-5xl mx-auto p-4">
      <div className="grid grid-cols-2 gap-4">
        <div className="relative aspect-square overflow-hidden">
          <Image
            src={images[0].src}
            alt={images[0].alt}
            fill
            className="object-cover"
          />
        </div>
        <div className="relative aspect-square overflow-hidden">
          <Image
            src={images[1].src}
            alt={images[1].alt}
            fill
            className="object-cover"
          />
        </div>
      </div>

      <div
        className="relative w-full overflow-hiddeng"
        style={{
          aspectRatio: `${images[2].w} / ${images[2].h}`,
        }}
      >
        <Image
          src={images[2].src}
          alt={images[2].alt}
          fill
          className="object-cover"
        />
      </div>

      <div className="flex gap-4 w-full">
        <div
          className="relative overflow-hiddeng"
          style={{
            flex: `${images[3].w / images[3].h} 1 0%`,
            aspectRatio: `${images[3].w} / ${images[3].h}`,
          }}
        >
          <Image
            src={images[3].src}
            alt={images[3].alt}
            fill
            className="object-cover"
          />
        </div>

        <div
          className="relative overflow-hiddeng"
          style={{
            flex: `${images[4].w / images[4].h} 1 0%`,
            aspectRatio: `${images[4].w} / ${images[4].h}`,
          }}
        >
          <Image
            src={images[4].src}
            alt={images[4].alt}
            fill
            className="object-cover"
          />
        </div>
      </div>
    </div>
  );
}
