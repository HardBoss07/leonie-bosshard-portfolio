import Link from "next/link";
import Image from "next/image";

const Header = () => {
    return (
        <header className="flex justify-between items-center px-12 py-10 bg-background relative z-50">
            {/* Logo Area - Using Image for your current placeholder SVG */}
            <div className="flex items-center">
                <Link href="/">
                    <Image
                        src="/icons/logo.svg" // Replace with your actual path
                        alt="Leonie Bosshard Logo"
                        width={120}
                        height={40}
                        priority
                        className="object-contain"
                    />
                </Link>
            </div>

            {/* Navigation - Spacing and typography matching the mockup */}
            <nav className="hidden md:block">
                <ul className="flex space-x-12 text-lg">
                    <li>
                        <Link href="/" className="text-primary-accent font-bold transition-colors">
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link href="#about" className="text-neutral-400 hover:text-white transition-colors font-medium">
                            About me
                        </Link>
                    </li>
                    <li>
                        <Link href="#portfolio" className="text-neutral-400 hover:text-white transition-colors font-medium">
                            Portfolio
                        </Link>
                    </li>
                    <li>
                        <Link href="#contact" className="text-neutral-400 hover:text-white transition-colors font-medium">
                            Contact
                        </Link>
                    </li>
                </ul>
            </nav>

            {/* Spacer for layout balance on desktop */}
            <div className="w-[120px] hidden md:block"></div>
        </header>
    );
}

export default Header;