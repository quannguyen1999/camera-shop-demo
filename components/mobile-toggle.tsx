import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { Button } from "./ui/button";
import NavigationInput from "./navigation/navigation-input";
import { Accordion } from "./ui/accordion";
import { AccordionToggle } from "./accordion-toggle";
import { MenuHeader } from "./menu/menu-header";
import { MenuItems } from "./menu/menu-items";
import { cn } from "@/lib/utils";
import { useMenuStore } from "@/hook/use-menu-store";
interface MobileToggleProps {
  isScrolled: boolean
  body: React.ReactNode
}
export const MobileToggle = ({
  isScrolled,
  body
}: MobileToggleProps) => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="md:hidden">
          <Menu className={cn(isScrolled ? 'text-black' : 'text-white')}/>
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="p-0 flex gap-0 ">
        <div className="flex flex-col w-full mt-9">
          {body}
        </div>
      </SheetContent>
    </Sheet>
  );
};
