import StickyCTA from "@/components/StickyCTA";
import HomepageTracker from "@/components/HomepageTracker";
import {
  Clock,
  Award,
  Microscope,
  Globe,
  ArrowRight,
  Anchor,
  Check,
} from "lucide-react";
import TrustSignals from "@/components/TrustSignals";
import FreezeInfo from "@/components/FreezeInfo";
import ThreeMonthsInfo from "@/components/ThreeMonthsInfo";

const specs = [
  {
    icon: Clock,
    title: 'The "24-Hour" Roasting Rule',
    description: (
      <>
        Freshness is a science, not a buzzword. Our partner operates on a strict <strong className="text-[#1C1917]">&ldquo;Roasted to Order&rdquo; protocol</strong>: your 5lb bag is roasted and <strong className="text-[#1C1917]">shipped within 24 hours</strong> of being bagged. While other &ldquo;premium&rdquo; beans sit on shelves for weeks losing their aromatics, we ensure you receive yours at the <strong className="text-[#1C1917]">absolute peak of its flavor profile</strong>.
      </>
    ),
  },
  {
    icon: Award,
    title: "Multigenerational Roasting Mastery",
    description: (
      <>
        You aren&rsquo;t buying from a startup. Your coffee is handled by an <strong className="text-[#1C1917]">industry pioneer with decades of experience</strong> at the highest level. They are an original winner of the <strong className="text-[#1C1917]">Roaster&rsquo;s Choice Award</strong>, presented by the Specialty Coffee Association of America, and remain a top-vetted, <strong className="text-[#1C1917]">featured favorite on DrinkTrade.com</strong>.
      </>
    ),
  },
  {
    icon: Microscope,
    title: 'The "Triple-Tested" Batch',
    description: (
      <>
        Quality control is obsessive. Every lot is <strong className="text-[#1C1917]">cupped and scored three separate times</strong>: once at the farm, once at the port of arrival, and a final time at the roastery. If a batch doesn&rsquo;t meet their strict <strong className="text-[#1C1917]">&ldquo;specialty grade&rdquo; standards</strong> at any point, it is <strong className="text-[#1C1917]">rejected and never reaches your bag</strong>.
      </>
    ),
  },
  {
    icon: Globe,
    title: "Direct-Trade Heritage",
    description: (
      <>
        This Colombian roast is the result of <strong className="text-[#1C1917]">long-standing, personal relationships</strong> with micro-lot estates. By traveling to the origin and <strong className="text-[#1C1917]">buying directly from the farmers</strong>, our roaster ensures the highest quality harvest while providing the farmers with <strong className="text-[#1C1917]">premium pay that significantly exceeds fair-trade standards</strong>.
      </>
    ),
  },
];

