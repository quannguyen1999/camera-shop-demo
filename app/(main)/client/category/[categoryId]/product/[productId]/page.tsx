"use client";

import CarouselProduct from "@/components/carousel-product";
import { CategoryHeader } from "@/components/category/category-header";
import { ProductBody } from "@/components/product/product-body";
import { ProductDetail } from "@/components/product/product-detail";
import { ProductSaleOff } from "@/components/product/product-saleoff";
import { useScrollStore } from "@/hook/use-scroll-store";
import { usePathname } from "next/navigation";
import { useEffect } from "react";
import { URL_CATEGORY, URL_DASHBOARD, URL_PRODUCT } from "@/constants/url-constant";

interface ProductIdPageProps {
  params: {
    categoryId: string;
    productId: string;
  };
}
export const ProductIdPage = ({ params }: ProductIdPageProps) => {
  const values = [
    {
      value: "Trang chủ",
      url: URL_DASHBOARD,
    },
    {
      value: "Mặt Hàng",
      url: `${URL_CATEGORY}/${params.categoryId}`,
    },
    {
      value: "Sản phẩm",
      url: `${URL_PRODUCT}/${params.productId}`,
    },
  ];
  const pathName = usePathname();
  const {setIsMainPage} = useScrollStore();
  useEffect(() => {
    if (pathName.includes(URL_DASHBOARD)) {
      setIsMainPage(false);
    } else {
      setIsMainPage(true);
    }
  }, [pathName, setIsMainPage]);
  return (
    <div className="flex flex-col px-40 pt-12 gap-5">
      <div className=" gap-2 row-span-3  pt-40">
        <div className="justify-start flex flex-row gap-2">
          <CategoryHeader category={values} />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-4">
        <div className="col-span-1">
          <CarouselProduct />
        </div>
        <div className="col-span-1 flex flex-col gap-4">
            <ProductDetail /> 
            <ProductSaleOff />
        </div>
      </div>
      <div className="px-4 font-bold text-xl text-gray-500">
        <p>SẢN PHẨM LIÊN QUAN</p>
      </div>
      <ProductBody />
    </div>
  );
};

export default ProductIdPage;
