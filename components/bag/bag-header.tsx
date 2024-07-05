import { ShoppingBag } from "lucide-react";

export const BagHeader = () => {
  return (
    <>
      <div className="text-xs hidden md:flex pr-5">
        <p>
          GIỎ HÀNG / 630,000 đ<span></span>
        </p>
      </div>
      <div>
        <div className="relative">
          <ShoppingBag size={25} className="text-gray-500" />
          <div className="absolute -top-1 -right-1 h-4 w-4 bg-green-700 rounded-full">
            <p className="text-xs text-white ">6</p>
          </div>
        </div>
      </div>
    </>
  );
};