export default function Home() {
  return (
    <div className="min-h-screen">
      <HomepageTracker />
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-[#FAF7F5]/80 backdrop-blur-md border-b border-[#E2E8F0]">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span
              className="text-xl tracking-tight uppercase"
              style={{
                fontFamily: "'Cabinet Grotesk', sans-serif",
                fontWeight: 800,
                letterSpacing: "-0.05em",
              }}
            >
              <span className="text-[#A67B5B]">GET</span> 5LB <span className="text-[#A67B5B]">COFFEE</span><span className="text-[#9CA3AF] text-[1.4em] leading-none relative -top-[0.05em]">.</span><span className="text-[#9CA3AF]">COM</span>
            </span>
          </div>
          <div className="flex items-center gap-6">
            <a
              href="/about"
              className="text-sm font-medium text-[#1C1917]/60 hover:text-[#A67B5B] transition-colors"
            >
              About
            </a>
            <a
              href="/login"
              className="text-sm font-medium text-[#1C1917]/60 hover:text-[#A67B5B] transition-colors"
            >
              Login
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="pt-28 pb-24 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="fade-in relative z-10">
            <h1
              className="text-5xl md:text-7xl leading-[1.05] mb-6 text-[#1C1917]"
              style={{
                fontFamily: "'Cabinet Grotesk', sans-serif",
                fontWeight: 800,
                letterSpacing: "-0.05em",
              }}
            >
              5 lbs of specialty coffee for{" "}
              <span className="text-[#A67B5B]">$99.</span>{" "}
              <span className="opacity-30">Stumptown charges $160.</span>
            </h1>
            <p className="text-xl md:text-2xl text-[#1C1917]/70 mb-5 max-w-xl leading-relaxed">
              Buy in bulk. <span className="text-[#1C1917] font-medium">Freeze it.</span><FreezeInfo />
              <br />
              Award winning fresh coffee for <span className="text-[#1C1917] font-medium">~3 months.</span><ThreeMonthsInfo />
            </p>
            <TrustSignals />
            <div id="hero-cta" className="flex flex-col items-center sm:items-start gap-4">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#A67B5B]/30 text-[#A67B5B] text-[10px] font-bold uppercase tracking-[0.1em] bg-[#A67B5B]/5">
                <span className="relative flex h-2 w-2 shrink-0">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#A67B5B] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#A67B5B]"></span>
                </span>
                Limited to 100 orders per batch
              </span>
              <div>
                <a
                  href="/reserve"
                  className="bg-[#1C1917] text-white px-8 py-4 text-lg font-bold rounded-xl hover:bg-[#A67B5B] transition-all flex items-center justify-center gap-2 shadow-lg shadow-stone-200"
                >
                  Reserve a variety sample pack
                  <ArrowRight className="w-5 h-5" />
                </a>
                <p className="text-xs text-[#1C1917]/40 mt-2 text-center">No credit card required &middot; Try before you buy big</p>
              </div>
            </div>
            <div className="mt-8 flex items-center gap-4">
              <div className="flex -space-x-2 shrink-0">
                <img
                  src="https://i.pravatar.cc/80?img=32"
                  alt=""
                  className="w-9 h-9 rounded-full border-2 border-[#FAF7F5] object-cover"
                />
                <img
                  src="https://i.pravatar.cc/80?img=47"
                  alt=""
                  className="w-9 h-9 rounded-full border-2 border-[#FAF7F5] object-cover"
                />
                <img
                  src="https://i.pravatar.cc/80?img=12"
                  alt=""
                  className="w-9 h-9 rounded-full border-2 border-[#FAF7F5] object-cover"
                />
                <img
                  src="https://i.pravatar.cc/80?img=25"
                  alt=""
                  className="w-9 h-9 rounded-full border-2 border-[#FAF7F5] object-cover"
                />
                <img
                  src="https://i.pravatar.cc/80?img=56"
                  alt=""
                  className="w-9 h-9 rounded-full border-2 border-[#FAF7F5] object-cover"
                />
              </div>
              <p className="text-sm text-[#1C1917]/50">
                <span className="font-semibold text-[#1C1917]/70">Thousands</span> of happy coffee drinkers for decades
              </p>
            </div>

          </div>

          <div
            className="relative fade-in"
            style={{ animationDelay: "0.2s" }}
          >
            <div className="bg-[#F5F5F4] rounded-[48px] p-8 md:p-16 flex justify-center items-center overflow-hidden">
              <img
                src="https://vgbujcuwptvheqijyjbe.supabase.co/storage/v1/object/public/hmac-uploads/uploads/32525c36-4158-4f7b-af06-f0d19769a8e6/1773608939695-7edb74a8/CoffeeBag.png"
                alt="5lb Coffee Bag"
                className="w-full max-w-md drop-shadow-2xl hover:scale-[1.02] transition-transform duration-700"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section id="philosophy" className="py-24 bg-[#F5F5F4]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-white border border-[#E2E8F0] rounded-full text-xs font-bold uppercase tracking-widest text-[#A67B5B] mb-8">
            <Anchor className="w-3 h-3" />
            Our Philosophy
          </div>
          <h2
            className="text-3xl md:text-5xl leading-tight text-[#1C1917] mb-12"
            style={{
              fontFamily: "'Cabinet Grotesk', sans-serif",
              fontWeight: 800,
              letterSpacing: "-0.05em",
            }}
          >
            &ldquo;We&rsquo;re not the roaster. <br />We&rsquo;re your connection to
            one.&rdquo;
          </h2>
          <p className="text-xl md:text-2xl text-[#1C1917]/80 leading-relaxed font-light">
            By partnering directly with this legendary roaster and{" "}
            <a href="/about" className="text-[#A67B5B] hover:underline font-medium">
              streamlining every layer of our business with AI
            </a>
            , we operate like Costco for specialty coffee.
            <span className="text-[#1C1917] font-medium italic">
            <br /> One product.
            No overhead. Maximum value for you.
            </span>
          </p>
        </div>
      </section>

      {/* Price Comparison */}
      <section id="price-comparison" className="py-20 lg:py-28 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12 lg:mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#A67B5B]/30 text-[#A67B5B] text-[10px] font-bold uppercase tracking-[0.2em] mb-4 bg-[#A67B5B]/5">
              Same Quality. Different Price.
            </div>
            <h2
              className="text-3xl lg:text-5xl text-[#1C1917]"
              style={{
                fontFamily: "'Cabinet Grotesk', sans-serif",
                fontWeight: 800,
                letterSpacing: "-0.05em",
              }}
            >
              5lbs of specialty coffee.{" "}
              <span className="text-[#A67B5B]"><br />Side by side.</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {/* Stumptown */}
            <div className="relative bg-white border border-[#E2E8F0] rounded-[32px] p-8 lg:p-10 shadow-sm">
              <div className="text-center mb-6">
                <img
                  src="/Stumptown.png"
                  alt="Stumptown Coffee"
                  className="h-32 lg:h-44 object-contain mx-auto mb-4"
                />
                <h3
                  className="text-sm font-bold uppercase tracking-widest text-[#1C1917]/50 mb-1"
                >
                  Stumptown Coffee
                </h3>
                <span
                  className="text-3xl lg:text-4xl text-[#1C1917]/30"
                  style={{
                    fontFamily: "'Cabinet Grotesk', sans-serif",
                    fontWeight: 800,
                    letterSpacing: "-0.05em",
                  }}
                >
                  $160
                </span>
              </div>
              <div className="space-y-4">
                {["Single Origin", "Direct Trade", "Small Mountain Farm", "Farm Elevation: 1,500 – 1,800 M"].map((item) => (
                  <div key={item} className="flex items-center gap-3 text-[#1C1917]/60">
                    <Check className="w-5 h-5 text-[#E2E8F0] shrink-0" />
                    <span className="text-base lg:text-lg">{item}</span>
                  </div>
                ))}
              </div>
              <div className="mt-6 pt-5 border-t border-[#E2E8F0]">
                <p className="text-xs text-[#1C1917]/30 uppercase tracking-widest font-bold">
                  Stumptown 5lbs retail price
                </p>
              </div>
            </div>

            {/* Our Coffee */}
            <div className="relative bg-[#1C1917] text-white border border-[#1C1917] rounded-[32px] p-8 lg:p-10 shadow-xl shadow-stone-900/20">
              <div className="absolute -top-5 right-6 lg:right-8">
                <span
                  className="bg-[#A67B5B] text-white text-base lg:text-lg font-bold uppercase tracking-wider px-5 py-2.5 rounded-full shadow-lg shadow-[#A67B5B]/30"
                  style={{
                    fontFamily: "'Cabinet Grotesk', sans-serif",
                    fontWeight: 800,
                  }}
                >
                  Save $61
                </span>
              </div>
              <div className="text-center mb-6">
                <img
                  src="/CoffeeBag_medium.png"
                  alt="5LB Coffee"
                  className="h-32 lg:h-44 object-contain mx-auto mb-4"
                />
                <h3
                  className="text-sm font-bold uppercase tracking-widest text-white/50 mb-1"
                >
                  Our Coffee
                </h3>
                <span
                  className="text-3xl lg:text-4xl text-[#A67B5B]"
                  style={{
                    fontFamily: "'Cabinet Grotesk', sans-serif",
                    fontWeight: 800,
                    letterSpacing: "-0.05em",
                  }}
                >
                  $99
                </span>
              </div>
              <div className="space-y-4">
                {["Single Origin", "Direct Trade", "Small Mountain Farm", "Farm Elevation: 1,700 – 1,950 M"].map((item) => (
                  <div key={item} className="flex items-center gap-3 text-white/80">
                    <Check className="w-5 h-5 text-[#A67B5B] shrink-0" />
                    <span className="text-base lg:text-lg">{item}</span>
                  </div>
                ))}
              </div>
              <div className="mt-6 pt-5 border-t border-white/10">
                <p className="text-xs text-white/30 uppercase tracking-widest font-bold">
                  Our price
                </p>
              </div>
            </div>
          </div>
          <p className="mt-12 text-center text-2xl lg:text-3xl text-[#1C1917]/40 font-light leading-relaxed">
            5lbs <strong className="text-[#1C1917]/70">lasts</strong> roughly <strong className="text-[#1C1917]/70">2–3 months</strong> for a couple drinking a cup a day. 
            <br />Keep it in the <strong className="text-[#1C1917]/70">freezer</strong> to preserve freshness & taste.
          </p>
        </div>
      </section>

      {/* Social Proof */}
      <section id="social-proof" className="py-24">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#A67B5B]/30 text-[#A67B5B] text-[10px] font-bold uppercase tracking-[0.2em] mb-4 bg-[#A67B5B]/5">
              What They Say
            </div>
            <h2
              className="text-3xl lg:text-5xl text-[#1C1917]"
              style={{
                fontFamily: "'Cabinet Grotesk', sans-serif",
                fontWeight: 800,
                letterSpacing: "-0.05em",
              }}
            >
              Exceptionally{" "}
              <span className="text-[#A67B5B]">delicious.</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
            <blockquote className="fade-in">
              <p className="text-lg md:text-xl text-[#1C1917]/80 leading-relaxed italic">
                &ldquo;I have spent long periods of time <strong className="text-[#1C1917] not-italic">working in Ethiopia where coffee originated</strong>. For me [roaster name] is simply <strong className="text-[#1C1917] not-italic">the best</strong>.&rdquo;
              </p>
              <footer className="mt-4 flex items-center gap-3">
                <img src="https://i.pravatar.cc/80?img=11" alt="" className="w-10 h-10 rounded-full object-cover" />
                <span className="text-sm font-bold text-[#A67B5B] uppercase tracking-widest">Richard G.</span>
              </footer>
            </blockquote>

            <blockquote className="fade-in" style={{ animationDelay: "0.1s" }}>
              <p className="text-lg md:text-xl text-[#1C1917]/80 leading-relaxed italic">
                &ldquo;This has been <strong className="text-[#1C1917] not-italic">my favorite coffee for years</strong>. Every
                distributor has a &lsquo;Colombian&rsquo; coffee, but honestly,
                I&rsquo;ve <strong className="text-[#1C1917] not-italic">never found any others to compare</strong> in simply delicious
                full bodied taste.&rdquo;
              </p>
              <footer className="mt-4 flex items-center gap-3">
                <img src="https://i.pravatar.cc/80?img=44" alt="" className="w-10 h-10 rounded-full object-cover" />
                <span className="text-sm font-bold text-[#A67B5B] uppercase tracking-widest">Paulette K.</span>
              </footer>
            </blockquote>

            <blockquote className="hidden md:block fade-in" style={{ animationDelay: "0.2s" }}>
              <p className="text-lg md:text-xl text-[#1C1917]/80 leading-relaxed italic">
                &ldquo;Good lord <strong className="text-[#1C1917] not-italic">this coffee is fantastic!</strong> I tried this with my
                Trade Coffee subscription and this is a <strong className="text-[#1C1917] not-italic">must have coffee</strong>.
                Highly recommend!&rdquo;
              </p>
              <footer className="mt-4 flex items-center gap-3">
                <img src="https://i.pravatar.cc/80?img=59" alt="" className="w-10 h-10 rounded-full object-cover" />
                <span className="text-sm font-bold text-[#A67B5B] uppercase tracking-widest">Tristan M.</span>
              </footer>
            </blockquote>

            <blockquote className="hidden md:block fade-in" style={{ animationDelay: "0.3s" }}>
              <p className="text-lg md:text-xl text-[#1C1917]/80 leading-relaxed italic">
                &ldquo;When I serve this to guests and friends <strong className="text-[#1C1917] not-italic">it never fails that they comment</strong> and ask <strong className="text-[#1C1917] not-italic">what kind of coffee they are
                drinking</strong>.&rdquo;
              </p>
              <footer className="mt-4 flex items-center gap-3">
                <img src="https://i.pravatar.cc/80?img=49" alt="" className="w-10 h-10 rounded-full object-cover" />
                <span className="text-sm font-bold text-[#A67B5B] uppercase tracking-widest">Katie D.</span>
              </footer>
            </blockquote>
          </div>
        </div>
      </section>

      {/* Product Specs Section */}
      <section id="specs" className="py-24">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-16 lg:mb-20">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#A67B5B]/30 text-[#A67B5B] text-[10px] font-bold uppercase tracking-[0.2em] mb-4 bg-[#A67B5B]/5">
              How We Do It
            </div>
            <h2
              className="text-3xl lg:text-5xl text-[#1C1917]"
              style={{
                fontFamily: "'Cabinet Grotesk', sans-serif",
                fontWeight: 800,
                letterSpacing: "-0.05em",
              }}
            >
              Obsessively sourced.{" "}
              <span className="text-[#A67B5B]"><br />Masterfully roasted.</span>{" "}
              <br />Rigorously tested.
            </h2>
          </div>
        </div>
        <div className="max-w-3xl mx-auto px-6 space-y-20">
          {specs.map((spec) => (
            <div key={spec.title} className="fade-in">
              <div className="flex items-center gap-3 mb-4">
                <spec.icon className="w-5 h-5 text-[#A67B5B]" />
                <h3
                  className="text-2xl md:text-3xl text-[#1C1917]"
                  style={{
                    fontFamily: "'Cabinet Grotesk', sans-serif",
                    fontWeight: 800,
                    letterSpacing: "-0.05em",
                  }}
                >
                  {spec.title}
                </h3>
              </div>
              <p className="text-base md:text-lg text-[#1C1917]/60 leading-relaxed">
                {spec.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="pt-20 pb-32 border-t border-[#E2E8F0] px-6 text-[#1C1917]/50">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-12">
          <div>
            <span
              className="text-2xl text-[#1C1917] tracking-tight mb-2 block uppercase"
              style={{
                fontFamily: "'Cabinet Grotesk', sans-serif",
                fontWeight: 800,
                letterSpacing: "-0.05em",
              }}
            >
              <span className="text-[#A67B5B]">GET</span> 5LB <span className="text-[#A67B5B]">COFFEE</span><span className="text-[#9CA3AF] text-[1.4em] leading-none relative -top-[0.05em]">.</span><span className="text-[#9CA3AF]">COM</span>
            </span>
            <p className="text-sm">
              Your wholesale specialty coffee connection.
            </p>
          </div>
          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8 text-sm">
            <span className="text-[#1C1917]/30 text-xs">
              A Jitterliss, Inc. company
            </span>
            <a href="/terms" className="font-medium hover:text-[#A67B5B] transition-colors">
              Terms
            </a>
          </div>
        </div>
      </footer>

      {/* Sticky CTA Footer */}
      <StickyCTA />
    </div>
  );
}
