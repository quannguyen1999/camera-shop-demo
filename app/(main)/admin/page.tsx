import { initialProfile } from "@/lib/initial-profile";
import { redirect } from "next/navigation";
import { URL_ADMIN_CATEGORY, URL_DASHBOARD } from "@/constants/url-constant";

const AdminPage = async () => {

  return redirect(URL_ADMIN_CATEGORY);
};

export default AdminPage;
