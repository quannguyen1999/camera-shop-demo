"use client";
import { InfScroll } from "@/components/inf-scroll";
import { CategoryBody } from "@/components/category/category-body";
import { DashboardCarousel } from "@/components/dashboard/dashboard-carousel";
import { ImageShadow } from "@/components/image/image-shadow";
import { ProductBody } from "@/components/product/product-body";
import { SeparatorItem } from "@/components/separator/separator-item";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { useScrollStore } from "@/hook/use-scroll-store";
import { URL_API_PRODUCT, URL_DASHBOARD } from "@/constants/url-constant";
import qs from "query-string";
import axios, { AxiosResponse } from "axios";
import { LoadingFullScreen } from "@/components/loading-full-screen";
import { SPACE_MARGIN_SCREEN } from "@/util/css-util";
import { useMenuStore } from "@/hook/use-menu-store";
import { ProductInfiniteScroll } from "@/components/product/product-infinite-scroll";
const DashboardPage = () => {
  const pathName = usePathname();
  const [product, setProduct] = useState([]);
  const [loadingTopSell, setLoadingTopSell] = useState(false);
  const [loadingScreen, setLoadingScreen] = useState(true);
  const [data, setData] = useState<any>([]);
  const scrollRef = useRef<HTMLDivElement>(null);
  const { setIsMainPage } = useScrollStore();

  useEffect(() => {
    if (pathName.includes(URL_DASHBOARD)) {
      setIsMainPage(true);
    } else {
      setIsMainPage(false);
    }
  }, [pathName, setIsMainPage]);

  useEffect(() => {
    const getData = async () => {
      setLoadingTopSell(true);
      const url = qs.stringifyUrl({ url: `${URL_API_PRODUCT}/top` });
      const datas = await axios.get(url, {
        // query URL without using browser cache
        headers: {
          "Cache-Control": "no-cache",
        },
      });
      setData(datas.data.items);
      setLoadingTopSell(false);
    };

    getData();
  }, []);

  useEffect(() => {
    const getListProduct = async () => {
      const datas = await axios.get(URL_API_PRODUCT);
      setProduct(datas.data.items);
    };

    getListProduct();
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoadingScreen(false);
    }, 1000); // 2 seconds
    if (scrollRef.current) {
      scrollRef.current.scrollTo({ top: 0, behavior: "smooth" });
    }
    return () => clearTimeout(timer);
  }, []);

  return (
    <div ref={scrollRef} className={cn("flex flex-col gap-4 bg-gray-100")}>
      <DashboardCarousel />
      <div className="px-4">
        <SeparatorItem name="ĐỒ TRANG TRÍ" />
      </div>
      <div className={cn(SPACE_MARGIN_SCREEN)}>
        <CategoryBody />
      </div>

      <div className="px-4">
        <SeparatorItem name="SẢN PHẨM BÁN CHẠY" />
      </div>
      <div className={cn(SPACE_MARGIN_SCREEN)}>
        <ProductBody loading={loadingTopSell} data={data} />
      </div>
      <Separator />
      <InfScroll />
      <div className="px-4">
        <SeparatorItem name="Danh sách sản phẩm" />
      </div>
      <div className={cn(SPACE_MARGIN_SCREEN)}>
        <ProductInfiniteScroll categoryId={""} />
      </div>
    </div>
  );
};

export default DashboardPage;
