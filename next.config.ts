import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'ghchart.rshah.org' },
      { protocol: 'https', hostname: 'github-readme-streak-stats.herokuapp.com' },
      { protocol: 'https', hostname: 'github-readme-activity-graph.vercel.app' },
      { protocol: 'https', hostname: 'avatars.githubusercontent.com' },
    ],
  },
  turbopack: {}
};

// The `@ducanh2912/next-pwa` plugin is fundamentally incompatible with Next.js 16
// because it relies on internal Webpack files (`bundle5`) that Next.js has removed.
// If you want PWA support in Next.js 16, please consider migrating to `@serwist/next`.

export default nextConfig;
