import { currentProfile } from "@/lib/current-profile";
import { NextResponse } from "next/server";
import { db } from "@/lib/db";

export async function GET(
  req: Request,
  { params }: { params: { categoryId: string } }
) {
  try {

    let categories = await db.category.findFirst({
      where: {
        id: params.categoryId,
      },
    });

    return NextResponse.json({
      categories,
    });
  } catch (error) {
    console.log("[MESSAGE_GET]", error);
    return new NextResponse("internal server error", { status: 500 });
  }
}

export async function DELETE(
  req: Request,
  { params }: { params: { categoryId: string } }
) {
  try {
    const profile = await currentProfile();

    if (!profile) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    await db.category.delete({
      where: {
        id: params.categoryId,
      },
    });

    return NextResponse.json({
      status: 'success'
    });
  } catch (error) {
    console.log("[MESSAGE_GET]", error);
    return new NextResponse("internal server error", { status: 500 });
  }
}

export async function PATCH(
  req: Request,
  { params }: { params: { categoryId: string } }
) {
  try {
    const profile = await currentProfile();
    const { menuParent, menuChild, urlImage } = await req.json();

    if (!profile) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    const categoryUpdate = await db.category.update({
      where: {
        id: params.categoryId,
      },
      data: {
        imageUrl: urlImage,
        contentMenuParent: menuParent,
        contentMenuChild: menuChild,
      },
    });

    return NextResponse.json({
      categoryUpdate,
    });
  } catch (error) {
    console.log("[MESSAGE_GET]", error);
    return new NextResponse("internal server error", { status: 500 });
  }
}
