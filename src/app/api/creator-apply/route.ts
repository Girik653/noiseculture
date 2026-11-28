import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const {
      name,
      email,
      whatsapp,
      city,
      languages,
      platform,
      handle,
      niche,
      audience,
      wants,
      goals,
      consent,
    } = body;

    // Validate required fields
    if (!name || !email || !whatsapp || !handle) {
      return NextResponse.json(
        { error: "Name, email, WhatsApp number, and primary handle are required." },
        { status: 400 }
      );
    }

    if (!consent) {
      return NextResponse.json(
        { error: "Consent to the privacy policy is required." },
        { status: 400 }
      );
    }

    const payload = {
      token: process.env.CREATOR_SHEET_TOKEN || process.env.TOKEN || "",
      name: String(name).trim(),
      email: String(email).trim(),
      whatsapp: String(whatsapp).trim(),
      city: String(city || "").trim(),
      languages: String(languages || "").trim(),
      platform: String(platform || "Instagram").trim(),
      handle: String(handle).trim(),
      niche: String(niche || "").trim(),
      audience: String(audience || "Under 10K").trim(),
      wants: Array.isArray(wants) ? wants : [],
      goals: String(goals || "").trim(),
      consent: Boolean(consent),
      timestamp: new Date().toISOString(),
    };

    // 1. Forward to Google Sheets Webhook (Apps Script) if configured
    const sheetUrl =
      process.env.CREATOR_SHEET_WEBHOOK_URL ||
      process.env.CREATOR_SHEETS_ENDPOINT;

    if (sheetUrl) {
      try {
        await fetch(sheetUrl, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        });
      } catch (sheetErr) {
        console.error("Non-fatal: Sheet webhook error:", sheetErr);
      }
    }

    // 2. Forward to Founder Email Bot if configured
    const emailEndpoint = process.env.APPLICATION_ENDPOINT;
    if (emailEndpoint) {
      try {
        await fetch(emailEndpoint, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        });
      } catch (botErr) {
        console.error("Non-fatal: Email bot error:", botErr);
      }
    }

    // Server-side audit log without analytics leaking
    console.info(`[Creator Application] Received for: ${payload.handle} (${payload.platform})`);

    return NextResponse.json({
      success: true,
      message: "Thanks. We have received your application and will be in touch.",
    });
  } catch (error) {
    console.error("Creator application submission error:", error);
    return NextResponse.json(
      { error: "Server error processing application." },
      { status: 500 }
    );
  }
}
