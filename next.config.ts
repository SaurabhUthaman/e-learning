import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  images:{
    remotePatterns:[
      {
        protocol:"https",
        hostname:"saurabhuthaman.github.io"
      },
    ]
  },
  basePath: '/e-learning'
  /* config options here */
};

export default nextConfig;
