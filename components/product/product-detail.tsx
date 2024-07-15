import { Plus } from "lucide-react";
import { Button } from "../ui/button";
import { useState } from "react";
import { useOrderStore } from "@/hook/use-order-store";
import { toast } from "sonner";
import { formatNumberToCurrency } from "@/util/function-util";
// setImageUrl(product.imageUrl);
// setContent(product.content);
// setQuantity(product.quantity);
// setPrice(product.price);
// setCategoryId(product.categoryId);
// setName(product.name);

// setImages(data.data.images);
interface ProductDetailProps {
  id?: string;
  imageUrl?: string;
  content?: string;
  quantity?: number;
  price?: number;
  categoryId?: string;
  name?: string;
}

export const ProductDetail = ({
  id,
  imageUrl,
  content,
  quantity,
  price,
  categoryId,
  name,
}: ProductDetailProps) => {

  const { data, setOrder } = useOrderStore();
  const [numberOfProduct, setNumberOfProduct] = useState(1);
  const plus = () => {
    setNumberOfProduct((prevNunmber) => prevNunmber + 1);
  };
  const minus = () => {
    if (numberOfProduct > 1) {
      setNumberOfProduct((prevNumber) => prevNumber - 1);
    }
  };

  const addToCart = () => {
    // Check if the product already exists in the cart
    const existingProduct = data.products?.find((t) => t.id === id);

    if (existingProduct) {
      // Increment the quantity of the existing product
      existingProduct.quantity = existingProduct.quantity + numberOfProduct;
    } else {
      data.products?.push({
        id: id!,
        name: name!,
        imageUrl: imageUrl!,
        quantity: numberOfProduct,
        price: price!,
      });
    }
    data.totalMoney = data.products?.map((t)=>{
        return t.price * t.quantity
    }).reduce((t, currentValue = 0) => t + currentValue);

    setOrder(data);
    toast.success("Thêm giỏ hàng thành công");
  };
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col gap-4">
        <p className="font-bold text-black text-2xl text-amber-700">{name}</p>
        <div className="pl-2 text-lg">
          <div className="flex flex-row">
            <div className="flex  text-center items-center justify-center">
              <Plus size={10} />
            </div>
            <div className="text-center items-center justify-center">
              {content}
            </div>
          </div>
        </div>
      </div>
      <div className="pt-5 border-t-2 border-gray-300 font-bold text-lg">
        <p className="">
          Mức giá : <span>{formatNumberToCurrency(price)}</span>
        </p>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-4">
        <div className="grid-cols-1 flex flex-row gap-2">
          <div
            onClick={() => minus()}
            className="bg-gray-300 hover:bg-gray-400 transition-all w-full flex items-center justify-center cursor-pointer"
          >
            <p className="text-2xl">-</p>
          </div>
          <div className="w-full flex items-center justify-center">
            <p className="text-2xl">{numberOfProduct}</p>
          </div>
          <div
            onClick={() => plus()}
            className="bg-gray-300 hover:bg-gray-400 transition-all w-full flex items-center justify-center cursor-pointer"
          >
            <p className="text-2xl">+</p>
          </div>
        </div>
        <div className="grid-cols-3">
          <Button onClick={() => addToCart()}>Thêm Vào giỏ hàng</Button>
        </div>
      </div>
    </div>
  );
};
