import { cn } from "@/lib/utils";

interface ImageShadowProps {
    imageUrl: string,
    body: React.ReactNode;
}

export const ImageShadow = ({
    imageUrl,
    body
}: ImageShadowProps) => {
    return <div className={cn("h-full w-full  bg-repeat bg-cover", imageUrl)}>
    <div className="bg-black w-full h-full bg-opacity-30 gap-4 flex flex-col items-center justify-center">
         {body}
    </div>
  </div>
}