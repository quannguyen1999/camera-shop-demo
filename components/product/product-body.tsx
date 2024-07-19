import { useEffect, useState } from "react";
import { ProductItem } from "./product-item";
import { URL_API_PRODUCT } from "@/constants/url-constant";
import qs from "query-string";
import axios, { AxiosResponse } from "axios";
import { ProductShadow } from "./product-shadow";
import { LoadingItem } from "../loading-item";
interface ProductBodyProps {
  data: any[];
  loading?: boolean;
}
export const ProductBody = ({ data, loading = false }: ProductBodyProps) => {
  return (
    <>
      {loading && <LoadingItem />}
      {data.length <= 0 && (
        <div className="flex items-center justify-center font-bold text-lg text-gray-700">
          <p>Không có sản phẩm nào</p>
        </div>
      )}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5  row-span-3 gap-5 px-2 ">
        {data.map((t: any) => (
          <ProductShadow
            key={t.id}
            name={t.name}
            imageUrl={t.imageUrl}
            content={t.content}
            id={t.id}
            price={t.price}
          />
        ))}
      </div>
    </>
  );
};
