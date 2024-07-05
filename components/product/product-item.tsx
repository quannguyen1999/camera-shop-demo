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
    <div className="rounded-md flex flex-col h-48 text-center gap-2 bg-gray-200 p-3">
      <div className="flex-1">
        <ImageShadow
          imageUrl="bg-[url('/images/dashboard_1.PNG')] "
          body={
            <div className="flex flex-row gap-2 items-center justify-center text-white">
              <div className="relative">
                <div className="p-2 bg-white rounded-full text-black">
                  <Heart size={10} />
                </div>
              </div>
              <div className="relative">
              <div className="p-2 bg-white rounded-full text-black">
                  <ShoppingCart  size={10} />
                </div>
              </div>
              <div className="relative">
              <div className="p-2 bg-white rounded-full text-black">
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
