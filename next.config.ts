import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      { source: "/events", destination: "/speaking", permanent: true },
      { source: "/events/keynotes", destination: "/speaking", permanent: true },
      { source: "/events/content", destination: "/speaking/content", permanent: true },
      { source: "/events/video-storytelling", destination: "/speaking/video", permanent: true },
    ];
  },
};

export default nextConfig;
