import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  images:{
    unoptimized: true,
    remotePatterns:[
      {
        protocol:"https",
        hostname:"saurabhuthaman.github.io"
      },
      {
        protocol:'https',
        hostname:'e-learning-six-flax.vercel.app'
      }
    ]
  },
  // basePath: '/e-learning',
  // assetPrefix: '/e-learning',
  /* config options here */
};

export default nextConfig;
