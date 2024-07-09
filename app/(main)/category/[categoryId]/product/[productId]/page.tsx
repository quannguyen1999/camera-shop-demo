"use client";

import CarouselProduct from "@/components/carousel-product";
import { CategoryHeader } from "@/components/category/category-header";
import { ProductBody } from "@/components/product/product-body";
import { ProductDetail } from "@/components/product/product-detail";
import { ProductSaleOff } from "@/components/product/product-saleoff";
import { SeparatorItem } from "@/components/separator/separator-item";
import { useScrollStore } from "@/hook/use-scroll-store";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

interface ProductIdPageProps {
  params: {
    categoryId: string;
    productId: string;
  };
}
export const ProductIdPage = ({ params }: ProductIdPageProps) => {
  const { setIsMainPage } = useScrollStore();
  const pathName = usePathname();
  const values = [
    {
      value: "Trang chủ",
      url: "/dashboard",
    },
    {
      value: "Mặt Hàng",
      url: "/category/" + params.categoryId,
    },
    {
      value: "Sản phẩm",
      url: "/product/" + params.productId,
    },
  ];
  useEffect(() => {
    if (pathName !== "/dashboard") {
      setIsMainPage(false);
    } else {
      setIsMainPage(true);
    }
  }, [pathName]);
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
