import NavigationSidebar from "@/components/navigation/navigation-sidebar";
import SideBarHeader from "@/components/sidebar/sidebar-header";

const DashboardLayout = () => {
    return <div className="fixed w-full h-32 top-0 left-0">
        <NavigationSidebar />
        <SideBarHeader />
    </div>
}

export default DashboardLayout;