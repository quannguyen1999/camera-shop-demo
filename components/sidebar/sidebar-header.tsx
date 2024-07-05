import { MapPin, Mail, Phone, ChevronDown } from "lucide-react";
import { MenuBody } from "../menu/menu-body";
import { ActionTooltip } from "../action-tooltip";
import { cn } from "@/lib/utils";

const listMenu = [
  {
    id: 1,
    menuHeader: "Phụ kiện chụp ảnh",
    listChild: [
      {
        name: "Phông nền chụp ảnh",
        url: "/",
      },
      {
        name: "Phông nền chụp ảnh",
        url: "/",
      },
      {
        name: "Phông nền chụp ảnh",
        url: "/",
      },
      {
        name: "Phông nền chụp ảnh",
        url: "/",
      },
    ],
  },
  {
    id: 2,
    menuHeader: "Đồ trang trí",
    listChild: [
      {
        name: "Phông nền chụp ảnh",
        url: "/",
      },
      {
        name: "Phông nền chụp ảnh",
        url: "/",
      },
      {
        name: "Phông nền chụp ảnh",
        url: "/",
      },
      {
        name: "Phông nền chụp ảnh",
        url: "/",
      },
    ],
  },
  {
    id: 3,
    menuHeader: "Blog",
    listChild: [
      {
        name: "Phông nền chụp ảnh",
        url: "/",
      },
      {
        name: "Phông nền chụp ảnh",
        url: "/",
      },
      {
        name: "Phông nền chụp ảnh",
        url: "/",
      },
      {
        name: "Phông nền chụp ảnh",
        url: "/",
      },
    ],
  },
];
interface NavigationSidebarProps {
    isScrolled: boolean
  }
const SideBarHeader = ({
    isScrolled
}: NavigationSidebarProps) => {
  return (
    <div className={cn("hidden h-14 w-full px-8 text-white md:grid md:grid-cols-2", isScrolled ? 'bg-white text-black hover:text-black' : '')}>
      <div className="flex flex-row gap-5 text-sm">
        {listMenu.map((t) => (
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

      <div className="flex flex-row text-xs gap-5 justify-end ">
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
