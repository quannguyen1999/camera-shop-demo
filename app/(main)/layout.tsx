import NavigationSidebar from "@/components/navigation/navigation-sidebar";
import SideBarHeader from "@/components/sidebar/sidebar-header";
import { cn } from "@/lib/utils";
import { Dancing_Script } from "next/font/google";

const dancingScript = Dancing_Script({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"], // specify the weights you need
  display: "swap", // optional: controls the font-display value
});

interface DashboardLayoutProps {
  children: React.ReactNode;
}

const DashboardLayout = ({ children }: DashboardLayoutProps) => {
  return (
    <div className="flex flex-col h-screen">
      <div
        className={cn(
          "fixed z-10 w-full h-24 top-0 left-0 bg-white",
          dancingScript.className
        )}
      >
        <NavigationSidebar />
        <SideBarHeader />
      </div>
      <div className="flex-1 mt-24">{children}</div>
    </div>
  );
};

export default DashboardLayout;
