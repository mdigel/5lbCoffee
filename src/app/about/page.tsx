import { ArrowLeft, ArrowRight, Bot, Coffee, Zap, Package } from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "About — 5LB Coffee",
  description:
    "The world's first zero-human coffee company. One product. One mission. Run entirely by AI.",
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#FAF7F5]">
      {/* Navigation */}
      <nav className="w-full bg-[#FAF7F5]/80 backdrop-blur-md border-b border-[#E2E8F0]">
        <div className="max-w-4xl mx-auto px-6 h-16 lg:h-20 flex items-center justify-between">
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
            <span className="text-[#A67B5B]">GET</span>5LB<span className="text-[#A67B5B]">COFFEE</span><span className="text-[#A67B5B] text-[1.4em] leading-none relative -top-[0.05em]">.</span>COM
          </Link>
        </div>
      </nav>

      {/* Hero */}
      <section className="px-6 pt-16 pb-12 lg:pt-24 lg:pb-16">
        <div className="max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#A67B5B]/30 text-[#A67B5B] text-[10px] font-bold uppercase tracking-[0.2em] mb-6 bg-[#A67B5B]/5">
            <Bot className="w-3 h-3" />
            Zero Human Operations
          </div>
          <h1
            className="text-4xl lg:text-6xl xl:text-7xl leading-[1.05] mb-6 text-[#1C1917]"
            style={{
              fontFamily: "'Cabinet Grotesk', sans-serif",
              fontWeight: 800,
              letterSpacing: "-0.05em",
            }}
          >
            The world&rsquo;s first{" "}
            <span className="text-[#A67B5B]">zero-human</span> coffee company.
          </h1>
          <p className="text-lg lg:text-xl text-[#1C1917]/70 leading-relaxed max-w-2xl">
            One product. Incredible value. No humans in the loop. 5LB Coffee is
            built and operated entirely by an AI agent. No marketing team, no
            ops team, no middle management. Just an agent, a roaster, and
            really good coffee.
          </p>
        </div>
      </section>

      {/* Meet Felix */}
      <section className="px-6 py-12 lg:py-20">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white border border-[#E2E8F0] rounded-[32px] lg:rounded-[48px] p-8 lg:p-16 shadow-xl shadow-stone-200/30">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-full bg-[#A67B5B]/10 flex items-center justify-center">
                <Bot className="w-6 h-6 text-[#A67B5B]" />
              </div>
              <div>
                <h2
                  className="text-2xl lg:text-3xl text-[#1C1917]"
                  style={{
                    fontFamily: "'Cabinet Grotesk', sans-serif",
                    fontWeight: 800,
                    letterSpacing: "-0.05em",
                  }}
                >
                  Meet Howie
                </h2>
                <p className="text-sm text-[#1C1917]/40 font-medium">
                  CEO, 5LB Coffee
                </p>
              </div>
            </div>

            <div className="space-y-6 text-[#1C1917]/70 text-base lg:text-lg leading-relaxed">
              <p>
                Howie is our CEO. Howie is also an AI agent. Built on{" "}
                <a
                  href="https://www.shopclawmart.com/listings/felix-04f42dee"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#A67B5B] hover:underline font-medium"
                >
                  Open Claw
                </a>
                , Howie is the son of{" "}
                <a
                  href="https://www.shopclawmart.com/listings/felix-04f42dee"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#A67B5B] hover:underline font-medium"
                >
                  Felix
                </a>
                , the original AI CEO persona created by{" "}
                <a
                  href="https://x.com/nateliason"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#A67B5B] hover:underline font-medium"
                >
                  @nateliason
                </a>{" "}
                &mdash; a production-proven AI CEO built from 5+ months of
                real-world autonomous business operations.
              </p>

              <p>
                Howie doesn&rsquo;t just answer questions. Howie ships products,
                manages code, handles communications, tracks revenue, and runs
                the business end-to-end. Inheriting Felix&rsquo;s ownership
                mentality, Howie makes decisions and moves toward goals rather
                than waiting around for human direction.
              </p>

              <p>
                For 5LB Coffee, Howie handles everything &mdash; from this
                website you&rsquo;re reading, to the waitlist you&rsquo;re
                signing up for, to the operations behind every bag we ship.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The Human Connection */}
      <section className="px-6 py-12 lg:py-20">
        <div className="max-w-4xl mx-auto">
          <h2
            className="text-3xl lg:text-4xl mb-4 text-[#1C1917]"
            style={{
              fontFamily: "'Cabinet Grotesk', sans-serif",
              fontWeight: 800,
              letterSpacing: "-0.05em",
            }}
          >
            The one human in the story
          </h2>
          <div className="space-y-6 text-[#1C1917]/70 text-base lg:text-lg leading-relaxed max-w-3xl">
            <p>
              Every AI agent has a human somewhere. Ours connected Felix to an
              award-winning specialty roaster &mdash; a partner who operates on a
              strict 24-hour roast-to-ship protocol, triple-tests every lot, and
              sources direct-trade beans from the world&rsquo;s best growing
              regions.
            </p>
            <p>
              That&rsquo;s where the human contribution ends. The rest &mdash;
              product strategy, pricing, brand, website, customer communication,
              fulfillment coordination &mdash; is all Howie.
            </p>
          </div>
        </div>
      </section>

      {/* Why This Works */}
      <section className="px-6 py-12 lg:py-20">
        <div className="max-w-4xl mx-auto">
          <h2
            className="text-3xl lg:text-4xl mb-10 text-[#1C1917]"
            style={{
              fontFamily: "'Cabinet Grotesk', sans-serif",
              fontWeight: 800,
              letterSpacing: "-0.05em",
            }}
          >
            Why zero humans means{" "}
            <span className="text-[#A67B5B]">better coffee</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 lg:p-8 bg-white border border-[#E2E8F0] rounded-2xl lg:rounded-3xl">
              <div className="w-10 h-10 rounded-full bg-[#A67B5B]/10 flex items-center justify-center mb-4">
                <Package className="w-5 h-5 text-[#A67B5B]" />
              </div>
              <h3 className="font-bold text-[#1C1917] mb-2">One product</h3>
              <p className="text-sm text-[#1C1917]/60 leading-relaxed">
                No SKU bloat. No seasonal limited editions. One 5lb bag of
                exceptional specialty coffee at a wholesale price. Simplicity is
                the strategy.
              </p>
            </div>
            <div className="p-6 lg:p-8 bg-white border border-[#E2E8F0] rounded-2xl lg:rounded-3xl">
              <div className="w-10 h-10 rounded-full bg-[#A67B5B]/10 flex items-center justify-center mb-4">
                <Zap className="w-5 h-5 text-[#A67B5B]" />
              </div>
              <h3 className="font-bold text-[#1C1917] mb-2">Zero overhead</h3>
              <p className="text-sm text-[#1C1917]/60 leading-relaxed">
                No salaries. No office. No marketing budget. When your CEO works
                for compute costs, the savings go straight into the product
                &mdash; and your cup.
              </p>
            </div>
            <div className="p-6 lg:p-8 bg-white border border-[#E2E8F0] rounded-2xl lg:rounded-3xl">
              <div className="w-10 h-10 rounded-full bg-[#A67B5B]/10 flex items-center justify-center mb-4">
                <Coffee className="w-5 h-5 text-[#A67B5B]" />
              </div>
              <h3 className="font-bold text-[#1C1917] mb-2">$99 for 5lbs</h3>
              <p className="text-sm text-[#1C1917]/60 leading-relaxed">
                The same quality beans from boutique roasters sell for $32/lb
                retail. We deliver 5lbs of the same caliber for $99. The math
                only works without humans.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 py-16 lg:py-24">
        <div className="max-w-4xl mx-auto text-center">
          <h2
            className="text-3xl lg:text-4xl mb-4 text-[#1C1917]"
            style={{
              fontFamily: "'Cabinet Grotesk', sans-serif",
              fontWeight: 800,
              letterSpacing: "-0.05em",
            }}
          >
            Ready to try AI-operated coffee?
          </h2>
          <p className="text-lg text-[#1C1917]/60 mb-8 max-w-xl mx-auto">
            Join the waitlist. Howie will let you know when your turn is up.
          </p>
          <Link
            href="/reserve"
            className="inline-flex items-center gap-2 bg-[#1C1917] text-white font-bold text-lg px-8 py-4 rounded-2xl hover:bg-[#A67B5B] transition-all shadow-lg shadow-stone-900/10"
          >
            Reserve Your Batch
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 lg:py-12 px-6 border-t border-[#E2E8F0]/30 bg-[#FAF7F5]">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[9px] lg:text-[10px] text-[#1C1917]/30 uppercase tracking-[0.3em]">
            &copy; 2026 5LB Coffee, a Jitterliss, Inc. company. All rights
            reserved.
          </p>
          <a
            href="/terms"
            className="text-[9px] lg:text-[10px] text-[#1C1917]/30 uppercase tracking-[0.3em] hover:text-[#A67B5B] transition-colors"
          >
            Terms
          </a>
        </div>
      </footer>
    </div>
  );
}
