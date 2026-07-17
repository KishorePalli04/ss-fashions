import { ArrowRight, Clock } from "lucide-react";

import { siteConfig, whatsappUrl } from "@/lib/site-config";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/reveal";
import { WhatsAppIcon } from "@/components/icons";

export function CtaBanner() {
  return (
    <section className="container py-16 md:py-24">
      <Reveal>
        <div className="grain relative overflow-hidden rounded-[2rem] bg-foreground px-6 py-14 text-center text-background sm:px-12 md:py-20">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 -z-0 opacity-40"
          >
            <div className="absolute left-1/4 top-0 h-64 w-64 -translate-x-1/2 rounded-full bg-white/10 blur-3xl" />
            <div className="absolute right-1/4 bottom-0 h-64 w-64 translate-x-1/2 rounded-full bg-emerald-400/20 blur-3xl" />
          </div>

          <div className="relative z-10 mx-auto max-w-2xl">
            <div className="mb-5 inline-flex items-center gap-1.5 rounded-full border border-background/20 bg-background/10 px-3 py-1 text-xs font-medium">
              <Clock className="h-3.5 w-3.5" />
              {siteConfig.hours.label}
            </div>
            <h2 className="font-display text-3xl font-bold leading-tight tracking-tight sm:text-4xl md:text-5xl">
              Ready to refresh your wardrobe?
            </h2>
            <p className="mx-auto mt-4 max-w-md text-background/70">
              Message us on WhatsApp to check stock, reserve a size, or place an
              order — day or night.
            </p>
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <Button
                asChild
                size="lg"
                variant="whatsapp"
                className="rounded-full"
              >
                <a
                  href={whatsappUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <WhatsAppIcon className="h-4 w-4" />
                  Order via WhatsApp
                </a>
              </Button>
              <Button
                asChild
                size="lg"
                variant="secondary"
                className="rounded-full"
              >
                <a href="#collection">
                  Browse Collection
                  <ArrowRight className="h-4 w-4" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
