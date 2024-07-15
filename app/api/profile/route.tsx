import { currentProfile } from "@/lib/current-profile";
import { NextResponse } from "next/server";

export async function GET(
  req: Request
) {
  try {
    const profile = await currentProfile();
    return NextResponse.json({
      profile,
    });
  } catch (error) {
    console.log("[MESSAGE_GET]", error);
    return new NextResponse("internal server error", { status: 500 });
  }
}
