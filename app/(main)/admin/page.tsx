import { initialProfile } from "@/lib/initial-profile";
import { redirect } from "next/navigation";
import { URL_ADMIN_CATEGORY, URL_DASHBOARD } from "@/constants/url-constant";

const AdminPage = async () => {
  const profile = await initialProfile();
  if(profile.role != 'admin'){
    return redirect(URL_DASHBOARD);
  }
  return redirect(URL_ADMIN_CATEGORY);
};

export default AdminPage;
