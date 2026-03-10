export default async (request, context) => {
    const url = new URL(request.url);

    // 1. SAFETY CHECK: Ignore Netlify internal routing
    if (url.pathname.startsWith('/.netlify/')) {
        return context.next();
    }

    // 2. SAFETY CHECK: Skip common asset extensions.
    // Added 'i' flag for case-insensitivity (.JPG) and included .webp, .svg, .json, etc.
    if (url.pathname.match(/\.(jpg|jpeg|png|gif|webp|svg|css|js|woff|woff2|xml|json|pdf|zip|docx)$/i)) {
        return context.next();
    }

    // 3. CHECK: Does the PATH (not the query) contain an underscore?
    if (url.pathname.includes("_")) {

        // 4. REPLACE: Swap underscores for hyphens ONLY in the path
        const newPath = url.pathname.replace(/_/g, "-");

        // 5. CONSTRUCT: Create the new URL
        const newUrl = new URL(newPath, url.origin);

        // 6. CRITICAL: Copy the "utm_" and other query params to the new URL
        newUrl.search = url.search;

        // 7. REDIRECT: Permanent redirect (301)
        return Response.redirect(newUrl, 301);
    }

    return context.next();
};

export const config = { path: "/*" };
