import Image from "next/image";
import NavigationInput from "./navigation-input";
import { MobileToggle } from "../mobile-toggle";
import { BadToggle } from "../bag/bag-toggle";
import { NavigationToggle } from "../navigation-toggle";
import { BagHeader } from "../bag/bag-header";
import { BagBody } from "../bag/bag-body";
import { Dancing_Script } from "next/font/google";
import { cn } from "@/lib/utils";

const dancingScript = Dancing_Script({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"], // specify the weights you need
  display: "swap", // optional: controls the font-display value
});

interface NavigationSidebarProps {
  isScrolled: boolean
}

const NavigationSidebar = ({
  isScrolled
}: NavigationSidebarProps) => {
  return (
    <div className={cn("px-12 pt-4 flex flex-row h-full  gap-5 md:items-center md:justify-center text-center transition-all", isScrolled ? 'bg-white' : 'bg-transparent')}>
      <div className="flex md:hidden items-center">
        <MobileToggle />
      </div>
      <div className={cn("flex flex-col gap-1 flex-1 md:flex-none cursor-pointer", dancingScript.className)}>
        <div className="flex flex-col justify-center items-center">
          <Image
            src="/logo.svg"
            alt="Upload"
            width={35}
            height={35}
            className="rounded-full"
          />
        </div>
        <div className="text-xs uppercase">Queenie’s</div>
        <div className="text-xs uppercase text-green-600">Decor </div>
      </div>
      <div className="flex-1 hidden md:flex">
        <NavigationInput />
      </div>
      <div className="hidden md:flex flex-row gap-2 items-center">
        <NavigationToggle header={<BagHeader isScroll={isScrolled}/>} body={<BagBody />} colorTextHeader="text-black"/>
      </div>
      <div className="flex md:hidden flex-row gap-2 items-center">
        <BadToggle />
      </div>
      
    </div>
  );
};

export default NavigationSidebar;
