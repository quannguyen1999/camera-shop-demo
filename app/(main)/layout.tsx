import NavigationSidebar from "@/components/navigation/navigation-sidebar";
import SideBarHeader from "@/components/sidebar/sidebar-header";
import { cn } from "@/lib/utils";
import { Dancing_Script } from 'next/font/google'

const dancingScript = Dancing_Script({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'], // specify the weights you need
  display: 'swap', // optional: controls the font-display value
})

const DashboardLayout = () => {
    return <div  className={cn("fixed w-full h-32 top-0 left-0", dancingScript.className)}>
        <NavigationSidebar />
        <SideBarHeader />
    </div>
}

export default DashboardLayout;