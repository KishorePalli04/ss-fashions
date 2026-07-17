/** @type {import('next').NextConfig} */

// When building for GitHub Pages the site is served from a project subpath
// (https://<user>.github.io/<repo>/), so it needs a basePath. The deploy
// workflow sets these env vars; local dev and Vercel leave them unset and the
// site is served from the root.
const isGithubPages = process.env.GITHUB_PAGES === "true";
const repoBasePath = process.env.PAGES_BASE_PATH ?? "";

const nextConfig = {
  reactStrictMode: true,
  // Emit a fully static site into ./out — required for GitHub Pages, and
  // still works on Vercel. Drop this line if you later add server features.
  output: "export",
  basePath: isGithubPages ? repoBasePath : "",
  assetPrefix: isGithubPages ? repoBasePath : "",
  // GitHub Pages has no image-optimization server, so serve images as-is.
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
  // Static hosts serve /path as /path/index.html; trailing slashes keep links
  // resolving correctly on GitHub Pages.
  trailingSlash: true,
};

export default nextConfig;
