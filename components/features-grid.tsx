import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

import { siteConfig, whatsappUrl } from "@/lib/site-config";
import { Reveal } from "@/components/reveal";
import { WhatsAppIcon } from "@/components/icons";

export function FeaturesGrid() {
  return (
    <section
      id="collection"
      className="border-t bg-secondary/40 py-16 md:py-24"
    >
      <div className="container">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="eyebrow">Our Collection</p>
          <h2 className="mt-3 font-display text-3xl font-bold tracking-tight sm:text-4xl">
            Everything you need, all in one store
          </h2>
          <p className="mt-4 text-muted-foreground">
            From hard-wearing denim to easy everyday casuals — browse the range,
            then order what you love straight over WhatsApp.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {siteConfig.collections.map((item, i) => (
            <Reveal key={item.title} delay={(i % 3) * 100}>
              <a
                href={whatsappUrl(`Hi! I'm interested in your ${item.title}.`)}
                target="_blank"
                rel="noopener noreferrer"
                className="group block h-full overflow-hidden rounded-2xl border bg-card shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
              >
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-muted">
                  <Image
                    src={item.image}
                    alt={item.imageAlt}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0" />
                  <span className="absolute right-3 top-3 flex h-9 w-9 translate-y-1 items-center justify-center rounded-full glass text-foreground opacity-0 shadow transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                    <ArrowUpRight className="h-4 w-4" />
                  </span>
                  <h3 className="absolute bottom-3 left-4 font-display text-xl font-semibold text-white drop-shadow-sm">
                    {item.title}
                  </h3>
                </div>
                <div className="flex flex-col gap-3 p-5">
                  <p className="text-sm text-muted-foreground">
                    {item.description}
                  </p>
                  <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-emerald-600 dark:text-emerald-400">
                    <WhatsAppIcon className="h-4 w-4" />
                    Order on WhatsApp
                  </span>
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
