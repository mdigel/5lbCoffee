"use client";

import { useState, FormEvent } from "react";
import { ArrowLeft, Loader2, Mail } from "lucide-react";
import Link from "next/link";

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setLoading(true);

    // Simulate network delay
    await new Promise((r) => setTimeout(r, 1200));

    setLoading(false);
    setSubmitted(true);
  }

  return (
    <div className="min-h-screen bg-[#FAF7F5] flex flex-col">
      {/* Navigation */}
      <nav className="w-full bg-[#FAF7F5]/80 backdrop-blur-md border-b border-[#E2E8F0]">
        <div className="max-w-md mx-auto px-6 h-16 lg:h-20 flex items-center justify-between">
          <Link
            href="/login"
            className="flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-[#1C1917]/60 hover:text-[#A67B5B] transition-colors py-2"
          >
            <ArrowLeft className="w-4 h-4" />
            <span className="hidden sm:inline">Back to Login</span>
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

      {/* Content */}
      <main className="flex-grow flex items-center justify-center px-6 py-12">
        <div className="w-full max-w-md fade-in">
          <div className="bg-white border border-[#E2E8F0] rounded-[32px] lg:rounded-[48px] p-8 lg:p-12 shadow-xl shadow-stone-200/40">
            {submitted ? (
              <div className="text-center py-4">
                <div className="w-16 h-16 rounded-full bg-[#A67B5B]/10 flex items-center justify-center mx-auto mb-4">
                  <Mail className="w-7 h-7 text-[#A67B5B]" />
                </div>
                <h1
                  className="text-xl lg:text-2xl text-[#1C1917] mb-2"
                  style={{
                    fontFamily: "'Cabinet Grotesk', sans-serif",
                    fontWeight: 800,
                    letterSpacing: "-0.05em",
                  }}
                >
                  Check your email
                </h1>
                <p className="text-sm text-[#1C1917]/60 leading-relaxed">
                  If an account exists for{" "}
                  <span className="font-medium text-[#1C1917]">{email}</span>,
                  we&rsquo;ll send a password reset link shortly.
                </p>
                <Link
                  href="/login"
                  className="inline-block mt-6 text-sm text-[#A67B5B] hover:underline font-medium"
                >
                  Back to login
                </Link>
              </div>
            ) : (
              <>
                <div className="text-center mb-8">
                  <h1
                    className="text-2xl lg:text-3xl text-[#1C1917]"
                    style={{
                      fontFamily: "'Cabinet Grotesk', sans-serif",
                      fontWeight: 800,
                      letterSpacing: "-0.05em",
                    }}
                  >
                    Reset your password
                  </h1>
                  <p className="text-sm text-[#1C1917]/50 mt-2">
                    Enter your email and we&rsquo;ll send you a reset link.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="space-y-1.5">
                    <label className="text-[10px] lg:text-[11px] font-bold uppercase tracking-[0.15em] lg:tracking-[0.2em] text-[#1C1917]/50 ml-1 lg:ml-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="alex@example.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-5 lg:px-6 py-4 bg-[#F5F5F4] border border-[#E2E8F0] rounded-xl lg:rounded-2xl text-[#1C1917] placeholder:text-[#1C1917]/30 transition-all text-base lg:text-lg focus:outline-none focus:border-[#A67B5B] focus:bg-white"
                      autoFocus
                    />
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full bg-[#1C1917] text-white font-bold text-lg lg:text-xl py-5 rounded-xl lg:rounded-2xl hover:bg-[#A67B5B] active:bg-[#A67B5B] transition-all shadow-lg shadow-stone-900/10 flex items-center justify-center gap-2 disabled:opacity-50"
                    >
                      {loading ? (
                        <Loader2 className="w-5 h-5 animate-spin" />
                      ) : (
                        "Send Reset Link"
                      )}
                    </button>
                  </div>
                </form>

                <p className="text-center text-sm text-[#1C1917]/40 mt-6">
                  Remember your password?{" "}
                  <Link
                    href="/login"
                    className="text-[#A67B5B] hover:underline font-medium"
                  >
                    Sign in
                  </Link>
                </p>
              </>
            )}
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-[#E2E8F0]/30 bg-[#FAF7F5]">
        <div className="max-w-md mx-auto text-center">
          <p className="text-[9px] lg:text-[10px] text-[#1C1917]/30 uppercase tracking-[0.3em]">
            &copy; 2026 5LB Coffee, a Jitterliss, Inc. company.
          </p>
        </div>
      </footer>
    </div>
  );
}
