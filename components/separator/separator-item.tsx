import { Separator } from "../ui/separator";
interface SeparatorItemProps {
  name: string;
}
export const SeparatorItem = ({ name }: SeparatorItemProps) => {
  return (
    <div className="flex flex-row items-center justify-center">
      <Separator color="red" className="flex-1  bg-gray-400" />
      <div className="px-2">{name}</div>
      <Separator color="red" className="flex-1  bg-gray-400" />
    </div>
  );
};
