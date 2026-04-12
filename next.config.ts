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
};

export default nextConfig;
