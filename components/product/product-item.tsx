import { ArrowRight, Heart, LucideMove, ShoppingCart, Star } from "lucide-react";
import Image from "next/image";
import { ImageShadow } from "../image/image-shadow";

interface ProductItemProps {
  imageUrl: string;
  name: string;
  price: number;
}
export const ProductItem = ({ imageUrl, name, price }: ProductItemProps) => {
  return (
    <div className="rounded-md flex flex-col h-80 text-center gap-4 bg-gray-200 hover:bg-gray-300 duration-75 transition-all p-3 cursor-pointer">
      <div className="flex-1">
        <ImageShadow
          isScale={true}
          imageUrl="bg-[url('/images/dashboard_1.PNG')] "
          body={
            <div className="w-full h-full bg-transparent opacity-0 hover:opacity-100 flex hover:flex-row gap-2 items-center justify-center text-white">
              <div className="relative">
                <div className="p-2 bg-white rounded-full text-black cursor-pointer hover:text-orange-400 transition-all">
                  <Heart size={10} />
                </div>
              </div>
              <div className="relative">
              <div className="p-2 bg-white rounded-full text-black cursor-pointer hover:text-orange-400 transition-all">
                  <ShoppingCart  size={10} />
                </div>
              </div>
              <div className="relative">
              <div className="p-2 bg-white rounded-full text-black cursor-pointer hover:text-orange-400 transition-all">
                  <ArrowRight  size={10} />
                </div>
              </div>
            </div>
          }
        />
      </div>
      <p className="font-bold text-xs">{name}</p>
      <p className="text-xs">{price}</p>
    </div>
  );
};
