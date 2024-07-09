'use client'

import { useRouter } from "next/navigation"

const data = [
    {
        name: 'Quản lý mặt hàng',
        url: '/admin/category'
    },
    {
        name: 'Quản lý sản phẩm',
        url: '/admin/product'
    },
    {
        name: 'Quản lý Order',
        url: '/admin/order'
    }
]
export const MenuSection = () => {
    const rouer = useRouter();
    const redirectToPage = (url: string) => {
        rouer.push(url);
    }
    return <div className="w-60 md:flex flex-col hidden  bg-gray-100 text-black">
        {
            data.map((t)=> (
                <div onClick={()=>redirectToPage(t.url)} className="text-center cursor-pointer p-5 bg-gray-200 text-gray-700 hover:bg-gray-300 transition-all">
                    {t.name}
                </div>
            ))
        }
    </div>
}