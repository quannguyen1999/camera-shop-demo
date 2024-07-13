import { URL_CATEGORY } from "@/constants/url-constant";
import { cn } from "@/lib/utils";
import { ArrowRight, Heart, PilcrowSquare, ShoppingCart } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";

interface ProductShadowProps {
  imageUrl: string;
  content: React.ReactNode;
  price: number;
  id: string;
}

export const ProductShadow = ({
  imageUrl,
  content,
  price,
  id,
}: ProductShadowProps) => {
  const router = useRouter();

  return (
    <div className="relative shadow-xl flex flex-col flex-1 text-center">
      {imageUrl == null || imageUrl.trim().length <= 0 ? (
        <PilcrowSquare />
      ) : (
        <Image
          src={imageUrl}
          width={600}
          height={600}
          alt="hehe"
          className="h-52"
        />
      )}

      <p>{content}</p>
      <p>{price}</p>

      <div className="flex flex-col text-center items-center justify-center absolute w-full h-full bg-gray bg-opacity-40 hover:bg-opacity-20 transition-all cursor-pointer">
        <div className="w-full h-full bg-transparent opacity-0 hover:opacity-100 flex hover:flex-row gap-2 items-center justify-center text-white">
          <div className="relative">
            <div className="p-2 bg-white rounded-full text-black cursor-pointer hover:text-orange-400 transition-all">
              <Heart size={10} />
            </div>
          </div>
          <div className="relative">
            <div className="p-2 bg-white rounded-full text-black cursor-pointer hover:text-orange-400 transition-all">
              <ShoppingCart size={10} />
            </div>
          </div>
          <div className="relative">
            <div className="p-2 bg-white rounded-full text-black cursor-pointer hover:text-orange-400 transition-all">
              <ArrowRight size={10} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
