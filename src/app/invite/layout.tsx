import type { Metadata } from "next";
import { IMAGES } from '@/constants/wedding';

export const metadata: Metadata = {
  title: "Athma Prayag & Arya Rajan - Wedding Reception Invitation Card",
  description: "Join us in celebrating the wedding reception of Athma Prayag & Arya Rajan. We request the pleasure of your company at our celebration on May 1st, 2025 at Muthirakkalil, Thikkodi.",
  keywords: "wedding, reception, invitation card, Athma Prayag, Arya Rajan, wedding ceremony, Muthirakkalil, Thikkodi, Kerala",
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
    url: "https://your-wedding-domain.com/invite",
    siteName: "Athma Prayag & Arya Rajan Wedding Reception Card",
    title: "Athma Prayag & Arya Rajan - Wedding Reception Invitation Card",
    description: "Join us in celebrating the wedding reception of Athma Prayag & Arya Rajan. We request the pleasure of your company at our celebration on May 1st, 2025 at Muthirakkalil, Thikkodi.",
    images: [
      {
        url: IMAGES[2].src,
        width: 1200,
        height: 630,
        alt: "Athma Prayag & Arya Rajan Wedding Reception Card - Couple",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Athma Prayag & Arya Rajan - Wedding Reception Invitation Card",
    description: "Join us in celebrating the wedding reception of Athma Prayag & Arya Rajan. We request the pleasure of your company at our celebration on May 1st, 2025 at Muthirakkalil, Thikkodi.",
    images: [IMAGES[2].src],
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
    canonical: "https://your-wedding-domain.com/invite",
  },
};

export default function InviteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
} 