'use client'
import { useScrollStore } from "@/hook/use-scroll-store";
import { Smile } from "lucide-react";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

export const AdminPage = () => {
    const { setIsMainPage } = useScrollStore();
    const pathName = usePathname();
  
    useEffect(() => {
      if (pathName !== "/") {
        setIsMainPage(false);
      } else {
        setIsMainPage(true);
      }
    }, [pathName]);

    return <div className="font-bold text-2xl bg-transparent w-full uppercase h-full justify-center items-center flex">
        Hi, admin <span className="pl-2"><Smile /></span>
    </div>
}

export default AdminPage;