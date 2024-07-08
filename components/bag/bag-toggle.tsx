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

interface BadToggleProps {
  isScrolled: boolean
}

export const BadToggle = ({
  isScrolled
}: BadToggleProps) => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <div className="cursor-pointer">
          <div className="relative">
            <ShoppingBag size={15} className={cn(isScrolled ? 'text-black' : "text-white")} />
            <div className="absolute -top-1 -right-1 h-3 w-3 bg-black rounded-full">
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
