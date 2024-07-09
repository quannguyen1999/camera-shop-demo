"use client";
import type { Metadata } from "next";
import { Inter, Roboto } from "next/font/google";
import "./globals.css";
import {
  ClerkProvider,
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";
import NavigationSidebar from "@/components/navigation/navigation-sidebar";
import SideBarHeader from "@/components/sidebar/sidebar-header";
import { FooterBody } from "@/components/footer/footer-body";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";
import { useScrollStore } from "@/hook/use-scroll-store";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400"],
});

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
    <ClerkProvider>
      <html lang="en" className={roboto.className}>
        <body>
          <div className="flex flex-col h-screen">
            <div
              className={cn(
                "fixed z-10 w-full h-24 top-0 left-0 bg-transparent",
                isScrolled && "shadow-xl"
              )}
            >
              <NavigationSidebar
                isScrolled={!isInMainPage ? true : isScrolled}
              />
              <SideBarHeader isScrolled={!isInMainPage ? true : isScrolled} />
            </div>
            <div className="flex-1">{children}</div>
            <FooterBody />
          </div>
        </body>
      </html>
    </ClerkProvider>
  );
}
