"use client";

import { useState, useRef, useEffect, type ReactNode } from "react";
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
  { icon: Globe, text: "Variety of single origin roasts" },
  { icon: Microscope, text: "Mold tested" },
  {
    icon: Mountain,
    text: "High altitude small farms",
    infoKey: "farms",
    infoTitle: "Direct-trade since day one",
    infoContent: (
      <>
        Our roasting partner works directly with farmers and small cooperatives,
        ensuring every partner is fairly compensated — something they&rsquo;ve
        done since the very beginning. They constantly travel the globe to meet
        farmers and cup beans at origin, building long-standing personal
        relationships. They were farm-to-cup before farm-to-table was even a
        thing.
      </>
    ),
  },
  {
    icon: Leaf,
    text: "Natural pesticides",
    infoKey: "pesticides",
    infoTitle: "Why not USDA Organic?",
    infoContent: (
      <>
        Our coffees are not USDA certified organic. However, our roasting
        partner does extensive research on each source and farmer and does not
        buy from large farms that use pesticides. His priority is to optimize for
        flavor — and coffees that taste the best are usually grown by small
        farmers who can&rsquo;t afford the certification costs and grow at high
        altitudes, making it impractical to haul certified organic fertilizers.
        So they do it naturally.
      </>
    ),
  },
  { icon: Heart, text: "Ethical farming" },
  { icon: DollarSign, text: "Wholesale pricing" },
  { icon: Flame, text: "Roasted to order" },
  { icon: Award, text: "Roaster of the Year winner" },
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
              {openTooltip === item.infoKey && (
                <div
                  ref={tooltipRef}
                  className="absolute left-0 top-full mt-2 z-50 w-80 bg-white rounded-xl shadow-xl border border-[#E2E8F0] p-4"
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
              )}
            </>
          )}
        </div>
      ))}
    </div>
  );
}
