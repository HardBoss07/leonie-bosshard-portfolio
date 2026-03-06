import type { Metadata } from "next";
import { Lato } from "next/font/google";
import "./globals.css";
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import Script from "next/script";

const lato = Lato({
  weight: ["100", "300", "400", "700", "900"],
  subsets: ["latin"],
  variable: "--font-lato",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://leoniebosshard.m4tt3o.dev"),
  title: {
    default: "Leonie Bosshard | Graphic Design & UI/UX Portfolio",
    template: "%s | Leonie Bosshard",
  },
  description:
    "Explore the creative portfolio of Leonie Bosshard. Specialized in Graphic Design, UI/UX Interface, and Professional Photography. Innovative solutions for digital and analog projects.",
  keywords: [
    "Leonie Bosshard",
    "Graphic Designer",
    "UI/UX Designer",
    "Portfolio",
    "Professional Photography",
    "Interface Design",
    "Switzerland",
  ],
  authors: [{ name: "Leonie Bosshard" }],
  creator: "Leonie Bosshard",
  openGraph: {
    type: "website",
    locale: "de_CH",
    url: "https://leoniebosshard.m4tt3o.dev",
    siteName: "Leonie Bosshard Portfolio",
    title: "Leonie Bosshard | Graphic Design & UI/UX Specialist",
    description:
      "Creative portfolio showcasing Graphic Design, UI/UX, and Photography projects.",
    images: [
      {
        url: "/images/headshot.avif",
        width: 1200,
        height: 630,
        alt: "Leonie Bosshard Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Leonie Bosshard | Graphic Design & UI/UX Specialist",
    description:
      "Creative portfolio showcasing Graphic Design, UI/UX, and Photography projects.",
    images: ["/images/headshot.avif"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/icons/logo-zoom.svg",
    apple: "/icons/logo-zoom.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": ["Person", "ProfessionalService"],
    name: "Leonie Bosshard",
    jobTitle: "Graphic Designer & UI/UX Designer",
    url: "https://leoniebosshard.m4tt3o.dev",
    image: "https://leoniebosshard.m4tt3o.dev/images/headshot.avif",
    description:
      "Professional Graphic Designer and UI/UX Specialist based in Switzerland.",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Switzerland",
    },
    knowsAbout: [
      "Graphic Design",
      "UI/UX Design",
      "Photography",
      "Analog Design",
    ],
    sameAs: [
      "https://www.linkedin.com/in/leonie-bosshard-779811299",
      "https://www.instagram.com/leoniie.zoe",
    ],
  };

  return (
    <html lang="de">
      <body
        className={`${lato.variable} ${lato.className} antialiased bg-background text-primary-text`}
      >
        <Script
          id="json-ld"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
