export const IMAGES = [
  { src: "/images/groom.jpg", alt: "Groom" },
  { src: "/images/bride.jpeg", alt: "Bride" },
  { src: "/images/couple.jpeg", alt: "Couple" }
];

export const STRUCTURED_DATA = {
  "@context": "https://schema.org",
  "@type": "Event",
  "name": "Athma Prayag & Arya Rajan Wedding",
  "description": "Join us in celebrating the wedding of Athma Prayag & Arya Rajan. We request the pleasure of your company at our wedding celebration.",
  "startDate": "2025-05-01T15:00:00",
  "endDate": "2025-05-01T23:00:00",
  "location": {
    "@type": "Place",
    "name": "Muthirakkalil, Thikkodi",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Thikkodi",
      "addressRegion": "Kerala",
      "addressCountry": "India"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "11.4839858",
      "longitude": "75.6261368"
    }
  },
  "image": "/images/couple.jpeg",
  "organizer": [
    {
      "@type": "Person",
      "name": "Mr. Anil Kumar & Mrs. Geetha Anil"
    },
    {
      "@type": "Person",
      "name": "Mr. Rajan & Mrs. Omana"
    }
  ]
}; 