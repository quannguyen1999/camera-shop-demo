import { cn } from "@/lib/utils";
import Image from "next/image";
import { useRouter } from "next/navigation";

interface CategoryShadowProps {
  imageUrl: string;
  content: React.ReactNode;
}

export const CategoryShadow = ({ imageUrl, content }: CategoryShadowProps) => {
  const router = useRouter();
  
  const redirectPageToCategory = () => {
    router.push(`/category/${content}`);
  }

  return (
    <div className="relative bg-black h-52 flex flex-1">
      <Image src={imageUrl} width={600} height={600} alt="hehe" className="w-screen "/>
      <div onClick={() => redirectPageToCategory()} className="flex shadow-2xl text-center items-center justify-center absolute w-full h-full bg-black bg-opacity-40 hover:bg-opacity-20 transition-all cursor-pointer"> 
        <p className="flex-1 text-white text-lg">{content}</p>
      </div>
  </div>
  
  );
};
