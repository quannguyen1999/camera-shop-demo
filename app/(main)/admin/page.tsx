import { initialProfile } from "@/lib/initial-profile";
import { redirect } from "next/navigation";
import { URL_ADMIN_CATEGORY } from "@/constants/url-constant";

const AdminPage = async () => {
  await initialProfile();
  return redirect(URL_ADMIN_CATEGORY);
};

export default AdminPage;
