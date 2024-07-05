import { ProductItem } from "./product-item"

const dataProductFake = [
    {
        imageUrl: './product.svg',
        name: 'camera vip',
        price: 650000,
    },
    {
        imageUrl: './product.svg',
        name: 'camera vip',
        price: 650000,
    },
    {
        imageUrl: './product.svg',
        name: 'camera vip',
        price: 650000,
    },
    {
        imageUrl: './product.svg',
        name: 'camera vip',
        price: 650000,
    },
    {
        imageUrl: './product.svg',
        name: 'camera vip',
        price: 650000,
    },
    {
        imageUrl: './product.svg',
        name: 'camera vip',
        price: 650000,
    },
    {
        imageUrl: './product.svg',
        name: 'camera vip',
        price: 650000,
    }
]
export const ProductBody = () => {
    return <div className="grid grid-cols-2  md:grid-cols-4  row-span-3 gap-3 px-2 md:px-20">
        {
            dataProductFake.map((t, index)=>(
                <ProductItem key={index} imageUrl={t.imageUrl} name={t.name} price={t.price}/>
            ))
        }
        
    </div>
}