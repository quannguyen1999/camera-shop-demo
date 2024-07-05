import { ChevronDown } from "lucide-react";
import { NavigationToggle } from "../navigation-toggle";
import { MenuHeader } from "./menu-header";
import { MenuItems } from "./menu-items";

interface MenuItemProps {
  nameHeader: string;
  listChild: any[]
}
export const MenuBody = ({ nameHeader, listChild }: MenuItemProps) => {
    return (
      
      <NavigationToggle colorTextHeader="text-white" header={<MenuHeader nameHeader={nameHeader} />} body={<MenuItems listChild={listChild} />} />
   
       
    )
};
