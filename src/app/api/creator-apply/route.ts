import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, primaryHandle } = body;

    if (!name || !email || !primaryHandle) {
      return NextResponse.json(
        { error: "Name, email, and primary social handle are required." },
        { status: 400 }
      );
    }

    // In production, sync with Sanity CMS / Airtable / CRM / Slack webhook
    console.log("New Creator Representation Application:", body);

    return NextResponse.json({
      success: true,
      message: "Application logged successfully.",
    });
  } catch (error) {
    return NextResponse.json(
      { error: "Server error processing application." },
      { status: 500 }
    );
  }
}
