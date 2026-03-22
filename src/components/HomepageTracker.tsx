"use client";

import { useEffect, useRef } from "react";
import { usePostHog } from "posthog-js/react";

const SECTIONS = [
  { id: "hero", event: "viewed_hero" },
  { id: "philosophy", event: "viewed_philosophy" },
  { id: "price-comparison", event: "viewed_price_comparison" },
  { id: "social-proof", event: "viewed_social_proof" },
  { id: "specs", event: "viewed_specs" },
];

export default function HomepageTracker() {
  const posthog = usePostHog();
  const firedRef = useRef<Set<string>>(new Set());

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.id;
            const section = SECTIONS.find((s) => s.id === id);
            if (section && !firedRef.current.has(id)) {
              firedRef.current.add(id);
              posthog.capture(section.event);
              if (id === "hero") {
                posthog.capture("homepage_viewed");
              }
            }
          }
        });
      },
      { threshold: 0.3 }
    );

    SECTIONS.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [posthog]);

  // Track reserve button clicks
  useEffect(() => {
    function handleClick(e: MouseEvent) {
      const target = e.target as HTMLElement;
      const link = target.closest('a[href="/reserve"]');
      if (link) {
        posthog.capture("reserve_button_clicked", {
          location: link.closest("nav")
            ? "sticky_cta"
            : link.closest("#hero-cta")
            ? "hero"
            : "other",
        });
      }
    }

    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, [posthog]);

  return null;
}
