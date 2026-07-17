import { Sparkles } from "lucide-react";

const items = [
  "Premium Denim",
  "Casual Wear",
  "Jackets & Outerwear",
  "Women's Apparel",
  "New Arrivals Weekly",
  "Open 24 Hours",
  "Order via WhatsApp",
  "Strathfield NSW",
];

/**
 * Infinite scrolling brand strip. The list is duplicated so the -50%
 * translate loops seamlessly. Pauses on hover; disabled for reduced motion.
 */
export function Marquee() {
  return (
    <div className="pause-on-hover relative flex overflow-hidden border-y bg-foreground py-4 text-background">
      {/* Edge fades */}
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-foreground to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-foreground to-transparent" />

      <div
        data-marquee
        className="flex shrink-0 animate-marquee items-center whitespace-nowrap"
      >
        {[...items, ...items].map((item, i) => (
          <span
            key={i}
            className="mx-6 flex items-center gap-6 font-display text-sm font-semibold uppercase tracking-[0.2em]"
          >
            {item}
            <Sparkles className="h-3.5 w-3.5 opacity-60" />
          </span>
        ))}
      </div>
    </div>
  );
}
