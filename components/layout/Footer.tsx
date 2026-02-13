import { Mail, Phone } from "lucide-react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="page-container py-12 bg-neutral-900/50">
      <div className="flex flex-col items-center text-center">
        <h2 className="text-primary-accent text-3xl font-bold mb-4">
          Leonie Bosshard
        </h2>
        <nav className="mb-6">
          <ul className="flex flex-wrap justify-center space-x-6">
            <li>
              <Link href="/" className="hover:text-primary-accent">
                Home
              </Link>
            </li>
            <li>
              <Link href="#about" className="hover:text-primary-accent">
                About me
              </Link>
            </li>
            <li>
              <Link href="#portfolio" className="hover:text-primary-accent">
                Portfolio
              </Link>
            </li>
            <li>
              <Link href="#contact" className="hover:text-primary-accent">
                Contact me
              </Link>
            </li>
          </ul>
        </nav>
        <div className="flex flex-col sm:flex-row gap-x-8 gap-y-4">
          <div className="flex items-center space-x-2">
            <Mail size={20} className="text-primary-text" />
            <a
              href="mailto:leonie@bosshard.net"
              className="hover:text-primary-accent font-bold"
            >
              leonie@bosshard.net
            </a>
          </div>
          <div className="flex items-center space-x-2">
            <Phone size={20} className="text-primary-text" />
            <a
              href="tel:+41767243520"
              className="hover:text-primary-accent font-bold"
            >
              +41 76 724 35 20
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
