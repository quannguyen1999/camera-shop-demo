import { currentProfile } from "@/lib/current-profile";
import { NextResponse } from "next/server";
import { db } from "@/lib/db";

export async function GET(
  req: Request,
  { params }: { params: { categoryId: string } }
) {
  try {
    const profile = await currentProfile();

    if (!profile) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    let categories = await db.category.findFirst({
      where: {
        id: params.categoryId,
      },
    });

    return NextResponse.json({
        categories
    });
  } catch (error) {
    console.log("[MESSAGE_GET]", error);
    return new NextResponse("internal server error", { status: 500 });
  }
}
