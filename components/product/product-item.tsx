import { Star } from "lucide-react"
import Image from "next/image"

interface ProductItemProps {
    imageUrl: string,
    name: string,
    price: number,
}
export const ProductItem = ({
  imageUrl,
  name,
  price  
}: ProductItemProps) => {
    return <div className="rounded-md flex flex-col">
        <div>
            <Image fill alt="" src={imageUrl} />
        </div>
        <p>{name}</p>
        <div className="flex flex-col">
            <Star />
        </div>
        <div className="flex flex-col">
            {price}
        </div>
    </div>
}