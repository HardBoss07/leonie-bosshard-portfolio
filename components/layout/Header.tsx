"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

const Header = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        if (isMobileMenuOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
    }, [isMobileMenuOpen]);

    const handleLinkClick = () => setIsMobileMenuOpen(false);

    return (
        <header className="page-container flex justify-between items-center py-6 md:py-10 relative z-50">
            <button
                className="block md:hidden relative z-[60] w-8 h-6 focus:outline-none"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                aria-label="Toggle menu"
                aria-expanded={isMobileMenuOpen}
            >
                <div className="relative w-6 h-[18px]">
                    <span
                        className={`absolute left-0 h-0.5 w-full bg-primary-text rounded-sm transition-all duration-300 ease-in-out
                        ${isMobileMenuOpen ? "top-2 rotate-[135deg]" : "top-0"}`}
                    />
                    <span
                        className={`absolute h-0.5 w-full bg-primary-text rounded-sm transition-all duration-300 ease-in-out
                        ${isMobileMenuOpen ? "opacity-0 -left-6 top-2" : "opacity-100 left-0 top-2"}`}
                    />
                    <span
                        className={`absolute left-0 h-0.5 w-full bg-primary-text rounded-sm transition-all duration-300 ease-in-out
                        ${isMobileMenuOpen ? "top-2 -rotate-[135deg]" : "top-4"}`}
                    />
                </div>
            </button>

            <div className="absolute left-1/2 -translate-x-1/2 md:static md:translate-x-0 z-[60]">
                <Link href="/" onClick={handleLinkClick}>
                    <Image
                        src="/icons/logo.svg"
                        alt="Leonie Bosshard Logo"
                        width={120}
                        height={40}
                        priority
                        className="object-contain"
                    />
                </Link>
            </div>

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

            <div className="w-[120px] hidden md:block"></div>

            <div
                className={`fixed inset-0 bg-background/95 backdrop-blur-xl z-50 flex flex-col justify-center items-center transition-transform duration-500 cubic-bezier(0.77,0,0.175,1) md:hidden
                ${isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"}`}
            >
                <nav className="flex flex-col gap-8 text-center">
                    <Link
                        href="/"
                        onClick={handleLinkClick}
                        className="text-3xl font-bold text-white hover:text-primary-accent transition-colors"
                    >
                        Home
                    </Link>
                    <Link
                        href="#about"
                        onClick={handleLinkClick}
                        className="text-3xl font-bold text-neutral-400 hover:text-primary-accent transition-colors"
                    >
                        About me
                    </Link>
                    <Link
                        href="#portfolio"
                        onClick={handleLinkClick}
                        className="text-3xl font-bold text-neutral-400 hover:text-primary-accent transition-colors"
                    >
                        Portfolio
                    </Link>
                    <Link
                        href="#contact"
                        onClick={handleLinkClick}
                        className="text-3xl font-bold text-neutral-400 hover:text-primary-accent transition-colors"
                    >
                        Contact
                    </Link>
                </nav>
            </div>
        </header>
    );
};

export default Header;