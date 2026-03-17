"use client";

import { useState, FormEvent } from "react";

export default function WaitlistForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [message, setMessage] = useState("");

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setStatus("loading");

    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      const data = await res.json();

      if (!res.ok) {
        setStatus("error");
        setMessage(data.error);
        return;
      }

      setStatus("success");
      setMessage(data.message);
      setEmail("");
    } catch {
      setStatus("error");
      setMessage("Something went wrong. Please try again.");
    }
  }

  return (
    <div className="w-full max-w-md">
      <form
        onSubmit={handleSubmit}
        className="flex w-full flex-col gap-3 sm:flex-row"
      >
        <input
          type="email"
          required
          placeholder="you@example.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="flex-1 rounded-xl border border-[#E2E8F0] bg-white px-4 py-4 text-[#1C1917] placeholder:text-[#1C1917]/40 focus:border-[#A67B5B] focus:outline-none focus:ring-2 focus:ring-[#A67B5B]/20"
        />
        <button
          type="submit"
          disabled={status === "loading"}
          className="rounded-xl bg-[#1C1917] px-6 py-4 font-bold text-white transition-all hover:bg-[#A67B5B] disabled:opacity-50 shadow-lg shadow-stone-200"
        >
          {status === "loading" ? "Joining..." : "Join Waitlist"}
        </button>
      </form>
      {status === "success" && (
        <p className="mt-3 text-sm text-green-700">{message}</p>
      )}
      {status === "error" && (
        <p className="mt-3 text-sm text-red-600">{message}</p>
      )}
    </div>
  );
}
