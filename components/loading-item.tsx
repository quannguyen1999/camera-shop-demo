import { cn } from "@/lib/utils";
import { Loader2 } from "lucide-react";
interface LoadingItemProsp {
  textColorClass?: string
}
export const LoadingItem = ({textColorClass = 'text-zinc-500'}: LoadingItemProsp) => {
  return (
    <div className="flex flex-col flex-1 justify-center items-center">
      <Loader2 className={cn("h-5 w-5 animate-spin my-4", textColorClass)} />
    </div>
  );
};
