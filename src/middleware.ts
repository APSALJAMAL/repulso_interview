import { clerkMiddleware } from "@clerk/nextjs/server";

export default clerkMiddleware();

export const config = {
  matcher: [
    // Apply Clerk middleware to all routes except static assets and Next.js internals
    "/((?!_next/static|_next/image|favicon.ico|.*\\.(?:css|js|json|jpg|jpeg|webp|png|gif|svg|woff2?|ttf|ico)).*)",
    
    // Always run middleware for API and trpc routes
    "/api/:path*",
    "/trpc/:path*",
  ],
};
