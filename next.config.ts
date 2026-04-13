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

import withPWAInit from "@ducanh2912/next-pwa";

const withPWA = withPWAInit({
  dest: "public",
  disable: process.env.NODE_ENV === "development", // Disabled in dev so it doesn't cache local files
  register: true,
});

export default withPWA(nextConfig);
