import { initialProfile } from "@/lib/initial-profile";
import { db } from "@/lib/db";
import { redirect } from "next/navigation";

const AdminPage = async () => {
  const profile = await initialProfile();
  return redirect(`/admin/category`);
};

export default AdminPage;
