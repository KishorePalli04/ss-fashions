import { Clock, MapPin, Sparkles, Tag } from "lucide-react";

import { Reveal } from "@/components/reveal";

const perks = [
  {
    icon: Clock,
    title: "Open 24 hours",
    description:
      "Early shift or late night — our doors are open every hour, every day.",
  },
  {
    icon: Tag,
    title: "Honest pricing",
    description:
      "Quality denim and casual wear at fair, local prices. No markups, no games.",
  },
  {
    icon: Sparkles,
    title: "Fresh arrivals",
    description:
      "New styles land regularly, so there's always something new to discover.",
  },
  {
    icon: MapPin,
    title: "Right in Strathfield",
    description:
      "Conveniently on Churchill Ave — easy to reach and easy to shop.",
  },
];

export function WhyUs() {
  return (
    <section id="why" className="py-16 md:py-24">
      <div className="container">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="eyebrow">Why SS Fashion Wear</p>
          <h2 className="mt-3 font-display text-3xl font-bold tracking-tight sm:text-4xl">
            Built for the way Strathfield shops
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {perks.map((perk, i) => (
            <Reveal key={perk.title} delay={i * 90}>
              <div className="group h-full rounded-2xl border bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                <span className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-secondary text-foreground transition-colors group-hover:bg-foreground group-hover:text-background">
                  <perk.icon className="h-5 w-5" />
                </span>
                <h3 className="font-display text-lg font-semibold">
                  {perk.title}
                </h3>
                <p className="mt-1.5 text-sm text-muted-foreground">
                  {perk.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
