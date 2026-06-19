import { NextResponse } from "next/server";
import { forwardToWebhook } from "@/lib/webhook";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    await forwardToWebhook(process.env.TALLY_WEBHOOK_GUIDE, {
      type: "guide",
      ...body,
    });
    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ ok: false }, { status: 502 });
  }
}
