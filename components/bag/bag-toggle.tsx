import { Menu, ShoppingBag } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet";
import { Button } from "../ui/button";
import { BagBody } from "./bag-body";

export const BadToggle = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <div className="cursor-pointer">
          <div className="relative">
            <ShoppingBag size={15} className="text-gray-500" />
            <div className="absolute -top-1 -right-1 h-3 w-3 bg-green-700 rounded-full">
              <p className="text-[8px] text-white ">6</p>
            </div>
          </div>
        </div>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle className="text-gray-600 text-base pb-4">Giỏ Hàng</SheetTitle>
        </SheetHeader>
        <BagBody />
      </SheetContent>
    </Sheet>
  );
};
