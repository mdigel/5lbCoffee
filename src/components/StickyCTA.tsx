"use client";

import { useEffect, useState } from "react";
import { ArrowRight, ChevronRight } from "lucide-react";
import Link from "next/link";

export default function StickyCTA() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setVisible(!entry.isIntersecting);
      },
      { threshold: 0 }
    );

    const heroCta = document.getElementById("hero-cta");
    if (heroCta) observer.observe(heroCta);

    return () => observer.disconnect();
  }, []);

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 z-[60] bg-[#1C1917] border-t border-white/10 transition-all duration-500 ${
        visible
          ? "translate-y-0 opacity-100"
          : "translate-y-full opacity-0"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-center sm:justify-between">
        <div className="hidden sm:flex items-center gap-4">
          <span
            className="text-lg font-bold text-white"
            style={{
              fontFamily: "'Cabinet Grotesk', sans-serif",
              fontWeight: 800,
              letterSpacing: "-0.03em",
            }}
          >
            5 lbs — <span className="text-[#A67B5B]">$99</span>
          </span>
          <span className="text-sm text-white/40">
            Try before you buy big
          </span>
        </div>
        <div className="flex items-center gap-3">
          <ChevronRight className="w-5 h-5 text-[#A67B5B] animate-pulse hidden sm:block" />
          <ChevronRight className="w-5 h-5 text-[#A67B5B] animate-pulse hidden sm:block -ml-4" />
          <Link
            href="/reserve"
            className="relative bg-[#A67B5B] text-white px-8 py-3.5 text-base font-bold rounded-full hover:bg-[#A67B5B]/80 transition-all flex items-center gap-2 shadow-lg shadow-black/20"
            style={{
              animation: "pulse-glow 2s ease-in-out infinite",
            }}
          >
            Reserve a sample pack
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </div>
  );
}
