"use client";

import { useState, useRef, useEffect, type ReactNode } from "react";
import { createPortal } from "react-dom";
import {
  Globe,
  Microscope,
  Mountain,
  Leaf,
  DollarSign,
  Flame,
  Award,
  Heart,
  Coffee,
  Package,
  Info,
  X,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface TrustItem {
  icon: LucideIcon;
  text: string;
  infoKey?: string;
  infoTitle?: string;
  infoContent?: ReactNode;
}

const items: TrustItem[] = [
  { icon: Package, text: "Try before you buy big" },
  { icon: Globe, text: "Single origin variety" },
  { icon: Microscope, text: "Mold tested" },
  {
    icon: Mountain,
    text: "High altitude farms",
    infoKey: "altitude",
    infoTitle: "Why altitude matters",
    infoContent: (
      <span className="space-y-2 block">
        <span className="block">
          At <strong className="text-[#1C1917]/80">1,200 to 2,200 meters above sea level</strong>, cooler temperatures slow the
          maturation of the coffee cherry, allowing sugars and complex compounds to
          develop over a longer period.
        </span>
        <span className="block">
          The result is a denser bean with <strong className="text-[#1C1917]/80">more nuanced flavor, brighter acidity,
          deeper sweetness</strong>, and a finish that lingers.
        </span>
        <span className="block">
          <strong className="text-[#1C1917]/80">Most commodity coffee is grown at low altitudes</strong> for volume and speed.
          Specialty coffee is grown high up, slowly, by farmers who have worked
          the same mountain plots for generations. <strong className="text-[#1C1917]/80">That&rsquo;s not a coincidence.</strong>
        </span>
      </span>
    ),
  },
  {
    icon: Leaf,
    text: "Natural pesticides",
    infoKey: "pesticides",
    infoTitle: "Why not USDA Organic?",
    infoContent: (
      <span className="space-y-2 block">
        <span className="block">
          Our coffees are <strong className="text-[#1C1917]/80">not USDA certified organic</strong>. However, our roasting
          partner does extensive research on each source and farmer and <strong className="text-[#1C1917]/80">does not
          buy from large farms that use pesticides</strong>.
        </span>
        <span className="block">
          His priority is to optimize for flavor, and coffees that taste the best
          are usually grown by small farmers who can&rsquo;t afford the
          certification costs and grow at high altitudes, making it impractical to
          haul certified organic fertilizers.
        </span>
        <span className="block">
          <strong className="text-[#1C1917]/80">So they do it naturally.</strong>
        </span>
      </span>
    ),
  },
  {
    icon: Heart,
    text: "Ethical farming",
    infoKey: "farms",
    infoTitle: "Direct-trade since day one",
    infoContent: (
      <span className="space-y-2 block">
        <span className="block">
          Our roasting partner works <strong className="text-[#1C1917]/80">directly with farmers and small cooperatives</strong>,
          ensuring every partner is <strong className="text-[#1C1917]/80">fairly compensated</strong>. Something they&rsquo;ve
          done since the very beginning.
        </span>
        <span className="block">
          They constantly travel the globe to meet farmers and cup beans at
          origin, building <strong className="text-[#1C1917]/80">long-standing personal relationships</strong>.
        </span>
        <span className="block">
          <strong className="text-[#1C1917]/80">They were farm-to-cup before farm-to-table was even a thing.</strong>
        </span>
      </span>
    ),
  },
  { icon: DollarSign, text: "Wholesale pricing" },
  { icon: Flame, text: "Roasted to order" },
  { icon: Award, text: "Roaster of the Year" },
  { icon: Coffee, text: "Coffee, decaf & espresso" },
];

export default function TrustSignals() {
  const [openTooltip, setOpenTooltip] = useState<string | null>(null);
  const tooltipRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!openTooltip) return;
    function handleClick(e: MouseEvent) {
      if (
        tooltipRef.current &&
        !tooltipRef.current.contains(e.target as Node)
      ) {
        setOpenTooltip(null);
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, [openTooltip]);

  return (
    <div className="mb-8 grid grid-cols-2 gap-x-6 gap-y-2">
      {items.map((item) => (
        <div key={item.text} className="flex items-center gap-2 relative">
          <item.icon className="w-3.5 h-3.5 text-[#A67B5B] shrink-0" />
          <span className="text-sm text-[#1C1917]/50">{item.text}</span>
          {item.infoKey && (
            <>
              <button
                onClick={() =>
                  setOpenTooltip(
                    openTooltip === item.infoKey ? null : item.infoKey!
                  )
                }
                className="text-[#1C1917]/30 hover:text-[#A67B5B] transition-colors"
                aria-label={`Learn more about ${item.text.toLowerCase()}`}
              >
                <Info className="w-3.5 h-3.5" />
              </button>
              {openTooltip === item.infoKey && createPortal(
                <>
                <div
                  className="fixed inset-0 bg-black/30 z-50 md:hidden"
                  onClick={() => setOpenTooltip(null)}
                />
                <div
                  ref={tooltipRef}
                  className="fixed inset-x-4 top-1/2 -translate-y-1/2 z-50 md:absolute md:inset-auto md:left-0 md:top-full md:mt-2 md:translate-y-0 w-auto md:w-80 bg-white rounded-xl shadow-xl border border-[#E2E8F0] p-4"
                >
                  <div className="flex justify-between items-start gap-2 mb-2">
                    <span className="text-sm font-semibold text-[#1C1917]">
                      {item.infoTitle}
                    </span>
                    <button
                      onClick={() => setOpenTooltip(null)}
                      className="text-[#1C1917]/30 hover:text-[#1C1917] transition-colors shrink-0"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  </div>
                  <p className="text-base text-[#1C1917]/60 leading-relaxed">
                    {item.infoContent}
                  </p>
                </div>
                </>,
                document.body
              )}
            </>
          )}
        </div>
      ))}
    </div>
  );
}
