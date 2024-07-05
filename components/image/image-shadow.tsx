import { cn } from "@/lib/utils";

interface ImageShadowProps {
  imageUrl: string;
  body: React.ReactNode;
  isHover?: boolean;
  isScale?: boolean
}

export const ImageShadow = ({ imageUrl, body, isHover = false, isScale = false }: ImageShadowProps) => {
  return (
    <>
      <div
        className={cn(
          "h-full w-full  bg-repeat bg-cover scale-105 transition-all",
          imageUrl,
          isScale && 'hover:scale-110'
        )}
      >
        <div className=" bg-black w-full h-full bg-opacity-30 gap-4 flex flex-col items-center justify-center">
          {body}
        </div>
      </div>
    </>
  );
};
