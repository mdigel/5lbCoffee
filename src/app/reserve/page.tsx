import ReserveForm from "@/components/ReserveForm";
import { ArrowLeft, Bell, ShieldCheck, CreditCard, Coffee } from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "Reserve Your Batch — 5LB Coffee",
  description:
    "Secure your place in the next roasting cycle. Priority access to our $99 wholesale rate.",
};

export default function ReservePage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#FAF7F5]">
      {/* Navigation */}
      <nav className="shrink-0 w-full z-10 bg-[#FAF7F5]/80 backdrop-blur-md border-b border-[#E2E8F0]">
        <div className="max-w-7xl mx-auto px-6 h-16 lg:h-20 flex items-center justify-between">
          <Link
            href="/"
            className="flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-[#1C1917]/60 hover:text-[#A67B5B] transition-colors py-2"
          >
            <ArrowLeft className="w-4 h-4" />
            <span className="hidden sm:inline">Back to Home</span>
            <span className="sm:hidden">Back</span>
          </Link>
          <Link
            href="/"
            style={{
              fontFamily: "'Cabinet Grotesk', sans-serif",
              fontWeight: 800,
              letterSpacing: "-0.05em",
            }}
            className="text-lg lg:text-2xl tracking-tight uppercase"
          >
            <span className="text-[#A67B5B]">GET</span>5LB<span className="text-[#A67B5B] text-[1.4em] leading-none relative -top-[0.05em]">.</span>COFFEE
          </Link>
        </div>
      </nav>

      {/* Main Content */}
      <main className="flex-grow flex flex-col lg:flex-row">
        {/* Left: Brand & Info */}
        <div className="lg:w-1/2 flex items-center justify-center px-6 py-4 lg:p-24 bg-[#F5F5F4]">
          <div className="max-w-lg fade-in">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#A67B5B]/30 text-[#A67B5B] text-[10px] font-bold uppercase tracking-[0.2em] mb-6 lg:mb-8 bg-[#A67B5B]/5">
              Priority Access Line
            </div>

            <h1
              className="text-4xl lg:text-5xl xl:text-7xl leading-[1.05] mb-6 lg:mb-8 text-[#1C1917]"
              style={{
                fontFamily: "'Cabinet Grotesk', sans-serif",
                fontWeight: 800,
                letterSpacing: "-0.05em",
              }}
            >
              Secure your place in the next{" "}
              <span className="text-[#A67B5B]">roasting cycle.</span>
            </h1>

            <p className="text-lg lg:text-xl text-[#1C1917]/70 mb-8 lg:mb-12 leading-relaxed">
              We launch in micro-batches to strictly uphold our 24-hour
              roasting protocol. Join the launch list for priority notification
              and access to our $99 wholesale rate.
            </p>

          </div>
        </div>

        {/* Right: Form */}
        <div className="lg:w-1/2 flex items-center justify-center p-6 lg:p-24">
          <div
            className="w-full max-w-md fade-in"
            style={{ animationDelay: "0.1s" }}
          >
         

            {/* Form Card */}
            <div className="bg-white border border-[#E2E8F0] rounded-[32px] lg:rounded-[48px] p-6 lg:p-12 shadow-xl lg:shadow-2xl shadow-stone-200/40 lg:shadow-stone-200/50">
              <div className="text-center mb-6 lg:mb-10">
                <h2
                  className="text-2xl lg:text-3xl"
                  style={{
                    fontFamily: "'Cabinet Grotesk', sans-serif",
                    fontWeight: 800,
                    letterSpacing: "-0.05em",
                  }}
                >
                  Reserve Your Batch
                </h2>
              </div>

              <ReserveForm />

              <div className="mt-6 lg:mt-8 pt-4 border-t border-[#E2E8F0]/50">
                <div className="flex flex-wrap items-center justify-center gap-x-3 lg:gap-x-4 gap-y-2 lg:gap-y-3">
                  <span className="inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-widest text-[#1C1917]/40 bg-[#1C1917]/5 px-2 py-1 rounded-md">
                    <ShieldCheck className="w-3 h-3" />
                    No commitment
                  </span>
                  
                  <span className="inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-widest text-[#A67B5B] bg-[#A67B5B]/10 px-2 py-1 rounded-md">
                    <CreditCard className="w-3 h-3" />
                    No credit card required
                  </span>
                </div>
              </div>
            </div>

            {/* Subtle Image */}
            <div className="mt-12 flex justify-center opacity-20">
              <img
                src="https://vgbujcuwptvheqijyjbe.supabase.co/storage/v1/object/public/hmac-uploads/uploads/32525c36-4158-4f7b-af06-f0d19769a8e6/1773608939695-7edb74a8/CoffeeBag.png"
                alt="Coffee Bag Silhouette"
                className="h-24 lg:h-32 object-contain grayscale"
              />
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="shrink-0 py-8 lg:py-12 px-6 border-t border-[#E2E8F0]/30 bg-[#FAF7F5]">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[9px] lg:text-[10px] text-[#1C1917]/30 uppercase tracking-[0.3em] text-center">
            &copy; 2026 5LB Coffee, a Jitterliss, Inc. company. All rights reserved.
          </p>
          <a href="/terms" className="text-[9px] lg:text-[10px] text-[#1C1917]/30 uppercase tracking-[0.3em] hover:text-[#A67B5B] transition-colors">
            Terms
          </a>
        </div>
      </footer>
    </div>
  );
}
