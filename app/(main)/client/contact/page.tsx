"use client";
import { Separator } from "@/components/ui/separator";
import { URL_DASHBOARD } from "@/constants/url-constant";
import { useScrollStore } from "@/hook/use-scroll-store";
import { Home, Info, Phone, Timer } from "lucide-react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

const PageContact = () => {
  const pathName = usePathname();
  const { setIsMainPage } = useScrollStore();
  useEffect(() => {
    if (pathName.includes(URL_DASHBOARD)) {
      setIsMainPage(false);
    } else {
      setIsMainPage(true);
    }
  }, [pathName, setIsMainPage]);
  return (
    <div className="flex flex-col mt-36 gap-8">
      <div className="flex flex-col items-center justify-center">
        <Image height={300} width={400} src="/header.svg" alt="hehe" />
      </div>
      <div className="flex flex-row justify-center gap-4">
        <Info />
        <p className="uppercase font-bold text-xl">Thông tin liên hệ</p>
      </div>
      <div className="px-32">
        <Separator />
      </div>

      <div className="flex items-center justify-center">
        <ul className="flex flex-col gap-3">
          <li className="flex flex-row gap-5">
            <Home />
            Địa chỉ Shop: 737/16 Cách Mạng Tháng Tám, P.6, Q. Tân Bình, HCM
          </li>
          <li className="flex flex-row gap-5">
            <Timer />
            Thời gian làm việc: 9h30-18h30 từ T2-T7 (Nghỉ chủ nhật)
          </li>
          <li className="flex flex-row gap-5">
            <Phone />
            Hotline: 077.3456.433 (Zalo, Call, SMS)
          </li>
        </ul>
      </div>
    </div>
  );
};
export default PageContact;
