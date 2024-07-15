import { useSession } from "@clerk/nextjs";
import {
  clerkMiddleware,
  createRouteMatcher,
  getAuth,
  redirectToSignIn,
} from "@clerk/nextjs/server";
import { NextRequest, NextResponse } from "next/server";
const isPrivateRoute = createRouteMatcher(["/admin(.*)"]);

export default clerkMiddleware(async (auth, req) => {
  if (isPrivateRoute(req)) {
    auth().protect(); // Protect the route if it matches the defined criteria
  }
});

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};
