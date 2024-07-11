'use client'
import { useScrollStore } from "@/hook/use-scroll-store";
import DemoPage from "@/modal/table/category/table-page"
import { usePathname } from "next/navigation";
import { useEffect } from "react";

export const OrderPage = () => {
    const { setIsAdminPage, setIsMainPage } = useScrollStore();
    const pathName = usePathname();
  
    useEffect(() => {
      setIsAdminPage(true);
      setIsMainPage(false);
    }, [pathName]);
    return <div>
        <DemoPage />
    </div>
}

export default OrderPage;