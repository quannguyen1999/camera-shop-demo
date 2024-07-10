
import { NextResponse } from "next/server";
import {db} from '@/lib/db';
import { currentProfile } from "@/lib/current-profile";
export async function POST(req: Request) {
    try{
        const {imageUrl, contentMenuParent, contentMenuChild} = await req.json();
        const profile = await currentProfile();

        if(!profile){
            return new NextResponse("Unauthorized", {status: 401});
        }

        const category = await db.category.create({
            data: {
                imageUrl: imageUrl,
                contentMenuParent: contentMenuParent,
                contentMenuChild: contentMenuChild,
            }
        });

        return NextResponse.json(category);

    }catch(error){
        return new NextResponse("Internal error", {status: 500});
    }
}