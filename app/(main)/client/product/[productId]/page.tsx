"use client";

import CarouselProduct from "@/components/carousel-product";
import { CategoryHeader } from "@/components/category/category-header";
import { ProductBody } from "@/components/product/product-body";
import { ProductDetail } from "@/components/product/product-detail";
import { ProductSaleOff } from "@/components/product/product-saleoff";
import { useScrollStore } from "@/hook/use-scroll-store";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import {
  URL_API_PRODUCT,
  URL_CATEGORY,
  URL_DASHBOARD,
  URL_PRODUCT,
} from "@/constants/url-constant";
import qs from "query-string";
import { URL_API_CATEGORY } from "@/constants/url-constant";
import axios, { AxiosResponse } from "axios";
import { toast } from "sonner";
interface ProductIdPageProps {
  params: {
    productId: string;
  };
}

interface ImageModal {
  id: string;
  imageUrl: string;
}

interface ProductDetailProps {
  id?: string;
  imageUrl?: string;
  content?: string;
  quantity?: number;
  price?: number;
  categoryId?: string;
  name?: string;
}

export const ProductIdPage = ({ params }: ProductIdPageProps) => {
  const values = [
    {
      value: "Trang chủ",
      url: URL_DASHBOARD,
    },
    {
      value: "Mặt Hàng",
      url: `${URL_CATEGORY}/1`,
    },
    {
      value: "Sản phẩm",
      url: `${URL_PRODUCT}/${params.productId}`,
    },
  ];
  const [images, setImages] = useState<ImageModal[]>([]);
  const [product, setProduct] = useState<ProductDetailProps>();
  const [loading, setLoading] = useState(false);
  const pathName = usePathname();
  const { setIsMainPage } = useScrollStore();
  const [data, setData] = useState<any>([]);
  useEffect(() => {
    if (pathName.includes(URL_DASHBOARD)) {
      setIsMainPage(false);
    } else {
      setIsMainPage(true);
    }
  }, [pathName, setIsMainPage]);

  useEffect(() => {
    const getById = async () => {
      //Common
      setLoading(true);
      let data = await axios
        .get(`${URL_API_PRODUCT}/${params.productId}`)
        .catch((error) => {
          toast.error("Có lỗi xảy ra");
        })
        .finally(() => {
          // setLoading(false);
        });

      if (data != null) {
        setImages(data.data.images);
        setProduct(data.data.products);
        getListProduct(data.data.products.categoryId);
      }
    };

    const getListProduct = async (categoryId: string) => {
      //Common
      const url = qs.stringifyUrl({
        url: `${URL_API_PRODUCT}`,
        query: {
          categoryId: categoryId,
        },
      });
      const datas = await axios.get(url);

      setData(datas.data.items);
    };

  
    getById();
  }, [pathName]);
  return (
    <div className="flex flex-col px-10 md:px-40 md:pt-12 gap-5">
      <div className=" gap-2 row-span-3 md:pt-28 pt-32">
        <div className="justify-start flex flex-row gap-2">
          <CategoryHeader category={values} />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-4">
        <div className="col-span-1">
          <CarouselProduct images={images} />
        </div>
        <div className="col-span-2 flex flex-col gap-4">
          <ProductDetail
            id={product?.categoryId}
            categoryId={product?.categoryId}
            content={product?.content}
            name={product?.name}
            quantity={product?.quantity}
            price={product?.price}
            imageUrl={product?.imageUrl}
          />
          <ProductSaleOff />
        </div>
      </div>
      <div className="px-4 font-bold text-xl text-gray-500">
        <p>SẢN PHẨM LIÊN QUAN</p>
      </div>
      <ProductBody data={data}/>
    </div>
  );
};

export default ProductIdPage;
