// In this file, we are going to determine our public and private routes by matching the route URL to a specific pattern

import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

const isProtected = createRouteMatcher(["/user(.*)"]);
export default clerkMiddleware(async (auth, req) => {
  // If the user requests access to a protected route, the auth protection will trigger
  if (isProtected(req)) await auth.protect();
});
// routes to be private and / or public

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
    // Always run for API routes
    "/(api|trpc)(.*)",
  ],
};
