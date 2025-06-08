import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [new URL('https://sjc.microlink.io/**')],
  },
};

export default nextConfig;
