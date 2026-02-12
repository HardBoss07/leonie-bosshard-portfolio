import Image from "next/image";
import { cn } from "@/lib/utils/cn"; // Assuming you're using the same cn utility as before
import { HeadshotProps } from "@/types/headshot";

const Headshot = ({
    topLeft,
    topRight,
    bottomLeft,
    bottomRight,
    className,
}: HeadshotProps) => {
    return (
        <div className={cn(
            "relative overflow-hidden",
            // Default small rounding vs full rounding logic
            topLeft ? "rounded-tl-full" : "rounded-tl-md",
            topRight ? "rounded-tr-full" : "rounded-tr-md",
            bottomLeft ? "rounded-bl-full" : "rounded-bl-xl",
            bottomRight ? "rounded-br-full" : "rounded-br-xl",
            className)}>
            <Image
                src="/images/headshot.png"
                alt="Headshot"
                fill
                priority
                className="object-cover transition-all duration-300 bg-neutral-800"
            />
        </div>
    );
};

export default Headshot;