import { NextResponse } from "next/server";
import { db } from "@/lib/db";
import { currentProfile } from "@/lib/current-profile";
import { Category } from "@prisma/client";

interface MenuChild {
  name: string,
  id: string,
}

interface MenuModal {
  id: number,
  menuHeader: string,
  listChild: MenuChild[],

}

export async function GET(req: Request) {
  try {
    const listParent: MenuModal[] = [];

    const categories: any[] = await db.category.findMany({select: {contentMenuParent: true}});
    
    categories.map(t=> {
      if(listParent.filter(value => value.menuHeader == t.contentMenuParent).length <= 0){
        const menuChild = {
          id: listParent.length + 1,      
          menuHeader: t.contentMenuParent,
          listChild: []
        }
        listParent.push(menuChild);
      }
    })

    for (const t of listParent) {
      const categories = await db.category.findMany({
        where: {
          contentMenuParent: t.menuHeader
        }
      })
      for (const category of categories){
        t.listChild.push({
          name: category.contentMenuChild,
          id: category.id
        })
      }
    }

    return NextResponse.json({
      items: listParent,
    });
  } catch (error) {
    console.log("[MESSAGE_GET]", error);
    return new NextResponse("internal server error", { status: 500 });
  }
}
