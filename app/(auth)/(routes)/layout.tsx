"use client";
import { useScrollStore } from "@/hook/use-scroll-store";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  const { setIsMainPage } = useScrollStore();
  const pathName = usePathname();

  useEffect(() => {
    if (pathName !== "/") {
      setIsMainPage(false);
    } else {
      setIsMainPage(true);
    }
  }, [pathName]);
  return (
    <div className="h-full flex items-center justify-center pt-40">{children}</div>
  );
};

export default AuthLayout;
