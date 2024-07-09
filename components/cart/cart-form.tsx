import { Input } from "../ui/input";
import { CartInput } from "./cart-input";

export const CartForm = () => {
  return (
    <div className="flex flex-col gap-5 p-2">
      <p className="font-bold text-amber-700 text-2xl uppercase">
        thông tin thanh toán
      </p>
      <CartInput />
      <div className="flex flex-row gap-5" >
        <CartInput />
        <CartInput />
      </div>
      <CartInput />
      <CartInput />
      <CartInput />
    </div>
  );
};
