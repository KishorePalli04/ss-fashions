import { Clock, Mail, MapPin, Navigation, Phone } from "lucide-react";

import { siteConfig, whatsappUrl } from "@/lib/site-config";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Reveal } from "@/components/reveal";
import { WhatsAppIcon } from "@/components/icons";

const mapEmbedSrc =
  "https://www.google.com/maps?q=7-9+Churchill+Ave+Strathfield+NSW+2135&output=embed";

export function LocationContact() {
  const { address, contact, hours } = siteConfig;

  return (
    <section id="location" className="border-t py-16 md:py-24">
      <div className="container">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="eyebrow">Visit &amp; Order</p>
          <h2 className="mt-3 font-display text-3xl font-bold tracking-tight sm:text-4xl">
            Find us in the heart of Strathfield
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          {/* Details */}
          <Reveal className="flex flex-col gap-5">
            <Card className="rounded-2xl">
              <CardContent className="flex items-start gap-4 p-6">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-secondary">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-display font-semibold">Our Store</h3>
                  <p className="mt-1 text-muted-foreground">
                    {address.line1}
                    <br />
                    {address.suburb}, {address.state} {address.postcode}
                  </p>
                  <Button
                    asChild
                    variant="link"
                    className="h-auto p-0 text-foreground"
                  >
                    <a
                      href={address.mapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Navigation className="h-3.5 w-3.5" />
                      Get directions
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="rounded-2xl">
              <CardContent className="flex items-start gap-4 p-6">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-emerald-500/15">
                  <Clock className="h-5 w-5 text-emerald-600 dark:text-emerald-400" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="font-display font-semibold">
                      Opening Hours
                    </h3>
                    <Badge variant="success">{hours.label}</Badge>
                  </div>
                  <p className="mt-1 text-muted-foreground">{hours.detail}</p>
                </div>
              </CardContent>
            </Card>

            <Card className="rounded-2xl">
              <CardContent className="flex flex-col gap-4 p-6">
                <div className="flex items-start gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-secondary">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-display font-semibold">Get in touch</h3>
                    <p className="mt-1 text-muted-foreground">
                      {contact.phoneDisplay}
                    </p>
                    <p className="flex items-center gap-1.5 text-muted-foreground">
                      <Mail className="h-3.5 w-3.5" />
                      {contact.email}
                    </p>
                  </div>
                </div>
                <Button
                  asChild
                  variant="whatsapp"
                  size="lg"
                  className="w-full rounded-full"
                >
                  <a
                    href={whatsappUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <WhatsAppIcon className="h-5 w-5" />
                    Order via WhatsApp
                  </a>
                </Button>
              </CardContent>
            </Card>
          </Reveal>

          {/* Map */}
          <Reveal
            delay={120}
            className="min-h-[340px] overflow-hidden rounded-2xl border shadow-sm lg:min-h-full"
          >
            <iframe
              title={`Map showing ${siteConfig.name} in Strathfield`}
              src={mapEmbedSrc}
              className="h-full min-h-[340px] w-full"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
