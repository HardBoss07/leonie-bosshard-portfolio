import { Phone, Mail } from "lucide-react";
import Link from "next/link";

const Footer = () => {
    return (
        <footer className="flex flex-col items-center py-8 bg-background text-primary-text">
            <h2 className="text-primary-accent text-3xl font-bold mb-4">
                Leonie Bosshard
            </h2>
            <nav className="mb-4">
                <ul className="flex space-x-6">
                    <li><Link href="#" className="hover:text-primary-accent">Home</Link></li>
                    <li><Link href="#" className="hover:text-primary-accent">About me</Link></li>
                    <li><Link href="#" className="hover:text-primary-accent">Portfolio</Link></li>
                    <li><Link href="#" className="hover:text-primary-accent">Contact me</Link></li>
                </ul>
            </nav>
            <div className="flex space-x-8">
                <div className="flex items-center space-x-2">
                    <Mail size={20} className="text-primary-text" />
                    <a href="mailto:leonie@bosshard.net" className="hover:text-primary-accent">leonie@bosshard.net</a>
                </div>
                <div className="flex items-center space-x-2">
                    <Phone size={20} className="text-primary-text" />
                    <a href="tel:+41767243520" className="hover:text-primary-accent">+41 76 724 35 20</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
