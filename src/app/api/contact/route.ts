import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, company, email, projectDetails } = body;

    if (!name || !company || !email || !projectDetails) {
      return NextResponse.json(
        { error: "Name, company, email, and project details are required." },
        { status: 400 }
      );
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Please provide a valid work email address." },
        { status: 400 }
      );
    }

    console.log("New Project Brief Received:", body);

    return NextResponse.json({
      success: true,
      message: "Enquiry submitted successfully.",
    });
  } catch (error) {
    return NextResponse.json(
      { error: "Server error processing enquiry." },
      { status: 500 }
    );
  }
}
