import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "Terms of Service — 5LB Coffee",
  description: "Terms of Service for 5LB Coffee, a Jitterliss Inc. company.",
};

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-[#FAF7F5]">
      {/* Navigation */}
      <nav className="w-full bg-[#FAF7F5]/80 backdrop-blur-md border-b border-[#E2E8F0]">
        <div className="max-w-3xl mx-auto px-6 h-16 lg:h-20 flex items-center justify-between">
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
            <span className="text-[#A67B5B]">GET</span> 5LB <span className="text-[#A67B5B]">COFFEE</span><span className="text-[#9CA3AF] text-[1.4em] leading-none relative -top-[0.05em]">.</span><span className="text-[#9CA3AF]">COM</span>
          </Link>
        </div>
      </nav>

      {/* Content */}
      <main className="max-w-3xl mx-auto px-6 py-12 lg:py-20">
        <h1
          className="text-3xl lg:text-4xl mb-2 text-[#1C1917]"
          style={{
            fontFamily: "'Cabinet Grotesk', sans-serif",
            fontWeight: 800,
            letterSpacing: "-0.05em",
          }}
        >
          Terms of Service
        </h1>
        <p className="text-sm text-[#1C1917]/40 mb-10">
          Last updated: March 16, 2026
        </p>

        <div className="space-y-8 text-[#1C1917]/70 text-[15px] leading-relaxed">
          <section>
            <h2 className="text-lg font-bold text-[#1C1917] mb-2">
              1. Acceptance of Terms
            </h2>
            <p>
              By accessing or using the 5LB Coffee website and services
              (collectively, the &ldquo;Service&rdquo;), operated by Jitterliss,
              Inc. (&ldquo;Company,&rdquo; &ldquo;we,&rdquo; &ldquo;us,&rdquo;
              or &ldquo;our&rdquo;), you agree to be bound by these Terms of
              Service. If you do not agree to these terms, please do not use the
              Service.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-[#1C1917] mb-2">
              2. Waitlist &amp; Reservations
            </h2>
            <p>
              Joining our waitlist does not constitute a purchase or binding
              commitment. Waitlist placement is informational only and serves as
              notification of product availability. We reserve the right to
              modify pricing, availability, and product specifications at any
              time without prior notice.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-[#1C1917] mb-2">
              3. Use of the Service
            </h2>
            <p>
              You agree to use the Service only for lawful purposes. You may not
              use the Service in any way that could damage, disable, or impair
              the Service, or interfere with any other party&rsquo;s use of the
              Service. You must not attempt to gain unauthorized access to any
              part of the Service.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-[#1C1917] mb-2">
              4. Intellectual Property
            </h2>
            <p>
              All content, trademarks, logos, and intellectual property displayed
              on the Service are the property of Jitterliss, Inc. or its
              licensors. You may not reproduce, distribute, or create derivative
              works from any content on the Service without our express written
              permission.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-[#1C1917] mb-2">
              5. Privacy &amp; Data Collection
            </h2>
            <p>
              We collect personal information such as email addresses and phone
              numbers solely for the purpose of managing waitlist placement and
              communicating product availability. We do not sell, rent, or share
              your personal information with third parties for marketing
              purposes. For more details, please refer to our Privacy Policy.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-[#1C1917] mb-2">
              6. Product Information
            </h2>
            <p>
              We make every effort to accurately describe our products and
              services. However, we do not warrant that product descriptions,
              pricing, or other content on the Service is accurate, complete, or
              current. We reserve the right to correct any errors and to update
              information at any time.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-[#1C1917] mb-2">
              7. Limitation of Liability
            </h2>
            <p>
              To the fullest extent permitted by law, Jitterliss, Inc. shall not
              be liable for any indirect, incidental, special, consequential, or
              punitive damages arising out of or related to your use of the
              Service. Our total liability shall not exceed the amount you paid
              to us, if any, in the twelve months preceding the claim.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-[#1C1917] mb-2">
              8. Changes to Terms
            </h2>
            <p>
              We reserve the right to modify these Terms of Service at any time.
              Changes will be effective immediately upon posting to the Service.
              Your continued use of the Service after any changes constitutes
              acceptance of the revised terms.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-[#1C1917] mb-2">
              9. Governing Law
            </h2>
            <p>
              These Terms shall be governed by and construed in accordance with
              the laws of the State of Delaware, without regard to its conflict
              of law provisions.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-[#1C1917] mb-2">
              10. Contact
            </h2>
            <p>
              If you have any questions about these Terms of Service, please
              contact us at{" "}
              <a
                href="mailto:hello@5lbcoffee.com"
                className="text-[#A67B5B] hover:underline"
              >
                hello@5lbcoffee.com
              </a>
              .
            </p>
          </section>
        </div>
      </main>

      {/* Footer */}
      <footer className="py-8 lg:py-12 px-6 border-t border-[#E2E8F0]/30 bg-[#FAF7F5]">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-[9px] lg:text-[10px] text-[#1C1917]/30 uppercase tracking-[0.3em]">
            &copy; {new Date().getFullYear()} 5LB Coffee, a Jitterliss, Inc.
            company. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
