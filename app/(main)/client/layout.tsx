"use client";
import "@uploadthing/react/styles.css";
import "../../globals.css";
import NavigationSidebar from "@/components/navigation/navigation-sidebar";
import SideBarHeader from "@/components/sidebar/sidebar-header";
import { FooterBody } from "@/components/footer/footer-body";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";
import { useScrollStore } from "@/hook/use-scroll-store";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [isScrolled, setIsScrolled] = useState(false);
  const { isInMainPage } = useScrollStore();
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
    <div className="flex flex-col">
      <div
        className={cn(
          "fixed z-10 w-full md:h-16 h-28 top-0 left-0 bg-transparent",
          isScrolled && "shadow-xl"
        )}
      >
        <NavigationSidebar isScrolled={!isInMainPage ? true : isScrolled} />
        <SideBarHeader isScrolled={!isInMainPage ? true : isScrolled} />
      </div>

      <div className="flex-1">{children}</div>
      <FooterBody />
    </div>
  );
}
