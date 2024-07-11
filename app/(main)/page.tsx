'use client'
import { redirect, usePathname } from "next/navigation";
import { useEffect } from "react";
import { URL_DASHBOARD, URL_DEFAULT } from "@/constants/url-constant";

const ClientPage = async () => {
  const pathName = usePathname();
  useEffect(() => {
    if (pathName == URL_DEFAULT) {
      return redirect(URL_DASHBOARD);
    }
  }, [pathName]);
};

export default ClientPage;
