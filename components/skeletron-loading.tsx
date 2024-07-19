import { Skeleton } from "@/components/ui/skeleton";
import { cn } from "@/lib/utils";

interface SkeletonLoadingProps {
  height: number;
  width: number;
}

export const SkeletonLoading = ({ height, width }: SkeletonLoadingProps) => {
  return (
    <div className="flex items-center">
      <div className="space-y-2 bg-gray-400">
        <Skeleton color="black" className={cn(`h-${height} w-${width}`)}/>
      </div>
    </div>
  );
};
