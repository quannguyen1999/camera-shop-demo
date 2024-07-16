'use client'
import { redirect, usePathname } from "next/navigation";
import { useEffect } from "react";
import { URL_DASHBOARD, URL_DEFAULT } from "@/constants/url-constant";

const ClientPage = async () => {
  return redirect(URL_DASHBOARD);
};

export default ClientPage;
