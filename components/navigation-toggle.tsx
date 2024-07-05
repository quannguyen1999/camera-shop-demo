import { ShoppingBag, SmilePlus } from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "./ui/navigation-menu";
interface BadNavigationProps {
    header: React.ReactNode,
    body: React.ReactNode
}
export const NavigationToggle = ({header, body}: BadNavigationProps) => {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="hover:bg-transparent focus:bg-transparent active:bg-transparent">
            {header}
          </NavigationMenuTrigger>
          <NavigationMenuContent className="left-0">
            <ul className="grid gap-3 w-[200px] p-2">
              <li className="row-span-3">
                <NavigationMenuLink asChild>
                   {body}
                </NavigationMenuLink>
              </li>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};
