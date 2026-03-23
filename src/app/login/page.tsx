"use client";

import { useState, FormEvent } from "react";
import { ArrowLeft, Loader2 } from "lucide-react";
import Link from "next/link";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setError("");
    setLoading(true);

    // Simulate network delay
    await new Promise((r) => setTimeout(r, 1200));

    if (!email || !password) {
      setError("Please enter your email and password.");
      setLoading(false);
      return;
    }

    // Always fail with a realistic error
    setError("Invalid email or password. Please try again.");
    setLoading(false);
  }

  return (
    <div className="min-h-screen bg-[#FAF7F5] flex flex-col">
      {/* Navigation */}
      <nav className="w-full bg-[#FAF7F5]/80 backdrop-blur-md border-b border-[#E2E8F0]">
        <div className="max-w-md mx-auto px-6 h-16 lg:h-20 flex items-center justify-between">
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

      {/* Login Form */}
      <main className="flex-grow flex items-center justify-center px-6 py-12">
        <div className="w-full max-w-md fade-in">
          <div className="bg-white border border-[#E2E8F0] rounded-[32px] lg:rounded-[48px] p-8 lg:p-12 shadow-xl shadow-stone-200/40">
            <div className="text-center mb-8">
              <h1
                className="text-2xl lg:text-3xl text-[#1C1917]"
                style={{
                  fontFamily: "'Cabinet Grotesk', sans-serif",
                  fontWeight: 800,
                  letterSpacing: "-0.05em",
                }}
              >
                Welcome back
              </h1>
              <p className="text-sm text-[#1C1917]/50 mt-2">
                Sign in to manage your account
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
                  onChange={(e) => {
                    setEmail(e.target.value);
                    setError("");
                  }}
                  className="w-full px-5 lg:px-6 py-4 bg-[#F5F5F4] border border-[#E2E8F0] rounded-xl lg:rounded-2xl text-[#1C1917] placeholder:text-[#1C1917]/30 transition-all text-base lg:text-lg focus:outline-none focus:border-[#A67B5B] focus:bg-white"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-[10px] lg:text-[11px] font-bold uppercase tracking-[0.15em] lg:tracking-[0.2em] text-[#1C1917]/50 ml-1 lg:ml-2">
                  Password
                </label>
                <input
                  type="password"
                  required
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                    setError("");
                  }}
                  className="w-full px-5 lg:px-6 py-4 bg-[#F5F5F4] border border-[#E2E8F0] rounded-xl lg:rounded-2xl text-[#1C1917] placeholder:text-[#1C1917]/30 transition-all text-base lg:text-lg focus:outline-none focus:border-[#A67B5B] focus:bg-white"
                />
                <div className="text-right">
                  <Link
                    href="/forgot-password"
                    tabIndex={-1}
                    className="text-[11px] text-[#A67B5B] hover:underline font-medium"
                  >
                    Forgot password?
                  </Link>
                </div>
              </div>

              {error && (
                <div className="px-4 py-3 bg-red-50 border border-red-200 rounded-xl text-sm text-red-600">
                  {error}
                </div>
              )}

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-[#1C1917] text-white font-bold text-lg lg:text-xl py-5 rounded-xl lg:rounded-2xl hover:bg-[#A67B5B] active:bg-[#A67B5B] transition-all shadow-lg shadow-stone-900/10 flex items-center justify-center gap-2 disabled:opacity-50"
                >
                  {loading ? (
                    <Loader2 className="w-5 h-5 animate-spin" />
                  ) : (
                    "Sign In"
                  )}
                </button>
              </div>
            </form>

            <p className="text-center text-sm text-[#1C1917]/40 mt-6">
              Don&rsquo;t have an account?{" "}
              <Link
                href="/reserve"
                className="text-[#A67B5B] hover:underline font-medium"
              >
                Reserve your batch
              </Link>
            </p>
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
