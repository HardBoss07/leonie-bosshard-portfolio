import Link from "next/link";

const Header = () => {
    return (
        <header className="flex justify-between items-center px-8 py-4 bg-background text-primary-text">
            <div className="text-primary-accent text-2xl font-bold">
                LOGO
            </div>
            <nav>
                <ul className="flex space-x-6">
                    <li><Link href="#" className="text-primary-accent hover:text-primary-accent-light">Home</Link></li>
                    <li><Link href="#" className="hover:text-primary-accent">About me</Link></li>
                    <li><Link href="#" className="hover:text-primary-accent">Portfolio</Link></li>
                    <li><Link href="#" className="hover:text-primary-accent">Contact</Link></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;