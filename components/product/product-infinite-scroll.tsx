import { useInfiniteStore } from "@/hook/use-infinite-store";
import { ProductShadow } from "./product-shadow";
import { URL_API_CATEGORY, URL_API_PRODUCT } from "@/constants/url-constant";
import { ElementRef, Fragment, useEffect, useRef } from "react";
import { BadgeX, ShoppingCart } from "lucide-react";
import { LoadingItem } from "../loading-item";
import { useChatScroll } from "@/hook/use-auto-scroll";
import { useInView } from "react-intersection-observer";
import { useScrollStore } from "@/hook/use-scroll-store";
import { cn } from "@/lib/utils";
interface ProductBodyProps {
  categoryId: string;
}
export const ProductInfiniteScroll = ({ categoryId }: ProductBodyProps) => {
  const { ref, inView } = useInView();

  const {isInMainPage} = useScrollStore();

  const { data, fetchNextPage, hasNextPage, isFetchingNextPage, status } = useInfiniteStore({
          apiUrl: categoryId == undefined || categoryId.length <= 0 ?  `${URL_API_PRODUCT}` : `${URL_API_CATEGORY}/${categoryId}/get-list-product`,
          paramKey: categoryId == undefined || categoryId.length <= 0 ? 'productName' : "categoryId",
          paramValue: categoryId == undefined || categoryId.length <= 0 ? '' : categoryId,
          queryKey: categoryId == undefined || categoryId.length <= 0 ? '' : categoryId,
        });
  useEffect(() => {
    if (inView && hasNextPage) {
      fetchNextPage();
    }
  }, [inView, fetchNextPage, hasNextPage]);

  return (
    <>
      {status == "pending" && <LoadingItem />}
      {data == undefined ||
        (data?.pages[0].items?.length <= 0 && (
          <div className=" w-full flex flex-col justify-center items-center gap-5">
            <ShoppingCart size={40} />
            <p>Không có sản phẩm nào</p>
          </div>
        ))}
      <div className={cn("grid grid-cols-2 sm:grid-cols-3 md:grid-cols-2 lg:grid-cols-3 row-span-3 gap-5 px-2", isInMainPage  ? `xl:grid-cols-5` : `xl:grid-cols-4`)}>
        {data?.pages?.map((group, i) => (
          <Fragment key={i}>
            {group.items.map((t: any) => {
               if (data?.pages.length == i + 1){
                return (
                  <ProductShadow
                 
                    key={t.id}
                    name={t.name}
                    imageUrl={t.imageUrl}
                    content={t.content}
                    id={t.id}
                    price={t.price}
                    innerRef={ref}
                  />
                );
              } else {
                return (
                  <ProductShadow
                    key={t.id}
                    name={t.name}
                    imageUrl={t.imageUrl}
                    content={t.content}
                    id={t.id}
                    price={t.price}
                  />
                );
              }
             
            })}
          </Fragment>
        ))}
      </div>

      {isFetchingNextPage && (
        <div className="pt-10 flex items-center justify-center">
          <LoadingItem />
        </div>
      )}
      {hasNextPage && (
        <div
          className="pt-10 flex items-center justify-center hover:text-amber-700 cursor-pointer"
          onClick={() => fetchNextPage()}
        >
          Xem thêm sản phẩm...{" "}
        </div>
      )}
    </>
  );
};
