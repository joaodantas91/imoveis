/** @type {import('next').NextConfig} */
const path = require('path');

const nextConfig = {
  experimental: {
    appDir: false,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'source.unsplash.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
  sassOptions: {
    includePaths: [path.join(__dirname, 'src')],
    // loadPaths: [path.join(__dirname, 'src')],
    // // Replace '#' with '@'
    // prependData: `
    //   @: "${path.join(__dirname, 'src').replace(/\\/g, '/')}";
    // `,
  }
}

module.exports = nextConfig
