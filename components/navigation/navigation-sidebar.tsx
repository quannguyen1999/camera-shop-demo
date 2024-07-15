import Image from "next/image";
import NavigationInput from "./navigation-input";
import { MobileToggle } from "../mobile-toggle";
import { BadToggle } from "../bag/bag-toggle";
import { NavigationToggle } from "../navigation-toggle";
import { BagHeader } from "../bag/bag-header";
import { BagBody } from "../bag/bag-body";
import { Dancing_Script } from "next/font/google";
import { cn } from "@/lib/utils";
import { useRouter } from "next/navigation";
import { User } from "lucide-react";
import { useScrollStore } from "@/hook/use-scroll-store";

interface NavigationSidebarProps {
  isScrolled: boolean
}

const NavigationSidebar = ({
  isScrolled
}: NavigationSidebarProps) => {
  const { isInMainPage } = useScrollStore();
  const router = useRouter()
  const navigateToMainPage = () => {
    router.push("/");
  }
  const navigateToAdminPage = () => {
    router.push("/admin");
  }
  return (
    <div className={cn("md:shadow-none px-12 pt-7 flex flex-row h-full  gap-5 md:items-center md:justify-center text-center transition-all", isScrolled ? 'bg-white' : 'bg-transparent', !isInMainPage && 'shadow-2xl')}>
      <div className="flex md:hidden items-center">
        <MobileToggle isScrolled={isScrolled}/>
      </div>
      <div onClick={() => navigateToMainPage()} className={cn("flex flex-col gap-1 flex-1 md:flex-none cursor-pointer")}>
        <div className="flex flex-col justify-center items-center">
          <Image
            src="/logo.svg"
            alt="Upload"
            width={35}
            height={35}
            className="rounded-full"
          />
        </div>
        <div className={cn("text-xs uppercase", isScrolled ? 'text-black' : 'text-white')}>Queenie’s</div>
        <div className={cn("text-xs uppercase ",isScrolled ? 'text-black' : 'text-white' )}>Decor </div>
      </div>
      <div className="flex-1 hidden md:flex ">
        <NavigationInput placehodler="Bạn đang tìm sản phẩm gì"/>
      </div>
      <div className="hidden md:flex flex-row gap-2 items-center">
        <NavigationToggle header={<BagHeader isScroll={isScrolled}/>} body={<BagBody />} colorTextHeader="text-black"/>
      </div>
      <div className="flex  md:hidden flex-row gap-2 items-center">
        <BadToggle isScrolled={isScrolled}/>
      </div>
      <div className="flex items-center">
        <User size={20} className={cn("cursor-pointer", isScrolled ? 'text-black' : 'text-white')} onClick={()=>navigateToAdminPage()}/>
      </div>
    </div>
  );
};

export default NavigationSidebar;
