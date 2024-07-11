'use client'
import { useRouter } from "next/navigation";
import { Button } from "../ui/button";
import { URL_CART } from "@/constants/url-constant";

export const BagFooter = () => {
  const router = useRouter();
  const redirectToPageCart = () => {
    router.push(URL_CART);
  }
  return (
    <>
      <div>
        <Button className="w-full text-xs" variant="outline">
          XEM GIỎ HÀNG
        </Button>
      </div>
      <div>
        <Button onClick={() => redirectToPageCart()} className="w-full text-xs" variant="outline">
          THANH TOÁN
        </Button>
      </div>
    </>
  );
};
