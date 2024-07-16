import { URL_CATEGORY } from "@/constants/url-constant";
import { cn } from "@/lib/utils";
import { dancingScript } from "@/util/function-util";
import { PilcrowSquare } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";

interface CategoryShadowProps {
  imageUrl: string;
  content: React.ReactNode;
  id: string;
}

export const CategoryShadow = ({ imageUrl, content, id }: CategoryShadowProps) => {
  const router = useRouter();

  const redirectPageToCategory = () => {
    router.push(`${URL_CATEGORY}/${id}`);
  };

  return (
    <div className="relative bg-black opacity-80 shadow-xl h-48 flex flex-1">
      {
        imageUrl == null || imageUrl.trim().length <= 0 ? <PilcrowSquare /> :  <Image
        src={imageUrl}
        width={600}
        height={600}
        alt="hehe"
        className="w-screen "
      />
      }
     
      <div
        onClick={() => redirectPageToCategory()}
        className="flex shadow-2xl text-center items-center justify-center absolute w-full h-full bg-black bg-opacity-40 hover:bg-opacity-20 transition-all cursor-pointer"
      >
        <p className={cn("flex-1 text-white text-lg font-bold FONT-W", dancingScript.className)}>{content}</p>
      </div>
    </div>
  );
};
