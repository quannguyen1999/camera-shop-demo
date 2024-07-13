import Image from "next/image";
import { Separator } from "../ui/separator";
import { Button } from "../ui/button";
import { BadItem } from "./bag-item";
import { ScrollArea } from "../ui/scroll-area";
import { BagFooter } from "./bag-footer";
import { useOrderStore } from "@/hook/use-order-store";

export const BagBody = () => {
  const { data } = useOrderStore();
  return (
    <div className="flex flex-col gap-3">
      {data.products === undefined || data.products.length <= 0 ? (
        <div className="p-3 text-sm">Chưa có sản phẩm nào</div>
      ) : (
        <>
          <ScrollArea className="h-60 rounded-md border">
            <div className="flex-1 justify-center">
              {data.products?.map((t) => (
                <BadItem
                  key={t.id}
                  id={t.id}
                  url={t.imageUrl}
                  nameProduct={t.name}
                  totalItem={t.quantity}
                  totalPrice={t.price}
                  detailSize="Kích thước 12 x 34 x67"
                />
              ))}
            </div>
          </ScrollArea>
          <Separator />
          <div className="flex flex-col p-2 gap-2">
            <div>
              <p className="text-xs font-bold">
                Tổng số tiền: <b>{data.totalMoney}</b>
              </p>
            </div>
            <BagFooter />
          </div>
        </>
      )}
    </div>
  );
};
