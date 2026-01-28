export default async (request, context) => {
    const url = new URL(request.url);

    // 1. SAFETY CHECK: Skip common asset extensions.
    // Add pdf, zip, etc. to ensure we don't break file downloads.
    if (url.pathname.match(/\.(jpg|jpeg|png|gif|css|js|woff|xml|pdf|zip|docx)$/)) {
        return context.next();
    }

    // 2. CHECK: Does the PATH (not the query) contain an underscore?
    if (url.pathname.includes("_")) {

        // 3. REPLACE: Swap underscores for hyphens ONLY in the path
        const newPath = url.pathname.replace(/_/g, "-");

        // 4. CONSTRUCT: Create the new URL
        const newUrl = new URL(newPath, url.origin);

        // 5. CRITICAL: Copy the "utm_" and other query params to the new URL
        newUrl.search = url.search;

        // 6. REDIRECT: Permanent redirect (301)
        return Response.redirect(newUrl, 301);
    }

    return context.next();
};

export const config = { path: "/*" };
