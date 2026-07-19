import type { Metadata } from "next";
import { Manrope, Inter, Barlow } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const GA_MEASUREMENT_ID = "G-5Q0PLQYSCL";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "ADV Consulting Pty Ltd",
  url: "https://www.advhq.com.au",
  email: "hello@advhq.com.au",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Sydney",
    addressRegion: "NSW",
    addressCountry: "AU",
  },
  description:
    "SAP BTP and enterprise AI consulting firm serving mid-market and enterprise clients across Australia and New Zealand.",
};

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500"],
});

const barlow = Barlow({
  variable: "--font-barlow",
  subsets: ["latin"],
  weight: ["900"],
});

const TITLE = "ADV Consulting | SAP BTP & Enterprise AI — Sydney";
const DESCRIPTION =
  "Human-centred. AI-native. Lean and nimble. Built for where business is heading.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  metadataBase: new URL("https://www.advhq.com.au"),
  alternates: {
    canonical: "https://www.advhq.com.au",
  },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: "https://www.advhq.com.au",
    siteName: "ADV Consulting",
    locale: "en_AU",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${manrope.variable} ${inter.variable} ${barlow.variable} antialiased`}
      >
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
          strategy="afterInteractive"
        />
        <Script id="ga4-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_MEASUREMENT_ID}');
          `}
        </Script>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
