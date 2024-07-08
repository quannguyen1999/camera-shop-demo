'use client'
import { FooterBody } from "@/components/footer/footer-body";
import NavigationSidebar from "@/components/navigation/navigation-sidebar";
import SideBarHeader from "@/components/sidebar/sidebar-header";
import { cn } from "@/lib/utils";
import { Dancing_Script } from "next/font/google";
import { useEffect, useState } from "react";

interface DashboardLayoutProps {
  children: React.ReactNode;
}

const DashboardLayout = ({ children }: DashboardLayoutProps) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 400);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="flex flex-col h-screen">
      <div className={cn("fixed z-10 w-full h-24 top-0 left-0 bg-transparent")}>
        <NavigationSidebar isScrolled={isScrolled}/>
        <SideBarHeader isScrolled={isScrolled}/>
      </div>
      <div className="flex-1">{children}</div>
      <FooterBody />
    </div>
  );
};

export default DashboardLayout;
