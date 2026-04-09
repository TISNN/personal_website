const { PHASE_DEVELOPMENT_SERVER } = require('next/constants');

/** @type {import('next').NextConfig} */
const nextConfig = (phase) => ({
  output: 'export',
  // Keep dev/build artifacts isolated to prevent stale chunk resolution errors.
  distDir: phase === PHASE_DEVELOPMENT_SERVER ? '.next-dev' : '.next',
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
});

module.exports = nextConfig;
