import Image from "next/image";
import NavigationInput from "./navigation-input";
import { ShoppingBag, ListCollapse } from "lucide-react";

const NavigationSidebar = () => {

  return (
    <div className="px-12 flex flex-row h-full  gap-5 md:items-center md:justify-center text-center">
      <div className="flex md:hidden">
        <ListCollapse />
      </div>
      <div className="flex flex-col gap-1">
        <div className="flex flex-col justify-center items-center">
          <Image
            src="/logo.svg"
            alt="Upload"
            width={65}
            height={65}
            className="rounded-full"
          />
        </div>
        <div className="text-xs font-serif">XUANHUONG</div>
        <div className="text-xs font-serif text-green-600">DECOR</div>
      </div>
      <div className="flex-1 hidden md:flex">
        <NavigationInput />
      </div>
      <div className="flex flex-row gap-2 ">
        <div className="text-sm hidden md:flex">
            <p>GIỎ HÀNG / 630,000 đ<span></span></p>
        </div>
       <div>
        <div className="relative">
            <ShoppingBag size={25} className="text-gray-500"/>
            <div className="absolute -top-1 -right-1 h-4 w-4 bg-green-700 rounded-full">
                <p className="text-xs text-white ">6</p>
            </div>
        </div>
       </div>
        </div>
    </div>
  );
};

export default NavigationSidebar;
