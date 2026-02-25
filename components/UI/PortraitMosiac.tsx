import Image from "next/image";
import { IMAGE_PREFIX } from "@/lib/constants/imagePrefix";

const images = [
  {
    src: `${IMAGE_PREFIX[4]}portrait_photography_1_2296x2296.png`,
    alt: "Portrait 1",
    w: 2296,
    h: 2296,
  },
  {
    src: `${IMAGE_PREFIX[4]}portrait_photography_2_2296x2296.png`,
    alt: "Portrait 2",
    w: 2296,
    h: 2296,
  },
  {
    src: `${IMAGE_PREFIX[4]}portrait_photography_3_3843x2702.png`,
    alt: "Portrait 3",
    w: 3843,
    h: 2702,
  },
  {
    src: `${IMAGE_PREFIX[4]}portrait_photography_4_2873x3370.png`,
    alt: "Portrait 4",
    w: 2873,
    h: 3370,
  },
  {
    src: `${IMAGE_PREFIX[4]}portrait_photography_5_3170x4795.png`,
    alt: "Portrait 5",
    w: 3170,
    h: 4795,
  },
];

export default function PortraitMosaic() {
  return (
    <div className="flex flex-col gap-4 w-full max-w-5xl mx-auto p-4">
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
        style={{ aspectRatio: `${images[2].w} / ${images[2].h}` }}
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
