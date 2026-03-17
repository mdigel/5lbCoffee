import { getSupabase } from "@/lib/supabase";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const { email } = await request.json();

  if (!email || typeof email !== "string") {
    return NextResponse.json({ error: "Email is required" }, { status: 400 });
  }

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
  const { email, ...fields } = await request.json();

  if (!email || typeof email !== "string") {
    return NextResponse.json({ error: "Email is required" }, { status: 400 });
  }

  const allowed = ["phone_number", "where_buy_coffee", "how_heard_about_us"];
  const updates: Record<string, string> = {};
  for (const key of allowed) {
    if (fields[key] !== undefined) {
      updates[key] = fields[key] || null;
    }
  }

  if (Object.keys(updates).length === 0) {
    return NextResponse.json({ error: "No fields to update" }, { status: 400 });
  }

  const supabase = getSupabase();
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
