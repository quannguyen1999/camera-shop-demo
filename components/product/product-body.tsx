import { useEffect, useState } from "react";
import { ProductItem } from "./product-item";
import { URL_API_PRODUCT } from "@/constants/url-constant";
import qs from "query-string";
import axios, { AxiosResponse } from "axios";
import { ProductShadow } from "./product-shadow";
interface ProductBodyProps {
  data: any[]
}
export const ProductBody = ({data}: ProductBodyProps) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-5  row-span-3 gap-10 px-2 ">
      {data.map((t: any) => (
        <ProductShadow name={t.name} imageUrl={t.imageUrl} content={t.content} id={t.id} price={t.price}/>
      ))}
    </div>
  );
};
