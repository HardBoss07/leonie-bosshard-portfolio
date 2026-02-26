import Image from "next/image";
import { redentKitImages } from "@/lib/images/redentKitImages";

export default function ReDentKitImages() {
  return (
    <div className="flex flex-col gap-4 w-full max-w-6xl mx-auto p-4">
      <div className="flex gap-4 w-full">
        <div
          className="relative overflow-hidden"
          style={{ flex: `${redentKitImages[0].w / redentKitImages[0].h} 1 0%`, aspectRatio: `${redentKitImages[0].w}/${redentKitImages[0].h}` }}
        >
          <Image src={redentKitImages[0].src} alt={redentKitImages[0].alt} fill className="object-cover" />
        </div>
        <div
          className="relative overflow-hidden"
          style={{ flex: `${redentKitImages[1].w / redentKitImages[1].h} 1 0%`, aspectRatio: `${redentKitImages[1].w}/${redentKitImages[1].h}` }}
        >
          <Image src={redentKitImages[1].src} alt={redentKitImages[1].alt} fill className="object-cover" />
        </div>
      </div>

      <div className="flex gap-4 w-full">
        <div
          className="relative overflow-hidden"
          style={{ flex: `${redentKitImages[2].w / redentKitImages[2].h} 1 0%`, aspectRatio: `${redentKitImages[2].w}/${redentKitImages[2].h}` }}
        >
          <Image src={redentKitImages[2].src} alt={redentKitImages[2].alt} fill className="object-cover" />
        </div>
        <div
          className="relative overflow-hidden"
          style={{ flex: `${redentKitImages[3].w / redentKitImages[3].h} 1 0%`, aspectRatio: `${redentKitImages[3].w}/${redentKitImages[3].h}` }}
        >
          <Image src={redentKitImages[3].src} alt={redentKitImages[3].alt} fill className="object-cover" />
        </div>
      </div>

      <div className="flex gap-4 w-full">
        <div
          className="relative overflow-hidden"
          style={{ flex: `${redentKitImages[4].w / redentKitImages[4].h} 1 0%`, aspectRatio: `${redentKitImages[4].w}/${redentKitImages[4].h}` }}
        >
          <Image src={redentKitImages[4].src} alt={redentKitImages[4].alt} fill className="object-cover" />
        </div>
        <div
          className="relative overflow-hidden"
          style={{ flex: `${redentKitImages[5].w / redentKitImages[5].h} 1 0%`, aspectRatio: `${redentKitImages[5].w}/${redentKitImages[5].h}` }}
        >
          <Image src={redentKitImages[5].src} alt={redentKitImages[5].alt} fill className="object-cover" />
        </div>
      </div>
    </div>
  );
}