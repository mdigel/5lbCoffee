"use client";

import { useState, useRef, useEffect } from "react";
import { createPortal } from "react-dom";
import { Info, X } from "lucide-react";

export default function ThreeMonthsInfo() {
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
        aria-label="Learn how long 5 lbs lasts"
      >
        <Info className="w-4 h-4" />
      </button>
      {open && createPortal(
        <>
        <div
          className="fixed inset-0 bg-black/30 z-[100] md:hidden"
          onClick={() => setOpen(false)}
        />
        <div
          ref={popupRef}
          className="fixed inset-x-4 top-1/2 -translate-y-1/2 z-[100] md:absolute md:inset-auto md:left-0 md:top-full md:mt-2 md:translate-y-0 w-auto md:w-[340px] bg-white rounded-xl shadow-xl border border-[#E2E8F0] p-5"
        >
          <div className="flex justify-between items-start gap-2 mb-3">
            <span className="text-sm font-semibold text-[#1C1917]">
              How long does 5 lbs last?
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
              5 lbs = 2,268g. At ~15g per cup, that&rsquo;s roughly <strong className="text-[#1C1917]/80">~150 cups</strong> of coffee.
            </p>
            <p>
              A couple each drinking a cup a day = 2 cups/day &times; 75–90 days = <strong className="text-[#1C1917]/80">~2–3 months</strong> of fresh, specialty-grade coffee at home.
            </p>
          </div>
        </div>
        </>,
        document.body
      )}
    </span>
  );
}
