'use client'
import { CartDiscount } from "@/components/cart/cart-discount";
import { CartForm } from "@/components/cart/cart-form";
import { CartInfo } from "@/components/cart/cart-info";
import { ProductSaleOff } from "@/components/product/product-saleoff";
import { useScrollStore } from "@/hook/use-scroll-store";
import { usePathname } from "next/navigation";
import { useEffect } from "react";
import { URL_DASHBOARD } from "@/constants/url-constant";

const CartPage = () => {
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
    <div className="flex flex-col pt-52 px-20">
      <ProductSaleOff />
      <CartDiscount />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <CartForm />
        <CartInfo />
      </div>
    </div>
  );
};

export default CartPage;
