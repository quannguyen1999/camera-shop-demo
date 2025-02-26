import { NextResponse } from "next/server";
import { db } from "@/lib/db";
import { currentProfile } from "@/lib/current-profile";
import { Category } from "@prisma/client";
export async function GET(req: Request) {
  try {
    let categories: Category[] = [];

    categories = await db.category.findMany({});
  
    return NextResponse.json({
      items: categories,
    });
  } catch (error) {
    console.log("[MESSAGE_GET]", error);
    return new NextResponse("internal server error", { status: 500 });
  }
}
