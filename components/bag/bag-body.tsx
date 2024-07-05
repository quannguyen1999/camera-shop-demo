import Image from "next/image";
import { Separator } from "../ui/separator";
import { Button } from "../ui/button";
import { BadItem } from "./bag-item";
import { ScrollArea } from "../ui/scroll-area";
import { BagFooter } from "./bag-footer";

export const BagBody = () => {
  const fakeData = [1, 2, 3, 4, 5, 6];
  return (
    <div className="flex flex-col gap-3">
      <ScrollArea className="h-60 rounded-md border">     
        <div className="flex-1 flex flex-col items-center justify-center">
          {fakeData.map((t) => (
            <BadItem
              key={t}
              id={t.toString()}
              url="logo.svg"
              nameProduct="Kính Camera"
              totalItem={6}
              totalPrice={640000}
              detailSize="Kích thước 12 x 34 x67"
            />
          ))}
        </div>
      </ScrollArea>
      <Separator />
      <div>
        <p className="text-xs font-bold">
          Tổng số tiền: <b>630,000 đ</b>
        </p>
      </div>
      <BagFooter />
    </div>
  );
};
