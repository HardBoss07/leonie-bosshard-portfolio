import Image from "next/image";
import { projectImages } from "@/lib/images";

export default function ReDentKitImages() {
  const images = projectImages.redentKit;
  return (
    <div className="mt-12 flex flex-col gap-4 w-full max-w-6xl mx-auto p-4">
      <div className="flex gap-4 w-full">
        <div
          className="relative overflow-hidden"
          style={{
            flex: `${images[0].w / images[0].h} 1 0%`,
            aspectRatio: `${images[0].w}/${images[0].h}`,
          }}
        >
          <Image
            src={images[0].src}
            alt={images[0].alt}
            fill
            className="object-cover"
          />
        </div>
        <div
          className="relative overflow-hidden"
          style={{
            flex: `${images[1].w / images[1].h} 1 0%`,
            aspectRatio: `${images[1].w}/${images[1].h}`,
          }}
        >
          <Image
            src={images[1].src}
            alt={images[1].alt}
            fill
            className="object-cover"
          />
        </div>
      </div>

      <div className="flex gap-4 w-full">
        <div
          className="relative overflow-hidden"
          style={{
            flex: `${images[2].w / images[2].h} 1 0%`,
            aspectRatio: `${images[2].w}/${images[2].h}`,
          }}
        >
          <Image
            src={images[2].src}
            alt={images[2].alt}
            fill
            className="object-cover"
          />
        </div>
        <div
          className="relative overflow-hidden"
          style={{
            flex: `${images[3].w / images[3].h} 1 0%`,
            aspectRatio: `${images[3].w}/${images[3].h}`,
          }}
        >
          <Image
            src={images[3].src}
            alt={images[3].alt}
            fill
            className="object-cover"
          />
        </div>
      </div>

      <div className="flex gap-4 w-full">
        <div
          className="relative overflow-hidden"
          style={{
            flex: `${images[4].w / images[4].h} 1 0%`,
            aspectRatio: `${images[4].w}/${images[4].h}`,
          }}
        >
          <Image
            src={images[4].src}
            alt={images[4].alt}
            fill
            className="object-cover"
          />
        </div>
        <div
          className="relative overflow-hidden"
          style={{
            flex: `${images[5].w / images[5].h} 1 0%`,
            aspectRatio: `${images[5].w}/${images[5].h}`,
          }}
        >
          <Image
            src={images[5].src}
            alt={images[5].alt}
            fill
            className="object-cover"
          />
        </div>
      </div>
    </div>
  );
}
