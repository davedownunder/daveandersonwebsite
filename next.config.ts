import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      { source: "/events", destination: "/speaking", permanent: true },
      { source: "/events/keynotes", destination: "/speaking", permanent: true },
      { source: "/events/content", destination: "/speaking", permanent: true },
      { source: "/events/video-storytelling", destination: "/media", permanent: true },
      { source: "/speaking/content", destination: "/speaking", permanent: true },
      { source: "/speaking/video", destination: "/media", permanent: true },
    ];
  },
};

export default nextConfig;
