const path = require('path');

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    // For local public/images (no domains needed)
    deviceSizes: [640, 768, 1024, 1280, 1600],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    path: '/_next/image',
    loader: 'default',
  },

  webpack: (config, { webpack }) => {
    config.resolve.alias['@'] = path.resolve(__dirname, './');
    return config;
  },
};


module.exports = nextConfig;
