import { BadItem } from "../bag/bag-item";

import { Button } from "../ui/button";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";
import { CartBank } from "./cart-bank";

export const CartInfo = () => {
  const data = [1, 2, 3, 4];
  return (
    <div className="flex flex-col border-2 border-amber-700 p-4 gap-7">
      <p className="font-bold text-2xl text-amber-700">Đơn hàng của bạn</p>
      <div className="flex flex-row font-bold border-t-2 pt-2 border-gray-300">
        <div>Sản phẩm</div>
        <div className="flex-1 items-end justify-end flex">Tạm Tính</div>
      </div>
      <div className="flex flex-col border-t-2 pt-2 border-gray-300">
        {data.map((t) => (
          <BadItem
            key={t}
            id={t.toString()}
            url="logo.svg"
            nameProduct="Kính Camera"
            totalItem={6}
            totalPrice={640000}
            detailSize="Kích thước 12 x 34 x67"
          />
        ))}
      </div>
      <div className="grid grid-cols-5 border-t-2 pt-2 border-gray-300">
        <div className="col-span-1">Giao hàng</div>
        <div className="col-span-4 text-end text-xs">
          Phí giao hàng sẽ được cập nhật khi nhân viên gọi xác nhận đơn, tham
          khảo giá cước trong mục: Chính sách vận chuyển
        </div>
      </div>
      <div className="border-t-2 pt-2 border-gray-300">
      <CartBank />
      </div>
     
      <div className="font-bold  text-xl flex flex-row border-t-2 pt-2 border-gray-300">
        <div>Tổng</div>
        <div className="flex flex-1 items-end justify-end text-end">
          30,000₫
        </div>
      </div>
      <div className="flex items-center justify-center border-t-2 pt-2 border-gray-300">
        <Button className="uppercase">đặt hàng</Button>
      </div>
      <div className="border-t-2 pt-2 border-gray-300">
        <p className="text-amber-700 font-bold text-sm">
          Sau khi bấm ĐẶT HÀNG, thông tin đơn hàng sẽ được gửi về địa chỉ Email
          mà bạn cung cấp
        </p>
      </div>
       
    </div>
  );
};
