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
import { cn } from "@/lib/utils";
import { useOrderStore } from "@/hook/use-order-store";

interface BadToggleProps {
  isScrolled: boolean
}

export const BadToggle = ({
  isScrolled
}: BadToggleProps) => {
  const {data} = useOrderStore();
  return (
    <Sheet>
      <SheetTrigger asChild>
        <div className="cursor-pointer">
          <div className="relative">
            <ShoppingBag size={18} className={cn(isScrolled ? 'text-black' : "text-white")} />
            <div className="absolute -top-1 -right-1 h-3 w-3 bg-black rounded-full">
              <p className="text-[8px] text-white ">{data.products === undefined || data.products.length <= 0 ? '0' :data.products?.map((t) => t.quantity).reduce((t, currentValue = 0) => t + currentValue)}</p>
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
