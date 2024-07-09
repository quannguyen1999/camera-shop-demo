import { MenuSection } from "@/components/admin/menu/menu-section"

export const AdminLayout = ({ children }: { children: React.ReactNode }) => {
    return <div className="flex flex-row h-full w-full  mt-48">
        <MenuSection />
        <div className="flex-1">
            {children}
        </div>
    </div>
}

export default AdminLayout;