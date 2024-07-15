import Image from "next/image";

const listMenu = [
  {
    id: 1,
    menuHeader: "Phụ kiện chụp ảnh",
    listChild: [
      {
        name: "Phông nền chụp ảnh",
        url: "/",
      },
      {
        name: "Phông nền chụp ảnh",
        url: "/",
      },
      {
        name: "Phông nền chụp ảnh",
        url: "/",
      },
      {
        name: "Phông nền chụp ảnh",
        url: "/",
      },
    ],
  },
  {
    id: 2,
    menuHeader: "Đồ trang trí",
    listChild: [
      {
        name: "Phông nền chụp ảnh",
        url: "/",
      },
      {
        name: "Phông nền chụp ảnh",
        url: "/",
      },
      {
        name: "Phông nền chụp ảnh",
        url: "/",
      },
      {
        name: "Phông nền chụp ảnh",
        url: "/",
      },
    ],
  },
  {
    id: 3,
    menuHeader: "Blog",
    listChild: [
      {
        name: "Phông nền chụp ảnh",
        url: "/",
      },
      {
        name: "Phông nền chụp ảnh",
        url: "/",
      },
      {
        name: "Phông nền chụp ảnh",
        url: "/",
      },
      {
        name: "Phông nền chụp ảnh",
        url: "/",
      },
    ],
  },
];
interface CategorySection {
  categoryId: string
}
export const CategorySection = ({categoryId}: CategorySection) => {
  return (
    <div className="flex-col hidden md:flex">
      <div className="relative h-40 w-40">
        <div className=" absolute w-full h-full">
          <Image
            src="/images/dashboard_1.png"
            height={500}
            width={500}
            alt="tt"
            className="w-full h-full rounded-full"
          />
        </div>
      </div>
      {listMenu.map((t) => {
        return (
          <div key={t.menuHeader}>
            <p className="font-bold">{t.menuHeader}</p>
            <div className="flex flex-col p-3 ">
              {t.listChild.map((value) => {
                return (
                  <div
                    key={value.name}
                    className="border-gray-700 border-b-2 p-3 cursor-pointer hover:text-amber-800"
                  >
                    <p>{value.name}</p>
                  </div>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
};
