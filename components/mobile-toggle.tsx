import { Menu } from "lucide-react"
import { Sheet,SheetContent, SheetTrigger } from "./ui/sheet"
import { Button } from "./ui/button"
import NavigationInput from "./navigation/navigation-input"

export const MobileToggle = () => {
    return (
        <Sheet>
            <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="md:hidden">
                    <Menu />
                </Button>
            </SheetTrigger>
            <SheetContent side="left" className="p-0 flex gap-0 ">
               <div className="flex flex-row w-full mt-9">
                    <NavigationInput />
               </div>
            </SheetContent>
        </Sheet>
    )
}