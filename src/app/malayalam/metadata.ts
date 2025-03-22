import { Metadata } from 'next';
import { translations } from '@/constants/translations';

export const metadata: Metadata = {
  title: translations.ml.meta.title,
  description: translations.ml.meta.description,
  keywords: translations.ml.meta.keywords,
  alternates: {
    canonical: '/malayalam',
    languages: {
      'en': '/',
      'ml': '/malayalam',
    },
  },
  openGraph: {
    title: translations.ml.meta.title,
    description: translations.ml.meta.description,
    locale: 'ml',
    alternateLocale: 'en',
    siteName: translations.ml.meta.title,
  },
  twitter: {
    title: translations.ml.meta.title,
    description: translations.ml.meta.description,
  },
}; 