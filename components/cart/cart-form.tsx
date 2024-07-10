import { InputItem } from "../input-item";

export const CartForm = () => {
  return (
    <div className="flex flex-col gap-5 p-2">
      <p className="font-bold text-amber-700 text-2xl uppercase">
        thông tin thanh toán
      </p>
      <InputItem />
      <div className="flex flex-row gap-5" >
        <InputItem />
        <InputItem />
      </div>
      <InputItem />
      <InputItem />
      <InputItem />
    </div>
  );
};
