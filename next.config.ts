import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/RareAnimals",
  /* config options here */
  typescript: {
    ignoreBuildErrors: true,
  },
  reactStrictMode: false,
  // Disable image optimization for static export
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
