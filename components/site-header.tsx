"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

import { siteConfig, whatsappUrl } from "@/lib/site-config";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";
import { WhatsAppIcon } from "@/components/icons";
import { cn } from "@/lib/utils";

const navLinks = [
  { label: "Collection", href: "#collection" },
  { label: "Why us", href: "#why" },
  { label: "Visit", href: "#location" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300",
        scrolled
          ? "glass border-b border-border/60 shadow-sm"
          : "border-b border-transparent bg-transparent"
      )}
    >
      <div className="container flex h-16 items-center justify-between">
        <a href="#top" className="group flex items-center gap-2.5">
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-foreground text-background font-display text-sm font-bold">
            SS
          </span>
          <span className="flex flex-col leading-none">
            <span className="font-display text-base font-bold tracking-tight">
              {siteConfig.name}
            </span>
            <span className="text-[10px] font-medium uppercase tracking-[0.22em] text-muted-foreground">
              Strathfield · NSW
            </span>
          </span>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-1.5">
          <ThemeToggle />
          <div className="hidden md:block">
            <Button asChild variant="whatsapp" size="sm" className="rounded-full">
              <a href={whatsappUrl()} target="_blank" rel="noopener noreferrer">
                <WhatsAppIcon className="h-4 w-4" />
                Order
              </a>
            </Button>
          </div>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="inline-flex items-center justify-center rounded-full p-2 text-foreground md:hidden"
            aria-label="Toggle navigation menu"
            aria-expanded={open}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      <div
        className={cn(
          "glass border-t border-border/60 md:hidden",
          open ? "block" : "hidden"
        )}
      >
        <nav className="container flex flex-col gap-1 py-4">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setOpen(false)}
              className="rounded-lg px-2 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
          <Button asChild variant="whatsapp" className="mt-2 w-full rounded-full">
            <a href={whatsappUrl()} target="_blank" rel="noopener noreferrer">
              <WhatsAppIcon className="h-4 w-4" />
              Order via WhatsApp
            </a>
          </Button>
        </nav>
      </div>
    </header>
  );
}
