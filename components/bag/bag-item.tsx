import { URL_PRODUCT } from "@/constants/url-constant";
import { useOrderStore } from "@/hook/use-order-store";
import { formatNumberToCurrency } from "@/util/function-util";
import { BadgeX } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";

interface BadItemProps {
    id: string,
    url: string,
    nameProduct: string,
    detailSize: string,
    totalPrice: number,
    totalItem: number
}

export const BadItem = ({
    id,
    url,
    nameProduct,
    detailSize,
    totalPrice,
    totalItem
}: BadItemProps) => {
  const {data, setOrder} = useOrderStore();
  const router = useRouter();
  const removeItem = () => {
    data.products = data.products?.filter((t) => t.id != id);
    setOrder(data);
  }
  const redirectToDetailPage = () => {
    router.push(`${URL_PRODUCT}/${id}`)
  }
  return (
    <div onClick={() => redirectToDetailPage()} className="flex flex-row p-1 gap-2 hover:bg-gray-100 cursor-pointer items-center justify-center" >
      <div>
        <Image height={40} width={40} src={url} alt="logo" />
      </div>
      <div className="flex flex-1 flex-col gap-2">
        <h1>{nameProduct}</h1>
        <span className="text-xs">{detailSize}</span>
        <p className="text-xs">
          <span>{totalItem}</span> X <span>{formatNumberToCurrency(totalPrice)} đ</span>
        </p>
      </div>
      <div className="flex  justify-center ">
        <BadgeX size={15} className="cursor-pointer " color="gray" onClick={() => removeItem()}/>
      </div>
    </div>
  );
};
