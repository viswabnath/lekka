import { Outfit, Plus_Jakarta_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";
import CustomCursor from "@/components/CustomCursor";
import { SITE_URL } from "@/lib/site";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono-jb",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Lekka — one ledger for your whole business, by OneMark",
    template: "%s",
  },
  description:
    "Lekka brings your payroll, invoices, timesheets, and clients into one place — built by OneMark in Kakinada, India, for businesses everywhere.",
  openGraph: {
    type: "website",
    siteName: "Lekka",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${SITE_URL}/#organization`,
      "name": "OneMark",
      "url": SITE_URL,
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Kakinada",
        "addressRegion": "Andhra Pradesh",
        "addressCountry": "IN"
      }
    },
    {
      "@type": "SoftwareApplication",
      "@id": `${SITE_URL}/#software`,
      "name": "Lekka",
      "applicationCategory": "BusinessApplication",
      "operatingSystem": "All",
      "description": "Lekka brings payroll, invoices, timesheets, and clients into one place — built by OneMark.",
      "publisher": {
        "@id": `${SITE_URL}/#organization`
      }
    }
  ]
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${outfit.variable} ${jakarta.variable} ${jetbrainsMono.variable} h-full`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col antialiased">
        <CustomCursor />
        <Header />
        <PageTransition>{children}</PageTransition>
        <Footer />
      </body>
    </html>
  );
}
