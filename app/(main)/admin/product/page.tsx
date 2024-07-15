"use client";
import { Button } from "@/components/ui/button";
import CategoryTablePage from "@/modal/table/table-page";
import { useModal } from "@/modal/popup/use-modal-store";
import { Info } from "lucide-react";
import NavigationInput from "@/components/navigation/navigation-input";
import { URL_ADMIN_PRODUCT, URL_API_PRODUCT, URL_API_PROFILE, URL_DASHBOARD } from "@/constants/url-constant";
import TablePage from "@/modal/table/table-page";
import { columns } from "@/modal/table/product/columns";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import qs from "query-string";
import axios, { AxiosResponse } from "axios";
export const ProductPage = () => {
  const { onOpen, setIsRefresh } = useModal();
  const refreshPage = () => {
    setIsRefresh(true);
    setTimeout(() => setIsRefresh(false), 1000);
  };

  
  return (
    <div className="flex flex-col">
      <div className="flex flex-row items-end justify-end px-5 gap-5  pt-5">
        <div className="flex flex-1  flex-row gap-2 rounded-md  p-2">
          <div className="flex flex-row gap-4 p-2 border-2 border-gray-600">
            <div>
              <Info size={20} />
            </div>
            <p>Quản lý Sản Phẩm</p>
          </div>
        </div>
        <div className=" flex">
          <Button onClick={() => onOpen("addProduct", "", "")}>
            Thêm Sản phẩm 
          </Button>
        </div>
        <div className="items-end justify-end flex">
          <Button onClick={() => refreshPage()}>Refresh</Button>
        </div>
      </div>
      <div className="">
        <TablePage urlApi={`${URL_API_PRODUCT}`} columns={columns}/>
      </div>
    
    </div>
  );
};

export default ProductPage;
