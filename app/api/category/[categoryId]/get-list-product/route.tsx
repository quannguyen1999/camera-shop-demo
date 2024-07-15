import { NextResponse } from "next/server";
import { db } from "@/lib/db";

const MESSAGE_BATCH = 10;

import { currentProfile } from "@/lib/current-profile";
import { Category, Product } from "@prisma/client";

export async function GET(
  req: Request,
  { params }: { params: { categoryId: string } }
) {
  try {
    const { searchParams } = new URL(req.url);

    const nextCursor = searchParams.get("nextCursor");

    let products: Product[] = [];

    if (nextCursor) {
      products = await db.product.findMany({
        where: {
          categoryId: params.categoryId,
        },
        take: MESSAGE_BATCH,
        skip: 1,
        cursor: {
          id: nextCursor,
        },
        orderBy: {
          createdAt: "desc",
        },
      });
    } else {
      products = await db.product.findMany({
        where: {
          categoryId: params.categoryId,
        },
        take: MESSAGE_BATCH,
        orderBy: {
          createdAt: "desc",
        },
      });
    }

    let nextCursorOutput = null;

    if (products.length === MESSAGE_BATCH) {
      nextCursorOutput = products[MESSAGE_BATCH - 1].id;
    }

    const total = await db.product.count({
      where: {
        categoryId: params.categoryId,
      },
    });
    if (total <= MESSAGE_BATCH) {
      nextCursorOutput = null;
    }

    return NextResponse.json({
      items: products,
      total: total,
      nextCursor: nextCursorOutput,
    });
  } catch (error) {
    console.log("[MESSAGE_GET]", error);
    return new NextResponse("internal server error", { status: 500 });
  }
}
