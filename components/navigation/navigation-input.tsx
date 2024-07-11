import { Search } from "lucide-react";
import { Input } from "../ui/input";
interface NavigationInputProps {
  placehodler: string
}
const NavigationInput = ({placehodler}: NavigationInputProps) => {
  return <div className="w-full px-5 relative">
    <Search className="absolute top-2 right-7 h-5 text-muted-foreground cursor-pointer"/>
    <Input className="bg-gray-100 rounded-full focus-visible:ring-0 focus-visible:ring-offset-0 " placeholder={placehodler}/>
  </div>;
};

export default NavigationInput;
