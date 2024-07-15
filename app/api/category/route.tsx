import { NextResponse } from "next/server";
import { db } from "@/lib/db";

const MESSAGE_BATCH = 5;

import { currentProfile } from "@/lib/current-profile";
import { Category } from "@prisma/client";
export async function POST(req: Request) {
  try {
    const { menuParent, menuChild, urlImage } = await req.json();
    const profile = await currentProfile();

    if (!profile) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    const category = await db.category.create({
      data: {
        imageUrl: urlImage,
        contentMenuParent: menuParent,
        contentMenuChild: menuChild,
      },
    });

    return NextResponse.json(category);
  } catch (error) {
    return new NextResponse("Internal error", { status: 500 });
  }
}

export async function GET(req: Request) {
  try {
  

    const { searchParams } = new URL(req.url);

    const nextCursor = searchParams.get("nextCursor");
    const firstCursor = searchParams.get("firstCursor");

  

    let categories: Category[] = [];

    if (nextCursor) {
      categories = await db.category.findMany({
        take: MESSAGE_BATCH,
        skip: 1,
        cursor: {
          id: nextCursor,
        },
        orderBy: {
          createdAt: "desc",
        },
      });
    } else if (firstCursor) {
      categories = await db.category.findMany({
        take: MESSAGE_BATCH,
        cursor: {
          id: firstCursor,
        },
        orderBy: {
          createdAt: "desc",
        },
      });
    } else {
      categories = await db.category.findMany({
        take: MESSAGE_BATCH,
        orderBy: {
          createdAt: "desc",
        },
      });
    }

    let nextCursorOutput = null;
    let firstCursorOutput = null;

    if (categories.length === MESSAGE_BATCH) {
      nextCursorOutput = categories[MESSAGE_BATCH - 1].id;
    }
    
    if (categories.length > 0) {
      firstCursorOutput = firstCursor != null ? firstCursor : categories[0].id;
    }

    const total = await db.category.count();
    if(total <= MESSAGE_BATCH){
      nextCursorOutput = null;
      firstCursorOutput = null;
    }

    return NextResponse.json({
      items: categories,
      total: total,
      nextCursor: nextCursorOutput,
      firstCursor: firstCursorOutput,
    });
  } catch (error) {
    console.log("[MESSAGE_GET]", error);
    return new NextResponse("internal server error", { status: 500 });
  }
}
