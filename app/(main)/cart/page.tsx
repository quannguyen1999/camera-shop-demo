'use client'
import { CartDiscount } from "@/components/cart/cart-discount";
import { CartForm } from "@/components/cart/cart-form";
import { CartInfo } from "@/components/cart/cart-info";
import { ProductSaleOff } from "@/components/product/product-saleoff";
import { useScrollStore } from "@/hook/use-scroll-store";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

export const CartPage = () => {
  const { setIsMainPage } = useScrollStore();
  const pathName = usePathname();

  useEffect(() => {
    if (pathName !== "/dashboard") {
      setIsMainPage(false);
    } else {
      setIsMainPage(true);
    }
  }, [pathName]);
  return (
    <div className="flex flex-col pt-52 px-20">
      <ProductSaleOff />
      <CartDiscount />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <CartForm />
        <CartInfo />
        {/* <CartForm /> */}
      </div>
    </div>
  );
};

export default CartPage;
