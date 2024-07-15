import { cn } from "@/lib/utils";

interface ImageShadowProps {
  imageUrl: string;
  body: React.ReactNode;
  isHover?: boolean;
  isScale?: boolean;
}

export const ImageShadow = ({
  imageUrl,
  body,
  isHover = false,
  isScale = false,
}: ImageShadowProps) => {
  return (
    <div
      className={cn(
        "relative w-full h-full transition-all bg-repeat",
        isScale && 'hover:scale-110'
      )}
      style={{ 
        backgroundImage: `url(${imageUrl})`,
        backgroundSize: 'cover',
        // backgroundPosition: 'center'
      }}
    >
      <div className={cn(
        isHover ? 'hover:bg-black' : 'bg-white',
        !isScale && 'bg-black',
        "absolute inset-0 transition-all duration-500 bg-opacity-30 gap-4 flex flex-col items-center justify-center"
      )}>
        {body}
      </div>
    </div>
  );
};
