import { currentProfile } from "@/lib/current-profile";
import { NextResponse } from "next/server";
import { db } from "@/lib/db";

export async function GET(
  req: Request,
  { params }: { params: { productId: string } }
) {
  try {
    const profile = await currentProfile();

    if (!profile) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    let products = await db.product.findFirst({
      where: {
        id: params.productId,
      },
    });

    let images = null;
    if (products?.id != null) {
      images = await db.image.findMany({
        where: {
          productId: products.id,
        },
      });
    }

    return NextResponse.json({
      products,
      images,
    });
  } catch (error) {
    console.log("[MESSAGE_GET]", error);
    return new NextResponse("internal server error", { status: 500 });
  }
}

export async function DELETE(
  req: Request,
  { params }: { params: { productId: string } }
) {
  try {
    const profile = await currentProfile();

    if (!profile) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    await db.product.delete({
      where: {
        id: params.productId,
      },
    });

    return NextResponse.json({
      status: "success",
    });
  } catch (error) {
    console.log("[MESSAGE_GET]", error);
    return new NextResponse("internal server error", { status: 500 });
  }
}

export async function PATCH(
  req: Request,
  { params }: { params: { productId: string } }
) {
  try {
    const profile = await currentProfile();
    const { imageUrl, content, quantity, price, categoryId, images, name } =
      await req.json();

    if (!profile) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    const productUpdate = await db.product.update({
      where: {
        id: params.productId,
      },
      data: {
        imageUrl: imageUrl,
        content: content,
        quantity: quantity,
        price: price,
        categoryId: categoryId,
        name: name,
      },
    });

    images?.map(async (t: any) => {
      if (t.id != null && t.id.length > 0) {
        await db.image.update({
          where: {
            id: t.id,
          },
          data: {
            imageUrl: t.imageUrl,
          },
        });
      } else {
        await db.image.create({
          data: {
            imageUrl: t.imageUrl,
            productId: params.productId,
          },
        });
      }
    });

    return NextResponse.json({
      productUpdate,
    });
  } catch (error) {
    console.log("[MESSAGE_GET]", error);
    return new NextResponse("internal server error", { status: 500 });
  }
}
