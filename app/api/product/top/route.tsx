import { NextResponse } from "next/server";
import { db } from "@/lib/db";

const MESSAGE_BATCH = 10;

import {  Product } from "@prisma/client";

export async function GET(req: Request) {
  try {
    let products: Product[] = [];

    products = await db.product.findMany({
      take: MESSAGE_BATCH,
      orderBy: {
        createdAt: "desc",
      },
    });

    return NextResponse.json({
      items: products,
    });
  } catch (error) {
    console.log("[MESSAGE_GET]", error);
    return new NextResponse("internal server error", { status: 500 });
  }
}
