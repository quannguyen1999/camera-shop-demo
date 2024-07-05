import { ChevronDown } from "lucide-react";
interface MenuItemProps {
  nameHeader: string;
}
export const MenuHeader = ({ nameHeader }: MenuItemProps) => {
  return (
    <div className=" cursor-pointer flex flex-row text-center justify-center items-center">
      <p>{nameHeader}</p>   
    </div>
  );
};
