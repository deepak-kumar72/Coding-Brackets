import AOSSection from "@/components/AOS";
import Footer from "@/components/Footer";
import GoogleAnalytics from "@/components/GoogleAnalytics";
import NavBar from "@/components/NavBar";
import Provider from "@/components/Provider";
import { Manrope } from "next/font/google";
import { Metadata } from "next";
import "./globals.css";

const manRope = Manrope({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Software Development Company | Top Rated in 2024",
  description:
    "Custom Software Development Company delivering top notch service, experienced team to work on your dream projects.",
    
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">

      <head>
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="CodingBrackets - Software Development for Global Businesses"
        />
        <meta
          property="og:description"
          content="Scaling your business with expert software solutions. CodingBrackets offers cutting-edge technology to clients across the globe."
        />
        <meta property="og:url" content="https://codingbrackets.com" />
        <meta property="og:site_name" content="CodingBrackets" />
        <meta
          property="og:image"
          content="https://codingbrackets.com/_next/image?url=%2FHeroImage-2.png&w=1080&q=75"
        />
        <meta
          property="og:image:alt"
          content="CodingBrackets - Global Software Development Partner"
        />
        <meta property="og:locale" content="en_US" />

        {/* Twitter Metadata */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="CodingBrackets - Innovating Software Solutions Globally"
        />
        <meta
          name="twitter:description"
          content="Empowering global businesses with world-class software development solutions. Partner with CodingBrackets today."
        />
        <meta
          name="twitter:image"
          content="https://codingbrackets.com/_next/image?url=%2FHeroImage-2.png&w=1080&q=75"
        />
        <meta
          name="twitter:image:alt"
          content="CodingBrackets - Software Solutions for Global Success"
        />

        {/* Geo Metadata */}
        <meta name="geo.region" content="IN-UP" />
        <meta name="geo.placename" content="Lucknow" />
        <meta name="geo.position" content="26.8467;80.9462" />
        <meta name="ICBM" content="26.8467, 80.9462" />

        {/* Canonical Link */}
        <link rel="canonical" href="https://codingbrackets.com" />

        {/* Additional Global SEO Elements */}
        <meta name="language" content="English" />
        <meta name="coverage" content="Worldwide" />
        <meta name="distribution" content="Global" />
      </head>
      <GoogleAnalytics />
      <body className={manRope.className}>
        <Provider>
          <NavBar />
          <main>{children}</main>
          <Footer />
        </Provider>
      </body>
      <AOSSection />
    </html>
  );
}
