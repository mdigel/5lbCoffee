import { getSupabase, getSupabaseAdmin } from "@/lib/supabase";
import { NextRequest, NextResponse } from "next/server";

// Simple in-memory rate limiter (per IP, resets on deploy)
const rateLimit = new Map<string, { count: number; resetAt: number }>();
const RATE_LIMIT_WINDOW = 60 * 1000; // 1 minute
const RATE_LIMIT_MAX = 10; // 10 requests per minute per IP

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const entry = rateLimit.get(ip);

  if (!entry || now > entry.resetAt) {
    rateLimit.set(ip, { count: 1, resetAt: now + RATE_LIMIT_WINDOW });
    return false;
  }

  entry.count++;
  return entry.count > RATE_LIMIT_MAX;
}

function getIP(request: NextRequest): string {
  return (
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    request.headers.get("x-real-ip") ||
    "unknown"
  );
}

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const MAX_EMAIL_LENGTH = 254;
const MAX_FIELD_LENGTH = 500;

function validateEmail(email: unknown): string | null {
  if (!email || typeof email !== "string") return "Email is required";
  const trimmed = email.trim().toLowerCase();
  if (trimmed.length > MAX_EMAIL_LENGTH) return "Email is too long";
  if (!EMAIL_REGEX.test(trimmed)) return "Invalid email format";
  return null;
}

function sanitizeField(value: unknown): string | null {
  if (value === undefined || value === null || value === "") return null;
  if (typeof value !== "string") return null;
  return value.trim().slice(0, MAX_FIELD_LENGTH);
}

export async function POST(request: NextRequest) {
  const ip = getIP(request);
  if (isRateLimited(ip)) {
    return NextResponse.json(
      { error: "Too many requests. Please try again later." },
      { status: 429 }
    );
  }

  let body;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }

  const emailError = validateEmail(body.email);
  if (emailError) {
    return NextResponse.json({ error: emailError }, { status: 400 });
  }

  const email = body.email.trim().toLowerCase();

  const supabase = getSupabase();
  const { error } = await supabase
    .from("5lbsCoffeeWaitlist")
    .insert({ email });

  if (error) {
    if (error.code === "23505") {
      return NextResponse.json(
        { error: "This email is already on the waitlist" },
        { status: 409 }
      );
    }
    return NextResponse.json(
      { error: "Something went wrong" },
      { status: 500 }
    );
  }

  return NextResponse.json({ message: "Successfully joined the waitlist" });
}

export async function PATCH(request: NextRequest) {
  const ip = getIP(request);
  if (isRateLimited(ip)) {
    return NextResponse.json(
      { error: "Too many requests. Please try again later." },
      { status: 429 }
    );
  }

  let body;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }

  const emailError = validateEmail(body.email);
  if (emailError) {
    return NextResponse.json({ error: emailError }, { status: 400 });
  }

  const email = body.email.trim().toLowerCase();
  const { ...fields } = body;

  const allowed = ["phone_number", "where_buy_coffee", "how_heard_about_us"];
  const updates: Record<string, string | null> = {};
  for (const key of allowed) {
    if (fields[key] !== undefined) {
      updates[key] = sanitizeField(fields[key]);
    }
  }

  if (Object.keys(updates).length === 0) {
    return NextResponse.json({ error: "No fields to update" }, { status: 400 });
  }

  const supabase = getSupabaseAdmin();
  const { error } = await supabase
    .from("5lbsCoffeeWaitlist")
    .update(updates)
    .eq("email", email);

  if (error) {
    return NextResponse.json(
      { error: "Something went wrong" },
      { status: 500 }
    );
  }

  return NextResponse.json({ message: "Updated successfully" });
}
