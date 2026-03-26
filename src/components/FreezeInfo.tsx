"use client";

import { useState, useRef, useEffect } from "react";
import { Info, X } from "lucide-react";

export default function FreezeInfo() {
  const [open, setOpen] = useState(false);
  const popupRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    function handleClick(e: MouseEvent) {
      if (popupRef.current && !popupRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, [open]);

  return (
    <span className="relative inline-flex items-center align-middle">
      <button
        onClick={() => setOpen(!open)}
        className="text-[#1C1917]/30 hover:text-[#A67B5B] transition-colors ml-1"
        aria-label="Learn about freezing coffee"
      >
        <Info className="w-4 h-4" />
      </button>
      {open && (
        <div
          ref={popupRef}
          className="absolute left-0 top-full mt-2 z-50 w-[340px] sm:w-[400px] bg-white rounded-xl shadow-xl border border-[#E2E8F0] p-5 max-h-[70vh] overflow-y-auto"
        >
          <div className="flex justify-between items-start gap-2 mb-3">
            <span className="text-sm font-semibold text-[#1C1917]">
              Does freezing coffee preserve the taste?
            </span>
            <button
              onClick={() => setOpen(false)}
              className="text-[#1C1917]/30 hover:text-[#1C1917] transition-colors shrink-0"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <div className="text-base text-[#1C1917]/60 leading-relaxed space-y-3">
            <p>
              <strong className="text-[#1C1917]/80">Yes.</strong> Freezing coffee
              can preserve flavor, but it depends on what you freeze and how you
              freeze it.
            </p>

            <div>
              <p className="font-semibold text-[#1C1917]/70 mb-1">
                Whole Bean Coffee (Best Option)
              </p>
              <p>
                Coffee stales mainly due to oxidation and volatile aromatics
                escaping. Lower temperatures slow chemical reactions and aroma
                loss. Many high-end cafés store rare coffees frozen to maintain
                peak flavor for months.
              </p>
            </div>

            <div>
              <p className="font-semibold text-[#1C1917]/70 mb-1">
                Best practices
              </p>
              <ul className="list-disc pl-4 space-y-0.5">
                <li>Use airtight containers or vacuum-sealed bags</li>
                <li>Freeze in small portions (only thaw once)</li>
                <li>Do not repeatedly thaw and refreeze</li>
                <li>
                  Grind directly from frozen or let the container reach room temp
                  before opening to prevent condensation
                </li>
              </ul>
            </div>

            <div>
              <p className="font-semibold text-[#1C1917]/70 mb-1">
                How long does it last?
              </p>
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-[#E2E8F0]">
                    <th className="py-1 pr-2 font-semibold text-[#1C1917]/70">
                      Method
                    </th>
                    <th className="py-1 font-semibold text-[#1C1917]/70">
                      Flavor Window
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-[#E2E8F0]/50">
                    <td className="py-1 pr-2">Pantry (sealed)</td>
                    <td className="py-1">~2–4 weeks</td>
                  </tr>
                  <tr className="border-b border-[#E2E8F0]/50">
                    <td className="py-1 pr-2">Freezer, airtight</td>
                    <td className="py-1">~2–3 months</td>
                  </tr>
                  <tr>
                    <td className="py-1 pr-2">Freezer, vacuum sealed</td>
                    <td className="py-1">~4–6 months</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div>
              <p className="font-semibold text-[#1C1917]/70 mb-1">
                Ground coffee?
              </p>
              <p>
                Ground coffee stales faster due to surface area. At room temp it
                lasts ~3–7 days; frozen and airtight, ~2–4 weeks. Fresh grinding
                whole beans is far better.
              </p>
            </div>

            <div>
              <p className="font-semibold text-[#1C1917]/70 mb-1">
                The biggest mistake people make
              </p>
              <p>
                Most flavor loss happens when people open the container
                repeatedly, let humid air condense on the beans, or store coffee
                in non-airtight bags. That&rsquo;s why coffee experts recommend
                portioning before freezing.
              </p>
            </div>

            <div className="bg-[#A67B5B]/5 rounded-lg p-3 border border-[#A67B5B]/10">
              <p className="font-semibold text-[#1C1917]/70 mb-1">
                The simple rule
              </p>
              <p>
                Freeze whole beans in airtight portions — great idea.
                <br />
                Freeze ground coffee — marginal benefit.
              </p>
              <p className="mt-2 italic text-[#1C1917]/40">
                Fun fact: Some competitive baristas grind beans straight from
                frozen because it produces more uniform particle size.
              </p>
            </div>
          </div>
        </div>
      )}
    </span>
  );
}
