import { Clock, MapPin } from "lucide-react";

import { siteConfig, whatsappUrl } from "@/lib/site-config";
import { Button } from "@/components/ui/button";
import { WhatsAppIcon } from "@/components/icons";

const footerNav = [
  { label: "Collection", href: "#collection" },
  { label: "Why us", href: "#why" },
  { label: "Visit", href: "#location" },
];

export function SiteFooter() {
  const { address, hours } = siteConfig;

  return (
    <footer className="border-t bg-secondary/40">
      <div className="container py-14">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <div className="flex items-center gap-2.5">
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-foreground text-background font-display text-sm font-bold">
                SS
              </span>
              <p className="font-display text-lg font-bold tracking-tight">
                {siteConfig.name}
              </p>
            </div>
            <p className="mt-3 max-w-xs text-sm text-muted-foreground">
              {siteConfig.tagline}. Serving Strathfield with quality apparel,
              day and night.
            </p>
          </div>

          <div className="space-y-3 text-sm text-muted-foreground">
            <p className="font-display font-semibold text-foreground">
              Store
            </p>
            <p className="flex items-start gap-2">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0" />
              <span>
                {address.line1}, {address.suburb}, {address.state}{" "}
                {address.postcode}
              </span>
            </p>
            <p className="flex items-center gap-2">
              <Clock className="h-4 w-4 shrink-0" />
              {hours.label}
            </p>
          </div>

          <div className="md:justify-self-end">
            <p className="mb-3 font-display font-semibold">Explore</p>
            <ul className="space-y-2 text-sm text-muted-foreground">
              {footerNav.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="transition-colors hover:text-foreground"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
            <Button
              asChild
              variant="whatsapp"
              className="mt-5 rounded-full"
              size="sm"
            >
              <a href={whatsappUrl()} target="_blank" rel="noopener noreferrer">
                <WhatsAppIcon className="h-4 w-4" />
                Order via WhatsApp
              </a>
            </Button>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-3 border-t pt-6 text-center text-xs text-muted-foreground sm:flex-row sm:text-left">
          <p>
            © {new Date().getFullYear()} {siteConfig.name}. All rights
            reserved.
          </p>
          <p>Quality Denim &amp; Casual Wear · Strathfield, NSW</p>
        </div>
      </div>
    </footer>
  );
}
