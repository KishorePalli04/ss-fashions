import { SiteHeader } from "@/components/site-header";
import { HeroSection } from "@/components/hero-section";
import { FeaturesGrid } from "@/components/features-grid";
import { LocationContact } from "@/components/location-contact";
import { SiteFooter } from "@/components/site-footer";
import { siteConfig } from "@/lib/site-config";

/**
 * SS Fashion Wear — homepage.
 *
 * The page is composed of self-contained sections so the site can grow into a
 * full storefront later (add /shop, /product/[slug], a cart, etc.) without
 * touching this landing layout. JSON-LD below feeds Google's local business
 * card — key for "clothing store near me" visibility in Strathfield.
 */
export default function HomePage() {
  const localBusinessJsonLd = {
    "@context": "https://schema.org",
    "@type": "ClothingStore",
    name: siteConfig.name,
    description: siteConfig.description,
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.address.line1,
      addressLocality: siteConfig.address.suburb,
      addressRegion: siteConfig.address.state,
      postalCode: siteConfig.address.postcode,
      addressCountry: "AU",
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      opens: "00:00",
      closes: "23:59",
    },
    telephone: siteConfig.contact.phoneDisplay,
  };

  return (
    <>
      <script
        type="application/ld+json"
        // Structured data is static and trusted — safe to inline.
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(localBusinessJsonLd),
        }}
      />
      <SiteHeader />
      <main>
        <HeroSection />
        <FeaturesGrid />
        <LocationContact />
      </main>
      <SiteFooter />
    </>
  );
}
