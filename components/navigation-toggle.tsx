import { ShoppingBag, SmilePlus } from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "./ui/navigation-menu";
import { cn } from "@/lib/utils";
interface BadNavigationProps {
    header: React.ReactNode,
    body: React.ReactNode,
    colorTextHeader: 'text-black' | 'text-white';
}
export const NavigationToggle = ({header, body, colorTextHeader}: BadNavigationProps) => {
  return (
    <NavigationMenu className="bg-transparent">
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger className={cn("bg-transparent hover:bg-transparent focus:bg-transparent active:bg-transparent", `hover:${colorTextHeader}`)}>
            {header}
          </NavigationMenuTrigger>
          <NavigationMenuContent className="left-0">
            <ul className="grid gap-3 w-[220px]">
              <li className="row-span-3">
                {body}
              </li>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};
