"use client";

import { useState, FormEvent, useRef } from "react";
import { ArrowRight, Check, Loader2 } from "lucide-react";
import { usePostHog } from "posthog-js/react";

const COFFEE_SOURCE_OPTIONS = [
  "Local roaster / coffee shop",
  "Grocery store",
  "Online subscription",
  "Big chain (Starbucks, etc.)",
];

const HEARD_ABOUT_OPTIONS = [
  "Instagram",
  "TikTok",
  "A friend or family member",
  "Google search",
];

const STEPS = [
  { key: "email", label: "Email Address" },
  { key: "where_buy_coffee", label: "Where do you currently buy your coffee?" },
  { key: "how_heard_about_us", label: "How did you hear about us?" },
  { key: "phone_number", label: "Phone Number" },
] as const;

export default function ReserveForm() {
  const posthog = usePostHog();
  const [step, setStep] = useState(0);
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [whereBuyCoffee, setWhereBuyCoffee] = useState("");
  const [whereBuyOther, setWhereBuyOther] = useState("");
  const [howHeardAboutUs, setHowHeardAboutUs] = useState("");
  const [howHeardOther, setHowHeardOther] = useState("");
  const [phone, setPhone] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const savingStepRef = useRef<number | null>(null);

  function handleEmailChange(value: string) {
    setEmail(value);
    if (emailError) setEmailError("");
  }

  function handlePhoneChange(value: string) {
    // Strip to digits only
    const digits = value.replace(/[^0-9]/g, "").slice(0, 10);
    // Format as 555-555-5555
    let formatted = digits;
    if (digits.length > 6) {
      formatted = `${digits.slice(0, 3)}-${digits.slice(3, 6)}-${digits.slice(6)}`;
    } else if (digits.length > 3) {
      formatted = `${digits.slice(0, 3)}-${digits.slice(3)}`;
    }
    setPhone(formatted);
  }

  async function handleEmailSubmit(e: FormEvent) {
    e.preventDefault();
    // Final validation
    const parts = email.split("@");
    if (parts.length !== 2 || !parts[1] || !parts[1].includes(".")) {
      setEmailError("Please enter a valid email with a domain (e.g. gmail.com)");
      return;
    }

    setLoading(true);
    setError("");

    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      if (!res.ok) {
        const data = await res.json();
        setError(data.error);
        setLoading(false);
        return;
      }

      posthog.capture("waitlist_email_submitted", { email });
      posthog.identify(email, { email });
      setStep(1);
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  async function handleUpdate(field: string, value: string, fromStep: number) {
    // Optimistically advance
    const nextStep = fromStep < STEPS.length - 1 ? fromStep + 1 : STEPS.length;
    setStep(nextStep);
    setError("");
    setLoading(true);
    savingStepRef.current = fromStep;

    try {
      const res = await fetch("/api/waitlist", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, [field]: value || null }),
      });

      if (!res.ok) {
        const data = await res.json();
        // Roll back to the step that failed
        setStep(fromStep);
        setError(data.error || "Failed to save. Please try again.");
        setLoading(false);
        return;
      }

      posthog.capture("waitlist_survey_answered", { field, value: value || null, step: fromStep });
      if (nextStep === STEPS.length) {
        posthog.capture("waitlist_completed", { email });
      }
    } catch {
      setStep(fromStep);
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
      savingStepRef.current = null;
    }
  }

  function getSelectedValue(selected: string, otherText: string): string {
    if (selected === "__other__") return otherText;
    return selected;
  }

  // Success state
  if (step === STEPS.length) {
    return (
      <div className="text-center py-8">
        <div className="w-16 h-16 rounded-full bg-green-50 flex items-center justify-center mx-auto mb-4">
          <Check className="w-7 h-7 text-green-600" />
        </div>
        <h3
          className="text-xl mb-2 text-[#1C1917]"
          style={{
            fontFamily: "'Cabinet Grotesk', sans-serif",
            fontWeight: 800,
            letterSpacing: "-0.05em",
          }}
        >
          You&rsquo;re on the list
        </h3>
        <p className="text-sm text-[#1C1917]/60">
          We&rsquo;ll notify you when your spot comes available.
        </p>
      </div>
    );
  }

  const inputClass =
    "w-full px-5 lg:px-6 py-4 bg-[#F5F5F4] border border-[#E2E8F0] rounded-xl lg:rounded-2xl text-[#1C1917] placeholder:text-[#1C1917]/30 transition-all text-base lg:text-lg focus:outline-none focus:border-[#A67B5B] focus:bg-white";

  const buttonClass =
    "w-full bg-[#1C1917] text-white font-bold text-lg lg:text-xl py-5 rounded-xl lg:rounded-2xl hover:bg-[#A67B5B] active:bg-[#A67B5B] transition-all shadow-lg shadow-stone-900/10 flex items-center justify-center gap-2 disabled:opacity-50";

  const labelClass =
    "text-[10px] lg:text-[11px] font-bold uppercase tracking-[0.15em] lg:tracking-[0.2em] text-[#1C1917]/50 ml-1 lg:ml-2";

  const optionClass = (isSelected: boolean) =>
    `w-full text-left px-5 py-3.5 rounded-xl border transition-all text-base ${
      isSelected
        ? "border-[#A67B5B] bg-[#A67B5B]/5 text-[#1C1917] font-medium"
        : "border-[#E2E8F0] bg-[#F5F5F4] text-[#1C1917]/70 hover:border-[#A67B5B]/40"
    }`;

  // Progress dots
  const progressDots = (
    <div className="flex items-center justify-center gap-2 mb-6">
      {STEPS.map((_, i) => (
        <div
          key={i}
          className={`h-1.5 rounded-full transition-all duration-300 ${
            i === step
              ? "w-6 bg-[#A67B5B]"
              : i < step
              ? "w-1.5 bg-[#A67B5B]/40"
              : "w-1.5 bg-[#E2E8F0]"
          }`}
        />
      ))}
    </div>
  );

  const spinner = <Loader2 className="w-5 h-5 animate-spin" />;

  // Step 0: Email
  if (step === 0) {
    const hasEmailError = !!emailError;
    return (
      <form onSubmit={handleEmailSubmit} className="space-y-5 lg:space-y-6">
        {progressDots}
        <div className="space-y-1.5">
          <label className={labelClass}>Email Address</label>
          <input
            type="email"
            required
            placeholder="alex@example.com"
            value={email}
            onChange={(e) => handleEmailChange(e.target.value)}
            onFocus={() => posthog.capture("email_field_focused")}
            className={`${inputClass} ${hasEmailError ? "border-red-400 focus:border-red-400" : ""}`}
            autoFocus
          />
          {hasEmailError ? (
            <p className="text-[13px] text-red-500 ml-1">{emailError}</p>
          ) : (
            <p className="text-[13px] lg:text-sm text-[#1C1917]/60 leading-relaxed mt-3 ml-1">
              We&rsquo;ll notify you when your spot in line to purchase
              comes available. No marketing. No spam.
            </p>
          )}
        </div>
        <div className="pt-2">
          <button
            type="submit"
            disabled={loading || !!emailError}
            className={buttonClass}
          >
            {loading ? spinner : (
              <>
                Next
                <ArrowRight className="w-5 h-5" />
              </>
            )}
          </button>
        </div>
        {error && (
          <p className="text-sm text-red-600 text-center">{error}</p>
        )}
      </form>
    );
  }

  // Step 1: Where do you buy coffee?
  if (step === 1) {
    return (
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleUpdate(
            "where_buy_coffee",
            getSelectedValue(whereBuyCoffee, whereBuyOther),
            1
          );
        }}
        className="space-y-5 lg:space-y-6"
      >
        {progressDots}
        <div className="space-y-3">
          <label className={labelClass}>
            Where do you currently buy your coffee?
          </label>
          <div className="space-y-2">
            {COFFEE_SOURCE_OPTIONS.map((option) => (
              <button
                key={option}
                type="button"
                onClick={() => {
                  setWhereBuyCoffee(option);
                  setWhereBuyOther("");
                }}
                className={optionClass(whereBuyCoffee === option)}
              >
                {option}
              </button>
            ))}
            <button
              type="button"
              onClick={() => setWhereBuyCoffee("__other__")}
              className={optionClass(whereBuyCoffee === "__other__")}
            >
              Other
            </button>
            {whereBuyCoffee === "__other__" && (
              <input
                type="text"
                placeholder="Tell us where..."
                value={whereBuyOther}
                onChange={(e) => setWhereBuyOther(e.target.value)}
                className={inputClass}
                autoFocus
              />
            )}
          </div>
        </div>
        <div className="pt-2">
          <button type="submit" disabled={loading} className={buttonClass}>
            {loading ? spinner : (
              <>
                Next
                <ArrowRight className="w-5 h-5" />
              </>
            )}
          </button>
        </div>
        {error && (
          <p className="text-sm text-red-600 text-center">{error}</p>
        )}
      </form>
    );
  }

  // Step 2: How did you hear about us?
  if (step === 2) {
    return (
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleUpdate(
            "how_heard_about_us",
            getSelectedValue(howHeardAboutUs, howHeardOther),
            2
          );
        }}
        className="space-y-5 lg:space-y-6"
      >
        {progressDots}
        <div className="space-y-3">
          <label className={labelClass}>How did you hear about us?</label>
          <div className="space-y-2">
            {HEARD_ABOUT_OPTIONS.map((option) => (
              <button
                key={option}
                type="button"
                onClick={() => {
                  setHowHeardAboutUs(option);
                  setHowHeardOther("");
                }}
                className={optionClass(howHeardAboutUs === option)}
              >
                {option}
              </button>
            ))}
            <button
              type="button"
              onClick={() => setHowHeardAboutUs("__other__")}
              className={optionClass(howHeardAboutUs === "__other__")}
            >
              Other
            </button>
            {howHeardAboutUs === "__other__" && (
              <input
                type="text"
                placeholder="Tell us how..."
                value={howHeardOther}
                onChange={(e) => setHowHeardOther(e.target.value)}
                className={inputClass}
                autoFocus
              />
            )}
          </div>
        </div>
        <div className="pt-2">
          <button type="submit" disabled={loading} className={buttonClass}>
            {loading ? spinner : (
              <>
                Next
                <ArrowRight className="w-5 h-5" />
              </>
            )}
          </button>
        </div>
        {error && (
          <p className="text-sm text-red-600 text-center">{error}</p>
        )}
      </form>
    );
  }

  // Step 3: Phone number
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        const fullPhone = phone ? `+1${phone.replace(/[^0-9]/g, "")}` : "";
        handleUpdate("phone_number", fullPhone, 3);
      }}
      className="space-y-5 lg:space-y-6"
    >
      {progressDots}
      <div className="space-y-1.5">
        <label className={labelClass}>
          Phone Number{" "}
          <span className="font-normal opacity-50">(Optional)</span>
        </label>
        <div className="flex items-stretch gap-2">
          <div className="flex items-center px-4 bg-[#F5F5F4] border border-[#E2E8F0] rounded-xl lg:rounded-2xl text-[#1C1917]/50 text-base lg:text-lg font-medium shrink-0">
            +1
          </div>
          <input
            type="tel"
            placeholder="555-555-5555"
            value={phone}
            onChange={(e) => handlePhoneChange(e.target.value)}
            className={inputClass}
            autoFocus
          />
        </div>
        <p className="text-[12px] text-[#1C1917]/40 ml-1">
          US country code +1 is assumed
        </p>
      </div>
      <div className="pt-2">
        <button type="submit" disabled={loading} className={buttonClass}>
          {loading ? spinner : (
            <>
              Finish
              <Check className="w-5 h-5" />
            </>
          )}
        </button>
      </div>
      {error && (
        <p className="text-sm text-red-600 text-center">{error}</p>
      )}
    </form>
  );
}
