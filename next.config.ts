import type { NextConfig } from 'next';

module.exports = {
  async redirects() {
    return [
      // Basic redirect
      {
        source: '/',
        destination: '/search',
        permanent: true,
      },
    ];
  },
};

const nextConfig: NextConfig = {};

export default nextConfig;
