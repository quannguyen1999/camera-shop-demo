'use client'
import { CategoryHeader } from "@/components/category/category-header";
import { CategorySection } from "@/components/category/category-section";
import { ProductBody } from "@/components/product/product-body";
import { RatioGroupItem } from "@/components/ratio-group-item";
import { useScrollStore } from "@/hook/use-scroll-store";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

interface CatgegoryHeaderPageProps {
  params: {
    categoryId: string;
  };
}
export const CategoryIdPage = ({ params }: CatgegoryHeaderPageProps) => {
  const { setIsMainPage } = useScrollStore();
  const pathName = usePathname();
  const values = [
    {
      value: 'Trang chủ', 
      url: '/dashboard'
    },
    {
      value: 'Mặt Hàng', 
      url: '/category/'+params.categoryId
    }
  ]
  useEffect(() => {
    if (pathName !== "/dashboard") {
      setIsMainPage(false);
    } else {
      setIsMainPage(true);
    }
  }, [pathName]);
  return (
    <div className="flex flex-col px-20 pt-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2 row-span-3  pt-40">
        <div className="justify-start flex flex-row gap-2">
          <CategoryHeader category={values} />
        </div>
        <div className="items-center justify-start md:justify-end flex flex-row gap-2">
          <p>Hiển thị tất cả</p>
          <RatioGroupItem />
        </div>
      </div>
      <div className="flex-1 flex flex-row">
        <div className="">
          {/* <CategorySection /> */}
        </div>

        <div className="flex-1 pt-12">
          <ProductBody />
        </div>
      </div>
    </div>
  );
};

export default CategoryIdPage;
