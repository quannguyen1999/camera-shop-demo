import { MapPin, Mail, Phone, ChevronDown } from "lucide-react";
import { MenuBody } from "../menu/menu-body";
import { ActionTooltip } from "../action-tooltip";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";
import qs from "query-string";
import axios, { AxiosResponse } from "axios";
import { URL_API_CATEGORY, URL_API_PRODUCT } from "@/constants/url-constant";

interface NavigationSidebarProps {
    isScrolled: boolean
  }
const SideBarHeader = ({
    isScrolled
}: NavigationSidebarProps) => {
  const [menu, setMenu] = useState<any[]>([]);
  useEffect(()=>{
    const getAllCategories =  async () => {
      const url = qs.stringifyUrl({ url: `${URL_API_CATEGORY}/get-all-menu` });
      const datas = await axios.get(url);
      setMenu(datas.data.items);
    }

    getAllCategories();
  }, [])
  return (
    <div className={cn("hidden gap-1  h-24 w-full px-8  text-white md:grid sm:grid-cols-1 md:grid-cols-1 lg:grid-col-1 xl:grid-cols-2", isScrolled ? 'bg-gray-50 shadow-2xl text-black hover:text-black' : '')}>
      <div className="flex flex-row gap-5 text-sm md:justify-center lg:justify-center  xl:justify-start ">
        {menu.map((t) => (
          <MenuBody
            key={t.id}
            nameHeader={t.menuHeader}
            listChild={t.listChild}
          />
        ))}

        <div className="cursor-pointer flex flex-row text-center justify-center items-center">
          Feedback
        </div>
      </div>

      <div className="flex flex-row text-xs gap-5 md:justify-center lg:justify-center  xl:justify-end ">
        <div className="flex flex-row items-center justify-center gap-1">
          <div>
            <MapPin size={15} />
          </div>
          <p>SỐ 22 Cống Lỡ - HCM</p>
        </div>

        <ActionTooltip side="top" label="nguyenthixuanhuong@gmail.com">
          <div className="flex flex-row items-center justify-center gap-1 cursor-pointer">
            <div>
              <Mail size={15} />
            </div>
            <div>
              <p>CONTACT</p>
            </div>
          </div>
        </ActionTooltip>

        <ActionTooltip side="top" label="0708821226">
          <div className="flex flex-row items-center justify-center gap-1">
            <div>
              <Phone size={15} />
            </div>
            <div>
              <p>PHONE</p>
            </div>
          </div>
        </ActionTooltip>
      </div>
    </div>
  );
};

export default SideBarHeader;
