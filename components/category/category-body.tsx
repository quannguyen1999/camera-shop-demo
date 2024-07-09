import { CategoryShadow } from "./category-shadow";

const dataCategoryFake = [
  {
    imageUrl:"/images/dashboard_1.PNG",
    content: "XX",
  },
  {
    imageUrl:"/images/dashboard_1.PNG",
    content: "XX",
  },
  {
    imageUrl:"/images/dashboard_1.PNG",
    content: "XX",
  },
  {
    imageUrl:"/images/dashboard_1.PNG",
    content: "XX",
  },
  {
    imageUrl:"/images/dashboard_1.PNG",
    content: "XX",
  },
  {
    imageUrl:"/images/dashboard_1.PNG",
    content: "XX",
  },
  {
    imageUrl:"/images/dashboard_1.PNG",
    content: "XX",
  },
  {
    imageUrl:"/images/dashboard_1.PNG",
    content: "XX",
  },
  {
    imageUrl:"/images/dashboard_1.PNG",
    content: "XX",
  },
  {
    imageUrl:"/images/dashboard_1.PNG",
    content: "XX",
  },
  {
    imageUrl:"/images/dashboard_1.PNG",
    content: "XX",
  },
  {
    imageUrl:"/images/dashboard_1.PNG",
    content: "XX",
  },
  {
    imageUrl:"/images/dashboard_1.PNG",
    content: "XX",
  },
  {
    imageUrl:"/images/dashboard_1.PNG",
    content: "XX",
  },
];
export const CategoryBody = () => {
  return (
    <div className="grid grid-cols-2  md:grid-cols-5 gap-2  row-span-3 px-2 md:px-20">
      {dataCategoryFake.map((t, index) => (
        <CategoryShadow
          key={index}
          imageUrl={t.imageUrl}
          content={t.content}
        />
      ))}
    </div>
  );
};
