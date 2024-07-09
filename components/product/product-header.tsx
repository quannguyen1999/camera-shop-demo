"use client";
import { useEffect } from "react";
import { BreadCrumbs } from "../breadcrumbs";

const dataBreadCum = [
  {
    value: "Trang chủ",
    url: "/dashboard",
  },
  {
    value: "Mặt Hàng",
    url: "/xnxx",
  }
];

interface ProductItem {
  value: string;
  url: string;
}
interface ProductHeaderPageProps {
  product: ProductItem[];
}
export const ProductHeader = ({ product }: ProductHeaderPageProps) => {
  useEffect(() => {
    product.forEach( t =>{
      const exists = dataBreadCum.some((item) => item.value === t.value);
      if(!exists){
        dataBreadCum.push({
          value: t.value,
          url: t.url,
        });
      }
    })
  }, []);
  return <BreadCrumbs items={dataBreadCum} />;
};
