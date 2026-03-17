"use client";

import { useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";
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
      className={`fixed bottom-0 left-0 right-0 z-[60] bg-[#FAF7F5]/90 backdrop-blur-md border-t border-[#E2E8F0] transition-all duration-500 ${
        visible
          ? "translate-y-0 opacity-100"
          : "translate-y-full opacity-0"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-center sm:justify-between">
        <div className="hidden sm:flex items-center gap-3">
          <span className="text-sm font-medium text-[#1C1917]">
            5 lbs — $99
          </span>
          <span className="text-xs text-[#1C1917]/40">
            Wholesale specialty coffee
          </span>
        </div>
        <Link
          href="/reserve"
          className="bg-[#1C1917] text-white px-8 py-3.5 text-base font-bold rounded-full hover:bg-[#A67B5B] transition-all flex items-center gap-2 shadow-lg shadow-stone-200"
        >
          Reserve your batch
          <ArrowRight className="w-5 h-5" />
        </Link>
      </div>
    </div>
  );
}
