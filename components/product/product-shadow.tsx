import { URL_CATEGORY, URL_PRODUCT } from "@/constants/url-constant";
import { cn } from "@/lib/utils";
import { ArrowRight, Heart, PilcrowSquare, ShoppingCart } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { ActionTooltip } from "../action-tooltip";
import { useState } from "react";
import { useOrderStore } from "@/hook/use-order-store";
import { toast } from "sonner";

interface ProductShadowProps {
  imageUrl: string;
  content: React.ReactNode;
  price: number;
  id: string;
  name: string;
}

export const ProductShadow = ({
  imageUrl,
  content,
  price,
  id,
  name,
}: ProductShadowProps) => {
  const router = useRouter();

  const { data, setOrder } = useOrderStore();

  const [like, setLike] = useState(false);

  const likeCall = () => {
    setLike(!like);
  };

  const goDetailPage = () => {
    router.push(`${URL_PRODUCT}/${id}`)
  }

  const addToCart = () => {
    // Check if the product already exists in the cart
    const existingProduct = data.products?.find((t) => t.id === id);

    if (existingProduct) {
      // Increment the quantity of the existing product
      existingProduct.quantity++;
    } else {
      data.products?.push({
        id: id,
        name: name,
        imageUrl: imageUrl,
        quantity: 1,
        price: price,
      });
    }
    data.totalMoney = data.products?.map((t)=>{
        return t.price * t.quantity
    }).reduce((t, currentValue = 0) => t + currentValue);

    setOrder(data);
    toast.success("Thêm giỏ hàng thành công");
  };

  return (
    <div className="group relative shadow-xl flex flex-col flex-1 text-center">
      {imageUrl == null || imageUrl.trim().length <= 0 ? (
        <PilcrowSquare />
      ) : (
        <Image
          src={imageUrl}
          width={600}
          height={600}
          alt="hehe"
          className="h-52 scale-90 group-hover:scale-100 transition-all"
        />
      )}

      <p>{content}</p>
      <p>{price}</p>

      <div className="flex  hover:bg-gray-800  flex-col text-center items-center justify-center absolute w-full h-full bg-gray bg-opacity-40 hover:bg-opacity-20 transition-all cursor-pointer">
        <div className="w-full h-full bg-transparent opacity-0 hover:opacity-100 flex hover:flex-row gap-2 items-center justify-center text-white">
          <div className="relative">
            <ActionTooltip side="top" label="Like">
              <div
                onClick={() => likeCall()}
                className={cn(
                  "p-2 rounded-full bg-white text-black cursor-pointer hover:text-orange-400 transition-all",
                  like && "bg-red-500 text-white hover:text-white"
                )}
              >
                <Heart size={10} />
              </div>
            </ActionTooltip>
          </div>
          <div className="relative">
            <ActionTooltip side="top" label="Thêm giỏ hàng">
              <div
                onClick={() => addToCart()}
                className="p-2 bg-white rounded-full text-black cursor-pointer hover:text-orange-400 transition-all"
              >
                <ShoppingCart size={10} />
              </div>
            </ActionTooltip>
          </div>
          <div className="relative">
            <ActionTooltip side="top" label="Xem chi tiết">
              <div onClick={() => goDetailPage()} className="p-2 bg-white rounded-full text-black cursor-pointer hover:text-orange-400 transition-all">
                <ArrowRight size={10} />
              </div>
            </ActionTooltip>
          </div>
        </div>
      </div>
    </div>
  );
};
