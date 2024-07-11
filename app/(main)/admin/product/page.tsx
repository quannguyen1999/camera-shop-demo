'use client'
import { useScrollStore } from "@/hook/use-scroll-store";
import DemoPage from "@/modal/table/table-page"
import { usePathname } from "next/navigation";
import { useEffect } from "react";

export const ProductPage = () => {
    return <div>
        <DemoPage />
    </div>
}

export default ProductPage;