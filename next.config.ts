import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.pixabay.com',
      },
      {
        protocol: 'https',
        hostname: 'example.com',
      },
      {
        protocol: 'https',
        hostname: 'another-domain.com',
      },
      {
        protocol: 'https',
        hostname: 'cdn.tasteatlas.com',
      },
      {
        protocol: 'https',
        hostname: 'img.tastelife.tv',
      },
      {
        protocol: 'https',
        hostname: 'preppykitchen.com',
      },
      {
        protocol: 'https',
        hostname: 'encrypted-tbn0.gstatic.com',
      },
      






    ],
  },
};

export default nextConfig;
