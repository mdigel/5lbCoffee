"use client";

import { useState, useRef, useEffect } from "react";
import { createPortal } from "react-dom";
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
      {open && createPortal(
        <>
        <div
          className="fixed inset-0 bg-black/30 z-50 md:hidden"
          onClick={() => setOpen(false)}
        />
        <div
          ref={popupRef}
          className="fixed inset-x-4 top-1/2 -translate-y-1/2 z-50 md:absolute md:inset-auto md:left-0 md:top-full md:mt-2 md:translate-y-0 w-auto md:w-[400px] bg-white rounded-xl shadow-xl border border-[#E2E8F0] p-5 max-h-[70vh] overflow-y-auto"
        >
          <div className="flex justify-end items-start mb-3">
            <button
              onClick={() => setOpen(false)}
              className="text-[#1C1917]/30 hover:text-[#1C1917] transition-colors shrink-0"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <div className="text-base text-[#1C1917]/60 leading-relaxed space-y-3">
            <p>
              <strong className="text-[#1C1917]/80">Yes. Freezing coffee
             preserves flavor, </strong> but it depends on what you freeze and how you
              freeze it. </p>
              
              <p>

           Lower temperatures slow chemical reactions and aroma
                loss.
            </p>

            

            <div className="bg-[#A67B5B]/5 rounded-lg p-3 border border-[#A67B5B]/10">
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
                    <td className="py-1 pr-2">Freezer</td>
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
              <p>
                Whole beans are the best option—many high-end cafés freeze rare
                lots to keep peak flavor for months. Grind from frozen.
              </p>
            </div>
          </div>
        </div>
        </>,
        document.body
      )}
    </span>
  );
}
