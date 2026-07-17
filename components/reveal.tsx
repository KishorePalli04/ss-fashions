"use client";

import * as React from "react";

import { cn } from "@/lib/utils";

type RevealProps = React.HTMLAttributes<HTMLDivElement> & {
  /** Stagger the entrance by a few hundred ms. */
  delay?: number;
  as?: "div" | "section" | "li";
};

/**
 * Fades + slides its children in the first time they scroll into view.
 * Degrades gracefully: content is visible immediately if JS or Intersection
 * Observer is unavailable, and animation is skipped for reduced-motion users
 * (handled in globals.css).
 */
export function Reveal({
  children,
  className,
  delay = 0,
  as = "div",
  ...props
}: RevealProps) {
  const ref = React.useRef<HTMLDivElement>(null);
  const [visible, setVisible] = React.useState(false);

  React.useEffect(() => {
    const node = ref.current;
    if (!node || typeof IntersectionObserver === "undefined") {
      setVisible(true);
      return;
    }
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -60px 0px" }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  const Comp = as as React.ElementType;

  return (
    <Comp
      ref={ref}
      className={cn("reveal", visible && "is-visible", className)}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
      {...props}
    >
      {children}
    </Comp>
  );
}
