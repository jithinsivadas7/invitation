import type { Metadata } from "next";
import { Playfair_Display, Montserrat } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
});

export const metadata: Metadata = {
  title: "Athma Prayag & Arya Rajan - Wedding Invitation",
  description: "Join us in celebrating the wedding of Athma Prayag & Arya Rajan. We request the pleasure of your company at our wedding celebration on May 1st, 2025 at Muthirakkalil, Thikkodi.",
  keywords: "wedding, invitation, celebration, Athma Prayag, Arya Rajan, wedding ceremony, Muthirakkalil, Thikkodi, Kerala",
  authors: [{ name: "Athma Prayag & Arya Rajan" }],
  creator: "Athma Prayag & Arya Rajan",
  publisher: "Athma Prayag & Arya Rajan",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://your-wedding-domain.com",
    siteName: "Athma Prayag & Arya Rajan Wedding",
    title: "Athma Prayag & Arya Rajan - Wedding Invitation",
    description: "Join us in celebrating the wedding of Athma Prayag & Arya Rajan. We request the pleasure of your company at our wedding celebration on May 1st, 2025 at Muthirakkalil, Thikkodi.",
    images: [
      {
        url: "/images/couple.jpeg",
        width: 1200,
        height: 630,
        alt: "Athma Prayag & Arya Rajan Wedding Invitation",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Athma Prayag & Arya Rajan - Wedding Invitation",
    description: "Join us in celebrating the wedding of Athma Prayag & Arya Rajan. We request the pleasure of your company at our wedding celebration on May 1st, 2025 at Muthirakkalil, Thikkodi.",
    images: ["/images/couple.jpeg"],
    creator: "@yourtwitterhandle",
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
  verification: {
    google: "your-google-site-verification",
  },
  alternates: {
    canonical: "https://your-wedding-domain.com",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body className={`${playfair.variable} ${montserrat.variable} font-montserrat`}>
        {children}
      </body>
    </html>
  );
}
