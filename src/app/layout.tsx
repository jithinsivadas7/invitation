import type { Metadata } from "next";
import { Playfair_Display, Montserrat } from "next/font/google";
import "./globals.css";
import { IMAGES } from '@/constants/wedding';

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
});

export const metadata: Metadata = {
  title: "Athma Prayag & Arya Rajan - Wedding Reception",
  description: "Join us in celebrating the wedding reception of Athma Prayag & Arya Rajan. We request the pleasure of your company at our celebration on May 1st, 2025 at Muthirakkalil, Thikkodi.",
  keywords: "wedding, reception, celebration, Athma Prayag, Arya Rajan, wedding ceremony, Muthirakkalil, Thikkodi, Kerala",
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
    siteName: "Athma Prayag & Arya Rajan Wedding Reception",
    title: "Athma Prayag & Arya Rajan - Wedding Reception",
    description: "Join us in celebrating the wedding reception of Athma Prayag & Arya Rajan. We request the pleasure of your company at our celebration on May 1st, 2025 at Muthirakkalil, Thikkodi.",
    images: [
      {
        url: IMAGES[0].src,
        width: 1200,
        height: 630,
        alt: "Athma Prayag & Arya Rajan Wedding Reception - Groom",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Athma Prayag & Arya Rajan - Wedding Reception",
    description: "Join us in celebrating the wedding reception of Athma Prayag & Arya Rajan. We request the pleasure of your company at our celebration on May 1st, 2025 at Muthirakkalil, Thikkodi.",
    images: [IMAGES[0].src],
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
      <body className={`${playfair.variable} ${montserrat.variable} font-montserrat bg-gradient-to-br from-rose-100 via-orange-50 to-amber-100 min-h-screen`}>
        {children}
      </body>
    </html>
  );
}
