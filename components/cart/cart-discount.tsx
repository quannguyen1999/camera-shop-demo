import { Linkedin } from "lucide-react";
import { AccordionToggle } from "../accordion-toggle";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

export const CartDiscount = () => {
  return (
    <div className="flex flex-col">
      <AccordionToggle
        menuHeader={
          <p>
            Bạn có mã ưu đãi ?{" "}
            <span className="font-bold text-red-600">
              Ấn vào đây để nhập mã
            </span>{" "}
          </p>
        }
        menuBody={
          <div className=" flex flex-col  ">
            <div className="flex flex-row gap-5 ">
              <Input placeholder="Mã ưu đãi" className="pl-5 focus-visible:ring-0 focus-visible:ring-offset-0" />
              <Button className="bg-amber-700">ÁP DỤNG</Button>
            </div>
          </div>
        }
      />
    </div>
  );
};
