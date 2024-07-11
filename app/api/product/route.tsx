import { NextResponse } from "next/server";
import { db } from "@/lib/db";

const MESSAGE_BATCH = 5;

import { currentProfile } from "@/lib/current-profile";
import { Category, Product } from "@prisma/client";

export async function POST(req: Request) {
  try {
    const { imageUrl, content, quantity, price, categoryId, images } = await req.json();
    const profile = await currentProfile();

    if (!profile) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    const product = await db.product.create({
      data: {
        imageUrl: imageUrl,
        content: content,
        quantity: quantity,
        price: price,
        categoryId: categoryId,
      },
    });

    images?.map(async (t: string)=>{
      await db.image.create({
          data: {
            imageUrl: t,
            productId: product.id
          }
      })
    })
    return NextResponse.json(product);
  } catch (error) {
    return new NextResponse("Internal error", { status: 500 });
  }
}

export async function GET(req: Request) {
  try {
    const profile = await currentProfile();

    const { searchParams } = new URL(req.url);

    const nextCursor = searchParams.get("nextCursor");
    const firstCursor = searchParams.get("firstCursor");

    if (!profile) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    let products: Product[] = [];

    if (nextCursor) {
      products = await db.product.findMany({
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
      products = await db.product.findMany({
        take: MESSAGE_BATCH,
        cursor: {
          id: firstCursor,
        },
        orderBy: {
          createdAt: "desc",
        },
      });
    } else {
      products = await db.product.findMany({
        take: MESSAGE_BATCH,
        orderBy: {
          createdAt: "desc",
        },
      });
    }

    let nextCursorOutput = null;
    let firstCursorOutput = null;

    if (products.length === MESSAGE_BATCH) {
      nextCursorOutput = products[MESSAGE_BATCH - 1].id;
    }
    
    if (products.length > 0) {
      firstCursorOutput = firstCursor != null ? firstCursor : products[0].id;
    }

    const total = await db.product.count();
    if(total <= MESSAGE_BATCH){
      nextCursorOutput = null;
      firstCursorOutput = null;
    }

    return NextResponse.json({
      items: products,
      total: total,
      nextCursor: nextCursorOutput,
      firstCursor: firstCursorOutput,
    });
  } catch (error) {
    console.log("[MESSAGE_GET]", error);
    return new NextResponse("internal server error", { status: 500 });
  }
}
