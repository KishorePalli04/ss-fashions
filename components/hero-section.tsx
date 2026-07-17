import Image from "next/image";
import { ArrowRight, Clock, MapPin } from "lucide-react";

import { siteConfig, whatsappUrl } from "@/lib/site-config";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { WhatsAppIcon } from "@/components/icons";

export function HeroSection() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="container grid items-center gap-12 py-16 md:grid-cols-2 md:py-24 lg:gap-16">
        {/* Copy */}
        <div className="flex flex-col items-start gap-6 animate-fade-up">
          <div className="flex flex-wrap items-center gap-2">
            <Badge variant="success" className="gap-1.5">
              <Clock className="h-3 w-3" />
              {siteConfig.hours.label}
            </Badge>
            <Badge variant="secondary" className="gap-1.5">
              <MapPin className="h-3 w-3" />
              {siteConfig.address.suburb}, {siteConfig.address.state}
            </Badge>
          </div>

          <h1 className="text-4xl font-bold leading-[1.1] tracking-tight sm:text-5xl lg:text-6xl">
            {siteConfig.name}
            <span className="mt-2 block text-2xl font-medium text-muted-foreground sm:text-3xl lg:text-4xl">
              {siteConfig.tagline}
            </span>
          </h1>

          <p className="max-w-md text-lg text-muted-foreground">
            Premium jeans, jackets and everyday casual wear — curated for
            Strathfield locals. Great fits, honest prices, and a door that never
            closes.
          </p>

          <div className="flex flex-col gap-3 sm:flex-row">
            <Button asChild size="lg">
              <a href="#collection">
                View Collection
                <ArrowRight className="h-4 w-4" />
              </a>
            </Button>
            <Button asChild size="lg" variant="whatsapp">
              <a href={whatsappUrl()} target="_blank" rel="noopener noreferrer">
                <WhatsAppIcon className="h-4 w-4" />
                Order via WhatsApp
              </a>
            </Button>
          </div>

          <div className="flex items-center gap-6 pt-2 text-sm text-muted-foreground">
            <div>
              <p className="text-2xl font-bold text-foreground">24/7</p>
              <p>Always open</p>
            </div>
            <div className="h-8 w-px bg-border" />
            <div>
              <p className="text-2xl font-bold text-foreground">100%</p>
              <p>Quality denim</p>
            </div>
            <div className="h-8 w-px bg-border" />
            <div>
              <p className="text-2xl font-bold text-foreground">Local</p>
              <p>Strathfield store</p>
            </div>
          </div>
        </div>

        {/* Image */}
        <div className="relative animate-fade-up">
          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl bg-muted shadow-2xl">
            <Image
              src="https://images.unsplash.com/photo-1525507119028-ed4c629a60a3?auto=format&fit=crop&w=1000&q=80"
              alt="Model wearing quality denim jeans and a casual jacket"
              fill
              priority
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
          <div className="absolute -bottom-4 -left-4 hidden rounded-xl border bg-background/95 p-4 shadow-lg backdrop-blur sm:block">
            <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
              New season
            </p>
            <p className="text-sm font-semibold">Denim collection is in</p>
          </div>
        </div>
      </div>
    </section>
  );
}
