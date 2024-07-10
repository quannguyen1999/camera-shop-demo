'use client'
import { useScrollStore } from "@/hook/use-scroll-store";
import { initialProfile } from "@/lib/initial-profile";
import { Smile } from "lucide-react";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

export const AdminPage = async () => {
    await initialProfile();
    
    const { setIsAdminPage, setIsMainPage } = useScrollStore();
    const pathName = usePathname();
  
    useEffect(() => {
      setIsAdminPage(true);
      setIsMainPage(false);
    }, [pathName]);

    return <div className="font-bold text-2xl bg-transparent w-full uppercase h-full justify-center items-center flex">
        Hi, admin <span className="pl-2"><Smile /></span>
    </div>
}

export default AdminPage;