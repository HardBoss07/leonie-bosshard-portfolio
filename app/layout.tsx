import type { Metadata } from "next";
import { Lato } from "next/font/google";
import "./globals.css";
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";

const lato = Lato({
  weight: ["100", "300", "400", "700", "900"],
  subsets: ["latin"],
  variable: "--font-lato",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Portfolio | Leonie Bosshard",
  description: "Portfolio for the UI/UX Designer Leonie Bosshard",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${lato.variable} ${lato.className} antialiased bg-background text-primary-text`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
