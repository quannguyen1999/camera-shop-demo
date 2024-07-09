import { Plus } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";

const data = [
  {
    id: "cod",
    value: "Thanh Toán Khi Nhận Hàng (COD)",
    content:
      "Khách thanh toán tiền mặt khi nhận hàng. Phí giao hàng khách vui lòng xem trong mục:",
    icon: <Plus />,
  },
  {
    id: "momo",
    value: "Quét Mã MoMo Quét Mã MoMo",
    content: "Hãy mở App Momo lên và nhấn Đặt Hàng để quét mã thanh toán",
    icon: <Plus />,
  },
];

export const CartBank = () => {
  return (
    <Accordion type="single" collapsible className="w-full">
      {data.map((t, index) => (
        <AccordionItem key={t.id} value={`item-` +  t.id}>
          <AccordionTrigger>
            <div className="flex items-center space-x-2">
              <input type="radio" id={t.id} name="bank" />
              <label htmlFor={t.id}>{t.value}</label>
            </div>
          </AccordionTrigger>
          <AccordionContent>{t.content}</AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
};
