import { translations } from '@/constants/translations';
import { Metadata } from 'next';

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://wedding-card-athma-arya.vercel.app';

export const metadata: Metadata = {
  title: translations.ml.meta.title,
  description: translations.ml.meta.description,
  keywords: translations.ml.meta.keywords,
  alternates: {
    canonical: `${baseUrl}/malayalam`,
    languages: {
      'en': baseUrl,
      'ml': `${baseUrl}/malayalam`,
    },
  },
  openGraph: {
    title: translations.ml.meta.title,
    description: translations.ml.meta.description,
    siteName: translations.ml.meta.title,
    locale: 'ml',
    alternateLocale: 'en',
    url: `${baseUrl}/malayalam`,
    type: 'website',
    images: [{
      url: translations.ml.meta.image,
      width: 1200,
      height: 630,
      alt: translations.ml.meta.imageAlt,
    }],
  },
  twitter: {
    card: 'summary_large_image',
    title: translations.ml.meta.title,
    description: translations.ml.meta.description,
    images: [{
      url: translations.ml.meta.image,
      alt: translations.ml.meta.imageAlt,
    }],
  },
};

export default function MalayalamLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ml">
      <body>{children}</body>
    </html>
  );
} 