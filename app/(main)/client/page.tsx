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
import { useEffect, useRef, useState } from "react";
import { useScrollStore } from "@/hook/use-scroll-store";
import { URL_API_PRODUCT, URL_DASHBOARD } from "@/constants/url-constant";
import qs from "query-string";
import axios, { AxiosResponse } from "axios";
import { LoadingFullScreen } from "@/components/loading-full-screen";
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
  const [loadingTopSell, setLoadingTopSell] = useState(false);
  const [loadingScreen, setLoadingScreen] = useState(true);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const getData = async () => {
      setLoadingTopSell(true);
      const url = qs.stringifyUrl({ url: `${URL_API_PRODUCT}/top` });
      const datas = await axios.get(url);
      setData(datas.data.items);
      setLoadingTopSell(false);
    };

    getData();
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoadingScreen(false);
    }, 1000); // 2 seconds
    if (scrollRef.current) {
      scrollRef.current.scrollTo({ top: 0, behavior: 'smooth' });
    }
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {/* {loadingScreen && <LoadingFullScreen /> } */}
      <div  ref={scrollRef}  className={cn("flex flex-col gap-4 bg-gray-100")}>
        <DashboardCarousel />
        <div className="px-4">
          <SeparatorItem name="ĐỒ TRANG TRÍ" />
        </div>
        <CategoryBody />
        <div className="px-4">
          <SeparatorItem name="SẢN PHẨM BÁN CHẠY" />
        </div>
        <div className="px-4">
          <ProductBody loading={loadingTopSell} data={data} />
        </div>

        <Separator />
        <InfScroll />
        <div className="px-4">
          <SeparatorItem name="PHÔNG NỀN CHỤP ẢNH" />
        </div>
        <div className="px-4">
          <ProductBody loading={loadingTopSell} data={data} />
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
    </>
  );
};
export default DashboardPage;
