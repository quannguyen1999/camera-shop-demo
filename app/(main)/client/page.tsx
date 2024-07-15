"use client";
import { InfScroll } from "@/components/inf-scroll";
import { CategoryBody } from "@/components/category/category-body";
import { DashboardCarousel } from "@/components/dashboard/dashboard-carousel";
import { ImageShadow } from "@/components/image/image-shadow";
import { ProductBody } from "@/components/product/product-body";
import { SeparatorItem } from "@/components/separator/separator-item";
import { Separator } from "@/components/ui/separator";
import { DASHBOARD_2 } from "@/constants/image-constant";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { useScrollStore } from "@/hook/use-scroll-store";
import { URL_API_PRODUCT, URL_DASHBOARD } from "@/constants/url-constant";
import qs from "query-string";
import axios, { AxiosResponse } from "axios";
const DashboardPage = () => {
  const pathName = usePathname();

  const { setIsMainPage } = useScrollStore();
  useEffect(() => {
    if (pathName.includes(URL_DASHBOARD)) {
      setIsMainPage(true);
    } else {
      setIsMainPage(false);
    }
  }, [pathName, setIsMainPage]);

  const [data, setData] = useState<any>([]);
  useEffect(() => {
    const getData = async () => {
      const url = qs.stringifyUrl({ url: `${URL_API_PRODUCT}/top` });
      const datas = await axios.get(url);
      setData(datas.data.items);
    };

    getData();
  }, []);

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
      <div className="px-4">
        <ProductBody  data={data}/>
      </div>

      <Separator />
      <InfScroll />
      <div className="px-4">
        <SeparatorItem name="PHÔNG NỀN CHỤP ẢNH" />
      </div>
      <div className="px-4">
        <ProductBody data={data}/>
      </div>
      {/* <ImageShadow
        body={
          <div className="flex h-96">
            <p>.</p>
          </div>
        }
        key={2}
        imageUrl={`bg-[url('/images/${DASHBOARD_2}')]`}
      /> */}
    </div>
  );
};
export default DashboardPage;
