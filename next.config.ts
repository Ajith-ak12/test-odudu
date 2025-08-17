import type { NextConfig } from "next";
import path from "node:path";

// Remove the LOADER reference and turbopack.rules section

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
      {
        protocol: 'http',
        hostname: '**',
      },
    ],
  },
  outputFileTracingRoot: path.resolve(__dirname, '../../'),
  // turbopack config removed
};

export default nextConfig;