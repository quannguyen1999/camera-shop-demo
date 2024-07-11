'use client'
import { InfScroll } from "@/components/InfScroll";
import { CategoryBody } from "@/components/category/category-body";
import { DashboardCarousel } from "@/components/dashboard/dashboard-carousel";
import { ImageShadow } from "@/components/image/image-shadow";
import { ProductBody } from "@/components/product/product-body";
import { SeparatorItem } from "@/components/separator/separator-item";
import { Separator } from "@/components/ui/separator";
import { DASHBOARD_2 } from "@/constants/image-constant";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import { useEffect } from "react";
import { useScrollStore } from "@/hook/use-scroll-store";
import { URL_DASHBOARD } from "@/constants/url-constant";

const DashboardPage = () => {
    const pathName = usePathname();
    const {setIsMainPage} = useScrollStore();
    useEffect(() => {
      if (pathName.includes(URL_DASHBOARD)) {
        setIsMainPage(true);
      } else {
        setIsMainPage(false);
      }
    }, [pathName, setIsMainPage]);

  return (
    <div className={cn("flex flex-col gap-4 bg-gray-100")}>
      <DashboardCarousel />
      <div className="px-4">
        <SeparatorItem name="ĐỒ TRANG TRÍ" />
      </div>
      <CategoryBody />
      <div className="px-4">
        <SeparatorItem name="SẢN PHẨM BÁN CHẠY" />
      </div>
      <ProductBody />
      <Separator />
      <InfScroll />
      <div className="px-4">
        <SeparatorItem name="PHÔNG NỀN CHỤP ẢNH" />
      </div>
      <ProductBody />
      <ImageShadow
        body={
          <div className="flex h-96">
            <p>.</p>
          </div>
        }
        key={2}
        imageUrl={`bg-[url('/images/${DASHBOARD_2}')]`}
      />
    </div>
  );
};
export default DashboardPage;
