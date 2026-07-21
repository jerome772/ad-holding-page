import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import Script from "next/script";
import { Lenis } from "lenis/react";
import "lenis/dist/lenis.css";
import "./globals.css";

const GA_MEASUREMENT_ID = "G-5Q0PLQYSCL";

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      name: "ADV Consulting Pty Ltd",
      url: "https://www.advhq.com.au",
      logo: "https://www.advhq.com.au/android-chrome-512x512.png",
      sameAs: [],
      description:
        "Senior-led enterprise consulting: Applications, Integration & Data, and Agentic AI. Data-first delivery for mid-market and enterprise clients across ANZ.",
    },
    {
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
        "Senior-led enterprise consulting: Applications, Integration & Data, and Agentic AI. Data-first delivery for mid-market and enterprise clients across ANZ.",
    },
  ],
};

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

const TITLE = "ADV | Consulting Built for the AI Era";
const SOCIAL_TITLE = "The right call: Advantage.";
const DESCRIPTION =
  "Senior, embedded consulting for ANZ mid-market and enterprise organisations. Applications, Integration & Data, and Agentic AI.";
const SOCIAL_DESCRIPTION =
  "Consulting built for the AI era. Human-centred. Data-first. AI-native.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  metadataBase: new URL("https://www.advhq.com.au"),
  alternates: {
    canonical: "https://www.advhq.com.au",
  },
  manifest: "/site.webmanifest",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      {
        url: "/android-chrome-192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        url: "/android-chrome-512x512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  openGraph: {
    title: SOCIAL_TITLE,
    description: SOCIAL_DESCRIPTION,
    url: "https://www.advhq.com.au",
    siteName: "ADV Consulting",
    locale: "en_AU",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: SOCIAL_TITLE,
    description: SOCIAL_DESCRIPTION,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${manrope.variable} antialiased`}>
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
        <Lenis root options={{ lerp: 0.1, wheelMultiplier: 1 }}>
          {children}
        </Lenis>
      </body>
    </html>
  );
}
