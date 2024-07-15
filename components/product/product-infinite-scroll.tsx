import { useInfiniteStore } from "@/hook/use-infinite-store";
import { ProductShadow } from "./product-shadow";
import { URL_API_CATEGORY } from "@/constants/url-constant";
import { Fragment } from "react";
import { BadgeX, ShoppingCart } from "lucide-react";
interface ProductBodyProps {
  categoryId: string;
}
export const ProductInfiniteScroll = ({ categoryId }: ProductBodyProps) => {
  const { data, fetchNextPage, hasNextPage, isFetchingNextPage, status } =
    useInfiniteStore({
      apiUrl: `${URL_API_CATEGORY}/${categoryId}/get-list-product`,
      paramKey: "categoryId",
      paramValue: categoryId,
      queryKey: categoryId,
    });

  return (
    <>
      {data == undefined ||
        (data?.pages[0].items?.length <= 0 && (
          <div className=" w-full flex flex-col justify-center items-center gap-5">
            <ShoppingCart size={40} />
            <p>Không có sản phẩm nào</p>
          </div>
        ))}
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-5  row-span-3 gap-10 px-2 ">
        {data?.pages?.map((group, i) => (
          <Fragment key={i}>
            {group.items.map((t: any) => {
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
            })}
          </Fragment>
        ))}
      </div>
    </>
  );
};
