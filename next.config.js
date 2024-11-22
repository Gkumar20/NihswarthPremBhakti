/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
    turbo: {},
  },
  productionBrowserSourceMaps: true, 
  webpack(config) {
    config.devtool = 'source-map'; 
    return config;
  },
  images: {
    domains: ['upload.wikimedia.org'],
  },
}

module.exports = nextConfig
