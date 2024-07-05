import { BadgeX } from "lucide-react";
import Image from "next/image";

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
  return (
    <div className="flex flex-row p-1 gap-2 hover:bg-gray-100 cursor-pointer">
      <div>
        <Image height={40} width={40} src={url} alt="logo" />
      </div>
      <div className="flex flex-col gap-2">
        <h1>{nameProduct}</h1>
        <span className="text-xs">{detailSize}</span>
        <p className="text-xs">
          <span>{totalItem}</span> X <span>{totalPrice} đ</span>
        </p>
      </div>
      <div className="flex  justify-center ">
        <BadgeX size={15} className="cursor-pointer " color="gray"/>
      </div>
    </div>
  );
};
