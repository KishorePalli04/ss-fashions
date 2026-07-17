import { Clock, MapPin } from "lucide-react";

import { siteConfig, whatsappUrl } from "@/lib/site-config";
import { Button } from "@/components/ui/button";
import { WhatsAppIcon } from "@/components/icons";

export function SiteFooter() {
  const { address, hours } = siteConfig;

  return (
    <footer className="border-t bg-secondary/40">
      <div className="container py-12">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <p className="text-lg font-bold tracking-tight">
              {siteConfig.name}
            </p>
            <p className="mt-2 max-w-xs text-sm text-muted-foreground">
              {siteConfig.tagline}. Serving Strathfield with quality apparel,
              day and night.
            </p>
          </div>

          <div className="space-y-2 text-sm text-muted-foreground">
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

          <div className="md:text-right">
            <Button asChild variant="whatsapp">
              <a href={whatsappUrl()} target="_blank" rel="noopener noreferrer">
                <WhatsAppIcon className="h-4 w-4" />
                Order via WhatsApp
              </a>
            </Button>
          </div>
        </div>

        <div className="mt-8 border-t pt-6 text-center text-xs text-muted-foreground">
          <p>
            © {new Date().getFullYear()} {siteConfig.name}. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
