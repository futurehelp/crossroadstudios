import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  poweredByHeader: false,
  cacheComponents: true,
  partialPrefetching: true,
  turbopack: {
    root: process.cwd(),
  },
  async redirects() {
    return [
      { source: "/homepage", destination: "/", permanent: true },
      { source: "/services-1", destination: "/aboutus", permanent: true },
      { source: "/new-page", destination: "/music", permanent: true },
      { source: "/book-now", destination: "/contact", permanent: true },
    ];
  },
};

export default nextConfig;
