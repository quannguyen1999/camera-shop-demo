import { Input } from "../ui/input";

export const CartInput = () => {
  return (
    <div className="flex flex-col">
      <p>Địa chỉ email *</p>
      <Input className="focus-visible:ring-0 focus-visible:ring-offset-0"/>
    </div>
  );
};
