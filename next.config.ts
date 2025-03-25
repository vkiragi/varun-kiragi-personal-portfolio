import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  assetPrefix:
    process.env.NODE_ENV === "production"
      ? "/varun-kiragi-personal-portfolio/"
      : undefined,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
};

export default nextConfig;
