import { cn } from "@/lib/utils";
import { ShoppingBag } from "lucide-react";
interface BadHeaderProps {
  isScroll: boolean
}
export const BagHeader = ({
  isScroll
}: BadHeaderProps) => {
  return (
    <>
      <div className={cn("text-xs hidden md:flex pr-5", isScroll ? 'text-black' : 'text-white')}>
        <p>
          GIỎ HÀNG / 630,000 đ<span></span>
        </p>
      </div>
      <div>
        <div className="relative">
          <ShoppingBag size={24} className={cn(isScroll ? "text-gray-600" : "text-white")} />
          <div className="absolute -top-1 -right-1 h-4 w-4 bg-black rounded-full">
            <p className="text-xs text-white ">6</p>
          </div>
        </div>
      </div>
    </>
  );
};
