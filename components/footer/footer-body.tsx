import { cn } from "@/lib/utils";
import { Book, Facebook, Instagram, Ticket } from "lucide-react";
import { Dancing_Script } from "next/font/google";
import Image from "next/image";
export const FooterBody = () => {
  return (
    <div className="mt-5 gap-5 z-10 p-10 bg-yellow-800 text-white flex flex-col md:flex-row">
      <div className="rounded-full items-center justify-center flex">
        <Image
          src="/logo.svg"
          alt="Upload"
          width={80}
          height={85}
          className="rounded-full"
        />
      </div>
      <div className={cn(" flex flex-col items-center justify-center",)}>
        <div className="uppercase">
          <p>QUEENIE'S</p>
          <p className="text-xs ">Phụ Kiện Xinh</p>
        </div>
      </div>
      <div className="flex flex-col gap-4 flex-1 justify-center items-center">
        <div>
          <p>GIỜ MỜ CỬA: 6:30 - 22:00</p>
        </div>
        <p className="text-xs">
          Địa chỉ: 1073/23 Cách Mạng Tháng 8, P.7, Q.Tân Bình, TP.HCM
        </p>
        <div className="flex flex-row gap-4">
          <div className="relative">
            <div className="p-2 bg-white rounded-full text-black cursor-pointer hover:text-orange-400 transition-all">
              <Facebook size={10} />
            </div>
          </div>

          <div className="relative">
            <div className="p-2 bg-white rounded-full text-black cursor-pointer hover:text-orange-400 transition-all">
              <Instagram size={10} />
            </div>
          </div>

          <div className="relative">
            <div className="p-2 bg-white rounded-full text-black cursor-pointer hover:text-orange-400 transition-all">
              <Ticket size={10} />
            </div>
          </div>

          <div className="relative">
            <div className="p-2 bg-white rounded-full text-black cursor-pointer hover:text-orange-400 transition-all">
              <Book size={10} />
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-4 text-xs text-center">
        <p>Điện thoại đặt hàng: 0313728397 </p>
        <p>Hotline: 0313728397 </p>
        <p>Email: info@themona.global</p>
      </div>
    </div>
  );
};
