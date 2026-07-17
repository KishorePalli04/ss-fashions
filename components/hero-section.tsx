import Image from "next/image";
import { ArrowRight, Clock, MapPin, Star } from "lucide-react";

import { siteConfig, whatsappUrl } from "@/lib/site-config";
import { Button } from "@/components/ui/button";
import { WhatsAppIcon } from "@/components/icons";

const stats = [
  { value: "24/7", label: "Always open" },
  { value: "100%", label: "Quality denim" },
  { value: "Local", label: "Strathfield store" },
];

export function HeroSection() {
  return (
    <section id="top" className="grain relative overflow-hidden">
      {/* Soft gradient-mesh backdrop */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
      >
        <div className="absolute -left-24 top-[-6rem] h-[28rem] w-[28rem] rounded-full bg-accent/60 blur-[120px]" />
        <div className="absolute right-[-8rem] top-24 h-[26rem] w-[26rem] rounded-full bg-secondary blur-[120px]" />
      </div>

      <div className="container grid items-center gap-12 py-16 md:grid-cols-[1.05fr_0.95fr] md:py-24 lg:gap-16">
        {/* Copy */}
        <div className="relative z-10 flex flex-col items-start gap-6 animate-fade-up">
          <div className="inline-flex items-center gap-2 rounded-full border bg-background/60 px-3 py-1 text-xs font-medium backdrop-blur">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
            </span>
            {siteConfig.hours.label} · walk in anytime
          </div>

          <h1 className="font-display text-[2.75rem] font-bold leading-[1.02] tracking-tight sm:text-6xl lg:text-7xl">
            <span className="text-gradient">Quality Denim</span>
            <br />
            <span>&amp; Casual Wear</span>
          </h1>

          <p className="max-w-md text-lg text-muted-foreground">
            {siteConfig.name} brings Strathfield premium jeans, jackets and
            everyday essentials — great fits, honest prices, and a door that
            never closes.
          </p>

          <div className="flex flex-col gap-3 sm:flex-row">
            <Button asChild size="lg" className="rounded-full">
              <a href="#collection">
                View Collection
                <ArrowRight className="h-4 w-4" />
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="whatsapp"
              className="rounded-full"
            >
              <a href={whatsappUrl()} target="_blank" rel="noopener noreferrer">
                <WhatsAppIcon className="h-4 w-4" />
                Order via WhatsApp
              </a>
            </Button>
          </div>

          <div className="mt-2 flex items-center gap-6">
            {stats.map((stat, i) => (
              <div key={stat.label} className="flex items-center gap-6">
                {i > 0 && <div className="h-8 w-px bg-border" />}
                <div>
                  <p className="font-display text-2xl font-bold">
                    {stat.value}
                  </p>
                  <p className="text-xs text-muted-foreground">{stat.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Imagery */}
        <div className="relative animate-fade-up [animation-delay:120ms]">
          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[1.75rem] bg-muted shadow-2xl ring-1 ring-border/50">
            <Image
              src="https://images.unsplash.com/photo-1525507119028-ed4c629a60a3?auto=format&fit=crop&w=1000&q=80"
              alt="Model wearing quality denim jeans and a casual jacket"
              fill
              priority
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent" />
          </div>

          {/* Floating rating card */}
          <div className="absolute -left-4 top-8 hidden rounded-2xl border glass p-3 shadow-lg sm:block">
            <div className="flex items-center gap-1 text-amber-500">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="h-3.5 w-3.5 fill-current" />
              ))}
            </div>
            <p className="mt-1 text-xs font-medium">Loved by locals</p>
          </div>

          {/* Floating location card */}
          <div className="absolute -bottom-4 -right-2 hidden rounded-2xl border glass p-4 shadow-lg sm:block">
            <div className="flex items-center gap-2">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-foreground text-background">
                <MapPin className="h-4 w-4" />
              </span>
              <div>
                <p className="text-xs font-semibold">Churchill Ave</p>
                <p className="text-[11px] text-muted-foreground">
                  Strathfield, NSW
                </p>
              </div>
            </div>
          </div>

          {/* Floating hours pill */}
          <div className="absolute -bottom-3 left-6 hidden items-center gap-1.5 rounded-full border bg-emerald-500 px-3 py-1.5 text-xs font-semibold text-white shadow-lg md:inline-flex">
            <Clock className="h-3.5 w-3.5" />
            Open now
          </div>
        </div>
      </div>
    </section>
  );
}
