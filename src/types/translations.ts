export interface MetaTranslations {
  title: string;
  description: string;
  keywords: string;
  image: string;
  imageAlt: string;
}

export interface HeroTranslations {
  title: string;
  subtitle: string;
}

export interface CoupleTranslations {
  names: string;
  mainHosts: string;
  coHosts: string;
  invitation: string;
  coHostsPrefix: string;
}

export interface DetailsTranslations {
  day: string;
  date: string;
  time: string;
  timePrefix: string;
  venue: string;
  location: string;
  viewMap: string;
}

export interface LanguageTranslations {
  meta: MetaTranslations;
  hero: HeroTranslations;
  couple: CoupleTranslations;
  details: DetailsTranslations;
}

export interface Translations {
  en: LanguageTranslations;
  ml: LanguageTranslations;
} 