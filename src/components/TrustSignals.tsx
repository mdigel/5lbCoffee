"use client";

import { useRef, type ReactNode } from "react";
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
    infoTitle: "Why altitude matters",
    infoContent: (
      <span className="space-y-2 block">
        <span className="block">
          At{" "}
          <strong className="text-[#1C1917]/80">
            1,200 to 2,200 meters above sea level
          </strong>
          , cooler temperatures slow the maturation of the coffee cherry,
          allowing sugars and complex compounds to develop over a longer period.
        </span>
        <span className="block">
          The result is a denser bean with{" "}
          <strong className="text-[#1C1917]/80">
            more nuanced flavor, brighter acidity, deeper sweetness
          </strong>
          , and a finish that lingers.
        </span>
        <span className="block">
          <strong className="text-[#1C1917]/80">
            Most commodity coffee is grown at low altitudes
          </strong>{" "}
          for volume and speed. Specialty coffee is grown high up, slowly, by
          farmers who have worked the same mountain plots for generations.{" "}
          <strong className="text-[#1C1917]/80">
            That&rsquo;s not a coincidence.
          </strong>
        </span>
      </span>
    ),
  },
  {
    icon: Leaf,
    text: "Natural pesticides",
    infoTitle: "Why not USDA Organic?",
    infoContent: (
      <span className="space-y-2 block">
        <span className="block">
          Our coffees are{" "}
          <strong className="text-[#1C1917]/80">
            not USDA certified organic
          </strong>
          . However, our roasting partner does extensive research on each source
          and farmer and{" "}
          <strong className="text-[#1C1917]/80">
            does not buy from large farms that use pesticides
          </strong>
          .
        </span>
        <span className="block">
          His priority is to optimize for flavor, and coffees that taste the best
          are usually grown by small farmers who can&rsquo;t afford the
          certification costs and grow at high altitudes, making it impractical
          to haul certified organic fertilizers.
        </span>
        <span className="block">
          <strong className="text-[#1C1917]/80">
            So they do it naturally.
          </strong>
        </span>
      </span>
    ),
  },
  {
    icon: Heart,
    text: "Ethical farming",
    infoTitle: "Direct-trade since day one",
    infoContent: (
      <span className="space-y-2 block">
        <span className="block">
          Our roasting partner works{" "}
          <strong className="text-[#1C1917]/80">
            directly with farmers and small cooperatives
          </strong>
          , ensuring every partner is{" "}
          <strong className="text-[#1C1917]/80">fairly compensated</strong>.
          Something they&rsquo;ve done since the very beginning.
        </span>
        <span className="block">
          They constantly travel the globe to meet farmers and cup beans at
          origin, building{" "}
          <strong className="text-[#1C1917]/80">
            long-standing personal relationships
          </strong>
          .
        </span>
        <span className="block">
          <strong className="text-[#1C1917]/80">
            They were farm-to-cup before farm-to-table was even a thing.
          </strong>
        </span>
      </span>
    ),
  },
  { icon: DollarSign, text: "Wholesale pricing" },
  { icon: Flame, text: "Roasted to order" },
  { icon: Award, text: "Roaster of the Year" },
  { icon: Coffee, text: "Coffee, decaf & espresso" },
];

function InfoDialog({
  title,
  content,
  label,
}: {
  title: string;
  content: ReactNode;
  label: string;
}) {
  const dialogRef = useRef<HTMLDialogElement>(null);

  return (
    <>
      <button
        onClick={() => dialogRef.current?.showModal()}
        className="text-[#1C1917]/30 hover:text-[#A67B5B] transition-colors"
        aria-label={label}
      >
        <Info className="w-3.5 h-3.5" />
      </button>
      <dialog
        ref={dialogRef}
        onClick={(e) => {
          if (e.target === e.currentTarget) dialogRef.current?.close();
        }}
        className="backdrop:bg-black/30 bg-transparent p-0 m-auto max-w-[320px] w-[calc(100%-2rem)] open:flex items-center justify-center"
      >
        <div className="bg-white rounded-xl shadow-xl border border-[#E2E8F0] p-4 w-full">
          <div className="flex justify-between items-start gap-2 mb-2">
            <span className="text-base font-semibold text-[#1C1917]">
              {title}
            </span>
            <button
              onClick={() => dialogRef.current?.close()}
              className="text-[#1C1917]/30 hover:text-[#1C1917] transition-colors shrink-0"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
          <p className="text-sm text-[#1C1917]/60 leading-relaxed">
            {content}
          </p>
        </div>
      </dialog>
    </>
  );
}

export default function TrustSignals() {
  return (
    <div className="mb-8 grid grid-cols-2 gap-x-6 gap-y-2">
      {items.map((item) => (
        <div key={item.text} className="flex items-center gap-2 relative">
          <item.icon className="w-3.5 h-3.5 text-[#A67B5B] shrink-0" />
          <span className="text-sm text-[#1C1917]/50">{item.text}</span>
          {item.infoTitle && item.infoContent && (
            <InfoDialog
              title={item.infoTitle}
              content={item.infoContent}
              label={`Learn more about ${item.text.toLowerCase()}`}
            />
          )}
        </div>
      ))}
    </div>
  );
}
