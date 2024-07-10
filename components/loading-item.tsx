import { Loader2 } from "lucide-react";

export const LoadingItem = () => {
  return (
    <div className="flex flex-col flex-1 justify-center items-center">
      <Loader2 className="h-7 w-7 text-zinc-500 animate-spin my-4" />
    </div>
  );
};
