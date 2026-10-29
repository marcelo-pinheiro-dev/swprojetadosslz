import { siteConfig } from "@/site.config";

export function JsonLdScript({ data }: { data: object }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }}
    />
  );
}

export function JsonLd() {
  const { address, contact, legal, social } = siteConfig;
  const sameAs = Object.values(social).filter(Boolean);

  const business = {
    "@context": "https://schema.org",
    "@type": ["FurnitureStore", "LocalBusiness"],
    "@id": `${siteConfig.url}/#empresa`,
    name: siteConfig.name,
    legalName: legal.companyName,
    taxID: legal.cnpj,
    description: siteConfig.positioning,
    url: siteConfig.url,
    image: `${siteConfig.url}/images/cozinha1-1.jpeg`,
    logo: `${siteConfig.url}/images/logo-emblema-256.png`,
    telephone: `+${contact.whatsappNumber}`,
    email: contact.email,
    priceRange: "$$$",
    address: {
      "@type": "PostalAddress",
      streetAddress: `${address.street} — ${address.district}`,
      addressLocality: address.city,
      addressRegion: address.state,
      postalCode: address.postalCode,
      addressCountry: address.country,
    },
    geo: { "@type": "GeoCoordinates", latitude: address.geo.lat, longitude: address.geo.lng },
    areaServed: [
      { "@type": "City", name: "São Luís" },
      { "@type": "State", name: "Maranhão" },
    ],
    openingHoursSpecification: siteConfig.openingHoursSpec.map((s) => ({
      "@type": "OpeningHoursSpecification",
      dayOfWeek: s.days,
      opens: s.opens,
      closes: s.closes,
    })),
    ...(sameAs.length > 0 && { sameAs }),
  };

  return <JsonLdScript data={business} />;
}
