interface MenuItemProps {
  name: string,
  url: string
}
export const MenuItem = ({  name, url }: MenuItemProps) => {
  return (
     <div className="hover:bg-gray-200 hover:text-black   p-6  flex h-5 cursor-pointer text-center items-center justify-center">
        <p>{name}</p>
     </div>
  );
};
