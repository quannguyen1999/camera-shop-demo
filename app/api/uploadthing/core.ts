import { createUploadthing, type FileRouter } from "uploadthing/next";
import { auth as authX } from "@clerk/nextjs/server";

const f = createUploadthing();

const handleAuth = () => {
    console.log("checking auth")
    const {userId} = authX();
    if(!userId) throw new Error('Unauthorized');
    return {userId: userId};

}

// FileRouter for your app, can contain multiple FileRoutes
export const ourFileRouter = {
    serverImage: f({image: {maxFileSize: '4MB', maxFileCount: 1}})
        .middleware(() => handleAuth())
        .onUploadComplete(() => {
            console.log("Upload complete")
        }),
    messageFile: f(["image", "pdf"])
        .middleware(() => handleAuth())
        .onUploadComplete(() => {
            console.log("Upload complete")
        })
} satisfies FileRouter;
 
export type OurFileRouter = typeof ourFileRouter;