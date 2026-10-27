import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  poweredByHeader: false,
  images: {
    // WebP only: AVIF encodes several seconds per image on first request (slow LCP on cold cache)
    formats: ["image/webp"],
    // High quality for luxury photography (default would be 75)
    qualities: [85],
    // Cap at 2560: larger variants take seconds to generate on a cold cache (LCP)
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2560],
  },
};

export default nextConfig;
