/**
 * Single source of truth for all business details.
 *
 * Everything that would change between clients or as the business grows lives
 * here — contact info, hours, collection categories, and social links. Keeping
 * this centralized is what makes the site easy to hand over and to expand into
 * a full storefront later (a CMS or product API can populate the same shapes).
 */

export type Collection = {
  title: string;
  description: string;
  /** Product photography — replace with the client's own imagery. */
  image: string;
  imageAlt: string;
};

export const siteConfig = {
  name: "SS Fashion Wear",
  tagline: "Quality Denim & Casual Wear",
  description:
    "Strathfield's destination for quality denim and everyday casual wear. Curated jeans, jackets and apparel for men and women — open 24 hours.",

  contact: {
    // Placeholder AU mobile — swap for the shop's real WhatsApp number.
    // Format: country code + number, digits only (used to build wa.me links).
    whatsapp: "61400000000",
    phoneDisplay: "+61 400 000 000",
    email: "hello@ssfashionwear.com.au",
  },

  address: {
    line1: "7-9 Churchill Ave",
    suburb: "Strathfield",
    state: "NSW",
    postcode: "2135",
    country: "Australia",
    /** Deep link that opens the store in Google Maps. */
    mapsUrl:
      "https://www.google.com/maps/search/?api=1&query=7-9+Churchill+Ave+Strathfield+NSW+2135",
  },

  hours: {
    label: "Open 24 hours",
    detail: "7 days a week — walk in anytime.",
  },

  collections: [
    {
      title: "Premium Denim",
      description:
        "Straight, slim and relaxed-fit jeans in classic indigo and washed tones.",
      image:
        "https://images.unsplash.com/photo-1542272604-787c3835535d?auto=format&fit=crop&w=800&q=80",
      imageAlt: "Folded stack of blue denim jeans",
    },
    {
      title: "Casual Shirts & Tees",
      description:
        "Everyday cotton tees, flannels and button-downs built for comfort.",
      image:
        "https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?auto=format&fit=crop&w=800&q=80",
      imageAlt: "Rack of neatly arranged casual shirts",
    },
    {
      title: "Jackets & Outerwear",
      description:
        "Denim jackets and layering pieces to finish any casual look.",
      image:
        "https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=800&q=80",
      imageAlt: "Denim jacket hanging on display",
    },
    {
      title: "Women's Apparel",
      description:
        "Skinny jeans, tops and wardrobe staples in fresh seasonal cuts.",
      image:
        "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=800&q=80",
      imageAlt: "Women's clothing on a retail rail",
    },
    {
      title: "Accessories",
      description:
        "Belts, caps and finishing touches to complete every outfit.",
      image:
        "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=800&q=80",
      imageAlt: "Leather belts and fashion accessories",
    },
    {
      title: "New Arrivals",
      description:
        "Fresh drops landing regularly — be first to shop the latest styles.",
      image:
        "https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?auto=format&fit=crop&w=800&q=80",
      imageAlt: "Modern clothing store interior",
    },
  ] satisfies Collection[],
} as const;

/**
 * Builds a WhatsApp click-to-chat URL with an optional pre-filled message.
 * Centralized so every "Order via WhatsApp" button stays consistent.
 */
export function whatsappUrl(
  message = "Hi SS Fashion Wear! I'd like to place an order."
) {
  const base = `https://wa.me/${siteConfig.contact.whatsapp}`;
  return `${base}?text=${encodeURIComponent(message)}`;
}
