"use client";

import { useRef } from "react";
import { Info, X } from "lucide-react";

export default function ThreeMonthsInfo() {
  const dialogRef = useRef<HTMLDialogElement>(null);

  return (
    <span className="relative inline-flex items-center align-middle">
      <button
        onClick={() => dialogRef.current?.showModal()}
        className="text-[#1C1917]/30 hover:text-[#A67B5B] transition-colors ml-1"
        aria-label="Learn how long 5 lbs lasts"
      >
        <Info className="w-4 h-4" />
      </button>
      <dialog
        ref={dialogRef}
        onClick={(e) => {
          if (e.target === e.currentTarget) dialogRef.current?.close();
        }}
        className="backdrop:bg-black/30 bg-transparent p-0 m-auto max-w-[340px] w-[calc(100%-2rem)] open:flex items-center justify-center"
      >
        <div className="bg-white rounded-xl shadow-xl border border-[#E2E8F0] p-5 w-full">
          <div className="flex justify-between items-start gap-2 mb-3">
            <span className="text-base font-semibold text-[#1C1917]">
              How long does 5 lbs last?
            </span>
            <button
              onClick={() => dialogRef.current?.close()}
              className="text-[#1C1917]/30 hover:text-[#1C1917] transition-colors shrink-0"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
          <div className="text-sm text-[#1C1917]/60 leading-relaxed space-y-3">
            <p>
              5 lbs = 2,268g. At ~15g per cup, that&rsquo;s roughly{" "}
              <strong className="text-[#1C1917]/80">~150 cups</strong> of
              coffee.
            </p>
            <p>
              A couple each drinking a cup a day = 2 cups/day &times; 75–90
              days ={" "}
              <strong className="text-[#1C1917]/80">~2–3 months</strong> of
              fresh, specialty-grade coffee at home.
            </p>
          </div>
        </div>
      </dialog>
    </span>
  );
}
