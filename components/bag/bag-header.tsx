import { useOrderStore } from "@/hook/use-order-store";
import { cn } from "@/lib/utils";
import { ShoppingBag } from "lucide-react";
interface BadHeaderProps {
  isScroll: boolean
}
export const BagHeader = ({
  isScroll
}: BadHeaderProps) => {
  const {data} = useOrderStore();
  return (
    <>
      <div className={cn("text-xs hidden md:flex pr-5", isScroll ? 'text-black' : 'text-white')}>
        <p>
          GIỎ HÀNG /  {data.totalMoney}<span></span>
        </p>
      </div>
      <div>
        <div className="relative">
          <ShoppingBag size={24} className={cn(isScroll ? "text-gray-600" : "text-white")} />
          <div className="absolute -top-1 -right-1 h-4 w-4 bg-black rounded-full">
            <p className="text-xs text-white ">{data.products === undefined || data.products.length <= 0 ? '0' :data.products?.map((t) => t.quantity).reduce((t, currentValue = 0) => t + currentValue)}</p>
          </div>
        </div>
      </div>
    </>
  );
};
